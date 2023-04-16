import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
