---
title: Audit-Log
sidebar_position: 25
hide_title: true
---
## Audit-Log
Der ExFlow Audit-Log basiert auf dem Standard-Änderungsprotokoll von Business Central und bietet ein erweitertes, benutzerfreundliches Protokoll der in ExFlow an Dokumenten vorgenommenen Änderungen. Wenn aktiviert, verfolgt der Audit-Log alle Änderungen, die an einem Dokument vom Import bis zur Buchung vorgenommen werden. Dokumentänderungen können entweder in einem zusammengefassten Format basierend auf Rechnungsstatus und -aktionen oder in einem detaillierten Format, das Änderungen auf Feldebene verfolgt, angezeigt werden.

### Audit-Log aktivieren
Um den Audit-Log zu aktivieren, suchen Sie nach **ExFlow Audit-Log Setup** und öffnen Sie es.

Auf der Seite ExFlow Audit-Log Setup:

* Wählen Sie eine Audit-Log-Vorlage aus (siehe unten weitere Informationen zu Audit-Log-Vorlagen)
* Klicken Sie im Menüband auf „Change Log Setup“<br/><br/>
    ![ExFlow Audit-Log Setup](@site/static/img/media/audit-log-setup-001.png)<br/>

* Aktivieren Sie auf der Seite Change Log Setup die Option „Change Log Activated“<br/>

    ![Change Log Setup](@site/static/img/media/change-log-setup-001.png)

Die Konfiguration in der ausgewählten Audit-Log-Vorlage wird auf das Standard-Änderungsprotokoll von Business Central angewendet. Um die angewendete Änderungsprotokollkonfiguration anzuzeigen, klicken Sie auf der Seite Change Log Setup zuerst auf „Mehr Optionen“ und wählen Sie dann ***Aktionen --> Setup --> Andere --> Tabellen***.

![Change Log Setup](@site/static/img/media/change-log-setup-002.png)

![Change Log Setup (Table) List](@site/static/img/media/change-log-setup-table-list-001.png)

### Audit-Log-Vorlagen
Eine Audit-Log-Vorlage definiert die Tabellen und Felder, die im ExFlow Audit-Log verfolgt werden. Eine Standardvorlage „BASE“ steht zur Verfügung, aber zusätzliche benutzerdefinierte Vorlagen können erstellt werden. Öffnen Sie die BASE-Vorlage, um die enthaltenen Tabellen und Felder zu sehen:
* Suchen Sie nach „ExFlow Audit-Log Templates“ und öffnen Sie es.
* Klicken Sie in der Liste der ExFlow Audit-Log-Vorlagen auf den Code, um die Vorlage zu öffnen.

  ![ExFlow Audit-Log Templates](@site/static/img/media/audit-log-templates-001.png)

Die „BASE“-Vorlage kann nicht geändert werden, aber sie kann kopiert werden, um eine benutzerdefinierte Vorlage zu erstellen.

#### Erstellen einer benutzerdefinierten Vorlage
Um eine benutzerdefinierte Vorlage zu erstellen, muss die Basisvorlage zuerst kopiert werden, dann können Änderungen an der neu erstellten Vorlage vorgenommen werden.
* Öffnen Sie die „Base“-Vorlage
* Wählen Sie „Vorlage kopieren“ im Menüband.<br/><br/>
    ![ExFlow Audit-Log Template Card](@site/static/img/media/audit-log-template-card-001.png)

* Geben Sie einen neuen Vorlagennamen und eine Beschreibung ein.<br/><br/>
    ![ExFlow Audit-Log Copy Template](@site/static/img/media/audit-log-001-copy-template.png)

* Öffnen Sie die neu erstellte Vorlage. <br/> 
**Um Änderungen** an allen Feldern in einer aufgeführten Tabelle zu protokollieren, aktivieren Sie die Option „Alle Felder protokollieren“.<br/>

![ExFlow Audit-Log Template Card](@site/static/img/media/audit-log-template-card-002.png)<br/><br/>
**Um bestimmte Felder** zu protokollieren:<br/>
Wählen Sie die gewünschte Tabelle aus, stellen Sie sicher, dass die Option „Alle Felder protokollieren“ deaktiviert ist, und aktualisieren Sie den Abschnitt „Felder“ (unterer Bildschirmbereich) nach Bedarf:<br/><br/>
**Um ein Feld hinzuzufügen**, klicken Sie auf „Neue Zeile“ und wählen Sie das gewünschte Feld in der neu erstellten Zeile aus.<br/><br/>
**Um ein Feld zu entfernen**, wählen Sie das gewünschte Feld aus und klicken Sie auf „Zeile löschen“.

### Audit-Log für ein ExFlow-Dokument anzeigen

Gehen Sie zu: ** ExFlow Approval Status History --> Verwandt --> Audit-Log** 

Nachdem ein Dokument gebucht wurde, ist das Audit-Log aus der Approval Status History zugänglich. Zu diesem Zeitpunkt im Prozess sind alle Aktionen vom Import bis zur Buchung in der Zusammenfassungsansicht sichtbar, und alle Änderungen auf Feldebene können in der Detailansicht angezeigt werden.

![Audit-Log](@site/static/img/media/audit-log-approval-status-history-001.png)

Das Audit-Log wird in der **Zusammenfassungsansicht** geöffnet, in der Sie eine Liste der Dokumentaktionen sehen, die seit dem Import des Dokuments stattgefunden haben (importiert, überprüft, mit Empfang abgeglichen usw.), mit einem Datum- und Zeitstempel, der angibt, wann die Aktion stattgefunden hat. Der Bereich gibt an, wo sich das Dokument im ExFlow-Prozess befand, als die Aktion stattfand.<br/>

![Ansicht – Audit-Log Übersicht](@site/static/img/media/view-audit-log-overview-001.png)

Die Informationen in dieser Ansicht können durch Auswahl der Aktion „Export to Excel“ im Menüband nach Excel exportiert werden.<br/>

![Audit-Log](@site/static/img/media/audit-log-excel-001.png)

Um alle Standard-Änderungsprotokolleinträge für eine einzelne Aktionszeile anzuzeigen, klicken Sie auf die Zeile, indem Sie auf einen beliebigen Feldwert in der Zeile klicken. Wenn keine Änderungen für die Aktion aufgezeichnet wurden, erhalten Sie die Nachricht „Keine Änderungen gefunden“.

![Ansicht – Änderungsprotokolleinträge](@site/static/img/media/view-change-log-entries-001.png)

Um alle Änderungen an dem Dokument zu sehen, klicken Sie auf der Seite Zusammenfassungsansicht auf ** Detailansicht --> Gesamtes Dokument anzeigen. **<br/>

![Ansicht – Audit-Log Übersicht](@site/static/img/media/view-audit-log-overview-002.png)

Die ** Detailansicht --> Bereich anzeigen ** listet alle Felder in Abschnitten wie folgt auf:
* Kopfzeile
* Zeilen
* Genehmiger

![Audit-Log](@site/static/img/media/view-audit-log-overview-003.png)

Jedes Feld wird als separate Zeile dargestellt, mit Spalten, die alle an dem Feld vorgenommenen Änderungen neben der Aktion anzeigen, auf die sich die Änderung bezieht. Die neuesten Änderungen werden in den Spalten links angezeigt. Um frühere Änderungen anzuzeigen, scrollen Sie nach rechts, um zusätzliche Spalten anzuzeigen. Wenn es eine erhebliche Anzahl von Änderungen gibt, klicken Sie auf „Nächster Satz“, um weitere Änderungen anzuzeigen.

Im unten gezeigten Beispiel sehen wir, dass die letzte Änderung (um 10:34:53 Uhr am 29.06.23) von Benutzer KONNIE vorgenommen wurde:
* Der Genehmiger wurde von SAM zu MARK geändert (siehe „Genehmiger“-Zeile im Screenshot unten)
* Der ursprüngliche Genehmiger (SAM) wurde durch die Genehmigungsregel MARKETING zugewiesen (siehe „Hinzugefügt von Genehmigungsregel“-Zeile im Screenshot unten)
* Der neue Genehmiger (MARK) wurde manuell von Benutzer KONNIE zugewiesen (siehe „Erstellt in“-Zeile im Screenshot unten)

**Hinweis:** Der ursprüngliche Wert wird links vom Pfeil und der neue Wert rechts vom Pfeil angezeigt.

![Audit-Log](@site/static/img/media/audit-log-detailed-view-001.png)

### Abgelaufene Einträge löschen

Gehen Sie zu: **ExFlow Audit-Log Setup --> Abgelaufene Einträge löschen**

![Audit-Log](@site/static/img/media/audit-log-delete-entries-001.png)

Ähnlich wie bei der Standardfunktionalität ist es möglich, eine Perioden-Datumsformel im Audit-Log Setup einzugeben, die beim Löschen alter Audit-Log-Einträge verwendet wird.

In diesem Beispiel werden sieben Jahre hinzugefügt, und ExFlow Audit-Log-Einträge, die älter als sieben Jahre sind, werden bei Verwendung dieser Funktion gelöscht.

![Audit-Log](@site/static/img/media/audit-log-delete-entries-002.png)
