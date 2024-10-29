---
title: OAuth 2.0 Anwendungen und Speicher-Setup
sidebar_position: 5
hide_title: true
custom_edit_url: null
---
## OAuth 2.0 Anwendungen und Speicher-Setup

Für Unterstützung bezüglich der folgenden Schritte wenden Sie sich bitte an Ihre interne IT-Abteilung oder Ihren vertrauenswürdigen Business Central-Partner.

### Anwendung oder Dienstprinzipal in MS Entra (oder Azure) erstellen

Geben Sie einen Namen Ihrer Wahl ein. Wählen Sie: „Konten in jedem Organisationsverzeichnis“ und klicken Sie dann auf „Registrieren“.
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-001.png)<br/>

Nach der Registrierung notieren Sie sich die „Anwendungs-ID (Client-ID)“.
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-002.png)<br/>

Gehen Sie zu API-Berechtigungen, um eine Berechtigung hinzuzufügen.
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-003.png)<br/>

Klicken Sie auf „Microsoft Graph“ und „Anwendungsberechtigungen“. <br/>
Suchen Sie nach „site“ und fügen Sie die Berechtigung hinzu: Sites.ReadWrite.All<br/>

 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-004.png)<br/>

Klicken Sie erneut auf „SharePoint“ und „Anwendungsberechtigungen“. <br/>
Wählen und fügen Sie beide Berechtigungen hinzu: Sites.ReadWrite.All und Sites.Manage.All. <br/>

 ![ExFlow SharePoint Setup](../../images/sharepoint-setup-005.png)<br/>

Erteilen Sie die Admin-Zustimmung für diese Berechtigungen:

 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-006.png)<br/>

Die Berechtigungen sollten wie folgt aussehen:
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-007.png)<br/>

Gehen Sie zu „Zertifikate & Geheimnisse“.
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-008.png)<br/>

Erstellen Sie ein Client-Geheimnis:
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-009.png)<br/>

Kopieren und/oder speichern Sie das Geheimnis. Das Geheimnis wird nicht mehr sichtbar sein. Wenn das Geheimnis vergessen oder verlegt wird, erstellen Sie ein neues Geheimnis und konfigurieren Sie die OAuth2-Anwendung neu.
 
![ExFlow SharePoint Setup](../../images/sharepoint-setup-010.png)<br/>

Gehen Sie zurück zur Liste der App-Registrierungen und klicken Sie auf Endpunkte.
Kopieren Sie sowohl die OAuth2.0 v2 Endpunkte; Autorisierung und Token. Kopieren Sie auch den Microsoft Graph API-Endpunkt.
<br/>

![ExFlow SharePoint Setup](../../images/sharepoint-setup-011.png)<br/>

Abgeschlossen mit Entra oder Azure AD oder AAD.<br/><br/>

### Konfigurieren einer OAuth2-Anwendung in ExFlow

Gehen Sie zu: **ExFlow Setup --> Aktionen --> Funktionen --> OAuth2-Anwendungen**

Starten Sie die Konfiguration, indem Sie auf „Neu“ klicken, um eine neue OAuth 2.0-Anwendung zu erstellen.
 

| OAuth 2.0 Anwendungen|![ExFlow SharePoint Setup](../../images/oauth-application-001.png)
|:-|:-|
|**Zugriffstoken anfordern**|Öffnen Sie die Service-Autorisierungs-Webseite. Anmeldeinformationen werden abgefragt. Der Autorisierungscode muss in das Feld Autorisierungscode eingeben kopiert werden.
|**Zugriffstoken aktualisieren**|Aktualisieren Sie die Zugriffs- und Aktualisierungstoken.
<br/>

![ExFlow SharePoint Setup](../../images/oauth-application-002.png)<br/>

|Allgemein||
|:-|:-|
|**Code**|Gibt den Namen des Codes an
|**Beschreibung**|Gibt die Beschreibung des Codes an
|**Anwendungs-/Client-ID**| Gibt die Anwendungs-ID aus der Übersicht der Unternehmensanwendung an.
|**Client-Geheimnis**| Gibt das Client-Geheimnis an
|**Grant-Typ**| Gibt den zu verwendenden Grant-Typ an. Es ist möglich, Autorisierungscode, Passwort-Anmeldeinformationen oder Client-Anmeldeinformationen zu verwenden. Derzeit wird nur „Client-Anmeldeinformationen“ unterstützt.
|**Umleitungs-URL**| Gibt die Umleitungs-URL an, derzeit nicht in Gebrauch.
|**Scope**| Gibt den Scope an. Geben Sie den Graph-Endpunkt ein und fügen Sie „.default“ hinzu. Stellen Sie sicher, dass der Endpunkt am Ende wie folgt aussieht: „…soft.com/.default“

<br/>

|Endpunkte||
|:-|:-|
|**Autorisierungs-URL**| Gibt die Autorisierungs-URL an
|**Zugriffstoken-URL**| Gibt die Zugriffstoken-URL an
|**Auth. URL Parms**| Gibt die Ressourcen-URL an, derzeit nicht in Gebrauch.

<br/>

Geben Sie alle erforderlichen Setup-Informationen ein. Geben Sie einen Code und eine Codebeschreibung ein. Fügen Sie die Application/Client-ID und das Client Secret aus dem MS Entra Admin Center ein.

Setzen Sie den Grant Type auf ''Client Credentials'' und die MS Graph Scope URL (Microsoft Graph API). <br/>

![ExFlow SharePoint Setup](../../images/oauth-application-003.png)<br/>

Unter dem Abschnitt Endpoint fügen Sie die zuvor kopierten URLs für sowohl den OAuth2.0 v2 Authorization Endpoint als auch den Token Endpoint ein. <br/>

Testen Sie, indem Sie auf „Request Access Token“ drücken. Folgende Meldung sollte angezeigt werden, wenn alles korrekt ist: „Access Token updated successfully.“ <br/>

### SharePoint Setup
Erstellen Sie in Site Contents eine neue Dokumentbibliothek, die den Ordner enthält, in dem ExFlow Daten speichert. Erstellen Sie einen Ordner in der gerade erstellten Dokumentbibliothek. Dies wird der Speicherort der Dokumente sein. Klicken Sie auf den neu erstellten Ordner. Kopieren Sie die vollständige URL aus dem Adressfeld im Browser, diese wird in der folgenden Konfiguration benötigt.

### Blob Storage Setup für SharePoint

Gehen Sie zu: **ExFlow Setup -- > Actions --> Functions --> Blob Storage Mgmt (ExFlow Storage Management Setup)** 

| Blob Storage Mgmt / ExFlow Storage Management Setup |![ExFlow SharePoint Setup](../../images/storage-setup-002.png)
|:-|:-|
|**Storage Setup**|Konfigurieren Sie eine oder mehrere Speicher-Konfigurationen
|**Enable/ Disable Blob Storage**|Aktivieren oder deaktivieren Sie den Blob-Speicher

<br/>

Klicken Sie auf der Seite ExFlow Storage Management Setup auf **Storage Setup** und dann auf „New“, um mit der Konfiguration zu beginnen.

![ExFlow SharePoint Setup](../../images/storage-setup-006.png)<br/>

Geben Sie einen Code und eine Beschreibung ein. Wählen Sie für Blob Source SharePoint.<br/>

Klicken Sie dann auf **Setup Storage**, um die Konfiguration fortzusetzen.

![ExFlow SharePoint Setup](../../images/storage-setup-003.png)<br/>

Kopieren Sie die URL von SharePoint und fügen Sie diese in das Feld ''SharePoint URL'' ein. Sobald Sie das Feld verlassen, werden Werte extrahiert und in Host, Site, Document Library und Folder eingefügt. Wenn eines der Felder fehlt, höchstwahrscheinlich Folder, können diese manuell eingegeben werden. <br/>

![ExFlow SharePoint Setup](../../images/storage-setup-004.png)<br/>

Wählen Sie die zuvor erstellte OAuth2-Anwendung aus und verifizieren Sie, indem Sie auf „Connect“ klicken. <br/>

Wenn etwas falsch ist, wie z.B. der Ordnername, erscheint eine Meldung wie „Not Found“. <br/>

Wenn Berechtigungen fehlen, erscheint eine Meldung wie „Unauthorized“. <br/>

Wenn alles in Ordnung ist, wird der SharePoint Connection Status auf „Connected“ gesetzt und Parameter werden in Site Id, Drive Id und List Id eingefügt. <br/>

Es ist jetzt in Ordnung, diese Seite zu schließen, da das Blob Storage Setup für SharePoint abgeschlossen ist. <br/>

Gehen Sie zurück zu **ExFlow Storage Setup**, um dieses Setup zu aktivieren, indem Sie auf „Enabled“ klicken. <br/>

![ExFlow SharePoint Setup](../../images/storage-setup-007.png)<br/>

Schließen Sie ExFlow Storage Setup und kehren Sie zu ExFlow Storage Management Setup / Blob Storage Mgmt zurück.<br/>

Wählen Sie das neu erstellte SharePoint-Setup im Feld „Incoming Doc. Storage Code“ aus. <br/>

![ExFlow SharePoint Setup](../../images/storage-setup-008.png)<br/>

Klicken Sie auf „Active“ oder „Enable / Disable Blob Storage“. <br/>

![ExFlow SharePoint Setup](../../images/storage-setup-010.png)<br/>

Wenn bereits gebuchte Rechnungen mit ExFlow genehmigt wurden, wird ein Dialog angezeigt, der fragt, ob diese übertragen werden sollen. Es ist dann möglich, „Ja“ zu wählen. <br/>

Es ist jetzt möglich, den Status für gebuchte Rechnungen im Blob-Speicher zu überprüfen, indem Sie „Actions --> Storage Details“ auswählen. <br/>

Klicken Sie auf „Sync Storage“, um eine Übertragung nach SharePoint zu erzwingen. <br/>

![ExFlow SharePoint Setup](../../images/storage-setup-009.png)<br/>

Aktualisieren Sie die SharePoint-Seite mit dem zuvor erstellten Ordner, es sollte jetzt möglich sein, die neuen Ordner dort zu sehen. <br/>

![ExFlow SharePoint Setup](../../images/storage-setup-005.png)<br/>

