---
title: Lokalisierung Schweiz
sidebar_position: 14
hide_title: true
---
## Lokalisierung Schweiz

### Sprache

ExFlow unterstützt die französische und deutsche Sprache in Business Central.

### QR-Rechnungen

Die Zahlungsreferenz, die aus dem QR-Code der Rechnung extrahiert wird, wird unterstützt.

Die importierte QR-Referenz wird das Feld "Zahlungsreferenz" auf der
Einkaufsrechnung in Business Central ausfüllen und wird zur gebuchten
Einkaufsrechnung weitergeleitet, wo sie für die Zahlung enthalten sein wird.

### ESR-Rechnungen

Die Logik für ESR-Rechnungen wird unterstützt.

Die importierte ESR-Referenz wird die Felder "Zahlungsreferenz" und
"Referenznummer" auf der Einkaufsrechnung in Business Central ausfüllen.

Der Bruttobetrag der Rechnung wird das Feld "ESR-Betrag" auf der
Einkaufsrechnung in Business Central ausfüllen.

ExFlow wird validieren, dass die obligatorische ESR-Referenz auf Rechnungen
von Lieferanten mit einem für ESR oder ESR+ konfigurierten Bankkonto vorhanden ist. ExFlow wird eine Warnmeldung im Importjournal anzeigen, wenn die ESR-Referenz fehlt.
