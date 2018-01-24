var searchBox = document.querySelector(".searchBox").value;



$(document).ready(function(){
    
    //search from searchbox needs run through before the ajax call is made
    
    var searchResult = [];
        $.ajax({
            type: "GET",
            url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
            dataType: "json",
            success: function(results){
                for (var i in results) {
                    searchResult.push({
                        City : results[i].City.trim(),
                        Long: results[i].Longitude,
                        Latitude: results[i].Latitude,
                        ProjectName: results[i].ProjectName.trim(),
                        ProjectType: results[i].ProjectType.trim()
                    });
            // console.log(searchResult);
                }
                

            }    
        }); //end of ajax call for data from education and training api

console.log("qwertyuio", searchResult);

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    myMap();
        });

