import React from 'react'
import ReactDOM from 'react-dom/client'
import { Caracteristicas } from './Caracteristicas'
import { Footer } from './Footer'
import { Top } from './Top'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Top />
    <Caracteristicas />
    <Footer />
  </>
)
