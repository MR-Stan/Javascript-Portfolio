// when the page is loaded, hide everything but the landing section 
$(function () {
    $(".hide").hide();
}) 

// when a button is clicked, landing page is hidden, content is shown, and user is taken to corresponding section
$(".showContent").click(function() {
    $("#landing").hide();
    $(".hide").show();
    $("body").css("background", "black");
})


$(".showMessage").click(function () {
    $("#messageForm").modal("show");
})

// submit button on email form
// $(".submitMessageButton").click(function() {
    
// })