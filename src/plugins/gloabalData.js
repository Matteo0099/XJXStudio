const globalData = {
  socialLinks: {
<<<<<<< Updated upstream
    instagram: "https://www.instagram.com/xjxvisuals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://facebook.com/xjxvisuals",
    youtube: "https://youtube.com/playlist?list=PLPRhm2QPQhNVFrPtFnle3lK9Kiff6zGik&si=48x37fNs_DwwAQbk",
    tiktok: "https://tiktok.com/xjxvisuals",
    vimeo: "https://vimeo.com/user208734932?fl=pp&fe=sh",
=======
    instagram: "https://www.instagram.com/xjxvisuals/",
    facebook: "https://facebook.com/xjxvisuals",
    youtube: "https://youtube.com/xjxvisuals",
    tiktok: "https://www.tiktok.com/@xjx.visuals",
    vimeo: "https://vimeo.com/xjxvisuals",
>>>>>>> Stashed changes
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