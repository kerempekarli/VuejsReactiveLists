
const app = Vue.createApp({
    data() {
      return {
        arr:[],
        secondArray:[],
        data:"123",
      };
    },
    methods : {
         moveItem(todo){
            let item = this.arr.find( x => x.id == todo.id)
            console.log(item)
            this.secondArray.push(item);
            this.arr = this.arr.filter((x) => x.id !== todo.id)
          
         },
        moveItem2(todo){
          let item = this.secondArray.find( x => x.id == todo.id)       
          this.arr.push(item);
          this.secondArray = this.secondArray.filter((x) => x.id !== todo.id)
         
        }
      },
   

    computed : {
        arrComputed(){
          return this.arr;
        },
        arr2Computed(){
          return this.secondArray;
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(res => this.arr = res)
        .catch(err => console.log(err))
  
    }
  });
  
  
  app.mount("#app");