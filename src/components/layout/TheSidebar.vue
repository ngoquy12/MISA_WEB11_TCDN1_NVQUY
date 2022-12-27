<template >
  <div>
    <div class="m-sidebar">
        <div class="m-logo-container">
            <div class="m-icon-24 m-option-icon"></div>
            <img class="m-logo-icon" src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
                alt="Logo_Module_TiengViet_White" />
        </div>
        <div class="m-sidebar-item">
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.dashboard">
                    <div class="m-mr-12 m-icon-24 m-icon-dashboard"></div>
                    <div class="m-item-title">{{SideBarItem.dashboard}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.cash">
                    <div class="m-mr-12 m-icon-24 m-icon-cash"></div>
                    <div class="m-item-title">{{SideBarItem.cash}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.bank">
                    <div class="m-mr-12 m-icon-24 m-icon-bank"></div>
                    <div class="m-item-title">{{SideBarItem.bank}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.buy">
                    <div class="m-mr-12 m-icon-24 m-icon-buy"></div>
                    <div class="m-item-title">{{SideBarItem.buy}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.sale">
                    <div class="m-mr-12 m-icon-24 m-icon-sale"></div>
                    <div class="m-item-title">{{SideBarItem.sale}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.invoice">
                    <div class="m-mr-12 m-icon-24 m-icon-invoice"></div>
                    <div class="m-item-title">{{SideBarItem.invoice}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.stock">
                    <div class="m-mr-12 m-icon-24 m-icon-stock"></div>
                    <div class="m-item-title">{{SideBarItem.stock}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.tools">
                    <div class="m-mr-12 m-icon-24 m-icon-tools"></div>
                    <div class="m-item-title">{{SideBarItem.tools}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.fixedAssets">
                    <div class="m-mr-12 m-icon-24 m-icon-fixed-assets"></div>
                    <div class="m-item-title">{{SideBarItem.fixedAssets}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.tax">
                    <div class="m-mr-12 m-icon-24 m-icon-tax"></div>
                    <div class="m-item-title">{{SideBarItem.tax}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.price">
                    <div class="m-mr-12 m-icon-24 m-icon-price"></div>
                    <div class="m-item-title">{{SideBarItem.price}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.general">
                    <div class="m-mr-12 m-icon-24 m-icon-general"></div>
                    <div class="m-item-title">{{SideBarItem.general}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.budget"> 
                    <div class="m-mr-12 m-icon-24 m-icon-budget"></div>
                    <div class="m-item-title">{{SideBarItem.budget}}</div>
                </a>
            </div>
            <div class="m-tooltip-content">
                <a href="#" class="m-item-router" :title="SideBarItem.report">
                    <div class="m-mr-12 m-icon-24 m-icon-report"></div>
                    <div class="m-item-title">{{SideBarItem.report}}</div>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import resourceVN from "../../resources/resourceVN.js"
export default {
    name: 'TheSidebar',
    data(){
        return {
            SideBarItem : resourceVN.SideBarItem
        }
    }
};
</script>
<style lang="">
</style>