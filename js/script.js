// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
document.querySelectorAll('.folder').forEach(folder => {
  folder.addEventListener('click', function() {
      let folderName = this.getAttribute('data-folder');
      showVideos(folderName);
  });
});

    AOS.init();


    function showVideos(folder) {
      let videoGallery = document.getElementById('video-gallery');
      let videoCards = document.getElementById('video-cards');
    
      videoCards.innerHTML = ''; // Clear previous videos
    
      // Example: Videos Per Folder
      let videos = {
          "shape": [
            { title: "Shape Video 1", src: "https://drive.google.com/file/d/1jVMs19sZFVH9_H5YHBXO5qZYWWDFOefb/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/1szMm-sPegiLt-_ijHYuoZN4cBJ7Vpn5F/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/1XMtTOFyLxFSmPJ3kHUe8-2D_64YFD93F/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/19ESBFBpOlC2w67mry1TGSPtHzRyd_2Tk/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/1Bhol0KPk1G4lMdQZu2iYwv7RguE0fkUj/preview", tools: ["After Effects", "Adobe Premiere"] },

              { title: "Shape Video 2", src: "https://drive.google.com/file/d/1WIoCYXiTRwTQI8YcDemwYdMzBOJBJgtE/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/1I-zZjIHShC_yFzLk-u7nMWVsISA25la8/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/18_BkDQTdnLOSvQLS3_87gXnNnv5Hqq3D/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/1i4zLoAD6901PYxNk9W16zfH3yU7aYawb/preview", tools: ["After Effects", "Adobe Premiere"] },
              { title: "Shape Video 2", src: "https://drive.google.com/file/d/13BdbXLzw3XlyHg6yXzuwErjLwF5GQu7M/preview", tools: ["After Effects", "Adobe Premiere"] },
              // Add 18 more unique video links here
          ],
          "templates": [
              { title: "Template Video 1", src: "https://drive.google.com/file/d/107yxYWqHbI6F3SYDPAnrQD_adZIVXhYq/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 2", src: "https://drive.google.com/file/d/1E-eNQqliC0LIpiR90qWaQ0ZsUf6b6Gqi/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 3", src: "https://drive.google.com/file/d/1PcCDpJBtP4d1rpPXrDvDcg2HaXt3jH9j/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 4", src: "https://drive.google.com/file/d/1loeYSPuYbrFRqK1hVmpt6yMtzxDooFuZ/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 5", src: "https://drive.google.com/file/d/1AfvVosMBqIFpNIwSzLjyRTEMjBjq_jDS/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 6", src: "https://drive.google.com/file/d/18_BkDQTdnLOSvQLS3_87gXnNnv5Hqq3D/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 7", src: "https://drive.google.com/file/d/1WelCJ8MnIiyaPnkCru7Fhy2mcKi-lFFu/preview", tools: ["Adobe Premiere", "After Effects"] },
              { title: "Template Video 8", src: "https://drive.google.com/file/d/19zfP5bQHHeU5W4O8-5p9HhgPQ4NuAjrn/preview", tools: ["Adobe Premiere", "After Effects"] },
              // Add 18 more unique video links here
          ],
          "motion": [
              { title: "Motion Video 1", src: "https://drive.google.com/file/d/1WIoCYXiTRwTQI8YcDemwYdMzBOJBJgtE/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 2", src: "https://drive.google.com/file/d/1E6JO_MJMWCFF5ByTyRvJ_F7Z6UyiIebT/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 3", src: "https://drive.google.com/file/d/19zfP5bQHHeU5W4O8-5p9HhgPQ4NuAjrn/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 4", src: "https://drive.google.com/file/d/1WelCJ8MnIiyaPnkCru7Fhy2mcKi-lFFu/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 5", src: "https://drive.google.com/file/d/1AfvVosMBqIFpNIwSzLjyRTEMjBjq_jDS/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 6", src: "https://drive.google.com/file/d/1I-zZjIHShC_yFzLk-u7nMWVsISA25la8/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 7", src: "https://drive.google.com/file/d/18_BkDQTdnLOSvQLS3_87gXnNnv5Hqq3D/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 8", src: "https://drive.google.com/file/d/1i4zLoAD6901PYxNk9W16zfH3yU7aYawb/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 9", src: "https://drive.google.com/file/d/13BdbXLzw3XlyHg6yXzuwErjLwF5GQu7M/preview", tools: ["After Effects", "Cinema 4D"] },
              { title: "Motion Video 10", src: "https://drive.google.com/file/d/1Bhol0KPk1G4lMdQZu2iYwv7RguE0fkUj/preview", tools: ["After Effects", "Cinema 4D"] },
              
              // Add 18 more unique video links here
          ],
          "animation": [
              { title: "Animation Video 1", src: "https://drive.google.com/file/d/1Qnn1thJeKPb5Gxc0j583zCAOYqklSygn/preview", tools: ["Maya", "After Effects"] },
              { title: "Animation Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Maya", "After Effects"] },
              { title: "Animation Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Maya", "After Effects"] },
              { title: "Animation Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Maya", "After Effects"] },
              { title: "Animation Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Maya", "After Effects"] },
              { title: "Animation Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Maya", "After Effects"] },
              { title: "Animation Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Maya", "After Effects"] },
              // Add 18 more unique video links here
          ],
          "editing": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1Qnn1thJeKPb5Gxc0j583zCAOYqklSygn/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              // Add 18 more unique video links here
          ],
          "podcast": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1g3tPKQ4_Et1aJR4gCJR4-YoqBprTL2aB/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              // Add 18 more unique video links here
          ],
          "sport": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1iIdW2ZkuOMAr5wOLQb7bEoHbkUScpkEd/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1kz6rVx9X6j-uPNa0RLSKJY2TqQfMHv8M/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 3", src: "https://drive.google.com/file/d/1pcGgt-GXZdcDtbTvEXRrAg43-U2npqGL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 4", src: "https://drive.google.com/file/d/1Qnn1thJeKPb5Gxc0j583zCAOYqklSygn/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 5", src: "https://drive.google.com/file/d/1_cMrwvg8TN4Wv0qStArx_I8NQxyBbRcu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 6", src: "https://drive.google.com/file/d/1g3tPKQ4_Et1aJR4gCJR4-YoqBprTL2aB/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 7", src: "https://drive.google.com/file/d/1szMm-sPegiLt-_ijHYuoZN4cBJ7Vpn5F/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 8", src: "https://drive.google.com/file/d/1kz6rVx9X6j-uPNa0RLSKJY2TqQfMHv8M/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 9", src: "https://drive.google.com/file/d/1iIdW2ZkuOMAr5wOLQb7bEoHbkUScpkEd/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              // Add 18 more unique video links here
          ],
          "vsl": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/17O_Vi7zmTt4uzFuFu6vHtpO37hLa41J7/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1JqFakoSUuaeVvVglzX5jbJGQFxous0tS/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 3", src: "https://drive.google.com/file/d/1vqouFWKyvf_X8u1ySGxHhAH9JpYBlfv4/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 4", src: "https://drive.google.com/file/d/19yamzjryWx0ZpFkwTAv58S9efqxLm5LQ/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 5", src: "https://drive.google.com/file/d/1WJw0-sAQkB4fVqSAcw8VWQZpQustOJoL/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 6", src: "https://drive.google.com/file/d/12-cMraSaiWZ21iC9KqKP8S8MHpCZMKcW/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 7", src: "https://drive.google.com/file/d/12MwJRhzTY4o3dBBX0KZcGzXJTwX8pGpB/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 8", src: "https://drive.google.com/file/d/1HWm3v5yXzgz7TNGuE2_8ITTdjJ9xsVZj/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 9", src: "https://drive.google.com/file/d/1jKbKmmSh8HL5YJYYivdmfv4PcNwCEXyJ/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
            
              
              // Add 18 more unique video links here
          ],
          "website": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1yjguMGNuZ4O4S3r458K3z8WzJqGNBRMK/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/15KigQqA0KhqEA7T0XFCxNJ5batqnXpoR/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 3", src: "https://drive.google.com/file/d/1FXhy_gaAGO7Pe5KmXtoV3seVO7RIDrGu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 4", src: "https://drive.google.com/file/d/12HoDkNALwOO7lhts-zZbWomccoxGeDln/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 5", src: "https://drive.google.com/file/d/1LYJwvE_8UMx7uBsOSlye3GiTxZDHH-Rn/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 6", src: "https://drive.google.com/file/d/1XBIq3GDQLIKB5L1Xu29LQEKtzkaCnxjv/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 7", src: "https://drive.google.com/file/d/1U87vKSe04qSP_W0xXNFZRkwjNi7V5mTC/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 8", src: "https://drive.google.com/file/d/1qck2qmCKIG1Kjh_niNL536gDLaMKyw9c/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 9", src: "https://drive.google.com/file/d/1e8IjVCiWTEiIuPcBu_hxbKdevFTOrmPN/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 10", src: "https://drive.google.com/file/d/1vBb72NeoCqQ7q43AW2YpjAhG3ryxrXYu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 11", src: "https://drive.google.com/file/d/1aRjUPF4_1Wpc5-5J4myZDj5H4WcQVGtA/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 12", src: "https://drive.google.com/file/d/1NVqI_VT3t8l6WlMzkbvef6QtmEPrb3cv/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 13", src: "https://drive.google.com/file/d/1bkhcZ4h2EuZlAGcRkB5mloGoJCUrYqAl/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 14", src: "https://drive.google.com/file/d/1K881-yqqZFDGm3S7EAoU1kmKYovzQq5n/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 15", src: "https://drive.google.com/file/d/176t89Rg1nPqDaww0Kmx864-YPd6WFX_p/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 16", src: "https://drive.google.com/file/d/17dlorOGDaeJoxpS4fAm7TG27RBqNAFKI/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 17", src: "https://drive.google.com/file/d/107Ujuen6Saxbfk6gO7wNGH1EvvjS6hyt/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 18", src: "https://drive.google.com/file/d/1muvOzumqqHCoyWs7piPHZbkjwiIPaZwp/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 19", src: "https://drive.google.com/file/d/1nFuLmqoqZbwk_MiX1qyXDi4SHC0V16FO/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 20", src: "https://drive.google.com/file/d/1MdlzB46iIFwBEswvmSO_TfMWLLcMukFM/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 21", src: "https://drive.google.com/file/d/1w_1lSYQDYIMmh_fITj_58CGZctnnNQj3/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 22", src: "https://drive.google.com/file/d/1HpEJVofHUqkmsvTH2ivD2A5uRfwUNF6v/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
            
              // Add 18 more unique video links here
          ],
          "wedding": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1OC407OkQUju8An4tcjCK7H0g43dTHAud/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1kAOeoXKqrsV4Ac3cfCiNHRL1P0yZ_Phn/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 3", src: "https://drive.google.com/file/d/1pE5z9YZ4C4Guzwmx2f6dAteR9vvBpcWS/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 4", src: "https://drive.google.com/file/d/1r84KwU8WujGtIow5pVzMdCc2_1R5ir9x/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 5", src: "hhttps://drive.google.com/file/d/12Tfkagfuxmz9lq_dhD8h8AoBimF3F3U4/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 6", src: "https://drive.google.com/file/d/1wF9CDUIipwLlmUMsfAJ9-Ewo6m1v7a_-/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 7", src: "https://drive.google.com/file/d/139dYTXSugeGeO8L7Bso80eYpY3pU9hTf/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 8", src: "https://drive.google.com/file/d/1RK7Po6QbNbH2Z5PQoHXkJg9mr8NaVMpz/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 9", src: "https://drive.google.com/file/d/1EDZPnjtT_yqwgNwj9RQTnq11-Mn7_uYg/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 10", src: "https://drive.google.com/file/d/1ipfwzUNChk_32Qr8c0i_2s7NGFU8y9a5/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 11", src: "https://drive.google.com/file/d/1tB_nOVo8K3ZT0hFKJ3HdkfADy5GWWXTw/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 12", src: "https://drive.google.com/file/d/19Av_UK4geIdF3GyJUZtVML4CEOG-Sipc/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 13", src: "https://drive.google.com/file/d/1ZkMiCAXj7cgOXud5CSTHWlfP3qCB3UND/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 14", src: "https://drive.google.com/file/d/1cHLHQskuojJAbK1YbXVpg9azOxcuvhHK/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 15", src: "https://drive.google.com/file/d/10W4_pUYGpvWJoQFuJFpIkfbB2uuCYrWt/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 16", src: "https://drive.google.com/file/d/1-J_8c2B0-O3unZTG06kf_jDkqyIye57b/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 17", src: "https://drive.google.com/file/d/18SpIjvWec6UDSnwo-2hQ0uxTIqJJZimj/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 18", src: "https://drive.google.com/file/d/1o6p6BAXCHmjhnefneldP-D5JdeGFmm0T/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 19", src: "https://drive.google.com/file/d/1yDlntBZLwfYHov5kILGjtZRNQ_9jC5Zm/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 20", src: "https://drive.google.com/file/d/1GvVdMUkEdRsZyWP6Ra-T2HM4uu6QHrMj/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },

              
              // Add 18 more unique video links here
          ],
          "reels": [
              { title: "Editing Video 1", src: "https://drive.google.com/file/d/1liNPKsaU186uhomUkA3-PG4pe75L0hr4/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 2", src: "https://drive.google.com/file/d/1Mk6uGW9eaVlqulG2uSUECZIG7CNKN20f/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 3", src: "https://drive.google.com/file/d/1bcFgWirStgJlmMROLLdLZ7lSdZw5Em40/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 4", src: "https://drive.google.com/file/d/184NJrAUYm2IjizMri6E8s7tzgU3y3FbY/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 5", src: "https://drive.google.com/file/d/1QX7iYbMC2t37nUCs-jW29KZpLw0KYSqd/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 6", src: "https://drive.google.com/file/d/1ukqn04aq302KKSM_9lzTgPXdenJ-XCIu/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 7", src: "https://drive.google.com/file/d/1mD9K8DtT5gYKMBqd5sE90EW-FI8xcwEG/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 8", src: "https://drive.google.com/file/d/17HcfnBCReXB_sdMPfoI7o-uOF155YzNw/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 9", src: "https://drive.google.com/file/d/1aha2dothkH0T-rrj9yvgnY-TB8HnJF8Q/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 10", src: "https://drive.google.com/file/d/1MHp9hzj09fTFIy047YV1jcDINUh-g8px/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 11", src: "https://drive.google.com/file/d/1EoRiSIMpNcXuklm66u0lE8zNm8JNvLug/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 12", src: "https://drive.google.com/file/d/1mjOujMztqVV96lEh6yyLHt-G_T_twgaw/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 13", src: "https://drive.google.com/file/d/1QhNethmAiz44rhzV7nuKIjjz5fS0t7JV/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 14", src: "https://drive.google.com/file/d/1oMOCdLr2CGhkuaoyDf3YBdRUqojzjR10/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 15", src: "https://drive.google.com/file/d/1AsbtZYiWb9jewIxyKIUJBbcSCTnRdp4B/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 16", src: "https://drive.google.com/file/d/1ny1F7vk1ZASWIvaJO3MIoK505wnYShKr/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 17", src: "https://drive.google.com/file/d/11Xvu-A9QVP0SThGWcQoobkuKqPMPxocF/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 18", src: "https://drive.google.com/file/d/1ry3wwDopqLLg7KfKppXZVJZCp8nFGGgM/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 19", src: "https://drive.google.com/file/d/1srLI2rl3iwINYz0EPYZBHT7PMxvhyD1W/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              { title: "Editing Video 20", src: "https://drive.google.com/file/d/17tZBPka9qFwpWn5JEwvQmjDxoW8xdS4M/preview", tools: ["Premiere Pro", "DaVinci Resolve"] },
              // Add 18 more unique video links here
          ]
      };
    
      if (videos[folder]) {
          videos[folder].forEach(videoData => {
              let toolBadges = videoData.tools.map(tool => `<span class="badge bg-secondary">${tool}</span>`).join(" ");
              
              let videoCard = `
                  <div class="post col-md-4 col-10 mt-3" data-aos="fade-up">
                      <div class="card">
                          <div class="ratio ratio-16x9">
                              <iframe src="${videoData.src}" allowfullscreen style="border:none;"></iframe>
                          </div>
                          <div class="card-body text-center">
                              <h4 class="card-title">${videoData.title}</h4>
                              ${toolBadges}
                              <br />
                              <a href="#" class="read-more-btn link">Read More</a>
                          </div>
                      </div>
                  </div>
              `;
              videoCards.innerHTML += videoCard;
          });
    
          videoGallery.style.display = 'block';
      }
    }
    
    function closeVideos() {
      document.getElementById('video-gallery').style.display = 'none';
    }
    
    document.querySelectorAll(".folder").forEach(folder => {
      folder.addEventListener("click", function () {
          const category = this.getAttribute("data-folder");
          showVideos(category);
      });
    });
    
document.addEventListener("scroll", () => {
  let folders = document.querySelectorAll(".folder");
  let scrollY = window.scrollY;

  folders.forEach((folder, index) => {
      let offset = (index % 2 === 0 ? 1 : -1) * (scrollY * 0.05);
      folder.style.transform = `translateY(${offset}px) translateX(${offset / 2}px) rotate(${offset / 10}deg)`;
  });
});
document.addEventListener("scroll", function () {
  let sections = document.querySelectorAll(".content");

  sections.forEach((section, index) => {
      let sectionTop = section.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;

      if (sectionTop < screenPosition) {
          section.style.opacity = "1";
          section.style.transform = "translateX(0) rotateY(0deg) scale(1)";
          section.style.filter = "blur(0px)";
      } else {
          let translateDirection = index % 2 === 0 ? "-100%" : "100%";
          let rotateDirection = index % 2 === 0 ? "-45deg" : "45deg";
          
          section.style.opacity = "0";
          section.style.transform = `translateX(${translateDirection}) rotateY(${rotateDirection}) scale(0.8)`;
          section.style.filter = "blur(10px)";
      }
  });
});

