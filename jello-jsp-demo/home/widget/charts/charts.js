
var highcharts = require('common:widget/ui/lib/highcharts/4.1.9/highcharts.js');

var config = {
  credits:{
       enabled:false // 禁用版权信息
  },
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
};

module.exports = {
  init: function(){
    this.chartsOne();
    this.chartsTwo();
    this.chartsThree();
    this.chartsFour();
    this.chartsFive();
    this.chartsSix();
  },
  chartsOne: function(){

    var chartsOneConfigData = {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: [
                '10月',
                '11月',
                '12月',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: '关键指标'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
        {
            name: '资产负债率',
            data: [49.9,49.9,49.9]
        },
        {
            name: '毛利率',
            data: [83.6,83.6,83.6]
        },
        {
            name: '流动比率',
            data: [90,90,90]
        }
      ]
    };

    $.extend(chartsOneConfigData, config);

    $('#chartsOne').highcharts(chartsOneConfigData);

  },
  chartsTwo: function(){
    var data = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '关键指标',
            data: [
                ['销售收入',   45.0],
                ['总资产',       26.8],
                {
                    name: '流动资金',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['短期负债', 10]
            ]
        }]
    };

    $.extend(data, config);
    $('#chartsTwo').highcharts(data);

  },
  chartsThree: function(){
    var data = {
      chart: {
          type: 'spline'
      },
      xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: { // don't display the dummy year
              month: '%e. %b',
              year: '%b'
          }
      },
      yAxis: {
          title: {
              text: '历年财务状态'
          },
          min: 0
      },
      tooltip: {
          formatter: function() {
                  return '<b>'+ this.series.name +'</b><br/>'+
                  Highcharts.dateFormat('%e. %b', this.x) +': '+ this.y +' m';
          }
      },

      series: [{
          name: '2013年指标',
          data: [
              [Date.UTC(1970,  9, 27), 0   ],
              [Date.UTC(1970, 10, 10), 0.6 ],
              [Date.UTC(1970, 10, 18), 0.7 ],
              [Date.UTC(1970, 11,  2), 0.8 ],
              [Date.UTC(1970, 11,  9), 0.6 ],
              [Date.UTC(1970, 11, 16), 0.6 ],
              [Date.UTC(1970, 11, 28), 0.67],
              [Date.UTC(1971,  0,  1), 0.81],
              [Date.UTC(1971,  0,  8), 0.78],
              [Date.UTC(1971,  0, 12), 0.98],
              [Date.UTC(1971,  0, 27), 1.84],
              [Date.UTC(1971,  1, 10), 1.80],
              [Date.UTC(1971,  1, 18), 1.80],
              [Date.UTC(1971,  1, 24), 1.92],
              [Date.UTC(1971,  2,  4), 2.49],
              [Date.UTC(1971,  2, 11), 2.79],
              [Date.UTC(1971,  2, 15), 2.73],
              [Date.UTC(1971,  2, 25), 2.61],
              [Date.UTC(1971,  3,  2), 2.76],
              [Date.UTC(1971,  3,  6), 2.82],
              [Date.UTC(1971,  3, 13), 2.8 ],
              [Date.UTC(1971,  4,  3), 2.1 ],
              [Date.UTC(1971,  4, 26), 1.1 ],
              [Date.UTC(1971,  5,  9), 0.25],
              [Date.UTC(1971,  5, 12), 0   ]
          ]
      }, {
          name: '2014年指标',
          data: [
              [Date.UTC(1970,  9, 18), 0   ],
              [Date.UTC(1970,  9, 26), 0.2 ],
              [Date.UTC(1970, 11,  1), 0.47],
              [Date.UTC(1970, 11, 11), 0.55],
              [Date.UTC(1970, 11, 25), 1.38],
              [Date.UTC(1971,  0,  8), 1.38],
              [Date.UTC(1971,  0, 15), 1.38],
              [Date.UTC(1971,  1,  1), 1.38],
              [Date.UTC(1971,  1,  8), 1.48],
              [Date.UTC(1971,  1, 21), 1.5 ],
              [Date.UTC(1971,  2, 12), 1.89],
              [Date.UTC(1971,  2, 25), 2.0 ],
              [Date.UTC(1971,  3,  4), 1.94],
              [Date.UTC(1971,  3,  9), 1.91],
              [Date.UTC(1971,  3, 13), 1.75],
              [Date.UTC(1971,  3, 19), 1.6 ],
              [Date.UTC(1971,  4, 25), 0.6 ],
              [Date.UTC(1971,  4, 31), 0.35],
              [Date.UTC(1971,  5,  7), 0   ]
          ]
      }, {
          name: '2015年指标',
          data: [
              [Date.UTC(1970,  9,  9), 0   ],
              [Date.UTC(1970,  9, 14), 0.15],
              [Date.UTC(1970, 10, 28), 0.35],
              [Date.UTC(1970, 11, 12), 0.46],
              [Date.UTC(1971,  0,  1), 0.59],
              [Date.UTC(1971,  0, 24), 0.58],
              [Date.UTC(1971,  1,  1), 0.62],
              [Date.UTC(1971,  1,  7), 0.65],
              [Date.UTC(1971,  1, 23), 0.77],
              [Date.UTC(1971,  2,  8), 0.77],
              [Date.UTC(1971,  2, 14), 0.79],
              [Date.UTC(1971,  2, 24), 0.86],
              [Date.UTC(1971,  3,  4), 0.8 ],
              [Date.UTC(1971,  3, 18), 0.94],
              [Date.UTC(1971,  3, 24), 0.9 ],
              [Date.UTC(1971,  4, 16), 0.39],
              [Date.UTC(1971,  4, 21), 0   ]
          ]
      }]
    };

    $.extend(data, config);
    $('#chartsThree').highcharts(data);
  },
  chartsFour: function(){
    var chartsFourConfigData = {
      chart: {
           type: 'area'
       },
       xAxis: {
           categories: ['2012', '2013', '2014', '2015', '2016'],
           tickmarkPlacement: 'on',
           title: {
               enabled: false
           }
       },
       yAxis: {
           title: {
               text: 'Percent'
           }
       },
       tooltip: {
           pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
           shared: true
       },
       plotOptions: {
           area: {
               stacking: 'percent',
               lineColor: '#ffffff',
               lineWidth: 1,
               marker: {
                   lineWidth: 1,
                   lineColor: '#ffffff'
               }
           }
       },
       series: [{
           name: '部门A',
           data: [809, 947, 1402, 3634, 5268]
       }, {
           name: '部门B',
           data: [111, 133, 221, 767, 1766]
       }, {
           name: '部门C',
           data: [276, 408, 547, 729, 628]
       }, {
           name: '部门D',
           data: [54, 156, 339, 818, 1201]
       }, {
           name: '部门E',
           data: [2, 6, 13, 30, 46]
       }]
    };

    $.extend(chartsFourConfigData, config);
    $('#chartsFour').highcharts(chartsFourConfigData);

  },
  chartsFive: function(){
    var data = {
      chart: {
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 25,
                depth: 70
            }
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: Highcharts.getOptions().lang.shortMonths
        },
        yAxis: {
            opposite: true
        },
        series: [{
            name: '销售业绩',
            data: [4, 6, 15,5,8,3.2,10,20,14]
        }]
    };

    $.extend(data, config);
    $('#chartsFive').highcharts(data);

  },
  chartsSix: function(){

    var data = {
      chart: {
            type: 'spline',
            inverted: true
        },
        xAxis: {
            reversed: false,
            title: {
                enabled: true,
                text: '压力值'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: '服务器状态监控'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            },
            lineWidth: 2
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} km: {point.y}°C'
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: '服务器压力',
            data: [[0, 15], [10, 50], [20, 56.5], [30, 46.5], [40, 22.1],
                [50, 2.5], [60, 27.7], [70, 55.7], [80, 76.5]]
        }]
    };

    $.extend(data, config);

    $('#chartsSix').highcharts(data);

  }
};
