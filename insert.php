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
 * Called on object insertion
 *
 * @package    atto_edusharing
 * @copyright  metaVentis GmbH — http://metaventis.com
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once( __DIR__ . '/../../../../../config.php');
require_once($CFG->dirroot . '/lib/setup.php');

require_login();
require_sesskey();

$coursecontext = context_course::instance($_GET['courseid']);
if (!has_capability('atto/edusharing:visible', $coursecontext)) {
    trigger_error(get_string('error_insert_capability', 'editor_edusharing'), E_USER_WARNING);
    header('', true, 500);
    exit();
}

require_once($CFG->dirroot . '/mod/edusharing/lib.php');

try {

    $input = file_get_contents('php://input');
    if (!$input) {
        throw new Exception(get_string('error_json', 'editor_edusharing'));
    }

    $edusharing = json_decode($input);
    if (!$edusharing) {
        throw new Exception(get_string('error_json', 'editor_edusharing'));
    }

    $edusharing->editor_atto = true;

    $id = edusharing_add_instance($edusharing);
    if (!$id) {
        throw new Exception(get_string('error_adding_instance', 'editor_edusharing'));
    }

    $edusharing->id = $id;
    $edusharing->src = $CFG->wwwroot . '/mod/edusharing/pix/edusharing.png';


    header('Content-type: application/json', true, 200);
    echo json_encode($edusharing);
} catch (Exception $exception) {
    trigger_error($exception->getMessage(), E_USER_WARNING);
    header('HTTP/1.1 500 Internal Server Error', true, 500);
}
