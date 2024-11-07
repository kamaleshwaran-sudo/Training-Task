import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Todoservice } from './app.service'; // Corrected import: Ensure it matches the class name

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Todoservice], // Ensure the service name matches
})
export class AppModule {}
