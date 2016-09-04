import Http from './Http';
import ChildProcess from './Child_process';

let express ;
export default express = ( ) => {
    return new App();
};

class App {
    constructor ( ) {
        this._http = new Http();
        this.child_process = new ChildProcess();
    }

    _init ( ) {

    }

    listen ( domain, port ) {
        this._http.listen.apply( this._http, arguments );
    }

    get ( pathname, callback ) {
        this._http.addRoute( pathname, callback, 'GET' );
    }

    post ( pathname, callback ) {

    }

    use ( midware ) {
        this._http.addMidware( midware );
    }

    node ( filename, args, cb ) {
        this.child_process.exec.apply( this.child_process, arguments );
    }

}
