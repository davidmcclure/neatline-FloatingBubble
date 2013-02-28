
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Floating bubble events.
 *
 * @package     omeka
 * @subpackage  neatline-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Presenter.FloatingBubble', function(
  FloatingBubble, Neatline, Backbone, Marionette, $, _) {


  /**
   * Show the bubble.
   *
   * @param {Object} model: The record model.
   */
  var show = function(model) {
    FloatingBubble.__view.show(model);
  };
  Neatline.commands.addHandler(
    'PRESENTER:FloatingBubble:show', show
  );


  /**
   * Hide the bubble.
   */
  var hide = function() {
    FloatingBubble.__view.hide();
  };
  Neatline.commands.addHandler(
    'PRESENTER:FloatingBubble:hide', hide
  );


  /**
   * Select the bubble.
   *
   * @param {Object} model: The record model.
   */
  var select = function(model) {
    FloatingBubble.__view.select(model);
  };
  Neatline.commands.addHandler(
    'PRESENTER:FloatingBubble:select', select
  );


  /**
   * Unselect the bubble.
   */
  var unselect = function() {
    FloatingBubble.__view.unselect();
  };
  Neatline.commands.addHandler(
    'PRESENTER:FloatingBubble:unselect', unselect
  );


  /**
   * Activate the bubble.
   */
  var activate = function() {
    FloatingBubble.__view.activate();
  };
  Neatline.vent.on(
    'PRESENTER:activate', activate
  );


  /**
   * Deactivate and close the bubble.
   */
  var deactivate = function() {
    FloatingBubble.__view.deactivate();
    FloatingBubble.__view.unselect();
  };
  Neatline.vent.on(
    'PRESENTER:deactivate', deactivate
  );


});
