import { SVG } from "@svgdotjs/svg.js";

function main() {
  const draw = SVG().addTo("body").size(500, 500);
  draw.attr("border", "solid black");
  const rect = draw.rect(100, 100).attr({ fill: "#f06" });
  rect.move(250, 250);
}

window.addEventListener("load", main);
