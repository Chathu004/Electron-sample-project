const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })
// const { app, BrowserWindow } = require('electron');
// const path = require('path');
// const electronReload = require('electron-reload');

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   // Load index.html file
//   win.loadFile('index.html');
// }

// // Enable live reloading in development
// if (process.env.NODE_ENV === 'development') {
//   electronReload(__dirname, {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
//     hardResetMethod: 'exit',
//   });
// }

// // Create the window when the app is ready
// app.whenReady().then(createWindow);
