function createDOMTree(data) {
  let ul = document.createElement("ul");
  for (let key of Object.keys(data)) {
    let li = document.createElement("li");
    li.append(key);
    if (Object.keys(data[key]).length) {
      li.append(createDOMTree(data[key]));
    }
    ul.append(li);
  }
  return ul;
}


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

console.log(createDOMTree(data));
