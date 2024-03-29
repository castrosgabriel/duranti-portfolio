import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import { PrismicProvider } from '@prismicio/react'
import { client } from './service/prismic.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>,
)
