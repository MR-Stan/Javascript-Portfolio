// when the page is loaded, hide everything but the landing section 
window.onload = function () {
    $(".content").hide();
    $("#emailForm").hide();
}

// when a button is clicked, landing page is hidden, content is shown, and user is taken to corresponding section
$(".showContentBtn").click(function() {
    $("#landing").hide();
    $(".content").show();
})


// submit button on email form
// $(".submitEmailButton").click(function() {
    
// })