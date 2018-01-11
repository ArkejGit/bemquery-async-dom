/* global chai */

'use strict';

import Batch from '../src/batch';

const expect = chai.expect;

describe( 'Batch#add', () => {
	it( 'is a method', () => {
		const batch = new Batch();

		expect( batch.add ).to.be.a( 'funciton' );
	} );

	it( 'requires \'read\' or \'write\' as a 1. parameter', () => {
		const batch = new Batch();

		expect( () => {
			batch.add( 'tutiturumtu', null );
		} ).to.throw( TypeError, 'Type must be either \'read\' or \'write\'' );
	} );

	it( 'requires function as a 2. parameter', () => {
		cosnt batch = new Batch();

		expect( () => {
			batch.add( 'read', 1 );
		} ).to.throw( TypeError, 'Task must be a function' );
	} );

	it ( 'runs tasks from batch only with specified type', () => {
		const batch = new Batch();

		batch.add( 'read', () => {
			return 1;
		} );

		batch.add( 'write', () => {} );

		return batch.run( 'write' ).then( () => {
			expect( batch.write ).to.have.lengthOf( 0 );
			expect( batch.read ).to.have.lengthOf( 1 );
		} );
	} );
} );