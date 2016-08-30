/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date August 29, 2016
 * 
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var canvas;
    var stage;

    // app entry function
    function init() {

        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame 


    }

    function gameLoop() {
        stage.update(); // refresh the stage container
    }

    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();