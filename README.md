Created on Wed Jan 10 2024 07:02:57<br>
### Introduce
#### <en_us>
Provides basic functions for bidirectional conversion between Simplified and Traditional Chinese.<br>
Feature: Provide the following content,<ul>
  <li>string array, simplified character list SIMPLIFIED_CHINESE_CHARS</li>
  <li>string array, traditional Chinese character list TRADITIONAL_CHINESE_CHARS</li>
  <li>string array, simplified to traditional phrase correspondence table CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL</li>
  <li>string array, Traditional to Simplified phrase correspondence table CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED</li>
  <li>Method, simple to traditional cn2tw(original: string): string</li>
  <li>Method, convert traditional to simplified tw2cn(original: string): string</li>
</ul>
</en_us>

#### <zh_cn>
提供简体与繁体双向转换基础函数。<br>
功能：提供以下内容，<ul>
  <li>字符串数组，简体单字清单 SIMPLIFIED_CHINESE_CHARS</li>
  <li>字符串数组，繁体单字清单 TRADITIONAL_CHINESE_CHARS</li>
  <li>字符串数组，简转繁词组对应表 CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL</li>
  <li>字符串数组，繁转简词组对应表 CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED</li>
  <li>方法，简转繁 cn2tw(original: string): string</li>
  <li>方法，繁转简 tw2cn(original: string): string</li></li>
</ul>
</zh_cn>

#### <zh_tw>
提供簡體與繁體雙向轉換基礎函數。<br>
功能：提供以下內容，<ul>
  <li>字元串數組，簡體單字清單 SIMPLIFIED_CHINESE_CHARS</li>
  <li>字元串數組，繁體單字清單 TRADITIONAL_CHINESE_CHARS</li>
  <li>字元串數組，簡轉繁片語對應錶 CHINESE_PHRASES_FROM_SIMPLIFIED_TO_TRADITIONAL</li>
  <li>字元串數組，繁轉簡片語對應錶 CHINESE_PHRASES_FROM_TRADITIONAL_TO_SIMPLIFIED</li>
  <li>方法，簡轉繁 cn2tw(original: string): string</li>
  <li>方法，繁轉簡 tw2cn(original: string): string</li>
</ul>
</zh_tw>

### Import
```typescript
import { cn2tw, tw2cn } from 'https://deno.land/x/cn_and_tw@v0.0.3/index.ts';
```

### Usage
```typescript
['个', '计算机', '天干'].forEach(from => console.log(`${from}=>${cn2tw(from)}`));
['個', '計算機', '天干'].forEach(from => console.log(`${from}=>${tw2cn(from)}`));
```

## This
### typescript
github: https://github.com/anqisoft/ts_cn_and_tw
<br>deno: https://deno.land/x/cn_and_tw

### javascript
github: https://github.com/anqisoft/js_cn_and_tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn_and_tw

## Dependents 1: tw2cn
### typescript
github: https://github.com/anqisoft/ts_deno_tw2cn
<br>deno: https://deno.land/x/tw2cn

### javascript
github: https://github.com/anqisoft/js_node_tw2cn
<br>npmjs: https://www.npmjs.com/package/@dishanqian/tw2cn

## Dependents 2: cn2tw
### typescript
github: https://github.com/anqisoft/ts_deno_cn2tw
<br>deno: https://deno.land/x/cn2tw

### javascript
github: https://github.com/anqisoft/js_node_cn2tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn2tw
