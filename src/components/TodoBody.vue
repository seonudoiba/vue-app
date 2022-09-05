<template>
<div class="row">
    <div class="main-page col-lg-5 col-lg-6 col-sm-6 h-auto m-auto ">
        <ul>
            <li v-for="(i, index) in Todos" 
                :key="i.name"> <h2>{{ i.name }} </h2>
                <button @click= "remove(index)" type="button" class="btn mx-3 btn-sm btn-danger">x</button>
            </li>
        </ul>
        <!-- <div class="input-div"> -->
        <div class="form-group">
            <input v-model="newTodo" type="text" class="form-control input-sm col-sm-1" >
            <button type="button" class="btn btn-primary" v-on:click="add"  >Add</button>
        </div>
    </div>

</div>

</template>

<script>
export default {
    data() {
        return{
            Todos: [],
            newTodo: "",
            
        }
        
    },
    methods: {
        add() {
            // return this.Todos.push({'`name: ${this.newTodo}' })
            if(this.newTodo.length > 0 && this.newTodo.length < 50 ){
               this.Todos.push({name: this.newTodo})
            //    this.newTodo = ""
            }
        },
        remove(index){
            this.Todos = this.Todos.filter((todo, i) => i != index)
            
        }
    }

}
</script>

<style scoped>
li{
    list-style: none;
    margin: 3px 1px;
    display: flex;
    justify-content: space-between;
}
.form-group *{
    margin: 1% ;
} 
.form-group label,button{

    font-weight: bold;
}
.main-page{
    
    border-radius: 10px;
    margin: 0 auto;

}
h2{
    overflow: hidden;
}
.btn-sm{
    height:2rem
}
</style>