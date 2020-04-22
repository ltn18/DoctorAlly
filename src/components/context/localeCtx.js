import React from 'react';

const localeContext = React.createContext({ lang: "ENG", setLang: () => { } });

const WEBSITE_URL = "http://localhost:3000";
const WEBSITE_NAME = "DoctorAlly";
const WEBSITE_UPDATE_DATE_ENG = "Friday, April 17, 2020";
const WEBSITE_UPDATE_DATE_VIE = "thứ Sáu, ngày 17 tháng 4 năm 2020";
const WEBSITE_EMAIL = "doctorally.project@gmail.com";
const WEBSITE_ADDRESS_ENG = "No 1 Hoang Minh Giam St";
const WEBSITE_ADDRESS_VIE = "Số 1 Đường Hoàng Minh Giám";

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
    h1: {
      title: "TERMS OF USE",
      p1: `Revised on ${WEBSITE_UPDATE_DATE_VIE}`,
      p2: `The ${WEBSITE_NAME} website located at ${<a href={WEBSITE_URL}>{WEBSITE_URL}</a>} is a copyrighted work belonging to ${WEBSITE_NAME}. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.`,
      p3: "All such additional terms, guidelines, and rules are incorporated by reference into these Terms.",
      p4: `These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.`,
      p5: "These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute."
    },
    h2_access: {
      title: "Access to the Site",
      p1: `${<strong>Subject to these Terms.</strong>} Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.`,
      p2: `${<strong>Certain Restrictions.</strong>} The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.  All copyright and other proprietary notices on the Site must be retained on all copies thereof.`,
      p3: "Company reserves the right to change, suspend, or cease the Site with or without notice to you.  You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.",
      p4: `${<strong>No Support or Maintenance.</strong>} You agree that Company will have no obligation to provide you with any support in connection with the Site.`,
      p5: "Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms.",
    },
    h2_ads: {
      title: "Third-Party Links & Ads; Other Users",
      p1: `${<strong>Third-Party Links & Ads.</strong>} The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.  Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.  You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.`,
      p2: `${<strong>Other Users.</strong>} Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.  You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any Site user, we are under no obligation to become involved.`,
      p3: `You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are a California resident, you hereby waive California civil code section 1542 in connection with the foregoing, which states: ${"a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor."}`,
    },
    h2_disclaimer: {
      title: "Disclaimers",
      p1: `The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.  We and our suppliers make not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.  If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.`,
      p2: `Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.  Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you.`,
    },
    h2_limitation: {
      title: "Limitation on Liability",
      p1: `To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.  Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.`,
      p2: `To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of fifty U.S. dollars (u.s. $50). The existence of more than one claim will not enlarge this limit.  You agree that our suppliers will have no liability of any kind arising from or relating to this agreement.`,
      p3: `Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.`,
      p4: `${<strong>Term and Termination.</strong>} Subject to this Section, these Terms will remain in full force and effect while you use the Site.  We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms.  Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.  You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases.  Company will not have any liability whatsoever to you for any termination of your rights under these Terms.  Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.`
    },
    h2_copyright: {
      title: "Copyright Policy.",
      p1: `Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:`,
      li_1: `your physical or electronic signature;`,
      li_2: `identification of the copyrighted work(s) that you claim to have been infringed;`,
      li_3: `identification of the material on our services that you claim is infringing and that you request us to remove;`,
      li_4: `sufficient information to permit us to locate such material;`,
      li_5: `your address, telephone number, and e-mail address;`,
      li_6: `a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and`,
      li_7: `a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.`,
      p2: `Please note that, pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs and attorney’s fees incurred by us in connection with the written notification and allegation of copyright infringement.`
    },
    h2_general: {
      title: "General",
      p1: `These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site.  You are responsible for providing us with your most current e-mail address.  In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.  Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site.  These changes will be effective immediately for new users of our Site.  Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. Dispute Resolution. Please read this Arbitration Agreement carefully. It is part of your contract with Company and affects your rights.  It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.`,
      p2: `${<strong>Applicability of Arbitration Agreement.</strong>} All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  Unless otherwise agreed to, all arbitration proceedings shall be held in English.  This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.`,
      p3: `${<strong>Notice Requirement and Informal Dispute Resolution.</strong>} Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to the Company should be sent to: No 1 Hoang Minh Giam St. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.  If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either party is entitled.`,
      p4: `${<strong>Arbitration Rules.</strong>} Arbitration shall be initiated through the American Arbitration Association, an established alternative dispute resolution provider that offers arbitration as set forth in this section.  If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.  The rules of the ADR Provider shall govern all aspects of the arbitration except to the extent such rules are in conflict with the Terms.  The AAA Consumer Arbitration Rules governing the arbitration are available online at adr.org or by calling the AAA at 1-800-778-7879.  The arbitration shall be conducted by a single, neutral arbitrator.  Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.  For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.  Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.  If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.  If the arbitrator grants you an award that is greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the Company will pay you the greater of the award or $2,500.00.  Each party shall bear its own costs and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider.`,
      p5: `${<strong>Additional Rules for Non-Appearance Based Arbitration.</strong>} If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.  The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties.`,
      p6: `${<strong>Time Limits.</strong>} If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim.`,
      p7: `${<strong>Authority of Arbitrator.</strong>} If arbitration is initiated, the arbitrator will decide the rights and liabilities of you and the Company, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.  The arbitrator shall have the authority to grant motions dispositive of all or part of any claim.  The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.  The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based.  The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.  The award of the arbitrator is final and binding upon you and the Company.`,
      p8: `${<strong>Waiver of Jury Trial.</strong>} THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.  Arbitration procedures are typically more limited, more efficient and less expensive than rules applicable in a court and are subject to very limited review by a court.  In the event any litigation should arise between you and the Company in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.`,
      p9: `${<strong>Waiver of Class or Consolidated Actions.</strong>} All claims and disputes within the scope of this arbitration agreement must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user.`,
      p10: `${<strong>Confidentiality.</strong>} All aspects of the arbitration proceeding shall be strictly confidential.  The parties agree to maintain confidentiality unless otherwise required by law.  This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.`,
      p11: `${<strong>Severability.</strong>} If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.`,
      p12: `${<strong>Right to Waive.</strong>} Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted.  Such waiver shall not waive or affect any other portion of this Arbitration Agreement.`,
      p13: `${<strong>Survival of Agreement.</strong>} This Arbitration Agreement will survive the termination of your relationship with Company.`,
      p14: `${<strong>Small Claims Court.</strong>} Nonetheless the foregoing, either you or the Company may bring an individual action in small claims court.`,
      p15: `${<strong>Emergency Equitable Relief.</strong>} Anyhow the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.  A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.`,
      p16: `${<strong>Claims Not Subject to Arbitration.</strong>} Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement.`,
      p17: `In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Netherlands County, California, for such purposes.`,
      p18: `The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data acquired from Company, or any products utilizing such data, in violation of the United States export laws or regulations.`,
      p19: `Company is located at the address in Section 10.8. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.`,
      p20: `${<strong>Electronic Communications.</strong>} The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.`,
      p21: `${<strong>Entire Terms.</strong>} These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.  Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.  Company may freely assign these Terms.  The terms and conditions set forth in these Terms shall be binding upon assignees.`,
      p22: `${<strong>Copyright/Trademark Information.</strong>} Copyright ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.`,
    },
    h2_contact: {
      title: "Contact Information",
      p1: `Address: ${WEBSITE_ADDRESS_VIE}`,
      p2: `Email: ${<a href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</a>}`,
    },
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

  // TERMS OF USE
  terms_of_use: {
    h1: {
      title: "TERMS OF USE",
      p1: `Revised on ${WEBSITE_UPDATE_DATE_ENG}`,
      p2: `The ${WEBSITE_NAME} website located at ${<a href={WEBSITE_URL}>{WEBSITE_URL}</a>} is a copyrighted work belonging to ${WEBSITE_NAME}. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.`,
      p3: "All such additional terms, guidelines, and rules are incorporated by reference into these Terms.",
      p4: `These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.`,
      p5: "These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute."
    },
    h2_access: {
      title: "Access to the Site",
      p1: `${<strong>Subject to these Terms.</strong>} Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.`,
      p2: `${<strong>Certain Restrictions.</strong>} The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.  All copyright and other proprietary notices on the Site must be retained on all copies thereof.`,
      p3: "Company reserves the right to change, suspend, or cease the Site with or without notice to you.  You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.",
      p4: `${<strong>No Support or Maintenance.</strong>} You agree that Company will have no obligation to provide you with any support in connection with the Site.`,
      p5: "Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms.",
    },
    h2_ads: {
      title: "Third-Party Links & Ads; Other Users",
      p1: `${<strong>Third-Party Links & Ads.</strong>} The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.  Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.  You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.`,
      p2: `${<strong>Other Users.</strong>} Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.  You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any Site user, we are under no obligation to become involved.`,
      p3: `You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are a California resident, you hereby waive California civil code section 1542 in connection with the foregoing, which states: ${"a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor."}`,
    },
    h2_disclaimer: {
      title: "Disclaimers",
      p1: `The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.  We and our suppliers make not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.  If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.`,
      p2: `Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.  Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you.`,
    },
    h2_limitation: {
      title: "Limitation on Liability",
      p1: `To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.  Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.`,
      p2: `To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of fifty U.S. dollars (u.s. $50). The existence of more than one claim will not enlarge this limit.  You agree that our suppliers will have no liability of any kind arising from or relating to this agreement.`,
      p3: `Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.`,
      p4: `${<strong>Term and Termination.</strong>} Subject to this Section, these Terms will remain in full force and effect while you use the Site.  We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms.  Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.  You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases.  Company will not have any liability whatsoever to you for any termination of your rights under these Terms.  Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.`
    },
    h2_copyright: {
      title: "Copyright Policy.",
      p1: `Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:`,
      li_1: `your physical or electronic signature;`,
      li_2: `identification of the copyrighted work(s) that you claim to have been infringed;`,
      li_3: `identification of the material on our services that you claim is infringing and that you request us to remove;`,
      li_4: `sufficient information to permit us to locate such material;`,
      li_5: `your address, telephone number, and e-mail address;`,
      li_6: `a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and`,
      li_7: `a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.`,
      p2: `Please note that, pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs and attorney’s fees incurred by us in connection with the written notification and allegation of copyright infringement.`
    },
    h2_general: {
      title: "General",
      p1: `These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site.  You are responsible for providing us with your most current e-mail address.  In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.  Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site.  These changes will be effective immediately for new users of our Site.  Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. Dispute Resolution. Please read this Arbitration Agreement carefully. It is part of your contract with Company and affects your rights.  It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.`,
      p2: `${<strong>Applicability of Arbitration Agreement.</strong>} All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  Unless otherwise agreed to, all arbitration proceedings shall be held in English.  This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.`,
      p3: `${<strong>Notice Requirement and Informal Dispute Resolution.</strong>} Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to the Company should be sent to: No 1 Hoang Minh Giam St. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.  If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either party is entitled.`,
      p4: `${<strong>Arbitration Rules.</strong>} Arbitration shall be initiated through the American Arbitration Association, an established alternative dispute resolution provider that offers arbitration as set forth in this section.  If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.  The rules of the ADR Provider shall govern all aspects of the arbitration except to the extent such rules are in conflict with the Terms.  The AAA Consumer Arbitration Rules governing the arbitration are available online at adr.org or by calling the AAA at 1-800-778-7879.  The arbitration shall be conducted by a single, neutral arbitrator.  Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.  For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.  Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.  If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.  If the arbitrator grants you an award that is greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the Company will pay you the greater of the award or $2,500.00.  Each party shall bear its own costs and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider.`,
      p5: `${<strong>Additional Rules for Non-Appearance Based Arbitration.</strong>} If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.  The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties.`,
      p6: `${<strong>Time Limits.</strong>} If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim.`,
      p7: `${<strong>Authority of Arbitrator.</strong>} If arbitration is initiated, the arbitrator will decide the rights and liabilities of you and the Company, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.  The arbitrator shall have the authority to grant motions dispositive of all or part of any claim.  The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.  The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based.  The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.  The award of the arbitrator is final and binding upon you and the Company.`,
      p8: `${<strong>Waiver of Jury Trial.</strong>} THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.  Arbitration procedures are typically more limited, more efficient and less expensive than rules applicable in a court and are subject to very limited review by a court.  In the event any litigation should arise between you and the Company in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.`,
      p9: `${<strong>Waiver of Class or Consolidated Actions.</strong>} All claims and disputes within the scope of this arbitration agreement must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user.`,
      p10: `${<strong>Confidentiality.</strong>} All aspects of the arbitration proceeding shall be strictly confidential.  The parties agree to maintain confidentiality unless otherwise required by law.  This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.`,
      p11: `${<strong>Severability.</strong>} If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.`,
      p12: `${<strong>Right to Waive.</strong>} Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted.  Such waiver shall not waive or affect any other portion of this Arbitration Agreement.`,
      p13: `${<strong>Survival of Agreement.</strong>} This Arbitration Agreement will survive the termination of your relationship with Company.`,
      p14: `${<strong>Small Claims Court.</strong>} Nonetheless the foregoing, either you or the Company may bring an individual action in small claims court.`,
      p15: `${<strong>Emergency Equitable Relief.</strong>} Anyhow the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.  A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.`,
      p16: `${<strong>Claims Not Subject to Arbitration.</strong>} Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement.`,
      p17: `In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Netherlands County, California, for such purposes.`,
      p18: `The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data acquired from Company, or any products utilizing such data, in violation of the United States export laws or regulations.`,
      p19: `Company is located at the address in Section 10.8. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.`,
      p20: `${<strong>Electronic Communications.</strong>} The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.`,
      p21: `${<strong>Entire Terms.</strong>} These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.  Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.  Company may freely assign these Terms.  The terms and conditions set forth in these Terms shall be binding upon assignees.`,
      p22: `${<strong>Copyright/Trademark Information.</strong>} Copyright ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.`,
    },
    h2_contact: {
      title: "Contact Information",
      p1: `Address: ${WEBSITE_ADDRESS_ENG}`,
      p2: `Email: ${<a href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</a>}`,
    },
  }
};

export default localeContext;
export { getText, getLongLineText };