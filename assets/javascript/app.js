window.onload = function() {
    $(".content").hide()
}

// when .showContent is clicked, $("#landing").hide, $("#content").show

$(".showContent").click(function() {
    $("#landing").hide();
    $(".content").show();
})
