var isSlide = true;
function enabledSlide(cond) { isSlide = cond; }
function comebackToTop() { $("#content").css({ 'top': 44 }); }
$(document).ready(function(){

    setDistrict();
    windowResize();

    /* 마우스 휠에 따른 페이지 전환 애니메이션 */
    var currentPageNo = 0;
    var currentOffset = 44;
    var lastPageNo = 3;
    $("#content").on('mousewheel DOMMouseScroll', function (e) {
        if(isSlide==true) {
            var delta = e.originalEvent.wheelDelta;
            if (delta > 0 && currentPageNo == 0) return;
            if (delta < 0 && currentPageNo == lastPageNo) return;

            currentOffset += height('page') * (delta > 0 ? 1 : -1);
            $("#content").animate({top: currentOffset + 'px'});
            currentPageNo = currentPageNo + (delta > 0 ? -1 : 1);
        }
    });

    /* 브라우즈 창 크기가 변경될 때의 설정 */
    function windowResize() {
        $(window).resize(function() {
            $('title').text("Techpedia" + width('window'));
            setDistrict();
        });
    }

    /* 수정이 빈헌하게 일어나는 가로 길이 집합 */
    function width(type) {
        switch(type) {
            case 'mobile':
                return 500;
            case 'window' :
                return $(window).width();
            case 'content':
                return $("#wrap").width() - ($(window).width() > width('mobile') ? width('menu') : 0);
            case 'menu':
                return $(window).width() > width('mobile') ? 400 : 0;
        }
        return -1;
    }

    /* 수정이 빈헌하게 일어나는 세로 길이 집합 */
    function height(type) {
        switch(type) {
            case 'header':
                return 44;
            case 'footer':
                return 44;
            case 'page':
                return $(".page").height();
        }
        return -1;
    }

    /* Framework의 크기와 위치 결정 */
    function setDistrict() {
        $("#header").height(height('header'));
        $("#footer").height(height('footer'));
        $("#content").width(width('content'));
        $("#menu").width(width('menu'));

        $("#content").css("left", width('window') > width('mobile') ? width('menu'): 0);
        $("#menu").css("display", width('window') > width('mobile') ? 'inline' : 'none');
        $("#menu").css("top", height('header'));
        $("#content").css("top", height('header'));
    }
});
