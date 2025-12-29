import { d as defineComponent, a3 as inject, i as injectWithCheck, x as logInjectionKey, r as ref, w as watch, f as onMounted, h as onUnmounted, o as openBlock, L as createBlock, aj as withCtx, a as createBaseVNode, m as createTextVNode, y as toDisplayString, c as createElementBlock, l as createVNode, k as unref, n as render, ao as ue, z as normalizeClass, F as Fragment, q as renderList, p as createCommentVNode, _ as _sfc_main$1, aB as withModifiers, J as nextTick } from "./index.9323ba8c.js";
import { _ as _sfc_main$2 } from "./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js";
import "./open-closed.8a6c3d9d.js";
const _hoisted_1 = { class: "text-lg font-semibold text-default mb-4" };
const _hoisted_2 = { class: "italic" };
const _hoisted_3 = { class: "max-w-5xl mx-auto p-4 bg-accent text-default shadow-md rounded-lg" };
const _hoisted_4 = { class: "grid grid-cols-3 gap-2 items-center" };
const _hoisted_5 = {
  key: 0,
  class: "col-span-2 mb-4"
};
const _hoisted_6 = { class: "text-sm font-medium" };
const _hoisted_7 = { class: "text-sm font-medium" };
const _hoisted_8 = { class: "text-sm font-medium" };
const _hoisted_9 = {
  key: 0,
  class: "flex flex-col w-full text-nowrap"
};
const _hoisted_10 = { key: 1 };
const _hoisted_11 = {
  key: 1,
  class: "col-span-2 mb-4"
};
const _hoisted_12 = { class: "col-span-1 flex flex-col items-center gap-4" };
const _hoisted_13 = { class: "flex items-center gap-2" };
const _hoisted_14 = {
  key: 0,
  class: "bg-plugin-header p-4 rounded-lg mt-1"
};
const _hoisted_15 = {
  key: 1,
  class: "m-1 block text-sm leading-6 text-default bold italic text-center bg-default"
};
const _hoisted_16 = {
  key: 3,
  class: "flex items-center justify-center"
};
const _hoisted_17 = {
  key: 1,
  class: "bg-plugin-header p-4 rounded-lg mt-1"
};
const _hoisted_18 = { class: "flex items-center justify-center" };
const _hoisted_19 = { class: "w-full" };
const _hoisted_20 = { class: "button-group-row w-full justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogView",
  props: {
    idKey: {},
    task: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showLogView = inject("show-log-view");
    const myTaskLog = injectWithCheck(logInjectionKey, "log not provided!");
    const loadingLogs = ref(false);
    const loadingMoreLogs = ref(false);
    const taskInstance = ref(props.task);
    const thisLogEntry = ref();
    const viewMoreLogs = ref(false);
    const allLogsForThisTask = ref("");
    const pollInterval = ref();
    const closeModal = () => {
      showLogView.value = false;
      emit("close");
    };
    function logColor(line) {
      if (line.includes("systemd")) {
        if (line.includes("Failed") || line.includes("FAILURE") || line.includes("Stopped") || line.includes("error") || line.includes("Error") || line.includes("ERROR") || line.includes("Exception")) {
          return "text-danger";
        } else if (line.includes("Succeeded") || line.includes("Starting") || line.includes("Started")) {
          return "text-success";
        } else if (line.includes("restart") || line.includes("too quickly")) {
          return "text-warning";
        }
      } else if (line.includes("python")) {
        return "text-default";
      } else {
        return "text-muted";
      }
    }
    async function refreshLogs() {
      loadingLogs.value = true;
      loadingMoreLogs.value = true;
      await preserveScrollPosition(async () => {
        try {
          const latestLog = await myTaskLog.getLatestEntryFor(taskInstance.value);
          if (latestLog) {
            thisLogEntry.value = latestLog;
          }
          if (viewMoreLogs.value) {
            const logs = await myTaskLog.getEntriesFor(taskInstance.value);
            if (logs) {
              allLogsForThisTask.value = logs;
            }
          }
        } catch (error) {
          console.error("Failed to refresh logs:", error);
        } finally {
          loadingLogs.value = false;
          loadingMoreLogs.value = false;
        }
      });
    }
    const fetchLatestLog = async () => {
      if (viewMoreLogs.value) {
        return;
      }
      loadingLogs.value = true;
      try {
        const latestLog = await myTaskLog.getLatestEntryFor(taskInstance.value);
        if (latestLog) {
          thisLogEntry.value = latestLog;
        }
      } catch (error) {
        console.error("Failed to fetch logs:", error);
      } finally {
        loadingLogs.value = false;
      }
    };
    const logContainer = ref(null);
    const preserveScrollPosition = async (fetchFunction) => {
      if (!logContainer.value)
        return;
      const previousScrollHeight = logContainer.value.scrollHeight;
      const previousScrollTop = logContainer.value.scrollTop;
      await fetchFunction();
      nextTick(() => {
        if (logContainer.value) {
          logContainer.value.scrollTop = previousScrollTop + (logContainer.value.scrollHeight - previousScrollHeight);
        }
      });
    };
    const startPolling = () => {
      stopPolling();
      pollInterval.value = setInterval(() => {
        if (!viewMoreLogs.value) {
          fetchLatestLog();
        }
      }, 3e4);
    };
    const stopPolling = () => {
      if (pollInterval.value) {
        clearInterval(pollInterval.value);
        pollInterval.value = null;
      }
    };
    watch(viewMoreLogs, async (newVal) => {
      if (newVal) {
        stopPolling();
        await preserveScrollPosition(refreshLogs);
      } else {
        startPolling();
        refreshLogs();
      }
    });
    onMounted(() => {
      fetchLatestLog();
      startPolling();
    });
    onUnmounted(() => {
      stopPolling();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        onClose: closeModal,
        isOpen: unref(showLogView),
        "margin-top": "mt-10",
        width: "w-3/5",
        "min-width": "min-w-3/5",
        height: "h-min",
        "min-height": "min-h-min",
        "close-on-background-click": true
      }, {
        title: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h3", null, [
              _cache[1] || (_cache[1] = createTextVNode("Latest Task Exection Result for ", -1)),
              createBaseVNode("span", _hoisted_2, toDisplayString(props.task.name), 1)
            ])
          ])
        ]),
        content: withCtx(() => [
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                thisLogEntry.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createBaseVNode("p", _hoisted_6, "Last Executed at " + toDisplayString(thisLogEntry.value.startDate), 1),
                  createBaseVNode("p", _hoisted_7, "Finished at " + toDisplayString(thisLogEntry.value.finishDate), 1),
                  createBaseVNode("p", _hoisted_8, "Exit Code: " + toDisplayString(thisLogEntry.value.exitCode), 1),
                  viewMoreLogs.value ? (openBlock(), createElementBlock("div", _hoisted_9, [..._cache[2] || (_cache[2] = [
                    createBaseVNode("p", { class: "text-red-500 text-sm font-bold animate-pulse" }, " LOG VIEW PAUSED ", -1),
                    createBaseVNode("p", { class: "text-muted text-xs mt-0.5" }, " (Refresh or Disable 'Show All' to view most recent log in real-time) ", -1)
                  ])])) : (openBlock(), createElementBlock("div", _hoisted_10, [..._cache[3] || (_cache[3] = [
                    createBaseVNode("p", { class: "text-green-500 text-sm font-bold" }, " Log View Live ", -1),
                    createBaseVNode("p", { class: "text-muted text-xs mt-0.5" }, " (Viewing most recent log. Enable 'Show All' to pause view and see past logs) ", -1)
                  ])]))
                ])) : (openBlock(), createElementBlock("div", _hoisted_11, [..._cache[4] || (_cache[4] = [
                  createBaseVNode("p", { class: "text-sm font-medium" }, "No Last Execution Detected", -1)
                ])])),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("button", {
                    class: "btn btn-primary px-3 py-1 text-sm flex items-center gap-2",
                    onClick: refreshLogs
                  }, [
                    _cache[5] || (_cache[5] = createTextVNode(" Refresh Logs ", -1)),
                    createVNode(unref(render), {
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    _cache[9] || (_cache[9] = createBaseVNode("label", { class: "text-sm font-medium text-default whitespace-nowrap" }, "Show All", -1)),
                    createVNode(unref(ue), {
                      modelValue: viewMoreLogs.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => viewMoreLogs.value = $event),
                      class: normalizeClass([viewMoreLogs.value ? "bg-secondary" : "bg-default", "mt-0.5 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"])
                    }, {
                      default: withCtx(() => [
                        _cache[8] || (_cache[8] = createBaseVNode("span", { class: "sr-only" }, "Use setting", -1)),
                        createBaseVNode("span", {
                          class: normalizeClass([viewMoreLogs.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-default shadow ring-0 transition duration-200 ease-in-out"])
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass([viewMoreLogs.value ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),
                            "aria-hidden": "true"
                          }, [..._cache[6] || (_cache[6] = [
                            createBaseVNode("svg", {
                              class: "h-3 w-3 text-muted",
                              fill: "none",
                              viewBox: "0 0 12 12"
                            }, [
                              createBaseVNode("path", {
                                d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ], -1)
                          ])], 2),
                          createBaseVNode("span", {
                            class: normalizeClass([viewMoreLogs.value ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),
                            "aria-hidden": "true"
                          }, [..._cache[7] || (_cache[7] = [
                            createBaseVNode("svg", {
                              class: "h-3 w-3 text-primary",
                              fill: "currentColor",
                              viewBox: "0 0 12 12"
                            }, [
                              createBaseVNode("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" })
                            ], -1)
                          ])], 2)
                        ], 2)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "class"])
                  ])
                ])
              ]),
              !loadingLogs.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                thisLogEntry.value !== void 0 ? (openBlock(), createElementBlock("ul", {
                  key: 0,
                  ref_key: "logContainer",
                  ref: logContainer,
                  role: "list",
                  class: "divide-y divide-default h-96 overflow-y-scroll"
                }, [
                  !viewMoreLogs.value && !loadingMoreLogs.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(thisLogEntry.value.output.split("\n"), (line, idx) => {
                    return openBlock(), createElementBlock("li", {
                      key: idx,
                      class: normalizeClass(["m-1 block text-sm leading-6 text-default", logColor(line)])
                    }, toDisplayString(line), 3);
                  }), 128)) : createCommentVNode("", true),
                  viewMoreLogs.value && !loadingMoreLogs.value ? (openBlock(), createElementBlock("li", _hoisted_15, " All Logs ")) : createCommentVNode("", true),
                  viewMoreLogs.value && !loadingMoreLogs.value ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(allLogsForThisTask.value.split("\n"), (line, idx) => {
                    return openBlock(), createElementBlock("li", {
                      key: idx,
                      class: normalizeClass(["m-1 block text-sm leading-6 text-default", logColor(line)])
                    }, toDisplayString(line), 3);
                  }), 128)) : createCommentVNode("", true),
                  loadingMoreLogs.value ? (openBlock(), createElementBlock("li", _hoisted_16, [
                    createVNode(_sfc_main$1, {
                      width: "w-20",
                      height: "h-20",
                      baseColor: "text-gray-200",
                      fillColor: "fill-gray-500"
                    })
                  ])) : createCommentVNode("", true)
                ], 512)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_sfc_main$1, {
                    width: "w-20",
                    height: "h-20",
                    baseColor: "text-gray-200",
                    fillColor: "fill-gray-500"
                  })
                ])
              ]))
            ])
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("button", {
                onClick: withModifiers(closeModal, ["stop"]),
                id: "close-view-logs-btn",
                name: "close-view-logs-btn",
                class: "btn btn-danger h-fit w-full"
              }, "Close")
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
