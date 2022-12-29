const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function onReady() {
  win = new BrowserWindow({width: 1080, height: 720})
  win.loadURL(url.format({
    pathname: path.join(
      __dirname,
      'dist/ultra-marketplace/index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', onReady);
