import { d as defineComponent, r as ref, e as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, y as toDisplayString, F as Fragment, q as renderList, z as normalizeClass, i as injectWithCheck, t as schedulerInjectionKey, a3 as inject, s as loadingInjectionKey, aM as reactive, w as watch, f as onMounted, l as createVNode, aj as withCtx, m as createTextVNode, E as withDirectives, aB as withModifiers, G as vModelSelect, L as createBlock, k as unref, p as createCommentVNode, H as vModelText, a5 as vModelCheckbox, aC as resolveDynamicComponent, B as pushNotification, N as Notification, aJ as __vitePreload } from "./index.9323ba8c.js";
import { _ as _sfc_main$3 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import { _ as _sfc_main$2, r as render } from "./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1$1 = { class: "flex flex-col items-center p-2" };
const _hoisted_2$1 = { class: "flex justify-between w-full mb-4" };
const _hoisted_3$1 = { class: "text-lg font-semibold text-default mt-2" };
const _hoisted_4$1 = { class: "grid grid-cols-7 w-full mb-2" };
const _hoisted_5$1 = { class: "grid grid-cols-7 gap-2 w-full" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CalendarComponent",
  props: {
    interval: {}
  },
  setup(__props) {
    const props = __props;
    const today = new Date();
    const currentMonth = ref(today.getMonth());
    const currentYear = ref(today.getFullYear());
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days = computed(() => {
      const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
      const numDays = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
      const daysArray = Array.from({ length: numDays }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value, i + 1);
        const id = date.toISOString().split("T")[0];
        const isMarked = checkSchedule(date, props.interval);
        return { id, date: i + 1, isMarked, isPadding: false };
      });
      const startPaddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value, -i);
        const id = date.toISOString().split("T")[0];
        return { id, date: "", isMarked: false, isPadding: true };
      }).reverse();
      const lastDayOfMonth = new Date(currentYear.value, currentMonth.value, numDays).getDay();
      const endPaddingDays = Array.from({ length: 6 - lastDayOfMonth }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value + 1, i + 1);
        const id = date.toISOString().split("T")[0];
        return { id, date: "", isMarked: false, isPadding: true };
      });
      return [...startPaddingDays, ...daysArray, ...endPaddingDays];
    });
    function checkSchedule(date, interval) {
      const dayOfWeekMap = {
        "Sun": "0",
        "Mon": "1",
        "Tue": "2",
        "Wed": "3",
        "Thu": "4",
        "Fri": "5",
        "Sat": "6"
      };
      const matches = (value, dateComponent) => {
        if (value === "*") {
          return true;
        } else if (value.includes("/")) {
          const [base, step] = value.split("/");
          const start = base === "*" ? 0 : parseInt(base);
          const interval2 = parseInt(step);
          return (dateComponent - start) % interval2 === 0;
        } else if (value.includes("-")) {
          const [start, end] = value.split("-").map(Number);
          return dateComponent >= start && dateComponent <= end;
        } else if (value.includes("..")) {
          const [start, end] = value.split("..").map(Number);
          return dateComponent >= start && dateComponent <= end;
        } else if (value.includes(",")) {
          const values = value.split(",").map(Number);
          return values.includes(dateComponent);
        } else {
          return parseInt(value) === dateComponent;
        }
      };
      if (interval.dayOfWeek && interval.dayOfWeek.length > 0 && !interval.dayOfWeek.some((day) => matches(dayOfWeekMap[day], date.getDay()))) {
        return false;
      }
      if (interval.year && !matches(interval.year.value.toString(), date.getFullYear())) {
        return false;
      }
      if (interval.month && !matches(interval.month.value.toString(), date.getMonth() + 1)) {
        return false;
      }
      if (interval.day && !matches(interval.day.value.toString(), date.getDate())) {
        return false;
      }
      return true;
    }
    function changeMonth(delta) {
      currentMonth.value += delta;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else if (currentMonth.value > 11) {
        currentMonth.value = 0;
        currentYear.value++;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => changeMonth(-1)),
            class: "btn btn-secondary"
          }, " Prev "),
          createBaseVNode("span", _hoisted_3$1, toDisplayString(monthNames[currentMonth.value]) + " " + toDisplayString(currentYear.value), 1),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => changeMonth(1)),
            class: "btn btn-secondary"
          }, " Next ")
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(weekDays, (day) => {
            return createBaseVNode("div", {
              key: day,
              class: "text-center text-default font-medium"
            }, toDisplayString(day), 1);
          }), 64))
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(days.value, (day) => {
            return openBlock(), createElementBlock("div", {
              key: day.id,
              class: normalizeClass([{ "bg-accent text-muted border-default": day.isPadding, "bg-green-600 dark:bg-green-800": day.isMarked && !day.isPadding, "bg-default": !day.isMarked && !day.isPadding }, "p-2 text-default text-center border border-default rounded"])
            }, toDisplayString(day.date), 3);
          }), 128))
        ])
      ]);
    };
  }
});
const _hoisted_1 = {
  name: "new-schedule-interval",
  class: ""
};
const _hoisted_2 = { class: "grid grid-flow-cols grid-cols-2 my-2 gap-2 grid-rows-2" };
const _hoisted_3 = {
  name: "schedule-preset",
  class: "col-span-1"
};
const _hoisted_4 = {
  name: "schedule-fields",
  class: "col-span-1 grid grid-cols-2 gap-2 mt-2"
};
const _hoisted_5 = { name: "hour" };
const _hoisted_6 = { class: "flex flex-row justify-between items-center" };
const _hoisted_7 = { class: "flex flex-row justify-between items-center" };
const _hoisted_8 = { name: "minute" };
const _hoisted_9 = { class: "flex flex-row justify-between items-center" };
const _hoisted_10 = { class: "flex flex-row justify-between items-center" };
const _hoisted_11 = {
  name: "date-data",
  class: "col-span-2 grid grid-cols-3 gap-2"
};
const _hoisted_12 = { name: "day" };
const _hoisted_13 = { class: "flex flex-row justify-between items-center" };
const _hoisted_14 = { class: "flex flex-row justify-between items-center" };
const _hoisted_15 = { name: "month" };
const _hoisted_16 = { class: "flex flex-row justify-between items-center" };
const _hoisted_17 = { class: "flex flex-row justify-between items-center" };
const _hoisted_18 = { name: "year" };
const _hoisted_19 = { class: "flex flex-row justify-between items-center" };
const _hoisted_20 = { class: "flex flex-row justify-between items-center" };
const _hoisted_21 = {
  name: "dayOfWeek",
  class: "col-span-2"
};
const _hoisted_22 = { class: "w-full" };
const _hoisted_23 = { class: "grid grid-cols-7" };
const _hoisted_24 = { class: "px-0.5 col-span-1" };
const _hoisted_25 = ["for"];
const _hoisted_26 = { class: "w-full mt-0.5 text-sm text-default" };
const _hoisted_27 = ["id", "value", "name"];
const _hoisted_28 = {
  name: "buttons",
  class: "col-span-2 button-group-row justify-between mt-2"
};
const _hoisted_29 = ["disabled"];
const _hoisted_30 = { class: "mt-1" };
const _hoisted_31 = {
  role: "list",
  class: "divide-y divide-default rounded-lg mt-2"
};
const _hoisted_32 = ["onClick"];
const _hoisted_33 = { class: "flex flex-col w-full grow" };
const _hoisted_34 = {
  key: 0,
  class: "flex flex-row grow w-full justify-center text-center text-xs text-semibold italic text-default"
};
const _hoisted_35 = {
  key: 0,
  class: "button-group-row justify-between mt-2"
};
const _hoisted_36 = { class: "w-full" };
const _hoisted_37 = { class: "button-group-row w-full justify-between" };
const _hoisted_38 = { class: "button-group-row" };
const _hoisted_39 = ["disabled"];
const _hoisted_40 = { key: 0 };
const _hoisted_41 = { key: 1 };
const _hoisted_42 = { class: "button-group-row" };
const _hoisted_43 = {
  key: 0,
  disabled: "",
  id: "adding-schedule-btn",
  type: "button",
  class: "btn btn-primary h-fit w-full"
};
const _hoisted_44 = { key: 0 };
const _hoisted_45 = { key: 1 };
const _hoisted_46 = { key: 2 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManageSchedule",
  props: {
    idKey: {},
    task: {},
    mode: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const showScheduleWizard = inject("show-schedule-wizard");
    const showTaskWizard = inject("show-task-wizard");
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const savingSchedule = ref(false);
    const scheduleEnabled = ref(true);
    const initialScheduleIntervals = ref({});
    const closeModal = () => {
      showScheduleWizard.value = false;
      emit("close");
    };
    function hasScheduleChanges() {
      return JSON.stringify(localIntervals.value) !== JSON.stringify(initialScheduleIntervals.value);
    }
    const hasIntervals = computed(() => {
      return localIntervals.value.length > 0 ? true : false;
    });
    const usingSnapshotRetention = computed(() => {
      var _a, _b;
      const taskTemplate = props.task.template.name;
      const isSnapshotTask = taskTemplate === "Automated Snapshot Task";
      const isReplicationTask = taskTemplate === "ZFS Replication Task";
      const snapshotRetention = props.task.parameters.children.find(
        (param) => param.key === "snapshotRetention"
      );
      if (!snapshotRetention) {
        return false;
      }
      if (isSnapshotTask) {
        const hasRetentionTime = snapshotRetention.children.some(
          (child) => child.key === "retentionTime" && child.value > 0
        );
        return hasRetentionTime;
      }
      if (isReplicationTask) {
        const sourceRetentionTime = (_a = snapshotRetention.children.find(
          (child) => child.key === "source"
        )) == null ? void 0 : _a.children.some(
          (child) => child.key === "retentionTime" && child.value > 0
        );
        const destinationRetentionTime = (_b = snapshotRetention.children.find(
          (child) => child.key === "destination"
        )) == null ? void 0 : _b.children.some(
          (child) => child.key === "retentionTime" && child.value > 0
        );
        return sourceRetentionTime || destinationRetentionTime;
      }
      return false;
    });
    const cancelingAddTask = ref(false);
    const showCloseConfirmation = ref(false);
    const closeConfirmationComponent = ref();
    async function loadCloseConfirmationComponent() {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      closeConfirmationComponent.value = module.default;
    }
    async function closeBtn() {
      if (props.mode == "edit") {
        if (hasScheduleChanges()) {
          await loadCloseConfirmationComponent();
          showCloseConfirmation.value = true;
        } else {
          closeModal();
        }
      } else {
        await loadCloseConfirmationComponent();
        showCloseConfirmation.value = true;
      }
    }
    const updateShowCloseConfirmation = (newVal) => {
      showCloseConfirmation.value = newVal;
    };
    const confirmCancel = async () => {
      closeModal();
    };
    const cancelCancel = async () => {
      updateShowCloseConfirmation(false);
    };
    const thisTask = ref(props.task);
    const newSchedule = reactive({
      enabled: scheduleEnabled.value,
      intervals: []
    });
    const selectedPreset = ref("none");
    const localIntervals = ref([]);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const newInterval = reactive({
      minute: { value: "0" },
      hour: { value: "0" },
      day: { value: "1" },
      month: { value: "*" },
      year: { value: "*" },
      dayOfWeek: []
    });
    function clearFields() {
      selectedPreset.value = "none";
      Object.assign(newInterval, {
        minute: { value: "" },
        hour: { value: "" },
        day: { value: "" },
        month: { value: "" },
        year: { value: "" },
        dayOfWeek: []
      });
      forceUpdateCalendar();
      clearSelectedInterval();
    }
    function setFields(min, hr, d, mon, y, dow) {
      newInterval.hour.value = hr;
      newInterval.minute.value = min;
      newInterval.day.value = d;
      newInterval.month.value = mon;
      newInterval.year.value = y;
      newInterval.dayOfWeek = dow;
    }
    const errorList = ref([]);
    const hourErrorTag = ref(false);
    const minuteErrorTag = ref(false);
    const dayErrorTag = ref(false);
    const monthErrorTag = ref(false);
    const yearErrorTag = ref(false);
    function clearAllErrors() {
      errorList.value = [];
      hourErrorTag.value = false;
      minuteErrorTag.value = false;
      dayErrorTag.value = false;
      monthErrorTag.value = false;
      yearErrorTag.value = false;
    }
    function normalizeField(raw, kind) {
      let v = (raw != null ? raw : "").trim();
      if (v === "")
        return "*";
      v = v.replace(/^\*\/(\d+)$/g, "0/$1");
      v = v.replace("-", "..");
      if (v.includes(","))
        v = v.split(",").map((s) => s.trim()).join(",");
      return v;
    }
    function inRange(n, min, max) {
      return Number.isInteger(n) && n >= min && n <= max;
    }
    function validateSystemdField(value, kind) {
      const v = (value != null ? value : "").trim();
      if (v === "")
        return false;
      if (v === "*")
        return true;
      if (v.includes(",")) {
        return v.split(",").every((part) => validateSystemdField(part, kind));
      }
      const range = v.match(/^(\d+)\.\.(\d+)$/);
      if (range) {
        const a = Number(range[1]), b = Number(range[2]);
        if (a >= b)
          return false;
        switch (kind) {
          case "min":
            return inRange(a, 0, 59) && inRange(b, 0, 59);
          case "hour":
            return inRange(a, 0, 23) && inRange(b, 0, 23);
          case "day":
            return inRange(a, 1, 31) && inRange(b, 1, 31);
          case "month":
            return inRange(a, 1, 12) && inRange(b, 1, 12);
          case "year":
            return inRange(a, 1970, 9999) && inRange(b, 1970, 9999);
        }
      }
      const rep = v.match(/^(\d+)\/(\d+)$/);
      if (rep) {
        const start = Number(rep[1]), step = Number(rep[2]);
        if (step <= 0)
          return false;
        switch (kind) {
          case "min":
            return inRange(start, 0, 59);
          case "hour":
            return inRange(start, 0, 23);
          case "day":
            return inRange(start, 1, 31);
          case "month":
            return inRange(start, 1, 12);
          case "year":
            return inRange(start, 1970, 9999);
        }
      }
      if (/^\d+$/.test(v)) {
        const n = Number(v);
        switch (kind) {
          case "min":
            return inRange(n, 0, 59);
          case "hour":
            return inRange(n, 0, 23);
          case "day":
            return inRange(n, 1, 31);
          case "month":
            return inRange(n, 1, 12);
          case "year":
            return inRange(n, 1970, 9999);
        }
      }
      return false;
    }
    const deletingSchedule = ref(false);
    const showDeleteConfirmation = ref(false);
    const deleteConfirmationComponent = ref();
    async function loadDeleteConfirmationComponent() {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./index.9323ba8c.js","./index.a0f384df.css","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      deleteConfirmationComponent.value = module.default;
    }
    async function deleteScheduleBtn() {
      await loadDeleteConfirmationComponent();
      showDeleteConfirmation.value = true;
    }
    const updateShowDeleteConfirmation = (newVal) => {
      showDeleteConfirmation.value = newVal;
    };
    const confirmDeleteSchedule = async () => {
      try {
        deletingSchedule.value = true;
        const ok = await myScheduler.deleteSchedule(thisTask.value);
        if (ok) {
          pushNotification(new Notification(
            "Schedule Removed",
            `The schedule for "${thisTask.value.name}" has been removed.`,
            "success",
            6e3
          ));
        } else {
          pushNotification(new Notification(
            "Delete Failed",
            `Failed to remove the schedule for "${thisTask.value.name}". Check logs for details.`,
            "error",
            6e3
          ));
        }
        updateShowDeleteConfirmation(false);
        showScheduleWizard.value = false;
        showTaskWizard.value = false;
        loading.value = true;
        await myScheduler.loadTaskInstances();
        loading.value = false;
      } finally {
        deletingSchedule.value = false;
      }
    };
    const cancelDeleteSchedule = async () => {
      updateShowDeleteConfirmation(false);
    };
    function validateFields(interval) {
      var _a, _b, _c;
      clearAllErrors();
      const origHour = (_a = interval.hour.value) != null ? _a : "";
      const origMinute = (_b = interval.minute.value) != null ? _b : "";
      const origDay = (_c = interval.day.value) != null ? _c : "";
      interval.hour.value = normalizeField(interval.hour.value);
      interval.minute.value = normalizeField(interval.minute.value);
      interval.day.value = normalizeField(interval.day.value);
      interval.month.value = normalizeField(interval.month.value);
      interval.year.value = normalizeField(interval.year.value);
      nudgeIfCronStep(origHour, "hour");
      nudgeIfCronStep(origMinute, "minute");
      nudgeIfCronStep(origDay, "day");
      if (!validateSystemdField(interval.hour.value, "hour")) {
        hourErrorTag.value = true;
        errorList.value.push("Hour must be *, A, A..B, or A/N (e.g., 0/4).");
      }
      if (!validateSystemdField(interval.minute.value, "min")) {
        minuteErrorTag.value = true;
        errorList.value.push("Minute must be *, A, A..B, or A/N (e.g., 0/15).");
      }
      if (!validateSystemdField(interval.day.value, "day")) {
        dayErrorTag.value = true;
        errorList.value.push("Day must be *, A, A..B, or A/N.");
      }
      if (!validateSystemdField(interval.month.value, "month")) {
        monthErrorTag.value = true;
        errorList.value.push("Month must be *, A, A..B, or list (1..12).");
      }
      if (!validateSystemdField(interval.year.value, "year")) {
        yearErrorTag.value = true;
        errorList.value.push("Year must be *, a year number, A..B, or list.");
      }
      if (errorList.value.length > 0) {
        pushNotification(new Notification("Schedule Interval Save Failed", `Submission has errors:
- ${errorList.value.join("\n- ")}`, "error", 6e3));
        return false;
      }
      return true;
    }
    const selectedInterval = ref();
    const selectedIndex = ref();
    function selectionMethod(interval, index) {
      selectedInterval.value = interval;
      selectedIndex.value = index;
      editSelectedInterval(selectedInterval.value);
    }
    function saveInterval(interval) {
      if (usingSnapshotRetention.value) {
        pushNotification(new Notification("Interval Limit Reached", "Tasks using Snapshot Retention Policy can currently only have one scheduled interval.\nCreate multiple tasks to handle different retention policies.", "warning", 6e3));
      }
      if (validateFields(interval)) {
        if (selectedIndex.value !== void 0) {
          const updatedInterval = JSON.parse(JSON.stringify(interval));
          localIntervals.value[selectedIndex.value] = updatedInterval;
        } else {
          const newInterval2 = JSON.parse(JSON.stringify(interval));
          localIntervals.value.push(newInterval2);
        }
        clearFields();
      }
    }
    function clearSelectedInterval() {
      selectedInterval.value = void 0;
      selectedIndex.value = void 0;
      clearAllErrors();
    }
    function removeSelectedInterval(index) {
      localIntervals.value.splice(index, 1);
      clearSelectedInterval();
    }
    function editSelectedInterval(interval) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      console.log("triggered editSelectedInterval", interval);
      const defaultTimeComponent = "0";
      newInterval.hour.value = (_b = (_a = interval.hour) == null ? void 0 : _a.value) != null ? _b : defaultTimeComponent;
      newInterval.minute.value = (_d = (_c = interval.minute) == null ? void 0 : _c.value) != null ? _d : defaultTimeComponent;
      newInterval.day.value = (_f = (_e = interval.day) == null ? void 0 : _e.value) != null ? _f : defaultTimeComponent;
      newInterval.month.value = (_h = (_g = interval.month) == null ? void 0 : _g.value) != null ? _h : defaultTimeComponent;
      newInterval.year.value = (_j = (_i = interval.year) == null ? void 0 : _i.value) != null ? _j : defaultTimeComponent;
      newInterval.dayOfWeek = (_k = interval.dayOfWeek) != null ? _k : [];
    }
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
    const confirmScheduleTask = async () => {
      savingSchedule.value = true;
      try {
        thisTask.value.schedule = JSON.parse(JSON.stringify(newSchedule));
        if (props.mode === "new") {
          await myScheduler.registerTaskInstance(thisTask.value);
          pushNotification(new Notification("Task + Schedule Saved", "Task and schedule have been saved.", "success", 6e3));
        } else {
          await myScheduler.updateSchedule(thisTask.value);
          pushNotification(new Notification("Schedule Saved", "Schedule has been updated.", "success", 6e3));
        }
        updateShowSaveConfirmation(false);
        showScheduleWizard.value = false;
        showTaskWizard.value = false;
        loading.value = true;
        try {
          await myScheduler.loadTaskInstances();
        } finally {
          loading.value = false;
        }
      } catch (e) {
        pushNotification(new Notification("Save Failed", String((e == null ? void 0 : e.message) || e), "error", 6e3));
      } finally {
        savingSchedule.value = false;
      }
    };
    const cancelScheduleTask = async () => {
      updateShowSaveConfirmation(false);
    };
    const updateShowSaveConfirmation = (newVal) => {
      showSaveConfirmation.value = newVal;
    };
    ref([]);
    async function saveScheduleBtn() {
      if (localIntervals.value.length < 1) {
        pushNotification(new Notification("Save Failed", `At least one interval is required.`, "error", 6e3));
      } else {
        const cleaned = localIntervals.value.map((i) => {
          const copy = JSON.parse(JSON.stringify(i));
          copy.hour.value = normalizeField(copy.hour.value);
          copy.minute.value = normalizeField(copy.minute.value);
          copy.day.value = normalizeField(copy.day.value);
          copy.month.value = normalizeField(copy.month.value);
          copy.year.value = normalizeField(copy.year.value);
          return copy;
        });
        newSchedule.intervals = [];
        newSchedule.intervals.push(...cleaned);
        thisTask.value.schedule = newSchedule;
        await showConfirmationDialog();
      }
    }
    function nudgeIfCronStep(raw, fieldLabel) {
      if (/^\*\/\d+$/.test((raw != null ? raw : "").trim())) {
        pushNotification(new Notification(
          "Adjusted Step Syntax",
          `Converted "${raw}" to systemd's "start/step" form for ${fieldLabel} (e.g., 0/4).`,
          "info",
          5e3
        ));
      }
    }
    watch(selectedPreset, (newVal, oldVal) => {
      switch (selectedPreset.value) {
        case "none":
          setFields("0", "0", "1", "*", "*", []);
          break;
        case "minutely":
          setFields("*", "*", "*", "*", "*", []);
          break;
        case "hourly":
          setFields("0", "*", "*", "*", "*", []);
          break;
        case "daily":
          setFields("0", "0", "*", "*", "*", []);
          break;
        case "weekly":
          setFields("0", "0", "*", "*", "*", [daysOfWeek[0]]);
          break;
        case "monthly":
          setFields("0", "0", "1", "*", "*", []);
          break;
        case "yearly":
          setFields("0", "0", "1", "1", "*", []);
          break;
      }
    });
    const daySelectedClass = (dayOfWeek) => {
      const isSelected = newInterval.dayOfWeek.includes(dayOfWeek);
      return isSelected ? "bg-green-30 dark:bg-green-700" : "";
    };
    const intervalSelectedClass = (intervalIdx) => {
      return selectedIndex.value == intervalIdx ? "bg-green-30 dark:bg-green-700" : "bg-default";
    };
    watch(newInterval, (newVal, oldVal) => {
      forceUpdateCalendar();
    }, { deep: true });
    const calendarKey = ref(0);
    function forceUpdateCalendar() {
      calendarKey.value++;
    }
    onMounted(() => {
      console.log("mode (onMounted):", props.mode);
      if (props.mode == "new") {
        selectedInterval.value = void 0;
        selectedIndex.value = void 0;
        localIntervals.value = [];
      } else {
        localIntervals.value = [...props.task.schedule.intervals];
        initialScheduleIntervals.value = JSON.parse(JSON.stringify(localIntervals.value));
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3, {
          onClose: closeModal,
          isOpen: unref(showScheduleWizard),
          "margin-top": "mt-6",
          width: "w-3/5",
          "min-width": "min-w-3/5",
          height: "h-min",
          "min-height": "min-h-min",
          "close-on-background-click": false
        }, {
          title: withCtx(() => [..._cache[27] || (_cache[27] = [
            createTextVNode(" Manage Schedule ", -1)
          ])]),
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", {
                  onClick: _cache[18] || (_cache[18] = ($event) => clearSelectedInterval()),
                  name: "schedule-input",
                  class: "border border-default rounded-md p-2 col-span-2 row-span-1 col-start-1 row-start-1 bg-accent grid grid-cols-1"
                }, [
                  createBaseVNode("div", _hoisted_3, [
                    _cache[29] || (_cache[29] = createBaseVNode("label", {
                      for: "schedule-preset-selection",
                      class: "block text-sm font-medium leading-6 text-default"
                    }, "Interval Preset", -1)),
                    withDirectives(createBaseVNode("select", {
                      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                      }, ["stop"])),
                      id: "task-template-selection",
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedPreset.value = $event),
                      name: "task-template-selection",
                      class: "text-default bg-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                    }, [..._cache[28] || (_cache[28] = [
                      createBaseVNode("option", { value: "none" }, "None", -1),
                      createBaseVNode("option", { value: "minutely" }, "Minutely", -1),
                      createBaseVNode("option", { value: "hourly" }, "Hourly", -1),
                      createBaseVNode("option", { value: "daily" }, "Daily", -1),
                      createBaseVNode("option", { value: "weekly" }, "Weekly", -1),
                      createBaseVNode("option", { value: "monthly" }, "Monthly", -1),
                      createBaseVNode("option", { value: "yearly" }, "Yearly", -1)
                    ])], 512), [
                      [vModelSelect, selectedPreset.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Hour", -1)),
                          createVNode(_sfc_main$2, {
                            class: "ml-1",
                            title: "Use * for every value. Use A/N for repeats (e.g., 0/4 = every 4 hours starting at 00). Use commas for lists (e.g., 0,15,30). Use double periods for ranges (e.g., 8..17)."
                          })
                        ]),
                        hourErrorTag.value ? (openBlock(), createBlock(unref(render), {
                          key: 0,
                          class: "mt-1 w-5 h-5 text-danger"
                        })) : createCommentVNode("", true)
                      ]),
                      withDirectives(createBaseVNode("input", {
                        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                        }, ["stop"])),
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newInterval.hour.value = $event),
                        type: "text",
                        placeholder: "(0-23)",
                        class: normalizeClass([
                          "my-1 block w-full text-default input-textlike bg-default",
                          hourErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                        ]),
                        title: "Use * for every value. Use A/N for repeats (e.g., 0/4 = every 4 hours starting at 00). Use commas for lists (e.g., 0,15,30). Use double periods for ranges (e.g., 8..17)."
                      }, null, 2), [
                        [vModelText, newInterval.hour.value]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("div", _hoisted_10, [
                          _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Minute", -1)),
                          createVNode(_sfc_main$2, {
                            class: "ml-1",
                            title: "Use * for every value. Use A/N for repeats (e.g., 0/4 = every 4 hours starting at 00). Use commas for lists (e.g., 0,15,30). Use double periods for ranges (e.g., 8..17)."
                          })
                        ]),
                        minuteErrorTag.value ? (openBlock(), createBlock(unref(render), {
                          key: 0,
                          class: "mt-1 w-5 h-5 text-danger"
                        })) : createCommentVNode("", true)
                      ]),
                      withDirectives(createBaseVNode("input", {
                        onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                        }, ["stop"])),
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => newInterval.minute.value = $event),
                        type: "text",
                        placeholder: "(0-59)",
                        class: normalizeClass([
                          "my-1 block w-full text-default input-textlike bg-default",
                          minuteErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                        ]),
                        title: "Use * for every value. Use A/N for repeats (e.g., 0/4 = every 4 hours starting at 00). Use commas for lists (e.g., 0,15,30). Use double periods for ranges (e.g., 8..17)."
                      }, null, 2), [
                        [vModelText, newInterval.minute.value]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("div", _hoisted_14, [
                            _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Day", -1)),
                            createVNode(_sfc_main$2, {
                              class: "ml-1",
                              title: "Use * for Every Value, X/N for Every Nth Value starting on Day X, Commas to specify separate values, Two periods to specify a range of values (2..8)."
                            })
                          ]),
                          dayErrorTag.value ? (openBlock(), createBlock(unref(render), {
                            key: 0,
                            class: "mt-1 w-5 h-5 text-danger"
                          })) : createCommentVNode("", true)
                        ]),
                        withDirectives(createBaseVNode("input", {
                          onClick: _cache[6] || (_cache[6] = withModifiers(() => {
                          }, ["stop"])),
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => newInterval.day.value = $event),
                          type: "text",
                          placeholder: "(1-31)",
                          class: normalizeClass([
                            "my-1 block w-full text-default input-textlike bg-default",
                            dayErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                          ]),
                          title: "Use asterisk (*) for all values, double-periods (..) for ranges (eg. 2..7), and commas for lists (eg. 2,4,7)"
                        }, null, 2), [
                          [vModelText, newInterval.day.value]
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("div", _hoisted_17, [
                            _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Month", -1)),
                            createVNode(_sfc_main$2, {
                              class: "ml-1",
                              title: "Use * for Every Value, Commas to specify separate values, Two periods to specify a range of values (2..8)."
                            })
                          ]),
                          monthErrorTag.value ? (openBlock(), createBlock(unref(render), {
                            key: 0,
                            class: "mt-1 w-5 h-5 text-danger"
                          })) : createCommentVNode("", true)
                        ]),
                        withDirectives(createBaseVNode("input", {
                          onClick: _cache[8] || (_cache[8] = withModifiers(() => {
                          }, ["stop"])),
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => newInterval.month.value = $event),
                          type: "text",
                          placeholder: "(1-12)",
                          class: normalizeClass([
                            "my-1 block w-full text-default input-textlike bg-default",
                            monthErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                          ]),
                          title: "Use asterisk (*) for all values, double-periods (..) for ranges (eg. 2..7), and commas for lists (eg. 2,4,7)"
                        }, null, 2), [
                          [vModelText, newInterval.month.value]
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            _cache[34] || (_cache[34] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Year", -1)),
                            createVNode(_sfc_main$2, {
                              class: "ml-1",
                              title: "Use * for Every Value, Commas to specify separate values, Two periods to specify a range of values (2..8)."
                            })
                          ]),
                          yearErrorTag.value ? (openBlock(), createBlock(unref(render), {
                            key: 0,
                            class: "mt-1 w-5 h-5 text-danger"
                          })) : createCommentVNode("", true)
                        ]),
                        withDirectives(createBaseVNode("input", {
                          onClick: _cache[10] || (_cache[10] = withModifiers(() => {
                          }, ["stop"])),
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => newInterval.year.value = $event),
                          type: "text",
                          placeholder: "(YYYY)",
                          class: normalizeClass([
                            "my-1 block w-full text-default input-textlike bg-default",
                            yearErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""
                          ]),
                          title: "Use asterisk (*) for all values, double-periods (..) for ranges (eg. 2..7), and commas for lists (eg. 2,4,7)"
                        }, null, 2), [
                          [vModelText, newInterval.year.value]
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Day of Week", -1)),
                      createBaseVNode("table", _hoisted_22, [
                        createBaseVNode("tr", _hoisted_23, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(daysOfWeek, (day) => {
                            return createBaseVNode("td", _hoisted_24, [
                              createBaseVNode("button", {
                                onClick: _cache[14] || (_cache[14] = withModifiers(() => {
                                }, ["stop"])),
                                class: normalizeClass(["flex items-center w-full h-full border border-default rounded-lg bg-default", daySelectedClass(day)])
                              }, [
                                createBaseVNode("label", {
                                  for: `${day}`,
                                  class: normalizeClass(["flex flex-col items-center whitespace-nowrap w-full p-1 px-1 text-sm gap-0.5 bg-default rounded-lg", daySelectedClass(day)])
                                }, [
                                  createBaseVNode("p", _hoisted_26, toDisplayString(day), 1),
                                  withDirectives(createBaseVNode("input", {
                                    onClick: _cache[12] || (_cache[12] = withModifiers(() => {
                                    }, ["stop"])),
                                    id: `${day}`,
                                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => newInterval.dayOfWeek = $event),
                                    type: "checkbox",
                                    value: `${day}`,
                                    name: `${day}`,
                                    class: "mb-0.5 w-4 h-4 text-success bg-well border-default rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2"
                                  }, null, 8, _hoisted_27), [
                                    [vModelCheckbox, newInterval.dayOfWeek]
                                  ])
                                ], 10, _hoisted_25)
                              ], 2)
                            ]);
                          }), 64))
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      createBaseVNode("button", {
                        name: "clearFields",
                        onClick: _cache[15] || (_cache[15] = withModifiers(($event) => clearFields(), ["stop"])),
                        class: "btn btn-danger h-min"
                      }, " Clear Interval "),
                      selectedIndex.value !== void 0 ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        name: "updateInterval",
                        onClick: _cache[16] || (_cache[16] = withModifiers(($event) => saveInterval(newInterval), ["stop"])),
                        class: "btn btn-secondary h-min"
                      }, " Update Interval")) : (openBlock(), createElementBlock("button", {
                        key: 1,
                        name: "saveInterval",
                        onClick: _cache[17] || (_cache[17] = withModifiers(($event) => saveInterval(newInterval), ["stop"])),
                        class: "btn btn-secondary h-min",
                        disabled: usingSnapshotRetention.value && localIntervals.value.length >= 1
                      }, " Save Interval", 8, _hoisted_29))
                    ])
                  ])
                ]),
                createBaseVNode("div", {
                  onClick: _cache[19] || (_cache[19] = ($event) => clearSelectedInterval()),
                  name: "schedule-preview",
                  class: "col-start-1 row-start-2 border border-default rounded-md p-2 col-span-1 bg-accent"
                }, [
                  _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-sm font-medium leading-6 text-default" }, "Interval Preview", -1)),
                  createBaseVNode("div", _hoisted_30, [
                    (openBlock(), createBlock(_sfc_main$1, {
                      key: calendarKey.value,
                      interval: newInterval
                    }, null, 8, ["interval"]))
                  ])
                ]),
                createBaseVNode("div", {
                  name: "schedule-interval-list",
                  onClick: _cache[22] || (_cache[22] = ($event) => clearSelectedInterval()),
                  class: "col-start-2 row-start-2 border border-default rounded-md p-2 col-span-1 bg-accent"
                }, [
                  createBaseVNode("div", {
                    onClick: _cache[21] || (_cache[21] = ($event) => clearSelectedInterval())
                  }, [
                    _cache[37] || (_cache[37] = createBaseVNode("div", { class: "flex flex-row justify-between" }, [
                      createBaseVNode("label", { class: "block text-sm font-medium leading-6 text-default whitespace-nowrap" }, " Current Intervals")
                    ], -1)),
                    createBaseVNode("ul", _hoisted_31, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(localIntervals.value, (interval, idx) => {
                        return openBlock(), createElementBlock("li", {
                          key: idx,
                          class: normalizeClass(["text-default rounded-lg", intervalSelectedClass(idx)])
                        }, [
                          createBaseVNode("button", {
                            class: normalizeClass(["h-full w-full rounded-lg p-2 px-2 text-left", intervalSelectedClass(idx)]),
                            onClick: withModifiers(($event) => selectionMethod(interval, idx), ["stop"])
                          }, [
                            createBaseVNode("div", _hoisted_33, [
                              selectedIndex.value !== void 0 && selectedIndex.value == idx ? (openBlock(), createElementBlock("span", _hoisted_34, " EDITING INTERVAL:")) : createCommentVNode("", true),
                              createBaseVNode("p", null, toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)), 1)
                            ])
                          ], 10, _hoisted_32)
                        ], 2);
                      }), 128))
                    ]),
                    selectedInterval.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [
                      createBaseVNode("button", {
                        name: "remove-interval",
                        onClick: _cache[20] || (_cache[20] = withModifiers(($event) => removeSelectedInterval(selectedIndex.value), ["stop"])),
                        class: "btn btn-danger h-min w-full"
                      }, "Remove Interval")
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("button", {
                    onClick: _cache[23] || (_cache[23] = withModifiers(($event) => closeBtn(), ["stop"])),
                    id: "close-add-schedule-btn",
                    name: "close-add-schedule-btn",
                    class: "btn btn-danger h-fit w-full"
                  }, "Close")
                ]),
                props.mode === "edit" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-danger h-fit w-fit",
                  onClick: _cache[24] || (_cache[24] = ($event) => deleteScheduleBtn()),
                  disabled: deletingSchedule.value
                }, [
                  deletingSchedule.value ? (openBlock(), createElementBlock("span", _hoisted_40, "Deleting\u2026")) : (openBlock(), createElementBlock("span", _hoisted_41, "Delete Schedule"))
                ], 8, _hoisted_39)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_42, [
                  savingSchedule.value && hasIntervals.value ? (openBlock(), createElementBlock("button", _hoisted_43, [..._cache[38] || (_cache[38] = [
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
                    createTextVNode(" Saving Schedule... ", -1)
                  ])])) : createCommentVNode("", true),
                  !savingSchedule.value && !hasIntervals.value ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    disabled: "",
                    id: "add-schedule-btn",
                    type: "button",
                    class: "btn btn-primary h-fit w-full",
                    onClick: _cache[25] || (_cache[25] = ($event) => saveScheduleBtn())
                  }, "Save Schedule")) : createCommentVNode("", true),
                  !savingSchedule.value && hasIntervals.value ? (openBlock(), createElementBlock("button", {
                    key: 2,
                    id: "add-schedule-btn",
                    type: "button",
                    class: "btn btn-primary h-fit w-full",
                    onClick: _cache[26] || (_cache[26] = ($event) => saveScheduleBtn())
                  }, "Save Schedule")) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["isOpen"]),
        showSaveConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_44, [
          (openBlock(), createBlock(resolveDynamicComponent(confirmationComponent.value), {
            onClose: updateShowSaveConfirmation,
            showFlag: showSaveConfirmation.value,
            title: "Save Schedule",
            message: "Schedule this task?",
            confirmYes: confirmScheduleTask,
            confirmNo: cancelScheduleTask,
            operation: "saving",
            operating: savingSchedule.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showCloseConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_45, [
          (openBlock(), createBlock(resolveDynamicComponent(closeConfirmationComponent.value), {
            onClose: updateShowCloseConfirmation,
            showFlag: showCloseConfirmation.value,
            title: props.mode == "new" ? "Cancel Add Task" : "Cancel Edit Schedule",
            message: props.mode == "new" ? "Are you sure? This task configuration will be lost." : "Are you sure? Any changes will be lost.",
            confirmYes: confirmCancel,
            confirmNo: cancelCancel,
            operation: "canceling",
            operating: cancelingAddTask.value
          }, null, 40, ["showFlag", "title", "message", "operating"]))
        ])) : createCommentVNode("", true),
        showDeleteConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_46, [
          (openBlock(), createBlock(resolveDynamicComponent(deleteConfirmationComponent.value), {
            onClose: updateShowDeleteConfirmation,
            showFlag: showDeleteConfirmation.value,
            title: "Delete Schedule",
            message: "This will disable the timer and delete the schedule files. The task itself will remain and can still be run manually. Proceed?",
            confirmYes: confirmDeleteSchedule,
            confirmNo: cancelDeleteSchedule,
            operation: "deleting",
            operating: deletingSchedule.value
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
