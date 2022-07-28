


const cargarProductos = () => {
    for (let index = 0; index < 30; index++) {
        const productoHTML = `
                 <div class="card mb-3">
                    <img class="card-img-top" src="assets/images/productoItem.jpg" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title"> Rasti </h5>
                    <p class="card-text">Este juego orientado a la construccion aumenta la creatividad de los niños.</p>
                    <p class="card-text"><small class="text-muted">Juegos</small></p>
                    </div>
                </div>
            `;
        document.querySelector('.productosContainer').innerHTML += productoHTML;

    }
}


$(document).ready(function () {
    cargarProductos();
});