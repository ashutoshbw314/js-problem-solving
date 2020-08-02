function createHTMLtree(data) {
  let i = createHTMLtree.indent;
  let n = i.active ? "\n" : "";

  if (i.level != 0) i.increase();
  let html = i.toString() + "<ul>" + n;
  i.increase();
  
  for (let key of Object.keys(data)) {
    html += i.toString() + "<li>" + key + 
            (!Object.keys(data[key]).length ? "" :
            n + createHTMLtree(data[key]) + n + i.toString()) + "</li>" + n; 
  }

  i.decrease();
  html += i.toString() + "</ul>";
  if (i.level != 0) i.decrease();
  return html;
}

createHTMLtree.indent = {
  active: true,  
  spaces: 4,
  level: 0,
  toString() { return this.active ? " ".repeat(this.spaces * this.level) : ""; },
  increase() { this.level++; },
  decrease() { this.level--; },
};

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

console.log(createHTMLtree(data));
