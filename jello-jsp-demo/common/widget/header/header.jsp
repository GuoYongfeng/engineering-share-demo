<%@ page contentType="text/html;charset=utf-8" session="false"%>
<%@ taglib uri="/fis" prefix="fis"%>

<header class="header fixed">
    <!--nav bar helper-->
    <div class="navbar-helper">
        <div class="row-fluid">

            <!--/panel name-->
            <div class="span4">
                <!--panel search-->
                <div class="panel-search">
                    <form class="form-search" />
                        <div class="input-icon-append">
                            <button type="submit" rel="tooltip-bottom" title="search" class="icon"><i class="icofont-search"></i></button>
                            <input class="input-large search-query grd-white" maxlength="23" placeholder="请输入搜索..." type="text" />
                        </div>
                    </form>
                </div><!--/panel search-->
            </div>
            <!--panel site-name-->
            <div class="span4">
                <div class="panel-sitename">
                    <h2><a href="/ficloud/home/index">示例</a></h2>
                </div>
            </div>
            <div class="span4">
                <!--panel button ext-->
                <div class="panel-ext panel-user">

                    <span class="name">
                      郭永峰
                    </span>
                    <div class="btn-group user-group">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <img class="corner-all" align="middle" src="./img/user-thumb.jpg" title="郭永峰" alt="郭永峰" />
                            <button class="btn btn-small btn-inverse">郭永峰</button>
                        </a>
                        <ul class="dropdown-menu dropdown-user" role="menu" aria-labelledby="dLabel">
                            <li>
                                <div class="media">
                                    <a class="pull-left" href="#">
                                        <img class="img-circle" src="img/user.jpg" title="profile" alt="profile" />
                                    </a>
                                    <div class="media-body description">
                                        <p><strong>郭永峰</strong></p>
                                        <p class="muted">guoyff@yonyou.com</p>
                                        <p class="action"><a class="link" href="#">项目</a> - <a class="link" href="#">设置</a></p>
                                        <a href="bonus-page/resume/index.html" class="btn btn-primary btn-small btn-block">个人简介</a>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-footer">
                                <div>
                                    <a class="btn btn-small pull-right" href="login.html">注销</a>
                                    <a class="btn btn-small" href="#">添加账户</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <%-- 消息 --%>
                    <div class="btn-group user-msg">
                        <!--notification-->
                        <h3 class="msg-drop" data-toggle="dropdown">
                          <i class="typicn-message color-white"></i>
                          <span class="badge badge-warning">9</span>
                        </h3>
                        <%-- <a class="socialico-vimeo-sign color-white" data-toggle="dropdown" href="#" title="3条信息">

                          3</a> --%>

                        <ul class="dropdown-menu dropdown-notification notification-right">
                            <li class="dropdown-header grd-white"><a href="#">查看新消息</a></li>
                            <li class="new">
                                <a href="#">
                                    <div class="notification">郭永峰刚刚评论</div>
                                    <div class="media">
                                        <img class="media-object pull-left" data-src="js/holder.js/64x64" />

                                    </div>
                                </a>
                            </li>
                        </ul><!--notification-->
                    </div>

                </div><!--panel button ext-->
            </div>
        </div>
    </div><!--/nav bar helper-->
</header>

<fis:script>
  require(['common:widget/ui/lib/stilearn-base/stilearn-base.js'], function(header){
    // TODO SOMETHING.
  });

</fis:script>
