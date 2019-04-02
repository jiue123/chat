var socketObj = require('../components/socket');
const socket = socketObj.socket;

var onlArr = new Array();
    onlArr['emailArrOnl'] = new Array();
socket.on("server-send", function (data) {
    if (typeof data !== 'undefined') {
        let emailArr = new Array();

        $.each(data, function (index, element) {
            if (onlArr['emailArrOnl'].indexOf(element.email) == -1 && element.email !== userEmailGlobal) {
                onlArr[index] = element;
                onlArr['emailArrOnl'].push(element.email);
                emailArr.push(element.email);
            } else if (element.email !== userEmailGlobal) {
                onlArr[index].socketID = element.socketID;
                onlArr[index].time = element.time;
            }
        });

        if (emailArr.length > 0) {
            $.post({
                type: 'POST',
                url: '/getInfoUserOnline',
                data: $.param(Object.assign({}, emailArr)),
                cache: false,
                processData: false,
            }).done(function (response) {
                $.each(response, function (index, element) {
                    const html = `
                    <li id="chat">
                        <input type="hidden" value="${element.email}">
                        <span>${element.name}</span>
                        <img alt="" src="/images/useravatar_2.svg">
                    </li>
                `;

                    $(".list-user-online .list-unstyled").append(html);
                });
            }).fail(function (xhr, status, error) {
                console.error(xhr, status, error);
            }).always(function () {

            });
        }
    }
});

$(document).on('click', '.list-unstyled li', (e) => {
    const target = $(e.target());
    console.log(onlArr);
});


