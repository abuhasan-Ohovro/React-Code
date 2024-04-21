import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {       //Initializing a state to use further in the slice. there is two way you can add initial state in the program either you declare it outside of the slicer or you declare it inside the slicer,but it is prefered that you declare it outside the slicer then ue it.
    todos : [{id : 1, text : "Hello World"}] // here we add just only one todo just for example but in the future it can be much more complicated like we also can use authentication token and others.
}

// Now we will create a slice. We can say that slice the greater version of reducer.

export  const todoSlice = createSlice({
    name : "todo", // inthe silce there always be a property called (name)
    initialState, // Every Slice has an initialState
    reducers : {
            addTodo : (state,action) => {
                const todo = {
                    id : nanoid(),
                    text : action.payload
                }
                state.todos.push(todo)
            } ,// function to add todo . IN this function it takes two things one is (state) and another is (action). Here, state will give the access of the initialStage value and action will give the value geting from state to the removeTodo function. To run the removeTodo function it have to get some value without geeting value  it can't remove anything.removeTodo function get the value from action.
            removeTodo : (state,action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            }
    }// This is reducer property of the slice. Without reducer property store in incomplete. Now , what is taken by reducers? ==> Reducers basically takes (function and property).
})// Inside the  createSlice method there is always an object.

export const  {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer   //