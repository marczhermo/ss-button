import registerReducers from './registerReducers';
import registerComponents from './registerComponents';

document.addEventListener('DOMContentLoaded', () => {
  registerComponents();
  registerReducers();
});
