$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentenceInput").val();
    var words = sentence.split(' ');
    console.log(words);

    var newArray = [];

    words.forEach(function(word){
      if ( word.length >= 3){
        newArray.push(word);
      }
    });
      newArray.reverse();

    console.log(newArray);
  });

});
