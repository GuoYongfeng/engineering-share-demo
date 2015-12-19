<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="/fis" prefix="fis"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%/*react dialog demo*/%>
<fis:extends name="common:page/layout/huodong-base.jsp">

    <fis:block name="block_body">
        <div id="app"></div>
    </fis:block>

    <fis:block name="block_body_js">
        <fis:script>
            require(['demo:page/dialog-demo.jsx'], function(app){
                app.init();
            });
        </fis:script>
    </fis:block>

    <fis:require name="./dialog-demo.jsp" />
</fis:extends>
