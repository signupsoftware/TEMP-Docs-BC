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

Finnland hat die Anforderung einer Zahlungsreferenz auf ihren Einkaufsrechnungen.

Diese Zahlungsreferenz besteht tatsächlich aus zwei verschiedenen Feldern: Nachrichtentyp und Rechnungsnachricht.

Die Standard-Funktionalität für Finnland von Microsoft enthält 3 Felder im Einkaufskopf.

- Nachrichtentyp *(Pflichtfeld)*

- Rechnungsnachricht *(Pflichtfeld)*

- Rechnungsnachricht 2

Der Nachrichtentyp gibt an, welche Art von Rechnungsnachricht erwartet wird.

Der Nachrichtentyp kann einer der folgenden sein:

- Referenznummer

- Rechnungsinformationen

- Nachricht

- Lange Nachricht

- Steuernachricht

Nachrichtentyp und Rechnungsnachricht sind Pflichtfelder und müssen in der importierten Rechnung im ExFlow Import Journal vorhanden sein.

##### Lösung

Wenn die Einkaufsrechnung aus dem ExFlow Import Journal erstellt wird, werden Nachrichtentyp und Rechnungsnachricht in die entsprechenden Felder im Einkaufsrechnungskopf übertragen.

Diese Funktionalität wird in der ExFlow-Konfiguration mit zwei Einstellungen namens "Check FI Reference" und "Nachrichtentyp" konfiguriert und aktiviert. Die Einstellungen befinden sich im Abschnitt "Dokumenterstellung überprüfen".

**Referenz überprüfen**

**Keine Überprüfung:** Überprüfung ist deaktiviert.

**Nicht leer:** Rechnungsnachricht darf nicht leer sein.

**Nicht leer + Referenznummer-Format:** Rechnungsnachricht darf nicht leer sein und das Format der Nachricht wird überprüft. *(Erfordert, dass "Nachrichtentyp" = Referenznummer ist)*

![ExFlow-Konfiguration - Dokumenterstellung überprüfen - Lokalisierung Finnland](./../../images/exflow-setup-doc-creation-checks-002-fi.png)

### Automatische Kontengruppe

ExFlow unterstützt die automatische Kontengruppe im Import Journal und kann aus dem G/L-Konto, dem ExFlow-Einkaufscode oder manuell in der Import Journal-Zeile hinzugefügt werden.

### Verwenden der Lieferantenbelegnummer, wenn die Rechnungsnachricht leer ist

Gehe zu: **ExFlow-Konfiguration --> OCR-Import** und aktiviere die Einstellung ***Verwenden der Lieferantenbelegnummer, wenn die Rechnungsnachricht leer ist.***

![ExFlow-Konfiguration - OCR-Import - Lokalisierung Finnland](./../../images/FI-exflow-setup-ocr-import-vendor-id-001.png)

Diese Einstellung legt fest, ob die interpretierte Lieferantenbelegnummer auch dann in der Rechnungsnachricht verwendet werden soll, wenn die Rechnungsnachricht leer ist. Der Nachrichtentyp wird dann auf ''Nachricht'' gesetzt. Dies erleichtert den Prozess bei der Arbeit mit nicht inländischen Dokumenten ohne Referenznummer.

![ExFlow-Konfiguration - Import Journal - Lokalisierung Finnland](./../../images/FI-import-journal-invoice-message-001.png)

### Anderen Nachrichtentyp in der Lieferantenkonfiguration auswählen
Der Standard-"Nachrichtentyp" im Import Journal ist standardmäßig auf "Referenznummer" eingestellt.
Es ist jedoch möglich, zur Lieferantenkonfigurationskarte zu gehen und einen anderen Nachrichtentyp für einen bestimmten Lieferanten festzulegen, falls erforderlich.

![ExFlow-Konfiguration - Import Journal - Lokalisierung Finnland](./../../images/FI-message-type-001.png)

