var date = new Date();
var hours = date.getHours()
var minutes = date.getMinutes()
var time = document.getElementById("time");

// 1:00
if (hours == 1 && minutes == 0) {                               // 1:00
    time.innerHTML = "JE JEDNA HODINA RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 1 && minutes >= 1 && minutes < 10) {        // 1:01-1:09
    time.innerHTML = "JE KOUSEK PO JEDNÉ HODINĚ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 1 && minutes >= 10 && minutes < 15) {       // 1:11-1:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DVĚ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes == 15) {                       // 1:15
    time.innerHTML = "JE ČTVRT NA DVĚ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes > 15 && minutes < 25) {        // 1:16-1:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DVĚ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes >= 25 && minutes < 30) {        // 1:25-1:29
    time.innerHTML = "JE TÉMĚŘ PŮL DRUHÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes == 30) {                       // 1:30
    time.innerHTML = "JE PŮL DRUHÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes > 30 && minutes < 41) {        // 1:31-1:40
    time.innerHTML = "JE KOUSEK PO PŮL DRUHÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes == 41 && minutes < 45) {       // 1:41-1:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DVĚ RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes == 45) {                       // 1:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DVĚ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes > 45 && minutes < 51) {        // 1:46-1:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DVĚ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 1 && minutes > 50 && minutes <= 59) {        // 1:51-1:59
    time.innerHTML = "JSOU TÉMĚŘ DVĚ HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 2:00
if (hours == 2 && minutes == 0) {                               // 2:00
    time.innerHTML = "JSOU DVĚ HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 2 && minutes >= 1 && minutes < 10) {        // 2:01-2:09
    time.innerHTML = "JE KOUSEK PO DVOU HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 2 && minutes >= 10 && minutes < 15) {       // 2:11-2:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes == 15) {                       // 2:15
    time.innerHTML = "JE ČTVRT NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes > 15 && minutes < 25) {        // 2:16-2:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes >= 25 && minutes < 30) {        // 2:25-2:29
    time.innerHTML = "JE TÉMĚŘ PŮL TŘETÍ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes == 30) {                       // 2:30
    time.innerHTML = "JE PŮL TŘETÍ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes > 30 && minutes < 41) {        // 2:31-2:40
    time.innerHTML = "JE KOUSEK PO PŮL TŘETÍ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes == 41 && minutes < 45) {       // 2:41-2:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA TŘI RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes == 45) {                       // 2:45
    time.innerHTML = "JE TŘIČTVRTĚ NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes > 45 && minutes < 51) {        // 2:46-2:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 2 && minutes > 50 && minutes <= 59) {        // 2:51-2:59
    time.innerHTML = "JSOU TÉMĚŘ TŘI HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 3:00
if (hours == 3 && minutes == 0) {                               // 3:00
    time.innerHTML = "JSOU TŘI HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 3 && minutes >= 1 && minutes < 10) {        // 3:01-3:09
    time.innerHTML = "JE KOUSEK PO TŘECH HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 3 && minutes >= 10 && minutes < 15) {       // 3:11-3:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA ČTYŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes == 15) {                       // 3:15
    time.innerHTML = "JE ČTVRT NA ČTYŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes > 15 && minutes < 25) {        // 3:16-3:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA ČTYŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes >= 25 && minutes < 30) {        // 3:25-3:29
    time.innerHTML = "JE TÉMĚŘ PŮL ČTVRTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes == 30) {                       // 3:30
    time.innerHTML = "JE PŮL ČTVRTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes > 30 && minutes < 41) {        // 3:31-3:40
    time.innerHTML = "JE KOUSEK PO PŮL ČTVRTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes == 41 && minutes < 45) {       // 3:41-3:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA ČTYŘI RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes == 45) {                       // 3:45
    time.innerHTML = "JE TŘIČTVRTĚ NA ČTYŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes > 45 && minutes < 51) {        // 3:46-3:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA ČTYŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 3 && minutes > 50 && minutes <= 59) {        // 3:51-3:59
    time.innerHTML = "JSOU TÉMĚŘ ČTYŘI HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 4:00
if (hours == 4 && minutes == 0) {                               // 4:00
    time.innerHTML = "JSOU ČTYŘI HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 4 && minutes >= 1 && minutes < 10) {        // 4:01-4:09
    time.innerHTML = "JE KOUSEK PO ČTYŘECH HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 4 && minutes >= 10 && minutes < 15) {       // 4:11-4:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA PĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes == 15) {                       // 4:15
    time.innerHTML = "JE ČTVRT NA PĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes > 15 && minutes < 25) {        // 4:16-4:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA PĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes >= 25 && minutes < 30) {        // 4:25-4:29
    time.innerHTML = "JE TÉMĚŘ PŮL PÁTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes == 30) {                       // 4:30
    time.innerHTML = "JE PŮL PÁTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes > 30 && minutes < 41) {        // 4:31-4:40
    time.innerHTML = "JE KOUSEK PO PŮL PÁTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes == 41 && minutes < 45) {       // 4:41-4:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA PĚT RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes == 45) {                       // 4:45
    time.innerHTML = "JE TŘIČTVRTĚ NA PĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes > 45 && minutes < 51) {        // 4:46-4:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA PĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 4 && minutes > 45 && minutes <= 51) {        // 4:51-4:59
    time.innerHTML = "JE TÉMĚŘ PĚT HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 5:00
if (hours == 5 && minutes == 0) {                               // 5:00
    time.innerHTML = "JE PĚT HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 5 && minutes >= 1 && minutes < 10) {        // 5:01-5:09
    time.innerHTML = "JE KOUSEK PO PĚTI HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 5 && minutes >= 10 && minutes < 15) {       // 5:11-5:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA ŠEST RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes == 15) {                       // 5:15
    time.innerHTML = "JE ČTVRT NA ŠEST RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes > 15 && minutes < 25) {        // 5:16-5:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA ŠEST RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes >= 25 && minutes < 30) {        // 5:25-5:29
    time.innerHTML = "JE TÉMĚŘ PŮL ŠESTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes == 30) {                       // 5:30
    time.innerHTML = "JE PŮL ŠESTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes > 30 && minutes < 41) {        // 5:31-5:40
    time.innerHTML = "JE KOUSEK PO PŮL ŠESTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes == 41 && minutes < 45) {       // 5:41-5:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA ŠEST RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes == 45) {                       // 5:45
    time.innerHTML = "JE TŘIČTVRTĚ NA ŠEST RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes > 45 && minutes < 51) {        // 5:46-5:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA ŠEST RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 5 && minutes > 45 && minutes <= 51) {        // 5:51-5:59
    time.innerHTML = "JE TÉMĚŘ ŠEST HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 6:00
if (hours == 6 && minutes == 0) {                               // 6:00
    time.innerHTML = "JE ŠEST HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 6 && minutes >= 1 && minutes < 10) {        // 6:01-6:09
    time.innerHTML = "JE KOUSEK PO ŠESTI HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 6 && minutes >= 10 && minutes < 15) {       // 6:11-6:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA SEDM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes == 15) {                       // 6:15
    time.innerHTML = "JE ČTVRT NA SEDM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes > 15 && minutes < 25) {        // 6:16-6:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA SEDM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes >= 25 && minutes < 30) {        // 6:25-6:29
    time.innerHTML = "JE TÉMĚŘ PŮL SEDMÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes == 30) {                       // 6:30
    time.innerHTML = "JE PŮL SEDMÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes > 30 && minutes < 41) {        // 6:31-6:40
    time.innerHTML = "JE KOUSEK PO PŮL SEDMÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes == 41 && minutes < 45) {       // 6:41-6:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA SEDM RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes == 45) {                       // 6:45
    time.innerHTML = "JE TŘIČTVRTĚ NA SEDM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes > 45 && minutes < 51) {        // 6:46-6:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA SEDM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 6 && minutes > 50 && minutes <= 59) {        // 6:51-6:59
    time.innerHTML = "JE TÉMĚŘ SEDM HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 7:00
if (hours == 7 && minutes == 0) {                               // 7:00
    time.innerHTML = "JE SEDM HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 7 && minutes >= 1 && minutes < 10) {        // 7:01-7:09
    time.innerHTML = "JE KOUSEK PO SEDMI HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 7 && minutes >= 10 && minutes < 15) {       // 7:11-7:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA OSM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes == 15) {                       // 7:15
    time.innerHTML = "JE ČTVRT NA OSM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes > 15 && minutes < 25) {        // 7:17-7:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA OSM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes >= 25 && minutes < 30) {        // 7:25-7:29
    time.innerHTML = "JE TÉMĚŘ PŮL OSMÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes == 30) {                       // 7:30
    time.innerHTML = "JE PŮL OSMÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes > 30 && minutes < 41) {        // 7:31-7:40
    time.innerHTML = "JE KOUSEK PO PŮL OSMÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes == 41 && minutes < 45) {       // 7:41-7:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA OSM RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes == 45) {                       // 7:45
    time.innerHTML = "JE TŘIČTVRTĚ NA OSM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes > 45 && minutes < 51) {        // 7:46-7:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA OSM RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 7 && minutes > 50 && minutes <= 59) {        // 7:51-7:59
    time.innerHTML = "JE TÉMĚŘ OSM HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 8:00
if (hours == 8 && minutes == 0) {                               // 8:00
    time.innerHTML = "JE OSM HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 8 && minutes >= 1 && minutes < 10) {        // 8:01-8:09
    time.innerHTML = "JE KOUSEK PO OSMI HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 8 && minutes >= 10 && minutes < 15) {       // 8:11-8:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DEVĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes == 15) {                       // 8:15
    time.innerHTML = "JE ČTVRT NA DEVĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes > 15 && minutes < 25) {        // 8:16-8:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DEVĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes >= 25 && minutes < 30) {        // 8:25-8:29
    time.innerHTML = "JE TÉMĚŘ PŮL DEVÁTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes == 30) {                       // 8:30
    time.innerHTML = "JE PŮL DEVÁTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes > 30 && minutes < 41) {        // 8:31-8:40
    time.innerHTML = "JE KOUSEK PO PŮL DEVÁTÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes == 41 && minutes < 45) {       // 8:41-8:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DEVĚT RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes == 45) {                       // 8:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DEVĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes > 45 && minutes < 51) {        // 8:46-8:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DEVĚT RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 8 && minutes > 40 && minutes <= 59) {        // 8:51-8:59
    time.innerHTML = "JE TÉMĚŘ DEVĚT HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 9:00
if (hours == 9 && minutes == 0) {                               // 9:00
    time.innerHTML = "JE DEVĚT HODIN RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 9 && minutes >= 1 && minutes < 10) {        // 9:01-9:09
    time.innerHTML = "JE KOUSEK PO DEVÍTI HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 9 && minutes >= 10 && minutes < 15) {       // 9:11-9:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DESET DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes == 15) {                       // 9:15
    time.innerHTML = "JE ČTVRT NA DESET DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes > 15 && minutes < 25) {        // 9:16-9:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DESET DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes >= 25 && minutes < 30) {        // 9:25-9:29
    time.innerHTML = "JE TÉMĚŘ PŮL DESÁTÉ DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes == 30) {                       // 9:30
    time.innerHTML = "JE PŮL DESÁTÉ DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes > 30 && minutes < 41) {        // 9:31-9:40
    time.innerHTML = "JE KOUSEK PO PŮL DESÁTÉ DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes == 41 && minutes < 45) {       // 9:41-9:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DESET DOPOLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes == 45) {                       // 9:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DESET DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes > 45 && minutes < 51) {        // 9:46-9:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DESET DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 9 && minutes > 50 && minutes <= 59) {       // 9:51-9:59
    time.innerHTML = "JE TÉMĚŘ DESET HODIN DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 10:00
if (hours == 10 && minutes == 0) {                               // 10:00
    time.innerHTML = "JE DESET HODIN DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 10 && minutes >= 1 && minutes < 10) {        // 10:01-10:09
    time.innerHTML = "JE KOUSEK PO DESÍTI HODINÁCH DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 10 && minutes >= 10 && minutes < 15) {       // 10:11-10:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA JEDENÁCT DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes == 15) {                       // 10:15
    time.innerHTML = "JE ČTVRT NA JEDENÁCT DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes > 15 && minutes < 25) {        // 10:16-10:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA JEDENÁCT DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes >= 25 && minutes < 30) {        // 10:25-10:29
    time.innerHTML = "JE TÉMĚŘ PŮL JEDENÁCTÉ DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes == 30) {                       // 10:30
    time.innerHTML = "JE PŮL JEDENÁCTÉ DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes > 30 && minutes < 41) {        // 10:31-10:40
    time.innerHTML = "JE KOUSEK PO PŮL JEDENÁCTÉ DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes == 41 && minutes < 45) {       // 10:41-10:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA JEDENÁCT DOPOLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes == 45) {                       // 10:45
    time.innerHTML = "JE TŘIČTVRTĚ NA JEDENÁCT DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes > 45 && minutes < 51) {        // 10:46-10:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA JEDENÁCT DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 10 && minutes > 50 && minutes <= 59) {        // 10:51-10:59
    time.innerHTML = "JE TÉMĚŘ JEDENÁCT HODIN DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 11:00
if (hours == 11 && minutes == 0) {                               // 11:00
    time.innerHTML = "JE JEDENÁCT HODIN DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 11 && minutes >= 1 && minutes < 10) {        // 11:01-11:09
    time.innerHTML = "JE KOUSEK PO JEDENÁCTI HODINÁCH DOPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 11 && minutes >= 10 && minutes < 15) {       // 11:11-11:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DVANÁCT V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes == 15) {                       // 11:15
    time.innerHTML = "JE ČTVRT NA DVANÁCT V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes > 15 && minutes < 25) {        // 11:16-11:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DVANÁCT V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes >= 25 && minutes < 30) {        // 11:25-11:29
    time.innerHTML = "JE TÉMĚŘ PŮL DVANÁCTÉ V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes == 30) {                       // 11:30
    time.innerHTML = "JE PŮL DVANÁCTÉ V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes > 30 && minutes < 41) {        // 11:31-11:40
    time.innerHTML = "JE KOUSEK PO PŮL DVANÁCTÉ V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes == 41 && minutes < 45) {       // 11:41-11:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DVANÁCT V POLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes == 45) {                       // 11:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DVANÁCT V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes > 45 && minutes < 51) {        // 11:46-11:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DVANÁCT V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 11 && minutes > 50 && minutes <= 59) {       // 11:51-11:59
    time.innerHTML = "JE TÉMĚŘ DVANÁCT HODIN V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 12:00
if (hours == 12 && minutes == 0) {                               // 12:00
    time.innerHTML = "JE DVANÁCT HODIN V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 12 && minutes >= 1 && minutes < 10) {        // 12:01-12:09
    time.innerHTML = "JE KOUSEK PO DVANÁCTI HODINÁCH V POLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 12 && minutes >= 10 && minutes < 15) {       // 12:11-12:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA JEDNU ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes == 15) {                       // 12:15
    time.innerHTML = "JE ČTVRT NA JEDNU ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes > 15 && minutes < 25) {        // 12:16-12:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA JEDNU ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes >= 25 && minutes < 30) {        // 12:25-12:29
    time.innerHTML = "JE TÉMĚŘ PŮL JEDNÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes == 30) {                       // 12:30
    time.innerHTML = "JE PŮL JEDNÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes > 30 && minutes < 41) {        // 12:31-12:40
    time.innerHTML = "JE KOUSEK PO PŮL JEDNÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes == 41 && minutes < 45) {       // 12:41-12:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA JEDNU ODPOLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes == 45) {                       // 12:45
    time.innerHTML = "JE TŘIČTVRTĚ NA JEDNU ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes > 45 && minutes < 51) {        // 12:46-12:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA JEDNU ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 12 && minutes > 50 && minutes <= 59) {       // 12:51-12:59
    time.innerHTML = "JE TÉMĚŘ JEDNA HODINA ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 13:00
if (hours == 13 && minutes == 0) {                               // 13:00
    time.innerHTML = "JE JEDNA HODINA ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 13 && minutes >= 1 && minutes < 10) {        // 13:01-13:09
    time.innerHTML = "JE KOUSEK PO JEDNÉ HODINĚ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 13 && minutes >= 10 && minutes < 15) {       // 13:11-13:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DVĚ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes == 15) {                       // 13:15
    time.innerHTML = "JE ČTVRT NA DVĚ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes > 15 && minutes < 25) {        // 13:16-13:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DVĚ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes >= 25 && minutes < 30) {        // 13:25-13:29
    time.innerHTML = "JE TÉMĚŘ PŮL DRUHÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes == 30) {                       // 13:30
    time.innerHTML = "JE PŮL DRUHÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes > 30 && minutes < 41) {        // 13:31-13:40
    time.innerHTML = "JE KOUSEK PO PŮL DRUHÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes == 41 && minutes < 45) {       // 13:41-13:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DVĚ ODPOLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes == 45) {                       // 13:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DVĚ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes > 45 && minutes < 51) {        // 13:46-13:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DVĚ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 13 && minutes > 50 && minutes <= 59) {       // 13:51-13:59
    time.innerHTML = "JSOU TÉMĚŘ DVĚ HODINY ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 14:00
if (hours == 14 && minutes == 0) {                               // 2:00
    time.innerHTML = "JSOU DVĚ HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 14 && minutes >= 1 && minutes < 10) {        // 2:01-2:09
    time.innerHTML = "JE KOUSEK PO DVOU HODINÁCH RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 14 && minutes >= 10 && minutes < 15) {       // 2:11-2:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes == 15) {                       // 2:15
    time.innerHTML = "JE ČTVRT NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes > 15 && minutes < 25) {        // 2:16-2:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes >= 25 && minutes < 30) {        // 2:25-2:29
    time.innerHTML = "JE TÉMĚŘ PŮL TŘETÍ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes == 30) {                       // 2:30
    time.innerHTML = "JE PŮL TŘETÍ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes > 30 && minutes < 41) {        // 2:31-2:40
    time.innerHTML = "JE KOUSEK PO PŮL TŘETÍ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes == 41 && minutes < 45) {       // 2:41-2:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA TŘI RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes == 45) {                       // 2:45
    time.innerHTML = "JE TŘIČTVRTĚ NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes > 45 && minutes < 51) {        // 2:46-2:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA TŘI RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 14 && minutes > 50 && minutes <= 59) {       // 2:51-2:59
    time.innerHTML = "JSOU TÉMĚŘ TŘI HODINY RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 15:00
if (hours == 15 && minutes == 0) {                               // 15:00
    time.innerHTML = "JSOU TŘI HODINY ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 15 && minutes >= 1 && minutes < 10) {        // 15:01-15:09
    time.innerHTML = "JE KOUSEK PO TŘECH HODINÁCH ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 15 && minutes >= 10 && minutes < 15) {       // 15:11-15:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA ČTYŘI ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes == 15) {                       // 15:15
    time.innerHTML = "JE ČTVRT NA ČTYŘI ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes > 15 && minutes < 25) {        // 15:16-15:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA ČTYŘI ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes >= 25 && minutes < 30) {        // 15:25-15:29
    time.innerHTML = "JE TÉMĚŘ PŮL ČTVRTÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes == 30) {                       // 15:30
    time.innerHTML = "JE PŮL ČTVRTÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes > 30 && minutes < 41) {        // 15:31-15:40
    time.innerHTML = "JE KOUSEK PO PŮL ČTVRTÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes == 41 && minutes < 45) {       // 15:41-15:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA ČTYŘI ODPOLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes == 45) {                       // 15:45
    time.innerHTML = "JE TŘIČTVRTĚ NA ČTYŘI ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes > 45 && minutes < 51) {        // 15:46-15:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA ČTYŘI ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 15 && minutes > 50 && minutes <= 59) {        // 15:51-15:59
    time.innerHTML = "JSOU TÉMĚŘ ČTYŘI HODINY ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 16:00
if (hours == 16 && minutes == 0) {                               // 16:00
    time.innerHTML = "JSOU ČTYŘI HODINY ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 16 && minutes >= 1 && minutes < 10) {        // 16:01-16:09
    time.innerHTML = "JE KOUSEK PO ČTYŘECH HODINÁCH ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 16 && minutes >= 10 && minutes < 15) {       // 16:11-16:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA PĚT ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes == 15) {                       // 16:15
    time.innerHTML = "JE ČTVRT NA PĚT ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes > 15 && minutes < 25) {        // 16:16-16:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA PĚT ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes >= 25 && minutes < 30) {        // 16:25-16:29
    time.innerHTML = "JE TÉMĚŘ PŮL PÁTÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes == 30) {                       // 16:30
    time.innerHTML = "JE PŮL PÁTÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes > 30 && minutes < 41) {        // 16:31-16:40
    time.innerHTML = "JE KOUSEK PO PŮL PÁTÉ ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes == 41 && minutes < 45) {       // 16:41-16:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA PĚT ODPOLEDNE."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes == 45) {                       // 16:45
    time.innerHTML = "JE TŘIČTVRTĚ NA PĚT ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes > 45 && minutes < 51) {        // 16:46-16:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA PĚT ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 16 && minutes > 45 && minutes <= 59) {        // 16:51-16:59
    time.innerHTML = "JE TÉMĚŘ PĚT HODIN ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 17:00
if (hours == 17 && minutes == 0) {                               // 17:00
    time.innerHTML = "JE PĚT HODIN ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 17 && minutes >= 1 && minutes < 10) {        // 17:01-17:09
    time.innerHTML = "JE KOUSEK PO PĚTI HODINÁCH ODPOLEDNE.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 17 && minutes >= 10 && minutes < 15) {       // 17:11-17:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA ŠEST VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes == 15) {                       // 17:15
    time.innerHTML = "JE ČTVRT NA ŠEST VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes > 15 && minutes < 25) {        // 17:16-17:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA ŠEST VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes >= 25 && minutes < 30) {        // 17:25-17:29
    time.innerHTML = "JE TÉMĚŘ PŮL ŠESTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes == 30) {                       // 17:30
    time.innerHTML = "JE PŮL ŠESTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes > 30 && minutes < 41) {        // 17:31-17:40
    time.innerHTML = "JE KOUSEK PO PŮL ŠESTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes == 41 && minutes < 45) {       // 17:41-17:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA ŠEST VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes == 45) {                       // 17:45
    time.innerHTML = "JE TŘIČTVRTĚ NA ŠEST VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes > 45 && minutes < 51) {        // 17:46-17:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA ŠEST VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 17 && minutes > 45 && minutes <= 59) {        // 17:51-17:59
    time.innerHTML = "JE TÉMĚŘ ŠEST HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 18:00
if (hours == 18 && minutes == 0) {                               // 18:00
    time.innerHTML = "JE ŠEST HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 18 && minutes >= 1 && minutes < 10) {        // 18:01-18:09
    time.innerHTML = "JE KOUSEK PO ŠESTI HODINÁCH VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 18 && minutes >= 10 && minutes < 15) {       // 18:11-18:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA SEDM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes == 15) {                       // 18:15
    time.innerHTML = "JE ČTVRT NA SEDM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes > 15 && minutes < 25) {        // 18:16-18:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA SEDM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes >= 25 && minutes < 30) {        // 18:25-18:29
    time.innerHTML = "JE TÉMĚŘ PŮL SEDMÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes == 30) {                       // 18:30
    time.innerHTML = "JE PŮL SEDMÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes > 30 && minutes < 41) {        // 18:31-18:40
    time.innerHTML = "JE KOUSEK PO PŮL SEDMÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes == 41 && minutes < 45) {       // 18:41-18:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA SEDM VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes == 45) {                       // 18:45
    time.innerHTML = "JE TŘIČTVRTĚ NA SEDM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes > 45 && minutes < 51) {        // 18:46-18:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA SEDM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 18 && minutes > 50 && minutes <= 59) {        // 18:51-18:59
    time.innerHTML = "JE TÉMĚŘ SEDM HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 19:00
if (hours == 19 && minutes == 0) {                               // 19:00
    time.innerHTML = "JE SEDM HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 19 && minutes >= 1 && minutes < 10) {        // 19:01-19:09
    time.innerHTML = "JE KOUSEK PO SEDMI HODINÁCH VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 19 && minutes >= 10 && minutes < 15) {       // 19:11-19:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA OSM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes == 15) {                       // 19:15
    time.innerHTML = "JE ČTVRT NA OSM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes > 15 && minutes < 25) {        // 19:17-19:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA OSM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes >= 25 && minutes < 30) {        // 19:25-19:29
    time.innerHTML = "JE TÉMĚŘ PŮL OSMÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes == 30) {                       // 19:30
    time.innerHTML = "JE PŮL OSMÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes > 30 && minutes < 41) {        // 19:31-19:40
    time.innerHTML = "JE KOUSEK PO PŮL OSMÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes == 41 && minutes < 45) {       // 19:41-19:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA OSM VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes == 45) {                       // 19:45
    time.innerHTML = "JE TŘIČTVRTĚ NA OSM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes > 45 && minutes < 51) {        // 19:46-19:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA OSM VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 19 && minutes > 50 && minutes <= 59) {        // 19:51-19:59
    time.innerHTML = "JE TÉMĚŘ OSM HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 20:00
if (hours == 20 && minutes == 0) {                               // 20:00
    time.innerHTML = "JE OSM HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 20 && minutes >= 1 && minutes < 10) {        // 20:01-20:09
    time.innerHTML = "JE KOUSEK PO OSMI HODINÁCH VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 20 && minutes >= 10 && minutes < 15) {       // 20:11-20:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DEVĚT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes == 15) {                       // 20:15
    time.innerHTML = "JE ČTVRT NA DEVĚT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes > 15 && minutes < 25) {        // 20:16-20:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DEVĚT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes >= 25 && minutes < 30) {        // 20:25-20:29
    time.innerHTML = "JE TÉMĚŘ PŮL DEVÁTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes == 30) {                       // 20:30
    time.innerHTML = "JE PŮL DEVÁTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes > 30 && minutes < 41) {        // 20:31-20:40
    time.innerHTML = "JE KOUSEK PO PŮL DEVÁTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes == 41 && minutes < 45) {       // 20:41-20:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DEVĚT VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes == 45) {                       // 20:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DEVĚT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes > 45 && minutes < 51) {        // 20:46-20:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DEVĚT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 20 && minutes > 40 && minutes <= 59) {        // 20:51-20:59
    time.innerHTML = "JE TÉMĚŘ DEVĚT HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 21:00
if (hours == 21 && minutes == 0) {                               // 21:00
    time.innerHTML = "JE DEVĚT HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 21 && minutes >= 1 && minutes < 10) {        // 21:01-21:09
    time.innerHTML = "JE KOUSEK PO DEVÍTI HODINÁCH VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 21 && minutes >= 10 && minutes < 15) {       // 21:11-21:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DESET VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes == 15) {                       // 21:15
    time.innerHTML = "JE ČTVRT NA DESET VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes > 15 && minutes < 25) {        // 21:16-21:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DESET VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes >= 25 && minutes < 30) {        // 21:25-21:29
    time.innerHTML = "JE TÉMĚŘ PŮL DESÁTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes == 30) {                       // 21:30
    time.innerHTML = "JE PŮL DESÁTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes > 30 && minutes < 41) {        // 21:31-21:40
    time.innerHTML = "JE KOUSEK PO PŮL DESÁTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes == 41 && minutes < 45) {       // 21:41-21:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DESET VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes == 45) {                       // 21:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DESET VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes > 45 && minutes < 51) {        // 21:46-21:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DESET VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 21 && minutes > 50 && minutes <= 59) {       // 21:51-21:59
    time.innerHTML = "JE TÉMĚŘ DESET HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 22:00
if (hours == 22 && minutes == 0) {                               // 22:00
    time.innerHTML = "JE DESET HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 22 && minutes >= 1 && minutes < 10) {        // 22:01-22:09
    time.innerHTML = "JE KOUSEK PO DESÍTI HODINÁCH VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 22 && minutes >= 10 && minutes < 15) {       // 22:11-22:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA JEDENÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes == 15) {                       // 22:15
    time.innerHTML = "JE ČTVRT NA JEDENÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes > 15 && minutes < 25) {        // 22:16-22:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA JEDENÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes >= 25 && minutes < 30) {        // 22:25-22:29
    time.innerHTML = "JE TÉMĚŘ PŮL JEDENÁCTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes == 30) {                       // 22:30
    time.innerHTML = "JE PŮL JEDENÁCTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes > 30 && minutes < 41) {        // 22:31-22:40
    time.innerHTML = "JE KOUSEK PO PŮL JEDENÁCTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes == 41 && minutes < 45) {       // 22:41-22:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA JEDENÁCT VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes == 45) {                       // 22:45
    time.innerHTML = "JE TŘIČTVRTĚ NA JEDENÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes > 45 && minutes < 51) {        // 22:46-22:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA JEDENÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 22 && minutes > 50 && minutes <= 59) {        // 22:51-22:59
    time.innerHTML = "JE TÉMĚŘ JEDENÁCT HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 23:00
if (hours == 23 && minutes == 0) {                               // 23:00
    time.innerHTML = "JE JEDENÁCT HODIN VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 23 && minutes >= 1 && minutes < 10) {        // 23:01-23:09
    time.innerHTML = "JE KOUSEK PO JEDENÁCTI HODINÁCH VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 23 && minutes >= 10 && minutes < 15) {       // 23:11-23:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA DVANÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes == 15) {                       // 23:15
    time.innerHTML = "JE ČTVRT NA DVANÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes > 15 && minutes < 25) {        // 23:16-23:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA DVANÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes >= 25 && minutes < 30) {        // 23:25-23:29
    time.innerHTML = "JE TÉMĚŘ PŮL DVANÁCTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes == 30) {                       // 23:30
    time.innerHTML = "JE PŮL DVANÁCTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes > 30 && minutes < 41) {        // 23:31-23:40
    time.innerHTML = "JE KOUSEK PO PŮL DVANÁCTÉ VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes == 41 && minutes < 45) {       // 23:41-23:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA DVANÁCT VEČER."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes == 45) {                       // 23:45
    time.innerHTML = "JE TŘIČTVRTĚ NA DVANÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes > 45 && minutes < 51) {        // 23:46-23:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA DVANÁCT VEČER.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 23 && minutes > 50 && minutes <= 59) {       // 23:51-23:59
    time.innerHTML = "JE TÉMĚŘ PŮLNOC.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}

// 0:00
if (hours == 0 && minutes == 0) {                               // 0:00
    time.innerHTML = "JE PŘESNĚ PŮLNOC.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 0 && minutes >= 1 && minutes < 10) {        // 0:01-0:09
    time.innerHTML = "JE KOUSEK PO PŮLNOCI.";
    document.title = "SLOVNÍ HODINY | "+hours+":0"+minutes;
} else if (hours == 0 && minutes >= 10 && minutes < 15) {       // 0:11-0:14
    time.innerHTML = "JE TÉMĚŘ ČTVRT NA JEDNU RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes == 15) {                       // 0:15
    time.innerHTML = "JE ČTVRT NA JEDNU RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes > 15 && minutes < 25) {        // 0:16-0:24
    time.innerHTML = "JE KOUSEK PO ČTVRT NA JEDNU RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes >= 25 && minutes < 30) {        // 0:25-0:29
    time.innerHTML = "JE TÉMĚŘ PŮL JEDNÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes == 30) {                       // 0:30
    time.innerHTML = "JE PŮL JEDNÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes > 30 && minutes < 41) {        // 0:31-0:40
    time.innerHTML = "JE KOUSEK PO PŮL JEDNÉ RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes == 41 && minutes < 45) {       // 0:41-0:44
    time.innerHTML = "JE TÉMĚŘ TŘIČTVRTĚ NA JEDNU RÁNO."
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes == 45) {                       // 0:45
    time.innerHTML = "JE TŘIČTVRTĚ NA JEDNU RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes > 45 && minutes < 51) {        // 0:46-0:50
    time.innerHTML = "JE KOUSEK PO TŘIČTVRTĚ NA JENDU RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
} else if (hours == 0 && minutes > 50 && minutes <= 59) {       // 0:51-0:59
    time.innerHTML = "JE TÉMĚŘ JEDNA HODINA RÁNO.";
    document.title = "SLOVNÍ HODINY | "+hours+":"+minutes;
}


setTimeout(function(){
    window.location.href = window.location.href
 }, 2000);
