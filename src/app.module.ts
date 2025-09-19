import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstagramService } from './instagram/instagram.service';
import { InstagramController } from './instagram/instagram.controller';

@Module({
  imports: [],
  controllers: [AppController, InstagramController],
  providers: [AppService, InstagramService],
})
export class AppModule {}
