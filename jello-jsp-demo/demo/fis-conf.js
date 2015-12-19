var path = require('path');
var namespace = 'demo';

fis.config.merge({
    namespace: namespace
});

fis.config.set('modules.parser.less', 'less');

fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('modules.postprocessor.jsp', 'amd');

// 将 jsx 文件作为文本处理
fis.config.set('project.fileType.text', 'jsx');

// 后缀名为 jsx 的文件用 fis-parser-react 插件编译
fis.config.set('modules.parser.jsx', 'babel');

// 将 jsx 文件编译结果输出为 js 文件
fis.config.set('roadmap.ext.jsx', 'js');

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {
    'pkg/demo_widget.js' : [
        /widget\/(.*?).(js|jsx)$/
    ],
    'pkg/demo_widget.css' : [
        /widget\/(.*?).css$/,
        /widget\/(.*?).less$/
    ]
});

fis.config.set('roadmap.path', [
    {
        reg: '**.jsx',
        isMod : true,
        isES6: true
    },
    {
        reg: '**.js',
        isES6: false // 排除其他
    },
    {
        reg: 'doc/**.md',
        release: false
    }
].concat(fis.config.get('roadmap.path', [])));

// js 模板支持
fis.config.set('modules.parser.tmpl', 'utc');

fis.config.merge({
    deploy : {
        local : [
            {
                from : '/static',
                to : '../../'
            },
            {
                form : '/WEB-INF',
                to : '../../'
            }
        ]
    }
});

fis.config.merge({
    settings: {
        postprocessor: {
            amd: {
                paths: {
                    'react' : 'demo:widget/ui/lib/react.js',
                    'react-dom' : 'demo:widget/ui/lib/react-dom.js'
                }
            }
        }
    }
});
