// make the pressed button active
$(document).ready(function() {
    $('.btn').click(function() {
        $('.btn').removeClass('active');
        $(this).addClass('active');
    });
});