const { app, BrowserWindow } = require("electron");
const path = require("path");
const { pathToFileURL } = require("url"); // ✅ import ini

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  const indexPath = path.join(__dirname, "dist", "index.html");

  // ✅ Konversi path Windows ke file:// URL yang benar
  win.loadURL(pathToFileURL(indexPath).href);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
