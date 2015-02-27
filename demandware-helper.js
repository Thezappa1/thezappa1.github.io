var hello = function() {

   var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Miami%2C%20IL%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys");
  xhr.send();


  //document.write(xhr.responseText);


  xhr.onreadystatechange = setInterval(function(){
    console.log(xhr.readyState);
    if (xhr.readyState == 4 & xhr.status == 200)
      {
       var r = JSON.parse(xhr.responseText);
        document.write("Location: "+ r.query.results.channel.location.city+", "+ r.query.results.channel.location.region+"<br>");
       document.write("Temperature: "+r.query.results.channel.item.condition.temp+"°F<br>")
       document.write("Wind Chill : "+r.query.results.channel.wind.chill+"°F")
        
      }
  }, 3000);

}

var demandwareRestApi = function (method,url,params) {
			

        var myHttp = function(method, theUrl) {
          var xmlHttp = null;
          xmlHttp = new XMLHttpRequest();
          xmlHttp.open(method, theUrl, false );
          xmlHttp.send( null );
         return xmlHttp.responseText;
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

        return callUrl;
          		
}
