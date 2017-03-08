/**
 * Created by sophia on 3/3/17.
 */
$(document).ready(function() {


  function displaySearchResults(search) {
    var test = $('.search').innerHTML;
    findMatches(test, search);

    // const cityName = search[1].city; //change this 1 to a filter match somehow
    // const stateName = search[1].state;
    // const population = search[1].population;
    // return cityName + ", " + stateName + " " + "  " + population;
  }


  function findMatches(keyword, dataSource) {
    return dataSource.filter(function(location) {
      const regex = new RegExp(keyword, 'gi');
      return location.city.match(regex);
    });
  }


  // const cities = [];
  function doSearch() {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const params = {
      action: 'opensearch',
      // search: query,
      format: 'json'
    };

    $.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      data: params
    }).done(function(data) {
      if (data) {
        console.log(displaySearchResults(data));
        // console.log(data.filter(function(location) {
        //   const regex = new RegExp(test, 'gi');
        //   return location.city.match(regex);
        // })); //this works. now how to parse it?
      }
    });
  }


  $('.search').on('keyup', function() {
    const searchWords = this.value;
    doSearch(searchWords); //on keyup, full array appears
  });

});