/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var ContentView = require('views/ContentView');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Easing = require('famous/transitions/Easing');

    // create the main context
    var mainContext = Engine.createContext();

    mainContext.setPerspective(1000);

    var navSurface = new Surface({
        content: '<div><h3 class="riser">Nav Bar Surface</h3><p>Nav Surface!<br>I live inside a nav context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p></div>',
        size: [undefined, undefined],
        classes: ['navSurface'],
        properties: {
            backgroundColor: 'rgb(0, 0, 0)',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '100',
            fontSize: '1em',
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
       content: '<div><h1>Responsive</h1><h2>Sidebar Surface!</h2><p><ul><li>I live inside a sidebar context.</li><li>I am Responsive without @media queries!</li></ul><h1>Heading 1</h2><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5></div>',
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
        fontWeight: '100',
        cursor: 'pointer',
        padding: '15px 20px 30px',
        lineHeight: '.98em'
        }
    });

    var navContextContainer = new Modifier({
        align: [0.5, 0],
        origin: [0.5, 0]
    });

    var centerContextContainer = new Modifier({
        align: [0.5, .76],
        origin: [0.5, 0.5]
    });

    var sideBarSurfaceContainer = new Modifier({
        align: [0, 0.5],
        origin: [0, 0.5]
    });

    sideBarSurface.on('click', function() {
      sideBarSurface.setProperties({
        backgroundColor: 'rgba(0, 0, 0, 0.95)'
      });
    });

    mainContext.add(navContextContainer).add(navSurface);
    mainContext.add(centerContextContainer).add(mainSurface);
    mainContext.add(sideBarSurfaceContainer).add(sideBarSurface);
    // launch the content view
    ContentView();
});
