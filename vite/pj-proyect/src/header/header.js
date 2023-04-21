import logo from '../../assets/img/logo'

const header = document.querySelector('#app').innerHTML = `
    <img src="${logo}" alt="">
    <div class="header--title-container">
        <h1>La proxima revolucion en el intercambio de criptomonedas.</h1>
        <p>
            Batatabit te ayuda a navegar entre los diferentes precios y tendencias
        </p>
        <a href="#plans" class="header--button">Conoce nuestro planes <span></span></a>
    </div>
`
export default header