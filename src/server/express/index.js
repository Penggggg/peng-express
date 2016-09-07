import Http from './Http';

let express ;
export default express = ( ) => {
    return new App();
};

class App {
    constructor ( ) {
        this._http = new Http();
    }

    _init ( ) {

    }

    listen ( domain, port, opt ) {
        process.nextTick(() => {
            this._http.listen.apply( this._http, arguments );
        });
        

    }

    get ( pathname, callback ) {
        this._http.addRoute( pathname, callback, 'GET' );
    }

    post ( pathname, callback ) {

    }

    use ( midware ) {
        this._http.addMidware( midware );
    }


}
