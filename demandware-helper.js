var demandwareRestApi = function (method,url,params) {
			
        var myHttp = function(method, theUrl) {
          var xmlHttp = null;
          xmlHttp = new XMLHttpRequest();
          xmlHttp.open(method, theUrl, false );
          xmlHttp.send( null );
         return xmlHttp.responseText;
        } 


			  var baseUrl = "https://3tierlogic01-tech-prtnr-na01-dw.demandware.net/s/SiteGenesis/dw/shop/"
				var apiVersion = "v15_2"
				var clientId = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
				
        		var callUrl = baseUrl + '/' + apiVersion + '/' + url + '?';
        		var urlParams = [];
        		for (var key in params) {
          			urlParams.push(key + '=' + params[key]);
        		}
        		urlParams.push('client_id=' + clientId);
        		callUrl += urlParams.join('&');

        return myHttp(method, url)
          		
}
