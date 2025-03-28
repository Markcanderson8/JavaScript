
/* PRINT CURRENT DATE AND TIME */
// const time = Date();
// console.log(time);

/* PRINT CURRENT WINDOW BUT DOESN'T WORK IN CONSOLE */
// var window = window.print();

/* GET CURRENT DATES IN VARIOUS FORMATS */
// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth();
// var x = date.getHours() + " " + date.getMinutes() + " " + date.getSeconds();
// console.log(x);


// var xhr = new XMLHttpRequest();
// var requestUrl = "https://api.restful-api.dev/objects";
// xhr.open("GET", requestUrl, true); 
// xhr.onload = function(){
//     console.log(xhr.responseText);
//     // Handle data
// };
// xhr.send();


// Define the API URL
// const apiUrl = 'https://api.restful-api.dev/objects';

// Make a GET request
function returnApiData() {
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.map(e => {
            console.log(e.name);
        });

        // console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// returnApiData();

// Days left before Christmas
