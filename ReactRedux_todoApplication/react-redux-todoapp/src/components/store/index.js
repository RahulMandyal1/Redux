import  {createStore} from "redux";

function reducer(state={todos : []} ,action){
    switch(action.type){
        case  "addtodo" : 
        let newtodo = {title  : action.value , isDone : false};
        return  {...state , todos : state.todos.concat(newtodo)};

        case "deleteTodo" : 
        let alltodos  = state.todos;
        alltodos.splice(action.index , 1 );
        console.log(alltodos);
        return {...state , todos : alltodos}

        default :
        return state;
    }
}

let store = createStore(reducer);
export default store;