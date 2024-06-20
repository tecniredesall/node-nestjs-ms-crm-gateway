import {Injectable}      from '@nestjs/common';
import { ProxyServer } from "../common/implementation/ProxyServer";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class OrganizationService extends ProxyServer {
  constructor(private readonly adapterHost: HttpAdapterHost) {
    super(process.env['API_ORGANIZATIONS'], process.env['REWRITE_ORGANIZATIONS'], true, true);
    this.server = adapterHost.httpAdapter.getInstance();
    this.startProxyServer();
  }
}

