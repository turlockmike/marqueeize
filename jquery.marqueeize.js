(function($) {
  $.fn.marqueeize = function(opts) {
    opts = opts || {};
    var self = this,
      speed = opts.speed || 110, //Pixels per second
      wait = opts.wait || 2000,
      easing = opts.easing || "linear",
      started = opts.started || $.noop,
      finished = opts.finished || $.noop,
      reached = opts.reached || $.noop;

    this.each(function(index, element) {
      console.info("each element", element);
      var $element = $(element);
      var width = $element.outerWidth(true);
      var parentWidth = $element.parent().outerWidth(true);
      console.info("widths", width, parentWidth);
      if (parentWidth < width) {
        $element.css({"-webkit-transition-duration": "0ms"});
        $element.css("-webkit-transform", "translate3d(0,0,0)");
        setTimeout(function() {
          started();
          $element.css("-webkit-transition-timing-function", "linear");
          $element.css("-webkit-transition-duration", (((width - parentWidth) / speed) * 1000) + "ms");
          $element.css("-webkit-transform", "translate3d(" + (parentWidth - width) + "px,0,0)");
          $element.one("webkitTransitionEnd", function() {
            reached();
            setTimeout(function() {
              $element.css({"-webkit-transition-duration": "0ms"});
              $element.css("-webkit-transform", "");
              finished();
            }, wait)
          })
        }, wait);
      }
    });
    return this;
  };
}(jQuery));

