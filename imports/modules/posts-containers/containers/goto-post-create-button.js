import MdlButton from '/imports/modules/core-components/components/atoms/mdl-button.jsx';
import {useDeps} from 'react-simple-di';

const depsMdlButton = (context, actions) => ({
  callback: actions.posts.gotoCreatePost,
  label: 'New Post',
  context: () => context
});

export default useDeps(depsMdlButton)(MdlButton);
