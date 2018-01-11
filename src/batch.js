'use strict';

class Batch {

	constructor() {
		this.read = [];
		this.write = [];
	}

	add( type, fn ) {

		if ( type !== 'read' && type !== 'write' ) {
			throw new TypeError( 'Type must be either \'read\' or \'write\'.' );
		}

		if ( typeof fn !== 'function' ) {
			throw new TypeError( 'Task must be a function.' );
		}

		this[ type ].push( fn );
	}

	run( type = 'read' ) {
		if ( type !== 'read' && type !== 'write' ) {
			throw new TypeError( 'Type must be either \'read\' or \'write\'.' );
		}

		return new Promise( ( resolve ) => {
			requestAnimationFrame( () => {
				const results = [];

				this[ type ].forEach( ( fn ) => {
					results.push( fn() );
				} );

				this[ type ] = [];

				return resolve( results );
			} );
		} );
	}
}

export default Batch;