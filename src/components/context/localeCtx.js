import React from 'react';

const localeContext = React.createContext({ lang: "ENG", setLang: () => { } });

const getText = (loc, key, lang) => {
  if (lang === "VIE") {
    console.log(VIE.header.about);
    return VIE[loc][key];
  }
  return ENG[loc][key];
};

const VIE = {
  header: {
    about: "Về chúng tôi",
    volunteer: "Tình nguyện",
    request_help: "Yêu cầu giúp đỡ",
    supply_stores: "Cửa hàng gần đây",
    covid19_data: "Dữ liệu Covid-19",
    how_it_works: "Cách hoạt động",
  },


  volunteer: {

  },
  volunteerSignUp: {

  },

  request_help: {
    
  },
  supply_stores: {
    
  },
  covid19_data: {
    
  },
  how_it_works: {
    
  },


  footer: {
    contact_us: "Liên hệ chúng tôi",
    feedbacks: "Phản hồi",
    privacy_policy: "Chính sách riêng tư",
    terms_of_use: "Điều khoản sử dụng"
  },
  contact_us: {
    
  },
  feedbacks: {
    
  },
  privacy_policy: {
    
  },
  terms_of_use: {
    
  },

  requests: {

  }
};

const ENG = {
  header: {
    about: "About",
    volunteer: "Volunteer",
    request_help: "Request Help",
    supply_stores: "Supply Stores",
    covid19_data: "Covid-19 Data",
    how_it_works: "How It Works",
  },
  footer: {
    contact_us: "Contact Us",
    feedbacks: "Feedbacks",
    privacy_policy: "Privacy Policy",
    terms_of_use: "Terms of Use"
  }
};

export default localeContext;
export { getText };