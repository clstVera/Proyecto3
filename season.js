let url = new URL(window.location);
let idTemporada = url.searchParams.get("id");

let temporadas = JSON.parse(localStorage.getItem('season'))
let episodios = JSON.parse(localStorage.getItem('serie'))

temporadas.forEach(temporada => {
    document.querySelector('.navbar-nav').innerHTML += `    <li class="nav-item fs-4" style="width:15vw">
    <a class="nav-link active text-white" aria-current="page" href="season.html?id=${temporada.id}">Temporada ${temporada.id}</a>
</li>`})

let temporada = episodios.filter(episodio => episodio.season == idTemporada)
document.querySelector('.serie').innerHTML = ''
temporada.forEach(t => {
    document.querySelector('.serie').innerHTML += `<div class="col">
                                                        <div class="card h-100">
                                                            <img class="card-img-top" src=${t.img}>
                                                            <div class="card-body">
                                                                <h5 class="card-title">${t.episode}</h5>
                                                                <p class="card-text">${t.description}</p>
                                                                <p class="card-text text-end">${t.duration}</p>
                                                            </div>
                                                        </div>
                                                    </div>`
})