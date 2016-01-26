import Article from '/imports/modules/core-components/components/molecules/article.jsx';
import {trackerPostView} from '/imports/modules/posts/composers/tracker-post-view';
import {useDeps} from 'react-simple-di';
import {compose, composeWithTracker, composeAll} from 'react-komposer';

const transformer = ({title, content}, onData) => {
  onData(null, {
    title,
    text: content
  });
};

const containerArticle = composeAll(
  compose(transformer),
  useDeps()
)(Article);

export default composeAll(
  composeWithTracker(trackerPostView),
  useDeps()
)(containerArticle);
