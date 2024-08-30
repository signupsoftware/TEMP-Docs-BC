---
title: Verkaufsauftrag Einrichtung
sidebar_position: 1
hide_title: true
---
## Verkaufsauftrag in ExFlow Data Capture Account konfigurieren

Gehe zu: **ExFlow Data Capture Account**

Bitte beachten Sie, dass für die Arbeit mit sowohl Einkaufs- als auch Verkaufsdokumenten zwei separate Anmeldungen für ExFlow Data Capture (EDC) erforderlich sind.<br/>

Um Verkaufsaufträge in Business Central importieren zu können, muss ein neues ExFlow Data Capture Verkaufskonto eingerichtet werden.


![ExFlow Data Capture Account](./../../images/exflow-data-capture-account-card-sales-001.png) <br/>


**Konfigurationsschritte:**
Navigieren Sie zu den ExFlow Data Capture Accounts, um auf die Konfiguration zuzugreifen.
Klicken Sie auf Neu, um eine neue Verbindung zu initiieren.

Geben Sie der Verbindung einen geeigneten Code und wählen Sie den Verbindungstyp: *Verkauf*

**Verbindungsdetails:**
Um die Verbindung abzuschließen, stellen Sie sicher, dass Sie die folgenden Verbindungsdetails haben, um eine Verbindung zu EDC herzustellen. Diese werden von Signup Software oder Ihrem vertrauenswürdigen Business Central Partner bereitgestellt.

- *Benutzername*
- *Passwort*
- *Autorisierungsschlüssel*

**Standard EDC-Dokumentenvorlagen**
Wählen Sie die Dokumentenvorlage aus, die von EDC zur Interpretation verwendet wird.

**Datenaustauschtyp**
Wählen Sie "EDC2EXFSO", den Standardaustauschtyp für EDC-Verkaufsaufträge.

**Unternehmensauswahl:**
Die Konfiguration der ExFlow Data Capture Accounts ermöglicht die Verwendung derselben Anmeldeinformationen für alle Unternehmen in Business Central.
Dies liegt daran, dass das Benutzerkonto Zugriff auf alle Unternehmen in EDC hat.<br/>
*Wichtig:* Wählen Sie während der Konfiguration das richtige Unternehmen als Käufer und Masterdatenfilter aus, um sicherzustellen, dass die Verbindung mit dem beabsichtigten Unternehmen hergestellt wird.

**Abschließende Konfiguration:**
Überprüfen Sie die eingegebenen Details, bevor Sie den Konfigurationsprozess abschließen.
Aktivieren Sie die Synchronisierung der Stammdaten, um den Upload der Kundendaten zu ermöglichen.
Aktivieren Sie schließlich "Aktivieren" und akzeptieren Sie eventuelle Meldungen.
Testen Sie die Verbindung, um eine erfolgreiche Integration zwischen Business Central und ExFlow Data Capture zu gewährleisten.


### Verkaufsauftragsimport Einrichtung
Gehe zu: **ExFlow Verkaufsauftragsimport Einrichtung**

Der nächste Schritt besteht darin, einige Parameter in der *ExFlow Verkaufsauftragsimport Einrichtung* festzulegen.

![ExFlow Verkaufsauftragsimport Einrichtung](./../../images/sales-order-import-setup001.png) 

| Allgemein      |   | 
|:-|:-|
| **Dummy-Artikelnummer für Verkaufsauftragsimport:**                        | Gibt die Dummy-Artikelnummer an, die verwendet werden soll, falls keine andere Übereinstimmung für die importierte Verkaufsauftragsposition vorhanden ist.
**OCR-Mapping automatisch aktualisieren, wenn Dummy-Artikel angewendet wird**     | Gibt an, ob das OCR-Mapping automatisch aktualisiert wird, wenn der Benutzer nach der Anwendung des Dummy-Artikels eine Auswahl getroffen hat.
**Buchung auf Dummy-Artikel zulassen**                                     | Gibt an, ob die Buchung auf dem Dummy-Artikel zulässig ist.
**Ship-To-Adresscode erforderlich**                                  | Gibt an, ob das Feld "Ship to Address Code" erforderlich ist. Wenn diese Option aktiviert ist, muss ein Code ausgewählt werden, um den Verkaufsauftrag zu erstellen.
**Kontaktnummer erforderlich**                                           | Gibt an, ob das Feld "Kontaktnummer" erforderlich ist. Wenn diese Option aktiviert ist, muss ein Code ausgewählt werden, um den Verkaufsauftrag zu erstellen.
**Bestelldatum festlegen auf**                                               | Gibt an, auf welches Datum das Bestelldatum im Verkaufsauftrag festgelegt werden soll.


<br/>

Gehe zu: **ExFlow Verkaufsauftragsimport Einrichtung --> Verwandt --> ExFlow Verkaufsauftragsabgleich-Priorität**

Bearbeiten Sie die Liste, wenn eine Abgleichpriorität befolgt oder im Abgleichprozess ausgeschlossen werden soll.

![ExFlow Verkaufsauftragsabgleich-Priorität](./../../images/sales-order-matching-priority-001.png) 



Gehe zu: **ExFlow Verkaufsauftragsimport Einrichtung --> Verwandt --> Ship-To-Adressabgleich-Einrichtung**

Bearbeiten Sie die Liste, um Änderungen an den Pflichtfeldern der interpretierten Werte vorzunehmen, z. B. Kontaktname oder Lieferstadt. Wenn der interpretierte Wert nicht mit der Ship-To-Adresse des Kunden übereinstimmt, bleibt das importierte Dokument mit einem Fehler in der importierten Verkaufsliste und muss manuell bearbeitet werden.

Alle als obligatorisch gekennzeichneten Felder müssen erfüllt werden, um Fehler beim importierten Dokument zu vermeiden. Es muss beispielsweise ein Ship-to-Adressfilter ''Stadt'', ''E-Mail'' und ''Kontakt'' gemäß dem folgenden Beispiel ausgewählt werden. 


![Ship-To-Adressabgleich-Einrichtung](./../../images/sales-order-ship-to-adress-matching-setup-001.png)  

Darüber hinaus ist es möglich, mehrere Werte im Ship-to-Adressfilter hinzuzufügen. Fügen Sie beispielsweise im OCR-Feld ''Kontaktname'' den Filter ''Name, Kontakt und Telefonnummer'' im Ship-to-Adressfilter hinzu. Wenn also ein Kontaktname in EDC interpretiert wird, ist es möglich, beispielsweise eine Telefonnummer anstelle eines Namens zu interpretieren. Es ist auch möglich, mit der Interpretation von mehreren spezifischen Kontakten/Namen zu arbeiten. Solange die Informationen im Kundenstamm in Business Central vorhanden sind, wird das Verkaufsdokument beim Import verarbeitet und erstellt.  

![Ship-To-Adressabgleich-Einrichtung](./../../images/sales-order-ship-to-adress-matching-setup-002.png) 
