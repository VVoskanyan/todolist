const CHANGE_ITEM = "CHANGE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const ADD = "ADD";
const CLEAR = "CLEAR";
const initialTodos = [
    {
        text:"I know H.T.M.L",
        id:Math.random(),
        isComplited:false
    },
    {
        text:"I am learning CSS",
        id:Math.random(),
        isComplited:false
    },
    {
        text:"I want to learn JS",
        id:Math.random(),
        isComplited:false
    }
]
export function todoReducer(state = initialTodos ,action){
    switch(action.type){
        case CHANGE_ITEM:{
            return(
                state.map(val=>{
                    if(val.id === action.payload.id){
                        return{
                            ...val,
                            isComplited:!val.isComplited
                        }
                    }
                    return val
                })
            )
            
        }

        case DELETE_ITEM:{
            return(
                state.filter(val => val.id !== action.payload.id)
            )
        }
        case ADD:{
            if(action.payload.text !== ''){
                return([
                    ...state,
                    {
                        text:action.payload.text,
                        id:Math.random(),
                        isComplited:false
                    }
                ])
            }
            return state
        }

        case CLEAR:{
            return (
                state.filter(val => val.isComplited === false)
            )
        }
        default: return state
    }
}


export function storeTodos(state){
    return state.todos
}

export function changeItem(id){
    return{
        type:CHANGE_ITEM,
        payload:{
            id
        }
    }
}

export function deleteItem(id){
    return{
        type:DELETE_ITEM,
        payload:{
            id
        }
    }
}

export function addItem(text){
    return{
        type:ADD,
        payload:{
            text
        }
    }
}

export function clearItems(){
    return{
        type:CLEAR
    }
}