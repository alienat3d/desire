export function workflowMeasurements() {
  // === MOVING .WORKFLOW__ITEM--MEASUREMENTS INSIDE OF .WORKFLOW__ITEMS-BOX FOR ADAPTIVE ===
  if ($(window).width() < 651) {
    $(".workflow__item--measurements").appendTo($(".workflow__items-box"));
  }
  // === / MOVING .WORKFLOW__ITEM--MEASUREMENTS INSIDE OF .WORKFLOW__ITEMS-BOX FOR ADAPTIVE ===
}