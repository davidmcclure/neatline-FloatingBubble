<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Plugin runner.
 *
 * @package     omeka
 * @subpackage  neatline-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


if (!defined('NL_FLOATING_BUBBLE_DIR')) {
    define('NL_FLOATING_BUBBLE_DIR', dirname(__FILE__));
}

require_once(
    NL_FLOATING_BUBBLE_DIR . '/NeatlineFloatingBubblePlugin.php'
);

$floatingBubble = new NeatlineFloatingBubblePlugin();
$floatingBubble->setUp();
