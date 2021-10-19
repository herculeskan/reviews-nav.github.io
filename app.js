const reviews = [
    {
      id: 1,
      name: "Carlos Lara AKA Hercules kan",
      job: "El admin",
      img:
        "https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.6435-9/245698419_414726713494891_8364498412867885486_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFPhGsEDqbj6VGgJaa_hbm6_7cnxXfJvbf_tyfFd8m9t7kBsI6bQ1CDx8HS-O-B0HNIH4257PzSmIMicbeWD2ZM&_nc_ohc=CN9zNr487F4AX8YTWXr&_nc_ht=scontent.fbaq8-1.fna&oh=d51b6675fb4cfbe0b906898b480ab9b8&oe=61932B02",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Xin zhien Hao",
      job: "web designer",
      img:
        "https://files.rcnradio.com/public/styles/m_img_680x464/public/2018-11/hombre_se_casa_con_un_holograma_0.jpg?itok=cLTgm_kO",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Super Idol guy",
      job: "intern",
      img:
        "https://i.ytimg.com/vi/chY9p-XLHHk/hqdefault.jpg",
      text:
        "Super Idol 是時候讓你開始熱愛你的生活了，記住這是你的生活，你必須努力克服任何障礙。 這樣做會讓你為自己感到驕傲。你會意識到，一路上，生活將留下你必須自己發現的東西。",
    },
    {
      id: 4,
      name: "Bussyness anime girl",
      job: "the boss",
      img:
        "https://c4.wallpaperflare.com/wallpaper/685/225/158/anime-anime-girls-original-characters-business-suit-wallpaper-preview.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn =document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
showPerson();
});
//Person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src =item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
//next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
//previos person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//random person
randomBtn.addEventListener('click', function(){
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});