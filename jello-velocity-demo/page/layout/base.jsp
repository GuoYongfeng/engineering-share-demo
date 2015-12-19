<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="/fis" prefix="fis"%>

<!DOCTYPE html>
<fis:html lang="en">
    <fis:head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        
        <fis:require name="/static/css/reset.css" />
        <fis:require name="/static/lib/jquery/jquery-1.10.2.js" />
        <fis:require name="/static/lib/mod/mod.js" />
    </fis:head>

    <fis:body class="body">
        <!-- header -->
        <fis:block name="header">
            <fis:widget name="/widget/header/header.jsp" />
        </fis:block>

        <!-- content -->
        <fis:block name="body"></fis:block>
        
        <!-- footer -->
        <fis:block name="footer">
            <fis:widget name="/widget/footer/footer.jsp" />
        </fis:block>

        <!--livereload-->
    </fis:body>

    <fis:require name="./base.jsp" />
</fis:html>
