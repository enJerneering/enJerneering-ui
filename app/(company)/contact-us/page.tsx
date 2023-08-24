import Navbar from '@components/Navbar'
import Header from '@components/Header'
import ContactForm from '@components/ContactForm'
import Location from '@components/Location'
import ApplicationForm from '@components/ApplicationForm'
import EarlyAccess from '@components/EarlyAccess'
import Gallery from '@components/Gallery'
import NewsletterForm from '@components/NewsletterForm'
import Footer from '@components/Footer'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <ContactForm />
      <Location />
      <ApplicationForm />
      <EarlyAccess />
      <Gallery />
      <NewsletterForm />
      <Footer />
    </div>
  )
}
