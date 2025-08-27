---
title: Versionshinweise
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Versionshinweise

Partner können auf unsere Pre-Release-Notes in [PRM](https://partners.signupsoftware.com/px/-/BC-exflow-ap) zugreifen, um wichtige Details vor der offiziellen Veröffentlichung zu überprüfen.

### ExFlow 25.1.0.0 – Versionshinweise <br/>

#### Versionstyp
Nebenversion

#### Veröffentlichungsdatum
21.08.2025

#### Versionsinformationen
Erfordert BC 25.0 oder höher

#### Neue Funktionen
| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 43184 | Gelöschte Dokumente | Benutzer, die auf die Kommentarbenachrichtigung klicken, erhalten die Fehlermeldung, dass kein Zugriff auf gelöschte Dokumente möglich ist.

#### Verbesserungen
| ID | Bereich | Beschreibung |
| :----------- | :--------------- | :--------------- |
| 44824 | Genehmigungsstatus | Problem behoben: Beim Weiterleiten eines Einkaufsangebots und der Umwandlung in eine Bestellung erhält die Bestellung nach der Umwandlung den Status „Abgelehnt“.
| 44843 | Genehmigungsdokumente | Die Spalte „Aktueller Genehmiger“ wurde von der Seite „Genehmigungsdokumente“ entfernt. Der aktuelle Genehmiger wird in der Infobox pro Dokumentzeile angezeigt, nicht im Dokumentkopf.
| 46130 | Importjournal | Problem bei der Artikelzuweisung – Zuweisung über den verfügbaren Betrag hinaus – behoben.
| 46838, 46841 | Blob-Speicher | Problem mit dem ExFlow-Genehmigungsstatusverlauf und den Nachrechnungseinträgen behoben: Rückgabecode: 404. Der angegebene Blob existiert nicht.
| 46892 | Kundenauftrag | Kundenauftragsimport – Problem „Benutzerdefinierte Adresse verwenden“ funktioniert nicht korrekt.
| 46896 | Kundenauftrag | Kundenauftragsimport – Liefertermine werden nicht korrekt aktualisiert.
| 47033 | Genehmigungsstatus | Keine Buchung bei Verwendung der Tastenkombination F9.
| 47290 | Kundenauftrag | Nicht ausgefüllte Maßeinheit (Import) im ExFlow-Kundenauftragsimportdokument.
| 47343 | Auftragsabgleich | Bestelleingang – Buchung einer Bestellung mit Artikelzuschlagszuordnung – „Kein Artikelposten gefunden“
| 47792 | Kundenauftrag | Dynamische OCR-Zuordnung – ME-Zuordnungen gelten für alle Kunden. Problem behoben.
| 48154 | Berechtigung | Berechtigungsfehler tritt auf, wenn der Benutzer nicht SUPER ist oder die Sicherheitsrolle beim Hinzufügen oder Ändern von ExFlow-Benutzern hat.
| 48550 | AU-Lokalisierung | Problem behoben: Wenn eine Rechnung eine Zeile mit GST-100 (GST-Produktbuchungsgruppe) enthält, wird der Betrag in der Zeile beim Senden der Rechnung zur Genehmigung nicht berücksichtigt.
| 48638 | Auftragsabgleich | Problem behoben, bei dem „Dokument überprüfen“ Bestellinformationen in Importzeilen nicht aktualisiert.
| 48263 | Importjournal | Problem behoben: Wenn der Lieferant Preise inklusive Mehrwertsteuer festgelegt hat und die Kodierung mit einer separaten Mehrwertsteuerzeile erfolgte, wurde der Betrag inklusive Mehrwertsteuer in der Zeile auf Null gesetzt.

<br/>
Kleinere Fehlerbehebungen sind ebenfalls in dieser Version enthalten, werden aber nicht in den Versionshinweisen aufgeführt.
<br/>


### ExFlow 25.0.0.0 – Versionshinweise <br/> 

#### Art der Version
Hauptversion

#### Veröffentlichungsdatum
2025-04-17

#### Versionsinformationen
Erfordert BC 25.0 oder höher 

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 25.0.246.51 | Upgrade | Das Upgrade von C/AL schlägt fehl, wenn die erweiterten Optionen des Anbieters Daten enthalten.
| 25.0.246.51 | Journal importieren | Ein Problem wurde behoben, bei dem beim Importieren/Abrufen interpretierte Zeilen zusätzliche Kommentarzeilen erzeugten.
| 25.0.246.51 | Genehmigungsstatus | Ein Problem mit der „Zu empfangenden Menge“ bei der Ausführung der Änderungsüberprüfung wurde behoben.
| 25.0.246.47 | Allgemein | Ereignisse hinzugefügt, sodass Drittanbieter zusätzliche Felder zum Spaltenfilter für den Excel-Export/-Import des Importjournals hinzufügen können.
| 25.0.246.47 | Importjournal | Problem behoben, bei dem die Importjournal-Kopfzeilendimensionen für den Referenzcode nicht korrekt aktualisiert wurden.
| 25.0.246.47 | ExFlow Web | Problem behoben, bei dem der Genehmiger in der neuen geteilten Zeile fehlte, wenn die Funktion „Immer neue Genehmiger vorschlagen“ in ExFlow Web verwendet wurde.
| 25.0.246.47 | Lizenzanbieter | Korrekturen beim Opt-in für v3 LP-Abonnement. Verbesserter Prozessablauf für die ersten Schritte, damit Benutzer sich für eine Testversion der neuen v3-Lizenz anmelden können.
| 25.0.246.47 | Kundenauftrag | Problem behoben, bei dem Liefertermine für Zeilen im Feldzuordnungs-Setup nicht validiert wurden und daher im SO-Import nicht korrekt aktualisiert wurden.
| 25.0.246.47 | Kundenauftrag | Problem behoben, bei dem benutzerdefinierte Adressfelder nicht korrekt funktionierten.
| 25.0.246.47 | Kundenauftrag | Neue sonstige Felder wurden der ExFlow-Kundenauftrags-EDC-Vorlage (benutzerdefiniertes DED für Nordamerika) hinzugefügt. Außerdem wurde eine neue Einstellung zum Zurücksetzen der Feldzuordnung hinzugefügt.
| 25.0.246.47 | Funktionsverwaltung | Problem behoben, bei dem die Datenaktualisierung nur in der aktuellen Firma bei der Aktivierung des neuen Auftragsabgleichs geplant ist. Verbesserte Meldungen zur Aktivierung/Deaktivierung der Funktion wurden ebenfalls hinzugefügt.
|25.0.246.31|4PS	|Importjournal - Kopieren von Kopfwerten in Rechnung/Gutschrift
|25.0.246.31|Vertrauliche Dokumente	|Verhinderung eines Szenarios, bei dem ein vertrauliches Dokument heruntergeladen werden könnte
|25.0.246.31|Upgrade-Skript	|Konvertiert leeres Testbetragfeld zu 'Von ExFlow-Einrichtung' in ExFlow-Kreditoreneinrichtung
|25.0.246.31|Importjournal	|Wenn Einstellung "OCR-Zeilen ignorieren" immer aktiviert ist - Importdokument kommt in falsches Journal
|25.0.246.19| Neue Auftragsabgleichung |Problem behoben, bei dem "Dokumente abgleichen mit: Auftrag" nicht zu Auftrag und Wareneingang in den aktuellen Kreditoren-Einrichtungskarten konvertiert
|25.0.246.19| Einrichtung |Buchung von Bestellung mit Zuschlagszuordnung - "Kein Artikelposten gefunden" 
|25.0.246.19| Einrichtung |Problem behoben, wenn Einkaufsrücklieferungen erfasst werden, aber Mengen fehlen
|25.0.246.14|4PS		|WIP-Konten waren in der Dropdown-Liste in ExFlow Web nicht sichtbar
|25.0.246.14|Allgemein		|Ereignisse für automatische Wareneingänge hinzugefügt 
|25.0.246.14|Upgrade-Skript		|Sprachvalidierungsproblem im Upgrade-Skript behoben 
|25.0.246.14|Einrichtung |  Defekte ''Mehr erfahren''-Links wurden in beiden Auftragsabgleichsassistenten behoben
| 25.0.246.7 | Allgemein | SYSTEM-Benutzer (Systemauftrag) wird in aktuellen Benutzer geändert
| 25.0.246.7 | Lizenzanbieter v3 | Verbesserungen wurden hinzugefügt
| 25.0.246.7 | Lizenzanbieter v3 | Namensänderung von SignUp zu ExFlow
| 25.0.246.7 | Lizenzanbieter | Link zur Seite wurde zur ExFlow AP-Einrichtungsübersicht hinzugefügt
| 25.0.246.7 | 4PS | Importjournal - Erstellung von Differenzzeilen wurde behoben

<br/>

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 24166, 46179 | Neue Auftragsabgleichung | Vollständig neue und erweiterte Auftragsabgleichungsfunktionalität zusammen mit einem dedizierten Arbeitsbereich für Einkäufer
| 43932, 45416 | Lizenzanbieter und Funktionsverwaltung | Ein neuer Lizenzanbieter zur Unterstützung zukünftiger Lizenzmodelle zusammen mit einer Funktionsverwaltung für eine genauere Kontrolle darüber, welche Funktionen in verschiedenen Szenarien aktiviert sind
| 39209 | Neue Auftragsabgleichung | Eine neue, assistentengesteuerte Erfahrung zur Einrichtung von ExFlow AP, die viele manuelle Aufgaben früherer Versionen ersetzt
| 44723 | Einrichtung | Verbesserte Funktionalität und Nachverfolgung der ExFlow-E-Mail-Protokolle
| 34279 | Finnische Lokalisierung | FI-Lokalisierungsverbesserung: Finnische Referenz-Nr. zur Selbstrechnung
| 43229 | Genehmigungsstatus | Standardremitadresse auf der Lieferantenkarte - wird auf ExFlow-Rechnungen nicht angezeigt
| 44384 | Web | Aktivieren von Codierungsänderungen für vertrauliche Dokumente
| 44430 | Verkaufsauftrag | Neue Einstellung im ExFlow-Verkaufsauftrag-Importsetup - Verkaufsauftragszuordnung hinzufügen
| 44877 | Technisch | Ereignisse erforderlich für benutzerdefinierte OCR-Importzuordnungsfelder
| 45879 | Neue Auftragsabgleichung | Assistent für neue PO (Bestell-)Abgleichung erstellen
| 45901 | Einrichtung | Erste Schritte-Assistent - Option zum Abbrechen oder später Ausführen hinzufügen
| 46121 | Importjournal | Zuordnung des importierten MwSt.-Satzes zu den MwSt.-Produktbuchungsgruppen

<br/>

#### Verbesserungen

| ID| Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 44781 | Genehmigungsstatus | Überprüfen von Dokumenten bei der Verwendung von Neurechnungen in Schwedisch - Aktionsnachricht
| 45040 | Importjournal | MwSt.-Fehler bei NA-Rechnungen mit sowohl steuerpflichtigen als auch nicht steuerpflichtigen Zeilen
| 45483 | Genehmigungsstatus | Batch-Aktualisierung des Buchungsdatums - Stornobuchungsdatum nicht aktiviert - Aktualisiert den Stornierungszeitplan
| 45599 | Importjournal | Artikelzuschlagszuweisung funktioniert nicht korrekt, wenn die Zuordnung vor der Überprüfung des Dokuments erfolgt
| 45157 | Verkaufsauftrag | ExFlow-Verkaufsimport - Verkaufsauftrag erstellen - Bestellung wird ohne Kundennummer erstellt - Keine Verkaufszeilen werden erstellt
| 45573 | Importjournal | ExFlow-Dateiimport - Import - Import schlägt fehl, wenn PDFs ohne XML vorhanden sind
| 45111 | Importjournal | Fehlermeldung: Ein Fehler ist aufgetreten, und die Transaktion wurde gestoppt. Kontaktieren Sie Ihren Administrator oder Partner für weitere Unterstützung
| 45361 | Technisch | Kommunikation mit Diensten - GetUserAgent - Enthält ungültige Zeichen aufgrund von ISV, die sie hinzufügen
| 41731 | ExFlow Web | Änderungszeilenart - mehrere Probleme
| 46254 | Importjournal | ExFlow-Beschaffungscode und Sonstiges 1 & 2 - Sonstiges wird nicht ausgeschlossen, wenn Zeilen erstellt werden
| 46025 | Importjournal | PDF-Viewer in neuem Tab öffnen - Bild muss jedes Mal neu skaliert werden, wenn es geöffnet wird, und PDF in das FactBox-PDF-Viewer verschoben werden
| 43262 | PGS | PGS Chargeable - PGS Chargeable bleibt deaktiviert, wenn die G/L-Nr. geändert wird
| 45437 | ExFlow Web | ExFlow-Web - Zeilenart ändern - Nr. ist leer

<br/> 
Kleinere Fehlerkorrekturen werden ebenfalls in der Version behandelt, jedoch nicht in den Versionshinweisen aufgeführt.
<br/>

### ExFlow 24.1.0.0 – Versionshinweise <br/>  

#### Art der Version
Nebenversion 

#### Veröffentlichungsdatum
2024-12-10 

#### Versionsinformationen
Erfordert BC 24.0 oder höher 

#### Korrekturen

| Version | Bereich | Beschreibung | 
| :----------- | :-------------- | :-------------- | 
| 24.1.263.48 | Allgemein | Interne Prozedur CreateInvoicePeriod in externe Prozedur geändert
| 24.1.263.48 | 4PS | ExFlow Genehmigungsgruppe - Optionen fehlen im dynamischen Genehmigungstyp
| 24.1.263.48 | 4PS | Einkaufsrechnung - Betrag wird nicht aktualisiert
| 24.1.263.44 | 4PS | Fehler beim Erstellen eines neuen ExFlow-Benutzers
| 24.1.263.44 | Kreditoreneinrichtung | Falsche Aussage Immer wurde im automatischen Codierungsvorschlag gesetzt, wenn der ExFlow-Kreditoreneinrichtungsdatensatz nicht existierte
| 24.1.263.39 | 4PS | Neue Ereignisse für 4PS hinzugefügt
| 24.1.263.32 | 4PS | Neue Ereignisse für 4PS hinzugefügt
| 24.1.263.32 | Pebblestone | Problem bei der Verwendung von Pebblestone und ExFlow Web
| 24.1.263.32 | Importjournal | Problem mit globalen Dimensionen, die sich im Importjournal nicht korrekt verhalten
| 24.1.263.28 | 4PS | Neue Ereignisse für 4PS und ExFlow-Beschaffungscodes hinzugefügt
| 24.1.263.28 | Artikelzuschlagszuweisung | Problem im Zusammenhang mit der Artikelzuschlagszuweisung, die vor der Überprüfung des Dokuments nicht funktioniert
| 24.1.263.22 | Genehmigungsstatus | Das Problem mit Stornierungscodes in einigen spezifischen Szenarien, die ein falsches Buchungsdatum erhalten, wenn die Funktion "Batch-Aktualisierung des Buchungsdatums" ausgeführt wird
| 24.1.263.22 | Importjournal | Das Problem im Zusammenhang mit dem Importieren von nur PDF-Dateien über die ExFlow-Datei-Importeinrichtung
| 24.1.263.22 | Verkaufsauftrag | Das Problem, dass Verkaufsaufträge in einigen Szenarien nicht erstellt werden konnten
| 24.1.263.18 | Neurechnung | Problem, bei dem in einigen Fällen die MwSt. auf Verkaufsrechnungen, die aus der Neurechnung generiert wurden, falsch war
| 24.1.263.18 | Upgrade | Problem, bei dem ExFlow nicht auf die neueste Version aktualisiert werden konnte
| 24.1.263.18 | Progressus | Problem beim Ausführen von Progressus und ExFlow, das manchmal dazu führte, dass die Rechnung nicht codiert werden konnte
| 24.1.263.9 | OCR-Importzuordnung | Zwei neue Ereignisse für OCR-Importzuordnungen verfügbar
| 24.1.263.9 | Genehmigungsstatus | Neurechnung funktionierte nicht mit schwedischer Sprache
| 24.1.263.9 | Progressus | Problem bei der Verwendung von ExFlow AP und Progressus, bei dem manchmal das Feld "belastbar" sich nicht korrekt verhielt
| 24.1.263.9 | Vorläufige Buchung | Problem mit der MwSt.-Buchungsgruppe, die kein Rundungskonto hat, wenn die vorläufige Buchung verwendet wird, funktioniert jetzt wieder wie vorgesehen

<br/> 

#### Neue Funktionen 

| ID| Bereich | Beschreibung | 
| :----------- | :-------------- | :-------------- |  
| 30556 | Importjournal | Verbesserte ExFlow-Zuordnung von bis zu 8 Sonstigen Gebührenfeldern zu Beschaffungscodes
| 44644 | Importjournal | Neues Ereignis für die Artikelzuschlagszuweisung im Importjournal hinzugefügt
| 42817 | Genehmigungsstatus | Neuer Schnellbefehl für die Vorschau der Buchung im Genehmigungsstatus hinzugefügt
| 44220 | Importjournal | PDF-Viewer in separatem Browser wieder unterstützt
| 32864 | Genehmigungsstatus | FactBoxes der Lieferantenstatistiken im Genehmigungsstatus und in der Genehmigungsstatushistorie hinzugefügt
| 40207 | Importjournal | Bessere Übereinstimmung mit Währungen bei der Zahlungsvalidierung
| 43588 | Genehmigungsstatus | Funktion zum Zurücksetzen aller Codierungen an Dokumenten, die im Web im Genehmigungsstatus vorgenommen wurden, hinzugefügt
 
<br/> 

#### Verbesserungen

| ID| Bereich | Beschreibung | 
| :----------- | :-------------- | :-------------- |  
| 43997	| Web		| Problem behoben, bei dem die Warnung vor einer Mindestanzahl von Genehmigern manchmal nicht angezeigt wurde 
| 44100	| Einrichtung		| Updates an EX BASE, bei denen einige Berechtigungen fehlten 
| 44288	| Importjournal	| Problem behoben, dass in einigen Fällen ein Beleg nicht zugeordnet werden konnte, wenn dasselbe Element in mehreren Zeilen verwendet wurde 
| 42949	| Importjournal	| Problem behoben, dass manchmal bei zugeordneter Vertragsnummer die Dimensionen und Genehmigungen nicht den Einstellungen folgten 
| 42062	| Web		| Problem behoben, bei dem manchmal Artikelgebühren im Web nicht genehmigt werden konnten 

<br/>  

Kleinere Fehlerkorrekturen werden ebenfalls in der Version behandelt, jedoch nicht in den Versionshinweisen. 

<br/> 

### ExFlow 24.0.0.0 – Versionshinweise <br/> 
#### Art der Version
Hauptversion

#### Veröffentlichungsdatum
2024-09-13

#### Versionsinformationen
Erfordert BC 23.0 oder höher 

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 24.0.310.36 | ExFlow-Benutzer | Authentifizierungs-E-Mail und Kontakt-E-Mail können jetzt bei den ExFlow-Benutzern bearbeitet werden, dies gilt für Kunden, die kein Office verwenden
| 24.0.310.33 | ExFlow Web | Die Administratorsuche kann Dokumente in ExFlow Web nicht öffnen
| 24.0.310.31 | Automatische Kontengruppe | Problem im Zusammenhang mit automatischen Kontengruppen für BC 25
| 24.0.310.31 | Entra-Gruppen | Entra-Gruppen werden nicht korrekt mit ExFlow aktualisiert
| 24.0.310.31 | ExFlow Web-Suche | Dimensionsfiltersuche in ExFlow Web verbessert
| 24.0.310.20 | FI - Importjournal | Finnische Kunden können jetzt wieder Zeilen importieren, und die Berechnung des Zeilenbetrags ist korrekt
| 24.0.310.20 | Neurechnung | Neues Ereignis hinzugefügt, um mehr Anpassungen bei der Neurechnung zu ermöglichen
| 24.0.310.20 | ExFlow Web | Mehrere Verbesserungen der Suche in ExFlow Web bei Verwendung von Dimensionsfiltern für den ExFlow-Benutzer
| 24.0.309.15 | Importjournal | Negative Zeilenrabatte können jetzt im Importjournal bearbeitet werden
| 24.0.309.15 | Mindestanzahl von Genehmigern | In einigen spezifischen Fällen funktionierte die Option "Mindestanzahl von Genehmigern" nicht wie vorgesehen
| 24.0.310.12 | Importjournal | Möglichkeit zur Änderung falscher Rabatte
| 24.0.310.12 | Auftragsabgleich | Kleinere Fehler beim Auftragsabgleich, bei denen ExFlow manchmal die richtige Zeile nicht identifizieren konnte
| 24.0.310.12 | Berechtigungen | ExFlow-Berechtigungssets enthalten nicht genügend Berechtigungen

<br/>

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 31845 | Genehmigungsstatus | Hinzufügen von PDF-FactBox auf der Seite Änderungen überprüfen
| 32005 | E-Mail-Erinnerungen | Neue E-Mail-Erinnerung für Dokumente in Wartestellung hinzugefügt
| 36272 | Berichte | Verbesserungen im Bericht über den Genehmigungsstatus, der jetzt verschiedene Währungen bei der Neuberechnung der Zeilen besser unterstützt
| 36766 | E-Mail-Erinnerungen | Neue E-Mail-Erinnerung hinzugefügt, Benutzer, die die Bestellung/Angebot erstellen, können jetzt eine Erinnerung erhalten, dass das Dokument jetzt vollständig genehmigt wurde
| 38927 | Einrichtung | Möglichkeit hinzugefügt, das Buchen von Dokumenten außerhalb von ExFlow zu blockieren, d.h. Erstellen einer Einkaufsrechnung und anschließendes Buchen, ohne dass eine Genehmigung erforderlich ist
| 40503 | Genehmigungsstatus | Neue größere Funktion hinzugefügt, Filter festlegen, welche Werte im Web geändert werden dürfen, wenn sie jetzt festgelegt sind, sind keine manuellen Überprüfungen mehr für diese Werte erforderlich, wenn Änderungen überprüft werden
| 39935 | ExFlow-Verkaufsaufträge | Unterstützung für benutzerdefinierte Versandadresse hinzugefügt
| 41637 | ExFlow-Verkaufsaufträge | Möglichkeit hinzugefügt, eine eindeutige Nr.-Serie für über ExFlow-Verkaufsaufträge erstellte Verkaufsaufträge zu verwenden
| 41640 | ExFlow-Verkaufsaufträge | Möglichkeit zum Staging von Dokumenten hinzugefügt, die nicht automatisch erstellt werden sollen, sondern stattdessen auf Eis gelegt werden, um mehr Kontrolle für bestimmte Kunden zu schaffen

<br/>

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 40887 | Vorläufige Buchung | Problem behoben, wenn mit vorläufiger Buchung und Stornierungen gearbeitet wird, jetzt erfolgt die Rückbuchung am richtigen Datum
| 40197 | Finnische Lokalisierung | Problem in der finnischen Lokalisierung behoben, bei dem das Dokument in einigen Fällen ohne Nachricht erstellt werden konnte
| 40465 | Einrichtung | Problem in Export/Import ExFlow-Einrichtung behoben, bei dem die Dimensionen in den Beschaffungscodes fehlten
| 40419, 40422 | Spanische Lokalisierung | Zwei Probleme auf technischer Seite behoben, bei denen IDs fehlten und ID-Typ im Importjournal hinzugefügt wurde
| 37501 | Einrichtung | Problem behoben, bei dem der Projektmanager in dynamischen Genehmigungsabläufen nicht abgerufen werden konnte

<br/> 

### ExFlow 23.2.0.0 – Versionshinweise <br/> 
#### Art der Version
Nebenversion

#### Veröffentlichungsdatum
2024-05-24

#### Versionsinformationen
Erfordert BC 23.0 oder höher  

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 23.2.34.17 | Vorläufige Buchung | Das Problem mit Stornierungen und vorläufiger Buchung
| 23.2.34.17 | Upgrade | BC-Upgrades schlagen manchmal aufgrund von ExFlow-Daten fehl
| 23.2.34.20 | Genehmigungsstatusbericht | Das Problem, wenn der ExFlow-Genehmigungsstatusbericht den verbleibenden periodischen Saldo auf dem angegebenen Konto nicht erstellt hat
| 23.2.34.20 | Einrichtung | Methode ''AddDocumentFromBlobs'' freigegeben, die die veraltete Methode ''AddDocumentFromStreams'' ersetzt
| 23.2.34.28 | Nordamerika <br/> Gen. Prod. Buchungsgruppe | In NA-Umgebungen erforderte ExFlow, dass die Gen. Prod. Buchungsgruppe auf dem G/L-Konto und den Fixed Asset-Zeilen im Importjournal ausgefüllt war
| 23.2.34.28 | Vorläufige Buchung | Vorläufig gebuchte Dokumente können aufgrund eines angepassten Wechselkurses auf dem Kreditorenbuchungssatz nicht rückgängig gemacht werden. Die Buchung des angepassten Wechselkurses wird jetzt am endgültigen Buchungsdatum rückgängig gemacht
| 23.2.34.28 | Berechtigungen | Ein Problem, bei dem Benutzer mit dem Berechtigungssatz EX ACCOUNTANT keinen Zugriff auf ExFlow-Importjournal-Batches hatten
| 23.2.34.28 | Importjournal | Zeilenrabatte wurden im Importjournal zweimal berechnet
| 23.2.34.28 | BC Genehmigungsdokumente | Genehmigung von Dokumenten in Business Central mit derselben Funktionalität wie ExFlow Web bezüglich der Einrichtung in den ExFlow-Spalten "MwSt.-Produktbuchungsgruppe aktualisieren" und "Gen. Prod. Buchungsgruppe aktualisieren"
| 23.2.34.28 | Vorläufige Buchung | Unterstützung für vorläufige Buchungen ohne MwSt.

<br/>

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 39085 | Importjournal | Problem beim Import des OIOUBL-Formats behoben
| 40104 | Importjournal | Große Verbesserung der Leistung bei der Arbeit mit der Mehrzeilenabgleichung
| 39999 | Importjournal | Problem behoben, bei dem Rechnungen mit Dienstleistungsartikeln in einigen Fällen nicht aus dem Importjournal erstellt werden konnten
| 39764 | Importjournal | Jetzt unterstützt ExFlow auch die Dimensionen auf den Konten bei der Hintergrundbuchung
| 39492 | Importjournal | Problem mit dem Zahlungsbedingungscode bei der Arbeit mit Gutschriften behoben. Dieser wurde zuvor nicht korrekt übernommen
| 39085 | Importjournal | Problem beim Import des OIOUBL-Formats behoben
| 40104 | Importjournal | Große Verbesserung der Leistung bei der Arbeit mit der Mehrzeilenabgleichung

<br/> 

### ExFlow 23.1.0.0 – Versionshinweise <br/> 
#### Art der Version
Nebenversion

#### Veröffentlichungsdatum
2024-03-26

#### Versionsinformationen
Erfordert BC 23.0 oder höher

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 23.1.282.13 | Neurechnung | Unterstützung für die Neurechnung anderer Zeilenarten auf das Hauptbuch wieder hinzugefügt
| 23.1.282.13 | Berechtigung | Neue Tabellen mit Leseberechtigung für EX BASE hinzugefügt
| 23.1.282.13 | Abgleichverzögerung | Vorhandene Funktionalität "Abgleichverzögerung" in ExFlow-Einrichtung verbessert, jetzt wird eine andere Fehlermeldung angezeigt, wenn das Dokumentdatum oder das Fälligkeitsdatum innerhalb der Datumsformel liegt. Dies erleichtert die Nutzung dieser Funktionalität, damit die Kunden wissen, welche Dokumente ihre Aufmerksamkeit benötigen

<br/>

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 11392 | Web | Unterstützung für vertrauliche Rechnungen in ExFlow Web und Business Central hinzugefügt
| 25408 | Web | Verbesserung der bestehenden Funktionalität der Neurechnung mit mehreren neuen Funktionen
| 27791 | Technisch | Unterstützung für ExFlow-Tabellen in BC-Datensuche hinzugefügt
| 28316 | Web | Grundlegende Unterstützung für den BC-Standardintercompany in ExFlow hinzugefügt
| 30635 | Web | Grundcode in ExFlow Web für mit Bestellung abgeglichene Dokumente hinzugefügt
| 32203 | Einrichtung | Verbesserungen des ExFlow-Auditprotokolls, Möglichkeit zur Erstellung von PDF mit dem Genehmigungsfluss
| 35216 | Importjournal | Der Einkäufercode kann jetzt über die Personalisierung im Importjournal angezeigt werden
| 35729 | ExFlow-Datenaufnahme | Möglichkeit hinzugefügt, bestimmte Lieferanten nicht mit ExFlow-Datenaufnahme zu synchronisieren, dies erfolgt über die ExFlow-Kreditoreneinrichtung
| 36300 | Einrichtung | Möglichkeit hinzugefügt, den Standardnachrichtentyp für Lieferanten festzulegen, nur verfügbar in der FI-Lokalisierung
| 39171 | Technisch | Neue Abfrage hinzugefügt, um Kreditoren und Rechnungen für Power BI zu bearbeiten

<br/> 

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 36337 | Einrichtung | Problem behoben, dass die Benachrichtigung über nicht erhaltene Bestellungen manchmal nicht funktionierte
| 38656 | Einrichtung | Problem mit der vorläufigen Buchung behoben, bei dem die Rückbuchung zuvor nicht möglich war, wenn ein anderer Zahlungsempfänger vorhanden war
| 38566 | Einrichtung | Problem mit dem Importauftrag, der fälschlicherweise mehrere Jobplanungenseinträge erstellt
| 38346 | Einrichtung | Das Referenzbeschreibung auf dem Vertrag, das nicht auf die Referenzkarte verschoben wurde, wurde behoben
| 37306 | Importjournal | Das Problem, dass der Zahlungsbedingungscode auf Gutschriften nicht korrekt gesetzt wurde, wurde behoben. Dieses Problem trat nur in den US- und CA-Umgebungen auf
| 37110 | OMNI | Problem behoben, bei dem einige Benutzer nicht auf den Vertrag zugreifen konnten, um ihn vollständig zu genehmigen
| 36966 | Einrichtung | Das Problem, dass Anlagen in einigen Fällen den Typ "Sonstiges" erhielten, wurde behoben
| 37654 | Einrichtung | Unterstützung hinzugefügt, um die Aufgaben-Nr. im Datenaustausch für ExFlow zu verwenden

<br/> 

### ExFlow 23.0.329.0 – Versionshinweise <br/> 
#### Art der Version
Hauptversion

#### Veröffentlichungsdatum
2024-01-11

#### Versionsinformationen
Erfordert BC 23.0 oder höher 

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
|23.0.329.3| Upgrade| Das Problem, dass Business Central-Upgrades gelegentlich aufgrund eines ExFlow-bezogenen Fehlers fehlschlugen|
|23.0.329.14|Kreditoreneinrichtung|Problem behoben, dass der Name des Kreditors in der ExFlow-Kreditoreneinrichtung nicht angezeigt wurde|
|23.0.329.14|ExFlow Web| Beschreibung 2 unterstützt nicht die gleiche Anzahl von Zeichen in Business Central wie in ExFlow Web wurde behoben

<br/> 

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 19664 | Einrichtung | Alle vorherigen ExFlow-Einstellungen auf der Lieferantenkarte sowie die erweiterten ExFlow-Optionen wurden in die ExFlow-Kreditoreneinrichtung verschoben
| 30367 | Einrichtung | Alle vorherigen ExFlow-Einstellungen auf der Lieferantenkarte sowie die erweiterten ExFlow-Optionen wurden in die ExFlow-Kreditoreneinrichtung verschoben
| 30676 | PO-Abgleich | Zusätzliche Felder in ExFlow Genehmigungsdokumenten in Business Central hinzugefügt, um das Genehmigen von Rechnungen, die einem PO zugeordnet sind, zu erleichtern
| 31319 | Web | Unterstützung für zusätzliche Steuerfelder in ExFlow Web für US- und CA-Lokalisierung hinzugefügt
| 32226 | Importjournal | Rechnungsnachricht wird mit der Lieferantenrechnungsnummer gefüllt, wenn die Rechnungsnachricht leer ist - nur in FI-Lokalisierung
| 34703 | Einrichtung | EDC-Konten, ExFlow BLOB-Speicher und ExFlow-Datei-Importeinrichtungen werden automatisch deaktiviert, wenn eine Sandbox-Kopie erstellt wird
| 34979 | Einrichtung | Importierte Zeilen mit dem Wert 0,00 werden beim Import automatisch entfernt. Nur anwendbar für den Artikelzeilentyp
| 36206 | Technisch | Möglichkeit hinzugefügt, alle PDFs in alle Unternehmen zu importieren, wenn Dokumente während des Upgrades von NAV zu BC importiert werden
| 36629 | Einrichtung | Neue Einstellung in "Bestell- und Angebotsgenehmigung" hinzugefügt - "Nur genehmigte Bestellung erhalten". Wenn aktiviert, können Einkaufsbestellungen nicht empfangen werden, solange die Einkaufsbestellung nicht vollständig in ExFlow genehmigt ist. Diese Einstellung ist nur anwendbar, wenn die Genehmigung von Einkaufsbestellungen in ExFlow aktiviert ist

<br/> 

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 36410 | Einrichtung | Verbesserte E-Mail-Übersetzung für nicht erhaltene Bestellungen - Problem im Zusammenhang mit der E-Mail-Übersetzung für nicht erhaltene Bestellungen behoben
| 32724 | Berichte | Verbesserte endgültige Buchungsgenauigkeit für Übergangskonten - Implementierte Korrekturen für Situationen, in denen die Aktivierung von "Periodische Zeilen mit Startdatum nach Buchungsdatum ausschließen" und "Verbleibenden periodischen Saldo auf separates Konto buchen" im Bericht über den Genehmigungsstatus zu falschen endgültigen Buchungen für Übergangskonten führen könnte
| 34522, 36785, 37027 | PO-Abgleich | Optimierung der PO-Abgleichfunktionalität - Mehrere Verbesserungen beim PO-Abgleich, einschließlich der Möglichkeit, dasselbe Element mehrfach auf verschiedenen Zeilen der Bestellung abzugleichen
| 34900 | Einrichtung | Optimierung der Synchronisierung von Lieferantenstammdaten | Problem behoben, das gelegentlich die manuelle Verwendung der Stammdatensynchronisierung für Lieferanten zu ExFlow-Datenaufnahme verhinderte
| 35139 | Einrichtung | Verbesserter ExFlow-Erste Schritte-Assistent | Automatisch erstellte Aufträge wurden aus dem ExFlow-Erste Schritte-Assistenten entfernt, um den delegierten Administrationsbenutzern die Ausführung des Assistenten mit größerer Kontrolle und Benutzerfreundlichkeit zu ermöglichen
| 35228 | Genehmigung | Verbesserte Kontrolle des Genehmigungsflusses | Genehmigungsflüsse werden jetzt erst initiiert, wenn die Bestellung/Angebot freigegeben wird, um unbeabsichtigte Flüsse zu vermeiden. Darüber hinaus können Benutzer jetzt Genehmigungsflüsse bearbeiten, wenn der Status "Offen" ist, was insbesondere bei der Arbeit mit automatischen Genehmigungsgruppen mehr Flexibilität bietet
| 35323 | Importjournal | Problem mit wiederholtem Jobplanungsauftrag behoben | Job 881 wird nicht mehr kontinuierlich zu den Jobplanungen hinzugefügt

<br/> 

### ExFlow 22.2.110.0 – Versionshinweise<br/> 
#### Art der Version
Nebenversion

#### Veröffentlichungsdatum
2023-09-27

#### Versionsinformationen
Erfordert BC 22.1 oder höher

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 22.2.110.11 | Vorauszahlungsrechnungen | Verschiedene Probleme im Zusammenhang mit der Arbeit mit mehreren Vorauszahlungen behoben
| 22.2.110.11 | Synchronisierung der Lieferantenstammdaten | Synchronisierung der Lieferantenstammdaten funktioniert nicht mit neuer EDC-Integration bei Verwendung der schwedischen Sprache
| 22.2.110.14 | Genehmigungsstatus | Einkaufsrechnungen können nicht gebucht werden
| 22.2.110.22 | Genehmigungsdokumente | Genehmigung in bestimmten Lokalisierungen von der Seite ExFlow Genehmigungsdokumente nicht möglich
| 22.2.110.22 | Automatischer Codierungsvorschlag | Automatischer Codierungsvorschlag kann nicht erstellt werden sowie kleinere Verbesserungen
| 22.2.110.32 | Progressus | Maßeinheit wird entfernt, wenn Dokumente erstellt werden, wenn mit Progressus gearbeitet wird
| 22.2.110.42 | Ereignis | Neues Ereignis im Zusammenhang mit der importierten Einkaufszeile hinzugefügt
| 22.2.110.42 | ExFlow-Assistent | Jobplanungen wurden entfernt, als der ExFlow-Assistent ausgeführt wurde, jetzt können Partner mit delegierter Verwaltung den Assistenten ausführen
| 22.2.110.46 | Ereignis | Zwei neue Ereignisse im Zusammenhang mit der Aktualisierung von Dimensionen und Auftragsabgleich hinzugefügt
| 22.2.110.57 | Ereignis | Neues Ereignis für die Suche in ExFlow Web hinzugefügt

​​​​​​​<br/> 

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 32727 | Vertragsabgleich | Erinnerung für fehlende/erwartete Rechnungen gemäß den Vertragszeilen (Perioden) hinzugefügt
| 32727 | Vertragsabgleich | Schnellerstellung des Vertrags aus der Rechnung zu den Aktionen im Importjournal hinzugefügt
| 32727 | Vertragsabgleich | Automatische Buchungsgruppe zur Vertragsstatistik und Genehmigungsstatushistorie hinzugefügt
| 32747 | Allgemein | Zusätzliche ExFlow-Tabellen zu Export/Import-Einstellungen hinzugefügt
| 32823 | Rechnungsablage | Native Unterstützung für externen Speicher in SharePoint hinzugefügt
| 32920 | PO-Abgleich | Unterstützung für Erinnerungen zu Bestellungen mit nicht erhaltenen Zeilen im Genehmigungsstatus
| 32923 | PO-Abgleich | Bestellnr. wird beim Verarbeiten zusätzlicher Rechnungszeilenbelastungen nicht mehr ausgefüllt
| 32817 | Import von Verkaufsaufträgen | Verbesserte Genauigkeit der Zuordnung des Versandorts des Kunden beim Import von Verkaufsaufträgen
| 34604 | Import von Verkaufsaufträgen | Verbesserte Genauigkeit bei der Zuordnung des Kundenkontakts beim Import von Verkaufsaufträgen

<br/> 

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 34515 | Genehmigung | Kontrolle über die Mindestanzahl von Genehmigern verursacht Probleme, wenn die Zeile zur Genehmigung an ein Dummy-Konto mit nur dem ersten Genehmiger gesendet wird
| 32757 | Genehmigungsstatus | Batchbuchung setzt alle Filter auf der Seite zurück
| 34112 | Importjournal | Spaltenüberschriften sind manchmal bei horizontalem Scrollen nicht reaktionsfähig
| 34358 | Importjournal | Fehler beim Erstellen einer Rechnung mit Artikelzuschlagszuweisung aus dem Importjournal
| 34694 | Importjournal | [BE-Lokalisierung] Fehlermeldung: 'Strukturierte Nachricht fehlgeschlagen…' beim Überprüfen des Zahlungsreferenzfelds
| 34698 | Rechnungsablage | Zusätzliche Einstellung zum Festlegen einer bestimmten Anzahl von Rechnungsbildern in Chargen beim Aktivieren hinzugefügt
| 32315 | Jobplanung | Jobplanung erstellt mehrere unnötige Einträge für CU 12057075
| 33739 | PDF-Viewer | PDF-Vorschau schneidet manchmal Text auf Rechnungen im Importjournal und Genehmigungsstatus ab
| 32386 | PO-Abgleich | Problem beim Erstellen von Dokumenten, bei denen eine Artikelbelastungszeile über den Artikelzeilen aufgeführt ist, auf die sie zugeordnet ist
| 32820 | PO-Abgleich | Fehlercode: '...DB:recordExists' manchmal beim Importieren von Dokumenten für den PO-Abgleich
| 34206 | PO-Abgleich | Rechnungszeile ist mit der falschen Buchungsnummer verbunden. empfänger. Nr.
| 34547 | PO-Abgleich | Endgültige Vorauszahlungsrechnung wird nicht korrekt berechnet, wenn eine andere Währung als LCY verwendet wird
| 33248 | Suche | Fehlermeldung: 'Die Länge der Zeichenfolge...' beim Anwenden des Filters auf Genehmiger und Lieferanten
| 33150 | Assistenten | Defekte Videolinks im PO-Abgleich-Assistenten
| 34515 | Genehmigung | Kontrolle über die Mindestanzahl von Genehmigern verursacht Probleme, wenn die Zeile zur Genehmigung an ein Dummy-Konto mit nur dem ersten Genehmiger gesendet wird
| 32757 | Genehmigungsstatus | Batchbuchung setzt alle Filter auf der Seite zurück

<br/>

### ExFlow 22.1.204.0 – Versionshinweise<br/> 
#### Art der Version
Nebenversion

#### Veröffentlichungsdatum
2023-08-29

#### Versionsinformationen
Erfordert BC 22.1 oder höher

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 22.1.204.5 | OCR-Dienst | Rechnungen können nicht importiert werden, wenn der geplante Job für den OCR-Dienst gelöscht wurde
| 22.1.204.8 | Vorauszahlungsrechnungen | Betrag wird für Vorauszahlungsrechnungen bei Verwendung einer anderen Währung als LCY falsch berechnet
| 22.1.204.11 | Upgrade | Upgrade von älteren Versionen von BC & NAV zu BC Online nicht möglich

<br/> 

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 29378 | Genehmigung | Immer die Mindestanzahl von Genehmigern überprüfen, wenn der letzte Benutzer genehmigt
| 30565 | Genehmigung | Drucken/Senden von Bestellungen, die für ExFlow aktiviert sind, einschränken, wenn das Dokument nicht vollständig genehmigt ist
| 29382 | Genehmigungsstatus | Möglichkeit, Dokumentenlinien an jeden Genehmiger zurückzusenden, wenn Änderungen abgelehnt werden
| 31251 | Allgemein | Unterstützung für automatische Buchungsgruppe als Funktion
| 29364 | Importjournal | Chat-Benachrichtigungen an BC-Benutzer aus dem Importjournal senden
| 28139 | Importjournal | [US-Lokalisierung] IRS 1099-bezogene Felder zum Importjournal hinzugefügt

<br/> 

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 32670 | Genehmigung | Automatische Buchungsgruppe wird nicht geändert, wenn das Hauptbuchkonto in ExFlow Web geändert wird
| 33312 | Genehmigungsstatus | Dokumentstatus wird im Genehmigungsstatus nicht aktualisiert, wenn PO-abgeglichene Dokumente vollständig genehmigt sind
| 28805 | Allgemein | Zeilen können nicht in einer nicht freigegebenen Einkaufsbestellung bearbeitet werden, wenn sie einer Genehmigungsgruppe zugewiesen werden sollen
| 33306 | Allgemein | Fehler beim Hinzufügen/Ändern neuer Zeilen in einer Einkaufsbestellung, wenn der Einkäufercode angewendet wird
| 33272 | Import | Fehlermeldung: "Sie haben den Steuerbereichscode geändert" beim Batch-Importieren von Dokumenten in einigen Szenarien
| 32474 | Importjournal | Vorauszahlungsbetrag auf der endgültigen Rechnung wird falsch berechnet, wenn vorherige Rechnungen MwSt. enthalten
| 30913 | Importjournal | Vorschlag der MwSt.-Zeile ist nicht möglich, wenn eine Bestellnummer zugewiesen wurde
| 33055 | Importjournal | Fehler beim manuellen Hinzufügen zusätzlicher Genehmiger im Genehmigungsvorschlag, wenn die Genehmigungsregel bereits angewendet wurde
| 33062 | Importjournal | Fehlermeldung: Der Typ darf nicht in der ExFlow-Einkaufsdokumentzeile sein, wenn automatische Codierungsvorschläge aktiviert sind
| 30145 | Importjournal | Dimensionwerte, die aus der OCR-Importzuordnung angewendet wurden, werden nicht auf den Dokumentzeilen angezeigt, bis die Seite "Dimensionseinträge festlegen" geöffnet wurde
| 32113 | Importjournal | Alle Importjournal-Batches werden verarbeitet, nicht nur der ausgewählte, wenn Dokumente importiert werden
| 33244 | Importjournal | [US- & CA-Lokalisierung] Steuerbereichscode wird in einigen Szenarien nicht korrekt von Lieferant/Standort auf das Dokument übertragen
| 33724 | Importjournal | [BE-Lokalisierung] Benutzer mit dem Berechtigungssatz EX ACCOUNTANT können beim Importieren von Dokumenten auf Berechtigungsfehler stoßen
| 33269 | PO-Abgleich | Wenn "Dokument abgleichen mit" auf "Wareneingang" gesetzt ist, wird die Rechnung fälschlicherweise der Bestellzeile zugeordnet
| 26078 | Beschaffungscodes | [US- & CA-Lokalisierung] Steuerbereichscode und Steuergruppencode zu ExFlow-Beschaffungscode hinzugefügt
| 29827 | Suche | Langsame Suche in BC und Zeitüberschreitungen in ExFlow Web bei nur zeilenweisen Filtern

<br/>

### ExFlow 22.0.274.0 – Versionshinweise<br/> 
#### Art der Version
Hauptversion

#### Veröffentlichungsdatum
2023-06-19

#### Versionsinformationen
Erfordert BC 22.1 oder höher.

#### Korrekturen

| Version | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- |
| 22.0.274.5 | PO-Abgleich | Verschiedene Probleme mit dem PO-Abgleich
| 22.0.274.5 | E-Mail-Einrichtung | Einkäufer und Einkaufskoordinator fehlen in der E-Mail-Einrichtung
| 22.0.274.12 | Installation | Neueste Version kann nicht installiert werden
| 22.0.274.12 | PO-Abgleich | Vorläufige Rechnung wurde beim PO-Abgleich gebucht
| 22.0.274.12 | Berechtigungen | Fehler "Standard-Admin-Rollen-ID muss einen Wert haben", wenn der neue Lizenzschlüssel aktiviert wird
| 22.0.274.14 | PO-Abgleich | Problem beim Aktualisieren der Dokumentzeilen, wenn ein Wareneingang nach dem Importieren gebucht wurde
| 22.0.274.19 | Vorläufige Buchung | Vorläufige Buchung nach Upgrade auf 22 aktiviert
| 22.0.274.25 | Genehmigungsstatus | Dokumentstatus wird im Genehmigungsstatus nicht aktualisiert, wenn PO-abgeglichene Dokumente vollständig genehmigt sind
| 22.0.274.25 | Genehmigungsvorschlag | Genehmigungsvorschlag im Importjournal gibt eine Fehlermeldung aus, wenn Genehmiger hinzugefügt werden

<br/> 

#### Neue Funktionen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 11088 | Lokalisierung | Unterstützung für die belgische Lokalisierung
| 18732 | Audit-Protokoll | Detailliertes Audit-Protokoll als neue Funktion hinzugefügt. Dokumentänderungen in einer Übersicht basierend auf Rechnungsstatus und Aktionen anzeigen oder bis ins Detail für jedes Feld drillen
| 25219 | Rechnungsablage | Externer Speicher als neue Funktion hinzugefügt. Es ist jetzt möglich, Ihre Rechnungsbilder in einem externen Speicher wie Azure Blob Storage zu speichern. Beim Buchen wird das Rechnungsbild aus der Datenbank entfernt und extern gespeichert. Das Framework kann auch erweitert werden, um mit anderen Speicherdiensten wie SharePoint, AWS, lokalem Ordner usw. verwendet zu werden.
| 26367 | Haushaltskontrollen | G/L-Haushaltskontrollen als neue Funktion hinzugefügt. Aktivieren durch Ausführen des Assistenten für ExFlow-Haushaltskontrollen. Kontrollen erfolgen gegen das G/L-Budget auf dem G/L-Konto in Kombination mit globalen Dimensionen. Genehmiger erhalten Warnungen im Importjournal oder während der Genehmigung, und automatisch kann ein bestimmter Genehmiger zur Genehmigungs-Workflow hinzugefügt werden, wenn eine Budgetbuchungskombination überschritten wird
| 28612 | Assistenten | Der ExFlow-Installationsassistent wurde überarbeitet und verbessert. Er umfasst jetzt auch die Einrichtung von Benutzern, Benutzerreferenzen, Genehmigungs-Workflows, automatische Codierungsvorschläge, geplante Jobs und OCR-Dienst-Einrichtung
| 28937 | Import | Anhänge aus einer externen Quelle basierend auf dem Verweis in XML abrufen. Speziell für FINVOICE angefordert
| 29354 | Allgemein | Unterstützung für das Verantwortungszentrum in ExFlow
| 30199 | Automatische Codierung | Verbesserte Genauigkeit
| 30262 | Assistenten | Neuer Assistent zum Aktivieren und Konfigurieren der PO-Abgleichung
| 30290 | PO-Abgleich | Einschränkung der Möglichkeit, eine Rechnung mit einer offenen Bestellung oder einer Bestellung, die nicht genehmigt wurde, abzugleichen, wenn sie für die ExFlow-Genehmigung aktiviert ist
| 30312 | PO-Abgleich | Möglichkeit zum Verarbeiten zusätzlicher Zeilenbelastungen für eine PO-abgeglichene Rechnung
| 30457 | Allgemein | Unterstützung für nicht abzugsfähige und teilweise abzugsfähige MwSt. Wir raten dringend davon ab, diese Funktion in Business Central zu aktivieren, da es kritische Probleme für Dokumente in anderen Währungen als LCY gibt
| 27288 | Vertragsabgleich | ExFlow-Verträge wurden jetzt mit Rechnungsperioden erweitert, die manuell oder aus der Periodizität erstellt werden können. Die Abrechnungsperioden können so eingestellt werden, dass sie Einkaufsrechnungen zum Zweck der Selbstabrechnung generieren
| 27355 | Benutzer | Auswahl und Erstellung mehrerer ExFlow-Benutzer aus der BC-Benutzerliste
| 29858 | Referenzen | Eine neue Option zum automatischen Erstellen einer Referenz für neue ExFlow-Benutzer wurde zu den ExFlow-Einstellungen hinzugefügt. Aus den ExFlow-Benutzerlisten können Sie auch Referenzen für alle vorhandenen ExFlow-Benutzer in großen Mengen erstellen
| 30309 | PO-Abgleich | Möglichkeit, Zeilenarten anzugeben, die von ExFlow automatisch empfangen und in ExFlow eingerichtet werden können, in den ExFlow-Einstellungen
| 30666 | Allgemein | Tooltips von häufig verwendeten Seiten sind jetzt direkt mit relevanten Abschnitten im Benutzerhandbuch unter docs.signupsoftware.com verlinkt
| 31703 | Vertragsabgleich | Grund für die manuelle Genehmigung einer vertragsabgeglichenen Rechnung wurde dem Dokument in ExFlow Web hinzugefügt
| 27693 | Automatische Codierung | Lieferant wurde zur Gruppierung für automatische Codierungsvorschläge hinzugefügt
| 29371 | Suche | Es ist jetzt möglich, nach Lieferantennamen UND Lieferantennummer zu suchen, indem Sie nach 'Lieferant' in ExFlow Web suchen

<br/> 

#### Verbesserungen

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 30359 | Genehmigung | Buchungsdatum wird jetzt korrekt auf der Einkaufsbestellung aktualisiert, wenn eine Vorauszahlungsrechnung gebucht wird, sowie MwSt.-Daten, die fälschlicherweise aus dem Bestellkopf zugewiesen wurden
| 30642 | PO-Abgleich | Empfangs-/Rücksendung von Versand-/Bestellzeilen wird nicht angezeigt, wenn Dokumente im Genehmigungsstatus sind
| 29979 | Lieferant | Business Central stürzt ab, wenn ein neuer Lieferant erstellt wird und alle Buchungsgruppen geöffnet werden, insbesondere wenn die ExFlow-Einstellung "Automatische Erstellung der Lieferanten-ID" auf "Fragen" eingestellt ist
| 30300 | Importjournal | Wenn das 'Direktbuchen' auf dem für Vorauszahlungen in den allgemeinen Buchungseinstellungen festgelegten G/L-Konto nicht aktiviert ist, wird beim Erstellen einer Vorauszahlungsrechnung die Fehlermeldung "G/L-Konto nicht gefunden" angezeigt
| 30399 | Importjournal | Es ist nicht möglich, Rechnungszeilen mit PO-Zeilen im Importjournal abzugleichen, wenn bereits andere Rechnungen mit Zeilen vorhanden sind, die auf dieselben PO-Zeilen abgebildet sind
| 30431 | Allgemein | Es ist nicht möglich, auf die ExFlow-Einstellungen zuzugreifen, wenn die Standard-Basissrollen-ID leer ist
| 30448 | Genehmigung | ExFlow-Genehmigung wird nicht standardmäßig auf "Ja" gesetzt, wenn eine Einkaufsbestellung kopiert wird
| 30660 | Benutzer | Es ist nicht möglich, einen neuen ExFlow-Benutzer für delegierte Administratoren zu erstellen, wenn die verwendete E-Mail-Adresse ungültig ist
| 30663 | E-Mails | E-Mail-Benachrichtigungen für neue Kommentare, die im Diskussionspanel im Importjournal hinzugefügt wurden, werden nicht gesendet
| 30715 | Genehmigung | Es ist nicht möglich, eine 100%ige Vorauszahlungsrechnung aufgrund eines Fehlers bezüglich des Bruttobetrags zu buchen
| 30725 | Genehmigung | Wenn Mengen auf einer Gutschrift, die mit einer Rücksendebestellung verbunden ist, manuell angepasst werden, stammen die in der Artikelverfolgung verwendeten Mengen von der Rücksendebestellung und nicht von der Gutschrift
| 30959 | E-Mails | E-Mail-Benachrichtigungen sollten in Testunternehmen deaktiviert werden
| 30960 | PDF-Viewer | Einige Informationen verschwinden aus bestimmten PDFs
| 30961 | Genehmigung | Rechnungen bleiben manchmal im Status "inaktiv" stecken, wenn der Betrag unter dem "Min. Dokumentgenehmigungsbetrag (LCY)" liegt
| 30968 | Genehmigung | Allgemeine Produktbuchungsgruppe erforderlich auf dem G/L-Konto, das mit der FA-Buchungsgruppe verbunden ist
| 30971 | Einrichtung | Zeilen werden für bestimmte Lieferanten ignoriert, wenn "OCR-Zeilen ignorieren" in den ExFlow-Einstellungen, aber niemals in den erweiterten Optionen für einen bestimmten Lieferanten festgelegt ist
| 30972 | Importjournal | [IT-Lokalisierung] - Feld 'Operation Occurred Date' fehlt im Ex-Dokumentenkopf
| 31059 | E-Mails | Erinnerungen für online abgeglichene Dokumente können nicht gesendet werden, wenn die Bestellnummer auf der Kopfzeilebene interpretiert wird
| 31143 | Genehmigung | Automatische Genehmigung bei Einkaufsbestellungen funktioniert nicht bei Verwendung der Benutzereinstellung oder des Einkäufercodes
| 31171 | Genehmigung | Es ist nicht möglich, den Stornierungszeitplan im Importjournal zu bearbeiten
| 31190 | Importjournal | [US-Lokalisierung] - Gen. Prod. Buchungsgruppe fehlt auf der Rechnung, auch wenn sie in den ExFlow-Einstellungen als Standard festgelegt ist
| 31243 | Importjournal | Fälligkeitsdatum wird in einigen Szenarien nicht korrekt berechnet
| 31279 | Änderungen überprüfen | Das Verfahren zum automatischen Buchen von Wareneingängen schlägt manchmal fehl und kann dazu führen, dass Wareneingänge beim nächsten Durchlauf erneut gebucht werden
| 31341 | Importjournal | Dokumentzeilen werden beim Ändern des Dokumenttyps gelöscht
| 31443 | Genehmigung | Dokument nicht im Posteingang sichtbar, wenn es "Auf Eis gelegt" und an einen neuen Genehmiger weitergeleitet wird
| 31793 | PO-Abgleich | Möglichkeit, eine Rechnung ohne Wareneingang zu buchen, wenn die Option "Bestellung und Wareneingang" als Abgleichoption verwendet wird
| 31990 | PO-Abgleich | Belegnr. wird nicht hinzugefügt, wenn Wareneingänge manuell aus den Aktionen im Importjournal abgerufen werden
| 31997 | PO-Abgleich | Wareneingangszeilen, die von der Bestellnr. in der Kopfzeile stammen, werden entfernt, wenn Wareneingänge manuell aus den Aktionen im Importjournal abgerufen werden
| 31622 | PO-Abgleich | Abgleich gegen mehrere Einkaufsbelege funktioniert nicht, wenn die "Mehrzeilenabgleichung" aktiviert ist

<br/> 

