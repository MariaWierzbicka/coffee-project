import {settings} from './settings.js';

const app = {
  initData: function() {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  

    const productTemplate = document.getElementById('template-product').innerHTML;
    // const generatedProduct = templates.product(thisProduct.data);
    // console.log(generatedProduct);

    const template = Handlebars.compile(productTemplate);
    
    console.log(thisApp.data);
    

    const productData = template(thisApp.data);

    document.getElementById('product').innerHTML += productData;
    
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();