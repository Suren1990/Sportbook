$(document).ready(function(){

    $(".hide-show-arrow").on('click', function() {
        $(".featured-games-sub").slideToggle("fast");
    });

    $(".top_game_event").on('click', function() {
        $(this).parent().toggleClass("opened");
        $(this).parent().find(".event-group-inner").slideToggle("fast");
    });

    $(".games-type-inner").on('click','a', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        event.preventDefault();
    })
    
    $(".country-sub").on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    })
    
    $(".event-odds").on('click','div', function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    })
    
    $(".region-title").on('click', function(){
        $(this).toggleClass("opened");
        $(this).siblings().slideToggle("fast");
    })

    $(".event_game").on('click', function(){
        $(this).parent().parent().parent().find(".countries").slideUp("fast");
        $(this).parent().parent().parent().find(".main-groups").slideUp("fast");
        $(this).parent().parent().parent().find(".favourite").slideUp("fast");
        $(this).parent().parent().parent().find(".regions_competitions").slideDown("fast");
        $(this).parent().parent().parent().find(".games-type").slideDown("fast");
        $(".top-competition").hide();
    })

    $(".top_events").on('click', function(){
        $(this).parent().parent().parent().find(".regions_competitions").slideUp("fast");   
        $(this).parent().parent().parent().find(".favourite").slideUp("fast");
        $(this).parent().parent().parent().find(".countries").slideDown("fast");
        $(this).parent().parent().parent().find(".main-groups").slideDown("fast");
        $(".top-competition").show();  
    })

    $(".sports-select").on("click", function() {
        $(this).toggleClass("opened");
        $(".games-type").slideToggle("fast");
    });

    $(".favorite_event").on('click', function(){
        $(".top-competition").hide();
        $(this).parent().parent().parent().find(".countries").slideUp("fast");
        $(this).parent().parent().parent().find(".main-groups").slideUp("fast");
        $(this).parent().parent().parent().find(".regions_competitions").slideUp("fast");
        $(this).parent().parent().parent().find(".favourite").slideDown("fast");
    })

    $(".top_favourite_event").on('click', function() {
        $(this).toggleClass("opened");
        $(this).parent().find(".fav-regions-p").slideToggle("fast");
    });

    $(".event-group .top_favourite_event").on('click', function() {
        $(this).parent().toggleClass("opened");
        $(this).parent().find(".event-group-wrapper").slideToggle("fast");
    });

    $('.liga_click').on('click', function() {
        
        window.onhashchange = function(e) {
            var oldURL = e.oldURL.split('#')[1];
            var newURL = e.newURL.split('#')[1];
          
            console.log('old:'+oldURL+' new:'+newURL);

            if (oldURL == undefined) {
                $(".featured-games").slideUp("fast");
                $(".games-type").slideUp("fast");
                $(".countries").slideUp("fast");
                $(".main-groups").slideUp("fast");
                $(".regions_competitions").slideUp("fast");
                $(".favourite").slideUp("fast");
                $(".main-sport-header").slideUp("fast");
                $(".main_ligue").slideDown("fast");
            }

            if (newURL == undefined) {
                $(".main_ligue").slideUp("fast");
                $(".featured-games").slideDown("fast");
                $(".games-type").slideDown("fast");
                $(".regions_competitions").slideDown("fast");
            }
          }
    });    
    
    $(".live_active").on('click', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.all-time').hide();
        $('.live_all_video').show();
        $('.main-groups:not(.group-live-games)').slideUp("fast");
        $('.group-live-games').slideDown("fast");
    });
    
    $(".prematch_active").on('click', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.all-time').show();
        $('.live_all_video').hide();
        $('.group-live-games').slideUp("fast");
        $('.main-groups:not(.group-live-games)').slideDown("fast");
    });

    $(".with_video").on('click', function() {
        $(this).removeClass('selected').siblings().addClass('selected');
        $('.event-group:not(.event_with_video)').slideUp("fast");
    });

    $(".all_video").on('click', function() {
        $(this).removeClass('selected').siblings().addClass('selected');
        $('.event-group:not(.event_with_video)').slideDown("fast");
    });
    
})

