const chai = require( 'chai' ),
  chaiHttp = require( 'chai-http' )
  assert = chai.assert,
  Flickr = require( 'flickrapi' ),
  env = require( 'dotenv' ),
  app = require( '../lib/app' );

describe('test 3d party API interface', () => {
  before(done => {
    const flickrOptions = {
      api_key: 'env.TESTING_KEY',
      api_secret: 'env.TESTING_SECRET'

    };

    let flickrRes;

    Flickr.tokenOnly(flickrOptions, (error, flickr) => {
      flickr.photos.search({
        tags: 'architecture,landscape',
        min_upload_date: '',
        safe_search: '1',
        content_type: '1',
        media: 'photos',
        has_geo: '1',
        extras: 'date_upload, owner_name, geo, tags, url_s, url_z, url_o',
        per_page: '250',
        format: 'json',
        nojsoncallback: '1'
      }, (err, result) => {
        if (err) { throw new Error(err); }
        flickrRes = result.photos;
        console.log( flickrRes );

      });
    });
  }); 

  const request = chai.request( app );

  it('returns only photos posted since `max-upload-date`', () => {});
  it('returns no photos without requested tags', () => {});
  it('returns no photos w/o lat and lon', () => {});
  it('returns only photos w/ {safe_search: "1"}', () => {});
  it('returns no photos w/o photos.farm, photos.server, photos.secret', () => {});

});


