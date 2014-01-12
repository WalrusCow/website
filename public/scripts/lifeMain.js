requirejs.config({
  baseUrl: '/scripts/life',
  paths: {
    'require': '../require',
    'util': '../util',
    'sg': '../sg'
  }
});

requirejs(['life'], function(Life) {
  new Life();
});

