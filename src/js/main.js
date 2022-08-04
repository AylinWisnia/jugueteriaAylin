const cargarHeader = () => {

    $('body').prepend(
        `  <header class="fondo-header position-fixed w-100">
            <div class="col-lg-8 end-0 h-100 position-absolute top-0">
            </div>
            <nav class="navbar scroll-top navbar-dark navbar-expand-lg pb-3 pt-3 shadow-none">
                <div class="container">
                    <a class="imagen-logo" href="../index.html"><img class="navbar-logo" src="../assets/images/logo.png"
                            alt="logo de la jugueteria"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown-2" aria-controls="navbarNavDropdown-2" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarNavDropdown-2">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-white" aria-current="page" href="../index.html#linkProductos">juegos y
                                    juguetes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="../public/preguntasfrecuentes.html">Preguntas frecuentes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="../public/contacto.html">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pb-lg-3 pe-lg-4 ps-lg-4 pt-lg-3 text-white"
                                    href="#">Trabajá con
                                    nosotros</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header> `
    )
}

const cargarFooter = () => {
    $('body').append(`
    <footer class="py-5">
      <div class="container">

        <div class="row contentFooter">
          <div class="col-4">
            <a class="imagen-logo" href="#"><img class="navbar-logo" src="../assets/images/logo.png"
                alt="logo de la jugueteria"></a>
          </div>

          <div class="col-4 ">
            <form class="text-white">
              <h5>Recibí nuestras últimas ofertas!</h5>
              <p>Cada mes recibiras nuevos productos y grandes ofertas.</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Corre</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Correo electronico">
                <button class="btn btn-primary" type="button">Subscribirse</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-around py-4 my-4 border-top">
        <p class="text-white">© 2022 Todos los derechos reservados</p>
        <div class="">
          <a class="text-white" href="#">Privacidad</a>
          <a class="text-white" href="#">Términos</a>
          <a class="text-white" href="#">Cookies</a>
          <a class="text-white" href="#">Trabaja con nosotros</a>
        </div>
    </footer>
`)

}

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
    cargarHeader()
    cargarFooter()


    cargarProductos()
});





