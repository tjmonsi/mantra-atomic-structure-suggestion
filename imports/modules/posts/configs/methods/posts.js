export default (context) => {  
  const {Collections, Meteor, Method, SimpleSchema} = context;
  const {Posts} = Collections;
  
  if (!Posts) {
    throw new Meteor.Error('Posts.collectionDoesNotExist',
      'The Posts collection does not exist in the /imports/configs/collections');
  } else if (!Posts.methods) {
    Posts.methods = {};
  }

  Posts.methods.insert = new Method({
    name: 'Posts.methods.insert',

    validate: new SimpleSchema({
      _id: { type: String },
      content: { type: String },
      title: { type: String }
    }).validator(),

    run({_id, title, content}) {
      const createdAt = new Date();
      const post = {
        _id,
        title,
        content,
        createdAt
      };
      return Posts.insert(post);
    }
  });
};
