/**
 * 页面加载完成时间
 */
export default function observerLoad() {
  window.addEventListener('pageShow', function (event) {
    requestAnimationFrame(() => {
      ['load'].forEach(type => {
        const reportData = {
          type: 'performance',
          subType: type,
          pageUrl: window.location.href,
          startTime: performance.now() - event.timeStamp
        };
        // todo
        console.log(reportData);
      });
    }, true);
  });
}
