'use client'
import { useCounterStore } from "@/presentation/store/counter-store"

export const CounterComponent = () => {
  
  const { counter, increment, decrement } = useCounterStore();
  
  return (
    <div className="flex justify-center items-center gap-4">
        <button className="bg-blue-700 text-white p-4 rounded-lg" 
            onClick={()=> increment() }>Increment</button>
        
        <div>{ counter }</div>

        <button className="bg-red-700 text-white p-4 rounded-lg"
            onClick={()=> decrement() }>Decrement</button>
    </div>
  )
}
