const WEBSITE_NAME = "DoctorAlly";
const WEBSITE_UPDATE_DATE_ENG = "Friday, April 17, 2020";
const WEBSITE_ADDRESS_ENG = "No 1 Hoang Minh Giam St";

const ENG = {
  header: {
    about: "About",
    volunteer: "Volunteer",
    request_help: "Request Help",
    supply_stores: "Nearby Stores",
    covid19_data: "Covid-19 Data",
    how_it_works: "Learn More",
  },

  homepage: {
    volunteer: {
      title: "Volunteer",
      description_strong: "Small actions spread love. ",
      description: "Covid-19 made physicians exhausted both physically and mentally. You can contribute your strength to the fight against pandemics by volunteering to help the doctors.",
    },
    request_help: {
      title: "Request Help",
      description_strong: "Believe in kindness. ",
      description: "We understand that you are fighting every day for the community. So we want to help you. Whenever you need something, fill out the form and we will forward it to the volunteers.",
    },
    supply_stores: {
      title: "Nearby Stores",
      description_strong: "Convenient lookup. ",
      description: "In order to search for stores around the designated area, we have integrated the map into the project. The map will help volunteers visualize the most appropriate travel routes for themselves.",
    },
    covid19_data: {
      title: "Covid-19 Data",
      description_strong: "Quick update. ",
      description: "Updating the news during a pandemic is becoming increasingly important. Therefore, we have integrated maps and statistics to bring the latest and most complete information about Covid-19 of other countries.",
    },
    how_it_works: {
      title: "Learn More",
      description_strong: "Instruction booklet. ",
      span_b4: "Whenever you have troubles using our site, visit ",
      span_link: " here ",
      span_af: "to search for the necessary information! We have prepared a tutorial video and detailed article already!",
    },
    about_us: {
      title: "About Us",
      description_strong: "Feel free to connect. ",
      span_b4: "Hello, nice to have you on our website. Stay connected every time a question comes to you, and let us help you find the answer to that! You can find us ",
      span_link: "here.",
    },
  },

  about: {
    h2: "Our Team",
    h3: "Healthcare workers need your help to fight COVID-19",
    box: "Volunteer your time or request support for meals, pet care, errands, and more during the COVID-19 pandemic."
  },
  // VOLUNTEER
  volunteer: {
    h2_volunteer: "BE A VOLUNTEER",
    p: `We’re currently setting up networks of doctors and volunteers with an aim to fight against Covid-19.
    Your help will greatly contribute to this fight and our community as a whole.
    Sign up as a volunteer now and receive notifications when new requests are posted!`,
    button: "Let's Help",
    h2_request: "REQUEST LISTS",
    search_bar: "Search Requests",
    next_button: "NEXT",
    back_button: "BACK",
  },
  volunteerSignUp: {
    title: 'VOLUNTEER CARD',
    description: `We will contact you when there are requests near you.
    Your personal information is safe with us!`,
    support_kinds: {
      title: "What can you provide?",
      item1: "Meals",
      item2: "Drinks",
      item3: "Masks",
      item4: "Sanitizer hand wash",
      item5: "Medical supplies",
      item6: "Pet care",
      item7: "Laundry",
      item8: "Other ",
    },
    personal_info: {
      title: "Personal information",
      name_placeholder: "Your full name",
      district_placeholder: "Your home district",
      ward_placeholder: "Your home ward",
      city_placeholder: "Your home city",
      email_placeholder: "Your email",
      phone_placeholder: "Your phone number",
      signature_placeholder: "Your signature",
      submit_button: "Submit",
    },
    footer: {
      quote: "“No one has ever become poor by giving.”",
      author: "Anne Frank, diary of Anne Frank: the play",
    }
  },
  // REQUEST HELP
  request_help: {
    title: "REQUEST CARD",
    description: "Let us help you get what you need!",
    personal_info: {
      title: "Personal information",
      name_placeholder: "Your full name",
      location_placeholder: "Your location",
      facility_placeholder: "Your medical facility",
      role_placeholder: "Your job title/ role",
      email_placeholder: "Your email",
      phone_placeholder: "Your phone number"
    },
    support_kinds: {
      title: "What kinds of support do you need?",
      item1: "Medical supplies",
      item2: "Masks",
      item3: "Sanitizer hand wash",
      item4: "Meals",
      item5: "Drinks",
      item6: "Laundry",
      item7: "Pet care",
      item8: "Other",
      request_placeholder: "Describe your request",
      notice: "* If possible, please include details such as days or times of week you anticipate needing help, dietary restrictions, and anything else a helper might need to know."
    },
    footer: {
      next_button: "NEXT",
      back_button: "BACK",
      submit_button: "SUBMIT",
    },
    page: "Page",
  },

  offer_help: {
    title: 'OFFER HELP CARD',
    description: `On behalf of doctors, thank you for your sincere kindness and positive impact you made in the community.`,
    personal_info: {
      title: "Personal information",
      name_placeholder: "Your full name",
      district_placeholder: "Your home district",
      ward_placeholder: "Your home ward",
      city_placeholder: "Your home city",
      email_placeholder: "Your email",
      phone_placeholder: "Your phone number",
      signature_placeholder: "Your signature",
      submit_button: "Submit",
    },
    footer: {
      quote: "“When we share, we open doors to a new beginning.”",
      author: "― Paul Bradley Smith",
    }
  },

  // SUPPLY STORES
  supply_stores: {
    hanoimap: "Hanoi Supply Map",
    description: "In order to support medical workers, especially those are in need of regular supplies such as food and household appliances, we have created an easy-approaching map for supply stores. The only thing you have to do is to enter your location and the nearest shops will appear for you to choose!",
    search_placeholder: "Search for stores nearby",
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

  covid19_data: {
    loading: "Loading",

    longitude: "Longitude",
    latitude: "Latitude",
    zoom: "Zoom",
    mapType: "World Map",

    search_placeholder: "Search Country",

    country: "Country",
    continent: "Continent",
    today_cases: "Today cases",
    today_deaths: "Today deaths",
    cases: "Cases",
    deaths: "Deaths",
    tests: "Tests",
    recovered: "Recovered",
    active: "Active",
    critical: "Critical",

    cases_per_million: "Cases per Million",
    deaths_per_million: "Deaths per Million",
    tests_per_million: "Tests per Million",

    heads: {
      country: "Country",
      cases: "Cases",
      deaths: "Deaths",
      recovered: "Recovered",
      active: "Active",
      critical: "Critical",
      tests: "Tests",
      continent: "Continent"
    },

    footer: {
      next_button: "Next",
      back_button: "Back"
    }

    // Xử lý tên châu lục
  },

  how_it_works: {
    h2_general: {
      title: "General",
      p1: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
      p2: "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.",
      p3: "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
      li_1: "Provide, operate, and maintain our website",
      li_2: "Improve, personalize, and expand our website",
      li_3: "Understand and analyze how you use our website",
      li_4: "Develop new products, services, features, and functionality",
      li_5: "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
      li_6: "Send you emails",
      li_7: "Find and prevent fraud",
    },
    for_doctors: {
      title: "For doctors only",
      li_1: "Choose who will help you",
      li_2: "You have the right to refuse help if you feel bothered",
      li_3: "Open your heart and believe in the kindness that exists in the community",
    },
    for_volunteers: {
      title: "For volunteers only",
      li_1: "Please register to participate in the project with a sincere heart and desire to help the doctors",
      li_2: "Always remember that the nurses, the doctors are on standby in the hospital day and night scrambling for life",
      li_3: "So avoid bothering them and be responsible for your help",
    },
    notice: {
      title: "Notice",
      description: `It's important to evaluate which requests and offers on ${WEBSITE_NAME} to accept for safety purposes.`,
    }
  },

  footer: {
    contact_us: "About Us",
    feedbacks: "Feedbacks",
    privacy_policy: "Privacy Policy",
    terms_of_use: "Terms of Use"
  },

  contact_us: {
    title: "CONTACT US",
    description: "via the following links"
  },

  // FEEDBACKS
  feedbacks: {
    title: "DROP US A LINE",
    description: "We appreciate your feedbacks to us. Hope to work closely with you in the future",
    personal_info: {
      title: "Personal information",
      name_placeholder: "Your full name",
      email_placeholder: "Your email"
    },
    feedback_section: {
      title: "Feedback Section",
      placeholder: "Feedback Card",
    },
    footer: {
      signature: "Your signature",
      button: "Send"
    }
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
  },

  //SUCCESS
  success_volunteer: {
    title: "Awesome",
    p1: 'Your reply has been confirmed.',
    p2: 'You will get some requests soon from us.',
    btn: 'Return Home'
  },
  success_offer: {
    title: "Awesome",
    p1: 'Your offer has been confirmed.',
    p2: 'You will get in touch with the doctor soon.',
    btn: 'Return Home'
  },
  success_request: {
    title: "Awesome",
    p1: 'Your request has been sent.',
    p2: 'You will get help soon from our volunteers.',
    btn: 'Return Home'
  },
};

export default ENG;
