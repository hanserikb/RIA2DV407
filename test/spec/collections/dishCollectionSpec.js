define(['recipeModel', 'recipeCollection'], function(RecipeModel, RecipeCollection) {

  describe('Recipe Collection', function() {

    describe('the initialize function', function() {
      // Catch the method and create some fake context
      // 
      var initialize = RecipeCollection.prototype.initialize,
      context = {
        on: jasmine.createSpy('onSpy'),
        saveRecipe: jasmine.createSpy('saveRecipeSpy'),
        removeRecipe: jasmine.createSpy('removeRecipeSpy')
      };

      // Call the function
      initialize.call(context);

      it('should bind an event to saveRecipe when model is added', function() {
        expect(context.on).toHaveBeenCalled();
        expect(context.on.argsForCall[0]).toEqual(['add', context.saveRecipe, context]);
      });

      it('should bind an event to removeRecipe when a model is removed', function() {
        expect(context.on).toHaveBeenCalled();
        expect(context.on.argsForCall[1]).toEqual(['remove', context.removeRecipe, context]);
      });

    });

    describe('the saveRecipe function', function() {

      // Catch the method and create fake context
      var saveRecipe = RecipeCollection.prototype.saveRecipe,
      context = {
        
      },
      model = {
        save: jasmine.createSpy('saveSpy')
      };

      // Call the function
      saveRecipe.call(context, model);

      it('should save the added model', function() {
        expect(model.save).toHaveBeenCalled();
      });
    })


  });
  
});