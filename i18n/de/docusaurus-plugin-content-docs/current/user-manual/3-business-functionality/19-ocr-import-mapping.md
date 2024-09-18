---
title: OCR-Import-Mapping
sidebar_position: 19
hide_title: true
---
## OCR-Import-Mapping

Gehe zu: ***ExFlow OCR-Import-Mapping***

ExFlow OCR-Import-Mapping wird verwendet, um eine Kodierung von einem spezifischen interpretierten Wert für einen bestimmten Lieferanten festzulegen. Diese Seite enthält die Felder, die die Zeile mit den eingegebenen Werten füllen, wenn die Rechnung in das ExFlow-Import-Journal importiert wird.

Es ist möglich, eine vollständig kodierte Zeile mit einem Sachkonto, Dimensionen, Projekt-Nr. usw. nur durch eine Einrichtung auf der Seite "ExFlow OCR-Import-Mapping" zu erhalten, die für jeden Lieferanten einzigartig sein kann.

![ExFlow OCR-Import-Mapping](../../images/ocr-import-mapping-001.png)

### Zeilen aggregieren

Diese Funktion wird für die Interpretation von Zeilen auf Spesenrechnungen verwendet und nicht für bestellbezogene Rechnungen.

Es ist möglich, einen bestimmten interpretierten Wert einem bestimmten Typ zuzuordnen, wie z.B. einem Sachkonto. Bearbeiten Sie die Liste und geben Sie die gewählte Lieferantennummer an. Fügen Sie den Wert in Import-Nr. ein, der interpretiert wird, und wählen Sie aus, wie ExFlow den interpretierten Wert zuordnen soll, z.B. einem Sachkonto.

Beim Importieren des Dokuments in das Import-Journal wird die Kodierung gemäß der Einrichtung auf der Seite "ExFlow OCR-Import-Mapping" mit dem gewählten "Zuordnungstyp" (d.h. Sachkonto) unter Importzeilen generiert.

![ExFlow OCR-Import-Mapping - Zeilen aggregieren](../../images/ocr-import-mapping-002.png)

Beispiel: Wenn eine Rechnung 1000 Zeilen hat (500 Zeilen mit Wert 1 und 500 Zeilen mit Wert 2) und die Zeilen gemäß dem untenstehenden Bild auf zwei verschiedene Sachkonten zugeordnet werden müssen. Durch das Ankreuzen von "Zeilen aggregieren" werden alle Werte mit 1 in das Sachkonto 6420 und alle Zeilen mit Wert 2 in das Sachkonto 5611 aggregiert, wenn das Dokument in das ExFlow-Import-Journal importiert wird.

Dimensionen werden auf Zeilen, nicht auf Kopfzeilen, hinzugefügt.

![ExFlow Import-Journal - Zeilen aggregieren](../../images/import-journal-026.png)

### Keine Bestellabgleichung

Wenn "Keine Bestellabgleichung" deaktiviert ist und das interpretierte Dokument eine interpretierte Bestellnummer hat, hat der Bestellabgleich Vorrang und setzt die Zeilen wie in der Bestellung festgelegt. Das bedeutet, dass Dimensionen aus der Bestellung verwendet werden und nicht die eventuell in der OCR-Import-Mapping angegebenen Dimensionen.

![ExFlow OCR-Import-Mapping - Keine Bestellabgleichung - Deaktiviert](../../images/ocr-import-mapping-003.png)

Wenn "Keine Bestellabgleichung" aktiviert ist und das interpretierte Dokument eine interpretierte Bestellnummer hat, verwendet das System die in der "ExFlow OCR-Import-Mapping"-Einrichtung angegebenen Werte, einschließlich der Dimensionen. Dimensionen werden nur auf Zeilen, nicht auf Kopfzeilen, gesetzt.

![ExFlow OCR-Import-Mapping - Keine Bestellabgleichung - Aktiviert](../../images/ocr-import-mapping-004.png)
