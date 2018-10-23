import 'bootstrap-markdown/js/bootstrap-markdown';

$('#myEditor').markdown();

var $chatBoxH = function () {
    const windowH = $(window).height();
    const navbarH = $('.navbar').height() * 2 + 23;
    const editorH = $('.wrapper-editor').height();
    const chatBoxH = windowH - navbarH - editorH;

    $('.chat-box').height(chatBoxH);
}

$(document).ready(function () {
    $chatBoxH();
});

$(window).resize(function () {
    $chatBoxH();
});


