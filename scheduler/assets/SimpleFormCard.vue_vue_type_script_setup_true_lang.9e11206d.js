import { d as defineComponent, c as createElementBlock, a as createBaseVNode, y as toDisplayString, p as createCommentVNode, aK as renderSlot, z as normalizeClass, o as openBlock } from "./index.9323ba8c.js";
const _hoisted_1 = {
  class: /* @__PURE__ */ normalizeClass([
    "rounded-md bg-accent"
  ])
};
const _hoisted_2 = { class: "flex items-start justify-between gap-3" };
const _hoisted_3 = { class: "text-base text-default font-medium leading-6" };
const _hoisted_4 = {
  key: 0,
  class: "text-xs text-muted mt-1"
};
const _hoisted_5 = {
  key: 0,
  class: "shrink-0"
};
const _hoisted_6 = { class: "mt-3" };
const _hoisted_7 = {
  key: 0,
  class: "mt-3 pt-3 border-t border-default/40"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimpleFormCard",
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode("h3", _hoisted_3, toDisplayString(__props.title), 1),
            __props.description ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(__props.description), 1)) : createCommentVNode("", true)
          ]),
          _ctx.$slots["header-right"] ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "header-right")
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", _hoisted_7, [
          renderSlot(_ctx.$slots, "footer")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
