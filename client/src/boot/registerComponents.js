import Injector from 'lib/Injector';
import SSButtonField from '../components/SSButtonField';

const registerComponents = () => {
  Injector.component.register('SSButtonField', SSButtonField);
};

export default registerComponents;
