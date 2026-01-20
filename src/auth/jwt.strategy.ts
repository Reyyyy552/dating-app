import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Ambil token dari Header
      ignoreExpiration: false, // Tolak kalau token kadaluwarsa
      secretOrKey: 'RAHASIA_NEGARA', // Kunci rahasia (harus sama dengan AuthModule)
    });
  }

  async validate(payload: any) {
    // Kalau token valid, data user ini akan ditempel ke request
    return { userId: payload.sub, email: payload.email };
  }
}