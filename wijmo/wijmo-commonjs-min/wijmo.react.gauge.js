﻿/*
    *
    * Wijmo Library 5.20171.300
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";
var __extends=this && this.__extends || function()
{
var extendStatics=Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b)
{
d.__proto__ = b
} || function(d, b)
{
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p])
};
return function(d, b)
{
function __()
{
this.constructor = d
}
extendStatics(d, b);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
}
}(),
LinearGauge,
BulletGraph,
RadialGauge,
Wj;
Object.defineProperty(exports, "__esModule", {value: !0});
var wjcReactBase=require("wijmo/wijmo.react.base"),
wjcGauge=require("wijmo/wijmo.gauge"),
wjcSelf=require("wijmo/wijmo.react.gauge");
window.wijmo = window.wijmo || {};
window.wijmo.react = window.wijmo.react || {};
window.wijmo.react.gauge = wjcSelf;
LinearGauge = function(_super)
{
function LinearGauge(props)
{
return _super.call(this, props, wjcGauge.LinearGauge) || this
}
return __extends(LinearGauge, _super), LinearGauge
}(wjcReactBase.ComponentBase);
exports.LinearGauge = LinearGauge;
BulletGraph = function(_super)
{
function BulletGraph(props)
{
return _super.call(this, props, wjcGauge.BulletGraph) || this
}
return __extends(BulletGraph, _super), BulletGraph
}(wjcReactBase.ComponentBase);
exports.BulletGraph = BulletGraph;
RadialGauge = function(_super)
{
function RadialGauge(props)
{
return _super.call(this, props, wjcGauge.RadialGauge) || this
}
return __extends(RadialGauge, _super), RadialGauge
}(wjcReactBase.ComponentBase);
exports.RadialGauge = RadialGauge;
Wj = wjcReactBase