$("path").hover(function () {
    $("path").css("fill","#474747");
    $(this).css("fill","#fff");
    let current = $(this).attr("id");
    current = current.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
        return letter.toUpperCase();
    });
    $(".current").html(current,500);
});