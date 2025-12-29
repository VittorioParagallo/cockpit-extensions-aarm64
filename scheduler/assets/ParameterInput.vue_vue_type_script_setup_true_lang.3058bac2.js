import { c as createElementBlock, a as createBaseVNode, o as openBlock, d as defineComponent, r as ref, W as i, X as u, Y as o, K as provide, e as computed, $ as A, f as onMounted, h as onUnmounted, a0 as watchEffect, a1 as s, a2 as N$1, a3 as inject, a4 as o$1, w as watch, l as createVNode, E as withDirectives, a5 as vModelCheckbox, L as createBlock, k as unref, p as createCommentVNode, H as vModelText, z as normalizeClass, G as vModelSelect, F as Fragment, q as renderList, m as createTextVNode, y as toDisplayString, a6 as testSSH, B as pushNotification, N as Notification, a7 as getPoolData, a8 as getDatasetData, a9 as ParameterNode, aa as ZfsDatasetParameter, ab as BoolParameter, ac as IntParameter, ad as StringParameter, ae as SnapshotRetentionParameter, af as testNetcat, ag as listSnapshots, ah as mostRecentCommonSnapshot, ai as destAheadOfCommon, _ as _sfc_main$8, aj as withCtx, ak as unwrap, al as server, am as Command, an as useClientContextStore, ao as ue, ap as LocationParameter, aq as SelectionParameter, ar as SelectionOption, as as vModelDynamic, at as testOrSetupSSH, au as validateLocalPath, av as createStaticVNode, aw as getDisks, ax as getDiskIDName, ay as truncateName, u as useRouter, az as useRoute, i as injectWithCheck, aA as getProviderLogo, aB as withModifiers, aC as resolveDynamicComponent, aD as truncateTextInjectionKey, aE as remoteManagerInjectionKey, aF as rcloneRemotesInjectionKey, aG as checkLocalPathExists, aH as validateRemotePath, aI as vModelRadio, aJ as __vitePreload } from "./index.9323ba8c.js";
import { r as render$4, _ as _sfc_main$9 } from "./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js";
import { _ as _sfc_main$a } from "./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js";
import { t, i as i$1, l } from "./open-closed.8a6c3d9d.js";
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 15.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }),
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r = inject(T, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let N = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$1, { slots: r, attrs: o$12 }) {
  let s2 = ref(t$1.defaultOpen ? 0 : 1), e = ref(null), i$2 = ref(null), n = { buttonId: ref(`headlessui-disclosure-button-${i()}`), panelId: ref(`headlessui-disclosure-panel-${i()}`), disclosureState: s2, panel: e, button: i$2, toggleDisclosure() {
    s2.value = u(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l2) {
    n.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o(l2) : o(n.button) : o(n.button))();
    a == null || a.focus();
  } };
  return provide(T, n), t(computed(() => u(s2.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$1, c = { open: s2.value === 0, close: n.close };
    return A({ theirProps: a, ourProps: {}, slot: c, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o$2, expose: s$1 }) {
  let e = O("DisclosureButton"), i2 = U(), n = computed(() => i2 === null ? false : i2.value === e.panelId.value);
  onMounted(() => {
    n.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s$1({ el: l2, $el: l2 }), n.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = s(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c() {
    var u2;
    t2.disabled || (n.value ? (e.toggleDisclosure(), (u2 = o(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S;
    if (!t2.disabled)
      if (n.value)
        switch (u2.key) {
          case o$1.Space:
          case o$1.Enter:
            u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S = o(e.button)) == null || S.focus();
            break;
        }
      else
        switch (u2.key) {
          case o$1.Space:
          case o$1.Enter:
            u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
            break;
        }
  }
  function v(u2) {
    switch (u2.key) {
      case o$1.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S, ...K } = t2, M = n.value ? { ref: l2, type: a.value, onClick: c, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c, onKeydown: D, onKeyup: v };
    return A({ ourProps: M, theirProps: K, slot: u2, attrs: r, slots: o$2, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o2, expose: s2 }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s2({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i2 = l(), n = computed(() => i2 !== null ? (i2.value & i$1.Open) === i$1.Open : e.disclosureState.value === 0);
  return () => {
    var v;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c } = t2, D = { id: (v = e.panelId.value) != null ? v : a, ref: e.panel };
    return A({ ourProps: D, theirProps: c, slot: l2, attrs: r, slots: o2, features: N$1.RenderStrategy | N$1.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
const _hoisted_1$7 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_2$6 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_3$6 = {
  key: 1,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_4$6 = {
  name: "source-data",
  class: "border border-default rounded-md p-2 col-span-1 row-start-1 row-span-1 bg-accent"
};
const _hoisted_5$6 = { class: "flex flex-row justify-between items-center text-center" };
const _hoisted_6$6 = { class: "mt-1 flex flex-col items-center text-center" };
const _hoisted_7$6 = { name: "source-pool" };
const _hoisted_8$6 = { class: "flex flex-row justify-between items-center" };
const _hoisted_9$6 = { key: 0 };
const _hoisted_10$6 = { key: 1 };
const _hoisted_11$6 = ["value"];
const _hoisted_12$6 = { key: 1 };
const _hoisted_13$5 = { name: "source-dataset" };
const _hoisted_14$4 = { class: "flex flex-row justify-between items-center" };
const _hoisted_15$4 = { key: 0 };
const _hoisted_16$4 = { key: 0 };
const _hoisted_17$3 = { key: 1 };
const _hoisted_18$3 = ["value"];
const _hoisted_19$3 = { key: 1 };
const _hoisted_20$3 = {
  name: "source-snapshot-retention",
  class: ""
};
const _hoisted_21$3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_22$3 = { class: "mt-1 block text-sm leading-6 text-default whitespace-nowrap" };
const _hoisted_23$3 = { class: "flex flex-row gap-2 w-full items-center justify-between" };
const _hoisted_24$3 = ["value"];
const _hoisted_25$3 = {
  name: "destination-data",
  class: "border border-default rounded-md p-2 col-span-1 row-span-1 row-start-2 bg-accent"
};
const _hoisted_26$3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_27$3 = { class: "mt-1 flex items-center gap-4" };
const _hoisted_28$3 = { name: "destination-pool" };
const _hoisted_29$3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_30$3 = ["value"];
const _hoisted_31$3 = { key: 1 };
const _hoisted_32$3 = { name: "destination-dataset" };
const _hoisted_33$3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_34$3 = { key: 0 };
const _hoisted_35$3 = ["disabled"];
const _hoisted_36$3 = { value: "" };
const _hoisted_37$2 = ["value"];
const _hoisted_38$2 = { key: 1 };
const _hoisted_39$2 = { key: 1 };
const _hoisted_40$2 = { class: "flex flex-row justify-between items-center w-full flex-grow" };
const _hoisted_41$2 = {
  key: 0,
  class: "m-1 flex flex-col items-center text-center flex-shrink"
};
const _hoisted_42$2 = {
  name: "destination-snapshot-retention",
  class: ""
};
const _hoisted_43$2 = { class: "flex flex-row justify-between items-center" };
const _hoisted_44$2 = { class: "mt-1 block text-sm leading-6 text-default whitespace-nowrap" };
const _hoisted_45$2 = { class: "flex flex-row gap-2 w-full items-center justify-between" };
const _hoisted_46$2 = ["value"];
const _hoisted_47$2 = {
  key: 0,
  name: "migration-overwrite",
  class: "mt-2 border-t border-default pt-2"
};
const _hoisted_48$2 = { class: "flex items-center justify-between" };
const _hoisted_49$2 = {
  name: "destination-ssh-data",
  class: "border border-default rounded-md p-2 col-span-1 bg-accent"
};
const _hoisted_50$2 = { class: "grid grid-cols-2" };
const _hoisted_51$2 = { class: "grid grid-cols-2 mt-2" };
const _hoisted_52$2 = { class: "col-span-1 items-end text-end justify-end" };
const _hoisted_53$2 = {
  key: 0,
  disabled: "",
  class: "mt-0.5 btn btn-secondary object-right justify-end h-fit"
};
const _hoisted_54$2 = {
  name: "destination-host",
  class: "mt-1"
};
const _hoisted_55$2 = { class: "flex flex-row justify-between items-center" };
const _hoisted_56$2 = {
  name: "destination-user",
  class: "mt-1"
};
const _hoisted_57$2 = {
  name: "destination-port",
  class: "mt-1"
};
const _hoisted_58$2 = { class: "flex flex-row justify-between items-center" };
const _hoisted_59$2 = ["placeholder"];
const _hoisted_60$2 = {
  name: "send-options",
  class: "border border-default rounded-md p-2 col-span-1 row-span-1 row-start-2 bg-accent"
};
const _hoisted_61$2 = { class: "grid grid-cols-2 mt-1" };
const _hoisted_62$2 = {
  name: "send-opt-raw",
  class: "flex flex-row items-center gap-2 mt-1 col-span-1"
};
const _hoisted_63$2 = {
  name: "send-opt-compressed",
  class: "flex flex-row items-center gap-2 mt-1 col-span-1"
};
const _hoisted_64$2 = {
  name: "send-opt-recursive",
  class: "flex flex-row items-center gap-2 mt-2"
};
const _hoisted_65$2 = { name: "send-opt-custom-name mt-2" };
const _hoisted_66$2 = {
  name: "custom-snapshot-name-toggle",
  class: "flex flex-row items-center justify-between"
};
const _hoisted_67$2 = { class: "flex flex-row items-center gap-2 mt-2" };
const _hoisted_68$2 = {
  name: "custom-snapshot-name-field",
  class: "mt-1"
};
const _hoisted_69$2 = { class: "grid grid-cols-2 mt-2" };
const _hoisted_70$2 = {
  name: "send-opt-mbuffer",
  class: "col-span-1"
};
const _hoisted_71$2 = {
  name: "send-opt-mbuffer",
  class: "col-span-1"
};
const _hoisted_72$2 = { name: "send-opt-mbuffer-unit" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ZfsRepTaskParams",
  props: {
    parameterSchema: {},
    task: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const parameters = inject("parameters");
    const initialParameters = ref({});
    const sourcePools = ref([]);
    const sourceDatasets = ref([]);
    const loadingSourcePools = ref(false);
    const loadingSourceDatasets = ref(false);
    const destPools = ref([]);
    const destDatasets = ref([]);
    const loadingDestPools = ref(false);
    const loadingDestDatasets = ref(false);
    const sourcePool = ref("");
    const sourcePoolErrorTag = ref(false);
    const sourceDataset = ref("");
    const sourceDatasetErrorTag = ref(false);
    const destPool = ref("");
    const destPoolErrorTag = ref(false);
    const destDataset = ref("");
    const destDatasetErrorTag = ref(false);
    const destHost = ref("");
    const destHostErrorTag = ref(false);
    const destPort = ref(22);
    const destUser = ref("root");
    const allowOverwrite = ref(false);
    const sendRaw = ref(false);
    const sendCompressed = ref(false);
    const sendRecursive = ref(false);
    const mbufferSize = ref(1);
    const mbufferUnit = ref("G");
    const useCustomName = ref(false);
    const customName = ref("");
    const customNameErrorTag = ref(false);
    const srcRetentionTime = ref(0);
    const srcRetentionUnit = ref("");
    const destRetentionTime = ref(0);
    const destRetentionUnit = ref("");
    const retentionUnitOptions = ref(["minutes", "hours", "days", "weeks", "months", "years"]);
    const useCustomTarget = ref(true);
    const useCustomSource = ref(false);
    const customSrcPoolErrorTag = ref(false);
    const customSrcDatasetErrorTag = ref(false);
    const customDestPoolErrorTag = ref(false);
    const customDestDatasetErrorTag = ref(false);
    const makeNewDestDataset = ref(true);
    const useExistingDest = ref(false);
    const testingSSH = ref(false);
    const sshTestResult = ref(false);
    const testingNetcat = ref(false);
    const netCatTestResult = ref(false);
    const transferMethod = ref("ssh");
    const netCatPortError = ref(false);
    const errorList = inject("errors");
    watch(useExistingDest, async (on) => {
      makeNewDestDataset.value = !on;
      if (on) {
        if (destPool.value) {
          if (destHost.value)
            await getRemoteDestinationDatasets();
          else
            await getLocalDestinationDatasets();
        }
        void checkDestDatasetContents();
      } else {
        allowOverwrite.value = false;
        destDatasetErrorTag.value = false;
      }
    });
    watch([useExistingDest, destDatasets], () => {
      if (useExistingDest.value && destDataset.value && !doesItExist(destDataset.value, destDatasets.value)) {
        destDataset.value = "";
      }
    });
    async function initializeData() {
      var _a, _b, _c, _d;
      if (props.task) {
        loading.value = true;
        await getSourcePools();
        const isRemoteAccessible = ref(false);
        const params = props.task.parameters.children;
        const sourceDatasetParams = params.find((p) => p.key === "sourceDataset").children;
        sourcePool.value = sourceDatasetParams.find((p) => p.key === "pool").value;
        await getSourceDatasets();
        sourceDataset.value = sourceDatasetParams.find((p) => p.key === "dataset").value;
        if (!doesItExist(sourcePool.value, sourcePools.value) || !doesItExist(sourceDataset.value, sourceDatasets.value)) {
          useCustomSource.value = true;
        }
        const destDatasetParams = params.find((p) => p.key === "destDataset").children;
        destHost.value = destDatasetParams.find((p) => p.key === "host").value;
        destPort.value = destDatasetParams.find((p) => p.key === "port").value;
        destUser.value = destDatasetParams.find((p) => p.key === "user").value;
        if (destHost.value !== "") {
          const sshTarget = destUser.value + "@" + destHost.value;
          isRemoteAccessible.value = await testSSH(sshTarget);
          if (isRemoteAccessible.value) {
            pushNotification(new Notification("SSH Connection Available", `Passwordless SSH connection established. This host can be used for replication (Assuming ZFS exists on target).`, "success", 6e3));
            await getRemoteDestinationPools();
            destPool.value = destDatasetParams.find((p) => p.key === "pool").value;
            await getRemoteDestinationDatasets();
            destDataset.value = destDatasetParams.find((p) => p.key === "dataset").value;
          } else {
            pushNotification(new Notification("SSH Connection Failed", `Passwordless SSH connection refused with this user/host/port. Please confirm SSH configuration or choose a new target.`, "error", 6e3));
            await getLocalDestinationPools();
            destPool.value = "";
            await getLocalDestinationDatasets();
            destDataset.value = "";
          }
        } else {
          await getLocalDestinationPools();
          destPool.value = destDatasetParams.find((p) => p.key === "pool").value;
          await getLocalDestinationDatasets();
          destDataset.value = destDatasetParams.find((p) => p.key === "dataset").value;
        }
        if (!doesItExist(destPool.value, destPools.value) || !doesItExist(destDataset.value, destDatasets.value)) {
          useCustomTarget.value = true;
        }
        const sendOptionsParams = params.find((p) => p.key === "sendOptions").children;
        sendCompressed.value = sendOptionsParams.find((p) => p.key === "compressed_flag").value;
        sendRaw.value = sendOptionsParams.find((p) => p.key === "raw_flag").value;
        sendRecursive.value = sendOptionsParams.find((p) => p.key === "recursive_flag").value;
        mbufferSize.value = sendOptionsParams.find((p) => p.key === "mbufferSize").value;
        mbufferUnit.value = sendOptionsParams.find((p) => p.key === "mbufferUnit").value;
        useCustomName.value = sendOptionsParams.find((p) => p.key === "customName_flag").value;
        customName.value = sendOptionsParams.find((p) => p.key === "customName").value;
        const snapshotRetentionParams = params.find((p) => p.key === "snapshotRetention").children;
        transferMethod.value = sendOptionsParams.find((p) => p.key === "transferMethod").value;
        if (transferMethod.value == "local" || transferMethod.value == "") {
          transferMethod.value = "ssh";
        }
        const allowOverwriteParam = sendOptionsParams.find((p) => p.key === "allowOverwrite");
        allowOverwrite.value = allowOverwriteParam ? !!allowOverwriteParam.value : false;
        const sourceRetention = snapshotRetentionParams.find((c) => c.key === "source");
        if (sourceRetention) {
          srcRetentionTime.value = ((_a = sourceRetention.children.find((c) => c.key === "retentionTime")) == null ? void 0 : _a.value) || 0;
          srcRetentionUnit.value = ((_b = sourceRetention.children.find((c) => c.key === "retentionUnit")) == null ? void 0 : _b.value) || "";
        }
        const destinationRetention = snapshotRetentionParams.find((c) => c.key === "destination");
        if (destinationRetention) {
          destRetentionTime.value = ((_c = destinationRetention.children.find((c) => c.key === "retentionTime")) == null ? void 0 : _c.value) || 0;
          destRetentionUnit.value = ((_d = destinationRetention.children.find((c) => c.key === "retentionUnit")) == null ? void 0 : _d.value) || "";
        }
        const useExistingDestParam = sendOptionsParams.find((p) => p.key === "useExistingDest");
        useExistingDest.value = useExistingDestParam ? !!useExistingDestParam.value : false;
        initialParameters.value = JSON.parse(JSON.stringify({
          sourcePool: sourcePool.value,
          sourceDataset: sourceDataset.value,
          useCustomSource: useCustomSource.value,
          destHost: destHost.value,
          destPort: destPort.value,
          destUser: destUser.value,
          destPool: destPool.value,
          destDataset: destDataset.value,
          useCustomTarget: useCustomTarget.value,
          sendCompressed: sendCompressed.value,
          sendRaw: sendRaw.value,
          sendRecursive: sendRecursive.value,
          mbufferSize: mbufferSize.value,
          mbufferUnit: mbufferUnit.value,
          useCustomName: useCustomName.value,
          customName: customName.value,
          srcRetentionTime: srcRetentionTime.value,
          srcRetentionUnit: srcRetentionUnit.value,
          destRetentionTime: destRetentionTime.value,
          destRetentionUnit: destRetentionUnit.value,
          transferMethod: transferMethod.value,
          allowOverwrite: allowOverwrite.value,
          useExistingDest: useExistingDest.value
        }));
        loading.value = false;
      } else {
        await getSourcePools();
        await getLocalDestinationPools();
      }
    }
    function hasChanges() {
      const currentParams = {
        sourcePool: sourcePool.value,
        sourceDataset: sourceDataset.value,
        useCustomSource: useCustomSource.value,
        destHost: destHost.value,
        destPort: destPort.value,
        destUser: destUser.value,
        destPool: destPool.value,
        destDataset: destDataset.value,
        useCustomTarget: useCustomTarget.value,
        sendCompressed: sendCompressed.value,
        sendRaw: sendRaw.value,
        sendRecursive: sendRecursive.value,
        mbufferSize: mbufferSize.value,
        mbufferUnit: mbufferUnit.value,
        useCustomName: useCustomName.value,
        customName: customName.value,
        srcRetentionTime: srcRetentionTime.value,
        srcRetentionUnit: srcRetentionUnit.value,
        destRetentionTime: destRetentionTime.value,
        destRetentionUnit: destRetentionUnit.value,
        allowOverwrite: allowOverwrite.value,
        useExistingDest: useExistingDest.value
      };
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    function handleCheckboxChange(checkbox) {
      if (checkbox === "sendCompressed" && sendCompressed.value) {
        sendRaw.value = false;
      } else if (checkbox === "sendRaw" && sendRaw.value) {
        sendCompressed.value = false;
      }
    }
    const handleDestHostChange = async (newVal) => {
      if (newVal !== "") {
        await getRemoteDestinationPools();
      } else {
        await getLocalDestinationPools();
      }
    };
    function debounce(func, delay) {
      let timerId;
      return function(newVal) {
        if (timerId)
          clearTimeout(timerId);
        timerId = setTimeout(() => func(newVal), delay);
      };
    }
    const debouncedDestHostChange = debounce(handleDestHostChange, 500);
    const handleSourcePoolChange = async (newVal) => {
      if (newVal) {
        await getSourceDatasets();
      }
    };
    const handleDestPoolChange = async (newVal) => {
      if (destHost.value != "") {
        if (newVal) {
          await getRemoteDestinationDatasets();
        }
      } else {
        if (newVal) {
          await getLocalDestinationDatasets();
        }
      }
    };
    const getSourcePools = async () => {
      loadingSourcePools.value = true;
      sourcePools.value = await getPoolData();
      loadingSourcePools.value = false;
    };
    const getSourceDatasets = async () => {
      loadingSourceDatasets.value = true;
      sourceDatasets.value = await getDatasetData(sourcePool.value);
      loadingSourceDatasets.value = false;
    };
    const getLocalDestinationPools = async () => {
      loadingDestPools.value = true;
      destPools.value = await getPoolData();
      loadingDestPools.value = false;
    };
    const getLocalDestinationDatasets = async () => {
      loadingDestDatasets.value = true;
      destDatasets.value = await getDatasetData(destPool.value);
      loadingDestDatasets.value = false;
    };
    const getRemoteDestinationPools = async () => {
      loadingDestPools.value = true;
      if (transferMethod.value == "netcat") {
        destPools.value = await getPoolData(destHost.value, "22", destUser.value);
      } else {
        destPools.value = await getPoolData(destHost.value, destPort.value, destUser.value);
      }
      loadingDestPools.value = false;
    };
    const getRemoteDestinationDatasets = async () => {
      loadingDestDatasets.value = true;
      if (transferMethod.value == "netcat") {
        destDatasets.value = await getDatasetData(destPool.value, destHost.value, "22", destUser.value);
      } else {
        destDatasets.value = await getDatasetData(destPool.value, destHost.value, destPort.value, destUser.value);
      }
      loadingDestDatasets.value = false;
    };
    function validateHost() {
      if (destHost.value !== "") {
        if (destHost.value.length < 1 || destHost.value.length > 253) {
          errorList.value.push("Hostname must be between 1 and 253 characters in length.");
          destHostErrorTag.value = true;
        }
        const hostRegex = /^(?!-)(?:(?:[a-zA-Z0-9]-*)*[a-zA-Z0-9]\.?)+$/;
        if (!hostRegex.test(destHost.value)) {
          errorList.value.push("Hostname must only contain ASCII letters (a-z, case-insensitive), digits (0-9), and hyphens ('-'), with no trailing dot.");
          destHostErrorTag.value = true;
        }
      }
    }
    function validatePort() {
      if (destPort.value == 22 && transferMethod.value == "netcat" && destHost.value != "") {
        errorList.value.push("Port 22 is not allowed for Netcat. Please choose a different port.");
        netCatPortError.value = true;
      } else {
        netCatPortError.value = false;
      }
    }
    watch(destHost, (newValue) => {
      if (newValue === "") {
        validatePort();
      }
    });
    watch(destPort, validatePort);
    watch(transferMethod, (newValue) => {
      if (newValue === "netcat" && destPort.value === 22) {
        destPort.value = 31337;
      }
    });
    function validateCustomName() {
      if (useCustomName.value) {
        if (customName.value !== "") {
          const snapNameRegex = /^[a-zA-Z0-9_.-]+$/;
          if (!snapNameRegex.test(customName.value)) {
            errorList.value.push("Snapshot name must only contain valid characters (alphanumerics, dots, underscores, and hyphens).");
            customNameErrorTag.value = true;
          }
        } else {
          errorList.value.push("Custom name is required if box is checked.");
          customNameErrorTag.value = true;
        }
      }
    }
    function validateSource() {
      if (useCustomSource.value) {
        if (!isValidPoolName(sourcePool.value)) {
          errorList.value.push("Source pool is invalid.");
          customSrcPoolErrorTag.value = true;
        }
        if (!isValidDatasetName(sourceDataset.value)) {
          errorList.value.push("Source dataset is invalid.");
          customSrcDatasetErrorTag.value = true;
        }
        if (!doesItExist(sourcePool.value, sourcePools.value)) {
          errorList.value.push("Source pool does not exist.");
          customSrcPoolErrorTag.value = true;
        }
        if (!doesItExist(sourceDataset.value, sourceDatasets.value)) {
          errorList.value.push("Source dataset does not exist.");
          customSrcDatasetErrorTag.value = true;
        }
      } else {
        if (sourcePool.value === "") {
          errorList.value.push("Source pool is needed.");
          sourcePoolErrorTag.value = true;
        } else {
          if (!doesItExist(sourcePool.value, sourcePools.value)) {
            errorList.value.push("Source pool does not exist.");
            customSrcPoolErrorTag.value = true;
          }
        }
        if (sourceDataset.value === "") {
          errorList.value.push("Source dataset is needed.");
          sourceDatasetErrorTag.value = true;
        } else {
          if (!doesItExist(sourceDataset.value, sourceDatasets.value)) {
            errorList.value.push("Source dataset does not exist.");
            customSrcDatasetErrorTag.value = true;
          }
        }
      }
    }
    function validateDestination() {
      if (destPool.value === "") {
        errorList.value.push("Destination pool is needed.");
        destPoolErrorTag.value = true;
      } else if (!doesItExist(destPool.value, destPools.value)) {
        errorList.value.push("Destination pool does not exist.");
        customDestPoolErrorTag.value = true;
      }
      if (useExistingDest.value) {
        if (destDataset.value === "") {
          errorList.value.push("Destination dataset is needed.");
          destDatasetErrorTag.value = true;
          return;
        }
        if (!doesItExist(destDataset.value, destDatasets.value)) {
          errorList.value.push("Selected destination dataset does not exist in this pool.");
          destDatasetErrorTag.value = true;
          return;
        }
        return;
      }
      if (!isValidDatasetName(destDataset.value)) {
        errorList.value.push("Destination dataset name is invalid.");
        customDestDatasetErrorTag.value = true;
        return;
      }
      if (doesItExist(destDataset.value, destDatasets.value)) {
        errorList.value.push("That dataset already exists. Choose 'Existing Dataset' or use a new path.");
        customDestDatasetErrorTag.value = true;
        return;
      }
    }
    async function checkDestDatasetContents() {
      if (!useExistingDest.value)
        return;
      try {
        const srcSnaps = await listSnapshots(sourceDataset.value);
        let dstSnaps = [];
        if (destHost.value) {
          const portToUse = transferMethod.value === "netcat" ? "22" : String(destPort.value);
          dstSnaps = await listSnapshots(destDataset.value, destUser.value, destHost.value, portToUse);
        } else {
          dstSnaps = await listSnapshots(destDataset.value);
        }
        if (!dstSnaps.length) {
          destDatasetErrorTag.value = false;
          return;
        }
        const common = mostRecentCommonSnapshot(srcSnaps, dstSnaps);
        if (!common) {
          if (allowOverwrite.value) {
            destDatasetErrorTag.value = false;
            return;
          }
          errorList.value.push("No common snapshot found. Enable 'Allow overwrite' or choose an empty/new destination.");
          destDatasetErrorTag.value = true;
          return;
        }
        const diverged = destAheadOfCommon(srcSnaps, dstSnaps, common);
        if (diverged && !allowOverwrite.value) {
          errorList.value.push("Destination has newer snapshots than the common base. Enable 'Allow overwrite' to roll back, or pick a new destination.");
          destDatasetErrorTag.value = true;
          return;
        }
        destDatasetErrorTag.value = false;
      } catch (err2) {
        console.error("checkDestDatasetContents:", err2);
        errorList.value.push("Failed to verify destination snapshots.");
        destDatasetErrorTag.value = true;
      }
    }
    function isValidPoolName(poolName) {
      if (poolName === "") {
        return false;
      }
      if (/^(c[0-9]|log|mirror|raidz[123]?|spare)/.test(poolName)) {
        return false;
      }
      if (/^[0-9._: -]/.test(poolName)) {
        return false;
      }
      if (!/^[a-zA-Z0-9_.:-]*$/.test(poolName)) {
        return false;
      }
      if (poolName.match(/[ ]$/)) {
        return false;
      }
      return true;
    }
    function doesItExist(thisName, list) {
      if (list.includes(thisName)) {
        return true;
      } else {
        return false;
      }
    }
    function isValidDatasetName(datasetName) {
      if (datasetName === "") {
        return false;
      }
      if (!/^[a-zA-Z0-9]/.test(datasetName)) {
        return false;
      }
      if (/[ \/]$/.test(datasetName)) {
        return false;
      }
      if (!/^[a-zA-Z0-9_.:\/-]*$/.test(datasetName)) {
        return false;
      }
      return true;
    }
    function clearErrorTags() {
      destHostErrorTag.value = false;
      customNameErrorTag.value = false;
      sourcePoolErrorTag.value = false;
      sourceDatasetErrorTag.value = false;
      destPoolErrorTag.value = false;
      destDatasetErrorTag.value = false;
      customSrcPoolErrorTag.value = false;
      customSrcDatasetErrorTag.value = false;
      customDestPoolErrorTag.value = false;
      customDestDatasetErrorTag.value = false;
      netCatPortError.value = false;
      errorList.value = [];
    }
    async function validateParams() {
      validateSource();
      validateHost();
      validateDestination();
      validatePort();
      if (useExistingDest.value)
        await checkDestDatasetContents();
      validateCustomName();
      if (errorList.value.length == 0) {
        setParams();
      }
    }
    function setParams() {
      if (transferMethod.value == "ssh" && destHost.value == "") {
        transferMethod.value = "local";
      } else if (transferMethod.value == "netcat") {
        transferMethod.value = "netcat";
      }
      const newParams = new ParameterNode("ZFS Replication Task Config", "zfsRepConfig").addChild(new ZfsDatasetParameter("Source Dataset", "sourceDataset", "", 0, "", sourcePool.value, sourceDataset.value)).addChild(new ZfsDatasetParameter("Destination Dataset", "destDataset", destHost.value, destPort.value, destUser.value, destPool.value, destDataset.value)).addChild(
        new ParameterNode("Send Options", "sendOptions").addChild(new BoolParameter("Compressed", "compressed_flag", sendCompressed.value)).addChild(new BoolParameter("Raw", "raw_flag", sendRaw.value)).addChild(new BoolParameter("Recursive", "recursive_flag", sendRecursive.value)).addChild(new IntParameter("MBuffer Size", "mbufferSize", mbufferSize.value)).addChild(new StringParameter("MBuffer Unit", "mbufferUnit", mbufferUnit.value)).addChild(new BoolParameter("Custom Name Flag", "customName_flag", useCustomName.value)).addChild(new StringParameter("Custom Name", "customName", customName.value)).addChild(new StringParameter("Transfer Method", "transferMethod", transferMethod.value)).addChild(new BoolParameter("Allow Overwrite", "allowOverwrite", allowOverwrite.value)).addChild(new BoolParameter("Use Existing Destination", "useExistingDest", useExistingDest.value))
      ).addChild(
        new ParameterNode("Snapshot Retention", "snapshotRetention").addChild(new SnapshotRetentionParameter("Source", "source", srcRetentionTime.value, srcRetentionUnit.value)).addChild(new SnapshotRetentionParameter("Destination", "destination", destRetentionTime.value, destRetentionUnit.value))
      );
      parameters.value = newParams;
    }
    async function confirmSSHTest(destHost2, destUser2) {
      testingSSH.value = true;
      const sshTarget = destUser2 + "@" + destHost2;
      sshTestResult.value = await testSSH(sshTarget);
      if (sshTestResult.value) {
        pushNotification(new Notification("Connection Successful!", `Passwordless SSH connection established. This host can be used for replication (Assuming ZFS exists on target).`, "success", 6e3));
      } else {
        pushNotification(new Notification("Connection Failed", `Could not resolve hostname "${destHost2}": 
Name or service not known.
Make sure passwordless SSH connection has been configured for target system.`, "error", 6e3));
      }
      testingSSH.value = false;
    }
    async function confirmNetcatTest(destHost2, destPort2) {
      testingNetcat.value = true;
      const netcatHost = destHost2;
      const netcatdestPort = destPort2;
      netCatTestResult.value = await testNetcat(destUser.value, netcatHost, netcatdestPort);
      if (netCatTestResult.value) {
        pushNotification(new Notification(
          "Connection Successful!",
          `Netcat connection established. This host can be used for remote transfers.`,
          "success",
          6e3
        ));
      } else {
        pushNotification(new Notification(
          "Connection Failed",
          `Netcat test failed. Ensure Netcat is installed and the specified port (${destPort.value}) is open on the receiving host.`,
          "error",
          6e3
        ));
      }
      testingNetcat.value = false;
    }
    watch(destPool, handleDestPoolChange);
    watch(sourcePool, handleSourcePoolChange);
    onMounted(async () => {
      await initializeData();
    });
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$6, [
          createVNode(_sfc_main$8, {
            width: "w-20",
            height: "h-20",
            baseColor: "text-gray-200",
            fillColor: "fill-gray-500"
          })
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3$6, [
        createBaseVNode("div", _hoisted_4$6, [
          createBaseVNode("div", _hoisted_5$6, [
            _cache[37] || (_cache[37] = createBaseVNode("label", { class: "-mt-1 block text-base leading-6 text-default" }, "Source Location", -1)),
            createBaseVNode("div", _hoisted_6$6, [
              _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-xs text-default" }, "Custom", -1)),
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => useCustomSource.value = $event),
                class: "h-4 w-4 rounded"
              }, null, 512), [
                [vModelCheckbox, useCustomSource.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$6, [
            createBaseVNode("div", _hoisted_8$6, [
              _cache[38] || (_cache[38] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Pool", -1)),
              sourcePoolErrorTag.value || customDestPoolErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            useCustomSource.value ? (openBlock(), createElementBlock("div", _hoisted_9$6, [
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sourcePool.value = $event),
                class: normalizeClass([
                  "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                  customSrcPoolErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ]),
                placeholder: "Specify Pool"
              }, null, 2), [
                [vModelText, sourcePool.value]
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_10$6, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sourcePool.value = $event),
                class: normalizeClass([
                  "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                  sourcePoolErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ])
              }, [
                _cache[39] || (_cache[39] = createBaseVNode("option", { value: "" }, "Select a Pool", -1)),
                !loadingSourcePools.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sourcePools.value, (pool) => {
                  return openBlock(), createElementBlock("option", { value: pool }, toDisplayString(pool), 9, _hoisted_11$6);
                }), 256)) : createCommentVNode("", true),
                loadingSourcePools.value ? (openBlock(), createElementBlock("option", _hoisted_12$6, "Loading...")) : createCommentVNode("", true)
              ], 2), [
                [vModelSelect, sourcePool.value]
              ])
            ]))
          ]),
          createBaseVNode("div", _hoisted_13$5, [
            createBaseVNode("div", _hoisted_14$4, [
              _cache[40] || (_cache[40] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Dataset", -1)),
              sourceDatasetErrorTag.value || customSrcDatasetErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            useCustomSource.value ? (openBlock(), createElementBlock("div", _hoisted_15$4, [
              useCustomSource.value ? (openBlock(), createElementBlock("div", _hoisted_16$4, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sourceDataset.value = $event),
                  class: normalizeClass([
                    "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                    customSrcDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "Specify Dataset"
                }, null, 2), [
                  [vModelText, sourceDataset.value]
                ])
              ])) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", _hoisted_17$3, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sourceDataset.value = $event),
                class: normalizeClass([
                  "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                  sourceDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ])
              }, [
                _cache[41] || (_cache[41] = createBaseVNode("option", { value: "" }, "Select a Dataset", -1)),
                !loadingSourceDatasets.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sourceDatasets.value, (dataset) => {
                  return openBlock(), createElementBlock("option", { value: dataset }, toDisplayString(dataset), 9, _hoisted_18$3);
                }), 256)) : createCommentVNode("", true),
                loadingSourceDatasets.value ? (openBlock(), createElementBlock("option", _hoisted_19$3, "Loading...")) : createCommentVNode("", true)
              ], 2), [
                [vModelSelect, sourceDataset.value]
              ])
            ]))
          ]),
          createBaseVNode("div", _hoisted_20$3, [
            createBaseVNode("div", _hoisted_21$3, [
              createBaseVNode("label", _hoisted_22$3, [
                _cache[42] || (_cache[42] = createTextVNode(" Source Retention Policy ", -1)),
                createVNode(_sfc_main$9, {
                  class: "ml-1",
                  title: `How long to keep source snapshots for. Leave at 0 to keep ALL snapshots.
WARNING: Disabling an automated task's schedule for a period of time longer than the retention interval and re-enabling the schedule may result in a purge of snapshots.`
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_23$3, [
              withDirectives(createBaseVNode("input", {
                type: "number",
                min: "0",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => srcRetentionTime.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: ""
              }, null, 512), [
                [vModelText, srcRetentionTime.value]
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => srcRetentionUnit.value = $event),
                class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
              }, [
                _cache[43] || (_cache[43] = createBaseVNode("option", { value: "" }, "Select an Interval", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(retentionUnitOptions.value, (option) => {
                  return openBlock(), createElementBlock("option", {
                    key: option,
                    value: option
                  }, toDisplayString(option), 9, _hoisted_24$3);
                }), 128))
              ], 512), [
                [vModelSelect, srcRetentionUnit.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_25$3, [
          createBaseVNode("div", _hoisted_26$3, [
            _cache[45] || (_cache[45] = createBaseVNode("label", { class: "-mt-1 block text-base leading-6 text-default" }, "Target Location", -1)),
            createBaseVNode("div", _hoisted_27$3, [
              _cache[44] || (_cache[44] = createBaseVNode("label", { class: "block text-xs text-default" }, "Existing Dataset", -1)),
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => useExistingDest.value = $event),
                class: "h-4 w-4 rounded"
              }, null, 512), [
                [vModelCheckbox, useExistingDest.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_28$3, [
            createBaseVNode("div", _hoisted_29$3, [
              _cache[46] || (_cache[46] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Pool", -1)),
              destPoolErrorTag.value || customDestPoolErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => destPool.value = $event),
              class: normalizeClass([
                "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                destPoolErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
              ])
            }, [
              _cache[47] || (_cache[47] = createBaseVNode("option", { value: "" }, "Select a Pool", -1)),
              !loadingDestPools.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(destPools.value, (pool) => {
                return openBlock(), createElementBlock("option", { value: pool }, toDisplayString(pool), 9, _hoisted_30$3);
              }), 256)) : createCommentVNode("", true),
              loadingDestPools.value ? (openBlock(), createElementBlock("option", _hoisted_31$3, "Loading...")) : createCommentVNode("", true)
            ], 2), [
              [vModelSelect, destPool.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_32$3, [
            createBaseVNode("div", _hoisted_33$3, [
              _cache[48] || (_cache[48] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Dataset", -1)),
              destDatasetErrorTag.value || customDestDatasetErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            useExistingDest.value ? (openBlock(), createElementBlock("div", _hoisted_34$3, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => destDataset.value = $event),
                class: normalizeClass([
                  "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                  destDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ]),
                disabled: !destPool.value
              }, [
                createBaseVNode("option", _hoisted_36$3, toDisplayString(destPool.value ? "Select a Dataset" : "Select a Pool first"), 1),
                !loadingDestDatasets.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(destDatasets.value, (dataset) => {
                  return openBlock(), createElementBlock("option", {
                    key: dataset,
                    value: dataset
                  }, toDisplayString(dataset), 9, _hoisted_37$2);
                }), 128)) : createCommentVNode("", true),
                loadingDestDatasets.value ? (openBlock(), createElementBlock("option", _hoisted_38$2, "Loading...")) : createCommentVNode("", true)
              ], 10, _hoisted_35$3), [
                [vModelSelect, destDataset.value]
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_39$2, [
              createBaseVNode("div", _hoisted_40$2, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => destDataset.value = $event),
                  class: normalizeClass([
                    "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                    customDestDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "Specify new dataset path to create on first run"
                }, null, 2), [
                  [vModelText, destDataset.value]
                ]),
                !destHost.value ? (openBlock(), createElementBlock("div", _hoisted_41$2, [
                  _cache[49] || (_cache[49] = createBaseVNode("label", { class: "block text-xs text-default" }, "Create", -1)),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => makeNewDestDataset.value = $event),
                    class: "h-4 w-4 rounded"
                  }, null, 512), [
                    [vModelCheckbox, makeNewDestDataset.value]
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]))
          ]),
          createBaseVNode("div", _hoisted_42$2, [
            createBaseVNode("div", _hoisted_43$2, [
              createBaseVNode("label", _hoisted_44$2, [
                _cache[50] || (_cache[50] = createTextVNode(" Destination Retention Policy ", -1)),
                createVNode(_sfc_main$9, {
                  class: "ml-1",
                  title: `How long to keep destination snapshots for. Leave at 0 to keep ALL snapshots.
WARNING: Disabling an automated task's schedule for a period of time longer than the retention interval and re-enabling the schedule may result in a purge of snapshots.`
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_45$2, [
              withDirectives(createBaseVNode("input", {
                type: "number",
                min: "0",
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => destRetentionTime.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: ""
              }, null, 512), [
                [vModelText, destRetentionTime.value]
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => destRetentionUnit.value = $event),
                class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
              }, [
                _cache[51] || (_cache[51] = createBaseVNode("option", { value: "" }, "Select an Interval", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(retentionUnitOptions.value, (option) => {
                  return openBlock(), createElementBlock("option", {
                    key: option,
                    value: option
                  }, toDisplayString(option), 9, _hoisted_46$2);
                }), 128))
              ], 512), [
                [vModelSelect, destRetentionUnit.value]
              ])
            ])
          ]),
          useExistingDest.value ? (openBlock(), createElementBlock("div", _hoisted_47$2, [
            createBaseVNode("div", _hoisted_48$2, [
              _cache[52] || (_cache[52] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, " Allow overwrite if no common base or destination is ahead ", -1)),
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => allowOverwrite.value = $event),
                class: "h-4 w-4 rounded"
              }, null, 512), [
                [vModelCheckbox, allowOverwrite.value]
              ])
            ]),
            _cache[53] || (_cache[53] = createBaseVNode("p", { class: "mt-1 text-xs text-default/70" }, [
              createTextVNode(" If destination has diverged from the source, enabling this permits rollback with "),
              createBaseVNode("code", null, "zfs receive -F"),
              createTextVNode(". Leave off to refuse destructive overwrite. ")
            ], -1))
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_49$2, [
          createBaseVNode("div", _hoisted_50$2, [
            _cache[55] || (_cache[55] = createBaseVNode("label", { class: "mt-1 col-span-1 block text-base leading-6 text-default" }, "Select Transfer Method", -1)),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => transferMethod.value = $event),
              class: "text-default bg-default mt-0 block w-full input-textlike sm:text-sm sm:leading-6",
              id: "method"
            }, [..._cache[54] || (_cache[54] = [
              createBaseVNode("option", { value: "ssh" }, "SSH", -1),
              createBaseVNode("option", { value: "netcat" }, "Netcat", -1)
            ])], 512), [
              [vModelSelect, transferMethod.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_51$2, [
            _cache[57] || (_cache[57] = createBaseVNode("label", { class: "mt-1 col-span-1 block text-base leading-6 text-default" }, "Remote Target", -1)),
            createBaseVNode("div", _hoisted_52$2, [
              testingNetcat.value || testingSSH.value ? (openBlock(), createElementBlock("button", _hoisted_53$2, [..._cache[56] || (_cache[56] = [
                createBaseVNode("svg", {
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
                ], -1),
                createTextVNode(" Testing... ", -1)
              ])])) : transferMethod.value === "ssh" ? (openBlock(), createElementBlock("button", {
                key: 1,
                onClick: _cache[16] || (_cache[16] = ($event) => confirmSSHTest(destHost.value, destUser.value)),
                class: "mt-0.5 btn btn-secondary object-right justify-end h-fit"
              }, "Test SSH")) : transferMethod.value === "netcat" ? (openBlock(), createElementBlock("button", {
                key: 2,
                onClick: _cache[17] || (_cache[17] = ($event) => confirmNetcatTest(destHost.value, destPort.value)),
                class: "mt-0.5 btn btn-secondary object-right justify-end h-fit"
              }, "Test Netcat")) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_54$2, [
            createBaseVNode("div", _hoisted_55$2, [
              _cache[58] || (_cache[58] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Host", -1)),
              destHostErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            withDirectives(createBaseVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => destHost.value = $event),
              onInput: _cache[19] || (_cache[19] = ($event) => unref(debouncedDestHostChange)($event.target)),
              class: normalizeClass([
                "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                destHostErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
              ]),
              placeholder: "Leave blank for local replication."
            }, null, 34), [
              [vModelText, destHost.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_56$2, [
            _cache[59] || (_cache[59] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "User", -1)),
            destHost.value === "" ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              disabled: "",
              type: "text",
              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => destUser.value = $event),
              class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
              placeholder: "'root' is default"
            }, null, 512)), [
              [vModelText, destUser.value]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              type: "text",
              "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => destUser.value = $event),
              class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
              placeholder: "'root' is default"
            }, null, 512)), [
              [vModelText, destUser.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_57$2, [
            createBaseVNode("div", _hoisted_58$2, [
              _cache[60] || (_cache[60] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Port", -1)),
              netCatPortError.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            destHost.value === "" ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              disabled: "",
              type: "number",
              class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
              "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => destPort.value = $event),
              min: "0",
              max: "65535",
              placeholder: "22 is default"
            }, null, 512)), [
              [vModelText, destPort.value]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              type: "number",
              "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => destPort.value = $event),
              class: normalizeClass([
                netCatPortError.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : "",
                "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
              ]),
              max: "65535",
              placeholder: transferMethod.value === "netcat" ? "Enter port (not 22 for netcat)" : "22 is default",
              onInput: validatePort
            }, null, 42, _hoisted_59$2)), [
              [vModelText, destPort.value]
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_60$2, [
          _cache[69] || (_cache[69] = createBaseVNode("label", { class: "mt-1 block text-base leading-6 text-default" }, "Send Options", -1)),
          createBaseVNode("div", _hoisted_61$2, [
            createBaseVNode("div", _hoisted_62$2, [
              _cache[61] || (_cache[61] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Send Raw", -1)),
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => sendRaw.value = $event),
                onChange: _cache[25] || (_cache[25] = ($event) => handleCheckboxChange("sendRaw")),
                class: "h-4 w-4 rounded"
              }, null, 544), [
                [vModelCheckbox, sendRaw.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_63$2, [
              _cache[62] || (_cache[62] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Send Compressed", -1)),
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => sendCompressed.value = $event),
                onChange: _cache[27] || (_cache[27] = ($event) => handleCheckboxChange("sendCompressed")),
                class: "h-4 w-4 rounded"
              }, null, 544), [
                [vModelCheckbox, sendCompressed.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_64$2, [
            _cache[63] || (_cache[63] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Send Recursive", -1)),
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => sendRecursive.value = $event),
              class: "h-4 w-4 rounded"
            }, null, 512), [
              [vModelCheckbox, sendRecursive.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_65$2, [
            createBaseVNode("div", _hoisted_66$2, [
              createBaseVNode("div", _hoisted_67$2, [
                _cache[64] || (_cache[64] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Use Custom Snapshot Name?", -1)),
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => useCustomName.value = $event),
                  class: "h-4 w-4 rounded"
                }, null, 512), [
                  [vModelCheckbox, useCustomName.value]
                ])
              ]),
              customNameErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-2 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_68$2, [
              useCustomName.value ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                type: "text",
                "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => customName.value = $event),
                class: normalizeClass([
                  "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                  customNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ]),
                placeholder: "Name is TaskName + CustomName + Timestamp"
              }, null, 2)), [
                [vModelText, customName.value]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                disabled: "",
                type: "text",
                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => customName.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: "Name is TaskName + Timestamp"
              }, null, 512)), [
                [vModelText, customName.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_69$2, [
            createBaseVNode("div", _hoisted_70$2, [
              _cache[65] || (_cache[65] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "mBuffer Size (Remote)", -1)),
              destHost.value === "" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                disabled: "",
                type: "number",
                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => mbufferSize.value = $event),
                min: "1",
                class: "mt-0.5 block w-full input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: "1"
              }, null, 512)), [
                [vModelText, mbufferSize.value]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                type: "number",
                "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => mbufferSize.value = $event),
                min: "1",
                class: "mt-0.5 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: "1"
              }, null, 512)), [
                [vModelText, mbufferSize.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_71$2, [
              createBaseVNode("div", _hoisted_72$2, [
                _cache[68] || (_cache[68] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "mBuffer Unit (Remote)", -1)),
                destHost.value === "" ? withDirectives((openBlock(), createElementBlock("select", {
                  key: 0,
                  disabled: "",
                  "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => mbufferUnit.value = $event),
                  class: "text-default bg-default mt-0.5 block w-full input-textlike sm:text-sm sm:leading-6"
                }, [..._cache[66] || (_cache[66] = [
                  createBaseVNode("option", { value: "b" }, "b", -1),
                  createBaseVNode("option", { value: "k" }, "k", -1),
                  createBaseVNode("option", { value: "M" }, "M", -1),
                  createBaseVNode("option", { value: "G" }, "G", -1)
                ])], 512)), [
                  [vModelSelect, mbufferUnit.value]
                ]) : withDirectives((openBlock(), createElementBlock("select", {
                  key: 1,
                  "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => mbufferUnit.value = $event),
                  class: "text-default bg-default mt-0.5 block w-full input-textlike sm:text-sm sm:leading-6"
                }, [..._cache[67] || (_cache[67] = [
                  createBaseVNode("option", { value: "b" }, "b", -1),
                  createBaseVNode("option", { value: "k" }, "k", -1),
                  createBaseVNode("option", { value: "M" }, "M", -1),
                  createBaseVNode("option", { value: "G" }, "G", -1)
                ])], 512)), [
                  [vModelSelect, mbufferUnit.value]
                ])
              ])
            ])
          ])
        ])
      ]));
    };
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "space-y-4 my-2"
};
const _hoisted_2$5 = ["value"];
const _hoisted_3$5 = { key: 1 };
const _hoisted_4$5 = ["value"];
const _hoisted_5$5 = { key: 1 };
const _hoisted_6$5 = { class: "flex items-center justify-between" };
const _hoisted_7$5 = { class: "flex items-center gap-2 text-xs" };
const _hoisted_8$5 = { key: 1 };
const _hoisted_9$5 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_10$5 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_11$5 = {
  key: 1,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2"
};
const _hoisted_12$5 = {
  name: "source-data",
  class: "border border-default rounded-md p-2 col-span-2 bg-accent"
};
const _hoisted_13$4 = { class: "flex flex-row justify-between items-center text-center" };
const _hoisted_14$3 = { class: "mt-1 flex flex-col items-center text-center" };
const _hoisted_15$3 = { name: "source-pool" };
const _hoisted_16$3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_17$2 = { key: 0 };
const _hoisted_18$2 = { key: 1 };
const _hoisted_19$2 = ["value"];
const _hoisted_20$2 = { key: 1 };
const _hoisted_21$2 = { name: "source-dataset" };
const _hoisted_22$2 = { class: "flex flex-row justify-between items-center" };
const _hoisted_23$2 = { key: 0 };
const _hoisted_24$2 = { key: 1 };
const _hoisted_25$2 = ["value"];
const _hoisted_26$2 = { key: 1 };
const _hoisted_27$2 = {
  name: "source-snapshot-retention",
  class: ""
};
const _hoisted_28$2 = { class: "flex flex-row justify-between items-center" };
const _hoisted_29$2 = { class: "mt-1 block text-sm leading-6 text-default whitespace-nowrap" };
const _hoisted_30$2 = { class: "flex flex-row gap-2 w-full items-center justify-between" };
const _hoisted_31$2 = ["value"];
const _hoisted_32$2 = { class: "flex flex-row gap-2" };
const _hoisted_33$2 = {
  name: "custom-snapshot-name-toggle",
  class: "flex flex-row items-center justify-between"
};
const _hoisted_34$2 = { class: "flex flex-row items-center gap-2 mt-2 whitespace-nowrap" };
const _hoisted_35$2 = {
  name: "custom-snapshot-name-field",
  class: "mt-1 flex-grow"
};
const _hoisted_36$2 = {
  name: "send-opt-recursive",
  class: "flex flex-row items-center gap-2 mt-2"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AutomatedSnapshotTaskParams",
  props: {
    parameterSchema: {},
    task: {},
    simple: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const parameters = inject("parameters");
    const initialParameters = ref({});
    const sourcePools = ref([]);
    const sourceDatasets = ref([]);
    const loadingSourcePools = ref(false);
    const loadingSourceDatasets = ref(false);
    const sourcePool = ref("");
    const sourcePoolErrorTag = ref(false);
    const sourceDataset = ref("");
    const sourceDatasetErrorTag = ref(false);
    const sendRecursive = ref(false);
    const useCustomName = ref(false);
    const customName = ref("");
    const customNameErrorTag = ref(false);
    const retentionTime = ref(0);
    const retentionUnit = ref("");
    const retentionUnitOptions = ref(["minutes", "hours", "days", "weeks", "months", "years"]);
    const keepForever = computed({
      get: () => Number(retentionTime || 0) === 0,
      set: (v) => {
        if (v)
          retentionTime.value = 0;
        else if (retentionTime.value === 0)
          retentionTime.value = 30;
      }
    });
    const useCustomSource = ref(false);
    const customSrcPoolErrorTag = ref(false);
    const customSrcDatasetErrorTag = ref(false);
    const errorList = inject("errors");
    async function initializeData() {
      if (props.task) {
        loading.value = true;
        await getSourcePools();
        const params = props.task.parameters.children;
        const filesystemParams = params.find((p) => p.key === "filesystem").children;
        sourcePool.value = filesystemParams.find((p) => p.key === "pool").value;
        await getSourceDatasets();
        sourceDataset.value = filesystemParams.find((p) => p.key === "dataset").value;
        sendRecursive.value = params.find((p) => p.key === "recursive_flag").value;
        useCustomName.value = params.find((p) => p.key === "customName_flag").value;
        customName.value = params.find((p) => p.key === "customName").value;
        const snapshotRetention = params.find((p) => p.key === "snapshotRetention");
        if (snapshotRetention) {
          retentionTime.value = snapshotRetention.children.find((c) => c.key === "retentionTime").value;
          retentionUnit.value = snapshotRetention.children.find((c) => c.key === "retentionUnit").value;
        }
        initialParameters.value = JSON.parse(JSON.stringify({
          sourcePool: sourcePool.value,
          sourceDataset: sourceDataset.value,
          sendRecursive: sendRecursive.value,
          useCustomName: useCustomName.value,
          customName: customName.value,
          snapshotRetention: {
            retentionTime: retentionTime.value,
            retentionUnit: retentionUnit.value
          }
        }));
        loading.value = false;
      } else {
        await getSourcePools();
      }
    }
    function hasChanges() {
      const currentParams = {
        sourcePool: sourcePool.value,
        sourceDataset: sourceDataset.value,
        sendRecursive: sendRecursive.value,
        useCustomName: useCustomName.value,
        customName: customName.value,
        snapshotRetention: {
          retentionTime: retentionTime.value,
          retentionUnit: retentionUnit.value
        }
      };
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    const getSourcePools = async () => {
      loadingSourcePools.value = true;
      sourcePools.value = await getPoolData();
      loadingSourcePools.value = false;
    };
    const getSourceDatasets = async () => {
      loadingSourceDatasets.value = true;
      sourceDatasets.value = await getDatasetData(sourcePool.value);
      loadingSourceDatasets.value = false;
    };
    const handleSourcePoolChange = async (newVal) => {
      if (newVal) {
        await getSourceDatasets();
      }
    };
    function validateCustomName() {
      if (useCustomName.value) {
        if (customName.value !== "") {
          const snapNameRegex = /^[a-zA-Z0-9_.-]+$/;
          if (!snapNameRegex.test(customName.value)) {
            errorList.value.push("Snapshot name must only contain valid characters (alphanumerics, dots, underscores, and hyphens).");
            customNameErrorTag.value = true;
          }
        } else {
          errorList.value.push("Custom name is required if box is checked.");
          customNameErrorTag.value = true;
        }
      }
    }
    function validateSource() {
      if (useCustomSource.value) {
        if (!isValidPoolName(sourcePool.value)) {
          errorList.value.push("Pool is invalid.");
          customSrcPoolErrorTag.value = true;
        }
        if (!isValidDatasetName(sourceDataset.value)) {
          errorList.value.push("Dataset is invalid.");
          customSrcDatasetErrorTag.value = true;
        }
        if (!doesItExist(sourcePool.value, sourcePools.value)) {
          errorList.value.push("Pool does not exist.");
          customSrcPoolErrorTag.value = true;
        }
        if (!doesItExist(sourceDataset.value, sourceDatasets.value)) {
          errorList.value.push("Dataset does not exist.");
          customSrcDatasetErrorTag.value = true;
        }
      } else {
        if (sourcePool.value === "") {
          errorList.value.push("Pool is needed.");
          sourcePoolErrorTag.value = true;
        } else {
          if (!doesItExist(sourcePool.value, sourcePools.value)) {
            errorList.value.push("Pool does not exist.");
            customSrcPoolErrorTag.value = true;
          }
        }
        if (sourceDataset.value === "") {
          errorList.value.push("Dataset is needed.");
          sourceDatasetErrorTag.value = true;
        } else {
          if (!doesItExist(sourceDataset.value, sourceDatasets.value)) {
            errorList.value.push("Dataset does not exist.");
            customSrcDatasetErrorTag.value = true;
          }
        }
      }
    }
    function isValidPoolName(poolName) {
      if (poolName === "") {
        return false;
      }
      if (/^(c[0-9]|log|mirror|raidz[123]?|spare)/.test(poolName)) {
        return false;
      }
      if (/^[0-9._: -]/.test(poolName)) {
        return false;
      }
      if (!/^[a-zA-Z0-9_.:-]*$/.test(poolName)) {
        return false;
      }
      if (poolName.match(/[ ]$/)) {
        return false;
      }
      return true;
    }
    function doesItExist(thisName, list) {
      if (list.includes(thisName)) {
        return true;
      } else {
        return false;
      }
    }
    function isValidDatasetName(datasetName) {
      if (datasetName === "") {
        return false;
      }
      if (!/^[a-zA-Z0-9]/.test(datasetName)) {
        return false;
      }
      if (/[ \/]$/.test(datasetName)) {
        return false;
      }
      if (!/^[a-zA-Z0-9_.:\/-]*$/.test(datasetName)) {
        return false;
      }
      return true;
    }
    function clearErrorTags() {
      customNameErrorTag.value = false;
      sourcePoolErrorTag.value = false;
      sourceDatasetErrorTag.value = false;
      customSrcPoolErrorTag.value = false;
      customSrcDatasetErrorTag.value = false;
      errorList.value = [];
    }
    async function validateParams() {
      validateSource();
      validateCustomName();
      if (errorList.value.length == 0) {
        setParams();
      }
    }
    function setParams() {
      const newParams = new ParameterNode("Automated Snapshot Task Config", "autoSnapConfig").addChild(new ZfsDatasetParameter("Filesystem", "filesystem", "", 0, "", sourcePool.value, sourceDataset.value)).addChild(new BoolParameter("Recursive", "recursive_flag", sendRecursive.value)).addChild(new BoolParameter("Custom Name Flag", "customName_flag", useCustomName.value)).addChild(new StringParameter("Custom Name", "customName", customName.value)).addChild(
        new SnapshotRetentionParameter(
          "Snapshot Retention",
          "snapshotRetention",
          retentionTime.value,
          retentionUnit.value
        )
      );
      parameters.value = newParams;
    }
    watch(sourcePool, handleSourcePoolChange);
    onMounted(async () => {
      await initializeData();
    });
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return props.simple ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(_sfc_main$a, {
          title: "What do you want to snapshot?",
          description: "Pick the pool and folder (dataset) you want to protect."
        }, {
          default: withCtx(() => [
            _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm mt-1 text-default" }, "Pool", -1)),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sourcePool.value = $event),
              class: normalizeClass([
                "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                sourcePoolErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
              ])
            }, [
              _cache[16] || (_cache[16] = createBaseVNode("option", { value: "" }, "Select a Pool", -1)),
              !loadingSourcePools.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sourcePools.value, (p) => {
                return openBlock(), createElementBlock("option", {
                  key: p,
                  value: p
                }, toDisplayString(p), 9, _hoisted_2$5);
              }), 128)) : createCommentVNode("", true),
              loadingSourcePools.value ? (openBlock(), createElementBlock("option", _hoisted_3$5, "Loading...")) : createCommentVNode("", true)
            ], 2), [
              [vModelSelect, sourcePool.value]
            ]),
            _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-sm mt-3 text-default" }, "Folder (Dataset)", -1)),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sourceDataset.value = $event),
              class: normalizeClass([
                "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                sourceDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
              ])
            }, [
              _cache[17] || (_cache[17] = createBaseVNode("option", { value: "" }, "Select a Dataset", -1)),
              !loadingSourceDatasets.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sourceDatasets.value, (ds) => {
                return openBlock(), createElementBlock("option", {
                  key: ds,
                  value: ds
                }, toDisplayString(ds), 9, _hoisted_4$5);
              }), 128)) : createCommentVNode("", true),
              loadingSourceDatasets.value ? (openBlock(), createElementBlock("option", _hoisted_5$5, "Loading...")) : createCommentVNode("", true)
            ], 2), [
              [vModelSelect, sourceDataset.value]
            ])
          ]),
          _: 1
        }),
        createVNode(_sfc_main$a, {
          title: "How long should we keep snapshots?",
          description: "Choose how long to keep old snapshots. Turn on \u201CForever\u201D to keep everything."
        }, {
          footer: withCtx(() => [..._cache[23] || (_cache[23] = [
            createBaseVNode("p", { class: "text-[11px] text-muted" }, " Tip: \u201CForever\u201D keeps all snapshots. If a schedule is paused longer than your chosen time, older snapshots may be cleaned up when it resumes. ", -1)
          ])]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_6$5, [
              _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-sm font-medium text-default" }, "Retention", -1)),
              createBaseVNode("label", _hoisted_7$5, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => keepForever.value = $event),
                  class: "h-4 w-4 rounded"
                }, null, 512), [
                  [vModelCheckbox, keepForever.value]
                ]),
                _cache[20] || (_cache[20] = createTextVNode(" Forever ", -1))
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["grid grid-cols-3 gap-2 mt-2", keepForever.value ? "opacity-50 pointer-events-none" : ""])
            }, [
              withDirectives(createBaseVNode("input", {
                type: "number",
                min: "1",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => retentionTime.value = $event),
                class: "col-span-1 block w-full input-textlike sm:text-sm bg-default text-default"
              }, null, 512), [
                [
                  vModelText,
                  retentionTime.value,
                  void 0,
                  { number: true }
                ]
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => retentionUnit.value = $event),
                class: "col-span-2 block w-full input-textlike sm:text-sm bg-default text-default"
              }, [..._cache[22] || (_cache[22] = [
                createBaseVNode("option", { value: "hours" }, "hours", -1),
                createBaseVNode("option", { value: "days" }, "days", -1),
                createBaseVNode("option", { value: "weeks" }, "weeks", -1),
                createBaseVNode("option", { value: "months" }, "months", -1),
                createBaseVNode("option", { value: "years" }, "years", -1)
              ])], 512), [
                [vModelSelect, retentionUnit.value]
              ])
            ], 2)
          ]),
          _: 1
        })
      ])) : (openBlock(), createElementBlock("div", _hoisted_8$5, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_9$5, [
          createBaseVNode("div", _hoisted_10$5, [
            createVNode(_sfc_main$8, {
              width: "w-20",
              height: "h-20",
              baseColor: "text-gray-200",
              fillColor: "fill-gray-500"
            })
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_11$5, [
          createBaseVNode("div", _hoisted_12$5, [
            createBaseVNode("div", _hoisted_13$4, [
              _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-base leading-6 text-default" }, "Filesystem to Snapshot", -1)),
              createBaseVNode("div", _hoisted_14$3, [
                _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-xs text-default" }, "Custom", -1)),
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => useCustomSource.value = $event),
                  class: "h-4 w-4 rounded"
                }, null, 512), [
                  [vModelCheckbox, useCustomSource.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_15$3, [
              createBaseVNode("div", _hoisted_16$3, [
                _cache[26] || (_cache[26] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Pool", -1)),
                sourcePoolErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "mt-1 w-5 h-5 text-danger"
                })) : createCommentVNode("", true)
              ]),
              useCustomSource.value ? (openBlock(), createElementBlock("div", _hoisted_17$2, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sourcePool.value = $event),
                  class: normalizeClass([
                    "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                    customSrcPoolErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "Specify Pool"
                }, null, 2), [
                  [vModelText, sourcePool.value]
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_18$2, [
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sourcePool.value = $event),
                  class: normalizeClass([
                    "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                    sourcePoolErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ])
                }, [
                  _cache[27] || (_cache[27] = createBaseVNode("option", { value: "" }, "Select a Pool", -1)),
                  !loadingSourcePools.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sourcePools.value, (pool) => {
                    return openBlock(), createElementBlock("option", { value: pool }, toDisplayString(pool), 9, _hoisted_19$2);
                  }), 256)) : createCommentVNode("", true),
                  loadingSourcePools.value ? (openBlock(), createElementBlock("option", _hoisted_20$2, "Loading...")) : createCommentVNode("", true)
                ], 2), [
                  [vModelSelect, sourcePool.value]
                ])
              ]))
            ]),
            createBaseVNode("div", _hoisted_21$2, [
              createBaseVNode("div", _hoisted_22$2, [
                _cache[28] || (_cache[28] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Dataset", -1)),
                sourceDatasetErrorTag.value || customSrcDatasetErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "mt-1 w-5 h-5 text-danger"
                })) : createCommentVNode("", true)
              ]),
              useCustomSource.value ? (openBlock(), createElementBlock("div", _hoisted_23$2, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => sourceDataset.value = $event),
                  class: normalizeClass([
                    "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                    customSrcDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "Specify Dataset"
                }, null, 2), [
                  [vModelText, sourceDataset.value]
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_24$2, [
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sourceDataset.value = $event),
                  class: normalizeClass([
                    "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                    sourceDatasetErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ])
                }, [
                  _cache[29] || (_cache[29] = createBaseVNode("option", { value: "" }, "Select a Dataset", -1)),
                  !loadingSourceDatasets.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sourceDatasets.value, (dataset) => {
                    return openBlock(), createElementBlock("option", { value: dataset }, toDisplayString(dataset), 9, _hoisted_25$2);
                  }), 256)) : createCommentVNode("", true),
                  loadingSourceDatasets.value ? (openBlock(), createElementBlock("option", _hoisted_26$2, "Loading...")) : createCommentVNode("", true)
                ], 2), [
                  [vModelSelect, sourceDataset.value]
                ])
              ]))
            ]),
            createBaseVNode("div", _hoisted_27$2, [
              createBaseVNode("div", _hoisted_28$2, [
                createBaseVNode("label", _hoisted_29$2, [
                  _cache[30] || (_cache[30] = createTextVNode(" Retention Policy ", -1)),
                  createVNode(_sfc_main$9, {
                    class: "ml-1",
                    title: `How long to keep snapshots for. Leave at 0 to keep ALL snapshots.
WARNING: Disabling an automated task's schedule for a period of time longer than the retention interval and re-enabling the schedule may result in a purge of snapshots.`
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_30$2, [
                withDirectives(createBaseVNode("input", {
                  type: "number",
                  min: "0",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => retentionTime.value = $event),
                  class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                  placeholder: ""
                }, null, 512), [
                  [vModelText, retentionTime.value]
                ]),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => retentionUnit.value = $event),
                  class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                }, [
                  _cache[31] || (_cache[31] = createBaseVNode("option", { value: "" }, "Select a Retention Interval", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(retentionUnitOptions.value, (option) => {
                    return openBlock(), createElementBlock("option", {
                      key: option,
                      value: option
                    }, toDisplayString(option), 9, _hoisted_31$2);
                  }), 128))
                ], 512), [
                  [vModelSelect, retentionUnit.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_32$2, [
              createBaseVNode("div", _hoisted_33$2, [
                createBaseVNode("div", _hoisted_34$2, [
                  _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Use Custom Name Schema?", -1)),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => useCustomName.value = $event),
                    class: "h-4 w-4 rounded"
                  }, null, 512), [
                    [vModelCheckbox, useCustomName.value]
                  ])
                ]),
                customNameErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "mt-2 w-5 h-5 text-danger"
                })) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_35$2, [
                useCustomName.value ? withDirectives((openBlock(), createElementBlock("input", {
                  key: 0,
                  type: "text",
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => customName.value = $event),
                  class: normalizeClass([
                    "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default placeholder:text-xs",
                    customNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "Name is CustomName + TaskName + Timestamp"
                }, null, 2)), [
                  [vModelText, customName.value]
                ]) : withDirectives((openBlock(), createElementBlock("input", {
                  key: 1,
                  disabled: "",
                  type: "text",
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => customName.value = $event),
                  class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default placeholder:text-xs",
                  placeholder: "Name is TaskName + Timestamp"
                }, null, 512)), [
                  [vModelText, customName.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_36$2, [
                _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Recursive Snapshots", -1)),
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => sendRecursive.value = $event),
                  class: "h-4 w-4 rounded"
                }, null, 512), [
                  [vModelCheckbox, sendRecursive.value]
                ])
              ])
            ])
          ])
        ]))
      ]));
    };
  }
});
const DEBUG_TAG = "[useUserScopedFolderListByInstall]";
const warn = (...a) => console.warn(DEBUG_TAG, ...a);
const err = (...a) => console.error(DEBUG_TAG, ...a);
const sanitize = (s2) => s2.replace(/["'`\\]/g, "");
const textDecoder = new TextDecoder("utf-8");
async function runCommand(argv, opts = { superuser: "try" }) {
  const proc = await unwrap(
    server.execute(new Command(argv, opts))
  );
  const rawStdout = proc.stdout;
  const rawStderr = proc.stderr;
  const stdout = rawStdout instanceof Uint8Array ? textDecoder.decode(rawStdout) : String(rawStdout != null ? rawStdout : "");
  const stderr = rawStderr instanceof Uint8Array ? textDecoder.decode(rawStderr) : String(rawStderr != null ? rawStderr : "");
  return { stdout, stderr, exitStatus: proc.exitStatus };
}
async function runWithLog(label, argv) {
  var _a;
  const started = Date.now();
  try {
    const res = await runCommand(argv, { superuser: "try" });
    if (res.stderr) {
      warn(label, "stderr:", res.stderr.slice(0, 500));
    }
    return res;
  } catch (e) {
    const dt = Date.now() - started;
    err(label, "FAILED in", dt + "ms:", (_a = e == null ? void 0 : e.message) != null ? _a : String(e));
    throw e;
  }
}
async function listShareRoots() {
  const script = `
    set -euo pipefail
    out=""
    if command -v testparm >/dev/null 2>&1; then
      out="$(testparm -s 2>/dev/null || true)"
    fi
    if [ -z "$out" ] && [ -f /etc/samba/smb.conf ]; then
      out="$(cat /etc/samba/smb.conf)"
    fi
    if [ -z "$out" ] && [ -f /etc/cockpit/zfs/shares.conf ]; then
      out="$(cat /etc/cockpit/zfs/shares.conf)"
    fi

    awk '
      BEGIN{IGNORECASE=1; sec=""; name=""}
      /^\\[/ {
        sec=$0; gsub(/[][]/,"",sec);
        gsub(/^[ \\t]+|[ \\t]+$/,"",sec);
        name=sec; next
      }
      /^[ \\t]*path[ \\t]*=/ {
        n=index($0,"="); if (n>0) {
          p=substr($0,n+1); gsub(/^[ \\t]+|[ \\t]+$/,"",p);
          if (name!="" && name!="global") print name "|" p
        }
      }
    ' <<< "$out" | sed '/^$/d'
  `;
  const res = await runWithLog("listShareRoots", ["bash", "-lc", script]);
  const lines = (res.stdout || "").trim().split("\n").filter(Boolean);
  const parsed = lines.map((l2) => {
    const [name, path] = l2.split("|");
    return { name, path };
  });
  return parsed;
}
async function readInstallMeta(pathAbs, installId) {
  const P = sanitize(pathAbs);
  const ID = sanitize(installId);
  const script = `
    set -euo pipefail
    R="$(realpath -m "${P}")" || exit 0
    [ -d "$R" ] || exit 0
    for U in "$R"/*; do
      [ -d "$U" ] || continue
      CJ="$U/.houston/client.json"
      [ -f "$CJ" ] || continue

      if command -v jq >/dev/null 2>&1; then
        iid="$(jq -r '.install_id // empty' "$CJ" 2>/dev/null || true)"
        if [ "$iid" = "${ID}" ]; then
          su="$(jq -r '.smb_user // empty' "$CJ" 2>/dev/null || true)"
          hn="$(jq -r '.host // empty'      "$CJ" 2>/dev/null || true)"
          src="$(jq -r '.source // empty'    "$CJ" 2>/dev/null || true)"
          printf '%s|%s|%s|%s
' "$su" "$hn" "$src" "$(basename "$U")"
          exit 0
        fi
      else
        # Fallback: split by commas, then by quotes; pick the record whose key ($2) matches.
        iid="$(awk -v RS=',' -F'"' '$2=="install_id"{print $4; exit}' "$CJ" || true)"
        if [ "$iid" = "${ID}" ]; then
          su="$(awk -v RS=',' -F'"' '$2=="smb_user"{print $4; exit}' "$CJ" || true)"
          hn="$(awk -v RS=',' -F'"' '$2=="host"{print $4; exit}'      "$CJ" || true)"
          src="$(awk -v RS=',' -F'"' '$2=="source"{print $4; exit}'    "$CJ" || true)"
          printf '%s|%s|%s|%s
' "$su" "$hn" "$src" "$(basename "$U")"
          exit 0
        fi
      fi
    done
  `;
  const res = await runWithLog("readInstallMeta", ["bash", "-lc", script]);
  const out = (res.stdout || "").trim();
  if (!out)
    return null;
  const [smbUser, host, source, uuid] = out.split("|");
  return { smbUser, host, source, uuid };
}
async function readAllMetasForUser(pathAbs, smbUser) {
  const P = sanitize(pathAbs);
  const U2 = sanitize(smbUser);
  const script = `
    set -euo pipefail
    R="$(realpath -m "${P}")" || exit 0
    [ -d "$R" ] || exit 0
    for D in "$R"/*; do
      [ -d "$D" ] || continue
      CJ="$D/.houston/client.json"
      [ -f "$CJ" ] || continue

      if command -v jq >/dev/null 2>&1; then
        su="$(jq -r '.smb_user // empty' "$CJ" 2>/dev/null || true)"
        [ "$su" = "${U2}" ] || continue
        hn="$(jq -r '.host // empty'      "$CJ" 2>/dev/null || true)"
        src="$(jq -r '.source // empty'    "$CJ" 2>/dev/null || true)"
      else
        su="$(awk -v RS=',' -F'"' '$2=="smb_user"{print $4; exit}' "$CJ" || true)"
        [ "$su" = "${U2}" ] || continue
        hn="$(awk -v RS=',' -F'"' '$2=="host"{print $4; exit}'      "$CJ" || true)"
        src="$(awk -v RS=',' -F'"' '$2=="source"{print $4; exit}'    "$CJ" || true)"
      fi

      printf '%s|%s|%s
' "$(basename "$D")" "$hn" "$src"
    done | sed '/^$/d'
  `;
  const res = await runWithLog("readAllMetasForUser", ["bash", "-lc", script]);
  return (res.stdout || "").trim().split("\n").filter(Boolean).map((line) => {
    const [uuid, host, source] = line.split("|");
    return { uuid, host, source };
  });
}
function useUserScopedFolderListByInstall(installIdRef, depth = 2) {
  ref("");
  const shareRoot = ref("");
  const smbUser = ref("");
  const uuids = ref([]);
  const absDirs = ref([]);
  const relDirs = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const ensureSlash = (p) => p && !p.endsWith("/") ? `${p}/` : p;
  const underRoot = (p) => {
    const base = ensureSlash(shareRoot.value.replace(/\/+$/, ""));
    const full = ensureSlash((p || "").replace(/\/+$/, ""));
    return !base || full.startsWith(base);
  };
  async function refresh() {
    var _a;
    const installId = (installIdRef.value || "").trim();
    loading.value = true;
    error.value = null;
    try {
      let normSource = function(src) {
        const noLead = String(src || "").replace(/^\/+/, "");
        return noLead.endsWith("/") ? noLead : noLead + "/";
      };
      if (!installId) {
        shareRoot.value = "";
        smbUser.value = "";
        uuids.value = [];
        absDirs.value = [];
        relDirs.value = [];
        return;
      }
      const roots = await listShareRoots();
      let chosenRoot = "";
      let user = "";
      let metaFromInstall = null;
      for (const r of roots) {
        const m = await readInstallMeta(r.path, installId);
        if (m) {
          chosenRoot = r.path;
          user = m.smbUser;
          metaFromInstall = m;
          break;
        }
      }
      shareRoot.value = chosenRoot ? ensureSlash(chosenRoot) : "";
      smbUser.value = user;
      if (!shareRoot.value || !smbUser.value) {
        uuids.value = [];
        absDirs.value = [];
        relDirs.value = [];
        return;
      }
      const metas = await readAllMetasForUser(shareRoot.value, smbUser.value);
      const abs = [];
      const rel = [];
      for (const m of metas) {
        const tail = `${m.uuid}/${m.host}/${normSource(m.source)}`;
        rel.push(tail);
        abs.push(ensureSlash(`${shareRoot.value}${tail}`));
      }
      absDirs.value = Array.from(new Set(abs));
      relDirs.value = Array.from(new Set(rel));
      uuids.value = Array.from(new Set(metas.map((m) => m.uuid)));
    } catch (e) {
      error.value = (_a = e == null ? void 0 : e.message) != null ? _a : String(e);
      shareRoot.value = "";
      smbUser.value = "";
      uuids.value = [];
      absDirs.value = [];
      relDirs.value = [];
    } finally {
      loading.value = false;
    }
  }
  watch(installIdRef, () => {
    void refresh();
  }, { immediate: true });
  return { shareRoot, smbUser, uuids, absDirs, relDirs, loading, error, refresh, underRoot };
}
const _hoisted_1$5 = {
  key: 0,
  class: "space-y-4 my-2"
};
const _hoisted_2$4 = {
  key: 0,
  class: "mt-2 flex items-center gap-2"
};
const _hoisted_3$4 = {
  key: 1,
  class: "mt-2 p-2 rounded bg-danger/10 text-danger text-sm"
};
const _hoisted_4$4 = { class: "mt-1 text-xs text-default/70" };
const _hoisted_5$4 = { key: 2 };
const _hoisted_6$4 = ["value"];
const _hoisted_7$4 = { class: "text-[11px] text-muted mt-1" };
const _hoisted_8$4 = { key: 0 };
const _hoisted_9$4 = {
  key: 3,
  class: "mt-1"
};
const _hoisted_10$4 = {
  key: 1,
  disabled: "",
  class: "btn btn-secondary h-fit"
};
const _hoisted_11$4 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_12$4 = ["disabled"];
const _hoisted_13$3 = { class: "relative mt-1" };
const _hoisted_14$2 = ["type", "disabled"];
const _hoisted_15$2 = ["aria-label"];
const _hoisted_16$2 = { key: 1 };
const _hoisted_17$1 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_18$1 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_19$1 = {
  key: 1,
  class: "grid grid-cols-2 my-2 gap-2 h-full",
  style: { "grid-template-rows": "auto auto 1fr" }
};
const _hoisted_20$1 = {
  name: "paths-data",
  class: "border border-default rounded-md p-2 col-span-1 row-start-1 row-span-1 bg-accent",
  style: { "grid-row": "1 / span 1" }
};
const _hoisted_21$1 = { name: "source-path" };
const _hoisted_22$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_23$1 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_24$1 = { name: "destination-path" };
const _hoisted_25$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_26$1 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_27$1 = {
  name: "direction",
  class: ""
};
const _hoisted_28$1 = { class: "w-full mt-2 flex flex-row justify-between items-center text-center space-x-2 text-default" };
const _hoisted_29$1 = {
  key: 0,
  class: ""
};
const _hoisted_30$1 = {
  key: 1,
  class: ""
};
const _hoisted_31$1 = { class: "w-full mt-2 justify-center items-center" };
const _hoisted_32$1 = { class: "flex flex-row justify-around text-center items-center space-x-1 bg-plugin-header rounded-lg p-2" };
const _hoisted_33$1 = { class: "relative flex items-center justify-around" };
const _hoisted_34$1 = {
  name: "destination-ssh-data",
  class: "border border-default rounded-md p-2 col-span-1 bg-accent",
  style: { "grid-row": "1 / span 1" }
};
const _hoisted_35$1 = { class: "grid grid-cols-2" };
const _hoisted_36$1 = { class: "col-span-1 items-end text-end justify-end" };
const _hoisted_37$1 = {
  key: 0,
  disabled: "",
  class: "mt-0.5 btn btn-secondary object-right justify-end h-fit"
};
const _hoisted_38$1 = {
  name: "destination-host",
  class: "mt-1"
};
const _hoisted_39$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_40$1 = {
  name: "destination-user",
  class: "mt-1"
};
const _hoisted_41$1 = {
  name: "destination-port",
  class: "mt-1"
};
const _hoisted_42$1 = {
  name: "send-options",
  class: "border border-default rounded-md p-2 col-span-2 row-span-1 row-start-2 bg-accent",
  style: { "grid-row": "2 / span 1" }
};
const _hoisted_43$1 = { class: "grid grid-cols-4 gap-4" };
const _hoisted_44$1 = { class: "col-span-1" };
const _hoisted_45$1 = {
  name: "options-archive",
  class: "flex flex-row justify-between items-center mt-1 col-span-1"
};
const _hoisted_46$1 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_47$1 = {
  name: "options-recursive",
  class: "flex flex-row justify-between items-center mt-1 col-span-1"
};
const _hoisted_48$1 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_49$1 = {
  name: "options-compressed",
  class: "flex flex-row justify-between items-center mt-1 col-span-1"
};
const _hoisted_50$1 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_51$1 = {
  name: "options-preserve-times",
  class: "flex flex-row justify-between items-center mt-1 col-span-1"
};
const _hoisted_52$1 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_53$1 = {
  name: "options-delete",
  class: "flex flex-row justify-between items-center mt-1 col-span-1"
};
const _hoisted_54$1 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_55$1 = {
  name: "options-quiet",
  class: "flex flex-row justify-between items-center mt-1 col-span-1"
};
const _hoisted_56$1 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_57$1 = { class: "-mt-1 col-span-3 grid grid-cols-2 gap-2" };
const _hoisted_58$1 = { class: "grid grid-cols-2 col-span-2 gap-2 w-full justify-center items-center text-center" };
const _hoisted_59$1 = {
  name: "options-include",
  class: "col-span-1"
};
const _hoisted_60$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_61$1 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_62$1 = {
  name: "options-exclude",
  class: "col-span-1"
};
const _hoisted_63$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_64$1 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_65$1 = {
  name: "options-log-file-path",
  class: "col-span-1"
};
const _hoisted_66$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_67$1 = { class: "block text-sm leading-6 text-default" };
const _hoisted_68$1 = {
  name: "options-extra-params",
  class: "col-span-1"
};
const _hoisted_69$1 = { class: "flex flex-row justify-between items-center" };
const _hoisted_70$1 = { class: "block text-sm leading-6 text-default" };
const _hoisted_71$1 = { class: "col-span-4" };
const _hoisted_72$1 = { class: "m-1" };
const _hoisted_73$1 = { class: "w-full grid grid-cols-4 gap-4 bg-default p-4 -mt-1" };
const _hoisted_74$1 = { class: "col-span-2 grid grid-cols-2 gap-2" };
const _hoisted_75$1 = {
  name: "options-preserve-hard-links",
  class: "flex items-center gap-2 mt-1 col-span-1"
};
const _hoisted_76$1 = {
  name: "options-preserve-extended-attributes",
  class: "flex items-center gap-2 mt-1 col-span-1"
};
const _hoisted_77$1 = {
  name: "options-limit-bw",
  class: "col-span-2"
};
const _hoisted_78$1 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_79$1 = { class: "col-span-2 grid grid-cols-2 gap-2" };
const _hoisted_80$1 = {
  name: "options-preserve-permissions",
  class: "flex items-center gap-2 mt-1 col-span-1"
};
const _hoisted_81$1 = {
  name: "options-parallel",
  class: "flex items-center gap-2 mt-1 col-span-1"
};
const _hoisted_82$1 = { class: "text-sm leading-6 text-default flex items-center" };
const _hoisted_83$1 = {
  name: "options-parallel-threads",
  class: "col-span-1"
};
const _hoisted_84$1 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_85$1 = ["disabled"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RsyncTaskParams",
  props: {
    parameterSchema: {},
    task: {},
    simple: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const parameters = inject("parameters");
    const initialParameters = ref({});
    const sourcePath = ref("");
    const sourcePathErrorTag = ref(false);
    const destPath = ref("");
    const destPathErrorTag = ref(false);
    const destRoot = ref("");
    const destHost = ref("");
    const destHostErrorTag = ref(false);
    const destPort = ref(22);
    const destUser = ref("root");
    const destUserPass = ref("");
    const showPassword = ref(false);
    const directionSwitched = ref(false);
    const isArchive = ref(true);
    const isRecursive = ref(false);
    const isCompressed = ref(false);
    const isQuiet = ref(false);
    const deleteFiles = ref(false);
    const isDeleteErrorTag = ref(false);
    const preserveTimes = ref(false);
    const preserveHardLinks = ref(false);
    const preservePerms = ref(false);
    const preserveXattr = ref(false);
    const logFilePath = ref("");
    const limitBandwidthKbps = ref(0);
    const includePattern = ref("");
    const excludePattern = ref("");
    const isParallel = ref(false);
    const parallelThreads = ref(0);
    const extraUserParams = ref("");
    const testingSSH = ref(false);
    const sshTestResult = ref(false);
    const errorList = inject("errors");
    const sshReady = ref(false);
    async function handleTestSSH() {
      testingSSH.value = true;
      try {
        const res = await testOrSetupSSH({
          host: destHost.value,
          user: destUser.value || "root",
          port: destPort.value || 22,
          passwordRef: destUserPass,
          onEvent: ({ type, title, message }) => {
            pushNotification(new Notification(title, message, type, type === "info" ? 6e3 : 6e3));
          }
        });
        sshReady.value = res.success;
      } finally {
        testingSSH.value = false;
      }
    }
    function ensureTrailingSlash(which) {
      if (which === "source") {
        if (sourcePath.value && !sourcePath.value.endsWith("/"))
          sourcePath.value += "/";
      } else {
        if (destPath.value && !destPath.value.endsWith("/"))
          destPath.value += "/";
      }
    }
    const ctx = useClientContextStore();
    const allowContextFallback = ref(false);
    function parseFromHash() {
      const m = (window.location.hash || "").match(/[?&]client_id=([^&#]+)/);
      return m ? decodeURIComponent(m[1]) : "";
    }
    const installId = computed(() => {
      const fromHash = parseFromHash();
      return fromHash || (allowContextFallback.value ? ctx.clientId || "" : "");
    });
    console.log("[RsyncTaskParams] client_id =", installId.value);
    const folderList = useUserScopedFolderListByInstall(installId, 2);
    console.log("[RsyncTaskParams] folderList created");
    watchEffect(() => {
      console.log(
        "[folderList state]",
        "loading=",
        folderList.loading.value,
        "error=",
        folderList.error.value,
        "shareRoot=",
        folderList.shareRoot.value,
        "smbUser=",
        folderList.smbUser.value,
        "uuids=",
        folderList.uuids.value,
        "abs=",
        folderList.absDirs.value.length
      );
    });
    const loadingFolders = folderList.loading;
    const discoveryError = folderList.error;
    const shareRoot = computed(() => folderList.shareRoot.value);
    const smbUser = computed(() => folderList.smbUser.value);
    const isEditMode = computed(() => !!props.task);
    function prettyLabelFromAbs(abs) {
      const root = shareRoot.value || "";
      if (!abs.startsWith(root))
        return abs;
      const rel = abs.slice(root.length).replace(/^\/+/, "");
      const parts = rel.split("/").filter(Boolean);
      return parts.length >= 2 ? parts.slice(1).join("/") + "/" : rel + "/";
    }
    const opts = computed(
      () => {
        var _a;
        return ((_a = folderList.absDirs.value) != null ? _a : []).map((abs) => ({
          value: abs,
          label: prettyLabelFromAbs(abs)
        }));
      }
    );
    watch(opts, (list) => {
      if (!props.simple || isEditMode.value)
        return;
      if (!list.length)
        return;
      if (!sourcePath.value || !folderList.underRoot(sourcePath.value)) {
        sourcePath.value = list[0].value;
      }
    }, { immediate: true });
    watch([() => folderList.absDirs.value, () => folderList.shareRoot.value], ([abs]) => {
      if (!props.simple || isEditMode.value)
        return;
      const list = abs || [];
      if (!list.length)
        return;
      if (!sourcePath.value || !folderList.underRoot(sourcePath.value)) {
        sourcePath.value = list[0];
      }
    }, { immediate: true });
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    async function initializeData() {
      if (props.task) {
        loading.value = true;
        const params = props.task.parameters.children;
        sourcePath.value = params.find((p) => p.key === "local_path").value;
        const targetInfoParams = params.find((p) => p.key === "target_info").children;
        destPath.value = targetInfoParams.find((p) => p.key === "path").value;
        destHost.value = targetInfoParams.find((p) => p.key === "host").value;
        destUser.value = targetInfoParams.find((p) => p.key === "user").value;
        destRoot.value = targetInfoParams.find((p) => p.key === "root").value;
        destPort.value = targetInfoParams.find((p) => p.key === "port").value;
        const transferDirection = params.find((p) => p.key === "direction").value;
        directionSwitched.value = transferDirection === "pull";
        const rsyncOptions = params.find((p) => p.key === "rsyncOptions").children;
        const logFileParam = rsyncOptions.find((p) => p.key === "log_file_path");
        logFilePath.value = logFileParam ? logFileParam.value : "";
        isArchive.value = rsyncOptions.find((p) => p.key === "archive_flag").value;
        isRecursive.value = rsyncOptions.find((p) => p.key === "recursive_flag").value;
        isCompressed.value = rsyncOptions.find((p) => p.key === "compressed_flag").value;
        isQuiet.value = rsyncOptions.find((p) => p.key === "quiet_flag").value;
        deleteFiles.value = rsyncOptions.find((p) => p.key === "delete_flag").value;
        preserveTimes.value = rsyncOptions.find((p) => p.key === "times_flag").value;
        preserveHardLinks.value = rsyncOptions.find((p) => p.key === "hardLinks_flag").value;
        preservePerms.value = rsyncOptions.find((p) => p.key === "permissions_flag").value;
        preserveXattr.value = rsyncOptions.find((p) => p.key === "xattr_flag").value;
        const bw = rsyncOptions.find((p) => p.key === "bandwidth_limit_kbps").value;
        limitBandwidthKbps.value = parseInt(bw) === 0 ? 0 : bw;
        includePattern.value = rsyncOptions.find((p) => p.key === "include_pattern").value.replace(/^'|'$/g, "");
        excludePattern.value = rsyncOptions.find((p) => p.key === "exclude_pattern").value.replace(/^'|'$/g, "");
        extraUserParams.value = rsyncOptions.find((p) => p.key === "custom_args").value.replace(/^'|'$/g, "");
        isParallel.value = rsyncOptions.find((p) => p.key === "parallel_flag").value;
        parallelThreads.value = rsyncOptions.find((p) => p.key === "parallel_threads").value;
        initialParameters.value = JSON.parse(JSON.stringify({
          sourcePath: sourcePath.value,
          destPath: destPath.value,
          destHost: destHost.value,
          destUser: destUser.value,
          destRoot: destRoot.value,
          destPort: destPort.value,
          directionSwitched: directionSwitched.value,
          isArchive: isArchive.value,
          isRecursive: isRecursive.value,
          isCompressed: isCompressed.value,
          isQuiet: isQuiet.value,
          deleteFiles: deleteFiles.value,
          preserveTimes: preserveTimes.value,
          preserveHardLinks: preserveHardLinks.value,
          preservePerms: preservePerms.value,
          preserveXattr: preserveXattr.value,
          limitBandwidthKbps: limitBandwidthKbps.value,
          includePattern: includePattern.value,
          excludePattern: excludePattern.value,
          extraUserParams: extraUserParams.value,
          isParallel: isParallel.value,
          parallelThreads: parallelThreads.value,
          logFilePath: logFilePath.value
        }));
        loading.value = false;
      }
    }
    function hasChanges() {
      const currentParams = {
        sourcePath: sourcePath.value,
        destPath: destPath.value,
        destHost: destHost.value,
        destUser: destUser.value,
        destRoot: destRoot.value,
        destPort: destPort.value,
        directionSwitched: directionSwitched.value,
        isArchive: isArchive.value,
        isRecursive: isRecursive.value,
        isCompressed: isCompressed.value,
        isQuiet: isQuiet.value,
        deleteFiles: deleteFiles.value,
        preserveTimes: preserveTimes.value,
        preserveHardLinks: preserveHardLinks.value,
        preservePerms: preservePerms.value,
        preserveXattr: preserveXattr.value,
        limitBandwidthKbps: limitBandwidthKbps.value,
        includePattern: includePattern.value,
        excludePattern: excludePattern.value,
        extraUserParams: extraUserParams.value,
        isParallel: isParallel.value,
        parallelThreads: parallelThreads.value,
        logFilePath: logFilePath.value
      };
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    function validateHost() {
      destHostErrorTag.value = false;
      if (destHost.value !== "") {
        if (destHost.value.length < 1 || destHost.value.length > 253) {
          errorList.value.push("Hostname must be between 1 and 253 characters in length.");
          destHostErrorTag.value = true;
        }
        const hostRegex = /^(?!-)(?:(?:[a-zA-Z0-9]-*)*[a-zA-Z0-9]\.?)+$/;
        if (!hostRegex.test(destHost.value)) {
          errorList.value.push("Hostname must only contain ASCII letters (a-z, case-insensitive), digits (0-9), and hyphens ('-'), with no trailing dot.");
          destHostErrorTag.value = true;
        }
      }
    }
    function validatePath(path) {
      return validateLocalPath(path);
    }
    function validateSourcePath() {
      if (validatePath(sourcePath.value)) {
        if (!sourcePath.value.endsWith("/")) {
          sourcePath.value += "/";
        }
        return true;
      } else {
        errorList.value.push("Source path is invalid.");
        sourcePathErrorTag.value = true;
        return false;
      }
    }
    function validateDestinationPath() {
      if (validatePath(destPath.value)) {
        if (!destPath.value.endsWith("/")) {
          destPath.value += "/";
        }
        return destPath.value;
      } else {
        errorList.value.push("Target path is invalid.");
        destPathErrorTag.value = true;
        return false;
      }
    }
    function validateDependantParams() {
      if (deleteFiles.value && !(isArchive.value || isRecursive.value)) {
        errorList.value.push("Delete Files requires either Archive or Recursive to be selected.");
        isDeleteErrorTag.value = true;
        return false;
      }
      isDeleteErrorTag.value = false;
      return true;
    }
    function sanitizeNumber(value) {
      if (isNaN(value) || value < 0) {
        return 0;
      }
      return value;
    }
    function clearErrorTags() {
      sourcePathErrorTag.value = false;
      destPathErrorTag.value = false;
      destHostErrorTag.value = false;
      isDeleteErrorTag.value = false;
      errorList.value = [];
    }
    async function validateParams() {
      validateSourcePath();
      validateHost();
      validateDestinationPath();
      validateDependantParams();
      limitBandwidthKbps.value = sanitizeNumber(limitBandwidthKbps.value);
      const noErrors = errorList.value.length === 0 && sourcePathErrorTag.value === false && destPathErrorTag.value === false && destHostErrorTag.value === false && isDeleteErrorTag.value === false;
      if (noErrors) {
        setParams();
      }
    }
    function setParams() {
      const directionPUSH = new SelectionOption("push", "Push");
      const directionPULL = new SelectionOption("pull", "Pull");
      const transferDirection = ref();
      transferDirection.value = directionSwitched.value ? directionPULL : directionPUSH;
      const newParams = new ParameterNode("Rsync Task Config", "rsyncConfig").addChild(new StringParameter("Local Path", "local_path", sourcePath.value)).addChild(
        new LocationParameter(
          "Target Information",
          "target_info",
          destHost.value,
          destPort.value,
          destUser.value,
          destRoot.value,
          destPath.value
        )
      ).addChild(new SelectionParameter("Direction", "direction", transferDirection.value.value)).addChild(
        new ParameterNode("Rsync Options", "rsyncOptions").addChild(new StringParameter("Log File Path", "log_file_path", logFilePath.value)).addChild(new BoolParameter("Archive", "archive_flag", isArchive.value)).addChild(new BoolParameter("Recursive", "recursive_flag", isRecursive.value)).addChild(new BoolParameter("Compressed", "compressed_flag", isCompressed.value)).addChild(new BoolParameter("Delete", "delete_flag", deleteFiles.value)).addChild(new BoolParameter("Quiet", "quiet_flag", isQuiet.value)).addChild(new BoolParameter("Preserve Times", "times_flag", preserveTimes.value)).addChild(new BoolParameter("Preserve Hard Links", "hardLinks_flag", preserveHardLinks.value)).addChild(new BoolParameter("Preserve Permissions", "permissions_flag", preservePerms.value)).addChild(new BoolParameter("Preserve Extended Attributes", "xattr_flag", preserveXattr.value)).addChild(new IntParameter("Limit Bandwidth", "bandwidth_limit_kbps", limitBandwidthKbps.value)).addChild(new StringParameter("Include", "include_pattern", `'${includePattern.value}'`)).addChild(new StringParameter("Exclude", "exclude_pattern", `'${excludePattern.value}'`)).addChild(new BoolParameter("Parallel Transfer", "parallel_flag", isParallel.value)).addChild(new IntParameter("Threads", "parallel_threads", parallelThreads.value)).addChild(new StringParameter("Additional Custom Arguments", "custom_args", `'${extraUserParams.value}'`))
      );
      parameters.value = newParams;
    }
    async function confirmTest(destHostVal, destUserVal) {
      testingSSH.value = true;
      const sshTarget = destUserVal + "@" + destHostVal;
      sshTestResult.value = await testSSH(sshTarget);
      if (sshTestResult.value) {
        pushNotification(
          new Notification(
            "Connection Successful!",
            "Passwordless SSH connection established. This host can be used for remote transfers.",
            "success",
            6e3
          )
        );
      } else {
        pushNotification(
          new Notification(
            "Connection Failed",
            `Could not resolve hostname "${destHostVal}": 
Name or service not known.
Make sure passwordless SSH connection has been configured for target system.`,
            "error",
            6e3
          )
        );
      }
      testingSSH.value = false;
    }
    onMounted(async () => {
      await initializeData();
    });
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return props.simple ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(_sfc_main$a, {
          title: "What do you want to copy?",
          description: "Choose a folder stored on this server that was\n            created by a client backup. This is the backed-up copy of your files, not your live PC."
        }, {
          default: withCtx(() => [
            _cache[38] || (_cache[38] = createBaseVNode("label", { class: "block text-sm mt-1 text-default" }, "From (Source)", -1)),
            unref(loadingFolders) ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
              createVNode(_sfc_main$8, {
                width: "w-5",
                height: "h-5",
                baseColor: "text-gray-200",
                fillColor: "fill-gray-500"
              }),
              _cache[34] || (_cache[34] = createBaseVNode("span", { class: "text-sm text-muted" }, "Discovering your folders\u2026", -1))
            ])) : unref(discoveryError) ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
              createTextVNode(toDisplayString(unref(discoveryError)) + " ", 1),
              createBaseVNode("div", _hoisted_4$4, [
                _cache[35] || (_cache[35] = createTextVNode(" You can still type a path manually below. ", -1)),
                createBaseVNode("button", {
                  class: "btn btn-xxs btn-secondary ml-2",
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(folderList).refresh())
                }, "Retry")
              ])
            ])) : opts.value.length ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sourcePath.value = $event),
                class: "input-textlike text-sm w-full text-default bg-default rounded-md"
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(opts.value, (opt) => {
                  return openBlock(), createElementBlock("option", {
                    key: opt.value,
                    value: opt.value
                  }, toDisplayString(opt.label), 9, _hoisted_6$4);
                }), 128))
              ], 512), [
                [vModelSelect, sourcePath.value]
              ]),
              createBaseVNode("p", _hoisted_7$4, [
                createTextVNode(" Scope: " + toDisplayString(shareRoot.value || "\u2014") + " ", 1),
                createBaseVNode("span", null, " \u2022 Full Path: " + toDisplayString(sourcePath.value), 1),
                smbUser.value ? (openBlock(), createElementBlock("span", _hoisted_8$4, " \u2022 User: " + toDisplayString(smbUser.value), 1)) : createCommentVNode("", true)
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_9$4, [
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sourcePath.value = $event),
                onBlur: _cache[3] || (_cache[3] = ($event) => ensureTrailingSlash("source")),
                class: normalizeClass([
                  "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                  sourcePathErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ]),
                placeholder: "e.g. /mnt/backup/projects/"
              }, null, 34), [
                [vModelText, sourcePath.value]
              ]),
              _cache[36] || (_cache[36] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, "No folders found; enter a path manually.", -1)),
              _cache[37] || (_cache[37] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, [
                createTextVNode(" Tip: Source should end with a "),
                createBaseVNode("code", null, "/"),
                createTextVNode(". We\u2019ll add it for you if missing. ")
              ], -1))
            ])),
            _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-sm mt-3 text-default" }, "To (Target)", -1)),
            withDirectives(createBaseVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => destPath.value = $event),
              onBlur: _cache[5] || (_cache[5] = ($event) => ensureTrailingSlash("dest")),
              class: normalizeClass([
                "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                destPathErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
              ]),
              placeholder: "e.g. /mnt/backup/projects/"
            }, null, 34), [
              [vModelText, destPath.value]
            ]),
            _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, [
              createTextVNode(" Tip: Target should end with a "),
              createBaseVNode("code", null, "/"),
              createTextVNode(". We\u2019ll add it for you if missing. ")
            ], -1))
          ]),
          _: 1
        }),
        createVNode(_sfc_main$a, {
          title: "Copy to another server (optional)",
          description: "Leave \u201CServer address\u201D empty to copy on this machine."
        }, {
          "header-right": withCtx(() => [
            !testingSSH.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: handleTestSSH,
              class: "btn btn-secondary h-fit"
            }, " Test SSH ")) : (openBlock(), createElementBlock("button", _hoisted_10$4, "Testing\u2026"))
          ]),
          footer: withCtx(() => [..._cache[44] || (_cache[44] = [
            createBaseVNode("p", { class: "text-[11px] text-muted" }, " We\u2019ll use SSH for remote copies. Keep the server field empty for local copies. ", -1)
          ])]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_11$4, [
              createBaseVNode("div", null, [
                _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-sm mt-3 text-default" }, "Server address", -1)),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => destHost.value = $event),
                  class: normalizeClass([
                    "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                    destHostErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "e.g. backup.example.com or 10.0.0.5"
                }, null, 2), [
                  [vModelText, destHost.value]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[42] || (_cache[42] = createBaseVNode("label", { class: "block text-sm mt-3 text-default" }, "User", -1)),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => destUser.value = $event),
                  class: "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                  placeholder: "root (default)",
                  disabled: !destHost.value
                }, null, 8, _hoisted_12$4), [
                  [vModelText, destUser.value]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[43] || (_cache[43] = createBaseVNode("label", {
                  class: "block text-sm mt-3 text-default",
                  for: "dest-pass"
                }, "Password", -1)),
                createBaseVNode("div", _hoisted_13$3, [
                  withDirectives(createBaseVNode("input", {
                    type: showPassword.value ? "text" : "password",
                    id: "dest-pass",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => destUserPass.value = $event),
                    class: "block w-full input-textlike sm:text-sm bg-default text-default pr-10",
                    disabled: !destHost.value
                  }, null, 8, _hoisted_14$2), [
                    [vModelDynamic, destUserPass.value]
                  ]),
                  createBaseVNode("button", {
                    type: "button",
                    onClick: togglePassword,
                    class: "absolute inset-y-0 right-0 px-3 flex items-center text-muted",
                    "aria-label": showPassword.value ? "Hide password" : "Show password"
                  }, [
                    !showPassword.value ? (openBlock(), createBlock(unref(render), {
                      key: 0,
                      class: "w-5 h-5"
                    })) : (openBlock(), createBlock(unref(render$1), {
                      key: 1,
                      class: "w-5 h-5"
                    }))
                  ], 8, _hoisted_15$2)
                ])
              ])
            ])
          ]),
          _: 1
        })
      ])) : (openBlock(), createElementBlock("div", _hoisted_16$2, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
          createBaseVNode("div", _hoisted_18$1, [
            createVNode(_sfc_main$8, {
              width: "w-20",
              height: "h-20",
              baseColor: "text-gray-200",
              fillColor: "fill-gray-500"
            })
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_19$1, [
          createBaseVNode("div", _hoisted_20$1, [
            _cache[50] || (_cache[50] = createBaseVNode("label", { class: "mt-1 mb-2 col-span-1 block text-base leading-6 text-default" }, "Transfer Details", -1)),
            createBaseVNode("div", _hoisted_21$1, [
              createBaseVNode("div", _hoisted_22$1, [
                createBaseVNode("label", _hoisted_23$1, [
                  _cache[45] || (_cache[45] = createTextVNode(" Source ", -1)),
                  createVNode(_sfc_main$9, {
                    class: "ml-1",
                    title: "Source directory must always have a trailing slash (If none is provided it will be added automatically.)"
                  })
                ]),
                sourcePathErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "mt-1 w-5 h-5 text-danger"
                })) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sourcePath.value = $event),
                  class: normalizeClass(["mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default", [sourcePathErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]]),
                  placeholder: "Specify Source Path"
                }, null, 2), [
                  [vModelText, sourcePath.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_24$1, [
              createBaseVNode("div", _hoisted_25$1, [
                createBaseVNode("label", _hoisted_26$1, [
                  _cache[46] || (_cache[46] = createTextVNode(" Target ", -1)),
                  createVNode(_sfc_main$9, {
                    class: "ml-1",
                    title: "Target directory must always have a trailing slash (If none is provided it will be added automatically.)"
                  })
                ]),
                destPathErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "mt-1 w-5 h-5 text-danger"
                })) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => destPath.value = $event),
                  class: normalizeClass(["mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default", [destPathErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]]),
                  placeholder: "Specify Target Path"
                }, null, 2), [
                  [vModelText, destPath.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_27$1, [
              createBaseVNode("div", _hoisted_28$1, [
                directionSwitched.value ? (openBlock(), createElementBlock("span", _hoisted_29$1, "Direction - Pull")) : (openBlock(), createElementBlock("span", _hoisted_30$1, "Direction - Push")),
                createVNode(unref(ue), {
                  modelValue: directionSwitched.value,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => directionSwitched.value = $event),
                  class: normalizeClass([directionSwitched.value ? "bg-secondary" : "bg-well", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"])
                }, {
                  default: withCtx(() => [
                    _cache[47] || (_cache[47] = createBaseVNode("span", { class: "sr-only" }, "Use setting", -1)),
                    createBaseVNode("span", {
                      "aria-hidden": "true",
                      class: normalizeClass([directionSwitched.value ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-default shadow ring-0 transition duration-200 ease-in-out"])
                    }, null, 2)
                  ]),
                  _: 1
                }, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_31$1, [
                createBaseVNode("div", _hoisted_32$1, [
                  _cache[48] || (_cache[48] = createBaseVNode("span", { class: "text-default" }, "Source", -1)),
                  createBaseVNode("div", _hoisted_33$1, [
                    createBaseVNode("span", {
                      class: normalizeClass([directionSwitched.value ? "rotate-180" : "", "flex items-center transition-transform duration-200"])
                    }, [
                      createVNode(unref(render$3), { class: "w-5 h-5 text-muted" })
                    ], 2),
                    createBaseVNode("span", {
                      class: normalizeClass([directionSwitched.value ? "rotate-180" : "", "flex items-center transition-transform duration-200"])
                    }, [
                      createVNode(unref(render$3), { class: "w-5 h-5 text-muted" })
                    ], 2),
                    createBaseVNode("span", {
                      class: normalizeClass([directionSwitched.value ? "rotate-180" : "", "flex items-center transition-transform duration-200"])
                    }, [
                      createVNode(unref(render$3), { class: "w-5 h-5 text-muted" })
                    ], 2)
                  ]),
                  _cache[49] || (_cache[49] = createBaseVNode("span", { class: "text-default" }, "Target", -1))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_34$1, [
            createBaseVNode("div", _hoisted_35$1, [
              _cache[52] || (_cache[52] = createBaseVNode("label", { class: "mt-1 col-span-1 block text-base leading-6 text-default" }, "Remote Target", -1)),
              createBaseVNode("div", _hoisted_36$1, [
                testingSSH.value ? (openBlock(), createElementBlock("button", _hoisted_37$1, [..._cache[51] || (_cache[51] = [
                  createBaseVNode("svg", {
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
                  ], -1),
                  createTextVNode(" Testing... ", -1)
                ])])) : (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: _cache[12] || (_cache[12] = ($event) => confirmTest(destHost.value, destUser.value)),
                  class: "mt-0.5 btn btn-secondary object-right justify-end h-fit"
                }, " Test SSH "))
              ])
            ]),
            createBaseVNode("div", _hoisted_38$1, [
              createBaseVNode("div", _hoisted_39$1, [
                _cache[53] || (_cache[53] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Host", -1)),
                destHostErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "mt-1 w-5 h-5 text-danger"
                })) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => destHost.value = $event),
                class: normalizeClass(["mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default", [destHostErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]]),
                placeholder: "Leave blank for local transfer."
              }, null, 2), [
                [vModelText, destHost.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_40$1, [
              _cache[54] || (_cache[54] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "User", -1)),
              destHost.value === "" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                disabled: "",
                type: "text",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => destUser.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: "'root' is default"
              }, null, 512)), [
                [vModelText, destUser.value]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                type: "text",
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => destUser.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                placeholder: "'root' is default"
              }, null, 512)), [
                [vModelText, destUser.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_41$1, [
              _cache[55] || (_cache[55] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Port", -1)),
              destHost.value === "" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                disabled: "",
                type: "number",
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => destPort.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                min: "0",
                max: "65535",
                placeholder: "22 is default"
              }, null, 512)), [
                [vModelText, destPort.value]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                type: "number",
                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => destPort.value = $event),
                class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                min: "0",
                max: "65535",
                placeholder: "22 is default"
              }, null, 512)), [
                [vModelText, destPort.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_42$1, [
            _cache[73] || (_cache[73] = createBaseVNode("label", { class: "mt-1 block text-base leading-6 text-default" }, "Rsync Options", -1)),
            createBaseVNode("div", _hoisted_43$1, [
              createBaseVNode("div", _hoisted_44$1, [
                createBaseVNode("div", _hoisted_45$1, [
                  createBaseVNode("label", _hoisted_46$1, [
                    _cache[56] || (_cache[56] = createTextVNode(" Archive ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Archive mode. Equivalent to Recursive + Preserve the following: Times, Symbolic Links, Permissions, Groups, Owner, Devices/Specials (cli flags: -rlptgoD)"
                    })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => isArchive.value = $event),
                    class: normalizeClass(["h-4 w-4 rounded", [isDeleteErrorTag.value ? "rounded-md outline outline-1 outline-offset-1 outline-rose-500 dark:outline-rose-700" : ""]])
                  }, null, 2), [
                    [vModelCheckbox, isArchive.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_47$1, [
                  createBaseVNode("label", _hoisted_48$1, [
                    _cache[57] || (_cache[57] = createTextVNode(" Recursive ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Recurse into directories."
                    })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => isRecursive.value = $event),
                    class: normalizeClass(["h-4 w-4 rounded", [isDeleteErrorTag.value ? "rounded-md outline outline-1 outline-offset-1 outline-rose-500 dark:outline-rose-700" : ""]])
                  }, null, 2), [
                    [vModelCheckbox, isRecursive.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_49$1, [
                  createBaseVNode("label", _hoisted_50$1, [
                    _cache[58] || (_cache[58] = createTextVNode(" Compressed ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Compress file data during the transfer."
                    })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => isCompressed.value = $event),
                    class: "h-4 w-4 rounded"
                  }, null, 512), [
                    [vModelCheckbox, isCompressed.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_51$1, [
                  createBaseVNode("label", _hoisted_52$1, [
                    _cache[59] || (_cache[59] = createTextVNode(" Preserve Times ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Preserve modification times."
                    })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => preserveTimes.value = $event),
                    class: "h-4 w-4 rounded"
                  }, null, 512), [
                    [vModelCheckbox, preserveTimes.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_53$1, [
                  createBaseVNode("label", _hoisted_54$1, [
                    _cache[60] || (_cache[60] = createTextVNode(" Delete Files ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Deletes files in target path that do not exist in source. (REQUIRES Archive or Recursive)"
                    })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => deleteFiles.value = $event),
                    class: "h-4 w-4 rounded"
                  }, null, 512), [
                    [vModelCheckbox, deleteFiles.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_55$1, [
                  createBaseVNode("label", _hoisted_56$1, [
                    _cache[61] || (_cache[61] = createTextVNode(" Quiet ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Suppress non-error messages."
                    })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => isQuiet.value = $event),
                    class: "h-4 w-4 rounded"
                  }, null, 512), [
                    [vModelCheckbox, isQuiet.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_57$1, [
                createBaseVNode("div", _hoisted_58$1, [
                  createBaseVNode("div", _hoisted_59$1, [
                    createBaseVNode("div", _hoisted_60$1, [
                      createBaseVNode("label", _hoisted_61$1, [
                        _cache[62] || (_cache[62] = createTextVNode(" Include Pattern ", -1)),
                        createVNode(_sfc_main$9, {
                          class: "ml-1",
                          title: "Pattern applying to specific directories/files to include. Separate patterns with commas (,)."
                        })
                      ])
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => includePattern.value = $event),
                      class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                      placeholder: "Eg. */, *.txt"
                    }, null, 512), [
                      [vModelText, includePattern.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_62$1, [
                    createBaseVNode("div", _hoisted_63$1, [
                      createBaseVNode("label", _hoisted_64$1, [
                        _cache[63] || (_cache[63] = createTextVNode(" Exclude Pattern ", -1)),
                        createVNode(_sfc_main$9, {
                          class: "ml-1",
                          title: "Pattern applying to specific directories/files to exclude. Separate patterns with commas (,)."
                        })
                      ])
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => excludePattern.value = $event),
                      class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                      placeholder: "Eg. temp*, *.py"
                    }, null, 512), [
                      [vModelText, excludePattern.value]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_65$1, [
                  createBaseVNode("div", _hoisted_66$1, [
                    createBaseVNode("label", _hoisted_67$1, [
                      _cache[64] || (_cache[64] = createTextVNode(" Log File Path ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: `Optional path to an rsync log file. If set, rsync will write logs to this file using --log-file=PATH.`
                      })
                    ])
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => logFilePath.value = $event),
                    class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                    placeholder: "Eg. /var/log/newtask.log",
                    title: `Optional path to an rsync log file. If set, rsync will write logs to this file using --log-file=PATH.`
                  }, null, 512), [
                    [vModelText, logFilePath.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_68$1, [
                  createBaseVNode("div", _hoisted_69$1, [
                    createBaseVNode("label", _hoisted_70$1, [
                      _cache[65] || (_cache[65] = createTextVNode(" Extra Parameters ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: "Separate any extra parameters, flags or options you wish to include with commas (,)."
                      })
                    ])
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => extraUserParams.value = $event),
                    class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                    placeholder: "Eg. --partial, -c, -d"
                  }, null, 512), [
                    [vModelText, extraUserParams.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_71$1, [
                createVNode(unref(N), null, {
                  default: withCtx(({ open }) => [
                    createVNode(unref(Q), { class: "bg-default mt-2 w-full justify-start text-center rounded-md flex flex-row" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_72$1, [
                          createVNode(unref(render$2), {
                            class: normalizeClass(["h-7 w-7 text-default transition-all duration-200 transform", { "rotate-90": !open, "rotate-180": open }])
                          }, null, 8, ["class"])
                        ]),
                        _cache[66] || (_cache[66] = createBaseVNode("div", { class: "ml-3 mt-1.5" }, [
                          createBaseVNode("span", { class: "text-start text-base text-default" }, "Advanced Options")
                        ], -1))
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(V), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_73$1, [
                          createBaseVNode("div", _hoisted_74$1, [
                            createBaseVNode("div", _hoisted_75$1, [
                              _cache[67] || (_cache[67] = createBaseVNode("label", { class: "text-sm leading-6 text-default" }, " Preserve Hard Links ", -1)),
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => preserveHardLinks.value = $event),
                                class: "h-4 w-4 rounded"
                              }, null, 512), [
                                [vModelCheckbox, preserveHardLinks.value]
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_76$1, [
                              _cache[68] || (_cache[68] = createBaseVNode("label", { class: "text-sm leading-6 text-default" }, " Preserve Extended Attrs. ", -1)),
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => preserveXattr.value = $event),
                                class: "h-4 w-4 rounded"
                              }, null, 512), [
                                [vModelCheckbox, preserveXattr.value]
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_77$1, [
                              createBaseVNode("label", _hoisted_78$1, [
                                _cache[69] || (_cache[69] = createTextVNode(" Limit Bandwidth (Kbps) ", -1)),
                                createVNode(_sfc_main$9, {
                                  class: "ml-1",
                                  title: "Limit I/O bandwidth; KBytes per second"
                                })
                              ]),
                              withDirectives(createBaseVNode("input", {
                                type: "number",
                                "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => limitBandwidthKbps.value = $event),
                                class: "mt-1 block w-fit text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                                placeholder: "0"
                              }, null, 512), [
                                [vModelText, limitBandwidthKbps.value]
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_79$1, [
                            createBaseVNode("div", _hoisted_80$1, [
                              _cache[70] || (_cache[70] = createBaseVNode("label", { class: "text-sm leading-6 text-default" }, " Preserve Permissions ", -1)),
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => preservePerms.value = $event),
                                class: "h-4 w-4 rounded"
                              }, null, 512), [
                                [vModelCheckbox, preservePerms.value]
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_81$1, [
                              createBaseVNode("label", _hoisted_82$1, [
                                _cache[71] || (_cache[71] = createTextVNode(" Use Parallel Threads ", -1)),
                                createVNode(_sfc_main$9, {
                                  class: "ml-1",
                                  title: "Increase transfer speeds by starting simulaneous transfers. Keep in mind system resources."
                                })
                              ]),
                              withDirectives(createBaseVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => isParallel.value = $event),
                                class: "h-4 w-4 rounded"
                              }, null, 512), [
                                [vModelCheckbox, isParallel.value]
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_83$1, [
                              createBaseVNode("label", _hoisted_84$1, [
                                _cache[72] || (_cache[72] = createTextVNode(" # of Threads ", -1)),
                                createVNode(_sfc_main$9, {
                                  class: "ml-1",
                                  title: "Choosing the amount of threads depends on the system/load on the system. Keep in mind system resources."
                                })
                              ]),
                              withDirectives(createBaseVNode("input", {
                                disabled: !isParallel.value,
                                type: "number",
                                "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => parallelThreads.value = $event),
                                class: "mt-1 block w-fit text-default input-textlike sm:text-sm sm:leading-6 bg-default"
                              }, null, 8, _hoisted_85$1), [
                                [vModelText, parallelThreads.value]
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]))
      ]));
    };
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_2$3 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_3$3 = {
  key: 1,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2"
};
const _hoisted_4$3 = {
  name: "scrub-data",
  class: "border border-default rounded-md p-2 col-span-2 bg-accent"
};
const _hoisted_5$3 = { class: "flex flex-row justify-between items-center text-center" };
const _hoisted_6$3 = { class: "mt-1 flex flex-col items-center text-center" };
const _hoisted_7$3 = { name: "pool-name" };
const _hoisted_8$3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_9$3 = { key: 0 };
const _hoisted_10$3 = { key: 1 };
const _hoisted_11$3 = ["value"];
const _hoisted_12$3 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ScrubTaskParams",
  props: {
    parameterSchema: {},
    task: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const parameters = inject("parameters");
    const initialParameters = ref({});
    const pools = ref([]);
    const loadingPools = ref(false);
    const pool = ref("");
    const poolNameErrorTag = ref(false);
    const inputPoolName = ref(false);
    const errorList = inject("errors");
    async function initializeData() {
      if (props.task) {
        loading.value = true;
        await getPools();
        const params = props.task.parameters.children;
        const zfsParams = params.find((p) => p.key === "pool").children;
        pool.value = zfsParams.find((p) => p.key === "pool").value;
        initialParameters.value = JSON.parse(JSON.stringify({
          pool: pool.value
        }));
        loading.value = false;
      } else {
        await getPools();
      }
    }
    function hasChanges() {
      const currentParams = {
        pool: pool.value
      };
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    const getPools = async () => {
      loadingPools.value = true;
      pools.value = await getPoolData();
      loadingPools.value = false;
    };
    function validatescrub() {
      if (inputPoolName.value) {
        if (!isValidPoolName(pool.value)) {
          errorList.value.push("Pool is invalid.");
          poolNameErrorTag.value = true;
        }
        if (!doesItExist(pool.value, pools.value)) {
          errorList.value.push("Pool does not exist.");
          poolNameErrorTag.value = true;
        }
      } else {
        if (pool.value === "") {
          errorList.value.push("Pool is needed.");
          poolNameErrorTag.value = true;
        } else {
          if (!doesItExist(pool.value, pools.value)) {
            errorList.value.push("Pool does not exist.");
            poolNameErrorTag.value = true;
          }
        }
      }
    }
    function isValidPoolName(poolName) {
      if (poolName === "") {
        return false;
      }
      if (/^(c[0-9]|log|mirror|raidz[123]?|spare)/.test(poolName)) {
        return false;
      }
      if (/^[0-9._: -]/.test(poolName)) {
        return false;
      }
      if (!/^[a-zA-Z0-9_.:-]*$/.test(poolName)) {
        return false;
      }
      if (poolName.match(/[ ]$/)) {
        return false;
      }
      return true;
    }
    function doesItExist(thisName, list) {
      if (list.includes(thisName)) {
        return true;
      } else {
        return false;
      }
    }
    function clearErrorTags() {
      poolNameErrorTag.value = false;
      errorList.value = [];
    }
    async function validateParams() {
      validatescrub();
      if (errorList.value.length == 0) {
        setParams();
      }
    }
    function setParams() {
      const newParams = new ParameterNode("Scrub Task Config", "scrubConfig").addChild(new ZfsDatasetParameter("Pool", "pool", "", 0, "", pool.value, ""));
      parameters.value = newParams;
    }
    onMounted(async () => {
      await initializeData();
    });
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$3, [
          createVNode(_sfc_main$8, {
            width: "w-20",
            height: "h-20",
            baseColor: "text-gray-200",
            fillColor: "fill-gray-500"
          })
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3$3, [
        createBaseVNode("div", _hoisted_4$3, [
          createBaseVNode("div", _hoisted_5$3, [
            _cache[4] || (_cache[4] = createBaseVNode("label", { class: "block text-base leading-6 text-default" }, "Pool to Scrub", -1)),
            createBaseVNode("div", _hoisted_6$3, [
              _cache[3] || (_cache[3] = createBaseVNode("label", { class: "block text-xs text-default" }, "Custom", -1)),
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputPoolName.value = $event),
                class: "h-4 w-4 rounded"
              }, null, 512), [
                [vModelCheckbox, inputPoolName.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$3, [
            createBaseVNode("div", _hoisted_8$3, [
              _cache[5] || (_cache[5] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Pool", -1)),
              poolNameErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                key: 0,
                class: "mt-1 w-5 h-5 text-danger"
              })) : createCommentVNode("", true)
            ]),
            inputPoolName.value ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => pool.value = $event),
                class: normalizeClass([
                  "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                  poolNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ]),
                placeholder: "Specify Pool"
              }, null, 2), [
                [vModelText, pool.value]
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_10$3, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => pool.value = $event),
                class: normalizeClass([
                  "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6",
                  poolNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                ])
              }, [
                _cache[6] || (_cache[6] = createBaseVNode("option", { value: "" }, "Select a Pool", -1)),
                !loadingPools.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(pools.value, (pool2) => {
                  return openBlock(), createElementBlock("option", { value: pool2 }, toDisplayString(pool2), 9, _hoisted_11$3);
                }), 256)) : createCommentVNode("", true),
                loadingPools.value ? (openBlock(), createElementBlock("option", _hoisted_12$3, "Loading...")) : createCommentVNode("", true)
              ], 2), [
                [vModelSelect, pool.value]
              ])
            ]))
          ])
        ])
      ]));
    };
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_2$2 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_3$2 = {
  key: 1,
  class: "grid grid-cols-2 grid-rows-2 my-2 gap-2 h-full grid-template-rows-custom"
};
const _hoisted_4$2 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-1 bg-accent" };
const _hoisted_5$2 = { name: "disk-identifier" };
const _hoisted_6$2 = {
  for: "disk-identifier",
  class: "mt-1 block text-sm leading-6 text-default"
};
const _hoisted_7$2 = { name: "disk-selection" };
const _hoisted_8$2 = {
  for: "disk-selection",
  class: "mt-1 block text-sm leading-6 text-default"
};
const _hoisted_9$2 = ["for"];
const _hoisted_10$2 = ["id", "value", "name"];
const _hoisted_11$2 = ["title"];
const _hoisted_12$2 = ["title"];
const _hoisted_13$2 = ["title"];
const _hoisted_14$1 = {
  name: "test-options",
  class: "border border-default rounded-md p-2 col-span-2 row-span-1 row-start-2 bg-accent"
};
const _hoisted_15$1 = { class: "col-span-1" };
const _hoisted_16$1 = {
  for: "test-type",
  class: "mt-1 block text-sm leading-6 text-default"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SmartTestTaskParams",
  props: {
    parameterSchema: {},
    task: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const parameters = inject("parameters");
    const initialParameters = ref({});
    const diskList = ref([]);
    const selectedIdentifier = ref("vdev_path");
    const selectedDisks = ref([]);
    const selectedTestType = ref("");
    const diskSelectionError = ref(false);
    const testTypeSelectionError = ref(false);
    const errorList = inject("errors");
    async function initializeData() {
      loading.value = true;
      await getDisks(diskList);
      if (props.task) {
        const params = props.task.parameters.children;
        const storedDisks = params.find((p) => p.key === "disks").value;
        selectedDisks.value = storedDisks ? storedDisks.split(", ").map((disk) => disk.replace(/^'|'$/g, "")) : [];
        selectedTestType.value = params.find((p) => p.key === "testType").value;
        initialParameters.value = JSON.parse(JSON.stringify({
          selectedDisks: selectedDisks.value,
          selectedTestType: selectedTestType.value
        }));
      }
      loading.value = false;
    }
    function hasChanges() {
      const currentParams = {
        selectedDisks: selectedDisks.value,
        selectedTestType: selectedTestType.value
      };
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    const diskCardClass = (diskPath) => {
      const isSelected = selectedDisks.value.includes(diskPath);
      return isSelected ? "bg-green-300 dark:bg-green-700" : "bg-default";
    };
    watch(selectedIdentifier, (newVal, oldVal) => {
      if (newVal) {
        selectedDisks.value = [];
      }
    });
    function validateDisks() {
      if (selectedDisks.value.length == 0) {
        errorList.value.push("At least one disk is required.");
        diskSelectionError.value = true;
        return false;
      } else {
        return true;
      }
    }
    function validateTestType() {
      if (selectedTestType.value.length == 0) {
        errorList.value.push("A test type is required.");
        testTypeSelectionError.value = true;
        return false;
      } else {
        return true;
      }
    }
    function clearErrorTags() {
      diskSelectionError.value = false;
      testTypeSelectionError.value = false;
      errorList.value = [];
    }
    async function validateParams() {
      validateDisks();
      validateTestType();
      if (errorList.value.length == 0) {
        setParams();
      }
    }
    function setParams() {
      const diskSelectionString = selectedDisks.value.join(", ");
      const newParams = new ParameterNode("SMART Test Config", "smartTestConfig").addChild(new StringParameter("Disks", "disks", `'${diskSelectionString}'`)).addChild(new StringParameter("Test Type", "testType", selectedTestType.value));
      parameters.value = newParams;
    }
    onMounted(async () => {
      await initializeData();
    });
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(_sfc_main$8, {
            width: "w-20",
            height: "h-20",
            baseColor: "text-gray-200",
            fillColor: "fill-gray-500"
          })
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [
        createBaseVNode("div", _hoisted_4$2, [
          _cache[6] || (_cache[6] = createBaseVNode("label", { class: "mt-1 mb-2 block text-base leading-6 text-default" }, "Available Disks", -1)),
          createBaseVNode("div", _hoisted_5$2, [
            createBaseVNode("label", _hoisted_6$2, [
              _cache[3] || (_cache[3] = createTextVNode(" Disk Identifier ", -1)),
              createVNode(_sfc_main$9, {
                class: "ml-1",
                title: "Select the method to identify disks:\n- Block Device: Uses the system device name (e.g., /dev/sda).\n- Hardware Path: Identifies disks by their physical location on the hardware.\n- Device Alias: A user-friendly alias for the device which corrosponds to the slot number the drive is plugged into.\n  (set by 45Drives Tools - dalias)"
              })
            ]),
            withDirectives(createBaseVNode("select", {
              id: "disk-identifier",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedIdentifier.value = $event),
              name: "disk-identifier",
              class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
            }, [..._cache[4] || (_cache[4] = [
              createBaseVNode("option", { value: "sd_path" }, "Block Device", -1),
              createBaseVNode("option", { value: "phy_path" }, "Hardware Path", -1),
              createBaseVNode("option", { value: "vdev_path" }, "Device Alias", -1)
            ])], 512), [
              [vModelSelect, selectedIdentifier.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("label", _hoisted_8$2, [
              _cache[5] || (_cache[5] = createTextVNode(" Select Disks ", -1)),
              createVNode(_sfc_main$9, {
                class: "ml-1",
                title: "Select the disk(s) to be tested."
              })
            ]),
            createBaseVNode("ul", {
              id: "disk-selection",
              role: "list",
              class: normalizeClass(["grid grid-cols-6 grid-rows-2 gap-2", [diskSelectionError.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700 rounded-md" : ""]])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(diskList.value, (disk, diskIdx) => {
                return openBlock(), createElementBlock("li", {
                  key: diskIdx,
                  class: "my-1"
                }, [
                  createBaseVNode("button", {
                    class: normalizeClass(["flex min-w-fit w-full h-full border border-default rounded-lg py-1 px-2", diskCardClass(unref(getDiskIDName)(diskList.value, selectedIdentifier.value, disk.name).diskPath)])
                  }, [
                    createBaseVNode("label", {
                      for: `disk-${diskIdx}`,
                      class: "flex flex-col w-full text-sm gap-0.5"
                    }, [
                      withDirectives(createBaseVNode("input", {
                        id: `disk-${diskIdx}`,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedDisks.value = $event),
                        type: "checkbox",
                        value: `${unref(getDiskIDName)(diskList.value, selectedIdentifier.value, disk.name).diskPath}`,
                        name: `disk-${disk.name}`,
                        class: "w-4 h-4 text-success bg-well border-default rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2"
                      }, null, 8, _hoisted_10$2), [
                        [vModelCheckbox, selectedDisks.value]
                      ]),
                      createBaseVNode("p", {
                        class: "truncate text-sm font-medium text-default",
                        title: unref(getDiskIDName)(diskList.value, selectedIdentifier.value, disk.name).diskName
                      }, toDisplayString(unref(truncateName)(unref(getDiskIDName)(diskList.value, selectedIdentifier.value, disk.name).diskName, 8)), 9, _hoisted_11$2),
                      createBaseVNode("p", {
                        class: "truncate text-sm text-default",
                        title: disk.type
                      }, toDisplayString(disk.type), 9, _hoisted_12$2),
                      createBaseVNode("p", {
                        class: "truncate text-sm text-default",
                        title: disk.capacity
                      }, toDisplayString(disk.capacity), 9, _hoisted_13$2)
                    ], 8, _hoisted_9$2)
                  ], 2)
                ]);
              }), 128))
            ], 2)
          ])
        ]),
        createBaseVNode("div", _hoisted_14$1, [
          _cache[9] || (_cache[9] = createBaseVNode("label", { class: "mt-1 block text-base leading-6 text-default" }, "Test Options", -1)),
          createBaseVNode("div", _hoisted_15$1, [
            createBaseVNode("label", _hoisted_16$1, [
              _cache[7] || (_cache[7] = createTextVNode(" Test Type ", -1)),
              createVNode(_sfc_main$9, {
                class: "ml-1",
                title: "Select the type of S.M.A.R.T. test to run on the disk.\n- Immediate Offline Test: A quick test that updates S.M.A.R.T. attributes and logs errors without interrupting normal operations.\n- Short Test: A brief test that checks the major components of the disk, typically taking a few minutes.\n- Long Test: A comprehensive test that thoroughly examines the entire disk surface and internal components, usually taking several hours.\n- Conveyance Test: Specific to ATA drives, this test checks for any damage that may have occurred during transport. It typically completes in a few minutes."
              })
            ]),
            withDirectives(createBaseVNode("select", {
              id: "test-type",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedTestType.value = $event),
              name: "test-type",
              class: normalizeClass(["text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6", [testTypeSelectionError.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]])
            }, [..._cache[8] || (_cache[8] = [
              createStaticVNode('<option value="" data-v-27816799>Select a Test</option><option value="offline" data-v-27816799>Immediate Offline Test</option><option value="short" data-v-27816799>Short Test</option><option value="long" data-v-27816799>Long Test</option><option value="conveyance" data-v-27816799>Conveyance Test</option>', 5)
            ])], 2), [
              [vModelSelect, selectedTestType.value]
            ])
          ])
        ])
      ]));
    };
  }
});
const SmartTestTaskParams_vue_vue_type_style_index_0_scoped_27816799_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const SmartTestTaskParams = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-27816799"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "space-y-4 my-2"
};
const _hoisted_2$1 = {
  key: 0,
  class: "mt-2 flex items-center gap-2"
};
const _hoisted_3$1 = {
  key: 1,
  class: "mt-2 p-2 rounded bg-danger/10 text-danger text-sm"
};
const _hoisted_4$1 = { class: "mt-1 text-xs text-default/70" };
const _hoisted_5$1 = { key: 2 };
const _hoisted_6$1 = ["value"];
const _hoisted_7$1 = { class: "text-[11px] text-muted mt-1" };
const _hoisted_8$1 = { key: 0 };
const _hoisted_9$1 = {
  key: 3,
  class: "mt-1"
};
const _hoisted_10$1 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-2" };
const _hoisted_11$1 = { class: "lg:col-span-2" };
const _hoisted_12$1 = { class: "flex items-center gap-2" };
const _hoisted_13$1 = ["value"];
const _hoisted_14 = ["src", "title"];
const _hoisted_15 = { class: "flex lg:justify-end gap-2" };
const _hoisted_16 = { class: "mt-2" };
const _hoisted_17 = { class: "grid gap-2 sm:grid-cols-3" };
const _hoisted_18 = { class: "flex items-start gap-2 rounded-md border border-default p-2 cursor-pointer bg-default" };
const _hoisted_19 = { class: "flex items-start gap-2 rounded-md border border-default p-2 cursor-pointer bg-default" };
const _hoisted_20 = { class: "flex items-start gap-2 rounded-md border border-default p-2 cursor-pointer bg-default" };
const _hoisted_21 = { class: "block text-sm mt-2 text-default" };
const _hoisted_22 = { key: 0 };
const _hoisted_23 = { key: 1 };
const _hoisted_24 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_25 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_26 = {
  key: 1,
  class: "grid grid-cols-2 my-2 gap-2 h-full",
  style: { "grid-template-rows": "auto auto 1fr" }
};
const _hoisted_27 = {
  name: "rclone-remotes",
  class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-1 bg-accent",
  style: { "grid-row": "1 / span 1" }
};
const _hoisted_28 = {
  name: "select-remote",
  class: "grid grid-cols-2 gap-x-2"
};
const _hoisted_29 = { class: "flex flex-row justify-between items-center col-span-2" };
const _hoisted_30 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_31 = ["src", "title"];
const _hoisted_32 = ["value"];
const _hoisted_33 = { class: "col-span-1 button-group-row mt-0.5" };
const _hoisted_34 = {
  name: "transfer-config",
  class: "grid grid-cols-2 col-span-2 gap-x-2"
};
const _hoisted_35 = {
  name: "transfer-type",
  class: "col-span-1 mt-1.5"
};
const _hoisted_36 = { class: "flex flex-row justify-between items-center" };
const _hoisted_37 = { class: "block text-sm leading-6 text-default" };
const _hoisted_38 = { class: "" };
const _hoisted_39 = {
  name: "direction",
  class: "col-span-1"
};
const _hoisted_40 = { class: "w-full mt-2 flex flex-row justify-between items-center text-center space-x-2 text-default" };
const _hoisted_41 = {
  key: 0,
  class: "block text-sm leading-6 text-default"
};
const _hoisted_42 = {
  key: 1,
  class: "block text-sm leading-6 text-default"
};
const _hoisted_43 = { class: "w-full mt-1.5 justify-center items-center" };
const _hoisted_44 = { class: "relative flex items-center justify-around" };
const _hoisted_45 = {
  name: "directory-config",
  class: "grid grid-cols-2 col-span-2 gap-x-2"
};
const _hoisted_46 = { name: "source-path" };
const _hoisted_47 = { class: "flex flex-row justify-between items-center" };
const _hoisted_48 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_49 = ["title"];
const _hoisted_50 = { name: "destination-path" };
const _hoisted_51 = { class: "flex flex-row justify-between items-center" };
const _hoisted_52 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_53 = ["title"];
const _hoisted_54 = {
  name: "rclone-options",
  class: "border border-default rounded-md p-2 col-span-2 row-span-1 row-start-2 bg-accent",
  style: { "grid-row": "2 / span 1" }
};
const _hoisted_55 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_56 = { class: "grid grid-cols-4 gap-4 mt-2" };
const _hoisted_57 = { class: "col-span-1 items-center" };
const _hoisted_58 = {
  name: "options-parallel-threads",
  class: "col-span-1 mt-1"
};
const _hoisted_59 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_60 = {
  name: "options-check-first",
  class: "flex flex-row justify-between items-center mt-2 col-span-1 col-start-1"
};
const _hoisted_61 = { class: "text-sm leading-6 text-default" };
const _hoisted_62 = {
  name: "options-update",
  class: "flex flex-row justify-between items-center mt-1 col-span-1 col-start-1"
};
const _hoisted_63 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_64 = {
  name: "options-dry-run",
  class: "flex flex-row justify-between items-center mt-1 col-span-1 col-start-1"
};
const _hoisted_65 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_66 = { class: "-mt-1 col-span-3 grid grid-cols-2 gap-2 pr-1" };
const _hoisted_67 = { class: "grid grid-cols-2 col-span-2 gap-2 w-full justify-center items-center text-center" };
const _hoisted_68 = {
  name: "options-include",
  class: "col-span-1"
};
const _hoisted_69 = { class: "flex flex-row justify-between items-center" };
const _hoisted_70 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_71 = {
  name: "options-exclude",
  class: "col-span-1"
};
const _hoisted_72 = { class: "flex flex-row justify-between items-center" };
const _hoisted_73 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_74 = {
  name: "options-log-file-path",
  class: "col-span-1"
};
const _hoisted_75 = { class: "flex flex-row justify-between items-center" };
const _hoisted_76 = { class: "block text-sm leading-6 text-default" };
const _hoisted_77 = {
  name: "options-extra-params",
  class: "col-span-1"
};
const _hoisted_78 = { class: "flex flex-row justify-between items-center" };
const _hoisted_79 = { class: "block text-sm leading-6 text-default" };
const _hoisted_80 = { class: "col-span-4" };
const _hoisted_81 = { class: "m-1" };
const _hoisted_82 = { class: "w-full grid grid-cols-4 gap-4 bg-default p-3 -mt-1" };
const _hoisted_83 = { class: "col-span-1 grid grid-cols-1 px-1 -mt-1" };
const _hoisted_84 = {
  name: "options-checksum",
  class: "flex flex-row justify-between items-center mt-1 col-span-1 col-start-1"
};
const _hoisted_85 = { class: "text-sm leading-6 text-default" };
const _hoisted_86 = {
  name: "options-ignore-existing",
  class: "flex flex-row justify-between items-center mt-1 col-span-1 col-start-1"
};
const _hoisted_87 = { class: "text-sm leading-6 text-default" };
const _hoisted_88 = {
  name: "options-ignore-size",
  title: "",
  class: "flex flex-row justify-between items-center col-span-1 col-start-1"
};
const _hoisted_89 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_90 = {
  name: "options-inplace",
  title: "",
  class: "flex flex-row justify-between items-center col-span-1 col-start-1"
};
const _hoisted_91 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_92 = {
  name: "options-no-traverse",
  title: "",
  class: "flex flex-row justify-between items-center col-span-1 col-start-1"
};
const _hoisted_93 = { class: "block text-sm leading-6 text-default mt-0.5" };
const _hoisted_94 = { class: "col-span-3 grid grid-cols-3 grid-rows-2 gap-2" };
const _hoisted_95 = {
  name: "options-limit-bw",
  class: "col-span-1"
};
const _hoisted_96 = { class: "mt-1 text-sm leading-6 text-default" };
const _hoisted_97 = {
  name: "options-limit-bw",
  class: "col-span-1"
};
const _hoisted_98 = { class: "mt-1 text-sm leading-6 text-default" };
const _hoisted_99 = { class: "flex items-center" };
const _hoisted_100 = {
  name: "options-cutoff-mode",
  class: "col-span-1"
};
const _hoisted_101 = { class: "mt-1 text-sm leading-6 text-default" };
const _hoisted_102 = ["disabled"];
const _hoisted_103 = { class: "col-span-3 row-start-2 grid grid-cols-2 gap-2 w-full justify-center items-center text-center" };
const _hoisted_104 = {
  name: "options-include-files-from-path",
  class: "col-span-1"
};
const _hoisted_105 = { class: "flex flex-row justify-between items-center" };
const _hoisted_106 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_107 = {
  name: "options-exclude-files-from-path",
  class: "col-span-1"
};
const _hoisted_108 = { class: "flex flex-row justify-between items-center" };
const _hoisted_109 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_110 = {
  name: "multi-thread-options",
  class: "col-span-4 grid grid-cols-2 gap-1 border border-default rounded-md p-2 bg-accent"
};
const _hoisted_111 = { class: "w-fit col-span-2 mt-1 block text-base leading-6 text-default items-center" };
const _hoisted_112 = { name: "options-multi-thread-chunk-size" };
const _hoisted_113 = { class: "flex flex-row items-center justify-between mt-1" };
const _hoisted_114 = { class: "block text-sm leading-6 text-default" };
const _hoisted_115 = { class: "flex items-center" };
const _hoisted_116 = ["disabled"];
const _hoisted_117 = ["disabled"];
const _hoisted_118 = { name: "options-multi-thread-cutoff" };
const _hoisted_119 = { class: "flex flex-row items-center justify-between mt-1" };
const _hoisted_120 = { class: "block text-sm leading-6 text-default" };
const _hoisted_121 = { class: "flex items-center" };
const _hoisted_122 = ["disabled"];
const _hoisted_123 = ["disabled"];
const _hoisted_124 = { name: "options-multi-thread-streams" };
const _hoisted_125 = { class: "flex flex-row items-center justify-between mt-1" };
const _hoisted_126 = { class: "block text-sm leading-6 text-default" };
const _hoisted_127 = ["disabled"];
const _hoisted_128 = { name: "options-multi-thread-write-buffer-size" };
const _hoisted_129 = { class: "flex flex-row items-center justify-between mt-1" };
const _hoisted_130 = ["disabled"];
const _hoisted_131 = { class: "flex items-center" };
const _hoisted_132 = ["disabled"];
const _hoisted_133 = ["disabled"];
const _hoisted_134 = { key: 2 };
const _hoisted_135 = { key: 3 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CloudSyncParams",
  props: {
    parameterSchema: {},
    task: {},
    simple: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const router = useRouter();
    const route = useRoute();
    const props = __props;
    const loading = ref(false);
    const truncateText = injectWithCheck(truncateTextInjectionKey, "truncateText not provided!");
    const parameters = inject("parameters");
    const initialParameters = ref({});
    const myRemoteManager = injectWithCheck(remoteManagerInjectionKey, "remote manager not provided!");
    const existingRemotes = injectWithCheck(rcloneRemotesInjectionKey, "remotes not provided!");
    const errorList = inject("errors");
    const errorTags = ref({
      localPath: false,
      targetPath: false,
      selectedRemote: false,
      transferType: false,
      numberOfTransfers: false,
      includePattern: false,
      excludePattern: false,
      customArgs: false,
      limitBandwidthKbps: false,
      includeFromPath: false,
      excludeFromPath: false,
      maxTransferSize: false,
      cutoffMode: false,
      multiThreadChunkSize: false,
      multiThreadCutoff: false,
      multiThreadStreams: false,
      multiThreadWriteBufferSize: false,
      logFilePath: false
    });
    const localPath = ref("");
    const targetPath = ref("");
    const directionSwitched = ref(false);
    const transferType = ref("copy");
    const selectedRemote = ref();
    const checkFirst = ref(false);
    const checksum = ref(false);
    const update = ref(false);
    const ignoreExisting = ref(false);
    const dryRun = ref(false);
    const numberOfTransfers = ref(4);
    const includePattern = ref("");
    const excludePattern = ref("");
    const customArgs = ref("");
    const logFilePath = ref("");
    const limitBandwidthKbps = ref();
    const ignoreSize = ref(false);
    const inplace = ref(false);
    const multiThreadOptions = ref(false);
    const multiThreadChunkSize = ref();
    const multiThreadChunkSizeUnit = ref("MiB");
    const multiThreadCutoff = ref();
    const multiThreadCutoffUnit = ref("MiB");
    const multiThreadStreams = ref();
    const multiThreadWriteBufferSize = ref();
    const multiThreadWriteBufferSizeUnit = ref("KiB");
    const includeFromPath = ref("");
    const excludeFromPath = ref("");
    const maxTransferSize = ref(0);
    const maxTransferSizeUnit = ref("MiB");
    const cutoffMode = ref();
    const noTraverse = ref(false);
    const mutexWarnings = ref([]);
    const isTaskLoading = ref(false);
    onMounted(async () => {
      isTaskLoading.value = true;
      await initializeData();
      isTaskLoading.value = false;
    });
    watch(selectedRemote, (newVal) => {
      if (!isTaskLoading.value && newVal) {
        targetPath.value = `${selectedRemote.value.name}:`;
      }
    });
    const ctx = useClientContextStore();
    const allowContextFallback = ref(false);
    function parseFromHash() {
      const m = (window.location.hash || "").match(/[?&]client_id=([^&#]+)/);
      return m ? decodeURIComponent(m[1]) : "";
    }
    const installId = computed(() => {
      const fromHash = parseFromHash();
      return fromHash || (allowContextFallback.value ? ctx.clientId || "" : "");
    });
    const folderList = useUserScopedFolderListByInstall(installId, 2);
    watchEffect(() => {
      console.log(
        "[cloud-sync folderList]",
        "loading=",
        folderList.loading.value,
        "error=",
        folderList.error.value,
        "shareRoot=",
        folderList.shareRoot.value,
        "smbUser=",
        folderList.smbUser.value,
        "abs=",
        folderList.absDirs.value.length
      );
    });
    const loadingFolders = folderList.loading;
    const discoveryError = folderList.error;
    const shareRoot = computed(() => folderList.shareRoot.value);
    const smbUser = computed(() => folderList.smbUser.value);
    const isEditMode = computed(() => !!props.task);
    function prettyLabelFromAbs(abs) {
      const root = shareRoot.value || "";
      if (!abs.startsWith(root))
        return abs;
      const rel = abs.slice(root.length).replace(/^\/+/, "");
      const parts = rel.split("/").filter(Boolean);
      return parts.length >= 2 ? parts.slice(1).join("/") + "/" : rel + "/";
    }
    const opts = computed(
      () => {
        var _a;
        return ((_a = folderList.absDirs.value) != null ? _a : []).map((abs) => ({
          value: abs,
          label: prettyLabelFromAbs(abs)
        }));
      }
    );
    watch(opts, (list) => {
      if (!props.simple || isEditMode.value)
        return;
      if (!list.length)
        return;
      if (!localPath.value || !folderList.underRoot(localPath.value)) {
        localPath.value = list[0].value;
      }
    }, { immediate: true });
    watch([() => folderList.absDirs.value, () => folderList.shareRoot.value], ([abs]) => {
      if (!props.simple || isEditMode.value)
        return;
      const list = abs || [];
      if (!list.length)
        return;
      if (!localPath.value || !folderList.underRoot(localPath.value)) {
        localPath.value = list[0];
      }
    }, { immediate: true });
    function ensureTrailingSlash(which) {
      if (which === "local") {
        if (localPath.value && !localPath.value.endsWith("/"))
          localPath.value += "/";
      } else {
        if (targetPath.value && !targetPath.value.endsWith("/"))
          targetPath.value += "/";
      }
    }
    async function initializeData() {
      if (props.task) {
        console.log("loading task:", props.task);
        loading.value = true;
        const params = props.task.parameters.children;
        localPath.value = params.find((p) => p.key === "local_path").value;
        targetPath.value = params.find((p) => p.key === "target_path").value;
        const transferDirection = params.find((p) => p.key === "direction").value;
        if (transferDirection == "pull") {
          directionSwitched.value = true;
        } else {
          directionSwitched.value = false;
        }
        transferType.value = params.find((p) => p.key === "type").value;
        const remoteName = params.find((p) => p.key === "rclone_remote").value;
        selectedRemote.value = await myRemoteManager.getRemoteByName(remoteName) || void 0;
        const rcloneOptions = params.find((p) => p.key === "rcloneOptions").children;
        const logFileParam = rcloneOptions.find((p) => p.key === "log_file_path");
        logFilePath.value = logFileParam ? logFileParam.value : "";
        checkFirst.value = rcloneOptions.find((p) => p.key === "check_first_flag").value;
        checksum.value = rcloneOptions.find((p) => p.key === "checksum_flag").value;
        update.value = rcloneOptions.find((p) => p.key === "update_flag").value;
        ignoreExisting.value = rcloneOptions.find((p) => p.key === "ignore_existing_flag").value;
        dryRun.value = rcloneOptions.find((p) => p.key === "dry_run_flag").value;
        numberOfTransfers.value = rcloneOptions.find((p) => p.key === "transfers").value;
        includePattern.value = rcloneOptions.find((p) => p.key === "include_pattern").value;
        excludePattern.value = rcloneOptions.find((p) => p.key === "exclude_pattern").value;
        customArgs.value = rcloneOptions.find((p) => p.key === "custom_args").value;
        limitBandwidthKbps.value = rcloneOptions.find((p) => p.key === "bandwidth_limit_kbps").value;
        ignoreSize.value = rcloneOptions.find((p) => p.key === "ignore_size_flag").value;
        inplace.value = rcloneOptions.find((p) => p.key === "inplace_flag").value;
        multiThreadChunkSize.value = rcloneOptions.find((p) => p.key === "multithread_chunk_size").value;
        multiThreadChunkSizeUnit.value = rcloneOptions.find((p) => p.key === "multithread_chunk_size_unit").value || "MiB";
        multiThreadCutoff.value = rcloneOptions.find((p) => p.key === "multithread_cutoff").value;
        multiThreadCutoffUnit.value = rcloneOptions.find((p) => p.key === "multithread_cutoff_unit").value || "MiB";
        multiThreadStreams.value = rcloneOptions.find((p) => p.key === "multithread_streams").value;
        multiThreadWriteBufferSize.value = rcloneOptions.find((p) => p.key === "multithread_write_buffer_size").value;
        multiThreadWriteBufferSizeUnit.value = rcloneOptions.find((p) => p.key === "multithread_write_buffer_size_unit").value || "KiB";
        multiThreadOptions.value = multiThreadChunkSize.value > 0 || multiThreadCutoff.value > 0 || multiThreadStreams.value > 0 || multiThreadWriteBufferSize.value > 0;
        includeFromPath.value = rcloneOptions.find((p) => p.key === "include_from_path").value;
        excludeFromPath.value = rcloneOptions.find((p) => p.key === "exclude_from_path").value;
        maxTransferSize.value = rcloneOptions.find((p) => p.key === "max_transfer_size").value;
        maxTransferSizeUnit.value = rcloneOptions.find((p) => p.key === "max_transfer_size_unit").value || "MiB";
        cutoffMode.value = rcloneOptions.find((p) => p.key === "cutoff_mode").value || "HARD";
        noTraverse.value = rcloneOptions.find((p) => p.key === "no_traverse_flag").value;
        initialParameters.value = JSON.parse(JSON.stringify({
          localPath: localPath.value,
          targetPath: targetPath.value,
          directionSwitched: directionSwitched.value,
          transferType: transferType.value,
          selectedRemote: selectedRemote.value,
          checkFirst: checkFirst.value,
          checksum: checksum.value,
          update: update.value,
          ignoreExisting: ignoreExisting.value,
          dryRun: dryRun.value,
          numberOfTransfers: numberOfTransfers.value,
          includePattern: includePattern.value,
          excludePattern: excludePattern.value,
          customArgs: customArgs.value,
          limitBandwidthKbps: limitBandwidthKbps.value,
          ignoreSize: ignoreSize.value,
          inplace: inplace.value,
          multiThreadChunkSize: multiThreadChunkSize.value,
          multiThreadCutoff: multiThreadCutoff.value,
          multiThreadStreams: multiThreadStreams.value,
          multiThreadWriteBufferSize: multiThreadWriteBufferSize.value,
          includeFromPath: includeFromPath.value,
          excludeFromPath: excludeFromPath.value,
          maxTransferSize: maxTransferSize.value,
          maxTransferSizeUnit: maxTransferSizeUnit.value,
          cutoffMode: cutoffMode.value,
          noTraverse: noTraverse.value,
          logFilePath: logFilePath.value
        }));
        loading.value = false;
      }
    }
    function hasChanges() {
      const currentParams = {
        localPath: localPath.value,
        targetPath: targetPath.value,
        directionSwitched: directionSwitched.value,
        transferType: transferType.value,
        selectedRemote: selectedRemote.value,
        checkFirst: checkFirst.value,
        checksum: checksum.value,
        update: update.value,
        ignoreExisting: ignoreExisting.value,
        dryRun: dryRun.value,
        numberOfTransfers: numberOfTransfers.value,
        includePattern: includePattern.value,
        excludePattern: excludePattern.value,
        customArgs: customArgs.value,
        limitBandwidthKbps: limitBandwidthKbps.value,
        ignoreSize: ignoreSize.value,
        inplace: inplace.value,
        multiThreadChunkSize: multiThreadChunkSize.value,
        multiThreadCutoff: multiThreadCutoff.value,
        multiThreadStreams: multiThreadStreams.value,
        multiThreadWriteBufferSize: multiThreadWriteBufferSize.value,
        includeFromPath: includeFromPath.value,
        excludeFromPath: excludeFromPath.value,
        maxTransferSize: maxTransferSize.value,
        maxTransferSizeUnit: maxTransferSizeUnit.value,
        cutoffMode: cutoffMode.value,
        noTraverse: noTraverse.value,
        logFilePath: logFilePath.value
      };
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    watchEffect(() => {
      handleMutuallyExclusiveOptions();
    });
    function handleMutuallyExclusiveOptions() {
      const warnings = [];
      if (update.value && ignoreExisting.value) {
        ignoreExisting.value = false;
        warnings.push(
          "Update and Ignore Existing cannot be used together; keeping Update enabled and turning off Ignore Existing."
        );
      }
      if (noTraverse.value && (includeFromPath.value || excludeFromPath.value)) {
        if (includeFromPath.value) {
          warnings.push(
            "No Traverse is enabled along with Include Files from Path; make sure your include patterns do not rely on destination traversal."
          );
        }
        if (excludeFromPath.value) {
          warnings.push(
            "No Traverse is enabled along with Exclude Files from Path; make sure your exclude patterns do not rely on destination traversal."
          );
        }
      }
      if (multiThreadOptions.value) {
        if (!multiThreadChunkSize.value) {
          multiThreadChunkSize.value = 64;
        }
        if (!multiThreadCutoff.value) {
          multiThreadCutoff.value = 256;
        }
        if (!multiThreadStreams.value) {
          multiThreadStreams.value = 4;
        }
        if (!multiThreadWriteBufferSize.value) {
          multiThreadWriteBufferSize.value = 128;
        }
      } else {
        if (multiThreadChunkSize.value || multiThreadCutoff.value || multiThreadStreams.value || multiThreadWriteBufferSize.value) {
          warnings.push(
            "Multi-threading has been disabled; chunking and related options have been cleared."
          );
        }
        multiThreadChunkSize.value = void 0;
        multiThreadCutoff.value = void 0;
        multiThreadStreams.value = void 0;
        multiThreadWriteBufferSize.value = void 0;
      }
      if (dryRun.value) {
        warnings.push(
          "Dry Run is enabled; no changes will be made, but options like Update, Ignore Existing, and Checksum still affect which actions are simulated."
        );
      }
      mutexWarnings.value = warnings;
    }
    const localTitleComputed = computed(() => {
      if (!directionSwitched.value) {
        return `This is the source path on your local system. Files from this path will be transferred to the cloud remote.
- With a trailing slash (/): Transfers only the contents of the directory, not the directory itself.
- Without a trailing slash: Transfers the directory and its contents.
- For files, specify the full file path without a trailing slash.`;
      } else {
        return `This is the destination path on your local system. Files from the remote storage will be downloaded here.
- With a trailing slash (/): Files will be placed directly into this directory.
- Without a trailing slash: The remote directory itself will be created here with its contents.
- Ensure there's sufficient free space and the directory is writable.`;
      }
    });
    const targetTitleComputed = computed(() => {
      if (!directionSwitched.value) {
        return `This is the destination path on the remote storage. Files from the local path will be uploaded here.

Format: remoteName:bucketName/path/to/folder

- remoteName: The rclone remote (e.g., 'gdrive', 's3remote', 'azureblob')
- bucketName or container: Required for cloud remotes like S3, B2, Azure, etc.
- path/to/folder: Optional subdirectory within the bucket/container

Examples:
- gdrive:Backups/April2025
- s3remote:my-bucket/daily
- azureblob:container/data

Tips:
- Verify the path exists or rclone is allowed to create it.
- Avoid uploading directly to the root of a bucket unless necessary.`;
      } else {
        return `This is the source path on the remote storage. Files from this path will be pulled to your local system.

Format: remoteName:bucketName/path/to/folder

- remoteName: The rclone remote (e.g., 'gdrive', 's3remote', 'azureblob')
- bucketName or container: Required for cloud remotes like S3, B2, Azure, etc.
- path/to/folder: Specific directory or file path to download

Examples:
- dropbox:Projects/Reports
- b2:mybucket/backups
- idrive:archive/2024

Tips:
- Make sure the path exists and contains the files you want.
- Avoid pulling large or unnecessary directories unless required.`;
      }
    });
    const transferTypeComputed = computed(() => {
      if (!directionSwitched.value) {
        return `Select the transfer type for sending files from your local path to the remote path:
COPY: Copy files to the remote, skipping files that already exist.
MOVE: Move files to the remote and delete them locally after a successful transfer.
SYNC: Make the remote identical to your local path by adding, updating, or deleting files on the remote. Use carefully, as it may delete remote files.`;
      } else {
        return `Select the transfer type for retrieving files from the remote path to your local path:
COPY: Copy files to the local system, skipping files that already exist.
MOVE: Move files to the local system and delete them from the remote after a successful transfer.
SYNC: Make the local path identical to the remote by adding, updating, or deleting files locally. Use carefully, as it may delete local files.`;
      }
    });
    const showCreateRemote = ref(false);
    async function createRemoteBtn() {
      await loadCreateRemoteComponent();
      showCreateRemote.value = true;
    }
    const createRemoteComponent = ref();
    async function loadCreateRemoteComponent() {
      const module = await __vitePreload(() => import("./CreateRemote.115ab8f2.js"), true ? ["./CreateRemote.115ab8f2.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js","./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js"] : void 0, import.meta.url);
      createRemoteComponent.value = module.default;
    }
    const showManageRemotes = ref(false);
    async function manageRemotesBtn() {
      if (props.simple) {
        router.push({ name: "SimpleManageRemotes", query: { returnTo: route.fullPath } });
      } else {
        await loadManageRemotesComponent();
        showManageRemotes.value = true;
      }
    }
    const manageRemotesComponent = ref();
    async function loadManageRemotesComponent() {
      const module = await __vitePreload(() => import("./ManageRemotes.022d6301.js"), true ? ["./ManageRemotes.022d6301.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js","./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js"] : void 0, import.meta.url);
      manageRemotesComponent.value = module.default;
    }
    async function validateLocalTransferPath() {
      errorTags.value.localPath = false;
      if (!localPath.value) {
        errorList.value.push("Local path is required.");
        errorTags.value.localPath = true;
        return false;
      }
      const pathExists = await checkLocalPathExists(localPath.value);
      const validPath = validatePath(localPath.value);
      if (!pathExists) {
        errorList.value.push(`Path does not exist: ${localPath.value}`);
        errorTags.value.localPath = true;
        return false;
      }
      if (!validPath) {
        errorList.value.push("Source path format is invalid.");
        errorTags.value.localPath = true;
        return false;
      }
      return true;
    }
    function validateDestinationTransferPath() {
      if (!targetPath.value) {
        errorList.value.push("Target path is required.");
        errorTags.value.targetPath = true;
        return false;
      }
      if (validatePath(targetPath.value, true)) {
        errorTags.value.targetPath = false;
        return true;
      } else {
        errorList.value.push("Target path is invalid.");
        errorTags.value.targetPath = true;
        return false;
      }
    }
    function validatePath(path, isRemote) {
      return isRemote ? validateRemotePath(path) : validateLocalPath(path);
    }
    async function validateAllValues() {
      if (!transferType.value) {
        errorList.value.push("Transfer type is required.");
        errorTags.value.transferType = true;
      }
      if (numberOfTransfers.value && typeof numberOfTransfers.value !== "number" || numberOfTransfers.value < 0) {
        errorList.value.push("Number of Transfers must be a valid number.");
        errorTags.value.numberOfTransfers = true;
      }
      if (logFilePath.value && typeof logFilePath.value !== "string") {
        errorList.value.push("Log File Path must be a string.");
        errorTags.value.logFilePath = true;
      }
      if (includePattern.value && typeof includePattern.value !== "string") {
        errorList.value.push("Include Pattern must be a string.");
        errorTags.value.includePattern = true;
      }
      if (excludePattern.value && typeof excludePattern.value !== "string") {
        errorList.value.push("Exclude Pattern must be a string.");
        errorTags.value.excludePattern = true;
      }
      if (customArgs.value && typeof customArgs.value !== "string") {
        errorList.value.push("Extra Parameters must be a string.");
        errorTags.value.customArgs = true;
      }
      if (limitBandwidthKbps.value && (typeof limitBandwidthKbps.value !== "number" || limitBandwidthKbps.value < 0)) {
        errorList.value.push("Limit Bandwidth must be a positive number.");
        errorTags.value.limitBandwidthKbps = true;
      }
      if (includeFromPath.value && typeof includeFromPath.value !== "string") {
        errorList.value.push("Include Files from Path must be a valid path string.");
        errorTags.value.includeFromPath = true;
      }
      if (excludeFromPath.value && typeof excludeFromPath.value !== "string") {
        errorList.value.push("Exclude Files from Path must be a valid path string.");
        errorTags.value.excludeFromPath = true;
      }
      if (maxTransferSize.value && (typeof maxTransferSize.value !== "number" || maxTransferSize.value < 0)) {
        errorList.value.push("Max Transfer Size must be a positive number.");
        errorTags.value.maxTransferSize = true;
      }
      if (multiThreadOptions.value) {
        if (multiThreadChunkSize.value && (typeof multiThreadChunkSize.value !== "number" || multiThreadChunkSize.value <= 0)) {
          errorList.value.push("Chunk Size must be a positive number.");
          errorTags.value.multiThreadChunkSize = true;
        }
        if (multiThreadCutoff.value && (typeof multiThreadCutoff.value !== "number" || multiThreadCutoff.value <= 0)) {
          errorList.value.push("Cutoff Size must be a positive number.");
          errorTags.value.multiThreadCutoff = true;
        }
        if (multiThreadStreams.value && (typeof multiThreadStreams.value !== "number" || multiThreadStreams.value <= 0)) {
          errorList.value.push("Number of Streams must be a positive integer.");
          errorTags.value.multiThreadStreams = true;
        }
        if (multiThreadWriteBufferSize.value && (typeof multiThreadWriteBufferSize.value !== "number" || multiThreadWriteBufferSize.value <= 0)) {
          errorList.value.push("Write Buffer Size must be a positive number.");
          errorTags.value.multiThreadWriteBufferSize = true;
        }
      }
    }
    async function validateSelectedRemote() {
      errorTags.value.selectedRemote = false;
      if (!selectedRemote.value) {
        errorList.value.push("Remote is required.");
        errorTags.value.selectedRemote = true;
        return false;
      }
      const remoteExists = existingRemotes.value.some(
        (remote) => remote.name === selectedRemote.value.name
      );
      if (!remoteExists) {
        errorList.value.push(`Selected remote "${selectedRemote.value.name}" does not exist.`);
        errorTags.value.selectedRemote = true;
        return false;
      }
      return true;
    }
    function clearErrorTags() {
      for (const key in errorTags.value) {
        errorTags.value[key] = false;
      }
      errorList.value = [];
    }
    async function validateParams() {
      await validateSelectedRemote();
      await validateAllValues();
      await validateLocalTransferPath();
      validateDestinationTransferPath();
      if (errorList.value.length == 0 && Object.values(errorTags.value).every((tag) => tag === false)) {
        setParams();
      }
    }
    function setParams() {
      const directionPUSH = new SelectionOption("push", "Push");
      const directionPULL = new SelectionOption("pull", "Pull");
      const transferDirection = directionSwitched.value ? directionPULL : directionPUSH;
      const newParams = new ParameterNode("Cloud Sync Task Config", "cloudSyncConfig").addChild(new StringParameter("Local Path", "local_path", localPath.value)).addChild(new StringParameter("Target Path", "target_path", targetPath.value)).addChild(new SelectionParameter("Direction", "direction", transferDirection.value)).addChild(new SelectionParameter("Transfer Type", "type", transferType.value)).addChild(new SelectionParameter("Provider", "provider", selectedRemote.value.type)).addChild(new StringParameter("Rclone Remote", "rclone_remote", selectedRemote.value.name)).addChild(
        new ParameterNode("Rclone Options", "rcloneOptions").addChild(new StringParameter("Log File Path", "log_file_path", logFilePath.value)).addChild(new BoolParameter("Check First", "check_first_flag", checkFirst.value)).addChild(new BoolParameter("Checksum", "checksum_flag", checksum.value)).addChild(new BoolParameter("Update", "update_flag", update.value)).addChild(new BoolParameter("Ignore Existing", "ignore_existing_flag", ignoreExisting.value)).addChild(new BoolParameter("Dry Run", "dry_run_flag", dryRun.value)).addChild(new IntParameter("Number of Transfers", "transfers", numberOfTransfers.value)).addChild(new StringParameter("Include Pattern", "include_pattern", includePattern.value)).addChild(new StringParameter("Exclude Pattern", "exclude_pattern", excludePattern.value)).addChild(new StringParameter("Additional Custom Arguments", "custom_args", customArgs.value)).addChild(new IntParameter("Limit Bandwidth", "bandwidth_limit_kbps", limitBandwidthKbps.value)).addChild(new BoolParameter("Ignore Size", "ignore_size_flag", ignoreSize.value)).addChild(new BoolParameter("Inplace", "inplace_flag", inplace.value)).addChild(new IntParameter("Multi-Thread Chunk Size", "multithread_chunk_size", multiThreadChunkSize.value)).addChild(new StringParameter("Multi-Thread Chunk Size Unit", "multithread_chunk_size_unit", multiThreadChunkSizeUnit.value)).addChild(new IntParameter("Multi-Thread Cutoff", "multithread_cutoff", multiThreadCutoff.value)).addChild(new StringParameter("Multi-Thread Cutoff Unit", "multithread_cutoff_unit", multiThreadCutoffUnit.value)).addChild(new IntParameter("Multi-Thread Streams", "multithread_streams", multiThreadStreams.value)).addChild(new IntParameter("Multi-Thread Write Buffer Size", "multithread_write_buffer_size", multiThreadWriteBufferSize.value)).addChild(new StringParameter("Multi-Thread Write Buffer Size Unit", "multithread_write_buffer_size_unit", multiThreadWriteBufferSizeUnit.value)).addChild(new StringParameter("Files From", "include_from_path", includeFromPath.value)).addChild(new StringParameter("Exclude From", "exclude_from_path", excludeFromPath.value)).addChild(new IntParameter("Max Transfer Size", "max_transfer_size", maxTransferSize.value)).addChild(new SelectionParameter("Cutoff Mode", "cutoff_mode", cutoffMode.value)).addChild(new BoolParameter("No Traverse", "no_traverse_flag", noTraverse.value))
      );
      parameters.value = newParams;
    }
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    provide("show-create-remote", showCreateRemote);
    provide("show-manage-remotes", showManageRemotes);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        props.simple ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          createVNode(_sfc_main$a, {
            title: "What do you want to copy?",
            description: "Choose a folder stored on this server that was\n            created by a client backup. This is the backed-up copy of your files, not your live PC."
          }, {
            default: withCtx(() => {
              var _a;
              return [
                _cache[51] || (_cache[51] = createBaseVNode("label", { class: "block text-sm mt-1 text-default" }, "Local folder", -1)),
                unref(loadingFolders) ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                  createVNode(_sfc_main$8, {
                    width: "w-5",
                    height: "h-5",
                    baseColor: "text-gray-200",
                    fillColor: "fill-gray-500"
                  }),
                  _cache[47] || (_cache[47] = createBaseVNode("span", { class: "text-sm text-muted" }, "Discovering your folders\u2026", -1))
                ])) : unref(discoveryError) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                  createTextVNode(toDisplayString(unref(discoveryError)) + " ", 1),
                  createBaseVNode("div", _hoisted_4$1, [
                    _cache[48] || (_cache[48] = createTextVNode(" You can still type a path manually below. ", -1)),
                    createBaseVNode("button", {
                      class: "btn btn-xxs btn-secondary ml-2",
                      onClick: _cache[0] || (_cache[0] = ($event) => unref(folderList).refresh())
                    }, "Retry")
                  ])
                ])) : opts.value.length ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localPath.value = $event),
                    class: "input-textlike text-sm w-full text-default bg-default rounded-md"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(opts.value, (opt) => {
                      return openBlock(), createElementBlock("option", {
                        key: opt.value,
                        value: opt.value
                      }, toDisplayString(opt.label), 9, _hoisted_6$1);
                    }), 128))
                  ], 512), [
                    [vModelSelect, localPath.value]
                  ]),
                  createBaseVNode("p", _hoisted_7$1, [
                    createTextVNode(" Scope: " + toDisplayString(shareRoot.value || "\u2014") + " ", 1),
                    createBaseVNode("span", null, " \u2022 Full Path: " + toDisplayString(localPath.value), 1),
                    smbUser.value ? (openBlock(), createElementBlock("span", _hoisted_8$1, " \u2022 User: " + toDisplayString(smbUser.value), 1)) : createCommentVNode("", true)
                  ])
                ])) : (openBlock(), createElementBlock("div", _hoisted_9$1, [
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localPath.value = $event),
                    onBlur: _cache[3] || (_cache[3] = ($event) => ensureTrailingSlash("local")),
                    class: normalizeClass([
                      "mt-1 block w-full input-textlike sm:text-sm bg-default text-default",
                      ((_a = errorTags.value) == null ? void 0 : _a.localPath) ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                    ]),
                    placeholder: "/data/photos/"
                  }, null, 34), [
                    [vModelText, localPath.value]
                  ]),
                  _cache[49] || (_cache[49] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, "No folders found; enter a path manually.", -1)),
                  _cache[50] || (_cache[50] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, [
                    createTextVNode(" Tip: Local path should end with a "),
                    createBaseVNode("code", null, "/"),
                    createTextVNode(". We\u2019ll add it for you if missing. ")
                  ], -1))
                ]))
              ];
            }),
            _: 1
          }),
          createVNode(_sfc_main$a, {
            title: "Choose your cloud account",
            description: "Pick an existing account or add a new one."
          }, {
            default: withCtx(() => {
              var _a, _b, _c;
              return [
                createBaseVNode("div", _hoisted_10$1, [
                  createBaseVNode("div", _hoisted_11$1, [
                    _cache[53] || (_cache[53] = createBaseVNode("label", { class: "block text-sm mt-1 text-default" }, "Cloud account", -1)),
                    createBaseVNode("div", _hoisted_12$1, [
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedRemote.value = $event),
                        class: normalizeClass(["mt-1 block w-full input-textlike sm:text-sm text-default", [
                          ((_a = errorTags.value) == null ? void 0 : _a.selectedRemote) ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                        ]])
                      }, [
                        _cache[52] || (_cache[52] = createBaseVNode("option", { value: void 0 }, "Select Remote", -1)),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(existingRemotes), (remote, idx) => {
                          return openBlock(), createElementBlock("option", {
                            key: idx,
                            value: remote
                          }, toDisplayString(remote.name), 9, _hoisted_13$1);
                        }), 128))
                      ], 2), [
                        [vModelSelect, selectedRemote.value]
                      ]),
                      selectedRemote.value ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: unref(getProviderLogo)(void 0, selectedRemote.value),
                        title: ((_c = (_b = selectedRemote.value).getProviderName) == null ? void 0 : _c.call(_b)) || selectedRemote.value.name,
                        alt: "provider",
                        class: "w-5 h-5"
                      }, null, 8, _hoisted_14)) : createCommentVNode("", true)
                    ]),
                    _cache[54] || (_cache[54] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, " We use an rclone \u201Cremote\u201D for the cloud connection. ", -1))
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("button", {
                      onClick: _cache[5] || (_cache[5] = withModifiers(($event) => manageRemotesBtn(), ["stop"])),
                      class: "btn btn-secondary w-full lg:w-auto"
                    }, " Add/Manage Cloud Credentials ")
                  ])
                ])
              ];
            }),
            _: 1
          }),
          createVNode(_sfc_main$a, { title: "How should we transfer?" }, {
            default: withCtx(() => [
              createBaseVNode("fieldset", _hoisted_16, [
                _cache[58] || (_cache[58] = createBaseVNode("legend", { class: "sr-only" }, "Transfer behavior", -1)),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("label", _hoisted_18, [
                    withDirectives(createBaseVNode("input", {
                      type: "radio",
                      class: "mt-1 h-4 w-4",
                      value: "copy",
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => transferType.value = $event)
                    }, null, 512), [
                      [vModelRadio, transferType.value]
                    ]),
                    _cache[55] || (_cache[55] = createBaseVNode("div", null, [
                      createBaseVNode("div", { class: "text-sm text-default font-medium" }, "Copy"),
                      createBaseVNode("div", { class: "text-[11px] text-muted" }, "Add/update files; don\u2019t delete at destination.")
                    ], -1))
                  ]),
                  createBaseVNode("label", _hoisted_19, [
                    withDirectives(createBaseVNode("input", {
                      type: "radio",
                      class: "mt-1 h-4 w-4",
                      value: "sync",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => transferType.value = $event)
                    }, null, 512), [
                      [vModelRadio, transferType.value]
                    ]),
                    _cache[56] || (_cache[56] = createBaseVNode("div", null, [
                      createBaseVNode("div", { class: "text-sm text-default font-medium" }, "Sync"),
                      createBaseVNode("div", { class: "text-[11px] text-muted" }, "Make destination match source (may delete extras). ")
                    ], -1))
                  ]),
                  createBaseVNode("label", _hoisted_20, [
                    withDirectives(createBaseVNode("input", {
                      type: "radio",
                      class: "mt-1 h-4 w-4",
                      value: "move",
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => transferType.value = $event)
                    }, null, 512), [
                      [vModelRadio, transferType.value]
                    ]),
                    _cache[57] || (_cache[57] = createBaseVNode("div", null, [
                      createBaseVNode("div", { class: "text-sm text-default font-medium" }, "Move"),
                      createBaseVNode("div", { class: "text-[11px] text-muted" }, "Copy then remove from source after success.")
                    ], -1))
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_sfc_main$a, {
            title: "Where do you want to copy it to?",
            description: "Choose where it will live in the cloud."
          }, {
            default: withCtx(() => {
              var _a;
              return [
                createBaseVNode("label", _hoisted_21, [
                  _cache[59] || (_cache[59] = createTextVNode(" Cloud folder ", -1)),
                  selectedRemote.value ? (openBlock(), createElementBlock("span", _hoisted_22, "(" + toDisplayString(selectedRemote.value.name) + ")", 1)) : createCommentVNode("", true)
                ]),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => targetPath.value = $event),
                  class: normalizeClass(["mt-1 block w-full input-textlike sm:text-sm bg-default text-default", [((_a = errorTags.value) == null ? void 0 : _a.targetPath) ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]]),
                  placeholder: "e.g. bucket/folder"
                }, null, 2), [
                  [vModelText, targetPath.value]
                ]),
                _cache[60] || (_cache[60] = createBaseVNode("p", { class: "text-[11px] text-muted mt-1" }, [
                  createTextVNode(" Example: "),
                  createBaseVNode("code", null, "my-bucket/backups/"),
                  createTextVNode(". This is the path inside the selected cloud account. ")
                ], -1))
              ];
            }),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_23, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createVNode(_sfc_main$8, {
                width: "w-20",
                height: "h-20",
                baseColor: "text-gray-200",
                fillColor: "fill-gray-500"
              })
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              _cache[71] || (_cache[71] = createBaseVNode("label", { class: "mt-1 mb-2 col-span-1 block text-base leading-6 text-default" }, "Remote Configuration", -1)),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("label", _hoisted_30, [
                    _cache[61] || (_cache[61] = createTextVNode(" Select Existing Remote ", -1)),
                    createVNode(_sfc_main$9, {
                      class: "ml-1",
                      title: "Choose a preconfigured Rclone remote connection to use for this task."
                    }),
                    selectedRemote.value ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: unref(getProviderLogo)(void 0, selectedRemote.value),
                      alt: "provider-logo",
                      class: "inline-block w-5 h-5 ml-2",
                      title: selectedRemote.value.getProviderName()
                    }, null, 8, _hoisted_31)) : createCommentVNode("", true)
                  ]),
                  errorTags.value.selectedRemote ? (openBlock(), createBlock(unref(render$4), {
                    key: 0,
                    class: "mt-1 w-5 h-5 text-danger"
                  })) : createCommentVNode("", true)
                ]),
                unref(existingRemotes).length > 0 ? withDirectives((openBlock(), createElementBlock("select", {
                  key: 0,
                  id: "existing-remote-selection",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => selectedRemote.value = $event),
                  name: "existing-remote-selection",
                  class: normalizeClass([[errorTags.value.selectedRemote ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6 col-span-1"])
                }, [
                  _cache[62] || (_cache[62] = createBaseVNode("option", { value: void 0 }, "Select Remote", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(existingRemotes), (remote, idx) => {
                    return openBlock(), createElementBlock("option", {
                      key: idx,
                      value: remote
                    }, toDisplayString(remote.name), 9, _hoisted_32);
                  }), 128))
                ], 2)), [
                  [vModelSelect, selectedRemote.value]
                ]) : withDirectives((openBlock(), createElementBlock("select", {
                  key: 1,
                  disabled: "",
                  id: "existing-remote-selection",
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => selectedRemote.value = $event),
                  name: "existing-remote-selection",
                  class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6 col-span-1"
                }, [..._cache[63] || (_cache[63] = [
                  createBaseVNode("option", { value: void 0 }, "No Remotes Found", -1)
                ])], 512)), [
                  [vModelSelect, selectedRemote.value]
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("button", {
                    onClick: _cache[12] || (_cache[12] = withModifiers(($event) => createRemoteBtn(), ["stop"])),
                    id: "new-remote-btn",
                    name: "new-remote-btn",
                    class: normalizeClass(["mt-1 btn btn-primary h-fit w-full", unref(truncateText)]),
                    title: "Create a new Rclone remote."
                  }, " Create New ", 2),
                  unref(existingRemotes).length > 0 ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: _cache[13] || (_cache[13] = withModifiers(($event) => manageRemotesBtn(), ["stop"])),
                    id: "manage-remotes-btn",
                    title: "Edit or delete an existing Rclone remote.",
                    name: "manage-remotes-btn",
                    class: normalizeClass(["mt-1 btn btn-secondary h-fit w-full", unref(truncateText)])
                  }, " Manage Existing ", 2)) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    disabled: "",
                    onClick: _cache[14] || (_cache[14] = withModifiers(($event) => manageRemotesBtn(), ["stop"])),
                    id: "manage-remotes-btn",
                    title: "No existing Rclone remotes detected.",
                    name: "manage-remotes-btn",
                    class: normalizeClass(["mt-1 btn btn-secondary h-fit w-full", unref(truncateText)])
                  }, " Manage Existing ", 2))
                ])
              ]),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("label", _hoisted_37, [
                      _cache[64] || (_cache[64] = createTextVNode(" Transfer Type ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: transferTypeComputed.value
                      }, null, 8, ["title"])
                    ]),
                    errorTags.value.transferType ? (openBlock(), createBlock(unref(render$4), {
                      key: 0,
                      class: "mt-1 w-5 h-5 text-danger"
                    })) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    withDirectives(createBaseVNode("select", {
                      id: "existing-remote-selection",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => transferType.value = $event),
                      name: "existing-remote-selection",
                      class: normalizeClass([[errorTags.value.transferType ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"])
                    }, [..._cache[65] || (_cache[65] = [
                      createBaseVNode("option", { value: void 0 }, "Select Type of Rclone Transfer", -1),
                      createBaseVNode("option", { value: "copy" }, "COPY", -1),
                      createBaseVNode("option", { value: "move" }, "MOVE", -1),
                      createBaseVNode("option", { value: "sync" }, "SYNC", -1)
                    ])], 2), [
                      [vModelSelect, transferType.value]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    directionSwitched.value ? (openBlock(), createElementBlock("label", _hoisted_41, " Direction - Pull ")) : (openBlock(), createElementBlock("label", _hoisted_42, " Direction - Push ")),
                    createVNode(unref(ue), {
                      modelValue: directionSwitched.value,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => directionSwitched.value = $event),
                      class: normalizeClass([directionSwitched.value ? "bg-secondary" : "bg-well", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"])
                    }, {
                      default: withCtx(() => [
                        _cache[66] || (_cache[66] = createBaseVNode("span", { class: "sr-only" }, "Use setting", -1)),
                        createBaseVNode("span", {
                          "aria-hidden": "true",
                          class: normalizeClass([directionSwitched.value ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-default shadow ring-0 transition duration-200 ease-in-out"])
                        }, null, 2)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "class"])
                  ]),
                  createBaseVNode("div", _hoisted_43, [
                    createBaseVNode("div", {
                      onClick: _cache[17] || (_cache[17] = ($event) => directionSwitched.value = !directionSwitched.value),
                      class: "flex flex-row justify-around text-center items-center space-x-1 bg-plugin-header rounded-lg p-2"
                    }, [
                      _cache[67] || (_cache[67] = createBaseVNode("span", { class: "text-default" }, "Local Directory", -1)),
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("span", {
                          class: normalizeClass([directionSwitched.value ? "rotate-180" : "", "flex items-center transition-transform duration-200"])
                        }, [
                          createVNode(unref(render$3), { class: "w-5 h-5 text-muted" })
                        ], 2),
                        createBaseVNode("span", {
                          class: normalizeClass([directionSwitched.value ? "rotate-180" : "", "flex items-center transition-transform duration-200"])
                        }, [
                          createVNode(unref(render$3), { class: "w-5 h-5 text-muted" })
                        ], 2),
                        createBaseVNode("span", {
                          class: normalizeClass([directionSwitched.value ? "rotate-180" : "", "flex items-center transition-transform duration-200"])
                        }, [
                          createVNode(unref(render$3), { class: "w-5 h-5 text-muted" })
                        ], 2)
                      ]),
                      _cache[68] || (_cache[68] = createBaseVNode("span", { class: "text-default" }, "Cloud Remote", -1))
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    createBaseVNode("label", _hoisted_48, [
                      _cache[69] || (_cache[69] = createTextVNode(" Local Path ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: localTitleComputed.value
                      }, null, 8, ["title"])
                    ]),
                    errorTags.value.localPath ? (openBlock(), createBlock(unref(render$4), {
                      key: 0,
                      class: "mt-1 w-5 h-5 text-danger"
                    })) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    withDirectives(createBaseVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => localPath.value = $event),
                      class: normalizeClass(["mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default", [errorTags.value.localPath ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]]),
                      placeholder: "Specify Local Path",
                      title: localTitleComputed.value
                    }, null, 10, _hoisted_49), [
                      [vModelText, localPath.value]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_50, [
                  createBaseVNode("div", _hoisted_51, [
                    createBaseVNode("label", _hoisted_52, [
                      _cache[70] || (_cache[70] = createTextVNode(" Target Path ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: targetTitleComputed.value
                      }, null, 8, ["title"])
                    ]),
                    errorTags.value.targetPath ? (openBlock(), createBlock(unref(render$4), {
                      key: 0,
                      class: "mt-1 w-5 h-5 text-danger"
                    })) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    withDirectives(createBaseVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => targetPath.value = $event),
                      class: normalizeClass(["mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default", [errorTags.value.targetPath ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]]),
                      placeholder: "Specify Target Path",
                      title: targetTitleComputed.value
                    }, null, 10, _hoisted_53), [
                      [vModelText, targetPath.value]
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_54, [
              _cache[101] || (_cache[101] = createBaseVNode("label", { class: "mt-1 block text-base leading-6 text-default" }, "Rclone Options", -1)),
              mutexWarnings.value.length ? (openBlock(), createElementBlock("div", _hoisted_55, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(mutexWarnings.value, (msg, idx) => {
                  return openBlock(), createElementBlock("div", {
                    key: "mutex-warning-" + idx,
                    class: "mb-1 flex items-start gap-2 rounded-md border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 text-xs text-amber-900 dark:text-amber-100"
                  }, [
                    createVNode(unref(render$4), { class: "mt-[2px] h-4 w-4" }),
                    createBaseVNode("span", null, toDisplayString(msg), 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_56, [
                createBaseVNode("div", _hoisted_57, [
                  createBaseVNode("div", _hoisted_58, [
                    createBaseVNode("label", _hoisted_59, [
                      _cache[72] || (_cache[72] = createTextVNode(" Number of Transfers ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: `Limit the number of simultaneous file transfers. Higher values may speed up transfers but require more system resources.
Default is 4.`
                      })
                    ]),
                    errorTags.value.numberOfTransfers ? (openBlock(), createBlock(unref(render$4), {
                      key: 0,
                      class: "mt-1 w-5 h-5 text-danger"
                    })) : createCommentVNode("", true),
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      min: "1",
                      "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => numberOfTransfers.value = $event),
                      title: "Limit the number of simultaneous file transfers. Higher values may speed up transfers but require more system resources.",
                      class: normalizeClass([[errorTags.value.numberOfTransfers ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                      placeholder: "Default is 4"
                    }, null, 2), [
                      [vModelText, numberOfTransfers.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_60, [
                    createBaseVNode("label", _hoisted_61, [
                      _cache[73] || (_cache[73] = createTextVNode(" Check First ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: "Perform a check before transferring files to compare the source and destination. Useful for validating integrity."
                      })
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => checkFirst.value = $event),
                      class: "ml-2 h-4 w-4 rounded"
                    }, null, 512), [
                      [vModelCheckbox, checkFirst.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_62, [
                    createBaseVNode("label", _hoisted_63, [
                      _cache[74] || (_cache[74] = createTextVNode(" Update ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: "Transfer only updated files, skipping files that are already up-to-date in the destination."
                      })
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => update.value = $event),
                      class: "h-4 w-4 rounded"
                    }, null, 512), [
                      [vModelCheckbox, update.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_64, [
                    createBaseVNode("label", _hoisted_65, [
                      _cache[75] || (_cache[75] = createTextVNode(" Dry Run ", -1)),
                      createVNode(_sfc_main$9, {
                        class: "ml-1",
                        title: "Simulate the operation without making any actual changes. Ideal for testing command behavior."
                      })
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => dryRun.value = $event),
                      class: "h-4 w-4 rounded"
                    }, null, 512), [
                      [vModelCheckbox, dryRun.value]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_66, [
                  createBaseVNode("div", _hoisted_67, [
                    createBaseVNode("div", _hoisted_68, [
                      createBaseVNode("div", _hoisted_69, [
                        createBaseVNode("label", _hoisted_70, [
                          _cache[76] || (_cache[76] = createTextVNode(" Include Pattern ", -1)),
                          createVNode(_sfc_main$9, {
                            class: "ml-1",
                            title: `Specify a pattern of files to include in the transfer.
(E.g., *.txt includes all text files.)
- Separate patterns with commas (,).`
                          })
                        ]),
                        errorTags.value.includePattern ? (openBlock(), createBlock(unref(render$4), {
                          key: 0,
                          class: "mt-1 w-5 h-5 text-danger"
                        })) : createCommentVNode("", true)
                      ]),
                      withDirectives(createBaseVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => includePattern.value = $event),
                        class: normalizeClass([[errorTags.value.includePattern ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                        placeholder: "Eg. */, *.txt",
                        title: `Specify a pattern of files to include in the transfer.
(E.g., *.txt includes all text files.)
- Separate patterns with commas (,).`
                      }, null, 2), [
                        [vModelText, includePattern.value]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_71, [
                      createBaseVNode("div", _hoisted_72, [
                        createBaseVNode("label", _hoisted_73, [
                          _cache[77] || (_cache[77] = createTextVNode(" Exclude Pattern ", -1)),
                          createVNode(_sfc_main$9, {
                            class: "ml-1",
                            title: `Specify a pattern of files to exclude in the transfer.
(E.g., *.log excludes all log files.)
- Separate patterns with commas (,).`
                          })
                        ]),
                        errorTags.value.excludePattern ? (openBlock(), createBlock(unref(render$4), {
                          key: 0,
                          class: "mt-1 w-5 h-5 text-danger"
                        })) : createCommentVNode("", true)
                      ]),
                      withDirectives(createBaseVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => excludePattern.value = $event),
                        class: normalizeClass([[errorTags.value.excludePattern ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                        placeholder: "Eg. */, *.txt",
                        title: `Specify a pattern of files to exclude in the transfer.
(E.g., *.log excludes all log files.)
- Separate patterns with commas (,).`
                      }, null, 2), [
                        [vModelText, excludePattern.value]
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_74, [
                    createBaseVNode("div", _hoisted_75, [
                      createBaseVNode("label", _hoisted_76, [
                        _cache[78] || (_cache[78] = createTextVNode(" Log File Path ", -1)),
                        createVNode(_sfc_main$9, {
                          class: "ml-1",
                          title: `Optional path to an rclone log file. If set, rclone will write logs to this file using --log-file=PATH.`
                        })
                      ]),
                      errorTags.value.logFilePath ? (openBlock(), createBlock(unref(render$4), {
                        key: 0,
                        class: "mt-1 w-5 h-5 text-danger"
                      })) : createCommentVNode("", true)
                    ]),
                    withDirectives(createBaseVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => logFilePath.value = $event),
                      class: normalizeClass([[errorTags.value.logFilePath ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                      placeholder: "Eg. /var/log/newtask.log",
                      title: `Optional path to an rclone log file. If set, rclone will write logs to this file using --log-file=PATH.`
                    }, null, 2), [
                      [vModelText, logFilePath.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_77, [
                    createBaseVNode("div", _hoisted_78, [
                      createBaseVNode("label", _hoisted_79, [
                        _cache[79] || (_cache[79] = createTextVNode(" Extra Parameters ", -1)),
                        createVNode(_sfc_main$9, {
                          class: "ml-1",
                          title: `Specify any additional Rclone parameters not covered by other options.
(E.g., --ignore-checksum.)
- Separate any extra parameters, flags or options you wish to include with commas (,).`
                        })
                      ]),
                      errorTags.value.customArgs ? (openBlock(), createBlock(unref(render$4), {
                        key: 0,
                        class: "mt-1 w-5 h-5 text-danger"
                      })) : createCommentVNode("", true)
                    ]),
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => customArgs.value = $event),
                      rows: "1",
                      class: normalizeClass([[errorTags.value.customArgs ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                      placeholder: "Eg. -I, --ignore-checksum, etc.",
                      title: `Specify any additional Rclone parameters not covered by other options.
(E.g., --ignore-checksum.)
- Separate any extra parameters, flags or options you wish to include with commas (,).`
                    }, null, 2), [
                      [vModelText, customArgs.value]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_80, [
                  createVNode(unref(N), null, {
                    default: withCtx(({ open }) => [
                      createVNode(unref(Q), { class: "bg-default mt-2 w-full justify-start text-center rounded-md flex flex-row" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_81, [
                            createVNode(unref(render$2), {
                              class: normalizeClass(["h-7 w-7 text-default transition-all duration-200 transform", { "rotate-90": !open, "rotate-180": open }])
                            }, null, 8, ["class"])
                          ]),
                          _cache[80] || (_cache[80] = createBaseVNode("div", { class: "ml-3 mt-1.5" }, [
                            createBaseVNode("span", { class: "text-start text-base text-default" }, "Advanced Options")
                          ], -1))
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(V), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_82, [
                            createBaseVNode("div", _hoisted_83, [
                              createBaseVNode("div", _hoisted_84, [
                                createBaseVNode("label", _hoisted_85, [
                                  _cache[81] || (_cache[81] = createTextVNode(" Checksum ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: "Use checksums to verify file integrity, where possible. Note that this may increase transfer time."
                                  })
                                ]),
                                withDirectives(createBaseVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => checksum.value = $event),
                                  class: "ml-2 h-4 w-4 rounded"
                                }, null, 512), [
                                  [vModelCheckbox, checksum.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_86, [
                                createBaseVNode("label", _hoisted_87, [
                                  _cache[82] || (_cache[82] = createTextVNode(" Ignore Existing ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: "Skip files that already exist on the destination without verifying their integrity."
                                  })
                                ]),
                                withDirectives(createBaseVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => ignoreExisting.value = $event),
                                  class: "ml-2 h-4 w-4 rounded"
                                }, null, 512), [
                                  [vModelCheckbox, ignoreExisting.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_88, [
                                createBaseVNode("label", _hoisted_89, [
                                  _cache[83] || (_cache[83] = createTextVNode(" Ignore Size ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: "Ignore file sizes during the transfer, transferring files regardless of their size difference between source and destination."
                                  })
                                ]),
                                withDirectives(createBaseVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => ignoreSize.value = $event),
                                  class: "h-4 w-4 rounded"
                                }, null, 512), [
                                  [vModelCheckbox, ignoreSize.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_90, [
                                createBaseVNode("label", _hoisted_91, [
                                  _cache[84] || (_cache[84] = createTextVNode(" Inplace ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: "Write files directly to the destination, instead of using temporary files. This option may speed up transfers but can risk partial data if interrupted."
                                  })
                                ]),
                                withDirectives(createBaseVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => inplace.value = $event),
                                  class: "h-4 w-4 rounded"
                                }, null, 512), [
                                  [vModelCheckbox, inplace.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_92, [
                                createBaseVNode("label", _hoisted_93, [
                                  _cache[85] || (_cache[85] = createTextVNode(" No Traverse ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: "Do not traverse the destination folder. Useful for remote systems where directory listing is slow."
                                  })
                                ]),
                                withDirectives(createBaseVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => noTraverse.value = $event),
                                  class: "h-4 w-4 rounded"
                                }, null, 512), [
                                  [vModelCheckbox, noTraverse.value]
                                ])
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_94, [
                              createBaseVNode("div", _hoisted_95, [
                                createBaseVNode("label", _hoisted_96, [
                                  _cache[86] || (_cache[86] = createTextVNode(" Limit Bandwidth (Kbps) ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: "Throttle bandwidth usage in kilobytes per second to control transfer speed and reduce network load."
                                  })
                                ]),
                                errorTags.value.limitBandwidthKbps ? (openBlock(), createBlock(unref(render$4), {
                                  key: 0,
                                  class: "mt-1 w-5 h-5 text-danger"
                                })) : createCommentVNode("", true),
                                withDirectives(createBaseVNode("input", {
                                  type: "number",
                                  min: "0",
                                  "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => limitBandwidthKbps.value = $event),
                                  class: normalizeClass([[errorTags.value.limitBandwidthKbps ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                  placeholder: "Default is None"
                                }, null, 2), [
                                  [vModelText, limitBandwidthKbps.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_97, [
                                createBaseVNode("label", _hoisted_98, [
                                  _cache[87] || (_cache[87] = createTextVNode(" Max Transfer Size ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: `Set a maximum size limit for files to be transferred. Files larger than this size will be skipped.
Default is None.`
                                  })
                                ]),
                                errorTags.value.maxTransferSize ? (openBlock(), createBlock(unref(render$4), {
                                  key: 0,
                                  class: "mt-1 w-5 h-5 text-danger"
                                })) : createCommentVNode("", true),
                                createBaseVNode("div", _hoisted_99, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "number",
                                    min: "0",
                                    "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => maxTransferSize.value = $event),
                                    class: normalizeClass([[errorTags.value.maxTransferSize ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                    placeholder: ""
                                  }, null, 2), [
                                    [vModelText, maxTransferSize.value]
                                  ]),
                                  withDirectives(createBaseVNode("select", {
                                    "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => maxTransferSizeUnit.value = $event),
                                    class: "mt-1 block text-default input-textlike sm:text-sm sm:leading-6 bg-default"
                                  }, [..._cache[88] || (_cache[88] = [
                                    createBaseVNode("option", { value: "B" }, "B", -1),
                                    createBaseVNode("option", { value: "KiB" }, "KiB", -1),
                                    createBaseVNode("option", { value: "MiB" }, "MiB", -1),
                                    createBaseVNode("option", { value: "GiB" }, "GiB", -1),
                                    createBaseVNode("option", { value: "TiB" }, "TiB", -1),
                                    createBaseVNode("option", { value: "PiB" }, "PiB", -1)
                                  ])], 512), [
                                    [vModelSelect, maxTransferSizeUnit.value]
                                  ])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_100, [
                                createBaseVNode("label", _hoisted_101, [
                                  _cache[89] || (_cache[89] = createTextVNode(" Cutoff Mode ", -1)),
                                  createVNode(_sfc_main$9, {
                                    class: "ml-1",
                                    title: `(Requires Max Transfer Size)
Specify the cutoff mode to use when reaching max transfer limit.
Default is HARD.`
                                  })
                                ]),
                                withDirectives(createBaseVNode("select", {
                                  "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => cutoffMode.value = $event),
                                  title: `(Requires Max Transfer Size)
Specify the cutoff mode to use when reaching max transfer limit.
Default is HARD.`,
                                  disabled: !maxTransferSize.value || maxTransferSize.value <= 0,
                                  class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"
                                }, [..._cache[90] || (_cache[90] = [
                                  createBaseVNode("option", { value: void 0 }, "Select Mode", -1),
                                  createBaseVNode("option", { value: "HARD" }, "HARD", -1),
                                  createBaseVNode("option", { value: "SOFT" }, "SOFT", -1),
                                  createBaseVNode("option", { value: "CAUTIOUS" }, "CAUTIOUS", -1)
                                ])], 8, _hoisted_102), [
                                  [vModelSelect, cutoffMode.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_103, [
                                createBaseVNode("div", _hoisted_104, [
                                  createBaseVNode("div", _hoisted_105, [
                                    createBaseVNode("label", _hoisted_106, [
                                      _cache[91] || (_cache[91] = createTextVNode(" Include Files from Path ", -1)),
                                      createVNode(_sfc_main$9, {
                                        class: "ml-1",
                                        title: "Specify a file containing a list of files to include in the transfer."
                                      })
                                    ]),
                                    errorTags.value.includeFromPath ? (openBlock(), createBlock(unref(render$4), {
                                      key: 0,
                                      class: "mt-1 w-5 h-5 text-danger"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  withDirectives(createBaseVNode("input", {
                                    type: "text",
                                    "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => includeFromPath.value = $event),
                                    title: "Specify a file containing a list of files to include in the transfer.",
                                    class: normalizeClass([[errorTags.value.includeFromPath ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                    placeholder: "Eg. '/path/to/included_file_paths.txt'"
                                  }, null, 2), [
                                    [vModelText, includeFromPath.value]
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_107, [
                                  createBaseVNode("div", _hoisted_108, [
                                    createBaseVNode("label", _hoisted_109, [
                                      _cache[92] || (_cache[92] = createTextVNode(" Exclude Files from Path ", -1)),
                                      createVNode(_sfc_main$9, {
                                        class: "ml-1",
                                        title: "Specify a file containing a list of files to exclude from the transfer."
                                      })
                                    ]),
                                    errorTags.value.excludeFromPath ? (openBlock(), createBlock(unref(render$4), {
                                      key: 0,
                                      class: "mt-1 w-5 h-5 text-danger"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  withDirectives(createBaseVNode("input", {
                                    type: "text",
                                    "onUpdate:modelValue": _cache[38] || (_cache[38] = ($event) => excludeFromPath.value = $event),
                                    title: "Specify a file containing a list of files to exclude from the transfer.",
                                    class: normalizeClass([[errorTags.value.excludeFromPath ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                    placeholder: "Eg. '/path/to/excluded_files.txt'"
                                  }, null, 2), [
                                    [vModelText, excludeFromPath.value]
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_110, [
                              createBaseVNode("label", _hoisted_111, [
                                _cache[93] || (_cache[93] = createTextVNode(" Use Multiple Threads ", -1)),
                                withDirectives(createBaseVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => multiThreadOptions.value = $event),
                                  class: "ml-4 mb-0.5 h-4 w-4 rounded"
                                }, null, 512), [
                                  [vModelCheckbox, multiThreadOptions.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_112, [
                                createBaseVNode("div", _hoisted_113, [
                                  createBaseVNode("label", _hoisted_114, [
                                    _cache[94] || (_cache[94] = createTextVNode(" Chunk Size ", -1)),
                                    createVNode(_sfc_main$9, {
                                      class: "ml-1",
                                      title: `Set the size of chunks for chunked transfers. This option may improve performance for large files.
Default is 64MiB.`
                                    })
                                  ]),
                                  errorTags.value.multiThreadChunkSize ? (openBlock(), createBlock(unref(render$4), {
                                    key: 0,
                                    class: "ml-1 w-5 h-5 text-danger"
                                  })) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("div", _hoisted_115, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "number",
                                    min: "0",
                                    "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => multiThreadChunkSize.value = $event),
                                    disabled: !multiThreadOptions.value,
                                    title: `Set the size of chunks for chunked transfers. This option may improve performance for large files.
Default is 64MiB.`,
                                    class: normalizeClass([[errorTags.value.multiThreadChunkSize ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                    placeholder: "Default is 64 MiB"
                                  }, null, 10, _hoisted_116), [
                                    [vModelText, multiThreadChunkSize.value]
                                  ]),
                                  withDirectives(createBaseVNode("select", {
                                    "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => multiThreadChunkSizeUnit.value = $event),
                                    disabled: !multiThreadOptions.value,
                                    class: "mt-1 ml-1 block text-default input-textlike sm:text-sm sm:leading-6 bg-default"
                                  }, [..._cache[95] || (_cache[95] = [
                                    createBaseVNode("option", { value: "B" }, "B", -1),
                                    createBaseVNode("option", { value: "KiB" }, "KiB", -1),
                                    createBaseVNode("option", { value: "MiB" }, "MiB", -1),
                                    createBaseVNode("option", { value: "GiB" }, "GiB", -1),
                                    createBaseVNode("option", { value: "TiB" }, "TiB", -1),
                                    createBaseVNode("option", { value: "PiB" }, "PiB", -1)
                                  ])], 8, _hoisted_117), [
                                    [vModelSelect, multiThreadChunkSizeUnit.value]
                                  ])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_118, [
                                createBaseVNode("div", _hoisted_119, [
                                  createBaseVNode("label", _hoisted_120, [
                                    _cache[96] || (_cache[96] = createTextVNode(" Cutoff Size ", -1)),
                                    createVNode(_sfc_main$9, {
                                      class: "ml-1",
                                      title: `Specify a maximum file size for which chunking will be used. Files above this size will not be chunked.
Default is 256MiB.`
                                    })
                                  ]),
                                  errorTags.value.multiThreadCutoff ? (openBlock(), createBlock(unref(render$4), {
                                    key: 0,
                                    class: "mt-1 w-5 h-5 text-danger"
                                  })) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("div", _hoisted_121, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "number",
                                    min: "0",
                                    "onUpdate:modelValue": _cache[42] || (_cache[42] = ($event) => multiThreadCutoff.value = $event),
                                    disabled: !multiThreadOptions.value,
                                    title: `Specify a maximum file size for which chunking will be used. Files above this size will not be chunked.
Default is 256MiB.`,
                                    class: normalizeClass([[errorTags.value.multiThreadCutoff ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                    placeholder: "Default is 256 MiB"
                                  }, null, 10, _hoisted_122), [
                                    [vModelText, multiThreadCutoff.value]
                                  ]),
                                  withDirectives(createBaseVNode("select", {
                                    "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => multiThreadCutoffUnit.value = $event),
                                    disabled: !multiThreadOptions.value,
                                    class: "mt-1 ml-1 block text-default input-textlike sm:text-sm sm:leading-6 bg-default"
                                  }, [..._cache[97] || (_cache[97] = [
                                    createBaseVNode("option", { value: "B" }, "B", -1),
                                    createBaseVNode("option", { value: "KiB" }, "KiB", -1),
                                    createBaseVNode("option", { value: "MiB" }, "MiB", -1),
                                    createBaseVNode("option", { value: "GiB" }, "GiB", -1),
                                    createBaseVNode("option", { value: "TiB" }, "TiB", -1),
                                    createBaseVNode("option", { value: "PiB" }, "PiB", -1)
                                  ])], 8, _hoisted_123), [
                                    [vModelSelect, multiThreadCutoffUnit.value]
                                  ])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_124, [
                                createBaseVNode("div", _hoisted_125, [
                                  createBaseVNode("label", _hoisted_126, [
                                    _cache[98] || (_cache[98] = createTextVNode(" Number of Streams ", -1)),
                                    createVNode(_sfc_main$9, {
                                      class: "ml-1",
                                      title: `Set the number of streams (threads) to be used for chunked transfers, where supported.
Default is 4.`
                                    })
                                  ]),
                                  errorTags.value.multiThreadStreams ? (openBlock(), createBlock(unref(render$4), {
                                    key: 0,
                                    class: "mt-1 w-5 h-5 text-danger"
                                  })) : createCommentVNode("", true)
                                ]),
                                withDirectives(createBaseVNode("input", {
                                  type: "number",
                                  "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => multiThreadStreams.value = $event),
                                  min: "1",
                                  disabled: !multiThreadOptions.value,
                                  title: `Set the number of streams (threads) to be used for chunked transfers, where supported.
Default is 4.`,
                                  class: normalizeClass([[errorTags.value.multiThreadStreams ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                  placeholder: "Default is 4 Streams"
                                }, null, 10, _hoisted_127), [
                                  [vModelText, multiThreadStreams.value]
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_128, [
                                createBaseVNode("div", _hoisted_129, [
                                  createBaseVNode("label", {
                                    class: "block text-sm leading-6 text-default",
                                    disabled: !multiThreadOptions.value
                                  }, [
                                    _cache[99] || (_cache[99] = createTextVNode(" Write Buffer Size ", -1)),
                                    createVNode(_sfc_main$9, {
                                      class: "ml-1",
                                      title: `Specify the buffer size for writing data, potentially improving performance for high-throughput transfers.
Default is 128KiB.`
                                    })
                                  ], 8, _hoisted_130),
                                  errorTags.value.multiThreadWriteBufferSize ? (openBlock(), createBlock(unref(render$4), {
                                    key: 0,
                                    class: "mt-1 w-5 h-5 text-danger"
                                  })) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("div", _hoisted_131, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "number",
                                    min: "0",
                                    "onUpdate:modelValue": _cache[45] || (_cache[45] = ($event) => multiThreadWriteBufferSize.value = $event),
                                    disabled: !multiThreadOptions.value,
                                    title: `Specify the buffer size for writing data, potentially improving performance for high-throughput transfers.
Default is 128KiB.`,
                                    class: normalizeClass([[errorTags.value.multiThreadWriteBufferSize ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""], "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default"]),
                                    placeholder: "Default is 128 KiB"
                                  }, null, 10, _hoisted_132), [
                                    [vModelText, multiThreadWriteBufferSize.value]
                                  ]),
                                  withDirectives(createBaseVNode("select", {
                                    "onUpdate:modelValue": _cache[46] || (_cache[46] = ($event) => multiThreadWriteBufferSizeUnit.value = $event),
                                    disabled: !multiThreadOptions.value,
                                    class: "mt-1 ml-1 block text-default input-textlike sm:text-sm sm:leading-6 bg-default"
                                  }, [..._cache[100] || (_cache[100] = [
                                    createBaseVNode("option", { value: "B" }, "B", -1),
                                    createBaseVNode("option", { value: "KiB" }, "KiB", -1),
                                    createBaseVNode("option", { value: "MiB" }, "MiB", -1),
                                    createBaseVNode("option", { value: "GiB" }, "GiB", -1),
                                    createBaseVNode("option", { value: "TiB" }, "TiB", -1),
                                    createBaseVNode("option", { value: "PiB" }, "PiB", -1)
                                  ])], 8, _hoisted_133), [
                                    [vModelSelect, multiThreadWriteBufferSizeUnit.value]
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]))
        ])),
        showCreateRemote.value ? (openBlock(), createElementBlock("div", _hoisted_134, [
          (openBlock(), createBlock(resolveDynamicComponent(createRemoteComponent.value), { "id-key": "create-remote-modal" }))
        ])) : createCommentVNode("", true),
        showManageRemotes.value ? (openBlock(), createElementBlock("div", _hoisted_135, [
          (openBlock(), createBlock(resolveDynamicComponent(manageRemotesComponent.value), { "id-key": "manage-remotes-modal" }))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_2 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "grid grid-flow-cols grid-cols-2 my-2 gap-2" };
const _hoisted_5 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_6 = { class: "mt-1 block text-sm leading-6 text-default" };
const _hoisted_7 = { class: "grid grid-flow-cols my-2 gap-2" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  name: "custom-data",
  class: "border border-default rounded-md p-2 col-span-2 bg-accent"
};
const _hoisted_10 = { name: "path" };
const _hoisted_11 = { class: "flex flex-row justify-between items-center" };
const _hoisted_12 = {
  key: 1,
  class: "border border-default rounded-md p-2 col-span-2 bg-accent"
};
const _hoisted_13 = {
  key: 0,
  class: "error"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomTaskParams",
  props: {
    parameterSchema: {},
    task: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const parameters = inject("parameters");
    const scriptPath = ref("");
    const scriptPathErrorTag = ref(false);
    const inputType = ref("script");
    const commandError = ref("");
    const oneLineCommand = ref("");
    const commandErrorTag = ref(false);
    const wrapCommand = ref("");
    const initialParameters = ref({});
    const errorList = inject("errors");
    const initializeParameters = () => {
      var _a, _b;
      if (props.task) {
        loading.value = true;
        const params = props.task.parameters.children;
        oneLineCommand.value = ((_a = params.find((param) => param.key === "command")) == null ? void 0 : _a.value) || "";
        oneLineCommand.value = unwrapCommand(oneLineCommand.value);
        scriptPath.value = ((_b = params.find((param) => param.key === "filePath")) == null ? void 0 : _b.value) || "";
        if (scriptPath.value !== "") {
          inputType.value = "script";
        } else if (oneLineCommand.value !== "") {
          inputType.value = "command";
        }
        initialParameters.value = {
          oneLineCommand: oneLineCommand.value,
          inputType: inputType.value,
          scriptPath: scriptPath.value
        };
        loading.value = false;
      }
    };
    onMounted(initializeParameters);
    function isValidFilePath(filePath) {
      console.log("File Path: ", filePath);
      if (filePath === "") {
        return false;
      }
      filePath = filePath.trim();
      if (/[:<>?*"|]/.test(filePath)) {
        errorList.value.push("File path contains invalid characters.");
        return false;
      }
      if (/^[ ]|[ ]$/.test(filePath)) {
        errorList.value.push("File path cannot start or end with a space.");
        return false;
      }
      const validPathPattern = /^((\/[a-zA-Z0-9_.-]+)+|\.[a-zA-Z0-9_.-]+)$/;
      if (!validPathPattern.test(filePath)) {
        errorList.value.push("File path has an invalid structure.");
        return false;
      }
      if (filePath.includes("//")) {
        errorList.value.push("File path cannot contain consecutive slashes.");
        return false;
      }
      if (filePath === "/") {
        errorList.value.push("Root directory access is not allowed.");
        return false;
      }
      if (!filePath.endsWith(".py") && !filePath.endsWith(".sh") && !filePath.endsWith(".bash")) {
        errorList.value.push("File path must end with .py, .sh, or .bash.");
        return false;
      }
      return true;
    }
    const clearCommandIfPathInput = () => {
      if (scriptPath.value) {
        oneLineCommand.value = "";
      }
    };
    const clearPathIfCommandInput = () => {
      if (oneLineCommand.value) {
        scriptPath.value = "";
      }
    };
    function validateParams() {
      validateCustomTask();
      if (errorList.value.length == 0) {
        if (oneLineCommand.value !== "") {
          wrapCommand.value = wrapCommandWithBash(oneLineCommand.value);
        }
        setParams();
      }
    }
    function validateCustomTask() {
      if (inputType.value === "script") {
        if (scriptPath.value === "") {
          errorList.value.push("Script File path is needed.");
          scriptPathErrorTag.value = true;
        } else {
          if (!isValidFilePath(scriptPath.value)) {
            scriptPathErrorTag.value = true;
          }
        }
      } else if (inputType.value === "command") {
        if (oneLineCommand.value === "") {
          errorList.value.push("Command is needed.");
          commandErrorTag.value = true;
        }
      }
    }
    function unwrapCommand(wrappedCommand) {
      const prefix = '/bin/bash -c "';
      if (!wrappedCommand.startsWith(prefix)) {
        return wrappedCommand;
      }
      const commandPart = wrappedCommand.slice(prefix.length, -1);
      const unescapedCommand = commandPart.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, "`").replace(/\\\\/g, "\\");
      return unescapedCommand;
    }
    function clearErrorTags() {
      scriptPathErrorTag.value = false;
      errorList.value = [];
    }
    function wrapCommandWithBash(userCommand) {
      const escapedCommand = userCommand.replace(/\\/g, "\\\\").replace(/'/g, "'\\''").replace(/"/g, '\\"').replace(/`/g, "\\`");
      const finalCommand = `/bin/bash -c "${escapedCommand}"`;
      return finalCommand;
    }
    function setParams() {
      const newParams = new ParameterNode("Custom Task Config", "customTaskConfig").addChild(new BoolParameter("FilePath_flag", "filePath_flag", inputType.value === "script")).addChild(new BoolParameter("Command_flag", "command_flag", inputType.value === "command")).addChild(new StringParameter("FilePath", "filePath", scriptPath.value)).addChild(new StringParameter("Command", "command", wrapCommand.value));
      parameters.value = newParams;
      console.log("newParams:", newParams);
    }
    function hasChanges() {
      const currentParams = {};
      return JSON.stringify(currentParams) !== JSON.stringify(initialParameters.value);
    }
    __expose({
      validateParams,
      clearErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$8, {
            width: "w-20",
            height: "h-20",
            baseColor: "text-gray-200",
            fillColor: "fill-gray-500"
          })
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("label", _hoisted_5, [
            withDirectives(createBaseVNode("input", {
              type: "radio",
              value: "script",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputType.value = $event)
            }, null, 512), [
              [vModelRadio, inputType.value]
            ]),
            _cache[4] || (_cache[4] = createTextVNode(" Script file path ", -1))
          ]),
          createBaseVNode("label", _hoisted_6, [
            withDirectives(createBaseVNode("input", {
              type: "radio",
              value: "command",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputType.value = $event)
            }, null, 512), [
              [vModelRadio, inputType.value]
            ]),
            _cache[5] || (_cache[5] = createTextVNode(" Custom command ", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          inputType.value === "script" ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  _cache[6] || (_cache[6] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Path", -1)),
                  scriptPathErrorTag.value ? (openBlock(), createBlock(unref(render$4), {
                    key: 0,
                    class: "mt-1 w-5 h-5 text-danger"
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => scriptPath.value = $event),
                    class: normalizeClass([
                      "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                      scriptPathErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                    ]),
                    placeholder: "Specify Script File Path",
                    onInput: clearCommandIfPathInput
                  }, null, 34), [
                    [vModelText, scriptPath.value]
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          inputType.value === "command" ? (openBlock(), createElementBlock("div", _hoisted_12, [
            _cache[7] || (_cache[7] = createBaseVNode("label", {
              for: "oneLineCommand",
              class: "mt-1 block text-sm leading-6 text-default"
            }, "Command", -1)),
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => oneLineCommand.value = $event),
              onInput: clearPathIfCommandInput,
              class: normalizeClass([
                "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                commandErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
              ]),
              placeholder: "Enter your command"
            }, null, 34), [
              [vModelText, oneLineCommand.value]
            ]),
            commandError.value ? (openBlock(), createElementBlock("p", _hoisted_13, toDisplayString(commandError.value), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])
      ]));
    };
  }
});
const _hoisted_1 = { class: "mt-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ParameterInput",
  props: {
    selectedTemplate: {},
    task: {},
    simple: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const simpleAllowed = [
      "ZFS Replication Task",
      "Automated Snapshot Task",
      "Scrub Task",
      "Rsync Task",
      "Cloud Sync Task"
    ];
    const template = computed(() => {
      if (props.simple && !simpleAllowed.includes(props.selectedTemplate.name)) {
        return null;
      }
      return props.selectedTemplate;
    });
    const activeComponent = ref(null);
    async function validation() {
      var _a;
      await ((_a = activeComponent.value) == null ? void 0 : _a.validateParams());
    }
    function clearTaskParamErrorTags() {
      var _a;
      (_a = activeComponent.value) == null ? void 0 : _a.clearErrorTags();
    }
    function hasChanges() {
      var _a;
      return (_a = activeComponent.value) == null ? void 0 : _a.hasChanges();
    }
    __expose({
      validation,
      clearTaskParamErrorTags,
      hasChanges
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        template.value.name == "ZFS Replication Task" ? (openBlock(), createBlock(_sfc_main$7, {
          key: 0,
          ref_key: "activeComponent",
          ref: activeComponent,
          simple: props.simple,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["simple", "parameterSchema", "task"])) : template.value.name == "Automated Snapshot Task" ? (openBlock(), createBlock(_sfc_main$6, {
          key: 1,
          ref_key: "activeComponent",
          ref: activeComponent,
          simple: props.simple,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["simple", "parameterSchema", "task"])) : template.value.name == "Rsync Task" ? (openBlock(), createBlock(_sfc_main$5, {
          key: 2,
          ref_key: "activeComponent",
          ref: activeComponent,
          simple: props.simple,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["simple", "parameterSchema", "task"])) : template.value.name == "Scrub Task" ? (openBlock(), createBlock(_sfc_main$4, {
          key: 3,
          ref_key: "activeComponent",
          ref: activeComponent,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["parameterSchema", "task"])) : template.value.name == "SMART Test" ? (openBlock(), createBlock(SmartTestTaskParams, {
          key: 4,
          ref_key: "activeComponent",
          ref: activeComponent,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["parameterSchema", "task"])) : template.value.name == "Cloud Sync Task" ? (openBlock(), createBlock(_sfc_main$2, {
          key: 5,
          ref_key: "activeComponent",
          ref: activeComponent,
          simple: props.simple,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["simple", "parameterSchema", "task"])) : template.value.name == "Custom Task" ? (openBlock(), createBlock(_sfc_main$1, {
          key: 6,
          ref_key: "activeComponent",
          ref: activeComponent,
          parameterSchema: template.value.parameterSchema,
          task: props.task
        }, null, 8, ["parameterSchema", "task"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _export_sfc as _,
  _sfc_main as a
};
