<template>
<AppHeader/>
<router-view></router-view>
<myProps starr= "Abiodun"></myProps>

</template>

<script>
import AppHeader from './components/AppHeader.vue'
import myProps from './components/myProps.vue'
// import MyCalendar from './components/MyCalendar.vue'

export default {
  name: 'App',
  components: {
    AppHeader, 
    myProps,
    // MyCalendar,
  }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
