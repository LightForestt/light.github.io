(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{402:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"其实在-new-vue-之前已经为创建-vue-实例做了很多前置性工作-大致可以分为以下几点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其实在-new-vue-之前已经为创建-vue-实例做了很多前置性工作-大致可以分为以下几点"}},[t._v("#")]),t._v(" 其实在 new vue()之前已经为创建 vue 实例做了很多前置性工作，大致可以分为以下几点")]),t._v(" "),s("ol",[s("li",[t._v("initMixin")]),t._v(" "),s("li",[t._v("stateMixin")]),t._v(" "),s("li",[t._v("eventMixin")]),t._v(" "),s("li",[t._v("lifecycleMixin")]),t._v(" "),s("li",[t._v("renderMixin")]),t._v(" "),s("li",[t._v("initGlobalAPI")]),t._v(" "),s("li",[t._v("createPatchFunction")]),t._v(" "),s("li",[t._v("初始化 config 和校验相关 map-funtion")]),t._v(" "),s("li",[t._v("安装平台相关的全局指令和组件")]),t._v(" "),s("li",[t._v("创建模版编译器 compiler")])]),t._v(" "),s("h4",{attrs:{id:"initmixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initmixin"}},[t._v("#")]),t._v(" initMixin")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_init")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("初始化创建 vue 实例的方法，在"),s("code",[t._v("new vue()")]),t._v("传入的 options 就将作为这个方法的参数传入。")]),t._v(" "),s("li",[t._v("不单单是外部调用，还存在 vue 内部生成子组件的时候，也同样会通过 init 方法去创建子组件的 vm 实例。")])]),t._v(" "),s("h4",{attrs:{id:"statemixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statemixin"}},[t._v("#")]),t._v(" stateMixin")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$props'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propsDef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$set "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" set\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" del\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$watch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("代理"),s("code",[t._v("_data")]),t._v("到"),s("code",[t._v("$data")]),t._v("上去，作为"),s("code",[t._v("Vue")]),t._v("的原型属性，用户可以通过"),s("code",[t._v("this.$data")]),t._v("访问数据模型。")]),t._v(" "),s("li",[t._v("代理"),s("code",[t._v("_props")]),t._v("到"),s("code",[t._v("$props")]),t._v("上去，同"),s("code",[t._v("$data")]),t._v("。")]),t._v(" "),s("li",[t._v("安装响应式的对象操作方法 "),s("code",[t._v("$set $delete")]),t._v("，这些方法提供给用户去做对象或者数组属性的删除，添加。")]),t._v(" "),s("li",[t._v("安装响应式对象监听方法 "),s("code",[t._v("$watch")]),t._v(",给用户一个入口在数据变化之后触发想要做的事。")])]),t._v(" "),s("h4",{attrs:{id:"eventmixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventmixin"}},[t._v("#")]),t._v(" eventMixin")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$off")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$emit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$once")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("安装事件相关方法,父子组件通信的方法：")]),t._v(" "),s("ul",[s("li",[t._v("$on 往当前 vm 的事件中心 push 一个事件 也就是侦听一个事件")]),t._v(" "),s("li",[t._v("$once 往当前vm的事件中心push一个事件,当前事件执行后立即$off")]),t._v(" "),s("li",[t._v("$emit 触发事件中心中的某个事件")]),t._v(" "),s("li",[t._v("$off 从事件中心中删除某个事件")])]),t._v(" "),s("h4",{attrs:{id:"lifecyclemixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lifecyclemixin"}},[t._v("#")]),t._v(" lifecycleMixin")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$forceUpdate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$destroy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("初始化生命周期相关方法：")]),t._v(" "),s("ul",[s("li",[t._v("vm._update 是实例的一个私有方法，它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候；_update 方法的作用是把 VNode 渲染成真实的 DOM，_update 的核心就是调用 vm.__patch__ 方法，这个方法实际上在不同的平台，比如 web 和 weex 上的定义是不一样的。")]),t._v(" "),s("li",[t._v("vm.$forceUpdate 让当前组件的渲染 watcher 去执行一次 update 操作，重新渲染视图。")]),t._v(" "),s("li",[t._v("vm.$destory 清空事件中心，从组件关系中删除当前vm，关闭当前组件的渲染watcher，当前$data.__ob__.vm 计数器减 1，标记当前 vm 为销毁状态，patch 一个 null 替换原 vnode，执行用户传入的 destoryd 钩子。")])]),t._v(" "),s("h4",{attrs:{id:"rendermixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendermixin"}},[t._v("#")]),t._v(" renderMixin")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("installRenderHelpers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$nextTick")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_render")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("初始化渲染 vnode 的相关方法：")]),t._v(" "),s("ul",[s("li",[t._v("installRenderHelpers 安装渲染工具函数，大多数服务于编译器编译出来的代码，其中的方法包括\n"),s("blockquote",[s("ul",[s("li",[t._v("target._o = markOnce; 标记 v-once")]),t._v(" "),s("li",[t._v("target._n = toNumber; 转换成 Number 类型")]),t._v(" "),s("li",[t._v("target._s = toString; 转换成字符串")]),t._v(" "),s("li",[t._v("target._l = renderList; 渲染 v-for")]),t._v(" "),s("li",[t._v("target._t = renderSlot; 渲染普通插槽和作用域插槽")]),t._v(" "),s("li",[t._v("target._q = looseEqual; 宽松比较")]),t._v(" "),s("li",[t._v("target._i = looseIndexOf; 宽松 indexof")]),t._v(" "),s("li",[t._v("target._m = renderStatic; 通过 staticRenderFns 渲染静态节点")]),t._v(" "),s("li",[t._v("target._f = resolveFilter; 获取过滤器")]),t._v(" "),s("li",[t._v("target._k = checkKeyCodes; 检查键盘事件 keycode")]),t._v(" "),s("li",[t._v("target._b = bindObjectProps; 处理 v-bind='{}'到 vnodedata 上")]),t._v(" "),s("li",[t._v("target._v = createTextVNode; 创建文本 vnode")]),t._v(" "),s("li",[t._v("target._e = createEmptyVNode; 创建空 vnode")]),t._v(" "),s("li",[t._v("target._u = resolveScopedSlots; 获取作用域插槽")]),t._v(" "),s("li",[t._v("target._g = bindObjectListeners; 处理 v-on='{}'到 vnodedata 上")]),t._v(" "),s("li",[t._v("target._d = bindDynamicKeys; 处理动态属性名")]),t._v(" "),s("li",[t._v("target._p = prependModifier; 处理修饰符")])])])]),t._v(" "),s("li",[t._v("vm.$nextTick 工具方法 封装了 nextTick 在下个时间循环执行某个事件")]),t._v(" "),s("li",[t._v("vm._render 调用编译传入的 render 函数或者是用户手写的 render 函数，生成用于 patch 的 vnode")])]),t._v(" "),s("h4",{attrs:{id:"initglobalapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initglobalapi"}},[t._v("#")]),t._v(" initGlobalAPI")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'directive'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Vue.config 提供全局访问的 config 用以配置 Vue.config")]),t._v(" "),s("li",[t._v("Vue.util 提供全局工具集")]),t._v(" "),s("li",[t._v("Vue.set vm.$set")]),t._v(" "),s("li",[t._v("Vue.delete vm.$delete")]),t._v(" "),s("li",[t._v("Vue.nextTick vm.$nextTick")]),t._v(" "),s("li",[t._v("Vue.observable 初始化定义响应式的数据的方法")]),t._v(" "),s("li",[t._v("Vue.extend 初始化组件构造器方法")]),t._v(" "),s("li",[t._v("['filter','component','directive'].forEach(item=>Vue[item+'s']=function(){}) 初始化全局资源注册方法 包含注册过滤器的方法 注册组件的方法 注册指令的方法")]),t._v(" "),s("li",[t._v("Vue.Mixin 初始化混入方法")]),t._v(" "),s("li",[t._v("Vue.use 初始化插件安装方法")]),t._v(" "),s("li",[t._v("Vue.options 初始化全局 options")]),t._v(" "),s("li",[t._v("extend(cpns,buildin) 将全局组件拓展到全局 options 上去 共所有子组件使用 其实是 keep-alive")])]),t._v(" "),s("h4",{attrs:{id:"createpatchfunction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createpatchfunction"}},[t._v("#")]),t._v(" createPatchFunction")]),t._v(" "),s("p",[t._v("Vue 中使用 800+行代码去创建 patch 方法，createPatchFunction 方法接受一个对象包含两个属性，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" patch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPatchFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nodeOps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nodeOps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 节点的crud操作")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// klass ref style transition ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("平台相关 dom 方法 nodeOps：web 平台和 weex 平台下的 dom 节点的 crud 操作不同，所以在把 vnode patch 到真实 dom 中也具有差别。")]),t._v(" "),s("li",[t._v("平台相关 modules：像是 web 平台下包括 attrs class style 等等，但到了 weex 平台下，操作样式，dom 属性等等很多差异。")])]),t._v(" "),s("p",[t._v("采用工厂方法的方式去创建一个 patch 方法，在调用 patch 前将环境变量恒定，不管对应什么平台，虽然具体实现不同，但对于 Vue 在 patch 的过程中只拿到的已经是适应平台的相关方法。")]),t._v(" "),s("h4",{attrs:{id:"初始化-config-和校验相关-map-funtion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化-config-和校验相关-map-funtion"}},[t._v("#")]),t._v(" 初始化 config 和校验相关 map-funtion")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  optionMergeStrategies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isBooleanAttr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default,defaultchecked,defaultmuted,defaultselected,defer,disabled,"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"required,reversed,scoped,seamless,selected,sortable,translate,"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"truespeed,typemustmatch,visible"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("config 通过 Vue.config 可配置的全局配置，最核心部分是 opts 中的每个参数的合并策略。")]),t._v(" "),s("li",[t._v("makeMap 举内部一个例子，Vue 为了用户可以有完全等同于原生 html 的编码体验，标记了很多内置的属性，上述代码中仅仅以 dom 中一些布尔类型的 attrs 如 checked，required 等等，该方法构建一个 map，map 中的 key 值为字符串中的每一项，value 为 true，该方法返回一个 function，用于检测传入值。 比如，var fn = makeMap('checked,required') 将构建 {checked:'true',required:'true'}，当传入一个待检测，fn('checked')就返回 true，\nfn('some')返回 undefined。")])]),t._v(" "),s("h4",{attrs:{id:"安装平台相关的全局指令和组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装平台相关的全局指令和组件"}},[t._v("#")]),t._v(" 安装平台相关的全局指令和组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directives"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platformDirectives"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platformComponents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("拓展平台相关全局资源以供使用")]),t._v(" "),s("ul",[s("li",[t._v("directive 指令包括 v-show v-model")]),t._v(" "),s("li",[t._v("components 组件包括 transition transition-group")])]),t._v(" "),s("h4",{attrs:{id:"创建模版编译器-compiler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建模版编译器-compiler"}},[t._v("#")]),t._v(" 创建模版编译器 compiler")]),t._v(" "),s("p",[t._v("创建编译器整体流程如下：")]),t._v(" "),s("p",[t._v("createCompilerCreator => createcompiler => createCompileToFunctionFn => compileToFunctions => compile => baseCompile => 真正开始编译步骤 「parse optimize generate」")]),t._v(" "),s("ul",[s("li",[t._v("createCompilerCreator 编译器工厂工厂，也就是构造了编译器的构造器，返回一个工厂函数，这个工厂函数将生成编译器。")]),t._v(" "),s("li",[t._v("createcompiler 上一步骤中返回的编译器的构造器，执行得到编译器封装对象。这个方法中处理了全局的编译器配置，包括分隔符配置编译报警配置。")]),t._v(" "),s("li",[t._v("createCompileToFunctionFn 对编译器做了一层简单封装，通过一个哈希表去缓存 编译器编译出来的结果，防止多次编译一个模版。返回一个模版编译器。")]),t._v(" "),s("li",[t._v("compileToFunctions 编译器本体，接受用户定义的 options.template，接受配置，最终将处理 template=>render 函数，内部流程是调用核心编译器，进而通过解析，优化和生成三步去完成代码生成。")])]),t._v(" "),s("p",[t._v("vue 模版编译十分复杂和巧妙，这里通过函数柯里化去创建编译器，逐步明确环境变量，也通过闭包去维持一个缓存，提升性能。")]),t._v(" "),s("p",[t._v("本章节主要描述了在 new Vue(options)之前 Vue 内部为用户做了什么准备，如果没有这部分内容，很容易在阅读理解代码的过程中产生困惑，例如有的参数怎么来的，这个东西什么时候安装上的之类的问题。本章内容有很多地方没有解开包袱，例如_render _update 配置合并 创建 patch 方法 等等等等，这些都是 vue 的核心中的核心，都会在后续的文章中仔细剖析。")]),t._v(" "),s("p",[t._v("《完》")])])}),[],!1,null,null,null);a.default=e.exports}}]);