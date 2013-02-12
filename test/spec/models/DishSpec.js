define(['/src/models/dish.js'], function(Dish) {
  describe('The Dish model..', function() {
    
    var dish;

    // Create a new dish for each test in the spec
    beforeEach(function() {
      dish = new Dish();
    });

    // A dish object should be present
    it('should be defined', function() {
      expect(dish).toBeDefined();
    });

    // The default description should be set
    it('should have a default description', function() {
      expect(dish.get('name')).toBeDefined();
    });
  });
});

