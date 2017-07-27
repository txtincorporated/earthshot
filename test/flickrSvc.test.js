const chai = require( 'chai' ),
  assert = chai.assert,
  expect = chai.expect,
  Flickr = require( 'flickrapi' ),
  env = require( 'dotenv' ),
  app = require( '../lib/app' );

describe('test 3d party API interface', () => {
  let flickrRes;
  let yesterDate = (Date.now() - 86400000)/1000 | 0;

  before(done => {
    const flickrOptions = {
      api_key: 'env.TESTING_KEY',
      api_secret: 'env.TESTING_SECRET'

    };

    Flickr.tokenOnly(flickrOptions, (error, flickr) => {
      flickr.photos.search({
        tags: 'architecture,landscape',
        min_upload_date: yesterDate,
        sort: 'date-posted-asc',
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
        // console.log( flickrRes );
        done();

      });
    });
  }); 

  it('returns only photos posted since `min_upload_date`', done => {
    expect(flickrRes.photo.dateupload).to.not.be.below(yesterDate);
    done();
  });
  it('returns no photos without requested tags', () => {});
  it('returns no photos w/o lat and lon', () => {});
  it('returns only photos w/ {safe_search: "1"}', () => {});
  it('returns no photos w/o photos.farm, photos.server, photos.secret', () => {});

});


