import {Injectable}      from '@nestjs/common';
import { ProxyServer } from "../common/implementation/ProxyServer";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class AuthService extends ProxyServer {
  constructor(private readonly adapterHost: HttpAdapterHost) {
    super(process.env['API_AUTH'], process.env['REWRITE_AUTH'], true, false);
    this.server = adapterHost.httpAdapter.getInstance();
    this.startProxyServer();
  }
}

