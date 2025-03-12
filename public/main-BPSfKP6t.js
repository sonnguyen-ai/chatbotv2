var yt=Object.defineProperty;var _t=(n,t,e)=>t in n?yt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var u=(n,t,e)=>_t(n,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,J=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),X=new WeakMap;let lt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(e,t))}return t}toString(){return this.cssText}};const bt=n=>new lt(typeof n=="string"?n:n+"",void 0,q),O=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new lt(e,n,q)},vt=(n,t)=>{if(J)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=L.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},Q=J?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return bt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xt,defineProperty:At,getOwnPropertyDescriptor:wt,getOwnPropertyNames:Et,getOwnPropertySymbols:St,getPrototypeOf:Ct}=Object,_=globalThis,tt=_.trustedTypes,Tt=tt?tt.emptyScript:"",D=_.reactiveElementPolyfillSupport,T=(n,t)=>n,V={toAttribute(n,t){switch(t){case Boolean:n=n?Tt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ct=(n,t)=>!xt(n,t),et={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&At(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=wt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const h=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,s=[...Et(e),...St(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:V;this._$Em=i,this[i]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ct)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[T("elementProperties")]=new Map,w[T("finalized")]=new Map,D==null||D({ReactiveElement:w}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,R=M.trustedTypes,st=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,dt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+y,Mt=`<${pt}>`,x=document,H=()=>x.createComment(""),N=n=>n===null||typeof n!="object"&&typeof n!="function",Z=Array.isArray,Ht=n=>Z(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",z=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,b=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,rt=/"/g,ut=/^(?:script|style|textarea|title)$/i,Nt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=Nt(1),A=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),at=new WeakMap,v=x.createTreeWalker(x,129);function gt(n,t){if(!Z(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const kt=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=C;for(let h=0;h<e;h++){const a=n[h];let d,p,l=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===C?p[1]==="!--"?o=it:p[1]!==void 0?o=nt:p[2]!==void 0?(ut.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=b):p[3]!==void 0&&(o=b):o===b?p[0]===">"?(o=i??C,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?b:p[3]==='"'?rt:ot):o===rt||o===ot?o=b:o===it||o===nt?o=C:(o=b,i=void 0);const $=o===b&&n[h+1].startsWith("/>")?" ":"";r+=o===C?a+Mt:l>=0?(s.push(d),a.slice(0,l)+dt+a.slice(l)+y+$):a+y+(l===-2?h:$)}return[gt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class k{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const h=t.length-1,a=this.parts,[d,p]=kt(t,e);if(this.el=k.createElement(d,s),v.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=v.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(dt)){const f=p[o++],$=i.getAttribute(l).split(y),U=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:U[2],strings:$,ctor:U[1]==="."?Pt:U[1]==="?"?Ut:U[1]==="@"?Lt:I}),i.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:r}),i.removeAttribute(l));if(ut.test(i.tagName)){const l=i.textContent.split(y),f=l.length-1;if(f>0){i.textContent=R?R.emptyScript:"";for(let $=0;$<f;$++)i.append(l[$],H()),v.nextNode(),a.push({type:2,index:++r});i.append(l[f],H())}}}else if(i.nodeType===8)if(i.data===pt)a.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:r}),l+=y.length-1}r++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function S(n,t,e=n,s){var o,h;if(t===A)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(n,i._$AS(n,t.values),i,s)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??x).importNode(e,!0);v.currentNode=i;let r=v.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new P(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Rt(r,this,t)),this._$AV.push(d),a=s[++h]}o!==(a==null?void 0:a.index)&&(r=v.nextNode(),o++)}return v.currentNode=x,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),N(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=k.createElement(gt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new Ot(i,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new k(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new P(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const h=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=S(this,h[s+a],e,a),d===A&&(d=this._$AH[a]),o||(o=!N(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ut extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Lt extends I{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===A)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const B=M.litHtmlPolyfillSupport;B==null||B(k,P),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.2.1");const It=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new P(t.insertBefore(H(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}}var ht;m._$litElement$=!0,m.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:m});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class mt extends m{_handleClose(){this.dispatchEvent(new CustomEvent("toggle-chat",{bubbles:!0,composed:!0}))}render(){return g`
      <div class="header">
        <span class="chat-logo"
          ><svg
            viewBox="0 0 32 32"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                }
              </style>
            </defs>
            <title>chat-bot</title>
            <path
              d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z"
            />
            <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
            <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
            <path
              d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z"
            />
            <rect
              id="_Transparent_Rectangle_"
              data-name="&lt;Transparent Rectangle&gt;"
              class="cls-1"
              width="32"
              height="32"
            /></svg
          >Chat Support</span
        >
        <button class="close-button" @click=${this._handleClose}>✕</button>
      </div>
    `}}u(mt,"styles",O`
    @media (max-width: 480px) {
      .header {
        border-radius: 0;
        padding: 12px 16px;
      }
    }
    /* Header */
    .header {
      background: var(--fb-blue);
      color: white;
      padding: 16px;
      border-radius: 12px 12px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
    }

    .close-button {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 50%;
      transition: background-color 0.2s;
    }

    svg {
      fill: rgb(248, 240, 240);
      width: 30px;
      height: 30px;
    }

    .close-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .chat-logo {
      display: flex;
      gap: 0.5rem;
    }
  `);customElements.define("chat-header",mt);function Dt(n){return n.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\s*\*(.*)/gm,(t,e)=>`<li>${e.trim()}</li>`).replace(/<li>.*?<\/li>(\s*<li>.*?<\/li>)*/g,t=>`<ul class="llm-list">${t}</ul>`).split(`
`).map(t=>t.trim()).filter(t=>t.length>0).map(t=>t.startsWith("<")?t:`<p>${t}</p>`).join(`
`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={CHILD:2},Bt=n=>(...t)=>({_$litDirective$:n,values:t});class jt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Y extends jt{constructor(t){if(super(t),this.it=c,t.type!==zt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this._t=void 0,this.it=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Y.directiveName="unsafeHTML",Y.resultType=1;const Vt=Bt(Y);class G extends m{updated(){this._scrollToBottom()}_scrollToBottom(){const t=this.shadowRoot.querySelector(".messages");t.scrollTop=t.scrollHeight}render(){return g`
      <div class="messages">
        ${this.messages.map(t=>g`
            <div class="message ${t.sender}">
              <div class="message-content">
                ${t.isHtml?Vt(Dt(t.text)):t.text}
              </div>
            </div>
          `)}
        ${this.loading?g`
              <div class="loading-indicator">
                <div class="loading-dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            `:""}
      </div>
    `}}u(G,"properties",{messages:{type:Array},loading:{type:Boolean}}),u(G,"styles",O`
    /* Messages Area */
    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: var(--fb-grey);
    }

    .message {
      max-width: 80%;
      padding: 8px 12px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.4;
    }

    .message.user {
      background: var(--fb-blue);
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }

    .message.model {
      background: white;
      color: var(--fb-text);
      align-self: flex-start;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .llm-list {
      margin: 8px 0;
      padding-left: 20px;
    }
    .llm-list li {
      margin: 4px 0;
    }
    .message-content p {
      margin: 8px 0;
    }
    .message-content strong {
      font-weight: bold;
    }

    .message-content {
      word-break: break-word;
    }

    .message .message-content {
      line-height: 1.4;
    }

    .message .message-content ul {
      margin: 8px 0;
      padding-left: 20px;
    }

    .message.model .message-content li {
      margin: 4px 0;
    }
  `);customElements.define("message-list",G);class ft extends m{_handleInput(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this._handleSend())}_handleSend(){const t=this.shadowRoot.querySelector("input"),e=t.value.trim();e&&(this.dispatchEvent(new CustomEvent("send-message",{detail:{message:e},bubbles:!0,composed:!0})),t.value="")}render(){return g`
      <div class="input-area">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Type a message..."
            @keydown=${this._handleInput}
          />
          <button class="send-button" @click=${this._handleSend}>
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    `}}u(ft,"styles",O`
    .input-area {
      padding: 16px;
      background: white;
      border-top: 1px solid var(--fb-grey);
      border-radius: 0 0 12px 12px;
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .input-wrapper {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      padding: 12px;
      padding-right: 45px;
      border: 1px solid var(--fb-grey);
      border-radius: 20px;
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.2s;
    }

    input:focus {
      border-color: var(--fb-blue);
    }

    .send-button {
      width: 35px;
      height: 35px;
      position: absolute;
      right: 5px;
      background: var(--fb-blue);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s, transform 0.2s;
    }

    .send-button:hover {
      background: var(--fb-blue-hover);
      transform: scale(1.05);
    }

    .send-button:active {
      transform: scale(0.95);
    }

    .send-button svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
      transform: translateX(1px);
    }

    @media (max-width: 520px) {
      input {
        font-size: 16px;
        padding: 10px 45px 10px 12px;
      }
      .send-button {
        width: 32px;
        height: 32px;
      }
    }
  `);customElements.define("chat-input",ft);class F extends m{constructor(){super()}render(){return g`
      <div class="chat-window">
        <chat-header></chat-header>
        <message-list .messages=${this.messages} ?loading=${this.loading}></message-list>
        <chat-input></chat-input>
      </div>
    `}}u(F,"properties",{open:{type:Boolean,reflect:!0},messages:{type:Array},loading:{type:Boolean},settings:{type:Object}}),u(F,"styles",O`
    :host {
      --fb-blue: #1877f2;
      --fb-blue-hover: #1464d1;
      --fb-grey: #f0f2f5;
      --fb-text: #050505;
      --chat-width: min(400px, 95vw);
      --chat-height: min(600px, 80vh);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 16px;
    }

    .chat-window {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: var(--chat-width);
      height: var(--chat-height);
      background: white;
      border-radius: 12px;
      box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(100px) scale(0.9);
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
    }

    :host([open]) .chat-window {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    message-list {
      flex-grow: 1;
      overflow-y: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Animations */
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @media (max-width: 480px) {
      .chat-window {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 85vh;
        border-radius: 0;
        font-size: 16px;
      }
    }
  `);customElements.define("chat-window",F);class K extends m{_handleClick(){this.dispatchEvent(new CustomEvent("toggle-chat",{bubbles:!0,composed:!0}))}render(){return g`
      <button class="floating-button" @click=${this._handleClick}>
        💬
        ${this.unreadCount>0?g`<div class="unread-badge">${this.unreadCount}</div>`:""}
      </button>
    `}}u(K,"properties",{unreadCount:{type:Number},open:{type:Boolean,reflect:!0}}),u(K,"styles",O`
    @media (max-width: 480px) {
      .floating-button {
        bottom: 20px;
        right: 20px;
      }
    }
      
    .floating-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .unread-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: red;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `);customElements.define("floating-button",K);class Yt{constructor(t){this.baseUrl=t||"",this.defaultHeaders={"Content-Type":"application/json",Accept:"application/json"}}buildUrl(t,e={}){const s=new URL(this.baseUrl+t);return Object.keys(e).forEach(i=>{e[i]!==void 0&&e[i]!==null&&s.searchParams.append(i,e[i])}),s.toString()}async handleResponse(t){const e=t.headers.get("content-type"),i=e&&e.includes("application/json")?await t.json():await t.text();if(!t.ok)throw{status:t.status,statusText:t.statusText,data:i};return i}async get(t,e={}){const{params:s={},headers:i={}}=e,r=this.buildUrl(t,s);try{const o=await fetch(r,{method:"GET",headers:{...this.defaultHeaders,...i}});return await this.handleResponse(o)}catch(o){throw console.error("GET request failed:",o),o}}async post(t,e={},s={}){const{params:i={},headers:r={}}=s,o=this.buildUrl(t,i);try{const h=await fetch(o,{method:"POST",headers:{...this.defaultHeaders,...r},body:JSON.stringify(e)});return await this.handleResponse(h)}catch(h){throw console.error("POST request failed:",h),h}}}const E=class E extends Yt{constructor(t){super(t||"https://chatbotcooapi.azurewebsites.net")}async sendMessageToLLM(t,e={}){try{const i={contents:[...e.previousMessages||[],{parts:[{text:t}],role:"user"}],safetySettings:e.safetySettings||E.DEFAULT_SAFETY_SETTINGS,generationConfig:{...E.DEFAULT_GENERATION_CONFIG,...e.generationConfig}};return await this.post(`/gateway/messages/llm/${e.tenantId}`,i)}catch(s){throw console.error("Error sending message to LLM:",s),new Error("Failed to get response from LLM service: "+s.message)}}};u(E,"DEFAULT_SAFETY_SETTINGS",[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_MEDIUM_AND_ABOVE"}]),u(E,"DEFAULT_GENERATION_CONFIG",{maxOutputTokens:100,temperature:.5,topK:1,topP:.8});let W=E;const Gt={baseUrl:"https://chatbotcooapi.azurewebsites.net",tenantId:"seysolutions",configuration:{defaultMessage:"Hello!",title:"Chat with Sey",max_token:"300",instruction:`language: Vietnamese, english
role: customer service assistant for Sey solutions, should be friendly, suporty
rule: should avoid the unrelated questions, 
`,prompt:{company:{name:"CÔNG TY TNHH SEY SOLUTIONS",owner:"Hoàng Thị Thùy Linh",address:"280D Hoàng Hoa Thám, Phường 5, Bình Thạnh, Thành phố Hồ Chí Minh",phone:"0979.092.486",tax_id:"0316971079",email:"linhhoang@seysolutions.com",website:"https://seysolutions.com",operating_hours:"Monday–Sunday: 7 AM – 9 PM"},mission_statement:"Tại SEY SOLUTIONS, chúng tôi cam kết hiểu rõ và đáp ứng các nhu cầu và yêu cầu riêng của từng khách hàng. Chúng tôi tin tưởng vào tính linh hoạt và khả năng thích ứng, đồng thời không giới hạn bản thân trong bất kỳ mô hình hoặc quy trình tương tác nào. Cho dù bạn là doanh nghiệp vừa và nhỏ, công ty lớn hay tổ chức phi lợi nhuận, bạn đều có thể tin tưởng vào dịch vụ thân thiện, linh hoạt, chuyên nghiệp và tay nghề cao của chúng tôi.",services:{software_development:"Tối ưu hóa nguồn lực, ngân sách và giúp doanh nghiệp duy trì lợi thế trong kỷ nguyên chuyển đổi kỹ thuật số.",solutions:["Thiết kế Website & Mobile App","Thiết kế hệ thống phần mềm - Chuyển đổi số","Xây dựng bộ nhận diện thương hiệu","Digital Marketing"]},projects:["FPT Hoàng Nam Tiến","Website CJ Việt Nam","G-Kitchen - Tích tem đổi quà","Website Logistics HVK","Website Pizza Company","Project Binance & Forex","Intermac (iMac)","Website Maggi","Hệ thống Tính phí Công chứng","Mạng xã hội Công thức nấu ăn","Y Khoa Diamond","Moongle","Welups","DropShip Seyoo","Hệ thống Kho (WMS) - Yes24.vn","Yes24.vn - Website Thương mại điện tử","Giặt Khô Danny","Dr.Nee","Nhà hàng Khách Sạn","Hệ thống DropShipping","Website So sánh giá","Hệ thống du lịch Yong.vn","Hệ thống ERP VI Technology","Hệ thống ERP Sunfix","Tin tức CafeStyle","Gạo Trọng Tín"],core_values:{quality:"Tất cả sản phẩm và dịch vụ đều đạt chất lượng cao nhất.",innovation:"Tư duy sáng tạo, linh hoạt và thực tế để đạt kết quả tối ưu.",credibility:"Luôn trung thực, có đạo đức và nhất quán trong mọi hoạt động.",passion:"Làm việc với niềm đam mê để tạo ra những phần mềm tốt nhất."},technologies:["NodeJS","Angular JS","React JS","Next JS","MongoDB","MSSQL","PostgreSQL",".NET","Java","PHP","React Native","Flutter","AI","Figma"],customers_partners:["CJ","CJ Foods","CJ OliveNetworks","DIAMOND","FPT Hoàng Nam Tiến","Inter-K","Maggi","TTC","COCO","The Pizza Company","Nestle","Tiger","Kitchen","GAPIT","iMAC","Yes24","PNE Energy Company"],recruitment:{objective:"Cung cấp sản phẩm phần mềm chất lượng cao bằng đội ngũ nhân sự tài năng.",positions:[{title:"Kế toán thuế",link:"https://seysolutions.com/vi/recruit/ke-toan-thue-rc1.html"},{title:"Quản lý dự án IT",link:"https://seysolutions.com/vi/recruit/quan-ly-du-an-it-rc2.html"},{title:"Nhà thiết kế UI/UX",link:"https://seysolutions.com/vi/recruit/nha-thiet-ke-ui-ux-rc3.html"},{title:"Lập trình viên .NET",link:"https://seysolutions.com/vi/recruit/lap-trinh-vien-net-rc4.html"},{title:"Lập trình viên Front-End",link:"https://seysolutions.com/vi/recruit/lap-trinh-vien-frontend-rc5.html"}],follow_us_on:["ITviec","Vietnamworks"]},contact:{message:"SEY SOLUTIONS sẵn lòng trả lời tất cả các câu hỏi về phát triển phần mềm, tư vấn thương mại điện tử và ứng dụng web."}}}};class $t extends m{constructor(){super(),this.messages=[],this.open=!1,this.unreadCount=0,this.loading=!1,this.initialized=!1,this.settings={},this.chatService=new W}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle-chat",this._handleToggleChat),this.addEventListener("send-message",this._handleSendMessage),this.settings=Gt,this.initialized=!0,this.messages=[{text:this.settings.configuration.defaultMessage,sender:"model"}]}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toggle-chat",this._handleToggleChat),this.removeEventListener("send-message",this._handleSendMessage)}_handleToggleChat(){this.open=!this.open,this.open&&(this.unreadCount=0)}_handleSendMessage(t){const e=t.detail.message;this.messages=[...this.messages,{text:e,sender:"user"}],this.loading=!0;const s=[{parts:[{text:this.settings.configuration.instruction}],role:"model"},,{parts:[{text:JSON.stringify(this.settings.configuration.prompt)}],role:"model"},this.messages.map(i=>({parts:[{text:i.text}],role:i.sender==="user"?"user":"model"}))];setTimeout(async()=>await this._botReply(e,s.slice(0,-1)),500)}async _botReply(t,e){try{const s=await this.chatService.sendMessageToLLM(t,{previousMessages:e,generationConfig:{maxOutputTokens:300,temperature:.7},tenantId:"seysolutions"});if(s&&s.candidates&&s.candidates[0]){const i=s.candidates[0].content.parts[0].text;this.messages=[...this.messages,{text:i,sender:"model",isHtml:!0}],this.open||this.unreadCount++}else throw new Error("Invalid response format from LLM")}catch(s){console.error("Error getting LLM response:",s),this.messages=[...this.messages,{text:"I apologize, but I'm having trouble responding right now. Please try again later."+s.message,sender:"model",error:!0}]}finally{this.loading=!1}this.open||this.unreadCount++}render(){return this.initialized?g`
      <floating-button
        .unreadCount=${this.unreadCount}
        ?open=${this.open}
      ></floating-button>

      <chat-window
        ?open=${this.open}
        .messages=${this.messages}
        ?loading=${this.loading}
        .settings=${this.settings}
      ></chat-window>
    `:g`<div>Loading...</div>`}}u($t,"properties",{open:{type:Boolean,reflect:!0},messages:{type:Array},unreadCount:{type:Number},loading:{type:Boolean},initialized:{type:Boolean,state:!0},settings:{type:Object,state:!0}});customElements.define("chat-bot",$t);function Ft(){let n="<chat-bot></chat-bot>";const t=document.createElement("div");t.innerHTML=n,document.body.appendChild(t)}Ft();
