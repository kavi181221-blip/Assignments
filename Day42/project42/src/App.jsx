import './App.css'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task5 from './Task5'
import Task6 from './Task6'
import Task7 from './Task7'
import Task8 from './Task8'
import Task9 from './Task9'
import Task10 from './Task10'






function App() {


  return (
    <>
    <Task1/>
    <Task2 name="kavi" age={21}/>
    <Task3 text="Welcome to React"/>
    <Task4 text="click me"/>
        <Task4 text="Submit"/>
          <Task4 text="Cancel"/>
            <div>
      <Task5>
        <h2>Title</h2>
        <p>This is some content inside the card.</p>
      </Task5>

      <Task5>
        <img src="https://via.placeholder.com/150" alt="sample" />
        <p>Image inside a card!</p>
      </Task5>

      <Task5>
        <button>Click Me</button>
      </Task5>
      <Task5 children="Kavibalan"/>
      </div>
      <div>
        <Task6
        name="Kavibalan"
        job="IT"
        avatar="https://via.placeholder.com/100"
        />
         <Task6
        name="Hari"
        job="BPO"
        avatar="https://via.placeholder.com/100"
        />

      </div>
      <div>
        <Task7 text="submit" color="green" size="large"/>
                <Task7 text="cancel" color="red" size="small"/>
                        <Task7 text="Default Button" />


      </div>

    <Task8 title="Soap" price="50"/>
    <Task9>
      <h1>Welcome to My Website</h1>
      <p>This content is displayed inside the Layout component.</p>
    </Task9>
    <Task10/>
    </>
  )
}

export default App
