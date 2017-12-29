const {app, BrowserWindow} = require('electron')

let mainWindow = null

app.on('ready', () => {
  console.log('Hello from Electron')
  mainWindow = new BrowserWindow({ show: false })
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('close',  () => {
    mainWindow = null
  })
})
