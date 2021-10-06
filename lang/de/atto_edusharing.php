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
 * Strings for component 'atto_edusharing', language 'de'.
 *
 * @package    atto_edusharing
 * @copyright  COPYRIGHTINFO
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['pluginname'] = get_config('edusharing', 'application_appname');
$string['dialogtitle'] = get_config('edusharing', 'application_appname') . ' Material';
$string['settings'] = 'edu-sharing (Atto)';
$string['insert'] = 'EINFÜGEN';
$string['update'] = 'AKTUALISIEREN';
$string['cancel'] = 'ABBRECHEN';
$string['title'] = 'Title';
$string['subtitle'] = 'Untertitel';
$string['alwaysShowLatestVersion'] = 'Immer die neuste Version anzeigen';
$string['alignment'] = 'Ausrichtung';
$string['alignmentLeft'] = 'Links umfließend';
$string['alignmentRight'] = 'Rechts umfließend';
$string['alignmentNone'] = 'Keine';
$string['dimensions'] = 'Dimensionen';
$string['dimensionsWidth'] = 'Breite';
$string['dimensionsheight'] = 'Höhe';
$string['openRepo'] = 'REPOSITORIUM ÖFFNEN';
$string['hint1'] = 'Wählen Sie ein '.get_config('edusharing', 'application_appname').' Objekt aus dem Repositorium, um es in Moodle einzubinden. Klicken Sie dazu auf "REPOSITORIUM ÖFFNEN".';
$string['hint2'] = 'Suchen Sie nun das gewünschte Objekt und betätigen Sie die "ÜBERNEHMEN" Schaltfläche.';
$string['skipHint'] = 'Beim nächsten Mal direkt zur Suche springen.';
$string['directoryHint'] = 'Der Ordner wird eingebunden. Elemente des Ordners werden angezeigt, nicht aber weitere Unterordner.';
$string['privacy:metadata'] = 'Das '.get_config('edusharing', 'application_appname').' atto-Plugin speichert keine Benutzerdaten.';

$string['edusharing:visible'] = 'edu-sharing atto-plugin Sichtbarkeit';

$string['error_resource_not_found'] = 'Ressource kann nicht gefunden werden.';
$string['error_deleting_instance'] = 'Fehler beim Löschen der edu-sharing Instanz.';
$string['error_deleting_capability'] = 'Keine Berechtigung zum Löschen.';
$string['error_fetching_capability'] = 'Keine Berechtigung zum Holen der Datei.';
$string['error_insert_capability'] = 'Keine Berechtigung zum Einfügen der Datei.';
