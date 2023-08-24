import Image from 'next/image'

//NOTE: tsconfig.json has custom paths configured for @lib and @components, use them
import { getBaseUrl } from '@lib/meta'
import Navbar from '@components/Navbar'
import HeroHeader from '@components/HeroHeader'
import About from '@components/About'
import Services from '@components/Services'
import CallToAction from '@components/CallToAction'
import BenefitInformation from '@components/BenefitInformation'
import Team from '@components/Team'
import BeforeAfterComparison from '@components/BeforeAfterComparison'
import Testimonials from '@components/Testimonials'
import BlogList from '@components/blog/BlogList'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

export default function Home() {
  const baseUrl = getBaseUrl()

  return (
    <div>
      <Navbar />
      <HeroHeader />
      <About />
      <Services />
      <CallToAction />
      <BenefitInformation />
      <Team />
      <BeforeAfterComparison />
      <Testimonials />
      <BlogList />
      <Contact />
      <Footer />
    </div>
  )
}
