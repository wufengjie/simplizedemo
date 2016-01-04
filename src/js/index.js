var Simplize = require('simplize');
var homeBrowser = require('./home');
Simplize.ready(function(){
	var soyie = new Simplize('#webapp'); // 创建新的soyie实例对象
	soyie.debug = true; // 开启调试模式.项目上线前请设置为false关闭.
	soyie.use(homeBrowser(soyie));
	soyie.listen(); // soyie开始监听
});
