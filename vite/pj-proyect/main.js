import './src/css/style.css'
import './src/css/tablet.css'
import logo from './assets/img/logo.svg'
import imagenbg from './assets/img/Bitcoin.svg'
import up from './assets/icons/trending-up.svg'
import down from './assets/icons/trending-down.svg'
import batata from './assets/icons/batata.svg'
import clock from './assets/icons/clock.svg'
import eye from './assets/icons/eye.svg'
import dinner from './assets/icons/dollar-sign.svg'
import check from './assets/icons/check-circle.svg'



document.querySelector('#app').innerHTML = `
  <header >
          <img src="${logo}" alt="">
          <div class="header--title-container">
              <h1>La proxima revolucion en el intercambio de criptomonedas.</h1>
              <p>
                  Batatabit te ayuda a navegar entre los diferentes precios y tendencias
              </p>
              <a href="#plans" class="header--button">Conoce nuestro planes <span></span></a>
          </div>
      </header>
  <main>
    <!-- Primera section-->
    <section class="main-exchange-container">
        <img class="backgroundimg" src="${imagenbg}">
        <div class="main-exchange-container-title">
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>Traemos informacion en tiempo real de las casa de cambio y las monedas mas imporrtantes del mundo</p>
        </div>
        <section class="main-tables-container">
          <!-- Scroll 2-->
          <div class="main-currency-table">
              <p class="currency-table-title">Monedas</p>
              <div class="currency-table-container">
                  <table>
                      <tr>
                          <td class="table__top-left">Bitcoin</td>
                          <td class="table__top-right table__right">$1.96 <img src="${down}" class="down"></td>
                      </tr>
                      <tr>
                          <td>Ethereum</td>
                          <td class="table__right">$0.07 <img src="${up}" class="up"></td>
                      </tr>
                      <tr>
                          <td>Ripple</td>
                          <td class="table__right">$2.15 <img src="${down}" class="down"></td>
                      </tr>
                      <tr>
                          <td class="table__bottom-left ">Stellar</td>
                          <td class="table__bottom-right table__right">$4.96 <img src="${down}" class="down"></td>
                      </tr>
                  </table>
              </div>
              <div class="currency-table--date">
                  <p><b>Actualizado:</b> 8 Marzo 16:50</b></p>
              </div>
          </div>
          <!-- Scroll 2-->
          <div class="main-commissions-table">
              <p class="commissions-table-title">Comisiones</p>
              <div class="commissions-table-container">
                  <table>
                      <tr>
                          <td class="tablecomi__top-left"> Bitrade</td>
                          <td class="tablecomi__top-right tablecomi__right">$12.96 </td>
                      </tr>
                      <tr>
                          <td>Bitpreco</td>
                          <td class="tablecomi__right">"13.07</td>
                      </tr>
                      <tr>
                          <td>Novadax</td>
                          <td class="tablecomi_right">$13.15 </td>
                      </tr>
                      <tr>
                          <td class="tablecomi__bottom-left">Coinext</td>
                          <td class="tablecomi__bottom-right tablecomi__right">$14.96</td>
                      </tr>
                  </table>
              </div>
              <div class="commissions-table--date">
                  <p><b>Actualizado:</b> 8 Marzo 10:35</p>
              </div>
          </div>
        </section>
      </section>

      <!-- Seccion de cards-->

      <section class="main-product-datail">
          <img src="${batata}" class="product-detail--batata-logo">
          <div class="product-detail--title">
              <h2>Creamos un producto sin comparación.</h2>
              <p>Confiable y diseñado para su uso diario</p>
          </div>
          <!-- contenedor 1-->
          <section class="product-cards--container">
              <article class="product-detail--card">
                  <img src="${clock}" class="icon--card clock">
                  <p class="product--card-title">Tiempo real</p>
                  <p class="product--card-body">Nuestra API toma informacion minuto a minuto sobre las tasas que mas determinan el comportamiento.</p>
              </article>
          <!-- </section>-->

          <!-- contenedor 2-->
          <!--<section class="product-cards--container"> -->
              <article class="product-detail--card">
                  <img src="${eye}" class="icon--card eye">
                  <p class="product--card-title">No hay tasas escondidas</p>
                  <p class="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estas adquiriendo.</p>
              </article>
          <!-- </section> -->
          <!-- contenedor 3-->

          <!--<section class="product-cards--container"> -->
              <article class="product-detail--card">
                  <img src="${dinner}" class="icon--card dinner">
                  <p class="product--card-title">Compara monedas</p>
                  <p class="product--card-body">No mas rumores, con Babtabit sabras el valor real de cada moneda en el mercado actual.</p>
              </article>
          <!-- </section> -->
          <!-- contenedor 4-->

          <!-- <section class="product-cards--container"> -->
              <article class="product-detail--card">
                  <img src="${check}" class="icon--card check">
                  <p class="product--card-title">Informacion confiable</p>
                  <p class="product--card-body">Nuestras fuentes estan 100% verificadas y continuamos auditando su contenido mienstras se actualizan.</p>
              </article>
          </section>

      </section>

      <!-- tercera secion -->

      <section class="bitcoin-img-container">
          <h2>Conócelo hoy.</h2>
      </section>

      <!-- Ultima secion-->


      <section id="plans" class="main-plans-container">
          <!-- titulo y subtitulo-->
          <div class="plans--title">
              <h2>Escoge el plan que mejor se ajuste a ti.</h2>
              <p>Cualquier plan te da acceso completo a nuestra plataforma</p>
          </div>

          <!-- Contenedor de tarjetas-->
          <section class="plans-container--slider">

            <!-- tarjeta 1-->
            <article class="plans-container--card1">
                <p class="recomendado">Recomendado</p>
                <div class="plan-info-container">
                    <h3 class="plan-card--title">Pago Semanal</h3>
                    <p class="plan-card--price"><span>$</span> 14</p>
                    <p class="plan-card--saving1">* Ahorras $85 comparado al plan mensual.
                    </p>
                    <button class="plan-card--ca">Escoger este <span></span>        
                    </button>
                </div>
            </article>

            <!-- tarjeta 2-->
            <article class="plans-container--card2">
                <p class="recomendado">Mensual</p>
                <div class="plan-info-container">
                    <h3 class="plan-card--title">Pago Mensual</h3>
                    <p class="plan-card--price"><span>$</span> 70</p>
                    <p class="plan-card--saving2">* Ahorras $129 comparado al plan mensual.</p>
                    <button class="plan-card--ca">Escoger este <span></span>        
                    </button>
                </div>
            </article>
            <!-- tarjeta 3-->
            <article class="plans-container--card3">
                <p class="recomendado">Anual</p>
                <div class="plan-info-container">
                    <h3 class="plan-card--title">Pago Anual</h3>
                    <p class="plan-card--price"><span>$</span> 949</p>
                    <p class="plan-card--saving3">* Ahorras $239 comparado al plan mensual.</p>
                    <button class="plan-card--ca">Escoger este <span></span>        
                    </button>
                </div>
            </article>

        </section>

    </section>
  </main>
  <footer>
        <section class="left">
            <ul>
                <li>
                    <a href="#">Linkedin</a></li>
                <li>
                    <a href="#">Crunchbase</a></li>
                <li>
                    <a href="#">Hackernews</a></li>
            </ul>
        </section>
        <section class="right">
            <img src="./assets/img/logo-footer.svg" alt="Logo de Batatabit 2020 ">
        </section>
    </footer>
`

setupCounter(document.querySelector('#counter'))
