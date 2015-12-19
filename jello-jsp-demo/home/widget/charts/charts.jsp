<%@ page contentType="text/html;charset=utf-8" session="false"%>
<%@ taglib uri="/fis" prefix="fis"%>

<fis:require id="common:widget/ui/lib/highcharts/4.1.9/highcharts.js" />
<div class="row-fluid">
    <div class="span4">
      <div class="box corner-all">
          <div class="box-header grd-blue color-white corner-top">
              <div class="header-control">
                  <a class="custom-action"><i class="icofont-cog"></i></a>
                  <a data-box="collapse"><i class="icofont-caret-up"></i></a>
                  <a data-box="close" data-hide="bounceOutRight">×</a>
              </div>
              <span>关键指标</span>
          </div>
          <div class="box-body corner-bottom">
              <div id="chartsOne" style="min-width:380px;height:400px"></div>
          </div>
      </div>
    </div>
    <div class="span4">
        <div class="box corner-all">
            <div class="box-header grd-win8 color-white">
                <div class="header-control">
                    <a class="custom-action"><i class="icofont-cog"></i></a>
                    <a data-box="collapse"><i class="icofont-caret-up"></i></a>
                    <a data-box="close" data-hide="bounceOutRight">×</a>
                </div>
                <span>总账分析</span>
            </div>
            <div class="box-body" style="display: block;">
                <div id="chartsTwo" style="min-width:380px;height:400px"></div>
            </div>
        </div>
    </div>
    <div class="span4">
        <div class="box corner-all">
            <div class="box-header grd-sky color-white">
                <div class="header-control">
                    <a class="custom-action"><i class="icofont-cog"></i></a>
                    <a data-box="collapse"><i class="icofont-caret-up"></i></a>
                    <a data-box="close" data-hide="bounceOutRight">×</a>
                </div>
                <span>历年财务状态</span>
            </div>
            <div class="box-body" style="display: block;">
                <div id="chartsThree" style="min-width:380px;height:400px"></div>
            </div>
        </div>
    </div>
</div>

<div class="row-fluid">
    <div class="span4">
        <div class="box corner-all">
            <div class="box-header grd-orange color-white">
                <div class="header-control">
                    <a class="custom-action"><i class="icofont-cog"></i></a>
                    <a data-box="collapse"><i class="icofont-caret-up"></i></a>
                    <a data-box="close" data-hide="bounceOutRight">×</a>
                </div>
                <span>部门发展状态</span>
            </div>
            <div class="box-body" style="display: block;">
                <div id="chartsFour" style="min-width:380px;height:400px"></div>
            </div>
        </div>
    </div>
    <div class="span4">
        <div class="box corner-all">
            <div class="box-header grd-purple color-white">
                <div class="header-control">
                    <a class="custom-action"><i class="icofont-cog"></i></a>
                    <a data-box="collapse"><i class="icofont-caret-up"></i></a>
                    <a data-box="close" data-hide="bounceOutRight">×</a>
                </div>
                <span>销售业绩</span>
            </div>
            <div class="box-body" style="display: block;">
                <div id="chartsFive" style="min-width:380px;height:400px"></div>
            </div>
        </div>
    </div>
    <div class="span4">
        <div class="box corner-all">
            <div class="box-header grd-red color-white">
                <div class="header-control">
                    <a class="custom-action"><i class="icofont-cog"></i></a>
                    <a data-box="collapse"><i class="icofont-caret-up"></i></a>
                    <a data-box="close" data-hide="bounceOutRight">×</a>
                </div>
                <span>状态监控</span>
            </div>
            <div class="box-body" style="display: block;">
                <div id="chartsSix" style="min-width:380px;height:400px"></div>
            </div>
        </div>
    </div>
</div>

<fis:script>
  require(['./charts.js'], function( charts ){
    // TODO
    charts.init();
  })
</fis:script>
