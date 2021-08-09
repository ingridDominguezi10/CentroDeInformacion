<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/estadisticas" :name="$t('sidebar.estadisticas')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/casaDePaz" :name="$t('sidebar.cdp')" icon="tim-icons icon-bank"/>
        <sidebar-link to="/movimientoSobrenatural" :name="$t('sidebar.movsobrenatural')" icon="tim-icons icon-calendar-60"/>
        <sidebar-link to="/escuelaVision" :name="$t('sidebar.escuelavision')" icon="tim-icons icon-single-copy-04"/>
        <sidebar-link to="/discipuladoApostolico" :name="$t('sidebar.disapostolico')" icon="tim-icons icon-badge"/>
        <sidebar-link to="/serviciosGenerales" :name="$t('sidebar.serviciosgen')" icon="tim-icons icon-paper"/>
        <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
