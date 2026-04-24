import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'

export default function App() {
  return (
   <div className='App'>
    <Header />
    <main className='content'>
      <Card />
      <Card />
      <Card />
    </main>
    <Footer />
   </div>
  )
}


