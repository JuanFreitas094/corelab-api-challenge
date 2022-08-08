import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddBrands extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('brand')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
