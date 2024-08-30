---
title: Lieferanteneinrichtung
sidebar_position: 11
hide_title: true
---
## Lieferanteneinrichtung

Gehe zu: ***ExFlow Lieferanteneinrichtung***

Füge lieferantenspezifische priorisierte Einstellungen über die ExFlow Lieferanteneinrichtung hinzu. Die ExFlow Lieferanteneinrichtung kann über die Suche, von der Standard-Lieferantenkarte, ExFlow Einrichtung und Import Journal aufgerufen werden.

Bearbeite einfach die ExFlow Lieferanteneinrichtungsliste oder klicke auf "Neu", um die spezifische Lieferanteneinrichtungskarte zu öffnen und Einstellungen hinzuzufügen/ändern.

Die Standard-Einstellungen werden in der ExFlow Lieferanteneinrichtungsliste angezeigt. Verwende "Personalisieren", um die Liste bei Bedarf mit weiteren Feldern anzupassen.

![ExFlow Lieferanteneinrichtung](./../../images/Vendor-setup-001.png)

| Lieferanteneinrichtungsmenü |  |
|:-|:-|
|**Neu** | Füge eine neue Lieferanteneinrichtung hinzu
|**Liste bearbeiten** | Bearbeite die Lieferanteneinrichtungsliste
|**Löschen** | Lösche eine aktuelle Lieferanteneinrichtung
|**Bearbeiten** | Bearbeite die aktuelle Lieferanteneinrichtungskarte
|**Anzeigen** | Öffne die aktuelle Lieferanteneinrichtungskarte
|**Verwandt --> Automatische Empfangszeilentypen** | Bearbeite oder zeige Zeilentypen an, die automatisch für einen bestimmten Lieferanten empfangen werden sollten.<br/><br/> Erfahre mehr darüber im Abschnitt [***Rechnung mit Empfangs-, Bestell- oder sowohl Empfangs- als auch Bestellzeilen abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)

### Abschnitte der Lieferanteneinrichtungskarte

Öffne die ExFlow Lieferanteneinrichtungskarte, um ExFlow-bezogene Einstellungen pro Lieferant anzuzeigen/bearbeiten. Klicke auf den Abschnitt oder "Mehr anzeigen", um alle Einstellungen anzuzeigen.

![ExFlow Lieferanteneinrichtung](./../../images/vendor-setup-card-sections-001.png)


### Allgemein

Die Option "Aus ExFlow Einrichtung" ist standardmäßig in den meisten Einstellungen festgelegt, was bedeutet, dass ExFlow die Standard-Einrichtung (aus [***ExFlow Einrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-setup#exflow-setup)) übernimmt, wenn keine andere Einrichtung auf der Lieferanteneinrichtungskarte für den spezifischen Lieferanten ausgewählt ist.

![ExFlow Lieferanteneinrichtung](./../../images/Vendor-setup-card-002.png)

|Allgemein|  |
|:-|:-|
|**Lieferantennummer** | Gibt die Lieferantennummer an
|**Lieferantenname** | Gibt den Lieferantennamen an
|**Genehmigungsregel** | Gibt die Standard-Genehmigungsregel für einen bestimmten Lieferanten an
|**Vordefiniertes Konto** | Das ExFlow vordefinierte Konto kann verwendet werden, um nur ein G/L-Konto für Rechnungen/Gutschriften dieses Lieferanten vorzuschlagen. Dieses Feld kann nicht zusammen mit dem ExFlow Einkaufscode verwendet werden.<br/> Wenn "ExFlow vordefiniertes Konto" und "ExFlow Einkaufscode" leer sind, kann das "Vordefinierte Konto" stattdessen aus der ExFlow Einrichtung verwendet werden.
|**ExFlow Einkaufscode** | Der ExFlow Einkaufscode wird verwendet, wenn ein einziges G/L-Konto nicht ausreicht. Dieses Feld kann nicht zusammen mit dem ExFlow vordefinierten Konto verwendet werden. Wenn "ExFlow vordefiniertes Konto" und "ExFlow Einkaufscode" leer sind, kann der "ExFlow Einkaufscode" stattdessen aus der ExFlow Einrichtung verwendet werden.<br/><br/> Erfahre mehr darüber im Abschnitt [***Einkaufscodes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/purchase-codes#purchase-codes)
|**Änderungen automatisch überprüfen** | Wenn ein Dokument genehmigt wird, werden die Überprüfungen automatisch durchgeführt. Wenn es keine Änderungen am Dokument gibt, wird der Status auf "Bereit zur Buchung" gesetzt.
|**Doppelte Rechnungen zulassen** | Wenn Rechnungen mit derselben Rechnungsnummer von einem Lieferanten eingehen. Z.B. Versicherung und Steuerbehörde. Mit diesem Kontrollkästchen kann die Überprüfung der Rechnungsnummer dieses Lieferanten ausgesetzt werden. Es ist nun möglich, mehr als eine Rechnung für diesen Lieferanten mit derselben Lieferantendokumentnummer zu buchen.
|**VAT-Zeile vorschlagen** | Wenn ein bestimmter Lieferant VAT-Zeilen enthält, die in den Genehmigungsprozess einbezogen werden sollen, kann diese Einstellung auf Lieferantenebene auf "Ja" gesetzt werden. Andernfalls wird die allgemeine Einstellung aus der ExFlow Einrichtung standardmäßig verwendet.
|**Factoring-Lieferant** | Wenn der Lieferant nur für Factoring verwendet wird, gibt es ein Kontrollkästchen, das das Erstellen von Rechnungen/Gutschriften bei diesem Lieferanten verhindert. Stattdessen kann er nur als "Zahlung an Lieferantennummer" über "Kauf von Lieferanten" verwendet werden. <br/><br/> Markiere das Kontrollkästchen "Factoring-Lieferant" auf der "Zahlung an Lieferantennummer" und füge diese Lieferantennummer auf der "Kauf-von-Lieferanten"-Karte hinzu. <br/> <br/> Wenn ein Dokument bei einem Factoring-Lieferanten interpretiert wird, gibt das ExFlow Import Journal eine Aktionsmeldung aus: "Diese Rechnung ist als Factoring gekennzeichnet und darf daher nicht erstellt werden!".
|**Zahlungsvalidierung** | Gibt an, ob der Zahlungsvalidierungsprozess während des Import- und Dateninterpretationsprozesses angewendet wird. <br/><br/> Erfahre mehr darüber im Abschnitt [***Zahlungsvalidierungseinrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#payment-validation-setup)
|**Vorschlag Empfänger-Bankkonto** | Gibt an, ob die Vorschlagfunktion für das Empfänger-Bankkonto aktiviert ist. <br/><br/> Erfahre mehr darüber im Abschnitt [***Vorschlag Empfänger-Bankkonto***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#suggest-recipient-bank-account)
|**Zahlungsvalidierungswarnung ignorieren** | Gibt an, ob die Zahlungsvalidierungswarnung für diesen Lieferanten ignoriert werden soll
|**Zahlungsvorschlagswarnung ignorieren** | Gibt an, ob die Zahlungsvorschlagswarnung für diesen Lieferanten ignoriert werden soll
|**Deferral nach vorne verschieben** | Wenn das Buchungsdatum im Deferral-Zeitplan vor dem erlaubten Buchungsdatum für den Benutzer liegt, wird dieser Zeitraum am ersten erlaubten Buchungsdatum in der Allgemeinen Ledger Einrichtung oder Benutzereinrichtung gebucht. ExFlow verschiebt Deferrals nur für geschlossene Perioden nach vorne. <br/><br/> Erfahre mehr darüber im Abschnitt [***Deferral nach vorne verschieben***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#move-deferral-forward)
|**Vertrauliche Dokumente** | Gibt an, ob Dokumente als vertrauliche Dokumente behandelt werden sollen.

<br/>

### Überprüfung der Dokumenterstellung

| Überprüfung der Dokumenterstellung |  |
|:-|:-|
|**Dokumente automatisch erstellen**| Aktivieren Sie dieses Feld, wenn interpretierte Dokumente automatisch aus dem ExFlow Import Journal für einen bestimmten Lieferanten erstellt werden sollen. Wenn das Feld auf der Lieferantenkarte aktiviert ist und alle interpretierten Dokumente keine Fehler- oder Warnmeldungen enthalten, werden sie automatisch erstellt und zur Genehmigung gesendet. <br/><br/>Diese Funktion kann ohne jegliche Einrichtung im ExFlow Import Journal verwendet werden. Es ist jedoch möglich, die Liste der ExFlow Import Journals zu personalisieren und die Spalte "Dokumente automatisch erstellen" hinzuzufügen, um ein dediziertes Journal für die automatische Dokumentenerstellung zu haben. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Batch-Import von Dokumenten aus der Interpretation***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-import-documents-from-interpretation) und im Abschnitt [***Hintergrundverarbeitung***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)
|**Überprüfung der Referenzen** 	|Wenn aktiviert, ist es erforderlich, dass das Dokument eine ExFlow-Referenz enthält.
|**Währungscode des Lieferanten abgleichen**	|Gibt an, ob der Währungscode auf dem importierten Dokument mit dem Währungscode auf der Lieferantenkarte übereinstimmen muss. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Währungscode des Lieferanten abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#match-vendors-currency)
|**Blockierung im Importjournal**| 	Gibt an, ob Dokumente von der Erstellung blockiert werden sollen.
|**Ausschluss, wenn Lieferanten-Dok.-Nr. beginnt mit**| Gibt den Ausschluss des importierten Dokuments von der Blockierung der Erstellung an, wenn die Lieferanten-Dok.-Nr. mit... beginnt. Diese Einstellung wird angezeigt, wenn "Blockierung im Importjournal" aktiviert ist.
|**Abmessungen überprüfen**	|Gibt an, ob die Standardabmessungseinstellungen in Business Central überprüft werden sollen, wenn die Rechnung erstellt wird.
|**Automatische Zuordnung der MwSt.-Differenz für die Erstellung** 	|Gibt an, ob die automatische Zuordnung der MwSt.-Differenz erfolgen soll, wenn die Differenz der MwSt. in den Zeilen und im Header innerhalb der maximal zulässigen MwSt.-Differenz liegt.
|**Betragstests** 	|Gibt an, ob die Brutto-/Netto-/MwSt.-Beträge auf dem Dokument auf Abweichungen überprüft werden sollen (Unterschied zwischen der Summe der Dokumentzeilen und dem entsprechenden Betrag im Dokumentheader), bevor die Rechnung erstellt wird.

<br/>

### Überprüfung der Dokumentbuchung

| Überprüfung der Dokumentbuchung |  |
|:-|:-|
|**Dokumente automatisch buchen**| Aktivieren Sie "Dokumente automatisch buchen", um Dokumente für einen bestimmten Lieferanten im Genehmigungsstatus automatisch zu buchen, wenn das Dokument zur Buchung bereit ist. ExFlow versucht nur einmal zu buchen. Wenn während der Buchung Fehlermeldungen auftreten, bleibt das Dokument ungebucht im Genehmigungsstatus zusammen mit einer Fehlermeldung. Korrigieren Sie den Fehler und buchen Sie manuell.
|**Blockierung vor der Buchung**| Gibt an, ob Dokumente von der Buchung blockiert werden sollen.

<br/>

### Bestellabgleich

| Bestellabgleich |  |
|:-|:-|
|**Dokumente abgleichen mit**|  Gibt an, ob ExFlow Zeilen aus Bestellungen oder gebuchten Wareneingängen oder aus beiden Bestellungen und Wareneingängen abgleichen und abrufen soll. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Rechnung mit Wareneingangs-, Bestell- oder sowohl Wareneingangs- als auch Bestellzeilen abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Bestellung automatisch empfangen**| 	Gibt an, ob die Bestellzeilen automatisch empfangen werden sollen, wenn die abgeglichene Rechnung auf "Zur Buchung bereit" gesetzt ist. Diese Option ist nur anwendbar, wenn die Einstellung "Dokumente abgleichen mit" als "Bestellung" oder "Bestellung und Wareneingang" konfiguriert ist.
|**Spezifische Einstellung für Differenz Einheitskosten**| Die Felder ''In LCY'' und ''Prozent %'' werden sichtbar, wenn diese Einstellung aktiviert ist.
|**Spezifische Max. Misc. Einstellung**| Aktivieren Sie diese Option, um die Max. Misc.-Funktion zu aktivieren.
|**Max. Misc.-Gebühren (LCY)**| Geben Sie die Max. Misc.-Gebühren in LCY ein.
|**Differenzzeile Einkaufscode**| Wählen Sie den ExFlow-Einkaufscode aus, der für die Differenzzeile ausgewählt werden soll.
|**Spezifische Differenzeinstellung**|Aktivieren Sie diese Option, um die spezifische Differenzeinstellung zu aktivieren.
|**Erforderliche Belegnummer**|Aktivieren Sie dies, wenn die Belegnummer erforderlich ist.
|**Bestellungen nicht abgleichen**|Aktivieren Sie dies, wenn kein Bestellabgleich für diesen Lieferanten erfolgen soll.
|**Genehmigung nur für Abweichungen**| Wählen Sie aus, ob die Genehmigung nur für Abweichungen angewendet werden soll, mit der Option: ExFlow-Einrichtung, Ja oder Nein.
|**Automatische Zuordnung von Artikelgebühren**| Gibt an, welche Art der automatischen Zuordnung von Artikelgebühren verwendet werden soll, wenn Rechnungen gebucht werden. Es kann gleichmäßig, nach Betrag, nach Gewicht oder nach Volumen automatisch zugewiesen werden. Keine = es erfolgt keine automatische Zuordnung. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Zuordnung von Artikelgebühren***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)
|**Zugewiesene Zeilen in OCR-Mapping speichern**| Diese Option kann verwendet werden, um manuell abgeglichene Rechnungszeilen aus der "Abgleichsansicht" basierend auf Lieferant und interpretierter Artikelnummer automatisch im ExFlow OCR Import Mapping zu speichern. Diese Zeilen werden in der Tabelle gespeichert und können zur Vorschlagserstellung für zukünftige PO-Rechnungen mit den gleichen Kriterien wiederverwendet werden.
|**Mehrere Zeilenabgleich**| Diese Einstellung ermöglicht es ExFlow, eine Rechnungszeile mit mehreren Bestellzeilen oder Wareneingangszeilen abzugleichen. Wenn die Menge der Rechnungszeile größer ist als die Menge der Bestellzeile, teilt ExFlow die Rechnungszeile auf und gleicht sie teilweise mit anderen verfügbaren Bestellzeilen oder Wareneingangszeilen ab.
|**Aufteilung von Rechnungszeilen überprüfen**| Wenn "Mehrere Zeilenabgleich" aktiviert ist, gibt ExFlow für jede aufgeteilte Zeile Aktionen aus, die dem Benutzer die Möglichkeit geben, den vorgeschlagenen Abgleich manuell zu bestätigen, bevor das Dokument erstellt wird. Wenn diese Einstellung auf "false" gesetzt ist, werden keine Aktionen für abgeglichene aufgeteilte Zeilen angezeigt.
|**Verwendung von PO-Headerwerten auf der Rechnung**| Aktivieren Sie Felder, um Werte von der Bestellung auf die Rechnung zu übertragen (oder von der Rückbestellung auf die Gutschrift), wenn der Bestellabgleich auf der Kopfebene verwendet wird. Die ausgewählten Werte können unter Verwandt --> Erweitert --> PO-Headerwerte in der Rechnungseinrichtung gefunden und aktualisiert werden. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Kopieren von PO-Headerwerten***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/copy-po-header#copy-purchase-order-header-values)
|**Rechnungen automatisch genehmigen**| Gibt an, ob die Rechnung automatisch genehmigt werden soll, wenn die zugehörige Bestellung genehmigt wird. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Automatische Genehmigung von Rechnungen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#auto-approve-purchase-order-matching-invoices)
|**Max. Rechnungsbetrag für automatische Genehmigung (LCY) **| Gibt den maximal zulässigen Rechnungsbetrag für automatische Genehmigungen an. 0 = deaktiviert
|**Benutzer für automatische Genehmigung**| Gibt den ExFlow-Benutzer an, der für automatisch genehmigte Rechnungen verwendet werden soll. Wenn diese Einstellung leer ist, wird die ID des angemeldeten BC-Benutzers verwendet.

<br/>

### OCR-Import

| OCR-Import |  |
|:-|:-|
|**Fälligkeitsdatum festlegen (OCR) **| Gibt an, wie das Standardfälligkeitsdatum festgelegt werden soll, wenn eine Rechnung importiert wird.
|**Importierten Währungscode ignorieren**| Gibt an, dass ExFlow den importierten Währungscode immer löschen soll, d.h. keine Währung verwendet wird, wenn Rechnungen importiert werden.
|**OCR-Zeilen ignorieren**| Gibt an, dass ExFlow immer importierte Rechnungszeilen ignorieren soll, d.h. nur Informationen im Rechnungskopf verwendet werden.
|**Spezifische Misc-Code-Einstellung**| Aktivieren Sie diese Option, um Misc-Kaufcodes zu verwenden.
|**Misc 1 Kaufcode**| Gibt den Standard-Kaufcode an, wenn die Misc 1-Codezuordnung in der ExFlow-Importspezifikation verwendet wird.
|**Misc 2 Kaufcode**| Gibt den Standard-Kaufcode an, wenn die Misc 2-Codezuordnung in der ExFlow-Importspezifikation verwendet wird.
|**Automatische Mengenzuordnung**| Gibt an, ob die Menge auf 1 umgerechnet werden soll, wenn die importierte Menge 0 ist.
|**Synchronisierung der Stammdaten ignorieren**| Es ist möglich, die Synchronisierung der Stammdaten auf Lieferantenebene zu ignorieren. Aktivieren Sie einfach das Kontrollkästchen "Synchronisierung der Stammdaten ignorieren" auf dem ausgewählten Lieferanten in seiner Lieferanteneinrichtungskarte, um sicherzustellen, dass seine Stammdaten nicht an ExFlow Data Capture gesendet werden.

<br/>

### Genehmigung

| Genehmigung |  |
|:-|:-|
|**MwSt.-Zeilen genehmigen**| Gibt an, ob die MwSt.-Zeilen in den Genehmigungsprozess einbezogen werden sollen. Wenn auf dem Header ein ExFlow-Einkaufscode verwendet wird, wird diese Einstellung ignoriert. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***MwSt.-Zeilen genehmigen***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approve-vat-lines)

<br/>

### Automatische Codierungsvorschläge

| Automatische Codierungsvorschläge |  |
|:-|:-|
|**Automatische Vorschläge verwenden**| Wählen Sie aus, ob der Lieferant diese Funktion nutzen soll.
|**Automatische Vorschläge ab Datum berechnen**| Gibt das Startdatum des Dokuments an, das für die automatischen Codierungsvorschläge für diesen Lieferanten verwendet werden soll.
|**Automatischer Vorschlag des Betrags aus der Codierungsset-ID verwenden**| Gibt an, ob der Betrag automatisch zur Dokumentzeile vorgeschlagen wird, basierend auf dem Verwendungsprozentsatz in der Codierungsset-ID für diesen Lieferanten. <br/><br/>Lesen Sie mehr dazu im Abschnitt [***Einrichtung automatischer Codierungsvorschläge***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/automatic-coding-suggestion-setup#automatic-coding-suggestion-setup)
 Lieferanteneinrichtung

