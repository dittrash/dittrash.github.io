$('.back').on("click",function (){
    $.ajax({url: "tabco/sections/menus.html", success: function(result){
        $("#content").html(result)
      }})
})