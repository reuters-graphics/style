import colors, { sequential } from '../dist';

import { blue } from '../dist/sequential';
import expect from 'expect.js';

describe('Colors', function() {
  describe('Imports', function() {
    it('should import all schemes', function() {
      expect(colors).to.be.an('object');
      expect(colors.sequential).to.be.an('object');
    });
    it('should import a destructured color family', function() {
      expect(sequential).to.be.an('object');
    });
    it('should import a destructured color scheme', function() {
      expect(blue.all.length).to.be(6);
    });

    // ... more TK
  });
});
