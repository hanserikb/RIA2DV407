define(['backbone', 'handlebars', '../../../src/views/dish.js', '../../../src/models/dish.js'], function(Backbone, Handlebars, DishView, DishModel) {
  describe('Dish view', function() {

    this.DishView = null;
    this.DishModel = null;

    beforeEach(function() {
      $('body').append('<ul id="dishes"></ul>');
      this.DishModel = new DishModel({
        name: "Pancakes",
        description: "Very good pcakes!",
        cookingTime: "15minutes"
      });
      this.DishView = new DishView({model: this.DishModel});
    });

    afterEach(function() {
      this.DishView.remove();
      $('#dishes').remove();
    });

    it('should be defined', function() {
      expect(DishView).toBeDefined();
    });

    it('should have a model associated', function() {
      expect(this.DishView.model).toBeDefined();
    })

    it('should have name in it', function() {
      this.DishView.model = ({name: 'Köttbullar'});
      expect(this.DishView.model.name).toEqual('Köttbullar');
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function() {
      expect(this.DishView.el.tagName.toLowerCase()).toBe('li');
    });

    describe('rendering', function() {
      
      it('returns the view object', function() {
        expect(this.DishView.render().el).toEqual(DishView.view);
      });

      it('produces correct HTML', function() {
        this.DishView.render();
        // Using jasmine's jquery-plugin to check containing HTML of the rendered template
        expect(this.DishView.el.innerHTML).toContain('<h2>Pancakes</h2>');
      });
    });

  });
});