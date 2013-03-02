define(['backbone', 'handlebars', 'showRecipeView'], function(Backbone, Handlebars, ShowRecipeView) {

  describe('the showRecipe view', function() {


    describe('the render function', function() {
      var render = ShowRecipeView.prototype.render,
      $el = {
        html: jasmine.createSpy('htmlSpy')
      },
      context = {
        model: {
          toJSON: jasmine.createSpy('toJSONSpy')
        },
        template: jasmine.createSpy('templateSpy'),
        $: jasmine.createSpy('jquerySpy'),
        $el: {
          html: jasmine.createSpy('htmlSpy')
        }
      };

      var response = render.call(context);

      it('should compile the template and add it to the element ', function() {
        expect(context.$el.html).toHaveBeenCalledWith(context.template());
        //expect(context.template).toHaveBeenCalledWith(context.model.toJSON);
        expect(context.model.toJSON).toHaveBeenCalled();


      });

      it('should return itself', function() {
        expect(response).toBe(context);
      });


    });
  });
});