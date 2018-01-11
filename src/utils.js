'use strict';

import { BEMQuery as BEMQuery } from 'bemquery-core';
import Batch from './batch';

BEMQuery.prototype.read = function() {
	if ( !this.batch ) {
		this.batch = new Batch();
	}

	return this.batch.run( 'read' );
};

BEMQuery.prototype.write = function() {
	if ( !this.batch ) {
		this.batch = new Batch();
	}

	return this.batch.run( 'write' );
};