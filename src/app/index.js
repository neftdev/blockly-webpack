import Blockly from "node-blockly/browser";

import "./blocks/string-length";

import "../styles/index.css";

var toolbox = `
<xml id="toolbox" style="display: none">
    <category name="Text">
    <block type="string_length"></block>
    </category>
</xml>
`;

var blocklyArea = document.getElementById("blocklyArea");
var blocklyDiv = document.getElementById("blocklyDiv");
var workspace = Blockly.inject(blocklyDiv, {
  toolbox,
  move: {
    scrollbars: true,
    drag: true,
    wheel: false
  },
  grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.2,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  },
  trashcan: true
});
var onresize = function() {
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  blocklyDiv.style.left = x + "px";
  blocklyDiv.style.top = y + "px";
  blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
  blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
  Blockly.svgResize(workspace);
};
window.addEventListener("resize", onresize, false);
onresize();
Blockly.svgResize(workspace);