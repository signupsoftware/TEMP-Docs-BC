---
title: Upgrade und Migration von ExFlow-Daten
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Upgrade und Migration von ExFlow-Daten

<br/> 

Fühlen Sie sich frei, die Dokumente herunterzuladen und zu lesen, bevor Sie beginnen:<br/>  [***Technische Dokumente herunterladen ***](https://docs.exflow.cloud/business-central/docs/user-manual/help-and-support/documents-for%20download#documents-for-download) <br/>

### Einführung
#### Hintergrund
Dieser Abschnitt beschreibt, wie BC C/AL ExFlow-Daten auf BC AL ExFlow-Daten aktualisiert/migriert werden. <br/> 

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-030.png)<br/>

#### Überlegungen
Die ExFlow AL BC-Version ist keine 1-1-Konvertierung der früheren C/AL-basierten Version von ExFlow, d.h. es kann Unterschiede sowohl in der Funktionalität als auch in der Darstellung/Migration der Daten geben. Hier sind einige der wichtigsten Unterschiede zwischen den Versionen:<br/> <br/> 
•	Die Anforderungsfunktionalität wird in ExFlow Business Central AL nicht unterstützt. Dokumente und Einstellungen, die sich auf die Anforderungsfunktionalität beziehen, werden daher nicht migriert und die Funktion ist in BC AL nicht verfügbar. <br/> 

•	Es gibt wesentliche Änderungen in der Funktionsweise/Darstellung von Kommentaren, daher werden einige migrierte Kommentare als von einem „Systembenutzer“ erstellt/geschrieben angezeigt. <br/>

#### Upgrade/Umzug der Datenbank zu Microsoft SaaS
Stellen Sie sicher, dass die aktualisierte BC-Datenbank und das ExFlow-Add-on unterstützte verfügbare Cloud-Versionen haben. Befolgen Sie dann die Anweisungen von Microsoft zur Cloud-Migration lokaler Datenbanken zu SaaS.<br/> 

#### Voraussetzungen
Das ExFlow-Datenmodell muss vollständig auf die ExFlow-Version 5.41 in BC 14 aktualisiert sein. NAV/BC muss auf eine von Microsoft unterstützte Version aktualisiert werden und gemäß den Anweisungen von Microsoft.

ExFlow-Schritte:
1.	Upgrade der ExFlow-Version auf ExFlow 5.41 in BC14 siehe ‘’Upgrade ExFlow-Version auf ExFlow 5.41 in BC14.’’
2.	PDF/Bild für den Export von C/AL in die Dateispeicherung behandeln, siehe Anleitung ''PDF-Dateien für den Export aus C/AL erstellen.''
3.	Daten in ExFlow-Upgrade-Tabellen erstellen und auf BC AL upgraden, siehe ‘’Starten der Migration von BC14 ExFlow C/AL-Daten zu ExFlow AL-Daten.’’<br/><br/>


### Schritt 1
### Überprüfen Sie die aktuelle ExFlow-Version und die NAV/BC-Version <br/>

Gehen Sie zu: **Abteilungen--> ExFlow Setup--> Über ExFlow**, um Ihre ExFlow-Version zu finden:

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-0022.png) 

Gehen Sie unter den Stapel im Menüband und klicken Sie auf **''Hilfe''** und **''Über Microsoft Dynamics 365 Business Central''**.

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-002.png)

Wenn die aktuelle ExFlow-Version < ExFlow 5.22 ist, muss ein Upgrade von ExFlow auf ExFlow 5.41 mit einem Upgrade-Skript durchgeführt werden.
 
Lesen Sie mehr im Abschnitt Upgrade ExFlow 3.50 auf ExFlow 5.41 oder Upgrade ExFlow 4.XX auf ExFlow 5.41

Wenn die aktuelle ExFlow-Version > ExFlow 5.22 ist, dann vorhandenen ExFlow-Code in ExFlow-Objekte in BC14 mit Version ExFlow 5.41 zusammenführen.
 
Upgrade-Skripte aus früheren Versionen können vom SignUp Software AB Partnerportal heruntergeladen oder vom SignUp Software AB Support angefordert werden.<br/>


### Überprüfen Sie die PDF-Dokumentenspeicherung für ExFlow

Gehen Sie zunächst zu **‘’ExFlow Setup --> Ordner--> Dateispeichertyp’’**, um zu überprüfen, ob die Dokumente in der Datenbank oder in einem Dateifreigabe gespeichert sind:

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-003.png)<br/>

Wenn das Dokument in einer Dateifreigabe gespeichert ist, gibt es zwei Optionen:<br/>
1.	Dokument in die Datenbank importieren. Lesen Sie mehr im Abschnitt Importieren von PDF/Bildern in die Datenbank vor dem Upgrade.<br/><br/>
2.	Dokumente aus BC/NAV C/AL in die Dateifreigabe exportieren und Dokumente aus dem Azure-Dateispeicher in BC AL importieren.<br/>
Lesen Sie mehr im Abschnitt ''Erstellen von Dokumentdateien zum Export in C/AL und Importieren von Dokumenten in AL.''<br/>


### Importieren von PDF/Bildern in die Datenbank vor dem Upgrade
Starten Sie den BC RTC-Client in ExFlow-Version > 5.22. <br/>

Gehen Sie zu: **Abteilungen --> ExFlow Setup --> Navigieren --> ExFlow-Dateien migrieren (Erweitert)**

Klicken Sie auf **ExFlow-Dateien migrieren (Erweitert)** und bearbeiten Sie das Fenster ExFlow-Dateien migrieren mit den erforderlichen Importinformationen.<br/>

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-004.png)<br/>

Wenn mehrere Unternehmen ExFlow verwenden, überprüfen Sie, ob die Dateipfade im ExFlow-Setup aktualisiert sind. <br/>

Wenn es nur ein Unternehmen gibt, je nachdem, wo sich die Dateifreigabe befindet, ist es möglich, die Dateien entweder aus den Pfaden im Setup zu importieren oder manuell aus **Rechnungspfad** und **Anhangspfad** auszuwählen.<br/>

Stellen Sie sicher, dass das Feld **XML-Dateien migrieren** nicht angekreuzt ist und dass das Feld **Dateikonflikte ersetzen/ignorieren** angekreuzt ist.<br/>

Wenn es viele Dokumente gibt, ist es möglich, den Import zu begrenzen, indem Sie Ordnernamen in **Bildname von** und **Bildname bis** eingeben.<br/>

Darüber hinaus ist es auch möglich, das Unternehmen auszuwählen, aus dem die Dateien importiert werden sollen, indem Sie das Unternehmen in **Nur in Unternehmen migrieren** auswählen.<br/>

Es ist möglich, Pfade im Tab „Ordner“ im ExFlow-Setup zu ändern.<br/>
Klicken Sie auf ‘’Vorschau’’, um fortzufahren.<br/>

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-005.png)<br/>


### Upgrade der ExFlow-Version auf ExFlow 5.41 in BC 14
#### Upgrade von ExFlow 3.50 auf ExFlow 5.41

Beenden Sie alle Dokumente im Importjournal in ExFlow.<br/>

Importieren Sie ExFlow_350_to_5XX_STEP1_(NAV2009R2).fob.<br/>

Führen Sie Codeunit 12057134 EX Upgrade 350 to 5XX Step1.fob aus. <br/>

Löschen Sie das gespeicherte Verfahren im SQL-Manager. <br/>

![Upgrade und Migration von ExFlow-Daten](../../images/migrate-upgrade-018.png)<br/>


Upgrade NAV2009R2 auf (NAV2015 oder später)<br/>

Zusammenführen von ExFlow 5.XX in die Kundenobjekte (NAV 2015 oder später).<br/>

Importieren der zusammengeführten ExFlow 5.XX-Objekte in das aktualisierte (NAV2015 oder später)<br/>

Wählen: Schema später synchronisieren<br/>

Importieren Sie das Upgrade-Tool ExFlow_350_to_5XX_STEP2_(NAV2015 oder später).fob<br/>

Wählen: Schema später synchronisieren<br/>

Kompilieren Sie jetzt die ExFlow-Objekte<br/>

Wählen: Synchronisieren mit Validierung<br/>

Starten Sie das Tool --> Daten-Upgrade in (NAV2015 oder später)<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-019.png)<br/>

ExFlow 5.XX-Daten sind bereit für die ExFlow-Setup-Konfiguration und Web-Installation.<br/>

#### Upgrade ExFlow 4.XX auf ExFlow 5.41
Zusammenführen von ExFlow 5.41 mit der Kundenversion von ExFlow zur BC14-Version und Erstellen einer fob mit ExFlow-Objekten.<br/>

Starten Sie die BC14-Entwicklungsumgebung.<br/>

Führen Sie die Synchronisierung der Tabellen durch.<br/>

Wählen: ''Tools--> Schema für alle Tabellen synchronisieren--> Mit Validierung''. <br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-020.png)<br/>

Importieren Sie die erstellten zusammengeführten Kunden-ExFlow 5.41-Objekte.<br/>

Wählen: ‘’Schema für alle Tabellen synchronisieren--> Später’’.<br/>

Importieren Sie das Upgrade-Tool ExFlow_UpgradeTool_from500_to541 (BC).fob.<br/>

Wählen: ‘’Schema später synchronisieren’’<br/>

Kompilieren Sie das ExFlow-Objekt.<br/>

Wählen: Jetzt – mit Validierung<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-021.png)<br/>

Wählen Sie Tools --> Daten-Upgrade --> Starten<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-019.png)<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-022.png)<br/>

Daten-Upgrade abgeschlossen.<br/>

Validieren Sie die ExFlow-Daten.<br/><br/>

### Schritt 2

### Erstellen von Dokumentdateien zum Exportieren in C/AL und Importieren von Dokumenten in AL
Dies kann vor oder nach dem Upgrade erfolgen (wenn Dokumentbilder nicht aktualisiert werden)

### Exportieren von Bildern/PDF-Dokumenten aus BC C/AL

Holen Sie sich DocMigrate_New_BC14.fob und importieren Sie es in die C/AL-Entwicklungsumgebung.<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-006.png)<br/>

Führen Sie den Bericht 60012 Export Inv to XML aus.<br/>

Wählen Sie einen ‘’Pfad zum Exportieren’’, dies ist der Stammordner, in dem Bilder/PDFs gespeichert werden, und klicken Sie dann auf OK.<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-007.png)<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-008.png)<br/>

Klicken Sie auf Ja, um alle Datensätze in der Datenbank zu exportieren. Eine Popup-Nachricht mit der Summe der exportierten Bilder wird dann angezeigt.

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-0098.png)<br/>

Erstellen Sie Ordner und Dateien:

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-010.png)<br/>

### Erstellen von Azure-Dateispeicher
Für Unterstützung bei den folgenden Schritten wenden Sie sich bitte an Ihre interne IT-Abteilung oder Ihren vertrauenswürdigen Business Central-Partner.<br/>

Um eine Dateiimport-Einrichtung in ExFlow Business Central erstellen zu können, muss zuvor ein Azure-Dateispeicher erstellt werden. Der Zugriffsschlüssel (neben anderen Dingen) wird benötigt.<br/>

#### Erstellen eines Azure-Speicherkontos
Melden Sie sich beim [***Azure-Portal***](https://portal.azure.com/) an und klicken Sie auf ''Speicherkonten'', um ein Speicherkonto zu erstellen.<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/azure-storage-001.png)<br/>

Klicken Sie auf ''Speicherkonto erstellen'', verwenden Sie die Standardeinstellungen und füllen Sie alle erforderlichen Einstellungen aus.<br/>

Stellen Sie sicher, dass im Netzwerk-Tab der öffentliche Endpunkt ausgewählt ist.<br/>

Wählen Sie Überprüfen und erstellen Sie das Konto.<br/>

#### Erstellen Sie ein Azure-Dateifreigabe
Erstellen Sie im Azure-Portal eine Azure-Dateifreigabe.

Wählen Sie das Speicherkonto aus und gehen Sie zu Dateifreigaben unter Datenspeicherung. <br/>

Erstellen Sie eine Dateifreigabe und klicken Sie dann auf die neu erstellte Dateifreigabe.<br/>

Erstellen Sie ein Verzeichnis (Unterordner) in der Dateifreigabe mit dem Namen ExFlow oder einem anderen Namen Ihrer Wahl.<br/><br/>

### Schritt 3

#### Beginnen Sie mit der Migration von BC14 ExFlow C/AL-Daten zu ExFlow AL-Daten mit Cloud-Migration

#### Verschieben Sie ExFlow-Daten in ExFlow-Upgrade-Tabellen
Nach dem Upgrade auf ExFlow 5.41 starten Sie den Import. Führen Sie Datei -> Importieren aus und wählen Sie die Datei Upgrade_New_BC14_XX.fob.<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-031.png)<br/>

Führen Sie Codeunit 12026809 aus, um alle ExFlow-Firmendaten in alle ExFlow-Upgrade-Tabellen zu kopieren.<br/>

#### Starten Sie die Cloud-Migration <br/>

Richten Sie die Cloud-Migration in der aktuellen Business Central-Version ein (folgen Sie den Anweisungen von Microsoft).<br/>

Starten Sie das Cloud Migration Management und wählen Sie Benutzerdefinierte Tabellen verwalten.<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-032.png)<br/>

***Wichtig!:***
Wählen Sie nur alle ExFlow-Tabellen mit ''Upg'' oder ''Up'' nach dem Namen aus, siehe untenstehendes Bild der ''Migration Table Mapping''.<br/>

Entfernen Sie alle anderen ExFlow-Tabellen, damit keine Daten aus diesen Tabellen verschoben werden.<br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-033.png)<br/>

Führen Sie die Migration durch. <br/>

Nach Abschluss der Migration suchen Sie in Business Central nach **Ex Upgrade From CAL**: <br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-028.png)<br/>

Gehen Sie auf der Seite ''Ex Upgrade From CAL'' unter ''Aktionen --> ExFlow-Migration für das aktuelle Unternehmen ausführen''. <br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-029.png)<br/>

Wenn es mehr als ein Unternehmen gibt, gehen Sie unter ''Aktionen --> ExFlow-Migration für alle Unternehmen ausführen''.

Gehen Sie unter * Verwandt --> ExFlow-Migrationsstatusinfo*, um das Protokoll des Upgrade-Verfahrens pro Unternehmen anzuzeigen. <br/>

![Upgrade und migrieren Sie ExFlow-Daten](../../images/migrate-upgrade-034.png)<br/>

Nach dem Upgrade folgen Sie den Anweisungen im untenstehenden Abschnitt ''Aktivitäten nach dem Upgrade''. <br/>

#### Aktivitäten nach dem Upgrade
Diese Aktionen erfordern möglicherweise Anwendungskenntnisse des ExFlow BC AL-Addons und welche Funktionen im aktualisierten ExFlow BC verwendet wurden/werden.
Verwenden Sie den ExFlow-Assistenten für jedes Unternehmen, in dem ExFlow eingerichtet werden soll. <br/>

* Im Standardunternehmen:<br/>
1) (Neu)-Zuweisung des ExFlow-Standardunternehmens.<br/>
2) Einrichten von ExFlow-E-Mail-Benachrichtigungen.<br/>

* In allen (relevanten) Unternehmen:<br/>
1) Aktivieren Sie das Unternehmen für ExFlow Web.<br/>
2) Einrichten der EDC-Integrations-Einstellungen.<br/>
3) Importieren Sie die erforderliche Daten-Austausch-Definition.<br/>

Fordern Sie auch einen ExFlow Business Central-Lizenzschlüssel an und aktivieren Sie ihn.<br/>

### Daten aus Upgrade-Tabellen in ExFlow einfügen

#### ExFlow-Dateiimport-Einstellungen
Gehen Sie zu: **ExFlow-Dateiimport-Einstellungen**, um Bilder/PDF-Dokumente in Business Central zu importieren.

| Dateiimport-Einstellungen      | ![ExFlow-Dateiimport-Einstellungen](../../images/exflow-setup-file-import-setup-001.png)<br/>   |
|:-|:-|
|**Neu:**                               | Erstellen Sie eine neue Dateiimport-Einstellung
|**Verwalten:**                               | Bearbeiten, anzeigen oder löschen Sie die Einstellung
|**Import ausführen:**                               | Führen Sie den Importvorgang aus
|**Aktivieren/Deaktivieren:**                               | Aktivieren/Deaktivieren Sie die Importquelle
|Weitere Optionen--> Aktionen--> **Laufende Importe anzeigen**   | Zeigt eine Liste der ausstehenden Importdateien an
<br/>

#### Importieren von Bildern/PDF-Dokumenten in BC AL über ExFlow File Import Setups

Gehen Sie zu **ExFlow File Import Setups** und klicken Sie auf Neu, um ein neues File Import Setup zu erstellen.

Geben Sie im Abschnitt Allgemein einen Code, eine Beschreibung ein und wählen Sie ''Import From: Azure File''. Wenn ''Azure File'' ausgewählt wird, werden sowohl ''Image Folder'' als auch ''Image Folder'' standardmäßig auf ''exflow'' im Abschnitt ''Data (XML)'' und im Abschnitt ''Image (PDF)'' gesetzt.

Fügen Sie ''Data Exchange Type'' im Abschnitt ''Data (XML)'' hinzu. Fügen Sie im Abschnitt ''Azure File'' Informationen über den Kontonamen, den Zugriffsschlüssel, die Dateifreigabe und die Basis-URL hinzu.

Aktivieren Sie die Einrichtung.

![ExFlow File Import Setups](../../images/exflow-setup-file-import-setup-002.png)<br/>

Kopieren Sie alle Dateien und Ordner in den erstellten Azure-Dateispeicher-Image-Ordner (in diesem Beispiel lautet der Ordnername ExFlow).

![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-011.png)<br/>

![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-012.png)<br/>

### Dokumente über das Dokumentenmigrationstool migrieren

Der nächste Schritt ist die Nutzung des Migrate Document Tools.

Gehen Sie zu: **ExFlow Setup-Seite --> Aktion --> Funktionen --> Dokumente migrieren**

| Dokumentenmigrationstool     | ![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-013.png)<br/>  |
|:-|:-|
|**XML laden und validieren**                               | Erstellen Sie ein neues File Import Setup
|**Dokumente migrieren**                               | Lesen, importieren und migrieren Sie Dokumente
|**Eingehende Dokumente bereinigen:**                               | Löschen Sie alle migrierten Dokumente, wenn ein neuer Import erforderlich ist
<br/>

| Allgemein  |  |
|:-|:-|
|**File Import Setup Code:**                               | Geben Sie den File Import Setup Code ein
|**Name Field Value**                               | Geben Sie das zu verwendende Namensformat an. Folgende Optionen sind verfügbar:<br/> ![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-014.png)
<br/>

| Status  |  |
|:-|:-|
|**Migrationsstatus:**                               | Status der Migration
|**Dokumentenzahl**                               | Anzahl der Dokumente, die in den entsprechenden Firmennamen migriert werden sollen
|**Übereinstimmende Anzahl**                               | Anzahl der Dokumente, die im aktuellen Unternehmen übereinstimmen, klicken Sie für eine Liste der nicht übereinstimmenden Dokumente
|**Migrierte Dokumente**                               | Anzahl der Dokumente, die in den entsprechenden Firmennamen migriert wurden
|**Fehlgeschlagene Dokumente**                               | Dokumente, die nicht migriert werden konnten, klicken Sie für eine Liste und den Grund
|**Vorhandene Dokumente**                               | Anzahl der bereits migrierten Dokumente
<br/>

| Optionen  |  |
|:-|:-|
|**Batchgröße:**                               | Setzen Sie einen Wert ungleich Null, um maximal so viele Dokumente gleichzeitig zu importieren
<br/>

| Dateiformat  |  |
|:-|:-|
|**Dateiformat**                               | Zeigt die erforderliche Import-XML-Struktur an
<br/>

Um mit dem Migrationsbeispiel fortzufahren, klicken Sie auf **XML laden und validieren**, um die Datei auszuwählen.

![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-015.png)

Wählen Sie die Datei ''Document Migration XML document*.xml'' im Azure-Dateifreigabe-Image-Ordner ''exflow'' aus. <br/>

![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-012.png)<br/>

Dann wird der Migrationsstatus auf ''Validiert'' gesetzt.<br/>

![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-016.png)<br/>

Wählen Sie die Registerkarte ''Dokument migrieren'' und warten Sie, bis der Migrationsstatus auf ''Migriert'' gesetzt wird.<br/>

![Upgrade and migrate ExFlow data](../../images/migrate-upgrade-017.png)<br/>

Migration abgeschlossen. <br/>

Überprüfen Sie, ob alle PDF-Bilder an die Einkaufsdokumente angehängt sind.
