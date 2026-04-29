import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConversionController } from './conversion.controller';
import { ConversionService } from './conversion.service';

@Module({
  imports: [HttpModule],
  controllers: [ConversionController],
  providers: [ConversionService],
})
export class ConversionModule {}
