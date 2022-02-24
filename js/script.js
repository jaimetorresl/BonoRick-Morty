const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('container');

let card = `<div class="card" style="width: 18rem;">
<img src="{{img}}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">{{titulo}}</h5>
  <p class="card-text">Especie: {{especie}}</p>
</div>
</div>`

async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function render(){
    const data = await getData();
    console.log(data.results)
    const dataMapped = data.results.map((character) => {
        let nombre = character.name;
        let img = character.image;
        let especie= character.species;
        console.log(img)
        let element = card.replace('{{titulo}}', nombre)
        element = element.replace('{{img}}', img)
        element = element.replace('{{especie}}', especie)
        const container = document.getElementById('container')
        container.innerHTML += (element)
    })
}

render();
