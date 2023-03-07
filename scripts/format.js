$(document).ready(function(){
    //Format Topbar
    $("div#topbar > button.item")
    .each(function(i){
        if(i < 10){
            $(this).attr("data-item",`i${i+1}`);
        }else $(this).remove();
    });
    $(":root").css("--hg",`${$("#topbar").innerHeight()}px`);
    var lastHeight = 1;
    $(window).bind("resize",function(){
        const height = $("#topbar").innerHeight();
        if(height === lastHeight);
        else{
            lastHeight = height;
            $(":root").css("--hg",`${height}px`);
        }
    });
});
if(window.matchMedia){
    var matchDark = window.matchMedia("(prefers-color-scheme:dark)")
    var theme = (matchDark.matches)?'dark':'light';
    matchDark.addEventListener('change', function(event){
        theme = (event.matches)?'dark':'light';
    });
}