window.onload = (event) => {
    const articleContainer = document.getElementById("articles");
    fetch("https://newsapi.org/v2/everything?q=children%20movies&apiKey=8db814dd112443d5b8c056d4e67fe51a").then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        for (let i=0; i<10; i++) {
            articleContainer.innerHTML +=`<p>${data.articles[i].title}</p> <a href="${data.articles[i].url}">${data.articles[i].url}</a><br>`;
        }
    });
};

//API Key 8db814dd112443d5b8c056d4e67fe51a