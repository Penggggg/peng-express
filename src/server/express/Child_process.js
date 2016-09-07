import child_process from 'child_process';
import os from 'os';

export default class ChildProcess {
    constructor () {

    }

    mulProcess ( exceptCpus ) {
        let _cpus =  os.cpus();

        _cpus.map(( cpu ) => {
            child_process.fork( '../../static/sayhello.js' );
        });

    }
}
