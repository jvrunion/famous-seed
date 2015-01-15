/*globals define*/
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Easing = require('famous/transitions/Easing');

    /*
     * @name ContentView
     * @constructor
     * @description
     */

    function ContentView() {
        View.apply(this, arguments);
        var mainContext = Engine.createContext();
        var surface = new Surface({
          size: [25, undefined],
          properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'rgb(161, 161, 161)'
          }
        });

        var stateModifier = new StateModifier();

        mainContext.add(stateModifier).add(surface);

        stateModifier.setTransform(
          Transform.translate(300, 0, 0),
          { duration: 1000, curve: Easing.inOutBack}
        );
    }

    ContentView.prototype = Object.create(View.prototype);
    ContentView.prototype.constructor = ContentView;

    ContentView.DEFAULT_OPTIONS = {
    };

    module.exports = ContentView;
});
