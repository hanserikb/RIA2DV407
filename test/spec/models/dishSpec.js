define(['../../../src/models/dish.js'], function(Dish) {
  describe('Dish Model', function() {
    var dish;

    // Create a new dish for each test
    beforeEach(function() {
      dish = new Dish();
    });

    // Dish object should be defined
    it('should be defined', function() {
      expect(dish).toBeDefined();
    });

    describe('Default values', function() {
      // The default description should be set
      it('should be set on description', function() {
        expect(dish.get('description')).toEqual('No description');
      });

      it('should be set on cooking time', function() {
        expect(dish.get('cookingTime')).toEqual('N/A');
      });
    });

    describe('Validation', function() {
      // Test if the validation of the name works
      it('should not accept empty name', function() {
        dish.set({name: ''});

        dish.save();

        expect(dish.isValid()).toBeFalsy();

        expect(dish.validationError).toContain({
          name: 'name',
          message: 'You must enter a name for the dish'
        });
      });

      // Test name length validation
      it('should not accept names over 256 characters', function() {
        var i, name = '';
        for(i = 256; i >= 0; i--) {
          name += 'a';
        }
        dish.set({name: name});

        dish.save();

        expect(dish.isValid()).toBeFalsy();

        expect(dish.validationError).toContain({
          name: 'name',
          message: 'Maximum name length is 256 character'
        });
      });

      // Test description length validation
      it('should not accept description over 1024 characters', function() {
        var i, string = '';
        for(i = 1025; i >= 0; i--) {
          string += 'a';
        }
        dish.set({description: string});

        dish.save();

        expect(dish.isValid()).toBeFalsy();

        expect(dish.validationError).toContain({
          name: 'description',
          message: 'Maximum description length is 1024 characters'
        });
      });

      // Test cooking time length validation
      it('should not accept cooking time over 20 characters', function() {
        var i, string = '';
        for(i = 1025; i >= 0; i--) {
          string += 'a';
        }
        dish.set({cookingTime: string});

        dish.save();

        expect(dish.isValid()).toBeFalsy();

        expect(dish.validationError).toContain({
          name: 'cookingTime',
          message: 'Maximum cooking time length is 20 characters'
        });
      });
    });
  });
});