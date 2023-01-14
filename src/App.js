import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {action} from './store'

function App() {

  const {counter}=useSelector(store=>store )

  const dispatch= useDispatch();
console.log(action)
  function increment(){
    dispatch (action.increment())
  }

  function decrement(){
   if (counter<=0){
    return
   }
   else{
    dispatch (action.decrement())
   }
  }

  function Add(x){
    dispatch (action.Add(5))
  }

  function Sub(){
    if (counter<5){
     return
    }
    else{
     dispatch (action.Sub(5))
    }
   }

  return (
    <div className="App ">
      <div className='mt-12 ml-[32rem] py-4 bg-purple-300 rounded-full h-[28rem] w-[28rem] text-3xl space-x-2 space-y-3'>
      <div className='mt-32 space-x-3 space-y-3'>
      <h1 className="font-black text-4xl text-red-700">My counter</h1>
      <h1 className="font-black text-5xl text-gray-700"> {counter}</h1>
      <button className="px-2 font-black rounded-lg bg-yellow-400 text-purple-700" onClick={increment}>Increment</button>
      <button className="px-2 font-black rounded-lg bg-yellow-400 text-purple-700" onClick={decrement}>Decrement</button><br/>
      <button className="px-2 font-black rounded-lg bg-yellow-400 text-purple-700"  onClick={Add}>Add</button>
      <button className="px-2 font-black rounded-lg bg-yellow-400 text-purple-700"  onClick={Sub}>Sub</button>

      </div>
      </div>

    </div>
  );
}

export default App;
