import { Body, Controller, Post } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { ConvertDto } from './dto/convert.dto';

@Controller('conversion')
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  @Post('convert')
  convert(@Body() dto: ConvertDto) {
    return this.conversionService.convert(dto);
  }
}
