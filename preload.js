const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onSetUrl: (callback) =>
    ipcRenderer.on("set-url", (event, url) => callback(url)),
});
