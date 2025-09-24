// start setting box
let icon = document.querySelector(".icon");
icon.onclick = () => {
  document.querySelector(".fa-gear").classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};

//  start change color
let colorList = document.querySelectorAll(".color-list li");
//start localStorage color
let mainColor = localStorage.getItem("color_option");
if (mainColor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  colorList.forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.color === mainColor) el.classList.add("active");
  });
}
let imgColor;

// end localStorage color
colorList.forEach((li) => {
  li.onclick = (e) => {
    // console.log(e.target.getAttribute("data-color"))
    // console.log(e.target.dataset.color)
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.getAttribute("data-color")
    );
    // document.documentElement.style.cssText=`--main-color:${e.target.getAttribute("data-color")};`
    localStorage.setItem("color_option", e.target.dataset.color);
    colorList.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    imgColor = e.target.getAttribute("data-color");
    document.querySelector(
      "#about-img"
    ).src = `./imgs/modified_svg_${imgColor.replace("#", "")}.svg`;
  };
});
let savedColor = localStorage.getItem("color_option");
if (savedColor !== null) {
  document.querySelector(
    "#about-img"
  ).src = `./imgs/modified_svg_${savedColor.replace("#", "")}.svg`;
}

// end change color

// start random background

// let backgroundOption = true;
// let backgroundInterval;
// let backgroundLocal = localStorage.getItem("background_option");
// if (backgroundLocal !== null) {
//   if (backgroundLocal === "true") {
//     backgroundOption = true;
//     randomizeImgs();
//   } else {
//     backgroundOption = false;
//   }
// }
// document.querySelectorAll(".random-background span").forEach((ele) => {
//   ele.classList.remove("active");
// });

// if (backgroundLocal === "true") {
//   document.querySelector(".random-background span.Yes").classList.add("active");
// } else {
//   document.querySelector(".random-background span.No").classList.add("active");
// }
// let randomBackground = document.querySelectorAll(".random-background span");
// randomBackground.forEach((span) => {
//   span.onclick = (e) => {
//     randomBackground.forEach((el) => {
//       el.classList.remove("active");
//     });
//     //  e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
//     //       ele.classList.remove("active");
//     // })
//     e.target.classList.add("active");

//     if (e.target.getAttribute("data-background") === "Yes") {
//       backgroundOption = true;
//       randomizeImgs();
//       localStorage.setItem("background_option", true);
//     } else {
//       backgroundOption = false;
//       clearInterval(backgroundInterval);
//       localStorage.setItem("background_option", false);
//     }
//   };
// });
// end random background

// end setting box
// start landing
// let imgArr = [
//   "./imgs/010.webp",
//   "./imgs/08.jfif",
//   "./imgs/07.jfif",
//   "./imgs/06.jfif",
//   "./imgs/03.jpeg",
// ];
// let landing = document.querySelector("header");
// // start randomBackground

// function randomizeImgs() {
//   if (backgroundOption === true) {
//     backgroundInterval = setInterval(() => {
//       let randomNumber = Math.floor(Math.random() * imgArr.length);
//       landing.style.backgroundImage = `url(${imgArr[randomNumber]}) `;
//     }, 3000);
//   }
// }

let landing = document.querySelector("header");

let backgroundLocal = localStorage.getItem("background-option");
if (backgroundLocal !== null) {
  landing.style.backgroundImage = `url(${backgroundLocal}) `;
}
let backgrounds = document.querySelectorAll(".imgs .img");
backgrounds.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    landing.style.backgroundImage = `url(${e.target.dataset.url}) `;
    localStorage.setItem("background-option", e.target.dataset.url);
    console.log(e.target.dataset.url);
  });
});
// end randomBackground

// start skills
let skills = document.querySelector(".our-skills");
let skillBars = document.querySelectorAll(".our-skills .skill-progress span");

window.onscroll = () => {
  let skillsOffsetTop = skills.offsetTop;
  let skillsOuterHeight = skills.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (windowScrollTop > skillsOffsetTop - windowHeight + 100) {
    skillBars.forEach((bar) => {
      bar.style.width = bar.dataset.progress;
    });
  } else {
    skillBars.forEach((bar) => {
      bar.style.width = "0";
    });
  }
};

// end skills

// start gallery
let gallery = document.querySelector(".gallery");
let galleryImg = document.querySelectorAll(".gallery img");
galleryImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    let galleryOverlay = document.createElement("div");
    galleryOverlay.classList.add("gallery-overlay");
    document.body.appendChild(galleryOverlay);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    if (img.alt !== null) {
      let popupHeading = document.createElement("h3");
      let headingText = document.createTextNode(img.alt);
      popupHeading.appendChild(headingText);
      popupBox.appendChild(popupHeading);
    }
    let popupImg = document.createElement("img");

    popupImg.src = e.target.src;
    popupBox.appendChild(popupImg);
    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");
    let closeText = document.createTextNode("X");
    closeButton.appendChild(closeText);
    closeButton.classList.add("close-button");
    popupBox.append(closeButton);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-button")) {
    e.target.parentElement.remove();
    document.querySelector(".gallery-overlay").remove();
  }
});
// end gallery
