$(function(){

    console.log('=============||||| C4 BOUNSR | Highlight Faves |||||==============');


  // Faves Function ===========================================================

    function faves() {
        console.log('~~~~~~~~~~~~~~ Faves Function');

        $('.profile').each(function() {

            console.log('Faves Function');

            var username = $(this).find('.user').text().trim().toLowerCase();

            var favesList = [
                '1Cam',
                'BB_Fcuk_37',
                '1top1bttm',
                'trash4cash275',
                '2KinkyOtters',
                'pigsloBBos',
                'trash4cash',
                'adamagain',
                'londonfuckwhore',
                'NorthwestBuilt',
                'TWOPIGS7',
                'INKEDFUNDUDE',
                'hungbritboi4'
            ];

            var i;
            for (i = 0; i < favesList.length; i++) {
                if( username === favesList[i].trim().toLowerCase() ) {
                    $(this).addClass('fave');
                }
            }

        });

    }







    // GAY FILTER FUNCTIONS ===================================================
    var all_profiles;

    function gayProfiles() {

        console.log('~~~~~~~~~~ gayProfiles function ~~~~~~~~~~~');

        all_profiles = $('.profile');

        var favorites = $('.fave');
        var gay = $('.gay');
        var bi = $('.bisexual');
        var bicur = $('.bicurious');
        var str8 = $('.straight');
        var ukwn = $('.unknown');

        $('.grid').append(favorites);
        $('.grid').append(gay);
        $('.grid').append(ukwn);
        $('.grid').append(bi);
        $('.grid').append(bicur);
        $('.grid').append(str8);

        favorites = null;
        gay = null;
        bi = null;
        bicur = null;
        str8 = null;
        ukwn = null;




        var profileCount = 1;

        $(".profile").each(function() {
            $(this).attr('data-profCount', profileCount);
            profileCount++;
        });

    }






    setTimeout(function(){
        faves();
    }, 3500);


    setTimeout(function(){
        gayProfiles();
    }, 4000);


});
