/**
 * Created by mr.wang on 9/6/17.
 */


    $(function(){
        $('#dowebok').fullpage({
            navigation : 'true',     //导航点
            navigationPosition : 'right',   //导航点位置
            verticalCentered　: 'false',    //内容不居中
            continuousVertical : 'true',    //循环滑动
            afterLoad : function(anchorLink,index){
                function addanimation(){
                    var a = $('.active [data-animation]');
                    $.each(a,function(index,element){
                        var $element    = $(element),
                            $src        = $element.attr("data-src"),       //图片懒加载处理
                            $animation  = $element.attr('data-animation'),
                            $duration   = $element.attr('data-duration') || 2000,
                            $timfunc    = $element.attr('data-timing-function') || 'ease',
                            $delay      = $element.attr('data-delay') ?  $element.attr('data-delay') : 0;

                        if($src)$element.attr('src',$src);        //图片懒加载处理
                        $(element).css({
                            'display' : 'block',
                            '-webkit-animation-name': $animation,
                            '-webkit-animation-duration': $duration + 'ms',
                            '-webkit-animation-timing-function': 'ease',
                            '-webkit-animation-timing-function': $timfunc,
                            '-webkit-animation-delay': $delay + 'ms',
                            '-webkit-animation-fill-mode': 'both'
                        })
                    })
                }
                if(index == 15){
                    var gif = $('#gif');
                    var src = gif.attr('data-src');
                    var clearContainer = $('.clear-container-15');
                    addanimation();
                    var timer = setTimeout(function(){
                        if(src)gif.attr('src',src);
                        gif.css('display','block')
                    },5500)
                    setTimeout(function(){
                        clearTimeout(timer);
                        gif.css('display','none');
                        clearContainer.css('display','none');
                    },7500)
                }
                else{
                   addanimation();
                }
            },
            onLeave : function(anchorLink,index){
                if(index ==15){
                    var gif = $('#gif');
                    gif.attr('src','');
                    gif.css('display','none');
                    var $animateDom = $('[data-animation]').css({
                        'animation' : 'none',
                        'display' : 'none'
                    });
                }
                else{
                    var $animateDom = $('[data-animation]').css({
                        'animation' : 'none',
                        'display' : 'none'
                    });
                }
            }
        })
    })

    var fn = function(){
        //三角形背影
        var width = $(window).width();
        var height = $(window).height();

        var square = $(".square");
        var p_7_bg = $(".bg");
        var gif = $("#gif");
        var opacity = $(".opacity");
        opacity.css({
            width : width,
            height : height,
            opacity : 0,
            position : 'absolute',
            left : 0,
            top : 0,
        })

        square.css({
            borderBottom : height+ "px solid #999",
            borderRight : width + "px solid transparent",
        });
        p_7_bg.css({
            width : width,
            height : height
        })
        gif.css({
            width : width,
            height : height,
        })

        var music = document.getElementById("music");
        var oImg = document.getElementById("img");
        var audio = document.getElementById("myAudio");
        var gif = document.getElementById("music-gif");
        music.onclick = function(){
            if(audio.paused){
                audio.play();
                document.addEventListener("DOMContentLoaded",audioAutoPlay,false);
                oImg.className = "rotate2d";
                gif.className = "music-gif";
            }
            else{
                audio.pause();
                document.removeEventListener("DOMContentLoaded",audioAutoPlay,false);
                oImg.className = "none";
                gif.className = "none";
            }
        }

        //解决IOS和少部分Android微信不支持音频自动播放
        var audioAutoPlay = function (){
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
        }
        if(audio.paused){
            audioAutoPlay();
        }
        audio.play();

        //判断是否为android，拨打号码加后缀
        var tel = $('tel');
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        //var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        //alert('是否是Android：'+isAndroid);
        //alert('是否是iOS：'+isiOS);
        if(isAndroid){
            tel.attr('href','tel:0755-26609462#mp.weixin.qq.com')
        }else{
            tel.attr('href','tel:0755-26609462');
        }
    }
    fn();



