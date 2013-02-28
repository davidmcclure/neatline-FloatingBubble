<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Plugin manager class.
 *
 * @package     omeka
 * @subpackage  neatline-presenter-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineFloatingBubblePlugin extends Omeka_Plugin_AbstractPlugin
{


    protected $_hooks = array(
        'neatline_public_js',
        'neatline_editor_js'
    );


    protected $_filters = array(
        'neatline_presenters'
    );


    /**
     * Add presenter to public payload.
     */
    public function hookNeatlinePublicJs()
    {
        // TODO
        // queue_js_file('payloads/FloatingBubble');
    }


    /**
     * Add presenter to editor payload.
     */
    public function hookNeatlineEditorJs()
    {
        // TODO
        // queue_js_file('payloads/FloatingBubble');
    }


    /**
     * Register the presenter.
     *
     * @param array $presenters Array of presenter name => ids.
     * @return array The modified array.
     */
    public function filterNeatlinePresenters($presenters)
    {
        return array_merge($presenters, array(
            'Floating Bubble' => 'FloatingBubble'
        ));
    }


}
