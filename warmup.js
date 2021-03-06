
var stub_module = (function($) {
  var obj = {};
  var hidden_var = "hidden";
  var hidden_method = function() { return "hidden"; };
  var public_var = "public";

  obj.getPublicVar = function() {
    return public_var;
  };
  obj.setPublicVar = function(val) {
    return public_var = val;
  };
  obj.public_method = function() {
    return getPublicVar() + " " + hidden_var;
  };

  return obj;
})(jQuery);

var module = (function($, stub_module) {
  var hidden_var = "hidden";
  var hidden_method = function() { return "hidden"; };
  var public_var = "public";

  var getPublicVar = function() {
    return public_var;
  };
  var setPublicVar = function(val) {
    return public_var = val;
  };

  return {
    get_public_var: get_public_var,
    set_public_var: set_public_var,
    public_method: stub_module.public_method
  };
})(jQuery, stub_module);
