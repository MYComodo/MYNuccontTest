const fetch = require('node-fetch');

fetch('https://swapi.co/api/people').then(response => response.json()).then(data => console.log(data));