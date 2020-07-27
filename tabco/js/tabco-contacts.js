$('.mail').on("click",function (){
    window.open('mailto:ditoaldi@gmail.com', '_blank');
})
$('.linkedin').on("click",function (){
    window.open('https://linkedin.com/in/dito-aldi', '_blank');
})
$('.instagram').on("click",function (){
    window.open('https://instagram.com/dittrash', '_blank');
})
$('.github').on("click",function (){
    window.open('https://github.com/dittrash', '_blank');
})
$('.medium').on("click",function (){
    window.open('https://medium.com/@ditoaldi', '_blank');
})
$('.back').on("click",function (){
    $.ajax({url: "tabco/sections/menus.html", success: function(result){
        $("#content").html(result)
      }})
})