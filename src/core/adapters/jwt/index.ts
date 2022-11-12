import { ENVIRONMENT } from 'core/utils/environment';
import JWT, { Algorithm } from 'jsonwebtoken';

export class Jwt {
  constructor(private SECRET_KEY: string, private algorithm: Algorithm = 'HS256') {}

  encode(payload: object): string {
    return JWT.sign(payload, this.SECRET_KEY, { algorithm: this.algorithm });
  }

  decode<Response>(hash: string): Response {
    return JWT.verify(hash, this.SECRET_KEY) as Response;
  }

  static create() {
    return new Jwt(ENVIRONMENT.SECRET_KEY as string)
  }
}

export const jwt = Jwt.create()