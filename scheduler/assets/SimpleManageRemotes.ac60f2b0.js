import { d as defineComponent, u as useRouter, az as useRoute, i as injectWithCheck, r as ref, e as computed, aL as cloudSyncProviders, aM as reactive, w as watch, L as createBlock, aj as withCtx, k as unref, aN as CardContainer, s as loadingInjectionKey, aE as remoteManagerInjectionKey, aF as rcloneRemotesInjectionKey, o as openBlock, a as createBaseVNode, m as createTextVNode, c as createElementBlock, p as createCommentVNode, aA as getProviderLogo, l as createVNode, _ as _sfc_main$1, E as withDirectives, H as vModelText, F as Fragment, q as renderList, aO as normalizeStyle, aP as getButtonStyles, y as toDisplayString, z as normalizeClass, G as vModelSelect, a5 as vModelCheckbox, B as pushNotification, N as Notification } from "./index.9323ba8c.js";
import { _ as _sfc_main$2 } from "./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js";
const _hoisted_1 = { class: "flex items-center gap-2" };
const _hoisted_2 = {
  key: 0,
  class: "text-xs text-muted"
};
const _hoisted_3 = {
  key: 1,
  class: "text-xs text-muted"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 0,
  class: "flex items-center justify-center py-12"
};
const _hoisted_6 = {
  key: 1,
  class: "grid grid-cols-12 gap-3"
};
const _hoisted_7 = { class: "flex gap-2 mb-2" };
const _hoisted_8 = {
  role: "list",
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2"
};
const _hoisted_9 = ["onClick", "title"];
const _hoisted_10 = { class: "flex items-center gap-2" };
const _hoisted_11 = { class: "rounded-full bg-white w-5 h-5 grid place-items-center" };
const _hoisted_12 = ["src"];
const _hoisted_13 = { class: "truncate" };
const _hoisted_14 = { class: "text-xs opacity-80" };
const _hoisted_15 = { class: "col-span-12 lg:col-span-8 space-y-3" };
const _hoisted_16 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_17 = { class: "grid sm:grid-cols-3 gap-2" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "rounded-full bg-white w-5 h-5 grid place-items-center" };
const _hoisted_20 = ["src"];
const _hoisted_21 = { class: "mt-3" };
const _hoisted_22 = { class: "grid sm:grid-cols-3 gap-2 mt-2" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "rounded-full bg-white w-5 h-5 grid place-items-center" };
const _hoisted_25 = ["src"];
const _hoisted_26 = { class: "button-group-row" };
const _hoisted_27 = {
  key: 0,
  class: "mt-2 text-sm"
};
const _hoisted_28 = { class: "mt-2" };
const _hoisted_29 = { class: "grid sm:grid-cols-2 gap-2 mt-2" };
const _hoisted_30 = { class: "block text-xs text-default" };
const _hoisted_31 = ["value"];
const _hoisted_32 = ["onUpdate:modelValue"];
const _hoisted_33 = ["onUpdate:modelValue"];
const _hoisted_34 = ["onUpdate:modelValue"];
const _hoisted_35 = ["onUpdate:modelValue"];
const _hoisted_36 = ["value"];
const _hoisted_37 = ["onUpdate:modelValue"];
const _hoisted_38 = {
  key: 2,
  class: "space-y-3"
};
const _hoisted_39 = ["disabled"];
const _hoisted_40 = ["disabled"];
const _hoisted_41 = ["value"];
const _hoisted_42 = ["value"];
const _hoisted_43 = { class: "button-group-row" };
const _hoisted_44 = ["disabled"];
const _hoisted_45 = ["disabled"];
const _hoisted_46 = {
  key: 0,
  class: "mb-2 text-sm"
};
const _hoisted_47 = { class: "grid sm:grid-cols-2 gap-2 mt-2" };
const _hoisted_48 = { class: "block text-xs text-default" };
const _hoisted_49 = ["onUpdate:modelValue", "disabled"];
const _hoisted_50 = ["value"];
const _hoisted_51 = ["onUpdate:modelValue", "disabled"];
const _hoisted_52 = ["onUpdate:modelValue", "disabled"];
const _hoisted_53 = ["onUpdate:modelValue", "disabled"];
const _hoisted_54 = ["onUpdate:modelValue", "disabled"];
const _hoisted_55 = ["value"];
const _hoisted_56 = ["onUpdate:modelValue", "disabled"];
const _hoisted_57 = ["disabled"];
const _hoisted_58 = { class: "w-full flex items-center justify-between gap-2" };
const _hoisted_59 = {
  key: 0,
  class: "flex gap-2"
};
const _hoisted_60 = ["disabled"];
const _hoisted_61 = ["disabled"];
const _hoisted_62 = {
  key: 1,
  class: "flex gap-2"
};
const _hoisted_63 = ["disabled"];
const _hoisted_64 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimpleManageRemotes",
  props: {
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const myRemoteManager = injectWithCheck(remoteManagerInjectionKey, "remote manager not provided!");
    const existingRemotes = injectWithCheck(rcloneRemotesInjectionKey, "remotes not provided!");
    const panel = ref("idle");
    function toFlat(auth) {
      const out = {};
      for (const [k, p] of Object.entries((auth == null ? void 0 : auth.parameters) || {}))
        out[k] = p == null ? void 0 : p.value;
      return out;
    }
    function toAuth(flat, provider) {
      var _a, _b;
      const base = provider.providerParams.parameters;
      const parameters = {};
      for (const [k, schema] of Object.entries(base)) {
        const v = (_b = (_a = flat[k]) != null ? _a : schema.value) != null ? _b : schema.defaultValue;
        parameters[k] = { ...schema, value: v };
      }
      return { parameters };
    }
    const query = ref("");
    const filteredRemotes = computed(
      () => existingRemotes.value.filter((r) => r.name.toLowerCase().includes(query.value.trim().toLowerCase()))
    );
    const oauthTypes = ["dropbox", "drive", "google cloud storage"];
    const s3ProviderOptions = ["AWS", "Wasabi", "MinIO", "Ceph", "Other"];
    const allProviders = Object.values(cloudSyncProviders);
    const oauthProviders = computed(() => allProviders.filter((p) => oauthTypes.includes(p.type)));
    const nonOauthProviders = computed(() => allProviders.filter((p) => !oauthTypes.includes(p.type)));
    const selectedProvider = ref();
    const providerValues = reactive({});
    const remoteName = ref("");
    const creating = ref(false);
    const oAuthenticated = ref(false);
    ref();
    const providerParameters = computed(
      () => selectedProvider.value ? Object.entries(selectedProvider.value.providerParams.parameters) : []
    );
    watch(selectedProvider, (p) => {
      var _a;
      Object.keys(providerValues).forEach((k) => delete providerValues[k]);
      if (p) {
        for (const [k, param] of Object.entries(p.providerParams.parameters)) {
          providerValues[k] = (_a = param.value) != null ? _a : param.defaultValue;
        }
        oAuthenticated.value = false;
      }
    });
    const displayToken = computed({
      get: () => {
        const t = providerValues.token;
        if (!t)
          return "";
        return typeof t === "object" ? JSON.stringify(t, null, 2) : String(t);
      },
      set: (val) => {
        try {
          providerValues.token = JSON.parse(val);
        } catch {
          providerValues.token = val;
        }
      }
    });
    const selectedRemote = ref();
    const editMode = ref(false);
    const edit = reactive({ params: {} });
    const saving = ref(false);
    const deleting = ref(false);
    const snapshot = (r) => {
      var _a, _b;
      return {
        name: r.name,
        providerType: (_b = (_a = r.provider) == null ? void 0 : _a.type) != null ? _b : r.type,
        params: JSON.parse(JSON.stringify(r.authParams))
      };
    };
    function setEditFromBaseline(baseline2) {
      edit.name = baseline2.name;
      edit.provider = cloudSyncProviders[baseline2.providerType];
      edit.params = toFlat(baseline2.params);
    }
    const baseline = ref(null);
    watch(selectedRemote, (r) => {
      if (!r) {
        panel.value = "idle";
        return;
      }
      panel.value = "edit";
      editMode.value = false;
      const b = snapshot(r);
      baseline.value = b;
      setEditFromBaseline(b);
    });
    const hasEdits = computed(() => {
      var _a, _b, _c, _d, _e;
      if (!baseline.value)
        return false;
      if (edit.name !== baseline.value.name)
        return true;
      if (((_a = edit.provider) == null ? void 0 : _a.type) !== baseline.value.providerType)
        return true;
      const a = ((_b = edit.params) == null ? void 0 : _b.parameters) || {};
      const b = ((_c = baseline.value.params) == null ? void 0 : _c.parameters) || {};
      const keys = /* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)]);
      for (const k of keys) {
        if (JSON.stringify((_d = a[k]) == null ? void 0 : _d.value) !== JSON.stringify((_e = b[k]) == null ? void 0 : _e.value)) {
          return true;
        }
      }
      return false;
    });
    const editDisplayToken = computed({
      get: () => {
        var _a;
        const t = (_a = edit.params) == null ? void 0 : _a.token;
        if (!t)
          return "";
        if (typeof t === "string") {
          try {
            return JSON.stringify(JSON.parse(t), null, 2);
          } catch {
            return t;
          }
        }
        return JSON.stringify(t, null, 2);
      },
      set: (val) => {
        try {
          edit.params.token = JSON.parse(val);
        } catch {
          edit.params.token = val;
        }
      }
    });
    function startCreate() {
      panel.value = "create";
      query.value = "";
      selectedProvider.value = void 0;
      remoteName.value = "";
      oAuthenticated.value = false;
    }
    function selectProvider(p) {
      selectedProvider.value = p;
    }
    const oauthBlurb = computed(
      () => {
        var _a;
        return ((_a = selectedProvider.value) == null ? void 0 : _a.providerParams.oAuthSupported) ? "Sign in to link your account. You can also expand Advanced to see parameters." : "This provider requires manual configuration. Expand Advanced to fill in parameters.";
      }
    );
    function clearOAuth() {
      oAuthenticated.value = false;
      providerValues.token = "";
    }
    const canCreate = computed(
      () => !!remoteName.value.trim() && !!selectedProvider.value && (!selectedProvider.value.providerParams.oAuthSupported || !!providerValues.token)
    );
    function oAuthBtn(p) {
      try {
        let suffix = "";
        if (p.type === "dropbox")
          suffix = "dropbox";
        else if (p.type === "drive")
          suffix = "drive";
        else if (p.type === "google cloud storage")
          suffix = "cloud";
        const url = `https://cloud-sync.45d.io/auth/${suffix}`;
        const w = window.open(url, "_blank", "width=500,height=900");
        if (!w)
          throw new Error("Popup blocked. Allow popups and try again.");
        const handler = async (evt) => {
          if (evt.origin !== "https://cloud-sync.45d.io")
            return;
          const { accessToken, refreshToken, expiry, userId } = evt.data || {};
          if (accessToken && refreshToken && userId) {
            const token = { access_token: accessToken, refresh_token: refreshToken, expiry };
            providerValues.token = JSON.stringify(token);
            oAuthenticated.value = true;
            pushNotification(new Notification("Authenticated", `Connected to ${p.name}`, "success", 6e3));
            window.removeEventListener("message", handler);
          } else {
            pushNotification(new Notification("Auth failed", "Token data missing", "error", 6e3));
          }
        };
        window.addEventListener("message", handler);
      } catch (e) {
        pushNotification(new Notification("Authentication Error", e.message, "error", 6e3));
      }
    }
    async function saveCreate() {
      var _a, _b, _c;
      if (!canCreate.value || !selectedProvider.value)
        return;
      creating.value = true;
      try {
        const flat = Object.fromEntries(Object.entries(providerValues).filter(([_, v]) => v !== "" && v !== null && v !== void 0));
        const normalized = toAuth(flat, selectedProvider.value);
        const tv = (_b = (_a = normalized.parameters) == null ? void 0 : _a.token) == null ? void 0 : _b.value;
        if (typeof tv === "string") {
          try {
            normalized.parameters.token.value = JSON.parse(tv);
          } catch {
          }
        }
        await myRemoteManager.createRemote(remoteName.value.trim(), selectedProvider.value.type, normalized);
        pushNotification(new Notification("Saved", "Cloud account added", "success", 6e3));
        await myRemoteManager.getRemotes();
        query.value = "";
        panel.value = "idle";
      } catch (e) {
        pushNotification(new Notification("Save Failed", (_c = e.message) != null ? _c : "Unknown error", "error", 6e3));
      } finally {
        creating.value = false;
      }
    }
    function resetCreate() {
      remoteName.value = "";
      selectedProvider.value = void 0;
      Object.keys(providerValues).forEach((k) => delete providerValues[k]);
      oAuthenticated.value = false;
      query.value = "";
    }
    function openEdit(r) {
      selectedRemote.value = r;
      console.log("editing:", selectedRemote.value);
      editMode.value = true;
    }
    function cancelEdit() {
      if (!baseline.value)
        return;
      setEditFromBaseline(baseline.value);
      editMode.value = false;
    }
    async function saveEdit() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      if (!selectedRemote.value || !hasEdits.value || saving.value)
        return;
      try {
        saving.value = true;
        const newName = ((_a = edit.name) != null ? _a : "").trim();
        if (!newName)
          throw new Error("Account name is required.");
        const providerType = (_e = (_d = (_b = edit.provider) == null ? void 0 : _b.type) != null ? _d : (_c = baseline.value) == null ? void 0 : _c.providerType) != null ? _e : selectedRemote.value.type;
        if (!providerType)
          throw new Error("Provider type is required.");
        const normalized = toAuth(edit.params, edit.provider);
        const tv = (_g = (_f = normalized.parameters) == null ? void 0 : _f.token) == null ? void 0 : _g.value;
        if (typeof tv === "string") {
          try {
            normalized.parameters.token.value = JSON.parse(tv);
          } catch {
          }
        }
        await myRemoteManager.editRemote(
          selectedRemote.value.name,
          ((_h = edit.name) != null ? _h : "").trim(),
          providerType,
          normalized
        );
        await myRemoteManager.getRemotes();
        const updated = await myRemoteManager.getRemoteByName(newName);
        if (updated) {
          selectedRemote.value = updated;
          baseline.value = snapshot(updated);
          setEditFromBaseline(baseline.value);
        }
        editMode.value = false;
        pushNotification(new Notification("Updated", "Changes saved", "success", 6e3));
      } catch (e) {
        pushNotification(new Notification("Save Failed", (_i = e.message) != null ? _i : "Unknown error", "error", 6e3));
      } finally {
        saving.value = false;
      }
    }
    async function deleteRemote() {
      var _a;
      if (!selectedRemote.value)
        return;
      const name = selectedRemote.value.name;
      const ok = confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`);
      if (!ok)
        return;
      try {
        deleting.value = true;
        await myRemoteManager.deleteRemote(name);
        pushNotification(new Notification("Deleted", `Removed ${name}`, "success", 6e3));
        selectedRemote.value = void 0;
        panel.value = "idle";
        await myRemoteManager.getRemotes();
      } catch (e) {
        pushNotification(new Notification("Delete Failed", (_a = e.message) != null ? _a : "Unknown error", "error", 6e3));
      } finally {
        deleting.value = false;
      }
    }
    function setEditParam(key, val) {
      edit.params[key] = val;
    }
    function handleClose() {
      panel.value = "idle";
      selectedRemote.value = void 0;
      const ret = route.query.returnTo || "/simple/new";
      router.push(ret);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CardContainer), { class: "w-full h-full p-2 text-default" }, {
        title: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[11] || (_cache[11] = createTextVNode(" Cloud Accounts ", -1)),
            panel.value === "create" ? (openBlock(), createElementBlock("span", _hoisted_2, "\u2022 Add New")) : panel.value === "edit" ? (openBlock(), createElementBlock("span", _hoisted_3, "\u2022 Manage")) : createCommentVNode("", true),
            selectedProvider.value ? (openBlock(), createElementBlock("img", {
              key: 2,
              src: unref(getProviderLogo)(selectedProvider.value, void 0),
              class: "w-5 h-5"
            }, null, 8, _hoisted_4)) : createCommentVNode("", true)
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_58, [
            createBaseVNode("button", {
              class: "btn btn-danger",
              onClick: handleClose
            }, "Close"),
            panel.value === "create" ? (openBlock(), createElementBlock("div", _hoisted_59, [
              createBaseVNode("button", {
                class: "btn btn-secondary",
                onClick: resetCreate,
                disabled: creating.value
              }, "Clear", 8, _hoisted_60),
              createBaseVNode("button", {
                class: "btn btn-primary",
                onClick: saveCreate,
                disabled: creating.value || !canCreate.value
              }, "Save Account", 8, _hoisted_61)
            ])) : panel.value === "edit" ? (openBlock(), createElementBlock("div", _hoisted_62, [
              !editMode.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: "btn btn-secondary",
                onClick: _cache[10] || (_cache[10] = ($event) => editMode.value = true)
              }, "Edit")) : (openBlock(), createElementBlock("button", {
                key: 1,
                class: "btn btn-secondary",
                onClick: cancelEdit
              }, "Cancel Edit")),
              createBaseVNode("button", {
                class: "btn btn-danger",
                onClick: deleteRemote,
                disabled: deleting.value
              }, "Delete", 8, _hoisted_63),
              createBaseVNode("button", {
                class: "btn btn-primary",
                onClick: saveEdit,
                disabled: !hasEdits.value || saving.value
              }, "Save Changes", 8, _hoisted_64)
            ])) : createCommentVNode("", true)
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", null, [
            unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createVNode(_sfc_main$1, {
                width: "w-20",
                height: "h-20",
                baseColor: "text-gray-200",
                fillColor: "fill-gray-500"
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              createVNode(_sfc_main$2, {
                class: "col-span-12 lg:col-span-4 p-3 rounded-md border border-default",
                title: "Your accounts"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_7, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
                      type: "text",
                      class: "input-textlike w-full",
                      placeholder: "Search accounts\u2026"
                    }, null, 512), [
                      [vModelText, query.value]
                    ]),
                    createBaseVNode("button", {
                      class: "btn btn-primary",
                      onClick: startCreate
                    }, "Add")
                  ]),
                  createBaseVNode("ul", _hoisted_8, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(filteredRemotes.value, (r) => {
                      var _a, _b;
                      return openBlock(), createElementBlock("li", {
                        key: r.name
                      }, [
                        createBaseVNode("button", {
                          class: "btn w-full flex items-center justify-between",
                          style: normalizeStyle(unref(getButtonStyles)(false, void 0, r)),
                          onClick: ($event) => openEdit(r),
                          title: r.name
                        }, [
                          createBaseVNode("div", _hoisted_10, [
                            createBaseVNode("span", _hoisted_11, [
                              createBaseVNode("img", {
                                src: unref(getProviderLogo)(void 0, r),
                                class: "w-4 h-4"
                              }, null, 8, _hoisted_12)
                            ]),
                            createBaseVNode("span", _hoisted_13, toDisplayString(r.name), 1)
                          ]),
                          createBaseVNode("span", _hoisted_14, toDisplayString((_b = (_a = r.provider) == null ? void 0 : _a.name) != null ? _b : r.type), 1)
                        ], 12, _hoisted_9)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_15, [
                panel.value === "idle" ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  title: "Get started",
                  class: "p-3 rounded-md border border-default"
                }, {
                  default: withCtx(() => [..._cache[12] || (_cache[12] = [
                    createBaseVNode("p", { class: "text-sm text-muted" }, [
                      createTextVNode("Select an account on the left to manage it, or click "),
                      createBaseVNode("b", null, "Add"),
                      createTextVNode(" to create a new one.")
                    ], -1)
                  ])]),
                  _: 1
                })) : panel.value === "create" ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  createVNode(_sfc_main$2, {
                    title: "Choose a provider",
                    description: "These work with a quick sign-in.",
                    class: "p-3 rounded-md border border-default"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_17, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(oauthProviders.value, (p) => {
                          var _a;
                          return openBlock(), createElementBlock("button", {
                            key: p.type,
                            class: normalizeClass(["btn w-full flex items-center justify-center gap-2", ((_a = selectedProvider.value) == null ? void 0 : _a.type) === p.type ? "btn-primary" : "btn-secondary"]),
                            style: normalizeStyle(unref(getButtonStyles)(false, p)),
                            onClick: ($event) => selectProvider(p)
                          }, [
                            createBaseVNode("span", _hoisted_19, [
                              createBaseVNode("img", {
                                src: unref(getProviderLogo)(p, void 0),
                                class: "w-4 h-4"
                              }, null, 8, _hoisted_20)
                            ]),
                            createTextVNode(" " + toDisplayString(p.name), 1)
                          ], 14, _hoisted_18);
                        }), 128))
                      ]),
                      createBaseVNode("details", _hoisted_21, [
                        _cache[13] || (_cache[13] = createBaseVNode("summary", { class: "text-sm cursor-pointer" }, "Advanced: more providers", -1)),
                        createBaseVNode("div", _hoisted_22, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(nonOauthProviders.value, (p) => {
                            var _a;
                            return openBlock(), createElementBlock("button", {
                              key: p.type,
                              class: normalizeClass(["btn w-full flex items-center justify-center gap-2", ((_a = selectedProvider.value) == null ? void 0 : _a.type) === p.type ? "btn-primary" : "btn-secondary"]),
                              style: normalizeStyle(unref(getButtonStyles)(false, p)),
                              onClick: ($event) => selectProvider(p)
                            }, [
                              createBaseVNode("span", _hoisted_24, [
                                createBaseVNode("img", {
                                  src: unref(getProviderLogo)(p, void 0),
                                  class: "w-4 h-4"
                                }, null, 8, _hoisted_25)
                              ]),
                              createTextVNode(" " + toDisplayString(p.name), 1)
                            ], 14, _hoisted_23);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  selectedProvider.value ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    title: `Connect your account -> ${selectedProvider.value.name}`,
                    description: oauthBlurb.value,
                    class: "p-3 rounded-md border border-default"
                  }, {
                    "header-right": withCtx(() => [
                      createBaseVNode("div", _hoisted_26, [
                        selectedProvider.value.providerParams.oAuthSupported && !oAuthenticated.value ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          class: "btn btn-secondary",
                          onClick: _cache[1] || (_cache[1] = ($event) => oAuthBtn(selectedProvider.value))
                        }, " Authenticate with " + toDisplayString(selectedProvider.value.name), 1)) : selectedProvider.value.providerParams.oAuthSupported && oAuthenticated.value ? (openBlock(), createElementBlock("button", {
                          key: 1,
                          class: "btn btn-danger",
                          onClick: clearOAuth
                        }, " Reset OAuth ")) : createCommentVNode("", true)
                      ])
                    ]),
                    default: withCtx(() => {
                      var _a;
                      return [
                        ((_a = selectedProvider.value) == null ? void 0 : _a.providerParams.oAuthSupported) ? (openBlock(), createElementBlock("div", _hoisted_27, [..._cache[14] || (_cache[14] = [
                          createBaseVNode("a", {
                            href: "https://cloud-sync.45d.io/privacy",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "underline hover:opacity-80"
                          }, "Privacy Policy", -1),
                          createBaseVNode("span", { class: "mx-2" }, "\u2022", -1),
                          createBaseVNode("a", {
                            href: "https://cloud-sync.45d.io/tos",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "underline hover:opacity-80"
                          }, "Terms of Service", -1)
                        ])])) : createCommentVNode("", true),
                        createBaseVNode("details", _hoisted_28, [
                          _cache[15] || (_cache[15] = createBaseVNode("summary", { class: "text-sm cursor-pointer" }, "Advanced parameters", -1)),
                          createBaseVNode("div", _hoisted_29, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(providerParameters.value, ([key, schema]) => {
                              var _a2;
                              return openBlock(), createElementBlock("div", {
                                key: String(key)
                              }, [
                                createBaseVNode("label", _hoisted_30, toDisplayString(key), 1),
                                ((_a2 = selectedProvider.value) == null ? void 0 : _a2.type) === "s3" && key === "provider" ? withDirectives((openBlock(), createElementBlock("select", {
                                  key: 0,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => providerValues.provider = $event),
                                  class: "input-textlike w-full mt-1"
                                }, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(schema.allowedValues || s3ProviderOptions, (opt) => {
                                    return openBlock(), createElementBlock("option", {
                                      key: opt,
                                      value: opt
                                    }, toDisplayString(opt), 9, _hoisted_31);
                                  }), 128))
                                ], 512)), [
                                  [vModelSelect, providerValues.provider]
                                ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                  schema.type === "string" ? withDirectives((openBlock(), createElementBlock("input", {
                                    key: 0,
                                    "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                                    class: "input-textlike w-full mt-1",
                                    type: "text"
                                  }, null, 8, _hoisted_32)), [
                                    [vModelText, providerValues[key]]
                                  ]) : schema.type === "bool" ? withDirectives((openBlock(), createElementBlock("input", {
                                    key: 1,
                                    "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                                    type: "checkbox",
                                    class: "h-4 w-4 mt-1"
                                  }, null, 8, _hoisted_33)), [
                                    [vModelCheckbox, providerValues[key]]
                                  ]) : schema.type === "int" ? withDirectives((openBlock(), createElementBlock("input", {
                                    key: 2,
                                    "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                                    class: "input-textlike w-full mt-1",
                                    type: "number"
                                  }, null, 8, _hoisted_34)), [
                                    [
                                      vModelText,
                                      providerValues[key],
                                      void 0,
                                      { number: true }
                                    ]
                                  ]) : schema.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                                    key: 3,
                                    "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                                    class: "input-textlike w-full mt-1"
                                  }, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(schema.allowedValues || [], (opt) => {
                                      return openBlock(), createElementBlock("option", {
                                        key: opt,
                                        value: opt
                                      }, toDisplayString(opt), 9, _hoisted_36);
                                    }), 128))
                                  ], 8, _hoisted_35)), [
                                    [vModelSelect, providerValues[key]]
                                  ]) : schema.type === "object" && key !== "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                                    key: 4,
                                    "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                                    rows: "3",
                                    class: "input-textlike w-full mt-1"
                                  }, null, 8, _hoisted_37)), [
                                    [vModelText, providerValues[key]]
                                  ]) : schema.type === "object" && key === "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                                    key: 5,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => displayToken.value = $event),
                                    rows: "3",
                                    class: "input-textlike w-full mt-1",
                                    placeholder: "Filled by OAuth"
                                  }, null, 512)), [
                                    [vModelText, displayToken.value]
                                  ]) : createCommentVNode("", true)
                                ], 64))
                              ]);
                            }), 128))
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["title", "description"])) : createCommentVNode("", true),
                  selectedProvider.value ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    title: "Name your account",
                    class: "p-3 rounded-md border border-default"
                  }, {
                    default: withCtx(() => [
                      _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-sm text-default" }, "Account name", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => remoteName.value = $event),
                        class: "input-textlike w-full mt-1",
                        placeholder: "e.g. Team-Drive, Marketing-Dropbox"
                      }, null, 512), [
                        [vModelText, remoteName.value]
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])) : panel.value === "edit" ? (openBlock(), createElementBlock("div", _hoisted_38, [
                  createVNode(_sfc_main$2, {
                    title: "Account details",
                    class: "p-3 rounded-md border border-default"
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm text-default" }, "Account name", -1)),
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => edit.name = $event),
                          class: "input-textlike w-full mt-1",
                          disabled: !editMode.value
                        }, null, 8, _hoisted_39), [
                          [vModelText, edit.name]
                        ]),
                        _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm text-default mt-3" }, "Provider", -1)),
                        withDirectives(createBaseVNode("select", {
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => edit.provider = $event),
                          class: "input-textlike w-full mt-1",
                          disabled: !editMode.value
                        }, [
                          createBaseVNode("option", {
                            value: edit.provider
                          }, toDisplayString((_a = edit.provider) == null ? void 0 : _a.name), 9, _hoisted_41),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(allProviders), (p) => {
                            return openBlock(), createElementBlock("option", {
                              key: p.type,
                              value: p
                            }, toDisplayString(p.name), 9, _hoisted_42);
                          }), 128))
                        ], 8, _hoisted_40), [
                          [vModelSelect, edit.provider]
                        ])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Authentication",
                    class: "p-3 rounded-md border border-default"
                  }, {
                    "header-right": withCtx(() => {
                      var _a, _b;
                      return [
                        createBaseVNode("div", _hoisted_43, [
                          ((_a = edit.provider) == null ? void 0 : _a.providerParams.oAuthSupported) ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            class: "btn btn-secondary",
                            onClick: _cache[7] || (_cache[7] = ($event) => oAuthBtn(edit.provider)),
                            disabled: !editMode.value
                          }, " Reconnect ", 8, _hoisted_44)) : createCommentVNode("", true),
                          ((_b = edit.provider) == null ? void 0 : _b.providerParams.oAuthSupported) ? (openBlock(), createElementBlock("button", {
                            key: 1,
                            class: "btn btn-danger",
                            onClick: _cache[8] || (_cache[8] = () => {
                              oAuthenticated.value = false;
                              setEditParam("token", "");
                            }),
                            disabled: !editMode.value
                          }, " Reset OAuth ", 8, _hoisted_45)) : createCommentVNode("", true)
                        ])
                      ];
                    }),
                    default: withCtx(() => {
                      var _a, _b, _c;
                      return [
                        ((_a = edit.provider) == null ? void 0 : _a.providerParams.oAuthSupported) ? (openBlock(), createElementBlock("div", _hoisted_46, [..._cache[19] || (_cache[19] = [
                          createBaseVNode("a", {
                            href: "https://cloud-sync.45d.io/privacy",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "underline hover:opacity-80"
                          }, "Privacy Policy", -1),
                          createBaseVNode("span", { class: "mx-2" }, "\u2022", -1),
                          createBaseVNode("a", {
                            href: "https://cloud-sync.45d.io/tos",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "underline hover:opacity-80"
                          }, "Terms of Service", -1)
                        ])])) : createCommentVNode("", true),
                        createBaseVNode("details", null, [
                          _cache[20] || (_cache[20] = createBaseVNode("summary", { class: "text-sm cursor-pointer" }, "Show parameters", -1)),
                          createBaseVNode("div", _hoisted_47, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(((_c = (_b = edit.provider) == null ? void 0 : _b.providerParams) == null ? void 0 : _c.parameters) || {}, (schema, key) => {
                              var _a2;
                              return openBlock(), createElementBlock("div", {
                                key: String(key)
                              }, [
                                createBaseVNode("label", _hoisted_48, toDisplayString(key), 1),
                                ((_a2 = edit.provider) == null ? void 0 : _a2.type) === "s3" && String(key) === "provider" ? withDirectives((openBlock(), createElementBlock("select", {
                                  key: 0,
                                  "onUpdate:modelValue": ($event) => edit.params[key] = $event,
                                  class: "input-textlike w-full mt-1",
                                  disabled: !editMode.value
                                }, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(schema.allowedValues || s3ProviderOptions, (opt) => {
                                    return openBlock(), createElementBlock("option", {
                                      key: opt,
                                      value: opt
                                    }, toDisplayString(opt), 9, _hoisted_50);
                                  }), 128))
                                ], 8, _hoisted_49)), [
                                  [vModelSelect, edit.params[key]]
                                ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                  schema.type === "string" ? withDirectives((openBlock(), createElementBlock("input", {
                                    key: 0,
                                    "onUpdate:modelValue": ($event) => edit.params[key] = $event,
                                    class: "input-textlike w-full mt-1",
                                    type: "text",
                                    disabled: !editMode.value
                                  }, null, 8, _hoisted_51)), [
                                    [vModelText, edit.params[key]]
                                  ]) : schema.type === "bool" ? withDirectives((openBlock(), createElementBlock("input", {
                                    key: 1,
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => edit.params[key] = $event,
                                    class: "h-4 w-4 mt-1",
                                    disabled: !editMode.value
                                  }, null, 8, _hoisted_52)), [
                                    [vModelCheckbox, edit.params[key]]
                                  ]) : schema.type === "int" ? withDirectives((openBlock(), createElementBlock("input", {
                                    key: 2,
                                    "onUpdate:modelValue": ($event) => edit.params[key] = $event,
                                    class: "input-textlike w-full mt-1",
                                    type: "number",
                                    disabled: !editMode.value
                                  }, null, 8, _hoisted_53)), [
                                    [
                                      vModelText,
                                      edit.params[key],
                                      void 0,
                                      { number: true }
                                    ]
                                  ]) : schema.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                                    key: 3,
                                    "onUpdate:modelValue": ($event) => edit.params[key] = $event,
                                    class: "input-textlike w-full mt-1",
                                    disabled: !editMode.value
                                  }, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(schema.allowedValues || [], (opt) => {
                                      return openBlock(), createElementBlock("option", {
                                        key: opt,
                                        value: opt
                                      }, toDisplayString(opt), 9, _hoisted_55);
                                    }), 128))
                                  ], 8, _hoisted_54)), [
                                    [vModelSelect, edit.params[key]]
                                  ]) : schema.type === "object" && String(key) !== "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                                    key: 4,
                                    "onUpdate:modelValue": ($event) => edit.params[key] = $event,
                                    class: "input-textlike w-full mt-1",
                                    rows: "3",
                                    disabled: !editMode.value
                                  }, null, 8, _hoisted_56)), [
                                    [vModelText, edit.params[key]]
                                  ]) : schema.type === "object" && String(key) === "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                                    key: 5,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => editDisplayToken.value = $event),
                                    class: "input-textlike w-full mt-1",
                                    rows: "3",
                                    disabled: !editMode.value
                                  }, null, 8, _hoisted_57)), [
                                    [vModelText, editDisplayToken.value]
                                  ]) : createCommentVNode("", true)
                                ], 64))
                              ]);
                            }), 128))
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ])
            ]))
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
