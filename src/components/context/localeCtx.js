import React from 'react';

const localeContext = React.createContext({ lang: "ENG", setLang: () => { } });

const WEBSITE_URL = "http://localhost:3000";
const WEBSITE_NAME = "DoctorAlly";
const WEBSITE_UPDATE_DATE_ENG = "Friday, April 17, 2020";
const WEBSITE_UPDATE_DATE_VIE = "thứ Sáu, ngày 17 tháng 4 năm 2020";

const getText = (loc, key, lang) => {
  if (lang === "VIE") {
    return VIE[loc][key];
  }
  return ENG[loc][key];
};

const getLongLineText = (loc, key, inner, lang) => {
  if (inner !== null) {
    if (lang === "VIE") {
      return VIE[loc][key][inner];
    }
    return ENG[loc][key][inner];
  } else {
    if (lang === "VIE") {
      return VIE[loc][key];
    }
    return ENG[loc][key];
  }
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
    privacy_policy: "Chính sách bảo mật",
    terms_of_use: "Điều khoản sử dụng"
  },

  contact_us: {
    title: "LIÊN HỆ VỚI CHÚNG TÔI",
    description: "thông qua các liên kết sau"
  },

  feedbacks: {

  },

  // PRIVACY POLICY
  privacy_policy: {
    h1: {
      title: "CHÍNH SÁCH BẢO MẬT",
      p1: `Sửa đổi vào ${WEBSITE_UPDATE_DATE_VIE}`,
      p2: `Tại ${WEBSITE_NAME} có thể truy cập từ ${<a href={WEBSITE_URL}>{WEBSITE_URL}</a>}, một trong những ưu tiên chính của chúng tôi là quyền riêng tư của khách truy cập. Tài liệu Chính sách Bảo mật này chứa các loại thông tin được ${WEBSITE_NAME} thu thập và ghi lại và cách chúng tôi sử dụng thông tin đó`,
      p3: "Nếu bạn có thêm câu hỏi hoặc yêu cầu thêm thông tin về Chính sách Bảo mật của chúng tôi, đừng ngần ngại liên hệ với chúng tôi.",
      p4: `Chính sách bảo mật này chỉ áp dụng cho các hoạt động trực tuyến của chúng tôi và có giá trị đối với khách truy cập vào trang web của chúng tôi liên quan đến thông tin mà họ đã chia sẻ và/hoặc thu thập trong ${WEBSITE_NAME} Chính sách này không áp dụng cho bất kỳ thông tin nào được thu thập ngoại tuyến hoặc qua các kênh khác ngoài trang web này.`,
    },
    h2_consent: {
      title: "Sự tán thành",
      p1: "Bằng cách sử dụng trang web của chúng tôi, bạn tán thành với Chính sách quyền riêng tư của chúng tôi và đồng ý với các điều khoản của nó."
    },
    h2_infoColl: {
      title: "Thông tin chúng tôi thu thập",
      p1: "Thông tin cá nhân mà bạn được yêu cầu cung cấp, và lý do tại sao bạn được yêu cầu cung cấp thông tin đó, sẽ được làm rõ cho bạn tại thời điểm chúng tôi yêu cầu bạn cung cấp thông tin cá nhân của bạn.",
      p2: "Nếu bạn liên hệ trực tiếp với chúng tôi, chúng tôi có thể nhận được thông tin bổ sung về bạn như tên, địa chỉ email, số điện thoại, nội dung của tin nhắn và/hoặc tệp đính kèm bạn có thể gửi cho chúng tôi và bất kỳ thông tin nào khác bạn có thể chọn cung cấp.",
      p3: "Khi bạn đăng ký Tài khoản, chúng tôi có thể yêu cầu thông tin liên lạc của bạn, bao gồm các mục như tên, tên công ty, địa chỉ, địa chỉ email và số điện thoại.",
    },
    h2_infoUse: {
      title: "Cách chúng tôi sử dụng thông tin của bạn",
      p1: "Chúng tôi sử dụng thông tin chúng tôi thu thập theo nhiều cách khác nhau, bao gồm:",
      li_1: "Cung cấp, vận hành và duy trì website của chúng tôi",
      li_2: "Cải thiện, cá nhân hóa và mở rộng website của chúng tôi",
      li_3: "Hiểu và phân tích cách bạn sử dụng website của chúng tôi",
      li_4: "Phát triển sản phẩm, dịch vụ, tính năng và chức năng mới",
      li_5: "Giao tiếp với bạn, trực tiếp hoặc thông qua một trong các đối tác của chúng tôi, bao gồm cả dịch vụ khách hàng, để cung cấp cho bạn các cập nhật và thông tin khác liên quan đến website và cho các mục đích tiếp thị và quảng cáo",
      li_6: "Gửi email cho bạn",
      li_7: "Tìm và ngăn chặn gian lận",
    },
    h2_log: {
      title: "Tệp Nhật kí",
      p1: "tuân theo quy trình chuẩn sử dụng tệp nhật ký. Những tập tin này ghi lại khách khi họ truy cập trang web. Tất cả các công ty lưu trữ làm điều này và một phần phân tích của dịch vụ lưu trữ. Thông tin được thu thập bởi các tệp nhật ký bao gồm địa chỉ giao thức internet (IP), loại trình duyệt, Nhà cung cấp dịch vụ Internet (ISP), dấu ngày và thời gian, trang giới thiệu/thoát và có thể số lần nhấp. Chúng không được liên kết với bất kỳ thông tin có thể nhận dạng cá nhân. Mục đích của thông tin là để phân tích xu hướng, quản trị trang web, theo dõi chuyển động của người dùng trên trang web và thu thập thông tin nhân khẩu học.",
    },
    h2_advertising: {
      title: "Chính sách bảo mật với Đối tác Quảng cáo",
      p1: `Bạn có thể tham khảo danh sách này để tìm Chính sách bảo mật cho từng đối tác quảng cáo của ${WEBSITE_NAME}`,
      p2: `Máy chủ quảng cáo hoặc mạng quảng cáo của bên thứ ba sử dụng các công nghệ như cookie, JavaScript hoặc Web Beacons được sử dụng trong các quảng cáo và liên kết tương ứng xuất hiện trên ${WEBSITE_NAME}, được gửi trực tiếp đến trình duyệt của người dùng. Họ tự động nhận địa chỉ IP của bạn khi điều này xảy ra. Những công nghệ này được sử dụng để đo lường hiệu quả của các chiến dịch quảng cáo của họ và/hoặc để cá nhân hóa nội dung quảng cáo mà bạn thấy trên các trang web mà bạn truy cập.`,
      p3: `Lưu ý rằng ${WEBSITE_NAME} không có quyền truy cập hoặc kiểm soát các cookie được sử dụng bởi các nhà quảng cáo bên thứ ba này.`,
    },
    h2_third_party: {
      title: "Chính sách bảo mật của Bên thứ ba",
      p1: `Chính sách bảo mật của ${WEBSITE_NAME} không áp dụng cho các nhà quảng cáo hoặc trang web khác. Do đó, chúng tôi khuyên bạn nên tham khảo Chính sách bảo mật tương ứng của các máy chủ quảng cáo bên thứ ba này để biết thêm thông tin chi tiết. Nó có thể bao gồm các giao thiệp và hướng dẫn của họ về cách từ chối các tùy chọn nhất định. Bạn có thể tìm thấy một danh sách đầy đủ các Chính sách quyền riêng tư này và các liên kết của chúng ở đây: Liên kết chính sách bảo mật.`,
      p2: "Bạn có thể chọn tắt cookie thông qua các tùy chọn trình duyệt cá nhân. Để biết thông tin chi tiết hơn về quản lý cookie với các trình duyệt web cụ thể, có thể tìm thấy nó tại các trang web tương ứng của trình duyệt.",
    },
    h2_ccpa: {
      title: "Quyền riêng tư CCPA (Không bán thông tin cá nhân của tôi)",
      p1: "Theo CCPA, trong số các quyền khác, người tiêu dùng California có quyền:",
      p2: "Yêu cầu doanh nghiệp thu thập dữ liệu cá nhân của người tiêu dùng tiết lộ các danh mục và mẫu dữ liệu cá nhân cụ thể mà doanh nghiệp đã thu thập về người tiêu dùng.",
      p3: "Yêu cầu doanh nghiệp xóa bất kỳ dữ liệu cá nhân nào về người tiêu dùng mà doanh nghiệp đã thu thập.",
      p4: "Nếu bạn đưa ra yêu cầu, chúng tôi có một tháng để trả lời bạn. Nếu bạn muốn thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng tôi.",
    },
    h2_gdpr: {
      title: "Quyền bảo vệ dữ liệu GDPR",
      p1: "Chúng tôi muốn đảm bảo bạn biết đầy đủ tất cả các quyền bảo vệ dữ liệu của mình. Mọi người dùng đều được hưởng những điều sau đây:",
      p2: "Quyền truy cập - Bạn có quyền yêu cầu các bản sao dữ liệu cá nhân của mình. Chúng tôi có thể tính một khoản phí nhỏ cho dịch vụ này.",
      p3: "Quyền cải chính - Bạn có quyền yêu cầu chúng tôi sửa bất kỳ thông tin nào bạn cho là không chính xác. Bạn cũng có quyền yêu cầu chúng tôi hoàn thành thông tin mà bạn cho là không đầy đủ.",
      p4: "Quyền xóa - Bạn có quyền yêu cầu chúng tôi xóa dữ liệu cá nhân của bạn, trong một số điều kiện nhất định.",
      p5: "Quyền hạn chế xử lý - Bạn có quyền yêu cầu chúng tôi hạn chế xử lý dữ liệu cá nhân của bạn, trong một số điều kiện nhất định.",
      p6: "Quyền phản đối xử lý - Bạn có quyền phản đối việc chúng tôi xử lý dữ liệu cá nhân của bạn, trong những điều kiện nhất định.",
      p7: "Quyền chuyển đổi dữ liệu - Bạn có quyền yêu cầu chúng tôi chuyển dữ liệu mà chúng tôi đã thu thập sang một tổ chức khác hoặc trực tiếp cho bạn, trong một số điều kiện nhất định.",
      p8: "Nếu bạn đưa ra yêu cầu, chúng tôi có một tháng để trả lời bạn. Nếu bạn muốn thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng tôi.",
    },
    h2_childrenInfo: {
      title: "Thông tin trẻ em",
      p1: "Một phần ưu tiên khác của chúng tôi là bổ sung sự bảo vệ cho trẻ em khi sử dụng internet. Chúng tôi khuyến khích phụ huynh và người giám hộ quan sát, tham gia và/hoặc giám sát và hướng dẫn hoạt động trực tuyến của họ.",
      p2: `${WEBSITE_NAME} không cố ý thu thập bất kỳ Thông tin nhận dạng cá nhân nào từ trẻ em dưới 13 tuổi. Nếu bạn nghĩ rằng con bạn đã cung cấp loại thông tin này trên trang web của chúng tôi, chúng tôi khuyến khích bạn liên hệ với chúng tôi ngay lập tức và chúng tôi sẽ nỗ lực hết sức để loại bỏ kịp thời thông tin đó từ hồ sơ của chúng tôi.`
    }
  },


  // TERMS_OF_USE
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

  feedbacks: {

  },

  // PRIVACY POLICY
  privacy_policy: {
    h1: {
      title: "PRIVACY POLICY",
      p1: `Revised on ${WEBSITE_UPDATE_DATE_ENG}`,
      p2: `At ${WEBSITE_NAME}, accessible from ${<a href={WEBSITE_URL}>{WEBSITE_URL}</a>}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${WEBSITE_NAME} and how we use it.`,
      p3: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
      p4: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ${WEBSITE_NAME}. This policy is not applicable to any information collected offline or via channels other than this website.`,
    },
    h2_consent: {
      title: "Consent",
      p1: "By using our website, you hereby consent to our Privacy Policy and agree to its terms."

    },
    h2_infoColl: {
      title: "Information we collect",
      p1: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
      p2: "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
      p3: "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.",
    },
    h2_infoUse: {
      title: "How we use your information",
      p1: "We use the information we collect in various ways, including to:",
      li_1: "Provide, operate, and maintain our website",
      li_2: "Improve, personalize, and expand our website",
      li_3: "Understand and analyze how you use our website",
      li_4: "Develop new products, services, features, and functionality",
      li_5: "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes",
      li_6: "Send you emails",
      li_7: "Find and prevent fraud",
    },
    h2_log: {
      title: "Log Files",
      p1: `${WEBSITE_NAME} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
    },
    h2_advertising: {
      title: "Advertising Partners Privacy Policies",
      p1: `You may consult this list to find the Privacy Policy for each of the advertising partners of ${WEBSITE_NAME}.`,
      p2: `Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ${WEBSITE_NAME}, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.`,
      p3: `Note that ${WEBSITE_NAME} has no access to or control over these cookies that are used by third-party advertisers.`,
    },
    h2_third_party: {
      title: "Third Party Privacy Policies",
      p1: `${WEBSITE_NAME}'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.`,
      p2: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
    },
    h2_ccpa: {
      title: "CCPA Privacy Rights (Do Not Sell My Personal Information)",
      p1: "Under the CCPA, among other rights, California consumers have the right to:",
      p2: "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
      p3: "Request that a business delete any personal data about the consumer that a business has collected.",
      p4: "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
      p5: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."
    },
    h2_gdpr: {
      title: "GDPR Data Protection Rights",
      p1: "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:",
      p2: "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.",
      p3: "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
      p4: "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
      p5: "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
      p6: "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
      p7: "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
      p8: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
    },
    h2_childrenInfo: {
      title: "Children's Information",
      p1: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
      p2: `${WEBSITE_NAME} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`
    }
  },
};

export default localeContext;
export { getText, getLongLineText };