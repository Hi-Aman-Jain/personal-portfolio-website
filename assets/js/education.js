AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  
  {
    title: "Web Development",
    cardImage: "assets/images/education-page/udemy-logo.jpg",
    moocLink: "https://drive.google.com/file/d/1zciNRCQo-Dfw5h9GHmKONkaakFxBcrFu/view?usp=share_link",
  },
  {
    title: "Data Structure And Algorithm using C & C++",
    cardImage: "assets/images/education-page/udemy-logo.jpg",
    moocLink: "https://www.udemy.com/certificate/UC-40555f72-18a7-4e6b-9888-629b75828aa2/",
  },
  {
    title: "Google Cloud Fundamentals",
    cardImage: "assets/images/education-page/courseralogo.jpg",
    moocLink: "https://drive.google.com/file/d/1yn91sGktsF-xesq4gsWt9vjHH8alHSaj/view?usp=share_link",
  },
  {
    title: "Essential Google Cloud Infrastucture",
    cardImage: "assets/images/education-page/courseralogo.jpg",
    moocLink: "https://drive.google.com/file/d/1EWaBXb-MedcjvqXVCiigsLqL9hvRI8x2/view?usp=share_link",
  },
  {
    title: "MEARN Stack",
    cardImage: "assets/images/education-page/regexlogo2.jpg",
    moocLink: "https://drive.google.com/file/d/1zciNRCQo-Dfw5h9GHmKONkaakFxBcrFu/view?usp=share_link",
  },
  {
    title: "Microsoft Excel - Beginner to Advance",
    cardImage: "assets/images/education-page/udemy-logo.jpg",
    moocLink: "https://www.udemy.com/certificate/UC-24998901-57da-40dd-9336-34803b82f6fa/",
  },
];

const skill = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showskill();
});

function showskill() {
  setInterval(function () {
    if (currentItem === skill.length) {
      currentItem = 0;
    }
    const item = skill[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:16px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
