var express = require('express');
var converter = require('number-to-words');

const app = express();


app.get('/:number', function(req, res) {
  console.log('received ' + req.params.number );
  // find the path from number to 4.
  res.json(findPath(parseInt(req.params.number)));
});

app.listen(3000, function() {
  console.log('App running on 3000');
})

// var number = 100;
// var number = 100;


function findPath(num) {
  // input: number
  // output: an array with the list of numbers back to 4
  var letter_count = 0;
  var words = '';
  var words_cleaned = '';

  var pathToFour = [];
  pathToFour.push(num);

  while( num != 4 ) {
    // convert number to words
    words = converter.toWords(num);
    words_cleaned = words.replace(/\s+/, '');
    words_cleaned = words_cleaned.replace(/-/, '');
    num = words_cleaned.length;
    pathToFour.push(num);
  }

  return(pathToFour);

}
