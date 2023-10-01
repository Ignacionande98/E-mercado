.jumbotron,
.card-body,
.container,
.site-header {
  font-family: 'Raleway', serif !important;
}

/*carousel*/


#carouselExampleControls {
  border: 1px solid #ccc; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
  width: 50%;
  height: auto;
}

#productComments {
  margin-top: 30px;
  max-width: 500px;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50%;
  gap: 0.5rem; */
}

#related div {
  display: inline-block;
  margin-right: 20px; 
  text-align: center; 
}

.comment {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.comment:hover {
  background-color: #f0f0f0;
}

.comment p {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
}

.comment .prfUsuario {
  color: #007bff;
  font-weight: bold;
}

.comment .commentText {
  margin-top: 5px;
}

.comment .commentDate {
  font-size: 12px;
  color: #888;
}

.comment .actions {
  margin-top: 10px;
}

/* Entrega 3 */

.rounded-fill {
  background-color: white;
}

#main-product-info {
  display: inline;
}

#productImages img, #related img {
  width: 250px;
  margin: 5px 10px 5px 0;
  border: gray 1px solid;
  border-radius: 5px;
  transition: transform 0.3s ease; 
  cursor: pointer;
}

#productImages img:hover {
  transform: scale(1.1); 
}

#productName {
  padding: 25px 0 0;
  font-size: 24px;
  color: #007bff; 
  font-weight: bold;
  margin-bottom: 10px; 
}

#productPrice {
  font-size: 18px; 
  margin-bottom: 10px; 
}

#productDescription {
  margin-bottom: 20px; 
}

#productSoldCount {
  font-style: italic; 
  margin-top: 10px; 
}

hr {
  margin: 20px 0; 
  border: none;
  border-top: 1px solid #ccc; 
}

.prfUsuario {
  font-size: 20px;
}

/* PRODUCTOS */

.subtitle {
  font-size: 2rem;
  text-align: center;
  margin-top: 27px;
}

.list-group {
    cursor: pointer;
    
}

#formComments {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

#titleForm {
  font-weight: bold;
  font-size: 25px;
  color: #007bff;
}

.opinion {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  letter-spacing: 1px;
}

#commentButton {
  margin-top: 10px;
  color: #007bff;
  border: none;
  padding: 5px 10px;
  max-width: 100px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
}

#commentButton:hover {
  background-color: #007bff11;
  color: black
}

#comment {
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  color: #333;
  background-color: #fff;
}

#comment:focus {
  border-color: #007bff;
}

#puntuacion {
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 200px;
  color: #333;
  background-color: #fff;
}

#puntuacion option {
  font-size: 16px;
  padding: 5px;
}

.product, .product.hidden {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 0.5px solid gray;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: #53c0fb04;
}

.product h4 {
  color: #0087F7;
  font-weight: bold;
}

.product h5 {
  font-size: 17px;
  position: absolute;
  bottom: 0;
 
}

h5 {
  background-color: darkblue;
  color: white;
  font-weight: bold;
}

.product:hover {
  background-color: #80808015;
}

.product img {
  width: 80% !important;
  height: auto !important;
  border: 3px solid rgb(128, 128, 128);
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  float: right;
  max-width: 100%; /* prueba */
}

.divForText {
  position: relative;
}

.parrafoSub {
  font-size: 19px;
  
  text-align: center;
}

#mainLogin {
  background-color: white;
}

.mainDiv {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.imgForm {
  width: 50%;
  height: auto;
  max-width: 1200px;
}

.sectionForm {
  display: flex;
  justify-content: center;
}

.htresForm {
  font-size: 35px;
}

/* FORMULARIO LOGIN */

.general-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 0.1px solid black;
  border-radius: 5px;
}

.general-form label {
  font-size: 16px;
  margin-bottom: 10px;
}

.general-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.general-form button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.general-form button:hover {
  background-color: gray;
  color: #000000;
}

.boton-enlace {
  text-decoration: none;
  color: white;
}

.boton-enlace:hover {
  background-color: gray;
  color: #000000;
}

/* INPUT   */

.inputBuscar {
  display: flex;
  justify-content: space-between;
}

#inputFilter {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
}

#inputFilter::placeholder {
  color: #999;
}

.jumbotron .display-4 {
  font-weight: bold;
}

nav a {
  text-decoration: none;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.jumbotron {
  height: 50vh;
  padding: 5em inherit;
  margin-bottom: 0;
  background-color: #53C0FB;
  background: url('../img/cover_back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  font-weight: bold;
}

@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-shadow: 1px 1px 2px grey;
}

.jumbotron .lead {
  font-size: 38px;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}

.site-header a {
  color: white;
  transition: ease-in-out color .15s;
}

.site-header .dropdown-menu a {
  color: black;
}

.dropzone {
  border: 2px dashed #0087F7;
  border-radius: 5px;
  background: white;
}

.img-fit {
  max-height: 100%;
}

.alert {
  position: fixed;
  top: 80px;
  width: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
}

.cursor-active {
  cursor: pointer;
}

.left {
  float: left;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.5);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

#spinner-wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1021;
  display: none;
}

main {
  min-height: calc(100vh - 210px);
}

a.custom-card,
a.custom-card:hover {
  color: inherit;
  text-decoration: inherit;
}

.checked {
  color: orange;
}
