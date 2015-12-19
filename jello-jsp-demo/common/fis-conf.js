var path = require('path');

var namespace = 'common';

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
    'pkg/common_widget.js' : [
        /widget\/(.*?).js$/
    ],
    'pkg/common_widget.css' : [
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
            ////本地测试环境,y需要用 线下的 RSA key
            // replace : {
            //     from : '___RSA_TRICK_KEYS___.onlineKey',
            //     to : '___RSA_TRICK_KEYS___.testKey'
            // }
        },
        localt : {
            from : '/WEB-INF',
            to : '../../'
        }
    }
});


fis.config.merge({
    settings: {
        postprocessor: {
            amd: {
                paths: {
                    'jquery': './widget/ui/lib/jquery/jquery.js',
                    'react' : './widget/ui/lib/react/react.js',
                    'react-dom' : './widget/ui/lib/react/react-dom.js',
                    'stilearn-base' : './widget/ui/lib/stilearn-base/stilearn-base.js',
                    'bootstrap': './widget/ui/lib/bootstrap/bootstrap.js',
                    'fullcalendar' : 'common:widget/ui/lib/fullcalendar/fullcalendar.js',
                    'autocomplete' : './widget/ui/lib/autocomplete/autocomplete.js',
                    'template': './widget/ui/lib/template/template.js'
                }
            }
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
