import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental', 
  description: 'Find the perfect rental property for you and your family. PropertyPulse is the best place to find your next rental home.',
  keywords: 'rental, property, home, house, apartment, condo, townhome, single family, multi family, duplex, triplex, fourplex, rental property, rental home, rental house, rental apartment, rental condo, rental townhome, rental single family, rental multi family, rental duplex, rental triplex, rental fourplex',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
};

export default MainLayout;