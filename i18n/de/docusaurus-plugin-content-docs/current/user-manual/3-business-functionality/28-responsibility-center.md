---
title: Verantwortungszentrum
sidebar_position: 28
hide_title: true
---
## Verantwortungszentrum

Verantwortungszentren werden sowohl für Kosten- als auch für PO-abgeglichene Dokumente unterstützt. Weitere Informationen finden Sie unten.

### Verwendung von Verantwortungszentren mit Kosten-/Ausgabenrechnungen
Bei Kosten-/Ausgabenrechnungen kann das Verantwortungszentrum entweder vom Lieferanten übernommen oder manuell im Importjournalheader ausgefüllt werden. Wenn das Verantwortungszentrum ausgefüllt ist, werden der Rechnungskopf und die Positionen mit allen relevanten Informationen aktualisiert. Je nach Einstellungen in BC können dies Dimensionen, Standortcode, Steuerbereichscode usw. sein.

Wenn das Verantwortungszentrum im Rechnungskopf auf einen neuen Wert aktualisiert wird, werden die Dokumentpositionen entsprechend aktualisiert.

#### Dimensionenpriorität - Kopfzeile
Wenn ein Verantwortungszentrum im Dokumentkopf festgelegt ist, wird die Dimensionenpriorität der Standard-BC-Dimensionen nachgeahmt, mit einer Ausnahme:

- Standarddimensionen, die in einer ExFlow-Referenz festgelegt sind, haben Vorrang vor den Standarddimensionen, die im Verantwortungszentrum festgelegt sind. Das Dokument erbt Standarddimensionen von beiden, aber bei Konflikten haben die in der Referenz festgelegten Standarddimensionen Vorrang vor den im Verantwortungszentrum festgelegten Standarddimensionen.

#### Dimensionenpriorität - Positionen

Dokumentpositionen erben Dimensionen aus der Kopfzeile mit folgender Ausnahme:

- Wenn ein Einkaufscode verwendet wird, um Rechnungspositionen zu erstellen, haben die im Einkaufscode festgelegten Dimensionen Vorrang vor den im Kopf festgelegten Dimensionen.

### Verwendung von Verantwortungszentren mit PO-abgeglichenen Rechnungen

#### Einrichtung

Wenn die folgende Einrichtung aktiviert ist, erbt PO-abgeglichene Rechnungen das Verantwortungszentrum von der abgeglichenen PO:

Gehen Sie in der ExFlow-Einrichtung zum Schnellregister "PO-Abgleich" und schalten Sie die Option "PO-Kopfwerte auf Rechnung verwenden" ein. Die Seite "PO-Kopfwert auf Rechnungseinrichtung" wird dann geöffnet.

Aktivieren Sie das Verantwortungszentrum, indem Sie das Kontrollkästchen im Feld "Aktivieren" aktivieren, und klicken Sie auf OK, um die Aktivierung abzuschließen und die Seite zu schließen.

![ExFlow Genehmigungsstatus](./../../images/po-header-value-on-invoice-setup-003.png)

Mit der oben genannten Einrichtung tritt Folgendes auf, wenn eine Rechnung mit einer PO abgeglichen wird:
* Eine Rechnung, die mit einer einzelnen PO abgeglichen wird, erbt das Verantwortungszentrum vom PO-Kopf.
    - Rechnungspositionen erben Dimensionen, Standortcode, Steuerbereich und Steuerpflichtigkeit von den abgeglichenen PO-Positionen.
* Eine Rechnung, die mit mehreren POs mit demselben Verantwortungszentrum abgeglichen wird, wird genauso behandelt wie oben.
* Wenn eine einzelne Rechnung mit mehreren POs mit unterschiedlichen Verantwortungszentren abgeglichen wird, erbt jede Position den Standortcode, den Steuerbereich und die Steuerpflichtigkeit von der abgeglichenen PO-Position. Das Verantwortungszentrum bleibt im Rechnungskopf leer.

### Einschränkung
Ein standardmäßiges Verantwortungszentrum, das für einen Benutzer festgelegt ist, wird nicht auf in das Importjournal importierte/erstellte Dokumente vererbt. Das Verantwortungszentrum kann vom Lieferanten, vom Kaufauftrag übernommen oder manuell im Importjournalheader ausgefüllt werden.

