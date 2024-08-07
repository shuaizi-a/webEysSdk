// 表示渲染出第一个内容，这里的“内容”可以是文本、图片、canvas。
export default function observerFCP() {
  const entryHandler = list => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        observer.disconnect();
        const json = entry.toJSON();
        const reportData = {
          ...json,
          type: 'performance',
          subType: entry.name,
          pageUrl: window.location.href
        };
        // 发送数据 todo;
        console.log('fcp', reportData);
      }
    }
  };
  // 统计和计算fcp的时间
  const observer = new PerformanceObserver(entryHandler);
  // buffered: true 确保观察到所有paint事件
  observer.observe({ type: 'paint', buffered: true });
}
