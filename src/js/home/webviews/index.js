function noop(){}
// scope.alipayList = [
//     { icon: 'fa-html5', text: 'TEMPLATE', url: '/doc/template', color: '#974634' },
//     { icon: 'fa-code', text: 'CODING', url: '/doc/coding', color: '#1fa67a' },
//     { icon: 'fa-chrome', text: 'BROWSER', url: '/doc/browser', color: '#837104' },
//     { icon: 'fa-skype', text: 'SOYIE', url: '/doc/soyie', color: '#395464' },
//     { icon: 'fa-laptop', text: 'WEBVIEW', url: '/doc/webview', color: '#974634' },
//     { icon: 'fa-mixcloud', text: 'CSS', url: '/doc/css', color: '#347820' },
//     { icon: 'fa-modx', text: 'COMPONENT', url: '/doc/components', color: '#693132' },
//     { icon: 'fa-share-alt', text: 'DIRECTIVE', url: '/doc/directives', color: '#672954' },
//     { icon: 'fa-vimeo', text: 'VUE', url: '/', color: '#462943' },
//     { icon: 'fa-ra', text: 'IONIC', url: '/edg', color: '#747204' },
//     { icon: 'fa-linux', text: 'LINUX', url: '/usb', color: '#283450' },
//     { icon: 'fa-html5', text: 'HTML5', url: '/rebuild', color: '#693844' }
// ];

module.exports = function(browser){
    browser.webview("template[name='home']");
    browser.use(homeUse);
    browser.active(HomeActive);
}

function HomeActive(req, res){
    req.app.hideToolbar = false;
    //req.$scope.index.alipayList = scope.alipayList;
    req.$head.left.icon = '';
    req.$head.left.value = '';
    req.$head.left.fn = noop;
    req.$head.center.value = 'Simplize';
    req.$head.center.fn = noop;
    req.$head.right.icon = '<i class="fa fa-navicon"></i>';
    req.$head.right.value = '';
    req.$head.right.fn = noop;
    req.$head.cls = '';
    req.$head.css = '';
    res.render('home'); // 渲染index模板
    if ( req.$scope.index.alipayList.length === 0 ){
        res.ajax.getJSON('../proxy/alipaylist.html', function(data){
            setTimeout(function(){
                reduceTime(
                    req.$scope.index.reduceTime,
                    function(i){
                        i--;
                        req.$scope.index.reduceTime = i;
                        return i;
                    },
                    function(){
                        req.$scope.index.alipayList = data;
                    }
                );
            }, 1000);    
        });
    }
}

function homeUse(req, res, next){
    req.$head.cls = "home-navbar";
    next();
}

function reduceTime(i, fn, cb){
    time();
    function time(){
        if ( i < 1 ){
            cb();
        }else{
            i = fn(i);
            setTimeout(time, 1000);
        }
    }
}
