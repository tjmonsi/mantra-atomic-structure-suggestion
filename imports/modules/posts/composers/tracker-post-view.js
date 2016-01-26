export const trackerPostView = ({context, postId}, onData) => {
  const {Meteor, Collections, Tracker} = context();
  Meteor.subscribe('posts.single', postId, () => {
    const post = Collections.Posts.findOne(postId);
    onData(null, post);
  });

  const postFromCache = Tracker.nonreactive(() => {
    return Collections.Posts.findOne(postId);
  });

  if (postFromCache) {
    onData(null, postFromCache);
  } else {
    onData();
  }
};
