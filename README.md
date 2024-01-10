# js_cn_and_tw
typescript version: https://github.com/anqisoft/ts_cn_and_tw
## <en_us>
Compile the ts_cn_and_tw project source code with deno to get index.js, and then compress it with uglify-js to get index.min.js.<br>
Provides basic functions for bidirectional conversion between Simplified and Traditional Chinese.<br>
Created on Wed Jan 10 2024 07:02:57<br>
Feature: Provide the following content,<ul>
  <li>string, simplified character list SIMPLIFIED_CHINESE_CHARS</li>
  <li>string, traditional Chinese character list TRADITIONAL_CHINESE_CHARS</li>
  <li>string array, simplified to traditional phrase correspondence table CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL</li>
  <li>string array, Traditional to Simplified phrase correspondence table CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED</li>
  <li>Method, simple to traditional cn2tw(original: string): string</li>
  <li>Method, convert traditional to simplified tw2cn(original: string): string</li>
</ul>
</en_us><br>

## <zh_cn>
通过deno编译ts_cn_and_tw项目源码而得到index.js，再经uglify-js压缩而得到index.min.js。<br>
提供简体与繁体双向转换基础函数。<br>
创建：2024年1月10日 07:02:57<br>
功能：提供以下内容，<ul>
<li>字符串，简体单字清单 SIMPLIFIED_CHINESE_CHARS</li>
<li>字符串，繁体单字清单 TRADITIONAL_CHINESE_CHARS</li>
<li>字符串数组，简转繁词组对应表 CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL</li>
<li>字符串数组，繁转简词组对应表 CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED</li>
<li>方法，简转繁 cn2tw(original: string): string</li>
<li>方法，繁转简 tw2cn(original: string): string</li></li>
</ul>
</zh_cn><br>

## <zh_tw>
透過deno編譯ts_cn_and_tw專案原始碼而得到index.js，再經uglify-js壓縮而得到index.min.js。<br>
提供簡體與繁體雙向轉換基礎函數。<br>
創建：2024年1月10日 07:02:57<br>
功能：提供以下內容，<ul>
  <li>字元串，簡體單字清單 SIMPLIFIED_CHINESE_CHARS</li>
  <li>字元串，繁體單字清單 TRADITIONAL_CHINESE_CHARS</li>
  <li>字元串數組，簡轉繁片語對應錶 CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL</li>
  <li>字元串數組，繁轉簡片語對應錶 CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED</li>
  <li>方法，簡轉繁 cn2tw(original: string): string</li>
  <li>方法，繁轉簡 tw2cn(original: string): string</li>
</ul>
</zh_tw>