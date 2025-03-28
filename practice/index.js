
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

// Multiplication and Division with user input
var isClicked = false;


function multiply() {
    const num1 = document.getElementById("inputOne").value;
    const num2 = document.getElementById("inputTwo").value;
    var p = document.getElementById('myP');
    isClicked = true;

    if(isClicked) {
        p.style.display = 'block';
    }
    return p.innerHTML = num1 * num2;
}

function divide() {
    const num1 = document.getElementById("inputOne").value;
    const num2 = document.getElementById("inputTwo").value;
    var p = document.getElementById('myP');
    isClicked = true;

    if(isClicked && num2 != 0) {
        p.style.display = 'block';
        return p.innerHTML = num1 / num2;
    }
    else {
        p.style.display = 'block';
        return p.innerHTML = "Error Can't divide by zero";
    }
}

function clearFields() {
    document.getElementById("inputOne").value = "";
    document.getElementById("inputTwo").value = "";
    var p = document.getElementById('myP');
    p.style.display = 'none';
}