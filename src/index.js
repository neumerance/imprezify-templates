import * as ImpTemplates from './components/templates';

const CreativeTemplates = {
  install(Vue) {
    Object.values(ImpTemplates).forEach((Component) => {
      Vue.use(Component);
    });
  },
};

export default CreativeTemplates;
export * from './components/templates';
