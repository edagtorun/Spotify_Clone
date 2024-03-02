// api istegi atan foksiyonlar bu dosyada olacak

const options = {
  headers: {
    "X-RapidAPI-Key": "3a018899a3msh42c01566c4542b3p13caa0jsnbc374e087ca6",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

// API islemlerini yonetecek olan class

export default class API {
  //kurucu method
  constructor() {
    this.songs = [];
  }

  //UK deki populer muzikleri alir.
  async getPopular() {
    const res = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?locale=UK&listId=genre-country-chart-ZA-1&pageSize=20&startFrom=0",
      options
    );
    const data = await res.json();

    //classta tanimlanan songs degiskenine aktar
    this.songs = data.tracks;
  }

  //aratilan kelimeye uygun sarkilari al
//!QUERY aratma terimi
  async searchMusic(query){

    //api istegi at
  const res =  await fetch(`https://shazam.p.rapidapi.com/search?term=${query}&locale=GB`, options);

  //gelen cevabi isle
  const data = await res.json ();

  //gelen cevabin formatini degistir
  const formatted = data.tracks.hits.map((song) => {
    return song.track;
  });

  //GELEN VERIYI degiskene aktar
  this.songs = formatted;
  }
}
