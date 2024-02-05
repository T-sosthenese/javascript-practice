let destination = {x: 1}, source = {y: 2, z: 3};

for (let key of Object.keys(source)) {
  destination[key] = source[key];
}
console.log(destination);