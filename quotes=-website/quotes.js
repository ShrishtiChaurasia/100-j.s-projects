const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
let realData = "";

const newQuotes = () => {
    let num = Math.floor(Math.random() * 10);
    author.innerText = realData[num].author;
    quotes.innerText = realData[num].text;
    
}

const readQuots = async () =>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
     realData = await data.json();
     newQuotes();
        //console.log(realData);
        //console.log(realData[3].text);
        //console.log(realData[3].author);
    }
    catch(error){}
}

btn.addEventListener("click",newQuotes);


readQuots();