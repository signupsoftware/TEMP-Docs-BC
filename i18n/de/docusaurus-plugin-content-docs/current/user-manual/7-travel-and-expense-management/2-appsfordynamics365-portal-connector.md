---
title: AppsForDynamics365 Portal Connector
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## AppsForDynamics365 Portal Connector

Der AppsForDynamics365 Portal Connector erleichtert die Integration der ExFlow Travel & Expense Management-Anwendung mit Ihrem Business Central-System. Als Vermittler sorgt er dafür, dass Daten direkt an Business Central in leicht verarbeitbaren und verständlichen Formaten zur Speicherung oder Anwendung übertragen werden.

Das Portal bietet einfachen Zugang für Benutzer, die keine Business Central-Superuser sind und möglicherweise unterwegs Aufgaben in ExFlow Travel & Expense Management ausführen.

Diese Dokumentation enthält alle notwendigen Informationen, um AppsForDynamics365 einzurichten und mit Business Central zu verbinden.

### Einrichtung der AppsForDynamics365-Integration

Dieser Abschnitt dokumentiert den Einrichtungsprozess für die AppsForDynamics365-Integration. Das Integrationsmodul wird von ExFlow Travel & Expense Management verwendet, um Business Central mit dem AppsForDynamics365-Portal zu verbinden.

Um die Einrichtung abzuschließen, verwenden Sie den AppsForDynamics365-Einrichtungsassistenten, der die Benutzer durch die notwendigen Schritte führt, um die Verbindung zu Business Central herzustellen. Greifen Sie auf den Assistenten zu, indem Sie entweder auf die Benachrichtigung auf der Startseite von Business Central klicken oder die AppsForDynamics365-Portal-Konfigurationsseite über die Suchfunktion aufrufen. Klicken Sie dort auf die Schaltfläche "Verbindung konfigurieren", um den Assistenten zu öffnen.

Es ist wichtig, dass dieser Assistent von jemandem mit den notwendigen Berechtigungen zur Erteilung der Zustimmung ausgeführt wird.

#### AppsForDynamics365-Verbindung konfigurieren
Gehen Sie zu: **AppsForDynamics365-Konfiguration**

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-001.png)

#### Lizenz überprüfen

Der erste Schritt im Prozess erfordert die Eingabe der Kunden-ID und des Lizenzschlüssels. Diese werden beim Kauf eines AppsForDynamics365-Produkts bereitgestellt. Alternativ finden Sie sie auf der **Mein Konto**-Seite auf [www.appsfordynamics365.com](http://www.appsfordynamics365.com).

![Reise- und Spesen](@site/static/img/media/tem-002.png)

#### Zustimmung erteilen

Um AppsForDynamics365 mit Business Central zu integrieren, muss eine Zustimmung erteilt werden. Diese Zustimmung ermöglicht es AppsForDynamics365, auf den Webdienst zuzugreifen.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-003.png)

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-004.png)

Nachdem die Zustimmung erteilt wurde, fahren Sie fort, um die Lokalisierungseinstellungen anzugeben.

#### Lokalisierungseinstellungen angeben

Wählen Sie die verwendete Zeitzone und die bevorzugte Sprache für das Portal aus. Beachten Sie, dass das Portal nicht alle Sprachen unterstützt.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-005.png)

Nachdem Sie die Zeitzone und die Sprache ausgewählt haben, klicken Sie auf Weiter und fahren Sie fort, um die Authentifizierungsmethode auszuwählen.

#### Authentifizierungsmethode auswählen

Es stehen drei verschiedene Authentifizierungsmethoden zur Verfügung, die der Benutzer verwenden kann, um sich bei AppsForDynamics365 anzumelden: Microsoft-Login, Benutzername und Passwort, die in AppsForDynamics365 erstellt wurden, oder der gemischte Modus, eine Kombination dieser beiden.

Benutzer müssen in AppsForDynamics365 in einer bestimmten Reihenfolge erstellt werden, unabhängig von der Authentifizierungsmethode.

**Microsoft-Login** wird für die meisten Unternehmen empfohlen, die Business Central verwenden, da es die Verwendung bestehender Microsoft-Logins wie in anderen Anwendungen ermöglicht.

**AppsForDynamics365-Benutzername und Passwort** ist nützlich, wenn die meisten Mitarbeiter keinen Zugriff auf Microsoft-Logins haben. Jeder Benutzer muss ein Passwort und einen Benutzernamen haben.

**Gemischter Modus** ermöglicht die Verwendung beider Optionen, was in einigen Fällen nützlich sein kann, in denen einzelne Mitarbeiter keine Microsoft-Logins haben.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-006.png)

Nachdem Sie eine Authentifizierungsmethode ausgewählt haben, klicken Sie auf Weiter und fahren Sie fort, um die Business Central-Instanz zu registrieren.

#### Business Central-Instanz registrieren

Der Assistent registriert die Business Central-Instanz automatisch mit dem AppsForDynamics365-Konto, sobald auf "Weiter" geklickt wird. Bestätigen Sie einfach, dass die angezeigten Informationen korrekt sind.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-007.png)

Nachdem Sie diese Informationen bestätigt haben, klicken Sie auf Weiter und fahren Sie fort, um das Unternehmen zu aktivieren.

#### Unternehmen aktivieren

Dieser Schritt erfordert die Einrichtung einer Webdienstverbindung. Die angezeigten Informationen werden standardmäßig verwendet. Während die Webdienstadresse nicht geändert werden kann, können Sie die Beschreibung nach Bedarf anpassen.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-008.png)

Sobald dies in Ordnung ist, klicken Sie auf Weiter und gehen Sie zu den Administratorberechtigungen.

#### Administratoren Berechtigungen erteilen

Für die Wartung und Verwaltung der AppsForDynamics365-Integration müssen einige Benutzer als Administratoren ausgewählt werden.

Diese Administratoren sind dafür verantwortlich, bei Bedarf zusätzliche Benutzer zu erstellen. Dies kann sofort über den im Assistenten angezeigten Link oder später über die Berechtigungseinstellungen erfolgen.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-009.png)

Der Konfigurationsassistent für die AppsForDynamics365-Verbindung wurde erfolgreich abgeschlossen.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-010.png)

#### Einen AppsForDynamics365-Benutzer erstellen

Um auf das AppsForDynamics365-Portal zuzugreifen und die ExFlow Travel & Expense Management-App zu verwenden, muss für jeden Benutzer ein Benutzerkonto erstellt werden. Dieses Login wird unternehmensübergreifend verwendet.

Jeder Benutzer, der Zugriff auf das AppsForDynamics365-Portal benötigt, muss als AppsForDynamics365-Benutzer eingerichtet werden. Der AppsForDynamics365-Benutzer erweitert den Business Central-Mitarbeiter, indem er sicherstellt, dass die im Mitarbeiter festgelegten Einstellungen auch auf dem AppsForDynamics365-Portal durchgesetzt werden.

Gehen Sie zu: **AppsForDynamics365-Logins**

Es gibt zwei Möglichkeiten, einen neuen Benutzer zu erstellen.

1. **Logins für Benutzer erstellen:** Benutzer aus BC-Benutzern importieren.

2. **Neu:** Wenn der Benutzer nicht als Business Central-Benutzer erstellt wurde, geben Sie die Benutzeranmeldeinformationen manuell ein.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-011.png)

##### Mit Business Central erstellen

**Logins für Benutzer erstellen:** Wählen Sie den/die Benutzer aus der Liste aus.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-012.png)

#### Benutzer manuell erstellen

Klicken Sie auf **Neu**

**Benutzerstatus**: Gibt an, ob der Benutzer aktiv oder inaktiv ist

**Authentifizierungsmethode:** Wählen Sie die Authentifizierungsmethode für den spezifischen Benutzer.

- Microsoft-Login

- Benutzer/Passwort

**Login:** Benutzer-ID, die der Benutzer zur Anmeldung im Portal verwendet

**Name:** Der vollständige Name des Mitarbeiters

**Passwort:** Das Passwort, das der Benutzer zur Anmeldung im Portal verwendet. (Nur wenn "Benutzer/Passwort" ausgewählt ist)

**Sprache**: Die beabsichtigte Sprache, die der Benutzer verwenden soll.

**E-Mail**: Die E-Mail-Adresse des Benutzers. Diese wird für Benachrichtigungen verwendet.

**Business Central-Benutzer**: Wählen Sie den Business Central-Benutzer aus, dem dieser Benutzer zugeordnet werden soll.

**Mitarbeiternummer:** Dies ist die Mitarbeiternummer aus Business Central, die dem Benutzer zugeordnet ist. Sie wird automatisch ausgefüllt, wenn die Konfiguration für TEM aus der Mitarbeiterkarte in Business Central ausgeführt wird.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-013.png)

Der Benutzer kann sich anmelden, indem er seinen **Benutzernamen** und **Passwort** eingibt oder **Mit Microsoft anmelden** verwendet.

![Ein Screenshot eines Anmeldebildschirms, der automatisch generiert wurde](@site/static/img/media/tem-014.png)

#### Den Mitarbeiter mit AppsForDynamics365 verknüpfen

Um die Benutzereinrichtung abzuschließen, muss der Business Central-Mitarbeiter dem **AppsForDynamics365-Benutzer** zugeordnet werden.

Gehen Sie zu: **Mitarbeiter**

Wählen Sie einen bestimmten Mitarbeiter aus der Liste aus, um Zugriff auf das **AppsForDynamics365-Portal** zu gewähren.

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-015.png)

**Reise- und Spesen konfigurieren:** Folgen Sie dem Assistenten

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-016.png)

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-017.png)

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-018.png)

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-019.png)

![Ein Screenshot eines Computers, der automatisch generiert wurde](@site/static/img/media/tem-020.png)
  