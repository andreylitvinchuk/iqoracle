$(document).ready(function(){
  var chartData = generateChartData();

  function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 1000);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 1000; i++) {
      var newDate = new Date(firstDate);
      newDate.setHours(0, i, 0, 0);

      var a = Math.round(Math.random() * (40 + i)) + 100 + i;
      var b = Math.round(Math.random() * 100000000);

      chartData.push({
        date: newDate,
        value: a,
        volume: b
      });
    }
    return chartData;
  }

  var a_last = 0;
  function addDataPoint() {
    var dataProvider = chart.dataSets[0].dataProvider;
    var newDate = new Date(dataProvider[dataProvider.length - 1].date.getTime());
    newDate.setHours(newDate.getHours(), newDate.getMinutes() + 1, newDate.getSeconds());
    var a = Math.round(Math.random() * (40 + 1000)) + 100 + 1000;
    var b = Math.round(Math.random() * 100000000);
    dataProvider.push({
      date: newDate,
      value: a
    });
    dataProvider.shift();

    if(a_last>a){
      $(".table_tools tr.active").removeClass("up").addClass("down")
    }else{
      $(".table_tools tr.active").removeClass("down").addClass("up")
    }

    a_last = a;
    $(".table_tools tr.active td:last-child").html(a);
  }

  function setThresholds() {

  }

  var chart = AmCharts.makeChart("chartdiv", {

    type: "stock",
    "theme": "none",
    pathToImages: "http://www.amcharts.com/lib/3/images/",
    glueToTheEnd: false,

    categoryAxesSettings: {
      minPeriod: "mm"
    },

    dataSets: [{
      color: "#2DA2E0",
      fieldMappings: [{
        fromField: "value",
        toField: "value"
      }, {
        fromField: "volume",
        toField: "volume"
      }],

      dataProvider: chartData,
      categoryField: "date"
    }],

    panels: [{

        stockGraphs: [{
          id: "g1",
          valueField: "value",
          type: "smoothedLine",
          lineThickness: 2,
          bullet: "round"
        }],
            showCategoryAxis: false,
            title: "",
            percentHeight: 70,


        valueAxes: [{
          guides: [{
            value: 1100,
            position: "right",
            dashLength: 5
          }, {
            value: 1550,
            position: "right",
            dashLength: 5
          }]
        }]
      }],

    chartScrollbarSettings: {
      graph: "g1",
      usePeriod: "10mm",
      position: "bottom"
    },

    chartCursorSettings: {
      valueBalloonsEnabled: true
    },

    panelsSettings: {
      usePrefixes: true
    }
  });

  setInterval(function() {
    // add data point
    addDataPoint();

    // update indictors
    chart.panels[0].valueAxes[0].guides[0].value = Math.round(Math.random() * 500) + 1000;
    chart.panels[0].valueAxes[0].guides[1].value = chart.panels[0].valueAxes[0].guides[0].value + Math.round(Math.random() * 400) + 200;

    chart.validateData();
  }, 2000);
})
