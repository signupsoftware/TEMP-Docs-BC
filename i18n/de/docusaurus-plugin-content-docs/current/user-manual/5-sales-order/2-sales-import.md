---
title: Import von Verkaufsaufträgen
sidebar_position: 2
hide_title: true
---

### Workflow für den Import von Verkaufsaufträgen

Gehen Sie zu: **ExFlow Verkaufsdokument-Importliste**

![Import Sales Document](@site/static/img/media/sales-document-import-list-001.png) <br/>

| ExFlow Verkaufsdokument-Importliste |   |
|:-|:-|
| **Importdokument-Nr.:** | Gibt die Importdokument-Nr. an.
| **Kundennummer:** | Gibt die Kundennummer an.
| **Kundenname:** | Gibt den Kundennamen an.
| **Kundenauftragsnummer:** | Gibt die vom Kunden gesendete Auftragsnummer an.
| **Status:** | Gibt den aktuellen Status des Dokuments an. Das Dokument kann den Status Fehler, Verarbeitet oder In Wartestellung haben. <br/><br/> *Fehler:* Zeigt an, dass das importierte Dokument Fehler enthält. Die zugehörigen Fehlermeldungen im Dokument führen den Benutzer zur Behebung der Fehler. <br/><br/>*Verarbeitet:* Das Dokument enthält keine Fehler und ist bereit, erstellt und in einen Verkaufsauftrag umgewandelt zu werden. <br/><br/> *In Wartestellung:* Zeigt an, dass das Dokument in Wartestellung ist. Es wird nicht weiter verarbeitet, bis es manuell freigegeben wird.
| **Hat Fehler:** | Zeigt an, ob das Dokument Fehler hat.

<br/>

| ExFlow Verkaufschargen |   |
|:-|:-|
| **Code:** | Gibt den Code der Charge an. Chargen können so eingerichtet werden, dass sie automatisch Dokumente für bestimmte Kunden erstellen und freigeben.
| **Beschreibung:** | Beschreibung des Chargencodes.
| **Standard:** | Bestimmt, ob die Charge standardmäßig ist. Es kann nur eine Standardcharge geben. Chargen mit Dokumentenfilter können nicht standardmäßig sein.
| **Dokumentenfilter:** | Gibt den Filter an, nach dem Dokumente zu welcher Charge hinzugefügt werden sollen.
| **Standard-Lagerortcode:** | Gibt den Standard-Lagerortcode an. Alle in dieser Charge erstellten Dokumente erhalten den zugewiesenen Lagerortcode.
| **Dokumenterstellungstyp:** | Gibt an, ob das Dokument, das zur Charge gehört, automatisch erstellt oder erstellt und freigegeben wird.
| **Anzahl der Dokumente:** | Zeigt die Anzahl der Verkaufsaufträge pro Charge an.

Interpretieren Sie die Verkaufsaufträge in ExFlow Data Capture.

Klicken Sie auf *Import Sales Document*, um die Verkaufsaufträge zu importieren, und dann auf *Ja*.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-001.png) <br/>

Importierte Verkaufsaufträge ohne Fehler werden direkt erstellt und können in der Standard-Verkaufsauftragsliste gefunden werden.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-002.png) <br/>

Finden Sie den neu erstellten Verkaufsauftrag in der ausgewählten Verkaufscharge oder indem Sie auf die Anzahl der Dokumente in der Verkaufschargen-Zeile klicken.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-003.png) <br/>

Da diese ausgewählte Standardcharge den *Dokumenterstellungstyp* auf "Erstellen" gesetzt hat, werden alle Verkaufsaufträge erstellt und erhalten den Status Offen.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-004.png) <br/>

Wenn der Dokumenterstellungstyp auf "Erstellen und Freigeben" gesetzt wäre, wären die Verkaufsaufträge ebenfalls freigegeben worden.

![Import Sales Document](@site/static/img/media/sales-document-import-list-import-005.png) <br/>

### Umgang mit importierten Verkaufsaufträgen mit Fehlern

Im folgenden Beispiel existiert eine Standard-Verkaufscharge, und eine weitere Verkaufscharge wird für den Kunden Adatum Corporation erstellt.

Importierte Dokumente mit Fehlern bleiben in der Verkaufsdokument-Importliste hängen, bis der Fehler manuell behoben wird.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-001.png) <br/>

Klicken Sie auf Ja, um die Fehlermeldung zu öffnen.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-002.png) <br/>

Fehlermeldung:

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-003.png) <br/>

Es ist auch möglich, auf die Importdokument-Nr. zu klicken, um die Fehlermeldung und andere Informationen zu sehen. Wenn ein Dokument einen Fehler hat, erhält es den Status "Fehler", bis der Fehler behoben ist.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-004.png) <br/>

Auf der Karte haben Sie die Möglichkeit, einen interpretierten Wert einem anderen Wert zuzuordnen. Zum Beispiel die Interpretation einer unbekannten und rot markierten Maßeinheit "Styck" in eine Maßeinheit, die Business Central kennt, in diesem Beispiel "PCS".

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-005.png) <br/>

Klicken Sie auf die drei Punkte in den Importzeilen, um eine Zuordnung vorzunehmen, und auf den Drilldown-Stapel:

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-006.png) <br/>

Wählen Sie den richtigen Maßeinheitencode und klicken Sie auf OK.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-007.png) <br/>

Die Maßeinheit (Import) wird nicht mehr rot markiert und die neue Maßeinheit ist nun in den Zeilen eingetragen. Das Dokument ist nicht mehr blockiert, der Dokumentstatus ändert sich daher von Fehler zu Verarbeitet.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-008.png) <br/>

Es ist nun möglich, den Verkaufsauftrag zu erstellen. Klicken Sie einfach auf "Batch Create Sales Orders".

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-009.png) <br/>

Fügen Sie bei Bedarf einen Filter hinzu oder klicken Sie auf OK.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-010.png) <br/>

Eine Bestätigung der Verkaufsauftragserstellung wird angezeigt.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-011.png) <br/>

Um alle erstellten Verkaufsaufträge zu sehen, klicken Sie auf die Anzahl der Dokumente in der Verkaufschargen-Zeile. In diesem Beispiel wurden drei Verkaufsaufträge erstellt, aber nicht freigegeben.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-012.png) <br/>

Wenn die Verkaufsaufträge sofort erstellt und freigegeben werden sollen, bearbeiten Sie die Liste und nehmen Sie die Änderung vor.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-013.png) <br/>

Wenn ein Filter hinzugefügt wird, z.B. "Dokumentenfilter" auf "Rechnung an Kunden" gesetzt wird, dann werden alle ihre Dokumente in diese spezifische "Rechnung an Kunden-Nr."-Charge importiert.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-014.png) <br/>

### Einen importierten Verkaufsauftrag in Wartestellung setzen

Öffnen Sie die Karte des Verkaufsimportdokuments und dann *Aktionen -> Halten/Freigeben*

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-016.png) <br/>

Das Dokument bleibt in Wartestellung, bis es manuell verarbeitet und freigegeben wird.

![Import Sales Document](@site/static/img/media/sales-document-import-list-error-015.png) <br/>
