const postContainer = document.getElementById("content-wrapper");

const createPost = (title, badges, content, thumbnail, button) => {
    var post = {
        title: title,
        badges: badges,
        content: content,
        thumbnail: thumbnail,
        button: button,
        hash: "null-hash"
    }
};

function DisplayPost(post){
    postContainer.innerHTML += `
    <article class="post dynamic-post">
        <div class="post-content">
            <img src="${post.thumbnail}" alt="" class="post-thumbnail">
            <div class="post-text">
                <h1 class="post-title">
                    ${post.title}
                </h1>
                    <p class="post-content">
                        ${post.content}
                    </p>
                    <p class="post-content" class="clickable">
                        <a href="https://thegbo.github.io/Lowresnator/" class="clickable">Testar</a>
                    </p>
            </div>
        </div>
    </article>
    `;
}