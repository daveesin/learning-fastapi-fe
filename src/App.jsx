import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/commons/Header'

function App() {

  return (
    <div className='w-full h-full flex flex-col '>

      <Header />
      <Outlet />
    
    </div>
  )
}

export default App;
