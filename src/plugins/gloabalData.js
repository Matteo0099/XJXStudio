const globalData = {
  socialLinks: {
    instagram: "https://instagram.com/tuoprofilo",
    facebook: "https://facebook.com/tuapagina",
    youtube: "https://youtube.com/tuoutente",
    tiktok: "https://tiktok.com/tuoutente",
    vimeo: "https://vimeo.com/utente",
    whatsapp: "https://wa.me/+393921141013"
  },
  // Other data
  siteName: "XJXvisuals",
  email: "mailto:xjxvisuals@gmail.com",
  tel: "tel:+393921141013"
}

export default {
  install: (app, options) => {
    // Inietta globalData in tutti i componenti
    app.config.globalProperties.$globalData = globalData
  }
}