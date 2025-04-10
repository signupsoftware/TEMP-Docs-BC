---
title: Fehlerbehebung
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Fehlerbehebung
<br/>

### Häufige Einrichtungsprobleme

#### **Problem:** Die Produktbuchungsgruppe für die Mehrwertsteuer ist falsch.
**Lösung:** Die Produktbuchungsgruppe für die Mehrwertsteuer wird aus der Einrichtung des Sachkontos kopiert. Wenn keine Produktbuchungsgruppe für die Mehrwertsteuer im Sachkonto vorhanden ist, wird diese Gruppe aus der "Standard-Produktbuchungsgruppe für die Mehrwertsteuer" in der "ExFlow-Einrichtung" kopiert. Diese Einstellung finden Sie unter ***ExFlow-Einrichtung --> Allgemein.***
<br/>

#### **Problem:** Der Mehrwertsteuerbetrag ist nicht korrekt.
**Lösung:** Überprüfen Sie, ob der Betrag im Dokumentenkopf mit dem im PDF-Dokument übereinstimmt. Überprüfen Sie, ob die richtige "Produktbuchungsgruppe für die Mehrwertsteuer" verwendet wird. Ändern Sie die Zeilen bei Bedarf und überprüfen Sie, ob die Dokumentenzeilen mit dem Dokumentenkopf übereinstimmen.
<br/>

#### **Problem:** Der Benutzer kann keine Dokumente für ein neues Unternehmen auf der ExFlow-Webseite sehen.
**Lösung:** Fügen Sie den Firmennamen unter Berechtigungen auf der ExFlow-Benutzerkarte hinzu.
<br/>

### Häufige Aktionsmeldungen

#### **Aktionsmeldung:** Siehe Zeile für spezifische Aktionsmeldung.
**Aktionsmeldung beim Importieren von Zeilen:** Genehmiger fehlen.<br/>
**Lösung:** Genehmiger werden normalerweise automatisch durch Genehmigungsregeln usw. hinzugefügt. Wenn sie fehlen, ist es möglich, die Genehmigungsgruppe in der Dokumentenzeile im FactBox "Genehmigungsvorschlag" hinzuzufügen.
<br/>

#### **Aktionsmeldung:** Mehrwertsteuerbetrag (1291,60) entspricht nicht der Gesamtsumme der Zeilen (645,80).
**Lösung:** Überprüfen Sie, ob der Mehrwertsteuerbetrag korrekt interpretiert wurde. Überprüfen Sie die Importzeilen, sind die "Produktbuchungsgruppen für die Mehrwertsteuer" korrekt? Wenn nicht, ändern Sie diese in die richtigen.
<br/>

#### **Aktionsmeldung:** Doppelte Importkopfzeile im Journalstapel OCR - Vorkommen 2!
**Lösung:** Die Lieferantendokumentnummer wurde bereits in einem offenen Einkaufsdokument, Importjournal oder gebuchten Einkaufsrechnung verwendet. Wenn die Zeile ein echtes Duplikat ist, löschen Sie die Journalzeile.

Wenn die Nummer bereits verwendet wurde und dies korrekt ist, z.B. bei Miete / Versicherung / Abonnement, setzen Sie "Doppelte Rechnung zulassen" auf Ja auf der **ExFlow-Lieferanteneinrichtungskarte** unter dem Reiter Allgemein.
<br/>

#### **Aktionsmeldung:** Diese Rechnung ist als Factoring gekennzeichnet und darf daher nicht erstellt werden!
**Lösung:** Wenn der Benutzer diese Meldung erhält, sollte er sicherstellen, dass der "Lieferant" der Lieferant ist, von dem der Benutzer die Waren kauft, während der "Zahlungsempfänger" der Factoring-Lieferant ist. Wenn dies nicht der Fall ist, ändern Sie die Lieferantennummer.

Die Factoring-Lieferanteneinstellung finden Sie auf der **Lieferantenkarte --> Verwandt --> ExFlow-Lieferanteneinrichtung.**

Lesen Sie mehr darüber im Abschnitt [***ExFlow-Lieferanteneinrichtung***](https://docs.signupsoftware.com/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup).
<br/>

#### **Aktionsmeldung**: Betrag (XX) entspricht nicht der Gesamtsumme der Zeilen (YY).
**Lösung**: Überprüfen Sie die Einstellung in **ExFlow-Einrichtung -->** **PO-Abgleich --> Automatische Differenzzeile**, Einstellungen können beteiligt sein. Die Differenz entspricht nicht der Einstellung "Max. Differenzbetrag (LCY)" oder "Max. Differenz %" (oder beidem). Ändern Sie den Betrag im Kopf oder in den Zeilen.
<br/>

### Bestellbezogene Meldungen
####  **Aktionsmeldung**: Dokumentenbestellung XXX existiert nicht!
**Lösung**: Überprüfen Sie zunächst, ob diese Bestellnummer mit der auf dem gescannten Bild übereinstimmt. Wenn dies korrekt ist, gehen Sie zur Spalte "Bestellnummer" und überprüfen Sie diese Bestellnummern.
<br/>

####  **Aktionsmeldung:** Bestellnummer XX hat keine empfangenen Zeilen.
**Lösung:** Wenn ein Benutzer die Meldung erhält, dass die Bestellung nicht mit der Empfangszeile abgeglichen werden kann, muss dies in der Einkaufsbestellzeile behandelt werden. Beachten Sie, dass Belege nicht in ExFlow behandelt werden.

Gehen Sie zur Einkaufsbestellung, z.B. über die "Bestellnummer", stellen Sie sicher, dass der Beleg erstellt wurde, und buchen Sie den Beleg.
<br/>

#### **Aktionsmeldung:** Zeile mit Bestellnummer XX kann nicht mit einer Empfangszeile abgeglichen werden.
**Lösung:** Wenn ein Benutzer die Meldung erhält, dass die Bestellung nicht mit der Empfangszeile abgeglichen werden kann, muss dies in der Einkaufsbestellzeile behandelt werden. Beachten Sie, dass Belege nicht in ExFlow behandelt werden.

Gehen Sie zur Einkaufsbestellung, z.B. über die Bestellnummer, stellen Sie sicher, dass der Beleg erstellt wurde, und buchen Sie den Beleg.

Erfahren Sie mehr über den Bestellprozess im Abschnitt [***Einkaufsbestellabgleichsprozess***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#purchase-order-matching-process).
<br/>

### Lieferantenbezogene Meldungen

#### **Aktionsmeldung:** Lieferant kann für Lieferanten-ID XXX nicht identifiziert werden.
**Lösung:** Überprüfen Sie das gescannte Dokument. Ist die Lieferanten-ID korrekt interpretiert? Überprüfen Sie Name, IBAN und Bankkonten. Wenn nicht, ändern Sie die Lieferanten-ID-Nummer.

Existiert der Lieferant in Business Central? Wenn nicht, erstellen Sie den Lieferanten in Business Central.

Um die importierten Daten anzusehen:<br/>
Gehen Sie zu: **ExFlow-Importjournale -->** öffnen **ExFlow-Importjournal --> Verwandt --> Dateien --> Importdetails anzeigen (OCR)**.
<br/>

### E-Mail-bezogene Meldungen

In ExFlow-Version 19.3/BC20 ist SMTP veraltet, und E-Mail-Konten müssen verwendet werden. Wenn E-Mail-Konten nicht eingerichtet sind, werden E-Mail-Erinnerungen für nicht genehmigte Dokumente usw. nicht gesendet.
<br/>

#### **Aktionsmeldung:** E-Mail-Konto ist nicht eingerichtet
**Lösung:** Überprüfen Sie, ob ein gültiges E-Mail-Konto eingerichtet ist und dass dem E-Mail-Szenario "ExFlow-Standard" zugewiesen ist.

Bei Fragen zu E-Mail-Konten wenden Sie sich an Ihren Business Central-Partner.
<br/>

#### **Aktionsmeldung:** Funktion für erweiterte E-Mail-Funktionen ist nicht aktiviert
**Lösung:** Erweiterte E-Mail-Funktionen müssen aktiviert sein. Stellen Sie sicher, dass dem E-Mail-Szenario sowohl in den E-Mail-Konten als auch in der ExFlow-E-Mail-Einrichtung "ExFlow-Standard" zugewiesen ist.
<br/>
