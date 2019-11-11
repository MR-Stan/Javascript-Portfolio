// when the page is loaded, hide everything but the landing section 
window.onload = function () {
    $(".content").hide();
    //$("#messageForm").hide();
}

// when a button is clicked, landing page is hidden, content is shown, and user is taken to corresponding section
$(".showContentBtn").click(function() {
    $("#landing").hide();
    $(".content").show();
})


$(".showMessage").click(function () {
    $("#messageForm").modal("show");
})

// submit button on email form
// $(".submitMessageButton").click(function() {
    
// })