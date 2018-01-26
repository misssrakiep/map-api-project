var searchResult = [];
$(document).ready(function(){
    
    var projectText = document.querySelector('.projectText').innerHTML;
    var projectTemp = Handlebars.compile(projectText);

    $.ajax({
        type: "GET",
        url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
        dataType: "json",
        success: function(results){
            console.log(results);
              document.querySelector('.projectCard').innerHTML = projectTemp({
                results: results
                });   
        }
    }); //end of ajax call for data from education and training api
}); //End of document ready