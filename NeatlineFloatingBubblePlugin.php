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
        'neatline_public_css',
        'neatline_editor_js',
        'neatline_editor_css',
        'neatline_templates'
    );


    protected $_filters = array(
        'neatline_presenters'
    );


    /**
     * Add presenter to public .js payload.
     */
    public function hookNeatlinePublicJs()
    {
        queue_js_file('payloads/bubble');
    }


    /**
     * Add presenter to public .css payload.
     */
    public function hookNeatlinePublicCss()
    {
        queue_css_file('payloads/bubble');
    }


    /**
     * Add presenter to editor .js payload.
     */
    public function hookNeatlineEditorJs()
    {
        queue_js_file('payloads/bubble');
    }


    /**
     * Add presenter to editor .css payload.
     */
    public function hookNeatlineEditorCss()
    {
        queue_css_file('payloads/bubble');
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
     * @param array $presenters Presenters, NAME => ID.
     * @return array The array, with FloatingBubble.
     */
    public function filterNeatlinePresenters($presenters)
    {
        return array_merge($presenters, array(
            'Floating Bubble' => 'FloatingBubble'
        ));
    }


}
