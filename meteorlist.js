if (Meteor.isClient) {
  Template.home.greeting = function () {
    return "Welcome to meteorlist.";
  };

  Template.home.allPosts = function () {
    return Posts.find({}, {
      sort: {title: -1}
    });
  }

  Template.home.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Posts.find().count() === 0) {
      Posts.insert({
        title: "Yamaha FZ-09",
        price: "7900",
        description: "Deeter's new bike.",
        type: "motorcycle"
      });
      Posts.insert({
        title: "Ducati Monster 1200 S",
        price: "15995",
        description: "Italian sexy!",
        type: "motorcycle"
      });
      Posts.insert({
        title: "Triumph Speed Triple R",
        price: "14699",
        description: "Dream bike from Old Blightey.",
        type: "motorcycle"
      });
    }
  });
}
