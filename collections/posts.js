postsSchemaObject = {
  title: {
    type: String,
    max: 100
  },
  price: {
    type: Number,
    max: 99999
  },
  description: {
    type: String,
    max: 250
  }
};

Posts = new Meteor.Collection('posts', {
  schema: new SimpleSchema(postsSchemaObject)
});
