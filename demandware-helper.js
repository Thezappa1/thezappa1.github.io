var hello = function() {

   var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://3tierlogic01-tech-prtnr-na01-dw.demandware.net/s/SiteGenesis/dw/shop//v15_2/categories/root?levels=2&client_id=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  xhr.send();


  //document.write(xhr.responseText);


  xhr.onreadystatechange = setInterval(function(){
    console.log(xhr.readyState);
    if (xhr.readyState == 4 & xhr.status == 200)
      {
        document.write(xhr.responseText)
        // var r = JSON.parse(xhr.responseText);
        // document.write("Location: "+ r.query.results.channel.location.city+", "+ r.query.results.channel.location.region+"<br>");
        // document.write("Temperature: "+r.query.results.channel.item.condition.temp+"°F<br>")
        // document.write("Wind Chill : "+r.query.results.channel.wind.chill+"°F")
        
      }
  }, 3000);

}


var demandwareRestApi = function (method,url,params) {

        var myHttp = function(method, theUrl) {
          var xmlHttp = null;
          xmlHttp = new XMLHttpRequest();
          xmlHttp.open(method, theUrl, false );
          xmlHttp.send( null );
          return xmlHttp;
        }; 

			  var baseUrl = "https://3tierlogic01-tech-prtnr-na01-dw.demandware.net/s/SiteGenesis/dw/shop/";
				var apiVersion = "v15_2";
				var clientId = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
				
        		var callUrl = baseUrl + '/' + apiVersion + '/' + url + '?';
        		var urlParams = [];
        		for (var key in params) {
          			urlParams.push(key + '=' + params[key]);
        		}
        		urlParams.push('client_id=' + clientId);
        		callUrl += urlParams.join('&');

        document.write(callUrl);
          		
}



