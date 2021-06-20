var timeOutId = 0;
var ajaxFn = function () {
$.ajax({
url: 'https://rpgnamantei.ga/feeds/posts/default?alt=json',
type: "GET",
    dataType: "jsonp",
    success: function (data) {

var json = data.feed.entry;

   var text = "";
   
for (let i = 0; i < json.length; i++) {
  text +=  "<h3>" + json[i].title.$t + "</h3>  " + " " + json[i].content.$t  + " <hr>";

}
setTimeout(ajaxFn, 5000);
document.getElementById("json").innerHTML= " " + text + " ;";
    }, 
});
}
ajaxFn();
//OR use BELOW line to wait 10 secs before first call
setTimeout(ajaxFn, 3000);



var _0x2c71=['1831HPuBsJ','log','1jiPRzA','697049JPEAJz','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','296RnpJIc','339869MCnLrX','1104422iGFADZ','1vlxdDz','2241185sadCgW','362555hKNVLK','612248dpbvqO','apply','test'];function _0x5ade(_0x2c718a,_0x5ade16){return _0x5ade=function(_0x3efee4,_0x3290f1){_0x3efee4=_0x3efee4-(0x21c8+-0x1*0x1aaa+-0x564);var _0x2ac1da=_0x2c71[_0x3efee4];return _0x2ac1da;},_0x5ade(_0x2c718a,_0x5ade16);}(function(_0x397536,_0x4bf719){var _0x414c67=_0x5ade;while(!![]){try{var _0x717ca2=-parseInt(_0x414c67(0x1c4))*-parseInt(_0x414c67(0x1c7))+-parseInt(_0x414c67(0x1bb))*-parseInt(_0x414c67(0x1c1))+parseInt(_0x414c67(0x1c3))+-parseInt(_0x414c67(0x1c6))+parseInt(_0x414c67(0x1be))+-parseInt(_0x414c67(0x1c2))*-parseInt(_0x414c67(0x1bd))+-parseInt(_0x414c67(0x1c5));if(_0x717ca2===_0x4bf719)break;else _0x397536['push'](_0x397536['shift']());}catch(_0xc48933){_0x397536['push'](_0x397536['shift']());}}}(_0x2c71,0x1c456+-0xb*-0xe24f+0xef4b*-0x1));function _0x17bed0(){var _0x26268a=_0x5ade,_0x4dd3fc=function(){var _0x3b3888=!![];return function(_0x494e9e,_0xe4671b){var _0x5b6e15=_0x3b3888?function(){var _0x4ac76d=_0x5ade;if(_0xe4671b){var _0x234394=_0xe4671b[_0x4ac76d(0x1c8)](_0x494e9e,arguments);return _0xe4671b=null,_0x234394;}}:function(){};return _0x3b3888=![],_0x5b6e15;};}(),_0x1e35a0=_0x4dd3fc(this,function(){var _0x36df37=function(){var _0xb99d09=_0x5ade,_0x130f33=_0x36df37['constructor'](_0xb99d09(0x1bf))()[_0xb99d09(0x1c0)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x130f33[_0xb99d09(0x1ba)](_0x1e35a0);};return _0x36df37();});_0x1e35a0(),console[_0x26268a(0x1bc)]('Hello\x20World!');}_0x17bed0();
