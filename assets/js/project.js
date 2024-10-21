AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Personal Portfolio Website",
    cardImage: "assets/images/project-page/Portfolio.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/personal-portfolio-website/",
    Githublink: "https://github.com/Hi-Aman-Jain/portfolio-website",
  },
  {
    title: "LEARNIVERSE: E-Learning Website",
    cardImage: "assets/images/project-page/Learniverse.jpg",
    description: ".",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/LEARNIVERSE-E-Learning-Website/",
    Githublink: "https://github.com/Hi-Aman-Jain/LEARNIVERSE-E-Learning-Website",
  },
  {
    title: "SOUL: A 3-D Scrolling Site",
    cardImage: "assets/images/project-page/Soul.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://github.com/Hi-Aman-Jain/Soul-Scrolling-Site",
    Githublink: "https://github.com/Hi-Aman-Jain/Soul-Scrolling-Site",
  },
  {
    title: "3D Sphere Ball",
    cardImage: "assets/images/project-page/3D-Ball.png",
    description: "",
    tagimg: "",
    Previewlink: "https://github.com/Hi-Aman-Jain/3D-Sphere-ball/",
    Githublink: "https://github.com/Hi-Aman-Jain/3D-Sphere-ball",
  },
  {
    title: "My Picture Showcase",
    cardImage: "assets/images/project-page/Picture.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/My-Pic-Gallery/",
    Githublink: "https://github.com/Hi-Aman-Jain/My-Pic-Gallery",
  },
  {
    title: "Modern Image Gallery",
    cardImage: "assets/images/project-page/Modern.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/Modern-Gallery/",
    Githublink: "https://github.com/Hi-Aman-Jain/Modern-Gallery",
  },
  {
    title: "Responsive Photo Slider",
    cardImage: "assets/images/project-page/Slider.png",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/image-slider/",
    Githublink: "https://github.com/Hi-Aman-Jain/image-slider",
  },
  {
    title: "Stylish Image Gallery",
    cardImage: "assets/images/project-page/Stylish.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/Stylish-Gallery/",
    Githublink: "https://github.com/Hi-Aman-Jain/Stylish-Gallery",
  },
  {
    title: "Amazon Clone",
    cardImage: "assets/images/project-page/Amazon-clone.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/Amazon-Clone/",
    Githublink: "https://github.com/Hi-Aman-Jain/Amazon-Clone",
  },
  {
    title: "Typographic Clock",
    cardImage: "assets/images/project-page/Typographic.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/Typographic-Clock/",
    Githublink: "https://github.com/Hi-Aman-Jain/Typographic-Clock",
  },
  {
    title: "Building Blocks Game",
    cardImage: "assets/images/project-page/Block-game.png",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/building-block_game/",
    Githublink: "https://github.com/Hi-Aman-Jain/building-block_game.git",
  },
  {
    title: "Kill the Bird Game",
    cardImage: "assets/images/project-page/Bird-game.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://hi-aman-jain.github.io/Bird_Game/",
    Githublink: "https://github.com/Hi-Aman-Jain/Bird_Game",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <!-- Monitor (Preview) Icon with Tooltip -->
                  <li><a href="${Previewlink}" class="social-icon" title="Live Preview"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>

                  <!-- GitHub Icon with Tooltip -->
                  <li><a href="${Githublink}" class="social-icon" title="GitHub Repo Link"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);