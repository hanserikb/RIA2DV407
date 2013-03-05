define(['backbone', 'handlebars', 'ingredientView'], function(Backbone, Handlebars, IngredientView) {
  describe('The ingredient view', function() {


    describe('the deleteIngredient function', function() {
      var removeIngredient = IngredientView.prototype.removeIngredient,
      recipe = {
        get: jasmine.createSpy('recipeGetSpy').andReturn({
          get: jasmine.createSpy('recipeIngredientgetSpy').andReturn({destroy: jasmine.createSpy('destroySpy')})
        }),
        save: jasmine.createSpy('ingredientSaveSpy')
      },
      context = {
        model: {
          get: jasmine.createSpy('ingredientGetSpy').andReturn(recipe)
        }
      },
      e = {

      };

      removeIngredient.call(context, e);

      it('should remove itself from the parent recipe', function() {
        expect(context.model.get).toHaveBeenCalled();
        expect(context.model.get).toHaveBeenCalledWith('belongsTo');
      });

    });
  });
});