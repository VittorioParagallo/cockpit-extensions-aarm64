import { d as defineComponent, i as injectWithCheck, aE as remoteManagerInjectionKey, aF as rcloneRemotesInjectionKey, r as ref, aM as reactive, a3 as inject, w as watch, e as computed, o as openBlock, c as createElementBlock, l as createVNode, aj as withCtx, a as createBaseVNode, m as createTextVNode, k as unref, aA as getProviderLogo, p as createCommentVNode, L as createBlock, E as withDirectives, z as normalizeClass, H as vModelText, aL as cloudSyncProviders, F as Fragment, q as renderList, y as toDisplayString, G as vModelSelect, aB as withModifiers, aO as normalizeStyle, aP as getButtonStyles, a5 as vModelCheckbox, aC as resolveDynamicComponent, B as pushNotification, N as Notification, aJ as __vitePreload } from "./index.9323ba8c.js";
import { _ as _sfc_main$2 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import { _ as _sfc_main$1, r as render } from "./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1 = { class: "items-center" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { name: "remote-name" };
const _hoisted_4 = { class: "flex flex-row justify-between items-center" };
const _hoisted_5 = { class: "flex flex-row justify-between items-center" };
const _hoisted_6 = {
  key: 0,
  name: "cloud-provider"
};
const _hoisted_7 = ["value"];
const _hoisted_8 = {
  key: 1,
  class: "grid grid-cols-2"
};
const _hoisted_9 = {
  key: 0,
  class: "col-span-2 w-full mt-2"
};
const _hoisted_10 = { class: "button-group-row justify-between" };
const _hoisted_11 = { class: "flex-grow text-center mt-0.5" };
const _hoisted_12 = { class: "flex items-center justify-center h-6 w-6 bg-white rounded-full ml-2" };
const _hoisted_13 = ["src"];
const _hoisted_14 = {
  key: 1,
  class: "w-full col-span-2 text-default items-center mt-3 flex flex-row"
};
const _hoisted_15 = { class: "flex-grow text-left" };
const _hoisted_16 = ["href"];
const _hoisted_17 = ["href"];
const _hoisted_18 = { class: "col-span-2 w-full mt-2" };
const _hoisted_19 = ["for"];
const _hoisted_20 = ["onUpdate:modelValue", "id", "placeholder"];
const _hoisted_21 = ["onUpdate:modelValue", "id"];
const _hoisted_22 = ["onUpdate:modelValue", "id", "placeholder"];
const _hoisted_23 = ["onUpdate:modelValue", "id"];
const _hoisted_24 = ["value"];
const _hoisted_25 = ["onUpdate:modelValue", "id"];
const _hoisted_26 = ["id"];
const _hoisted_27 = { class: "w-full" };
const _hoisted_28 = { class: "button-group-row w-full justify-between" };
const _hoisted_29 = { class: "button-group-row" };
const _hoisted_30 = { class: "button-group-row" };
const _hoisted_31 = {
  key: 0,
  disabled: "",
  id: "creating-task-btn",
  type: "button",
  class: "btn btn-primary h-fit w-full"
};
const _hoisted_32 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateRemote",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const myRemoteManager = injectWithCheck(remoteManagerInjectionKey, "remote manager not provided!");
    const existingRemotes = injectWithCheck(rcloneRemotesInjectionKey, "remotes not provided!");
    const selectedProvider = ref();
    const providerValues = reactive({});
    const remoteName = ref("");
    const remoteNameErrorTag = ref("");
    const creating = ref(false);
    const oAuthenticated = ref(false);
    const emit = __emit;
    const showCreateRemote = inject("show-create-remote");
    console.log("EXISTING REMOTES:", existingRemotes);
    const privacyPolicyUrl = ref("https://cloud-sync.45d.io/privacy");
    const termsOfServiceUrl = ref("https://cloud-sync.45d.io/tos");
    watch(selectedProvider, (newlySelectedProvider) => {
      var _a;
      if (newlySelectedProvider) {
        Object.keys(providerValues).forEach((key) => delete providerValues[key]);
        for (const [key, param] of Object.entries(newlySelectedProvider.providerParams.parameters)) {
          providerValues[key] = (_a = param.value) != null ? _a : param.defaultValue;
        }
      }
    });
    const closeModal = () => {
      oAuthenticated.value = false;
      providerValues.token = "";
      showCreateRemote.value = false;
      emit("close");
    };
    const cancelingAddRemote = ref(false);
    const showCloseConfirmation = ref(false);
    const closeConfirmationComponent = ref();
    async function loadCloseConfirmationComponent() {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      closeConfirmationComponent.value = module.default;
    }
    const closeBtn = async () => {
      if (!selectedProvider.value) {
        closeModal();
      } else {
        await loadCloseConfirmationComponent();
        showCloseConfirmation.value = true;
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
    const providerParameters = computed(() => {
      if (!selectedProvider.value)
        return [];
      return Object.entries(selectedProvider.value.providerParams.parameters);
    });
    const displayValue = computed({
      get: () => {
        if (selectedProvider.value) {
          const token = providerValues.token;
          if (!token) {
            return "";
          }
          return typeof token === "object" ? JSON.stringify(token, null, 2) : token;
        }
      },
      set: (newValue) => {
        if (selectedProvider.value) {
          try {
            providerValues.token = JSON.parse(newValue);
          } catch {
            providerValues.token = newValue;
          }
        }
      }
    });
    const createRemoteBtn = async () => {
      try {
        if (!remoteName.value) {
          throw Error("Remote name required");
        }
        if (!selectedProvider.value) {
          throw Error("No provider selected");
        }
        if (providerValues.token) {
          const tokenParam = providerValues.token;
          if (typeof tokenParam === "string") {
            try {
              providerValues.token = JSON.parse(tokenParam);
            } catch {
              throw new Error("Token parameter is invalid JSON.");
            }
          }
        }
        creating.value = true;
        const parametersToSave = Object.fromEntries(
          Object.entries(providerValues).filter(([key, value]) => {
            return value !== null && value !== void 0 && value !== "";
          })
        );
        const newRemote = await myRemoteManager.createRemote(remoteName.value, selectedProvider.value.type, parametersToSave);
        pushNotification(new Notification("Save Successful", `Remote saved successfully`, "success", 6e3));
        creating.value = false;
        showCreateRemote.value = false;
      } catch (error) {
        console.error("Error during save:", error);
        pushNotification(new Notification("Save Failed", `${error.message}`, "error", 6e3));
      }
    };
    function clearOAuthBtn() {
      oAuthenticated.value = false;
      providerValues.token = "";
    }
    const accessToken = ref(null);
    const refreshToken = ref(null);
    const userId = ref(null);
    const tokenExpiry = ref(null);
    function oAuthBtn(selectedProvider2) {
      try {
        let providerAuthUrlSuffix;
        switch (selectedProvider2.type) {
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
            const { accessToken: token, refreshToken: refresh, expiry, userId: id } = event.data;
            if (token && refresh && id) {
              accessToken.value = token;
              refreshToken.value = refresh;
              tokenExpiry.value = expiry;
              userId.value = id;
              const fullToken = {
                "access_token": accessToken.value,
                "expiry": tokenExpiry.value,
                "refresh_token": refreshToken.value
              };
              oAuthenticated.value = true;
              providerValues.token = JSON.stringify(fullToken);
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
    const isHovered = ref(false);
    function handleMouseEnter() {
      isHovered.value = true;
    }
    function handleMouseLeave() {
      isHovered.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2, {
          onClose: closeModal,
          isOpen: unref(showCreateRemote),
          "margin-top": "mt-14",
          width: "w-6/12",
          "min-width": "min-w-3/5",
          height: "h-min",
          "min-height": "min-h-min",
          "close-on-background-click": false,
          closeConfirm: closeBtn
        }, {
          title: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              _cache[7] || (_cache[7] = createTextVNode(" Create Rclone Remote ", -1)),
              selectedProvider.value ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: unref(getProviderLogo)(selectedProvider.value, void 0),
                alt: "provider-logo",
                class: "inline-block w-6 h-6 ml-2"
              }, null, 8, _hoisted_2)) : createCommentVNode("", true)
            ])
          ]),
          content: withCtx(() => [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _cache[8] || (_cache[8] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Remote Name", -1)),
                    createVNode(_sfc_main$1, {
                      class: "ml-1",
                      title: "Name can have letters, numbers, underscore (_), hyphen (-), period (.), plus (+), asperand (@), and spaces. Cannot start with - or space, or end with space."
                    })
                  ]),
                  remoteNameErrorTag.value ? (openBlock(), createBlock(unref(render), {
                    key: 0,
                    class: "mt-1 w-5 h-5 text-danger"
                  })) : createCommentVNode("", true)
                ]),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => remoteName.value = $event),
                  class: normalizeClass([
                    "my-1 block w-full input-textlike bg-default text-default",
                    remoteNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "New Remote",
                  title: ""
                }, null, 2), [
                  [vModelText, remoteName.value]
                ])
              ]),
              Object.keys(unref(cloudSyncProviders)).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                _cache[10] || (_cache[10] = createBaseVNode("label", {
                  for: "cloud-provider-selection",
                  class: "block text-sm leading-6 text-default"
                }, "Cloud Provider", -1)),
                withDirectives(createBaseVNode("select", {
                  id: "cloud-provider-selection",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedProvider.value = $event),
                  name: "cloud-provider-selection",
                  class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                }, [
                  _cache[9] || (_cache[9] = createBaseVNode("option", { value: void 0 }, "Select Cloud Provider", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(unref(cloudSyncProviders)), ([key, provider], idx) => {
                    return openBlock(), createElementBlock("option", {
                      key,
                      value: provider
                    }, toDisplayString(provider.name), 9, _hoisted_7);
                  }), 128))
                ], 512), [
                  [vModelSelect, selectedProvider.value]
                ])
              ])) : createCommentVNode("", true),
              selectedProvider.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                selectedProvider.value.providerParams.oAuthSupported ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  _cache[13] || (_cache[13] = createBaseVNode("label", {
                    for: "use-oauth",
                    class: "block text-base leading-6 text-default mt-1 border-b-2 mb-2"
                  }, [
                    createBaseVNode("b", null, "Authenticate with OAuth 2.0"),
                    createTextVNode(" - "),
                    createBaseVNode("i", { class: "text-sm" }, "Enter credentials in next window")
                  ], -1)),
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("button", {
                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => oAuthBtn(selectedProvider.value), ["stop"])),
                      onMouseenter: handleMouseEnter,
                      onMouseleave: handleMouseLeave,
                      class: "flex flex-row items-center text-center h-fit w-full mt-1 btn text-white",
                      style: normalizeStyle(unref(getButtonStyles)(isHovered.value, selectedProvider.value, void 0))
                    }, [
                      createBaseVNode("span", _hoisted_11, " Authenticate with " + toDisplayString(selectedProvider.value.name), 1),
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("img", {
                          src: unref(getProviderLogo)(selectedProvider.value, void 0),
                          alt: "provider-logo",
                          class: "inline-block w-4 h-4"
                        }, null, 8, _hoisted_13)
                      ])
                    ], 36),
                    oAuthenticated.value ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => clearOAuthBtn(), ["stop"])),
                      class: "flex flex-row items-center text-center h-fit w-full mt-1 btn btn-danger text-default"
                    }, [..._cache[11] || (_cache[11] = [
                      createBaseVNode("span", { class: "flex-grow text-center mt-0.5" }, " Reset OAuth Data ", -1)
                    ])])) : createCommentVNode("", true),
                    !oAuthenticated.value ? (openBlock(), createElementBlock("button", {
                      key: 1,
                      onClick: _cache[4] || (_cache[4] = withModifiers(($event) => clearOAuthBtn(), ["stop"])),
                      disabled: "",
                      class: "flex flex-row items-center text-center h-fit w-full mt-1 btn btn-danger text-default"
                    }, [..._cache[12] || (_cache[12] = [
                      createBaseVNode("span", { class: "flex-grow text-center mt-0.5" }, " Reset OAuth Data ", -1)
                    ])])) : createCommentVNode("", true)
                  ])
                ])) : createCommentVNode("", true),
                selectedProvider.value.providerParams.oAuthSupported ? (openBlock(), createElementBlock("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("a", {
                      href: privacyPolicyUrl.value,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "underline text-blue-500 hover:text-blue-700"
                    }, " Privacy Policy ", 8, _hoisted_16),
                    createBaseVNode("a", {
                      href: termsOfServiceUrl.value,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "ml-4 underline text-blue-500 hover:text-blue-700"
                    }, " Terms of Service ", 8, _hoisted_17)
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_18, [
                  _cache[14] || (_cache[14] = createBaseVNode("div", { class: "block text-base leading-6 text-default border-b-2 mb-2" }, [
                    createBaseVNode("b", null, "Manually Configure Parameters"),
                    createTextVNode(" - "),
                    createBaseVNode("i", { class: "text-sm" }, "Blank fields will be left out of config or set with defaults (if applicable)")
                  ], -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(providerParameters.value, ([key, parameter], index) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "mt-1 text-default"
                    }, [
                      createBaseVNode("label", {
                        for: String(key),
                        class: "block text-sm font-medium text-default"
                      }, toDisplayString(key), 9, _hoisted_19),
                      parameter.type === "string" && (selectedProvider.value.type !== "s3" || key !== "provider") ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 0,
                        type: "text",
                        "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: parameter.defaultValue ? String(parameter.defaultValue) : "Default is empty string"
                      }, null, 8, _hoisted_20)), [
                        [vModelText, providerValues[key]]
                      ]) : parameter.type === "bool" ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 1,
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                        id: String(key),
                        class: "-mt-1 w-4 h-4 text-success border-default rounded focus:ring-green-500"
                      }, null, 8, _hoisted_21)), [
                        [vModelCheckbox, providerValues[key]]
                      ]) : parameter.type === "int" ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 2,
                        type: "number",
                        "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: parameter.defaultValue == "" ? "Default is empty string" : `Default is '${parameter.defaultValue}'`
                      }, null, 8, _hoisted_22)), [
                        [vModelText, providerValues[key]]
                      ]) : parameter.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                        key: 3,
                        "onUpdate:modelValue": ($event) => providerValues[key] = $event,
                        id: String(key),
                        class: "block w-full mt-1 input-textlike"
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(parameter.allowedValues, (option) => {
                          return openBlock(), createElementBlock("option", {
                            key: option,
                            value: option
                          }, toDisplayString(option), 9, _hoisted_24);
                        }), 128))
                      ], 8, _hoisted_23)), [
                        [vModelSelect, providerValues[key]]
                      ]) : parameter.type === "object" && key !== "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                        key: 4,
                        "onUpdate:modelValue": ($event) => parameter.value = $event,
                        rows: "4",
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: `Default is empty object`
                      }, null, 8, _hoisted_25)), [
                        [vModelText, parameter.value]
                      ]) : parameter.type === "object" && key === "token" ? withDirectives((openBlock(), createElementBlock("textarea", {
                        key: 5,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => displayValue.value = $event),
                        rows: "4",
                        id: String(key),
                        class: "block w-full mt-1 input-textlike",
                        placeholder: `Automatically retrieved with OAuth. (Default is empty object)`
                      }, null, 8, _hoisted_26)), [
                        [vModelText, displayValue.value]
                      ]) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("button", {
                    onClick: _cache[6] || (_cache[6] = withModifiers(($event) => closeBtn(), ["stop"])),
                    id: "close-create-remote-btn",
                    name: "close-create-remote-btn",
                    class: "btn btn-danger h-fit w-full"
                  }, "Cancel")
                ]),
                createBaseVNode("div", _hoisted_30, [
                  creating.value ? (openBlock(), createElementBlock("button", _hoisted_31, [..._cache[15] || (_cache[15] = [
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
                  ])])) : !creating.value && selectedProvider.value ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    id: "create-remote-btn",
                    class: "btn btn-primary h-fit w-full",
                    onClick: createRemoteBtn
                  }, "Save Remote")) : (openBlock(), createElementBlock("button", {
                    key: 2,
                    disabled: "",
                    id: "create-remote-btn-error",
                    class: "btn btn-primary h-fit w-full",
                    onClick: createRemoteBtn
                  }, "Save Remote"))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["isOpen"]),
        showCloseConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
          (openBlock(), createBlock(resolveDynamicComponent(closeConfirmationComponent.value), {
            onClose: updateShowCloseConfirmation,
            showFlag: showCloseConfirmation.value,
            title: "Cancel Create Remote",
            message: "Are you sure? This remote configuration will be lost.",
            confirmYes: confirmCancel,
            confirmNo: cancelCancel,
            operation: "canceling",
            operating: cancelingAddRemote.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
