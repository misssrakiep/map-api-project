
var searchResult = [];
$(document).ready(function(){
    $('.button-collapse').sideNav();    
    //search from searchbox needs run through before the ajax call is made
    
    $.ajax({
            headers: { "Accept": "application/json"},
            type: "GET",
            url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
            dataType: "json",
            success: function(results){
                console.log(results)
                results.forEach(function(item, index){
                    searchResult.push({
                        City: $.trim(item.City), 
                        Latitude: item.Latitude, 
                        Longitude: item.Longitude,
                        Projects: $.trim(item.ProjectName),
                        Address: $.trim(item.Address),
                        Country: $.trim(item.CountryName),
                        ProjectType: item.WfSType
                    });  
                    
                })
                
            }    
        }); //end of ajax call for data from education and training api
        
    myMap();
});

function myMap() {
    var searchBox = $(".searchBox");
    var searchLoc;
    var searchLat;
    var searchLon;
    var marker;

    var cityText = $('.cityText').html();
    var cityTemp = Handlebars.compile(cityText);

    searchBox.keyup(function (results){
        searchResult.forEach(function(item, index){
            if(searchBox.val() === item.City || searchBox.val() === item.Address){
                $('.cityCard').html(cityTemp({
                    city : item.City,
                    project : item.Projects,
                    projectType: item.ProjectType,
                    address : item.Address,
                    country : item.Country
                }));
                searchLat = item.Latitude;
                searchLon = item.Longitude;
                searchLoc = new google.maps.LatLng(searchLat, searchLon);
                marker = new google.maps.Marker({
                    position : searchLoc,
                    map : map 
                });
                marker.setPosition(searchLoc);
            }

        }) 
        map.setCenter(searchLoc);
        map.setZoom(15);
    })


   
    var mapProp= {
        center: new google.maps.LatLng(39.50, -98.35),
        zoom:5
    };
    var map=new google.maps.Map($("#googleMap")[0],mapProp);
    
}