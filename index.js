var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  addCategory: () => addCategory,
  addChannelToCategory: () => addChannelToCategory,
  default: () => index_default,
  generateId: () => generateId,
  getCategoryForChannel: () => getCategoryForChannel,
  removeCategory: () => removeCategory,
  removeChannelFromCategory: () => removeChannelFromCategory,
  renameCategory: () => renameCategory,
  toggleCollapsed: () => toggleCollapsed2
});
module.exports = __toCommonJS(index_exports);
var import_patcher = require("@vendetta/patcher");
var import_metro = require("@vendetta/metro");
var import_plugin2 = require("@vendetta/plugin");
var import_common2 = require("@vendetta/metro/common");
var import_toasts2 = require("@vendetta/ui/toasts");
var import_alerts2 = require("@vendetta/ui/alerts");

// src/components/Settings.tsx
var import_common = require("@vendetta/metro/common");
var import_storage = require("@vendetta/storage");
var import_plugin = require("@vendetta/plugin");
var import_alerts = require("@vendetta/ui/alerts");
var import_toasts = require("@vendetta/ui/toasts");
var {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList
} = import_common.ReactNative;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  header: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: "#72767d",
    marginBottom: 8,
    marginTop: 16
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2f3136",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8
  },
  categoryName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#dcddde"
  },
  channelCount: {
    fontSize: 12,
    color: "#72767d",
    marginRight: 12
  },
  iconBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  iconText: {
    fontSize: 18,
    color: "#72767d"
  },
  addBtn: {
    backgroundColor: "#5865f2",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    marginTop: 8
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15
  },
  emptyText: {
    color: "#72767d",
    textAlign: "center",
    marginTop: 32,
    fontSize: 14
  },
  tip: {
    color: "#72767d",
    fontSize: 12,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 18
  },
  channelPill: {
    backgroundColor: "#36393f",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 4,
    marginBottom: 4
  },
  channelPillText: {
    fontSize: 11,
    color: "#b9bbbe"
  },
  pillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    paddingLeft: 0
  },
  expandedCard: {
    backgroundColor: "#202225",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8
  },
  expandedHeader: {
    flexDirection: "row",
    alignItems: "center"
  }
});
function CategoryCard({ category }) {
  const [expanded, setExpanded] = import_common.React.useState(false);
  function handleRename() {
    (0, import_alerts.showInputAlert)({
      title: "Rename Category",
      placeholder: category.name,
      initialValue: category.name,
      confirmText: "Rename",
      onConfirm: (newName) => {
        if (!newName.trim()) return;
        renameCategory(category.id, newName);
        (0, import_toasts.showToast)(`Renamed to "${newName}"`);
      }
    });
  }
  function handleDelete() {
    (0, import_alerts.showConfirmationAlert)({
      title: "Delete Category",
      content: `Delete "${category.name}"? DMs in it won't be deleted \u2014 just uncategorised.`,
      confirmText: "Delete",
      isDangerousAction: true,
      onConfirm: () => {
        removeCategory(category.id);
        (0, import_toasts.showToast)(`Deleted "${category.name}"`);
      }
    });
  }
  return /* @__PURE__ */ import_common.React.createElement(View, { style: styles.expandedCard }, /* @__PURE__ */ import_common.React.createElement(View, { style: styles.expandedHeader }, /* @__PURE__ */ import_common.React.createElement(
    TouchableOpacity,
    {
      style: { flex: 1 },
      onPress: () => setExpanded((e) => !e),
      activeOpacity: 0.7
    },
    /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.categoryName }, expanded ? "\u25BC " : "\u25B6 ", category.name)
  ), /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.channelCount }, category.channelIds.length, " DM", category.channelIds.length !== 1 ? "s" : ""), /* @__PURE__ */ import_common.React.createElement(TouchableOpacity, { style: styles.iconBtn, onPress: handleRename }, /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.iconText }, "\u270F\uFE0F")), /* @__PURE__ */ import_common.React.createElement(TouchableOpacity, { style: styles.iconBtn, onPress: handleDelete }, /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.iconText }, "\u{1F5D1}\uFE0F"))), expanded && category.channelIds.length > 0 && /* @__PURE__ */ import_common.React.createElement(View, { style: styles.pillsRow }, category.channelIds.map((id) => /* @__PURE__ */ import_common.React.createElement(View, { key: id, style: styles.channelPill }, /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.channelPillText }, id)))), expanded && category.channelIds.length === 0 && /* @__PURE__ */ import_common.React.createElement(Text, { style: [styles.channelPillText, { marginTop: 6, color: "#72767d" }] }, "No DMs yet \u2014 long-press a DM to add it here."));
}
function Settings() {
  (0, import_storage.useProxy)(import_plugin.storage);
  function handleAddCategory() {
    (0, import_alerts.showInputAlert)({
      title: "New Category",
      placeholder: "e.g. Close Friends",
      confirmText: "Create",
      onConfirm: (name) => {
        addCategory(name);
      }
    });
  }
  const categories = import_plugin.storage.categories ?? [];
  return /* @__PURE__ */ import_common.React.createElement(ScrollView, { style: styles.container }, /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.header }, "Your Categories"), categories.length === 0 ? /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.emptyText }, "No categories yet.", "\n", "Tap the button below to create one.") : categories.map((cat) => /* @__PURE__ */ import_common.React.createElement(CategoryCard, { key: cat.id, category: cat })), /* @__PURE__ */ import_common.React.createElement(TouchableOpacity, { style: styles.addBtn, onPress: handleAddCategory, activeOpacity: 0.8 }, /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.addBtnText }, "+ New Category")), /* @__PURE__ */ import_common.React.createElement(Text, { style: styles.tip }, "\u{1F4A1} After creating a category, long-press any DM in your inbox to assign it.", "\n", "Categories appear pinned at the top of your DM list."));
}

// src/index.tsx
if (!import_plugin2.storage.categories) {
  import_plugin2.storage.categories = [];
}
function generateId() {
  return Math.random().toString(36).slice(2, 10);
}
function addCategory(name) {
  if (!name.trim()) return;
  if (import_plugin2.storage.categories.find((c) => c.name === name)) {
    (0, import_toasts2.showToast)(`Category "${name}" already exists`);
    return;
  }
  import_plugin2.storage.categories.push({
    id: generateId(),
    name: name.trim(),
    channelIds: [],
    collapsed: false
  });
}
function removeCategory(id) {
  import_plugin2.storage.categories = import_plugin2.storage.categories.filter((c) => c.id !== id);
}
function renameCategory(id, newName) {
  const cat = import_plugin2.storage.categories.find((c) => c.id === id);
  if (cat) cat.name = newName.trim();
}
function toggleCollapsed2(id) {
  const cat = import_plugin2.storage.categories.find((c) => c.id === id);
  if (cat) cat.collapsed = !cat.collapsed;
}
function addChannelToCategory(categoryId, channelId) {
  import_plugin2.storage.categories.forEach((c) => {
    c.channelIds = c.channelIds.filter((id) => id !== channelId);
  });
  const cat = import_plugin2.storage.categories.find((c) => c.id === categoryId);
  if (cat && !cat.channelIds.includes(channelId)) {
    cat.channelIds.push(channelId);
  }
}
function removeChannelFromCategory(channelId) {
  import_plugin2.storage.categories.forEach((c) => {
    c.channelIds = c.channelIds.filter((id) => id !== channelId);
  });
}
function getCategoryForChannel(channelId) {
  return import_plugin2.storage.categories.find((c) => c.channelIds.includes(channelId));
}
var PrivateChannelsList = (0, import_metro.findByDisplayName)("PrivateChannelsList") ?? (0, import_metro.findByProps)("PrivateChannelsList")?.PrivateChannelsList;
var ChannelStore = (0, import_metro.findByStoreName)("ChannelStore");
var LongPressMenu = (0, import_metro.findByProps)("openLazy", "close");
var { ActionSheetRow } = (0, import_metro.findByProps)("ActionSheetRow") ?? {};
var { View: View2, Text: Text2, TouchableOpacity: TouchableOpacity2, StyleSheet: StyleSheet2 } = import_common2.ReactNative;
var styles2 = StyleSheet2.create({
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "transparent"
  },
  categoryName: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#949cf7",
    // Discord blurple-ish, adapts with theme if you use semantic colors
    flex: 1
  },
  collapseIcon: {
    fontSize: 12,
    color: "#949cf7",
    paddingLeft: 8
  },
  categoryContainer: {
    marginBottom: 4
  }
});
function CategoryHeader({ category, onToggle }) {
  return /* @__PURE__ */ import_common2.React.createElement(TouchableOpacity2, { style: styles2.categoryHeader, onPress: onToggle, activeOpacity: 0.7 }, /* @__PURE__ */ import_common2.React.createElement(Text2, { style: styles2.categoryName }, category.name), /* @__PURE__ */ import_common2.React.createElement(Text2, { style: styles2.collapseIcon }, category.collapsed ? "\u25B6" : "\u25BC"));
}
var patches = [];
function patchDMList() {
  if (!PrivateChannelsList) {
    console.warn("[DMCategories] PrivateChannelsList not found \u2014 skipping patch");
    return;
  }
  const unpatch = (0, import_patcher.after)("render", PrivateChannelsList.prototype, (_, res) => {
    if (!res || !import_plugin2.storage.categories?.length) return res;
    const categorySections = import_plugin2.storage.categories.map((cat) => {
      const visibleChannels = cat.collapsed ? [] : cat.channelIds;
      const channelRows = visibleChannels.map((channelId) => {
        const channel = ChannelStore?.getChannel(channelId);
        if (!channel) return null;
        const label = channel.name || channel.recipients?.[0] || channelId;
        return /* @__PURE__ */ import_common2.React.createElement(View2, { key: channelId, style: { paddingHorizontal: 24, paddingVertical: 6 } }, /* @__PURE__ */ import_common2.React.createElement(Text2, { style: { color: "#dcddde", fontSize: 14 } }, label));
      });
      return /* @__PURE__ */ import_common2.React.createElement(View2, { key: cat.id, style: styles2.categoryContainer }, /* @__PURE__ */ import_common2.React.createElement(
        CategoryHeader,
        {
          category: cat,
          onToggle: () => toggleCollapsed2(cat.id)
        }
      ), channelRows);
    });
    return /* @__PURE__ */ import_common2.React.createElement(View2, { style: { flex: 1 } }, /* @__PURE__ */ import_common2.React.createElement(View2, null, categorySections), res);
  });
  patches.push(unpatch);
}
function patchContextMenu() {
  if (!LongPressMenu) {
    console.warn("[DMCategories] LongPressMenu not found \u2014 skipping context menu patch");
    return;
  }
  const unpatch = (0, import_patcher.after)("openLazy", LongPressMenu, ([lazyGetter, key, props]) => {
    if (key !== "GuildChannelUserContextMenu" && key !== "DMContextMenu") return;
    const channelId = props?.channelId ?? props?.channel?.id;
    if (!channelId) return;
    lazyGetter.then((Component) => {
      (0, import_patcher.after)("default", Component, (_, res) => {
        if (!res?.props?.children) return res;
        const existingCategory = getCategoryForChannel(channelId);
        const addToCategoryItem = import_common2.React.createElement(ActionSheetRow ?? View2, {
          key: "dmc-add",
          label: existingCategory ? `Move Category (${existingCategory.name})` : "Add to Category",
          icon: (0, import_metro.findByProps)("ic_category_16px")?.ic_category_16px,
          onPress: () => {
            LongPressMenu.close();
            if (!import_plugin2.storage.categories.length) {
              (0, import_toasts2.showToast)("No categories yet \u2014 create one in plugin settings first");
              return;
            }
            (0, import_alerts2.showInputAlert)({
              title: "Add to Category",
              placeholder: import_plugin2.storage.categories.map((c, i) => `${i + 1}. ${c.name}`).join("\n"),
              confirmText: "Enter number",
              onConfirm: (input) => {
                const idx = parseInt(input.trim(), 10) - 1;
                const cat = import_plugin2.storage.categories[idx];
                if (!cat) {
                  (0, import_toasts2.showToast)("Invalid selection");
                  return;
                }
                addChannelToCategory(cat.id, channelId);
                (0, import_toasts2.showToast)(`Added to "${cat.name}"`);
              }
            });
          }
        });
        const removeItem = existingCategory ? import_common2.React.createElement(ActionSheetRow ?? View2, {
          key: "dmc-remove",
          label: "Remove from Category",
          destructive: true,
          onPress: () => {
            LongPressMenu.close();
            removeChannelFromCategory(channelId);
            (0, import_toasts2.showToast)("Removed from category");
          }
        }) : null;
        const children = Array.isArray(res.props.children) ? [...res.props.children, addToCategoryItem, removeItem].filter(Boolean) : [res.props.children, addToCategoryItem, removeItem].filter(Boolean);
        res.props.children = children;
        return res;
      });
    });
  });
  patches.push(unpatch);
}
var index_default = {
  onLoad() {
    patchDMList();
    patchContextMenu();
  },
  onUnload() {
    patches.forEach((p) => p());
    patches.length = 0;
  },
  // Settings page accessible from the plugin toggle row in Revenge settings
  settings: Settings
};
