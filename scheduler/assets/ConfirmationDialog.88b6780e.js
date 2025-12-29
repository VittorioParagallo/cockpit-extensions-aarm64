import { d as defineComponent, r as ref, o as openBlock, L as createBlock, aj as withCtx, a as createBaseVNode, y as toDisplayString, c as createElementBlock, p as createCommentVNode, m as createTextVNode, k as unref, aZ as upperCaseWord } from "./index.9323ba8c.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1 = { class: "flex justify-center" };
const _hoisted_2 = { class: "grid grid-flow-row mt-3 text-center" };
const _hoisted_3 = { class: "text-default" };
const _hoisted_4 = { class: "w-full" };
const _hoisted_5 = { class: "button-group-row w-full justify-between" };
const _hoisted_6 = {
  key: 1,
  disabled: "",
  id: "working-no-btn",
  type: "button",
  class: "mt-1 btn btn-danger object-left justify-start h-fit w-full"
};
const _hoisted_7 = {
  key: 3,
  disabled: "",
  id: "working-yes-btn",
  type: "button",
  class: "mt-1 btn btn-secondary object-right justify-end h-fit w-full whitespace-nowrap"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfirmationDialog",
  props: {
    title: {},
    message: {},
    confirmYes: {},
    confirmNo: {},
    showFlag: { type: Boolean },
    operation: {},
    operating: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showFlag = ref(props.showFlag);
    const closeModal = () => {
      emit("close");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        isOpen: showFlag.value,
        onClose: _cache[2] || (_cache[2] = ($event) => closeModal()),
        marginTop: "mt-60",
        width: "w-96",
        minWidth: "min-w-min",
        height: "h-min",
        "min-height": "min-h-min",
        closeOnBackgroundClick: true
      }, {
        title: withCtx(() => [
          createBaseVNode("legend", _hoisted_1, toDisplayString(props.title), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("p", _hoisted_3, toDisplayString(props.message), 1)
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              !__props.operating ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = (...args) => __props.confirmNo && __props.confirmNo(...args)),
                id: "confirmation-no",
                name: "no-button",
                class: "mt-1 btn btn-danger object-left justify-start h-fit w-full"
              }, "No")) : createCommentVNode("", true),
              __props.operating ? (openBlock(), createElementBlock("button", _hoisted_6, "No")) : createCommentVNode("", true),
              !__props.operating ? (openBlock(), createElementBlock("button", {
                key: 2,
                onClick: _cache[1] || (_cache[1] = (...args) => __props.confirmYes && __props.confirmYes(...args)),
                id: "confirmation-yes",
                name: "yes-button",
                class: "mt-1 btn btn-secondary object-right justify-end h-fit w-full"
              }, "Yes")) : createCommentVNode("", true),
              __props.operating ? (openBlock(), createElementBlock("button", _hoisted_7, [
                _cache[3] || (_cache[3] = createBaseVNode("svg", {
                  "aria-hidden": "true",
                  role: "status",
                  class: "inline w-4 h-4 mr-3 text-gray-200 animate-spin text-default",
                  viewBox: "0 0 100 101",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                  }),
                  createBaseVNode("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "text-success"
                  })
                ], -1)),
                createTextVNode(" " + toDisplayString(unref(upperCaseWord)(__props.operation)) + "... ", 1)
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      }, 8, ["isOpen"]);
    };
  }
});
export {
  _sfc_main as default
};
