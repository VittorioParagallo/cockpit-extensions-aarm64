import { d as defineComponent, i as injectWithCheck, v as taskInstancesInjectionKey, T as taskTemplatesInjectionKey, s as loadingInjectionKey, t as schedulerInjectionKey, r as ref, a3 as inject, e as computed, K as provide, o as openBlock, c as createElementBlock, l as createVNode, aj as withCtx, m as createTextVNode, a as createBaseVNode, L as createBlock, k as unref, p as createCommentVNode, E as withDirectives, z as normalizeClass, H as vModelText, F as Fragment, q as renderList, y as toDisplayString, G as vModelSelect, aB as withModifiers, aC as resolveDynamicComponent, B as pushNotification, N as Notification, Z as ZFSReplicationTaskTemplate, O as AutomatedSnapshotTaskTemplate, R as RsyncTaskTemplate, S as ScrubTaskTemplate, P as SmartTestTemplate, M as CloudSyncTaskTemplate, Q as CustomTaskTemplate, V as TaskSchedule, U as TaskInstance, aJ as __vitePreload } from "./index.9323ba8c.js";
import { _ as _sfc_main$3 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import { a as _sfc_main$2 } from "./ParameterInput.vue_vue_type_script_setup_true_lang.3058bac2.js";
import { _ as _sfc_main$1, r as render } from "./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js";
import "./open-closed.8a6c3d9d.js";
import "./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js";
const _hoisted_1 = { name: "task-name" };
const _hoisted_2 = { class: "flex flex-row justify-between items-center" };
const _hoisted_3 = { class: "flex flex-row justify-between items-center" };
const _hoisted_4 = {
  key: 0,
  name: "task-template"
};
const _hoisted_5 = ["value"];
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "grid grid-flow-cols my-2 gap-2" };
const _hoisted_8 = {
  key: 0,
  class: "border border-default rounded-md p-2 col-span-2 bg-accent"
};
const _hoisted_9 = { class: "w-full" };
const _hoisted_10 = { class: "button-group-row w-full justify-between" };
const _hoisted_11 = { class: "button-group-row" };
const _hoisted_12 = { class: "button-group-row" };
const _hoisted_13 = {
  key: 0,
  disabled: "",
  id: "adding-task-btn",
  type: "button",
  class: "btn btn-primary h-fit w-full"
};
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddTask",
  emits: ["close", "manageSchedule"],
  setup(__props, { emit: __emit }) {
    const taskInstances = injectWithCheck(taskInstancesInjectionKey, "taskInstances not provided!");
    const taskTemplates = injectWithCheck(taskTemplatesInjectionKey, "taskTemplates not provided!");
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const emit = __emit;
    const newTask = ref();
    const showTaskWizard = inject("show-task-wizard");
    const adding = ref(false);
    const errorList = ref([]);
    const newTaskName = ref("");
    const newTaskNameErrorTag = ref(false);
    const selectedTemplate = ref();
    const parameterInputComponent = ref();
    const parameters = ref();
    const notesTask = ref("");
    const showNotes = ref(false);
    function toggleNotes() {
      showNotes.value = !showNotes.value;
    }
    const buttonText = computed(() => showNotes.value ? "Close Notes" : "Add Notes");
    const closeModal = () => {
      showTaskWizard.value = false;
      emit("close");
    };
    const cancelingAddTask = ref(false);
    const showCloseConfirmation = ref(false);
    const closeConfirmationComponent = ref();
    async function loadCloseConfirmationComponent() {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      closeConfirmationComponent.value = module.default;
    }
    const closeBtn = async () => {
      if (!selectedTemplate.value) {
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
    function clearAllErrors() {
      errorList.value = [];
      newTaskNameErrorTag.value = false;
      parameterInputComponent.value.clearTaskParamErrorTags();
    }
    function doesTaskNameExist(name) {
      return taskInstances.value.some((task) => task.name === name);
    }
    async function validateTaskName() {
      if (newTaskName.value === "") {
        errorList.value.push("Task name cannot be empty.");
        newTaskNameErrorTag.value = true;
      } else if (!/^[a-zA-Z0-9_ ]+$/.test(newTaskName.value)) {
        errorList.value.push("Task name can only contain letters, numbers, spaces, and underscores.");
        newTaskNameErrorTag.value = true;
      } else if (doesTaskNameExist(newTaskName.value)) {
        errorList.value.push("Task already exists with this name.");
        newTaskNameErrorTag.value = true;
      }
    }
    async function validateComponentParams() {
      clearAllErrors();
      await validateTaskName();
      await parameterInputComponent.value.validation();
      if (errorList.value.length > 0) {
        pushNotification(new Notification("Task Save Failed", `Task submission has errors: 
- ${errorList.value.join("\n- ")}`, "error", 6e3));
        return false;
      } else {
        return true;
      }
    }
    const showSchedulePrompt = ref(false);
    const isStandaloneTask = ref(false);
    const confirmationComponent = ref();
    const loadConfirmationComponent = async () => {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      confirmationComponent.value = module.default;
    };
    async function showSchedulePromptDialog() {
      await loadConfirmationComponent();
      showSchedulePrompt.value = true;
    }
    const makeScheduleLater = async () => {
      adding.value = true;
      isStandaloneTask.value = true;
      try {
        await saveTask();
        pushNotification(new Notification("Task Saved", "Task has been saved.", "success", 6e3));
        updateShowSchedulePrompt(false);
        closeModal();
      } catch (e) {
        pushNotification(new Notification("Task Save Failed", String((e == null ? void 0 : e.message) || e), "error", 6e3));
      } finally {
        adding.value = false;
      }
    };
    const makeScheduleNow = async () => {
      adding.value = true;
      isStandaloneTask.value = false;
      try {
        await saveTask();
        updateShowSchedulePrompt(false);
        emit("manageSchedule", newTask.value);
        closeModal();
      } catch (e) {
        pushNotification(new Notification("Task Save Failed", String((e == null ? void 0 : e.message) || e), "error", 6e3));
      } finally {
        adding.value = false;
      }
    };
    const updateShowSchedulePrompt = (newVal) => {
      showSchedulePrompt.value = newVal;
    };
    async function saveTask() {
      var _a, _b, _c, _d, _e, _f, _g;
      console.log("saveTask triggered");
      const template = ref();
      if (((_a = selectedTemplate.value) == null ? void 0 : _a.name) == "ZFS Replication Task") {
        template.value = new ZFSReplicationTaskTemplate();
      } else if (((_b = selectedTemplate.value) == null ? void 0 : _b.name) == "Automated Snapshot Task") {
        template.value = new AutomatedSnapshotTaskTemplate();
      } else if (((_c = selectedTemplate.value) == null ? void 0 : _c.name) == "Rsync Task") {
        template.value = new RsyncTaskTemplate();
      } else if (((_d = selectedTemplate.value) == null ? void 0 : _d.name) == "Scrub Task") {
        template.value = new ScrubTaskTemplate();
      } else if (((_e = selectedTemplate.value) == null ? void 0 : _e.name) == "SMART Test") {
        template.value = new SmartTestTemplate();
      } else if (((_f = selectedTemplate.value) == null ? void 0 : _f.name) == "Cloud Sync Task") {
        template.value = new CloudSyncTaskTemplate();
      } else if (((_g = selectedTemplate.value) == null ? void 0 : _g.name) == "Custom Task") {
        template.value = new CustomTaskTemplate();
      }
      let sanitizedName = newTaskName.value.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
      if (sanitizedName.startsWith("_")) {
        sanitizedName = "task" + sanitizedName;
      }
      const notes = notesTask.value || "";
      if (isStandaloneTask.value) {
        const schedule = new TaskSchedule(false, []);
        const task = new TaskInstance(sanitizedName, template.value, parameters.value, schedule, notes);
        await myScheduler.registerTaskInstance(task);
        loading.value = true;
        try {
          await myScheduler.loadTaskInstances();
        } finally {
          loading.value = false;
        }
      } else {
        const schedule = new TaskSchedule(true, []);
        const task = new TaskInstance(sanitizedName, template.value, parameters.value, schedule, notes);
        newTask.value = task;
      }
    }
    async function addTaskBtn() {
      if (await validateComponentParams()) {
        showSchedulePromptDialog();
      }
    }
    provide("new-task", newTask);
    provide("parameters", parameters);
    provide("errors", errorList);
    provide("show-schedule-prompt", showSchedulePrompt);
    provide("is-standalone-task", isStandaloneTask);
    provide("show-task-wizard", showTaskWizard);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3, {
          onClose: closeModal,
          isOpen: unref(showTaskWizard),
          "margin-top": "mt-10",
          width: "w-3/5",
          "min-width": "min-w-3/5",
          height: "h-min",
          "min-height": "min-h-min",
          "close-on-background-click": false,
          closeConfirm: closeBtn
        }, {
          title: withCtx(() => [..._cache[4] || (_cache[4] = [
            createTextVNode(" Add New Task ", -1)
          ])]),
          content: withCtx(() => [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    _cache[5] || (_cache[5] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Task Name", -1)),
                    createVNode(_sfc_main$1, {
                      class: "ml-1",
                      title: "Name can have letters, numbers, and underscores. Spaces will convert to underscores upon save."
                    })
                  ]),
                  newTaskNameErrorTag.value ? (openBlock(), createBlock(unref(render), {
                    key: 0,
                    class: "mt-1 w-5 h-5 text-danger"
                  })) : createCommentVNode("", true)
                ]),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newTaskName.value = $event),
                  class: normalizeClass([
                    "my-1 block w-full input-textlike bg-default text-default",
                    newTaskNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                  ]),
                  placeholder: "New Task",
                  title: "Name can have letters, numbers, and underscores. Spaces will convert to underscores upon save."
                }, null, 2), [
                  [vModelText, newTaskName.value]
                ])
              ]),
              unref(taskTemplates).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                _cache[7] || (_cache[7] = createBaseVNode("label", {
                  for: "task-template-selection",
                  class: "block text-sm leading-6 text-default"
                }, "Task Template", -1)),
                withDirectives(createBaseVNode("select", {
                  id: "task-template-selection",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedTemplate.value = $event),
                  name: "task-template-selection",
                  class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                }, [
                  _cache[6] || (_cache[6] = createBaseVNode("option", { value: void 0 }, "Select Type of Task to Add", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(taskTemplates), (template, idx) => {
                    return openBlock(), createElementBlock("option", {
                      key: idx,
                      value: template
                    }, toDisplayString(template.name), 9, _hoisted_5);
                  }), 128))
                ], 512), [
                  [vModelSelect, selectedTemplate.value]
                ])
              ])) : createCommentVNode("", true),
              selectedTemplate.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                createVNode(_sfc_main$2, {
                  ref_key: "parameterInputComponent",
                  ref: parameterInputComponent,
                  selectedTemplate: selectedTemplate.value
                }, null, 8, ["selectedTemplate"])
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_7, [
              showNotes.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                _cache[8] || (_cache[8] = createBaseVNode("label", { class: "mt-1 block text-sm leading-6 text-default" }, "Notes", -1)),
                withDirectives(createBaseVNode("textarea", {
                  rows: "4",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => notesTask.value = $event),
                  class: "mt-1 block w-full text-default input-textlike sm:text-sm sm:leading-6 bg-default",
                  placeholder: "Your notes here..."
                }, null, 512), [
                  [vModelText, notesTask.value]
                ])
              ])) : createCommentVNode("", true)
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("button", {
                    onClick: _cache[3] || (_cache[3] = withModifiers(($event) => closeBtn(), ["stop"])),
                    id: "close-add-task-btn",
                    name: "close-add-task-btn",
                    class: "btn btn-danger h-fit w-full"
                  }, "Close")
                ]),
                createBaseVNode("button", {
                  onClick: toggleNotes,
                  class: "flex flex-row min-h-fit flex-nowrap btn btn-secondary"
                }, toDisplayString(buttonText.value), 1),
                createBaseVNode("div", _hoisted_12, [
                  adding.value ? (openBlock(), createElementBlock("button", _hoisted_13, [..._cache[9] || (_cache[9] = [
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
                    createTextVNode(" Adding... ", -1)
                  ])])) : !adding.value && selectedTemplate.value ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    id: "add-task-btn",
                    class: "btn btn-primary h-fit w-full",
                    onClick: addTaskBtn
                  }, "Add Task")) : (openBlock(), createElementBlock("button", {
                    key: 2,
                    disabled: "",
                    id: "add-task-btn-error",
                    class: "btn btn-primary h-fit w-full",
                    onClick: addTaskBtn
                  }, "Add Task"))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["isOpen"]),
        showSchedulePrompt.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
          (openBlock(), createBlock(resolveDynamicComponent(confirmationComponent.value), {
            onClose: updateShowSchedulePrompt,
            showFlag: showSchedulePrompt.value,
            title: "Schedule Task",
            message: "Do you wish to schedule this task now?",
            confirmYes: makeScheduleNow,
            confirmNo: makeScheduleLater,
            operation: "adding",
            operating: adding.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showCloseConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
          (openBlock(), createBlock(resolveDynamicComponent(closeConfirmationComponent.value), {
            onClose: updateShowCloseConfirmation,
            showFlag: showCloseConfirmation.value,
            title: "Cancel Add Task",
            message: "Are you sure? This task configuration will be lost.",
            confirmYes: confirmCancel,
            confirmNo: cancelCancel,
            operation: "canceling",
            operating: cancelingAddTask.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
