(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{401:function(t,n,s){"use strict";s.r(n);var a=s(44),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateChildren")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  removeOnly")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldStartIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newStartIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldEndIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newEndIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldKeyToIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idxInOld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnodeToMove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// removeOnly is a special flag used only by <transition-group>")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to ensure removed elements stay in correct relative positions")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// during leaving transitions")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("removeOnly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkDuplicateKeys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * \n     * 整个diff过程是一个不断while循环的过程 在循环过程中通过不同的case进行判断 \n     * 通过不同情况的判断选择出最优的节点移动方式\n     * 每经过一个while循环 old/new start idx++，相反的 old/new end idx --\n     * 当oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx的情况下会不断的进行while循环进行diff操作节点位置操作\n     * 在整个diff过程中 是同级比较的 没有跨层级进行diff 比较的vnode的父节点是同一个。\n     \n          +--\x3e                                       <--+\n\n      old start idx                                old end idx\n          +----+         +----+         +----+       +----+\n          |    |         |    |         |    |       |    |\n          |    |         |    |         |    |       |    |\n          +----+         +----+         +----+       +----+\n\n\n          +----+         +----+         +----+       +----+       +----+\n          |    |         |    |         |    |       |    |       |    |\n          |    |         |    |         |    |       |    |       |    |\n          +----+         +----+         +----+       +----+       +----+\n      new start idx                                             new end idx\n\n           +--\x3e                                                    <--+\n\n     */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldStartIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" oldEndIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newStartIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" newEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 1 ： 旧的列表中 oldstartvnode不存在 直接 ++ 后移一位")]),t._v("\n      oldStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("oldStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vnode has been moved left")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 2 : 旧的列表中 oldendvnode不存在 直接 -- 前移一位")]),t._v("\n      oldEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 3 ：判断新旧start vnode是不是相同的 如果是相同的 直接对这两个相同的vnode进行陈层的patchVnode操作")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newStartIdx\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oldStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("oldStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      newStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("newStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 4 ： 如果 旧end 和 新end相同 ，对这两个节点进行深度的patchVnode操作")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newEndIdx\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oldEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      newEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("newEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 5 :如果旧start和新end是相同的节点 第一步对这两个节点进行深层的patchvnode， 把子节点都patch完毕，第二步把旧start插入到旧end后边 也就是和新vnode保持一致")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newEndIdx\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      canMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        nodeOps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          nodeOps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextSibling")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oldStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("oldStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      newEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("newEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 6 ：如果旧end和新start相同 第一步：深层patch 第二步：把旧end添加到旧start前边")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newStartIdx\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      canMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        nodeOps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldEndVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oldEndVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      newStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("newStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// case 7 ： 在不满足上述情况下 又分为2种子情况")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldKeyToIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在oldkeytoidx不存在的情况下去构建一个哈希表")]),t._v("\n        oldKeyToIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createKeyToOldIdx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      idxInOld "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断当前新start的key存不存在")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" oldKeyToIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  如果存在 就去旧哈希表中寻找")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIdxInOld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则通过samenode去查找")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idxInOld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在通过寻找过后 没有在旧的vnode列表中查找到新的vnode节点 迫不得已 去创建dom元素并插入到到dom树中")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          newStartIdx\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vnodeToMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idxInOld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到需要移动的vnode节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnodeToMove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是不是相同的vnode节点 （不存在同为undefined的情况 因为已经在find的过程中对同为undefined的情况进行了判断 这里针对两个vnode虽然key相同 但实际上不是严格相同的vnode进行筛选）")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchVnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            vnodeToMove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            newStartIdx\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idxInOld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在每次插入的过程中都是在通过旧vnode的元素进行定位和插入 以保证最小改动 这里直接把当前找到的vnode插入到旧start（其实不一定是start 因为idx一直在变）前边")]),t._v("\n          canMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n            nodeOps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnodeToMove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//虽然通过key找到了旧vnode 数组中对应的当前元素 但是这两个vnode并不是严格相等的 所以直接按照未找到当前节点的策略进行 去创建一个新的节点 无法通过节点的移动去提高性能")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// same key but different element. treat as new element")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            newStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            insertedVnodeQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            oldStartVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            newStartIdx\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      newStartVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("newStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前新节点已经插入了 ++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldStartIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个case下 代表 旧节点比新节点少 就需要添加新节点进去")]),t._v("\n    refElm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newEndIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newEndIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定插入位置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addVnodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      parentElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      refElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      newCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      newStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      newEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      insertedVnodeQueue\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历插入")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStartIdx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" newEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代表新节点比旧节点少 去删除就节点中不想要的节点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeVnodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldStartIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldEndIdx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);