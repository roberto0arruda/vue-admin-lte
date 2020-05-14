<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Page Header <small>Optional description</small></h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <img alt="Vue logo" src="../../assets/logo.png">
      <hello-world></hello-world>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
  import HelloWorld from '../HelloWorld'
  export default {
    name: "Content",
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>

</style>
