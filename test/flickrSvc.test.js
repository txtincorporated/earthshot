const chai = require( 'chai' ),
  chaiHttp = require( 'chai-http' )
  assert = chai.assert,
  connection = require( '../lib/setup-mongoose' ),
  app = require( '../lib/app' );

describe('test 3d party API interface', () => {
  before(done => {
    const drop = () => connection.db.dropDatabase( done );
    if(connection.readyState === 1) drop( done );
    else connection.on( 'open', drop ); 
  }); 

  const request = chai.request( app );

  it('returns only photos posted since `max-upload-date`');


});


