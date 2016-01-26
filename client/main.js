import '/node_modules/material-design-lite/material';
import {initContext} from '/imports/configs/context';
import {createApp} from '/imports/libs/mantra';
import {default as routes} from '/imports/configs/routes/index.jsx';

// Import all Modules
import coreComponentsModule from '/imports/modules/core-components';
// import commentsModule from '/imports/modules/comments';
import postsModule from '/imports/modules/posts';
import postsContainersModule from '/imports/modules/posts-containers';

// Import all Routes

const context = initContext();

const app = createApp(context);

// Load all Modules first
// Load first the generalized-modules
app.loadModule(coreComponentsModule);
app.loadModule(postsModule);

// Load all user-generated modules
app.loadModule(postsContainersModule);

// Load all Routes second
app.loadRoutes(routes);
