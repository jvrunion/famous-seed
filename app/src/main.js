/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    // var Transform = require('famous/core/Transform');
    // var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    mainContext.setPerspective(1000);

    var navSurface = new Surface({
        content: '<div>Nav Bar Surface</div>',
        size: [undefined, 400],
        classes: ['navSurface'],
        properties: {
            backgroundColor: '#666',
            textAlign: 'center',
            color: '#999'
        }
    });

    var firstSurface = new Surface({
        content: '<h3>Famo.us</h3><p>New Surface!<br>I live inside a context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p>',
        size: [undefined, 200],
        classes: ['firstSurface'],
        properties: {
            color: 'white',
            textAlign: 'center',
            width: '100%'
        }
    });

    var sideBarSurface = new Surface({
       content: '<div><h1>Side Bar Surface</h1></div>',
       size: [200, undefined],
       classes: ['sideBarSurface'],
       properties: {
            textAlign: 'center',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            backgroundColor: 'rgba(34, 34, 34, 0.5)',
            color: '#fff',
            textTransform: 'uppercase'
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
        align: [1, 0.5],
        origin: [1, 0.5]
    });

    mainContext.add(navContextContainer).add(navSurface);
    mainContext.add(centerContextContainer).add(firstSurface);
    mainContext.add(sideBarSurfaceContainer).add(sideBarSurface);
});
