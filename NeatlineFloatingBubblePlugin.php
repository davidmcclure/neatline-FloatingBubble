<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Plugin manager class.
 *
 * @package     omeka
 * @subpackage  neatline-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineFloatingBubblePlugin extends Omeka_Plugin_AbstractPlugin
{


    protected $_hooks = array(
        'neatline_public_js',
        'neatline_editor_js',
        'neatline_templates'
    );


    protected $_filters = array(
        'neatline_presenters'
    );


    /**
     * Add presenter to public payload.
     */
    public function hookNeatlinePublicJs()
    {
        queue_js_file('payloads/FloatingBubble');
    }


    /**
     * Add presenter to editor payload.
     */
    public function hookNeatlineEditorJs()
    {
        queue_js_file('payloads/FloatingBubble');
    }


    /**
     * Include bubble template.
     */
    public function hookNeatlineTemplates()
    {
        echo common('_floating_bubble');
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
