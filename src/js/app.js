import { settings, templates } from './settings.js';

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
    console.log(thisApp.data);
  },

  renderProducts(){
    const thisProduct = this;
    const generatedProduct = templates.product(thisProduct.data);
    console.log(generatedProduct);
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.renderProducts();
  },
};

app.init();