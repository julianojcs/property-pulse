import connectDB from '@/config/database'
import Property from '@/models/Property'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/utils/authOptions'
import { getSessionUser } from '@/utils/getSessionUser'

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()

    const properties = await Property.find()
    return new Response(JSON.stringify(properties), {
      status: 200
    })
  } catch (error) {
    console.error(`Error: ${error.message}`)
    return new Response(
      JSON.stringify({ message: 'Error connecting to MongoDB' }),
      { status: 500 }
    )
  }
}

// POST /api/properties
export const POST = async (request) => {
  try {
    await connectDB()

    const sessionUser = await getSessionUser()

    if (!sessionUser || !sessionUser.userId) {
      return new Response(JSON.stringify({ message: 'User ID is requires' }), {
        status: 401
      })
    }

    const { userId } = sessionUser

    const formData = await request.formData()
    // Access all values from amenities[] array and images[] array
    const amenities = formData.getAll('amenities')
    const images = formData
      .getAll('images')
      .filter((image) => image.name !== '')

    // Create a new Property object for MongoDB database
    const propertyData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      location: {
        street: formData.get('location.street'),
        city: formData.get('location.city'),
        state: formData.get('location.state'),
        zipcode: formData.get('location.zipcode')
      },
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      square_feet: formData.get('square_feet'),
      amenities,
      rates: {
        weekly: formData.get('rates.weekly'),
        monthly: formData.get('rates.monthly'),
        nightly: formData.get('rates.nightly')
      },
      seller_info: {
        name: formData.get('seller_info.name'),
        email: formData.get('seller_info.email'),
        phone: formData.get('seller_info.phone')
      },
      owner: userId
      // images
    }

    // Save the new property to the database
    const newProperty = new Property(propertyData)
    await newProperty.save()

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    )

    // return new Response(JSON.stringify({ property: 'Success' }), {
    //   status: 201
    // })
  } catch (error) {
    console.error(`Error: ${error.message}`)
    return new Response(
      JSON.stringify({ message: 'Error connecting to MongoDB' }),
      { status: 500 }
    )
  }
}
