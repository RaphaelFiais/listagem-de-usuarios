import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'
import GlobalStyle from './styles/globalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routes />
  </React.StrictMode>
)
