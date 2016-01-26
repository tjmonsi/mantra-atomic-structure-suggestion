# Mantra Structure using Atomic Design

## How To run

- run `npm install` to install NPM dependencies
- run `meteor -p {port}` to run it on `localhost:{port}` or just run `meteor` to run on default `localhost:3000`

## What are the changes?

I separated parts of the original core module (where posts and components were bundled into one) and created these

```
- comments
- comments-containers
- core-components
- posts
- posts-containers
``` 

### Core-Components

You can check them out here:

The Core-Components module is just a list of general stateless react ui components that just show information based on how they are defined in that file. That means these components can be reused by any module as long as they pass the right data to the right parameters of the stateless react ui component.

### Posts and Comments

You can check them out here:

I added a folder in these modules called composers, Composers are based on the idea provided by `react-komposer` to provide data coming from `Meteor.Collections`, `RxJS`, or `Redux` that can be reused by any container that would need that information. These modules also provide all the actions needed in the client and methods needed by both the client and server. 

The good thing here is that even if the method is put in this folder, because it is inside the imports folder, it will not be loaded in the client unless explicitly imported inside the main.js

### Posts-Containers and Comments-Containers

You can check them out here:

These containers are what I envisioned to be developer created containers using the core-components (which can be npm-module-able) and posts/comments modules (which can also be npm-module-able). The idea of these containers would be transform the data output of the generalized structure from the composers folder and put it in the pre-defined structure of the ui elements in the components module. 

I feel it is a bit hackish at the moment because you need to wrap around the container within a container (you can see the example here: ). But the general idea is the same. 

If there's a way to map the data from a particular model (like from `Meteor.Collections`) to the parameters of the React UI component without doing an additional wrapper then that would be great. The idea would be something like this.

```
// Coming from /imports/modules/posts/composers/tracker-post-view.js
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

// Coming from /imports/modules/core-components/components/article.jsx
const Article = ({title, text}) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <h2>{title}</h2>
    </div>
    <div className="mdl-cell mdl-cell--12-col">
      {text}
    </div>    
  </div>
);

// And given that the post structure is this:
// post = {
//   title: 'This is a title',
//   content: 'This is the text' 
// }

// Instead of this:

// This transforms the title to title, and content to text
const transformer = ({title, content}, onData) => {
  onData(null, {
    title,
    text: content
  });
};

// This puts the data from the transformer composer to article
const containerArticle = composeAll(
  compose(transformer),
  useDeps()
)(Article);

// And this gets the data from Collections, and uses the containerArticle above to transform the data
export default composeAll(
  composeWithTracker(trackerPostView),
  useDeps()
)(containerArticle);

// Now we use this:

export default composeAll(
  composeWithTracker(trackerPostView, {
    title: 'title',
    text: 'content'
  }),
  useDeps()
)(Article)

// The keys of the object would be the parameters of the Article, and the values of the keys would be the key in the object passed by the generalized original onData function

// Better yet, we can try to do this:

export default composeAll(
  composeWithTracker(trackerPostView, {
    title: ({title}) => (title),
    text: ({content}) => {
      return `${content.substr(0, 200)}...`;
    }
  }),
  useDeps()
)(Article)

// This allows us to create functions to transform or manipulate the data before putting it in the UI component

```
