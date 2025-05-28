---
title: OAuth 2.0-Anwendungen und Speichereinrichtung
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## OAuth 2.0-Anwendungen und Speichereinrichtung

Für Unterstützung zu den folgenden Punkten wenden Sie sich bitte an Ihre interne IT-Abteilung oder einen vertrauenswürdigen Business Central-Partner. 

### Anwendung oder Dienstprinzipal in MS Entra (oder Azure) erstellen

Wählen Sie einen Namen Ihrer Wahl. Wählen Sie: ''Konten in jedem Organisationsverzeichnis'' und klicken Sie dann auf ''Registrieren''.
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-001.png)<br/>

Nach der Registrierung notieren Sie sich die "Anwendungs-ID (Client)".
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-002.png)<br/>

Gehen Sie zu API-Berechtigungen, um eine Berechtigung hinzuzufügen.
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-003.png)<br/>

Klicken Sie auf ''Microsoft Graph'' und ''Anwendungsberechtigungen''. <br/>
Suchen Sie nach ''site'' und fügen Sie die Berechtigung hinzu: Sites.ReadWrite.All<br/>

 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-004.png)<br/>

Klicken Sie erneut auf ''SharePoint'' und ''Anwendungsberechtigungen''.<br/>
Wählen Sie und fügen Sie beide Berechtigungen hinzu: Sites.ReadWrite.All und Sites.Manage.All. <br/>

 ![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-005.png)<br/>

Erteilen Sie die Administratorzustimmung für diese Berechtigungen:

 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-006.png)<br/>


Die Berechtigungen sollten wie folgt aussehen:
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-007.png)<br/>

Gehen Sie zu ''Zertifikate und Geheimnisse''.
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-008.png)<br/>


Erstellen Sie ein Client-Geheimnis:
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-009.png)<br/>

Kopieren Sie das Geheimnis und/oder speichern Sie es. Das Geheimnis wird nicht mehr sichtbar sein. Wenn das Geheimnis vergessen oder verloren geht, erstellen Sie ein neues Geheimnis und konfigurieren Sie die OAuth2-Anwendung erneut.
 
![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-010.png)<br/>

Gehen Sie zurück zur Liste der App-Registrierungen und klicken Sie auf Endpunkte.
Kopieren Sie beide OAuth2.0 v2-Endpunkte; Autorisierung und Token. Kopieren Sie auch den Microsoft Graph API-Endpunkt.
<br/>

![ExFlow SharePoint-Einrichtung](../../images/sharepoint-setup-011.png)<br/>

Abgeschlossen mit Entra oder Azure AD oder AAD.<br/><br/>


### Konfigurieren einer OAuth2-Anwendung in ExFlow

Gehen Sie zu: **ExFlow Setup --> Aktionen --> Funktionen --> OAuth2-Anwendungen**

Beginnen Sie die Konfiguration, indem Sie auf ''Neu'' klicken, um eine neue OAuth 2.0-Anwendung zu erstellen.
 

| OAuth 2.0-Anwendungen|![ExFlow SharePoint-Einrichtung](../../images/oauth-application-001.png)
|:-|:-|
|**Zugriffstoken anfordern**|Öffnen Sie die Autorisierungs-Webseite des Dienstes. Anmeldeinformationen werden abgefragt. Der Autorisierungscode muss in das Feld Autorisierungscode eingetragen werden. 
|**Zugriffstoken aktualisieren**|Aktualisieren Sie die Zugriffs- und Aktualisierungstoken.
<br/>

![ExFlow SharePoint-Einrichtung](../../images/oauth-application-002.png)<br/>

|Allgemein||
|:-|:-|
|**Code**|Gibt den Namen des Codes an
|**Beschreibung**|Gibt die Codebeschreibung an 
|**Anwendungs-/Client-ID**| Gibt die Anwendungs-ID aus der Übersicht der Unternehmensanwendung an.
|**Client-Geheimnis**| Gibt das Client-Geheimnis an
|**Gewähren Sie Typ**| Gibt den zu verwendenden Berechtigungstyp an. Es ist möglich, den Autorisierungscode, die Passwortanmeldeinformationen oder die Clientanmeldeinformationen zu verwenden. Derzeit wird nur ''Clientanmeldeinformationen'' unterstützt. 
|**Umleitungs-URL**| Gibt die Umleitungs-URL an, die vorerst nicht verwendet wird.
|**Bereich**| Gibt den Geltungsbereich an. Geben Sie den Graph-Endpunkt ein und fügen Sie ''.default.'' hinzu. Stellen Sie sicher, dass der Endpunkt am Ende wie folgt aussieht: ''...soft.com/.default''
<br/>

|Endpunkte||
|:-|:-|
|**Autorisierungs-URL**| Gibt die Autorisierungs-URL an
|**Zugriffstoken-URL**| Gibt die Zugriffstoken-URL an
|**Auth. URL Parms**| Gibt die Ressourcen-URL an, die vorerst nicht verwendet wird.

<br/>

Geben Sie alle benötigten Einrichtungsinformationen ein. Geben Sie einen Code und eine Codebeschreibung ein. Fügen Sie die 
Anwendungs-/Client-ID und das Client-Geheimnis aus dem MS Entra Admin Center ein.

Stellen Sie den Berechtigungstyp auf ''Clientanmeldeinformationen'' und die MS Graph-Bereichs-URL (Microsoft Graph API) ein. <br/>

![ExFlow SharePoint-Einrichtung](../../images/oauth-application-003.png)<br/>

Fügen Sie im Abschnitt Endpunkt die zuvor kopierten URLs für sowohl den OAuth2.0 v2-Autorisierungsendpunkt als auch den Token-Endpunkt ein. <br/>

Testen Sie die Funktion, indem Sie auf "Zugriffstoken anfordern" klicken. Die folgende Meldung sollte angezeigt werden, wenn alles korrekt ist: "Zugriffstoken erfolgreich aktualisiert." <br/>

### SharePoint-Einrichtung
Erstellen Sie in den Websiteinhalten eine neue Dokumentbibliothek, die den Ordner enthält, in dem ExFlow Daten speichert. Erstellen Sie einen Ordner in der gerade erstellten Dokumentbibliothek. Dies wird der Speicherort der Dokumente sein. Klicken Sie auf den neu erstellten Ordner. Kopieren Sie die vollständige URL aus dem Adressfeld des Browsers, dies wird für die nachfolgende Konfiguration benötigt. 

### Blob-Speichereinrichtung für SharePoint

Gehen Sie zu: **ExFlow Setup -- > Aktionen --> Funktionen --> Blob Storage Mgmt (ExFlow Storage Management Setup)** 

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-002.png)

| Blob Storage Mgmt / ExFlow Storage Management Setup-Menü ||
|:-|:-|
|**Speichereinrichtung**|Konfigurieren Sie eine oder mehrere Speicherkonfigurationen
|**Blob-Speicher aktivieren/deaktivieren**|Aktivieren oder deaktivieren Sie den Blob-Speicher

|Blob Storage Mgmt / ExFlow Storage Management Setup --> Allgemein ||
|:-|:-|
|Cache in Tagen|Gibt an, wie viele Tage der zwischengespeicherte Inhalt in BC verbleibt. Nach der angegebenen Anzahl von Tagen wird der Inhalt aus dem lokalen Speicher entfernt.
|Batchgröße| Stellen Sie auf 0 ein, und alles wird in einem Batch während der Synchronisierung übertragen. Stellen Sie auf > 0 ein, und nur so viele Dokumente werden während der Synchronisierung übertragen. Gilt für den geplanten Job und das manuelle Auslösen einer vollständigen Synchronisierung.
|Blob-Name-Struktur | Gibt die Art der Namenskonvention für den Pfad zu Blobs an. Empfohlen wird, den Pfad wie ab/cd/ef/abcdefgh zu unterteilen
|Aktiv | Aktivieren Sie den Blob-Speicher für Datensätze, indem Sie diesen Schalter aktivieren.
<br/>

|Blob Storage Mgmt / ExFlow Storage Management Setup --> Speicher-Codes||
|:-|:-|
|Allgemeiner Blob-Speichercode| Gibt an, welcher Speichercode für den allgemeinen Blob-Speicher verwendet werden soll. Dies wird verwendet, wenn der Entwickler/Partner etwas für den Kunden entwickeln möchte, das Blob-Speicher verwendet, aber sie die Struktur, die Namen und alles selbst steuern möchten. Wird als API namens BSApi exponiert.
|Speichercode für eingehende Dokumente| Gibt an, welcher Speichercode für die Speicherung von Blobs aus Datensätzen verwendet werden soll. Diese Einrichtung wird für den Blob-Speicher verwendet, der als Speicher für eingehende Dokumentanhänge dient, bei denen Dateinamen und die Struktur vom Blob-Speicher gesteuert werden. Auch das Abrufen wird über Ereignisse durch den Blob-Speicher gesteuert.

Wenn das Feld Allgemeiner Blob-Speichercode auf einen Speicher-Einrichtungs-Code eingestellt ist, kann es derselbe wie für Eingehende sein, Sie können die Dateisystem-ähnliche API verwenden, die der Blob-Speicher in ExFlow exponiert. Funktioniert wie ein Dateisystem. Dateien können geschrieben oder gelesen werden. Die API befindet sich im Codeunit BSApi (Blob Storage API)
 
Die Funktionalität Blob-Speicher für eingehende Dokumentanhänge verwendet im Wesentlichen die BSApi, um die Dateien intern zu verwalten.


### Speichereinrichtung

Klicken Sie auf der Seite ExFlow Storage Management Setup auf **Speichereinrichtung** und dann auf ''Neu'', um mit der Konfiguration zu beginnen. 

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-006.png)<br/>

Geben Sie einen Code und eine Beschreibung ein. Wählen Sie für die Blob-Quelle SharePoint aus.<br/> 

Klicken Sie dann auf **Speicher einrichten**, um die Konfiguration fortzusetzen. 

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-003.png)<br/>


Kopieren Sie die URL von SharePoint und fügen Sie sie in das Feld ''SharePoint-URL'' ein. Sobald Sie das Feld verlassen, werden die Werte in Host, Site, Dokumentbibliothek und Ordner extrahiert und eingefügt. Wenn eines der Felder fehlt, wahrscheinlich der Ordner, ist es möglich, diese manuell einzugeben. <br/>

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-004.png)<br/>

Wählen Sie die zuvor erstellte OAuth2-Anwendung aus und überprüfen Sie sie, indem Sie auf ''Verbinden'' klicken. <br/>

Wenn etwas falsch ist, z. B. der Ordnername, wird eine Meldung wie "Nicht gefunden" angezeigt. <br/> 

Wenn Berechtigungen fehlen, wird eine Meldung wie "Nicht autorisiert" angezeigt. <br/>

Wenn alles in Ordnung ist, wird der Status der SharePoint-Verbindung auf ''Verbunden'' gesetzt und die Parameter werden in Site-ID, Drive-ID und List-ID eingefügt. <br/>

Es ist jetzt in Ordnung, diese Seite zu schließen, da die Blob-Speichereinrichtung für SharePoint abgeschlossen ist. <br/>

Gehen Sie zurück zu **ExFlow Storage Setup**, um diese Einrichtung zu aktivieren, indem Sie auf ''Aktiviert'' klicken. <br/>

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-007.png)<br/>

Schließen Sie die ExFlow Storage Setup-Seite und kehren Sie zur ExFlow Storage Management Setup / Blob Storage Mgmt-Seite zurück.<br/>

Wählen Sie die neu erstellte SharePoint-Einstellung im Feld "Speichercode für eingehende Dokumente" aus. <br/>

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-008.png)<br/>

Klicken Sie auf ''Aktiv'' oder "Blob-Speicher aktivieren/deaktivieren". <br/>

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-010.png)<br/>

Wenn bereits vorhandene gebuchte Rechnungen, die über ExFlow genehmigt wurden, übertragen werden sollen, wird ein Dialogfeld angezeigt, in dem Sie "Ja" wählen können. <br/>

Es ist jetzt möglich, den Status für gebuchte Rechnungen im Blob-Speicher zu überprüfen, indem Sie ''Aktionen --> Speicherdetails'' auswählen. <br/>

Klicken Sie auf ''Speicher synchronisieren'', um eine Übertragung zu SharePoint zu erzwingen. <br/>

![ExFlow SharePoint-Einrichtung](../../images/storage-setup-009.png)<br/>

Aktualisieren Sie die SharePoint-Seite mit dem zuvor erstellten Ordner, die neuen Ordner sollten jetzt dort sichtbar sein. <br/>


![ExFlow SharePoint-Einrichtung](../../images/storage-setup-005.png)<br/>

