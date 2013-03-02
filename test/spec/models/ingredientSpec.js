define(['ingredientModel'], function(IngredientModel) {
  describe('The ingredient model', function() {
    
    it('should validate empty properties', function() {
      var validate = IngredientModel.prototype.validate,
      model = {
        name: "",
        amount: ""
      };

      var ret = validate.call({}, model);

      expect(Object.prototype.toString.call(ret)).toBe("[object Array]");

      expect(ret.length).toBe(2);
    });
  })
});