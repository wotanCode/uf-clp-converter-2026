import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConvertDto } from './dto/convert.dto';
import { type MindicadorResponse } from './interfaces';

@Injectable()
export class ConversionService {
  private readonly logger = new Logger(ConversionService.name);

  constructor(private readonly httpService: HttpService) {}

  async convert(dto: ConvertDto) {
    if (dto.from === dto.to) {
      throw new BadRequestException(
        'Las monedas de origen y destino deben ser diferentes',
      );
    }

    const { value: ufValue, date: ufDate } = await this.getUfData();

    let result: number;
    if (dto.from === 'uf' && dto.to === 'clp') {
      result = dto.amount * ufValue;
    } else {
      result = dto.amount / ufValue;
    }

    return {
      amount: dto.amount,
      from: dto.from,
      to: dto.to,
      result: Math.round(result * 100) / 100,
      ufValue,
      date: ufDate,
    };
  }

  private async getUfData(): Promise<{ value: number; date: string }> {
    try {
      const { data }: { data: MindicadorResponse } = await firstValueFrom(
        this.httpService.get('https://mindicador.cl/api'),
      );

      if (!data?.uf?.valor || !data?.uf?.fecha) {
        throw new Error('Respuesta sin datos de UF');
      }

      const ufValue = data.uf.valor;

      // Convertimos la fecha de la API a formato YYYY-MM-DD en zona Chile
      const ufDate = new Date(data.uf.fecha).toLocaleDateString('en-CA', {
        timeZone: 'America/Santiago',
      });

      return {
        value: ufValue,
        date: ufDate,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error('Error al obtener valor UF', errorMessage);
      throw new InternalServerErrorException(
        'No se pudo procesar la conversión. Intente más tarde.',
      );
    }
  }
}
