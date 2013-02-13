define(['/src/models/dish.js', '/src/collections/dish.js'], function(Dish, DishCollection) {
  dishes = new DishCollection();

  describe('Dish Collection', function() {
    it('should exist', function() {
      expect(DishCollection).toBeDefined();
    });

    it('should use the dish model', function() {
      expect(dishes.model).toEqual(Dish)
    });
  })
  
})