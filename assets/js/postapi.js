const apiURL = "https://thegbo.herokuapp.com/api/post";
const postContainer = document.getElementById("content-wrapper");

function createPost(thumbnail, title, desc, url){
    console.log(url);
    postContainer.innerHTML += `
    <article class="post dynamic-post">
        <div class="post-content">
            <img src="${thumbnail}" alt="" class="post-thumbnail">
            <div class="post-text">
                <h1 class="post-title">
                    ${title}
                </h1>
                <p class="post-content">
                    ${desc.substring(0,33)}...
                </p>
                <p class="post-content">
                    <a href="post?id=${url}">- Read Article -</a>
                </p>
            </div>
        </div>
    </article>
    `;
}

function createDetailedPost(thumbnail, title, desc){
    postContainer.innerHTML += `
    <article class="post dynamic-post detailed-post">
            <div class="post-content">
                <div class="post-text">
                    <h1 class="post-title">
                        ${title}
                    </h1>
                    <p class="post-content">
                        ${desc}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function fetchPosts(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', apiURL)
    xhr.send(apiURL);
    xhr.onload = () => {
        let data = JSON.parse(xhr.response);
        console.log(data.data);
        data.data.slice().reverse().foreach(val => {
            createPost(val.thumbnail, val.title, val.content.replace(/<[^>]*>?/gm, ''), val.id)
        });
    }
}

function fetchSinglePost(id){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `${apiURL}/${id}`);
    xhr.send(apiURL);
    xhr.onload = () => {
        let data = JSON.parse(xhr.response);
        console.log(data.data);
        let val = data.data;
        createDetailedPost(val.thumbnail, val.title, val.content)
    }
}

console.log(window.location.hash.replace('#',""))