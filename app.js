console.log("blogging");

// Show Read More Template on click read more
const read = document.querySelector(".read");
const block = document.querySelector(".block");
const block2 = document.querySelector("#block");
const wlc = document.querySelector(".wlc");

read.style.display = "none";

const show = document.getElementById("showMore");
show.addEventListener("click",(e)=>{
    e.preventDefault();
        read.style.display = "block";
        block.style.display = "none";
        block2.style.display = "none";
        wlc.style.display = "none";
});

// Count Like & Dislike 

const like = document.getElementById("like");
const disLike = document.getElementById("dislike");
const disLikeCount = document.getElementById("disLikeCount");
const likeCount = document.getElementById("likeCount");

let count = 0;
like.addEventListener("click",()=>{
    // console.log("like");
    count++;
    likeCount.textContent = count;
})
let count2 = 0;
disLike.addEventListener("click",()=>{
    // console.log("disLike");
    count2++;
    disLikeCount.textContent = count2;
});


// Views and Users




