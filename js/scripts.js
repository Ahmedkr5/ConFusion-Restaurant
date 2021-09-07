$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2500 });
    $('#carouselbutton').click(function () {
        if ($('#carouselbutton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselbutton').children('span').removeClass('fa-pause');
            $('#carouselbutton').removeClass('btn-danger');
            $('#carouselbutton').addClass('btn-success');
            $('#carouselbutton').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselbutton').children('span').removeClass('fa-play');
            $('#carouselbutton').removeClass('btn-success');
            $('#carouselbutton').addClass('btn-danger');
            $('#carouselbutton').children('span').addClass('fa-pause');
        }
    });
    $("#log").click(function () {
        $('#loginModal').modal('toggle');
    });
    $("#res").click(function () {
        $("#reserv").modal();
    });

});