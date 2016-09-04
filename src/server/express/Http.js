import http from 'http';
import { Observable } from 'rxjs/Observable';

export default class Http {

    constructor ( ) {
        this.routes = [];
        this.midwares = [];
    }

    addMidware ( midware ) {
        try {
            if ( typeof midware !== 'function' ) {
                throw "TypeError: Http addMidware";
            } else {
                this.midwares.push( midware );
            }
        } catch (e) {
            console.log(e);
        }
    }

    addRoute ( route, cb, method ) {
        try {
            if ( typeof arguments[0] !== 'string' || typeof arguments[1] !== 'function') {
                console.log(`TypeError: Http _addRoute`);
                throw "TypeError: Http _addRoute";
            }else {
                this.routes.push({
                    route: route,
                    cb: cb,
                    method: method
                });
            }
        }catch ( e ) {
            console.log(e);
        }
    }

    listen ( domain, port ) {
        try{
            http.createServer((req, res) => {
                // 1. run the midwares
                this.midwares.map((midware) => {
                    midware( req, res );
                });
                // 2. switch routes and method
                this.routes.map((route) => {
                    if( route.route === req.url && route.method === req.method ) {
                        route.cb( req, res ); return ;
                    }
                });
            }).listen( Number(port), domain );
            console.log(`server is listening in ${domain}: ${port}`);

        } catch (e) {
            console.log(`create server error`);console.log(e);
        }
    }

}
