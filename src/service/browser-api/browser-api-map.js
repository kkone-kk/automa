import Browser from 'webextension-polyfill';

const action = Browser.action || Browser.browserAction;

/** @type {{api: () => unknown, path: string; isEvent?: true}[]} */
export const browserAPIMap = [
  { api: () => Browser.tabs.get.bind(Browser.tabs), path: 'tabs.get' },
  { api: () => chrome.tabs.group.bind(chrome.tabs), path: 'tabs.group' },
  { api: () => Browser.tabs.query.bind(Browser.tabs), path: 'tabs.query' },
  { api: () => Browser.tabs.update.bind(Browser.tabs), path: 'tabs.update' },
  { api: () => Browser.tabs.create.bind(Browser.tabs), path: 'tabs.create' },
  { api: () => Browser.tabs.remove.bind(Browser.tabs), path: 'tabs.remove' },
  { api: () => Browser.tabs.reload.bind(Browser.tabs), path: 'tabs.reload' },
  { api: () => Browser.tabs.goBack.bind(Browser.tabs), path: 'tabs.goBack' },
  { api: () => Browser.tabs.setZoom.bind(Browser.tabs), path: 'tabs.setZoom' },
  {
    api: () => Browser.tabs.goForward.bind(Browser.tabs),
    path: 'tabs.goForward',
  },
  {
    api: () => Browser.tabs.captureTab.bind(Browser.tabs),
    path: 'tabs.captureTab',
  },
  {
    api: () => Browser.tabs.captureVisibleTab.bind(Browser.tabs),
    path: 'tabs.captureVisibleTab',
  },
  {
    api: () => Browser.tabs.sendMessage.bind(Browser.tabs),
    path: 'tabs.sendMessage',
  },
  {
    isEvent: true,
    api: () => Browser.tabs.onRemoved,
    path: 'tabs.onRemoved',
  },
  {
    isEvent: true,
    path: 'webNavigation.onCreatedNavigationTarget',
    api: () => Browser.webNavigation.onCreatedNavigationTarget,
  },
  {
    isEvent: true,
    path: 'webNavigation.onErrorOccurred',
    api: () => Browser.webNavigation.onErrorOccurred,
  },
  {
    path: 'webNavigation.getAllFrames',
    api: () => Browser.webNavigation.getAllFrames.bind(Browser.webNavigation),
  },
  { api: () => Browser.windows.get.bind(Browser.windows), path: 'windows.get' },
  {
    api: () => Browser.windows.update.bind(Browser.windows),
    path: 'windows.update',
  },
  {
    api: () => Browser.windows.create.bind(Browser.windows),
    path: 'windows.create',
  },
  {
    api: () => Browser.windows.getAll.bind(Browser.windows),
    path: 'windows.getAll',
  },
  {
    api: () => Browser.windows.remove.bind(Browser.windows),
    path: 'windows.remove',
  },
  {
    api: () => Browser.windows.getCurrent.bind(Browser.windows),
    path: 'windows.getCurrent',
  },
  {
    isEvent: true,
    path: 'windows.onRemoved',
    api: () => Browser.windows.onRemoved,
  },
  {
    isEvent: true,
    path: 'storage.onChanged',
    api: () => Browser.storage.onChanged,
  },
  {
    api: () => Browser.storage.local.get.bind(Browser.storage.local),
    path: 'storage.local.get',
  },
  {
    api: () => Browser.storage.local.set.bind(Browser.storage.local),
    path: 'storage.local.set',
  },
  {
    api: () => Browser.storage.local.remove.bind(Browser.storage.local),
    path: 'storage.local.remove',
  },
  {
    api: () =>
      Browser.proxy.settings.clear.bind(Browser.proxy.settings),
    path: 'proxy.settings.clear',
  },
  {
    api: () => Browser.proxy.settings.set.bind(Browser.proxy.settings),
    path: 'proxy.settings.set',
  },
  {
    isEvent: true,
    path: 'debugger.onEvent',
    api: () => chrome.debugger.onEvent,
  },
  {
    path: 'debugger.detach',
    api: () => chrome.debugger.detach.bind(chrome.debugger),
  },
  {
    path: 'debugger.attach',
    api: () => chrome.debugger.attach.bind(chrome.debugger),
  },
  {
    path: 'debugger.sendCommand',
    api: () => chrome.debugger.sendCommand.bind(chrome.debugger),
  },
  {
    path: 'permissions.contains',
    api: () => Browser.permissions.contains.bind(Browser.permissions),
  },
  {
    path: 'permissions.request',
    api: () => Browser.permissions.request.bind(Browser.permissions),
  },
  {
    path: 'cookies.get',
    api: () => Browser.cookies?.get.bind(Browser.cookies),
  },
  {
    path: 'cookies.getAll',
    api: () => Browser.cookies?.getAll.bind(Browser.cookies),
  },
  {
    path: 'cookies.remove',
    api: () => Browser.cookies?.remove.bind(Browser.cookies),
  },
  { path: 'cookies.set', api: () => Browser.cookies?.set.bind(Browser.cookies) },
  {
    path: 'downloads.search',
    api: () => Browser.downloads?.search.bind(Browser.downloads),
  },
  {
    path: 'downloads.download',
    api: () => Browser.downloads?.download.bind(Browser.downloads),
  },
  {
    isEvent: true,
    path: 'downloads.onCreated',
    api: () => Browser.downloads?.onCreated,
  },
  {
    isEvent: true,
    path: 'downloads.onDeterminingFilename',
    api: () => chrome.downloads?.onDeterminingFilename,
  },
  {
    isEvent: true,
    path: 'downloads.onChanged',
    api: () => Browser.downloads?.onChanged,
  },
  {
    path: 'browserAction.setBadgeText',
    api: () => action.setBadgeText.bind(action),
  },
  {
    path: 'notifications.create',
    api: () => Browser.notifications?.create.bind(Browser.notifications),
  },
  {
    path: 'extension.isAllowedFileSchemeAccess',
    api: () =>
      Browser.extension.isAllowedFileSchemeAccess.bind(Browser.extension),
  },
];
