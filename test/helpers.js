var _ = require('underscore');
var Backbone = require('backbone');
var Memento = require('../backbone.memento');

exports.AModel = Backbone.Model.extend({
  initialize: function(){
    var memento = new Backbone.Memento(this);
    _.extend(this, memento);
  }
});

exports.ACollection = Backbone.Collection.extend({
  initialize: function(){
    var memento = new Backbone.Memento(this);
    _.extend(this, memento);
  }
});

exports.IgnoredAttrsModel = Backbone.Model.extend({
  initialize: function(){
    var memento = new Backbone.Memento(this, {
      ignore: ["ignoreMe"]
    });
    _.extend(this, memento);
  }
});
