---
title: ExFlow Auftragsstatus
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## ExFlow Auftragsstatus

Gehen Sie zu: ***ExFlow Auftragsstatus***

Wenn ein Auftrag oder Angebot zur Genehmigung markiert ist, ist er im
ExFlow Auftragsstatus und im ExFlow Genehmigungsstatus zu finden. Wenn ein Auftrag oder
Angebot freigegeben wird, ändert sich der Status von Inaktiv zu Aktiv.
Nicht freigegebene Aufträge oder Angebote haben den Status Inaktiv und können nicht auf
ExFlow Web eingesehen werden.

### Auftrags- und Angebotsgenehmigungseinrichtung

Gehen Sie zu: ***ExFlow Setup --> Bestell- und Angebotsgenehmigung***

![ExFlow Setup - Bestell- und Angebotsgenehmigung](../../images/exflow-setup-order-and-quote-approval-001.png)

|Bestell- und Angebotsgenehmigung||
|:-|:-|	
|**Bestellungsgenehmigung**| 	Gibt an, ob die Bestellungsgenehmigung verwendet werden soll. <br/> Um automatisch ein Genehmigungsflag für alle Auftragsdokumente hinzuzufügen, muss die "Bestellungsgenehmigung" aktiv sein. Außerdem wird für die Genehmigung eines Auftrags in ExFlow Web ein PDF benötigt.
|**Auftragsberichts-ID**| 	Gibt die Berichts-ID für den Bericht an, der beim Erstellen von Auftragsdokumenten verwendet wird
|**Auftragsberichtsname**| 	Gibt den Berichtsnamen für den Bericht an, der beim Erstellen von Auftragsdokumenten verwendet wird. <br/> Um einen Auftrag zur Genehmigung an ExFlow Web zu senden, wird ein PDF benötigt. Wählen Sie einen Bericht in der Liste aus, um das Auftrags-PDF ansehen zu können.
|**Nur genehmigte Bestellung empfangen**| Aktivieren Sie die Einstellung ''Nur genehmigte Bestellung empfangen'', um das Buchen von Wareneingang zu verhindern, wenn der Auftrag noch nicht genehmigt ist.<br/><br/> Die folgende Fehlermeldung erscheint, wenn diese Einstellung aktiviert ist und ein Benutzer versucht, Wareneingänge für einen nicht genehmigten Auftrag zu buchen. <br/><br/> ![ExFlow Setup - Bestell- und Angebotsgenehmigung](../../images/unapproved-order-card-only-receive-approved-order-error-message-001.png)
|**Angebotsgenehmigung**| Um automatisch ein Genehmigungsflag für alle Angebote hinzuzufügen, muss die "Angebotsgenehmigung" aktiv sein.<br/> Um ein Angebot zur Genehmigung an ExFlow Web zu senden, wird ein PDF benötigt.
|**Angebotsberichts-ID**| 	Gibt die Berichts-ID für den Bericht an, der beim Erstellen von Angebotsdokumenten verwendet wird. Um ein Angebot zur Genehmigung an ExFlow Web zu senden, wird ein PDF benötigt.<br/> Wählen Sie einen Bericht in der Liste aus, um das Angebots-PDF ansehen zu können.
|**Angebotsberichtsname**| 	Gibt den Berichtsnamen für den Bericht an, der beim Erstellen von Angebotsdokumenten verwendet wird
|**Automatische Genehmigung von Aufträgen aus Angeboten**| Diese Einstellung ist relevant, wenn sowohl die Auftragsgenehmigung als auch die Angebotsgenehmigung aktiviert sind. Mit dieser Funktion ist es möglich, die automatische Genehmigung von Aufträgen aus Angeboten zu aktivieren. Wenn diese Einstellung verwendet wird, werden alle Genehmiger aus dem Angebot in den Auftrag kopiert und der Auftrag wird sofort genehmigt.
|**Aktuellen Benutzer als Standard-Erstgenehmiger für Auftrag/Angebot festlegen**| Verwenden Sie diese Funktion, um den Benutzer, der das Angebot oder den Auftrag erstellt, als Erstgenehmiger des Dokuments hinzuzufügen.<br/><br/> Abhängig von der ExFlow-Einrichtung kann der Erstgenehmiger als Filter in Genehmigungsregeln verwendet werden, um Genehmigungsabläufe für Angebote und Aufträge zu erstellen. Der Erstgenehmiger kann auch ein tatsächlicher Genehmiger sein.<br/><br/> Um diese Funktion zu nutzen, muss der Business Central-Benutzer ein ExFlow-Systembenutzer sein. Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/exflow-user).
|**Rechnung im Importjournal blockieren, wenn Auftrag nicht genehmigt ist**| 	Gibt an, ob die Rechnung blockiert werden soll, wenn der zugehörige Auftrag nicht genehmigt ist. Diese Einstellung fügt eine Warnmeldung hinzu, wenn das Dokument mit einem nicht genehmigten Auftrag abgeglichen wird. <br/><br/> In diesem Beispiel wird der Wareneingang gebucht, auch wenn der Auftrag nicht genehmigt ist.<br/><br/> Wenn die Rechnung im Importjournal abgeglichen wird, informiert eine Warnmeldung darüber, dass die empfangenen Auftragszeilen nicht genehmigt sind.<br/><br/> ![ExFlow Import Journal - Warnmeldungen](../../images/image286.png)<br/><br/> Wie bei anderen Warnmeldungen im Importjournal kann dies durch Akzeptieren der Meldung behoben werden:<br/><br/> ![ExFlow Import Journal - Warnmeldungen](../../images/image287.png)<br/><br/> 
|**Mindestanzahl von Genehmigern für Angebote und Aufträge überprüfen**| 	Gibt an, ob die Einstellung für "Mindestanzahl von Genehmigern", die unter dem Tab "Dokumentenbuchungsprüfungen" zu finden ist, auch für Angebote und Aufträge gilt.
|**Angebots-PDF in Auftrag kopieren**| 	Eine Kopie des Angebots-PDF-Anhangs wird dem Auftrag hinzugefügt, wenn der Auftrag erstellt wird.<br/><br/> Nachdem der Auftrag aus einem Angebot erstellt wurde, kann die Kopie des Angebots-PDF-Anhangs als eingehende Dokumentdatei im ExFlow Auftragsstatus und im ExFlow Genehmigungsstatus sowie als Anhang in ExFlow Web gefunden werden.
|**Drucken/Senden von nicht genehmigten Dokumenten blockieren**| Diese Einstellung gibt an, ob das Drucken oder Senden von einem Auftrag, einem Angebot oder beidem blockiert werden soll, wenn der Auftrag oder das Angebot zur Genehmigung gesendet und nicht vollständig genehmigt wurde.<br/><br/>Diese Einstellung ist nur für Benutzer relevant, die keine Berechtigungen als EX ACCOUNTANT oder EX ADMIN haben.<br/><br/>Benutzer mit den Berechtigungssätzen EX ACCOUNTANT oder EX ADMIN können diese Funktion immer nutzen, auch wenn das Dokument nicht vollständig genehmigt ist. <br/><br/> In diesem Beispiel verwendet ein Benutzer, der keine Berechtigung als EX ACCOUNTANT oder EX ADMIN hat, die Aktion Drucken/Senden für ein nicht vollständig genehmigtes Dokument und erhält eine Fehlermeldung. <br/><br/> ![Auftrag - Drucken und Senden blockieren](../../images/purchase-order-001.png)
|**E-Mail für genehmigten Auftrag/Angebot senden**|  	Wenn diese Option aktiviert ist, wird eine Benachrichtigung über den genehmigten Auftrag oder das genehmigte Angebot an den Ersteller des Dokuments gesendet, wenn das Dokument genehmigt wurde.  <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Genehmigter Auftrag/Angebot***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#approved-orderquote)
|**Erinnerung an nicht empfangenen Auftrag für genehmigten Auftrag senden**|  	Eine Erinnerung an nicht empfangene Aufträge wird gesendet, wenn das Dokument genehmigt ist und nicht alle Auftragszeilen vollständig empfangen wurden. Damit dies funktioniert, sollte "Dokumente abgleichen mit" auf "Wareneingang" eingestellt sein. <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Nicht empfangener Auftrag - Genehmigt***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#unreceived-order---approved)


### Erstellung eines Angebots oder Auftrags zur Genehmigung

Beim Erstellen eines Angebots oder Auftrags wird aufgrund der Einstellungen das
Genehmigungsflag aktiviert und der ExFlow-Status auf Inaktiv gesetzt.

Um das Angebot/den Auftrag zur Genehmigung zu senden, benötigt es Genehmiger und muss
freigegeben werden. Das Angebot/der Auftrag ist nun sowohl im ExFlow Auftragsstatus als auch
im ExFlow Genehmigungsstatus sichtbar, jedoch noch nicht in ExFlow Web.

Wenn der Business Central-Benutzer, der das Angebot/den Auftrag erstellt, mit
einem ExFlow-Benutzer verbunden ist, wird der Erstgenehmiger automatisch auf
allen Zeilen hinzugefügt und kann daher als Filter in Genehmigungsregeln verwendet werden.

### ExFlow Genehmigungsstatus

Aufträge und Angebote, die noch eine Aktion erfordern, können im
ExFlow Genehmigungsstatus gefunden werden. Nach der Genehmigung führen Sie "Änderungen überprüfen" aus, um die
Aufträge oder Angebote mit etwaigen Änderungen zu aktualisieren.

Wenn ein Angebot genehmigt und überprüft wurde, verschwindet es aus dem
Genehmigungsstatus.

ExFlow erstellt automatisch einen Auftrag. Das Angebot wird gelöscht, wie es im
Business Central Standard der Fall ist, während der Genehmigungsablauf, Kommentare,
Anhänge usw. im ExFlow Genehmigungsstatus-Verlauf gespeichert werden.

Aufgrund der Einstellungen in ExFlow Setup kann der Genehmigungsablauf des Angebots auch
auf den Auftrag kopiert und der Auftrag als genehmigt markiert werden. Wenn nicht, und
die Auftragsgenehmigung aktiviert ist, muss der Auftrag freigegeben werden.

Das Angebot kann nicht in einen Auftrag umgewandelt werden, wenn es zur
Genehmigung aktiviert, aber noch nicht genehmigt ist. Die Funktion wird "Auftrag erstellen" genannt.

Wenn ein Auftrag genehmigt und überprüft wurde, verschwindet er aus dem
Genehmigungsstatus und kann nun im ExFlow Auftragsstatus gefunden werden.

![ExFlow Genehmigungsstatus](../../images/image288.png)

### ExFlow Auftragsstatus

Diese Ansicht dient hauptsächlich der Nachverfolgung von Auftrags- und Angebotsgenehmigungen.

Im ExFlow Auftragsstatus bleiben die Aufträge oder Angebote so lange bestehen,
wie sie als Karte existieren.

Der Auftrag oder das Angebot muss noch auf ExFlow Web genehmigt und dann
aus dem ExFlow Genehmigungsstatus überprüft werden.

Nach der Überprüfung des Auftrags wird das Feld "Auftrag genehmigt und überprüft" aktiviert. In dieser Hinsicht verhalten sich Aufträge und Angebote unterschiedlich, da
Angebote direkt entfernt werden, wenn der Auftrag erstellt wird, während Aufträge als
fakturiert angezeigt werden, bis sie durch einen Job in Business Central
Standard entfernt werden.

![ExFlow Auftragsstatus](../../images/image289.png)

Verfolgen Sie den aktuellen Status in der Spalte "Status" im ExFlow Auftragsstatus.

![ExFlow Auftragsstatus](../../images/image290.png)

Es ist auch möglich zu sehen, ob der Auftrag aus einem Angebot erstellt wurde und ob
die Genehmigung vom Angebot auf den Auftrag kopiert wurde.

![ExFlow Auftragsstatus](../../images/image291.png)

#### Einen Auftrag löschen
Um einen Auftrag zu löschen, muss der Auftrag vollständig empfangen und
vollständig fakturiert sein. Das Löschen eines Auftrags erfolgt über die Aufgabe ***Invoiced
Purchase Order löschen***. Der Auftrag wird auch gelöscht, wenn er
direkt aus der Auftragskarte in Business Central Standard außerhalb von ExFlow
fakturiert wird.

Beim Löschen eines Auftrags, der genehmigt und vollständig fakturiert ist, werden
Genehmigungsablauf, Kommentare und Anhänge usw. im ExFlow
Genehmigungsstatus-Verlauf gespeichert.
