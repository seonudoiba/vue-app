import {createRouter, createWebHistory} from "vue-router";
import HomePage from './components/HomePage.vue'
import TodoBody from  './components/TodoBody.vue'
import MyCalendar from  './components/MyCalendar.vue'
import MarkDown from  './components/MarkDown.vue'

const routes = [
  {
    path:'/TodoBody',
    name:'TodoBody', 
    component: TodoBody
  },
  {
    path:'/MyCalendar', 
    name:'MyCalendar', 
    component: MyCalendar
  },
  {
    path:'/MarkDown', 
    name:'MarkDown', 
    component: MarkDown
  },
  {
    path:'/', 
    name:'HomePage', 
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default  router;