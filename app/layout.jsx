import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description:
    'Find the perfect rental property for you and your family. PropertyPulse is the best place to find your next rental home.',
  keywords:
    'rental, property, home, house, apartment, condo, townhome, single family, multi family, duplex, triplex, fourplex, rental property, rental home, rental house, rental apartment, rental condo, rental townhome, rental single family, rental multi family, rental duplex, rental triplex, rental fourplex',
  charset: 'UTF-8'
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
