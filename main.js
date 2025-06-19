const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");
const config = require("./config.json");

function createWindow() {
  // Read config.json for the URL
  const configPath = path.join(__dirname, "config.json");
  let url = "https://www.example.com";
  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    if (config.url) url = config.url;
  } catch (e) {
    console.error("Failed to read config.json:", e);
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: true,
    minWidth: 360,
    minHeight: 640,
    title: config.appName || "App Viewer Electron",
    icon: path.join(__dirname, config.appIcon || "assets/icons/default.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");
  win.webContents.on("did-finish-load", () => {
    win.webContents.send("set-url", url);
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
