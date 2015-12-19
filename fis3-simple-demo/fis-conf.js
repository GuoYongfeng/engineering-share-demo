// 1. 资源定位
// 静态资源查出到static目录
fis.match('*.{png,js,css}', {
  release: '/static/$0'
});

// 合并雪碧图
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

// 使用md5
fis.match('*.{js,css,png}', {
  useHash: true
});

// 2. 压缩资源
// fis-optimizer-uglify-js 插件进行压缩，fis3已内置
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

// fis-optimizer-clean-css 插件进行压缩，已内置
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

// fis-optimizer-png-compressor 插件进行压缩，已内置
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
