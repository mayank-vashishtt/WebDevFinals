

let charLength = document.querySelector("#char-count");
let tweet_content_posting = "";
setInterval(() => {
    let tweet_content = document.getElementById("tweet-content").value;
    tweet_content_posting = tweet_content;
    charLength.innerText = tweet_content.length;
}, 100)


console.log("hello" + tweet_content_posting)



target = document.querySelector(".tweets")
document.querySelector("#post-button").onclick = () => {
    console.log('clicked')
    let tweet_post = `
    <div class="tweet_post">
    <div class="post">
        <div class="tweet-box">
            <div class="tweet-box-upper">
                <div class="profile-detail">
                    <img id="profile-pic" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="profile-pic">
                    <p id="profile-name">Mayankvashishtt</p>
                    <p id="username">@mayankvashishtt</p>
                </div>
                <div class="action-buttons">
                    <button id="edit-tweet">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit">
                    </button>
                    <button id="delete-tweet">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete">
                    </button>
                </div>
            </div>
            <div class="middle">
                <p id="tweet-text">
                    ${tweet_content_posting}
                </p>
                <div class="lower">
                    <div class="tweet-lower-buttons">
                        <button id="comment">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment">
                        </button>
                        <button id="heart">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="heart">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `
    target.innerHTML += tweet_post;
};
