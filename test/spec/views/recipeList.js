define(['backbone', 'handlebars', '../../../src/views/recipeList', '../../../src/collections/dishes.js', '../../../src/models/dish.js'], function(Backbone, Handlebars, RecipeList, DishCollection, DishModel) {

  beforeEach(function() {
    $('body').append('<div id="content"></div>');
    this.dishCollection = new DishCollection();
    this.recipeList = new RecipeList({collection: this.dishCollection});
  });

  afterEach(function() {
    $('#content').remove();
    this.recipeList.remove();
    this.dishCollection.remove();
  });

  describe('Recipe collection view', function() {

    describe('when adding a model object', function() {

      // Checks the DOM if the div.dish-entry count increases after adding av model-object to the collection
      it('should add a entry to the view', function() {
        var length = this.recipeList.$el.find('.dish-entry').length;
        this.dishCollection.add(new DishModel({name: 'Meatballs', description: 'Mamma Mia, That\'s Some Spicy Meatball', cookingTime: '35 minutes'}));
        expect(this.recipeList.$el.find('.dish-entry').length).toBe(length+1);
      });

      // Tests if the DOM element generated from the template contains proper values from the added model
      it('should contain correct values in template', function() {
        // Adds a dish to the collection
        this.dishCollection.add(new DishModel({name: 'Meatballs', description: 'Mamma Mia, That\'s Some Spicy Meatball', cookingTime: '35 minutes'}));
        expect(this.recipeList.el.innerHTML).toContain('Meatballs');
        expect(this.recipeList.el.innerHTML).toContain('Mamma Mia, That\'s Some Spicy Meatball');
        expect(this.recipeList.el.innerHTML).toContain('35 minutes');
      });
    });

    describe('when removing a model object', function() {
      var obj = new DishModel({name: 'Meatballs', description: 'Mamma Mia, That\'s Some Spicy Meatball', cookingTime: '35 minutes'});
      it('it should be removed from the DOM', function() {
        this.dishCollection.add(obj);
        var length = this.recipeList.$el.find('.dish-entry').length;

        this.dishCollection.remove(obj);

        expect(this.recipeList.$el.find('.dish-entry').length).toBe(length-1);


      });
    });
  });
});
