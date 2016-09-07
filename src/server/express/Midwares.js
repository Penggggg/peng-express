/**
 *  BodyParser
 *  parse the query in req.query
 *  parse the path in req.path
 *  parse the params in req.params
 *  parse the cookies in req.cookies
 */
export const BodyParser = ( ) => ( req, res, routes )=> {

    let __hasQuery__ = /\?/g.test( req.url );
    let _url = req.url;

    // init
    req.query = { };
    req.params = { };

    // 0. parse the cookies


    // 1. parse the path and query
     if ( ! __hasQuery__ ) {
        req.path = _url;
     }

     // 2. parse the path and query
     if( __hasQuery__ ) {
          let _uurl = _url.split('?');
          req.path = _uurl[0];
          _uurl[1].split('&').map( ( query ) => {
              let _q = query.split('=');
              req.query[ _q[0] ] = _q[1];
          });
     }

     // 3. parse the params
     routes.map((route) => {
          let _deep = req.path.match(/\//g).length;
          let _paralength = route.params.length;

          if ( _deep > 1 && _paralength > 0 ) {
              if ( req.path.indexOf( route.route ) === 0 ) {
                  let _a = req.path.slice( route.route.length );
                  if( _a.indexOf('/') === 0 ) {
                      let _b = _a.split('/');
                      route.params.map((param, index) => {
                          req.params[param] = _b[ index + 1 ];
                      });
                  }
              }
          }

     });
     console.log(req.path);


};
