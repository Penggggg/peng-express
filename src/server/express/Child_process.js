import child_process from 'child_process';

export default class ChildProcess {
    constructor () {

    }

    exec ( filepath, arg, cb ) {
        try {
            let work_process = child_process.exec( `node ../${arguments[0]} ${arguments[1]}`, ( err, stdout, stderr ) => {
                if ( err ) {
                    throw err;
                }
                cb ( err, stdout, stderr );
            });
        } catch (e) {
            console.log(e);
        }
    }


}
