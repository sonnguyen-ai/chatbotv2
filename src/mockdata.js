const mockSetting = {
  baseUrl: "https://chatbotcooapi.azurewebsites.net",
  tenantId: "seysolutions",
  configuration: {
    defaultMessage: "Hello!",
    title: "Chat with Sey",
    max_token: "300",
    instruction: `language: Vietnamese, english
role: customer service assistant for Sey solutions, should be friendly, suporty
rule: should avoid the unrelated questions, 
`,
    prompt: {
      company: {
        name: "CÔNG TY TNHH SEY SOLUTIONS",
        owner: "Hoàng Thị Thùy Linh",
        address:
          "280D Hoàng Hoa Thám, Phường 5, Bình Thạnh, Thành phố Hồ Chí Minh",
        phone: "0979.092.486",
        tax_id: "0316971079",
        email: "linhhoang@seysolutions.com",
        website: "https://seysolutions.com",
        operating_hours: "Monday–Sunday: 7 AM – 9 PM",
      },
      mission_statement:
        "Tại SEY SOLUTIONS, chúng tôi cam kết hiểu rõ và đáp ứng các nhu cầu và yêu cầu riêng của từng khách hàng. Chúng tôi tin tưởng vào tính linh hoạt và khả năng thích ứng, đồng thời không giới hạn bản thân trong bất kỳ mô hình hoặc quy trình tương tác nào. Cho dù bạn là doanh nghiệp vừa và nhỏ, công ty lớn hay tổ chức phi lợi nhuận, bạn đều có thể tin tưởng vào dịch vụ thân thiện, linh hoạt, chuyên nghiệp và tay nghề cao của chúng tôi.",
      services: {
        software_development:
          "Tối ưu hóa nguồn lực, ngân sách và giúp doanh nghiệp duy trì lợi thế trong kỷ nguyên chuyển đổi kỹ thuật số.",
        solutions: [
          "Thiết kế Website & Mobile App",
          "Thiết kế hệ thống phần mềm - Chuyển đổi số",
          "Xây dựng bộ nhận diện thương hiệu",
          "Digital Marketing",
        ],
      },
      projects: [
        "FPT Hoàng Nam Tiến",
        "Website CJ Việt Nam",
        "G-Kitchen - Tích tem đổi quà",
        "Website Logistics HVK",
        "Website Pizza Company",
        "Project Binance & Forex",
        "Intermac (iMac)",
        "Website Maggi",
        "Hệ thống Tính phí Công chứng",
        "Mạng xã hội Công thức nấu ăn",
        "Y Khoa Diamond",
        "Moongle",
        "Welups",
        "DropShip Seyoo",
        "Hệ thống Kho (WMS) - Yes24.vn",
        "Yes24.vn - Website Thương mại điện tử",
        "Giặt Khô Danny",
        "Dr.Nee",
        "Nhà hàng Khách Sạn",
        "Hệ thống DropShipping",
        "Website So sánh giá",
        "Hệ thống du lịch Yong.vn",
        "Hệ thống ERP VI Technology",
        "Hệ thống ERP Sunfix",
        "Tin tức CafeStyle",
        "Gạo Trọng Tín",
      ],
      core_values: {
        quality: "Tất cả sản phẩm và dịch vụ đều đạt chất lượng cao nhất.",
        innovation:
          "Tư duy sáng tạo, linh hoạt và thực tế để đạt kết quả tối ưu.",
        credibility:
          "Luôn trung thực, có đạo đức và nhất quán trong mọi hoạt động.",
        passion: "Làm việc với niềm đam mê để tạo ra những phần mềm tốt nhất.",
      },
      technologies: [
        "NodeJS",
        "Angular JS",
        "React JS",
        "Next JS",
        "MongoDB",
        "MSSQL",
        "PostgreSQL",
        ".NET",
        "Java",
        "PHP",
        "React Native",
        "Flutter",
        "AI",
        "Figma",
      ],
      customers_partners: [
        "CJ",
        "CJ Foods",
        "CJ OliveNetworks",
        "DIAMOND",
        "FPT Hoàng Nam Tiến",
        "Inter-K",
        "Maggi",
        "TTC",
        "COCO",
        "The Pizza Company",
        "Nestle",
        "Tiger",
        "Kitchen",
        "GAPIT",
        "iMAC",
        "Yes24",
        "PNE Energy Company",
      ],
      recruitment: {
        objective:
          "Cung cấp sản phẩm phần mềm chất lượng cao bằng đội ngũ nhân sự tài năng.",
        positions: [
          {
            title: "Kế toán thuế",
            link: "https://seysolutions.com/vi/recruit/ke-toan-thue-rc1.html",
          },
          {
            title: "Quản lý dự án IT",
            link: "https://seysolutions.com/vi/recruit/quan-ly-du-an-it-rc2.html",
          },
          {
            title: "Nhà thiết kế UI/UX",
            link: "https://seysolutions.com/vi/recruit/nha-thiet-ke-ui-ux-rc3.html",
          },
          {
            title: "Lập trình viên .NET",
            link: "https://seysolutions.com/vi/recruit/lap-trinh-vien-net-rc4.html",
          },
          {
            title: "Lập trình viên Front-End",
            link: "https://seysolutions.com/vi/recruit/lap-trinh-vien-frontend-rc5.html",
          },
        ],
        follow_us_on: ["ITviec", "Vietnamworks"],
      },
      contact: {
        message:
          "SEY SOLUTIONS sẵn lòng trả lời tất cả các câu hỏi về phát triển phần mềm, tư vấn thương mại điện tử và ứng dụng web.",
      },
    },
  },
};

export default mockSetting;
