Posts = new Meteor.Collection('posts', {
  schema: new SimpleSchema({
    title: {
      type: String,
      max: 100
    },
    price: {
      type: Number,
      max: 8
    },
    description: {
      type: String,
      max: 250
    },
    type: {
      type: String,
      max: 100
    }
  })
});
