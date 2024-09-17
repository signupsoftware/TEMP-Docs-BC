---
title: Berichte
sidebar_position: 3
hide_title: true
---
## Berichte

Gehen Sie zu ExFlow Reports, um Berichte zu erstellen. Berichte sind in Abschnitte unterteilt, wie unten angegeben:

![Report - ExFlow Approval Status](@site/static/img/media/reports-homepage-001.png)

### Berichte --> Dokumente

| Berichte --> Dokumente |  | 
|:-|:-|
| **ExFlow Genehmigungsstatus:**        | Verfolgen Sie den Genehmigungsstatus, verwenden Sie den Bericht am Monatsende, um ausstehende Kosten zu erfassen
| **ExFlow Gebuchte Genehmigungsdokumente:**        | Anzeigen gebuchter genehmigter Dokumente pro Genehmiger
| **ExFlow Offene Dokumente:**        | Anzeigen aktueller offener ExFlow-Dokumente
| **ExFlow Dokumente Genehmigungsverlauf:**        | Anzeigen gebuchter ExFlow-Dokumente
| **ExFlow Dokumente pro Unternehmen:**        | ExFlow-Statistiken in allen Unternehmen, um das aktuelle Jahr mit dem Vorjahr zu vergleichen
| **ExFlow Importjournal-Dokumente mit Fehlern:**        | Exportiert die Liste der Importjournal-Dokumente (und zugehörigen Zeilen) mit Fehlern
| **ExFlow Vorläufige Verbindlichkeiten:**        | Anzeigen des Verbindlichkeitsberichts mit der Möglichkeit, nach vorläufig gebuchten zu filtern
| **ExFlow Überfällige Verbindlichkeiten:**        | Anzeigen des ExFlow-Berichts über überfällige Verbindlichkeiten

<br/>

### ExFlow Genehmigungsstatus

Gehen Sie zu: ***ExFlow Reports \--\> Dokumente \--\> ExFlow Genehmigungsstatus***

Dieser Bericht zeigt alle Dokumente, die zur Genehmigung ausstehen und noch nicht gebucht sind. Verwenden Sie z.B. den Filter nach Fälligkeitsdatum, um Dokumente für einen bestimmten Zeitraum anzuzeigen. Wählen Sie im Tab "Optionen" aus, welche Dokumente gedruckt werden sollen.

![Report - ExFlow Approval Status](@site/static/img/media/reports-approval-status-001.png)

#### Vorläufige Kosten buchen

Dieser Bericht kann auch verwendet werden, um ein Hauptbuch mit Einträgen zu füllen, die gebucht werden können, um vorläufige Kosten (pro Einkauf) für Dokumente zu buchen, die noch nicht endgültig zertifiziert sind. Im folgenden Beispiel wird Folgendes geschehen:

- Für alle **Aktiven** (d.h. noch zur Genehmigung ausstehenden) Dokumentzeilen des Typs **Sachkonto** wird ein Eintrag im Hauptbuch und im Standardstapel erstellt.

- Die Zeile hat das Buchungsdatum **2021-03-31**.

- Die Sachkontonummer wird aus der Einkaufszeile hinzugefügt und der Saldo für das Sachkonto wird auf **2445** gesetzt.

- Es wird auch eine Gegenbuchung mit dem Buchungsdatum **2021-04-01** auf demselben Sachkonto, jedoch mit entgegengesetzten Vorzeichen, erstellt.

- Alle Zeilen, die ein Aufschubstartdatum für die Abgrenzung nach dem **2021-03-31** haben, werden nicht einbezogen. Dies liegt daran, dass das Feld **"Aufschubbetrag nach Buchungsdatum ausschließen:"** aktiviert ist.

![Report - ExFlow Approval Status](@site/static/img/media/reports-approval-status-002.png)

![Report - ExFlow Approval Status](@site/static/img/media/image379.png)

##### Weitere Einstellungen zur Integration von Journalzeilen

###### Optionen

**Nur Sachkonten einbeziehen:**

Nur Sachkonten in den Vorschlag für das Hauptbuch einbeziehen. Wenn diese Option nicht ausgewählt ist, werden alle Zeilentypen einbezogen. Artikel werden durch Sachkonten ersetzt, die auf allgemeinen Buchungseinstellungen basieren.

**Nicht-Genehmigungszeilen ausschließen:**

Wenn diese Option nicht ausgewählt ist, werden alle Rechnungen/Gutschriften und Zeilen einbezogen, nicht nur die im ExFlow-Genehmigungsstatus. Wenn diese Option ausgewählt ist, werden nur die im ExFlow generierten Rechnungs-/Gutschriftenzeilen einbezogen.

**Währungsumrechnung basierend auf:**

Rechnungen/Gutschriften in anderen Währungen als der lokalen Währung müssen in die lokale Währung umgerechnet werden.

Arbeitsdatum: Der Wechselkurs wird basierend auf dem Arbeitsdatum von Business Central berechnet.

Buchungsdatum des Dokuments: Der Wechselkurs wird basierend auf dem Buchungsdatum jedes Quelldokuments berechnet.

Währungsfaktor aus dem Einkaufskopf: Der (vorhandene) Wechselkurs aus dem Quelldokument wird verwendet.

###### Integration von Journalzeilen

**Dimensionen kopieren:**

Dimensionen von Quelldokumenten in die vorgeschlagenen Hauptbuchzeilen kopieren.

**Sachkonto aus Einkaufszeile überschreiben:**

Die leere Option schlägt das Sachkonto aus der Quell-Einkaufszeile vor.

Immer: Ersetzen Sie alle Sachkonten durch das unten ausgewählte Sachkonto.

Wenn die Zeile das vordefinierte Konto hat: Ersetzen Sie Sachkonten aus Einkaufszeilen nur, wenn sie dem vordefinierten Konto entsprechen.

**Überschreiben G/L-Konto:**

Das für die obige Einstellung verwendete G/L-Konto.

**Ausschließen von Abgrenzungsbeträgen nach dem Buchungsdatum:**

Ja: Zeilen mit Abgrenzungsstartdatum nach dem Buchungsdatum werden nicht einbezogen.

Nein: Alle Abgrenzungsbuchungen werden einbezogen.

**Verbleibenden Abgrenzungsbetrag buchen:**

Verbleibende Abgrenzungsbeträge aufgrund von Abgrenzungsvorlagen auf das unten ausgewählte G/L-Konto buchen.

**Konto für verbleibenden Abgrenzungsbetrag:**

Das für die obige Einstellung verwendete G/L-Konto.

**Buchungsoption für Artikel:**

Optionen sind Vollständig oder Nur Inventarkonto.

**Buchungsprojektinformationen**

Gibt an, ob Projektinformationen beim Erstellen der Zeile einbezogen werden sollen.

**Journalzeile mit Währungscode erstellen**

Gibt an, ob die erstellte Journalzeile mit dem ursprünglichen Währungscode erstellt werden soll. Der Wechselkurs wird aus der Einstellung unter ***Optionen --> Wechselkurs basierend auf*** berechnet.

![Bericht - ExFlow Genehmigungsstatus](@site/static/img/media/image381.png)

Weitere notwendige Filter hinzufügen:

![Bericht - ExFlow Genehmigungsstatus](@site/static/img/media/reports-approval-status-003.png)
<br/>

### ExFlow Gebuchte Genehmigungsdokumente

Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Gebuchte Genehmigungsdokumente***

Der Bericht "ExFlow Gebuchte Genehmigungsdokumente" zeigt Dokumente, die nach Genehmiger gruppiert sind. Er kann auch Dokumente enthalten, die gebucht wurden und/oder mit einem Filter für nur einen Genehmiger. Kann nach Excel exportiert werden.

![Bericht - ExFlow Gebuchte Genehmigungsdokumente](@site/static/img/media/image382.png)

![Bericht - ExFlow Gebuchte Genehmigungsdokumente](@site/static/img/media/image383.png)
<br/>

### ExFlow Offene Dokumente

Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Offene Dokumente***

Dieser Bericht kann verwendet werden, um offene Dokumente für eine bestimmte oder mehrere Genehmigungsgruppen zu sehen.

![Bericht - ExFlow Offene Dokumente](@site/static/img/media/image384.png)

![Bericht - ExFlow Offene Dokumente](@site/static/img/media/image385.png)
<br/>

### ExFlow Dokumentgenehmigungsverlauf

Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Dokumentgenehmigungsverlauf***

Dieser Bericht kann verwendet werden, um den Genehmigungsverlauf für "Gebuchte Dokumente" für Genehmigungsgruppen und Genehmiger zu sehen.

![Bericht - ExFlow Dokumentgenehmigungsverlauf](@site/static/img/media/image386.png)

![Bericht - ExFlow Dokumentgenehmigungsverlauf](@site/static/img/media/image387.png)

Dieser Bericht gibt auch Informationen darüber, ob eine Rechnung automatisch gegen eine Bestellung oder einen Vertrag genehmigt wurde. Die letzte Spalte rechts zeigt: \"Vertragsnummer\" für das Dokument, \"Bestellnummer\" für die Zeilen und \"Automatisch genehmigt\" für Genehmigungszeilen.
<br/>

### ExFlow Dokumente pro Unternehmen

Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Dokumente pro Unternehmen***

Dieser Bericht kann verwendet werden, um die Anzahl der ExFlow-Dokumente pro Unternehmen und die Anzahl der Genehmiger pro Unternehmen zu sehen.

![Bericht - ExFlow Dokumente pro Unternehmen](@site/static/img/media/image388.png)

![Bericht - ExFlow Dokumente pro Unternehmen](@site/static/img/media/image389.png)

<br/>

### ExFlow Import Journal Dokumente mit Fehlern
Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Import Journal Dokumente mit Fehlern***

Laden Sie eine Excel-Datei mit allen Import Journal - Dokumenten mit Fehler herunter. 
Wählen Sie, ob Sie ''Alle Zeilen'' aktivieren möchten, und auch, ob ein bestimmter ''Journal Batch Name'' dann klicken Sie auf OK, um die Datei herunterzuladen. 

![Bericht - ExFlow Bericht](@site/static/img/media/reports-import-journal-001.png)
<br/>

### ExFlow Vorläufige Verbindlichkeiten
Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Vorläufige Verbindlichkeiten***

Erstellen Sie einen Bericht mit Filter auf vorläufige Buchung. Geben Sie an, ob der Bericht alle Dokumente, nur vorläufig gebuchte Dokumente oder ohne vorläufig gebuchte Dokumente anzeigen soll.

Es ist auch möglich, nach Lieferantennummer usw. zu filtern.

![Bericht - ExFlow Bericht](@site/static/img/media/reports-documents-preliminary-001.png)

Im folgenden Beispiel zeigt der Bericht nur vorläufig gebuchte Dokumente ohne weitere Filtereinstellungen.

![Bericht - ExFlow Bericht](@site/static/img/media/reports-documents-preliminary-002.png)
<br/>

### ExFlow Gealterte Verbindlichkeiten
Gehe zu: ***ExFlow Berichte \--\> Dokumente \--\> ExFlow Gealterte Verbindlichkeiten***

Erstellen Sie einen Dokumenten-Aging-Bericht und lassen Sie ExFlow angeben, ob das Aging vom Fälligkeitsdatum, dem Buchungsdatum oder dem Dokumentendatum berechnet wird, neben anderen Filtern.

![Bericht - ExFlow Bericht](@site/static/img/media/reports-documents-aged-accounts-001.png)

Im folgenden Beispiel wird der Bericht mit dem Filter: ''Aging nach: Fälligkeitsdatum'' und ''Überschriftstyp'' auf ''Datumsintervall'' gesetzt, und auch um vorläufig gebuchte Dokumente auszuschließen.

![Bericht - ExFlow Bericht](@site/static/img/media/reports-documents-aged-accounts-002.png)

<br/><br/>

### Berichte --> ExFlow Benutzer

| Berichte --> Benutzer |  | 
|:-|:-|
| **ExFlow Benutzer:**        | ExFlow Benutzer und deren Details in allen Unternehmen
| **ExFlow Genehmigungsnachverfolgung:**        | Aktuelle ExFlow-Dokumente pro Benutzer anzeigen
| **ExFlow Genehmigungsstatistiken:**        | Leistung der Genehmiger anzeigen
| **ExFlow Benutzervertretungen:**        | Vertreter für alle ExFlow Benutzer anzeigen
| **ExFlow DSGVO Benutzerbezogene Daten:**        | Anzeigen, wo personenbezogene Daten in ExFlow verwendet werden 

<br/>

### ExFlow Benutzer

Gehe zu: ***ExFlow Berichte \--\> Benutzer \--\> ExFlow Benutzer***

Dieser Bericht zeigt sowohl ExFlow Benutzer als auch Benutzereinstellungen für alle Unternehmen.
Einschließlich verschiedener Filteroptionen.

![Bericht - ExFlow Benutzer](@site/static/img/media/image390.png)

![Bericht - ExFlow Benutzer](@site/static/img/media/image391.png)
<br/>

### ExFlow Genehmigungsnachverfolgung

Gehe zu: ***ExFlow Berichte --> Benutzer --> ExFlow Genehmigungsnachverfolgung***

Dieser Bericht kann verwendet werden, um Genehmiger mit nicht genehmigten Dokumentzeilen zu verfolgen. Fügen Sie einen Filter für eine bestimmte "Genehmigungsgruppe" hinzu.

![Bericht - ExFlow Genehmigungsnachverfolgung](@site/static/img/media/image392.png)

![Bericht - ExFlow Genehmigungsnachverfolgung](@site/static/img/media/image393.png)
<br/>

### ExFlow Genehmigungsstatistiken

Gehe zu: ***ExFlow Berichte \--\> Benutzer \--\> ExFlow Genehmigungsstatistiken***

Dieser Bericht gibt Administratoren/Benutzern Statistiken für die Genehmiger, z.B. "Anzahl der genehmigten Zeilen, Durchschnittliche Anzahl der Genehmigungstage".

![Bericht - ExFlow Genehmigungsstatistiken](@site/static/img/media/image394.png)

![Bericht - ExFlow Genehmigungsstatistiken](@site/static/img/media/image395.png)
<br/>

### ExFlow Benutzervertretungen

Gehe zu: ***ExFlow Berichte \--\> Benutzer \--\> ExFlow Benutzervertretungen***

Dieser Bericht zeigt Benutzervertretungen für verschiedene Benutzer in verschiedenen Zeiträumen. Administratoren/Benutzer können entweder nach einem bestimmten Benutzer oder nach "Alle Benutzer" filtern.

![Bericht - ExFlow Benutzervertretungen](@site/static/img/media/image396.png)

![Bericht - ExFlow Benutzervertretungen](@site/static/img/media/image397.png)
<br/>

### ExFlow DSGVO Benutzerbezogene Daten

Gehe zu: ***ExFlow Berichte \--\> Benutzer \--\> ExFlow DSGVO Benutzerbezogene Daten***

Dieser Bericht zeigt alle DSGVO-bezogenen Daten für einen bestimmten Benutzer.

![Bericht - ExFlow DSGVO Benutzerbezogene Daten](@site/static/img/media/image398.png)

![Bericht - ExFlow DSGVO Benutzerbezogene Daten](@site/static/img/media/image399.png)
<br/><br/>

### Berichte --> Genehmigungsregeln

| Berichte --> Genehmigungsregeln |  | 
|:-|:-|
| **ExFlow Genehmigungsregeln:**        | Detaillierte Ansicht aller für den ExFlow-Workflow definierten Genehmigungsregeln
| **ExFlow Genehmigungsregeln pro Benutzer:**        | Genehmigungsregeln pro Benutzer anzeigen
| **ExFlow Genehmigungsregelliste:**        | Genehmigungsregelliste anzeigen

<br/>

### ExFlow Genehmigungsregeln

Gehe zu: ***ExFlow Berichte \--\> Genehmigungsregeln \--\> ExFlow Genehmigungsregeln***

Dieser Bericht zeigt "Genehmigungsregeln" nach Unternehmen. Es gibt verschiedene Filteroptionen wie "Lieferant" oder "Dimensionswert", die ebenfalls angewendet werden können.

Aktivieren Sie das Kontrollkästchen "Genehmigungsgruppenzeilen anzeigen", um Informationen zu Genehmigungsgruppenzeilen im Bericht hinzuzufügen.

![Bericht - ExFlow Genehmigungsregeln](@site/static/img/media/image400.png)

![Bericht - ExFlow Genehmigungsregeln](@site/static/img/media/image401.png)
<br/>

### ExFlow Genehmigungsregeln pro Benutzer

Gehe zu: ***ExFlow Berichte \--\> Genehmigungsregeln \--\> ExFlow Genehmigungsregeln pro Benutzer***

Dieser Bericht zeigt "Genehmigungsregeln pro Benutzer" mit Filteroptionen pro "Unternehmen", "Benutzer-ID" Name und so weiter. Administratoren/Benutzer können auch Benutzervertretungen für ein bestimmtes Datum einbeziehen.

![Bericht - ExFlow Genehmigungsregeln pro Benutzer](@site/static/img/media/image402.png)

![Bericht - ExFlow Genehmigungsregeln pro Benutzer](@site/static/img/media/image403.png)

<br/>

### ExFlow Genehmigungsregelliste
Gehe zu: ExFlow Berichte --> Genehmigungsregeln --> ExFlow Genehmigungsregelliste

Erstellen Sie einen Bericht basierend auf allen Genehmigungsregeln oder ausgewählten Regeln.

![Bericht - ExFlow Genehmigungsregelliste](@site/static/img/media/reports-approval-rules-list-001.png)

![Bericht - ExFlow Genehmigungsregelliste](@site/static/img/media/reports-approval-rules-list-002.png)
