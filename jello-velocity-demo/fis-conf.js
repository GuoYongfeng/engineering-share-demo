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
    deploy : {
        locals : {
            from : '/static',
            to : '../../',
        },
        localt : {
            from : '/WEB-INF',
            to : '../../'
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

