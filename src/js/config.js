require.config({

    // 配置短路径（别名）
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'html_common':'../js/html_common',
        'common':'../js/common',
    },
    shim:{
        'html_common':['common'],
        'index':['html_common'],
        'register':['html_common'],
        'login':['html_common']
    }
});