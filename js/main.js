/* Descrizione:
Rifare l'esercizio della to do list (come fatto in precedenza con jQuery) ma questa volta con Vue, un po come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array di todo
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista */

const app = new Vue({
    el: "#app",
    data:{
        todos:[
            {
                servizi: "fare la spesa",
                completato: true,
            },
            {
                servizi: "passeggiare il cane",
                completato: false,
            },
            {
                servizi: "comprare le sigarette",
                completato: true,
            },
            {
                servizi: "fumare",
                completato: true,
            },
        ],
        //TESTO DA RESETTARE NELL INPUT
        textInput: "",
    },
    methods:{
        /** 
        * FUNCTION CHE PERMETTE AL CLICK SUL BUTTON DI AGGIUNGERE UN TODO ALLA NOSTRA LISTA
        **/
        addTodo(){
            if(this.textInput !== ""){
                this.todos.push({
                    servizi: this.textInput,
                    competato: false,
                });
                //RESET TEST INPUT DOPO IL PUSH
                this.textInput= "";  
                //PERMETTE DI RITORNARE IL CURSORE DELL INPUT
                this.$refs.refInput.focus();
            }
        },
        removeTodo(index){
            this.todos.splice(index, 1);
        },
        updateStatus(index){
            this.todos[index].completato = ! this.todos[index].completato; 
        }
    }
})