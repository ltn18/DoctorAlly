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

const getLongLineText = (lang, loc, key, inner) => {
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
      p2_main1: `Tại ${WEBSITE_NAME}, có thể truy cập từ `,
      p2_main2: `, một trong những ưu tiên chính của chúng tôi là quyền riêng tư của khách truy cập. Tài liệu Chính sách Bảo mật này chứa các loại thông tin được ${WEBSITE_NAME} thu thập và ghi lại và cách chúng tôi sử dụng thông tin đó.`,
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
      title: "ĐIỀU KHOẢN SỬ DỤNG",
      p1: `Sửa đổi vào ${WEBSITE_UPDATE_DATE_VIE}`,
      p2_main1: `Trang web ${WEBSITE_NAME} đặt tại `,
      p2_main2: ` là một sản phẩm có bản quyền thuộc ${WEBSITE_NAME}. Một số tính năng của Trang web phải tuân theo các nguyên tắc, điều khoản hoặc quy tắc bổ sung sẽ được đăng trên Trang web liên quan đến các tính năng đó.`,
      p3: "Tất cả các điều khoản, hướng dẫn và quy tắc bổ sung như vậy được kết hợp bằng cách tham khảo các Điều khoản này.",
      p4: `Các Điều khoản sử dụng này mô tả các điều khoản và điều kiện ràng buộc về mặt pháp lý giám sát việc bạn sử dụng Trang web. BẰNG VIỆC ĐĂNG NHẬP VÀO TRANG WEB, BẠN ĐANG TU N THỦ NHỮNG ĐIỀU KHOẢN NÀY và bạn tuyên bố rằng bạn có thẩm quyền và năng lực để tham gia vào các Điều khoản này. BẠN PHẢI ÍT NHẤT 18 TUỔI TUỔI ĐỂ TRUY CẬP TRANG WEB. NẾU BẠN KHÔNG ĐỒNG Ý VỚI TẤT CẢ CÁC QUY ĐỊNH CỦA CÁC ĐIỀU KHOẢN NÀY, KHÔNG ĐĂNG NHẬP VÀ/HOẶC SỬ DỤNG TRANG WEB.`,
      p5: "Các điều khoản này yêu cầu sử dụng trọng tài phần 10.2 trên cơ sở cá nhân để giải quyết tranh chấp cũng như hạn chế các biện pháp khắc phục có sẵn cho bạn trong trường hợp tranh chấp."
    },
    h2_access: {
      title: "Truy cập vào trang web",
      p1_strong: `Theo các Điều khoản này.`,
      p1_main: ` Công ty cấp cho bạn giấy phép không thể chuyển nhượng, không độc quyền, có thể hủy ngang, giới hạn để truy cập Trang web chỉ cho mục đích sử dụng cá nhân, phi thương mại của riêng bạn.`,
      p2_strong: `Một số hạn chế nhất định.`,
      p2_main: ` Các quyền được chấp thuận cho bạn trong các Điều khoản này tuân theo các hạn chế sau: (a) bạn sẽ không bán, thuê, cho thuê, chuyển nhượng, chỉ định, phân phối, lưu trữ hoặc khai thác thương mại trên Trang web; (b) bạn sẽ không thay đổi, tạo các tác phẩm phái sinh, tháo rời, biên dịch ngược hoặc thiết kế ngược bất kỳ phần nào của Trang web; (c) bạn sẽ không truy cập Trang web để xây dựng một trang web tương tự hoặc cạnh tranh; và (d) trừ khi được nêu rõ trong tài liệu này, không một phần nào của Trang web có thể được sao chép, tái sử dụng để sản xuất, phân phối, tái bản, tải xuống, hiển thị, đăng hoặc truyền dưới bất kỳ hình thức nào nếu không được được chỉ dẫn, bất kỳ bản phát hành, cập nhật nào trong tương lai hoặc chức năng khác được thêm vào của Trang web phải tuân theo các Điều khoản này. Tất cả các bản quyền và thông báo độc quyền khác trên Trang web phải được giữ lại trên tất cả các bản sao của nó.`,
      p3: "Công ty có quyền thay đổi, đình chỉ hoặc ngừng Trang web mà không cần thông báo cho bạn. Bạn đã chấp thuận rằng Công ty sẽ không chịu trách nhiệm với bạn hoặc bất kỳ bên thứ ba nào về bất kỳ thay đổi, gián đoạn hoặc chấm dứt Trang web hoặc bất kỳ phần nào.",
      p4_strong: `Không hỗ trợ hoặc bảo trì.`,
      p4_main: ` Bạn đồng ý rằng Công ty sẽ không có nghĩa vụ cung cấp cho bạn bất kỳ hỗ trợ nào liên quan đến Trang web.`,
      p5: "Ngoại trừ bất kỳ Nội dung người dùng nào bạn có thể cung cấp, bạn hiểu rõ rằng tất cả các quyền sở hữu trí tuệ, bao gồm bản quyền, bằng sáng chế, nhãn hiệu và bí mật thương mại, trong Trang web và nội dung của nó thuộc sở hữu của Công ty hoặc các các bên cung cấp của Công ty. Lưu ý rằng các Điều khoản và quyền truy cập vào Trang web này không cung cấp cho bạn bất kỳ quyền, tiêu đề hoặc lợi ích nào đối với bất kỳ quyền sở hữu trí tuệ nào, ngoại trừ các quyền truy cập hạn chế được nêu trong Mục 2.1. Công ty và nhà cung cấp của mình bảo lưu tất cả các quyền không được cấp trong các Điều khoản này.",
    },
    h2_ads: {
      title: "Liên kết & Quảng cáo của bên thứ ba; Người dùng khác",
      p1_strong: `Liên kết & Quảng cáo của Bên Thứ Ba.`,
      p1_main: ` Trang web có thể chứa các liên kết đến các trang web và dịch vụ của bên thứ ba và/hoặc hiển thị quảng cáo cho bên thứ ba. Các Liên kết & Quảng cáo của Bên Thứ Ba như vậy không thuộc quyền kiểm soát của Công ty và Công ty không chịu trách nhiệm cho bất kỳ Liên kết & Quảng cáo của Bên Thứ Ba nào. Công ty chỉ cung cấp quyền truy cập vào các Liên kết & Quảng cáo của Bên Thứ Ba này để thuận tiện cho bạn và không xem xét, phê duyệt, giám sát, chứng thực, bảo đảm hoặc đưa ra bất kỳ tuyên bố nào liên quan đến Liên kết & Quảng cáo của Bên Thứ Ba. Bạn tự chịu rủi ro khi sử dụng tất cả các Liên kết & Quảng cáo của Bên Thứ Ba và nên áp dụng mức độ thận trọng và nhận thức phù hợp khi thực hiện. Khi bạn nhấn vào bất kỳ Liên kết & Quảng cáo của bên thứ ba nào, các điều khoản và chính sách của bên thứ ba hiện hành sẽ được áp dụng, bao gồm cả việc thu thập dữ liệu và quyền riêng tư của bên thứ ba.`,
      p2_strong: `Người dùng khác.`,
      p2_main: ` Mỗi người dùng Trang chịu trách nhiệm riêng cho bất kỳ và tất cả Nội dung Người dùng của riêng mình. Vì chúng tôi không kiểm soát Nội dung Người dùng, bạn công nhận và đồng ý rằng chúng tôi không chịu trách nhiệm cho bất kỳ Nội dung Người dùng nào, cho dù do bạn hoặc người khác cung cấp . Bạn đồng ý rằng Công ty sẽ không chịu trách nhiệm cho bất kỳ tổn thất hoặc thiệt hại nào phát sinh do kết quả của bất kỳ tương tác nào như vậy. Nếu có tranh chấp giữa bạn và bất kỳ người dùng Trang web nào, chúng tôi không có nghĩa vụ phải tham gia.`,
      p3: `Qua đây, bạn giải phóng Công ty và các cán bộ, nhân viên, đại lý, người kế nhiệm và chuyển nhượng của chúng tôi khỏi, và từ đó từ bỏ, từng tranh chấp, yêu cầu, quyền, nghĩa vụ, hành động và nguyên nhân của hành động của mọi loại với mọi bản chất, mà đã phát sinh hoặc phát sinh trực tiếp hoặc gián tiếp hoặc liên quan trực tiếp hoặc gián tiếp đến Trang web. Nếu bạn là cư dân California, bạn sẽ từ bỏ bộ luật dân sự California năm 1542 liên quan đến quy định trên, trong đó nêu rõ: "một bản phát hành chung không mở rộng cho các khiếu nại mà chủ nợ không biết hoặc nghi ngờ tồn tại ở thời gian thực hiện việc phát hành, mà nếu anh ấy hoặc cô ấy biết phải ảnh hưởng nghiêm trọng đến việc giải quyết của anh ấy hoặc cô ấy với người nợ."`,
    },
    h2_disclaimer: {
      title: "Khước từ",
      p1: `Trang web được cung cấp trên cơ sở "như hiện tại" và "có sẵn", và công ty và nhà cung cấp của chúng tôi từ chối bất kỳ và tất cả các bảo đảm và điều kiện dưới bất kỳ hình thức nào, dù rõ ràng, ngụ ý hay theo luật định, bao gồm tất cả các bảo đảm hoặc điều kiện bán hàng, năng lực cho một mục đích cụ thể, tiêu đề, hưởng thụ yên tĩnh (Bên cung cấp không gây ra bất kì khó khăn nào cho Người dùng), tính chính xác hay sự không xâm phạm. Chúng tôi và các nhà cung cấp của chúng tôi không đảm bảo rằng trang web sẽ đáp ứng các yêu cầu của bạn, hay sẽ có sẵn trên cơ sở không bị gián đoạn, kịp thời, an toàn hoặc không có lỗi, hoặc sẽ chính xác, đáng tin cậy, không có vi-rút hoặc mã độc hại khác, hoàn chỉnh, hợp pháp hoặc an toàn. Nếu luật áp dụng yêu cầu bất kỳ sự bảo hành nào liên quan đến trang web, tất cả các sự bảo hành như vậy được giới hạn trong thời hạn đến chín mươi (90) ngày kể từ ngày sử dụng đầu tiên.`,
      p2: `Một số khu vực pháp lý không cho phép loại trừ các bảo hành có ngụ ý, vì vậy loại trừ trên có thể không áp dụng cho bạn. Một số khu vực pháp lý không cho phép các giới hạn về thời gian bảo hành ngụ ý kéo dài bao lâu, vì vậy giới hạn trên có thể không áp dụng cho bạn.`,
    },
    h2_limitation: {
      title: "Giới hạn trách nhiệm pháp lý",
      p1: `Trong phạm vi tối đa được pháp luật cho phép, trong mọi trường hợp, công ty hoặc nhà cung cấp của chúng tôi sẽ không chịu trách nhiệm với bạn hoặc bất kỳ bên thứ ba nào về bất kỳ lợi nhuận bị mất, dữ liệu bị mất, chi phí mua sắm sản phẩm thay thế, hoặc bất kỳ thiệt hại gián tiếp, là hậu quả, để cảnh báo, ngẫu nhiên, đặc biệt hoặc các trừng phạt phát sinh từ hoặc liên quan đến các điều khoản này hoặc việc bạn sử dụng hoặc không có khả năng sử dụng trang web ngay cả khi công ty đã được thông báo về khả năng thiệt hại đó. Việc truy cập và sử dụng trang web theo quyết định và rủi ro của riêng bạn và bạn sẽ tự chịu trách nhiệm về mọi thiệt hại cho thiết bị hoặc hệ thống máy tính của mình hoặc mất dữ liệu từ đó.`,
      p2: `Trong phạm vi tối đa được pháp luật cho phép, bất kể mọi thứ trái ngược trong tài liệu này, trách nhiệm của chúng tôi đối với bạn đối với mọi thiệt hại phát sinh từ hoặc liên quan đến thỏa thuận này, sẽ luôn bị giới hạn ở mức tối đa năm mươi đô la Mỹ (50 đô la Mỹ). Sự tồn tại của nhiều yêu cầu sẽ không mở rộng giới hạn này. Bạn đồng ý rằng các nhà cung cấp của chúng tôi sẽ không có bất kỳ trách nhiệm pháp lý nào phát sinh hoặc liên quan đến thỏa thuận này.`,
      p3: `Một số khu vực pháp lý không cho phép giới hạn hoặc loại trừ trách nhiệm đối với các thiệt hại ngẫu nhiên hoặc do hậu quả, do đó, giới hạn hoặc loại trừ trên có thể không áp dụng cho bạn.`,
      p4_strong: `Thời hạn và sự chấm dứt.`,
      p4_main: ` Theo Mục này, các Điều khoản này sẽ vẫn có hiệu lực đầy đủ trong khi bạn sử dụng Trang web. Chúng tôi có thể đình chỉ hoặc chấm dứt quyền sử dụng Trang của bạn bất cứ lúc nào vì bất kỳ lý do nào theo quyết định riêng của chúng tôi, bao gồm mọi trường hợp sử dụng Trang vi phạm các Điều khoản này. Khi chấm dứt các quyền của bạn theo các Điều khoản này, Tài khoản và quyền truy cập và sử dụng Trang web của bạn sẽ chấm dứt ngay lập tức. Bạn hiểu rằng bất kì sự chấm dứt Tài khoản của bạn có thể liên quan đến việc xóa Nội dung Người dùng được liên kết với Tài khoản của bạn khỏi cơ sở dữ liệu trực tiếp của chúng tôi. Công ty sẽ không có bất kỳ trách nhiệm pháp lý nào đối với bạn khi bạn chấm dứt các quyền của bạn theo các Điều khoản này. Ngay cả sau khi các quyền của bạn theo các Điều khoản này bị chấm dứt, các quy định sau đây của các Điều khoản này sẽ vẫn có hiệu lực: Phần 2 đến 2.5, Mục 3 và Mục 4 đến 10.`
    },
    h2_copyright: {
      title: "Chính sách bản quyền.",
      p1: `Công ty tôn trọng tài sản trí tuệ của người khác và yêu cầu người dùng Trang web của chúng tôi cũng làm như vậy. Liên quan đến Trang web của chúng tôi, chúng tôi đã thông qua và thực thi chính sách tôn trọng luật bản quyền mà quy định loại bỏ bất kỳ tài liệu vi phạm nào và chấm dứt người dùng Trang web trực tuyến của chúng tôi mà vi phạm quyền sở hữu trí tuệ, kể cả bản quyền. Nếu bạn tin rằng một trong những người dùng của chúng tôi, thông qua việc sử dụng Trang web của chúng tôi, đã vi phạm bản quyền một cách bất hợp pháp trong tác phẩm và muốn xóa tài liệu bị cáo buộc vi phạm, thông tin sau đây dưới dạng thông báo bằng văn bản (theo điều khoản 17 U.S.C § 512 (c)) phải được cung cấp cho Đại lý Bản quyền được chỉ định của chúng tôi:`,
      li_1: `chữ ký vật lý hoặc điện tử của bạn;`,
      li_2: `nhận dạng tác phẩm có bản quyền mà bạn cho là đã bị vi phạm;`,
      li_3: `nhận dạng tài liệu trên các dịch vụ của chúng tôi mà bạn cho là vi phạm và bạn yêu cầu chúng tôi xóa;`,
      li_4: `thông tin đầy đủ để cho phép chúng tôi xác định vị trí vật liệu đó;`,
      li_5: `địa chỉ, số điện thoại và địa chỉ email của bạn;`,
      li_6: `Tuyên bố rằng bạn có niềm tin thiện chí rằng việc sử dụng tài liệu bị phản đối không được chủ sở hữu bản quyền, đại lý của nó hoặc theo luật pháp cho phép; và`,
      li_7: `Tuyên bố rằng thông tin trong thông báo là chính xác và chịu hình phạt khai man, rằng bạn là chủ sở hữu bản quyền bị cáo buộc vi phạm hoặc bạn được ủy quyền hành động thay mặt chủ sở hữu bản quyền.`,
      p2: `Xin lưu ý rằng, theo điều khoản 17 U.S.C § 512 (f), bất kỳ sự trình bày sai sự thật vật chất nào trong một thông báo bằng văn bản sẽ tự động khiến bên khiếu nại phải chịu trách nhiệm cho bất kỳ thiệt hại, chi phí và phí luật sư nào phát sinh từ chúng tôi liên quan đến thông báo bằng văn bản và cáo buộc vi phạm bản quyền.`
    },
    h2_general: {
      title: "Tổng hợp",
      p1: `Các Điều khoản này có thể được sửa đổi thường xuyên và nếu chúng tôi thực hiện bất kỳ thay đổi đáng kể nào, chúng tôi sẽ thông báo cho bạn bằng cách gửi email đến địa chỉ email cuối cùng mà bạn cung cấp cho chúng tôi và/hoặc bằng cách đăng thông báo về những thay đổi trên Trang web chúng tôi. Bạn có trách nhiệm cung cấp cho chúng tôi địa chỉ email mới nhất của bạn. Trong trường hợp địa chỉ email cuối cùng mà bạn cung cấp cho chúng tôi không hợp lệ, việc chúng tôi gửi email chứa thông báo đó vẫn được coi là thông báo hiệu quả về những thay đổi được mô tả trong thông báo. Mọi thay đổi đối với các Điều khoản này sẽ có hiệu lực sớm nhất trong ba mươi (30) ngày theo lịch sau khi chúng tôi gửi thông báo qua email cho bạn hoặc ba mươi (30) ngày theo lịch sau khi chúng tôi đăng thông báo về các thay đổi trên Trang web của chúng tôi. Những thay đổi này sẽ có hiệu lực ngay lập tức đối với người dùng mới của Trang web của chúng tôi. Việc tiếp tục sử dụng Trang web của chúng tôi sau thông báo về những thay đổi đó sẽ thể hiện cho sự thừa nhận của bạn về những thay đổi và thỏa thuận đó bị ràng buộc bởi các điều khoản và điều kiện của những thay đổi đó. Giải quyết tranh chấp. Xin vui lòng đọc Thỏa thuận trọng tài này một cách cẩn thận. Đây là một phần trong hợp đồng của bạn với Công ty và ảnh hưởng đến quyền lợi của bạn. Nó chứa các thủ tục để SỰ BẮT BUỘC TUÂN THEO TRỌNG TÀI VÀ SỰ TỪ CHỐI VỚI MỘT VỤ KIỆN NHÓM.`,
      p2_strong: `Khả năng áp dụng của Thỏa thuận trọng tài.`,
      p2_main: ` Tất cả các khiếu nại và tranh chấp liên quan đến Điều khoản hoặc việc sử dụng bất kỳ sản phẩm hoặc dịch vụ nào do Công ty cung cấp không thể giải quyết một cách không chính thức hoặc tại tòa án xử các vụ kiện nhỏ sẽ được giải quyết bằng trọng tài ràng buộc trên cơ sở cá nhân theo các điều khoản của Thỏa thuận Trọng tài này. Trừ khi có thỏa thuận khác, tất cả các thủ tục tố tụng trọng tài sẽ được tổ chức bằng tiếng Anh. Thỏa thuận trọng tài này áp dụng cho bạn và Công ty, và cho bất kỳ công ty con, chi nhánh, đại lý, nhân viên, bên tiền nhiệm nào quan tâm, bên kế nhiệm và chuyển nhượng, cũng như tất cả người dùng hoặc người thụ hưởng dịch vụ hoặc hàng hóa được ủy quyền theo quy định.`,
      p3_strong: `Yêu cầu thông báo và giải quyết tranh chấp không chính thức.`,
      p3_main: ` Trước khi một trong hai bên có thể tìm kiếm trọng tài, trước tiên, bên đó phải gửi cho bên kia một Thông báo tranh chấp bằng văn bản mô tả bản chất và cơ sở của khiếu nại hoặc tranh chấp, và yêu cầu đền bù. Thông báo cho Công ty phải được gửi tới: ${WEBSITE_ADDRESS_VIE}. Sau khi nhận được Thông báo, bạn và Công ty có thể cố gắng giải quyết khiếu nại hoặc tranh chấp không chính thức. Nếu bạn và Công ty không giải quyết khiếu nại hoặc tranh chấp trong vòng ba mươi (30) ngày sau khi nhận được Thông báo, một trong hai bên có thể bắt đầu tiến hành phân xử trọng tài. Số tiền của bất kỳ đề nghị giải quyết nào được thực hiện bởi bất kỳ bên nào có thể không được tiết lộ cho trọng tài cho đến sau khi trọng tài đã xác định số tiền mà một trong hai bên được hưởng.`,
      p4_strong: `Quy tắc trọng tài.`,
      p4_main: ` Trọng tài sẽ được bắt đầu thông qua Hiệp hội Trọng tài Hoa Kỳ (AAA), một nhà cung cấp giải quyết tranh chấp thay thế được thành lập cung cấp trọng tài như quy định trong phần này. Nếu AAA không có sẵn để phân xử, các bên sẽ đồng ý chọn một Nhà cung cấp ADR thay thế. Các quy tắc của Nhà cung cấp ADR sẽ chi phối tất cả các khía cạnh của trọng tài ngoại trừ trong phạm vi các quy tắc đó mâu thuẫn với Điều khoản. Quy tắc Trọng tài về Người tiêu dùng AAA mà điều chỉnh trọng tài có sẵn trực tuyến tại adr.org hoặc bằng cách gọi cho AAA theo số 1-800-778-7879. Trọng tài sẽ được tiến hành bởi một trọng tài viên trung lập duy nhất. Bất kỳ khiếu nại hoặc tranh chấp nào trong đó tổng số tiền của giải thưởng được tìm kiếm ít hơn Mười nghìn đô la Mỹ (10.000 đô la Mỹ) có thể được giải quyết thông qua ràng buộc trọng tài không dựa trên ngoại hình, theo lựa chọn của bên yêu cầu cứu trợ. Đối với các khiếu nại hoặc tranh chấp trong đó tổng số tiền của giải thưởng được tìm kiếm là Mười nghìn đô la Mỹ (10.000 đô la Mỹ) trở lên, quyền điều trần sẽ được xác định theo Quy tắc trọng tài. Bất kỳ điều trần sẽ được tổ chức tại một địa điểm Trong vòng 100 dặm cư trú của bạn, trừ khi bạn cư trú bên ngoài Hoa Kỳ, và trừ khi các bên có thỏa thuận khác. Nếu bạn cư trú bên ngoài Hoa Kỳ, trọng tài viên sẽ cung cấp cho các bên thông báo hợp lý về ngày, giờ và địa điểm của bất kỳ phiên điều trần bằng miệng nào. Bất kỳ phán quyết nào về phán quyết của trọng tài viên có thể được đưa vào bất kỳ tòa án có thẩm quyền nào. Nếu trọng tài cấp cho bạn một giải thưởng lớn hơn đề nghị giải quyết cuối cùng mà Công ty đã thực hiện cho bạn trước khi bắt đầu phân xử trọng tài, Công ty sẽ trả cho bạn số tiền thưởng lớn hơn hoặc $ 2.500,00. Mỗi bên phải chịu chi phí và khoản giải ngân của mình phát sinh từ trọng tài và sẽ trả một phần bằng nhau về phí và chi phí của Nhà cung cấp ADR.`,
      p5_strong: `Quy tắc bổ sung cho Trọng tài không xuất hiện trực tiếp.`,
      p5_main: ` Nếu trọng tài không xuất hiện trực tiếp được bầu, trọng tài sẽ được tiến hành qua điện thoại, trực tuyến và/hoặc chỉ dựa trên văn bản đệ trình; cách thức cụ thể sẽ được lựa chọn bởi bên khởi xướng trọng tài. Trọng tài sẽ không liên quan đến bất kỳ sự xuất hiện cá nhân nào của các bên hoặc nhân chứng trừ khi các bên có thỏa thuận khác.`,
      p6_strong: `Giới hạn thời gian.`,
      p6_main: ` Nếu bạn hoặc Công ty đeo đuổi trọng tài, hành động trọng tài phải được bắt đầu và/hoặc yêu cầu trong thời hiệu và trong bất kỳ thời hạn nào được áp dụng theo Quy tắc AAA cho khiếu nại thích hợp.`,
      p7_strong: `Thẩm quyền của Trọng tài viên.`,
      p7_main: ` Nếu trọng tài được bắt đầu, trọng tài sẽ quyết định các quyền và trách nhiệm pháp lý của bạn và Công ty, và tranh chấp sẽ không được hợp nhất với bất kỳ vấn đề nào khác hoặc tham gia với bất kỳ trường hợp hoặc bên nào khác. Trọng tài viên sẽ có thẩm quyền cấp các đề nghị bác đơn cho tất cả hoặc một phần của bất kỳ khiếu nại nào. Trọng tài viên sẽ có thẩm quyền bồi thường thiệt hại về tiền tệ và cấp bất kỳ biện pháp khắc phục phi tiền tệ hoặc cứu trợ nào cho một cá nhân theo luật hiện hành, Quy tắc AAA và Điều khoản. Trọng tài sẽ đưa ra một  sự bồi thường bằng văn bản và tuyên bố quyết định mô tả những phát hiện và kết luận thiết yếu mà sự bồi thường dựa trên. Trọng tài có cùng thẩm quyền trao giải thưởng trên cơ sở cá nhân mà một thẩm phán tại tòa án của pháp luật sẽ có. Phán quyết của trọng tài là cuối cùng và ràng buộc với bạn và Công ty.`,
      p8_strong: `Miễn trừ của Hội đồng xét xử.`,
      p8_main: ` CÁC BÊN QUA Đ Y KHƯỚC TỪ NHỮNG QUYỀN HỢP PHÁP VÀ QUYỀN TUYÊN BỐ CỦA HỌ ĐỂ ĐẾN TÒA ÁN VÀ CÓ PHIÊN XỬ TRƯỚC THẨM PHÁN HOẶC BỒI THẨM ĐOÀN, thay vì bầu chọn rằng tất cả các khiếu nại và tranh chấp sẽ được giải quyết bằng trọng tài theo Thỏa thuận Trọng tài này. Thủ tục trọng tài thường hạn chế hơn, hiệu quả hơn và ít tốn kém hơn so với các quy tắc áp dụng tại tòa án và phải chịu rất hạn chế sự xem xét của tòa án. Trong trường hợp bất kỳ vụ kiện nào phát sinh giữa bạn và Công ty tại bất kỳ tòa án tiểu bang hoặc liên bang nào trong vụ kiện rời bỏ trống hoặc thi hành phán quyết trọng tài hoặc ngược lại, BẠN VÀ CÔNG TY KHƯỚC TỪ TẤT CẢ QUYỀN VỚI MỘT PHIÊN TÒA CỦA BỒI THẨM ĐOÀN, thay vào đó, giải quyết tranh chấp bởi một thẩm phán.`,
      p9_strong: `Miễn các hành động nhóm hợp nhất.`,
      p9_main: ` Tất cả các khiếu nại và tranh chấp trong phạm vi của thỏa thuận trọng tài này phải được phân xử hoặc kiện tụng trên cơ sở cá nhân chứ không phải trên cơ sở tập thể, và các khiếu nại của nhiều khách hàng hoặc người dùng không thể được phân xử hoặc kiện tụng chung với bất kỳ khách hàng nào khác hoặc người dùng.`,
      p10_strong: `Bảo mật.`,
      p10_main: ` Tất cả các khía cạnh của thủ tục tố tụng trọng tài sẽ được bảo mật tuyệt đối. Các bên đồng ý duy trì bảo mật trừ khi luật pháp yêu cầu khác. Đoạn văn này sẽ không ngăn cản một bên đệ trình lên tòa án pháp luật bất kỳ thông tin cần thiết nào để thực thi Thỏa thuận này, để thi hành phán quyết trọng tài hoặc tìm kiếm sự giúp đỡ mang tính huấn thị hoặc công bằng.`,
      p11_strong: `Mức độ nghiêm trọng.`,
      p11_main: ` Nếu bất kỳ phần hoặc phần nào của Thỏa thuận Trọng tài này được phát hiện theo luật là không hợp lệ hoặc không thể thi hành bởi tòa án có thẩm quyền, thì những phần hoặc phần cụ thể đó sẽ không có hiệu lực và sẽ bị cắt đứt và phần còn lại của Thỏa thuận sẽ bị cắt đứt và phần còn lại của Thỏa thuận sẽ tiếp tục có  đầy đủ hiệu lực và tác dụng.`,
      p12_strong: `Quyền từ bỏ.`,
      p12_main: ` Bất kỳ hoặc tất cả các quyền và giới hạn được quy định trong Thỏa thuận trọng tài này có thể được từ bỏ bởi bên chống lại bên yêu cầu bồi thường. Việc từ bỏ đó sẽ không từ bỏ hoặc ảnh hưởng đến bất kỳ phần nào khác của Thỏa thuận Trọng tài này.`,
      p13_strong: `Sự tồn tại của Thỏa thuận.`,
      p13_main: ` Thỏa thuận trọng tài này sẽ tiếp tục tồn tại khi chấm dứt mối quan hệ của bạn với Công ty.`,
      p14_strong: `Tòa án xử vụ kiện nhỏ.`,
      p14_main: ` Tuy nhiên, những điều đã nói ở trên, bạn hoặc Công ty có thể đưa ra một hành động cá nhân tại tòa án xử các vụ kiện nhỏ.`,
      p15_strong: `Cứu trợ công bằng khẩn cấp.`,
      p15_main: ` Dẫu cho những điều đã nói ở trên, một trong hai bên có thể tìm kiếm sự cứu trợ công bằng khẩn cấp trước tòa án tiểu bang hoặc liên bang để duy trì tình trạng chờ phân xử trọng tài. Yêu cầu về các biện pháp tạm thời sẽ không được coi là từ bỏ bất kỳ quyền hoặc nghĩa vụ nào khác theo Thỏa thuận Trọng tài này.`,
      p16_strong: `Khiếu nại Không phải chịu Trọng tài.`,
      p16_main: ` Mặc dù đã nêu ở trên, các khiếu nại phỉ báng, vi phạm Đạo luật Lừa đảo và Lạm dụng Máy tính và vi phạm hoặc chiếm dụng bằng sáng chế, bản quyền, nhãn hiệu hoặc bí mật thương mại của bên kia sẽ không phải tuân theo Thỏa thuận Trọng tài này.`,
      p17: `Trong mọi trường hợp mà Thỏa thuận Trọng tài nêu trên cho phép các bên tranh tụng tại tòa án, các bên đồng ý tuân theo thẩm quyền cá nhân của các tòa án nằm trong Hạt Hà Lan, California, cho các mục đích đó.`,
      p18: `Trang web có thể phải tuân theo luật kiểm soát xuất khẩu của Hoa Kỳ và có thể phải tuân theo các quy định xuất khẩu hoặc nhập khẩu ở các quốc gia khác. Bạn đồng ý không xuất, tái xuất hoặc chuyển nhượng, trực tiếp hoặc gián tiếp, bất kỳ dữ liệu kỹ thuật nào của Hoa Kỳ có được từ Công ty hoặc bất kỳ sản phẩm nào sử dụng dữ liệu đó, mà vi phạm luật hoặc quy định xuất khẩu của Hoa Kỳ.`,
      p19: `Công ty được đặt tại địa chỉ trong Mục 10.8. Nếu bạn là cư dân California, bạn có thể báo cáo các khiếu nại cho Đơn vị Hỗ trợ Khiếu nại của Bộ phận Sản phẩm Tiêu dùng của Phòng ban Các Vấn đề Người tiêu dùng California bằng cách liên hệ với họ bằng văn bản tại 400R Street, Sacramento, CA 95814 hoặc qua điện thoại theo số (800) 952-5210.`,
      p20_strong: `Truyền thông điện tử.`,
      p20_main: ` Các liên lạc giữa bạn và Công ty sử dụng các phương tiện điện tử, cho dù bạn sử dụng Trang web hay gửi email cho chúng tôi hoặc cho dù Công ty có đăng thông báo trên Trang web hay liên lạc với bạn qua email. Đối với các mục đích hợp đồng, bạn (a) đồng ý nhận thông tin liên lạc từ Công ty dưới dạng điện tử; và (b) đồng ý rằng tất cả các điều khoản và điều kiện, thỏa thuận, thông báo, tiết lộ và thông tin liên lạc khác mà Công ty cung cấp cho bạn đáp ứng về mặt điện tử điện tử bất kỳ nghĩa vụ pháp lý nào mà các thông tin liên lạc đó sẽ đáp ứng nếu được viết bằng bản in.`,
      p21_strong: `Toàn bộ điều khoản.`,
      p21_main: ` Các Điều khoản này cấu thành toàn bộ thỏa thuận giữa bạn và chúng tôi về việc sử dụng Trang web. Việc chúng tôi không thực hiện hoặc thực thi bất kỳ quyền hoặc quy định nào trong các Điều khoản này sẽ không hoạt động như sự từ bỏ quyền hoặc quy định đó. Các phần tiêu đề trong các Điều khoản này chỉ nhằm mục đích thuận tiện và không có hiệu lực pháp lý hoặc hợp đồng. Từ "bao gồm" có nghĩa là "bao gồm nhưng không giới hạn". Nếu bất kỳ điều khoản nào trong các Điều khoản này được coi là không hợp lệ hoặc không thể thực thi, các điều khoản khác của các Điều khoản này sẽ không thay đổi và điều khoản không hợp lệ hoặc không thể thực thi sẽ được xem xét sửa đổi để nó có hiệu lực và có thể thi hành trong phạm vi tối đa được pháp luật cho phép. Mối quan hệ của bạn với Công ty là của một thầu khoán độc lập và không bên nào là đại lý hoặc đối tác của bên kia. Các Điều khoản này, và các quyền và nghĩa vụ của bạn trong tài liệu này, có thể không được chỉ định, ký hợp đồng phụ, ủy thác hoặc chuyển giao bởi bạn mà không có sự đồng ý trước bằng văn bản của Công ty và mọi chuyển nhượng, hợp đồng phụ, ủy quyền hoặc chuyển nhượng vi phạm đã nói ở trên sẽ không có giá trị. Công ty có thể tự do chuyển nhượng các Điều khoản này. Các điều khoản và điều kiện được quy định trong các Điều khoản này sẽ ràng buộc đối với người được chuyển nhượng.`,
      p22_strong: `Bản quyền / Thông tin nhãn hiệu.`,
      p22_main: ` Bản quyền © 2020 ${WEBSITE_NAME}. Bảo lưu mọi quyền. Tất cả các nhãn hiệu, logo và nhãn hiệu dịch vụ được hiển thị trên Trang web là tài sản của chúng tôi hoặc tài sản của các bên thứ ba khác. Bạn không được phép sử dụng các Nhãn hiệu này mà không có sự đồng ý trước bằng văn bản của chúng tôi hoặc sự đồng ý của bên thứ ba đó có thể sở hữu Nhãn hiệu đó.`,
    },
    h2_contact: {
      title: "Thông tin liên lạc",
      p1: `Address: ${WEBSITE_ADDRESS_VIE}`,
      p2: `Email: `,
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
      p2_main1: `At ${WEBSITE_NAME}, accessible from `,
      p2_main2: `, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${WEBSITE_NAME} and how we use it.`,
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
      p2_main1: `The ${WEBSITE_NAME} website located at `,
      p2_main2: ` is a copyrighted work belonging to ${WEBSITE_NAME}. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.`,
      p3: "All such additional terms, guidelines, and rules are incorporated by reference into these Terms.",
      p4: `These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.`,
      p5: "These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute."
    },
    h2_access: {
      title: "Access to the Site",
      p1_strong: `Subject to these Terms.`,
      p1_main: ` Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.`,
      p2_strong: `Certain Restrictions.`,
      p2_main: ` The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.  All copyright and other proprietary notices on the Site must be retained on all copies thereof.`,
      p3: "Company reserves the right to change, suspend, or cease the Site with or without notice to you.  You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.",
      p4_strong: `No Support or Maintenance.`,
      p4_main: ` You agree that Company will have no obligation to provide you with any support in connection with the Site.`,
      p5: "Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms.",
    },
    h2_ads: {
      title: "Third-Party Links & Ads; Other Users",
      p1_strong: `Third-Party Links & Ads.`,
      p1_main: ` The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.  Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.  You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.`,
      p2_strong: `Other Users.`,
      p2_main: ` Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.  You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any Site user, we are under no obligation to become involved.`,
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
      p4_strong: `Term and Termination.`,
      p4_main: ` Subject to this Section, these Terms will remain in full force and effect while you use the Site.  We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms.  Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.  You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases.  Company will not have any liability whatsoever to you for any termination of your rights under these Terms.  Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.`
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
      p2_strong: `Applicability of Arbitration Agreement.`,
      p2_main: ` All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  Unless otherwise agreed to, all arbitration proceedings shall be held in English.  This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.`,
      p3_strong: `Notice Requirement and Informal Dispute Resolution.`,
      p3_main: ` Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to the Company should be sent to: ${WEBSITE_ADDRESS_ENG}. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.  If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either party is entitled.`,
      p4_strong: `Arbitration Rules.`,
      p4_main: ` Arbitration shall be initiated through the American Arbitration Association, an established alternative dispute resolution provider that offers arbitration as set forth in this section.  If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.  The rules of the ADR Provider shall govern all aspects of the arbitration except to the extent such rules are in conflict with the Terms.  The AAA Consumer Arbitration Rules governing the arbitration are available online at adr.org or by calling the AAA at 1-800-778-7879.  The arbitration shall be conducted by a single, neutral arbitrator.  Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.  For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.  Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.  If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.  If the arbitrator grants you an award that is greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the Company will pay you the greater of the award or $2,500.00.  Each party shall bear its own costs and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider.`,
      p5_strong: `Additional Rules for Non-Appearance Based Arbitration.`,
      p5_main: ` If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.  The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties.`,
      p6_strong: `Time Limits.`,
      p6_main: ` If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim.`,
      p7_strong: `Authority of Arbitrator.`,
      p7_main: ` If arbitration is initiated, the arbitrator will decide the rights and liabilities of you and the Company, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.  The arbitrator shall have the authority to grant motions dispositive of all or part of any claim.  The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.  The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based.  The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.  The award of the arbitrator is final and binding upon you and the Company.`,
      p8_strong: `Waiver of Jury Trial.`,
      p8_main: ` THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.  Arbitration procedures are typically more limited, more efficient and less expensive than rules applicable in a court and are subject to very limited review by a court.  In the event any litigation should arise between you and the Company in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.`,
      p9_strong: `Waiver of Class or Consolidated Actions.`,
      p9_main: ` All claims and disputes within the scope of this arbitration agreement must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user.`,
      p10_strong: `Confidentiality.`,
      p10_main: ` All aspects of the arbitration proceeding shall be strictly confidential.  The parties agree to maintain confidentiality unless otherwise required by law.  This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.`,
      p11_strong: `Severability.`,
      p11_main: ` If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.`,
      p12_strong: `Right to Waive.`,
      p12_main: ` Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted.  Such waiver shall not waive or affect any other portion of this Arbitration Agreement.`,
      p13_strong: `Survival of Agreement.`,
      p13_main: ` This Arbitration Agreement will survive the termination of your relationship with Company.`,
      p14_strong: `Small Claims Court.`,
      p14_main: ` Nonetheless the foregoing, either you or the Company may bring an individual action in small claims court.`,
      p15_strong: `Emergency Equitable Relief.`,
      p15_main: ` Anyhow the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.  A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.`,
      p16_strong: `Claims Not Subject to Arbitration.`,
      p16_main: ` Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement.`,
      p17: `In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Netherlands County, California, for such purposes.`,
      p18: `The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data acquired from Company, or any products utilizing such data, in violation of the United States export laws or regulations.`,
      p19: `Company is located at the address in Section 10.8. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.`,
      p20_strong: `Electronic Communications.`,
      p20_main: ` The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.`,
      p21_strong: `Entire Terms.`,
      p21_main: ` These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.  Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.  Company may freely assign these Terms.  The terms and conditions set forth in these Terms shall be binding upon assignees.`,
      p22_strong: `Copyright/Trademark Information.`,
      p22_main: ` Copyright © 2020 ${WEBSITE_NAME}. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.`,
    },
    h2_contact: {
      title: "Contact Information",
      p1: `Address: ${WEBSITE_ADDRESS_ENG}`,
      p2: `Email: `,
    },
  }
};

export default localeContext;
export { getText, getLongLineText };