import Navbar from '@components/Navbar'
import Header from '@components/Header'
import About from '@components/About'
import CallToAction from '@components/CallToAction'
import Team from '@components/Team'
import Footer from '@components/Footer'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  )
}
