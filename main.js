import API from "./scripts/api.js";
import UI from  './scripts/ui.js';
//class'in bir ornegini olusturma
const api = new API();
const ui = new UI();



//sayfanin yuklenme olayini izle;
document.addEventListener("DOMContentLoaded",  async() => {

//1) ekrana yuklenme gifi bas
ui.renderLoader();

//2) api istek at
   await api.getPopular();

//3) gelen verileri ekrana bas
  ui.renderCards(api.songs);
});

//formun gonderilme olayiniz izle
ui.form.addEventListener("submit", async (event) => {

//sayfa yenilenmeyi engellemek icin
event.preventDefault();

//aratilan kelimeye eris
const query = event.target[0].value;
console.log(query);
//kelime arama bossa uyari gonder
if(query.trim() === "") return alert('Please write to search of songs') 
                
//ekrana yukleniyor bas
ui.renderLoader();

//basligi guncelle
ui.changeTitle(query + ' For Results');

//api'dan sarkilari al
await api.searchMusic(query);

//sarkilari ekrana bas
ui.renderCards(api.songs);
})

//cartlarin playBtn tiklanma olayini izleme

ui.list.addEventListener('click', (e) => {
  //tiklanilan eleman playBtn  ise oynat 
  if(e.target.id === 'play-btn'){
    //tiklanilan karttaki sarkinin bilgilerini al
  const song = e.target.closest('.card').dataset;
  
  //sarkiyi oynatma kismini ekrana bas

  ui.renderPLayingInfo(song);

  }
});

//lokalden mode verisini al
const mode = localStorage.getItem('mode');
('true');
document.body.className = mode === 'true' ? "dark" : 
"light"

ui.checkbox.checked = mode === 'true';

//checkbox'in degerinin degisimini izle

ui.checkbox.addEventListener('change', (e) => {
  //false > acik mod
  //true > gece modu
  
  const isDarkMode = e.target.checked;

  //kullanicinin sectigi degeri kaybetmemek icin localde tutucaz
  localStorage.setItem('mode', isDarkMode);

  document.body.className = isDarkMode ? "dark" : "light"


})