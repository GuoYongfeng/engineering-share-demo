/**
 * @author guoyongfeng
 * @date   2015-06-10
 * @desc   自定义实现移动端图片轮播插件
 * @type {Number}
 */

var	index = 0,
	len = 0,
	$cur = null,
	$next = null,
	$prev = null,
	$wrap = null,
	$list = null,
	$nav = null,
	$prevBtn = null,
	$nextBtn = null;

// 默认轮播出现的图片，暂无图片，先注释
// var defautImg = __uri('image/default-bg.jpg');

var banner = function(option){
	this.build(option.imgList, 
			   option.urlList, 
			   option.popularize);
	this.init(option);
};

banner.prototype = {
	init : function(options){
		options = $.extend({
			selector : ".ui-slide-wrap",
			slideNav : '.ui-slide-nav',
			prev: '.ui-slide-pre',
			next: '.ui-slide-next',
			autoPlay: false,
			autoPlayDirection: 'left',
			autoPlayFrequence: 2000,
			start : 0
		},options);

		$wrap =  $(options.selector);

		$list = $wrap.find('li');
		index = options.start;
		len = $list.length;
		$cur = $list.eq(index).addClass('cur');
		$container = $wrap.find('ul');
		$width = $(window).width();
		$wrap.css({height: 0.75 * $width});
		$container.css({lineHeight: (0.75 * $width) + 'px'});
		if($list.length > 1){
			$wrap.on('swipeLeft',swipeLeft);
			$wrap.on('swipeRight', swipeRight);
		}

		$nav = $wrap.find(options.slideNav);

		loadImages();
		initNav(options.start);

		options.autoPlay && setInterval( 
			options.autoPlayDirection == 'left' ? swipeLeft : swipeRight,
			options.autoPlayFrequence
		);
	},
	build : function(list, url, popularize){
		var _this = this;
		var list = list;
		var url  = url;
		var html = "";
		var i = 0;
		//debugger;
		for(i; i< list.length; i++){
			var href = url[i] ? url[i] : "javascript:;";
			if(popularize.errno == 0 && i == 0 ){
				html += '<li><a href="'+href+'"><img data-src="'+list[i]+'" alt=""><span class="referer-title">'+popularize.title+'</span></a></li>';
			}else{
				html += '<li><a href="'+href+'"><img data-src="'+list[i]+'" alt=""></a></li>';
			}
			
		}
		$("._banner-list").html(html);
	},
	initNav : function( start ){
		var tpl = '<span></span>', cat = [];
		for(var i=0;i<len;i++){
			cat.push(tpl);
		}

		$nav.html(cat.join('')); 

		$nav = $nav.find('span');
		$nav.eq(start).addClass('on');
	},
	swapNav : function(){
		$nav.removeClass();
		$nav.eq(index).addClass("on");
	},
	swipeLeft : function(){
		var _this = this;

		$cur = $list.eq( index ).addClass('cur');;
		$next = $list.eq( (index+1)%len ).removeClass().addClass('next');
		
		$prev = $list.eq( (index + len - 1)%len ).removeClass();

		setTimeout(function(){
				
			$cur.addClass('prev').removeClass('cur');
			$next.addClass('cur').removeClass('next');
		
		}, 50);
		index = (index+1)%len;
		banner.obtain.swapNav();

		return false;
	},
	swipeRight : function(){
		var _this = this;

		$cur = $list.eq( index ).addClass('cur');
		$next = $list.eq( (index+1)%len ).removeClass();
		$prev = $list.eq( (index + len - 1)%len ).removeClass().addClass('prev');

		setTimeout(setTimeout(function(){
			$cur.addClass('next').removeClass('cur');
			$prev.addClass('cur').removeClass('prev');
			
		}, 50), 50);

		index = (index + len - 1)%len;

		banner.obtain.swapNav();

		return false;
	},
	loadImages : function(){
		$wrap.find('img').each(function(){
			var $this = $(this), 
				loader;
			// $this.attr('src', defautImg);

			loader = (new Image());
			loader.onload = function(){
				$this.attr('src', $this.data('src'));
				loader = null;
			};

			loader.src = $this.data('src');
		});
	},
	init : function( options ){
		var _this = this;
		options = $.extend({
			selector : ".ui-slide-wrap",
			slideNav : '.ui-slide-nav',
			prev: '.ui-slide-pre',
			next: '.ui-slide-next',
			autoPlay: false,
			autoPlayDirection: 'left',
			autoPlayFrequence: 2000,
			start : 0
		},options);

		$wrap =  $(options.selector);

		$list = $wrap.find('li');
		index = options.start;
		len = $list.length;
		$cur = $list.eq(index).addClass('cur');

		$container = $wrap.find('ul');
		$width = $(window).width();

		if($list.length > 1){
			$wrap.on('swipeLeft',_this.swipeLeft);
			$wrap.on('swipeRight', _this.swipeRight);
		}

		$nav = $wrap.find(options.slideNav);

		_this.loadImages();
		_this.initNav(options.start);

		options.autoPlay && setInterval( 
			options.autoPlayDirection == 'left' ? _this.swipeLeft : _this.swipeRight,
			options.autoPlayFrequence
		);
	}
};

banner.obtain = banner.prototype;

module.exports = banner;
