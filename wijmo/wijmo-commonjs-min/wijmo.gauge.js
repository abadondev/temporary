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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcCore,wjcSelf,ShowText,Gauge,GaugeDirection,LinearGauge,RadialGauge,BulletGraph,Range;Object.defineProperty(exports,"__esModule",{value:!0});wjcCore=require("wijmo/wijmo");wjcSelf=require("wijmo/wijmo.gauge");window.wijmo=window.wijmo||{};window.wijmo.gauge=wjcSelf,function(n){n[n.None=0]="None";n[n.Value=1]="Value";n[n.MinMax=2]="MinMax";n[n.All=3]="All"}(ShowText=exports.ShowText||(exports.ShowText={}));Gauge=function(n){function t(i,r){var u=n.call(this,i,null,!0)||this,f;return u._ranges=new wjcCore.ObservableArray,u._rngElements=[],u._format='n0',u._showRanges=!0,u._shadow=!0,u._animated=!0,u._readOnly=!0,u._step=1,u._showText=ShowText.None,u._showTicks=!1,u._thickness=.8,u._initialized=!1,u.valueChanged=new wjcCore.Event,u._getPercent=function(n){var t=this.max>this.min?(n-this.min)/(this.max-this.min):0;return Math.max(0,Math.min(1,t))},t._ctr++,f=u.getTemplate(),u.applyTemplate('wj-control wj-gauge',f,{_dSvg:'dsvg',_svg:'svg',_filter:'filter',_gFace:'gface',_gRanges:'granges',_gPointer:'gpointer',_gCover:'gcover',_pFace:'pface',_pPointer:'ppointer',_cValue:'cvalue',_tValue:'value',_tMin:'min',_tMax:'max',_pTicks:'pticks'}),u._filterID='wj-gauge-filter-'+t._ctr.toString(36),u._filter.setAttribute('id',u._filterID),u.face=new Range,u.pointer=new Range,u._ranges.collectionChanged.addHandler(function(){for(var i,t=u._ranges,n=0;n<t.length;n++)if(i=wjcCore.tryCast(t[n],Range),!i)throw'ranges array must contain Range objects.';u._rangesDirty=!0;u.invalidate()}),u.addEventListener(u.hostElement,'keydown',u._keydown.bind(u)),u.addEventListener(u.hostElement,'click',function(n){n.button==0&&(u.focus(),u._applyMouseValue(n))}),u.addEventListener(u.hostElement,'mousedown',function(n){n.button==0&&(u.focus(),u._applyMouseValue(n))}),u.addEventListener(u.hostElement,'mousemove',function(n){n.buttons==1&&u._applyMouseValue(n,!0)}),'ontouchstart'in window&&(u.addEventListener(u.hostElement,'touchstart',function(n){u.focus();n.defaultPrevented||u.isReadOnly||!u._applyMouseValue(n,!0)||n.preventDefault()}),u.addEventListener(u.hostElement,'touchmove',function(n){n.defaultPrevented||u.isReadOnly||!u._applyMouseValue(n,!0)||n.preventDefault()})),u.addEventListener(u.hostElement,'wheel',function(n){if(!n.defaultPrevented&&!u.isReadOnly&&u.containsFocus()&&u.value!=null&&u.hitTest(n)){var t=wjcCore.clamp(-n.deltaY,-1,1);u.value=wjcCore.clamp(u.value+(u.step||1)*t,u.min,u.max);n.preventDefault()}}),u.initialize(r),u.invalidate(),u}return __extends(t,n),Object.defineProperty(t.prototype,"value",{get:function(){return this._pointer.max},set:function(n){n!=this._pointer.max&&(this._pointer.max=wjcCore.asNumber(n,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this._face.min},set:function(n){this._face.min=wjcCore.asNumber(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this._face.max},set:function(n){this._face.max=wjcCore.asNumber(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"origin",{get:function(){return this._origin},set:function(n){n!=this._origin&&(this._origin=wjcCore.asNumber(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isReadOnly",{get:function(){return this._readOnly},set:function(n){this._readOnly=wjcCore.asBoolean(n);this._setAttribute(this._svg,'cursor',this._readOnly?null:'pointer');wjcCore.toggleClass(this.hostElement,'wj-state-readonly',this.isReadOnly)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"step",{get:function(){return this._step},set:function(n){n!=this._step&&(this._step=wjcCore.asNumber(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"format",{get:function(){return this._format},set:function(n){n!=this._format&&(this._format=wjcCore.asString(n),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"getText",{get:function(){return this._getText},set:function(n){n!=this._getText&&(this._getText=wjcCore.asFunction(n),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"thickness",{get:function(){return this._thickness},set:function(n){n!=this._thickness&&(this._thickness=wjcCore.clamp(wjcCore.asNumber(n,!1),0,1),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"face",{get:function(){return this._face},set:function(n){n!=this._face&&(this._face&&this._face.propertyChanged.removeHandler(this._rangeChanged),this._face=wjcCore.asType(n,Range),this._face&&this._face.propertyChanged.addHandler(this._rangeChanged,this),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pointer",{get:function(){return this._pointer},set:function(n){if(n!=this._pointer){var t=null;this._pointer&&(t=this.value,this._pointer.propertyChanged.removeHandler(this._rangeChanged));this._pointer=wjcCore.asType(n,Range);this._pointer&&(t&&(this.value=t),this._pointer.propertyChanged.addHandler(this._rangeChanged,this));this.invalidate()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showText",{get:function(){return this._showText},set:function(n){n!=this._showText&&(this._showText=wjcCore.asEnum(n,ShowText),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showTicks",{get:function(){return this._showTicks},set:function(n){n!=this._showTicks&&(this._showTicks=wjcCore.asBoolean(n),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tickSpacing",{get:function(){return this._tickSpacing},set:function(n){n!=this._tickSpacing&&(this._tickSpacing=wjcCore.asInt(n,!0,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"thumbSize",{get:function(){return this._thumbSize},set:function(n){n!=this._thumbSize&&(this._thumbSize=wjcCore.asNumber(n,!0,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showRanges",{get:function(){return this._showRanges},set:function(n){n!=this._showRanges&&(this._showRanges=wjcCore.asBoolean(n),this._animColor=null,this._rangesDirty=!0,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasShadow",{get:function(){return this._shadow},set:function(n){n!=this._shadow&&(this._shadow=wjcCore.asBoolean(n),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isAnimated",{get:function(){return this._animated},set:function(n){n!=this._animated&&(this._animated=wjcCore.asBoolean(n))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ranges",{get:function(){return this._ranges},enumerable:!0,configurable:!0}),t.prototype.onValueChanged=function(n){this.valueChanged.raise(this,n)},t.prototype.refresh=function(t){var r,e,u,f,i;if(t===void 0&&(t=!0),n.prototype.refresh.call(this,t),this._rangesDirty){for(this._rangesDirty=!1,r=this._gRanges,i=0;i<this._rngElements.length;i++)e=this._rngElements[i],e.rng.propertyChanged.removeHandler(this._rangeChanged);while(r.lastChild)r.removeChild(r.lastChild);if(this._rngElements=[],this._showRanges)for(i=0;i<this.ranges.length;i++)u=this.ranges[i],u.propertyChanged.addHandler(this._rangeChanged,this),this._rngElements.push({rng:u,el:this._createElement('path',r)})}for(this._showElement(this._tValue,(this.showText&ShowText.Value)!=0),this._showElement(this._tMin,(this.showText&ShowText.MinMax)!=0),this._showElement(this._tMax,(this.showText&ShowText.MinMax)!=0),this._showElement(this._cValue,(this.showText&ShowText.Value)!=0||this._thumbSize>0),this._updateText(),f=this._getFilterUrl(),this._setAttribute(this._pFace,'filter',f),this._setAttribute(this._pPointer,'filter',f),this._updateRange(this._face),this._updateRange(this._pointer),this._updateTicks(),i=0;i<this.ranges.length;i++)this._updateRange(this.ranges[i]);this._initialized=!0},t.prototype.hitTest=function(n,t){wjcCore.isNumber(n)&&wjcCore.isNumber(t)?n=new wjcCore.Point(n,t):n instanceof wjcCore.Point||(n=wjcCore.mouseToPage(n));n=wjcCore.asType(n,wjcCore.Point);var i=wjcCore.Rect.fromBoundingRect(this._dSvg.getBoundingClientRect());return n.x-=i.left+pageXOffset,n.y-=i.top+pageYOffset,this._getValueFromPoint(n)},t._getBBox=function(n){try{return n.getBBox()}catch(t){return{x:0,y:0,width:0,height:0}}},t.prototype._getFilterUrl=function(){return this.hasShadow?'url(#'+this._filterID+')':null},t.prototype._getRangeElement=function(n){var t,i;if(n==this._face)return this._pFace;if(n==this._pointer)return this._pPointer;for(t=0;t<this._rngElements.length;t++)if(i=this._rngElements[t],i.rng==n)return i.el;return null},t.prototype._rangeChanged=function(n,t){var i=this;if(n==this._pointer&&t.propertyName=='max'&&(this.onValueChanged(),this._updateText()),n==this._face){this.invalidate();return}if(n==this._pointer&&t.propertyName=='max'&&(this._animInterval&&clearInterval(this._animInterval),this.isAnimated&&!this.isUpdating&&this._initialized)){var r=this._getPointerColor(t.oldValue),u=this._getPointerColor(t.newValue),f=r?new wjcCore.Color(r):null,e=u?new wjcCore.Color(u):null;this._animInterval=wjcCore.animate(function(r){i._animColor=f&&e?wjcCore.Color.interpolate(f,e,r).toString():null;i._updateRange(n,t.oldValue+r*(t.newValue-t.oldValue));r>=1&&(i._animColor=null,i._animInterval=null,i._updateRange(n),i._updateText())});return}this._updateRange(n)},t.prototype._createElement=function(n,i,r){var u=document.createElementNS(t._SVGNS,n);return r&&u.setAttribute('class',r),i.appendChild(u),u},t.prototype._centerText=function(n,i,r){var u,f;if(n.getAttribute('display')!='none'){u=wjcCore.Globalize.format(i,this.format);wjcCore.isFunction(this.getText)&&(f=n==this._tValue?'value':n==this._tMin?'min':n==this._tMax?'max':null,wjcCore.assert(f!=null,'unknown element'),u=this.getText(this,f,i,u));n.textContent=u;var e=wjcCore.Rect.fromBoundingRect(t._getBBox(n)),o=r.x-e.width/2,s=r.y+e.height/4;n.setAttribute('x',this._fix(o));n.setAttribute('y',this._fix(s))}},t.prototype._copy=function(n,t){var r,i,u;if(n=='ranges'){for(r=wjcCore.asArray(t),i=0;i<r.length;i++)u=new Range,wjcCore.copy(u,r[i]),this.ranges.push(u);return!0}return n=='pointer'?(wjcCore.copy(this.pointer,t),!0):!1},t.prototype._showElement=function(n,t){this._setAttribute(n,'display',t?'':'none')},t.prototype._setAttribute=function(n,t,i){i?n.setAttribute(t,i):n.removeAttribute(t)},t.prototype._updateRange=function(n,t){var i,r;t===void 0&&(t=n.max);n==this._pointer&&(n.min=this.origin!=null?this.origin:this.min<0&&this.max>0?0:this.min);i=this._getRangeElement(n);i&&(this._updateRangeElement(i,n,t),r=n.color,n==this._pointer&&(r=this._animColor?this._animColor:this._getPointerColor(n.max)),this._setAttribute(i,'style',r?'fill:'+r:null))},t.prototype._getPointerColor=function(n){var r,t,i;if(!this._showRanges){for(t=this._ranges.length-1;t>=0;t--)if(i=this._ranges[t],n>=i.min&&n<=i.max){r=i;break}if(r)return r.color}return this._pointer.color},t.prototype._keydown=function(n){if(!this._readOnly&&this._step){var i=this._getKey(n.keyCode),t=!0;switch(i){case wjcCore.Key.Left:case wjcCore.Key.Down:this.value=wjcCore.clamp(this.value-this.step,this.min,this.max);break;case wjcCore.Key.Right:case wjcCore.Key.Up:this.value=wjcCore.clamp(this.value+this.step,this.min,this.max);break;case wjcCore.Key.Home:this.value=this.min;break;case wjcCore.Key.End:this.value=this.max;break;default:t=!1}t&&n.preventDefault()}},t.prototype._getKey=function(n){return n},t.prototype._applyMouseValue=function(n,t){var i,r;return!this.isReadOnly&&this.containsFocus()&&(i=this.hitTest(n),i!=null)?(r=this._animated,t&&(this._animated=!1),this._step!=null&&(i=Math.round(i/this._step)*this._step),this.value=wjcCore.clamp(i,this.min,this.max),this._animated=r,!0):!1},t.prototype._updateRangeElement=function(){wjcCore.assert(!1,'Gauge is an abstract class.')},t.prototype._updateText=function(){wjcCore.assert(!1,'Gauge is an abstract class.')},t.prototype._updateTicks=function(){wjcCore.assert(!1,'Gauge is an abstract class.')},t.prototype._getValueFromPoint=function(){return null},t.prototype._fix=function(n){return wjcCore.isNumber(n)?parseFloat(n.toFixed(4)).toString():this._fix(n.x)+' '+this._fix(n.y)},t}(wjcCore.Control);Gauge._SVGNS='http://www.w3.org/2000/svg';Gauge._ctr=0;Gauge.controlTemplate='<div wj-part="dsvg" style="width:100%;height:100%"><svg wj-part="svg" width="100%" height="100%" style="overflow:visible"><defs><filter wj-part="filter"><feOffset dx="3" dy="3"><\/feOffset><feGaussianBlur result="offset-blur" stdDeviation="5"><\/feGaussianBlur><feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"><\/feComposite><feFlood flood-color="black" flood-opacity="0.2" result="color"><\/feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow"><\/feComposite><feComposite operator="over" in="shadow" in2="SourceGraphic"><\/feComposite><\/filter><\/defs><g wj-part="gface" class="wj-face" style="cursor:inherit"><path wj-part="pface"/><\/g><g wj-part="granges" class="wj-ranges" style="cursor:inherit"/><g wj-part="gpointer" class="wj-pointer" style="cursor:inherit"><path wj-part="ppointer"/><\/g><g wj-part="gcover" class="wj-cover" style="cursor:inherit"><path wj-part="pticks" class="wj-ticks"/><circle wj-part="cvalue" class="wj-pointer wj-thumb"/><text wj-part="value" class="wj-value"/><text wj-part="min" class="wj-min"/><text wj-part="max" class="wj-max"/><\/g><\/svg><\/div>';exports.Gauge=Gauge,function(n){n[n.Right=0]="Right";n[n.Left=1]="Left";n[n.Up=2]="Up";n[n.Down=3]="Down"}(GaugeDirection=exports.GaugeDirection||(exports.GaugeDirection={}));LinearGauge=function(n){function t(t,i){var r=n.call(this,t,null)||this;return r._direction=GaugeDirection.Right,wjcCore.addClass(r.hostElement,'wj-lineargauge'),r.initialize(i),r}return __extends(t,n),Object.defineProperty(t.prototype,"direction",{get:function(){return this._direction},set:function(n){n!=this._direction&&(this._direction=wjcCore.asEnum(n,GaugeDirection),this.invalidate())},enumerable:!0,configurable:!0}),t.prototype._updateRangeElement=function(n,t,i){var r=this._getRangeRect(t,i);this._updateSegment(n,r);var o=t==this._pointer&&(this.showText&ShowText.Value)!=0,h=o||t==this._pointer&&this.thumbSize>0,u=r.left+r.width/2,f=r.top+r.height/2;switch(this._getDirection()){case GaugeDirection.Right:u=r.right;break;case GaugeDirection.Left:u=r.left;break;case GaugeDirection.Up:f=r.top;break;case GaugeDirection.Down:f=r.bottom}if(o&&this._centerText(this._tValue,i,new wjcCore.Point(u,f)),o||h){r=wjcCore.Rect.fromBoundingRect(Gauge._getBBox(this._tValue));var s=this._animColor?this._animColor:this._getPointerColor(t.max),c=this.thumbSize!=null?this.thumbSize/2:Math.max(r.width,r.height)*.8,e=this._cValue;this._setAttribute(e,'cx',this._fix(u));this._setAttribute(e,'cy',this._fix(f));this._setAttribute(e,'style',s?'fill:'+s:null);this._setAttribute(e,'r',this._fix(c))}},t.prototype._updateText=function(){var n=this._getRangeRect(this._face);switch(this._getDirection()){case GaugeDirection.Right:this._setText(this._tMin,this.min,n,'left');this._setText(this._tMax,this.max,n,'right');break;case GaugeDirection.Left:this._setText(this._tMin,this.min,n,'right');this._setText(this._tMax,this.max,n,'left');break;case GaugeDirection.Up:this._setText(this._tMin,this.min,n,'bottom');this._setText(this._tMax,this.max,n,'top');break;case GaugeDirection.Down:this._setText(this._tMin,this.min,n,'top');this._setText(this._tMax,this.max,n,'bottom')}},t.prototype._updateTicks=function(){var f=this.tickSpacing&&this.tickSpacing>0?this.tickSpacing:this.step,u='',n,t,i,r;if(this.showTicks&&f>0)for(n=this._getRangeRect(this._face),t=this.min+f;t<this.max;t+=f)switch(this._getDirection()){case GaugeDirection.Right:i=this._fix(n.left+n.width*this._getPercent(t));u+='M '+i+' '+this._fix(n.top)+' L '+i+' '+this._fix(n.bottom)+' ';break;case GaugeDirection.Left:i=this._fix(n.right-n.width*this._getPercent(t));u+='M '+i+' '+n.top.toFixed(2)+' L '+i+' '+n.bottom.toFixed(2)+' ';break;case GaugeDirection.Up:r=(n.bottom-n.height*this._getPercent(t)).toFixed(2);u+='M '+this._fix(n.left)+' '+r+' L '+this._fix(n.right)+' '+r+' ';break;case GaugeDirection.Down:r=(n.top+n.height*this._getPercent(t)).toFixed(2);u+='M '+n.left.toFixed(2)+' '+r+' L '+n.right.toFixed(2)+' '+r+' '}this._pTicks.setAttribute('d',u)},t.prototype._updateSegment=function(n,t){var i={p1:this._fix(new wjcCore.Point(t.left,t.top)),p2:this._fix(new wjcCore.Point(t.right,t.top)),p3:this._fix(new wjcCore.Point(t.right,t.bottom)),p4:this._fix(new wjcCore.Point(t.left,t.bottom))},r=wjcCore.format('M {p1} L {p2} L {p3} L {p4} Z',i);n.setAttribute('d',r)},t.prototype._setText=function(n,t,i,r){var e,o,f,u;if(n.getAttribute('display')!='none'){e=wjcCore.Globalize.format(t,this.format);wjcCore.isFunction(this.getText)&&(o=n==this._tValue?'value':n==this._tMin?'min':n==this._tMax?'max':null,wjcCore.assert(o!=null,'unknown element'),e=this.getText(this,o,t,e));n.textContent=e;f=wjcCore.Rect.fromBoundingRect(Gauge._getBBox(n));u=new wjcCore.Point(i.left+i.width/2-f.width/2,i.top+i.height/2+f.height/2);switch(r){case'top':u.y=i.top-4;break;case'left':u.x=i.left-4-f.width;break;case'right':u.x=i.right+4;break;case'bottom':u.y=i.bottom+4+f.height}n.setAttribute('x',this._fix(u.x));n.setAttribute('y',this._fix(u.y))}},t.prototype._getRangeRect=function(n,t){var i,f,e;t===void 0&&(t=n.max);i=new wjcCore.Rect(0,0,this.hostElement.clientWidth,this.hostElement.clientHeight);f=this.thumbSize?Math.ceil(this.thumbSize/2):0;this.showText!=ShowText.None&&(e=parseInt(getComputedStyle(this.hostElement).fontSize),isNaN(e)||(f=Math.max(f,3*e)));switch(this._getDirection()){case GaugeDirection.Right:case GaugeDirection.Left:i=i.inflate(-f,-i.height*(1-this.thickness*n.thickness)/2);break;case GaugeDirection.Up:case GaugeDirection.Down:i=i.inflate(-i.width*(1-this.thickness*n.thickness)/2,-f)}var o=n==this._face,r=o?0:this._getPercent(n.min),u=o?1:this._getPercent(t);switch(this._getDirection()){case GaugeDirection.Right:i.left+=i.width*r;i.width*=u-r;break;case GaugeDirection.Left:i.left=i.right-i.width*u;i.width=i.width*(u-r);break;case GaugeDirection.Down:i.top+=i.height*r;i.height*=u-r;break;case GaugeDirection.Up:i.top=i.bottom-i.height*u;i.height=i.height*(u-r)}return i},t.prototype._getValueFromPoint=function(n){var t=this._getRangeRect(this._face),i=0;switch(this._getDirection()){case GaugeDirection.Right:i=t.width>0?(n.x-t.left)/t.width:0;break;case GaugeDirection.Left:i=t.width>0?(t.right-n.x)/t.width:0;break;case GaugeDirection.Up:i=t.height>0?(t.bottom-n.y)/t.height:0;break;case GaugeDirection.Down:i=t.height>0?(n.y-t.top)/t.height:0}return this.min+i*(this.max-this.min)},t.prototype._getDirection=function(){var n=this._direction;if(this.rightToLeft)switch(n){case GaugeDirection.Left:n=GaugeDirection.Right;break;case GaugeDirection.Right:n=GaugeDirection.Left}return n},t.prototype._getKey=function(n){switch(this._getDirection()){case GaugeDirection.Left:switch(n){case wjcCore.Key.Left:n=wjcCore.Key.Right;break;case wjcCore.Key.Right:n=wjcCore.Key.Left}break;case GaugeDirection.Down:switch(n){case wjcCore.Key.Up:n=wjcCore.Key.Down;break;case wjcCore.Key.Down:n=wjcCore.Key.Up}}return n},t}(Gauge);exports.LinearGauge=LinearGauge;RadialGauge=function(n){function t(t,i){var r=n.call(this,t,null)||this;return r._startAngle=0,r._sweepAngle=180,r._autoScale=!0,wjcCore.addClass(r.hostElement,'wj-radialgauge'),r._thickness=.4,r.showText=ShowText.All,r.initialize(i),r}return __extends(t,n),Object.defineProperty(t.prototype,"startAngle",{get:function(){return this._startAngle},set:function(n){n!=this._startAngle&&(this._startAngle=wjcCore.clamp(wjcCore.asNumber(n,!1),-360,360),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sweepAngle",{get:function(){return this._sweepAngle},set:function(n){n!=this._sweepAngle&&(this._sweepAngle=wjcCore.clamp(wjcCore.asNumber(n,!1),-360,360),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoScale",{get:function(){return this._autoScale},set:function(n){n!=this._autoScale&&(this._autoScale=wjcCore.asBoolean(n),this.invalidate())},enumerable:!0,configurable:!0}),t.prototype.refresh=function(t){var i,u,r;t===void 0&&(t=!0);this._setAttribute(this._svg,'viewBox',null);this._rcSvg=wjcCore.Rect.fromBoundingRect(this._dSvg.getBoundingClientRect());n.prototype.refresh.call(this,t);this._ctmInv=null;this._ptSvg=null;this._autoScale&&(this._setAttribute(this._svg,'viewBox',''),i=wjcCore.Rect.fromBoundingRect(Gauge._getBBox(this._pFace)),(this.showText&ShowText.Value)!=0&&(i=wjcCore.Rect.union(i,wjcCore.Rect.fromBoundingRect(Gauge._getBBox(this._tValue)))),(this.showText&ShowText.MinMax)!=0&&(i=wjcCore.Rect.union(i,wjcCore.Rect.fromBoundingRect(Gauge._getBBox(this._tMin))),i=wjcCore.Rect.union(i,wjcCore.Rect.fromBoundingRect(Gauge._getBBox(this._tMax)))),u=[this._fix(i.left),this._fix(i.top),this._fix(i.width),this._fix(i.height)].join(' '),this._setAttribute(this._svg,'viewBox',u),r=this._pFace.getCTM(),this._ctmInv=r?r.inverse():null,this._ptSvg=this._svg.createSVGPoint())},t.prototype._updateRangeElement=function(n,t,i){if(this._rcSvg){var r=this._rcSvg,o=new wjcCore.Point(r.width/2,r.height/2),s=Math.min(r.width,r.height)/2,h=s*this.thickness,c=h*t.thickness,f=s-(h-c)/2,l=f-c,a=this.startAngle+180,e=this.sweepAngle,v=t==this._face,y=v?0:this._getPercent(t.min),b=v?1:this._getPercent(i),k=a+e*y,d=e*(b-y);if(this._updateSegment(n,o,f,l,k,d),t==this._pointer&&this.thumbSize>0){var p=this._animColor?this._animColor:this._getPointerColor(t.max),w=this._getPoint(o,a+e*this._getPercent(i),(f+l)/2),u=this._cValue;this._setAttribute(u,'cx',this._fix(w.x));this._setAttribute(u,'cy',this._fix(w.y));this._setAttribute(u,'style',p?'fill:'+p:null);this._setAttribute(u,'r',this._fix(this.thumbSize/2))}}},t.prototype._updateText=function(){var r,u;if(this._rcSvg){var n=this._rcSvg,t=new wjcCore.Point(n.width/2,n.height/2),i=Math.min(n.width,n.height)/2,f=Math.max(0,i*(1-this.thickness)),e=this.startAngle+180,o=this.sweepAngle;this._showElement(this._cValue,this.thumbSize>0);r=(this.showText&ShowText.MinMax)!=0&&Math.abs(o)<=300;this._showElement(this._tMin,r);this._showElement(this._tMax,r);this._centerText(this._tValue,this.value,t);u=10*(this.sweepAngle<0?-1:1);this._centerText(this._tMin,this.min,this._getPoint(t,e-u,(i+f)/2));this._centerText(this._tMax,this.max,this._getPoint(t,e+o+u,(i+f)/2))}},t.prototype._updateTicks=function(){var i=this.tickSpacing&&this.tickSpacing>0?this.tickSpacing:this.step,r='',t;if(this.showTicks&&i>0){var n=this._rcSvg,u=new wjcCore.Point(n.width/2,n.height/2),f=Math.min(n.width,n.height)/2,e=f*this.thickness,o=e*this._face.thickness,s=f-(e-o)/2,c=s-o;for(t=this.min+i;t<this.max;t+=i){var h=this.startAngle+180+this.sweepAngle*this._getPercent(t),l=this._fix(this._getPoint(u,h,c)),a=this._fix(this._getPoint(u,h,s));r+='M '+l+' L '+a+' '}}this._pTicks.setAttribute('d',r)},t.prototype._updateSegment=function(n,t,i,r,u,f){f=Math.min(Math.max(f,-359.99),359.99);var e=this._getPoint(t,u,r),o=this._getPoint(t,u,i),s=this._getPoint(t,u+f,i),h=this._getPoint(t,u+f,r),c={large:Math.abs(f)>180?1:0,cw:f>0?1:0,ccw:f>0?0:1,or:this._fix(i),ir:this._fix(r),p1:this._fix(e),p2:this._fix(o),p3:this._fix(s),p4:this._fix(h)},l=wjcCore.format("M {p1} L {p2} A {or} {or} 0 {large} {cw} {p3} L {p4} A {ir} {ir} 0 {large} {ccw} {p1} Z",c);n.setAttribute('d',l)},t.prototype._getPoint=function(n,t,i){return t=t*Math.PI/180,new wjcCore.Point(n.x+i*Math.cos(t),n.y+i*Math.sin(t))},t.prototype._getValueFromPoint=function(n){var l;if(this.autoScale&&this._ctmInv&&(this._ptSvg.x=n.x,this._ptSvg.y=n.y,this._ptSvg=this._ptSvg.matrixTransform(this._ctmInv),n.x=this._ptSvg.x,n.y=this._ptSvg.y),!this._rcSvg)return null;var r=this._rcSvg,s=new wjcCore.Point(r.width/2,r.height/2),f=Math.min(r.width,r.height)/2,h=f*(1-this.thickness),e=n.x-s.x,o=n.y-s.y,c=o*o+e*e;if(c>f*f+16||c<h*h-16)return null;var t=(Math.PI-Math.atan2(-o,e))*180/Math.PI,i=this.startAngle,u=this.sweepAngle;if(u>0){while(t<i)t+=360;while(t>i+u)t-=360}else{while(t<i+u)t+=360;while(t>i)t-=360}return l=Math.abs(t-i)/Math.abs(u),this.min+l*(this.max-this.min)},t}(Gauge);exports.RadialGauge=RadialGauge;BulletGraph=function(n){function t(t,i){var r=n.call(this,t,null)||this;return wjcCore.addClass(r.hostElement,'wj-bulletgraph'),r._pointer.thickness=.35,r._rngTarget=new Range('target'),r._rngTarget.thickness=.8,r._rngTarget.color='black',r._rngGood=new Range('good'),r._rngGood.color='rgba(0,0,0,.15)',r._rngBad=new Range('bad'),r._rngBad.color='rgba(0,0,0,.3)',r.ranges.push(r._rngBad),r.ranges.push(r._rngGood),r.ranges.push(r._rngTarget),r.initialize(i),r}return __extends(t,n),Object.defineProperty(t.prototype,"target",{get:function(){return this._rngTarget.max},set:function(n){this._rngTarget.max=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"good",{get:function(){return this._rngGood.max},set:function(n){this._rngGood.max=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bad",{get:function(){return this._rngBad.max},set:function(n){this._rngBad.max=n},enumerable:!0,configurable:!0}),t.prototype._getRangeRect=function(t,i){i===void 0&&(i=t.max);var r=n.prototype._getRangeRect.call(this,t,i);if(t==this._rngTarget)switch(this.direction){case GaugeDirection.Right:r.left=r.right-1;r.width=3;break;case GaugeDirection.Left:r.width=3;break;case GaugeDirection.Up:r.height=3;break;case GaugeDirection.Down:r.top=r.bottom-1;r.height=3}return r},t}(LinearGauge);exports.BulletGraph=BulletGraph;Range=function(){function n(n){this._min=0;this._max=100;this._thickness=1;this.propertyChanged=new wjcCore.Event;this._name=n}return Object.defineProperty(n.prototype,"min",{get:function(){return this._min},set:function(n){this._setProp('_min',wjcCore.asNumber(n,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"max",{get:function(){return this._max},set:function(n){this._setProp('_max',wjcCore.asNumber(n,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"color",{get:function(){return this._color},set:function(n){this._setProp('_color',wjcCore.asString(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"thickness",{get:function(){return this._thickness},set:function(n){this._setProp('_thickness',wjcCore.clamp(wjcCore.asNumber(n),0,1))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},set:function(n){this._setProp('_name',wjcCore.asString(n))},enumerable:!0,configurable:!0}),n.prototype.onPropertyChanged=function(n){this.propertyChanged.raise(this,n)},n.prototype._setProp=function(n,t){var i=this[n],r;if(t!=i){this[n]=t;r=new wjcCore.PropertyChangedEventArgs(n.substr(1),i,t);this.onPropertyChanged(r)}},n}();Range._ctr=0;exports.Range=Range