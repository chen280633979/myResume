(function () {
    var $shop = $(".buy-car"), $shopDetail = $(".buy");
    $shop.on("mouseover", function () {
        $(this).addClass("bg");
        $shopDetail.stop().slideDown(300);
    }).on("mouseout", function () {
        $(this).removeClass("bg");
        $shopDetail.stop().slideUp(300)
    })
})();

$(function () {
    var $banner = $("#banner");
    var $bannerInner = $banner.children(".bannerInner"), $bannerTip = $banner.children(".bannerTip");
    var $bannerLeft = $banner.children(".bannerLeft"), $bannerRight = $banner.children(".bannerRight");
    var $divList = null, $imgList = null, $oLis = null;

    var jsonData = null;
    $.ajax({
        url: "json/banner.txt?_=" + Math.random(),
        type: "get",
        dataType: "json",
        async: false,
        success: function (data) {
            jsonData = data;
        }
    });
    bindData();
    function bindData() {
        var str = "", str2 = "";
        $.each(jsonData, function (index, item) {
            str += "<div><img src='' trueImg='" + item["img"] + "'/></div>";
            index === 0 ? str2 += "<li class='bg'></li>" : str2 += "<li></li>"
        });
        $bannerInner.html(str);
        $bannerTip.html(str2);

        $divList = $bannerInner.children("div");
        $imgList = $bannerInner.find("img");
        $oLis = $bannerTip.children("li");
    }

    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        $imgList.each(function (index, item) {
            var _this = this;
            var oImg = new Image;
            oImg.src = $(this).attr("trueImg");
            oImg.onload = function () {
                $(_this).prop("src", this.src).css("display", "block")
            }
        });
        $divList.eq(0).css("zIndex", 1).animate({opacity: 1}, 300)
    }

    function changeBanner() {
        var $curDiv = $divList.eq(step);
        $curDiv.css("zIndex", 1).siblings().css("zIndex", 0);
        $curDiv.animate({opacity: 1}, 300, function () {
            $(this).siblings().css("opacity", 0);
        });
        var $curLi = $oLis.eq(step);
        $curLi.addClass("bg").siblings().removeClass("bg");
    }

    var interval = 3000, step = 0, autoTimer = null;
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step === (jsonData.length - 1)) {
            step = -1
        }
        step++;
        changeBanner();
    }

    $oLis.on("click", function () {
        step = $(this).index();
        changeBanner();
    }).on("mouseover", function () {
        if ($(this).index() !== step) {
            $(this).addClass("bg")
        }
    }).on("mouseout", function () {
        if ($(this).index() !== step) {
            $(this).removeClass("bg");
        }
    });
    $banner.on("mouseover", function () {
        window.clearInterval(autoTimer);
    }).on("mouseout", function () {
        autoTimer = window.setInterval(autoMove, interval)
    });

    $bannerRight.on("click", autoMove);
    $bannerLeft.on("click", function () {
        if (step === 0) {
            step = jsonData.length;
        }
        step--;
        changeBanner()
    })
});

(function () {
    var $search = $(".search"), $searchLeft = $(".search-left"), $searchRight = $(".search-right"), $a = $searchLeft.children("a");
    $search.on("mouseover", function () {
        $searchLeft.addClass("bg");
        $searchRight.addClass("bg")
    }).on("mouseout", function () {
        $searchLeft.removeClass("bg");
        $searchRight.removeClass("bg")
    }).on("focus", function () {
        $searchLeft.addClass("focus")
    }).on("blur", function () {
        $searchLeft.removeClass("focus")
    });
    $searchRight.on("mouseover", function () {
        $(this).addClass("bo");
        $searchLeft.addClass("bg")
    }).on("mouseout", function () {
        $(this).removeClass("bo");
        $searchLeft.removeClass("bg")
    })
})();


$(function () {
    var $li = $(".nav-A");
    $li.on("mouseover", function () {
        $(this).children(".nav-B").stop().slideDown(300)
    }).on("mouseout", function () {
        $(this).children(".nav-B").stop().slideUp(300)
    })
});

$(function () {
    var $subList = $(".subList");
    //$subList.each(function(index,item){
    //    var $innerNav=$subList.find(">.innerNav");
    //});
    $subList.on("mouseover", function () {
        $(this).children(".innerNav").css("display", "block")
    }).on("mouseout", function () {
        $(this).children(".innerNav").css("display", "none")
    })

});
!function () {
    var bannerInner=document.getElementById("bannerInner2");
    var left=document.getElementsByClassName("title-left");
    var right=document.getElementsByClassName("title-right");
    var timer=window.setInterval(move,5000);
    left[0].onclick=function(){
            zhufengAnimate(bannerInner,{left:0},500);
    };
    right[0].onclick=function(){
            zhufengAnimate(bannerInner,{left:-1240},500);
    };
    //console.log(left)
    function move() {
            if(utils.css(bannerInner,"left")===0){
                zhufengAnimate(bannerInner,{left:-1240},500);
                return
            }else{
                zhufengAnimate(bannerInner,{left:0},500);
            }
    }
}();
!function(){
    var list=document.getElementsByClassName("list");
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        console.log(list[list[i].index])
        list[i].onmouseover=function(){
            zhufengAnimate(list[this.index],{top:-5},100)
            utils.css(list[this.index],"box-shadow","3px 3px 8px 0 #000000;")
        }
        list[i].onmouseout=function(){
            zhufengAnimate(list[this.index],{top:5},100)
        }


    }








}()




