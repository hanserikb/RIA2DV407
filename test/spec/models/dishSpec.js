define(['recipeModel'], function(RecipeModel) {
  describe('RecipeModel Model', function() {
    var recipe;

    // Create a new recipe for each test
    beforeEach(function() {
      recipe = new RecipeModel();
    });

    // RecipeModel object should be defined
    it('should be defined', function() {
      expect(recipe).toBeDefined();
    });

    describe('Default values', function() {
      // The default description should be set
      it('should be set on description', function() {
        expect(recipe.get('description')).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque enim. Phasellus rhoncus tempor vestibulum. Nam volutpat libero vel ipsum interdum aliquet. Duis suscipit pulvinar suscipit. Donec vitae tempus justo. Nunc adipiscing tempus diam, vitae pretium mi iaculis a. Cras sit amet nibh non magna malesuada venenatis.');
      });

      it('should be set on cooking time', function() {
        expect(recipe.get('cookingTime')).toEqual('N/A');
      });
    });

    describe('Validation', function() {
      // Test if the validation of the name works
      it('should not accept empty name', function() {
        recipe.set({name: ''});

        recipe.save();

        expect(recipe.isValid()).toBeFalsy();

        expect(recipe.validationError).toContain({
          name: 'name',
          message: 'You must enter a name for the recipe'
        });
      });

      // Test name length validation
      it('should not accept names over 256 characters', function() {
        var i, name = '';
        for(i = 256; i >= 0; i--) {
          name += 'a';
        }
        recipe.set({name: name});

        recipe.save();

        expect(recipe.isValid()).toBeFalsy();

        expect(recipe.validationError).toContain({
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
        recipe.set({description: string});

        recipe.save();

        expect(recipe.isValid()).toBeFalsy();

        expect(recipe.validationError).toContain({
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
        recipe.set({cookingTime: string});

        recipe.save();

        expect(recipe.isValid()).toBeFalsy();

        expect(recipe.validationError).toContain({
          name: 'cookingTime',
          message: 'Maximum cooking time length is 20 characters'
        });
      });
    });
  });
});