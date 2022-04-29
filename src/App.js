import Control_panel from './components/apps_panel'
import View_panel from './components/explorer_panel'
import Work_area from './components/work_area'
import Information from './components/information_button'

const f = [
  { name: 'puta.txt' },
  { name: 'index.html' },
  { name: 'kk.git' },
  { name: 'el_demonio_del_sabor.py'},
  { name: 'App.js'}
]

function App() {
  return (
    <main>
      <div id='principal'>
        <Control_panel />
        <View_panel files={f} />
        <Work_area files={f}/>
      </div>
      <Information />
    </main>
  )
}

export default App;