import ArticleEditor
  from '/imports/modules/core-components/components/molecules/article-editor.jsx';
import {trackerClearErrors}
  from '/imports/modules/posts/composers/tracker-clear-errors';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

const depsArticleEditor = (context, actions) => ({
  submit: actions.posts.createPost,
  callback: actions.posts.gotoViewPost,
  id: 'new-article',
  context: () => context
});

export default composeAll(
  composeWithTracker(trackerClearErrors),
  useDeps(depsArticleEditor)
)(ArticleEditor);
