const divImage = document.querySelector('div');
async function populate() {
    const requestURL = 'https://akabab.github.io/superhero-api/api/all.json';
    const request = new Request(requestURL);
 
    const response = await fetch(request);
    const superHeroes = await response.json();
 
    console.log(superHeroes);
    for(const obj of superHeroes){
        img = document.createElement('img');
        img.setAttribute('src',obj.images.lg);
        heroName = document.createElement('h4');
        heroName.textContent = obj.name;
        divImage.appendChild(img);
        divImage.appendChild(heroName);
    }
  }
 
  populate();