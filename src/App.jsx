
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/style/main.scss'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './comp/AppHeader'


function App() {

  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path='/' />
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App
