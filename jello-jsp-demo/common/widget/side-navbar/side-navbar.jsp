<%@ page contentType="text/html;charset=utf-8" session="false"%>
<%@ taglib uri="/fis" prefix="fis"%>

<!--side bar-->
<aside class="side-left">
    <ul class="sidebar">
        <li class="sidebar_01 active first">
            <a href="/" title="dashboard">
                <div class="helper-font-24">
                    <i class="icofont-dashboard"></i>
                </div>
                <span class="sidebar-text">工作台</span>
            </a>
        </li>
        <li class="sidebar_02">
            <a href="#" title="初始设置">
                <%-- <div class="badge badge-important">1</div> --%>
                <div class="helper-font-24">
                    <i class="icofont-edit"></i>
                </div>
                <span class="sidebar-text">初始设置</span>
            </a>
            <ul class="sub-sidebar-form corner-top shadow-white">
                <li>
                    <a href="#" title="期初余额" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">期初余额</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="sidebar_03">
            <a href="#" title="凭证管理">
                <div class="badge badge-important">6</div>
                <div class="helper-font-24">
                    <i class="icofont-table"></i>
                </div>
                <span class="sidebar-text">凭证管理</span>
            </a>
            <ul class="sub-sidebar-form corner-top shadow-white">
                <li>
                    <a href="/search/create" title="定制" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">定制</span>
                    </a>
                </li>
                <li>
                    <a href="/voucher/edit" title="制单" class="corner-all">
                        <i class=" icofont-plus-sign"></i>
                        <span class="sidebar-text">制单</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="签字" class="corner-all">
                        <i class="icofont-pencil"></i>
                        <span class="sidebar-text">签字</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="审核" class="corner-all">
                        <i class="icofont-user"></i>
                        <span class="sidebar-text">审核</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="记账" class="corner-all">
                        <i class="icofont-edit"></i>
                        <span class="sidebar-text">记账</span>
                    </a>
                </li>
                <li>
                    <a href="/voucher/create" title="录入" class="corner-all">
                        <i class="icofont-edit"></i>
                        <span class="sidebar-text">录入</span>
                    </a>
                </li>
                <li>
                    <a href="/voucher/search" title="查询" class="corner-all">
                        <i class="icofont-zoom-in"></i>
                        <span class="sidebar-text">查询</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="sidebar_04">
            <a href="#" title="期末处理">
                <%-- <div class="badge badge-important">2</div> --%>
                <div class="helper-font-24">
                    <i class="icofont-bullhorn"></i>
                </div>
                <span class="sidebar-text">期末处理</span>
            </a>
            <ul class="sub-sidebar-form corner-top shadow-white">
                <li>
                    <a href="#" title="试算平衡" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">试算平衡</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="结账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">结账</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="sidebar_05">
            <a href="#" title="账簿查询">
                <div class="badge badge-important">13</div>
                <div class="helper-font-24">
                    <i class="icofont-search"></i>
                </div>
                <span class="sidebar-text">账簿查询</span>
            </a>
            <ul class="sub-sidebar-form corner-top shadow-white">
                <li>
                    <a href="/account/balance" title="科目余额表" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">科目余额表</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="三栏式总账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">三栏式总账</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="三栏式明细账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">三栏式明细账</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="辅助余额表" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">辅助余额表</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="辅助明细账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">辅助明细账</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="科目汇总表" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">科目汇总表</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="序时账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">序时账</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="日报表" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">日报表</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="日记账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">日记账</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="资金日报表" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">资金日报表</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="现金日记账" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">现金日记账</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="sidebar_06">
            <a href="#" title="财务报表">
                <%-- <div class="badge badge-important">2</div> --%>
                <div class="helper-font-24">
                    <i class="icofont-shopping-cart"></i>
                </div>
                <span class="sidebar-text">财务报表</span>
            </a>
            <ul class="sub-sidebar-form corner-top shadow-white">
                <li>
                    <a href="#" title="资产负债表－组织" class="corner-all">
                        <i class="icofont-shopping-cart"></i>
                        <span class="sidebar-text">资产负债表－组织</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="利润表－组织" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">利润表－组织</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="现金流量表－集团" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">现金流量表－集团</span>
                    </a>
                </li>
                <li>
                    <a href="#" title="现金流量表－组织" class="corner-all">
                        <i class="icofont-asterisk"></i>
                        <span class="sidebar-text">现金流量表－组织</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</aside><!--/side bar -->
