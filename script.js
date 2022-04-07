const main = document.querySelector('main')

function findDigimon() {
  const url = 'https://digimon-api.vercel.app/api/digimon/'

  axios
    .get(url)
    .then(response => {
      const data = response.data
      console.log(data)
      digimonData = data
      showDigimon(digimonData)
    })
    .catch(error => console.error(error))
}

findDigimon()

function showDigimon(data) {
  main.innerHTML = ''
  data.forEach(data => {
    const digimonElement = document.createElement('div')
    digimonElement.classList.add('digimon')
    digimonElement.innerHTML = `
    <div class="digimonPic">
    <img src="${data.img}" alt="foto do digimon" class="digimonImg" id="${data.name}">
    </div>
    <div class="digimonInfos">
    <p>Nome:<h4 class='digimonNome'>${data.name}</h4></p>
    <p>Nível:<h4 class='digimonNivel'>${data.level}</h4></p>
    </div>
    `
    main.appendChild(digimonElement)
  })
}
