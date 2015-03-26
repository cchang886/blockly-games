How to create a new blockly game?

Firstly, Fork and clone the google blockly games from GitHub
https://github.com/google/blockly-games/wiki/Build

Then follow the below instructions:

0. required file structure

<game>.html
<game dir>
   |____ js  ------  blocks.js
          | _______  <game>.js
   |____ template.soy


1. Prepare a blocks.js file for all the blocks used in the game and put the file in appengine/<game dir>/js/blocks.js


'use strict';

goog.provide('<game>.Blocks');

goog.require('Blockly');
goog.require('BlocklyGames');
goog.require('Blockly.JavaScript');
goog.require('Blockly.Blocks.colour');
goog.require('Blockly.JavaScript.colour');
goog.require('Blockly.Blocks.lists');
goog.require('Blockly.JavaScript.lists');
goog.require('Blockly.Blocks.logic');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.Blocks.loops');
goog.require('Blockly.JavaScript.loops');
goog.require('Blockly.Blocks.math');
goog.require('Blockly.JavaScript.math');
goog.require('Blockly.Blocks.procedures');
goog.require('Blockly.JavaScript.procedures');
goog.require('Blockly.Blocks.texts');
goog.require('Blockly.JavaScript.texts');
goog.require('Blockly.Blocks.variables');
goog.require('Blockly.JavaScript.variables');
goog.require('BlocklyGames');


//Use block factory to generate  the required Blockly.Blocks[] and Blockly.JavaScript[] definitions
//And put all definitions in this file

Blockly.Blocks['<block name>'] = {
 .......
};

Blockly.JavaScript['<block name>'] = function(block) {
  .......
};

2. Prepare a closure template .soy file (e.g. template.soy) and put the file in appengine/<game dir>/


{namespace Pinball.soy}

/**
 * This is a Closure Template.
 *
 * To regenerate just English, run:
 *   make pinball-en
 *
 * To regenerate all languages, run:
 *   make languages
 */

/**
 * Translated messages for use in JavaScript.
 */
{template .messages}
  <div style="display: none">
     Pinball is an arduino-based educational toy!    
  </div>
{/template}



/**
 * Web page structure.
 */
{template .start}
  {call .messages /}
  <table id="header" width="100%">
    <tr>
      <td valign="bottom">
        <h1>
          {call BlocklyGames.soy.titleSpan}
            {param appName}
              {msg meaning="Games.pinball" desc="IBID"}Pinball{/msg}
            {/param}
          {/call}
        </h1>
      </td>
      <td class="farSide">
        <select id="languageMenu"></select>
        &nbsp;
        
      </td>
    </tr>
  </table>

  {call .toolbox /}
  <div id="blockly"></div>

  {call BlocklyGames.soy.dialog /}
  <div id="help" class="dialogHiddenContent">
    <div style="padding-bottom: 0.7ex">
      {msg meaning="Pinball.helpText"
           desc="Instructions for the pinball."}
        If you like pinball, please support us in our facebook fan page. 
      {/msg}
    </div>
    <iframe style="height: 400px; width: 100%; border: none;" src="pinball/pinball_blockly.html?lang={$ij.lang}"></iframe> 
    {call BlocklyGames.soy.ok /}
  </div>
  <div id="executeProgram" class="dialogHiddenContent">
    <div id="execute">
    </div>
    <div id="graph"><div id="graphValue"></div></div>
    {call BlocklyGames.soy.ok /}
  </div>
{/template}


/**
 * Toolboxes for each level.
 */
{template .toolbox}
<xml id="toolbox" style="display: none">
  <category name="Pinball">
    <category name="Channel">
    <block type="a_ball_passes_channel"></block>
    <block type="a_channel_is_full"></block>
    <block type="balls_pass_channel"></block>
    <block type="channels_are_full"></block>
    <block type="if_a_ball_passes_channel"></block>
    <block type="if_a_channel_is_full"></block>
    </category>
    <category name="LED">
    <block type="set_channel_led"></block>
    </category>
    <category name="Display">
    <block type="cleardisplay"></block>
    <block type="cleardisplaydigit"></block>
    <block type="setdisplay"></block>
    <block type="setdisplaydigit"></block>
    <block type="setdisplaytobinnumber"></block>
    <block type="setdisplaytodecnumber"></block>
    <block type="setdisplaytohexnumber"></block>
    <block type="setupdisplay"></block>
    </category>
  </category>
  <category name="Logic">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
  </category>
  <category name="Loops">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
    </block>
    <block type="controls_whileUntil"></block>
    <block type="controls_for">
      <value name="FROM">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="TO">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
      <value name="BY">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
    </block>
    <block type="controls_forEach"></block>
    <block type="controls_flow_statements"></block>
  </category>
  <category name="Math">
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="math_single"></block>
    <block type="math_trig"></block>
    <block type="math_constant"></block>
    <block type="math_number_property"></block>
    <block type="math_change">
      <value name="DELTA">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
    </block>
    <block type="math_round"></block>
    <block type="math_on_list"></block>
    <block type="math_modulo"></block>
    <block type="math_constrain">
      <value name="LOW">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="HIGH">
        <block type="math_number">
          <field name="NUM">100</field>
        </block>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="TO">
        <block type="math_number">
          <field name="NUM">100</field>
        </block>
      </value>
    </block>
    <block type="math_random_float"></block>
  </category>
  <category name="Text">
    <block type="text"></block>
    <block type="text_join"></block>
    <block type="text_append">
      <value name="TEXT">
        <block type="text"></block>
      </value>
    </block>
    <block type="text_length"></block>
    <block type="text_isEmpty"></block>
    <block type="text_indexOf">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">text</field>
        </block>
      </value>
    </block>
    <block type="text_charAt">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">text</field>
        </block>
      </value>
    </block>
    <block type="text_getSubstring">
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase"></block>
    <block type="text_trim"></block>
    <block type="text_print"></block>
    <block type="text_prompt_ext">
      <value name="TEXT">
        <block type="text"></block>
      </value>
    </block>
  </category>
  <category name="Lists">
    <block type="lists_create_empty"></block>
    <block type="lists_create_with"></block>
    <block type="lists_repeat">
      <value name="NUM">
        <block type="math_number">
          <field name="NUM">5</field>
        </block>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getIndex">
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_setIndex">
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getSublist">
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR">list</field>
        </block>
      </value>
    </block>
  </category>
  <category name="Colour">
    <block type="colour_picker"></block>
    <block type="colour_random"></block>
    <block type="colour_rgb">
      <value name="RED">
        <block type="math_number">
          <field name="NUM">100</field>
        </block>
      </value>
      <value name="GREEN">
        <block type="math_number">
          <field name="NUM">50</field>
        </block>
      </value>
      <value name="BLUE">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
    </block>
    <block type="colour_blend">
      <value name="COLOUR1">
        <block type="colour_picker">
          <field name="COLOUR">#ff0000</field>
        </block>
      </value>
      <value name="COLOUR2">
        <block type="colour_picker">
          <field name="COLOUR">#3333ff</field>
        </block>
      </value>
      <value name="RATIO">
        <block type="math_number">
          <field name="NUM">0.5</field>
        </block>
      </value>
    </block>
  </category>
  <category name="Variables" custom="VARIABLE"></category>
  <category name="Functions" custom="PROCEDURE"></category>
</xml>
{/template}


/**
 * Readonly Blockly in an iframe.
 */
{template .readonly}
  {call .messages /}
  <div id="blockly"></div>
{/template}


3. Prepare <game>.html file and create a CSS file (style.css) in <game dir>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="google" value="notranslate">
  <meta name="viewport" content="dpi=device-dpi, width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Blockly Games : <game> </title>
  <link rel="stylesheet" type="text/css" href="common/common.css">
  <link rel="stylesheet" type="text/css" href="<game dir>/style.css">
  <script type="text/javascript" src="common/boot.js"></script>
</head>
<body>
</body>
</html>



4. Prepare <game>.js file and put the file in appengine/<game dir>/js/

  Use Pinball game as an example

/**
 * Blockly Games: Pinball

/**
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Pinball');

goog.require('Pinball.soy');
goog.require('Pinball.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'pinball';

/**
 * Initialize Blockly and the pinball.  Called on page load.
 */
Pinball.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Pinball.soy.start({}, null,
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

window.addEventListener('load', Pinball.init);



5. Modify Makefile

   add the following paragraph

<game>-en: common-en
	$(SOY_COMPILER) --outputPathFormat appengine/<game dir>/generated/en/soy.js --srcs appengine/<game dir>/template.soy
	python build-app.py <game> en

6. type "make <game>-en" in the prompt


