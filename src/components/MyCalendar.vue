<template>
  <div class="home container bg-light">
    <h1 class="text-center">CALENDAR</h1>
    <div class="d-flex flex-row justify-content-between">
      <h2 class="p-2 mx-4 ">{{currentMonthName}}</h2>
      <h2 class="p-2 me-4">{{currentYear}}</h2>
    </div>
    <div class="  numbers">
      <h2 class=" " v-for="(day, index) in days" :key="index">{{day}}</h2>
    </div>
    <div class="numbers">
      <h2 class=" mx-2 " v-for="fday in startDate()" :key="fday">{{""}}</h2>
      <h2 :class="(num == presentDay & currentYear == new Date().getFullYear() & currentMonth -1 == new Date().getMonth() )? 'bg-currrent' : ''" class=" mx-2 " v-for="(num) in 30" :key="num">{{num}}</h2>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn border btn-light" @click="Prev">Prev</button>
      <button class="btn border btn-light" @click="Next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        return{
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            currentMonthName: new Intl.DateTimeFormat('default', {month: 'long'} ).format(new Date()),
            currentDay: new Date().getMonth(),
            currentMonth: new Date().getMonth() +1,
            currentYear: new Date().getFullYear(),
            date : new Date(),
            check: 1,
            presentDay: new Date().toLocaleString("default", {day: 'numeric'}),
            // startDate : new Date(this.currentYear,this.currentMonth, 0).getDay(),
            
        }
  },
  computed: {},
  methods: {
    startDate(){
      return new Date(this.currentYear, this.currentMonth -1, 1).getDay();
    },
    Prev(){
      if(this.currentMonth > 1){
          this.currentMonth--;
        return this.currentMonthName = 
        new Intl.DateTimeFormat('default', {month: 'long'} )
        .format(new Date(`${this.currentMonth}-${this.currentDay}-${this.currentYear}`))
      }else{
        this.currentMonth = 12;
        this.currentYear--
        return this.currentMonthName = 
        new Intl.DateTimeFormat('default', {month: 'long'} )
        .format(new Date(`${this.currentMonth}-${this.currentDay}-${this.currentYear}`))
      }

    },
    Next(){
      if(this.currentMonth < 12){
          this.currentMonth++;
        return this.currentMonthName = 
        new Intl.DateTimeFormat('default', {month: 'long'} )
        .format(new Date(`${this.currentMonth}-${this.currentDay}-${this.currentYear}`))
      }else{
        this.currentMonth = 1;
        this.currentYear++;
        return this.currentMonthName = 
        new Intl.DateTimeFormat('default', {month: 'long'} )
        .format(new Date(`${this.currentMonth}-${this.currentDay}-${this.currentYear}`))
      }

    }
    
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.numbers{
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  text-align: center;
}
.bg-currrent{
  color: rgb(120, 175, 223);
}
</style>
