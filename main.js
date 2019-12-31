const el = require("electron");

// Enable live reload for all the files inside your project directory
require("electron-reload")(__dirname);

function createWindow() {
	//el.Menu.setApplicationMenu(null);

	let win = new el.BrowserWindow({
		width: 600,
		height: 400,
		webPreferences: {
			nodeIntegration: true
		},
		alwaysOnTop: true,
		frame: false
	});

	win.loadFile("app/index.html");
}

el.app.on("ready", createWindow);
