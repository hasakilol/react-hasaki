import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/locale'],
  // plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/access', '@umijs/plugins/dist/model', '@umijs/plugins/dist/initial-state', '@umijs/plugins/dist/request', '@umijs/plugins/dist/layout'],
  // antd: {},
  // initialState: {},
  icons: { autoInstall: {} },
  // layout: false,
  npmClient: 'npm',
  locale: {},
});
