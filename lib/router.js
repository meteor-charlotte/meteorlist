Router.map(function() {
  this.route('home', {path: '/'});
  this.route('hello', {path: '/hello'});
  this.route('goodbye');
  this.route('create-post', {
    path: 'create-post'
  });
  this.route('update-post', {
    path: 'update-post/:_id',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
});
