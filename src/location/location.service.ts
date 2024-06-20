import {Injectable} from '@nestjs/common';
import { ProxyServer } from "../common/implementation/ProxyServer";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class LocationService extends ProxyServer {
  constructor(private readonly adapterHost: HttpAdapterHost) {
    super(process.env['API_LOCATIONS'], process.env['REWRITE_LOCATIONS'], true, true);
    this.server = adapterHost.httpAdapter.getInstance();
    this.startProxyServer();
  }
}
