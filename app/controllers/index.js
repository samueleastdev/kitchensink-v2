
/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
    $.index.open();    
    Alloy.CFG.tabGroup = $.index;    
})();

function validateDocsInfo() {
    if (Ti.App.Properties.getBool('showNotice', true) === true) {
    	var alertNotice = Ti.UI.createAlertDialog({
    		title: 'Notice',
    		message: 'While this KitchenSink provides an extensive demonstration of the Titanium API, its structure is not recommended for production apps. Please refer to our documentation for more details.',
            buttonNames: ['OK', 'Visit docs', 'Don\'t show again'],
            cancel: 0
    	});

    	alertNotice.addEventListener('click', function(e) {
    		if(e.index === 1) {
    			Ti.Platform.openURL('http://wiki.appcelerator.org/display/guides/Example+Applications');
    		} else if(e.index === 2) {
    			Ti.App.Properties.setBool('showNotice', false);
    		}
    	});

        alertNotice.show();
    }
}
