<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor integration version file.
 *
 * @package    atto_edusharing
 * @copyright  COPYRIGHTINFO
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();


/**
 * Initialise this plugin
 */
function atto_edusharing_strings_for_js() {
    global $PAGE;

    $PAGE->requires->strings_for_js(array(
        'pluginname',
        'dialogtitle',
        'settings',
        'insert',
        'update',
        'cancel',
        'title',
        'subtitle',
        'alwaysShowLatestVersion',
        'alignment',
        'alignmentLeft',
        'alignmentRight',
        'alignmentNone',
        'dimensions',
        'dimensionsWidth',
        'dimensionsheight',
        'hint1',
        'hint2',
        'customHint',
        'skipHint',
        'openRepo',
        'directoryHint',
    ),
        'atto_edusharing');
}

/**
 * Return the js params required for this module.
 * @return array of additional params to pass to javascript init function for this module.
 * @throws coding_exception
 * @throws dml_exception
 */
function atto_edusharing_params_for_js() {
    global $PAGE, $COURSE;

    $params = array();
    $coursecontext = context_course::instance($COURSE->id);

    // Disable edusharing button for content that is viewable on the front-page.
    $pagetype = $PAGE->pagetype;
    if ($pagetype == 'course-edit' || $pagetype == 'admin-setting-frontpagesettings') {
        $params['disabled'] = true;
        return $params;
    }

    if (!has_capability('atto/edusharing:visible', $coursecontext)) {
        $params['disabled'] = true;
        return $params;
    }


    $params['disabled'] = false;
    $params['repourl'] = trim(get_config('edusharing', 'application_cc_gui_url'), '/');
    $params['courseid'] = $COURSE->id;
    $params['attoHint'] = get_string('hint1', 'atto_edusharing') . '<br/><br/>' . get_string('hint2', 'atto_edusharing');
    if (!empty(get_config('edusharing', 'atto_hint'))){
        $params['attoHint'] = get_config('edusharing', 'atto_hint');
    }

    return $params;
}

