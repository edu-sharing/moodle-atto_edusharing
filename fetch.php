<?php
// This file is part of Moodle - http://moodle.org/
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Fetches data for js
 *
 * @package    editor_edusharing
 * @copyright  metaVentis GmbH — http://metaventis.com
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


require_once(__DIR__ . '/../../../../../config.php');
require_once($CFG->dirroot . '/mod/edusharing/lib/cclib.php');
require_once($CFG->dirroot . '/mod/edusharing/locallib.php');

require_login();

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

switch ($json_obj['useCase']) {
    case 'getTicket':
        $ccauth = new mod_edusharing_web_service_factory();
        $ticket = $ccauth->edusharing_authentication_get_ticket();
        echo $ticket;
        break;
    default:
        echo "Error: No useCase";
}

exit();



