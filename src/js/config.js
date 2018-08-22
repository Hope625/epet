require.config({

    // 配置短路径（别名）
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'html_common':'../js/html_common',
        'common':'../js/common',
        'index':'../js/index'
    },
    shim:{
        'index':['common'],
        'html_common':['common'],
        'index':['html_common']
    }
});