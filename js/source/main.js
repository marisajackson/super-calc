(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(display);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('.negative').click(negate);
    $('#push').click(push);
    $('.operator').click(operator);
  }

  function title(){
    var display = $('#calculator').css('display');
    if (display === 'none'){
      $('#calculator').fadeIn();
    } else {
      $('#calculator').fadeOut();
    }
  }

  function display(){
    var num = this.textContent;
    var output = $('#display').text();
    if(output === '0'){
      output = num;
    } else {
      output += num;
    }

    $('#display').text(output);
  }

  function clear(){
    var reset = this.textContent;
    if (reset === 'ce'){
      $('#display').text(0);
    } else {
      $('#queue').empty();
    }
  }

  function decimal(){
    var output = $('#display').text();
    var noDecimal = output.indexOf('.');
    if (noDecimal === -1){
      $('#display').text(output + '.');
    }
  }

  function negate(){
    var output = $('#display').text();
    $('#display').text(output * -1);
    }

  function operator(){
    var op = $(this).data('op');
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;
    var z;

    switch(op){
      case 'add':
        z = x + y;
        break;
      case 'subtract':
        z = x - y;
        break;
      case 'multiply':
        z = x * y;
        break;
      case 'divide':
        z = y / x;
        break;
      case 'exponent':
        z = Math.pow(y,x);
        break;
      case 'root':
        z = Math.sqrt(x);
        break;
      case 'factor':
        z = fact(x);
        break;
      case 'sum':
        z = sum();
    }

    $('#display').text(z);
  }

  function sum(){
    var total = 0;
    $('#queue > div').each(function(index, div){
      var x = div.textContent * 1;
      total += x;
    });

    return total;
  }

  function fact(x) {
      var product = 1;
      for(var i = 1; i <= x; i++){
        product *= i;
      }
      return product;
  }

  function push(){
    var display = $('#display').text();
    $('#display').text(0);
    var $div = $('<div>');
    $div.text(display);
    $('#queue').prepend($div);
  }


})();
