---
title: Intercompany
sidebar_position: 29
hide_title: true
---
## Intercompany

ExFlow unterstützt jetzt die Business Central Standard Intercompany-Funktionalität. Folgende Intercompany-Felder stehen nun im gesamten ExFlow-Prozess zur Verfügung.<br/><br/>
•	IC-Partnercode<br/>
•	IC-Partner Ref. Typ<br/>
•	IC-Partnerreferenz<br/>


#### Intercompany im Importjournal
Die IC-Felder sind jetzt im Importjournal verfügbar und können über die Benutzerpersonalisierung zur Ansicht hinzugefügt werden. Werte in den IC-Feldern werden in Business Central auf die Rechnung übertragen, wenn sie erstellt wird.

Bei der Verarbeitung von Nicht-PO (Kosten-)Rechnungen können die Intercompany-Felder manuell ausgefüllt werden, um einen Teil der Kosten auf verwandte Unternehmen zuzuweisen, die in BC als Intercompany-Partner eingerichtet wurden.

Bei PO-abgeglichenen Rechnungen werden die IC-Felder, wenn sie im Kaufauftrag ausgefüllt sind, von der PO auf die Rechnungsposition übertragen.

![ExFlow Importjournal](./../../images/intercompany-import-journal-001.png)

#### Intercompany im Genehmigungsstatus
Im Genehmigungsstatus hat der Benutzer Sichtbarkeit auf die IC-Felder und die zugehörigen Werte. Die IC-Felder können über die Benutzerpersonalisierung zur Ansicht hinzugefügt werden.

![ExFlow Genehmigungsstatus](./../../images/intercompany-approval-status-001.png)


#### Intercompany in ExFlow Web
Die IC-Partnercode- und IC-Partnerreferenzfelder können als Spalten in ExFlow Web hinzugefügt werden. Die IC-Werte sind für den Genehmiger sichtbar und Genehmiger, die Berechtigungen zum Ändern der Codierung haben, können die IC-Felder bei Bedarf aktualisieren.

![ExFlow Web](./../../images/intercompany-web-001.png)

#### Intercompany in ExFlow Genehmigungsdokumenten
Für Genehmiger, die in Business Central genehmigen, sind die IC-Felder jetzt in ExFlow Genehmigungsdokumenten sichtbar und bearbeitbar (mit den erforderlichen Berechtigungen).

![Genehmigungsdokument](./../../images/intercompany-document-approval-001.png) 

Wenn ein Benutzer die Funktion "Änderungen überprüfen" ausführt, werden die IC-Felder sowie alle vorgenommenen Änderungen angezeigt.

![ExFlow Genehmigungsstatus](./../../images/intercompany-approval-status-verify-002.png) 

#### Intercompany in ExFlow Genehmigungsstatusverlauf
Nachdem ein Dokument gebucht wurde, sind die IC-Partnercode- und IC-Partnerreferenzfelder im ExFlow Genehmigungsstatusverlauf sichtbar.

![ExFlow Genehmigungsstatusverlauf](./../../images/intercompany-approval-status-history-003.png) 
