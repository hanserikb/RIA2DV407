define(['recipeModel', 'recipeCollection'], function(RecipeModel, RecipeCollection) {

  describe('Dish Collection', function() {

    describe('the initialize function', function() {
      
      var initialize = RecipeCollection.prototype.initialize,
      context = {
        on: jasmine.createSpy('onSpy'),
        saveRecipe: jasmine.createSpy('saveRecipeSpy')
      };

      initialize.call(context);

      it('should bind an event to saveRecipe when model is added', function() {
        expect(context.on).toHaveBeenCalled();
        expect(context.on.mostRecentCall.args).toEqual(['add', context.saveRecipe, context]);
      });

    });

    describe('the saveRecipe function', function() {
      var saveRecipe = RecipeCollection.prototype.saveRecipe,
      context = {
        
      },
      model = {
        save: jasmine.createSpy('saveSpy')
      };

      saveRecipe.call(context, model);

      it('should save the added model', function() {
        expect(model.save).toHaveBeenCalled();
      });
    })


  });
  
});