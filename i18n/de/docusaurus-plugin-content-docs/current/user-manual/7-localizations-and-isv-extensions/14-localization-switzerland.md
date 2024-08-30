---
title: Lokalisierung Schweiz
sidebar_position: 14
hide_title: true
---
## Lokalisierung Schweiz

### Sprache

ExFlow unterstützt die französische und deutsche Sprache in Business Central.

### QR-Rechnungen

Die Zahlungsreferenz, die aus dem QR-Code auf der Rechnung extrahiert wird, wird unterstützt.

Die importierte QR-Referenz füllt das Feld "Zahlungsreferenz" auf der Einkaufsrechnung in Business Central aus und wird auch auf der gebuchten Einkaufsrechnung für die Zahlung angezeigt.

### ESR-Rechnungen

Die Logik für ESR-Rechnungen wird unterstützt.

Die importierte ESR-Referenz füllt das Feld "Zahlungsreferenz" und "Referenznummer" auf der Einkaufsrechnung in Business Central aus.

Der Bruttobetrag der Rechnung füllt das Feld "ESR-Betrag" auf der Einkaufsrechnung in Business Central aus.

ExFlow überprüft, ob die obligatorische ESR-Referenz auf Rechnungen von Lieferanten vorhanden ist, bei denen ein Bankkonto für ESR oder ESR+ konfiguriert ist. ExFlow gibt eine Warnmeldung im Importjournal aus, wenn die ESR-Referenz fehlt.
