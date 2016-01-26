import {Posts} from '/imports/configs/collections';

export default {
  createPost(context, title, content, next) {
    const {Meteor, LocalState} = context;
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are Required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const _id = Meteor.uuid();

    if (Posts && Posts.methods && Posts.methods.insert && Posts.methods.insert.call) {
      Posts.methods.insert.call({_id, title, content}, (err, res) => {
        if (err) {
          return LocalState.set('SAVING_ERROR', err.message);
        } else if (next) {
          return next(res);
        }
      });
    } else {
      LocalState.set('SAVING_ERROR',
        'There\'s no defined Posts collection or validated insert method');
    }
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
  gotoViewPost({FlowRouter}, postId) {
    return FlowRouter.go('post.view', {_id: postId});
  },
  gotoCreatePost({FlowRouter}) {
    return FlowRouter.go('post.create');
  }
};
