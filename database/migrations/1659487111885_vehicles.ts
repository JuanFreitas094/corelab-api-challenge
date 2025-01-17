import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehicles extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('description', 'longtext')
      table.string('plate')
      table.boolean('is_favorite')
      table.integer('year')
      table.string('color')
      table.float('price')
      table.date('created_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
