requirejs.config({
  baseUrl : '/scripts/snake',
  paths: {
    'require': '../require',
    'util': '../util',
    'sg': '../sg'
  }
});

requirejs(['snake'], function(SnakeGame) {
  new SnakeGame();
});
