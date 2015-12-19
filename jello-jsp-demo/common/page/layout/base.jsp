<%@ page contentType="text/html;charset=utf-8" session="false"%>
<%@ taglib uri="/fis" prefix="fis"%>

<!DOCTYPE html>
<fis:html framework="/static/js/require.js">
    <fis:head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="renderer" content="webkit">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Jello</title>

        <fis:block name="block_head_content"></fis:block>

        <link rel="stylesheet" type="text/css" href="/static/css/common.css">

        <!--header中的css-->
        <fis:block name="block_head_css"></fis:block>

        <!--[if lte IE 8]>
        <script src="/static/js/html5.js"></script>
        <![endif]-->

        <!--header中的js-->
        <fis:block name="block_head_js"></fis:block>

        <fis:require id="common:widget/ui/lib/jquery/jquery.js" />

    </fis:head>

    <fis:body class="body">

        <!--[if lt IE 8]>
        <div style='border: 4px solid #FFF500; background: #FDFDC8; text-align: center; clear: both; height: 75px; position: absolute; z-index:999999999; right: 2px; bottom: 2px; padding:0 8px;'>
            <div style='position: absolute; right: 3px; top: 3px; font-weight: bold;z-index:999999999'><a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'>关闭</a></div>
            <div style='width: 740px; margin: 0 auto; text-align: left; padding: 0; overflow: hidden; color: black;'>
                <div style='width: 675px; float: left;'>
                    <div style='font-size: 16px; font-weight: bold; margin-top: 12px;'>您使用的是已经过时的IE浏览器</div>
                    <div style='font-size: 13px; margin-top: 6px; line-height: 16px;'>为了让您有最佳的使用体验，请升级到 <a href="http://windows.microsoft.com/en-US/internet-explorer/download-ie">最新版本IE浏览器</a>, 或者使用其他高级浏览器如 <a href="https://www.google.com/intl/en/chrome/browser/">Chrome(谷歌浏览器)</a> 或 <a href="http://www.mozilla.org/en-US/firefox/new">Firefox(火狐浏览器)</a></div>
                </div>
            </div>
        </div>
        <![endif]-->

        <fis:block name="block_header"></fis:block>

        <fis:block name="block_body"></fis:block>
        
        <fis:block name="block_footer"></fis:block>

        <!--body里面的js-->
        <fis:block name="block_body_js">

        </fis:block>

        <!--livereload-->
    </fis:body>

    <fis:require name="./base.jsp" />
    <!-- THX FOR FIS -->
</fis:html>
