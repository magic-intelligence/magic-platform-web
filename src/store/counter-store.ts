import { create } from 'zustand';

interface State{
    counter: number,
    increment: ()=> void,
    decrement: ()=> void
}

export const useCounterStore = create<State>()((set, get)=>({
    counter: 0,
    decrement: ()=>{
        const { counter } = get();
        set({ counter: counter - 1 })
    },
    increment: ()=>{
        const { counter } = get();
        set({ counter: counter + 1 })
    }
}))