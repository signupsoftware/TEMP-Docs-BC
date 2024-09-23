---
title: Lokalisierung Finnland
sidebar_position: 8
hide_title: true
---
## Lokalisierung Finnland

### Sprache

ExFlow unterstützt die finnische Sprache in Business Central.

### Zahlungsreferenz

#### Hintergrund

Finnland hat eine Anforderung an eine Zahlungsreferenz auf ihren Einkaufsrechnungen.

Diese Zahlungsreferenz besteht tatsächlich aus zwei verschiedenen Feldern: Nachrichtentyp und Rechnungsnachricht.

Die standardmäßige finnische lokale Funktionalität von Microsoft enthält 3 Felder im Einkaufsheader.

- Nachrichtentyp *(Pflichtfeld)*

- Rechnungsnachricht *(Pflichtfeld)*

- Rechnungsnachricht 2

Der Nachrichtentyp gibt an, welche Art von Rechnungsnachricht zu erwarten ist.

Der Nachrichtentyp kann einer der folgenden sein:

- Referenznummer

- Rechnungsinformationen

- Nachricht

- Lange Nachricht

- Steuer-Nachricht

Nachrichtentyp und Rechnungsnachricht sind Pflichtfelder und müssen auf der importierten Rechnung im ExFlow-Importjournal vorhanden sein.

##### Lösung

Wenn die Einkaufsrechnung aus dem ExFlow-Importjournal erstellt wird, werden Nachrichtentyp und Rechnungsnachricht in die richtigen Felder im Einkaufsrechnungsheader übertragen.

Diese Funktionalität wird in der ExFlow-Einrichtung mit zwei Einstellungen namens "FI-Referenz prüfen" und "Nachrichtentyp" konfiguriert und aktiviert. Die Einstellungen befinden sich im Abschnitt "Dok.-Erstellung prüfen".

**Referenz prüfen**

**Keine Prüfung:** Prüfung ist deaktiviert.

**Nicht leer:** Rechnungsnachricht darf nicht leer sein.

**Nicht leer + Referenznummer-Format:** Rechnungsnachricht darf nicht leer sein, und das Format der Nachricht wird überprüft. *(Erfordert, dass "Nachrichtentyp" = Referenznummer)*

![ExFlow Setup - Doc. Creation Checks - Finish Localization](../../images/exflow-setup-doc-creation-checks-002-fi.png)

### Automatische Buchungsgruppe

ExFlow unterstützt die automatische Buchungsgruppe im Importjournal und kann aus dem Sachkonto, dem ExFlow-Einkaufscode oder manuell in der Importjournalzeile hinzugefügt werden.

### Verwenden Sie die Lieferantendokumentnummer, wenn die Rechnungsnachricht leer ist

Gehen Sie zu: **ExFlow Setup --> OCR Import** und aktivieren Sie die Einstellung ***Verwenden Sie die Lieferantendokumentnummer, wenn die Rechnungsnachricht leer ist.***

![ExFlow Setup - OCR Import - Finish Localization](../../images/FI-exflow-setup-ocr-import-vendor-id-001.png)

Diese Einstellung gibt an, ob die interpretierte Lieferantendokumentnummer auch in der Rechnungsnachricht verwendet werden soll, wenn die Rechnungsnachricht leer ist. Der Nachrichtentyp wird dann auf ''Nachricht'' gesetzt. Dies erleichtert den Prozess, wenn mit nicht inländischen Dokumenten ohne Referenznummer gearbeitet wird.

![ExFlow Setup - Import Journal - Finish Localization](../../images/FI-import-journal-invoice-message-001.png)

### Wählen Sie einen anderen Nachrichtentyp in der Lieferanteneinrichtung
Der standardmäßige ''Nachrichtentyp'' im Importjournal ist standardmäßig auf "Referenznummer" eingestellt. 
Es ist jedoch möglich, zur Lieferanteneinrichtungskarte zu gehen und einen anderen Nachrichtentyp für einen bestimmten Lieferanten festzulegen, falls erforderlich.

![ExFlow Setup - Import Journal - Finish Localization](../../images/FI-message-type-001.png)
