var expect = require('chai').expect;
var AModel = require('./helpers').AModel;

describe("restart all mementos", function(){
  beforeEach(function(){
    this.model = new AModel();
  });

  describe("when restarting", function(){
    it("should restart to first memento given successive save points", function(){
      var changed = false;
      this.model.set({foo: "bar"});
      this.model.store();
      this.model.set({foo: "baz"});
      this.model.store();
      this.model.set({foo: "qux"});
      this.model.store();

      this.model.bind("change:foo", function(){
        changed = true;
      });

      expect(this.model.get('foo')).to.equal('qux');
      this.model.restart();
      expect(changed).to.be.ok;
      expect(this.model.get('foo')).to.equal('bar');
    });

    it("should lose all other save points", function(){
      var changed = false;
      this.model.set({foo: "bar"});
      this.model.store();
      this.model.set({foo: "baz"});
      this.model.store();
      this.model.set({foo: "qux"});
      this.model.store();

      this.model.restart();
      this.model.restart();

      expect(this.model.get('foo')).to.equal('bar'); //should not be qux
    });

    it("should do nothing given no store point", function(){
      var changed = false;
      this.model.set({foo: "bar"});

      this.model.bind("change:foo", function(){
        changed = true;
      });
      this.model.restart();

      expect(this.model.get('foo')).to.equal('bar');
      expect(changed).to.not.be.ok;
    });
  });
});
