#!/usr/bin/env node
"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * js_cn_and_tw/index.ts
 *
 * <en_us>
 * Created on Thu Jan 11 2024 13:26:40
 * Feature: Translate text from Traditional Chinese to Simplified Chinese.
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月11日 13:26:40
 * 功能：繁转简
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月11日 13:26:40
 * 功能：繁轉簡
 * </zh_tw>
 */

const { tw2cn } = require('@dishanqian/cn_and_tw');
(() => {
    const { argv, exit } = require('node:process');
    const args = argv.slice(2);
    let needShowTips = false;
    args.forEach(arg => {
        switch(arg.toLowerCase()) {
            case '/help':
            case '/h':
            case '/?':

            case '-help':
            case '-h':
            case '-?':

            case '--help':
            case '--h':
            case '--?':
                needShowTips = true;
                break;
            case '--v':
            case '--version':
            case '-v':
            case '-version':
            case '/v':
            case '/version':
                console.log('0.0.1');
                exit();
                break;
            default:
                break;
        }
    });
    if(args.length < 1 || needShowTips) {
        console.log('Copyright (c) 2024 anqisoft@gmail.com\n'.concat(
          'Translate text from Traditional Chinese to Simplified Chinese.\n\n',
          'usage:\n',
          'tw_to_cn word1 word2 ...\n',
          'eg:\n',
          'tw_to_cn 個 計算機 天干\n\n',
          'show this tips:\n',
          'tw_to_cn /?|/h|/help|-?|-h|-help|--?|--h|--help\n',
          'show version:\n',
          'tw_to_cn /v|/version|-v|-version|--v|--version\n',
        ));
        exit();
    }

    const RESULTS = [];
    args.forEach(from => RESULTS.push(`${from}=>${tw2cn(from)}`));
    console.log(RESULTS.join('\n'));
})();