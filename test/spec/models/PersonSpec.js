define(['/src/models/person.js'], function(Person) {

  describe('Tests for Person', function() {

    beforeEach(function() {
      this.person = new Person();
    })

    it('should have correct default first name', function(done) {
      expect(this.person.get('firstName')).toBe('Förnamn');
    });

    it('should have correct default last name', function(done) {
      expect(this.person.get('lastName')).toBe('Efternamn');
    });
  });
});