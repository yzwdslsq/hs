

<template>
  <div>
    <div class="layout">
      <h-menu
        mode="horizontal"
        theme="primary"
        active-name="1"
      >
        <div class="layout-logo"></div>
        <div class="layout-nav">
         
        </div>
      </h-menu>
      <h-menu
        mode="horizontal"
        active-name="1"
      >
        <div class="layout-assistant">
          <h-menu-item name="1">服务终端</h-menu-item>
          <h-menu-item name="2">管理终端</h-menu-item>
        </div>
      </h-menu>
      <div class="layout-content">
        <h-row>
          <h-col span="5">
            <h-menu
              active-name="1-2"
              width="auto"
              :open-names="['1']"
            >
              <h-submenu name="1">
                <template slot="title">
                  <h-icon name="mail"></h-icon>
                  首页
                </template>
              </h-submenu>
              <h-submenu name="2">
                <template slot="title">
                  <h-icon name="mail"></h-icon>
                  开户
                </template>
              </h-submenu>
              <h-submenu name="3">
                <template slot="title">
                  <h-icon name="mail"></h-icon>
                  申购
                </template>
              </h-submenu>
              <h-submenu name="4">
                <template slot="title">
                  <h-icon name="mail"></h-icon>
                  赎回
                </template>
              </h-submenu>
              <h-submenu name="5">
                <template slot="title">
                  <h-icon name="mail"></h-icon>
                  业务查询
                </template>
              </h-submenu>
            </h-menu>
          </h-col>
          <h-col span="19">
            <div class="layout-content-main">内容区域</div>
          </h-col>
        </h-row>
      </div>
      <div class="layout-copy">
        2017-2030 &copy; HUNDSUN
      </div>
    </div>

    <!-- <query></query> -->
    <!-- <clear></clear> -->

  </div>
</template>

<script>
import query from '../../components/query.vue';
import clear from '../../components/clear.vue';
export default {
  name: 'home',
  components: {
    // query,
    clear
  }

}

</script>
