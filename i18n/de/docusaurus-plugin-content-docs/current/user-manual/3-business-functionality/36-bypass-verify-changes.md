---
title: Änderungen überspringen überprüfen
sidebar_position: 36
hide_title: true
---
## Änderungen überspringen überprüfen

Gehe zu: **ExFlow Setup --> Doc. Posting Checks --> Änderungen überspringen überprüfen** 

Diese Funktion kann verwendet werden, um den Rechnungsbuchungsprozess für genehmigte Dokumente zu automatisieren, indem bestimmte Werte in ExFlow-Webspalten den Schritt „Änderungen überprüfen“ im Genehmigungsstatus überspringen dürfen.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-001.png)

Wenn diese Funktion in ExFlow Setup aktiviert ist, öffnet sich eine neue Seite, die eine Liste anzeigt, die Webspalten und ein Filterfeld zum Hinzufügen/Bearbeiten von Werten enthält, die in „Genehmigungsstatus -> Änderungen überprüfen“ übersprungen werden sollen.

Auf dieser Seite ist es möglich, die zulässigen Werte hinzuzufügen, die übersprungen werden sollen. Zum Beispiel wurden im untenstehenden Beispiel Kostenkonten 5910..6230 als zulässige Werte ausgewählt. Der Web-Genehmiger kann das Sachkonto innerhalb dieses Filters ändern.

Eine weitere Einstellung muss festgelegt werden, damit dies funktioniert, und zwar ein Sternchen (*) als zulässiger Wert für die Webspaltenbeschreibung. In diesem Beispiel wird die Sachkontenbeschreibung geändert, daher ist es wichtig, ein Sternchen als zulässigen Wert hinzuzufügen. Die gleiche Logik gilt für andere Zeilentypen mit einer Beschreibung, andernfalls wird ExFlow die Codeänderungen im Genehmigungsstatus nicht überspringen.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-002.png)

Wenn der Webspaltencode „Beschreibung“ in der „ExFlow Änderungen überspringen überprüfen Setup“ nicht sichtbar ist, muss die Beschreibungsspalte zu ExFlow Web hinzugefügt werden. Lesen Sie mehr darüber, wie Sie ExFlow-Spalten hinzufügen, im Abschnitt [ExFlow Web](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-web#exflow-web).

Wenn der Web-Genehmiger innerhalb des gegebenen Filters Codeänderungen vornimmt, wird das genehmigte Dokument vom manuellen Update durch das AP-Personal im Schritt „Änderungen überprüfen“ im Genehmigungsstatus übersprungen.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-003.png)

Das endgültig genehmigte Dokument ändert den Status von „Genehmigt“ zu „Bereit zur Buchung“.

![ExFlow Setup](@site/static/img/media/exflow-setup-bypass-verify-changes-004.png)

Es ist möglich, die Automatisierung weiter zu verbessern, indem „Änderungen automatisch überprüfen“ unter ExFlow Setup –-> [***Hintergrundverarbeitung***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-approval-status#background-processing) aktiviert wird.

