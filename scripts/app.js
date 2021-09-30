var cytaty = [
    {
        "id" : "0",
        "tytuł" : "Nie wiem jak to nazwać",
        "tresc" : "Szybkich jak wiatr Sypkich jak piach Gorących jak słońce Pozdrowień tysiące"
    },
    {
        "id" : "1",
        "tytuł" : "O wyzdrowieniu",
        "tresc" : "'Szlachetne zdrowie, nikt się nie dowie jako smakujesz,aż się zepsujesz...' Życzymy szybkiego powrotu do zdrowia i czekamy na Ciebie z utęsknieniem!  Dbaj o siebie!"
    },
    {   
        "id" : "2",
        "tytuł" : "Byś zdrowiał szybko",
        "tresc" : "Hej misiaczku mój pluszowy daj znać czy już jesteś zdrowy czy ci humor dopisuje i gardełko nie szwankuje."
    },
    {   
        "id" : "3",
       "tytuł" : "esemesek",
       "tresc" :  "Za piękne oczy za śliczna twarz widokówkę (sms-ka) ode mnie masz"
    },
    {
        "id" : "4",
        "tytuł" : "pozdrowienia z oddali",
        "tresc" : "Pozdrowienia śle z oddali, byśmy szybko się spotkali Daje Ci buziaka słowami bo odległość między nami nie pozwala dać ustami."
    },
    {
        "id" : "5",
        "tyuł" : "O pogodzie",
        "tresc" : "Czas szybko mija Pogoda się zmienia A ja przesyłam Ci pozdrowienia"
    }
]

function losowanko(){
    var kupa = Math.floor(Math.random() * 4);
    console.log(kupa)
    document.getElementById("Cytacik").innerHTML = cytaty[kupa].tresc;
    document.getElementById("Tytulik").innerHTML = cytaty[kupa].tytuł;
    document.getElementById("idd").innerHTML = "pozdrowienie o numerze " + cytaty[kupa].id;
    console.log(cytaty[kupa])
}