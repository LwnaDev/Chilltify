/**
* SPANISH
* Autor: LwnaDev
* Institucion o Empresa: NONE
* Ultima Modificación: 30/12/2021 : 07:35 PM
* Descripción: Aplicación de musica estilo Spotify desarrollada en Visual Studio Code con framework
*              Electronjs (Javascript, HTML, CSS, Nodejs), con el nombre Chilltify.
* Objetivo: Crear un software que almacene ciertas canciones de Diana Sessions de Riot Games Music
**/
//Llamamos a createwindow de main.js
const {createWindow} = require('./main')
const {app} = require('electron')
const path = require('path');
//Llamamos al modulo de electron
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules/.bin/electron')
});
app.allowRendererProcessReuse = false;
//Para Mac Os "darwin", cuando se pulse salir, debera invocar el metodo quit del objeto app 
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {  
        app.quit()
    }
});
//Para Mac Os, cuando la aplicacion se quede en el dock este debera reactivarse con el evento activate
app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});
