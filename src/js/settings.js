export const select = {
  containerOf: {
    navLinks: '.navbar-nav',
    product: '.product',
  },
  templateOf: {
    product: '#template-product',
  }
};

export const settings = {
  db: {
    images: 'images',
    products: 'products',
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    product: 'product',
  },
};

export const templates = {
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML)
};