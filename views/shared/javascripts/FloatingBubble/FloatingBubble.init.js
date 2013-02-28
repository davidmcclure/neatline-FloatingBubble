
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Floating bubble initializer.
 *
 * @package     omeka
 * @subpackage  neatline-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Presenter.FloatingBubble', function(
  FloatingBubble, Neatline, Backbone, Marionette, $, _) {


  FloatingBubble.init = function() {
    this.__view = new FloatingBubble.View();
  };

  FloatingBubble.addInitializer(FloatingBubble.init);


});
