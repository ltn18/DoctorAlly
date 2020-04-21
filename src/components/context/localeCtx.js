import React from 'react';

const localeContext = React.createContext({ lang: "ENG", setLang: () => { } });

const getText = (loc, key, lang) => {
  if (lang === "VIE") {
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

  about: {
    h2: "Đội ngũ chúng tôi",
    h3: "Nhân viên y tế cần sự giúp đỡ của các bạn để chống lại COVID-19",
    box: "Tình nguyện hoặc yêu cầu hỗ trợ các bữa ăn, chăm sóc thú cưng, việc vặt, ... trong đại dịch COVID-19."
  },

  volunteer: {
    volunteerSignUp: {
  
    },
  },

  request_help: {
    
  },

  supply_stores: {
    hanoimap: "Bản đồ cung cấp Hà Nội",
    description: "Để hỗ trợ nhân viên y tế, đặc biệt là những người cần nguồn cung cấp thường xuyên như thực phẩm và đồ gia dụng, chúng tôi đã tạo ra một bản đồ dễ tiếp cận cho các cửa hàng cung ứng. Điều duy nhất bạn phải làm là nhập địa điểm của bạn và các cửa hàng gần nhất sẽ xuất hiện để bạn chọn!",
    howtouse: "Hướng dẫn sử dụng",
    firstTitle: "Đầu tiên, tìm kiếm vị trí của bạn trên bản đồ",
    firstDescription: "Nó có thể là một địa chỉ, một địa điểm, một khu phố, một khu vực, một mã bưu điện hoặc thậm chí là tọa độ của địa điểm.",
    secondTitle: "Chọn địa điểm",
    secondDescription: "Bạn sẽ tìm thấy vị trí của bạn với các địa điểm khác nhau. Đó là những cửa hàng khoảng 2km gần bạn.",
    thirdTitle: "Khám phá các cửa hàng",
    thirdDescription: "Di chuột qua các cửa hàng để biết chi tiết. Các cửa hàng này được phân loại theo màu sắc như dưới đây.",
    thirdItem1: "Cửa hàng tiện lợi và nhà thuốc",
    thirdItem2: "Thức ăn nhanh, Cafe và Bánh",
    thirdItem3: "Siêu thị",
    thirdItem4: "Nhà hàng và cửa hàng thực phẩm đặc sản",
    thirdItem5: "Cửa hàng tạp hóa và các cửa hàng khác ...",
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
    title: "LIÊN HỆ VỚI CHÚNG TÔI",
    description: "thông qua các liên kết sau"
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
    supply_stores: "Nearby Stores",
    covid19_data: "Covid-19 Data",
    how_it_works: "How It Works",
  },

  about: {
    h2: "Our Team",
    h3: "Healthcare workers need your help to fight COVID-19",
    box: "Volunteer your time or request support for meals, pet care, errands, and more during the COVID-19 pandemic."
  },

  supply_stores: {
    hanoimap: "Hanoi Supply Map",
    description: "In order to support medical workers, especially those are in need of regular supplies such as food and household appliances, we have created an easy-approaching map for supply stores. The only thing you have to do is to enter your location and the nearest shops will appear for you to choose!",
    howtouse: "How to use",
    firstTitle: "First, search your location on the map",
    firstDescription: "It can be an address, a place, a neighborhood, a region, a postcode or even the coordinate of the place.",
    secondTitle: "Choose a place",
    secondDescription: "You will find your location with various points nearby. Those are stores around 2km near you.",
    thirdTitle: "Discover the stores",
    thirdDescription: "Hover the stores for details. These stores are categorized by color as below.",
    thirdItem1: "Convenience Store and Pharmacy",
    thirdItem2: "Fast Food, Cafe and Bakery",
    thirdItem3: "Supercenter, Superette and Supermarket",
    thirdItem4: "Restaurant and Specialty Food Store",
    thirdItem5: "Grocery stores and Others ...",
  },

  footer: {
    contact_us: "Contact Us",
    feedbacks: "Feedbacks",
    privacy_policy: "Privacy Policy",
    terms_of_use: "Terms of Use"
  },

   contact_us: {
    title: "CONTACT US",
    description: "via the following links"
  },
};

export default localeContext;
export { getText };