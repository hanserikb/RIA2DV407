define(['addRecipeView'], function(AddRecipeView) {

  // ## Test suite for the addRecipe view
  describe('the AddRecipeView view', function() {

    // ### Tests for the initialize function
    describe('the initialize function', function() {

      // Catch the method from the prototype
      var initialize = AddRecipeView.prototype.initialize,

      // Create a fake context conaining things relevant to the tested method
      context = {
        listenTo: jasmine.createSpy('listenToSpy'),
        render: jasmine.createSpy('renderSpy'),
        toggleModal: jasmine.createSpy('toggleModalSpy')
      };

      // Call the method with the fake context
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

    // ### Tests for the checkError function
    describe('the checkErrors function', function() {

      // Catch the method from the prototype
      var checkErrors = AddRecipeView.prototype.checkErrors,

      // Fake model with spies and errors
      model = {
        isValid: jasmine.createSpy('isValidSpy').andReturn(true),
        validationError: [
        {
          message: 'Error #1'
        },
        {
          message: 'Error #2'
        },
        {
          message: 'Error #3'
        }
        ]
      },

      // Fake the el property and add some spies to it
      $el = {
        html: jasmine.createSpy('htmlSpy'),
        append: jasmine.createSpy('appendSpy'),
        modal: jasmine.createSpy('modalSpy')
      },

      // Fake the context and add the el property to $
      context = {
        $: jasmine.createSpy('stub').andReturn($el)
      };

      // Call it
      checkErrors.call(context, model);

      it('should use the correct selector', function() {
        expect(context.$).toHaveBeenCalledWith('#errors');
      });

      it('should clear the dom', function() {
        expect($el.html).toHaveBeenCalledWith('');
      });

      it('should check if the model object is valid', function() {
        expect(model.isValid).toHaveBeenCalled();
      });

      it('should call the append method as many times as the error messages count', function() {
        expect($el.append).toHaveBeenCalled();
        expect($el.append.callCount).toBe(3);
      });
    });
// ### Tests for the addRecipe method
describe('the addRecipe method', function() {

  // Catch the method from the prototype
  var addRecipe = AddRecipeView.prototype.addRecipe,

  // Fake the el property and add some spies to it
  $el = {
    html: jasmine.createSpy('htmlSpy'),
    append: jasmine.createSpy('appendSpy'),
    modal: jasmine.createSpy('modalSpy').andReturn({css: jasmine.createSpy('addSpy')})
  },

  // Fake the context and add a collection property with a spy to it. And a model. And $+el
  context = {
    collection: {
      add: jasmine.createSpy('addSpy')
    },
    model: jasmine.createSpy('modelSpy'),
    $: jasmine.createSpy('stub').andReturn($el)
  },

  // Fake the event parameter
  e = {
    preventDefault: jasmine.createSpy('preventDefaultSpy')
  };

  // Ring ring!
  addRecipe.call(context, e);

  it('should prevent the default action to be triggered', function() {
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('should add the model to the collection', function() {
    expect(context.collection.add).toHaveBeenCalled();
  });

  it('should toggle the modal', function() {
    expect($el.modal).toHaveBeenCalled();
  });
});
// ### Tests for the toggleModal function
describe('the toggleModal function', function() {

  // Catch the method from the prototype
  var toggleModal = AddRecipeView.prototype.toggleModal,

  // Fake stuff
  model = { isValid: true },
  css = {
    css: jasmine.createSpy('cssSpy')
  },
  $el = {
    html: jasmine.createSpy('htmlSpy'),
    append: jasmine.createSpy('appendSpy'),
    modal: jasmine.createSpy('modalSpy').andReturn(css)
  },
  context = {
    $: jasmine.createSpy('stub').andReturn($el)
  };

  // Make a call!
  toggleModal.call(context, model);

  it('should have called the modal function', function() {
    expect(context.$).toHaveBeenCalledWith('#add-recipe-modal');
  });
});

});
});
