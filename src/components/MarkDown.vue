<template>
  <textarea v-model="texts"/>
 <h2 v-html="mytext"> </h2> 
 <h2>{{texts}}</h2> 
</template>

<script>
import {parse} from 'marked';

export default {
  data() {
        return{
          texts:""
    }
  },
 
  computed:{
      mytext(){
      return parse(this.texts)
  }
  },
  
  

}
</script>

<style>

</style>