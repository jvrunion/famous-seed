/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    // var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');
    // var ImageSurface = require('famous/surfaces/ImageSurface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1000);

    var firstSurface = new Surface({
      content: '<h3>Famo.us</h3><p>New Surface!<br>I live inside a context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p>',
      size: [1000, 600],
      classes: ['firstSurface']
    });

    // firstSurface.setContent('<h1>HELLO WORLD</h1>');

    // var logo = new ImageSurface({
    //     size: [200, 200],
    //     content: '/content/images/avatar.png',
    //     classes: ['backfaceVisibility']
    // });
    // var initialTime = Date.now();
    var centerContextContainer = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    });
    // var centerSpinModifier = new Modifier({
    //     align: [0.5, 0.5],
    //     origin: [0.5, 0.5],
    //     transform: function() {
    //         return Transform.rotateY(.002 * (Date.now() - initialTime));
    //     }
    // });

    // mainContext.add(centerSpinModifier).add(logo);
    mainContext.add(centerContextContainer).add(firstSurface);

});
