import React , {useState} from 'react'

function useCounter(data=0) {
  console.log(data)
    const [count, setCount] = useState(data || 0)
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
  return { count, increment, decrement}
}

export default useCounter

