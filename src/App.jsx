import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {
  function handleClick(){
    alert("Button click")
  }

  function handleClick2(){
    alert("Button click2")
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h2>Core-Concepts-2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click me-1</button> 
      <button onClick={handleClick2}>Click me-2</button> 
      {/* direct function likheo evenhandler add kora jay */}
      <button onClick={() => {alert("Button click3")}}>Click me-3</button>
       {/*bejailla  */}
      <button onClick={() => addToFive(5)}>Click me-4</button> 
    </>
  )
}

export default App
