import {Injectable}      from '@nestjs/common';
import { ProxyServer } from "../common/implementation/ProxyServer";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class PersonService extends ProxyServer {
  constructor(private readonly adapterHost: HttpAdapterHost) {
    super(process.env['API_PEOPLE'], process.env['REWRITE_PEOPLE'], true, true);
    this.server = adapterHost.httpAdapter.getInstance();
    this.startProxyServer();
  }
}

