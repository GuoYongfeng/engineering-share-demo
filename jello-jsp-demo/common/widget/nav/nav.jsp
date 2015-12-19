<%@ page contentType="text/html;charset=utf-8" session="false" %>
<%@ taglib uri="/fis" prefix="fis"%>

<button id="mm-menu-toggle" class="mm-menu-toggle"></button>

<nav id="mm-menu" class="mm-menu">
  <div class="mm-menu__header">
    <h2 class="mm-menu__title">示例</h2>
  </div>
  <ul class="mm-menu__items">
    <li class="mm-menu__item">
      <a class="mm-menu__link" href="#">
        <span class="mm-menu__link-text"><i class="md md-dashboard"></i>示例导航</span>
      </a>
    </li>
  </ul>
</nav><!-- /nav -->
<fis:script>
  require(['./nav.js'], function( nav ){
    //TODO
  })
</fis:script>
