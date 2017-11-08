/**
 * Created by mr.wang on 12/6/17.
 */

wx.config({
    debug:true,
    appId:"wxa6610561e20b1514",   //公众号的唯一标识
    timestamp:"1497256939351",  //生成签名的时间戳
    nonceStr:"Wm3WZYTPz0wzccnW",   //生成签名的随机串
    signature:"c2752fe755bd4ab5525e627eb93a2fcc86aeb627",   //签名
    jsApliList:['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone','onMenuShareFacebook']   //需要使用的JS接口列表：
})
wx.ready(function(){
    /*var xhr = new XMLHttpRequest();  //创建ajax对象
    xhr.open('get','https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa6610561e20b1514&secret=0fdf249e44f411312dc0a2235efddcdc');  //设置请求信息get方法，加上随机数，防止获取到缓存数据
    xhr.send();  //提交请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);  //打印请求到的信息
        }
    }*/
    var shareData = {
        imgUrl : "http://www.uikismart.cn/h5test/img/sharelogo",
        link : "http://www.uikismart.cn/h5test/html/h5.html",
        title : "UiKi Smart机芯方案",
        desc : "虞康智能是全方位为客户定制手表机芯方案的智能机芯公司"
    }
    /*wx.hideMenuItems({
        menuList:['menuItem:readMode','menuItem:openWithSafari','menuItem:openWithQQBrowser',]  //隐藏阅读模式，从Safari,QQ浏览器中打开
    })*/
    wx.onMenuShareTimeline(shareData);     //分享到朋友圈
    wx.onMenuShareAppMessage(shareData);    //分享给朋友
    wx.onMenuShareQQ(shareData);            //分享到QQ
    wx.onMenuShareWeibo(shareData);         //分享到微博
    wx.onMenuShareQZone(shareData);         //分享到QQ空间
});