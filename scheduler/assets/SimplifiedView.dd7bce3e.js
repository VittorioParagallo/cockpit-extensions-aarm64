import { c as createElementBlock, a as createBaseVNode, o as openBlock, d as defineComponent, u as useRouter, i as injectWithCheck, b as useTaskDraftStore, r as ref, e as computed, f as onMounted, g as onActivated, h as onUnmounted, j as useLiveTaskStatus, w as watch, k as unref, l as createVNode, m as createTextVNode, n as render$1, p as createCommentVNode, F as Fragment, q as renderList, s as loadingInjectionKey, t as schedulerInjectionKey, v as taskInstancesInjectionKey, x as logInjectionKey, _ as _sfc_main$1, y as toDisplayString, z as normalizeClass, A as taskStatusClass, B as pushNotification, N as Notification } from "./index.9323ba8c.js";
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
      d: "M12 4.5v15m7.5-7.5h-15"
    })
  ]);
}
const _hoisted_1 = { class: "h-full flex flex-col bg-well text-default" };
const _hoisted_2 = { class: "flex flex-row items-center justify-between font-bold" };
const _hoisted_3 = { class: "flex items-center justify-start" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "flex items-center justify-end" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { class: "flex-1 min-h-0 mt-2 relative" };
const _hoisted_8 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
};
const _hoisted_9 = {
  key: 1,
  class: "h-full flex items-center justify-center"
};
const _hoisted_10 = {
  key: 2,
  class: "h-full overflow-hidden"
};
const _hoisted_11 = {
  key: 0,
  class: "absolute inset-0 z-[100] flex items-center justify-center bg-well/60 backdrop-blur-sm"
};
const _hoisted_12 = { class: "h-full overflow-auto border border-default rounded-md" };
const _hoisted_13 = { class: "min-w-full text-sm" };
const _hoisted_14 = { class: "px-3 py-2 align-top" };
const _hoisted_15 = { class: "font-medium" };
const _hoisted_16 = { class: "px-3 py-2 align-top" };
const _hoisted_17 = ["title"];
const _hoisted_18 = { class: "px-3 py-2 align-top" };
const _hoisted_19 = { class: "text-sm leading-5" };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { class: "px-3 py-2 align-top" };
const _hoisted_22 = { class: "px-3 py-2 align-top" };
const _hoisted_23 = { class: "text-sm" };
const _hoisted_24 = { class: "px-3 py-2 align-top" };
const _hoisted_25 = { class: "text-sm" };
const _hoisted_26 = { class: "px-3 py-2 align-top" };
const _hoisted_27 = { class: "flex gap-2" };
const _hoisted_28 = ["onClick", "disabled"];
const _hoisted_29 = ["onClick", "disabled"];
const _hoisted_30 = ["onClick", "disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimplifiedView",
  setup(__props) {
    const router = useRouter();
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const taskInstances = injectWithCheck(taskInstancesInjectionKey, "taskInstances not provided!");
    const draftStore = useTaskDraftStore();
    const search = ref("");
    const selected = ref(null);
    const myTaskLog = injectWithCheck(logInjectionKey, "log not provided!");
    const fetching = ref(false);
    const everLoaded = ref(false);
    const cachedRows = ref([]);
    const isBusy = computed(() => fetching.value || loading.value);
    const showInitialSpinner = computed(() => !everLoaded.value && isBusy.value);
    const showOverlaySpinner = computed(() => everLoaded.value && isBusy.value);
    const boot = async () => {
      if (fetching.value)
        return;
      fetching.value = true;
      try {
        await myScheduler.loadTaskInstances();
        await live.refreshAll();
        live.start();
      } finally {
        fetching.value = false;
      }
    };
    onMounted(boot);
    onActivated(boot);
    onUnmounted(() => live.stop());
    const remoteTasks = computed(
      () => {
        var _a;
        return ((_a = taskInstances.value) != null ? _a : []).filter(
          (t) => {
            var _a2, _b;
            return ((_a2 = t == null ? void 0 : t.template) == null ? void 0 : _a2.name) === "Rsync Task" || ((_b = t == null ? void 0 : t.template) == null ? void 0 : _b.name) === "Cloud Sync Task";
          }
        );
      }
    );
    const live = useLiveTaskStatus(remoteTasks, myScheduler, myTaskLog, { intervalMs: 1500 });
    const filtered = computed(() => {
      const list = remoteTasks.value;
      const q = search.value.trim().toLowerCase();
      if (!q)
        return list;
      return list.filter((t) => {
        var _a;
        return ((_a = t == null ? void 0 : t.name) != null ? _a : "").toLowerCase().includes(q);
      });
    });
    function paramsOf(t) {
      var _a, _b;
      return (_b = (_a = t == null ? void 0 : t.parameters) == null ? void 0 : _a.children) != null ? _b : [];
    }
    function isRsync(t) {
      var _a;
      return ((_a = t == null ? void 0 : t.template) == null ? void 0 : _a.name) === "Rsync Task";
    }
    function isCloud(t) {
      var _a;
      return ((_a = t == null ? void 0 : t.template) == null ? void 0 : _a.name) === "Cloud Sync Task";
    }
    function getSource(t) {
      var _a;
      const p = paramsOf(t).find((x) => x.key === "local_path");
      return (_a = p == null ? void 0 : p.value) != null ? _a : "\u2014";
    }
    function getTargetPath(t) {
      var _a, _b, _c, _d;
      if (isRsync(t)) {
        const ti = paramsOf(t).find((x) => x.key === "target_info");
        return (_c = (_b = (_a = ti == null ? void 0 : ti.children) == null ? void 0 : _a.find((c) => c.key === "path")) == null ? void 0 : _b.value) != null ? _c : "\u2014";
      } else {
        const tp = paramsOf(t).find((x) => x.key === "target_path");
        return (_d = tp == null ? void 0 : tp.value) != null ? _d : "\u2014";
      }
    }
    function getHost(t) {
      var _a, _b, _c;
      const ti = paramsOf(t).find((x) => x.key === "target_info");
      return (_c = (_b = (_a = ti == null ? void 0 : ti.children) == null ? void 0 : _a.find((c) => c.key === "host")) == null ? void 0 : _b.value) != null ? _c : "\u2014";
    }
    function getUser(t) {
      var _a, _b, _c;
      const ti = paramsOf(t).find((x) => x.key === "target_info");
      return (_c = (_b = (_a = ti == null ? void 0 : ti.children) == null ? void 0 : _a.find((c) => c.key === "user")) == null ? void 0 : _b.value) != null ? _c : "root";
    }
    function getPort(t) {
      var _a, _b, _c;
      const ti = paramsOf(t).find((x) => x.key === "target_info");
      return (_c = (_b = (_a = ti == null ? void 0 : ti.children) == null ? void 0 : _a.find((c) => c.key === "port")) == null ? void 0 : _b.value) != null ? _c : 22;
    }
    function getRemoteName(t) {
      var _a;
      const r = paramsOf(t).find((x) => x.key === "rclone_remote");
      return (_a = r == null ? void 0 : r.value) != null ? _a : "\u2014";
    }
    function getSchedule(t) {
      var _a, _b;
      const ivals = (_b = (_a = t == null ? void 0 : t.schedule) == null ? void 0 : _a.intervals) != null ? _b : [];
      if (!ivals.length)
        return "\u2014";
      return ivals.map((i) => myScheduler.describeInterval(i)).join(" + ");
    }
    function typeLabel(t) {
      if (isRsync(t))
        return "Server-to-Server";
      if (isCloud(t))
        return "Cloud Backup";
      return "\u2014";
    }
    function isBlank(v) {
      return v === void 0 || v === null || String(v).trim() === "" || v === "\u2014";
    }
    function formatRsyncDestination(t) {
      const host = getHost(t);
      const path = getTargetPath(t);
      if (isBlank(host))
        return isBlank(path) ? "\u2014" : String(path);
      const user = getUser(t);
      const portNum = Number(getPort(t));
      const userPart = isBlank(user) ? "" : `${user}@`;
      const includePort = Number.isFinite(portNum) && portNum > 0 && portNum !== 22;
      const portPart = includePort ? `:${portNum}` : "";
      const pathPart = isBlank(path) ? "" : `:${path}`;
      return `${userPart}${host}${portPart}${pathPart}`;
    }
    function formatCloudDestination(t) {
      var _a, _b;
      const remote = String((_a = getRemoteName(t)) != null ? _a : "").trim();
      const rawPath = String((_b = getTargetPath(t)) != null ? _b : "").trim();
      if (isBlank(remote))
        return isBlank(rawPath) ? "\u2014" : rawPath;
      let path = rawPath.startsWith(`${remote}:`) ? rawPath.slice(remote.length + 1) : rawPath;
      return `${remote}${isBlank(path) ? "" : `:${path}`}`;
    }
    function detailsFor(t) {
      const source = getSource(t);
      if (isRsync(t)) {
        return {
          source,
          destination: formatRsyncDestination(t),
          extra: void 0
        };
      } else if (isCloud(t)) {
        return {
          source,
          destination: formatCloudDestination(t),
          extra: void 0
        };
      }
      return { source, destination: "\u2014", extra: void 0 };
    }
    function coalesce(...vals) {
      return vals.find((v) => v !== void 0 && v !== null && v !== "");
    }
    function formatDateLike(v) {
      if (!v)
        return "\u2014";
      const d = new Date(v);
      if (Number.isFinite(v) && typeof v === "number" && v.toString().length === 10) {
        const d2 = new Date(v * 1e3);
        return isNaN(d2.getTime()) ? String(v) : d2.toLocaleString();
      }
      return isNaN(d.getTime()) ? String(v) : d.toLocaleString();
    }
    function getLastRun(t) {
      var _a, _b, _c, _d;
      const v = coalesce(
        t == null ? void 0 : t.lastRun,
        t == null ? void 0 : t.last_run,
        (_a = t == null ? void 0 : t.metadata) == null ? void 0 : _a.lastRun,
        (_b = t == null ? void 0 : t.metadata) == null ? void 0 : _b.last_run,
        (_c = t == null ? void 0 : t.stats) == null ? void 0 : _c.lastRun,
        (_d = t == null ? void 0 : t.history) == null ? void 0 : _d.lastRunAt
      );
      return formatDateLike(v);
    }
    const rows = computed(() => {
      const seen = /* @__PURE__ */ new Set();
      return filtered.value.filter((t) => {
        var _a;
        const key = `${t == null ? void 0 : t.name}::${(_a = t == null ? void 0 : t.template) == null ? void 0 : _a.name}`;
        if (seen.has(key))
          return false;
        seen.add(key);
        return true;
      }).map((t) => {
        var _a, _b, _c, _d, _e, _f;
        return {
          id: (_c = (_a = t == null ? void 0 : t.id) != null ? _a : t == null ? void 0 : t.uuid) != null ? _c : `${t == null ? void 0 : t.name}::${(_b = t == null ? void 0 : t.template) == null ? void 0 : _b.name}`,
          name: (_d = t == null ? void 0 : t.name) != null ? _d : "\u2014",
          type: typeLabel(t),
          details: detailsFor(t),
          status: (_e = live.statusFor(t)) != null ? _e : "\u2014",
          schedule: getSchedule(t),
          lastRun: (_f = live.lastRunFor(t)) != null ? _f : getLastRun(t),
          raw: t,
          scope: t.scope
        };
      });
    });
    watch(rows, (r) => {
      if (r.length) {
        cachedRows.value = r;
        everLoaded.value = true;
      }
    }, { immediate: true });
    const displayRows = computed(() => {
      if (!everLoaded.value)
        return rows.value;
      if (isBusy.value)
        return cachedRows.value;
      return rows.value;
    });
    async function refresh() {
      fetching.value = true;
      try {
        await myScheduler.loadTaskInstances();
      } finally {
        fetching.value = false;
      }
    }
    async function runNow(t) {
      var _a, _b, _c;
      selected.value = t;
      pushNotification(new Notification("Task Started", `Task ${(_a = t == null ? void 0 : t.name) != null ? _a : ""} has started running.`, "info", 6e3));
      try {
        await myScheduler.runTaskNow(t);
        pushNotification(new Notification("Task Successful", `Task ${(_b = t == null ? void 0 : t.name) != null ? _b : ""} completed.`, "success", 6e3));
      } catch {
        pushNotification(new Notification("Task Failed", `Task ${(_c = t == null ? void 0 : t.name) != null ? _c : ""} failed.`, "error", 6e3));
      }
    }
    async function edit(t) {
      draftStore.setDraft(t, "edit");
      router.push({ name: "SimpleEditTask", query: { session: t.id || t.name } });
    }
    async function remove(t) {
      var _a, _b;
      const ok = window.confirm(`Delete "${(_a = t == null ? void 0 : t.name) != null ? _a : "this task"}"? This cannot be undone.`);
      if (!ok)
        return;
      loading.value = true;
      fetching.value = true;
      try {
        await myScheduler.unregisterTaskInstance(t);
        pushNotification(new Notification("Task Removed", "Backup task deleted.", "success", 6e3));
        await myScheduler.loadTaskInstances();
      } catch (e) {
        pushNotification(new Notification("Delete Failed", String((_b = e == null ? void 0 : e.message) != null ? _b : e), "error", 6e3));
      } finally {
        loading.value = false;
        fetching.value = false;
      }
    }
    async function openAdd() {
      draftStore.clear();
      const session = Date.now().toString();
      router.push({ name: "SimpleAddTask", query: { session } });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              class: "btn btn-primary text-sm mr-3",
              onClick: openAdd,
              disabled: unref(loading)
            }, [
              createVNode(unref(render), { class: "w-5 h-5 text-white" })
            ], 8, _hoisted_4),
            _cache[0] || (_cache[0] = createTextVNode(" Schedule New Backup ", -1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            _cache[1] || (_cache[1] = createTextVNode(" Refresh Backup List ", -1)),
            createBaseVNode("button", {
              class: "btn btn-secondary text-sm ml-3",
              onClick: refresh,
              disabled: unref(loading)
            }, [
              createVNode(unref(render$1), { class: "w-5 h-5 text-white" })
            ], 8, _hoisted_6)
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          showInitialSpinner.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(_sfc_main$1, {
              width: "w-24",
              height: "h-24",
              baseColor: "text-gray-200",
              fillColor: "fill-gray-500"
            })
          ])) : displayRows.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [..._cache[2] || (_cache[2] = [
            createBaseVNode("div", { class: "text-center" }, [
              createBaseVNode("h2", { class: "text-default" }, "No Remote Backup Tasks Found"),
              createBaseVNode("p", { class: "text-muted mt-1" }, "Click \u201CAdd New Task\u201D to create one.")
            ], -1)
          ])])) : (openBlock(), createElementBlock("div", _hoisted_10, [
            showOverlaySpinner.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(_sfc_main$1, {
                width: "w-16",
                height: "h-16",
                baseColor: "text-gray-200",
                fillColor: "fill-gray-500"
              })
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("table", _hoisted_13, [
                _cache[6] || (_cache[6] = createBaseVNode("thead", { class: "text-left sticky top-0 bg-accent z-10" }, [
                  createBaseVNode("tr", { class: "border-b border-default" }, [
                    createBaseVNode("th", { class: "px-3 py-2" }, "Task Name"),
                    createBaseVNode("th", { class: "px-3 py-2" }, "Type"),
                    createBaseVNode("th", { class: "px-3 py-2" }, "Details"),
                    createBaseVNode("th", { class: "px-3 py-2" }, "Status"),
                    createBaseVNode("th", { class: "px-3 py-2" }, "Schedule"),
                    createBaseVNode("th", { class: "px-3 py-2" }, "Last Run"),
                    createBaseVNode("th", { class: "px-3 py-2" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(displayRows.value, (row) => {
                    return openBlock(), createElementBlock("tr", {
                      key: row.id,
                      class: "border-b border-default bg-default hover:bg-well text-left"
                    }, [
                      createBaseVNode("td", _hoisted_14, [
                        createBaseVNode("div", _hoisted_15, toDisplayString(row.name), 1)
                      ]),
                      createBaseVNode("td", _hoisted_16, [
                        createBaseVNode("span", {
                          class: "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-default/10",
                          title: row.type
                        }, toDisplayString(row.type) + " (Scope: " + toDisplayString(row.scope) + ") ", 9, _hoisted_17)
                      ]),
                      createBaseVNode("td", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", null, [
                            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-muted" }, "Source:", -1)),
                            createTextVNode(" " + toDisplayString(row.details.source), 1)
                          ]),
                          createBaseVNode("div", null, [
                            _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-muted" }, "Destination:", -1)),
                            createTextVNode(" " + toDisplayString(row.details.destination), 1)
                          ]),
                          row.details.extra ? (openBlock(), createElementBlock("div", _hoisted_20, [
                            _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-muted" }, "Info:", -1)),
                            createTextVNode(" " + toDisplayString(row.details.extra), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_21, [
                        createBaseVNode("span", {
                          class: normalizeClass(["text-sm", unref(taskStatusClass)(row.status)])
                        }, toDisplayString(row.status || "\u2014"), 3)
                      ]),
                      createBaseVNode("td", _hoisted_22, [
                        createBaseVNode("span", _hoisted_23, toDisplayString(row.schedule), 1)
                      ]),
                      createBaseVNode("td", _hoisted_24, [
                        createBaseVNode("span", _hoisted_25, toDisplayString(row.lastRun), 1)
                      ]),
                      createBaseVNode("td", _hoisted_26, [
                        createBaseVNode("div", _hoisted_27, [
                          createBaseVNode("button", {
                            class: "btn btn-xs btn-primary",
                            onClick: ($event) => runNow(row.raw),
                            disabled: unref(loading)
                          }, "Run Now", 8, _hoisted_28),
                          createBaseVNode("button", {
                            class: "btn btn-xs btn-secondary",
                            onClick: ($event) => edit(row.raw),
                            disabled: unref(loading)
                          }, "Edit", 8, _hoisted_29),
                          createBaseVNode("button", {
                            class: "btn btn-xs btn-danger",
                            onClick: ($event) => remove(row.raw),
                            disabled: unref(loading)
                          }, "Delete", 8, _hoisted_30)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ]))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
