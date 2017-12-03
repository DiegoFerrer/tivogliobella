define(function(){
    return {
        pageGroups: [{"id":"3caf7e35-ced8-9529-1295-58f090f04aef","name":"Default group","pages":[{"id":"37bec46b-e1e9-6270-e6a9-fd35afc622ee","name":"Page 1"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=3ZQVH&projectName=Untitled project",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});
