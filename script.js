// ============================
// Juragan Ayam
// script.js
// ============================

// Navbar berubah saat di-scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.background="#ffffff";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

navbar.style.background="rgba(255,255,255,.95)";
navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// Animasi muncul saat scroll
const cards=document.querySelectorAll(".card,.produk-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".7s";

observer.observe(card);

});

// Tombol WhatsApp mengambang
const wa=document.createElement("a");

wa.href="https://wa.me/6283852409832?text=Halo%20Juragan%20Ayam,%20saya%20ingin%20memesan.";

wa.target="_blank";

wa.innerHTML="💬";

wa.style.position="fixed";
wa.style.bottom="25px";
wa.style.right="20px";
wa.style.width="65px";
wa.style.height="65px";
wa.style.borderRadius="50%";
wa.style.background="#25D366";
wa.style.color="#fff";
wa.style.display="flex";
wa.style.alignItems="center";
wa.style.justifyContent="center";
wa.style.fontSize="30px";
wa.style.textDecoration="none";
wa.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
wa.style.zIndex="99999";

document.body.appendChild(wa);
