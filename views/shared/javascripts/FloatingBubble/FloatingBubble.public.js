
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Floating bubble events.
 *
 * @package     omeka
 * @subpackage  neatline-presenter-FloatingBubble
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
    'presenter:SmallBubble:show', show
  );


  /**
   * Hide the bubble.
   */
  var hide = function() {
    FloatingBubble.__view.hide();
  };

  Neatline.commands.addHandler(
    'presenter:SmallBubble:hide', hide
  );


  /**
   * Freeze the bubble.
   */
  var select = function() {
    FloatingBubble.__view.select();
  };

  Neatline.commands.addHandler(
    'presenter:SmallBubble:select', select
  );


  /**
   * Unfreeze and hide the bubble.
   */
  var unselect = function() {
    FloatingBubble.__view.unselect();
  };

  Neatline.commands.addHandler(
    'presenter:SmallBubble:unselect', unselect
  );


  /**
   * Activate the bubble.
   */
  var activate = function() {
    SmallBubble.__view.activate();
  };

  Neatline.vent.on(
    'presenter:activate', activate
  );


  /**
   * Deactivate and close the bubble.
   */
  var deactivate = function() {
    SmallBubble.__view.deactivate();
    SmallBubble.__view.unselect();
  };

  Neatline.vent.on(
    'presenter:deactivate', deactivate
  );


});
