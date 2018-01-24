var searchBox = document.querySelector(".searchBox").value;
var searchResult = [];



    $(document).ready(function(){

    //search from searchbox needs run through before the ajax call is made

        $.ajax({
type: "GET",
url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
dataType: "json",
success: function(results){
    searchResult.push(results.value);
}    
}); //end of ajax call for data from education and training api

console.log(searchResult);

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    myMap();
        });

