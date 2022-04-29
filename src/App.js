import Control_panel from './components/control_panel'
import View_panel from './components/view_panel'
import Work_area from './components/work_area'
import Information from './components/information_button'

const f = [
  { name: 'puta.txt' },
  { name: 'index.html' },
  { name: 'kk.git' }
]

function App() {
  return (
    <main>
      <div id='principal'>
        <Control_panel />
        <View_panel files={f} />
        <Work_area />
      </div>
      <Information />
    </main>
  )
}

export default App;