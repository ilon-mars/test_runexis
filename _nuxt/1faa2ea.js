(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,5,6,7,8],{278:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("787b5368",content,!0,{sourceMap:!1})},279:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("39743d68",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r(278)},281:function(t,e,r){var n=r(113)(!1);n.push([t.i,".remove-from-cart{background-color:#f71c30;color:#fdfffe;margin-top:auto;align-self:center}",""]),t.exports=n},282:function(t,e,r){"use strict";r.r(e);r(280);var n=r(32),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn remove-from-cart",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("removeFromCart")}}},[t._v("\n  Remove\n")])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,r){"use strict";e.a={methods:{removeFromCart:function(t){this.$store.dispatch("removeFromCart",t)}}}},284:function(t,e,r){"use strict";r(279)},285:function(t,e,r){var n=r(113)(!1);n.push([t.i,".add-to-cart{background-color:#678e3d;color:#fdfffe;margin-top:auto;align-self:center}",""]),t.exports=n},286:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("11fc7030",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r.r(e);r(28),r(26),r(33),r(11),r(47),r(27),r(48);var n=r(18),o=(r(145),r(208),r(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{RemoveFromCart:r(282).default},props:{itemId:{type:Number,required:!0}},computed:l(l({},Object(o.b)({cart:"getItemsFromCart"})),{},{isItemInCart:function(){var t=this;return this.cart.findIndex((function(e){return e.id===t.itemId}))>=0}})},d=(r(284),r(32)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isItemInCart?r("RemoveFromCart",{on:{removeFromCart:function(e){return t.$emit("removeFromCart")}}}):r("button",{staticClass:"btn add-to-cart",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("addToCart")}}},[t._v("\n  Add to cart\n")])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";e.a={methods:{addToCart:function(t){this.$store.commit("ADD_TO_CART",t)}}}},289:function(t,e,r){"use strict";r.r(e);var n=r(287),o=r(288),c=r(283),l={components:{AddToCartBtn:n.default},mixins:[o.a,c.a],props:{item:{type:Object,required:!0}}},f=(r(291),r(32)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"item"},[r("nuxt-link",{staticClass:"item__link",attrs:{to:"/items/"+t.item.id}},[r("div",{staticClass:"item__details"},[r("h3",{staticClass:"item__title"},[t._v(t._s(t.item.name))]),t._v(" "),r("p",{staticClass:"item__description"},[t._v(t._s(t.item.descr))]),t._v(" "),r("ul",{staticClass:"item__category-list"},t._l(t.item.fullCategories,(function(e){return r("li",{key:e.id,staticClass:"item__category"},[t._v("\n          #"+t._s(e.title)+"\n        ")])})),0),t._v(" "),r("AddToCartBtn",{staticClass:"item__add-to-cart",attrs:{type:"button","item-id":t.item.id},on:{addToCart:function(e){return t.addToCart(t.item)},removeFromCart:function(e){return t.removeFromCart(t.item.id)}}},[t._v("\n        Add to cart\n      ")])],1),t._v(" "),r("span",{staticClass:"item__price"},[t._v(t._s(t.item.cost))])])],1)}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r(286)},292:function(t,e,r){var n=r(113)(!1);n.push([t.i,".item__link{display:grid;grid-template-columns:2fr 1fr;color:#051200;transition:all .3s ease-in-out;border-radius:15px;background-color:#f5f7f6;height:100%;overflow:hidden}.item__link:hover{transform:translate(-5px,-5px);box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);border-color:transparent}.item__details{padding:15px;display:flex;flex-direction:column;justify-content:center}.item__title{font-size:18px;font-weight:500;margin-bottom:10px}.item__description{margin-bottom:15px;font-size:16px;line-height:1.3}.item__price{font-size:20px;font-weight:500;display:flex;align-items:center;justify-content:center;font-size:18px;border-left:1px solid #007ab3;padding:15px;background-color:rgba(0,122,179,.3)}.item__category-list{display:flex;font-size:16px;margin-bottom:15px;margin-top:auto}.item__category{padding:5px 0;border-radius:20px;color:#007ab3}.item__category:not(:last-of-type){margin-right:10px}",""]),t.exports=n},293:function(t,e,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("5ea67d4c",content,!0,{sourceMap:!1})},294:function(t,e,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("099db7e0",content,!0,{sourceMap:!1})},295:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("72c4bc22",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";r(293)},299:function(t,e,r){var n=r(113)(!1);n.push([t.i,".items{display:grid;grid-template-columns:repeat(4,1fr);justify-content:space-between;grid-row-gap:15px;grid-column-gap:15px}@media screen and (max-width:1200px){.items{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width:800px){.items{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:580px){.items{grid-template-columns:1fr}}",""]),t.exports=n},300:function(t,e,r){"use strict";r(294)},301:function(t,e,r){var n=r(113)(!1);n.push([t.i,".lds-ripple{display:flex;align-items:center;justify-content:center;position:relative;width:80px;height:80px;margin:0 auto}.lds-ripple div{position:absolute;border:4px solid #007ab3;opacity:1;border-radius:50%;-webkit-animation:lds-ripple 1.3s cubic-bezier(0,.2,.8,1) infinite;animation:lds-ripple 1.3s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple div:nth-child(2){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}to{top:0;left:0;width:72px;height:72px;opacity:0}}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}to{top:0;left:0;width:72px;height:72px;opacity:0}}",""]),t.exports=n},302:function(t,e,r){"use strict";r(295)},303:function(t,e,r){var n=r(113)(!1);n.push([t.i,".filter{display:flex;align-items:center;margin-bottom:20px}.filter__title{font-size:20px}.filter__category-list{max-width:80%;display:flex;align-items:center;justify-content:center;margin:0 auto}.filter__category-select{display:none;padding:10px;border-radius:15px;font-size:16px;font-family:inherit;border-color:#007ab3}.filter__category{padding:10px 15px;border:1px solid #007ab3;border-radius:15px;cursor:pointer;transition:all .3s ease-in-out}.filter__category:hover{background-color:#007ab3;color:#fdfffe}.filter__category:not(:last-of-type){margin-right:15px}.filter__category.active{background-color:#007ab3;color:#fdfffe;font-weight:500}@media screen and (max-width:800px){.filter{flex-direction:column}.filter__title{margin-bottom:15px}.filter__category-list{max-width:100%}}@media screen and (max-width:580px){.filter__category:not(:last-of-type){margin-right:10px}.filter__category-list{display:none}.filter__category-select{display:block}}",""]),t.exports=n},304:function(t,e,r){"use strict";r.r(e);r(28),r(26),r(33),r(11),r(47),r(27),r(48);var n=r(135);var o=r(146),c=r(106);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=r(18),d=(r(71),r(49));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={data:function(){return{selectedCategoryId:0}},computed:y(y({},Object(d.b)(["getCategories"])),{},{categories:function(){return[{id:0,title:"all"}].concat(l(this.getCategories))}}),methods:{selectCategory:function(t){this.selectedCategoryId=t,this.$nuxt.$emit("selectCategory",t)},selectHandler:function(t){this.selectCategory(+t.target.value)}}},v=(r(302),r(32)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter"},[r("h2",{staticClass:"filter__title"},[t._v("Filter by category:")]),t._v(" "),r("ul",{staticClass:"filter__category-list"},t._l(t.categories,(function(e){return r("li",{key:e.id,staticClass:"filter__category",class:{active:e.id===t.selectedCategoryId},on:{click:function(r){return t.selectCategory(e.id)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0),t._v(" "),r("select",{staticClass:"filter__category-select",on:{change:t.selectHandler}},t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{selected:e.id===t.selectedCategoryId,value:e.id}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,r){"use strict";r.r(e);r(28),r(26),r(47),r(27),r(48);var n=r(18),o=(r(33),r(11),r(56),r(57),r(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{ItemCard:r(289).default},data:function(){return{filteredItems:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({items:"getItems"})),mounted:function(){this.filteredItems=this.items,this.$nuxt.$on("selectCategory",this.filterItems)},methods:{filterItems:function(t){this.filteredItems=0===t?this.items:this.items.filter((function(e){return e.categories.includes(t)}))}}},f=l,d=(r(298),r(32)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"items"},t._l(t.filteredItems,(function(t){return r("ItemCard",{key:t.id,attrs:{item:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemCard:r(289).default})},307:function(t,e,r){"use strict";r.r(e);r(300);var n=r(32),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ripple"},[r("div"),t._v(" "),r("div")])}],!1,null,null,null);e.default=component.exports},317:function(t,e,r){"use strict";r.r(e);r(28),r(26),r(33),r(11),r(47),r(27),r(48);var n=r(18),o=r(49),c=r(306),l=r(307),f=r(304);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={components:{Loader:l.default,ItemList:c.default,CategoryList:f.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({items:"getItems"}))},y=m,_=r(32),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.items.length?r("section",[r("CategoryList"),t._v(" "),r("ItemList")],1):r("Loader")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryList:r(304).default,ItemList:r(306).default,Loader:r(307).default})}}]);