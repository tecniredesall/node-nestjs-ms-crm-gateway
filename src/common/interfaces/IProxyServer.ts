import { Express } from "express";

export default interface IProxyServer{
  server: Express;
  target: string;
  url: string;
  proxy: any;
  startProxyServer(): void;
}
