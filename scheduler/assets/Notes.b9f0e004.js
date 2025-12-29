import { d as defineComponent, a3 as inject, r as ref, i as injectWithCheck, s as loadingInjectionKey, t as schedulerInjectionKey, K as provide, o as openBlock, c as createElementBlock, l as createVNode, aj as withCtx, m as createTextVNode, a as createBaseVNode, y as toDisplayString, k as unref, _ as _sfc_main$1, E as withDirectives, H as vModelText, aB as withModifiers, p as createCommentVNode, L as createBlock, aC as resolveDynamicComponent, F as Fragment, Z as ZFSReplicationTaskTemplate, O as AutomatedSnapshotTaskTemplate, R as RsyncTaskTemplate, S as ScrubTaskTemplate, P as SmartTestTemplate, M as CloudSyncTaskTemplate, Q as CustomTaskTemplate, V as TaskSchedule, U as TaskInstance, B as pushNotification, N as Notification, aJ as __vitePreload } from "./index.9323ba8c.js";
import { _ as _sfc_main$2 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1 = { class: "text-base" };
const _hoisted_2 = { class: "text-base text-muted italic" };
const _hoisted_3 = {
  key: 0,
  class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2"
};
const _hoisted_4 = { class: "border border-default rounded-md p-2 col-span-2 row-start-1 row-span-2 bg-accent flex items-center justify-center" };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "grid grid-flow-cols my-2 gap-2" };
const _hoisted_7 = { class: "border border-default rounded-md p-2 col-span-2 bg-accent" };
const _hoisted_8 = { class: "w-full" };
const _hoisted_9 = { class: "button-group-row w-full justify-between" };
const _hoisted_10 = { class: "button-group-row" };
const _hoisted_11 = { class: "button-group-row" };
const _hoisted_12 = {
  key: 0,
  disabled: "",
  id: "editing-task-btn",
  type: "button",
  class: "btn btn-primary h-fit w-full"
};
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notes",
  props: {
    idKey: {},
    task: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const showNotesPrompt = inject("show-notes-view");
    const saving = ref(false);
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const taskInstance = ref(props.task);
    const notes = ref((_a = taskInstance.value) == null ? void 0 : _a.notes);
    ref(false);
    const errorList = ref([]);
    ref();
    const parameters = ref();
    const closeModal = () => {
      showNotesPrompt.value = false;
      emit("close");
    };
    const cancelingEditTask = ref(false);
    const showCloseConfirmation = ref(false);
    const closeConfirmationComponent = ref();
    const closeBtn = async () => {
      closeModal();
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
    const showSaveConfirmation = ref(false);
    const confirmationComponent = ref();
    const loadConfirmationComponent = async () => {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      confirmationComponent.value = module.default;
    };
    async function showConfirmationDialog() {
      await loadConfirmationComponent();
      showSaveConfirmation.value = true;
      console.log("Showing confirmation dialog...");
    }
    const confirmSaveChanges = async () => {
      console.log("Saving and scheduling task now...");
      saving.value = true;
      await saveEditedTask();
      saving.value = false;
      updateShowSaveConfirmation(false);
      loading.value = true;
      await myScheduler.loadTaskInstances();
      loading.value = false;
      showNotesPrompt.value = false;
    };
    const cancelEdit = async () => {
      updateShowSaveConfirmation(false);
    };
    async function saveEditedTask() {
      var _a2, _b, _c, _d, _e, _f, _g;
      console.log("save changes triggered");
      const template = ref();
      console.log("Notes: taskInstance: ", taskInstance);
      if (((_a2 = taskInstance.value) == null ? void 0 : _a2.template.name) == "ZFS Replication Task") {
        template.value = new ZFSReplicationTaskTemplate();
      } else if (((_b = taskInstance.value) == null ? void 0 : _b.template.name) == "Automated Snapshot Task") {
        template.value = new AutomatedSnapshotTaskTemplate();
      } else if (((_c = taskInstance.value) == null ? void 0 : _c.template.name) == "Rsync Task") {
        template.value = new RsyncTaskTemplate();
      } else if (((_d = taskInstance.value) == null ? void 0 : _d.template.name) == "Scrub Task") {
        template.value = new ScrubTaskTemplate();
      } else if (((_e = taskInstance.value) == null ? void 0 : _e.template.name) == "SMART Test") {
        template.value = new SmartTestTemplate();
      } else if (((_f = taskInstance.value) == null ? void 0 : _f.template.name) == "Cloud Sync Task") {
        template.value = new CloudSyncTaskTemplate();
      } else if (((_g = taskInstance.value) == null ? void 0 : _g.template.name) == "Custom Task") {
        template.value = new CustomTaskTemplate();
      }
      let sanitizedName = taskInstance.value.name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
      if (sanitizedName.startsWith("_")) {
        sanitizedName = "task" + sanitizedName;
      }
      console.log("sanitizedName:", sanitizedName);
      const schedule = new TaskSchedule(taskInstance.value.schedule.enabled, taskInstance.value.schedule.intervals);
      const task = new TaskInstance(sanitizedName, template.value, parameters.value, schedule, notes.value);
      console.log("editing note for task: ", task);
      await myScheduler.updateTaskNotes(task);
      pushNotification(new Notification("Changes Saved", `Task has successfully been edited.`, "success", 6e3));
    }
    const updateShowSaveConfirmation = (newVal) => {
      showSaveConfirmation.value = newVal;
    };
    async function saveChangesBtn() {
      showConfirmationDialog();
    }
    provide("task-for-editing", taskInstance);
    provide("parameters", parameters);
    provide("errors", errorList);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2, {
          onClose: closeModal,
          isOpen: unref(showNotesPrompt),
          "margin-top": "mt-10",
          width: "w-3/5",
          "min-width": "min-w-3/5",
          height: "h-min",
          "min-height": "min-h-min",
          "close-on-background-click": false,
          closeConfirm: closeBtn
        }, {
          title: withCtx(() => [
            _cache[2] || (_cache[2] = createTextVNode(" Notes ", -1)),
            createBaseVNode("span", _hoisted_1, toDisplayString(taskInstance.value.name), 1),
            _cache[3] || (_cache[3] = createTextVNode()),
            _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("span", _hoisted_2, toDisplayString(taskInstance.value.template.name), 1)
          ]),
          content: withCtx(() => [
            createBaseVNode("div", null, [
              unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_sfc_main$1, {
                    width: "w-20",
                    height: "h-20",
                    baseColor: "text-gray-200",
                    fillColor: "fill-gray-500"
                  })
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    _cache[5] || (_cache[5] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Notes", -1)),
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => notes.value = $event),
                      rows: "4",
                      class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                      placeholder: "Your notes here..."
                    }, null, 512), [
                      [vModelText, notes.value]
                    ])
                  ])
                ])
              ]))
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => closeBtn(), ["stop"])),
                    id: "close-edit-task-btn",
                    name: "close-edit-task-btn",
                    class: "btn btn-danger h-fit w-full"
                  }, "Close")
                ]),
                createBaseVNode("div", _hoisted_11, [
                  saving.value ? (openBlock(), createElementBlock("button", _hoisted_12, [..._cache[6] || (_cache[6] = [
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
                    onClick: saveChangesBtn,
                    class: "btn btn-primary"
                  }, "Save Notes")) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["isOpen"]),
        showSaveConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
          (openBlock(), createBlock(resolveDynamicComponent(confirmationComponent.value), {
            onClose: updateShowSaveConfirmation,
            showFlag: showSaveConfirmation.value,
            title: "Save Task",
            message: "Save your edits?",
            confirmYes: confirmSaveChanges,
            confirmNo: cancelEdit,
            operation: "saving",
            operating: saving.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showCloseConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
          (openBlock(), createBlock(resolveDynamicComponent(closeConfirmationComponent.value), {
            onClose: updateShowCloseConfirmation,
            showFlag: showCloseConfirmation.value,
            title: "Cancel Edit Task",
            message: "Are you sure? Any changes will be lost.",
            confirmYes: confirmCancel,
            confirmNo: cancelCancel,
            operation: "canceling",
            operating: cancelingEditTask.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
