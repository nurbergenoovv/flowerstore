import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import NotFound from '../pages/not-found'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
