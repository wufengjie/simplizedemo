var scope = {
    index: {
        alipayList: [],
        reduceTime: 3
    }
};
module.exports = function(soyie){
    var home = soyie.browser({
		"name": "indexBrowser",
		"text": "HOME",
		"icon": "<i class=\"fa fa-home\"></i>",
		"url": "/"
	});

    home.$data = scope;

    // 加载默认webview
    require('./webviews/index')(home);
    require('./webviews/about')(home);
    require('./webviews/template')(home);
    require('./webviews/coding')(home);
    require('./webviews/browser')(home);
    require('./webviews/soyie')(home);

    return home;
}
