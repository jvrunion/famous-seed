/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    mainContext.setPerspective(1000);

    var firstSurface = new Surface({
        content: '<h3>Famo.us</h3><p>New Surface!<br>I live inside a context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p>',
        size: [undefined, 400],
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
            border: '1px solid #cecece',
            backgroundColor: '#222',
            color: '#fff',
            textTransform: 'uppercase'
       }
    });

    var centerContextContainer = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    });

    var sideBarContextContainer = new Modifier({
        align: [1, 0.5],
        origin: [1, 0.5]
    });

    mainContext.add(centerContextContainer).add(firstSurface);
    mainContext.add(sideBarContextContainer).add(sideBarSurface);
});
