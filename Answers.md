1. What problem does the context API help solve?

prop drilling throughout components that don't need all the props 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

reducers take the state and update it depending on the action, action is declaring what each call of action is, store is where all state is stored, altered, returned from in one place and that's why it is the SINGLE SOURCE of truth. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the curent state of the entire application at a given time, component state is state specific to a component exclusively unless exported/imported to another location

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk lets you call actions that return a function instead of an object. it allows the synchronus actions to take place after the asynchronous action have finished

1. What is your favorite state management system you've learned and this sprint? Please explain why!

redux, it makes for sense following the flow of state than context api does
