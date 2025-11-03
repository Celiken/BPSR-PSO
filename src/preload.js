const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    closeClient: () => ipcRenderer.send('close-client'),
    onTogglePassthrough: (callback) => ipcRenderer.on('passthrough-toggled', (_event, value) => callback(value)),
    onClearData: (callback) => ipcRenderer.on('clear-data', (_event) => callback()),
    onTogglePause: (callback) => ipcRenderer.on('toggle-pause', (_event) => callback()),
    onSortDamage: (callback) => ipcRenderer.on('sort-damage', (_event) => callback()),
    onSortHealing: (callback) => ipcRenderer.on('sort-healing', (_event) => callback()),
});
