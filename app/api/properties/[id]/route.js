import connectDB from '@/config/database'
import Property from '@/models/Property'

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB()

    const property = await Property.findById(params.id)

    if (!property) {
      return new Response(JSON.stringify({ message: 'Property not found' }), {
        status: 404
      })
    }
    return new Response(JSON.stringify(property), {
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
