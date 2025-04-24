---
title: Einkaufscodes
sidebar_position: 12
hide_title: true
custom_edit_url: null
---
## Einkaufscodes
 
Gehen Sie zu: ***Einrichtung \--\> Manuelle ExFlow-Einrichtung \--\> ExFlow-Einkaufscodes***
 
Ein ExFlow-Einkaufscode kann verwendet werden, um automatisch Codierung auf Rechnungszeilen aus der Lieferanteneinrichtungskarte, Referenz, Vertrag oder ExFlow-Einrichtung hinzuzufügen. ExFlow-Einkaufscode kann Zeilen auf verschiedene Dimensionscodes, MwSt.-Produktbuchungsgruppen usw. aufteilen.
 
### Erstellen eines neuen ExFlow-Einkaufscodes
 
#### Allgemein
Beginnen Sie mit einem Klick auf "Neu". Geben Sie einen Code und eine Beschreibung ein, die zum ExFlow-Einkaufscode passt.
 
| Allgemein      |    |
|:-|:-|
| **MwSt.-Zeile vorschlagen:**             | Diese Einstellung erfordert eine Konfiguration in der ExFlow-Einrichtung für MwSt.-Produktbuchungsgruppe 0% und MwSt.-Produktbuchungsgruppe 100%. Dann kann eine separate Zeile für den MwSt.-Betrag automatisch für einen bestimmten ExFlow-Einkaufscode hinzugefügt werden
| **Betragsüberprüfung bei Dokumenterstellung:**   | In der ExFlow-Einrichtung gibt es eine Einstellung für Dokumenterstellungsprüfungen im Testbetrag. Durch diese Einstellung ist eine separate Betragskontrolle für einen bestimmten ExFlow-Einkaufscode möglich. <br/><br/> **Keine:** Keine Überprüfung zwischen Betrag im Kopf und Zeilen <br/> **Brutto:** Prüft nur den Gesamtbetrag inkl. MwSt. zwischen Kopf und Zeilen <br/>**Netto+MwSt.:** Prüft sowohl den Betrag exkl. MwSt. als auch den MwSt.-Betrag zwischen Kopf und Zeilen <br/>**ExFlow-Einrichtung:** Verwendet die Einstellung aus der ExFlow-Einrichtung <br/><br/>
 
#### ExFlow-Einkaufscode-Zeilen
 
In ExFlow-Einkaufscode-Zeilen können ein oder mehrere Felder verwendet werden. ExFlow-Einkaufscode kann auch für Lieferanten mit aktivierter Einstellung ''Preise inkl. MwSt.'' auf der Lieferantenkarte verwendet werden. 
 
| ExFlow-Einkaufscode-Zeilen      | |
|:-|:-|
|**Typ:**                      | Sachkonto, Artikel, Ressource, Anlage oder Gebühr (Artikel)
| **Nr.:**                      | Aus der Liste auswählen
| **Beschreibung:**              | Ändern oder wie vorgeschlagen verwenden
| **Gewichtung:**                   | Die Zahl in diesem Feld gibt die Anzahl der dieser Zeile zugewiesenen Teile an. Beispiel: Wenn 1 in dieses Feld eingegeben wird und auch 3 andere Zeilen mit einer 1 in diesem Feld vorhanden sind, wird 1 Teil des Kostenbetrags aus insgesamt 4, also 25%, zugewiesen. Wenn Sie mehr als eine Zeile verwenden und den Betrag manuell im ExFlow-Importjournal auswählen, lassen Sie dieses Feld leer
| **MwSt.-Gewichtung**:               | Wie oben, aber für MwSt.
| **Zuweisungsbetrag exkl. MwSt. (LCY)**:        | Weisen Sie einen festen Betrag in LCY der Dokumentzeile zu. Diese Spalte kann nicht gleichzeitig mit einer der Gewichtungsspalten ausgefüllt werden.
| **Zuweisungs-%:**             | Diese Spalte zeigt den berechneten Prozentsatz aus der Gewichtungsspalte
| **MwSt.-Zuweisungs-%:**         | Wie oben, aber für MwSt.
| **MwSt.-Produktbuchungsgruppe:**  | Wenn Sie dieses Feld verwenden, überschreibt es den Wert auf Typ/Nr. und "Standard-MwSt.-Produktbuchungsgruppe" in der "ExFlow-Einrichtung"
| **Abgrenzungscode:**            | Aus der Liste auswählen. Das Abgrenzungsstartdatum wird automatisch aus der Abgrenzungskarte ausgewählt
| **Projektnr.:**                  | Aus der Liste auswählen
| **Projektaufgabennr.:**             | Aus der Liste auswählen
| **Erster Genehmiger:**           | Aus der Liste auswählen. Wie dies verwendet wird, hängt von den Einstellungen in der ExFlow-Einrichtung ab.
| **Dimensionen:**               | Aus der Liste auswählen
| **Genehmigung**:                 | Gibt an, ob die markierte Zeile zur Genehmigung gesendet werden soll oder nicht

 
Hier ist ein Beispiel für die Aufteilung der Kosten nach Abteilung:
 
![ExFlow Purchase Code Card](../../images/puchase-code-001.png)
 
In diesem Beispiel wird die MwSt. auf das Sachkonto mit 50 % gewichtet, aber die Betragsprüfung erfolgt immer für Brutto anstatt die ExFlow-Einrichtung zu berücksichtigen. Dies kann in Schweden nützlich sein, wo 50% der MwSt. abzugsfähig ist. Interpretieren Sie die gesamte MwSt. und nur 50% werden als separate Zeile hinzugefügt.
 
Dies kann nützlich sein, wenn die volle MwSt. in einem bestimmten Fall nicht abzugsfähig ist, z.B. bei der Kfz-Leasing in Schweden.
 
![ExFlow Purchase Code Card](../../images/puchase-code-002.png)
 
Hier ist ein Beispiel, wie ein ExFlow-Einkaufscode eingerichtet wird, wenn eine Genehmigung des MwSt.-Betrags erforderlich ist. Fügen Sie die gewünschte Codierung und eine separate Zeile mit einem MwSt.-Sachkonto hinzu und aktivieren Sie manuell das Genehmigungsfeld.

Zeilen mit einer Gewichtung werden automatisch zur Genehmigung markiert. Die Genehmigung ist optional bei Zeilen mit einer MwSt.-Gewichtung, daher denken Sie daran, das Genehmigungsfeld zu aktivieren, wenn eine Genehmigung der MwSt. für die ausgewählten ExFlow-Einkaufscodes gewünscht wird.

Fügen Sie die gewünschte Codierung für das Kostenkonto hinzu (KEINE MwSt. = Ohne MwSt. in der MwSt.-Produktbuchungsgruppe) und eine separate Zeile mit einem MwSt.-Sachkonto (NUR = Nur manuell gebuchte MwSt. in der MwSt.-Produktbuchungsgruppe). Geben Sie eine MwSt.-Produktbuchungsgruppe in den Zeilen an, wenn sie von der Einrichtung auf der Sachkontokarte abweicht.

Wenn MwSt.-Zeilen immer zur Genehmigung gesendet werden sollen, kann die Funktion ''MwSt.-Zeilen genehmigen'' genutzt werden.

Lesen Sie mehr darüber im Abschnitt [***MwSt.-Zeilen genehmigen.***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/approve-vat-lines)