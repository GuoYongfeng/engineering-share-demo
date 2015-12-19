var path = require('path');

var namespace = 'home';

fis.config.merge({
    namespace: namespace
});

fis.config.set('modules.parser.less', 'less');

// --------------------------------
// 支持 amd 设置
// --------------------------------
fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('modules.postprocessor.jsp', 'amd');

// 后缀名为 jsx 的文件用 fis-parser-react 插件编译
// fis.config.set('modules.parser.js', 'jsx');

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'map');

fis.config.set('pack', {
    'pkg/home_widget.js' : [
        /widget\/(.*?).js$/
    ],
    'pkg/home_widget.css' : [
        /widget\/(.*?).(css|less)$/
    ]
});


// js 模板支持
fis.config.set('modules.parser.tmpl', 'utc');

fis.config.merge({
    deploy : {
        locals : {
            from : '/static',
            to : '../../',
        },
        localt : {
            from : '/WEB-INF',
            to : '../../'
        }
    }
});

fis.config.set('roadmap.path', [
    {
        reg: /^\/widget\/(.*)\.js$/i,
        isMod : true,
        isES6: true,
        release: '${statics}/${namespace}/widget/$1.js'
    },
    {
        reg: /^\/output\//i,
        release: false
    }
].concat(fis.config.get('roadmap.path', [])));
