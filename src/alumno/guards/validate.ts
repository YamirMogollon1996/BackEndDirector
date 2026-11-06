import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import jwt from 'jsonwebtoken';


@Injectable()
export class ValidateGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
        const req = context.switchToHttp().getRequest<Request>();
        const authorization = req.headers.authorization;
        const [scheme, token] = authorization?.split(' ') ?? [];
        if (scheme !== 'Bearer' || !token) {
            throw new UnauthorizedException('Falta el token Bearer');
        }
        const secret = process.env.SECRET_TOKEN;
        if (!secret) {
            throw new UnauthorizedException('No está configurado el secreto del token');
        }
        try {
            jwt.verify(token, secret);
            return true;
        } catch {
            throw new UnauthorizedException('Token inválido o expirado');
        }

	}

}

