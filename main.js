//La framework completa
const { app, BrowserWindow } = require('electron');
const path = require('path'); 
//Se define la ventana de login la cual vera el usuario en primera instancia
let window;
//Se definen las caracteristicas que tendra la ventana a mostrar por electron
//Esta sera la ventana principal
function createWindow(){
    window = new BrowserWindow({
        width: 1200,
        height: 700,
        center: true,
        backgroundColor: '#fff', 
        title: 'Chilltify', 
        resizable: true,
        maximizable: true,
        autoHideMenuBar: true,
        transparent: true,
        icon: `${__dirname}./logo.png`, 
        movable: true,
        webPreferences:{
        nodeIntegration: true
        }
    })
    window.loadFile('./index.html');
}
//Se crean las comparaciones y funciones al inicio entre ventana y ventana
app.on('activate', () => {
if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
}
})
module.exports = {
    createWindow
};