$(function () {
    function myRandom(from, to) {
        return Math.floor((Math.random() * (to - from + 1)) + from);
    }

    function myRandom2(from, to) {
        return Math.floor((Math.random() * (to - from + 1)) + from);
    }

    function myRandom3(from, to) {
        return Math.floor((Math.random() * (to - from + 1)) + from);
    }

    setInterval(function () { $('#number').text(myRandom(1, 30)); }, 86400);
    setInterval(function () { $('#number2').text(myRandom2(1, 30)); }, 86400);
    setInterval(function () { $('#number3').text(myRandom3(1, 30)); }, 86400);
});

(function () {
    var options = {
        whatsapp: "+996707887449‬", // WhatsApp number
        call: "+996707887449‬", // Call phone number
        call_to_action: "заказать портер  такси", // Call to action
        button_color: "#A8CE50", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "whatsapp,call", // Order of buttons
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();