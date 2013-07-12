(function($) {
  // default settings
  var defaults = {
    thumbnailOpacity: 0.3,
    thumbnailName: function(path) {
      return path.replace('.', '-thumb.');
    },
    retinaName: function(path) {
      return path.replace('.', '@2x.');
    }
  };

  // The Lens object itself. Instantiated for each Lens gallery
  var Lens = function(element, options) {
    this.el = element;
    this.$el = $(element);

    this.options = $.extend({}, defaults, options);

    this.init();
  };

  // Initializes the plugin for this instance
  Lens.prototype.init = function() {
    console.log('lens init');
  };


  // Plugin wrapper for jQuery
  $.fn.lens = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin-lens')) {
        var plugin = new Lens(this, options);
        $.data(this, 'plugin-lens', plugin);
      }
    });
  }
}(jQuery));
