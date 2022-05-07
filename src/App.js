import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        day: 'Sed tristique turpis a aliquam mattis.',
        reminder: 'true'
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        day: 'Sed tristique turpis a aliquam mattis.',
        reminder: 'true'
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        day: 'Sed tristique turpis a aliquam mattis.',
        reminder: 'false'
      },
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        day: 'Sed tristique turpis a aliquam mattis.',
        reminder: 'false'
      },
    ]
  )
  //add task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}



  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }




  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No tasks to show')}
    </div>
  )
}

export default App;


/*
lets see
first index.js is used
then app.js
*/