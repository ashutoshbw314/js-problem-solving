function rgbToHex(col) {
  return "#" + col
    .match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)
    .slice(1)
    .map(v => Number(v).toString(16).padStart(2, "0"))
    .join("");
}
