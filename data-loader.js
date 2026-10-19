(function(){
  'use strict';
  var dataset = { survival: [], business: [], classics: [], trends: [] };
  var slangKeywords = ['班味', '内耗', '卷', '躺平', 'emo', '破防', '牛马', '太顶了', '太绝了', '靠谱', '低调', '搞定'];

  function isSlang(text) {
    return slangKeywords.some(function(kw) { return text.indexOf(kw) > -1; });
  }

  function process(item, cat) {
    if (!item.zh || !item.en) return;
    dataset[cat].push(item);
    if (isSlang(item.zh)) dataset.trends.push({ zh: item.zh, pinyin: item.pinyin, en: item.en, category: 'trends' });
  }

  // 处理纯数组
  if (window.DAILY_DATA) window.DAILY_DATA.forEach(function(item) { process(item, 'survival'); });
  if (window.BUSINESS_DATA) window.BUSINESS_DATA.forEach(function(item) { process(item, 'business'); });
  if (window.CLASSICS_DATA) window.CLASSICS_DATA.forEach(function(item) { process(item, 'classics'); });

  // 兼容旧的 STORIES_DATA
  if (window.STORIES_DATA && window.STORIES_DATA.stories) {
    window.STORIES_DATA.stories.forEach(function(story) {
      var cat = 'survival';
      if (story.category === 'business' || (story.columnId && story.columnId.indexOf('biz') > -1)) cat = 'business';
      else if (story.category === 'classics' || story.category === 'strange' || (story.columnId && (story.columnId.indexOf('journey') > -1 || story.columnId.indexOf('art') > -1))) cat = 'classics';
      else if (story.category === 'retired') return;
      
      (story.cards || []).forEach(function(c) {
        var item = { zh: c.sentence || c.cn, pinyin: c.pinyin || '', en: c.translation || c.en };
        process(item, cat);
      });
    });
  }

  // 去重
  ['survival', 'business', 'classics', 'trends'].forEach(function(cat) {
    var unique = [], seen = {};
    dataset[cat].forEach(function(item) {
      if (!seen[item.zh]) { seen[item.zh] = true; unique.push(item); }
    });
    dataset[cat] = unique;
  });

  // 暴露给 app.js
  window.HanLingoDB = dataset;
  console.log("✅ Data pool ready:", { Survival: dataset.survival.length, Business: dataset.business.length, Classics: dataset.classics.length, Trends: dataset.trends.length });
})();