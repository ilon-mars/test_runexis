(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,8],{278:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("787b5368",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r(278)},281:function(t,e,r){var o=r(113)(!1);o.push([t.i,".remove-from-cart{background-color:#f71c30;color:#fdfffe;margin-top:auto;align-self:center}",""]),t.exports=o},282:function(t,e,r){"use strict";r.r(e);r(280);var o=r(32),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn remove-from-cart",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("removeFromCart")}}},[t._v("\n  Remove\n")])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,r){"use strict";e.a={methods:{removeFromCart:function(t){this.$store.dispatch("removeFromCart",t)}}}},290:function(t,e,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("3ee65db2",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";r(290)},297:function(t,e,r){var o=r(113)(!1);o.push([t.i,".cart-page__form{display:flex;flex-direction:column;align-items:center}.cart-page__form-group,.cart-page__form-group>span{display:flex;flex-direction:column;margin-bottom:15px}.cart-page__form-group>span{align-items:center}.cart-page__form-input{width:300px;margin:0 auto 15px;min-height:30px;padding:10px;border:1px solid #007ab3;border-radius:10px;font-family:inherit;font-size:16px}.cart-page__form-input.error{border:1px solid #f71c30}.cart-page__form-input+span{color:#f71c30}@media screen and (max-width:400px){.cart-page__form-input{width:250px}}.cart-page__form-reset{border:2px solid #007ab3;margin-right:15px;transition:all .3s ease-in-out}.cart-page__form-reset:hover{border-color:transparent;color:#fdfffe;background-color:#007ab3}.cart-page__form-buttons{display:flex;justify-content:center}.cart-page__cart-reset{border:2px solid #f71c30;margin-right:15px;transition:all .3s ease-in-out}.cart-page__cart-reset:hover{border-color:transparent;color:#fdfffe;background-color:#f71c30}.cart-page__submit{transition:all .3s ease-in-out;background-color:#678e3d;font-weight:500;color:#fdfffe;margin-right:15px;border:2px solid transparent}.cart-page__submit:not(:disabled):hover{background-color:transparent;border-color:#678e3d;color:#051200}.cart-page__submit:disabled{opacity:.5;cursor:default}",""]),t.exports=o},305:function(t,e,r){"use strict";r.r(e);r(28),r(26),r(33),r(11),r(47),r(27),r(48);var o=r(18),n=(r(37),r(29),r(49)),c=r(81),l=r(147);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{ValidationObserver:c.a,ValidationProvider:c.b},props:{itemsInCart:{type:Array,default:function(){return[]}}},data:function(){return{phone:"",name:"",email:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({totalPrice:"getTotalPrice",cart:"getItemsFromCart"})),methods:{resetCart:function(){this.$store.commit("RESET_CART")},onSubmit:function(t){var e=this,r=this.itemsInCart.map((function(t){return{name:t.name,amount:t.amount,total:t.amount*t.cost}}));this.$axios.post(l.a.postData,{name:this.name,phone:this.phone,email:this.email,order:r,totalPrice:this.totalPrice}).then((function(){t.target.reset(),e.resetCart(),e.name=e.email=e.phone=""}))}}},m=f,_=(r(296),r(32)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ValidationObserver",{attrs:{tag:"div"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[r("form",{staticClass:"cart-page__form"},[r("fieldset",{staticClass:"cart-page__form-group"},[r("legend",{staticClass:"cart-page__form-title title"},[t._v("Contact information")]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|alpha_spaces"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"cart-page__form-input",class:{error:o[0]},attrs:{type:"text",placeholder:"Name",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),r("span",[t._v(t._s(o[0]))])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"cart-page__form-input",class:{error:o[0]},attrs:{type:"email",placeholder:"Email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("span",[t._v(t._s(o[0]))])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:{required:!0,regex:/^\+7[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{0,1}[0-9]{2}[-]{0,1}[0-9]{2}$/}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"cart-page__form-input",class:{error:o[0]},attrs:{type:"tel",placeholder:"+7(123)456-78-90",name:"phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),r("span",[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"cart-page__form-buttons"},[r("button",{staticClass:"btn cart-page__submit",attrs:{type:"submit",disabled:o||!t.totalPrice}},[t._v("\n        Submit\n      ")]),t._v(" "),r("button",{staticClass:"btn cart-page__form-reset",attrs:{type:"reset"}},[t._v("\n        Reset form\n      ")]),t._v(" "),r("button",{staticClass:"btn cart-page__cart-reset",attrs:{type:"button"},on:{click:t.resetCart}},[t._v("\n        Reset cart\n      ")])])])]}}])})}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("65ba782c",content,!0,{sourceMap:!1})},310:function(t,e,r){"use strict";r(308)},311:function(t,e,r){var o=r(113)(!1);o.push([t.i,'.cart-page__total{display:block;font-weight:600;font-size:20px;margin-bottom:25px}.cart-page__order-table{width:100%;border:none;margin-bottom:20px}.cart-page__order-table thead th{font-weight:700;text-align:left;padding:10px 15px;background:#d8d8d8;font-size:14px;border:1px solid #ddd;border-top:none;border-bottom:none}.cart-page__order-table tbody td{text-align:left;border-left:1px solid #ddd;border-right:1px solid #ddd;padding:10px 15px;font-size:14px;vertical-align:middle}.cart-page__order-table tbody tr td:first-child,.cart-page__order-table thead tr th:first-child{border-left:none}.cart-page__order-table tbody tr td:last-child,.cart-page__order-table thead tr th:last-child{border-right:none}.cart-page__order-table tbody tr:nth-child(2n){background:#f3f3f3}@media screen and (max-width:580px){.cart-page{display:flex;flex-direction:column}}@media screen and (max-width:580px)and (max-width:580px){.cart-page thead{display:none}}@media screen and (max-width:580px)and (max-width:580px){.cart-page tbody{display:flex;flex-direction:column}}@media screen and (max-width:580px){.cart-page tbody tr{display:grid;grid-template-columns:2fr 1fr;grid-template-areas:"item amount price" "btn btn price";border:1px solid #678e3d;border-radius:15px;overflow:hidden;margin-bottom:20px}}@media screen and (max-width:580px){.cart-page tbody td{border:none;font-weight:500}.cart-page tbody td:first-of-type{grid-area:item;font-size:18px;display:flex;align-items:center}.cart-page tbody td:nth-of-type(2){grid-area:amount;display:flex;align-items:center;color:#007ab3;font-size:18px}.cart-page tbody td:nth-of-type(2):before{content:"x";font-weight:400;color:#051200;display:inline-block;margin-right:5px}.cart-page tbody td:nth-of-type(3){grid-area:price;min-width:60px;display:flex;justify-content:center;align-items:center;font-size:20px;border-left:1px solid #678e3d;background-color:rgba(103,142,61,.3)}.cart-page tbody td:last-of-type{grid-area:btn;display:flex;justify-content:center}}',""]),t.exports=o},314:function(t,e,r){"use strict";r.r(e);r(28),r(26),r(33),r(47),r(27),r(48);var o=r(18),n=(r(11),r(209),r(49)),c=r(282),l=r(305),d=r(283);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{RemoveFromCartBtn:c.default,CartForm:l.default},mixins:[d.a],computed:m(m({},Object(n.b)({items:"getItemsFromCart",totalPrice:"getTotalPrice"})),{},{order:function(){var t=this.items.reduce((function(t,e){var r=t.find((function(t){return t.id===e.id}));return r?r.amount+=1:t.push(m(m({},e),{},{amount:1})),t}),[]);return t}}),methods:{countPrice:function(t,e){return t*e}}},v=(r(310),r(32)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cart-page"},[r("h2",{staticClass:"cart-page__header title"},[t._v("Your order:")]),t._v(" "),r("table",{staticClass:"cart-page__order-table"},[t._m(0),t._v(" "),r("tbody",t._l(t.order,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.amount))]),t._v(" "),r("td",[t._v(t._s(t.countPrice(e.amount,e.cost)))]),t._v(" "),r("td",[r("RemoveFromCartBtn",{on:{removeFromCart:function(r){return t.removeFromCart(e.id)}}})],1)])})),0)]),t._v(" "),r("span",{staticClass:"cart-page__total"},[t._v("Total: "+t._s(t.totalPrice))]),t._v(" "),r("CartForm",{attrs:{"items-in-cart":t.order}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Item")]),t._v(" "),r("th",[t._v("Amount")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Change amount")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CartForm:r(305).default})}}]);