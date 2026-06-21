const fs = require('fs');
const { parse } = require('csv-parse/sync');

const fileContent = fs.readFileSync('data.csv', 'utf8');
const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

console.log(`Parsed ${records.length} rows.`);
console.log(records[0]);
