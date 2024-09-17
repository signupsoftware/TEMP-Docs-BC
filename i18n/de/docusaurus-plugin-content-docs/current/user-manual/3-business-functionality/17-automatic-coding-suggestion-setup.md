---
title: Einrichtung der automatischen Kodierungsvorschläge
sidebar_position: 17
hide_title: true
---
## Einrichtung der automatischen Kodierungsvorschläge

Gehen Sie zu: ***Setup \--\> ExFlow Automatic Coding Suggestion Setup***<br/>
Für die Einrichtung und Aktivierung dieser Funktion wenden Sie sich an Ihren Business Central Partner oder SignUp Software.

Diese Funktion in ExFlow ermöglicht es, automatische Kodierungsvorschläge im Importjournal basierend auf historisch gebuchten Dokumenten zu erhalten. Diese Funktion funktioniert für Rechnungen und Gutschriften.

Um diese Funktion nutzen zu können, muss sie zuerst an einigen Stellen eingerichtet werden.

![ExFlow Menü](@site/static/img/media/exflow-meny-auto-coding-001.png)

### Einen neuen Kodierungsvorschlag hinzufügen

| Kodierungsvorschlag-Einrichtung      |	|
|:-|:-|
| **Quelltyp:**                                          |Gen. Bus. Buchungsgruppe, Kreditorenbuchungsgruppe, Kreditor oder Alle. Dies definiert die Gruppierung der von ExFlow erstellten Vorschläge
| **Quellnummer:**                                       | Dies definiert, welche Nummer aus dem spezifischen "Quelltyp" in dieser Einrichtung verwendet werden soll. <br/>Wenn die Quellnummer für den Quelltyp Kreditor leer bleibt, erfolgt die Gruppierung pro Kreditor für alle Kreditoren. <br/>Durch die Erstellung einer Einrichtung mit dem Quelltyp Kreditor und leerer Quellnummer werden Kodierungsvorschläge von jedem Kreditor erstellt, wobei die Vorschläge immer nach Kreditor gefiltert werden
| **Beschreibung:**                                      | Beschreibender Text. (max. 100 Zeichen)
| **Tagesmultiplikator:**                                | Dies definiert, wie stark die Anzahl der Tage seit der letzten Rechnung für diese Einrichtung die Priorität für die vorgeschlagene Kodierung beeinflusst. Je größer die Zahl, desto größer der Multiplikator. Der Multiplikator sollte einen negativen Wert haben. Z.B. -10 hat einen größeren Einfluss als -1
| **Vorkommensmultiplikator:**                           | Dies definiert, wie stark die Anzahl der Rechnungen in der Vorschlags-ID innerhalb dieser Einrichtung die Priorität für die vorgeschlagene Kodierung beeinflusst. Je größer die Zahl, desto größer der Multiplikator. Der Multiplikator sollte einen negativen Wert haben. Z.B. -10 hat einen größeren Einfluss als -1
| **Betragsbereich %:**                                  | Dies definiert den Prozentsatz (plus/minus) des Betrags, der auf die Vorschlags-ID angewendet wird, in der eine spezifische Kodierung für ein Dokument gespeichert wird
| **Mindestanzahl an Dokumenten für die Gültigkeit des Vorschlags:** | Die Mindestanzahl an Dokumenten, die der Vorschlags-Einrichtungs-ID hinzugefügt werden müssen, damit ein Vorschlag aus dieser Vorschlags-ID automatisch ausgewählt wird
| **Gruppierung nach Währung:**                          | Dies definiert, ob die Gruppierung nach Währung erfolgen soll
| **Gruppierung nach Referenz:**                         | Dies definiert, ob die Gruppierung mit ExFlow-Referenzcodes spezifiziert erfolgen soll.<br/><br/>

Die folgenden Schaltflächen sind auf dieser Seite verfügbar:

| Funktionen      |	|
|:-|:-|
| **Vorschlag erstellen:**    | Diese Schaltfläche durchläuft die Einrichtung und fügt Vorschläge zur Vorschlags-ID hinzu
| **Vorschläge:**             | Dies zeigt die erstellte Vorschlags-ID für die ausgewählte Einrichtung
| **Vorschläge löschen:**     | Dies löscht die Vorschlags-IDs

![ExFlow Kodierungsvorschlag-Einrichtung](@site/static/img/media/coding-suggestion-setup-001.png)

### Aktivierung der automatischen Kodierungsvorschläge

#### ExFlow Einrichtung

Aktivieren Sie diese Funktion in der ExFlow-Einrichtung, indem Sie diese Funktion für alle Kreditoren oder ausgewählte Kreditoren aktivieren.

Wenn "Ausgewählte Kreditoren" aktiviert ist, muss auch "Automatische Kodierungsvorschläge verwenden" für die Kreditoren (in der ExFlow-Kreditoren-Einrichtungskarte) aktiviert werden, für die diese Funktion aktiviert werden soll.

| ExFlow Einrichtung - Automatische Kodierungsvorschläge      |	|
|:-|:-|
| **Gruppierung von Dokumenten in Vorschlagszeilen mit Betrag:**    | Definiert, welche Vorschlags-ID einer Kodierung zugeordnet wird
| **Kodierungsvorschlagsentscheidung basierend auf dem Betrag:**    | Gibt an, wie die Vorschlagszeile basierend auf dem Betrag des Dokuments ausgewählt wird
| **Automatische Kodierung für importiertes Dokument vorschlagen:** | Gibt an, wie der automatische Kodierungsvorschlag verwendet wird
| **Vorschläge ab Datum berechnen:**                             | Gibt das Startdatum der Dokumente an, die in die Kodierungsvorschläge einfließen sollen
| **Automatische Kodierungsbeträge aus Kodierungssatz-ID vorschlagen:** | Gibt an, ob die Beträge automatisch in den erstellten Zeilen aus der Kodierungssatz-ID vorgeschlagen werden

![ExFlow Einrichtung - Automatische Vorschläge](@site/static/img/media/exflow-setup-automatic-suggestion-001.png)

#### Importjournal

Aktivieren Sie "Zeilen mit automatischem Vorschlag erstellen", um diese Funktion für ein bestimmtes Importjournal zu aktivieren. (Dieses Feld muss möglicherweise über die Personalisierung zur Seite hinzugefügt werden)

![ExFlow Importjournale](@site/static/img/media/import-journals-008.png)

#### Periodische Aktivitäten

Um den automatischen Kodierungsvorschlag anzuwenden, müssen die Funktionen ExFlow Kodierungssatz-IDs für Kodierungsvorschläge und ExFlow Erstellung automatischer Kodierungsvorschläge ausgeführt werden. Beim ersten Gebrauch des automatischen Kodierungsvorschlags müssen beide Jobs mindestens einmal ausgeführt werden. Danach kann die Wiederholung in den entsprechenden Job-Warteschlangen-Einträgen angepasst werden.

![Periodische Aktivitäten](@site/static/img/media/exflow-menu-005-periodic-activities.png)
