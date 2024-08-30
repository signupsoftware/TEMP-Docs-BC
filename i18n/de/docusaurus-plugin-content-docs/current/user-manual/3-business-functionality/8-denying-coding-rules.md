---
title: Ablehnung von Codierungsregeln
sidebar_position: 8
hide_title: true
---
## Ablehnung von Codierungsregeln

Gehe zu: ***Setup \--\> ExFlow Manuelle Einrichtung \--\> ExFlow Ablehnung von Codierungsregeln***

"Ablehnung von Codierungsregeln" kann verwendet werden, um Genehmiger daran zu hindern, ungültige Codierung in ExFlow Web zu erstellen.

Ablehnung von Codierungsregeln werden verwendet, um den Genehmiger in ExFlow Web daran zu hindern, Werte auf bestimmte Weise hinzuzufügen oder zu genehmigen. Zum Beispiel, um Konten 5910..5999 in Kombination mit einem leeren Abteilungswert zu blockieren.

| Allgemein      |	|
|:-|:-|
|**ID:**                            | ID-Nummern werden der Codierungsregel in der Reihenfolge, in der sie erstellt werden, zugewiesen. Dies hat keine Auswirkungen auf die Priorisierung.
| **Name:**                         | Beschreibender Name für die Regel
| **Aktiv:**                       | Ob die Regel aktiv ist oder nicht
| **Regel für:**                     | Fügen Sie "Alle" für alle Dokumententypen hinzu oder wählen Sie aus der Liste aus, wenn diese Regel nur für Angebot, Rechnung, Gutschrift oder Bestellung aktiviert werden soll.
| **Von Betrag:**                  | Filtern nach Gesamtbetrag des Dokuments
| **Bis Betrag:**                    | Filtern nach Gesamtbetrag des Dokuments
| **Von Zeilenbetrag:**             | Gibt an, ob die Codierungsregel nur auf Dokumentzeilen in einem bestimmten Zeilenbetrag angewendet werden soll
| **Bis Zeilenbetrag:**               | Gibt an, ob die Codierungsregel nur auf Dokumentzeilen in einem bestimmten Zeilenbetrag angewendet werden soll
| **Validierungsnachricht:**           | Fügen Sie bei Bedarf eine optionale Beschreibung hinzu
| **Gilt für Genehmigungsgruppen:**   | Gibt an, ob die Codierungsregel nur für bestimmte Genehmigungsgruppen gilt
| **Nur endgültiger Genehmiger:**          | Gibt an, ob die Codierungsregel nur auf den endgültigen Genehmiger im Genehmigungsfluss angewendet werden soll

![ExFlow Ablehnung von Codierungsregel-Karte](./../../images/denying-coding-rule-001.png)
