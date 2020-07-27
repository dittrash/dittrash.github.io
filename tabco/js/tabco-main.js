//key=AIzaSyDKyAob7ubuz_lzV7-ngmcfWNKkqgBnu-A
var i = 0;


$(document).ready(function (){
    $('#main-page').hide()
    $('.console').hide()
    bootloader()
    loadMain()
    $.ajax({url: "tabco/sections/menus.html", success: function(result){
      $("#content").html(result)
    }})
})
function loadMain() {
    var interval = setInterval(load, 3000)
    function load(){
        $('#booting-page').hide()
        $('#main-page').show("fast")
        $('.console').show()
        $('#prompt').focus()
        var d = new Date();
        document.getElementById("time").innerHTML = d;
    }
}
function bloggerAPI(){
}
function bootloader(){
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("boot-loadingbar");
        var width = 1;
        var id = setInterval(frame, 20);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
    }
    
}
//menu links
