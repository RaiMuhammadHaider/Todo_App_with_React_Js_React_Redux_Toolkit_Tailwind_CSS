import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import { store } from './app/store.js'

// import { MyStore } from './Final/MySTore.js'
import {MyStore} from './TodoApp/MySTore.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <Provider store={MyStore} >
    <App />
    
 </Provider>
  
 
)
