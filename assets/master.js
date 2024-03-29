let index = 0;
const nextBtn = document.querySelector("#nextBtn");
const previousBtn = document.querySelector("#previousBtn");
const randomBtn = document.querySelector("#randomBtn");
const img = document.querySelector("img");
const userName = document.querySelector("h2");
const jobName = document.querySelector("h3");
const comment = document.querySelector("p");

const commentData = [
  {
    srcName: "assets/img/1-user.jpg",
    name: "ladan hazrati",
    job: "Frontend Developer",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem beatae dolore, ducimus eveniet illum labore maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga",
  },
  {
    srcName: "assets/img/2-user.jpg",
    name: "Mahsa Golabi",
    job: "Barber",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem ore maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
  },
  {
    srcName: "assets/img/3-user.jpg",
    name: "Helma mahdavi",
    job: "BackEnd Developer",
    comment:
      " Lorem ipsum dolor sit amet,maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
  },
  {
    srcName: "assets/img/4-user.jpg",
    name: "Ghasem Kargar",
    job: "Baker",
    comment:
      " Lorem ipsum dolor sit amet, consectetur adipe maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
  },
];

const setData = () => {
  img.setAttribute("src", commentData[index].srcName);
  userName.innerText = commentData[index].name;
  jobName.innerText = commentData[index].job;
  comment.innerText = commentData[index].comment;
};

const nextHandler = () => {
  index++;
  if (index >= commentData.length) {
    index = 0;
  }
  setData();
};
const previousHandler = () => {
  index--;
  if (index < 0) {
    index = commentData.length - 1;
  }
  setData();
};
const randomHandler = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  index = randomNumber;
  setData();
};

window.addEventListener("load", randomHandler);
nextBtn.addEventListener("click", nextHandler);
previousBtn.addEventListener("click", previousHandler);
randomBtn.addEventListener("click", randomHandler);
