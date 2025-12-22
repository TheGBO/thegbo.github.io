const postContainer = document.getElementById("content-wrapper");

const CreatePost = (title, badges, content, thumbnail, button) => {
    var post = {
        title: title,
        badges: badges,
        content: content,
        thumbnail: thumbnail,
        button: button,
        hash: "null-hash"
    }
};

function DisplayPost(post) {
    const article = document.createElement("article");
    article.classList.add("post");

    const postContent = document.createElement("div");
    postContent.classList.add("post-content");

    const img = document.createElement("img");
    img.src = post.thumbnail;
    img.alt = "";
    img.classList.add("post-thumbnail");

    const postText = document.createElement("div");
    postText.classList.add("post-text");


    const title = document.createElement("h1");
    title.classList.add("post-title");
    title.textContent = post.title;

    let postBadgeCount = post.badges.length;
    if(postBadgeCount > 0)
    {
        for (let i = 0; i < postBadgeCount; i++) {
            const postBadge = document.createElement("i");
            postBadge.classList.add("platform-icon")

            const badgeImage = document.createElement("img");
            const badgePlatform = post.badges[i];
            badgeImage.src = `/assets/img/badges/${badgePlatform}.svg`;
            postBadge.appendChild(badgeImage);
            title.appendChild(postBadge)
        }
    }

    const content = document.createElement("p");
    content.classList.add("post-content");
    content.textContent = post.content;

    const linkParagraph = document.createElement("p");
    linkParagraph.classList.add("post-content");

    if(post.button !== null)
    {
        const link = document.createElement("a");
        link.href = post.button.url;
        link.classList.add("clickable");
        link.textContent = post.button.text;
        linkParagraph.appendChild(link);
    }

    postText.appendChild(title);
    postText.appendChild(content);
    postText.appendChild(linkParagraph);

    postContent.appendChild(img);
    postContent.appendChild(postText);

    article.appendChild(postContent);
    postContainer.appendChild(article);
}

function FetchPosts(category)
{
    fetch(`/assets/posts/${category}.json`).then(response => response.json()).then(data => {
        console.log(data);
        data.forEach(element => {
            console.log(element);
            DisplayPost(element);
        });
    })

}
