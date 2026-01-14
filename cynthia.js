const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function menu() {
  let menu = document.querySelector("#menu");
  let ul = document.querySelector("#nav-inner-ul");
  let windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    menu.addEventListener("click", function () {
      gsap.to(menu, { y: 22 });
      gsap.to(ul, { y: 22 });
    });
    if (windowWidth>= 1440) {
      menu.addEventListener("click", function () {
        gsap.to(menu, { y: 30 });
        gsap.to(ul, { y: 30 });
      });
    }
  } else {
    let navUl = document.querySelector("#nav-inner-ul");
    navUl.style.display = "none";
    let extra = document.querySelector("#extra");
    extra.style.display = "flex";
    let slider = document.querySelector("#mobile-slide");

    extra.addEventListener("click", function () {
      gsap.to(slider, {
        display: "inline",
        y: 950,
      });

 document.body.style.overflow = "hidden";
  lenis.stop();
      let slideNav = document.querySelector("#slide-nav");
      let slideMenu = document.querySelectorAll("#slide-nav-menu li");
      let slideFoot = document.querySelector("#slide-foot");

      let timel = gsap.timeline();
      timel.from(slideNav, { opacity: 0, delay: 0.5 });
      slideMenu.forEach(function (s) {
        timel.from(s, { opacity: 0, stagger: 0.5, duration: 0.3 });
      });
      timel.from(slideFoot, { opacity: 0 });
    });
  }

  let slide = document.querySelector("#mobile-slide");
  let close = document.querySelector("#close");

  close.addEventListener("click", function () {
    gsap.to(slide, { y: "-100vh" });
document.body.style.overflow = "auto";
  lenis.start();
  });
}

menu();

let ele = document.querySelectorAll(".page2-ele");
function Ani() {
  ele.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let h1 = event.currentTarget.querySelector("h1");
      gsap.to(h1, {
        x: "4vw",
        opacity: 0.4,
        duration: 0.8,
        ease: "power2.out",
      });
    });
    e.addEventListener("mouseleave", function () {
      let h1 = event.currentTarget.querySelector("h1");
      gsap.to(h1, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    e.addEventListener("mouseenter", function () {
      let h6 = event.currentTarget.querySelector(".page2-ele h6");
      gsap.to(h6, {
        opacity: 0.4,
        ease: "power2.out",
      });
    });
    e.addEventListener("mouseleave", function () {
      let h6 = event.currentTarget.querySelector(".page2-ele h6");
      gsap.to(h6, {
        opacity: 1,
        ease: "power2.out",
      });
    });
  });
}
Ani();


let miniCircle = document.querySelector("#move-circle");
miniCircle.innerHTML = "";

function pic() {
  let elements = document.querySelectorAll(".page2-ele");

  elements.forEach(function (e) {
    let image = e.querySelector("img");

    gsap.set(image, { xPercent: -50, yPercent: -25 });
    // ye line origin center sy set krygi image ka 

    e.addEventListener("mouseenter", function () {
      gsap.to(image, {
        opacity: 1,
        ease: "power1.out",
      });
      let miniCircle = document.querySelector("#move-circle");
      gsap.to(miniCircle, {
        scale: 5.5,
        mixBlendMode: "unset",
        opacity: 0.9,
      });
      miniCircle.innerHTML = "<h6>VIEW</h6>";
    });

    e.addEventListener("mousemove", function (dets) {
      let bounds = e.getBoundingClientRect();
      let relX = dets.clientX - bounds.left;
      let relY = dets.clientY - bounds.top;

      gsap.to(image, {
        x: relX,
        y: relY,
        opacity: 1,
        rotate: gsap.utils.clamp(-15, 15, dets.movementX),
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to(image, {
        opacity: 0,
        ease: "power1.out",
      });
      let miniCircle = document.querySelector("#move-circle");
      gsap.to(miniCircle, {
        scale: 1,
        mixBlendMode: "difference",
        opacity: 1,
      });
      miniCircle.innerHTML = "";
    });
  });
}
pic();

function moveCircle() {
  let circ = document.querySelector("#move-circle");

  gsap.set(circ, { xPercent: -50, yPercent: -50 });
  // ye line circle ka origin set kr rhi hy center sy 

  window.addEventListener("mousemove", function (m) {
    gsap.to(circ, {
      x: m.clientX ,
      y: m.clientY ,
      duration: 0.4,
      
    });
  });
}
moveCircle();

function anime() {
  let logo = document.querySelector("#logo");
  let tl = gsap.timeline();
  tl.from(logo, {
    y: 40,
    duration: 0.5,
  });
    if(window.innerWidth > 600){
      let men = document.querySelector("#menu");
      tl.from(men, {
        y: 40,
        duration: 0.5,
      });
    }
    else{
      let extra = document.querySelector("#extra");
      tl.from(extra,{
        y:40,
        duration: 0.5,
      })
    }
  let h1 = document.querySelector("#hero-head h1");
  if(h1){
    gsap.set(h1, { opacity: 1, y: 0 });
    tl.from(h1, {
      y: "30vw",
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }
  let h2 = document.querySelector("#main-head h1");
  if(h2){
    gsap.set(h2, { opacity: 1, y: 0 });
    tl.from(h2, {
      y: "30vw",
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    });
  }
  let mid = document.querySelectorAll(".mid h6");
  mid.forEach(function (h) {
    tl.from(h, {
      y: -40,
      duration: 0.3,
    });
  });
  let bot = document.querySelector("#first-bottom");
  tl.from(bot, {
    opacity: 0,
    duration: 0.3,
  });
}
anime();

function p2() {
  let page2 = document.querySelector("#page-2");
  gsap.from(page2, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: page2,
      start: "top 750px",
      // markers: true,
    },
  });
}
p2();

function para() {
  let picture = document.querySelector("#t-f-div img");
  let page3 = document.querySelector("#page-3");
  gsap.from(picture, {
    opacity: 0,
    scrollTrigger: {
      trigger: page3,
      start: "top 450px",
      // markers: true,
    },
  });
  let Tpara = document.querySelector("#t-s-div");
  gsap.from(Tpara, {
    opcaity: 0,
    y: 80,
    scrollTrigger: {
      trigger: page3,
      start: "top 450px",
      // markers: true,
    },
  });
}
para();

// ----------------------------Warp Speed Particle Animation---------------
function warpSpeedParticles() {
  const canvas = document.getElementById("warp-canvas");
  const warpText = document.getElementById("warp-text");
  if (!canvas || !warpText) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let beams = [];
  let animationId;

  // Set canvas size
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Beam class for horizontal speed lines
  class Beam {
    constructor(textRect) {
      this.textRect = textRect;
      this.reset();
    }

    reset() {
      if (!this.textRect) return;
      
      const canvasRect = canvas.getBoundingClientRect();
      const textLeft = this.textRect.left - canvasRect.left;
      const textRight = this.textRect.right - canvasRect.left;
      const textTop = this.textRect.top - canvasRect.top;
      const textBottom = this.textRect.bottom - canvasRect.top;
      
      // Start from left of text area
      this.x = textLeft - 100;
      // Random Y position within text area
      this.y = textTop + Math.random() * (textBottom - textTop);
      this.width = Math.random() * 2 + 0.5; // Very thin beams
      this.length = Math.random() * 100 + 50;
      this.speed = Math.random() * 15 + 20; // Fast speed
      this.opacity = Math.random() * 0.4 + 0.3;
      this.textRight = textRight;
    }

    update() {
      this.x += this.speed;
      
      // Reset if beam has passed the text area
      if (this.x > this.textRight + 100) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      
      // Create gradient for beam
      const gradient = ctx.createLinearGradient(
        this.x, this.y,
        this.x + this.length, this.y
      );
      gradient.addColorStop(0, "rgba(255, 107, 157, 0)");
      gradient.addColorStop(0.5, "rgba(78, 205, 196, 0.8)");
      gradient.addColorStop(1, "rgba(69, 183, 209, 0)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(this.x, this.y - this.width / 2, this.length, this.width);
      
      ctx.restore();
    }
  }

  // Particle class
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.life = Math.random() * 100 + 50;
      this.maxLife = this.life;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      this.opacity = (this.life / this.maxLife) * 0.8;
      
      if (this.life <= 0) {
        this.reset();
      }
    }

    reset() {
      const rect = warpText.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      this.x = rect.left - canvasRect.left + Math.random() * rect.width;
      this.y = rect.top - canvasRect.top + Math.random() * rect.height;
      this.life = Math.random() * 100 + 50;
      this.maxLife = this.life;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.size = Math.random() * 3 + 1;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      gradient.addColorStop(0, "rgba(255, 107, 157, 1)");
      gradient.addColorStop(0.5, "rgba(78, 205, 196, 0.8)");
      gradient.addColorStop(1, "rgba(69, 183, 209, 0)");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }

  // Initialize particles and beams
  function initParticles() {
    const rect = warpText.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      const x = rect.left - canvasRect.left + Math.random() * rect.width;
      const y = rect.top - canvasRect.top + Math.random() * rect.height;
      particles.push(new Particle(x, y));
    }

    // Initialize beams - only around warp text
    const beamCount = 30;
    for (let i = 0; i < beamCount; i++) {
      const beam = new Beam(rect);
      beams.push(beam);
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update text rect for beams (in case of resize or scroll)
    const rect = warpText.getBoundingClientRect();
    
    // Draw and update beams (speed lines) - only around warp text
    beams.forEach(beam => {
      beam.textRect = rect;
      beam.update();
      beam.draw();
    });
    
    // Draw and update particles (fireflies)
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    animationId = requestAnimationFrame(animate);
  }

  // Start animation when section is visible
  function startAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationId) {
            resizeCanvas();
            initParticles();
            animate();
          }
        } else {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
            particles = [];
            beams = [];
          }
        }
      });
    }, { threshold: 0.1 });

    const warpSection = document.getElementById("warp-section");
    if (warpSection) {
      observer.observe(warpSection);
    }
  }

  startAnimation();
}

// Initialize warp speed particles
warpSpeedParticles();
