import CuButton from './src/main';

/* istanbul ignore next */
CuButton.install = function (Vue) {
  Vue.component(CuButton.name, CuButton);
};

export default CuButton;
