$('.welcome').one("click", function (){
    $.ajax({url: "tabco/sections/tabco-read.html", success: function(result){
        $("#content").html(result)
        $(".back").hide()
      }})
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/blogger/v3/blogs/8210276804868456217/pages/6249492002475068365/?key=AIzaSyDKyAob7ubuz_lzV7-ngmcfWNKkqgBnu-A",
        dataType: "json",
        contentType: "application/json",
        success: function (success) {
            //return the tokenized paragraph
            console.log(success.title)
            $('#entry-title').html(success.title)
            $('#entry-text').html(success.content)
            $('#content').show("slow")
            $(".back").show()
        }
    })
})
$('.biodata').one("click", function (){
    $.ajax({url: "tabco/sections/tabco-read.html", success: function(result){
        $("#content").html(result)
        $(".back").hide()
      }})
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/blogger/v3/blogs/8210276804868456217/pages/95676071062096005/?key=AIzaSyDKyAob7ubuz_lzV7-ngmcfWNKkqgBnu-A",
        dataType: "json",
        contentType: "application/json",
        success: function (success) {
            //return the tokenized paragraph
            console.log(success.title)
            $('#entry-title').html(success.title)
            $('#entry-text').html(success.content)
            $('#entry-title').show("slow")
            $('#entry-text').show("slow")
            $(".back").show()
        }
    })
})
$('.socmed').one("click", function (){
    $.ajax({url: "tabco/sections/tabco-contacts.html", success: function(result){
        $("#content").html(result)
      }})
})
var bloglistsHtml
var blogEntries = []
$('.blog').one("click", function (){
    $.ajax({url: "tabco/sections/blogposts.html", success: function(result){
        $("#content").html(result)
        $('#entry-title').show()
        $(".back").hide()
      }})
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/blogger/v3/blogs/8210276804868456217/posts/?key=AIzaSyDKyAob7ubuz_lzV7-ngmcfWNKkqgBnu-A",
        dataType: "json",
        contentType: "application/json",
        success: function (success) {
            //return the tokenized paragraph
            $('#entry-title').hide()
            $(".back").show()
            blogEntries = success.items
            fillEntries(blogEntries)
        }
    })
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