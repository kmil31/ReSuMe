/*eslint no-undef: "error"*/
/*eslint-env browser*/


  $("#learnmore").click(function() { 
    // assumes element with id='button'
    $(".introduction").hide();
        $(".mainstuff").show("slow");
        
        
        $(".aboutbutton").click(function(){
            
            
            $(".aboutme").show("fast");
            $(".achievements").hide();
            $(".contact").hide();
            
        });
        
        
           $(".achievebutton").click(function(){
            
            
            $(".aboutme").hide();
            $(".achievements").show("fast");
            $(".contact").hide();
            
        });
        
        
        
           $(".contactbutton").click(function(){
            
            
            $(".aboutme").hide();
            $(".achievements").hide();
            $(".contact").show("fast");
            
        });
        
        
        
    });