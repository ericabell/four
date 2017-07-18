var express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

app.listen(3000, function() {
  console.log('App running on 3000');
})

var converter = require('number-to-words');

var number = 100;
var number = 100;
var letter_count = 0;
var words = '';
var words_cleaned = '';

while( number != 4 ) {
  // convert number to words
  console.log('Number: ' + number);
  words = converter.toWords(number);
  console.log(words);
  words_cleaned = words.replace(/\s+/, '');
  words_cleaned = words_cleaned.replace(/-/, '');
  number = words_cleaned.length;
  console.log('New Number: ' + number);
}
