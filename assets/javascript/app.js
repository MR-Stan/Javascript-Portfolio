$(document).ready(function () {
    $('.content').hide();
    $('#aboutSection').show();
    
    // when about link is clicked, hide all but about section
    $('#aboutLink').click(function (e) {
        e.preventDefault();
        $('.content').hide();
        $('#aboutSection').show();
    });

    // when skills link is clicked, hide all but skills section
    $('#skillsLink').click(function (e) {
        e.preventDefault();
        $('.content').hide();
        $('#skillsSection').show();
    });

    $('#resumeLink').click(function (e) {
        e.preventDefault();
        $('.content').hide();
        $('#resumeSection').show();
    });

    $('#projectsLink').click(function (e) {
        e.preventDefault();
        $('.content').hide();
        $('#projectsSection').show();
    });

    $('#contactLink').click(function (e) {
        e.preventDefault();
        $('.content').hide();
        $('#contactSection').show();
    });

});