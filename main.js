const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const main = require("./AraDictImproved/main");

// import {app, BrowserWindow, ipcMain } from "electron";
// import path from "path"
// import isDev from "electron-is-dev"
// import main from "./AraDictImproved/main"


let mainWindow;


ipcMain.on("selectedWord", async (event, data) => {
    console.log(data)
    const meanings = await main(data);
    console.log(meanings)
    event.reply("selectedWord", meanings);
})


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    const startURL = isDev
        ? "http://localhost:5173"
        : `file://${path.join(__dirname, "../build/index.html")}`;


    mainWindow.loadURL(startURL);
    // mainWindow.setMenu(null);
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
})

