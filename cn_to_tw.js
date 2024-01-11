#!/usr/bin/env node
"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * index.ts
 *
 * <en_us>
 * Created on Thu Jan 11 2024 13:26:40
 * Feature: Translate text from Simplified Chinese to Traditional Chinese.
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月11日 13:26:40
 * 功能：简转繁
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月11日 13:26:40
 * 功能：簡轉繁
 * </zh_tw>
 */

const { cn2tw } = require('@dishanqian/cn_and_tw');
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
          'Translate text from Simplified Chinese to Traditional Chinese.\n\n',
          'usage:\n',
          'cn_to_tw sourceFilename goalFilename\n',
          'eg:\n',
          'cn_to_tw 个 计算机 天干\n\n',
          'show this tips:\n',
          'cn_to_tw /?|/h|/help|-?|-h|-help|--?|--h|--help\n',
          'show version:\n',
          'cn_to_tw /v|/version|-v|-version|--v|--version\n'
        ));

        exit();
    }

    const RESULTS = [];
    args.forEach(from => RESULTS.push(`${from}=>${cn2tw(from)}`));
    console.log(RESULTS.join('\n'));
})();