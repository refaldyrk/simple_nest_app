
import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class CacheService {
    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache();
    }

    set(key: string, value: any, ttlSeconds?: number): void {
        this.cache.set(key, value, ttlSeconds);
    }

    get(key: string): any {
        return this.cache.get(key);
    }

    del(key: string): void {
        this.cache.del(key);
    }
}
