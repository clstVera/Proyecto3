let temporadas = JSON.parse(localStorage.getItem('season'))

window.addEventListener('load', e => {
    loadSeason()
})

function loadSeason() {
    temporadas.forEach(temporada => {
        document.querySelector('.navbar-nav').innerHTML += `    <li class="nav-item fs-4" style="width:15vw">
        <a class="nav-link active text-white" aria-current="page" href="season.html?id=${temporada.id}">Temporada ${temporada.id}</a>
    </li>`
        document.querySelector('.season').innerHTML += `    <div class="col-md-6 col-xl-4">
                                                                <div class="card h-100 ${temporada.bg}">
                                                                    <div class="row g-0">
                                                                        <div class="col-md-4">
                                                                            <img class="img-fluid rounded" src=${temporada.img}>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="card-body">
                                                                                <h5 class="card-title text-white">Temporada ${temporada.id}</h5>
                                                                                <p class="card-text">${temporada.description}</p>
                                                                                <p class="card-text d-inline text-white">Año de estreno: ${temporada.year}</p>
                                                                                <a href="season.html?id=${temporada.id}" class="card-link d-inline text-white text-decoration-none ms-4">
                                                                                    <small>Mas...</small>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>`
    })
}