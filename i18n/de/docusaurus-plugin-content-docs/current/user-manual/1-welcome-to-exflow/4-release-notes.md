---
title: Versionshinweise
sidebar_position: 4
hide_title: true
---
## Versionshinweise

### ExFlow 23.2.0.0 – Versionshinweise <br/> 
**Art der Veröffentlichung:** <br/>
Minor Release

**Veröffentlichungsdatum:** <br/>
2024-05-24

**Veröffentlichungsinformationen:** <br/>
Erfordert BC 23.0 oder höher <br/>

Das Problem mit Abgrenzungen und vorläufiger Buchung wurde in 23.2.34.17 behoben.

BC-Upgrades, die manchmal aufgrund von ExFlow-Daten fehlschlugen, wurden in 23.2.34.17 behoben.

Das Problem, bei dem der ExFlow Genehmigungsstatusbericht keinen verbleibenden periodischen Saldo im angegebenen Konto erstellte, wurde in 23.2.34.20 behoben.

Die Methode ''AddDocumentFromBlobs'', die die veraltete Methode ''AddDocumentFromStreams'' ersetzt, wurde in 23.2.34.20 hinzugefügt.


**Verbesserungen/Erweiterungen**<br/> 

| ID | Bereich | Beschreibung |
| :----------- | :-------------- | :-------------- | 
| 39085 | Import Journal | Behobenes Problem beim Import des OIOUBL-Formats
| 40104 | Import Journal | Große Verbesserung der Leistung beim Arbeiten mit der Mehrzeilenabstimmung
| 39999 | Import Journal | Behobenes Problem, bei dem Rechnungen mit Serviceartikeln in einigen Fällen nicht aus dem Import Journal erstellt werden konnten
| 39764 | Import Journal | ExFlow unterstützt jetzt auch die Dimensionen auf den Konten bei der Hintergrundbuchung.
| 39492 | Import Journal | Behobenes Problem mit dem Zahlungscode beim Arbeiten mit Gutschriften. Es wurde zuvor nicht korrekt erfasst.
| 39085 | Import Journal | Behobenes Problem beim Import des OIOUBL-Formats
| 40104 | Import Journal | Große Verbesserung der Leistung beim Arbeiten mit der Mehrzeilenabstimmung