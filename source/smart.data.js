
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

class DataAdapter{constructor(e){e||(e={});const a=Object.assign(this,e);a.key=function(){return function(){return(0|65536*(1+Math.random())).toString(16).substring(1)}()}(),a.$document=Smart.Utilities.Extend(document),a.boundSource=!1===a.observable?[]:new Smart.ObservableArray,a.dataItemById=[],a.allowAdd===void 0&&(a.allowAdd=!0),a.allowRemove===void 0&&(a.allowRemove=!0),a.allowUpdate===void 0&&(a.allowUpdate=!0),e.observable===void 0&&(a.observable=!0),e.dataSource||(a.dataSource=[]),e.dataFields||(a.dataFields=[]),e.dataSourceType||(a.dataSourceType="array"),e.id||(a.id=null),e.autoFetch||(a.autoFetch=!0),e.dataFields&&(a.dataFields=e.dataFields),e&&!1!==e.autoBind&&a.dataBind(),a.isInitialized=!0}get dataFields(){const e=this;return e._dataFields}set dataFields(e){const a=this;return a._dataFields=a._getDataFieldObjects(e),a._dataFields}_getDataFieldObjects(e){this;let a=[];if("number"==typeof e){let t="",d=0;for(let n=0;n<e;n++){const e=String.fromCharCode(65+d);d++;const n=t+e;a.push({name:n,dataType:"string"}),26<=d&&(d=0,t+="A")}}else if(0<e.length)for(let t=0;t<e.length;t++){const d=e[t];if("string"==typeof d){const e=d.split(":"),t=e[0].trim(),n=1<e.length?e[1].trim():"string";a.push({name:t,dataType:n})}else a.push(d)}return a}get dataSource(){const e=this;return e._dataSource||(e._dataSource=[]),e._dataSource}set dataSource(e){const a=this;a._dataSource=e,a.isInitialized&&(a.boundSource=!1===a.observable?[]:new Smart.ObservableArray,a.dataItemById=[],a.bindingCompleted=!1,a.dataBind())}get canNotify(){const e=this;return void 0===e._canNotify&&(e._canNotify=!0),e._canNotify}set canNotify(e){const a=this;a._canNotify=e}_notify(e){const a=this;!a.canNotify||a.notifyFn&&a.notifyFn(e)}notify(e){const a=this;e&&(a.notifyFn=e)}toArray(){const e=this;return e.boundSource.toArray()}dataBind(){const e=this;e.clear();const a=()=>{e.observable&&e.boundSource.notify(function(a){if("update"===a.action&&a.path&&0<=a.path.indexOf(".")&&-1===a.path.indexOf("children")&&-1===a.path.indexOf("loaded")&&-1===a.path.indexOf("level")&&-1===a.path.indexOf("leaf")&&-1===a.path.indexOf("expanded")){let t=!1;for(let d=0;d<e.dataFields.length;d++){const n=e.dataFields[d].name;0<=a.path.indexOf(n)&&(t=!0)}e._notify&&t&&e._notify({action:"update",data:a.target,index:a.index})}}),e.groupBy||(e.groupBy=[]),e.groupBy=new Smart.ObservableArray(e.groupBy),e.groupBy.notify(function(){e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()}),e._onBindingComplete()};if("string"==typeof e.dataSource&&0<=e.dataSource.indexOf(".json")){e.url=e.dataSource,e.dataSourceType="json";new Ajax(e,a=>{e.dataSource=a,e._bindToJSON()})}else if("string"==typeof e.dataSource&&0<=e.dataSource.indexOf(".xlsx")){e.url=e.dataSource,e.dataSourceType="xlsx";new Ajax(e,t=>{const d=Object.keys(t[0]),n={},r=[];if(!1!==e.exportHeader){let a=0;for(let t in d){const i=d[t];n[i]=e.dataFields[a++].name}for(let e=1;e<t.length;e++){const a=t[e],i={};for(let e in d){const t=d[e];i[n[t]]=a[t]}r.push(i)}e.dataSource=r}e._bindToArray(),a()})}else if("string"==typeof e.dataSource&&0<=e.dataSource.indexOf(".csv")){e.dataSourceType="csv";new Ajax(e,()=>{e._bindToArray()})}else if("string"==typeof e.dataSource&&0<=e.dataSource.indexOf(".tsv")){e.dataSourceType="tsv";new Ajax(e,()=>{})}else"array"===e.dataSourceType?(e._bindToArray(),a()):"json"===e.dataSourceType&&(e._bindToJSON(),a())}_onBindingComplete(){const e=this;e._buildHierarchy(),e.onBindingComplete&&e.onBindingComplete({data:e.boundSource}),e._notify&&e._notify({action:"bindingComplete",data:e.boundSource}),e.bindingCompleted=!0}refreshHierarchy(){const e=this;e._buildHierarchy()}find(){const e=this;return e.boundSource.find.apply(e.boundSource,arguments)}toArray(){const e=this;return e.boundSource.toArray()}onVirtualDataSourceRequested(e,a){const t=this;let d=a?a.first:1/0,n=a?a.last:1/0,i=a?a.row:null;if(void 0===d&&(d=1/0),void 0===n&&(n=1/0),t.virtualFirstIndex=d,t.virtualLastIndex=n,t.virtualDataSource){const r=function(r){r.virtualDataSourceLength&&(t.virtualDataSourceLength=r.virtualDataSourceLength),new Smart.DataAdapter({dataSource:r.dataSource,dataFields:r.dataFields||t.dataFields,data:a,onBindingComplete(a){if(t.virtualDataSourceOnExpand&&i)return a.data&&0<a.data.length?t.add(a.data,i.$.id):i.leaf=!0,t.onFilter&&t.onFilter(),void e();if(d===1/0)t.add(a.data);else{let e=[],r=[];for(let t=0;t<a.data.length;t++){const i=a.data[t];d+t<=n&&(e.push(i),r.push(d+t))}t.update(r,e)}t.onFilter&&t.onFilter(),e()}})};let o=!1;const l=e=>0===Object.entries(e).length&&(e.constructor===Object||e.constructor===Array),u=l(a.sorting)&&l(a.filtering)&&l(a.grouping)&&!a.row&&"filter"!==a.action&&"sort"!==a.action&&"group"!==a.action;if(t.virtualDataSourceCache&&d!==1/0&&u){let e=0;for(let a=d;a<n;a++)t[a].isEmpty||e++;e==n-d&&(o=!0)}o?e():"expand"===a.action?t.virtualDataSourceOnExpand(r,{first:d,last:n,row:a.row,sorting:a.sorting,filtering:a.filtering,grouping:a.grouping,action:a.action}):t.virtualDataSource(r,{first:d,last:n,sorting:a.sorting,filtering:a.filtering,grouping:a.grouping,action:a.action})}else e()}add(e,a){const t=this;if(!e)return;let d=!0;const n=function(e){const n=t._getDataItem(e,t.boundSource.length);t[t.boundSource.length]=n,t.dataItemById[n.$.id]=n;const i=t.boundSource.push(n);return void 0!==a&&(n.$.parentId=a),i||(d=!1),n};if(e.length){let a=[];for(let t=0;t<e.length;t++){const d=n(e[t]);a.push(d)}t._notify({action:"add",data:a})}else{const a=n(e);t._notify({action:"add",data:a})}return t.refreshHierarchy(),d}refreshIndexes(){const e=this;for(let a=0;a<e.boundSource.length;a++)e[a]=e.boundSource[a],e[a].$.index=a,e.dataItemById[e[a].$.id]=e[a]}removeLast(){const e=this;delete e[e.boundSource.length-1];const a=e.boundSource.pop();return e._notify({action:"removeLast",data:a}),e.refreshHierarchy(),a}remove(e){const a=this,t=a.boundSource[e];if(!t)throw new Error("Invalid Item Index");a.boundSource.splice(e,1),a.refreshIndexes(),a._notify({action:"remove",index:e,data:t}),a.refreshHierarchy()}update(e,a){const t=this;if(!(Smart.Utilities.Types.isArray(e)&&Smart.Utilities.Types.isArray(a)&&0===e.length&&0===a.length)){if(a.length&&e.length){let d=[];for(let n=0;n<e.length;n++){const i=t._getDataItem(a[n],e[n]),r=e[n];d.push(i),t.boundSource[r]=i,t[r]=t.boundSource[r],t.dataItemById[i.$.id]=t[r]}return t._notify({action:"update",index:e,data:d}),void t.refreshHierarchy()}const d=t._getDataItem(a,e);return t.boundSource[e]=d,t[e]=t.boundSource[e],t.dataItemById[d.$.id]=t[e],t._notify({action:"update",index:e,data:d}),t.refreshHierarchy(),d}}insert(e,a){const t=this;a=t._getDataItem(a,e);const d=t.boundSource.splice(e,0,a);return t.refreshIndexes(),t._notify({action:"insert",index:e,data:a}),t.refreshHierarchy(),d}move(e,a){if(!(a>e&&1==a-e||e===a)){const t=this,d=t.boundSource.splice(e,1)[0];a>e?(a--,t.boundSource.splice(a,0,d)):t.boundSource.splice(a,0,d),t.refreshIndexes(),t._notify({action:"move",index:a,data:t.boundSource[a]}),t.refreshHierarchy()}}indexOf(e){const a=this,t=a.boundSource.indexOf(e);return t}get length(){const e=this;return e.virtualDataSourceLength?e.virtualDataSourceLength:e.dataSourceLength?e.dataSourceLength:"number"==typeof e.dataSource?e.dataSource:e.bindingCompleted?e.boundSource.length:e.dataSource&&"string"!=typeof e.dataSource&&e.dataSource.length?e.dataSource.length:e.boundSource.length}clear(){const e=this;if(!e.isInitialized)return e._cachedValues=[],void(e.dataItemById=[]);for(let a=0;a<e.boundSource.length;a++)delete e[a];e._cachedValues=[],e.boundSource=e.observable?new Smart.ObservableArray:[],e.dataItemById=[],e.refreshHierarchy()}_getId(e,a,t){if(null!==e&&e.name!==void 0&&e.name&&a.getAttribute){let d=a.getAttribute(e.name);if(null!==d&&0<d.toString().length)return d;if(e.map)try{let t=a.getAttribute(e.map);if(null!==t&&0<t.toString().length)return t}catch(e){return t}return}if(e&&0<e.toString().length&&a.getAttribute){let t=a.getAttribute(e);if(null!==t&&0<t.toString().length)return t.trim().split(" ").join("").replace(/([ #;?%&,.+*~\':'!^$[\]()=>|\/@])/g,"");else{let t=e.split(this.mapChar);if(1<t.length){let e=a;for(let a=0;a<t.length;a++)void 0!==e&&(e=e[t[a]]);if(void 0!==e)return e}else if(void 0!==a[e])return a[e]}}return t}_buildHierarchy(){const e=this;if(!e.reservedNames)e.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"};else{const a=e.reservedNames;a.leaf||(a.leaf="leaf"),a.parent||(a.parent="parent"),a.expanded||(a.expanded="expanded"),a.checked||(a.checked="checked"),a.selected||(a.selected="selected"),a.level||(a.level="level"),a.data||(a.data="data")}const a=e.reservedNames;if(e.childrenDataField){const t=[];for(let d=0;d<e.boundSource.length;d++){const n=Object.assign({},e.boundSource[d]);if(!n)continue;t.push(n);const r=function(t){const d=e.childrenDataField.split(e.mapChar);let n=null;if(1<d.length){let e=t;for(let a=0;a<d.length;a++)void 0!==e&&(e=e[d[a]]);n=e}else n=t.children;t.children=n,(null===t.children||void 0===t.children||t.children&&0===t.children.length)&&(t[a.leaf]=!0)};r(n),n[a.level]=0,n.$||(n.$={}),n[a.parent]=null,n[a.data]=n,void 0===n[a.expanded]&&(n[a.expanded]=!1);const o=function(t,d){if(!d)return void(t.children=[]);for(let n,l=0;l<d.length;l++)(n=e._getDataItem(d[l],l),!!n)&&(r(n),n[a.level]=t[a.level]+1,n[a.parent]=t,n[a.data]=n,t&&(t.children[l]=n),void 0===n[a.expanded]&&(n[a.expanded]=!1),o(n,n.children))};o(n,n.children)}if(e.boundHierarchy=t,!e._boundSourceUpdate){for(let a=0;a<e.boundHierarchy.length;a++){const t=e.boundHierarchy[a];if(t.children){const a=function(t){if(e.dataItemById[t.$.id]||(e.boundSource.canNotify=!1,e.dataItemById[t.$.id]=t,e[e.boundSource.length]=t,e.boundSource.push(t),e.boundSource.canNotify=!0),t.children)for(let e=0;e<t.children.length;e++){const d=t.children[e];d.children&&a(d)}};a(t)}}e._boundSourceUpdate=!0}}e.xmlRoot&&"xml"===e.dataSourceType&&(e.boundHierarchy=this._getHierarchy("uid","_parentuid","children",null,e.boundSource)),e.keyDataField&&e.parentDataField&&(e.boundHierarchy=this._getHierarchy(e.keyDataField,e.parentDataField,"children",null,e.boundSource)),e.groupBy&&0<e.groupBy.length&&(e.boundHierarchy=this._getGroupHierarchy(e.groupBy,"children","label",null,"data",null,"parent",e.boundSource)),e.virtualDataSourceOnExpand&&(e.boundHierarchy=this._getHierarchy("id","parentId","children",null,e.boundSource))}_getGroupHierarchy(e,a,t,d,n,i,r,o,l){let u=this;l||(l=0);let c=u.reservedNames;const s=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};let h=[];for(let u=0;u<e.length;u++)h[u]=s();a||(a="children"),t||(t="group"),n||(n="item"),r||(r="parent"),void 0===i&&(i="value");const p=[],m=[];let g=0;const f=function(e){let a=e;if(d)for(let e in d){const t=d[e];t.name&&t.map&&(a[t.map]=a[t.name])}return a};for(let u,y=0;y<o.length;y++){u=Object.assign({},f(o[y])),u[c.leaf]=!1;let d=[],b=0;for(let a=0;a<e.length;a++){const t=e[a],n=u[t];null!==n&&(d[b++]={value:n,group:t,hash:h[a]})}if(d.length!==e.length)break;let S=null,F="";for(let e=0;e<d.length;e++){const o=d[e].value,s=d[e].group,h=d[e].hash;if(F=F+"_"+h+"_"+o,void 0!==m[F]&&null!==m[F]){S=m[F];continue}if(null===S){S={$:{}},S[c.level]=0,S[c.leaf]=!1,S[r]=null,S[t]=o,S[n]=u,S.groupDataField=s,S[c.expanded]=void 0!==u[c.expanded]&&u[c.expanded],i&&(S[i]=u[i]),S[a]=[];let e=p.length+l;(!this.id||"number"==typeof u.$.id||isFinite(u.$.id))&&(e="Item"+e),void 0===S.$.id&&(S.$.id=e),p[g++]=S}else{const e={$:{}};e[c.level]=S[c.level]+1,e[r]=S,e[t]=o,e[a]=[],e[n]=u,e.groupDataField=s,e[c.leaf]=!1,e[c.expanded]=void 0!==u[c.expanded]&&u[c.expanded],i&&(e[i]=u[i]),void 0===e.$.id&&(e.$.id=S.$.id+"_"+S[a].length),S[a][S[a].length]=e,S=e}m[F]=S}u&&(u[c.leaf]=!0),null===S?void 0===u.$.id&&(u.$.id=s()):(null===this.id?void 0===u.$.id&&(u.$.id=S.$.id+"_"+S[a].length):void 0===u.$.id&&-1===u.$.id.toString().indexOf(S.$.id)&&(u.$.id=S.$.id+"_"+u.$.id),u[r]=S,u[c.level]=S[c.level]+1,S[a][S[a].length]=u)}return p}_getHierarchy(e,a,t,d,n){const r=this,i=[];let o=this.boundSource;if(n&&(o=n),0===this.boundSource.length)return null;const l=null===t?"children":t;let u=[],c=o,s=c.length,h=r.reservedNames;const p=function(e){let a=e;if(d)for(let e in d){const t=d[e];t.name&&t.map&&(a[t.map]=a[t.name])}return a};for(let r=0;r<s;r++){let t=c[r],d=t[a],n=t[e];"parentId"===a&&(d=t.$.parentId),"id"===e&&(n=t.$.id),t[l]=[],u[n]={parentId:d,item:t}}for(let r=0;r<s;r++){const t=c[r];let d=t[a],n=t[e];if("parentId"===a&&(d=t.$.parentId),"id"===e&&(n=t.$.id),void 0!==u[d]){let e={parentId:d,item:u[n].item},a=u[d].item;a[l]||(a[l]=[]);let t=a[l].length;e=e.item,h?void 0===e[h.parent]&&(e[h.parent]=a):void 0===e.parent&&(e.parent=a);const i=p(e);a[l][t]=i,u[d].item=a,u[n].item=e}else{let e=u[n].item;h?void 0===e[h.parent]&&(e[h.parent]=null):void 0===e.parent&&(e.parent=null);const a=p(e);h?a[h.level]=0:a.level=0,i[i.length]=a}}if(0!==i.length){let e=function(a,t){for(let d=0;d<t.length;d++){const n=t[d];h?n[h.level]=a:n.level=a;const i=n[l];i?0<i.length?e(a+1,i):r.virtualDataSourceOnExpand?void 0===n.leaf&&(n.leaf=!1):h?n[h.leaf]=!0:n.leaf=!0:r.virtualDataSourceOnExpand?void 0===n.leaf&&(n.leaf=!1):h?n[h.leaf]=!0:n.leaf=!0}};e(0,i)}return i}summarize(e,a){const t=this;Array.isArray(e)||(e=[e]);let d=[];for(let t=0;t<e.length;t++){const a=e[t];for(let e in a){const t=a[e];d.push({dataField:e,functions:t})}}e=d;let n={},r=[];a||(a=t.boundSource);let o=a.length;if(0!==o&&void 0!==o){for(let t,d=0;d<o;d++){t=a[d];for(let a=0;a<e.length;a++){const i=e[a];let o=t[i.dataField];if(i.functions){n[i.dataField]=n[i.dataField]||{},r[i.dataField]=r[i.dataField]||0,r[i.dataField]++;const e=function(e){for(let a in e){let d=n[i.dataField][a];(null===d||void 0===d)&&(n[i.dataField][a]=0,d=0),"function"==typeof e[a]&&(d=e[a](d,o,i.dataField,t)),n[i.dataField][a]=d}};let a=parseFloat(o);a=!isNaN(a),a&&(o=parseFloat(o)),"number"==typeof o&&isFinite(o)?i.functions.forEach(function(a){let t=n[i.dataField][a];if((null===t||void 0===t)&&(t=0,"min"===this&&(t=9999999999999),"max"===this&&(t=-9999999999999)),"sum"===a||"avg"===a||"stdev"===a||"stdevp"===a||"var"===a||"varp"===a)t+=parseFloat(o);else if("product"===a)0==d?t=parseFloat(o):t*=parseFloat(o);else if("min"===a)t=Math.min(t,parseFloat(o));else if("max"===a)t=Math.max(t,parseFloat(o));else if("count"===a)t++;else if("object"==typeof a)return void e(a);n[i.dataField][a]=t}):i.functions.forEach(function(a){if("min"===a||"max"===a||"count"===a||"product"===a||"sum"===a||"avg"===a||"stdev"===a||"stdevp"===a||"var"===a||"varp"===a){if(null===o)return!0;let e=n[i.dataField][a];return(null===e||void 0===e)&&(e=0),n[i.dataField][a]=e,!0}"object"==typeof a&&e(a)})}}}for(let t=0;t<e.length;t++){const d=e[t];if(d.functions){if(n[d.dataField]||(n[d.dataField]={},d.functions.forEach(function(e){n[d.dataField][e]=0})),void 0!==n[d.dataField].avg){const e=n[d.dataField].avg,a=r[d.dataField];n[d.dataField].avg=0===a||void 0===a?0:e/a}else void 0!==n[d.dataField].count&&(n[d.dataField].count=o);(n[d.dataField].stdev||n[d.dataField].stdevp||n[d.dataField]["var"]||n[d.dataField].varp)&&d.functions.forEach(function(e){if("stdev"===e||"var"===e||"varp"===e||"stdevp"===e){const t=n[d.dataField][e],i=o,r=t/o;let l=0;for(let e=0;e<o;e++){let t=a[e],n=t[d.dataField];l+=(n-r)*(n-r)}let u="stdevp"===e||"varp"===e?i:i-1;0===u&&(u=1),"var"===e||"varp"===e?n[d.dataField][e]=l/u:("stdevp"===e||"stdev"===e)&&(n[d.dataField][e]=Math.sqrt(l/u))}})}}return n}}_getDataItem(e,a){const t=this,d={},n="number"==typeof t.dataSource||t.dataSourceLength;if(!e)return{$:{id:a},isEmpty:!0,index:a};if(n){for(let e=0;e<t.dataFields.length;e++){const a=t.dataFields?t.dataFields[e]:{};d[a.name]=""}return d.$={},d.$.id=a,d.$.index=a,d}const i=e;if(void 0!==i.expanded&&(d.expanded=i.expanded,d.expanded="true"===i.expanded||!0===i.expanded||1===i.expanded),t.childrenDataField?void 0!==i[t.childrenDataField]&&(d.children=i[t.childrenDataField]):void 0===i.children?void 0!==i.items&&(d.children=i.items):d.children=i.children,void 0!==i.leaf&&(d.leaf=i.leaf),void 0!==i.level&&(d.level=i.level),t.keyDataField&&void 0!==i[t.keyDataField]&&(d[t.keyDataField]=i[t.keyDataField]),t.parentDataField&&void 0!==i[t.parentDataField]&&(d[t.parentDataField]=i[t.parentDataField]),0===t.dataFields.length){const a=Object.getOwnPropertyNames(e);for(let e=0;e<a.length;e++)t.dataFields.push({name:a[e],dataType:"string"})}for(let n=0;n<t.dataFields.length;n++){const a=t.dataFields?t.dataFields[n]:{};let r="";if(void 0===a||null===a)continue;if(e.length&&(r=e[n]),a.map){let e=a.map.split(t.mapChar);if(0<e.length){let a=i;for(let t=0;t<e.length;t++)i&&(a=a[e[t]]);r=a}else r=i[a.map]}void 0!==r&&null!==r?r=r.toString():void 0===r&&null!==r&&(r="");let o=!1;""===r&&(o=!0,r=e[a.name],void 0!==r&&null!==r?"array"!==a.dataType&&"date"!==a.dataType&&(r=r.toString()):r=""),"[object Object]"===r&&a.map&&o&&(r=""),t._cachedValues[""+r+"_"+a.dataType]?r=t._cachedValues[""+r+"_"+a.dataType]:("bool"===a.dataType||"boolean"===a.dataType?"true"===r||"1"===r?r=!0:("false"===r||"0"===r)&&(r=!1):r=t.$document.deserialize(""+r,a.dataType,!0),t._cachedValues[r+"_"+a.dataType]=r),"string"!==a.dataType&&"boolean"!==a.dataType&&"bool"!==a.dataType&&(isNaN(r)||r===-Infinity||r===1/0)&&(r=0),d[a.name]=r}let r=a;return t.id?(r=i[t.id],"object"==typeof r&&(r=a)):t.dataItemById&&t.dataItemById[r]&&(r=t.length),d.$||(d.$={}),d.$.id=r,d.$.index=a,Object(d)}_bindToArray(){const e=this,a="number"==typeof e.dataSource||e.dataSourceLength,t=[];e.boundSource.canNotify=!1;for(let d=0;d<e.length;d++){const n=a?{}:e.dataSource[d],i=e._getDataItem(n,d);t.push(i)}if(a&&e.dataSourceLength&&0<e.dataSource.length)for(let a=0;a<e.dataSource.length;a++){const d=e.dataSource[a].cell,n=e.dataSource[a].value,i=d.replace(/[^0-9]/g,""),r=d.replace(/[0-9]/g,"");t[i-1][r]=n}e.boundSource=!1===e.observable?t:new Smart.ObservableArray(t);for(let a=0;a<e.length;a++)e[a]=e.boundSource[a],e.dataItemById[e[a].$.id]=e[a];e.boundSource.canNotify=!0}_bindToJSON(){const e=this,a=[],t=Object.entries(e.dataSource);e.boundSource.canNotify=!1;for(let d=0;d<t.length;d++){const n=t[d],i=e._getDataItem(n,d);a.push(i)}e.boundSource=!1===e.observable?a:new Smart.ObservableArray(a);for(let a=0;a<e.length;a++)e[a]=e.boundSource[a],e.dataItemById[e[a].$.id]=e[a];e.boundSource.canNotify=!0}sortBy(e,a,t){const d=this;if(!a)for(let t=0;t<d.dataFields.length;t++){const n=d.dataFields[t];if(n.name===e){a=n.dataType;break}}if(d.boundHierarchy){const n=function(r){d._sort(r,e,t,a);for(let d=0;d<r.length;d++){const i=r[d];i.children&&n(i.children,e,t,a)}};n(d.boundHierarchy)}else d._sort(d.boundSource,e,t,a)}_createFilter(e,a){const t={"=":"EQUAL","<>":"NOT_EQUAL","<":"LESS_THAN",">":"GREATER_THAN","<=":"LESS_THAN_OR_EQUAL",">=":"GREATER_THAN_OR_EQUAL",equal:"EQUAL","not equal":"NOT_EQUAL","less than":"LESS_THAN","greater than":"GREATER_THAN","greater than or equal":"GREATER_THAN_OR_EQUAL","less than or equal":"LESS_THAN_OR_EQUAL","starts with":"STARTS_WITH","ends with":"ENDS_WITH",null:"null","":"EMPTY",isblank:"EMPTY",isnotblank:"NOT_EMPTY",contains:"CONTAINS",notcontains:"DOES_NOT_CONTAIN",startswith:"STARTS_WITH",endswith:"ENDS_WITH",NULL:"NULL",NOT_NULL:"NOT_NULL"};let d=[];for(let t=0;t<a.length;t++){const e=a[t],n=-1===e.indexOf("\"")?e.split(" "):e.split("\"");let i=[];for(let e=0;e<n.length;e++){const a=n[e];""!==a&&i.push(a.trim())}d.push(i)}const n=new Smart.FilterGroup,r=[],o=[];for(let n=0;n<d.length;n++){const a=d[n];if(1<a.length){const d=new Smart.FilterGroup;let n="and",i=0;for(let r=0;r<a.length;r++){const o=a[r];if("and"===o||"or"===o){n=o;continue}if(i++,2===i){const l=d.createFilter(e,o,t[a[r-1]]);i=0,n&&d.addFilter(n,l)}}o.push(d)}else{const e=a[0];if("and"!==e&&"or"!==e)throw new Error("Filter Exprresion expects \"AND\" or \"OR\", but the token is: "+e);r.push(e)}}let l=0;if(1===o.length)return o[0];for(let t,d=0;d<o.length;d++)t=r[l],0==(d+1)%2&&l++,t||(t="and"),n.addFilter(t,o[d]);return n}filterBy(e,...a){const t=this,d=(()=>{for(let a=0;a<t.dataFields.length;a++){const d=t.dataFields[a];if(d.name===e)return d.dataType}})(),n=t._createFilter(d,a);let i=t.boundSource.filter(a=>{const t=n.evaluate(a[e]);return t});return i}_filter(e,a="and"){const t=this,d=[],n=[];if(0===e.length)return void t.clearFilter();const r=e=>{for(let a=0;a<t.dataFields.length;a++){const d=t.dataFields[a];if(d.name===e)return d.dataType}};let o,i;"and"===a?(o=!0,i=function(e,a,t){return e&&a.evaluate(t[a.dataField])}):(o=!1,i=function(e,a,t){return e||a.evaluate(t[a.dataField])});for(let o=0;o<e.length;o++){const a=e[o],i=a[0];let l=null;l=a[1]instanceof Smart.FilterGroup?a[1]:t._createFilter(r(i),a.splice(1)),l&&(n.push(i),l.dataField=i,d.push(l))}if(t.boundHierarchy){const e=function(e){let a=o;for(let t=0;t<d.length;t++){const n=d[t];a=i(a,n,e)}return e.$.filtered=a,a},a=function(d,n,i){let r=0;for(let t=0;t<d.length;t++){const i=d[t];e(i),i.$.filtered&&r++,i.children&&a(i.children,i,n)}0<r&&0<t.groupBy.length&&n?(n.$.filtered=!0,i&&!i.$.filtered&&(i.$.filtered=!0)):0<r&&r!==d.length&&n&&(n.$.filtered=null,i&&!i.$.filtered&&(i.$.filtered=null))};a(t.boundHierarchy,null,null)}else for(let e=0;e<t.boundSource.length;e++){const a=t.boundSource[e];let n=o;for(let e=0;e<d.length;e++){const t=d[e];n=i(n,t,a)}a.$.filtered=n}t.onFilter&&t.onFilter()}clearGroup(){const e=this;e.groupBy=[],e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()}clearFilter(){const e=this;for(let a=0;a<e.boundSource.length;a++){const t=e.boundSource[a];t.$.filtered=!0}if(e.boundHierarchy){const a=function(e,t,d){let n=0;for(let r=0;r<e.length;r++){const d=e[r];d.$.filtered=!0,d.$.filtered&&n++,d.children&&a(d.children,d,t)}t&&(t.$.filtered=!0,d&&!d.$.filtered&&(d.$.filtered=!0))};a(e.boundHierarchy,null,null)}e.onFilter&&e.onFilter()}clearSort(){const e=this;e._sort(e.boundSource,[],[],[])}_sort(e,t,a,d,n){const r=this;let i=!1;if(0===e.length)return;if(e&&e.constructor&&e instanceof Smart.ObservableArray&&(i=!0),(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)&&!i&&!r.boundHierarchy)throw new Error("sort: Missing or Invalid arguments!");"string"==typeof t&&(t=[t]);const o=[],l=[];void 0===a&&(a=[]);const u=function(e,a){let t;switch(a||typeof e){case"string":t=new Intl.Collator().compare;break;case"number":t=function(e,a){return e-a};break;case"boolean":case"bool":t=function(e,a){return e===a?0:!1===e?-1:1};break;case"date":case"time":case"dateTime":e instanceof Date?t=function(e,a){return e.getTime()-a.getTime()}:(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)&&(t=function(e,a){return e.compare(a)});break;case"object":if(e instanceof Date)t=function(e,a){return e.getTime()-a.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)t=function(e,a){return e.compare(a)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;t=function(t,a){return e.compareComplexNumbers(t,a)}}}return t};for(let r=0;r<t.length;r++){o[r]=void 0===a[r]||"asc"===a[r]||"ascending"===a[r]?1:-1;const n=e[0][t[r]];l[r]=u(n,d[r])}if(n)return void n(e,t,a,l);e.sort(function(e,a){for(let d=0;d<t.length;d++){const n=l[d](e[t[d]],a[t[d]]);if(0===n){if(t[d+1])continue;else if(void 0!==e._index)return(e._index-a._index)*o[d];return 0}return n*o[d]}if(0===t.length)return e.$.index<a.$.index?-1:e.$.index>a.$.index?1:0});for(let o=0;o<e.length;o++)r[o]=e[o]}static Filter(e,a,t,d){const n=e.filter(e=>{let n=!0;for(let r=0;r<t.length;r++){const i=t[r],o=a[r];n=d?n&&d(e,o,i):n&&i.evaluate(e[o])}return n});return n}filter(e,a,t){Smart.DataAdapter.Filter(this.boundSource,e,a,t)}sort(e,a,t){Smart.DataAdapter.Sort(this.boundSource,e,a,t)}static Sort(e,t,a,d){const n=function(e){let a;switch(typeof e){case"string":a=new Intl.Collator().compare;break;case"number":a=function(e,a){return e-a};break;case"boolean":a=function(e,a){return e===a?0:!1===e?-1:1};break;case"object":if(e instanceof Date)a=function(e,a){return e.getTime()-a.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof BigNumberNG)a=function(e,a){return e.compare(a)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;a=function(t,a){return e.compareComplexNumbers(t,a)}}}return a};if(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)return;"string"==typeof t&&(t=[t]);const r=[],o=[];void 0===a&&(a=[]);for(let l=0;l<t.length;l++)r[l]=void 0===a[l]||"asc"===a[l]||"ascending"===a[l]?1:-1,o[l]=n(e[0][t[l]]);if(d)return void d(e,t,a,o);const i=e.slice(0);return i.sort(function(e,a){for(let d=0;d<t.length;d++){const n=o[d](e[t[d]],a[t[d]]);if(0===n){if(t[d+1])continue;else if(void 0!==e._index)return(e._index-a._index)*r[d];return 0}return n*r[d]}}),i}}Smart.DataAdapter=DataAdapter;class Ajax{constructor(e,a){const t=this;t.config=e,t.callback=a;!1===e.autoFetch||t.call(e)}call(e){const a=this;e||(e=a.config);let t="GET",d=e.url,n=null,i=!0;if(e.type&&(t=e.type),e.data)if("GET"===t){for(let a in d+="?",e.data)e.data.hasOwnProperty(a)&&(d+=encodeURI(a+"="+e.data[a]+"&"));"&"===d.charAt(d.length-1)&&(d=d.slice(0,d.length-1))}else"POST"===t&&(n=JSON.stringify(e.data));e&&!1===e.async&&"xlsx"!==e.dataSourceType&&(i=!1),void 0!==window.fetch&&i?a.ajaxFetch(e,t,d,n):a.ajaxXMLHttpRequest(e,t,d,n,i)}ajaxFetch(e,a,t,d){const n=this,i={method:a};let r;switch(e.dataSourceType){case"json":r="json";break;case"xlsx":r="arrayBuffer";break;default:r="text";}e&&e.contentType&&(i.headers=new Headers({"Content-Type":e.contentType})),null!==d&&(i.body=d);let o,l,u;if(e.timeout&&(l=setTimeout(function(){u=!0},e.timeout)),e.beforeSend){const a=e.beforeSend(i,e);if(!1===a)return}fetch(t,i).then(function(e){if(u)throw o=408,new Error("timeout");if(l&&clearTimeout(l),o=e.status,!e.ok)throw new Error(e.statusText);return e[r]()}).then(function(a){return"arrayBuffer"===r?JSZip.loadAsync(a).then(function(a){return a.files["xl/worksheets/sheet1.xml"].async("text").then(function(t){return a.files["xl/sharedStrings.xml"].async("text").then(function(a){const d=n.parseXLSXData(t,a);n.ajaxComplete(e,d,o)})})}):void n.ajaxComplete(e,a,o)}).catch(function(a){"JSZip is not defined"===a.message&&(a.message="JSZip is not defined. Please include a reference to JSZip to be able to load data from XLSX files."),e&&e.loadError&&e.loadError(o,a),n.callback&&n.callback(a,o)})}ajaxXMLHttpRequest(e,a,t,d,n){const i=new XMLHttpRequest,r=this;if(i.open(a,t,n),i.ontimeout=function(){e&&e.loadError&&e.loadError(408,"timeout")},i.onload=function(){if(4===i.readyState){const a=i.status;let t=i.response;200<=a&&299>=a?("json"===e.dataSourceType&&(t=JSON.parse(t)),r.ajaxComplete(e,t,a)):e&&e.loadError&&e.loadError(a,t)}},i.onerror=function(){e&&e.loadError&&e.loadError(i.status,i.response)},e&&e.contentType&&i.setRequestHeader("Content-Type",e.contentType),n&&e.timeout&&(i.timeout=e.timeout),e.beforeSend){const a=e.beforeSend(i,e);if(!1===a)return}i.send(d)}ajaxComplete(e,a,t){if(e){if(e.beforeLoadComplete){const t=e.beforeLoadComplete(a);t&&(a=t)}e.loadComplete&&e.loadComplete(a,t),this.callback&&this.callback(a,t)}}parseXLSXData(e,a){const t=new DOMParser,d=t.parseFromString(a,"text/xml"),n=Array.from(d.getElementsByTagName("si")),i=[],r=t.parseFromString(e,"text/xml"),o=Array.from(r.getElementsByTagName("row")),l=[];return n.forEach(function(e){let a=e.getElementsByTagName("t");if(1===a.length)i.push(a[0].innerHTML);else{let e="";a=Array.from(a),a.forEach(function(a){e+=a.innerHTML}),i.push(e)}}),o.forEach(function(e){const a={},t=Array.from(e.getElementsByTagName("c"));t.forEach(function(e){const t=e.getAttribute("r").match(/\D+/)[0],d=e.getAttribute("t"),n=e.getElementsByTagName("v")[0].innerHTML;let r;r="s"===d?i[parseFloat(n)]:"b"===d?1===parseFloat(n):parseFloat(n),a[t]=r}),l.push(a)}),l}}