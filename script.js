//https://jsonplaceholder.typicode.com/posts

const section = document.getElementById("section")

let data = []
let API_KEY = async () => {
    let Api_url = 'https://jsonplaceholder.typicode.com/posts'
    try {
        let fetch_Await =  await fetch(Api_url)
        let response = await fetch_Await.json()
        data = response
        createQuotes()
       console.log("RESPONSE: ",response);  
//          console.log("DATA: ",data);

    } catch (error) {
        console.log(error);
    }
}

function createQuotes() {
    data.forEach((posts) => {
        console.log("POSTS:  ",posts);
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.textContent = posts.title
        let h2 = document.createElement("h2")
        h2.textContent = posts.body
        div.appendChild(h3)
       div.appendChild(h2)
      section.append(div)
    });
}
createQuotes()
API_KEY()