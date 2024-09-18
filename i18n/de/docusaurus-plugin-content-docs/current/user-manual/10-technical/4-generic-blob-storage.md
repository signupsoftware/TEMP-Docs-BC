---
title: Generischer Blob-Speicher
sidebar_position: 4
hide_title: true
---
## Generischer Blob-Speicher

### Einführung
ExFlow verwendet derzeit die Business Central-Datenbank zum Speichern importierter Dokumente. Dokumente sind hauptsächlich XML und PDF. Es könnten potenziell auch andere Formate sein, wie DOCX oder PNG.<br/>
Bei der Verwendung von Business Central für die Speicherung neigt der zugewiesene Speicherplatz dazu, sich radikal zu erweitern, basierend auf der Anzahl der Rechnungen, die der Kunde erhält. Da importierte Dokumente Bilder enthalten können, wird sich der zugewiesene Speicherplatz in BC Online radikal erweitern.
Es besteht die Notwendigkeit, importierte Dokumente an alternativen Standorten für günstigere oder effizientere Speicherung speichern zu können.

### Allgemein
Blobs sind Dateien im eher traditionellen Sinne des Denkens. Ein Blob ist jedoch der Inhalt von etwas, das wir als Datei betrachten. Eine Datei bezieht sich mehr auf die Metadaten wie Name, Erstellungsdatum, Änderungsdatum, Content-Type und mehr. Blobs sind binäre Datenfolgen, die die Metadaten beschreiben. Die Metadaten sagen uns oder der Anwendung, die den Blob verwendet, wie der Inhalt zu verwenden ist.

Um Blobs effizienter zu handhaben, müssen sie von der Anwendung abstrahiert werden. Wenn ExFlow also nach einem Blob fragt, erhält es Metadaten und den binären Inhalt. Die tatsächliche Quelle ist der Anwendung unbekannt.

Die vorgeschlagene Lösung verwendet mehrere Schichten, um Funktionalität zu abstrahieren und zu isolieren.<br/><br/>

#### ExFlow-Anwendung
Die Anwendung, die die Blobs durch Lesen, Schreiben, Löschen und Auflisten von Blobs oder Dateien verwenden wird.<br/><br/>

#### Speicherverwaltung
Verwaltet, wo, wann und wie ein Blob gespeichert wird. Cache-Verwaltung und Speicherung werden in dieser Schicht gehandhabt. Übertragen und Abrufen von Blobs wird in dieser Schicht durchgeführt.<br/><br/>

#### Speicherimplementierung (Storage Interface)
Dies ist die Implementierung eines Speichertypen. Zu implementierende Funktionen sind die primitivsten wie Get oder Put.


### Architektur
Die Architektur für Blob-Speicher wird die Anwendung von der Art und Weise isolieren, wie auf Blobs zugegriffen wird.<br/><br/>

#### ExFlow-Anwendung
In Business Central werden Blobs in Blob-Feldern in Tabellen gespeichert. Wenn ein Blob gelesen wird, werden Streams verwendet, um Daten aus dem Blob zu extrahieren. Wenn ein Blob geschrieben wird, werden Streams verwendet, um Daten in eine Tabelle zu schreiben.
Derzeit werden Blobs in den folgenden Bereichen verwendet oder referenziert:
* ExFlow PDF-Add-In
* Eingehende Dokumentenanhänge
    - InStream
    - OutStream
* Strg+I-Verknüpfung in ExFlow, um den Hauptanhang auf den lokalen Computer herunterzuladen
* Klicken Sie auf einen Dateinamen in Business Central, um einen Anhang auf den lokalen Computer herunterzuladen<br/><br/>

**Isolation:** Jede Anforderung zum Lesen eines Blobs wird über die Speicherverwaltung gesendet, die den Blob zurückgibt. Der Blob kann als Stream zurückgegeben oder auf den Client heruntergeladen werden.

Jede Anforderung zum Speichern eines Blobs wird über die Speicherverwaltung gesendet. Der Verweis wird SystemId zusammen mit TableID und FieldID sein, um es möglich zu machen, zwei Blobs in derselben Tabelle zu "speichern" und dennoch den externen Speicher zu verwenden.

Die Blob-Funktionalität wird hauptsächlich Standard-Blob-Methoden nachahmen, wenn sie für die Verwendung sinnvoll sind.<br/><br/>

#### Speicherverwaltung
Die Speicherverwaltung (SM) wird Funktionen zum Lesen oder Schreiben von Blobs entweder direkt oder durch das Hören von Ereignissen bereitstellen.

Business Central löst Ereignisse aus, wenn Blobs gelesen werden, bevor Daten aus dem primären, am häufigsten verwendeten Speicher, dem Eingehenden Dokumentenanhang, extrahiert werden.

SM wird einen Cache von Blobs in Verwendung pflegen. Blobs in Verwendung können Blobs sein, die sich auf Importjournal oder Genehmigungsstatus beziehen, um nur einige zu nennen. Blobs können auch in archivierten Bereichen wie gebuchten Einkaufsrechnungen oder Kreditorenposten verwendet werden.

Wenn ein Blob angefordert wird, das sich auf gebuchte Dokumente bezieht, wird der Blob aus dem Blob-Speicher abgerufen und lokal zwischengespeichert, dann an die Anwendung zurückgegeben. Der Blob wird für eine gut definierte Zeit basierend auf der Einrichtung im Cache behalten.

Blobs, die für Bereiche wie das Importjournal angefordert werden, bleiben im Eingehenden Dokumentenanhang, bis die Rechnung gebucht wurde. Zu diesem Zeitpunkt wird der Eingehende Dokumentenanhang als ungültig markiert und wird regelmäßig durch eine geplante Aufgabe entfernt. Wenn eine Anforderung für einen Blob gestellt wird, der sich auf einen neu gebuchten Eintrag bezieht und der Cache-Eintrag noch existiert, wird der Blob nicht erneut abgerufen und der Cache wird als gültig gesetzt und bleibt für die in der Einrichtung festgelegte Zeit gültig.

Die Blob-Benennungskonvention wird generisch sein, wobei Blob-Details in einer separaten Tabelle gespeichert werden, die den Namen des Blobs enthält. Der Blob muss einer generischen Benennungskonvention folgen, um keine Probleme mit der Dateinamenlänge zu verursachen. Ein empfohlener Name ist GUID, wobei Teile davon als Pfad verwendet werden können.<br/><br/>

#### Speicherimplementierung
Die physische Speicherung von Blobs erfolgt unter Verwendung einer Schnittstelle in Business Central. Eine Schnittstelle ist eine Abstraktion ohne Code, sie kann als Definition einer API betrachtet werden. Die Schnittstelle enthält nur Funktionssignaturen. Es liegt an den Implementierern, den Code zur Unterstützung der Schnittstelle hinzuzufügen.

Die Schnittstelle definiert eine oder mehrere überladene Funktionen im Zusammenhang mit Get, Put, Exist, List und Delete. Die Schnittstelle definiert auch überladene Funktionen im Zusammenhang mit Setup, Funktionen wie GetFieldCaption, SetFieldValue und GetFieldValue.

![Blob Storage](../../images/blob-storage-001.png)


### Blob Storage Einrichtung
Gehen Sie zu: ***ExFlow Setup --> Aktionen --> Funktionen --> Blob Storage Verwaltung*** (--> Storage Setup)

Die Einrichtung für Blob Storage basiert auf der Schnittstelle, die zur Speicherimplementierung definiert ist. Die Blob Storage Einrichtung ist generisch und allgemein. Sie enthält einige generische Textfelder wie Code, Beschreibung und Blob-Quelle.

Die Einrichtung für Blob Storage basiert auf der Schnittstelle, die zur Speicherimplementierung definiert ist. Die Blob Storage Einrichtung ist generisch und allgemein. Sie enthält keine generischen implementierungsspezifischen Felder außer Beschreibung und Speichertyp.

Die Implementierung wird ihre eigene Einrichtung gegen ihre eigenen Tabellen nach Bedarf ausführen. Da die Implementierung möglicherweise OAuth oder eine andere Art der Authentifizierung erfordert, liegt es an der Implementierung, dies zu implementieren. Eine Implementierung der Schnittstelle kann wählen, alle Konfigurationsparameter innerhalb des isolierten Speichers zu speichern.

Minimale Blob Storage Einrichtungswerte sind Code, Beschreibung, Blob Storage Typ und ob es aktiviert ist oder nicht.

Es kann mehr als eine Blob Storage Einrichtung pro Blob Storage Typ geben, es hängt von der Nutzung ab.

![Storage Setup](../../images/storage-setup-001.png)

Im Beispiel ist die gewählte Implementierung „Azure Container“.

Der Azure Container wird eine Einrichtung präsentieren, die Informationen sammelt, die für die Implementierung benötigt werden, wenn Sie auf Einrichtung drücken.

Es liegt an der Implementierung, Parameter auf relevante Weise unter Verwendung physischer Tabellen, isoliertem Speicher oder anderen Mitteln zu speichern.

Alle Felder in der Blob Storage Einrichtung sind für ExFlow oder die Blob Storage Verwaltung irrelevant und machen nur für die Implementierung Sinn. Die Implementierung verwendet die Blob Storage Einrichtung, um zu wissen, welche Einrichtung verwendet werden soll und aus ihrem eigenen Speicher, ihrer Tabelle oder ihrem isolierten Speicher abzurufen. Wenn also ein Aufruf an die Schnittstelle Get(Name, …) gemacht wird, wird die Implementierung die benötigte Einrichtung und Verbindungen herstellen, um es möglich zu machen, das angeforderte Blob abzurufen.

In diesem Fall ist die Speicherverwaltung physisch speicheragnostisch, sie weiß nicht, wie die Datei oder das Blob abgerufen wird, das überlässt sie der Implementierung.

Ein Aufruf der Speicherverwaltung an Get(Name, …) wird sich gleich verhalten und das Blob zurückgeben, egal ob die Implementierung Azure Container, Datenbank, Azure Share, lokales Dateisystem, Amazon WS, Dropbox oder eine andere Methode zur technischen Handhabung von Blobs ist.

### Speicherverwaltung
Die Speicherverwaltung (SM) wird allgemeine Funktionalität für die Anwendung bereitstellen, um Blobs basierend auf einer Schlüssel-/Namenskombination zu erhalten, zu setzen, aufzulisten oder zu löschen. SM wird das Blob an seinen ursprünglichen Ort wiederherstellen, wenn eine Anfrage dafür gestellt wird.

SM wird Blobs lokal in einer Tabelle innerhalb der Blob Storage Funktionalität speichern oder zwischenspeichern, um das Blob-Management für die Anwendung schnell zu machen.

Zwischengespeicherte Blobs werden nur für eine begrenzte Zeit gespeichert, wie in der Einrichtung festgelegt. Einschränkungen können, aber nicht beschränkt auf, Tage oder Funktionsbereich sein.<br/><br/>

#### Cache in Tagen
Für Bereiche, die nicht vorübergehender Natur sind, wie gebuchte Dokumente, kann der Cache so eingestellt werden, dass zwischengespeicherte Einträge innerhalb festgelegter Tage ablaufen. Sobald die Anzahl der Tage erreicht ist, werden die Cache-Einträge ungültig. Ein geplanter Job wird ungültige Einträge aus dem Cache entfernen.<br/><br/>

#### Cache pro Funktionsbereich
Das Archivieren von Blobs wird nur für gebuchte Dokumente relevant sein, da Dokumente, die sich auf das Importjournal oder den Genehmigungsstatus beziehen, sofortigen Zugriff erfordern.<br/><br/>

#### Cache in Anzahl der Einträge
Für Cache, der sich auf Funktionsbereiche oder allgemein bezieht, kann eine Cache-Speicherphilosophie darin bestehen, höchstens 1000 zwischengespeicherte Einträge zu behalten. Jedes Mal, wenn ein Blob aus dem Cache abgerufen wird, wird ein Last Used-Zeitstempel aktualisiert. Last Used kann als Referenz verwendet werden, wenn die Anzahl der Einträge den in der Einrichtung festgelegten Wert überschreitet. Diese Einträge werden von einem geplanten Job gelöscht. Es kann einen dynamischen Puffer geben, wenn die Anzahl der zwischengespeicherten Einträge das festgelegte Limit überschreitet.

Cache in Anzahl der Einträge wird höchstwahrscheinlich nur für gültige Einträge gelten. Ungültige Einträge werden ohnehin regelmäßig von dem geplanten Job gelöscht.<br/><br/>

#### ExFlow Speicher Details

Zeigt die aktuellen Speicherdetails von eingehenden Dokumentanhängen in Business Central an. Die Details umfassen das Datum, an dem das Dokument im Blob-Speicher gespeichert wurde, das letzte Zugriffsdatum und die Liste der eingehenden Dokumente, die sich noch in Business Central mit der System-ID als Identifikator befinden.

#### Zusätzliche Funktionen
Die Speicherverwaltung kann zusätzliche Funktionen implementieren, um die Blob-Verarbeitung zu beschleunigen oder andere Funktionalitäten bereitzustellen.<br/>

**Cache-Bereinigungsprozess**<br/>
Ermöglicht die manuelle Bereinigung des Caches.

**Cache-Paradigma**<br/>

    - ***Vorabruf-Einträge***<br/>
            Vorab den Cache mit Einträgen im eingehenden Dokumentanhang füllen, da dies den Zugriff auf das Blob beschleunigen wird, da es sofort verfügbar sein wird.

    - ***Auf Abruf***<br/>
        Nur den Cache abrufen und füllen, wenn das Blob angefordert wird. Dies ist möglicherweise keine praktikable Funktion, aber dennoch eine Funktion.<br/>

**Dokumenten-Migration**<br/>
Die Speicherverwaltung kann das Verschieben von Dokumenten von einem Blob-Speichertyp zu einem anderen oder von einem Blob-Speichertyp desselben Typs wie der Zielspeicher implementieren. Die Migration kann dann direkt unterstützt werden, um Blobs aus einem temporären Azure Container (im Besitz des Partners oder SignUp) in einen permanenten Azure Container (im Besitz des Kunden) zu lesen.

**Speicherverlagerung**<br/>
Die Speicherverwaltung kann einen Wechsel von einem Blob-Speichertyp zu einem anderen implementieren. Der Kunde verwendet den Datenbankspeichertyp und möchte zu Azure Container wechseln. Daher gibt die Speicherverwaltung ein Get(Name, …) vom Datenbankspeichertyp aus und dann ein Put(Name, …) an Azure Container für jedes Blob aus.<br/><br/>
Es wäre möglich, die externe Speicherung zu beenden, indem eine Funktion verwendet wird, um Blobs aus dem externen Speicher wieder in den eingehenden Dokumentanhang zu kopieren/verschieben.

