define(['underscore', 'addRecipeView', 'recipeModel'], function(_, AddRecipeView, RecipeModel) {
  // ## Test suite for the addRecipe view
  describe('the initialize function', function() {

      var initialize = AddRecipeView.prototype.initialize,
        context = {
          listenTo: jasmine.createSpy('listenToSpy').andReturn(context),
          render: jasmine.createSpy('renderSpy').andReturn(context),
          toggleModal: jasmine.createSpy('toggleModalSpy').andReturn(context)
        };

      initialize.call(context);

      it('called listenTo correctly', function() {
        expect(context.listenTo).toHaveBeenCalled();
        expect(context.listenTo.callCount).toBe(2);

        expect(context.listenTo.mostRecentCall.args).toEqual([context.model, 'change', context.modelChanged]);
      });

      it('called render', function() {
        expect(context.render).toHaveBeenCalled();
        expect(context.render.callCount).toBe(1);
      });

      it('called toggleModal', function() {
        expect(context.toggleModal).toHaveBeenCalled();
        expect(context.toggleModal.callCount).toBe(1);
      });

  });
  
  describe('the checkErrors function', function() {
    var checkErrors = AddRecipeView.prototype.checkErrors,
      model = {isValid: false},
      $el = {
        html: jasmine.createSpy('htmlSpy'),
        append: jasmine.createSpy('appendSpy'),
        modal: jasmine.createSpy('modalSpy')
      },
      context: {
        $: jasmine.createSpy('stub').andReturn($el)
      };

      checkErrors.call(context, model);

      it('should use the correct selector', function() {
        expect(context.$).toHaveBeenCalledWith('#errors');
      });

      it('should clear the dom', function() {
        expect($el.html).toHaveBeenCalledWith('');
      });

  });

  describe('the toggleModal function', function() {
    var toggleModal = AddRecipeView.prototype.toggleModal,
      model = { isValid: true },

      $el = {
        html: jasmine.createSpy('htmlSpy'),
        append: jasmine.createSpy('appendSpy'),
        modal: jasmine.createSpy('modalSpy')
      },

      context = {
        $: jasmine.createSpy('stub').andReturn($el),
      };

      toggleModal.call(context, model);

      waits(0);

      it('should have called the modal function', function() {
        expect(context.$).toHaveBeenCalledWith('#add-recipe-modal');
      });

  });


  describe('The addRecipe view', function() {

    addRecipeView = null;

    beforeEach(function() {
      addRecipeView = new AddRecipeView({model: new RecipeModel()});
    });

    it('should have a dish model connected to it', function() {
      expect(addRecipeView.model).toBeDefined();
    });
  });
});
