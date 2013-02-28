define(['recipeModel', 'recipeCollection'], function(recipeModel, receipeCollection) {
  recipes = new recipeModel();

  describe('Dish Collection', function() {
    it('should exist', function() {
      expect(receipeCollection).toBeDefined();
    });

  });
  
});