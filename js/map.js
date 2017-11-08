/**
 * Created by mr.wang on 21/6/17.
 */


    //点击获取当前位置到目的地路线
    //公司坐标：113.937547,22.547703

var map = new BMap.Map('map');
var point = new BMap.Point(113.937547,22.547703);
map.centerAndZoom(point,20);
map.enableScrollWheelZoom();
var myIcon = new BMap.Icon("../img/logo.png",new BMap.Size(30,30),{
    anchor: new BMap.Size(10,10)
});

var marker=new BMap.Marker(point,{icon: myIcon});
map.addOverlay(marker);

var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);//地图中心点移到当前位置
        var latCurrent = r.point.lat;
        var lngCurrent = r.point.lng;
        //alert('我的位置：'+ latCurrent + ',' + lngCurrent);

        location.href="http://api.map.baidu.com/direction?origin="+latCurrent+","+lngCurrent+"&destination=22.547703,113.937547&mode=driving&region=深圳&output=html";
    }
    else {
        alert('failed'+this.getStatus());
    }
},{enableHighAccuracy: true})


map.addOverlay(marker);
var licontent="<b>深圳虞康智能有限公司</b><br>";
licontent+="<span><strong>地址：</strong>深圳市南山区南海大道3025号创意大厦1105室</span><br>";
licontent+="<span><strong>电话：</strong>0755-26609462</span><br>";
var opts = {
    width : 200,
    height: 80,
};
var  infoWindow = new BMap.InfoWindow(licontent, opts);
marker.openInfoWindow(infoWindow);
marker.addEventListener('click',function(){
    marker.openInfoWindow(infoWindow);
});