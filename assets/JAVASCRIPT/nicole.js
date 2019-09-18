
/*   FETCHING DATA FROM FOURSQUARE > DETAILED INFO

fetch('https://api.foursquare.com/v2/venues/explore?client_id=510DSBYZX02ICLRH4D50YORUVGXC0SJWHVUT4MGSAPHIYJ50&client_secret=YDYFSSHKBCTPZVG3VTZETPCSJBAJCFDFH21TJGNT0X0P5VO5&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        // Code for handling errors

console.log(data);
    });
*/

fetch('https://atlas-obscura-api.herokuapp.com/api/atlas/destinations?region=Central-America')
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {


        console.log(data);



    });


