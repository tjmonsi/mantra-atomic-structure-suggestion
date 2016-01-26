import {Mongo} from 'meteor/mongo';

const Posts = new Mongo.Collection('posts');

Posts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Posts.methods = {};

export default Posts;
