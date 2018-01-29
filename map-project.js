
var searchResult = [];

$(document).ready(function(){
    
    //search from searchbox needs run through before the ajax call is made

        $.ajax({
            type: "GET",
            url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
            dataType: "json",
            success: function(results){
                console.log(results)
                for (var i=0; i<results.length; i++){
                    searchResult.push({
                        City: results[i].City.trim(), 
                        Latitude: results[i].Latitude, 
                        Longitude: results[i].Longitude,
                        Projects: results[i].ProjectName.trim(),
                        Address: results[i].Address.trim(),
                        Country: results[i].CountryName.trim(),
                        ProjectType: results[i].WfSType
                    });  
                    
                }
                
            }    
        }); //end of ajax call for data from education and training api

console.log(searchResult);

function myMap() {
var searchBtn = document.querySelector("#searchButton");
var searchBox = document.querySelector(".searchBox");

var searchLoc;
var searchLat;
var searchLon;
var marker;

var cityText = document.querySelector('.cityText').innerHTML;
var cityTemp = Handlebars.compile(cityText);

searchBtn.addEventListener("click", function searchPlace (){
    for(var i=0; i<searchResult.length; i++){
        if(searchBox.value === searchResult[i].City || searchBox.value === searchResult[i].Address){
              console.log(searchResult[i].City);
            document.querySelector('.cityCard').innerHTML = cityTemp({
                city : searchResult[i].City,
                project : searchResult[i].Projects,
                projectType: searchResult[i].ProjectType,
                address : searchResult[i].Address,
                country : searchResult[i].Country
            });
            searchLat = searchResult[i].Latitude;
            searchLon = searchResult[i].Longitude;
            searchLoc = new google.maps.LatLng(searchLat, searchLon);
            marker = new google.maps.Marker({
                position : searchLoc,
                map : map 
            });
            marker.setPosition(searchLoc);
        }

    }
    map.setCenter(searchLoc);
    map.setZoom(14);
})
    
    console.log(searchLoc)



   
    var mapProp= {
        center: new google.maps.LatLng(39.50, -98.35),
        zoom:5
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    }
    myMap();
});