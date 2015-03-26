/**
 * Blockly Games: Supergame
 *
 
/**
 * 
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Supergame.Blocks');

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


Blockly.Blocks['a_ball_passes_channel'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("a ball passes channel")
        .appendField(new Blockly.FieldDropdown([["1", "channel 1"], ["2", "channel 2"], ["3", "channel 3"], ["4", "channel 4"], ["5", "channel 5"], ["6", "channel 6"], ["7", "channel 7"], ["8", "channel 8"]]), "channel");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('a ball passes channel');
  }
};

Blockly.JavaScript['a_ball_passes_channel'] = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['a_channel_is_full'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Channel ")
        .appendField(new Blockly.FieldDropdown([["1", "channel 1"], ["2", "channel 2"], ["3", "channel 3"], ["4", "channel 4"], ["5", "channel 5"], ["6", "channel 6"], ["7", "channel 7"], ["8", "channel 8"]]), "channel")
        .appendField("is full");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('a channel is full ');
  }
};

Blockly.JavaScript['a_channel_is_full'] = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['balls_pass_channel'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("balls pass channel")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 1")
        .appendField("1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 2")
        .appendField("2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 3")
        .appendField("3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 4")
        .appendField("4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 5")
        .appendField("5")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 6")
        .appendField("6")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 7")
        .appendField("7")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 8")
        .appendField("8");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};



Blockly.JavaScript['balls_pass_channel'] = function(block) {
  var checkbox_channel_1 = block.getFieldValue('channel 1') == 'TRUE';
  var checkbox_channel_2 = block.getFieldValue('channel 2') == 'TRUE';
  var checkbox_channel_3 = block.getFieldValue('channel 3') == 'TRUE';
  var checkbox_channel_4 = block.getFieldValue('channel 4') == 'TRUE';
  var checkbox_channel_5 = block.getFieldValue('channel 5') == 'TRUE';
  var checkbox_channel_6 = block.getFieldValue('channel 6') == 'TRUE';
  var checkbox_channel_7 = block.getFieldValue('channel 7') == 'TRUE';
  var checkbox_channel_8 = block.getFieldValue('channel 8') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['channels_are_full'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Channel ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 1")
        .appendField("1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 2")
        .appendField("2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 3")
        .appendField("3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 4")
        .appendField("4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 5")
        .appendField("5")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 6")
        .appendField("6")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 7")
        .appendField("7")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "channel 8")
        .appendField("8")
        .appendField("are full");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};


Blockly.JavaScript['channels_are_full'] = function(block) {
  var checkbox_channel_1 = block.getFieldValue('channel 1') == 'TRUE';
  var checkbox_channel_2 = block.getFieldValue('channel 2') == 'TRUE';
  var checkbox_channel_3 = block.getFieldValue('channel 3') == 'TRUE';
  var checkbox_channel_4 = block.getFieldValue('channel 4') == 'TRUE';
  var checkbox_channel_5 = block.getFieldValue('channel 5') == 'TRUE';
  var checkbox_channel_6 = block.getFieldValue('channel 6') == 'TRUE';
  var checkbox_channel_7 = block.getFieldValue('channel 7') == 'TRUE';
  var checkbox_channel_8 = block.getFieldValue('channel 8') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['if_a_ball_passes_channel'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("If a ball passes channel")
        .appendField(new Blockly.FieldDropdown([["1", "channel 1"], ["2", "channel 2"], ["3", "channel 3"], ["4", "channel 4"], ["5", "channel 5"], ["6", "channel 6"], ["7", "channel 7"], ["8", "channel 8"]]), "channel");
    this.appendStatementInput("do_block")
        .setCheck("null")
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['if_a_ball_passes_channel'] = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  var statements_do_block = Blockly.JavaScript.statementToCode(block, 'do_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['if_a_channel_is_full'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("If Channel")
        .appendField(new Blockly.FieldDropdown([["1", "channel 1"], ["2", "channel 2"], ["3", "channel 3"], ["4", "channel 4"], ["5", "channel 5"], ["6", "channel 6"], ["7", "channel 7"], ["8", "channel 8"]]), "channel")
        .appendField("is full");
    this.appendStatementInput("do_block")
        .setCheck("null")
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['if_a_channel_is_full'] = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  var statements_do_block = Blockly.JavaScript.statementToCode(block, 'do_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};


Blockly.Blocks['set_channel_led'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(0);
    this.appendDummyInput()
        .appendField("Set Channel")
        .appendField(new Blockly.FieldDropdown([["1", "channel1"], ["2", "channel2"], ["3", "channel3"], ["4", "channel4"], ["5", "channel5"], ["6", "channel6"], ["7", "channel7"], ["8", "channel8"]]), "channel")
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["ON", "on"], ["OFF", "off"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['set_channel_led'] = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  var dropdown_status = block.getFieldValue('status');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['cleardisplay'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("clearDisplay");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['cleardisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['cleardisplaydigit'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("clear digit ")
        .appendField(new Blockly.FieldDropdown([["1", "digit1"], ["2", "digit2"], ["3", "digit3"], ["4", "digit4"], ["5", "digit5"], ["6", "digit6"], ["7", "digit7"], ["8", "digit8"]]), "digit")
        .appendField(" display");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['cleardisplaydigit'] = function(block) {
  var dropdown_digit = block.getFieldValue('digit');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['setdisplay'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("set display digits")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit1")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit2")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit3")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit4")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit5")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit6")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit7")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "digit8");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['setdisplay'] = function(block) {
  var dropdown_digit1 = block.getFieldValue('digit1');
  var dropdown_digit2 = block.getFieldValue('digit2');
  var dropdown_digit3 = block.getFieldValue('digit3');
  var dropdown_digit4 = block.getFieldValue('digit4');
  var dropdown_digit5 = block.getFieldValue('digit5');
  var dropdown_digit6 = block.getFieldValue('digit6');
  var dropdown_digit7 = block.getFieldValue('digit7');
  var dropdown_digit8 = block.getFieldValue('digit8');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['setdisplaydigit'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("set Digit")
        .appendField(new Blockly.FieldDropdown([["1", "digit1"], ["2", "digit2"], ["3", "digit3"], ["4", "digit4"], ["5", "digit5"], ["6", "digit6"], ["7", "digit7"], ["8", "digit8"]]), "digit")
        .appendField(" to ")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"]]), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['setdisplaydigit'] = function(block) {
  var dropdown_digit = block.getFieldValue('digit');
  var dropdown_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['setdisplaytobinnumber'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("display binary number");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['setdisplaytobinnumber'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['setdisplaytodecnumber'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("display decimal number");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['setdisplaytodecnumber'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['setdisplaytohexnumber'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("display hex number");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['setdisplaytohexnumber'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Blocks['setupdisplay'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("set display")
        .appendField(new Blockly.FieldDropdown([["OFF", "off"], ["ON", "on"]]), "status")
        .appendField(" intensity")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "8"]]), "intensity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['setupdisplay'] = function(block) {
  var dropdown_status = block.getFieldValue('status');
  var dropdown_intensity = block.getFieldValue('intensity');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};
