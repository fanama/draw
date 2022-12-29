import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Board } from './components/Board'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="flex items-center justify-center h-screen w-screen" >
    <Board />

    </div>
  </React.StrictMode>,
)
