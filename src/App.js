import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { add_first_app, add_app } from './contex/central_store'

import Control_panel from './components/apps_panel'
import View_panel from './components/explorer_panel'
import Work_area from './components/work_area'
import Information from './components/information_button'

import Data from './components/raw_data'
import About from './components/raw_data/about'
import Projects from './components/raw_data/proyects'

const info = [
  {
    name: 'Intro.html',
    data: <Data />,
    write: false
  },
  {
    name: 'About.js',
    data: <About />
  },
  {
    name: 'Projects.git',
    data: <Projects />
  },
  {
    name: 'Galery.py',
    data: false
  }
]

function App() {
  const { apps } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    info.forEach((element, index) => {
      if (index === 0) dispatch(add_first_app(element))
      else dispatch(add_app(element))
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