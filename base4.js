if(!jQuery){
  console.log('Base4 adding jQuery to work.');
  //return;
     var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

  //form variables are stored here
  theBase4Vals={};


  //this is your form action to send to your email
  function go1(){
     

      var $inputs = $('.base4 :input, .base4 select');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        values[this.id] = $(this).val();
    });
    theBase4Vals= values;
    theBase4Vals['siteUrl']=window.location.href;
     theBase4Vals['base4Email']=$('.base4').attr('email');
     console.log('email notif will be sent to'+ theBase4Vals['base4Email'] ); 

    $.getJSON( "http://thecoded.com/cloud/base4.php?callback=?",
      theBase4Vals,
       function( data ) {
      var items = [];
      console.log('jsonp complete')
    })

   
      //console.log('blah!');
  }





