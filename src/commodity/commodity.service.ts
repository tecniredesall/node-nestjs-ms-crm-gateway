import {Injectable}      from '@nestjs/common';
import { ProxyServer } from "../common/implementation/ProxyServer";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class CommodityService extends ProxyServer {
  constructor(private readonly adapterHost: HttpAdapterHost) {
    super(process.env['API_COMMODITIES'], process.env['REWRITE_COMMODITIES'], true, true);
    this.server = adapterHost.httpAdapter.getInstance();
    this.startProxyServer();
  }
}

