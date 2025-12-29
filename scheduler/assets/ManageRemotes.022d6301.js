import { d as defineComponent, i as injectWithCheck, aD as truncateTextInjectionKey, aE as remoteManagerInjectionKey, aF as rcloneRemotesInjectionKey, s as loadingInjectionKey, a3 as inject, r as ref, f as onMounted, aM as reactive, w as watch, B as pushNotification, N as Notification, e as computed, o as openBlock, c as createElementBlock, l as createVNode, aj as withCtx, m as createTextVNode, k as unref, _ as _sfc_main$1, a as createBaseVNode, F as Fragment, q as renderList, aB as withModifiers, aO as normalizeStyle, aP as getButtonStyles, aA as getProviderLogo, z as normalizeClass, y as toDisplayString, p as createCommentVNode, L as createBlock, E as withDirectives, H as vModelText, aL as cloudSyncProviders, G as vModelSelect, a5 as vModelCheckbox, aC as resolveDynamicComponent, aJ as __vitePreload } from "./index.9323ba8c.js";
import { _ as _sfc_main$3 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import { _ as _sfc_main$2, r as render } from "./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1 = {
  key: 0,
  class: "flex items-center justify-center"
};
const _hoisted_2 = {
  key: 1,
  class: "text-default"
};
const _hoisted_3 = {
  id: "remotes-list",
  class: "border-2 p-2 border-default rounded-md bg-well"
};
const _hoisted_4 = {
  role: "list",
  class: "mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4"
};
const _hoisted_5 = ["onClick", "onMouseenter", "onMouseleave", "title"];
const _hoisted_6 = { class: "rounded-full bg-white w-5 h-5" };
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  key: 0,
  class: "mt-4 border rounded-md border-default p-2 bg-well"
};
const _hoisted_9 = {
  key: 1,
  class: "mt-2 border rounded-md border-default p-2 bg-well"
};
const _hoisted_10 = { name: "remote-name" };
const _hoisted_11 = { class: "flex flex-row justify-between items-center" };
const _hoisted_12 = { class: "flex flex-row justify-between items-center" };
const _hoisted_13 = {
  key: 0,
  name: "cloud-provider"
};
const _hoisted_14 = ["value"];
const _hoisted_15 = ["value"];
const _hoisted_16 = {
  key: 1,
  class: "grid",
  "grid-cols-2": ""
};
const _hoisted_17 = ["for"];
const _hoisted_18 = ["onUpdate:modelValue", "id", "placeholder"];
const _hoisted_19 = ["onUpdate:modelValue", "id"];
const _hoisted_20 = ["onUpdate:modelValue", "id", "placeholder"];
const _hoisted_21 = ["onUpdate:modelValue", "id"];
const _hoisted_22 = ["value"];
const _hoisted_23 = ["onUpdate:modelValue", "id"];
const _hoisted_24 = ["id"];
const _hoisted_25 = {
  key: 2,
  class: "grid grid-cols-2"
};
const _hoisted_26 = {
  key: 0,
  class: "col-span-2 w-full mt-2"
};
const _hoisted_27 = { class: "button-group-row justify-between" };
const _hoisted_28 = { class: "flex-grow text-center mt-0.5" };
const _hoisted_29 = { class: "flex items-center justify-center h-6 w-6 bg-white rounded-full ml-2" };
const _hoisted_30 = ["src"];
const _hoisted_31 = {
  key: 1,
  class: "w-full col-span-2 text-default items-center mt-3 flex flex-row"
};
const _hoisted_32 = { class: "flex-grow text-left" };
const _hoisted_33 = ["href"];
const _hoisted_34 = ["href"];
const _hoisted_35 = { class: "col-span-2 w-full mt-2" };
const _hoisted_36 = ["for"];
const _hoisted_37 = ["onUpdate:modelValue", "id", "placeholder"];
const _hoisted_38 = ["onUpdate:modelValue", "id"];
const _hoisted_39 = ["onUpdate:modelValue", "id", "placeholder"];
const _hoisted_40 = ["onUpdate:modelValue", "id"];
const _hoisted_41 = ["value"];
const _hoisted_42 = ["onUpdate:modelValue", "id"];
const _hoisted_43 = ["id"];
const _hoisted_44 = { class: "w-full flex flex-row gap-2 items-center" };
const _hoisted_45 = {
  key: 0,
  class: "flex flex-row gap-2 flex-grow justify-center"
};
const _hoisted_46 = {
  key: 1,
  class: "flex-none"
};
const _hoisted_47 = {
  key: 0,
  id: "adding-task-btn",
  type: "button",
  class: "btn btn-primary h-fit",
  disabled: ""
};
const _hoisted_48 = { key: 0 };
const _hoisted_49 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManageRemotes",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const truncateText = injectWithCheck(truncateTextInjectionKey, "truncateText not provided!");
    const myRemoteManager = injectWithCheck(remoteManagerInjectionKey, "remote manager not provided!");
    const existingRemotes = injectWithCheck(rcloneRemotesInjectionKey, "remotes not provided!");
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const emit = __emit;
    const showManageRemotes = inject("show-manage-remotes");
    console.log("EXISTING REMOTES:", existingRemotes);
    const privacyPolicyUrl = ref("https://cloud-sync.45d.io/privacy");
    const termsOfServiceUrl = ref("https://cloud-sync.45d.io/tos");
    onMounted(async () => {
      await loadRemotes();
    });
    async function loadRemotes() {
      loading.value = true;
      await myRemoteManager.getRemotes();
      loading.value = false;
    }
    const selectedRemote = ref();
    const loadedEditableRemoteName = ref();
    const loadedEditableRemoteProvider = ref();
    const loadedEditableRemoteParams = reactive({});
    const editMode = ref(false);
    watch(selectedRemote, (newlySelectedRemote) => {
      if (newlySelectedRemote) {
        populateValues(newlySelectedRemote);
      }
    });
    watch(loadedEditableRemoteProvider, (newlySelectedProvider) => {
      if (newlySelectedProvider) {
        resetProviderParams(newlySelectedProvider);
      }
    });
    function resetProviderParams(newSelection) {
      if (newSelection !== selectedRemote.value.provider) {
        pushNotification(new Notification("Provider Changed", `Cloud provider has been changed, parameters have been reset.`, "warning", 6e3));
        loadedEditableRemoteParams.value = JSON.parse(JSON.stringify(newSelection.providerParams));
      }
    }
    function clearValues() {
      loadedEditableRemoteName.value = "";
      loadedEditableRemoteProvider.value = void 0;
      loadedEditableRemoteParams.value = {};
    }
    function populateValues(selectedRemote2) {
      clearValues();
      loadedEditableRemoteName.value = selectedRemote2.name;
      loadedEditableRemoteProvider.value = selectedRemote2.provider;
      if (selectedRemote2 && selectedRemote2.authParams) {
        loadedEditableRemoteParams.value = JSON.parse(JSON.stringify(selectedRemote2.authParams));
      } else {
        console.error("authParams is undefined in selectedRemote");
      }
    }
    const remoteNameErrorTag = ref("");
    const saving = ref(false);
    const oAuthenticated = ref(false);
    ref([]);
    const closeModal = () => {
      editMode.value = false;
      showManageRemotes.value = false;
      emit("close");
    };
    const cancelingManageRemotes = ref(false);
    const showCloseConfirmation = ref(false);
    const closeConfirmationComponent = ref();
    async function loadConfirmationDialog(dialogRef) {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      dialogRef.value = module.default;
    }
    const closeBtn = async () => {
      if (selectedRemote.value && editMode.value) {
        await loadConfirmationDialog(closeConfirmationComponent);
        showCloseConfirmation.value = true;
      } else {
        closeModal();
      }
    };
    const updateShowCloseConfirmation = (newVal) => {
      showCloseConfirmation.value = newVal;
    };
    const confirmCancel = async () => {
      closeModal();
    };
    const cancelCancel = async () => {
      updateShowCloseConfirmation(false);
    };
    function selectRemoteBtn(remote) {
      editMode.value = false;
      selectedRemote.value = remote;
    }
    function editRemoteBtn() {
      editMode.value = !editMode.value;
    }
    const hasChanges = ref(false);
    function checkForChanges() {
      var _a, _b, _c, _d, _e;
      if (loadedEditableRemoteName.value !== ((_a = selectedRemote.value) == null ? void 0 : _a.name) || ((_b = loadedEditableRemoteProvider.value) == null ? void 0 : _b.type) !== ((_d = (_c = selectedRemote.value) == null ? void 0 : _c.provider) == null ? void 0 : _d.type)) {
        hasChanges.value = true;
        return;
      }
      for (const [key, parameter] of Object.entries(loadedEditableRemoteParams.value.parameters)) {
        const originalParameter = (_e = selectedRemote.value) == null ? void 0 : _e.authParams.parameters[key];
        if (!originalParameter || parameter.value !== originalParameter.value) {
          hasChanges.value = true;
          return;
        }
      }
      hasChanges.value = false;
    }
    watch([loadedEditableRemoteName, loadedEditableRemoteProvider, loadedEditableRemoteParams], checkForChanges, { deep: true });
    async function saveEditedRemoteBtn() {
      if (!hasChanges.value) {
        pushNotification(
          new Notification(
            "No Changes Detected",
            `No fields have been changed, save not completed.`,
            "info",
            6e3
          )
        );
        return;
      }
      saving.value = true;
      try {
        const oldName = selectedRemote.value.name;
        const newName = loadedEditableRemoteName.value;
        const newType = loadedEditableRemoteProvider.value.type;
        await myRemoteManager.editRemote(
          oldName,
          newName,
          newType,
          loadedEditableRemoteParams.value
        );
        await loadRemotes();
        const updatedRemote = await myRemoteManager.getRemoteByName(newName);
        if (updatedRemote) {
          selectedRemote.value = updatedRemote;
        }
        pushNotification(
          new Notification(
            "Remote Updated",
            `Remote changes have been saved successfully.`,
            "success",
            6e3
          )
        );
        editMode.value = false;
      } catch (err) {
        console.error("Error saving edited remote:", err);
        pushNotification(
          new Notification(
            "Error",
            `Failed to save remote changes.`,
            "error",
            6e3
          )
        );
      } finally {
        saving.value = false;
      }
    }
    function deleteRemoteBtn() {
      showDeleteRemoteDialog();
    }
    const showDeleteRemotePrompt = ref(false);
    const deleteRemoteDialog = ref();
    const deleting = ref(false);
    async function showDeleteRemoteDialog() {
      await loadConfirmationDialog(deleteRemoteDialog);
      showDeleteRemotePrompt.value = true;
    }
    const deleteRemoteYes = async () => {
      deleting.value = true;
      const remoteName = selectedRemote.value.name;
      await myRemoteManager.deleteRemote(remoteName);
      loading.value = true;
      await myRemoteManager.getRemotes();
      pushNotification(new Notification("Remote Deleted", `Remote ${remoteName} has been deleted successfully.`, "success", 6e3));
      loading.value = false;
      editMode.value = false;
      selectedRemote.value = void 0;
      deleting.value = false;
      updateShowDeleteRemotePrompt(false);
    };
    const deleteRemoteNo = async () => {
      updateShowDeleteRemotePrompt(false);
    };
    const updateShowDeleteRemotePrompt = (newVal) => {
      showDeleteRemotePrompt.value = newVal;
    };
    function clearOAuthBtn() {
      oAuthenticated.value = false;
      loadedEditableRemoteParams.token = "";
    }
    const displayValue = computed({
      get: () => {
        if (loadedEditableRemoteProvider.value) {
          let token = loadedEditableRemoteParams.value.parameters.token.value;
          if (!token) {
            return "";
          }
          if (typeof token === "string") {
            try {
              token = JSON.parse(token);
            } catch (error) {
              return token;
            }
          }
          if (typeof token === "object") {
            const jsonString = JSON.stringify(token, null, 2);
            return jsonString;
          } else {
            return token;
          }
        }
      },
      set: (newValue) => {
        if (loadedEditableRemoteProvider.value) {
          try {
            const parsedValue = JSON.parse(newValue);
            loadedEditableRemoteParams.value.parameters.token.value = parsedValue;
          } catch (error) {
            loadedEditableRemoteParams.value.parameters.token.value = newValue;
          }
          console.log(
            loadedEditableRemoteParams.value.parameters.token.value
          );
        }
      }
    });
    const accessToken = ref(null);
    const refreshToken = ref(null);
    const userId = ref(null);
    const tokenExpiry = ref(null);
    function oAuthBtn(selectedProvider) {
      try {
        let providerAuthUrlSuffix;
        switch (selectedProvider.type) {
          case "dropbox":
            providerAuthUrlSuffix = "dropbox";
            break;
          case "drive":
            providerAuthUrlSuffix = "drive";
            break;
          case "google cloud storage":
            providerAuthUrlSuffix = "cloud";
            break;
          default:
            providerAuthUrlSuffix = "";
            break;
        }
        const middlewareUrl = `https://cloud-sync.45d.io/auth/${providerAuthUrlSuffix}`;
        const authWindow = window.open(middlewareUrl, "_blank", "width=500,height=900");
        if (!authWindow) {
          throw new Error("Failed to open authentication window. Please check your popup settings.");
        }
        const handleAuthMessage = async (event) => {
          try {
            if (event.origin !== "https://cloud-sync.45d.io")
              return;
            const { accessToken: token, refreshToken: refresh, userId: id } = event.data;
            if (token && refresh && id) {
              accessToken.value = token;
              refreshToken.value = refresh;
              userId.value = id;
              const expiry = await getTokenExpiry();
              if (expiry) {
                tokenExpiry.value = expiry;
              }
              const fullToken = {
                "access_token": accessToken.value,
                "expiry": tokenExpiry.value,
                "refresh_token": refreshToken.value
              };
              oAuthenticated.value = true;
              loadedEditableRemoteParams.value.parameters.token.value = JSON.stringify(fullToken);
              pushNotification(new Notification("Authentication Successful", `Token updated successfully`, "success", 6e3));
              window.removeEventListener("message", handleAuthMessage);
            } else {
              throw new Error("Authentication failed. Token data is missing or incomplete.");
            }
          } catch (error) {
            console.error("Error during authentication:", error);
            oAuthenticated.value = false;
            pushNotification(new Notification("Authentication Failed", `${error.message}`, "error", 6e3));
          }
        };
        window.addEventListener("message", handleAuthMessage);
      } catch (error) {
        console.error("Error initializing OAuth:", error);
        pushNotification(new Notification("Authentication Error", `${error.message}`, "error", 6e3));
      }
    }
    async function getTokenExpiry() {
      const currentTime = new Date();
      return new Date(currentTime.getTime() + 3600 * 1e3).toISOString();
    }
    const hoverStates = reactive({});
    function handleMouseEnter(remoteName) {
      hoverStates[remoteName] = true;
    }
    function handleMouseLeave(remoteName) {
      hoverStates[remoteName] = false;
    }
    function isHovered(remoteName) {
      return hoverStates[remoteName] || false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3, {
          onClose: closeModal,
          isOpen: unref(showManageRemotes),
          "margin-top": "mt-14",
          width: "w-6/12",
          "min-width": "min-w-3/5",
          height: "h-min",
          "min-height": "min-h-min",
          "close-on-background-click": false,
          closeConfirm: closeBtn
        }, {
          title: withCtx(() => [..._cache[13] || (_cache[13] = [
            createTextVNode(" Manage Rclone Remotes ", -1)
          ])]),
          content: withCtx(() => [
            unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(_sfc_main$1, {
                width: "w-32",
                height: "h-32",
                baseColor: "text-gray-200",
                fillColor: "fill-gray-500"
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _cache[14] || (_cache[14] = createBaseVNode("h2", { class: "text-base font-medium text-default" }, "Select Remote", -1)),
                createBaseVNode("ul", _hoisted_4, [
                  unref(existingRemotes).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(existingRemotes), (remote) => {
                    return openBlock(), createElementBlock("li", {
                      key: remote.name,
                      class: "col-span-1 flex rounded-md shadow-sm"
                    }, [
                      createBaseVNode("button", {
                        onClick: withModifiers(($event) => selectRemoteBtn(remote), ["stop"]),
                        onMouseenter: ($event) => handleMouseEnter(remote.name),
                        onMouseleave: ($event) => handleMouseLeave(remote.name),
                        class: "flex flex-row items-center text-center h-fit w-full mt-1 btn text-white",
                        style: normalizeStyle(unref(getButtonStyles)(isHovered(remote.name), void 0, remote)),
                        title: remote.name
                      }, [
                        createBaseVNode("div", _hoisted_6, [
                          createBaseVNode("img", {
                            src: unref(getProviderLogo)(void 0, remote),
                            alt: "provider-logo",
                            class: "inline-block w-4 h-4"
                          }, null, 8, _hoisted_7)
                        ]),
                        createBaseVNode("div", {
                          class: normalizeClass(["flex-grow px-2 py-2 text-sm", unref(truncateText)])
                        }, toDisplayString(remote.name), 3)
                      ], 44, _hoisted_5)
                    ]);
                  }), 128)) : createCommentVNode("", true)
                ])
              ]),
              !selectedRemote.value ? (openBlock(), createElementBlock("div", _hoisted_8, " Please select a remote. ")) : createCommentVNode("", true),
              selectedRemote.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, [
                      _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Remote Name", -1)),
                      editMode.value ? (openBlock(), createBlock(_sfc_main$2, {
                        key: 0,
                        class: "ml-1",
                        title: "Name can have letters, numbers, underscore (_), hyphen (-), period (.), plus (+), asperand (@), and spaces. Cannot start with - or space, or end with space."
                      })) : createCommentVNode("", true)
                    ]),
                    remoteNameErrorTag.value ? (openBlock(), createBlock(unref(render), {
                      key: 0,
                      class: "mt-1 w-5 h-5 text-danger"
                    })) : createCommentVNode("", true)
                  ]),
                  editMode.value ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 0,
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loadedEditableRemoteName.value = $event),
                    class: normalizeClass([
                      "my-1 block w-full input-textlike bg-default text-default",
                      remoteNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                    ]),
                    placeholder: "New Remote",
                    title: ""
                  }, null, 2)), [
                    [vModelText, loadedEditableRemoteName.value]
                  ]) : withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    disabled: "",
                    type: "text",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => loadedEditableRemoteName.value = $event),
                    class: "my-1 block w-full input-textlike bg-default text-default"
                  }, null, 512)), [
                    [vModelText, loadedEditableRemoteName.value]
                  ])
                ]),
                Object.keys(unref(cloudSyncProviders)).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  _cache[17] || (_cache[17] = createBaseVNode("label", {
                    for: "cloud-provider-selection",
                    class: "block text-sm leading-6 text-default"
                  }, " Cloud Provider", -1)),
                  editMode.value ? withDirectives((openBlock(), createElementBlock("select", {
                    key: 0,
                    id: "cloud-provider-selection",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => loadedEditableRemoteProvider.value = $event),
                    name: "cloud-provider-selection",
                    class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                  }, [
                    _cache[16] || (_cache[16] = createBaseVNode("option", { value: void 0 }, "Select Cloud Provider", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(unref(cloudSyncProviders)), ([key, provider], idx) => {
                      return openBlock(), createElementBlock("option", {
                        key,
                        value: provider
                      }, toDisplayString(provider.name), 9, _hoisted_14);
                    }), 128))
                  ], 512)), [
                    [vModelSelect, loadedEditableRemoteProvider.value]
                  ]) : withDirectives((openBlock(), createElementBlock("select", {
                    key: 1,
                    id: "cloud-provider-selection",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => loadedEditableRemoteProvider.value = $event),
                    name: "cloud-provider-selection",
                    disabled: "",
                    class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                  }, [
                    createBaseVNode("option", { value: loadedEditableRemoteProvider.value }, toDisplayString(loadedEditableRemoteProvider.value.name), 9, _hoisted_15)
                  ], 512)), [
                    [vModelSelect, loadedEditableRemoteProvider.value]
                  ])
                ])) : createCommentVNode("", true),
                !editMode.value && selectedRemote.value.provider ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(loadedEditableRemoteParams.value.parameters, (parameter, key) => {
                    return openBlock(), createElementBlock("div", {
                      key: String(key),
                      class: "mt-1 text-default"
                    }, [
                      createBaseVNode("label", {
                        for: String(key),
                        class: "block text-sm font-medium text-default"
                      }, toDisplayString(key), 9, _hoisted_17),
                      parameter.type === "string" && (loadedEditableRemoteProvider.value.type !== "s3" || String(key) !== "provider") ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 0,
                        disabled: "",
                        type: "text",
                        "onUpdate:modelValue": ($event) => parameter.value = $event,
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: parameter.defaultValue ? String(parameter.defaultValue) : "Default is empty string"
                      }, null, 8, _hoisted_18)), [
                        [vModelText, parameter.value]
                      ]) : parameter.type === "bool" ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 1,
                        disabled: "",
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => parameter.value = $event,
                        id: String(key),
                        class: "-mt-1 w-4 h-4 text-success border-default rounded focus:ring-green-500"
                      }, null, 8, _hoisted_19)), [
                        [vModelCheckbox, parameter.value]
                      ]) : parameter.type === "int" ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 2,
                        disabled: "",
                        type: "number",
                        "onUpdate:modelValue": ($event) => parameter.value = $event,
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: parameter.defaultValue == "" ? "Default is empty string" : `Default is '${parameter.defaultValue}'`
                      }, null, 8, _hoisted_20)), [
                        [vModelText, parameter.value]
                      ]) : parameter.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                        key: 3,
                        disabled: "",
                        "onUpdate:modelValue": ($event) => parameter.value = $event,
                        id: String(key),
                        class: "block w-full mt-1 input-textlike"
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(parameter.allowedValues, (option) => {
                          return openBlock(), createElementBlock("option", {
                            key: option,
                            value: option
                          }, toDisplayString(option), 9, _hoisted_22);
                        }), 128))
                      ], 8, _hoisted_21)), [
                        [vModelSelect, parameter.value]
                      ]) : parameter.type === "object" && String(key) !== "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                        key: 4,
                        disabled: "",
                        "onUpdate:modelValue": ($event) => parameter.value = $event,
                        rows: "4",
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: `Default is empty object`
                      }, null, 8, _hoisted_23)), [
                        [vModelText, parameter.value]
                      ]) : parameter.type === "object" && String(key) === "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                        key: 5,
                        disabled: "",
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => displayValue.value = $event),
                        rows: "4",
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: `Default is empty object`
                      }, null, 8, _hoisted_24)), [
                        [vModelText, displayValue.value]
                      ]) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                editMode.value && selectedRemote.value.provider ? (openBlock(), createElementBlock("div", _hoisted_25, [
                  loadedEditableRemoteParams.value.oAuthSupported ? (openBlock(), createElementBlock("div", _hoisted_26, [
                    _cache[20] || (_cache[20] = createBaseVNode("label", {
                      for: "use-oauth",
                      class: "block text-base leading-6 text-default mt-1 border-b-2 mb-2"
                    }, [
                      createBaseVNode("b", null, "Authenticate with OAuth 2.0"),
                      createTextVNode(" - "),
                      createBaseVNode("i", { class: "text-sm" }, "Enter credentials in next window")
                    ], -1)),
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("button", {
                        onClick: _cache[5] || (_cache[5] = withModifiers(($event) => oAuthBtn(loadedEditableRemoteProvider.value), ["stop"])),
                        onMouseenter: handleMouseEnter,
                        onMouseleave: handleMouseLeave,
                        class: "flex flex-row items-center text-center h-fit w-full mt-1 btn text-white",
                        style: normalizeStyle(unref(getButtonStyles)(isHovered(loadedEditableRemoteParams.name), loadedEditableRemoteProvider.value, void 0))
                      }, [
                        createBaseVNode("span", _hoisted_28, " Authenticate with " + toDisplayString(loadedEditableRemoteProvider.value.name), 1),
                        createBaseVNode("div", _hoisted_29, [
                          createBaseVNode("img", {
                            src: unref(getProviderLogo)(loadedEditableRemoteProvider.value, void 0),
                            alt: "provider-logo",
                            class: "inline-block w-4 h-4"
                          }, null, 8, _hoisted_30)
                        ])
                      ], 36),
                      oAuthenticated.value ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: _cache[6] || (_cache[6] = withModifiers(($event) => clearOAuthBtn(), ["stop"])),
                        class: "flex flex-row items-center text-center h-fit w-full mt-1 btn btn-danger text-default"
                      }, [..._cache[18] || (_cache[18] = [
                        createBaseVNode("span", { class: "flex-grow text-center mt-0.5" }, " Reset OAuth Data ", -1)
                      ])])) : createCommentVNode("", true),
                      !oAuthenticated.value ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: _cache[7] || (_cache[7] = withModifiers(($event) => clearOAuthBtn(), ["stop"])),
                        disabled: "",
                        class: "flex flex-row items-center text-center h-fit w-full mt-1 btn btn-danger text-default"
                      }, [..._cache[19] || (_cache[19] = [
                        createBaseVNode("span", { class: "flex-grow text-center mt-0.5" }, " Reset OAuth Data ", -1)
                      ])])) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true),
                  loadedEditableRemoteParams.value.oAuthSupported ? (openBlock(), createElementBlock("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      createBaseVNode("a", {
                        href: privacyPolicyUrl.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "underline text-blue-500 hover:text-blue-700"
                      }, " Privacy Policy ", 8, _hoisted_33),
                      createBaseVNode("a", {
                        href: termsOfServiceUrl.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "ml-4 underline text-blue-500 hover:text-blue-700"
                      }, " Terms of Service ", 8, _hoisted_34)
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_35, [
                    _cache[21] || (_cache[21] = createBaseVNode("div", { class: "block text-base leading-6 text-default border-b-2 mb-2" }, [
                      createBaseVNode("b", null, "Manually Configure Parameters"),
                      createTextVNode(" - "),
                      createBaseVNode("i", { class: "text-sm" }, "Blank fields will be left out of config or set with defaults (if applicable)")
                    ], -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(loadedEditableRemoteParams.value.parameters, (parameter, key) => {
                      return openBlock(), createElementBlock("div", {
                        key: String(key),
                        class: "mt-1 text-default"
                      }, [
                        createBaseVNode("label", {
                          for: String(key),
                          class: "block text-sm font-medium text-default"
                        }, toDisplayString(key), 9, _hoisted_36),
                        parameter.type === "string" && (loadedEditableRemoteProvider.value.type !== "s3" || String(key) !== "provider") ? withDirectives((openBlock(), createElementBlock("input", {
                          key: 0,
                          type: "text",
                          "onUpdate:modelValue": ($event) => parameter.value = $event,
                          id: String(key),
                          class: "block w-full mt-1 input-textlike",
                          placeholder: parameter.defaultValue ? String(parameter.defaultValue) : "Default is empty string"
                        }, null, 8, _hoisted_37)), [
                          [vModelText, parameter.value]
                        ]) : parameter.type === "bool" ? withDirectives((openBlock(), createElementBlock("input", {
                          key: 1,
                          type: "checkbox",
                          "onUpdate:modelValue": ($event) => parameter.value = $event,
                          id: String(key),
                          class: "-mt-1 w-4 h-4 text-success border-default rounded focus:ring-green-500"
                        }, null, 8, _hoisted_38)), [
                          [vModelCheckbox, parameter.value]
                        ]) : parameter.type === "int" ? withDirectives((openBlock(), createElementBlock("input", {
                          key: 2,
                          type: "number",
                          "onUpdate:modelValue": ($event) => parameter.value = $event,
                          id: String(key),
                          class: "block w-full mt-1 input-textlike",
                          placeholder: parameter.defaultValue == "" ? "Default is empty string" : `Default is '${parameter.defaultValue}'`
                        }, null, 8, _hoisted_39)), [
                          [vModelText, parameter.value]
                        ]) : parameter.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                          key: 3,
                          "onUpdate:modelValue": ($event) => parameter.value = $event,
                          id: String(key),
                          class: "block w-full mt-1 input-textlike"
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(parameter.allowedValues, (option) => {
                            return openBlock(), createElementBlock("option", {
                              key: option,
                              value: option
                            }, toDisplayString(option), 9, _hoisted_41);
                          }), 128))
                        ], 8, _hoisted_40)), [
                          [vModelSelect, parameter.value]
                        ]) : parameter.type === "object" && String(key) !== "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                          key: 4,
                          "onUpdate:modelValue": ($event) => parameter.value = $event,
                          rows: "4",
                          id: String(key),
                          class: "block w-full mt-1 input-textlike",
                          placeholder: `Default is empty object`
                        }, null, 8, _hoisted_42)), [
                          [vModelText, parameter.value]
                        ]) : parameter.type === "object" && String(key) === "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                          key: 5,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => displayValue.value = $event),
                          rows: "4",
                          id: String(key),
                          class: "block w-full mt-1 input-textlike",
                          placeholder: `Automatically retrieved with OAuth. (Default is empty object)`
                        }, null, 8, _hoisted_43)), [
                          [vModelText, displayValue.value]
                        ]) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ]))
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = withModifiers(($event) => closeBtn(), ["stop"])),
                id: "close-add-task-btn",
                name: "close-add-task-btn",
                class: "btn btn-danger h-fit flex-none"
              }, "Close"),
              selectedRemote.value ? (openBlock(), createElementBlock("div", _hoisted_45, [
                createBaseVNode("button", {
                  id: "delete-remote-btn",
                  type: "button",
                  onClick: _cache[10] || (_cache[10] = withModifiers(($event) => deleteRemoteBtn(), ["stop"])),
                  class: "btn btn-danger h-fit w-full"
                }, "Delete Remote"),
                editMode.value ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  id: "edit-remote-btn",
                  type: "button",
                  onClick: _cache[11] || (_cache[11] = withModifiers(($event) => editRemoteBtn(), ["stop"])),
                  class: "btn btn-secondary h-fit w-full"
                }, "Cancel Edit")) : createCommentVNode("", true),
                !editMode.value ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  id: "edit-remote-btn",
                  type: "button",
                  onClick: _cache[12] || (_cache[12] = withModifiers(($event) => editRemoteBtn(), ["stop"])),
                  class: "btn btn-secondary h-fit w-full"
                }, "Edit Remote")) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              selectedRemote.value && editMode.value ? (openBlock(), createElementBlock("div", _hoisted_46, [
                saving.value ? (openBlock(), createElementBlock("button", _hoisted_47, [..._cache[22] || (_cache[22] = [
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
                  createTextVNode(" Saving... ", -1)
                ])])) : createCommentVNode("", true),
                !saving.value ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  id: "add-task-btn",
                  class: "btn btn-primary h-fit",
                  onClick: saveEditedRemoteBtn
                }, " Save Changes ")) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["isOpen"]),
        showCloseConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_48, [
          (openBlock(), createBlock(resolveDynamicComponent(closeConfirmationComponent.value), {
            onClose: updateShowCloseConfirmation,
            dropboxAuthParams: "",
            showFlag: showCloseConfirmation.value,
            title: "Cancel Edit Remote",
            message: "Are you sure? The currently edited remote configuration will be lost.",
            confirmYes: confirmCancel,
            confirmNo: cancelCancel,
            operation: "canceling",
            operating: cancelingManageRemotes.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showDeleteRemotePrompt.value ? (openBlock(), createElementBlock("div", _hoisted_49, [
          (openBlock(), createBlock(resolveDynamicComponent(deleteRemoteDialog.value), {
            onClose: updateShowDeleteRemotePrompt,
            showFlag: showDeleteRemotePrompt.value,
            title: "Delete Remote",
            message: "Are you sure you want to delete this remote?",
            confirmYes: deleteRemoteYes,
            confirmNo: deleteRemoteNo,
            operating: deleting.value,
            operation: "deleting"
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
