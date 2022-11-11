var allVideos = $('.video');
var allplay = $('#play-all');
var video;

/* 누구.hover(
    function(){
        누구한테 마우스를 올렸을때 할일
    }, function(){
        누구한테 마우스를 내렸을때 할일
    }
) */

allVideos.hover(
    function(){
        video=$(this).find(video);
        //console.log(video.get(0))
        //html요소(body, header, div, h1, em...)
        //get(0) --> html요소중에서 첫번째요소를 찾음
        video.get(0).play();
    }, function(){
        video.get(0).pause();
    }
)

allplay.click(function(){
    //allplay야~ on클래스를 가지고 있냐
    if(allplay.hasClass('on')){
        var vd=$('video');
        allplay.removeClass('on');
        $('.play-all').text('pause All')
        console.log('vd')
        /* for(초기값; 조건문; 증가감식){
            실행문
        } */
        for(var i=0; i<vd.length; i++){
            vd.get(i).play();
        }
    }
    else{
        var vd=$('video');
        allplay.addClass('on');
        $('.play-all').text('play All')
        for(var i=0; i<vd.length; i++){
            vd.get(i).pause();
        }
    }
});