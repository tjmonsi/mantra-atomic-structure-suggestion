import methods from './configs/methods';
import actions from './actions';

export default {
  actions,
  load(context) {    
    methods(context);
  }
};
