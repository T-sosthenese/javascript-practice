let table = new Array(10); // 10 rows of the table

for (let i = 0; i < table.length; i++) {
  table[i] = new Array(10);  // Each row has 10 columns
}

// Initializing the table
for (let row = 0; row < table.length; row++) {
  for (let col = 0; col < table[row].length; col++) {
    table[row][col] = row*col;
  }
}
console.log(table);