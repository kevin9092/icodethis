// // Add JavaScript code here
const postCard = {};

postCard.favourite = false;
postCard.favouriteCount = 70;

postCard.init = () => {
  const likesEl = document.querySelector(".likes");
  const likesTextEl = likesEl.querySelector("p");
  likesTextEl.innerText = `${postCard.favouriteCount} Likes`;
  likesEl.addEventListener("click", (event) => {
    postCard.favourite = !postCard.favourite;

    if (postCard.favourite) {
      likesEl.setAttribute("data-active", "true");
      postCard.favouriteCount += 1;
    } else {
      likesEl.setAttribute("data-active", "false");
      postCard.favouriteCount -= 1;
    }
    likesTextEl.innerText = `${postCard.favouriteCount} Likes`;
  });
};

postCard.init();
