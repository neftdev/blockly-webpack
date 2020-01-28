import Blockly from 'node-blockly/browser';

Blockly.Blocks["string_length"] = {
  init: function() {
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Returns number of letters in the provided text.");
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  }
};
