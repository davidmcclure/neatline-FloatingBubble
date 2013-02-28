<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * Plugin runner.
 *
 * @package     omeka
 * @subpackage  neatline-presenter-FloatingBubble
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


if (!defined('NL_FLOAT_DIR')) define('NL_FLOAT_DIR', dirname(__FILE__));
require_once NL_FLOAT_DIR . '/NeatlinePresenterFloatingBubblePlugin.php';

$floatingBubble = new NeatlinePresenterFloatingBubblePlugin();
$floatingBubble->setUp();
