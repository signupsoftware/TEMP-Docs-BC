---
title: Prozess der Spesenrechnung
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## Prozess der Spesenrechnung

Dieses Kapitel gibt ein Beispiel für einen Rechnungsfluss in ExFlow von der Importierung bis zur Genehmigung und Buchung in ExFlow / Business Central.

Die folgenden Schritte werden vom "ExFlow Import Journal" \--\> "ExFlow Approval Status" durchgeführt, und der letzte Schritt besteht darin, die gebuchte Rechnung im "ExFlow Approval Status History" anzuzeigen.

Schritte im ExFlow Import Journal

Schritt 1 Dokument importieren

Schritt 2 "Aktionsnachricht" prüfen und bearbeiten. Wenn leer, weiter zu Schritt 4

Schritt 3 Wenn die Aktion abgeschlossen ist, überprüfen und sehen, ob alle Aktionen durchgeführt wurden.

Schritt 4 Rechnung oder Gutschrift erstellen

### Importieren und Bearbeiten einer Spesenrechnung

Rechnungen werden aus dem "ExFlow Import Journal" importiert. Dokumente entweder in alle Journale importieren oder Dokumente in einem spezifischen Journal öffnen und importieren.

Dieser Abschnitt beschreibt, wie man aus einem Journal importiert, das nur für "Spesenrechnungen" verwendet wird.

Wählen Sie ein Journal aus und öffnen Sie es durch Klicken auf "Journal bearbeiten" oder durch Klicken auf den Namen.

![ExFlow Import Journals](../../images/image277.png)

Schritt 1 -- Dokument importieren

Gehen Sie zu: ***Aktionen \--\> Importieren \--\> Dokumente importieren\...***

Wenn der Import abgeschlossen ist, wird eine neue Zeile erstellt.

![ExFlow Import Journal](../../images/image278.png)

Schritt 2 -- "Aktionsnachrichten" prüfen und bearbeiten.

In diesem Beispiel gibt es keine vordefinierten Genehmigungsregeln, daher müssen Genehmiger manuell zur Rechnungszeile hinzugefügt werden.

![ExFlow Import Journal](../../images/image279.png)

Wählen Sie: ***Zeile \--\> Genehmigungsvorschlag anzeigen***

![ExFlow Import Journal - Import Lines](../../images/image280.png)

Fügen Sie einen oder mehrere Genehmiger hinzu.

![ExFlow Import Journal - Import Lines - Approval Proposal](../../images/image281.png)

Im FactBox auf der rechten Seite werden die Genehmiger im "Genehmigungsvorschlag" aktualisiert.

![ExFlow Import Journal - FactBox - Approval Proposal](../../images/image282.png)

Schritt 3 -- Dokument überprüfen

Gehen Sie zu: ***Prozess \--\> Dokument überprüfen / Dokumente im Batch überprüfen***

Wenn alle Aktionsnachrichten bearbeitet wurden, "Dokument überprüfen", um zu sehen, ob die Aktionsnachricht leer ist und daher bereit zur Erstellung ist.

Schritt 4 -- Dokument erstellen

Gehen Sie zu: ***Erstellen \--\> "Batch-Rechnungen/Gutschriften erstellen"\... / "Rechnung/Gutschrift erstellen"***

Erstellen Sie eine Rechnung oder Gutschrift, indem Sie auf "Rechnung/Gutschrift erstellen" klicken.

![ExFlow Import Journal](../../images/image283.png)

![ExFlow Import Journal - Document converted](../../images/image284.png)
