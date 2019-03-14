$(document).ready(function(){
var userFeed = new Instafeed({
        get: 'user',
        userId: '11679627829',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '11679627829.1677ed0.0160f409595a4afa86e62c787a533ba0',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 col-md-12gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();

    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-items').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery:{
        enabled:true
      }
    });
    });
