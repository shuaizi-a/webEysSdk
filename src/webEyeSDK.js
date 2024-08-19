import performance from './performance/index.js';
import error from './error/index.js';
import behavior from './behavior/index.js';
import { setConfig } from './config.js';
import { lazyReportBatch } from './report.js';

window.__webEyeSDK__ = {
  version: '0.0.1'
};

// 针对Vue项目的错误捕获
export function install(Vue, options) {
  if (__webEyeSDK__.vue) return;
  __webEyeSDK__.vue = true;
  setConfig(options);
  const handler = Vue.config.errorHandler;
  // vue项目中 通过 Vue.config.errorHandler 捕获错误
  Vue.config.errorHandler = function (err, vm, info) {
    // todo: 上报具体的错误信息
    const reportData = {
      info,
      error: err.stack,
      subType: 'vue',
      type: 'error',
      startTime: window.performance.now(),
      pageURL: window.location.href
    };
    lazyReportBatch(reportData);
    if (handler) {
      handler.call(this, err, vm, info);
    }
  };
}
// 针对React项目的错误捕获
export function errorBoundary(err, info) {
  if (__webEyeSDK__.react) return;
  __webEyeSDK__.react = true;
  // todo: 上报具体的错误信息
  const reportData = {
    error: err?.stack,
    info,
    subType: 'react',
    type: 'error',
    startTime: window.performance.now(),
    pageURL: window.location.href
  };
  lazyReportBatch(reportData);
}
export function init(options) {
  setConfig(options);
}

export default {
  install,
  errorBoundary,
  performance,
  error,
  behavior,
  init
};
