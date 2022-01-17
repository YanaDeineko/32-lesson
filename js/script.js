let playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];


const ol = document.createElement("ol");
const Div = document.getElementById("content");
Div.append(ol);
for (let i in playList) {
    const li = document.createElement("li");
    const cont = document.createElement("p");
    cont.append(playList[i].author);
    cont.append(" : ");
    cont.append(playList[i].song);
    li.append(cont);
    ol.append(li);
}



let i = -1;
function trafficLight(){
    i++;
    let arr = ['red','orange','green'],
        light = document.querySelectorAll('.traffic__light');
    if(light[i-1]) light[i-1].style.backgroundColor = '';
    if(i == arr.length) i = 0;
    light[i].style.backgroundColor = arr[i];
}