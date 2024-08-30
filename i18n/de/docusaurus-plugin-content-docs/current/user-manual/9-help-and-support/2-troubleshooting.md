---
title: Fehlerbehebung
sidebar_position: 2
hide_title: true
---
## Fehlerbehebung
<br/>

### Häufige Einrichtungsprobleme

#### **Problem:** Die Umsatzsteuer-Produktbuchungsgruppe ist falsch.
**Lösung:** Die Umsatzsteuer-Produktbuchungsgruppe wird aus der Einrichtung des G/L-Kontos kopiert. Wenn auf dem G/L-Konto keine Umsatzsteuer-Produktbuchungsgruppe vorhanden ist, wird diese Gruppe aus der "Standard-Umsatzsteuer-Produktbuchungsgruppe" in der "ExFlow-Einrichtung" kopiert. Finden Sie diese Einstellung in ***ExFlow-Einrichtung --> Allgemein.***
<br/>

#### **Problem:** Der Umsatzsteuerbetrag ist nicht korrekt.
**Lösung:** Überprüfen Sie, ob der Betrag im Dokumentkopf mit dem im PDF-Dokument übereinstimmt. Überprüfen Sie, ob die richtige "Umsatzsteuer-Produktbuchungsgruppe" verwendet wird. Ändern Sie bei Bedarf die Zeilen und überprüfen Sie, ob die Dokumentzeilen mit dem Dokumentkopf übereinstimmen.
<br/>

#### **Problem:** Benutzer kann keine Dokumente für das neue Unternehmen auf ExFlow Web sehen.
**Lösung:** Fügen Sie den Firmennamen unter Berechtigungen auf der ExFlow-Benutzerkarte hinzu.
<br/>

### Häufige Aktionsnachrichten

#### **Aktionsnachricht:** Siehe Zeile für spezifische Aktionsnachricht.
**Aktionsnachricht bei Importzeilen:** Genehmiger fehlt.<br/>
**Lösung:** Genehmiger werden normalerweise automatisch durch Genehmigungsregeln usw. hinzugefügt. Wenn sie fehlen, können Sie eine Genehmigungsgruppendokumentzeile in der FactBox "Genehmigungsvorschlag" hinzufügen.
<br/>

#### **Aktionsnachricht:** Umsatzsteuerbetrag (1291,60) entspricht nicht der Gesamtumsatzsteuer der Zeilen (645,80).
**Lösung:** Überprüfen Sie, ob der Umsatzsteuerbetrag korrekt interpretiert wird. Überprüfen Sie die Importzeilen, sind die "Umsatzsteuer-Produktbuchungsgruppen" korrekt? Wenn nicht, ändern Sie sie entsprechend.
<br/>

#### **Aktionsnachricht:** Doppelter Importkopf in Journal Batch OCR - Vorkommen 2!
**Lösung:** Die Lieferantenbelegnummer wurde bereits in einem offenen Einkaufsdokument, Importjournal oder gebuchten Eingangsrechnung verwendet. Wenn die Zeile eine echte Duplikation ist, löschen Sie die Journallinie.

Wenn die Nummer zuvor verwendet wurde und dies korrekt ist, z. B. bei Miete/Versicherung/Abonnement, setzen Sie "Doppelte Rechnung zulassen" auf Ja in der **ExFlow-Lieferanteneinrichtungskarte** unter dem Tab Allgemein.
<br/>

#### **Aktionsnachricht:** Diese Rechnung ist als Factoring gekennzeichnet und darf daher nicht erstellt werden!
**Lösung:** Wenn der Benutzer diese Meldung erhält, sollte der Benutzer sicherstellen, dass "Kauf von Lieferant" der Lieferant ist, von dem der Benutzer die Waren kauft, während "Zahlung an Lieferant" der Factoring-Lieferant ist. Wenn dies nicht der Fall ist, ändern Sie die Lieferantennummer.

Die Einstellung für den Factoring-Lieferanten finden Sie auf der **Lieferantenkarte --> Verwandt --> ExFlow-Lieferanteneinrichtung.**

Lesen Sie mehr dazu im Abschnitt [***ExFlow-Lieferanteneinrichtung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup).
<br/>


#### **Aktionsnachricht**: Betrag (XX) entspricht nicht der Summe der Zeilen (YY).
**Lösung**: Überprüfen Sie die Einstellung in **ExFlow-Einrichtung -->** **PO-Abgleich --> Automatische Differenzzeile**, möglicherweise sind Einstellungen beteiligt. Die Differenz entspricht nicht der Einstellung "Max Diff. Betrag (LCY)" oder "Max Diff. %" (oder beides). Ändern Sie den Betrag im Kopf oder in den Zeilen.
<br/>

### Auftragsbezogene Nachrichten
####  **Aktionsnachricht**: Dokumentauftrag XXX existiert nicht!
**Lösung**: Überprüfen Sie zuerst, ob diese Auftragsnummer mit dem gescannten Bild übereinstimmt. Wenn dies korrekt ist, gehen Sie zur Spalte "Auftragsnummer" und prüfen Sie diese Auftragsnummern.
<br/>

####  **Aktionsnachricht:** Auftragsnummer XX hat keine empfangenen Zeilen.
**Lösung:** Wenn ein Benutzer eine Meldung erhält, dass der Auftrag nicht mit der Wareneingangszeile abgeglichen werden kann, muss dies in der Bestellzeile behandelt werden. Beachten Sie, dass Wareneingänge nicht in ExFlow behandelt werden.

Gehen Sie zur Bestellung, z. B. über "Auftragsnummer", stellen Sie sicher, dass der Wareneingang erfolgt ist, und buchen Sie den Wareneingang.
<br/>

#### **Aktionsnachricht:** Zeile mit Auftragsnummer XX kann keiner Wareneingangszeile zugeordnet werden.
**Lösung:** Wenn ein Benutzer eine Meldung erhält, dass der Auftrag nicht mit der Wareneingangszeile abgeglichen werden kann, muss dies in der Bestellzeile behandelt werden. Beachten Sie, dass Wareneingänge nicht in ExFlow behandelt werden.

Gehen Sie zur Bestellung, z. B. über die Auftragsnummer, stellen Sie sicher, dass der Wareneingang erfolgt ist, und buchen Sie den Wareneingang.

Erfahren Sie mehr über den Bestellprozess im Abschnitt [***Bestellabgleichsprozess***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/purchase-order-matching-process#purchase-order-matching-process).
<br/>

### Lieferantenbezogene Nachrichten

#### **Aktionsnachricht:** Lieferant kann für Lieferanten-ID 1234567890 nicht identifiziert werden.
**Lösung:** Überprüfen Sie das gescannte Dokument. Wird die Lieferanten-ID korrekt interpretiert? Überprüfen Sie Name, IBAN und Bankkonten. Wenn nicht, ändern Sie die Lieferanten-ID-Nummer.

Existiert der Lieferant in Business Central? Wenn nicht, erstellen Sie den Lieferanten in Business Central.

Um die importierten Daten anzusehen:<br/>
Gehen Sie zu: **ExFlow Import Journals -->** öffnen Sie **ExFlow Import Journal --> Verwandt --> Dateien --> Importdetails anzeigen (OCR)**.
<br/>

### E-Mail-bezogene Nachrichten

In ExFlow 19.3 Version/BC20 ist SMTP veraltet und E-Mail-Konten müssen verwendet werden. Wenn E-Mail-Konten nicht eingerichtet sind, werden keine E-Mail-Erinnerungen für nicht genehmigte Dokumente usw. versendet.
<br/>

#### **Aktionsnachricht:** E-Mail-Konto ist nicht eingerichtet
**Lösung:** Überprüfen Sie, ob ein gültiges E-Mail-Konto eingerichtet ist und ob dem E-Mail-Szenario "ExFlow Standard" zugewiesen ist.

Bei Fragen zu E-Mail-Konten wenden Sie sich an Ihren Business Central-Partner.
<br/>

#### **Aktionsnachricht:** Erweiterte E-Mail-Funktionen sind nicht aktiviert
**Lösung:** Erweiterte E-Mail-Funktionen müssen aktiviert sein. Stellen Sie sicher, dass dem E-Mail-Szenario sowohl in den E-Mail-Konten als auch in der ExFlow-E-Mail-Einrichtung "ExFlow Standard" zugewiesen ist.
<br/>

