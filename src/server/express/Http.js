import http from 'http';
import cluster from 'cluster';
import os from 'os';
import child_process from 'child_process';
import { matchReqRoute } from './Utils';

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
            let _params = [ ];
            let __hasParams__ = /\:/.test( route );
            if ( typeof arguments[0] !== 'string' || typeof arguments[1] !== 'function') {
                console.log(`TypeError: Http _addRoute`);
                throw "TypeError: Http _addRoute";
             }else {
                if ( __hasParams__ ) {
                    let _f = route.split(':');
                    route = _f[0].slice( 0, route.length - 1 );
                    for ( let i = 1; i < _f.length; i++ ) {
                        if ( i === _f.length - 1 ) {
                              _params.push( _f[i] );
                        } else {
                            _params.push( _f[i].substring(0, _f[i].length-1 ));
                        }
                    }
                }
                this.routes.push({
                    route: __hasParams__ ? route.split(':')[0].substring( 0, route.length - 1 ) : route,
                    cb: cb,
                    method: method,
                    params:  _params
                });
            }
        }catch ( e ) {
            console.log(e);
        }
    }

    listen ( domain, port, opt ) {
        switch ( opt.type ) {
            case 'http':
                this._makeHttpServer.apply( this, arguments );
                break;
            default:
                break;
        }
    }

    _makeHttpServer ( domain, port, opt ) {
        try{
          
            http.createServer((req, res) => {
                   // 1. run the midwares
                   this._runMidwares( this.midwares, req, res )();
                   // 2. switch routes and method
                   this._matchRoute( this.routes, req, res )();
            }).listen( Number(port), domain);
             console.log(`server is listening in ${domain}: ${port}`);

        } catch (e) {
            console.log(`create server error`);
        }
    }


    _runMidwares ( midwares, req, res ) {
        return ( ) => {
            midwares.map((midware) => {
                midware( req, res, this.routes );
            });
        };
    }

    _matchRoute ( routes, req, res ) {
        return ( ) => {
            routes.map((route) => {
                if ( matchReqRoute( route, req.path )) {
                    route.cb( req, res ); return ;
                }
            });
        };
    }

}
