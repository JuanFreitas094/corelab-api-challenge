import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicles from 'App/Models/Vehicles'

export default class VehiclesController {
  public async index({}: HttpContextContract) {
    const vehicles = await Vehicles.all()
    return vehicles
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'description', 'plate', 'isFavorite', 'year', 'color', 'price', 'createdAt'])
    const post = await Vehicles.create(data)

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Vehicles.findOrFail(params.id)

    return post
  }

  public async update({ request, params}: HttpContextContract) {
    const post = await Vehicles.findOrFail(params.id)
    const data = request.only(['name', 'description', 'plate', 'isFavorite', 'year', 'color', 'price', 'createdAt'])
    
    post.merge(data)

    await post.save()
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Vehicles.findOrFail(params.id)

    await post.delete()
  }
}
