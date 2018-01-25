var searchResult = [];
$(document).ready(function(){
    
    var projectText = document.querySelector('.projectText').innerHTML;
    var projectTemp = Handlebars.compile(projectText);

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
                    Address: results[i].Address,
                    Country: results[i].CountryName.trim(),
                    ProjectType: results[i].WfSType
                });  
                
            }
              
        }
    }); //end of ajax call for data from education and training api
    
    function allProjects() {
        console.log("------");
        console.log(searchResult); 
            for (var i=0; i<searchResult.length; i++){
                document.querySelector('.projectCard').innerHTML = projectTemp({
                    city : searchResult.City,
                    project : searchResult.Projects,
                    projectType: searchResult.ProjectType,
                    address : searchResult.Address,
                    country : searchResult.Country
                });
            }


        
    }

    allProjects();
}); //End of document ready