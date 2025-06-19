# RWMS Viewer (App Viewer Electron)

This Electron app displays a web page in a window. The URL, window title, and icon are all settable via the `config.json` file. The app can be built for Windows, macOS, and Linux with custom branding.

## Configuration

Edit `config.json` to set your desired options:

```json
{
  "url": "http://localhost:8080/", // The web page to display
  "appName": "RWMS", // The window and app name
  "appIcon": "assets/rwms_icon.png" // The window icon (PNG for Linux/Windows)
}
```

- For best results, provide icons in these formats in the `assets` folder:
  - `rwms_icon.icns` for macOS
  - `rwms_icon.ico` for Windows
  - `rwms_icon.png` for Linux

## Building the App

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set your desired configuration in `config.json` and place your icons in the `assets` folder.
3. Build for your platform:
   - **macOS:**
     ```sh
     npm run build:macos
     ```
   - **Windows:**
     ```sh
     npm run build:win
     ```
   - **Linux:**
     ```sh
     npm run build:linux
     ```
   - **All platforms:**
     ```sh
     npm run build
     ```

The output installers will be in the `dist/` folder.

## Customization

- To change the window title or icon, update `appName` and `appIcon` in `config.json`.
- To change the OS-level app name or installer icon, update `productName` and platform-specific `icon` fields in `electron-builder.json`.
- The main window is frameless and launches fullscreen by default. You can further customize this in `main.js`.

## Files

- `main.js`: Electron main process, reads config and launches the window.
- `preload.js`: Securely exposes the URL to the renderer.
- `index.html`: Renderer process, displays the web page in an iframe.
- `config.json`: Set the URL, app name, and icon here.
- `electron-builder.json`: Build configuration for installers and OS integration.

---

For more customization, edit the config, UI, or build settings as needed.
