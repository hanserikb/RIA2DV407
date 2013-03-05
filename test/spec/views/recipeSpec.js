define(['backbone', 'handlebars', 'recipeView', 'recipeModel'], function(Backbone, Handlebars, RecipeView, RecipeModel) {
  describe('Dish view', function() {

    this.RecipeView = null;
    this.RecipeModel = null;

    beforeEach(function() {
      $('body').append('<ul id="dishes"></ul>');
      this.RecipeModel = new RecipeModel({
        name: "Pancakes",
        description: "Very good pcakes!",
        cookingTime: "15minutes"
      });
      this.RecipeView = new RecipeView({model: this.RecipeModel});
    });

    afterEach(function() {
      this.RecipeView.remove();
      $('#dishes').remove();
    });

    it('should be defined', function() {
      expect(RecipeView).toBeDefined();
    });

    it('should have a model associated', function() {
      expect(this.RecipeView.model).toBeDefined();
    })

    it('should have name in it', function() {
      this.RecipeView.model = ({name: 'Köttbullar'});
      expect(this.RecipeView.model.name).toEqual('Köttbullar');
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function() {
      expect(this.RecipeView.el.tagName.toLowerCase()).toBe('div');
    });

    describe('rendering', function() {
      
      it('returns the view object', function() {
        expect(this.RecipeView.render()).toEqual(this.RecipeView);
      });

      it('produces correct HTML', function() {
        this.RecipeView.render();
        // Using jasmine's jquery-plugin to check containing HTML of the rendered template
        expect(this.RecipeView.el.innerHTML).toContain('<h2>Pancakes</h2>');
      });
    });

  });
});