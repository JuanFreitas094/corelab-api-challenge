import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Vehicles extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public plate: string

  @column()
  public is_favorite: boolean

  @column()
  public year: number

  @column()
  public color: string
  
  @column()
  public price: number

  @column()
  public created_at: Date
}
