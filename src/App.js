import { useContext, useEffect } from 'react'

import { Context } from './contex/store'

import Control_panel from './components/apps_panel'
import View_panel from './components/explorer_panel'
import Work_area from './components/work_area'
import Information from './components/information_button'

import Data from './components/raw_data'
import About from './components/raw_data/about'
import Projects from './components/raw_data/proyects'

const f = [
  {
    name: 'Intro.html',
    data: <Data/>
  },
  {
    name: 'About.js',
    data: <About/>
  },
  {
    name: 'Projects.git',
    data: <Projects/>
  },
  {
    name: 'Galery.py',
    data: false
  }
]

function App() {
  const { add_item } = useContext(Context)
  useEffect(() => {
    f.map(element => {
      add_item(element)
    })
  }, [])

  return (
    <main>
      <div id='principal'>
        <Control_panel />
        <View_panel />
        <Work_area />
      </div>
      <Information />
    </main>
  )
}

export default App;