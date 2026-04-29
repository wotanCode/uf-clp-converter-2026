import { IsIn, IsNumber, IsPositive } from 'class-validator';

export class ConvertDto {
  @IsNumber()
  @IsPositive({ message: 'El monto debe ser un número positivo' })
  amount: number;

  @IsIn(['uf', 'clp'], { message: "Los valores válidos son 'uf' y 'clp'" })
  from: string;

  @IsIn(['uf', 'clp'], { message: "Los valores válidos son 'uf' y 'clp'" })
  to: string;
}
