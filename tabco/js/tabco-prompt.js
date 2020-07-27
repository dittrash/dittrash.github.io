var command
$('#prompt').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      command = $('#prompt').val()
        execute(command)
    }
  })

  function execute(com){
    let command = com
    if (command == "main"){
        $.ajax({url: "tabco/sections/menus.html", success: function(result){
            $("#content").html(result)
            $('#prompt').val('')
            $('#prompt').focus()
        }})
    }
    else if (command == "help"){
        $.ajax({url: "tabco/sections/tabco-read.html", success: function(result){
            $("#content").html(result)
            $(".back").hide()
            $('#prompt').val('')
            $('#prompt').focus()
        }})
        $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/blogger/v3/blogs/8210276804868456217/pages/1381951755513568903/?key=AIzaSyDKyAob7ubuz_lzV7-ngmcfWNKkqgBnu-A",
            dataType: "json",
            contentType: "application/json",
            success: function (success) {
                //return the tokenized paragraph
                $('#entry-title').html(success.title)
                $('#entry-text').html(success.content)
                $('#content').show("slow")
                $(".back").show()
            }
        })
    }
    else if (command == "ver"){
        $.ajax({url: "tabco/sections/tabco-read.html", success: function(result){
            $("#content").html(result)
            $(".back").hide()
            $('#prompt').val('')
            $('#prompt').focus()
        }})
        $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/blogger/v3/blogs/8210276804868456217/pages/4132188699076239512/?key=AIzaSyDKyAob7ubuz_lzV7-ngmcfWNKkqgBnu-A",
            dataType: "json",
            contentType: "application/json",
            success: function (success) {
                //return the tokenized paragraph
                $('#entry-title').html(success.title)
                $('#entry-text').html(success.content)
                $('#content').show("slow")
                $(".back").show()
            }
        })
    }
    else if (command == "getmine"){
        window.open('https://github.com/dittrash/dittrash.github.io', '_blank');
        $('#prompt').val('')
        $('#prompt').focus()
        $(".back").show()
    }
}
$('.back').on("click",function (){
    $.ajax({url: "tabco/sections/menus.html", success: function(result){
        $("#content").html(result)
        $('#prompt').val('')
        $('#prompt').focus()
      }})
})
function fillEntries(array){
    for (let i=0;i<array.length;i++){
        bloglistsHtml = 
                `
                <div class="menu-item" id="`+ array[i].id +`">
                    [`+ array[i].title +`]
                </div>
                `
        $(bloglistsHtml).appendTo('.blog-entries')
    }
}