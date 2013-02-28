
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Floating bubble view.
 *
 * @package     omeka
 * @subpackage  neatline-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Presenter.FloatingBubble', function(
  FloatingBubble, Neatline, Backbone, Marionette, $, _) {


  FloatingBubble.View = Backbone.Neatline.View.extend({


    template:   '#floating-bubble-template',
    className:  'bubble',
    id:         'floating-bubble',

    options: {
      pad: {
        x: 40,
        y: 15
      }
    },


    /**
     * Initialize trackers, get markup.
     */
    initialize: function() {

      this.active = true;   // True when bubble should be displayed.
      this.frozen = false;  // True when bubble is frozen after a click.
      this.getTemplate();
      this.getUi();

      // Track window size.
      this.window = $(window);
      this.window.resize(_.bind(this.measureWindow, this));
      this.measureWindow();

    },


    /**
     * Get the window height and width.
     */
    measureWindow: function() {
      this.windowH = this.window.outerHeight();
      this.windowW = this.window.outerWidth();
    },


    /**
     * Get the bubble height and width.
     */
    measureBubble: function() {
      this.$el.height('');
      this.bubbleH = this.el.scrollHeight;
      this.bubbleW = this.$el.outerWidth();
    },


    /**
     * Render values, inject bubble, add move listener.
     *
     * @param {Object} model: The record model.
     */
    show: function(model) {
      if (!this.frozen && this.active) {

        // Create reference-able event callbacks.
        this.onMouseMove = _.bind(this.position, this);
        this.onMouseOut  = _.bind(this.hide, this);

        // Bind to mousemove and mouseout.
        var map = Neatline.request('MAP:getMap');
        map.events.register('mousemove',  null, this.onMouseMove);
        map.events.register('mouseout',   null, this.onMouseOut);

        // Render template, inject bubble.
        rivets.bind(this.$el, { record: model });
        this.$el.appendTo(Neatline.Map.__view.$el);

        // Measure the new content.
        this.measureBubble();

      }
    },


    /**
     * Hide the bubble.
     */
    hide: function() {
      if (!this.frozen) {
        this.conceal();
        this.$el.detach();
        this.unbind();
      }
    },


    /**
     * Freeze the bubble.
     */
    select: function() {
      this.frozen = true;
      this.$el.addClass('frozen');
      this.unbind();
    },


    /**
     * Unfreeze and hide the bubble.
     */
    unselect: function() {
      this.frozen = false;
      this.$el.removeClass('frozen');
      this.hide();
    },


    /**
     * Enable the bubble.
     */
    activate: function() {
      this.active = true;
    },


    /**
     * Disable the bubble
     */
    deactivate: function() {
      this.active = false;
    },


    /**
     * Render position.
     *
     * @param {Object} e: The mousemove event.
     */
    position: function(e) {

      var css = {
        left:         e.clientX + this.options.pad.x,
        top:          e.clientY - this.options.pad.y,
        'overflow-y': 'hidden'
      };

      // If the right edge of the bubble is off-screen, move the bubble to
      // this left side of the cursor.
      if (css.left + this.bubbleW > this.windowW) {
        css.left = e.clientX - this.options.pad.x - this.bubbleW;
      }

      // If the height of the bubble content is larger then the height of
      // the window, set the bubble to occupy the height of the window and
      // enable vertical scrolling on the content.
      if (this.bubbleH > this.windowH) {
        this.$el.outerHeight(this.windowH);
        css['overflow-y'] = 'scroll';
        css.top = 0;
      }

      // If the bottom of the bubble is off-screen, stick the bubble at
      // the bottom of the screen
      else if (css.top + this.bubbleH > this.windowH) {
        css.top = this.windowH - this.bubbleH;
      }

      // If the top of the bubble is off-screen, stick the bubble at the
      // top of the screen.
      else if (css.top < 0) {
        css.top = 0;
      }

      this.$el.css(css);

    },


    /**
     * Position the bubble off-screen.
     */
    conceal: function() {
      this.$el.css({ left: -1000, top: -1000 });
    },


    /**
     * Unbind move and leave listeners.
     */
    unbind: function() {
      var map = Neatline.request('MAP:getMap');
      map.events.unregister('mousemove', null, this.onMouseMove);
      map.events.unregister('mouseout',  null, this.onMouseOut);
    }


  });


});
