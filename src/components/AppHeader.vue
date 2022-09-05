<template>
<div>
<!-- new -->
<nav class="navbar navbar-expand-lg navbar-light bg-primary ">
  <router-link class="navbar-brand text-white font-weight-bold" to="/">APPS</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/" class="nav-item nav-link active text-white font-weight-bold" > Home  </router-link > 
      <router-link to="/MyCalendar" class="nav-item nav-link text-white font-weight-bold" > My Calendar </router-link > 
      <router-link to="/TodoBody" class="nav-item nav-link text-white font-weight-bold" > My wish Lists </router-link > 
      <router-link to="/MarkDown" class="nav-item nav-link text-white font-weight-bold " > MarkDown </router-link > 
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>