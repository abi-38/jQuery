

$(function() {
    $("button").on('click', function(event) {
        event.preventDefault;
        $("#green").fadeIn(1000);
        $("#green").css("display", "flex");
        $("button").fadeOut(1000);
    })
    $("#green").on('click', function(event) {
        event.preventDefault;
        $("#yellow").fadeIn(1000);
        $("#yellow").css("display", "flex");
    })
    $("#yellow").on('click', function(event) {
        event.preventDefault;
        $("#pink").fadeIn(1000);
        $("#pink").css("display", "flex");
    })
    $("#pink").on('click', function(event) {
        event.preventDefault;
        $("body").css("background-image", "url('./joyeuxAnniversaire.png')");
        $("body").css("background-size", "cover");
    })
})
