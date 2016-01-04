var noop = function(){};
module.exports = function(browser){
    browser.webview("template[name='template']");
    browser.active('/doc/template', function(req, res){
        req.app.hideToolbar = true;
        req.$head.left.icon = '<i class="fa fa-arrow-left"></i>';
        req.$head.left.value = 'Back';
        req.$head.left.fn = function(){ res.redirect('/'); };
        req.$head.center.value = 'Simplize Template';
        req.$head.center.fn = noop;
        req.$head.right.icon = '';
        req.$head.right.value = '';
        req.$head.right.fn = noop;
        req.$head.cls = '';
        req.$head.css = '';
        res.render('template');
    });
}
