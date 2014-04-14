(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.button').click(push);
    $('.number').click(display);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('.negative').click(negate);
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

  function push(){
    $(this).css('box-shadow', '0px 0px 0px 0px');
  }


})();
