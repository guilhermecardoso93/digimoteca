const axios = require('axios');

function findDigimon(){
  const url = 'https://digimon-api.vercel.app/api/digimon'

  axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
}

findDigimon()