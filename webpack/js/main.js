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


    $('#chart').each(function(){
      var w = $(this).parent().width(),
          h = $(this).parent().height()-(($(this).parent().height()/100)*4);
      $(this).attr("height", h);
      $(this).attr("width", w);
    });

    var data = {
        "1": {
            "row": {
                "last": "1,0728",
                "ma": "\u0410\u043a\u0442\u0438\u0432\u043d\u043e \u041f\u043e\u043a\u0443\u043f\u0430\u0442\u044c",
                "ma_class": "greenFont",
                "clock": " <\/span>"
            },
            "arrowBoxClass": "noneArrow",
            "summaryLast": "2",
            "summaryName": "EUR\/USD",
            "summaryNameAlt": "EUR\/USD",
            "summaryChange": "+0,0011 (+0,10%)",
            "summaryChangeClass": "greenFont",
            "technicalSummary": "\u0410\u043a\u0442\u0438\u0432\u043d\u043e \u041f\u043e\u043a\u0443\u043f\u0430\u0442\u044c",
            "technicalSummaryClass": "buy",
            "maBuy": 12,
            "maSell": 0,
            "tiBuy": 9,
            "tiSell": 0
        },
        "time": "2017-04-22 08:50:15 GMT"
    };


    var series = new TimeSeries();

    function renderChart(){
      var chart = new SmoothieChart({millisPerPixel:20,grid:{fillStyle:'transparent',verticalSections:10},labels:{disabled:true, fillStyle: '#000'},timestampFormatter:SmoothieChart.timeFormatter}),
        summary = data["1"].summaryLast;

      summary = parseInt(summary.replace(",", "."));

      series.append("2017-04-22 08:50:15 GMT", 1);

      canvas = document.getElementById('chart'),

      chart.addTimeSeries(series, {lineWidth:2,strokeStyle:'#2DA2E0', fillStyle: 'rgba(45, 162, 224, .2)'});
      chart.streamTo(canvas, 2000);
    }

    setInterval(renderChart, 5000)
});
