---
title: Kaufcodes
sidebar_position: 12
hide_title: true
---
## Kaufcodes
 
Gehe zu: ***Setup \--\> ExFlow Manuelle Einrichtung \--\> ExFlow Kaufcodes***
 
Ein ExFlow Kaufcode kann verwendet werden, um automatisch Codierungen auf Rechnungspositionen aus dem Lieferanteneinrichtungskarten, Referenz, Vertrag oder ExFlow Einrichtung hinzuzufügen. ExFlow Kaufcode kann Positionen auf mehrere Dimensionscodes, USt. Prod. Buchungsgruppen usw. aufteilen.
 
### Erstellen eines neuen ExFlow Kaufcodes
 
#### Allgemein
Beginnen Sie mit einem Klick auf "Neu". Geben Sie einen Code und eine Beschreibung ein, die zum ExFlow Kaufcode passen.
 
| Allgemein      |    |
|:-|:-|
| **Vorschlag USt.-Zeile:**             | Diese Einstellung muss in der ExFlow Einrichtung für USt. Prod. Buchungsgruppe 0% und USt. Prod. Buchungsgruppe 100% vorgenommen werden. Dann kann automatisch eine separate Zeile für den USt.-Betrag für einen bestimmten ExFlow Kaufcode hinzugefügt werden.
| **Betragsprüfung bei Dokumenterstellung:**   | In der ExFlow Einrichtung gibt es eine Einstellung für die Prüfung des Betrags bei der Erstellung von Dokumenten im Testbetrag. Mit dieser Einstellung ist eine separate Betragskontrolle für einen bestimmten ExFlow Kaufcode möglich. <br/><br/>**Keine:** Keine Prüfung zwischen Betrag im Kopf und Positionen <br/> **Brutto:** Prüfung nur für Gesamtbetrag inkl. USt. zwischen Kopf und Positionen <br/>**Netto+USt.:** Prüfung sowohl für Betrag ohne USt. als auch für USt.-Betrag zwischen Kopf und Positionen <br/>**ExFlow Einrichtung:** Verwenden Sie die Einstellung aus der ExFlow Einrichtung <br/><br/>
 
#### ExFlow Kaufcode-Positionen
 
Auf ExFlow Kaufcode-Positionen können ein oder mehrere Felder verwendet werden:
 
| ExFlow Kaufcode-Positionen      | |
|:-|:-|
|**Typ:**                      | G/L-Konto, Artikel, Ressource, Anlagevermögen oder Gebühr (Artikel)
| **Nr.**:                      | Aus der Liste auswählen
| **Beschreibung:**              | Ändern oder wie vorgeschlagen verwenden
| **Gewicht:**                   | Die Zahl in diesem Feld gibt an, wie viele Teile diesem Eintrag zugeordnet sind. Beispiel: Wenn in diesem Feld eine 1 eingegeben wird und 3 andere Einträge ebenfalls eine 1 in diesem Feld haben, werden 1 Teil des Kostenbetrags aus dem Gesamtbetrag von 4, also 25 %, zugeordnet. Wenn mehr als eine Zeile verwendet wird und der Betrag manuell in ExFlow Import Journal ausgewählt wird, lassen Sie dieses Feld leer.
| **USt.-Gewicht**:               | Gleiches wie oben, aber für USt.
| **Zuordnungsbetrag**:        | Ein festen Betrag der Rechnungsposition zuordnen. Diese Spalte kann nicht gleichzeitig mit den Gewichtsspalten befüllt werden.
| **Zuordnungs%:**             | Diese Spalte zeigt den berechneten Prozentsatz aus der Gewichtsspalte
| **USt.-Zuordnungs%:**         | Gleiches wie oben, aber für USt.
| **USt. Prod. Buchungsgruppe:**  | Wenn dieses Feld verwendet wird, wird der Wert auf Typ/Nr. und "Standard USt. Prod. Buchungsgruppe" in "ExFlow Einrichtung" überschrieben.
| **Aufschubcode:**            | Aus Liste auswählen. Das Aufschubstartdatum wird automatisch von der Aufschubkarte ausgewählt.
| **Auftragsnr.:**                  | Aus Liste auswählen
| **Aufgabennr.:**             | Aus Liste auswählen
| **Erster Genehmiger:**           | Aus Liste auswählen. Wie dies verwendet wird, hängt von den Einstellungen in der ExFlow Einrichtung ab.
| **Dimensionen:**               | Aus Liste auswählen
| **Genehmigung**:                 | Gibt an, ob die markierte Zeile zur Genehmigung gesendet werden soll oder nicht.

 
Hier ist ein Beispiel für die Aufteilung von Kosten nach Abteilungen:
 
![ExFlow Kaufcode-Karte](./../../images/puchase-code-001.png)
 
In diesem Beispiel wird die USt. auf dem G/L-Konto mit 50 % gewichtet, aber die Betragsprüfung erfolgt immer brutto anstelle der Einstellungen in der ExFlow Einrichtung. Dies kann in Schweden nützlich sein, wo 50 % der USt. abzugsfähig sind. Interpretieren Sie die Gesamt-USt. und es wird nur 50 % als separate Zeile hinzugefügt.
 
Dies kann nützlich sein, wenn die volle USt. in einem bestimmten Fall nicht abzugsfähig ist, z. B. beim Leasing von Autos in Schweden.
 
![ExFlow Kaufcode-Karte](./../../images/puchase-code-002.png)
 
Hier ist ein Beispiel, wie ein ExFlow Kaufcode eingerichtet wird, wenn eine Genehmigung für den USt.-Betrag erforderlich ist. Fügen Sie die gewünschte Codierung hinzu und eine separate Zeile mit einem USt.-G/L-Konto und aktivieren Sie manuell das Genehmigungsfeld.

Zeilen mit einem festgelegten Gewicht werden automatisch für die Genehmigung aktiviert. Die Genehmigung ist optional für Zeilen mit einem USt.-Gewicht, daher denken Sie daran, das Genehmigungsfeld anzukreuzen, wenn eine Genehmigung für die USt. für die ausgewählten ExFlow Kaufcodes gewünscht wird.

Fügen Sie die gewünschte Codierung für das Kostenkonto hinzu (KEINE USt. = Ohne USt. in USt. Prod Buchungsgruppe) und eine separate Zeile mit einem USt.-G/L-Konto (NUR = Nur manuell gebuchte USt. in USt. Prod Buchungsgruppe). Geben Sie auf den Zeilen eine USt. Prod Buchungsgruppe an, wenn sie von der Einrichtung auf der G/L-Kontokarte abweicht.

![ExFlow Kaufcode-Karte](./../../images/puchase-code-003.png)


Bitte beachten Sie, dass die Funktion ''USt.-Zeilen genehmigen'' verwendet werden kann, wenn USt.-Zeilen immer zur Genehmigung gesendet werden sollen.

Lesen Sie mehr dazu im Abschnitt [***USt.-Zeilen genehmigen***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/approve-vat-lines)
