/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class authguard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  async  canActivate(context: ExecutionContext){
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1] ;
    if(!token){
        throw new UnauthorizedException('No token provided');
    }
    try{
        const payload = await this.jwtService.verifyAsync(token);
        request.user = payload;
        return true;
    }
    catch{
        throw new UnauthorizedException('Invalid token');
    }
}
}
