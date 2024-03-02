//Arayuz DOM islemleri

export default class UI {
  constructor() {
    this.list = document.querySelector("#list");
    this.form = document.querySelector("#search-form");
    this.title = document.querySelector("#title");
    this.playArea = document.querySelector(".play-area");
    this.checkbox = document.querySelector('#mode-checkbox');
  }

  //liste alanina yukleniyor basar

  renderLoader() {
    this.list.innerHTML = `
    <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    </div>`;
  }

  //ekrana kartlari bas
  renderCards(songs) {
    //gifi ekrandan kaldir
    this.list.innerHTML = "";

    //dizideki her bir eleman icin asagidaki fonksiyonu calistirir.
    songs.forEach((song) => {
      //1) elementi olustur
      const div = document.createElement("div");

      //2) class ekleme
      div.className = "card";

      //3) innerHTML'i belirle
      div.innerHTML = `
        <figure>
                <img src="${song.images.coverarthq}"/>  
                <div id="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
                </div>
                </figure>

                <h4>${song.title}</h4>
                <p>${song.subtitle}</p>
          
        `;
      //4) data verileri ekle
      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverarthq;
      div.dataset.url = song.hub?.actions[1].uri;

      //5)Karti html'e gonder
      this.list.appendChild(div);
    });
  }

  //basligi gunceller

  changeTitle(text) {
    this.title.innerText = text;
  }

  //render muzik oynatma kismini ekrana bas

  renderPLayingInfo(song) {
    console.log(song)
   this.playArea.innerHTML = `
   <div>
        <img class="animate" src="${song.photo}" >

    <div>
        <p>Playing...</p>
        <h3>${song.title}</h3>
    </div>    
    </div>

    <audio controls autoplay src="${song.url}"></audio>
   `;
  }
}
