import{r as t,h as e,g as o}from"./p-2eb42df6.js";import"./p-7745c6f7.js";import"./p-5c62ed62.js";import{T as n}from"./p-43fec8b7.js";import{B as r}from"./p-79d5f422.js";const s=class{constructor(e){t(this,e),this.condition=null,this.conditionResult=!1}componentWillLoad(){return this._updateConditionResult()}componentWillUpdate(){return this._updateConditionResult()}_stringToBoolean(t){switch(t.toLowerCase().trim()){case"true":case"1":return!0;case"false":case"0":case null:return!1;default:return Boolean(t)}}_updateConditionResult(){let t;return(t=this.condition instanceof Promise?this.condition:Promise.resolve(this.condition)).then(t=>(this.conditionResult="string"==typeof t?this._stringToBoolean(t):Boolean(t),Promise.resolve()))}render(){let t=!1,o=e("slot",null),n=null;const r=this._host.children;for(let e=0;e<r.length;e++){const o=r[e].getAttribute("slot");if("condition-true"===o||"condition-false"===o){t=!0;break}}return t&&(o=e("slot",{name:"condition-true"}),n=e("slot",{name:"condition-false"})),this.conditionResult?o:n}get _host(){return o(this)}};!function(t,e,o,n){var r,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(s<3?r(i):s>3?r(e,o,i):r(e,o))||i);s>3&&i&&Object.defineProperty(e,o,i)}([r(),n({description:"The property value must be the name of a model property or expression. Children are rendered only if the value of the condition is evaluated to true",isMandatory:!0,propertyType:"any"})],s.prototype,"condition",void 0);export{s as psk_condition};