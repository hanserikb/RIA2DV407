define(['../../../src/views/addRecipe.js', '../../../src/models/dish.js'], function(AddRecipeView, DishModel) {
  // ## Test suite for the addRecipe view
  describe('the initialize function', function() {
      var initialize = AddRecipeView.prototype.initialize,
        context = {
          listenTo: jasmine.createSpy('listenToSpy').andReturn(context),
          render: jasmine.createSpy('renderSpy').andReturn(context)
      };
      initialize.call(context);

      it('called listenTo correctly', function() {
        expect(context.listenTo).toHaveBeenCalled();
        expect(context.listenTo.callCount).toBe(2);

        expect(context.listenTo.mostRecentCall.args).toEqual([context.model, "change", context.modelChanged])
      });

      it('called render', function() {
        expect(context.render).toHaveBeenCalled();
        expect(context.render.callCount).toBe(1);
      });

  });


  describe('The addRecipe view', function() {

    addRecipeView = null;

    beforeEach(function() {
      addRecipeView = new AddRecipeView({model: new DishModel()});
    });

    it('should have a dish model connected to it', function() {
      expect(addRecipeView.model).toBeDefined();
    });
  });
});
