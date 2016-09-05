export const matchReqRoute = ( route, path ) => {

    let _deep = path.match(/\//g).length;
    let _paralength = route.params.length;

    if ( _deep === 1 ) {
        return path === route.route ? true : false ;
    } else if ( _deep >= 2 ) {
        if ( _paralength === 0 ) {
            return path === route.route ? true : false ;
        } else {
            // 1. 存在 2. 强等 3. 参数个数符合
            if ( path.indexOf( route.route ) === 0 ) {
                  let _a = path.slice( route.route.length );
                  if( _a.indexOf('/') === 0 && (_a.split('/').length -1 ) === _paralength ) {
                      return true;
                  }
            }
        }
    }

};
