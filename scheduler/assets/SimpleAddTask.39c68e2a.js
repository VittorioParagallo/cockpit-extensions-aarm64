import { d as defineComponent, C as mergeModels, D as useModel, r as ref, e as computed, w as watch, c as createElementBlock, a as createBaseVNode, E as withDirectives, G as vModelSelect, H as vModelText, F as Fragment, q as renderList, p as createCommentVNode, y as toDisplayString, I as parseTaskScheduleIntoString, o as openBlock, z as normalizeClass, b as useTaskDraftStore, f as onMounted, J as nextTick, u as useRouter, i as injectWithCheck, K as provide, m as createTextVNode, l as createVNode, L as createBlock, k as unref, R as RsyncTaskTemplate, M as CloudSyncTaskTemplate, Z as ZFSReplicationTaskTemplate, O as AutomatedSnapshotTaskTemplate, S as ScrubTaskTemplate, P as SmartTestTemplate, Q as CustomTaskTemplate, B as pushNotification, N as Notification, v as taskInstancesInjectionKey, T as taskTemplatesInjectionKey, s as loadingInjectionKey, t as schedulerInjectionKey, U as TaskInstance, V as TaskSchedule } from "./index.9323ba8c.js";
import { _ as _export_sfc, a as _sfc_main$2 } from "./ParameterInput.vue_vue_type_script_setup_true_lang.3058bac2.js";
import { r as render, _ as _sfc_main$3 } from "./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js";
import "./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1$1 = { class: "h-full rounded-md border border-default flex flex-col bg-accent text-default min-h-0" };
const _hoisted_2$1 = { class: "p-2 shrink-0" };
const _hoisted_3$1 = { class: "grid grid-cols-2 gap-2 mt-2" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = ["disabled"];
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = ["value"];
const _hoisted_8$1 = ["disabled"];
const _hoisted_9$1 = {
  key: 0,
  class: "text-warning text-base mt-1"
};
const _hoisted_10$1 = ["title"];
const _hoisted_11$1 = { class: "text-sm text-default" };
const _hoisted_12$1 = { class: "p-1 mt-1 flex-1 min-h-0 text-center border border-default rounded-md" };
const _hoisted_13$1 = { class: "flex justify-between w-full p-1 bg-default text-center rounded-md" };
const _hoisted_14$1 = { class: "text-lg font-semibold text-default text-center" };
const _hoisted_15$1 = { class: "grid grid-cols-7 w-full my-1" };
const _hoisted_16 = { class: "grid grid-cols-7 gap-1 w-full grid-rows-6 auto-rows-fr" };
const _hoisted_17 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SimpleCalendar",
  props: /* @__PURE__ */ mergeModels({
    title: {},
    taskSchedule: {}
  }, {
    "taskSchedule": { required: true },
    "taskScheduleModifiers": {}
  }),
  emits: ["update:taskSchedule"],
  setup(__props) {
    const props = __props;
    const schedule = useModel(__props, "taskSchedule");
    const DOW_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekdayName = ref(DOW_NAMES[schedule.value.startDate.getDay()]);
    function setWeekdayByName() {
      const now = new Date();
      const targetIdx = DOW_NAMES.indexOf(String(weekdayName.value).slice(0, 3));
      const d = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        schedule.value.startDate.getHours(),
        schedule.value.startDate.getMinutes()
      );
      const delta = (targetIdx - d.getDay() + 7) % 7;
      if (delta !== 0 || d <= now)
        d.setDate(d.getDate() + (delta || 7));
      schedule.value = { ...schedule.value, startDate: d };
    }
    const dayValue = ref(schedule.value.startDate.getDate());
    const monthValue = ref(schedule.value.startDate.getMonth() + 1);
    const hourValue = ref(schedule.value.startDate.getHours());
    const minuteValue = ref(schedule.value.startDate.getMinutes());
    const yearValue = ref(schedule.value.startDate.getFullYear());
    const currentMonth = ref(schedule.value.startDate.getMonth());
    const currentYear = ref(schedule.value.startDate.getFullYear());
    const updateStartDate = () => {
      let day = dayValue.value;
      const month = monthValue.value - 1;
      const year = yearValue.value;
      if (schedule.value.repeatFrequency === "month") {
        const dim = new Date(year, month + 1, 0).getDate();
        if (day > dim) {
          day = dim;
          dayValue.value = day;
        }
      }
      schedule.value = {
        ...schedule.value,
        startDate: new Date(year, month, day, hourValue.value, minuteValue.value)
      };
    };
    const showInvalidDateWarning = computed(() => {
      if (schedule.value.repeatFrequency !== "month")
        return false;
      const daysInMonth = new Date(yearValue.value, monthValue.value, 0).getDate();
      return dayValue.value > daysInMonth;
    });
    function selectDay(d) {
      dayValue.value = d;
      monthValue.value = currentMonth.value + 1;
      yearValue.value = currentYear.value;
      updateStartDate();
    }
    watch(() => schedule.value.repeatFrequency, (newFrequency) => {
      if (newFrequency === "hour") {
        minuteValue.value = 0;
        updateStartDate();
      }
    });
    watch([hourValue, minuteValue, dayValue, monthValue, yearValue], () => {
      if (hourValue.value != null && minuteValue.value != null) {
        updateStartDate();
      }
    });
    watch(
      () => props.taskSchedule.startDate,
      (newDate) => {
        dayValue.value = newDate.getDate();
        monthValue.value = newDate.getMonth() + 1;
        yearValue.value = newDate.getFullYear();
        currentMonth.value = newDate.getMonth();
        hourValue.value = newDate.getHours();
        minuteValue.value = newDate.getMinutes();
        weekdayName.value = DOW_NAMES[newDate.getDay()];
      },
      { immediate: true }
    );
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = computed(() => {
      const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
      const numDays = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
      const daysArray = Array.from({ length: numDays }, (_, i) => {
        const date = new Date(currentYear.value, currentMonth.value, i + 1);
        const id = date.toISOString().split("T")[0];
        return { id, date: i + 1, isMarked: isScheduled(date), isPadding: false };
      });
      const startPaddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => ({
        id: `pad-start-${i}`,
        date: "",
        isMarked: false,
        isPadding: true
      }));
      const totalCells = 42;
      const endPaddingCount = totalCells - (startPaddingDays.length + daysArray.length);
      const endPaddingDays = Array.from({ length: endPaddingCount }, (_, i) => ({
        id: `pad-end-${i}`,
        date: "",
        isMarked: false,
        isPadding: true
      }));
      return [...startPaddingDays, ...daysArray, ...endPaddingDays];
    });
    const isScheduled = (date) => {
      if (!schedule.value.startDate)
        return false;
      const startDate = new Date(schedule.value.startDate);
      startDate.setHours(0, 0, 0, 0);
      date.setHours(0, 0, 0, 0);
      if (date.getTime() === startDate.getTime())
        return true;
      if (date < startDate)
        return false;
      const freq = schedule.value.repeatFrequency;
      if (freq === "hour" || freq === "day")
        return date >= startDate;
      if (freq === "week")
        return date >= startDate && date.getDay() === startDate.getDay();
      if (freq === "month")
        return date >= startDate && date.getDate() === startDate.getDate();
      return false;
    };
    const changeMonth = (delta) => {
      let m = currentMonth.value + delta;
      let y = currentYear.value;
      if (m < 0) {
        m = 11;
        y--;
      } else if (m > 11) {
        m = 0;
        y++;
      }
      currentMonth.value = m;
      currentYear.value = y;
      yearValue.value = y;
    };
    const parsedIntervalString = computed(() => parseTaskScheduleIntoString(schedule.value));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _cache[14] || (_cache[14] = createBaseVNode("label", {
            for: "frequency-select",
            class: "block text-sm font-medium"
          }, "Backup Frequency", -1)),
          withDirectives(createBaseVNode("select", {
            id: "frequency-select",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => schedule.value.repeatFrequency = $event),
            class: "input-textlike w-full"
          }, [..._cache[8] || (_cache[8] = [
            createBaseVNode("option", { value: "hour" }, "Hourly", -1),
            createBaseVNode("option", { value: "day" }, "Daily", -1),
            createBaseVNode("option", { value: "week" }, "Weekly", -1),
            createBaseVNode("option", { value: "month" }, "Monthly", -1)
          ])], 512), [
            [vModelSelect, schedule.value.repeatFrequency]
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            schedule.value.repeatFrequency !== "week" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
              _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-sm" }, "Start Day", -1)),
              withDirectives(createBaseVNode("input", {
                type: "number",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dayValue.value = $event),
                onInput: updateStartDate,
                min: "1",
                max: "31",
                disabled: schedule.value.repeatFrequency === "hour",
                class: "input-textlike w-full text-sm"
              }, null, 40, _hoisted_5$1), [
                [vModelText, dayValue.value]
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
              _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-sm" }, "Weekday", -1)),
              withDirectives(createBaseVNode("select", {
                class: "input-textlike w-full text-sm",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => weekdayName.value = $event),
                onChange: setWeekdayByName
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(DOW_NAMES, (n) => {
                  return createBaseVNode("option", {
                    key: n,
                    value: n
                  }, toDisplayString(n), 9, _hoisted_7$1);
                }), 64))
              ], 544), [
                [vModelSelect, weekdayName.value]
              ])
            ])),
            createBaseVNode("div", null, [
              _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-sm" }, "Start Month", -1)),
              withDirectives(createBaseVNode("input", {
                type: "number",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => monthValue.value = $event),
                onInput: updateStartDate,
                min: "1",
                max: "12",
                disabled: schedule.value.repeatFrequency === "hour" || schedule.value.repeatFrequency === "week",
                class: "input-textlike w-full text-sm"
              }, null, 40, _hoisted_8$1), [
                [vModelText, monthValue.value]
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-sm" }, "Start Hour", -1)),
              withDirectives(createBaseVNode("input", {
                type: "number",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => hourValue.value = $event),
                onInput: updateStartDate,
                min: "0",
                max: "23",
                class: "input-textlike w-full text-sm"
              }, null, 544), [
                [vModelText, hourValue.value]
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[13] || (_cache[13] = createBaseVNode("label", { class: "block text-sm" }, "Start Minute", -1)),
              withDirectives(createBaseVNode("input", {
                type: "number",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => minuteValue.value = $event),
                onInput: updateStartDate,
                min: "0",
                max: "59",
                class: "input-textlike w-full text-sm"
              }, null, 544), [
                [vModelText, minuteValue.value]
              ])
            ])
          ]),
          showInvalidDateWarning.value ? (openBlock(), createElementBlock("p", _hoisted_9$1, " Selected day is invalid for this month. Adjusted to last valid day. ")) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          title: parsedIntervalString.value,
          class: "items-center col-span-1 text-base text-default bg-well p-1 rounded-md text-center w-full max-w-[600px] max-h-64 mx-auto shrink-0"
        }, [
          createBaseVNode("p", _hoisted_11$1, "Start date/time: " + toDisplayString(schedule.value.startDate.toLocaleString()), 1),
          createBaseVNode("p", null, [
            createBaseVNode("strong", null, "Will run backup " + toDisplayString(parsedIntervalString.value) + ".", 1)
          ])
        ], 8, _hoisted_10$1),
        createBaseVNode("div", _hoisted_12$1, [
          createBaseVNode("div", _hoisted_13$1, [
            createBaseVNode("button", {
              onClick: _cache[6] || (_cache[6] = ($event) => changeMonth(-1)),
              class: "btn btn-secondary"
            }, " Prev "),
            createBaseVNode("span", _hoisted_14$1, toDisplayString(monthNames[currentMonth.value]) + " " + toDisplayString(currentYear.value), 1),
            createBaseVNode("button", {
              onClick: _cache[7] || (_cache[7] = ($event) => changeMonth(1)),
              class: "btn btn-secondary"
            }, " Next ")
          ]),
          createBaseVNode("div", _hoisted_15$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList(DOW_NAMES, (day) => {
              return createBaseVNode("div", {
                key: day,
                class: "text-center text-default font-medium"
              }, toDisplayString(day), 1);
            }), 64))
          ]),
          createBaseVNode("div", _hoisted_16, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(days.value, (day) => {
              return openBlock(), createElementBlock("div", {
                key: day.id,
                class: normalizeClass([[
                  day.isPadding ? "bg-accent text-muted cursor-default" : "cursor-pointer hover:bg-gray-700",
                  day.isMarked && !day.isPadding ? "bg-green-600 dark:bg-green-800 text-white" : "bg-default"
                ], "p-2 text-default text-center border border-default rounded"]),
                onClick: ($event) => !day.isPadding && selectDay(Number(day.date))
              }, toDisplayString(day.date), 11, _hoisted_17);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const SimpleCalendar_vue_vue_type_style_index_0_scoped_2b93290c_lang = "";
const SimpleCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2b93290c"]]);
const _hoisted_1 = { class: "h-full w-full flex flex-col bg-well" };
const _hoisted_2 = { class: "flex flex-row items-center justify-between font-bold shrink-0 text-default" };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "flex-1 min-h-0 mt-2 border border-default rounded-md bg-well overflow-auto" };
const _hoisted_6 = { class: "grid grid-cols-12 gap-2 p-2 items-stretch" };
const _hoisted_7 = { class: "col-span-12 xl:col-span-6 min-h-0" };
const _hoisted_8 = { class: "h-full flex-1 bg-accent text-default rounded-md border border-default p-2" };
const _hoisted_9 = {
  name: "task-name",
  class: "mb-2"
};
const _hoisted_10 = { class: "flex flex-row justify-between items-center" };
const _hoisted_11 = { class: "flex flex-row items-center" };
const _hoisted_12 = {
  key: 0,
  name: "task-template",
  class: "mb-2"
};
const _hoisted_13 = ["value"];
const _hoisted_14 = {
  key: 1,
  class: "min-h-0"
};
const _hoisted_15 = { class: "col-span-12 xl:col-span-6 min-h-0 flex" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "SimpleTaskForm" },
  __name: "SimpleAddTask",
  props: {
    mode: {},
    existingTask: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const draft = useTaskDraftStore();
    const originalTask = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.existingTask) != null ? _a2 : draft.draft) != null ? _b2 : null;
    });
    const isEditMode = computed(() => {
      var _a2;
      return ((_a2 = props.mode) != null ? _a2 : draft.mode) === "edit";
    });
    const newTask = ref(null);
    const adding = ref(false);
    const errorList = ref([]);
    const originalName = ref((_a = props.existingTask) == null ? void 0 : _a.name);
    const newTaskName = ref("");
    const newTaskNameErrorTag = ref(false);
    const selectedTemplate = ref();
    const parameterInputComponent = ref();
    const parameters = ref();
    const notesTask = ref("");
    const paramInputKey = ref(0);
    const uiSchedule = ref(toUISchedule((_b = originalTask.value) == null ? void 0 : _b.schedule));
    function resetForm() {
      newTaskName.value = "";
      selectedTemplate.value = void 0;
      parameters.value = void 0;
      notesTask.value = "";
      uiSchedule.value = toUISchedule(null);
      paramInputKey.value++;
    }
    watch(isEditMode, (edit) => {
      if (!edit)
        resetForm();
    }, { immediate: true });
    onMounted(async () => {
      await nextTick();
      if (isEditMode.value && originalTask.value) {
        uiSchedule.value = toUISchedule(originalTask.value.schedule);
        prefillFromTask(originalTask.value);
      } else {
        resetForm();
        uiSchedule.value = toUISchedule(null);
      }
    });
    const router = useRouter();
    const taskInstances = injectWithCheck(taskInstancesInjectionKey, "taskInstances not provided!");
    const taskTemplates = injectWithCheck(taskTemplatesInjectionKey, "taskTemplates not provided!");
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const simpleAllowed = ["Rsync Task", "Cloud Sync Task"];
    const allowedTemplates = computed(() => {
      const orderMap = Object.fromEntries(simpleAllowed.map((n, i) => [n, i]));
      return taskTemplates.filter((t) => simpleAllowed.includes(t.name)).sort((a, b) => orderMap[a.name] - orderMap[b.name]);
    });
    const nameOverrides = {
      "ZFS Replication Task": "ZFS \u2192 ZFS Backup",
      "Automated Snapshot Task": "Automatic Snapshots",
      "Scrub Task": "ZFS Scrub",
      "Rsync Task": "Server-to-Server Backup",
      "Cloud Sync Task": "Cloud Backup"
    };
    const displayName = (template) => nameOverrides[template.name] || template.name;
    function toUISchedule(model) {
      var _a2;
      const now = new Date();
      if (!model || !Array.isArray(model.intervals) || model.intervals.length === 0) {
        const start = new Date(now);
        start.setMinutes(0, 0, 0);
        if (start <= now)
          start.setHours(start.getHours() + 1);
        return { repeatFrequency: "hour", startDate: start };
      }
      const intv = (_a2 = model.intervals[0]) != null ? _a2 : {};
      const v = (x) => {
        var _a3;
        return (_a3 = x == null ? void 0 : x.value) != null ? _a3 : x;
      };
      const isStar = (x) => {
        var _a3;
        return String((_a3 = v(x)) != null ? _a3 : "*") === "*";
      };
      const asNum = (x, fb) => {
        var _a3;
        const s = String((_a3 = v(x)) != null ? _a3 : "");
        const n = Number(s);
        return Number.isFinite(n) ? n : fb;
      };
      const hasDOW = Array.isArray(intv.dayOfWeek) && intv.dayOfWeek.length > 0;
      const hourStar = isStar(intv.hour);
      const dayStar = isStar(intv.day);
      const monthStar = isStar(intv.month);
      const yearStar = isStar(intv.year);
      let repeatFrequency = "day";
      if (hourStar && dayStar && monthStar && yearStar)
        repeatFrequency = "hour";
      else if (hasDOW)
        repeatFrequency = "week";
      else if (!dayStar && monthStar)
        repeatFrequency = "month";
      const hour = asNum(intv.hour, now.getHours());
      const minute = asNum(intv.minute, now.getMinutes());
      if (repeatFrequency === "week") {
        const DOW_NAMES2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const raw = intv.dayOfWeek[0];
        const targetDow = typeof raw === "number" ? raw : (() => {
          const idx = DOW_NAMES2.indexOf(String(raw).slice(0, 3));
          return idx >= 0 ? idx : now.getDay();
        })();
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);
        const delta = (targetDow - start.getDay() + 7) % 7;
        if (delta !== 0 || start <= now)
          start.setDate(start.getDate() + (delta || 7));
        return { repeatFrequency, startDate: start };
      }
      if (repeatFrequency === "hour") {
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), minute, 0, 0);
        if (start <= now)
          start.setHours(start.getHours() + 1);
        return { repeatFrequency, startDate: start };
      }
      const year = asNum(intv.year, now.getFullYear());
      const month = asNum(intv.month, now.getMonth() + 1);
      const day = asNum(intv.day, now.getDate());
      return { repeatFrequency, startDate: new Date(year, Math.min(11, Math.max(0, month - 1)), day, hour, minute) };
    }
    const DOW_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function toModelSchedule(ui) {
      const d = ui.startDate;
      const baseInterval = {
        minute: { value: String(d.getMinutes()) },
        hour: { value: ui.repeatFrequency === "hour" ? "*" : String(d.getHours()) },
        year: { value: "*" }
      };
      if (ui.repeatFrequency === "hour") {
        baseInterval.day = { value: "*" };
        baseInterval.month = { value: "*" };
      } else if (ui.repeatFrequency === "day") {
        baseInterval.day = { value: "*" };
        baseInterval.month = { value: "*" };
      } else if (ui.repeatFrequency === "week") {
        baseInterval.day = { value: "*" };
        baseInterval.month = { value: "*" };
        baseInterval.dayOfWeek = [DOW_NAMES[d.getDay()]];
      } else if (ui.repeatFrequency === "month") {
        baseInterval.day = { value: String(d.getDate()) };
        baseInterval.month = { value: "*" };
      }
      return new TaskSchedule(true, [baseInterval]);
    }
    watch(() => originalTask.value, (t) => {
      uiSchedule.value = toUISchedule(t == null ? void 0 : t.schedule);
    }, { immediate: true });
    function makeLocalSchemaByName(name) {
      if (name === "Rsync Task")
        return new RsyncTaskTemplate().parameterSchema;
      if (name === "Cloud Sync Task")
        return new CloudSyncTaskTemplate().parameterSchema;
      if (name === "ZFS Replication Task")
        return new ZFSReplicationTaskTemplate().parameterSchema;
      if (name === "Automated Snapshot Task")
        return new AutomatedSnapshotTaskTemplate().parameterSchema;
      if (name === "Scrub Task")
        return new ScrubTaskTemplate().parameterSchema;
      if (name === "SMART Test")
        return new SmartTestTemplate().parameterSchema;
      if (name === "Custom Task")
        return new CustomTaskTemplate().parameterSchema;
      return null;
    }
    function hydrateSchemaWithRaw(schema, raw) {
      if (!schema || !raw)
        return schema;
      if ("value" in raw && raw.value !== void 0)
        schema.value = raw.value;
      if (Array.isArray(raw.children) && Array.isArray(schema.children)) {
        for (const rawChild of raw.children) {
          const target = schema.children.find((c) => c.key === rawChild.key);
          if (target)
            hydrateSchemaWithRaw(target, rawChild);
        }
      }
      return schema;
    }
    function prefillFromTask(task) {
      var _a2, _b2;
      if (!task)
        return;
      newTaskName.value = task.name;
      const found = taskTemplates.find((t) => {
        var _a3;
        return t.name === ((_a3 = task.template) == null ? void 0 : _a3.name);
      });
      if (found)
        selectedTemplate.value = found;
      const localSchema = makeLocalSchemaByName((_a2 = task.template) == null ? void 0 : _a2.name);
      parameters.value = localSchema ? hydrateSchemaWithRaw(localSchema, task.parameters) : task.parameters;
      notesTask.value = (_b2 = task.notes) != null ? _b2 : "";
      paramInputKey.value++;
    }
    const canPrefill = computed(() => !!originalTask.value && allowedTemplates.value.length > 0);
    watch(canPrefill, async (ok) => {
      if (!ok)
        return;
      await nextTick();
      prefillFromTask(originalTask.value);
    }, { immediate: true });
    function clearAllErrors() {
      var _a2, _b2;
      errorList.value = [];
      newTaskNameErrorTag.value = false;
      (_b2 = (_a2 = parameterInputComponent.value) == null ? void 0 : _a2.clearTaskParamErrorTags) == null ? void 0 : _b2.call(_a2);
    }
    function doesTaskNameExist(name) {
      var _a2;
      const currentName = (_a2 = originalTask.value) == null ? void 0 : _a2.name;
      return taskInstances.value.some(
        (task) => task.name === name && (!isEditMode.value || task.name !== currentName)
      );
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
      var _a2, _b2;
      clearAllErrors();
      await validateTaskName();
      await ((_b2 = (_a2 = parameterInputComponent.value) == null ? void 0 : _a2.validation) == null ? void 0 : _b2.call(_a2));
      if (errorList.value.length > 0) {
        pushNotification(new Notification("Task Save Failed", `Task submission has errors:
- ${errorList.value.join("\n- ")}`, "error", 6e3));
        return false;
      }
      return true;
    }
    function templateFromSelection() {
      var _a2;
      const n = (_a2 = selectedTemplate.value) == null ? void 0 : _a2.name;
      if (n === "ZFS Replication Task")
        return new ZFSReplicationTaskTemplate();
      if (n === "Automated Snapshot Task")
        return new AutomatedSnapshotTaskTemplate();
      if (n === "Rsync Task")
        return new RsyncTaskTemplate();
      if (n === "Scrub Task")
        return new ScrubTaskTemplate();
      if (n === "SMART Test")
        return new SmartTestTemplate();
      if (n === "Cloud Sync Task")
        return new CloudSyncTaskTemplate();
      if (n === "Custom Task")
        return new CustomTaskTemplate();
      return void 0;
    }
    function sanitizeName(n) {
      let s = n.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
      if (s.startsWith("_"))
        s = "task" + s;
      return s;
    }
    function buildTask() {
      const tpl = templateFromSelection();
      if (!tpl)
        return null;
      const notes = notesTask.value || "";
      const schedule = toModelSchedule(uiSchedule.value);
      const inst = new TaskInstance(sanitizeName(newTaskName.value), tpl, parameters.value, schedule, notes);
      return inst;
    }
    function jsonStable(v) {
      try {
        return JSON.stringify(v);
      } catch {
        return String(v);
      }
    }
    const isDirty = computed(() => {
      var _a2, _b2;
      if (!originalTask.value)
        return true;
      const candidate = buildTask();
      if (!candidate)
        return false;
      const a = originalTask.value;
      return a.name !== candidate.name || ((_a2 = a.template) == null ? void 0 : _a2.name) !== ((_b2 = candidate.template) == null ? void 0 : _b2.name) || jsonStable(a.parameters) !== jsonStable(candidate.parameters) || jsonStable(a.schedule) !== jsonStable(candidate.schedule) || (a.notes || "") !== (candidate.notes || "");
    });
    function goBack() {
      router.push({ name: "SimpleTasks" });
    }
    async function saveAll() {
      var _a2, _b2, _c, _d;
      if (!await validateComponentParams())
        return;
      const built = buildTask();
      if (!built)
        return;
      try {
        adding.value = true;
        loading.value = true;
        if (isEditMode.value) {
          const old = originalTask.value;
          const nameChanged = old.name !== built.name;
          const templateChanged = ((_a2 = old.template) == null ? void 0 : _a2.name) !== ((_b2 = built.template) == null ? void 0 : _b2.name);
          if (nameChanged || templateChanged) {
            await myScheduler.updateTaskInstance(built, { oldName: originalName.value });
          } else {
            await myScheduler.updateTaskInstance(built);
          }
          await myScheduler.updateSchedule(built);
          await ((_c = myScheduler.updateTaskNotes) == null ? void 0 : _c.call(myScheduler, built));
          await myScheduler.loadTaskInstances();
          pushNotification(new Notification("Task Updated", "Your task changes were saved.", "success", 6e3));
        } else {
          await myScheduler.registerTaskInstance(built);
          await myScheduler.loadTaskInstances();
          pushNotification(new Notification("Task Created", "Your task was created and scheduled.", "success", 6e3));
        }
        router.push({ name: "SimpleTasks" });
      } catch (e) {
        pushNotification(new Notification("Save Failed", String((_d = e == null ? void 0 : e.message) != null ? _d : e), "error", 6e3));
      } finally {
        adding.value = false;
        loading.value = false;
      }
    }
    provide("new-task", newTask);
    provide("parameters", parameters);
    provide("errors", errorList);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              class: "btn btn-danger text-sm mr-3",
              onClick: goBack
            }, "Cancel"),
            createTextVNode(" " + toDisplayString(isEditMode.value ? "Edit Backup Task" : "Create Backup Task"), 1)
          ]),
          createBaseVNode("button", {
            class: "btn btn-success text-sm",
            disabled: !isDirty.value || adding.value,
            onClick: saveAll
          }, toDisplayString(isEditMode.value ? adding.value ? "Saving\u2026" : "Save Changes" : adding.value ? "Creating\u2026" : "Create Task"), 9, _hoisted_4)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      _cache[3] || (_cache[3] = createBaseVNode("label", { class: "block text-sm leading-6 text-default" }, "Task Name", -1)),
                      createVNode(_sfc_main$3, {
                        class: "ml-1",
                        title: "Name can have letters, numbers, and underscores. Spaces convert to underscores upon save."
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
                    class: normalizeClass(["my-1 block w-full input-textlike text-default", newTaskNameErrorTag.value ? "outline outline-1 outline-rose-500 dark:outline-rose-700" : ""]),
                    placeholder: "New Task",
                    title: "Name can have letters, numbers, and underscores. Spaces convert to underscores upon save."
                  }, null, 2), [
                    [vModelText, newTaskName.value]
                  ])
                ]),
                allowedTemplates.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  _cache[5] || (_cache[5] = createBaseVNode("label", {
                    for: "task-template-selection",
                    class: "block text-sm leading-6 text-default"
                  }, "Task Template", -1)),
                  withDirectives(createBaseVNode("select", {
                    id: "task-template-selection",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedTemplate.value = $event),
                    name: "task-template-selection",
                    class: "text-default mt-1 block w-full input-textlike sm:text-sm sm:leading-6"
                  }, [
                    _cache[4] || (_cache[4] = createBaseVNode("option", { value: void 0 }, "Select Type of Task to Add", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(allowedTemplates.value, (template, idx) => {
                      return openBlock(), createElementBlock("option", {
                        key: idx,
                        value: template
                      }, toDisplayString(displayName(template)), 9, _hoisted_13);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedTemplate.value]
                  ])
                ])) : createCommentVNode("", true),
                selectedTemplate.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                  (openBlock(), createBlock(_sfc_main$2, {
                    key: paramInputKey.value,
                    ref_key: "parameterInputComponent",
                    ref: parameterInputComponent,
                    selectedTemplate: selectedTemplate.value,
                    simple: true,
                    task: originalTask.value || void 0
                  }, null, 8, ["selectedTemplate", "task"]))
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(SimpleCalendar, {
                title: "Schedule Task",
                taskSchedule: uiSchedule.value,
                "onUpdate:taskSchedule": _cache[2] || (_cache[2] = ($event) => uiSchedule.value = $event),
                class: "w-full h-full flex-1"
              }, null, 8, ["taskSchedule"])
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
