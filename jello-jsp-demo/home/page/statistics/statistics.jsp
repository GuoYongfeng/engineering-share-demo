<%@ page contentType="text/html;charset=utf-8" session="false"%>
<%@ taglib uri="/fis" prefix="fis"%>

<fis:extends name="common:page/layout/base.jsp">

    <fis:block name="block_body">
      <!-- content -->
      <div class="content" style="margin-top:0;">
          <fis:widget name="home:widget/header/header.jsp" data="统计分析"/>
          <!-- content-body -->
          <div class="content-body">
              <fis:widget name="home:widget/charts/charts.jsp" />
              <div class="divider-content"><span></span></div>
          </div><!--/content-body -->
      </div><!-- /content -->
    </fis:block>

    <fis:require name="./statistics.jsp" />
</fis:extends>
