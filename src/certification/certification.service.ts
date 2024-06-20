import {Injectable}      from '@nestjs/common';
import { ProxyServer } from "../common/implementation/ProxyServer";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class CertificationService extends ProxyServer {
  constructor(private readonly adapterHost: HttpAdapterHost) {
    super(process.env['API_CERTIFICATIONS'], process.env['REWRITE_CERTIFICATIONS'], true, true);
    this.server = adapterHost.httpAdapter.getInstance();
    this.startProxyServer();
  }
}

