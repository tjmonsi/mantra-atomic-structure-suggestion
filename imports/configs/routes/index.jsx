import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Landing from '/imports/modules/core-components/components/templates/landing.jsx';
import AppBar from '/imports/modules/core-components/components/organisms/app-bar.jsx';
import AppDrawer from '/imports/modules/core-components/components/organisms/app-drawer.jsx';
import NavList from '/imports/modules/core-components/components/molecules/nav-list.jsx';

import PostList from '/imports/modules/posts-containers/containers/post-list';
import PostView from '/imports/modules/posts-containers/containers/post-view';
import PostCreate from '/imports/modules/posts-containers/containers/post-create';

export default (injectDeps) => {
  const LandingCtx = injectDeps(Landing);
  const navs = [
    {
      link: '/',
      label: 'Link 1'
    },
    {
      link: '/',
      label: 'Link 2'
    },
    {
      link: '/',
      label: 'Link 3'
    },
    {
      link: '/',
      label: 'Link 4'
    }
  ];

  const appNav = (
    <NavList
      position = 'app-bar'
      navs = {navs}
    />
  );

  const drawerNav = (
    <NavList
      navs = {navs}
    />
  );

  const layout = {
    appBar: (<AppBar appNav={appNav} />),
    appDrawer: (<AppDrawer appNav={drawerNav}/>)
  };

  FlowRouter.route('/', {
    name: 'post.list',
    action() {
      mount(LandingCtx, {
        ...layout,
        content: (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/view/:_id', {
    name: 'post.view',
    action({_id}) {
      mount(LandingCtx, {
        ...layout,
        content: (<PostView postId={_id} />)
      });
    }
  });

  FlowRouter.route('/post/create', {
    name: 'post.create',
    action() {
      mount(LandingCtx, {
        ...layout,
        content: (<PostCreate />)
      });
    }
  });
};
