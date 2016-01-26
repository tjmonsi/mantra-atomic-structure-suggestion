import React from 'react';
import SectionList
  from '/imports/modules/core-components/components/organisms/section-list.jsx';
import HeadlineGist
  from '/imports/modules/core-components/components/molecules/headline-gist.jsx';
import PostCreateButton
  from './goto-post-create-button';
import {trackerListPost}
  from '/imports/modules/posts/composers/tracker-post-list';
import {useDeps} from 'react-simple-di';
import {compose, composeWithTracker, composeAll} from 'react-komposer';

const transformer = ({context, posts}, onData) => {
  const {FlowRouter} = context();
  const sections = posts.map((post) => {
    const depsHeadlineGist = (c) => ({
      gist: post.content,
      headline: post.title,
      link: FlowRouter.path('post.view', {_id: post._id}),
      context: () => c
    });
    return React.createElement(useDeps(depsHeadlineGist)(HeadlineGist));
  });
  sections.push(React.createElement(PostCreateButton));
  onData(null, {sections});
};

const containerSectionList = composeAll(
  compose(transformer),
  useDeps()
)(SectionList);

export default composeAll(
  composeWithTracker(trackerListPost),
  useDeps()
)(containerSectionList);
