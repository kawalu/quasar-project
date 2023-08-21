import{i as re,w as B,o as X,H as z,aG as ue,g as P,r as g,c as s,a9 as ne,aF as ae,aq as ie,K as se,V as de,Y as fe,Z as ce,S as ve,h as a,a5 as w,x as Q,ax as pe,E,al as ge,a1 as me}from"./index.ca5c5b1a.js";import{u as be,a as he}from"./use-dark.a7bce1dc.js";import{u as Ce}from"./uid.42677368.js";function qe({validate:e,resetValidation:o,requiresQForm:t}){const r=re(ue,!1);if(r!==!1){const{props:c,proxy:i}=P();Object.assign(i,{validate:e,resetValidation:o}),B(()=>c.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(i)):r.bindComponent(i)}),X(()=>{c.disable!==!0&&r.bindComponent(i)}),z(()=>{c.disable!==!0&&r.unbindComponent(i)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const W=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,G=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,J=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,I=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,O=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,D={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>W.test(e),hexaColor:e=>G.test(e),hexOrHexaColor:e=>J.test(e),rgbColor:e=>I.test(e),rgbaColor:e=>O.test(e),rgbOrRgbaColor:e=>I.test(e)||O.test(e),hexOrRgbColor:e=>W.test(e)||I.test(e),hexaOrRgbaColor:e=>G.test(e)||O.test(e),anyColor:e=>J.test(e)||I.test(e)||O.test(e)},ye=[!0,!1,"ondemand"],_e={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ye.includes(e)}};function xe(e,o){const{props:t,proxy:r}=P(),c=g(!1),i=g(null),u=g(null);qe({validate:C,resetValidation:x});let f=0,h;const V=s(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),m=s(()=>t.disable!==!0&&V.value===!0),_=s(()=>t.error===!0||c.value===!0),M=s(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:i.value);B(()=>t.modelValue,()=>{k()}),B(()=>t.reactiveRules,b=>{b===!0?h===void 0&&(h=B(()=>t.rules,()=>{k(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),B(e,b=>{b===!0?u.value===null&&(u.value=!1):u.value===!1&&(u.value=!0,m.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&S())});function x(){f++,o.value=!1,u.value=null,c.value=!1,i.value=null,S.cancel()}function C(b=t.modelValue){if(m.value!==!0)return!0;const F=++f,T=o.value!==!0?()=>{u.value=!0}:()=>{},q=(d,v)=>{d===!0&&T(),c.value=d,i.value=v||null,o.value=!1},R=[];for(let d=0;d<t.rules.length;d++){const v=t.rules[d];let p;if(typeof v=="function"?p=v(b,D):typeof v=="string"&&D[v]!==void 0&&(p=D[v](b)),p===!1||typeof p=="string")return q(!0,p),!1;p!==!0&&p!==void 0&&R.push(p)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return F===f&&q(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return F===f&&q(v!==void 0,v),v===void 0},d=>(F===f&&(console.error(d),q(!0)),!1)))}function k(b){m.value===!0&&t.lazyRules!=="ondemand"&&(u.value===!0||t.lazyRules!==!0&&b!==!0)&&S()}const S=ne(C,0);return z(()=>{h!==void 0&&h(),S.cancel()}),Object.assign(r,{resetValidation:x,validate:C}),ae(r,"hasError",()=>_.value),{isDirtyModel:u,hasRules:V,hasError:_,errorMessage:M,validate:C,resetValidation:x}}const Y=/^on[A-Z]/;function Se(e,o){const t={listeners:g({}),attributes:g({})};function r(){const c={},i={};for(const u in e)u!=="class"&&u!=="style"&&Y.test(u)===!1&&(c[u]=e[u]);for(const u in o.props)Y.test(u)===!0&&(i[u]=o.props[u]);t.attributes.value=c,t.listeners.value=i}return ie(r),r(),t}let y=[],A=[];function ee(e){A=A.filter(o=>o!==e)}function Oe(e){ee(e),A.push(e)}function Pe(e){ee(e),A.length===0&&y.length!==0&&(y[y.length-1](),y=[])}function Fe(e){A.length===0?e():y.push(e)}function Re(e){y=y.filter(o=>o!==e)}function U(e){return e===void 0?`f_${Ce()}`:e}function Be(e){return e!=null&&(""+e).length!==0}const Me={...be,..._e,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Te=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function De(){const{props:e,attrs:o,proxy:t,vnode:r}=P();return{isDark:he(e,t.$q),editable:s(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Se(o,r),targetUid:g(U(e.for)),rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Ue(e){const{props:o,emit:t,slots:r,attrs:c,proxy:i}=P(),{$q:u}=i;let f=null;e.hasValue===void 0&&(e.hasValue=s(()=>Be(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:H,onFocusout:L}),Object.assign(e,{clearValue:j,onControlFocusin:H,onControlFocusout:L,focus:v}),e.computedCounter===void 0&&(e.computedCounter=s(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:h,hasRules:V,hasError:m,errorMessage:_,resetValidation:M}=xe(e.focused,e.innerLoading),x=e.floatingLabel!==void 0?s(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):s(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=s(()=>o.bottomSlots===!0||o.hint!==void 0||V.value===!0||o.counter===!0||o.error!==null),k=s(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),S=s(()=>`q-field row no-wrap items-start q-field--${k.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(x.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(m.value===!0?" q-field--error":"")+(m.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),b=s(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(m.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=s(()=>o.labelSlot===!0||o.label!==void 0),T=s(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&m.value!==!0?` text-${o.labelColor}`:"")),q=s(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:x.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=s(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});B(()=>o.for,l=>{e.targetUid.value=U(l)});function d(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function v(){Fe(d)}function p(){Re(d);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function H(l){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function L(l,n){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function j(l){se(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),de(()=>{M(),u.platform.is.mobile!==!0&&(h.value=!1)})}function oe(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:w},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},le())),m.value===!0&&o.noErrorIcon===!1&&l.push($("error",[a(Q,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push($("inner-loading-append",r.loading!==void 0?r.loading():[a(pe,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push($("inner-clearable-append",[a(Q,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:j})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:w},r.append())),e.getInnerAppend!==void 0&&l.push($("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function le(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),F.value===!0&&l.push(a("div",{class:T.value},E(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(E(r.default))}function te(){let l,n;m.value===!0?_.value!==null?(l=[a("div",{role:"alert"},_.value)],n=`q--slot-error-${_.value}`):(l=E(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=E(r.hint),n="q--slot-hint"));const Z=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&Z===!1&&l===void 0)return;const N=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:w},[o.hideBottomSpace===!0?N:a(ge,{name:"q-transition--field-message"},()=>N),Z===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function $(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let K=!1;return fe(()=>{K=!0}),ce(()=>{K===!0&&o.autofocus===!0&&i.focus()}),X(()=>{ve.value===!0&&o.for===void 0&&(e.targetUid.value=U()),o.autofocus===!0&&i.focus()}),z(()=>{f!==null&&clearTimeout(f)}),Object.assign(i,{focus:v,blur:p}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a("label",{ref:e.rootRef,class:[S.value,c.class],style:c.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:w},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:b.value,tabindex:-1,...e.controlEvents},oe()),C.value===!0?te():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:w},r.after()):null])}}const we=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ae=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ve=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ke=/[a-z0-9_ -]$/i;function ze(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(me.is.firefox===!0?ke.test(t.data)===!1:we.test(t.data)===!0||Ae.test(t.data)===!0||Ve.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{Te as a,De as b,Ue as c,Fe as d,ze as e,Be as f,Oe as g,Pe as r,Me as u};