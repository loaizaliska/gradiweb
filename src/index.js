import '@fortawesome/fontawesome-free/js/all';
import style from './app.scss';


const API_URL = 'https://fakestoreapi.com/';
const xhr = new XMLHttpRequest();

function getProducts(){
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);

        const result = document.querySelector('.products');

        result.innerHTML = data.map((product) => `
        <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="image"> 
                <img class="img-fluid" src="${product.image}" alt="${product.category}">
            </div>
            <div class="title"> ${product.title}</div>
            <div class="price"><span class="current_symbol">$ </span> <span class="amount">${product.price}</span> <span class="cant">(${product.rating.count})</span>  <span class="rating">${product.rating.rate} <i class="fas fa-star"></i></span></div>
        </div>
        `).join(" ");
    }
}
xhr.addEventListener("load", getProducts);
xhr.open('GET', `${API_URL}/products?limit=4`);
xhr.send();

//---//
function getProductsTwo(){
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);

        const result = document.querySelector('.products_2');

        result.innerHTML = data.map((product) => `
        <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="image"> 
                <img class="img-fluid" src="${product.image}" alt="${product.category}">
            </div>
            <div class="title"> ${product.title}</div>
            <div class="price"><span class="current_symbol"></span> <span class="amount">${product.price}</span><span class="cant">(${product.rating.count})</span> <span class="rating">${product.rating.rate} <i class="fas fa-star"></i></span></div>
        </div>
        `).join(" ");
    }
}
const xhr2 = new XMLHttpRequest();
xhr2.addEventListener("load", getProductsTwo);
xhr2.open('GET', `${API_URL}/products/category/jewelery`);
xhr2.send();


// SET currency


//currency
//currency
document.querySelector('#currency').onclick = function (){
    let main_currency = this.options[this.selectedIndex].value;
    console.log(main_currency);
    const API_URL_CURRENCY = 'https://v6.exchangerate-api.com/v6/8436b5b4aec3adcdbbdd1566/latest/';
    const xhr_currency = new XMLHttpRequest();

    function changeCurrency() {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.response);
            const currency =  data.conversion_rates.EUR;


            let cant = document.getElementsByClassName("amount");
            let amount = document.querySelector(".amount");
            let canti = amount.textContent;

            for (var i = 0; i < cant.length; ++i) {
                const result = cant[i];
                /*const num = parseFloat(result);
                document.getElementsByClassName("amount").innerHTML =  num*currency;*/
                result.innerHTML = Math.round(result.innerHTML*currency);
            }
        }
    }

    xhr_currency.addEventListener("load", changeCurrency);
    xhr_currency.open('GET', `${API_URL_CURRENCY}`);
    xhr_currency.send();
}




