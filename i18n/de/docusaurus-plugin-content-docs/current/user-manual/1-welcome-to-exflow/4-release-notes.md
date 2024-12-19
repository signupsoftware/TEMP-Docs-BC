---
title: Versionshinweise
sidebar_position: 4
hide_title: true
custom_edit_url: null
---
## Versionshinweise

### ExFlow 24.1.0.0 – Versionshinweise <br/> 
**Art der Veröffentlichung:** <br/>
Kleinere Veröffentlichung

**Veröffentlichungsdatum:** <br/>
2024-12-10

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 24.0 oder höher <br/>

Zwei neue Ereignisse für OCR Import Mapping verfügbar - Hinzugefügt in 24.1.263.9

Die erneute Rechnungsstellung funktionierte nicht mit der schwedischen Sprache im Genehmigungsstatus - Behoben in 24.1.263.9

Problem bei der Verwendung von ExFlow AP und Progressus behoben, bei dem sich das Feld "kostenpflichtig" manchmal nicht richtig verhielt - Behoben in 24.1.263.9

Das Problem, dass die MwSt.-Bus-Buchungsgruppe bei Verwendung der Vorabbuchung kein Rundungskonto hat, funktioniert nun wieder wie vorgesehen - Behoben in 24.1.263.9


**Neue Funktionen** <br/> 

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|30556 | Importjournal | ExFlow wurde erweitert, um bis zu 8 verschiedene Felder für Nebenkosten auf Einkaufscodes abzubilden.
|44644 | Importjournal | Neues Ereignis für die Zuordnung von Artikelkosten im Importjournal hinzugefügt.
|42817 | Genehmigungsstatus | Neuer Shortcut-Befehl für die Vorschau der Buchung im Genehmigungsstatus hinzugefügt.
|44220 | Importjournal | PDF-Viewer in separatem Browser wieder unterstützt.
|32864 | Genehmigungsstatus | FactBoxes für Lieferantenstatistiken im Genehmigungsstatus und Genehmigungsstatusverlauf hinzugefügt.
|40207 | Importjournal | Verbesserte Währungsabstimmung in der Zahlungsvalidierung.
|43588 | Genehmigungsstatus | Funktion zum Zurücksetzen aller Codierungen auf Dokumenten im Web im Genehmigungsstatus hinzugefügt.

<br/>

**Verbesserungen/Erweiterungen**<br/> 

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|43997 | Web | Problem behoben, bei dem die Warnung über die Mindestanzahl an Genehmigern manchmal nicht angezeigt wurde.
|44100 | Einrichtung | Updates an EX BASE vorgenommen, bei denen einige Berechtigungen fehlten.
|44288 | Importjournal | Problem behoben, bei dem ein Beleg in einigen Fällen nicht abgeglichen werden konnte, wenn derselbe Artikel in mehreren Zeilen verwendet wurde.
|42949 | Importjournal | Problem behoben, bei dem die Dimensionen und Genehmigungen nicht den Einstellungen folgten, wenn ein Vertrag abgeglichen wurde.
|42062 | Web | Problem behoben, bei dem Artikelkosten im Web manchmal nicht genehmigt werden konnten.

<br/> 
Kleinere Fehlerkorrekturen sind ebenfalls in dieser Veröffentlichung enthalten, aber nicht in den Versionshinweisen aufgeführt.
<br/>


### ExFlow 24.0.0.0 – Versionshinweise <br/> 
**Art der Veröffentlichung:** <br/>
Hauptversion

**Veröffentlichungsdatum:** <br/>
2024-09-13

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 23.0 oder höher <br/>

Authentifizierungs-E-Mail und Kontakt-E-Mail können jetzt für die ExFlow-Benutzer bearbeitet werden, dies ist für Kunden, die Office nicht verwenden - geändert in 24.0.310.36 <br/>

Die Admin-Suche, die Dokumente in ExFlow Web nicht öffnen kann, wurde in 24.0.310.33 behoben<br/>

Problem im Zusammenhang mit Auto-Acc-Gruppen für BC 25 wurde in Release 24.0.310.31 behoben<br/>

Entra Groups werden nicht korrekt aktualisiert, da ExFlow in 24.0.310.31 behoben wurde <br/>

Dimensionsfiltersuche in ExFlow Web in Version 24.0.310.31 verbessert <br/> 

Finnische Kunden können nun wieder Zeilen importieren und die Berechnung des Zeilenbetrags ist korrekt - gelöst in 24.0.310.20<br/>

Neues Ereignis hinzugefügt, um eine bessere Anpassung der erneuten Rechnungsstellung zu ermöglichen - hinzugefügt in 24.0.310.20<br/>

Mehrere Verbesserungen an der Suche in ExFlow Web bei Verwendung von Dimensionsfiltern für den ExFlow-Benutzer - verbessert in 24.0.310.20<br/>

Negative Positionsrabatte können nun im Importjournal in 24.0.309.15 bearbeitet werden<br/>

In bestimmten Fällen ist die Option "Mindest-Nr. der Genehmiger" nicht wie vorgesehen funktionierte, dies wurde in 24.0.309.15 behoben<br/>

Die Möglichkeit, falsche Rabatte zu ändern, ist in 24.0.310.12 behoben<br/>

Kleinere Korrekturen beim Order-Matching, bei dem ExFlow manchmal nicht die richtige Zeile identifizieren konnte, wurden behoben 24.0.310.12<br/>

ExFlow-Berechtigungssätze, die nicht genügend Berechtigungen enthalten, wurden in 24.0.310.12 behoben<br/>

<br/>

**Neue Funktionen** 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|31845| Genehmigungsstatus| PDF-FactBox auf der Seite "Änderungen überprüfen" hinzugefügt
|32005| E-Mail-Erinnerungen| Neue E-Mail-Erinnerung für Dokumente in der Warteschleife hinzugefügt
|36272| Berichte| Verbesserungen im Genehmigungsstatusbericht, jetzt bessere Unterstützung verschiedener Währungen bei der Neuberechnung der Zeilen
|36766| E-Mail-Erinnerungen| Neue E-Mail-Erinnerung hinzugefügt, Benutzer, die die Bestellung/Angebot erstellen, können jetzt eine Erinnerung erhalten, dass das Dokument vollständig genehmigt wurde.
|38927| Einrichtung| Möglichkeit hinzugefügt, das Buchen von Dokumenten außerhalb von ExFlow zu blockieren, z.B. das Erstellen einer Einkaufsrechnung und deren Buchung ohne Genehmigung.
|40503| Genehmigungsstatus| Neues größeres Feature hinzugefügt, Filter für zulässige Werte im Web setzen, wenn gesetzt, ist keine manuelle Überprüfung dieser Werte beim Ausführen von Änderungen erforderlich.
|39935| ExFlow Verkaufsaufträge| Unterstützung für benutzerdefinierte Lieferadresse hinzugefügt
|41637| ExFlow Verkaufsaufträge| Option hinzugefügt, eindeutige Nummernserien für Verkaufsaufträge zu verwenden, die über ExFlow Verkaufsaufträge erstellt wurden
|41640| ExFlow Verkaufsaufträge| Möglichkeit zur Zwischenlagerung von Dokumenten hinzugefügt, die nicht automatisch erstellt und stattdessen in der Warteschleife gehalten werden sollen, um mehr Kontrolle für bestimmte Kunden zu schaffen.

<br/>

**Verbesserungen/Erweiterungen**<br/> 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|40887| Vorläufige Buchung| Problem behoben, bei dem das Arbeiten mit vorläufiger Buchung und Abgrenzungen, jetzt erfolgt die Umkehrung am richtigen Datum.
|40197| Finnische Lokalisierung| Problem in der finnischen Lokalisierung behoben, bei dem in einigen Fällen das Dokument ohne Nachricht erstellt werden konnte.
|40465| Einrichtung| Problem im Export/Import von ExFlow-Einstellungen behoben, bei dem die Dimensionen in den Einkaufscodes fehlten.
|40419, 40422| Spanische Lokalisierung| Zwei technische Probleme behoben, bei denen IDs fehlten und ID-Typ im Importjournal hinzugefügt
|37501| Einrichtung| Problem behoben, bei dem der Projektmanager in dynamischen Genehmigungsabläufen nicht abgerufen werden konnte

<br/>

### ExFlow 23.2.0.0 – Versionshinweise <br/> 
**Art der Veröffentlichung:** <br/>
Kleinere Version

**Veröffentlichungsdatum:** <br/>
2024-05-24

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 23.0 oder höher <br/>

Das Problem mit Abgrenzungen und vorläufiger Buchung wurde in 23.2.34.17 behoben

BC-Upgrades, die manchmal aufgrund von ExFlow-Daten fehlschlagen, wurden in 23.2.34.17 behoben

Das Problem, bei dem der ExFlow-Genehmigungsstatusbericht keinen verbleibenden periodischen Saldo im angegebenen Konto erstellte, wurde in 23.2.34.20 behoben

Die Methode ''AddDocumentFromBlobs'' wurde in 23.2.34.20 hinzugefügt, um die veraltete Methode ''AddDocumentFromStreams'' zu ersetzen

In NA-Umgebungen erforderte ExFlow, dass die Gen. Prod. Buchungsgruppe auf G/L-Konto- und Anlageposten im Importjournal ausgefüllt wurde. Dieses Problem wurde in 23.2.34.28 behoben

Vorläufig gebuchte Dokumente können aufgrund des angepassten Wechselkurses im Kreditorenposten nicht storniert werden. Die Buchung des angepassten Wechselkurses wird nun am endgültigen Buchungsdatum rückgängig gemacht, in 23.2.34.28 behoben

Ein Problem, bei dem Benutzer mit dem Berechtigungssatz EX ACCOUNTANT keinen Zugriff auf ExFlow-Importjournal-Batches hatten, wurde in 23.2.34.28 behoben

Zeilenrabatte wurden im Importjournal zweimal berechnet, dieses Problem wurde in 23.2.34.28 behoben

Die Genehmigung von Dokumenten in Business Central mit derselben Funktionalität wie ExFlow Web in Bezug auf die Einrichtung in ExFlow-Spalten "Update VAT Product Posting Group" und "Update Gen. Prod. Posting Group" wurde in 23.2.34.28 hinzugefügt

Unterstützung für vorläufige Buchung ohne Mehrwertsteuer wurde in 23.2.34.28 hinzugefügt

**Verbesserungen/Erweiterungen**<br/> 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|39085| Importjournal| Problem beim Import des OIOUBL-Formats behoben
|40104| Importjournal| Große Verbesserung der Leistung beim Arbeiten mit der mehrzeiligen Zuordnung
|39999| Importjournal| Problem behoben, bei dem Rechnungen mit Serviceartikeln in einigen Fällen nicht aus dem Importjournal erstellt werden konnten
|39764| Importjournal| Jetzt unterstützt ExFlow auch die Dimensionen auf den Konten im Hintergrundbuchung.
|39492| Importjournal| Problem mit dem Zahlungscode beim Arbeiten mit Gutschriften behoben. Es wurde zuvor nicht korrekt erfasst.
|39085| Importjournal| Problem beim Import des OIOUBL-Formats behoben
|40104| Importjournal| Große Verbesserung der Leistung beim Arbeiten mit der mehrzeiligen Zuordnung

<br/> <br/>

### ExFlow 23.1.0.0 – Versionshinweise <br/> 
**Art der Veröffentlichung:** <br/>
Kleinere Version

**Veröffentlichungsdatum:** <br/>
2024-03-26

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 23.0 oder höher <br/>

Unterstützung für die erneute Rechnungsstellung anderer Zeilentypen gegenüber dem G/L-Konto hinzugefügt. - Behoben in 23.1.282.13

Neue Tabellen mit Leseberechtigung für EX BASE hinzugefügt - Behoben in 23.1.282.13

Bestehende Funktionalität "Matching Delay" in ExFlow Setup verbessert, jetzt wird eine andere Fehlermeldung angezeigt, wenn das Dokumentdatum oder das Fälligkeitsdatum innerhalb der Datumsformel liegt. Dies erleichtert die Nutzung dieser Funktionalität, sodass die Kunden wissen, welche Dokumente ihre Aufmerksamkeit erfordern. - Behoben in 23.1.282.13
<br/>

**Neue Funktionen** 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 11392 | Web                   | Unterstützung für vertrauliche Rechnungen in ExFlow Web und Business Central hinzugefügt
| 25408	| Web	                | Bestehende Funktionalität der erneuten Rechnungsstellung mit mehreren neuen Funktionen erweitert
| 27791	| Technisch             | Unterstützung für ExFlow-Tabellen in der BC-Datensuche hinzugefügt
| 28316	| Web                   | Grundlegende Unterstützung für BC-Standard-Intercompany in ExFlow hinzugefügt
| 30635	| Web                   | Grund für die Bestellung in ExFlow Web für Dokumente mit Bestellabgleich hinzugefügt
| 32203	| Einrichtung           | Verbesserungen am ExFlow-Audit-Log, Möglichkeit zur Generierung von PDFs mit dem Genehmigungsablauf
| 35216	| Importjournal         | Der Einkäufercode kann jetzt im Importjournal durch Personalisierung angezeigt werden
| 35729	| ExFlow-Datenerfassung | Möglichkeit hinzugefügt, bestimmte Lieferanten nicht mit ExFlow-Datenerfassung zu synchronisieren, dies erfolgt über die ExFlow-Lieferanteneinrichtung
| 36300	| Einrichtung           | Möglichkeit hinzugefügt, den Standardnachrichtentyp für Lieferanten festzulegen, nur in der FI-Lokalisierung verfügbar
| 39171	| Technisch             | Neue Abfrage hinzugefügt, um Gutschriften und Rechnungen für Power BI zu verarbeiten

<br/> 


**Verbesserungen/Erweiterungen**<br/> 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 36337  | Einrichtung             | Behoben: Das Problem, dass die Benachrichtigung über nicht empfangene Bestellungen manchmal nicht funktionierte
| 38656  | Einrichtung             | Behoben: Problem mit vorläufiger Buchung, bei dem das Rückgängigmachen nicht möglich war, wenn ein anderer Zahlungsempfänger verwendet wurde
| 38566  | Einrichtung             | Behoben: Problem, bei dem der Importauftrag fälschlicherweise mehrere Auftragswarteschlangen-Einträge erstellte
| 38346  | Einrichtung             | Behoben: Das Problem, dass die Referenzbeschreibung auf dem Vertrag nicht auf die Referenzkarte übertragen wurde
| 37306  | Importjournal           | Behoben: Das Problem, dass der Zahlungscode auf Gutschriften nicht korrekt gesetzt wurde. Dieses Problem trat nur in den USA und Kanada auf
| 37110  | OMNI                    | Behoben: Das Problem, dass einige Benutzer nicht auf den Vertrag zugreifen konnten, um ihn vollständig zu genehmigen
| 36966  | Einrichtung             | Behoben: Das Problem, dass Anhänge in einigen Fällen den Typ „Sonstiges“ erhielten
| 37654  | Einrichtung             | Unterstützung hinzugefügt, um die Job-Task-Nummer im Datenaustausch für ExFlow zu verwenden

<br/> <br/>

### ExFlow 23.0.329.0 – Versionshinweise<br/> 
**Art der Veröffentlichung:** <br/>
Hauptveröffentlichung

**Veröffentlichungsdatum:** <br/>
2024-01-11

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 23.0 oder höher <br/><br/>
Das Problem, dass Business Central-Upgrades gelegentlich aufgrund eines ExFlow-bezogenen Fehlers fehlschlagen, wurde in Version 23.0.329.3 behoben.  <br/>

Das Problem, dass der Lieferantenname in der ExFlow-Lieferanteneinrichtung nicht angezeigt wurde, wurde in Version 23.0.329.14 behoben.  <br/>

Das Problem, dass Beschreibung 2 in Business Central nicht die gleiche Anzahl von Zeichen wie in ExFlow Web unterstützte, wurde in Version 23.0.329.14 behoben. <br/>

**Neue Funktionen** 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 19664 | Einrichtung | Alle vorherigen ExFlow-Einstellungen auf der Lieferantenkarte sowie die erweiterten ExFlow-Lieferantenoptionen wurden in die ExFlow-Lieferanteneinrichtung verschoben
30367 | Einrichtung| Alle vorherigen ExFlow-Einstellungen auf der Lieferantenkarte sowie die erweiterten ExFlow-Lieferantenoptionen wurden in die ExFlow-Lieferanteneinrichtung verschoben
30676|PO-Abgleich|Zusätzliche Felder wurden in ExFlow Genehmigungsdokumente in Business Central hinzugefügt, um die Genehmigung von Rechnungen, die mit einer Bestellung abgeglichen sind, zu erleichtern
31319|Web|Unterstützung für zusätzliche Steuerfelder in ExFlow Web für die Lokalisierung in den USA und Kanada hinzugefügt
32226|Importjournal|Die Rechnungsnachricht wird mit der Lieferantenrechnungsnummer gefüllt, wenn die Rechnungsnachricht leer ist - nur in der FI-Lokalisierung
34703|Einrichtung|EDC-Konten, ExFlow-BLOB-Speicher und ExFlow-Dateiimport-Einrichtungen werden automatisch deaktiviert, wenn eine Sandbox-Kopie erstellt wird
34979|Einrichtung|Importierte Zeilen mit dem Wert 0,00 werden beim Import automatisch entfernt. Nur anwendbar für den Artikelzeilentyp
36206|Technisch|Option hinzugefügt, alle PDFs in alle Unternehmen zu importieren, wenn Dokumente während des Upgrades von NAV auf BC importiert werden
36629|Einrichtung|Neue Einstellung in "Bestell- und Angebotsgenehmigung" hinzugefügt - "Nur genehmigte Bestellung erhalten". Wenn aktiviert, können Bestellungen nicht empfangen werden, solange die Bestellung in ExFlow nicht vollständig genehmigt ist. Diese Einstellung ist nur anwendbar, wenn die Bestellgenehmigung in ExFlow aktiviert ist

<br/> 

**Verbesserungen/Erweiterungen**<br/> 

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
36410|Einrichtung|Erweiterte E-Mail-Übersetzung für nicht empfangene Bestellungen - Behoben: Problem im Zusammenhang mit der E-Mail-Übersetzung für nicht empfangene Bestellungen
32724|Berichte|Verbesserte Endbuchungsgenauigkeit für Überbrückungskonten - Implementierte Korrekturen für Situationen, in denen das Aktivieren von "Periodische Zeilen mit Startdatum nach Buchungsdatum ausschließen" und "Restlichen periodischen Saldo auf separates Konto buchen" im Genehmigungsstatusbericht zu falschen Endbuchungen für Überbrückungskonten führen konnte
34522, 36785, 37027|PO-Abgleich|Optimierte PO-Abgleichsfunktionalität - Mehrere Verbesserungen des PO-Abgleichs, einschließlich der Möglichkeit, denselben Artikel mehrfach auf verschiedenen Zeilen der Bestellung abzugleichen
34900|Einrichtung|Vereinfachte Synchronisierung der Lieferantenstammdaten - Behoben: Problem, das gelegentlich die manuelle Verwendung der Stammdatensynchronisierung für Lieferanten zur ExFlow-Datenerfassung verhinderte
35139|Einrichtung|Erweiterter ExFlow-Startassistent - Automatisch erstellte Jobs wurden aus dem ExFlow-Startassistenten entfernt, sodass Delegierte Administratoren den Assistenten mit größerer Kontrolle und Leichtigkeit ausführen können
35228|Genehmigung|Verbesserte Genehmigungsflusskontrolle - Genehmigungsflüsse werden jetzt nur noch initiiert, wenn die Bestellung/das Angebot freigegeben ist, um unbeabsichtigte Flüsse zu verhindern. Darüber hinaus können Benutzer jetzt Genehmigungsflüsse ändern, wenn der Status "Offen" ist, was insbesondere bei der Arbeit mit Auto-Genehmigungsgruppen mehr Flexibilität bietet
35323|Importjournal|Behoben: Wiederholtes Problem mit Auftragswarteschlangeneinträgen - Job 881 wird nicht mehr kontinuierlich zu den Auftragswarteschlangeneinträgen hinzugefügt

<br/> <br/>

### ExFlow 22.2.110.0 – Versionshinweise<br/> 
**Art der Veröffentlichung:** <br/>
Kleinere Veröffentlichung

**Veröffentlichungsdatum:** <br/>
2023-09-27

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 22.1 oder höher<br/><br/>
Behoben: Verschiedene Probleme im Zusammenhang mit der Arbeit mit mehreren Vorauszahlungen in Version 22.2.110.11.

Behoben: Problem, dass die Synchronisierung der Lieferantenstammdaten mit der neuen EDC-Integration bei Verwendung der schwedischen Sprache nicht funktionierte, in Version 22.2.110.11.
Behoben: Problem, dass Eingangsrechnungen nicht gebucht werden konnten, in Version 22.2.110.14.

Behoben: Problem, dass in bestimmten Lokalisierungen keine Genehmigung von der ExFlow-Genehmigungsdokumentenseite aus möglich war, in Version 22.2.110.22.

Behoben: Problem, dass Auto-Coding-Vorschläge nicht erstellt werden konnten, sowie kleinere Verbesserungen in Version 22.2.110.22.

Behoben: Problem, dass die Maßeinheit beim Erstellen von Dokumenten bei der Arbeit mit Progressus entfernt wurde, in Version 22.2.110.32.

Neues Ereignis hinzugefügt im Zusammenhang mit der importierten Bestellzeile in Version 22.2.110.42.

Auftragswarteschlangen entfernt, wenn der ExFlow-Assistent ausgeführt wird, jetzt können Partner mit Delegierten Administratoren den Assistenten in Version 22.2.110.42 ausführen.

Zwei neue Ereignisse hinzugefügt im Zusammenhang mit der Aktualisierung von Dimensionen und der Bestellabstimmung in Version 22.2.110.46.

Neues Ereignis für die Suche in ExFlow Web in Version 22.2.110.57 hinzugefügt.
​​​​​​​

**Neue Funktionen**

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|32727| Vertragsabgleich | Erinnerung hinzugefügt für fehlende/erwartete Rechnungen gemäß Vertragszeilen (Perioden)
|32727| Vertragsabgleich | Schnellerstellung von Verträgen aus Rechnungen zu Aktionen im Importjournal hinzugefügt
|32727| Vertragsabgleich | Auto Acc. Gruppe zu Vertragsstatistiken und Genehmigungsstatusverlauf hinzugefügt
|32747| Allgemein | Zusätzliche ExFlow-Tabellen zur Export/Import-Einrichtung hinzugefügt
|32823| Rechnungsarchivierung | Native Unterstützung für externe Speicherung in SharePoint hinzugefügt
|32920| PO-Abgleich | Unterstützung für Erinnerungen bei Bestellungen mit nicht erhaltenen Zeilen im Genehmigungsstatus
|32923| PO-Abgleich | Bestellnummer wird nicht mehr ausgefüllt, wenn zusätzliche Rechnungszeilen bearbeitet werden
|32817| Verkaufsauftragsimport | Genauigkeit der Zuordnung des Kundenlieferorts beim Import von Verkaufsaufträgen verbessert
|34604| Verkaufsauftragsimport | Genauigkeit der Zuordnung des Kundenkontakts beim Import von Verkaufsaufträgen verbessert

<br/>

**Verbesserungen/Erweiterungen**<br/>

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|34515 | Genehmigung | Kontrolle der Mindestanzahl an Genehmigern verursacht Probleme, wenn die Zeile zur Genehmigung an ein Dummy-Konto mit nur dem ersten Genehmiger gesendet wird
|32757 | Genehmigungsstatus | Batch-Posting setzt alle Filter auf der Seite zurück
|34112 | Importjournal | Spaltenüberschriften sind beim horizontalen Scrollen manchmal nicht responsiv
|34358 | Importjournal | Fehler beim Erstellen einer Rechnung mit Artikelkostenverteilung aus dem Importjournal
|34694 | Importjournal | [BE-Lokalisierung] Fehlermeldung: 'Strukturierte Nachricht fehlgeschlagen…' bei der Kontrolle des Zahlungsreferenzfelds
|34698 | Rechnungsarchivierung | Zusätzliche Einstellung zum Committen einer bestimmten Anzahl von Rechnungsbildern in Chargen beim Aktivieren
|32315 | Job-Warteschlange | Job-Warteschlange erstellt mehrere unnötige Einträge für CU 12057075
|33739 | PDF-Viewer | PDF-Vorschau schneidet manchmal Text auf Rechnungen im Importjournal und Genehmigungsstatus ab
|32386 | PO-Abgleich | Problem beim Erstellen von Dokumenten, bei denen eine Artikelkostenzeile über den zugeordneten Artikelzeilen aufgeführt ist
|32820 | PO-Abgleich | Fehlercode: '...DB:recordExists' manchmal beim Importieren von Dokumenten für den PO-Abgleich
|34206 | PO-Abgleich | Rechnungszeile ist mit der falschen Post. Rec. Nr. verbunden
|34547 | PO-Abgleich | Endgültige Vorauszahlungsrechnung wird nicht korrekt berechnet, wenn eine andere Währung als LCY verwendet wird
|33248 | Suche | Fehlermeldung: 'Die Länge der Zeichenkette...' beim Anwenden eines Filters auf Genehmiger und Lieferant
|33150 | Assistenten | Defekte Videolinks im PO-Abgleich-Assistenten
|34515 | Genehmigung | Kontrolle der Mindestanzahl an Genehmigern verursacht Probleme, wenn die Zeile zur Genehmigung an ein Dummy-Konto mit nur dem ersten Genehmiger gesendet wird
|32757 | Genehmigungsstatus | Batch-Posting setzt alle Filter auf der Seite zurück

<br/><br/>

### ExFlow 22.1.204.0 – Versionshinweise<br/>
**Art der Veröffentlichung:**<br/>
Kleinere Veröffentlichung

**Veröffentlichungsdatum:**<br/>
2023-08-29

**Veröffentlichungsinformationen:**<br/>
Erfordert BC 22.1 oder höher

Import von Rechnungen nicht möglich, wenn geplante Aufgabe für OCR-Dienst gelöscht wurde, behoben in 22.1.204.5.

Betrag für Vorauszahlungsrechnungen bei Verwendung einer anderen Währung als LCY falsch berechnet, behoben in 22.1.204.8.

Upgrade von älteren Versionen von BC & NAV auf BC Online nicht möglich, behoben in 22.1.204.11.

**Neue Funktionen**

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|29378| Genehmigung | Immer die Mindestanzahl an Genehmigern überprüfen, wenn der letzte Benutzer genehmigt
|30565| Genehmigung | Drucken/Senden von Bestellungen, die für ExFlow aktiviert sind, einschränken, wenn das Dokument nicht vollständig genehmigt ist
|29382| Genehmigungsstatus | Möglichkeit, Dokumentzeilen bei Ablehnung von Änderungen an jeden Genehmiger zurückzusenden
|31251| Allgemein | Unterstützung für Auto Acc. Gruppe als Funktion
|29364| Importjournal | Chat-Benachrichtigungen an BC-Benutzer aus dem Importjournal senden
|28139| Importjournal | [US-Lokalisierung] IRS 1099-bezogene Felder zum Importjournal hinzugefügt

<br/>

**Verbesserungen/Erweiterungen**<br/>

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|32670| Genehmigung | Auto Acc Gruppe wird nicht geändert, wenn das G/L-Konto in ExFlow Web geändert wird
|33312| Genehmigungsstatus | Dokumentstatus wird im Genehmigungsstatus nicht aktualisiert, wenn PO-abgeglichene Dokumente vollständig genehmigt sind
|28805| Allgemein | Zeilen auf nicht freigegebenen Bestellungen können nicht bearbeitet werden, wenn eine Genehmigungsgruppe zugewiesen wird
|33306| Allgemein | Fehler beim Hinzufügen/Ändern neuer Zeilen auf einer Bestellung, wenn ein Einkäufercode angewendet wird
|33272| Import | Fehlermeldung: "Sie haben das Steuergebiet geändert" beim Batch-Import von Dokumenten in einigen Szenarien
|32474| Importjournal | Vorauszahlungsbetrag auf der Endrechnung falsch berechnet, wenn vorherige Rechnungen die Mehrwertsteuer enthalten
|30913| Importjournal | Vorschlag für Mehrwertsteuerzeile nicht möglich, wenn eine Bestellnummer angewendet wurde
|33055| Importjournal | Fehler beim manuellen Hinzufügen zusätzlicher Genehmiger im Genehmigungsvorschlag, wenn die Genehmigungsregel bereits angewendet wurde
|33062| Importjournal | Fehlermeldung: Typ darf nicht in ExFlow-Bestelldokumentzeile sein, wenn Auto-Coding-Vorschläge aktiviert sind
|30145| Importjournal | Dimensionswerte aus OCR-Importzuordnung werden nicht auf Dokumentzeilen angezeigt, bis die Seite Dimensionssatz-Einträge geöffnet wurde
|32113| Importjournal | Alle Importjournal-Batches werden verarbeitet, nicht nur der ausgewählte, wenn Dokumente importiert werden
|33244| Importjournal | [US & CA-Lokalisierung] Steuergebiet wird in einigen Szenarien nicht korrekt vom Lieferanten/Standort auf das Dokument übertragen
|33724| Importjournal | [BE-Lokalisierung] Benutzer mit Berechtigungssatz EX ACCOUNTANT können Berechtigungsfehler beim Importieren von Dokumenten erleben
|33269| PO-Abgleich | Wenn Dokument auf Empfang abgleichen eingestellt ist, wird die Rechnung trotzdem falsch auf die Bestellzeile abgeglichen
|26078| Bestellcodes | [US & CA-Lokalisierung] Steuergebiet und Steuergruppencode zum ExFlow-Bestellcode hinzugefügt
|29827| Suche | Langsame Suche in BC und Zeitüberschreitungen in ExFlow Web, wenn nur auf Zeilenwerte gefiltert wird

<br/><br/>

### ExFlow 22.0.274.0 – Versionshinweise<br/>
**Art der Veröffentlichung:**<br/>
Große Veröffentlichung

**Veröffentlichungsdatum:**<br/>
2023-06-19

**Veröffentlichungsinformationen:**<br/>
Erfordert BC 22.1 oder höher.

Verschiedene Probleme mit dem PO-Abgleich in 22.0.274.5 gelöst

Einkäufer und Einkaufskoordinator fehlen in der E-Mail-Einrichtung, behoben in 22.0.274.5

Neueste Version konnte nicht installiert werden, behoben in 22.0.274.12

Vorläufige Rechnung gebucht, wenn PO-Abgleich in 22.0.274.12 behoben

Fehler "Standard-Admin-Rollen-ID muss einen Wert haben" beim Aktivieren des neuen Lizenzschlüssels in 22.0.274.12 behoben

Problem beim Aktualisieren von Dokumentzeilen, wenn ein Empfang nach dem Import gebucht wurde, in 22.0.274.14 behoben

Vorläufige Buchung nach Upgrade auf 22 aktiviert, in 22.0.274.19 behoben

Dokumentstatus wird im Genehmigungsstatus nicht aktualisiert, wenn PO-abgeglichene Dokumente vollständig genehmigt sind, in 22.0.274.25 behoben

Genehmigungsvorschlag im Importjournal gibt eine Fehlermeldung beim Hinzufügen von Genehmigern, in 22.0.274.25 behoben

**Neue Funktionen**

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|11088|	Lokalisierung|	Unterstützung für Belgien-Lokalisierung
|18732|	Prüfprotokoll|	Detailliertes Prüfprotokoll als neue Funktion hinzugefügt. Dokumentänderungen in einer Übersicht basierend auf Rechnungsstatus und Aktionen anzeigen oder detaillierte Änderungen für jedes Feld einsehen.
|25219|	Rechnungsarchivierung|	Externe Speicherung als neue Funktion hinzugefügt. Es ist jetzt möglich, Ihre Rechnungsbilder in einem externen Speicher wie Azure Blob Storage zu speichern. Beim Buchen wird das Rechnungsbild aus der Datenbank entfernt und extern gespeichert. Das Framework kann auch erweitert werden, um mit anderen Speicherdiensten wie SharePoint, AWS, lokalen Ordnern usw. verwendet zu werden.
|26367|	Budgetkontrollen|	G/L-Budgetkontrollen als neue Funktion hinzugefügt. Aktivieren Sie dies, indem Sie den Assistenten für ExFlow-Budgetkontrollen ausführen. Kontrollen werden gegen das G/L-Budget auf dem G/L-Konto in Kombination mit globalen Dimensionen durchgeführt. Genehmiger erhalten Warnungen im Importjournal oder während der Genehmigung, und automatisch kann ein bestimmter Genehmiger automatisch zum Genehmigungsworkflow hinzugefügt werden, wenn eine Budgetpostenkombination überschritten wird.
|28612|	Assistenten|	Der ExFlow-Installationsassistent wurde überarbeitet und verbessert. Er umfasst jetzt auch die Einrichtung von Benutzern, Benutzerreferenzen, Genehmigungsworkflows, automatische Codierungsvorschläge, geplante Aufgaben und OCR-Dienstkonfiguration.
|28937|	Import|	Anhänge von einer externen Quelle basierend auf Referenzen in XML abrufen. Speziell angefordert für FINVOICE.
|29354|	Allgemein|	Unterstützung für Verantwortungszentrum in ExFlow.
|30199|	Automatische Codierung|	Verbesserte Genauigkeit.
|30262|	Assistenten|	Neuer Assistent zum Aktivieren und Konfigurieren der PO-Abstimmung.
|30290|	PO-Abstimmung|	Einschränkung der Möglichkeit, eine Rechnung mit einer offenen Bestellung oder einer Bestellung abzugleichen, die nicht genehmigt wurde, wenn dies für die ExFlow-Genehmigung aktiviert ist.
|30312|	PO-Abstimmung|	Möglichkeit zur Verarbeitung zusätzlicher Liniengebühren für eine PO-abgestimmte Rechnung.
|30457|	Allgemein|	Unterstützung für nicht abzugsfähige und teilweise abzugsfähige Mehrwertsteuer. Wir raten dringend davon ab, diese Funktion in Business Central zu aktivieren, da es kritische Probleme für Dokumente in anderen Währungen als LCY gibt.
|27288|	Vertragsabstimmung|	ExFlow-Verträge wurden jetzt mit Rechnungsperioden erweitert, die manuell oder aus der Periodizität erstellt werden können. Die Rechnungsperioden können so eingestellt werden, dass sie Einkaufsrechnungen zum Zweck der Selbstabrechnung generieren.
|27355|	Benutzer|	Mehrere ExFlow-Benutzer aus der BC-Benutzerliste auswählen und erstellen.
|29858|	Referenzen|	Eine neue Option zum automatischen Erstellen einer Referenz für neue ExFlow-Benutzer wurde zur ExFlow-Konfiguration hinzugefügt. Aus ExFlow-Benutzerlisten können Sie auch Referenzen für alle bestehenden ExFlow-Benutzer stapelweise erstellen.
|30309|	PO-Abstimmung|	Möglichkeit zur Angabe von Linientypen, die in der ExFlow-Konfiguration automatisch empfangen und fakturiert werden können.
|30666|	Allgemein|	Tooltips von häufig verwendeten Seiten sind jetzt direkt mit den relevanten Abschnitten im Benutzerhandbuch unter docs.exflow.cloud verlinkt.
|31703|	Vertragsabstimmung|	Grund für die manuelle Genehmigung einer vertragsabgestimmten Rechnung in ExFlow Web zum Dokument hinzugefügt.
|27693|	Automatische Codierung|	Lieferant zur Gruppierung für automatische Codierungsvorschläge hinzugefügt.
|29371|	Suche|	Es ist jetzt möglich, nach Lieferantennamen UND Lieferantennummer zu suchen, indem Sie in ExFlow Web nach 'Lieferant' suchen.

<br/>

**Verbesserungen/Erweiterungen**<br/>

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
|30359|	Genehmigung|	Das Buchungsdatum wird jetzt korrekt auf der Bestellung aktualisiert, wenn eine Vorauszahlungsrechnung gebucht wird, sowie Mehrwertsteuerdaten, die fälschlicherweise aus dem Bestellkopf zugewiesen werden.
|30642|	PO-Abstimmung|	Empfangs-/Rücksendungs-/Bestellzeilen werden nicht angezeigt, wenn sich Dokumente im Genehmigungsstatus befinden.
|29979|	Lieferant|	Business Central stürzt ab, wenn ein neuer Lieferant erstellt und alle Buchungsgruppen geöffnet werden, insbesondere wenn die ExFlow-Konfiguration "Auto Create Vendor ID" auf "Fragen" eingestellt ist.
|30300|	Importjournal|	Wenn 'Direktbuchung' auf dem G/L-Konto für Vorauszahlungen in der allgemeinen Buchungskonfiguration nicht aktiviert ist, wird eine Fehlermeldung angezeigt, dass "G/L-Konto nicht gefunden" wird, wenn eine Vorauszahlungsrechnung erstellt wird.
|30399|	Importjournal|	Es ist nicht möglich, Rechnungszeilen mit PO-Zeilen im Importjournal abzugleichen, wenn bereits andere Rechnungen mit Zeilen vorhanden sind, die mit denselben PO-Zeilen abgeglichen wurden.
|30431|	Allgemein|	Es ist nicht möglich, auf die ExFlow-Konfiguration zuzugreifen, wenn die Standard-Basisrollen-ID leer ist.
|30448|	Genehmigung|	ExFlow-Genehmigung ist standardmäßig nicht auf Ja gesetzt, wenn eine Bestellung kopiert wird.
|30660|	Benutzer|	Es ist nicht möglich, einen neuen ExFlow-Benutzer für delegierte Administratoren zu erstellen, wenn die für die Authentifizierung verwendete E-Mail-Adresse ungültig ist.
|30663|	E-Mails|	E-Mail-Benachrichtigungen für neue Kommentare, die im Diskussionsbereich des Importjournals hinzugefügt wurden, werden nicht gesendet.
|30715|	Genehmigung|	Es ist nicht möglich, eine 100% Vorauszahlungsrechnung aufgrund eines Fehlers bezüglich des Bruttobetrags zu buchen.
|30725|	Genehmigung|	Wenn Mengen manuell auf einer Gutschrift angepasst werden, die mit einer Rücksendung verbunden ist, wird die in der Artikelverfolgung verwendete Menge aus der Rücksendung anstelle der Gutschrift übernommen.
|30959|	E-Mails|	E-Mail-Benachrichtigungen sollten in Testunternehmen deaktiviert werden.
|30960|	PDF-Viewer|	Einige Informationen verschwinden aus bestimmten PDFs.
|30961|	Genehmigung|	Rechnungen bleiben manchmal im Status 'inaktiv' hängen, wenn der Betrag unter 'Min. Doc Approval Amt. (LCY)' liegt.
|30968|	Genehmigung|	Allgemeine Produktbuchungsgruppe erforderlich auf dem G/L-Konto, das mit der FA-Buchungsgruppe verbunden ist.
|30971|	Konfiguration|	Zeilen werden für bestimmte Lieferanten ignoriert, wenn 'OCR-Zeilen ignorieren' in der ExFlow-Konfiguration auf Ja gesetzt ist, aber Nie in den erweiterten Lieferantenoptionen für einen bestimmten Lieferanten.
|30972|	Importjournal|	[IT-Lokalisierung] - Feld 'Operation Occurred Date' fehlt im Ex-Dokumentenkopf.
|31059|	E-Mails|	Es ist nicht möglich, Erinnerungen online für abgeglichene Dokumente zu senden, wenn die PO-Nummer auf Kopfebene interpretiert wird.
|31143|	Genehmigung|	Automatische Genehmigung auf Bestellung funktioniert nicht, wenn Benutzerkonfiguration oder Einkäufercode verwendet wird.
|31171|	Genehmigung|	Es ist nicht möglich, den Abgrenzungsplan im Importjournal zu bearbeiten.
|31190|	Importjournal|	[US-Lokalisierung] - Gen. Prod Buchungsgruppe fehlt auf der Rechnung, auch wenn sie als Standard in der ExFlow-Konfiguration festgelegt ist.
|31243|	Importjournal|	Fälligkeitsdatum wird in einigen Szenarien nicht korrekt berechnet.
|31279|	Änderungen überprüfen|	Das Verfahren zum automatischen Buchen von Empfangsbestätigungen schlägt manchmal fehl und kann dazu führen, dass Empfangsbestätigungen beim nächsten Laufzeitpunkt erneut gebucht werden.
|31341|	Importjournal|	Dokumentzeilen werden gelöscht, wenn der Dokumenttyp geändert wird.
|31443|	Genehmigung|	Dokument nicht im Posteingang sichtbar, wenn es 'On Hold' gesetzt und an neuen Genehmiger weitergeleitet wird.
|31793|	PO-Abstimmung|	Möglichkeit, eine Rechnung ohne Empfang zu buchen, wenn 'Bestellung und Empfang' als Abstimmungsoption verwendet wird.
|31990|	PO-Abstimmung|	Empfangsnummer wird nicht hinzugefügt, wenn Belege manuell aus Aktionen im Importjournal abgerufen werden.
|31997|	PO-Abstimmung|	Empfangszeilen, die aus der PO-Nummer im Kopf abgerufen werden, werden entfernt, wenn Belege manuell aus Aktionen im Importjournal abgerufen werden.
|31622|	PO-Abstimmung|	Abgleich mit mehreren Einkaufsbelegen funktioniert nicht, wenn 'Multi-Line-Abgleich' aktiviert ist.
