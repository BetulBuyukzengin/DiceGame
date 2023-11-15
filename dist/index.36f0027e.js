let e,t,n,c;const r=document.getElementById("score--0"),o=document.getElementById("score--1"),l=document.getElementById("current--0"),d=document.getElementById("current--1"),s=document.querySelector(".dice"),a=document.querySelector(".btn--new"),i=document.querySelector(".btn--roll"),u=document.querySelector(".btn--hold"),m=document.querySelector(".player--0"),y=document.querySelector(".player--1"),L=function(){//ilk puanlar , 0.indisteki 1.player 1.indisteki 2.player
e=[0,0],t=0,n=0,c=!0,r.textContent=0,o.textContent=0,l.textContent=0,d.textContent=0,s.classList.add("hidden"),m.classList.remove("player--winner"),y.classList.remove("player--winner"),m.classList.add("player--active"),y.classList.remove("player--active")};L();const g=function(){//Switch to next player
document.getElementById(`current--${n}`).textContent=0,t=0,n=0===n?1:0,m.classList.toggle("player--active"),y.classList.toggle("player--active")};i.addEventListener("click",function(){if(c){//1- random zar atılacak
let e=Math.trunc(6*Math.random())+1;console.log(e),//2- zarlar gösterilecek
s.classList.remove("hidden"),//resmin sayıya denk gelmesi için
s.src=`dice-${e}.png`,1!==e?(//zarı mevcut skora ekle
t+=e,document.getElementById(`current--${n}`).textContent=t):g()}}),u.addEventListener("click",function(){c&&(//1- random zar atılacak
//1-mevcut skoru aktif oyuncunun skoruna ekle
e[n]+=t,//scores[1]=scores[1]+currentScore;
document.getElementById(`score--${n}`).textContent=e[n],e[n]>=100?(c=!1,s.classList.add("hidden"),document.querySelector(`.player--${n}`).classList.add("player--winner"),document.querySelector(`.player--${n}`).classList.remove("player--active")):g())}),a.addEventListener("click",L);//# sourceMappingURL=index.36f0027e.js.map

//# sourceMappingURL=index.36f0027e.js.map
