import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Route/Route'


function App() {

  return (
    <div className='max-w-[1916px] mx-auto mt-20'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

