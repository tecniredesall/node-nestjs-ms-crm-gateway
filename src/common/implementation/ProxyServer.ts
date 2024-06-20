import * as httpProxy    from 'http-proxy';
import IProxyServer from "../interfaces/IProxyServer";
import * as passport     from 'passport';

export abstract class ProxyServer implements IProxyServer {
  server;
  target;
  url;
  proxy = httpProxy.createProxyServer({});
  debug;
  guard;

  protected constructor(target: string, url: string, debug: boolean, guard: boolean){
    this.target = target;
    this.url = url;
    this.debug = debug;
    this.guard = guard;
  }

  startProxyServer() {
    let aclFunction = (req, res, next) => { return next()}
    if(this.guard)
      aclFunction = passport.authenticate('jwt', {session: false});

    this.server.all(`${this.url}/*`, aclFunction, (request, response) => {
      if(this.debug){
        console.log('Original url: ', request.url);
        console.log('Path to replace: ', request.route.path);
      }
      const path  = request.route.path.replace('*', '');
      request.url = request.url.replace(new RegExp(path), '');
      if(this.debug)
        console.log('Target url', this.target + request.url);

      this.proxy.web(request, response, {
        changeOrigin: true,
        target: this.target
      });

    });
  }

}
