function resizetovp() {
    var height = $(document).height();
    height = parseInt(height) + 'px';
    $('.welcomewrapper').css('height',height);
}

$(document).ready(function() {
    resizetovp();
    $(window).bind('resize', resizetovp);
});

