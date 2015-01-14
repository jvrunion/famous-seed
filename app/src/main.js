/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var ContentView = require('views/ContentView');
    // var Transform = require('famous/core/Transform');
    // var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    mainContext.setPerspective(1000);

    var navSurface = new Surface({
        content: '<div><h3 class="riser">Nav Bar Surface</h3><p>Nav Surface!<br>I live inside a nav context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p></div>',
        size: [undefined, 400],
        classes: ['navSurface'],
        properties: {
            backgroundColor: 'rgb(44, 44, 44)',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '100',
            color: 'rgb(87, 185, 236)',
            padding: '2em'
        }
    });

    var mainSurface = new Surface({
        content: '<h3 class="riser">Famo.us/Angular Seed</h3><p>Main Surface!<br>I live inside a main context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p><p>Famo.us is the only JavaScript framework that includes an open source 3D layout engine fully integrated with a 3D physics animation engine that can render to DOM, Canvas, or WebGL.</p>',
        size: [undefined, 500],
        classes: ['mainSurface'],
        properties: {
            color: 'white',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '100',
            width: '100%',
            boxShadow: 'rgba(34, 34, 34, 0.34) 0px 0px 20px 10px'
        }
    });

    var sideBarSurface = new Surface({
       content: '<div><h3>Sidebar</h3><p>Sidebar Surface!<br>I live inside a sidebar context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p></div>',
       size: [300, undefined],
       classes: ['sideBarSurface'],
       properties: {
        textAlign: 'left',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderLeft: '2px solid rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(34, 34, 34, 0.93)',
        color: '#fff',
        textTransform: 'uppercase',
        textShadow: '1px solid #000',
        paddingLeft: '1em',
        paddingRight: '1em',
        fontWeight: '100'
        }
    });

    var navContextContainer = new Modifier({
        align: [0.5, 0],
        origin: [0.5, 0]
    });

    var centerContextContainer = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    });

    var sideBarSurfaceContainer = new Modifier({
        align: [0, 0.5],
        origin: [0, 0.5]
    });

    mainContext.add(navContextContainer).add(navSurface);
    mainContext.add(centerContextContainer).add(mainSurface);
    mainContext.add(sideBarSurfaceContainer).add(sideBarSurface);
    // launch the content view
    ContentView();
});
