---
title: Vertrauliche Dokumente
sidebar_position: 30
hide_title: true
---
## Vertrauliche Dokumente

Es gibt Fälle, in denen es notwendig ist, vertrauliche Dokumente zur Genehmigung in ExFlow Web nur bestimmten Benutzern zu senden. Diese Dokumente sollten für andere Benutzer, die nicht Teil des Genehmigungsprozesses sind, weder zugänglich noch durchsuchbar sein.

Gehe zu: **ExFlow Setup --> Vertrauliche Dokumente**

Um mit der vertraulichen Funktionalität arbeiten zu können, muss eine Vorlage im PDF-Format hochgeladen werden, um das ursprüngliche vertrauliche Dokumentenbild für nicht-vertrauliche Benutzer zu verbergen.

Es wird nicht möglich sein, vertrauliche markierte Dokumente zur Genehmigung zu erstellen und zu versenden, ohne eine hochgeladene PDF-Vorlage zu haben.

Klicken Sie auf die drei Punkte, um die ausgewählte Vorlage anzuhängen.

![Vertrauliche Dokumente](../../images/exflow-setup-confidential-documents-001.png)

Wenn nachträglich Änderungen an der PDF-Vorlage vorgenommen werden müssen, z.B. das aktuelle hochgeladene Template herunterladen oder das aktuelle Template ersetzen, gehen Sie einfach zurück zu den drei Punkten und nehmen Sie die notwendigen Änderungen vor.

![Vertrauliche Dokumente](../../images/exflow-setup-confidential-documents-002.png)

| Original-PDF ersetzen durch |    |
|:-|:-|
|**Aktuelles PDF herunterladen** | Wählen Sie diese Option, um das aktuell hochgeladene PDF-Bild herunterzuladen.
|**Aktuelles PDF ersetzen** | Wählen Sie diese Option, um das aktuell hochgeladene PDF-Bild zu ersetzen.
|**Aktuelles PDF löschen** | Wählen Sie diese Option, um das aktuell hochgeladene PDF-Bild zu löschen. Beachten Sie, dass beim Löschen dieser Vorlage alle vertraulichen markierten Dokumenten-PDF-Bilder für alle Benutzer angezeigt werden.

### Vertraulicher Zugriff
Um mit vertraulichen Dokumenten arbeiten und das Dokumentenbild in Business Central sehen zu können, muss der ExFlow-Benutzer einen zugeordneten Systembenutzer haben und der vertrauliche Zugriff muss gewährt werden. <br/>

#### Vertraulichen Zugriff gewähren

Für den Zugriff gehen Sie zur **ExFlow-Benutzerkarte** und aktivieren Sie das Kontrollkästchen **‘’Zugriff auf vertrauliches Dokument’’**. Wenn Sie dies aktivieren, wird automatisch ein Benutzerberechtigungssatz namens EX CONFIDENTIAL auf der zugehörigen Systembenutzerkarte festgelegt.

![Vertrauliche Dokumente](../../images/exflow-user-confidential-access-001.png)

Vertraulicher Zugriff kann für alle Unternehmen oder ausgewählte Unternehmen festgelegt werden. Wählen Sie ‘’Ja’’, um Zugriff auf alle Unternehmen zu gewähren, oder wählen Sie ‘’Nein’’, um Zugriff auf ein bestimmtes Unternehmen zu gewähren.

![Vertrauliche Dokumente](../../images/exflow-user-confidential-access-002.png)

Wenn ein Benutzer versehentlich vertraulichen Zugriff auf alle Unternehmen anstelle eines bestimmten Unternehmens erhalten hat, deaktivieren Sie einfach das Kontrollkästchen, um den vertraulichen Zugriff zu entfernen, und wählen Sie das spezifische Unternehmen erneut aus. Der Berechtigungssatz auf dem zugehörigen Systembenutzer wird sofort aktualisiert.

![Vertrauliche Dokumente](../../images/exflow-user-confidential-access-003.png)

Der untenstehende ExFlow-Benutzer hat nun Zugriff auf alle vertraulichen Dokumente im Unternehmen SignUp.

![Vertrauliche Dokumente](../../images/exflow-user-confidential-access-004.png)

#### Stellvertreter
Das Hinzufügen eines nicht-vertraulichen Benutzers als Stellvertreter für einen vertraulichen Benutzer wird nicht unterstützt, um die vertraulichen Dokumentenbilder zu schützen.

### Vertrauliche Genehmigung

Vertrauliche Dokumente benötigen einen vertraulichen Genehmigungsablauf. Ein regulärer Genehmigungsablauf kann nicht angewendet werden.

#### Erstellen eines vertraulichen Genehmigungsablaufs

Gehen Sie zu einer regulären ExFlow-Genehmigungsregel, um Regeln zu erstellen, die für vertrauliche Dokumente angewendet werden sollen.
Vertrauliche Dokumente erfordern eine als ‘’Vertrauliche Genehmigung’’ markierte Genehmigungsregel.

Wenn die vertrauliche Genehmigung in einer Genehmigungsregel aktiviert ist, wird ein Filter auf die Genehmigungsregellinien gesetzt, sodass nur Genehmigungsgruppen mit vertraulichem Zugriff in den vertraulichen Genehmigungsablauf aufgenommen werden können.

Das Aktivieren der vertraulichen Genehmigung deaktiviert auch automatisch die Genehmigungsregel. Der Grund dafür ist, dass vertrauliche Genehmigungen manuell ausgewählt werden müssen und nicht dynamisch festgelegt werden dürfen.

Laut dieser Regel der Pensionsagentur ist nur Jane zur Genehmigung der kommenden Pensionsdokumente auf ExFlow Web festgelegt.

![Vertrauliche Dokumente](../../images/approval-rule-confidential-approval-001.png)

### Vertraulicher Workflow
Sowohl Benutzer mit als auch ohne vertraulichen Zugriff können mit vertraulichen Dokumenten in Business Central arbeiten. Allerdings können nur Benutzer mit Zugriff das ursprüngliche Dokumenten-PDF-Bild sehen.

Ein Beispiel folgt sowohl für Benutzer mit Zugriff auf vertrauliche Dokumente als auch für nicht-vertrauliche Benutzer.

Vertrauliche Felder sind standardmäßig auf allen ExFlow-Seiten ausgeblendet. Um zu beginnen, verwenden Sie die Personalisierung, um das Feld **‘’Vertrauliches Dokument’’** zur Importjournal-Überschrift und anderen relevanten Seiten hinzuzufügen.

![Vertrauliche Dokumente](../../images/import-journal-confidential-001.png)

Wenn ein Dokument als vertrauliches Dokument behandelt werden soll, aktivieren Sie einfach das Kontrollkästchen ‘’Vertrauliches Dokument’’ auf dem ausgewählten Dokument.

Wenn das Dokument als vertraulich markiert ist, sind reguläre Genehmigungsregeln nicht anwendbar, und die Liste der Genehmigungsregeln wird auf Regeln gefiltert, bei denen ''Vertrauliche Genehmigung'' aktiviert ist.

Für dieses untenstehende Beispiel sind nur zwei vertrauliche Regeln anwendbar.

Vertraulich markierte Genehmigungsregeln müssen manuell ausgewählt werden. Zur Wiederholung: Diese Regeln sind nicht dynamisch und werden daher nicht automatisch auf Dokumente im Importjournal angewendet.

![Vertrauliche Dokumente](../../images/import-journal-confidential-002.png)

Es ist nicht zwingend erforderlich, eine Genehmigungsregel festzulegen, es ist weiterhin möglich, Genehmiger manuell im Genehmigungsvorschlag hinzuzufügen, wenn die Benutzer Zugriff auf vertrauliche Dokumente haben. Nicht-vertrauliche Benutzer sind nicht anwendbar und daher nicht auswählbar.

Darüber hinaus wird es nicht möglich sein, eine Genehmigungsgruppe auszuwählen, die sowohl vertrauliche als auch nicht-vertrauliche Benutzer enthält.

Lassen Sie uns ein Beispiel veranschaulichen. Wenn ein importiertes Dokument bereits eine Genehmigungsregel mit einem vorgeschlagenen Genehmigungsablauf hat und ein Benutzer das Kontrollkästchen Vertrauliches Dokument aktiviert, wird diese Frage auftauchen:

![Vertrauliche Dokumente](../../images/import-journal-confidential-003.png)

Benutzer ohne Zugriff auf vertrauliche Dokumente werden aus dem Genehmigungsablauf entfernt. Nur Benutzer mit Zugriff bleiben, wenn sie manuell zum Ablauf hinzugefügt wurden.

Da Alicia und Theodora keine Benutzer mit Zugriff sind, werden sie entfernt.

Verwenden Sie eine ‘’Vertrauliche Regel’’ (vertrauliche Genehmigung) oder fügen Sie autorisierte Benutzer manuell als Genehmiger hinzu und erstellen Sie das Dokument wie gewohnt. Das Dokument wird dann an den gewünschten Genehmiger gesendet. <br/>

#### Vertrauliche Dokumente erneut in Rechnung stellen
Die Funktionalität Vertrauliche Dokumente kann nicht zusammen mit der Funktionalität zur erneuten Rechnungsstellung verwendet werden. In diesem Fall wird die folgende Aktionsmeldung in den Import-Journalzeilen angezeigt: ''Die Funktionalität zur erneuten Rechnungsstellung kann nicht zusammen mit vertraulichen Dokumenten verwendet werden''

#### Automatisieren vertraulicher Dokumente in der Lieferanteneinrichtung
Wenn alle Dokumente für einen bestimmten Lieferanten vertraulich sein sollen und denselben Genehmigungsablauf und dieselbe Kodierung usw. haben, kann dies einfach über die Lieferanteneinrichtungskarte arrangiert werden, neben anderen aktuellen Automatisierungsfunktionen, um den vertraulichen Workflow sowohl effizient als auch vertrauenswürdig zu gestalten.

Wenn der Lieferant jedoch nicht zur Handhabung vertraulicher Dokumente markiert ist, ist es nicht möglich, einen automatisierten vertraulichen Workflow zu nutzen.

![Vertrauliche Dokumente](../../images/vendor-setup-confidential-001.png)

### Vertrauliche Dokumente im Genehmigungsstatus
Wie erwähnt, können Benutzer mit Zugriff auf vertrauliche Dokumente die vertraulichen Dokumente anderer Benutzer in Business Central wie gewohnt anzeigen und bearbeiten.

![Vertrauliche Dokumente](../../images/confidential-documents-approval-status-001.png)

### Workflow als nicht-vertraulicher Benutzer
Benutzer ohne Zugriff auf vertrauliche Dokumente können das Original-PDF-Bild in der PDF-Vorschau nicht sehen.

Nicht-vertrauliche Benutzer können nur das PDF-Vorlagenbild anzeigen, das gemäß den in der ExFlow-Einrichtung hinzugefügten Einstellungen angezeigt wird. Dies dient dem Zweck, das Originaldokumentbild zu verbergen und zu schützen.

In diesem Beispiel wird dies ihr anzuzeigendes Bild sein:

![Vertrauliche Dokumente](../../images/import-journal-confidential-004.png)

Wenn der Benutzer auf Dokumentenbild anzeigen klickt oder die Tastenkombination Strg+I verwendet, wird die folgende Meldung angezeigt:

![Vertrauliche Dokumente](../../images/import-journal-confidential-005.png)

#### Ein Dokument oder einen Lieferanten von der Markierung als vertraulich abwählen
Nicht-vertrauliche Benutzer können ''Vertrauliches Dokument'' für einen Lieferanten in der Lieferanteneinrichtung aktivieren, jedoch nicht umgekehrt.

Wenn ein Dokument fälschlicherweise von einem nicht-vertraulichen Benutzer als "Vertrauliches Dokument" gekennzeichnet wird, kann dies nur von einem Benutzer mit Zugriff rückgängig gemacht werden. Wenn dies geschehen ist und ein Benutzer das Dokument überprüft, wendet ExFlow automatisch eine reguläre Genehmigungsregel dynamisch an, falls eine anwendbare Regel existiert.

![Vertrauliche Dokumente](../../images/import-journal-confidential-006.png)

### Vertrauliche Dokumente auf der ExFlow-Webseite
Im Gegensatz zur Arbeit in Business Central mit vertraulichen Dokumenten ist die Arbeit im Web eingeschränkter.

Wenn ein Dokument zur Genehmigung gesendet wird, kann der Web-Genehmiger leicht erkennen, dass es sich um ein vertrauliches Dokument handelt, da neben der Dokumentnummer ein sichtbares Tag angezeigt wird.
![Vertrauliche Dokumente](../../images/confidential-documents-web-001.png)

Benutzer können keine Kodierungen ändern, keine Genehmiger hinzufügen oder das vertrauliche Dokument an einen anderen Benutzer weiterleiten. Ein vertrauliches Dokument kann nur genehmigt, abgelehnt oder zurückgestellt werden.

Im folgenden Beispiel versucht der Genehmiger, eine Dimension einzugeben und erhält diese Fehlermeldung, da Kodierungsänderungen nicht erlaubt sind.

![Vertrauliche Dokumente](../../images/confidential-documents-web-002.png)

Es ist auch nicht erlaubt, nach einem anderen vertraulichen Dokument zu suchen, bei dem die Benutzer selbst nicht Teil des Genehmigungsablaufs sind.

Wenn ein Genehmiger (unabhängig vom vertraulichen Zugriff) beispielsweise versucht, nach einem vertraulichen Dokument zu suchen, ohne in den Ablauf involviert zu sein, bleibt das Suchergebnis leer.

![Vertrauliche Dokumente](../../images/confidential-documents-web-003.png)
