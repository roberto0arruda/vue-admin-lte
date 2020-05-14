<template>
  <div id="app" class="wrapper skin-blue">
    <app-header></app-header>
    <app-Sidebar></app-Sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/layouts/Header'
  import AppSidebar from './components/layouts/Sidebar'
  import AppContent from './components/layouts/Content'
  import AppFooter from './components/layouts/Footer'
  import Menus from './menus'

  export default {
    name: 'App',
    data() {
      return {
        menus: Menus,
      }
    },
    components: {
      AppHeader,
      AppSidebar,
      AppContent,
      AppFooter
    }
  }
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style src="admin-lte/dist/css/AdminLTE.min.css"></style>
<style src="admin-lte/dist/css/skins/_all-skins.min.css"></style>
