import Link from 'next/link'

export const metadata = {
  title: 'PropertyPulse Properties | Find The Perfect Rental'
}

const PropertiesPage = () => {
  console.log('PropertiesPage')

  return (
    <div>
      <h1 className='text-3xl'>Properties</h1>
      <Link href='/'>Go back home</Link>
    </div>
  )
}
export default PropertiesPage
