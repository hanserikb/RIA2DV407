define(['/src/models/dish.js'], function(Dish) {
  describe('The Dish model', function() {
    
    var dish;

    // Create a new dish for each test in the spec
    beforeEach(function() {
      dish = new Dish();
    });

    it('should be defined', function() {
      expect(dish).toBeDefined();
    });

    // The default description should be set
    it('should have a default description', function() {
      expect(dish.get('description')).toEqual('No description.');
    });

    // Test if the validation of the name works
    it('should not accept empty name', function() {
      dish.set({name: ''});

      dish.save();

      expect(dish.isValid()).toBeFalsy();

      expect(dish.validationError).toContain({name: 'name', message: 'You must enter a name for the dish'});
    });

    // Test if the length-validation works
    it('should not accept names over 256 characters', function() {
      var i, name = '';
      for (i = 256; i >= 0; i--) {
        name += 'a';
      }
      dish.set({name: name});

      dish.save();

      expect(dish.isValid()).toBeFalsy();

      expect(dish.validationError).toContain({name: 'name', message: 'Maximum name length is 256 character'});
    });

  });
});

