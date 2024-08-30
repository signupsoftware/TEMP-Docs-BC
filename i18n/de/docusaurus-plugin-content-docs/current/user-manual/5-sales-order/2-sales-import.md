---
title: Verkaufsauftragsimport
sidebar_position: 2
hide_title: true
---

### Verkaufsauftragsimport-Workflow

Gehe zu: **ExFlow Verkaufsdokument-Importliste**

Interpretiere die Verkaufsaufträge in ExFlow Data Capture.

Klicke auf *Verkaufsdokument importieren*, um die Verkaufsaufträge zu importieren, und dann auf *Ja*.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-import-001.png) <br/>

Importierte Verkaufsaufträge ohne Fehler werden direkt erstellt und können in der Standard-Verkaufsauftragsliste gefunden werden.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-import-002.png) <br/>

Finde den neu erstellten Verkaufsauftrag in der ausgewählten Verkaufsauftragscharge oder indem du auf die Anzahl der Dokumente in der Verkaufsauftragscharge klickst.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-import-003.png) <br/>

Da diese ausgewählte Standardzeitschrift als "Erstellen" festgelegt ist, werden alle Verkaufsaufträge erstellt und haben den Status "Offen".

![Verkaufsdokument importieren](./../../images/sales-document-import-list-import-004.png) <br/>

Wenn der Wert "Erstellen und Freigeben" für den Wert "Dokument erstellen" festgelegt wurde, wäre der Verkaufsauftrag ebenfalls freigegeben worden.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-import-005.png) <br/>

### Umgang mit importierten Verkaufsaufträgen mit Fehlern

Im folgenden Beispiel existiert eine Standard-Verkaufsauftragscharge und eine weitere Verkaufsauftragscharge wird für den Kunden Adatum Corporation erstellt.

Importierte Dokumente mit Fehlern bleiben in der Verkaufsdokument-Importliste stecken, bis der Fehler manuell behoben wird.

Klicke auf Ja, um die Fehlermeldung zu öffnen.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-001.png) <br/>

Fehlermeldung:

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-002.png) <br/>

Es ist auch möglich, auf die Importdokumentnummer zu klicken, um die Fehlermeldung und andere Informationen anzuzeigen. Wenn ein Dokument einen Fehler aufweist, hat es den Status "Fehler", bis der Fehler behoben ist.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-003.png) <br/>

Von der Karte aus hast du die Möglichkeit, einen interpretierten Wert einem anderen Wert zuzuordnen. Zum Beispiel kann ein unbekannter und rot markierter Mengeneinheitswert "Stück" in eine Mengeneinheit umgewandelt werden, die Business Central kennt, in diesem Beispiel "Stk.".

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-005.png) <br/>

Klicke auf die drei Punkte in den Importzeilen, um eine Zuordnung vorzunehmen, und gehe in die Detailansicht:

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-006.png) <br/>

Wähle den richtigen Mengeneinheitscode aus und klicke auf OK.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-007.png) <br/>

Die Mengeneinheit (Import) wird nicht mehr rot markiert sein und die neue Mengeneinheit wird nun in den Zeilen eingetragen. Das Dokument ist nicht mehr blockiert, daher ändert sich der Dokumentstatus von "Fehler" zu "Verarbeitet".

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-008.png) <br/>

Jetzt ist es möglich, den Verkaufsauftrag zu erstellen, klicke einfach auf "Verkaufsaufträge im Batch erstellen".

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-009.png) <br/>

Füge bei Bedarf einen Filter hinzu oder klicke auf OK.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-010.png) <br/>

Es wird eine Bestätigung zur Erstellung des Verkaufsauftrags angezeigt.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-011.png) <br/>

Um alle erstellten Verkaufsaufträge anzuzeigen, klicke auf die Anzahl der Dokumente in der Verkaufsauftragscharge. In diesem Beispiel wurden drei Verkaufsaufträge erstellt, aber nicht freigegeben.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-012.png) <br/>

Wenn die Verkaufsaufträge sofort erstellt und freigegeben werden sollen, bearbeite die Liste und nehme die Änderung vor.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-013.png) <br/>

Wenn ein Filter hinzugefügt wird, z.B. wird der Wert "Dokumentfilter" auf "Rechnungsempfänger" festgelegt, werden alle Dokumente in dieser spezifischen "Rechnungsempfänger-Nr."-Charge importiert.

![Verkaufsdokument importieren](./../../images/sales-document-import-list-error-014.png) <br/>
