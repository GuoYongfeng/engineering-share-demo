var banner = require('/widget/ui/slider/slider.js');
var data = {};

console.log('====')
// 轮播图片的地址
var imgList = [
	"http://img2.imgtn.bdimg.com/it/u=656556751,2786854191&fm=21&gp=0.jpg",
	"http://img0.imgtn.bdimg.com/it/u=3674387189,1656152987&fm=21&gp=0.jpg",
	"http://img3.imgtn.bdimg.com/it/u=2086091007,2812265627&fm=21&gp=0.jpg"
];

// 点击图片进入的对应url
var urlList = ["", "", ""];

// 返回信息是否正确
var popularizList = {
	"errno" : -1
};

new banner({
	imgList : imgList,
	urlList : urlList,
	popularize : popularizList,
	autoPlay: imgList.length == 1 ? false : true,
	autoPlayDirection: 'left',
	autoPlayFrequence: 4000
});