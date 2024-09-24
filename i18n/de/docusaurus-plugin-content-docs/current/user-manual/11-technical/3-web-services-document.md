---
title: Webdienste - EXFID
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
## Webdienste - EXFID

### Einführung
ExFlow hängt vom Import von Dokumenten aus einer Vielzahl von Quellen ab, wie dem lokalen Dateisystem, Azure Storage oder Webdiensten. In diesem Dokument werden Webdienste beschrieben; Funktionalität, Einrichtung, Nutzung und Beispielcode als Projekt in C#/.NET 4.8 und Visual Studio 2019 zur Integration. Die Programmierung kann in jeder Sprache erfolgen, die Webdienstanforderungen mit dem SOAP-Protokoll unterstützt. Der aufgeführte Beispielcode kann leicht in VB.Net konvertiert werden.<br/>
Die Nutzung von Webdiensten ermöglicht es Drittanbietern oder Business Central-Partnern, elektronische Rechnungen mit einem standardisierten Protokoll an ExFlow zu senden.

### Allgemein
Der Import von Rechnungen in ExFlow erfordert normalerweise zwei Dateien: eine XML-Datei, die die Rechnung in einer bekannten Struktur enthält, und die PDF-Datei, die eine Darstellung der Rechnung enthält. Die PDF-Datei kann optional sein, wenn eine XSL-Datei existiert, die in HTML konvertiert werden kann, um eine PDF-Datei zu erstellen.

Der Import über Webdienste wird extern initiiert und nicht von ExFlow oder Job Queue Entries. Externe Systeme verbinden sich mit den Webdiensten in Business Central und rufen Methoden auf, um Dokumente in Eingehende Dokumente und Eingehende Dokumentanhänge hochzuladen. Beim Auslösen des Imports in ExFlow werden Dokumente basierend auf den von den Webdiensten importierten Eingehenden Dokumenten verarbeitet.

### Business Central / ExFlow
Installieren Sie ExFlow und führen Sie den Assistenten aus, um eine Einrichtung zu erhalten. Importieren Sie eine nützliche Datenübertragungsdefinition (DED), entweder eine von ExFlow oder eine vorhandene DED in Business Central.<br/><br/>

#### ExFlow Einrichtung
Legen Sie im ExFlow Setup einen Wert im Feld „Web Def. Datenaustauschtyp“ fest, indem Sie aus der Liste der Datenaustauschtypen auswählen. Wenn keine verfügbar sind, führen Sie „Datenübertragungsdefinitionen importieren“ aus und importieren Sie eine oder mehrere Datenübertragungsdefinitionen.

![ExFlow Setup OCR Import](../../images/exflow-setup-ocr-import-002.png)<br/><br/>

#### Import Journal
Erstellen oder konfigurieren Sie ein ExFlow Import Journal, um das zu verarbeiten, was über den EXFID-Webdienst importiert wird.
* Erstellen Sie ein neues ExFlow Import Journal
* Geben Sie einen Namen und eine Beschreibung ein
* Setzen Sie den Quellentyp auf Webdienst

![ExFlow Import Journals](../../images/import-journals-002.png)

Verarbeiten Sie importierte Rechnungen über den Webdienst, indem Sie „Dokumente importieren“ im neu erstellten ExFlow Import Journal ausführen oder „Batch-Dokumente importieren“ ausführen.
