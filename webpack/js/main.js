$(document).ready(function(){
    $("#chancesLine_lower, #chancesLine_higher").each(function(){
        var h = $(this).data("val");
        $(this).height(h+"%");
    });

    $(".bet-table").each(function(){
        var j = $(this).parent().index() - 1;
        var h = 0;

        for(var i=0; i<=j; i++){
            h = h + $(".sidebar_block").eq(i).height();
        }
        $(this).css("max-height", ($(window).height()-h-186));
    });
    $(document).resize(function(){
        $(".bet-table").each(function(){
            var j = $(this).parent().index() - 1;
            var h = 0;

            for(var i=0; i<=j; i++){
                h = h + $(".sidebar_block").eq(i).height();
            }
            console.log($(window).height()-h)
            $(this).css("max-height", ($(window).height()-h-186));
        });
    });
    $(".drop-menu_parent, .drop-menu_parent .btn").on("click", function(){

        $(".drop-menu_parent").removeClass("active");

        if($(this).hasClass("drop-menu_parent")){
            var $this = $(this);

        }else{
            var $this = $(this).parent();
        }

        if($this.hasClass("active")){
            $this.removeClass("active");
        }else{
            $this.addClass("active");
        }
    })

    $(".tooltip.right").each(function(){
        var h = $(this).height() / 2 + 15;
        $(this).css({
            "margin-top" : -h
        })
    });
    $(".drop-menu.right.arrow_center").each(function(){
        var w = $(this).parent().width() / 2 - 15;

        $(this).children(".arrow").css("right", w)
    });
    $(".tooltip.bottom, .tooltip.top").each(function(){
        var w = $(this).width() / 2 + 15;
        $(this).css({
            "margin-left" : -w
        })
    });

    $('html').click(function() {
        $(".drop-menu_parent").removeClass("active");
    });
    $(".drop-menu_parent").click(function(event){
        event.stopPropagation();
    });


    $('#chartdiv').each(function(){
      var w = $(this).parent().width(),
          h = $(this).parent().height()-(($(this).parent().height()/100)*4);
      $(this).attr("height", h);
      $(this).attr("width", w);
      $(this).css("height", h);
      $(this).css("width", w);
    });


    function getRandomArbitary(min, max){
      return Math.random() * (max - min) + min;
    }

    $(".up_btn").on("click", function(){
      
    });
});
