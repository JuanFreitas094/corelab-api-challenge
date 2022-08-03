import Route from '@ioc:Adonis/Core/Route'

Route.resource('/vehicles', 'VehiclesController').apiOnly()

// Route.get('/vehicles', 'VehiclesController.index');
// Route.post('/vehicles', 'VehiclesController.store')
// Route.get('/vehicles/:id', 'VehiclesController.show')
// Route.put('/vehicles/:id', 'VehiclesController.update')
// Route.delete('/vehicles/:id', 'VehiclesController.destroy')