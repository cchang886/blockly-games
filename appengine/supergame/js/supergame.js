/**
 * Blockly Games: supergame

/**
 * @author Test
 */
'use strict';

goog.provide('Supergame');

goog.require('supergame.soy');
goog.require('Supergame.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'supergame';

/**
 * Initialize Blockly and the supergame.  Called on page load.
 */
supergame.init = function() {
  // Render the Soy template.
  document.body.innerHTML = supergame.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
    blocklyDiv.style.height =
        (window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
  };
  onresize();
  window.addEventListener('resize', onresize);  

  Blockly.inject(document.getElementById('blockly'),
      {toolbox: document.getElementById('toolbox')});

  
};

window.addEventListener('load', supergame.init);

