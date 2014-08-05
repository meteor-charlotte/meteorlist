Router.map(function() {
  this.route('home', {path: '/'});
  this.route('hello', {path: '/hello'});
  this.route('goodbye');
  this.route('create-post', {
    path: 'create-post'
  });
});
