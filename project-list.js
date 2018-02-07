var searchResult = [];

$(document).ready(function(){

    $('.button-collapse').sideNav();
    
    var projectText = $('.projectText').html();
    var projectTemp = Handlebars.compile(projectText);

    $.ajax({
        headers: { "Accept": "application/json"},
        type: "GET",
        url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
        dataType: "json",
        success: function(results){
            console.log(results);
              $('.projectCard').html(projectTemp({
                results: results
                }));   
        }
    }); //end of ajax call for data from education and training api
}); //End of document ready