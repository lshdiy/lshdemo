// ==UserScript==
// @name         百度文库自动VIP
// @version      0.1
// @description  百度文库自动vip会员
// @author       大个石头
// @match        https://wenku.baidu.com/view/*
// @icon         https://edu-wenku.bdimg.com/v1/pc/2020%E6%96%B0%E9%A6%96%E9%A1%B5/wenku-header-icon.ico
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var datee;

    Object.defineProperty(window, 'pageData', {
    set: function (newobj) {
        datee = newobj;
    },
    get: function () {
        if ('vipInfo' in datee) {
            datee.vipInfo.global_svip_status= 1;
            datee.vipInfo.global_vip_status = 1;
            datee.vipInfo.isVip = 1;
            datee.vipInfo.isWenkuVip = true;
        }
        return datee;
    }
    });
})();