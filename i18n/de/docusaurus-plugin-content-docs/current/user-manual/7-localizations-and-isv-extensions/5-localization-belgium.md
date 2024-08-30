---
title: Lokalisierung Belgien
sidebar_position: 5
hide_title: true
---
## Lokalisierung Belgien

### Sprache
ExFlow unterstützt die Sprachen Niederländisch (Belgien) und Französisch (Belgien) in Business Central.<br/>

Zusätzliche Felder im Importjournal:<br/>

* Unternehmensnummer - USt-IdNr. für Lieferanten aus Belgien
* Strukturierte Nachricht - Zahlungsreferenz (OCR-Nr.)<br/>

Zusätzliche Informationen zur nicht abzugsfähigen Mehrwertsteuer wurden der Faktendetails-Box im Importjournal hinzugefügt:
* Summe der nicht abzugsfähigen Mehrwertsteuer pro Position.<br/>

Die nicht abzugsfähige Mehrwertsteuer stammt aus der G/L-Kontokarte. <br/>
Wenn Sie beispielsweise auf der Seite der G/L-Kontokarte den Wert 75 im Feld "% Nicht abzugsfähige Mehrwertsteuer" eingeben, wird 75 Prozent des regulären Mehrwertsteuerbetrags als zusätzliche Kosten betrachtet und dem Nettobetrag während der Buchung hinzugefügt. Die verbleibenden 25 Prozent werden als reguläre Mehrwertsteuer gebucht.
