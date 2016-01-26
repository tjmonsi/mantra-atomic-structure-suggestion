import addInitialData from './configs/post-fixture.js';
import {initContext} from '/imports/configs/context';
import serverMethods from './methods';

const context = initContext();
addInitialData();

serverMethods(context);
