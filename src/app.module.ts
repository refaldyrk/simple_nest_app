import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import cache from "node-cache";
import {CacheService} from "./cache.service";

@Module({
  controllers: [AppController],
  providers: [AppService, CacheService],
})
export class AppModule {}
