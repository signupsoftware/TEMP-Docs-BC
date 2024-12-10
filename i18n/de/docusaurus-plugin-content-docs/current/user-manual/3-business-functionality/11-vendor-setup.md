---
title: Lieferanteneinrichtung
sidebar_position: 11
hide_title: true
custom_edit_url: null
---
## Lieferanteneinrichtung

Gehen Sie zu: ***ExFlow Lieferanteneinrichtung***

Fügen Sie lieferantenspezifische priorisierte Einstellungen hinzu, indem Sie die ExFlow Lieferanteneinrichtung verwenden. Die ExFlow Lieferanteneinrichtung kann durch Suchen, von der Standard-Lieferantenkarte, ExFlow Einrichtung und Import Journal erreicht werden.

Bearbeiten Sie einfach die ExFlow Lieferanteneinrichtungsliste oder klicken Sie auf „Neu“, um die spezifische Lieferanteneinrichtungskarte zu öffnen und Einstellungen hinzuzufügen/zu ändern.

Die Standardeinstellungen werden in der ExFlow Lieferanteneinrichtungsliste angezeigt. Verwenden Sie Personalisieren, um die Liste bei Bedarf mit weiteren Feldern zu ändern.

![ExFlow Lieferanteneinrichtung](../../images/Vendor-setup-001.png)

| Lieferanteneinrichtungsmenü|  |
|:-|:-|
|**Neu**	|Eine neue Lieferanteneinrichtung hinzufügen
|**Liste bearbeiten**	|Die Lieferanteneinrichtungsliste bearbeiten
|**Löschen**	|Eine aktuelle Lieferanteneinrichtung löschen
|**Bearbeiten**	|Die aktuelle Lieferanteneinrichtungskarte bearbeiten
|**Anzeigen**	|Die aktuelle Lieferanteneinrichtungskarte öffnen
|*Weitere Optionen --> Verwandt*	|
|**Verwandt --> Automatische Empfangszeilentypen**	|Bearbeiten oder Anzeigen von Zeilentypen, die für einen bestimmten Lieferanten automatisch empfangen werden sollen.<br/><br/> Lesen Sie mehr darüber im Abschnitt [***Rechnung mit Empfangs-, Bestell- oder sowohl Empfangs- als auch Bestellzeilen abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Verwandt --> Artikel-Nr. Abgleichspriorität**	|Bestimmen Sie die Reihenfolge, in der das System versucht, importierte Rechnungen mit Artikeln und Bestellzeilen abzugleichen. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Artikel-Nr. Abgleichspriorität***](hhttps://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#item-no-matching-priority)
|**Verwandt --> ExFlow Einrichtung**	|Öffnet [***ExFlow Einrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-setup)
|**Verwandt --> Audit-Log --> Audit-Log**	|Öffnet die Audit-Log-Übersicht. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Audit-Log***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/audit-log#audit-log)

<br/> 

### Lieferanteneinrichtungskartenabschnitte

Öffnen Sie die ExFlow Lieferanteneinrichtungskarte, um ExFlow-bezogene Einstellungen pro Lieferant anzuzeigen/bearbeiten.

Klicken Sie auf den Abschnitt oder „Mehr anzeigen“, um alle Einstellungen anzuzeigen.

![ExFlow Lieferanteneinrichtung](../../images/vendor-setup-card-sections-001.png)

### Allgemein

Die Option ''Von ExFlow Einrichtung'' ist standardmäßig in den meisten Einstellungen festgelegt, was bedeutet, dass ExFlow die Standardeinrichtung (von [***ExFlow Einrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-setup#exflow-setup)) übernimmt, wenn keine andere Einrichtung auf der Lieferanteneinrichtungskarte für den spezifischen Lieferanten ausgewählt ist.

![ExFlow Lieferanteneinrichtung](../../images/Vendor-setup-card-002.png)

|Allgemein|  |
|:-|:-|
|**Lieferantennummer**  |Gibt die Lieferantennummer an
|**Lieferantenname**    |Gibt den Lieferantennamen an
|**Genehmigungsregel**  |Gibt die Standardgenehmigungsregel an, die für einen bestimmten Lieferanten angewendet werden soll
|**Vordefiniertes Konto** |Das vordefinierte ExFlow-Konto kann verwendet werden, um nur ein Sachkonto für die Rechnungen/Gutschriften dieses Lieferanten vorzuschlagen. Dieses Feld kann nicht zusammen mit dem ExFlow-Einkaufscode verwendet werden.<br/> Wenn "Vordefiniertes ExFlow-Konto" und "ExFlow-Einkaufscode" leer sind, kann stattdessen das "Vordefinierte Konto" aus der ExFlow-Einrichtung verwendet werden.
|**ExFlow-Einkaufscode**   |Der ExFlow-Einkaufscode wird verwendet, wenn nur ein Sachkonto nicht ausreicht. Dieses Feld kann nicht zusammen mit dem vordefinierten ExFlow-Konto verwendet werden. Wenn "Vordefiniertes ExFlow-Konto" und "ExFlow-Einkaufscode" leer sind, kann stattdessen der "ExFlow-Einkaufscode" aus der ExFlow-Einrichtung verwendet werden.<br/><br/> Lesen Sie mehr darüber im Abschnitt [***Einkaufscodes***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/purchase-codes#purchase-codes)
|**Änderungen automatisch überprüfen**|     Wenn ein Dokument genehmigt ist, wird die Überprüfung der Änderungen automatisch durchgeführt. Wenn keine Änderungen am Dokument vorgenommen wurden, wird der Status auf "Bereit zum Buchen" gesetzt.
|**Doppelte Rechnungen zulassen**|Beim Empfang von Rechnungen mit derselben Rechnungsnummer von einem Lieferanten, z.B. Versicherungen und Steuerbehörden, kann dieses Kontrollkästchen verwendet werden, um die Kontrolle der Rechnungsnummer dieses Lieferanten auszunehmen. Es ist nun möglich, mehr als eine Rechnung für diesen Lieferanten mit derselben Lieferantendokumentnummer zu buchen.
|**Vorschlag für Mehrwertsteuerzeile**   |Wenn ein bestimmter Lieferant Mehrwertsteuerzeilen hat, die im Genehmigungsprozess enthalten sein sollen, kann diese Einstellung auf Lieferantenebene auf "Ja" gesetzt werden. Andernfalls wird standardmäßig die allgemeine Einstellung aus der ExFlow-Einrichtung verwendet.
|**Factoring-Lieferant**   |Wenn der Lieferant nur für Factoring verwendet wird, gibt es ein Kontrollkästchen, das verhindert, dass Rechnungen/Gutschriften für diesen Lieferanten erstellt werden, und er kann nur als "Zahlung an Lieferantennummer" über die "Kauf-von-Lieferant" verwendet werden. <br/><br/> Markieren Sie das Kontrollkästchen Factoring-Lieferant bei der "Zahlung an Lieferantennummer" und fügen Sie diese Lieferantennummer auf der "Kauf-von-Lieferantenkarte" hinzu. <br/> <br/> Wenn ein Dokument auf einem Factoring-Lieferanten interpretiert wird, gibt das ExFlow-Importjournal eine Aktionsmeldung aus: "Diese Rechnung ist als Factoring gekennzeichnet und darf daher nicht erstellt werden!".
|**Zahlungsvalidierung**     |Gibt an, ob der Zahlungsvalidierungsprozess während des Import- und Dateninterpretationsprozesses angewendet wird. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Zahlungsvalidierungseinrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion)
|**Empfängerbankkonto vorschlagen**     |Gibt an, ob der Vorschlag des Empfängerbankkontos aktiviert ist. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Empfängerbankkonto vorschlagen***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/payment-validation-and-payment-suggestion#setup-payment-validation--suggest-recipient-bank-account)
|**Abgrenzung vorwärts verschieben**  |Wenn das Buchungsdatum im Abgrenzungsplan vor dem zulässigen Buchungsdatum für den Benutzer liegt, wird dieser Zeitraum am ersten zulässigen Buchungsdatum in der Sachkontoeinrichtung oder Benutzereinrichtung gebucht. ExFlow verschiebt Abgrenzungen nur für geschlossene Zeiträume vorwärts. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Abgrenzung vorwärts verschieben***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#move-deferral-forward)
|**Vertrauliche Dokumente**|Gibt an, ob Dokumente als vertrauliche Dokumente behandelt werden sollen.

### Dokumentenerstellungskontrollen

|Dokumentenerstellungskontrollen|  |
|:-|:-|
|**Dokumente automatisch erstellen**| Aktivieren Sie dieses Kontrollkästchen, wenn interpretierte Dokumente automatisch aus dem ExFlow-Importjournal für einen bestimmten Lieferanten erstellt werden sollen. Wenn das Kontrollkästchen auf der Lieferantenkarte aktiviert ist, werden alle interpretierten Dokumente ohne Fehler- oder Warnmeldungen automatisch erstellt und zur Genehmigung gesendet. <br/><br/>Diese Funktion kann ohne jegliche Einrichtung im ExFlow-Importjournal verwendet werden. Es ist jedoch möglich, die ExFlow-Importjournalliste zu personalisieren und die Spalte "Dokumente automatisch erstellen" hinzuzufügen, um ein dediziertes Journal für die automatische Dokumentenerstellung zu haben. <br/><br/>Lesen Sie mehr darüber im Abschnitt [***Batch-Import von Dokumenten aus der Interpretation***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-import-documents-from-interpretation) und im Abschnitt [***Hintergrundverarbeitung***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing)
|**Referenzen überprüfen**   |Wenn aktiviert, muss das Dokument eine ExFlow-Referenz enthalten.
|**Währungskennzeichen des Lieferanten abgleichen**   |Gibt an, ob der Währungscode auf dem importierten Dokument mit dem Währungscode auf der Lieferantenkarte übereinstimmen muss. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Währungskennzeichen des Lieferanten abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#match-vendors-currency)
|**Im Importjournal blockieren**|   Gibt an, ob Dokumente von der Erstellung blockiert werden sollen.
|**Ausschließen, wenn Lieferantendokumentnummer mit beginnt**| Gibt den Ausschluss von importierten Dokumenten von der Erstellungsblockierung an, wenn die Lieferantendokumentnummer mit… beginnt. Diese Einstellung wird angezeigt, wenn "Im Importjournal blockieren" aktiviert ist.
|**Dimensionen überprüfen**   |Gibt an, ob die Standarddimensionseinstellungen in Business Central überprüft werden sollen, wenn die Rechnung erstellt wird.
|**Automatische Zuordnung der MwSt.-Differenz für die Erstellung**     |Gibt an, ob eine automatische Zuordnung der MwSt.-Differenz erfolgen soll, wenn die Differenz der MwSt. auf den Zeilen und im Kopf innerhalb der maximal zulässigen MwSt.-Differenz liegt.
|**Beträge testen**   |Gibt an, ob die Brutto-/Netto-/MwSt.-Beträge auf dem Dokument auf Abweichungen (Differenz zwischen der Summe der Dokumentzeilen und dem entsprechenden Betrag im Dokumentkopf) überprüft werden sollen, bevor die Rechnung erstellt wird.

<br/>

### PO-Abgleich

|PO-Abgleich|  |
|:-|:-|
|**Dokumente abgleichen mit**| Gibt an, ob ExFlow Zeilen aus Bestellungen oder aus gebuchten Wareneingängen oder aus beiden Bestellungen und Wareneingängen abgleichen und abrufen soll. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Rechnung mit Empfangs-, Bestell- oder sowohl Empfangs- als auch Bestellzeilen abgleichen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#match-invoice-with-receipt--order--or-both-receipt-and-order-lines)
|**Bestellung automatisch empfangen**| Gibt an, ob Bestellzeilen jedes Zeilentyps automatisch empfangen werden sollen, wenn die abgeglichene Rechnung auf "Bereit zum Buchen" gesetzt wird. Diese Option ist nur anwendbar, wenn die Einstellung "Dokumente abgleichen mit" als "Bestellung" oder "Bestellung und Wareneingang" konfiguriert ist.
|**Spezifische Differenzeinheit Kosteneinstellung**| Die Felder ''In LCY'' und ''Prozent %'' werden sichtbar, wenn diese Einstellung aktiviert ist.
|**Spezifische Max. Sonstige Einstellung**| Aktivieren, um die Max. Sonstige Funktion zu aktivieren.
|**Max. Sonstige Kosten (LCY)**| Geben Sie die maximalen sonstigen Kosten in LCY ein.
|**Differenzzeile Einkaufscode**| Wählen Sie den ExFlow-Einkaufscode, der für die Differenzzeile ausgewählt werden soll.
|**Spezifische Differenzeinstellung**| Aktivieren, um die spezifische Differenzeinstellung zu aktivieren.
|**Wareneingangsnummer obligatorisch**| Aktivieren, wenn die Wareneingangsnummer obligatorisch ist.
|**Bestellungen nicht abgleichen**| Aktivieren, wenn für diesen Lieferanten kein Bestellabgleich erfolgen soll.
|**Genehmigung nur für Abweichungen**| Wählen Sie, ob die Genehmigung nur für Abweichungen mit der Option: ExFlow-Einrichtung, Ja oder Nein angewendet werden soll.
|**Automatische Zuordnung von Artikelzuschlägen**| Gibt an, welcher Typ der Artikelzuschlagszuordnung beim Buchen von Rechnungen verwendet werden soll. Es kann gleichmäßig, nach Betrag, nach Gewicht oder nach Volumen automatisch erfolgen. Keine = keine automatische Zuordnung erfolgt. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Artikelzuschlagszuordnung***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#item-charge-assignment)
|**Abgeglichene Zeilen in OCR-Zuordnung speichern**| Diese Option kann verwendet werden, um manuell abgeglichene Rechnungszeilen aus der "Abgleichsansicht" basierend auf Lieferant, interpretiertem Artikel Nr. automatisch zu speichern. Diese Zeilen werden in der ExFlow OCR Import Mapping-Tabelle gespeichert und können erneut verwendet werden, um den Abgleich für zukünftige PO-Rechnungen mit denselben Kriterien vorzuschlagen.
|**Mehrfachzeilenabgleich**| Diese Einstellung ermöglicht es ExFlow, eine Rechnungszeile mit mehreren Bestellzeilen oder Wareneingangszeilen abzugleichen. Wenn die Menge der Rechnungszeile größer ist als die Menge der Bestellzeile, wird ExFlow die Rechnungszeile aufteilen und mit anderen verfügbaren Bestellzeilen oder Wareneingangszeilen teilweise abgleichen.
|**Aufgeteilte Rechnungszeilen überprüfen**| Wenn "Mehrfachzeilenabgleich" wahr ist, gibt ExFlow Aktionsmeldungen für jede Zeile aus, die aufgeteilt wurde, was dem Benutzer die Möglichkeit gibt, den vorgeschlagenen Abgleich manuell zu bestätigen, bevor das Dokument erstellt wird. Wenn diese Einstellung auf falsch gesetzt ist, wird keine Aktionsmeldung für abgeglichene aufgeteilte Zeilen angezeigt.
|**PO-Header-Werte auf Rechnung verwenden**| Aktivieren Sie Felder, die vom Bestellauftrag auf die Rechnung (oder Rückkaufauftrag auf Gutschrift) im Importjournal übertragen werden sollen, wenn der Abgleich auf Kopfebene erfolgt. Ausgewählte Werte können unter Verwandt --> Erweitert --> PO-Header-Werte in der Rechnungseinrichtung gefunden und aktualisiert werden. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Kopieren von Bestellkopfwerten***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/copy-po-header#copy-purchase-order-header-values)
|**Rechnungen automatisch genehmigen**| Gibt an, ob die Rechnung automatisch genehmigt werden soll, wenn die zugehörige Bestellung genehmigt ist. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Rechnungen automatisch genehmigen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#auto-approve-purchase-order-matching-invoices)
|**Max. Rechnungsbetrag für Systemgenehmigung (LCY)**| Gibt den maximal zulässigen Rechnungsbetrag für automatische Genehmigungen an. 0 = deaktiviert
|**Benutzer für automatische Genehmigung**| Gibt den ExFlow-Benutzer an, der für automatisch genehmigte Rechnungen verwendet werden soll. Wenn diese Einstellung leer ist, wird die ID des angemeldeten BC-Benutzers verwendet.
|**Direkten Einstandspreis überprüfen**| Geben Sie an, ob ExFlow den Einstandspreis auf der Rechnungszeile überprüfen soll, wenn Rechnungen mit Bestellungen abgeglichen werden. Die importierte Rechnung muss zeileninterpretiert sein, damit dies funktioniert.

<br/>

### Genehmigung

|Genehmigung|  |
|:-|:-|
|**MwSt.-Zeilen genehmigen**| Gibt an, ob die MwSt.-Zeilen im Genehmigungsprozess enthalten sein sollen. Wenn ein ExFlow-Einkaufscode im Kopf verwendet wird, wird diese Einstellung ignoriert. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***MwSt.-Zeilen genehmigen.***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approve-vat-lines)

<br/>

### Automatische Kodierungsvorschläge

|Automatische Kodierungsvorschläge|  |
|:-|:-|
|**Automatische Kodierung für importiertes Dokument vorschlagen**| Gibt an, wie der automatische Kodierungsvorschlag für den Lieferanten verwendet wird.
|**Automatische Vorschläge ab Datum berechnen**| Gibt das Startdatum des Dokuments an, das in den automatischen Kodierungsvorschlägen für diesen Lieferanten verwendet werden soll.
|**Automatische Kodierungsbeträge aus Kodierungssatz-ID vorschlagen**| Gibt an, ob der Betrag automatisch auf die Dokumentzeile basierend auf dem Nutzungsprozentsatz in der Kodierungssatz-ID für diesen Lieferanten vorgeschlagen wird. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Einrichtung der automatischen Kodierungsvorschläge***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/auto-coding-suggestion-setup#auto-coding-suggestion-setup)

