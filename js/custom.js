//==================================CREATE MAP VARIABLES================================
// Start of google maps api code
//Create markers: Latitude then Longitude
var russiaLocation = new google.maps.LatLng(60.0000, 90.0000); //Mafiya
var italyCalabriaLocation = new google.maps.LatLng(39.0000, 16.5000); //Ndrangheta
var italyNaplesLocation =new google.maps.LatLng(40.8450, 14.2583); //Camorra
var japanLocation = new google.maps.LatLng(35.6833, 139.7667); //Yamaguchi-gumi
var indiaLocation =new google.maps.LatLng(21.0000, 78.0000); //D Company
var africaKenyaLocation= new google.maps.LatLng(1.2667,36.8000); //Mungiki 
var usaCaliforniaLocation= new google.maps.LatLng(36.778261, -119.417932); //MS-13 (Mara Salvatrucha)
var elPasoLocation= new google.maps.LatLng(18.791667, -100.377778); // Bario Azteca
var chinaLocation= new google.maps.LatLng(35.0000, 103.0000); //Dai Huen Jai
//====================================================START OF INITIALIZE FUNCTION===================================================//

function initialize() {
          var mapOptions = {
              center: new google.maps.LatLng( 22.18690, -11.00465),
              zoom: 4,
              mapTypeControl:false,
              styles: [
              	  {
              	 stylers:[
    		          	 { hue:"#420D0D" }, 
    		          	 { saturation:100 }
              	        ]
                   }
                ]
            };
      var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
////=================================================== Stored in an array here are the Polylines for all point locations==========================/////
      var allLocations=[elPasoLocation, usaCaliforniaLocation, africaKenyaLocation, italyCalabriaLocation,
       italyNaplesLocation, russiaLocation,japanLocation, chinaLocation, indiaLocation];
      var path=new google.maps.Polyline({
        path:allLocations,
        strokeColor:"#6e1d1d",
        strokeOpacity:0.8,
        strokeWeight:2
        });
      path.setMap(map);  

    //====================================================START OF Russia Marker===================================================//
    var markerRussia = new google.maps.Marker({
          position:russiaLocation,
          map: map,
          icon: "assets/img/ma-icon.png",
          url:"mafiya.html",
          animation:google.maps.Animation.BOUNCE
    });
    function russia(){
        window.location.replace('mafiya.html');
    }
    markerRussia.addListener('click', russia);

    //====================================================START OF ItalyCalabria Marker===================================================//
    var markerItalyCalabria = new google.maps.Marker({
          position:italyCalabriaLocation,
          map: map,
          icon: "assets/img/nd-icon.png",
          url:"ndrangheta.html",
          animation:google.maps.Animation.BOUNCE
    });
    function italyCalabria(){
          window.location.replace('ndrangheta.html');
    }
    markerItalyCalabria.addListener('click', italyCalabria);


    //====================================================START OF ItalyNaples Marker===================================================//
    var markerItalyNaples = new google.maps.Marker({
          position:italyNaplesLocation,      
          map: map,
          icon: "assets/img/ca-icon.png",
          url:"Camorra.html",
          animation:google.maps.Animation.BOUNCE
    });
    function ItalyNaples(){
          window.location.replace('camorra.html');
    }
    markerItalyNaples.addListener('click', ItalyNaples);

    //====================================================START OF Japan's Marker===================================================//
    var markerJapan = new google.maps.Marker({
            position:japanLocation,      
            map: map,
            icon: "assets/img/ya-icon.png",
            url:"japan.html",
            animation:google.maps.Animation.BOUNCE
      });
      function Japan(){
            window.location.replace('japan.html');
      }
      markerJapan.addListener('click', Japan);


    //====================================================START OF India Marker===================================================//
       var markerIndia = new google.maps.Marker({
            position:indiaLocation,      
            map: map,
            icon: "assets/img/dc-icon.png",
            url:"india.html",
            animation:google.maps.Animation.BOUNCE
      });
      function India(){
            window.location.replace('india.html');
      }
      markerIndia.addListener('click', India);

    //====================================================START OF Africa Marker===================================================//
      var markerAfricaKenya = new google.maps.Marker({
            position:africaKenyaLocation,      
            map: map,
            icon: "assets/img/mu-icon.png",
            url:"india.html",
            animation:google.maps.Animation.BOUNCE
      });
      function AfricaKenya(){
            window.location.replace('africa.html');
      }
      markerAfricaKenya.addListener('click', AfricaKenya);

      //====================================================START OF California Marker===================================================//
         var markerUsaCalifornia = new google.maps.Marker({
            position:usaCaliforniaLocation,      
            map: map,
            icon: "assets/img/ms-icon.png",
            url:"india.html",
            animation:google.maps.Animation.BOUNCE
      });
      function UsaCalifornia(){
            window.location.replace('usacali.html');
      }
      markerUsaCalifornia.addListener('click', UsaCalifornia);

          //====================================================START OF El Paso Marker ===================================================//
     var markerElPaso = new google.maps.Marker({
                position:elPasoLocation,      
                map: map,
                icon: "assets/img/ba-icon.png",
                url:"elpaso.html",
                animation:google.maps.Animation.BOUNCE
          });
          function ElPaso(){
                window.location.replace('elpaso.html');
          }
          markerElPaso.addListener('click', ElPaso);

  var markerChina = new google.maps.Marker({
                position:chinaLocation,      
                map: map,
                icon: "assets/img/dhj-icon.png",
                url:"china.html",
                animation:google.maps.Animation.BOUNCE
          });
          function china(){
                window.location.replace('dai.html');
          }
          markerChina.addListener('click', china);

}
      //====================================================END OF EL PASO'S MARKER FUNCTIONS===================================================//
      //====================================================END OF INITIALIZE FUNCTION===================================================//

      google.maps.event.addDomListener(window, 'load', initialize);
    
     
      //End of Map features function
      //===============================TRIGGER EVENTS================================
      //Start of MapOpacity function to fade in and fade out the map on click\
     if(window.location.hash!=='#map')
     { 
      $("#map-canvas").fadeOut(1000);
      $(document).ready(function(){
        $("#nav_title").click(function(){
            $("#nav_title").hide(500);
            $("#map-canvas").fadeIn(1000);
        });
      });
     }
     else{
         $("#map-canvas").fadeIn(1000);
         $("#nav_title").css("display","none");
        $("header-in").css("display", "none");
     }
