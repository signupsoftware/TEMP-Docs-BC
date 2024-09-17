---
title: Lieferanteneinrichtung
sidebar_position: 11
hide_title: true
---
## Lieferanteneinrichtung

Gehe zu: ***ExFlow Lieferanteneinrichtung***

Fügen Sie lieferantenspezifische priorisierte Einstellungen hinzu, indem Sie die ExFlow Lieferanteneinrichtung verwenden. Die ExFlow Lieferanteneinrichtung kann durch Suchen, von der Standard-Lieferantenkarte, ExFlow-Einrichtung und Importjournal erreicht werden.

Bearbeiten Sie einfach die ExFlow Lieferanteneinrichtungsliste oder klicken Sie auf „Neu“, um die spezifische Lieferanteneinrichtungskarte zu öffnen und Einstellungen hinzuzufügen/zu ändern.

Die Standardeinstellungen werden in der ExFlow Lieferanteneinrichtungsliste angezeigt. Verwenden Sie „Personalisieren“, um die Liste bei Bedarf mit weiteren Feldern zu ändern.

![ExFlow Lieferanteneinrichtung](@site/static/img/media/Vendor-setup-001.png)

| Lieferanteneinrichtungsmenü|  |
|:-|:-|
|**Neu**	|Eine neue Lieferanteneinrichtung hinzufügen
|**Liste bearbeiten**	|Die Lieferanteneinrichtungsliste bearbeiten
|**Löschen**	|Eine aktuelle Lieferanteneinrichtung löschen
|**Bearbeiten**	|Die aktuelle Lieferanteneinrichtungskarte bearbeiten
|**Anzeigen**	|Die aktuelle Lieferanteneinrichtungskarte öffnen
|**Verwandt --> Automatische Empfangszeilentypen**	|Zeilentypen bearbeiten oder anzeigen, die für einen bestimmten Lieferanten automatisch empfangen werden sollen.<br/><br/> Lesen Sie mehr darüber im Abschnitt [***Rechnung mit Empfangs-, Bestell- oder sowohl Empfangs- als auch Bestellzeilen abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)

<br/>

### Abschnitte der Lieferanteneinrichtungskarte

Öffnen Sie die ExFlow Lieferanteneinrichtungskarte, um ExFlow-bezogene Einstellungen pro Lieferant anzuzeigen/zu bearbeiten. Klicken Sie auf den Abschnitt oder „Mehr anzeigen“, um alle Einstellungen anzuzeigen.

Die Funktion „Artikel-Nr.-Abgleichspriorität“ ist in der Lieferanteneinrichtungskarte leicht zugänglich. <br/> Lesen Sie mehr darüber im Abschnitt [***Artikel-Nr.-Abgleichspriorität***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#item-no-matching-priority)
<br/>

![ExFlow Lieferanteneinrichtung](@site/static/img/media/vendor-setup-card-sections-001.png)

### Allgemein

Die Option „Von ExFlow-Einrichtung“ ist in den meisten Einstellungen standardmäßig festgelegt, was bedeutet, dass ExFlow die Standardeinrichtung (aus [***ExFlow-Einrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-setup#exflow-setup)) übernimmt, wenn keine andere Einrichtung auf der Lieferanteneinrichtungskarte für den spezifischen Lieferanten ausgewählt ist.

![ExFlow Lieferanteneinrichtung](@site/static/img/media/Vendor-setup-card-002.png)

|Allgemein|  |
|:-|:-|
|**Lieferantennr.**	|Gibt die Lieferantennummer an
|**Lieferantenname**	|Gibt den Lieferantennamen an
|**Genehmigungsregel**	|Gibt die standardmäßige Genehmigungsregel an, die für einen bestimmten Lieferanten angewendet werden soll
|**Vordefiniertes Konto**	|Das ExFlow vordefinierte Konto kann verwendet werden, um nur ein Sachkonto für die Rechnungen/Gutschriften dieses Lieferanten vorzuschlagen. Dieses Feld kann nicht zusammen mit dem ExFlow-Einkaufscode verwendet werden.<br/> Wenn „ExFlow vordefiniertes Konto“ und „ExFlow Einkaufscode“ leer sind, kann das „Vordefinierte Konto“ stattdessen aus der ExFlow-Einrichtung verwendet werden.
|**ExFlow Einkaufscode**	|Der ExFlow Einkaufscode wird verwendet, wenn nur ein Sachkonto nicht ausreicht. Dieses Feld kann nicht zusammen mit dem ExFlow vordefinierten Konto verwendet werden. Wenn „ExFlow vordefiniertes Konto“ und „ExFlow Einkaufscode“ leer sind, kann der „ExFlow Einkaufscode“ stattdessen aus der ExFlow-Einrichtung verwendet werden.<br/><br/> Lesen Sie mehr darüber im Abschnitt [***Einkaufscodes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/purchase-codes#purchase-codes)
|**Änderungen automatisch überprüfen**| 	Wenn ein Dokument genehmigt ist, wird die Überprüfung der Änderungen automatisch durchgeführt. Wenn es keine Änderungen am Dokument gibt, wird der Status „Bereit zum Buchen“ angezeigt.
|**Doppelte Rechnungen zulassen**|Beim Empfang von Rechnungen mit derselben Rechnungsnummer von einem Lieferanten. Z.B. Versicherung und Steuerbehörde. Dieses Kontrollkästchen kann verwendet werden, um die Kontrolle der Rechnungsnummer dieses Lieferanten zu umgehen. Es ist nun möglich, mehr als eine Rechnung für diesen Lieferanten mit derselben Lieferantendokumentnummer zu buchen.
|**Vorschlag für Mehrwertsteuerzeile**	|Wenn ein bestimmter Lieferant Mehrwertsteuerzeilen hat, die in den Genehmigungsprozess einbezogen werden sollen, kann diese Einstellung auf Lieferantenebene auf „Ja“ gesetzt werden. Andernfalls wird standardmäßig die allgemeine Einstellung aus der ExFlow-Einrichtung verwendet.
|**Factoring-Lieferant**	|Wenn der Lieferant nur für Factoring verwendet wird, gibt es ein Kontrollkästchen, das verhindert, dass Rechnungen/Gutschriften für diesen Lieferanten erstellt werden, und er kann nur als „Zahlung an Lieferantennr.“ über „Kauf-von-Lieferant“ verwendet werden. <br/><br/> Markieren Sie das Kontrollkästchen „Factoring-Lieferant“ bei der „Zahlung an Lieferantennr.“ und fügen Sie diese Lieferantennummer auf der „Kauf-von-Lieferantenkarte“ hinzu. <br/> <br/> Wenn ein Dokument auf einem Factoring-Lieferanten interpretiert wird, gibt das ExFlow-Importjournal eine Aktionsmeldung aus: „Diese Rechnung ist als Factoring gekennzeichnet und darf daher nicht erstellt werden!“.
|**Zahlungsvalidierung** 	|Gibt an, ob der Zahlungsvalidierungsprozess während des Import- und Dateninterpretationsprozesses angewendet wird. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Zahlungsvalidierungseinrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#payment-validation-setup)
|**Empfängerbankkonto vorschlagen** 	|Gibt an, ob der Vorschlag des Empfängerbankkontos aktiviert ist. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Empfängerbankkonto vorschlagen***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#suggest-recipient-bank-account)
|**Zahlungsvalidierungswarnung ignorieren**| Gibt an, ob die Zahlungsvalidierungswarnung für diesen Lieferanten ignoriert werden soll
|**Zahlungsvorschlagswarnung ignorieren**| Gibt an, ob die Zahlungsvorschlagswarnung für diesen Lieferanten ignoriert werden soll
|**Abgrenzung vorwärts verschieben** 	|Wenn das Buchungsdatum im Abgrenzungsplan vor dem zulässigen Buchungsdatum für den Benutzer liegt, wird dieser Zeitraum am ersten zulässigen Buchungsdatum in der Sachkontoeinrichtung oder Benutzereinrichtung gebucht. ExFlow wird Abgrenzungen nur für geschlossene Perioden vorwärts verschieben. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Abgrenzung vorwärts verschieben***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#move-deferral-forward)
|**Vertrauliche Dokumente**|Gibt an, ob Dokumente als vertrauliche Dokumente behandelt werden sollen.

<br/>

### Dokumentenerstellungskontrollen

|Dokumentenerstellungskontrollen|  |
|:-|:-|
|**Dokumente automatisch erstellen**| Aktivieren Sie dieses Kontrollkästchen, wenn interpretierte Dokumente automatisch aus dem ExFlow-Importjournal für einen bestimmten Lieferanten erstellt werden sollen. Wenn das Kontrollkästchen auf der Lieferantenkarte aktiviert ist, werden alle interpretierten Dokumente ohne Fehler- oder Warnmeldungen automatisch erstellt und zur Genehmigung gesendet. <br/><br/>Diese Funktion kann ohne Einrichtung im ExFlow-Importjournal verwendet werden. Es ist jedoch möglich, die ExFlow-Importjournalliste zu personalisieren und die Spalte „Dokumente automatisch erstellen“ hinzuzufügen, um ein dediziertes Journal für die automatische Dokumentenerstellung zu haben. <br/><br/>Lesen Sie mehr darüber im Abschnitt [***Batch-Import von Dokumenten aus der Interpretation***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-import-documents-from-interpretation) und im Abschnitt [***Hintergrundverarbeitung***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)
|**Referenzen überprüfen** 	|Wenn aktiviert, ist es erforderlich, dass das Dokument eine ExFlow-Referenz enthält.
|**Währungscode des Lieferanten abgleichen**	|Gibt an, ob der Währungscode auf dem importierten Dokument mit dem Währungscode auf der Lieferantenkarte übereinstimmen muss. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Währungscode des Lieferanten abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#match-vendors-currency)
|**Im Importjournal blockieren**| 	Gibt an, ob Dokumente von der Erstellung blockiert werden sollen
|**Ausschließen, wenn Lieferantendokumentnr. beginnt mit**| Gibt den Ausschluss des importierten Dokuments von der Erstellungsblockierung an, wenn die Lieferantendokumentnummer beginnt mit… Diese Einstellung wird angezeigt, wenn „Im Importjournal blockieren“ aktiviert ist.
|**Dimensionen überprüfen**	|Gibt an, ob die Standarddimensionseinstellungen in Business Central überprüft werden sollen, wenn die Rechnung erstellt wird
|**Automatische Zuordnung von MwSt.-Differenzen für die Erstellung** 	|Gibt an, ob eine automatische Zuordnung der MwSt.-Differenz vorgenommen werden soll, wenn die Differenz der MwSt. auf den Zeilen und dem Kopf innerhalb der maximal zulässigen MwSt.-Differenz liegt
|**Beträge testen** 	|Gibt an, ob die Brutto-/Netto-/MwSt.-Beträge auf dem Dokument auf Abweichungen (Unterschied zwischen der Summe der Dokumentzeilen und dem entsprechenden Betrag im Dokumentenkopf) überprüft werden sollen, bevor die Rechnung erstellt wird.

<br/>

### Dokumentenbuchungsprüfungen

|Dokumentenbuchungsprüfungen|  |
|:-|:-|
|**Dokumente automatisch buchen**| Aktivieren Sie "Dokumente automatisch buchen", um Dokumente für einen bestimmten Lieferanten im Genehmigungsstatus automatisch zu buchen, wenn das Dokument bereit zur Buchung ist. ExFlow wird nur einmal versuchen zu buchen. Wenn während der Buchung Fehlermeldungen auftreten, bleibt das Dokument im Genehmigungsstatus zusammen mit einer Fehlermeldung ungebucht. Korrigieren Sie den Fehler und buchen Sie manuell.
|**Vor dem Buchen blockieren**| Gibt an, ob Dokumente vor dem Buchen blockiert werden sollen.

<br/>

### PO-Abgleich

|PO-Abgleich|  |
|:-|:-|
|**Dokumente abgleichen mit**| Gibt an, ob ExFlow Zeilen aus Bestellungen oder aus gebuchten Wareneingängen oder aus beiden Bestellungen und Wareneingängen abgleichen und abrufen soll. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Rechnung mit Wareneingang-, Bestellung- oder sowohl Wareneingangs- als auch Bestellzeilen abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Bestellung automatisch empfangen**| Gibt an, ob Bestellzeilen jedes Zeilentypus automatisch empfangen werden sollen, wenn die abgeglichene Rechnung auf "Bereit zur Buchung" gesetzt wird. Diese Option ist nur anwendbar, wenn die Einstellung "Dokumente abgleichen mit" als "Bestellung" oder "Bestellung und Wareneingang" konfiguriert ist.
|**Spezifische Zeilendifferenz-Einheitspreis-Einstellung**| Die Felder ''In LCY’’ und ‘’Prozent %’’ werden sichtbar, wenn diese Einstellung aktiviert ist.
|**Spezifische Max. Sonstige-Einstellung**| Aktivieren, um die Max. Sonstige-Funktion zu aktivieren.
|**Max. Sonstige Kosten (LCY)**| Geben Sie die maximalen sonstigen Kosten in LCY ein.
|**Diff. Zeile Einkaufs-Code**| Wählen Sie den ExFlow-Einkaufscode, der für die Differenzzeile ausgewählt werden soll.
|**Spezifische Differenz-Einstellung**| Aktivieren, um die spezifische Differenz-Einstellung zu aktivieren.
|**Wareneingangsnummer erforderlich**| Aktivieren, wenn die Wareneingangsnummer erforderlich ist.
|**Bestellungen nicht abgleichen**| Aktivieren, wenn für diesen Lieferanten kein Bestellabgleich erfolgen soll.
|**Genehmigung nur für Abweichungen**| Wählen Sie, ob die Genehmigung nur für Abweichungen mit der Option: ExFlow-Einrichtung, Ja oder Nein angewendet werden soll.
|**Automatische Artikelkosten-Zuweisung**| Gibt an, welcher Typ der Artikelkosten-Zuweisung beim Buchen von Rechnungen verwendet werden soll. Es kann gleichmäßig, nach Betrag, nach Gewicht oder nach Volumen automatisch erfolgen. Keine = keine automatische Zuweisung erfolgt. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Artikelkosten-Zuweisung***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)
|**Abgeglichene Zeilen in OCR-Mapping speichern**| Diese Option kann verwendet werden, um manuell abgeglichene Rechnungszeilen aus der "Abgleichsansicht" basierend auf Lieferant, interpretiertem Artikel-Nr. automatisch zu speichern. Diese Zeilen werden in der ExFlow OCR-Import-Mapping-Tabelle gespeichert und können erneut verwendet werden, um Vorschläge für zukünftige PO-Rechnungen mit denselben Kriterien zu machen.
|**Mehrfachzeilenabgleich**| Diese Einstellung ermöglicht es ExFlow, eine Rechnungszeile mit mehreren Bestellzeilen oder Wareneingangszeilen abzugleichen. Wenn die Menge der Rechnungszeile größer ist als die Menge der Bestellzeile, wird ExFlow die Rechnungszeile aufteilen und mit anderen verfügbaren Bestellzeilen oder Wareneingangszeilen teilweise abgleichen.
|**Aufgeteilte Rechnungszeilen prüfen**| Wenn „Mehrfachzeilenabgleich“ wahr ist, gibt ExFlow Aktionsmeldungen für jede Zeile aus, die aufgeteilt wurde, was dem Benutzer die Möglichkeit gibt, den vorgeschlagenen Abgleich manuell zu bestätigen, bevor das Dokument erstellt wird. Wenn diese Einstellung auf falsch gesetzt ist, wird keine Aktionsmeldung für abgeglichene aufgeteilte Zeilen angezeigt.
|**PO-Header-Werte auf Rechnung verwenden**| Aktivieren Sie Felder, die vom Bestellauftrag auf die Rechnung (oder Rücksendebestellung auf die Gutschrift) im Importjournal übertragen werden sollen, wenn der Abgleich auf Kopfebene erfolgt. Ausgewählte Werte können unter Verwandte --> Erweitert --> PO-Header-Werte auf Rechnung-Einrichtung gefunden und aktualisiert werden. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Bestellkopfwerte kopieren***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/copy-po-header#copy-purchase-order-header-values)
|**Rechnungen automatisch genehmigen**| Gibt an, ob die Rechnung automatisch genehmigt werden soll, wenn die zugehörige Bestellung genehmigt ist. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Rechnungen automatisch genehmigen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#auto-approve-purchase-order-matching-invoices)
|**Max. Rechnungsbetrag für Systemgenehmigung (LCY)**| Gibt den maximalen Rechnungsbetrag an, der für automatische Genehmigungen zulässig ist. 0 = deaktiviert
|**Benutzer für automatische Genehmigung**| Gibt den ExFlow-Benutzer an, der für automatisch genehmigte Rechnungen verwendet werden soll. Wenn diese Einstellung leer ist, wird die ID des angemeldeten BC-Benutzers verwendet.
|**Direkten Einheitspreis prüfen**| Geben Sie an, ob ExFlow den Einheitspreis auf der Rechnungszeile prüfen soll, wenn Rechnungen mit Bestellungen abgeglichen werden. Die importierte Rechnung muss zeileninterpretiert sein, damit dies funktioniert.

<br/>

### OCR-Import

|OCR-Import|  |
|:-|:-|
|**Fälligkeitsdatum setzen auf (OCR)**| Gibt an, wie das Standardfälligkeitsdatum beim Import einer Rechnung gesetzt werden soll.
|**Importierten Währungscode ignorieren**| Gibt an, dass ExFlow den importierten Währungscode immer löschen soll, d.h. es wird keine Währung beim Import von Rechnungen verwendet.
|**OCR-Zeilen ignorieren**| Gibt an, dass ExFlow importierte Rechnungszeilen immer ignorieren soll, d.h. es werden nur Rechnungsheaderinformationen verwendet.
|**Spezifische Sonstige-Code-Einstellung**| Aktivieren, um sonstige Einkaufscodes zu nutzen.
|**Sonstige 1 Einkaufs-Code**| Gibt den Standard-Einkaufscode an, wenn die Sonstige 1-Code-Zuordnung in der ExFlow-Importspezifikation verwendet wird.
|**Sonstige 2 Einkaufs-Code**| Gibt den Standard-Einkaufscode an, wenn die Sonstige 2-Code-Zuordnung in der ExFlow-Importspezifikation verwendet wird.
|**Automatische Mengen-Zuweisung**| Gibt an, ob die Menge auf 1 umgerechnet werden soll, wenn die importierte Menge 0 ist.
|**Master-Daten-Synchronisation ignorieren**| Es ist möglich, die Master-Daten-Synchronisation auf Lieferantenebene zu ignorieren. Aktivieren Sie einfach das Kontrollkästchen ''Master-Daten-Synchronisation ignorieren'' auf der ausgewählten Lieferantenkarte in der Lieferanteneinrichtung, um sicherzustellen, dass deren Stammdaten nicht an ExFlow Data Capture gesendet werden.

<br/>

### Genehmigung

|Genehmigung|  |
|:-|:-|
|**Mehrwertsteuerzeilen genehmigen**| Gibt an, ob die Mehrwertsteuerzeilen in den Genehmigungsfluss einbezogen werden sollen. Wenn ein ExFlow-Einkaufscode auf dem Header verwendet wird, wird diese Einstellung ignoriert. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Mehrwertsteuerzeilen genehmigen.***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approve-vat-lines)

<br/>

### Automatische Kodierungsvorschläge

|Automatische Kodierungsvorschläge|  |
|:-|:-|
|**Automatische Vorschläge verwenden**| Wählen Sie, ob der Lieferant diese Funktion nutzen soll.
|**Automatische Vorschläge ab Datum berechnen**| Gibt das Startdatum des Dokuments an, das in den automatischen Kodierungsvorschlägen für diesen Lieferanten verwendet werden soll.
|**Automatische Vorschläge des Betrags aus Kodierungsset-ID verwenden**| Gibt an, ob der Betrag automatisch auf die Dokumentzeile basierend auf dem Nutzungsprozentsatz in der Kodierungsset-ID für diesen Lieferanten vorgeschlagen wird. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Automatische Kodierungsvorschläge einrichten***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/automatic-coding-suggestion-setup#automatic-coding-suggestion-setup)

