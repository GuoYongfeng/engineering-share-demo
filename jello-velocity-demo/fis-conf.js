/**
 * 基本配置，后续考虑抽出公共配置，具体项目可以细分
 * @type {Object}
 */
fis.config.merge({

    // md5戳
    project: {
        md5Length: 8,
        md5Connector: '.'
    },

    modules : {
        parser : {
            css : 'less'
        },
        spriter: 'csssprites'
    },

    settings : {
        //自动define包装
        postprocessor : {
            jswrapper : {
                type:'amd'
            }
        },
        optimizer : {
            'png-compressor' : {
                type : 'pngquant',
                speed : 2,
                quality : [70, 80],
                iebug : false //无需兼容ie6
            }
        },
        //csssprite布局算法调整，默认是linear，线性布局
        spriter: {
            csssprites: {
                layout : {
                    type: 'matrix'
                }
            }
        }
    },

    // 资源编译
    roadmap:{
        path:[
            //jsp文件不调整部署结构
            {
                reg : '**.jsp',
                // release: '/WEB-INF/views/$&'
            },
            //WEB-INF目录下的文件不调整部署结构
            {
                reg : 'WEB-INF/**' 
            },
            //map.json发布到map目录下
            {
                reg : 'map.json',   
                release : 'conf/$&'
            },
            /**
             * widget目录下的js文件组件化包装
             * 发布到/static/目录下
             */
            {
                reg : 'widget/**.js',   
                isMod : true,           
                release : '/static/$&'  
            },
            {
                reg : '**.md',
                release : false
            },

            //配置useSprite表示reg匹配到的css需要进行图片合并
            {
                reg: '**.css',
                useSprite: true,
                release : '/static/$&'
            },
            
            // 其他文件发布到/static/目录下
            {
                reg : '**',             
                release : '/static/$&'  
            }
        ],
        ext : {
            //less后缀的文件将输出为css后缀
            //并且在parser之后的其他处理流程中被当做css文件处理
            less : 'css'
        }
    },

    //打包配置
    pack : {
        'pkg/lib.js'  : [
            'static/lib/jquery/jquery-1.10.2.js',
            'static/lib/bootstrap/js/bootstrap.js',
            'static/lib/mod/mod.js'
        ],
        'pkg/lib.css' : [
            'static/lib/bootstrap/css/bootstrap.css',
            'static/lib/bootstrap/css/bootstrap-responsive.css'
        ],
        'pkg/widget.js' : 'widget/**.js',
        'pkg/widget.css' : 'widget/**.css'
    }
});

