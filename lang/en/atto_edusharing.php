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
 * Strings for component 'atto_edusharing', language 'en'.
 *
 * @package    atto_edusharing
 * @copyright  COPYRIGHTINFO
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['pluginname'] = get_config('edusharing', 'application_appname');
$string['dialogtitle'] = get_config('edusharing', 'application_appname').' material';
$string['settings'] = 'edu-sharing (Atto)';
$string['insert'] = 'EMBED';
$string['update'] = 'UPDATE';
$string['cancel'] = 'CANCEL';
$string['title'] = 'Title';
$string['subtitle'] = 'Caption';
$string['alwaysShowLatestVersion'] = 'Always use the latest version.';
$string['alignment'] = 'Alignment';
$string['alignmentLeft'] = 'float left';
$string['alignmentRight'] = 'float right';
$string['alignmentNone'] = 'none';
$string['dimensions'] = 'Dimensions';
$string['dimensionsWidth'] = 'Width';
$string['dimensionsheight'] = 'Height';
$string['openRepo'] = 'OPEN REPOSITORY';
$string['hint1'] = 'Select an '.get_config('edusharing', 'application_appname').' object from the repository to embed it in Moodle. Click on "OPEN REPOSITORY".';
$string['hint2'] = 'Search for the desired object and click the "APPLY" button.';
$string['skipHint'] = 'Open the search engine right away next time.';
$string['directoryHint'] = 'The folder was embedded. Elements of the folder will be displayed, but not its subfolders.';
$string['privacy:metadata'] = 'The '.get_config('edusharing', 'application_appname').' atto-plugin does not store any user data.';

$string['edusharing:visible'] = 'edu-sharing atto-plugin visibility';

$string['error_resource_not_found'] = 'Resource not found.';
$string['error_deleting_instance'] = 'Error deleting edu-sharing instance.';
$string['error_deleting_capability'] = 'No capability to delete.';
$string['error_fetching_capability'] = 'No capability to fetch file.';
$string['error_insert_capability'] = 'No capability to insert file.';

