# Earthshot
Photo sharing for travelers and adventurists


## Introduction
Earthshot is an app for anyone interested in creating or sharing a photographic record of a particular place.  Photographers may find it interesting but are not necessarily the primary user group.  Earthsot is an app for people seeking to find out what a place looks like with better image quality and aesthetics than the usual map app street view imagery provides, from the viewpoint of other actual users who have photographed it -- or for anyone willing to share their photographic record of the places they have been.  

Earthshot is not primarily a social app, though it obviously has a strong social component, and is not necessarily directed toward users and their pre-existing social networks so much as communities of users who share interest in various places on the earth.

## Development
Earthshot has two major components which will be developed successively:
  1. First, Earthshot will select user photos from the Flickr API and present them in a map view using the geolocation data associated with the photo on Flickr.  Photos will be searchable and can be arranged by users into collections of their own that can then be shared with other users, but only a small subset of Flickr photos will be shown in Earthshot, and users will not be immediately able to post, tag or comment on photos in Flickr.
  1. Next, federation authentication will allow users to authenticate directly to Flickr and post their own geo-tagged photos for sharing in Earthshot via the Flickr API's user-authenticated services, as well as tagging and commenting on their own and other Earthshot and Flickr users' posts via the app.  These photos will show up in both Earthshot and Flickr, but again only photos with geolocation data will be accepted, and only ones relevant to the Earthshot community will be pulled back in from Flickr.

### USER STORIES
- *As a traveller/adventurer,* I want to be able to see what photo resources are available for a given area or feature on the map anywhere in the world.  
- *As a geo-documentarian,* I want to be able to share my photos in a way that literally maps them to the places they depict.  
- *As a photographer generally,* I want to be able to share my photos in a conventional online collection format with gallery-thumbnail, reference and full-size views.  
- *As a photo-essayist,* I want the option to display a title and short descriptive post for each image.
- *As a member of various outdoor, travel and photo communities,* I want to be able to tag and comment interactively on my own and others' photos, and to curate both my own and others' work in collections.  
- *As a site user generally,* I want to be able to move fluidly between map-based and gallery-based views.  
- *As the developer,* I want to create a platform that implicitly keeps content on topic and is minimally conducive to self-publicizing or over-commercialized uses while remaining adaptible to users' motivations and interests.  

### "SHOULDS"
#### Phase I (back end):
  - It should database a narrow subset of public Flickr photos that document specific geolocations for quick loading when users open the app.
  - It should store Flickr's author, license, id, secret, storage path, title, tag and location info for each photo.
  - It should lazily self-update when users request a given photo.
  - It should handle errors in an orderly way without disrupting the user's experience. 