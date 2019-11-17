// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred jimu/utils esri/request esri/IdentityManager".split(" "),function(h,d,f,g,k,l,m){return h([],{leafTypes:null,serviceTypes:null,_restInfoCache:{},constructor:function(a){d.mixin(this,a);d.isArrayLike(this.leafTypes)||(this.leafTypes=[]);d.isArrayLike(this.serviceTypes)||(this.serviceTypes=[])},getItem:function(a){return this.defaultGetItem(a)},getSubItemUrls:function(a){return this.defaultGetSubItemUrls(a)},getIconImageName:function(a,
b){return""},defaultGetItem:function(a){var b=new g;a=a.replace(/\/*$/g,"");if(this.isUrlEndWithServiceType(a)){var c=a.split("/"),e=c[c.length-1],n=c[c.length-2];this.getRestInfo(a).then(d.hitch(this,function(c){b.resolve({name:n,type:e,url:a,definition:c})}),d.hitch(this,function(a){console.error(a);b.reject({errorCode:"NETWORK_ERROR",error:a})}))}else b.resolve(null);return b},defaultGetSubItemUrls:function(a){a=new g;a.resolve([]);return a},getRestInfo:function(a){var b=new g;a=a.replace(/\/*$/g,
"");var c=this._restInfoCache[a];if(c)b.resolve(c);else{var c={url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback",timeout:2E4},e=m.findCredential(a);e&&e.token&&(c.content.token=e.token);l(c).then(d.hitch(this,function(c){this._restInfoCache[a]=c;b.resolve(c)}),function(a){b.reject(a)})}return b},isServiceTypeSupported:function(a){a=a.toLowerCase();return f.some(this.serviceTypes,d.hitch(this,function(b){return b.toLowerCase()===a}))},isUrlEndWithServiceType:function(a){return f.some(this.serviceTypes,
d.hitch(this,function(b){return k.isStringEndWith(a,"/"+b)}))},isUrlContainsServiceType:function(a){a=a.toLowerCase();return f.some(this.serviceTypes,d.hitch(this,function(b){b=b.toLowerCase();return 0<=a.indexOf("/"+b)}))}})});