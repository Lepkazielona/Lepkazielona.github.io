const zarciki = [
    {
        "id" : "0",
        "title" : "Mama uczy synka!!! haha",
        "content" : "Mama uczy synka liczyć, zadaje pytania: \n – Ile nóg ma pies? \n – Cztery. \n – A ile ma uszu? \n– Dwoje! \n – A oczu? \n – Mamo, czy ty nigdy nie widziałaś psa?!"
    }
]

function genzart(){
    document.getElementById("tyt").innerHTML = zarciki[0].title;
    document.getElementById("cont").innerHTML = zarciki[0].content;

    document.getElementById("gif").setAttribute.src = "./scripts/gify/(8).gif";
}