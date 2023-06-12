const {createApp} = Vue;

createApp ({
    data(){
        return{
            toDoList: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text:'Uscire il cane',
                    done: false
                },
                {
                    text:'Mangiare la pizza',
                    done: false
                },
                {
                    text:'Bere Acqua',
                    done: true
                },
                {
                    text: 'Stare poco sotto al sole',
                    done: true
                },
                {
                    text:'Lavare le mani',
                    done: false
                },
                {
                    text:'Andare a letto presto',
                    done: false
                }
            ],
        
            newElement:'',
                   
        }
    },
    methods:{
        Delete(index) {
            
            this.toDoList.splice(index);
        },
        addList(newElement) {
            if (newElement !== '') {
                listObj = {text: newElement, done: false};
                this.toDoList.push(listObj);
                newElement = '';
            }
        },
    },
  
    }).mount('#app');
