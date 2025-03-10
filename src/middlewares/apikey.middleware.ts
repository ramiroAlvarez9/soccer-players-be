import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  private readonly validApiKey = process.env.API_KEY;

  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];

    if (apiKey && apiKey === this.validApiKey) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
