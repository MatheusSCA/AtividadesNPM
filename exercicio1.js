const express = require('express');
const app = express();
const port = 8000;

function removeDuplicates(inputArray) {
 return Array.from(new Set(inputArray));
}

app.get('/remove-duplicates', (req, res) => {
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(inputArray);
  res.json({ uniqueArray });
});
