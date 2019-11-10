window.onload = function() {
    $(".content").hide();
    $("#emailForm").hide();
}

// when .showContent is clicked, $("#landing").hide, $("#content").show

$(".showContentBtn").click(function() {
    $("#landing").hide();
    $(".content").show();
})


// submit button on email form
// $(".submitEmailButton").click(function() {
    
// })