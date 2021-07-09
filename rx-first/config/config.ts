import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {},
  // mfsu:{},
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
