import {Controller, Get, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Request, Response} from "express";
import {CacheService} from "./cache.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly cacheService: CacheService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    res.json({"message": this.appService.getHello()}).status(200);
    return
  }

  @Get("short")
  createShort(@Req() req: Request, @Res() res: Response) {
    let random = this.appService.random().toString()
    this.cacheService.set(random, req.query.short, 100000);
    res.json({"message": "OK", "id": random}).status(200);
    return
  }

  @Get("/see/:id")
  get(@Req() req: Request, @Res() res: Response) {
    if (!this.cacheService.get(req.params.id)) {
      res.json({"message": "Not found"}).status(404);
      return
    }

    res.redirect(this.cacheService.get(req.params.id))
    return
  }
}
