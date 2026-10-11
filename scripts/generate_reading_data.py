#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate comprehensive reading comprehension database for all 10 Stages of AWL.
Each stage contains curated academic reading passages embedding the stage's target AWL words,
glossary with interactive word highlights, and 5 types of exercises:
1. Multiple Choice Questions (Main Idea & Details)
2. Fill-in-the-Blanks (Cloze Test) with target vocabulary
3. True / False / Not Given (Academic IELTS style)
4. Find Synonyms (Tìm từ đồng nghĩa trong đoạn văn hoặc từ được cho)
5. Find Antonyms (Tìm từ trái nghĩa trong đoạn văn hoặc từ được cho)
Plus a dedicated matchingActivity matching the user's uploaded worksheet (Exercise 1: match synonyms, Exercise 2: match opposite meanings).
"""

import json

passages = [
    # STAGE 1: Ngũ Hành Sơn (Sublist 1)
    {
        "id": "read_s1_p1",
        "stageId": 1,
        "title": "Artificial Intelligence and Modern Labor: Assessing the Economic Transition",
        "titleVi": "Trí Tuệ Nhân Tạo và Lao Động Hiện Đại: Đánh Giá Sự Chuyển Dịch Kinh Tế",
        "genre": "academic",
        "topic": "Economics & Technology",
        "targetWords": ["assess", "economy", "analyse", "labour", "structure", "income", "policy", "significant", "require", "factor", "available", "indicate", "research", "method", "identify"],
        "content": """The rapid expansion of artificial intelligence has begun to transform the structural foundations of the global economy. Contemporary researchers regularly analyse large volumes of empirical data to assess the direct impact of automation on modern labour markets. Initial findings indicate that while certain routine functions are eliminated, advanced technological tools also create substantial new opportunities across diverse industrial sectors.

A critical factor in this transition involves how governments establish progressive policy frameworks. Economists assume that without targeted education and financial assistance, the gap in household income will widen significantly. Research institutions have derived various mathematical formulas to estimate future employment trends, requiring public authorities to respond proactively.

Furthermore, empirical evidence demonstrates that access to available retraining resources varies by geographic area. To ensure sustainable growth, modern societies must identify specific skill shortages and distribute technical knowledge equitably. Only through an integrated approach can we reconcile technological progress with social stability and long-term economic prosperity.""",
        "vietnameseTranslation": """Sự phát triển nhanh chóng của trí tuệ nhân tạo đã bắt đầu làm biến đổi nền tảng cấu trúc của nền kinh tế toàn cầu. Các nhà nghiên cứu đương đại thường xuyên phân tích lượng lớn dữ liệu thực nghiệm để đánh giá tác động trực tiếp của tự động hóa lên thị trường lao động hiện đại. Những phát hiện ban đầu chỉ ra rằng trong khi một số chức năng lặp đi lặp lại bị loại bỏ, các công cụ công nghệ tiên tiến cũng tạo ra những cơ hội mới đáng kể trên nhiều lĩnh vực công nghiệp khác nhau.

Một yếu tố cốt lõi trong quá trình chuyển dịch này liên quan đến cách thức chính phủ thiết lập các khung chính sách tiến bộ. Các nhà kinh tế học giả định rằng nếu không có sự đào tạo có mục tiêu và hỗ trợ tài chính, khoảng cách thu nhập hộ gia đình sẽ gia tăng đáng kể. Các viện nghiên cứu đã phát triển nhiều công thức toán học để ước tính xu hướng việc làm tương lai, đòi hỏi các cơ quan chức năng phải phản ứng một cách chủ động.

Hơn nữa, bằng chứng thực nghiệm chứng minh rằng khả năng tiếp cận các nguồn lực đào tạo lại hiện có thay đổi tùy theo từng khu vực địa lý. Để đảm bảo tăng trưởng bền vững, xã hội hiện đại phải xác định được tình trạng thiếu hụt kỹ năng cụ thể và phân phối tri thức kỹ thuật một cách công bằng. Chỉ thông qua một phương pháp tiếp cận tích hợp, chúng ta mới có thể dung hòa tiến bộ công nghệ với sự ổn định xã hội và sự thịnh vượng kinh tế lâu dài.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "ASSESS", "match": "EVALUATE", "wordVi": "đánh giá", "matchVi": "định giá, thẩm định"},
                {"word": "ANALYSE", "match": "EXAMINE", "wordVi": "phân tích", "matchVi": "xem xét, khảo sát"},
                {"word": "LABOUR", "match": "WORKFORCE", "wordVi": "lao động", "matchVi": "lực lượng nhân công"},
                {"word": "POLICY", "match": "STRATEGY", "wordVi": "chính sách", "matchVi": "chiến lược hành động"},
                {"word": "SIGNIFICANT", "match": "SUBSTANTIAL", "wordVi": "đáng kể, quan trọng", "matchVi": "to lớn, thực chất"},
                {"word": "INDICATE", "match": "DEMONSTRATE", "wordVi": "chỉ ra, biểu thị", "matchVi": "chứng minh, cho thấy"}
            ],
            "antonymPairs": [
                {"word": "AVAILABLE", "match": "INACCESSIBLE", "wordVi": "sẵn có, tiếp cận được", "matchVi": "không thể tiếp cận"},
                {"word": "SIGNIFICANT", "match": "TRIVIAL", "wordVi": "đáng kể, trọng yếu", "matchVi": "nhỏ nhặt, không đáng kể"},
                {"word": "EXPAND", "match": "SHRINK", "wordVi": "mở rộng", "matchVi": "thu hẹp, co lại"},
                {"word": "DISTRIBUTE", "match": "WITHHOLD", "wordVi": "phân phối, chia sẻ", "matchVi": "giữ lại, từ chối chia sẻ"}
            ]
        },
        "questions": [
            {
                "id": "q_s1_p1_1",
                "type": "mcq",
                "question": "What is the primary objective of researchers analyzing empirical data in paragraph 1?",
                "questionVi": "Mục tiêu chính của các nhà nghiên cứu khi phân tích dữ liệu thực nghiệm ở đoạn 1 là gì?",
                "targetWord": "assess",
                "options": [
                    "To prove that artificial intelligence will eliminate all human employment",
                    "To assess the direct impact of automation on contemporary labour markets",
                    "To distribute financial wealth equally across developing countries",
                    "To establish private monopolies over computational algorithms"
                ],
                "correctAnswer": "To assess the direct impact of automation on contemporary labour markets",
                "explanation": "Đoạn 1 nêu rõ: 'Contemporary researchers regularly analyse large volumes of empirical data to assess the direct impact of automation on modern labour markets.' (Từ trọng tâm: assess - đánh giá, labour - lao động)."
            },
            {
                "id": "q_s1_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage has the closest meaning to 'EVALUATE' or 'APPRAISE'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'EVALUATE' (đánh giá, thẩm định)?",
                "targetWord": "assess",
                "options": ["assess", "eliminate", "assume", "derive"],
                "correctAnswer": "assess",
                "explanation": "Từ 'assess' (đoạn 1: 'to assess the direct impact...') đồng nghĩa chính xác với 'evaluate' (đánh giá mức độ/tác động)."
            },
            {
                "id": "q_s1_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2 and 3, which word in the passage has the OPPOSITE meaning to 'INACCESSIBLE' or 'UNOBTAINABLE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2 & 3, từ nào trong bài đọc mang nghĩa ĐỐI LẬP với 'INACCESSIBLE' (không thể tiếp cận)?",
                "targetWord": "available",
                "options": ["available", "shortage", "proactive", "sustainable"],
                "correctAnswer": "available",
                "explanation": "Từ 'available' (sẵn có, có thể tiếp cận được) trong đoạn 3 ('access to available retraining resources') đối lập hoàn toàn với 'inaccessible' (không thể tiếp cận)."
            },
            {
                "id": "q_s1_p1_2",
                "type": "cloze",
                "question": "Modern societies must _______ specific skill shortages to ensure long-term stability.",
                "questionVi": "Xã hội hiện đại phải [xác định/nhận diện] các thiếu hụt kỹ năng cụ thể để bảo đảm sự ổn định lâu dài.",
                "targetWord": "identify",
                "options": ["identify", "distort", "abandon", "prohibit"],
                "correctAnswer": "identify",
                "explanation": "Từ cần điền là 'identify' (xác định, nhận diện). Đoạn 3: 'modern societies must identify specific skill shortages and distribute technical knowledge equitably.'"
            },
            {
                "id": "q_s1_p1_3",
                "type": "tfng",
                "question": "Access to available retraining programs is uniform across all geographic areas.",
                "questionVi": "Khả năng tiếp cận các chương trình đào tạo lại hiện có là đồng đều tại mọi khu vực địa lý.",
                "targetWord": "available",
                "options": ["True", "False", "Not Given"],
                "correctAnswer": "False",
                "explanation": "Thông tin trong bài: 'empirical evidence demonstrates that access to available retraining resources varies by geographic area' (thay đổi tùy theo từng khu vực, chứ không phải đồng đều -> False)."
            }
        ]
    },
    {
        "id": "read_s1_p2",
        "stageId": 1,
        "title": "The Imprisonment at Five Elements Mountain: Philosophical Analysis",
        "titleVi": "Ngũ Hành Sơn Giam Cầm: Góc Nhìn Phân Tích Triết Học",
        "genre": "lore",
        "topic": "Journey to the West Philosophy",
        "targetWords": ["principle", "concept", "authority", "period", "individual", "significant", "process", "role", "benefit", "structure", "theory"],
        "content": """The confinement of the Monkey King beneath the Five Elements Mountain represents a significant phase in classical Eastern literature. Philosophers interpret this five-hundred-year period not merely as punitive detention, but as a deliberate educational process designed to restructure Sun Wukong's understanding of cosmic authority.

Before his imprisonment, the individual hero rejected every legal code and celestial principle. His immense physical power lacked ethical restraint, threatening the universal order. By sealing him under heavy stone, the higher spiritual power established a physical boundary that required introspection. Through prolonged isolation, Wukong gradually recognized that true spiritual strength derives not from unrestrained rebellion, but from alignment with moral discipline.

This narrative illustrates the philosophical concept of self-cultivation. When Tang Monk finally arrived to release the seal, the monkey warrior was prepared to assume a noble role. His subsequent journey was not solely to benefit himself, but to protect dharma and serve society through cooperative effort.""",
        "vietnameseTranslation": """Việc giam giữ Tôn Ngộ Không dưới chân Ngũ Hành Sơn thể hiện một giai đoạn có ý nghĩa to lớn trong văn học cổ điển phương Đông. Các nhà triết học diễn giải thời kỳ năm trăm năm này không đơn thuần là sự trừng phạt giam cầm, mà là một quá trình giáo dục có chủ đích nhằm tái cấu trúc nhận thức của Tề Thiên về thẩm quyền vũ trụ.

Trước khi bị giam cầm, cá nhân người anh hùng này đã khước từ mọi quy chuẩn pháp lý và nguyên tắc thiên đình. Sức mạnh thể chất to lớn của chàng thiếu đi sự kiềm tỏa đạo đức, đe dọa trật tự vũ trụ. Bằng cách phong ấn chàng dưới tảng đá nặng nề, đấng quyền năng tâm linh tối cao đã thiết lập một ranh giới vật lý đòi hỏi sự tự quán chiếu nội tâm. Trải qua sự cô lập kéo dài, Ngộ Không dần nhận ra rằng sức mạnh tinh thần thực sự không bắt nguồn từ sự nổi loạn vô độ, mà bắt nguồn từ sự hòa hợp với kỷ luật đạo đức.

Câu chuyện này minh họa cho khái niệm triết học về sự tu thân rèn luyện. Khi Đường Tăng cuối cùng xuất hiện để gỡ bỏ phong ấn, chiến binh hầu vương đã sẵn sàng đảm nhận một vai trò cao quý. Chuyến hành trình tiếp theo của chàng không chỉ nhằm mang lại lợi ích cho bản thân, mà là để bảo vệ chính pháp và phụng sự xã hội thông qua sự nỗ lực hợp tác.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "AUTHORITY", "match": "POWER", "wordVi": "thẩm quyền, uy quyền", "matchVi": "quyền lực"},
                {"word": "PRINCIPLE", "match": "STANDARD", "wordVi": "nguyên tắc", "matchVi": "chuẩn mực"},
                {"word": "SIGNIFICANT", "match": "MOMENTOUS", "wordVi": "quan trọng, ý nghĩa", "matchVi": "trọng đại"},
                {"word": "BENEFIT", "match": "ADVANTAGE", "wordVi": "lợi ích", "matchVi": "thuận lợi, lợi thế"},
                {"word": "ROLE", "match": "FUNCTION", "wordVi": "vai trò", "matchVi": "chức năng, bổn phận"},
                {"word": "CONCEPT", "match": "NOTION", "wordVi": "khái niệm", "matchVi": "quan niệm, ý niệm"}
            ],
            "antonymPairs": [
                {"word": "INDIVIDUAL", "match": "COLLECTIVE", "wordVi": "cá nhân, đơn lẻ", "matchVi": "tập thể, cộng đồng"},
                {"word": "BENEFIT", "match": "DETRIMENT", "wordVi": "lợi ích, điều tốt", "matchVi": "tổn hại, điều hại"},
                {"word": "ISOLATION", "match": "INTEGRATION", "wordVi": "sự cô lập", "matchVi": "sự hòa nhập"},
                {"word": "RESTRAINT", "match": "FREEDOM", "wordVi": "sự kiềm chế, kìm nén", "matchVi": "sự tự do phóng túng"}
            ]
        },
        "questions": [
            {
                "id": "q_s1_p2_1",
                "type": "mcq",
                "question": "How do philosophers interpret Sun Wukong's five-hundred-year confinement?",
                "questionVi": "Các nhà triết học diễn giải thời kỳ giam cầm 500 năm của Tôn Ngộ Không như thế nào?",
                "targetWord": "process",
                "options": [
                    "As purely destructive revenge with no ethical foundation",
                    "As a deliberate educational process aimed at moral restructuring",
                    "As a temporary legal misunderstanding among celestial courts",
                    "As an accidental event with no symbolic meaning"
                ],
                "correctAnswer": "As a deliberate educational process aimed at moral restructuring",
                "explanation": "Đoạn 1 nêu: 'Philosophers interpret this five-hundred-year period not merely as punitive detention, but as a deliberate educational process designed to restructure Sun Wukong's understanding of cosmic authority.'"
            },
            {
                "id": "q_s1_p2_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 2, which word in the passage is closest in meaning to 'RESTRICTION' or 'LIMITATION'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 2, từ nào trong bài đọc có nghĩa gần nhất với 'RESTRICTION' hoặc 'LIMITATION' (sự giới hạn, kiềm tỏa)?",
                "targetWord": "restraint",
                "options": ["restraint", "rebellion", "strength", "isolation"],
                "correctAnswer": "restraint",
                "explanation": "Từ 'restraint' (sự kiềm chế, kiềm tỏa: 'ethical restraint') mang nghĩa tương đương với restriction/limitation."
            },
            {
                "id": "q_s1_p2_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2, which word in the passage means the OPPOSITE of 'CONFORMITY' or 'OBEDIENCE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2, từ nào trong bài đối lập với 'CONFORMITY' (sự phục tùng, tuân phục)?",
                "targetWord": "rebellion",
                "options": ["rebellion", "discipline", "principle", "isolation"],
                "correctAnswer": "rebellion",
                "explanation": "Từ 'rebellion' (sự nổi loạn, phản nghịch: 'unrestrained rebellion') trái ngược hoàn toàn với 'conformity/obedience' (sự phục tùng, tuân thủ)."
            }
        ]
    },

    # STAGE 2: Cao Lão Trang (Sublist 2)
    {
        "id": "read_s2_p1",
        "stageId": 2,
        "title": "Organizational Strategy and Resource Management in Modern Institutions",
        "titleVi": "Chiến Lược Tổ Chức và Quản Lý Nguồn Lực trong Các Thể Chế Hiện Đại",
        "genre": "academic",
        "topic": "Management & Economics",
        "targetWords": ["strategy", "resource", "administration", "evaluate", "conduct", "obtain", "participate", "appropriate", "impact", "maintain", "secure", "potential", "select", "focus"],
        "content": """Effective administration requires leadership to design an appropriate operational strategy that aligns with institutional values. Contemporary business organizations conduct regular empirical surveys to evaluate employee productivity and maintain customer satisfaction. When leaders focus their primary attention on human resource development, the potential for sustainable innovation increases dramatically.

To obtain a distinct competitive advantage, institutions must invest capital into technological acquisition while securing confidential data assets. Experts conclude that modern management cannot equate simple profit margins with long-term viability; instead, companies must assess diverse aspects of organizational culture. Employees who participate actively in strategic decision-making perceive their workplace more positively and demonstrate higher levels of commitment.

Furthermore, governmental regulations restrict irresponsible resource consumption in environmentally sensitive regions. Consequently, forward-looking corporations select sustainable methods to protect the broader community while continuing to achieve their corporate milestones.""",
        "vietnameseTranslation": """Công tác quản trị hiệu quả đòi hỏi ban lãnh đạo phải thiết kế một chiến lược vận hành thích hợp, nhất quán với các giá trị của tổ chức. Các doanh nghiệp đương đại tiến hành các cuộc khảo sát thực nghiệm định kỳ để đánh giá năng suất của nhân viên và duy trì sự hài lòng của khách hàng. Khi các nhà lãnh đạo tập trung sự chú ý cốt lõi vào việc phát triển nguồn nhân lực, tiềm năng đổi mới bền vững sẽ tăng lên rõ rệt.

Để đạt được lợi thế cạnh tranh riêng biệt, các thể chế phải đầu tư vốn vào việc tiếp nhận công nghệ song song với việc bảo đảm an toàn cho các tài sản dữ liệu bảo mật. Các chuyên gia kết luận rằng quản trị hiện đại không thể đánh đồng tỷ suất lợi nhuận đơn thuần với khả năng tồn tại lâu dài; thay vào đó, các công ty phải đánh giá các khía cạnh đa dạng của văn hóa tổ chức. Những nhân viên tham gia tích cực vào việc ra quyết định chiến lược sẽ nhìn nhận nơi làm việc tích cực hơn và thể hiện mức độ gắn kết cao hơn.

Hơn nữa, các quy định của chính phủ hạn chế việc tiêu thụ tài nguyên thiếu trách nhiệm ở các khu vực nhạy cảm về môi trường. Do đó, các tập đoàn có tầm nhìn xa lựa chọn các phương pháp bền vững để bảo vệ cộng đồng rộng lớn hơn trong khi vẫn tiếp tục đạt được các cột mốc doanh nghiệp của mình.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "APPROPRIATE", "match": "SUITABLE", "wordVi": "thích hợp, đúng đắn", "matchVi": "phù hợp"},
                {"word": "OBTAIN", "match": "ACQUIRE", "wordVi": "đạt được, thu được", "matchVi": "tiếp nhận, đạt được"},
                {"word": "EVALUATE", "match": "APPRAISE", "wordVi": "đánh giá", "matchVi": "thẩm định"},
                {"word": "SECURE", "match": "SAFEGUARD", "wordVi": "bảo vệ, bảo đảm", "matchVi": "che chắn, bảo vệ an toàn"},
                {"word": "MAINTAIN", "match": "PRESERVE", "wordVi": "duy trì, giữ gìn", "matchVi": "bảo tồn"},
                {"word": "SELECT", "match": "CHOOSE", "wordVi": "lựa chọn", "matchVi": "chọn lọc"}
            ],
            "antonymPairs": [
                {"word": "APPROPRIATE", "match": "INADEQUATE", "wordVi": "thích hợp", "matchVi": "không thỏa đáng"},
                {"word": "SECURE", "match": "VULNERABLE", "wordVi": "an toàn, kiên cố", "matchVi": "dễ bị tổn thương"},
                {"word": "RESTRICT", "match": "LIBERALIZE", "wordVi": "hạn chế, siết chặt", "matchVi": "nới lỏng, tự do hóa"},
                {"word": "MAINTAIN", "match": "ABANDON", "wordVi": "duy trì", "matchVi": "từ bỏ"}
            ]
        },
        "questions": [
            {
                "id": "q_s2_p1_1",
                "type": "mcq",
                "question": "What is recommended instead of equating simple profit margins with long-term viability?",
                "questionVi": "Điều gì được khuyến nghị thay vì đánh đồng lợi nhuận đơn thuần với sự tồn tại lâu dài?",
                "targetWord": "evaluate",
                "options": [
                    "To completely eliminate all governmental regulations",
                    "To evaluate diverse aspects of organizational culture and employee commitment",
                    "To restrict all employees from participating in decision making",
                    "To transfer corporate headquarters to remote locations"
                ],
                "correctAnswer": "To evaluate diverse aspects of organizational culture and employee commitment",
                "explanation": "Đoạn 2 nêu rõ: 'management cannot equate simple profit margins with long-term viability; instead, companies must assess diverse aspects of organizational culture.'"
            },
            {
                "id": "q_s2_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage is closest in meaning to 'SUITABLE' or 'FITTING'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'SUITABLE' (thích hợp, phù hợp)?",
                "targetWord": "appropriate",
                "options": ["appropriate", "distinct", "corporate", "primary"],
                "correctAnswer": "appropriate",
                "explanation": "Từ 'appropriate' (đoạn 1: 'appropriate operational strategy') có nghĩa là thích hợp, thỏa đáng (suitable)."
            },
            {
                "id": "q_s2_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 3, which word in the passage means the OPPOSITE of 'PERMIT' or 'ENCOURAGE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 3, từ nào mang nghĩa ĐỐI LẬP với 'PERMIT' (cho phép, dung dưỡng)?",
                "targetWord": "restrict",
                "options": ["restrict", "obtain", "participate", "maintain"],
                "correctAnswer": "restrict",
                "explanation": "Từ 'restrict' (hạn chế, cấm đoán: 'regulations restrict irresponsible resource consumption') trái nghĩa với permit/encourage (cho phép)."
            }
        ]
    },

    # STAGE 3: Lưu Sa Hà (Sublist 3)
    {
        "id": "read_s3_p1",
        "stageId": 3,
        "title": "Ecological Restoration and Hydrological Technologies in River Basins",
        "titleVi": "Phục Hồi Sinh Thái và Công Nghệ Thủy Văn tại Các Lưu Vực Sông",
        "genre": "academic",
        "topic": "Environmental Science & Technology",
        "targetWords": ["component", "technology", "ensure", "framework", "outcome", "rely", "sufficient", "technical", "demonstrate", "coordinate", "layer", "link", "maximize"],
        "content": """Water resource management represents a core component of sustainable development in river basins worldwide. When environmental circumstances deteriorate, hydrologists must coordinate multidisciplinary teams to design alternative ecological frameworks. Advanced technology enables scientists to register real-time water flow volumes and monitor multiple layers of sediment accumulation.

Empirical studies demonstrate that relying solely on physical barriers cannot compensate for severe habitat loss. Instead, environmental engineers emphasize techniques that link biological conservation with technical flood defenses. By restoring native wetlands along vulnerable river banks, communities can maximize flood resilience while ensuring clean water supplies for domestic consumption.

To justify large-scale capital investments, municipal agencies must document clear criteria for project success. A sufficient volume of baseline data is required before implementing any hydrological intervention. When local stakeholders interact cooperatively with scientific planners, the overall environmental outcome proves considerably more resilient.""",
        "vietnameseTranslation": """Quản lý tài nguyên nước đại diện cho một thành phần cốt lõi của sự phát triển bền vững tại các lưu vực sông trên toàn cầu. Khi điều kiện hoàn cảnh môi trường suy thoái, các nhà thủy văn học phải điều phối các đội ngũ đa ngành để thiết kế những khung sinh thái thay thế. Công nghệ tiên tiến cho phép các nhà khoa học ghi nhận lưu lượng dòng chảy theo thời gian thực và giám sát nhiều tầng lớp tích tụ trầm tích.

Các nghiên cứu thực nghiệm chứng minh rằng việc chỉ dựa vào các rào chắn vật lý không thể bù đắp cho sự mất mát môi trường sống nghiêm trọng. Thay vào đó, các kỹ sư môi trường nhấn mạnh những kỹ thuật liên kết bảo tồn sinh học với hệ thống phòng chống lũ lụt kỹ thuật. Bằng cách phục hồi các vùng đất ngập nước bản địa dọc theo các bờ sông dễ bị tổn thương, các cộng đồng có thể tối đa hóa khả năng chống chịu lũ lụt đồng thời bảo đảm nguồn cung cấp nước sạch cho tiêu dùng sinh hoạt.

Để chứng minh tính xác đáng của các khoản đầu tư vốn quy mô lớn, các cơ quan đô thị phải ghi chép lưu trữ các tiêu chí rõ ràng cho sự thành công của dự án. Cần phải có một khối lượng dữ liệu cơ sở đầy đủ trước khi thực hiện bất kỳ sự can thiệp thủy văn nào. Khi các bên liên quan tại địa phương tương tác hợp tác với các nhà hoạch định khoa học, kết quả môi trường tổng thể sẽ chứng tỏ khả năng phục hồi đáng kể hơn nhiều.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "COMPONENT", "match": "CONSTITUENT", "wordVi": "thành phần", "matchVi": "yếu tố cấu thành"},
                {"word": "SUFFICIENT", "match": "ADEQUATE", "wordVi": "đầy đủ", "matchVi": "thỏa đáng, đủ dùng"},
                {"word": "OUTCOME", "match": "RESULT", "wordVi": "kết quả", "matchVi": "kết quả, hiệu quả"},
                {"word": "MAXIMIZE", "match": "OPTIMIZE", "wordVi": "tối đa hóa", "matchVi": "tối ưu hóa"},
                {"word": "LINK", "match": "CONNECT", "wordVi": "liên kết", "matchVi": "kết nối"},
                {"word": "ENSURE", "match": "GUARANTEE", "wordVi": "bảo đảm", "matchVi": "cam đoan, bảo đảm"}
            ],
            "antonymPairs": [
                {"word": "SUFFICIENT", "match": "DEFICIENT", "wordVi": "đầy đủ", "matchVi": "thiếu hụt, không đủ"},
                {"word": "MAXIMIZE", "match": "MINIMIZE", "wordVi": "tối đa hóa", "matchVi": "tối thiểu hóa"},
                {"word": "LINK", "match": "SEPARATE", "wordVi": "liên kết", "matchVi": "tách rời"},
                {"word": "ENSURE", "match": "JEOPARDIZE", "wordVi": "bảo đảm an toàn", "matchVi": "đe dọa, gây nguy hiểm"}
            ]
        },
        "questions": [
            {
                "id": "q_s3_p1_1",
                "type": "mcq",
                "question": "What limitation of physical barriers is highlighted in paragraph 2?",
                "questionVi": "Hạn chế nào của các rào chắn vật lý được nhấn mạnh ở đoạn 2?",
                "targetWord": "compensate",
                "options": [
                    "They cannot compensate for severe habitat loss on their own",
                    "They consume excessive amounts of freshwater daily",
                    "They prevent all native vegetation from growing forever",
                    "They are technically impossible to construct near rivers"
                ],
                "correctAnswer": "They cannot compensate for severe habitat loss on their own",
                "explanation": "Đoạn 2 nêu: 'relying solely on physical barriers cannot compensate for severe habitat loss.' (Từ trọng tâm: compensate - đền bù, bù đắp)."
            },
            {
                "id": "q_s3_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 3, which word from the passage has the closest meaning to 'ADEQUATE' or 'AMPLE'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 3, từ nào trong bài đọc có nghĩa gần nhất với 'ADEQUATE' (đầy đủ, thỏa đáng)?",
                "targetWord": "sufficient",
                "options": ["sufficient", "technical", "considerable", "alternative"],
                "correctAnswer": "sufficient",
                "explanation": "Từ 'sufficient' (đoạn 3: 'A sufficient volume of baseline data') đồng nghĩa trực tiếp với adequate (đầy đủ)."
            },
            {
                "id": "q_s3_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2, which word in the passage is the direct OPPOSITE of 'MINIMIZE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2, từ nào trong bài đọc là từ ĐỐI LẬP trực tiếp với 'MINIMIZE' (thu nhỏ, giảm thiểu)?",
                "targetWord": "maximize",
                "options": ["maximize", "deteriorate", "rely", "restore"],
                "correctAnswer": "maximize",
                "explanation": "Từ 'maximize' (tối đa hóa: 'communities can maximize flood resilience') là từ trái nghĩa trực tiếp của 'minimize'."
            }
        ]
    },

    # STAGE 4: Bạch Cốt Động (Sublist 4)
    {
        "id": "read_s4_p1",
        "stageId": 4,
        "title": "Cognitive Biases and Deceptive Phenomena: Investigating Perceptual Errors",
        "titleVi": "Thiên Kiến Nhận Thức và Hiện Tượng Đánh Lừa: Điều Tra Sai Lầm Tri Giác",
        "genre": "academic",
        "topic": "Psychology & Cognitive Science",
        "targetWords": ["investigate", "error", "hypothesis", "mechanism", "apparent", "dimension", "resolve", "prior", "retain", "integrate", "attitude", "predict", "adequate"],
        "content": """Human perception is not an objective mirror of physical reality; rather, it is shaped by complex internal mechanisms. Cognitive psychologists frequently investigate perceptual errors to test hypotheses regarding how the human brain processes sensory stimuli. In many experiments, an apparent visual illusion reveals profound underlying assumptions that individuals maintain about their environment.

Despite having adequate access to empirical evidence, decision-makers often commit errors due to prior expectations. When ambiguous figures emerge, the observer's attitude directly affects which perceptual dimension receives principal focus. For instance, in stressful situations, people tend to concentrate heavily on superficial features while failing to integrate subtle warning signals.

To resolve these cognitive blind spots, researchers recommend structured analytical parameters. Professional teams should retain a habit of contrasting competing explanations rather than accepting obvious surface appearances. By implementing rigorous verification protocols, organizations can predict potential oversights and prevent catastrophic misjudgments.""",
        "vietnameseTranslation": """Tri giác của con người không phải là tấm gương phản chiếu khách quan của thực tại vật lý; đúng hơn, nó được định hình bởi các cơ chế nội tại phức tạp. Các nhà tâm lý học nhận thức thường xuyên điều tra các sai sót tri giác để kiểm chứng các giả thuyết liên quan đến cách thức bộ não con người xử lý các kích thích giác quan. Trong nhiều thí nghiệm, một ảo ảnh thị giác rõ ràng hé lộ những giả định sâu sắc tiềm ẩn mà các cá nhân duy trì về môi trường xung quanh họ.

Mặc dù có khả năng tiếp cận đầy đủ các bằng chứng thực nghiệm, những người ra quyết định vẫn thường mắc sai lầm do những kỳ vọng có từ trước. Khi những hình ảnh mơ hồ xuất hiện, thái độ của người quan sát ảnh hưởng trực tiếp đến việc khía cạnh tri giác nào nhận được sự tập trung chủ yếu. Chẳng hạn, trong các tình huống căng thẳng, con người có xu hướng tập trung mạnh vào các đặc điểm bề ngoài trong khi không tích hợp được các tín hiệu cảnh báo tinh tế.

Để giải quyết những điểm mù nhận thức này, các nhà nghiên cứu khuyến nghị áp dụng các thông số phân tích có cấu trúc. Các đội ngũ chuyên nghiệp nên duy trì thói quen đối chiếu các cách giải thích cạnh tranh thay vì chấp nhận những vẻ bề ngoài hiển nhiên. Bằng cách thực hiện các quy trình xác minh nghiêm ngặt, các tổ chức có thể dự đoán những sơ suất tiềm ẩn và ngăn ngừa những phán đoán sai lầm thảm khốc.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "APPARENT", "match": "OBVIOUS", "wordVi": "rõ ràng, bề ngoài", "matchVi": "hiển nhiên, rõ rệt"},
                {"word": "INVESTIGATE", "match": "PROBE", "wordVi": "điều tra, nghiên cứu", "matchVi": "thăm dò, tra cứu"},
                {"word": "ERROR", "match": "MISTAKE", "wordVi": "sai sót, lỗi lầm", "matchVi": "lỗi, sơ suất"},
                {"word": "RESOLVE", "match": "SETTLE", "wordVi": "giải quyết", "matchVi": "dàn xếp, xử lý ổn thỏa"},
                {"word": "RETAIN", "match": "PRESERVE", "wordVi": "giữ lại, duy trì", "matchVi": "bảo tồn"},
                {"word": "PREDICT", "match": "FORECAST", "wordVi": "dự đoán, tiên đoán", "matchVi": "dự báo"}
            ],
            "antonymPairs": [
                {"word": "APPARENT", "match": "CONCEALED", "wordVi": "hiển lộ, rõ ràng", "matchVi": "bị che giấu, ẩn khuất"},
                {"word": "RETAIN", "match": "DISCARD", "wordVi": "giữ lại", "matchVi": "vứt bỏ, loại bỏ"},
                {"word": "ADEQUATE", "match": "INSUFFICIENT", "wordVi": "thỏa đáng, đầy đủ", "matchVi": "thiếu hụt"},
                {"word": "RESOLVE", "match": "COMPLICATE", "wordVi": "giải quyết ổn thỏa", "matchVi": "làm phức tạp thêm"}
            ]
        },
        "questions": [
            {
                "id": "q_s4_p1_1",
                "type": "mcq",
                "question": "Why do psychologists investigate perceptual errors according to paragraph 1?",
                "questionVi": "Tại sao các nhà tâm lý học điều tra các lỗi tri giác theo đoạn 1?",
                "targetWord": "hypothesis",
                "options": [
                    "To test hypotheses about how the brain processes sensory stimuli",
                    "To prove that human sensory organs are completely dysfunctional",
                    "To generate commercial advertising illusions for entertainment",
                    "To force individuals to abandon all forms of scientific observation"
                ],
                "correctAnswer": "To test hypotheses about how the brain processes sensory stimuli",
                "explanation": "Đoạn 1 nêu: 'Cognitive psychologists frequently investigate perceptual errors to test hypotheses regarding how the human brain processes sensory stimuli.'"
            },
            {
                "id": "q_s4_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 3, which word in the passage is closest in meaning to 'SOLVE' or 'REMEDY'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 3, từ nào trong bài đọc có nghĩa gần nhất với 'SOLVE' hoặc 'REMEDY' (giải quyết, khắc phục)?",
                "targetWord": "resolve",
                "options": ["resolve", "retain", "predict", "emerge"],
                "correctAnswer": "resolve",
                "explanation": "Từ 'resolve' (đoạn 3: 'To resolve these cognitive blind spots...') đồng nghĩa với solve/remedy (giải quyết triệt để)."
            },
            {
                "id": "q_s4_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 3, which word in the passage means the OPPOSITE of 'SURRENDER' or 'LOSE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 3, từ nào mang nghĩa ĐỐI LẬP với 'SURRENDER' (từ bỏ) hoặc 'LOSE' (đánh mất)?",
                "targetWord": "retain",
                "options": ["retain", "commit", "contrast", "concentrate"],
                "correctAnswer": "retain",
                "explanation": "Từ 'retain' (giữ lại, duy trì: 'retain a habit of contrasting...') trái nghĩa với surrender/lose/discard (từ bỏ, đánh mất)."
            }
        ]
    },

    # STAGE 5: Hỏa Vân Động (Sublist 5)
    {
        "id": "read_s5_p1",
        "stageId": 5,
        "title": "Thermal Energy Conversion and Sustainable Energy Networks",
        "titleVi": "Chuyển Đổi Năng Lượng Nhiệt và Các Mạng Lưới Năng Lượng Bền Vững",
        "genre": "academic",
        "topic": "Renewable Energy & Thermodynamics",
        "targetWords": ["energy", "capacity", "generate", "fundamental", "sustain", "network", "monitor", "objective", "adjust", "evolve", "enable", "perspective", "external"],
        "content": """The fundamental challenge facing modern engineering is how to generate clean power without exceeding the Earth's ecological capacity. Thermal energy conversion systems have evolved rapidly over the past decade, enabling industrial facilities to recycle waste heat into electricity. By connecting distributed power sources through an intelligent digital network, utility operators can monitor fluctuations in real time and adjust output precisely.

From an economic perspective, sustaining a stable power grid requires substantial upfront capital. External climatic factors often create unexpected surges in electricity consumption, which can destabilize outdated transmission infrastructure. To pursue long-term sustainability, power authorities are modifying operational parameters to incorporate green hydrogen and solar thermal storage.

Engineers have developed precise mathematical models to optimize the ratio between base-load generation and variable renewable inputs. These advanced techniques enable regional communities to maintain energy security while simultaneously meeting aggressive carbon reduction targets.""",
        "vietnameseTranslation": """Thách thức cơ bản mà ngành kỹ thuật hiện đại phải đối mặt là làm thế nào để tạo ra điện năng sạch mà không vượt quá sức chịu đựng sinh thái của Trái đất. Các hệ thống chuyển đổi năng lượng nhiệt đã phát triển nhanh chóng trong thập kỷ qua, cho phép các cơ sở công nghiệp tái chế nhiệt thải thành điện năng. Bằng cách kết nối các nguồn điện phân tán thông qua một mạng lưới kỹ thuật số thông minh, các nhà điều hành điện lưới có thể giám sát các biến động theo thời gian thực và điều chỉnh sản lượng một cách chuẩn xác.

Từ góc độ kinh tế, việc duy trì một lưới điện ổn định đòi hỏi nguồn vốn ban đầu đáng kể. Các yếu tố khí hậu bên ngoài thường tạo ra những sự gia tăng đột biến bất ngờ trong tiêu thụ điện, có thể làm mất ổn định cơ sở hạ tầng truyền tải lạc hậu. Để theo đuổi tính bền vững lâu dài, các cơ quan điện lực đang điều chỉnh các thông số vận hành để kết hợp hydro xanh và lưu trữ nhiệt mặt trời.

Các kỹ sư đã phát triển các mô hình toán học chuẩn xác nhằm tối ưu hóa tỷ lệ giữa sản lượng phụ tải nền và nguồn năng lượng tái tạo biến đổi. Những kỹ thuật tiên tiến này cho phép các cộng đồng khu vực duy trì an ninh năng lượng đồng thời đáp ứng được các mục tiêu cắt giảm khí thải carbon đầy tham vọng.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "FUNDAMENTAL", "match": "ESSENTIAL", "wordVi": "cơ bản, nền tảng", "matchVi": "thiết yếu, cốt lõi"},
                {"word": "GENERATE", "match": "PRODUCE", "wordVi": "tạo ra, phát điện", "matchVi": "sản xuất, tạo thành"},
                {"word": "CAPACITY", "match": "POTENTIAL", "wordVi": "công suất, sức chứa", "matchVi": "tiềm năng, dung tích"},
                {"word": "SUSTAIN", "match": "MAINTAIN", "wordVi": "duy trì, chống đỡ", "matchVi": "giữ vững"},
                {"word": "PRECISE", "match": "ACCURATE", "wordVi": "chuẩn xác", "matchVi": "chính xác"},
                {"word": "ADJUST", "match": "MODIFY", "wordVi": "điều chỉnh", "matchVi": "sửa đổi, nắn chỉnh"}
            ],
            "antonymPairs": [
                {"word": "EXTERNAL", "match": "INTERNAL", "wordVi": "bên ngoài, ngoại lai", "matchVi": "bên trong, nội tại"},
                {"word": "STABLE", "match": "ERRATIC", "wordVi": "ổn định, vững vàng", "matchVi": "thất thường, bất ổn"},
                {"word": "PRECISE", "match": "VAGUE", "wordVi": "chuẩn xác", "matchVi": "mơ hồ, áng chừng"},
                {"word": "SUSTAIN", "match": "UNDERMINE", "wordVi": "duy trì, bồi đắp", "matchVi": "làm xói mòn, phá hoại"}
            ]
        },
        "questions": [
            {
                "id": "q_s5_p1_1",
                "type": "mcq",
                "question": "What is described as the fundamental challenge of modern engineering?",
                "questionVi": "Điều gì được mô tả là thách thức cơ bản của ngành kỹ thuật hiện đại?",
                "targetWord": "fundamental",
                "options": [
                    "Generating clean power without exceeding ecological capacity",
                    "Completely burning all fossil fuel reserves immediately",
                    "Replacing human engineers with mechanical automata",
                    "Shutting down all continental electricity grids"
                ],
                "correctAnswer": "Generating clean power without exceeding ecological capacity",
                "explanation": "Đoạn 1 nêu: 'The fundamental challenge facing modern engineering is how to generate clean power without exceeding the Earth's ecological capacity.'"
            },
            {
                "id": "q_s5_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage has the closest meaning to 'PRODUCE' or 'CREATE'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'PRODUCE' (sản xuất, tạo ra)?",
                "targetWord": "generate",
                "options": ["generate", "sustain", "evolve", "exceed"],
                "correctAnswer": "generate",
                "explanation": "Từ 'generate' (đoạn 1: 'how to generate clean power') đồng nghĩa với produce/create (tạo ra)."
            },
            {
                "id": "q_s5_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2, which word in the passage means the OPPOSITE of 'INTERNAL' or 'DOMESTIC'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2, từ nào trong bài mang nghĩa ĐỐI LẬP với 'INTERNAL' (nội bộ, bên trong)?",
                "targetWord": "external",
                "options": ["external", "stable", "fundamental", "precise"],
                "correctAnswer": "external",
                "explanation": "Từ 'external' (đoạn 2: 'External climatic factors') trái nghĩa với internal (bên trong)."
            }
        ]
    },

    # STAGE 6: Xa Trì Quốc (Sublist 6)
    {
        "id": "read_s6_p1",
        "stageId": 6,
        "title": "Rational Inquiry Versus Dogmatic Mysticism: Epistemology of Scientific Debates",
        "titleVi": "Vấn Khảo Duy Lý Đối Đầu Thần Bí Giáo Điều: Nhận Thức Luận trong Tranh Biện Khoa Học",
        "genre": "academic",
        "topic": "Philosophy of Science & Epistemology",
        "targetWords": ["rational", "accurate", "acknowledge", "allocate", "enhance", "capable", "expert", "utilize", "diverse", "reveal", "transform", "underlie", "scope"],
        "content": """The historical development of modern science was driven by a continuous transition from mystical speculation toward rational inquiry. Intellectual pioneers acknowledged that abstract theories must be tested against accurate observational data to reveal true underlying mechanisms. When scientists cooperate across diverse domains, the collective capacity to solve complex dilemmas increases exponentially.

In competitive academic spheres, institutions allocate extensive resources to enhance empirical experimentation. Experts utilize flexible methodological frameworks to verify whether experimental outcomes exceed theoretical predictions. Nevertheless, researchers must maintain a neutral attitude, explicitly citing contradictory findings rather than discriminating against inconvenient evidence.

By transforming intuitive belief into structured knowledge, rational inquiry provides society with dependable insights. Understanding the precise scope and limitations of any model empowers scholars to initiate innovative breakthroughs while avoiding dogmatic errors.""",
        "vietnameseTranslation": """Sự phát triển lịch sử của khoa học hiện đại được thúc đẩy bởi sự chuyển dịch liên tục từ phỏng đoán thần bí sang vấn khảo duy lý. Những người tiên phong về trí tuệ thừa nhận rằng các lý thuyết trừu tượng phải được kiểm nghiệm dựa trên dữ liệu quan sát chuẩn xác để hé lộ các cơ chế thực sự tiềm ẩn bên dưới. Khi các nhà khoa học hợp tác trên nhiều lĩnh vực đa dạng, năng lực tập thể để giải quyết các tình huống khó khăn phức tạp sẽ tăng lên theo cấp số nhân.

Trong các môi trường học thuật cạnh tranh, các thể chế phân bổ nguồn lực sâu rộng để nâng cao tính thực nghiệm. Các chuyên gia tận dụng các khung phương pháp luận linh hoạt để xác minh xem liệu kết quả thí nghiệm có vượt quá các dự đoán lý thuyết hay không. Tuy nhiên, các nhà nghiên cứu phải duy trì một thái độ trung lập, trích dẫn rõ ràng các phát hiện mâu thuẫn thay vì phân biệt đối xử với các bằng chứng bất lợi.

Bằng cách chuyển đổi niềm tin trực giác thành tri thức có cấu trúc, nghiên cứu duy lý cung cấp cho xã hội những hiểu biết sâu sắc đáng tin cậy. Việc thấu hiểu phạm vi và giới hạn chuẩn xác của bất kỳ mô hình nào sẽ trao quyền cho các học giả khởi xướng những đột phá đổi mới đồng thời tránh được những sai lầm giáo điều.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "RATIONAL", "match": "LOGICAL", "wordVi": "duy lý, hợp lý", "matchVi": "hợp logic, xác đáng"},
                {"word": "ACCURATE", "match": "PRECISE", "wordVi": "chính xác", "matchVi": "chuẩn xác, tỉ mỉ"},
                {"word": "ACKNOWLEDGE", "match": "ADMIT", "wordVi": "thừa nhận", "matchVi": "công nhận"},
                {"word": "ALLOCATE", "match": "ASSIGN", "wordVi": "phân bổ", "matchVi": "chỉ định, giao phó"},
                {"word": "UTILIZE", "match": "EMPLOY", "wordVi": "tận dụng, sử dụng", "matchVi": "áp dụng, dùng"},
                {"word": "ENHANCE", "match": "IMPROVE", "wordVi": "nâng cao, tăng cường", "matchVi": "cải thiện"}
            ],
            "antonymPairs": [
                {"word": "RATIONAL", "match": "IRRATIONAL", "wordVi": "duy lý", "matchVi": "phi lý, phi logic"},
                {"word": "ACCURATE", "match": "ERRONEOUS", "wordVi": "chính xác", "matchVi": "sai sót, lệch lạc"},
                {"word": "ACKNOWLEDGE", "match": "DENY", "wordVi": "thừa nhận", "matchVi": "phủ nhận, chối bỏ"},
                {"word": "REVEAL", "match": "CONCEAL", "wordVi": "hé lộ, phơi bày", "matchVi": "che giấu, giấu kín"}
            ]
        },
        "questions": [
            {
                "id": "q_s6_p1_1",
                "type": "mcq",
                "question": "What must happen to abstract theories according to paragraph 1?",
                "questionVi": "Điều gì phải xảy ra với các lý thuyết trừu tượng theo đoạn 1?",
                "targetWord": "accurate",
                "options": [
                    "They must be tested against accurate observational data",
                    "They must be accepted without any physical verification",
                    "They should be censored by mystical religious bodies",
                    "They must remain purely verbal with no written records"
                ],
                "correctAnswer": "They must be tested against accurate observational data",
                "explanation": "Đoạn 1 nêu: 'abstract theories must be tested against accurate observational data to reveal true underlying mechanisms.'"
            },
            {
                "id": "q_s6_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage has the closest meaning to 'LOGICAL' or 'REASONABLE'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'LOGICAL' (hợp lý, duy lý)?",
                "targetWord": "rational",
                "options": ["rational", "abstract", "mystical", "diverse"],
                "correctAnswer": "rational",
                "explanation": "Từ 'rational' (đoạn 1: 'rational inquiry') đồng nghĩa chuẩn xác với logical/reasonable (duy lý, dựa trên lý trí)."
            },
            {
                "id": "q_s6_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 1, which word in the passage means the OPPOSITE of 'HIDE' or 'DISGUISE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 1, từ nào mang nghĩa ĐỐI LẬP với 'HIDE' (che giấu) hoặc 'DISGUISE' (ngụy trang)?",
                "targetWord": "reveal",
                "options": ["reveal", "cooperate", "underlie", "enhance"],
                "correctAnswer": "reveal",
                "explanation": "Từ 'reveal' (hé lộ, phơi bày: 'to reveal true underlying mechanisms') trái ngược với hide/disguise/conceal."
            }
        ]
    },

    # STAGE 7: Nữ Nhi Quốc (Sublist 7)
    {
        "id": "read_s7_p1",
        "stageId": 7,
        "title": "Social Adaptability and Gender Paradigms: A Comprehensive Sociological Study",
        "titleVi": "Khả Năng Thích Ứng Xã Hội và Các Hệ Hình Giới Tính: Nghiên Cứu Xã Hội Học Toàn Diện",
        "genre": "academic",
        "topic": "Sociology & Cultural Anthropology",
        "targetWords": ["adapt", "paradigm", "comprehensive", "differentiate", "phenomenon", "empirical", "foundation", "guarantee", "dynamic", "eliminate", "unique", "confirm", "priority"],
        "content": """Human societies demonstrate an extraordinary capacity to adapt their cultural norms when facing changing economic circumstances. Sociologists employ comprehensive empirical methodologies to investigate how traditional gender roles evolve across generations. In recent decades, researchers have observed a noticeable paradigm shift from rigid social hierarchies toward flexible, egalitarian partnerships.

To differentiate between innate biological inclinations and socially constructed behaviors, scholars analyze dynamic interactions within families and educational institutions. This cultural phenomenon confirms that social expectations provide the invisible foundation for adult behavior. When educational systems prioritize mutual respect, they effectively eliminate outdated prejudices and foster voluntary civic participation.

Nevertheless, no single cultural model can guarantee universal harmony without continuous dialogue. Each community possesses unique historical traditions that shape its worldview. By establishing open channels of communication, modern societies can convert ideological discord into constructive cultural enrichment.""",
        "vietnameseTranslation": """Các xã hội loài người thể hiện một năng lực phi thường trong việc thích nghi các chuẩn mực văn hóa của mình khi đối mặt với các hoàn cảnh kinh tế thay đổi. Các nhà xã hội học áp dụng các phương pháp luận thực nghiệm toàn diện để điều tra cách thức các vai trò giới truyền thống phát triển qua các thế hệ. Trong những thập kỷ gần đây, các nhà nghiên cứu đã quan sát thấy một sự chuyển dịch hệ hình đáng chú ý từ các trật tự thứ bậc xã hội cứng nhắc sang các mối quan hệ đối tác bình đẳng, linh hoạt.

Để phân biệt giữa các khuynh hướng sinh học bẩm sinh và các hành vi được kiến tạo về mặt xã hội, các học giả phân tích các tương tác năng động bên trong các gia đình và các thể chế giáo dục. Hiện tượng văn hóa này xác nhận rằng các kỳ vọng xã hội tạo nên nền tảng vô hình cho hành vi của người trưởng thành. Khi các hệ thống giáo dục ưu tiên sự tôn trọng lẫn nhau, chúng sẽ loại bỏ hiệu quả các định kiến lạc hậu và nuôi dưỡng sự tham gia tự nguyện của công dân.

Tuy nhiên, không một mô hình văn hóa đơn lẻ nào có thể bảo đảm sự hòa hợp phổ quát nếu thiếu đi sự đối thoại liên tục. Mỗi cộng đồng đều sở hữu những truyền thống lịch sử độc đáo định hình thế giới quan của mình. Bằng cách thiết lập các kênh giao tiếp cởi mở, các xã hội hiện đại có thể chuyển đổi sự bất đồng về mặt ý thức hệ thành sự làm phong phú văn hóa mang tính xây dựng.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "ADAPT", "match": "ADJUST", "wordVi": "thích nghi, điều chỉnh", "matchVi": "thích ứng, sửa đổi"},
                {"word": "COMPREHENSIVE", "match": "THOROUGH", "wordVi": "toàn diện, bao quát", "matchVi": "kỹ lưỡng, thấu đáo"},
                {"word": "PARADIGM", "match": "MODEL", "wordVi": "hệ hình, mẫu hình", "matchVi": "mô hình, khuôn mẫu"},
                {"word": "DIFFERENTIATE", "match": "DISTINGUISH", "wordVi": "phân biệt", "matchVi": "nhận diện sự khác nhau"},
                {"word": "ELIMINATE", "match": "ERADICATE", "wordVi": "loại bỏ, xóa sổ", "matchVi": "triệt tiêu, dẹp trừ"},
                {"word": "UNIQUE", "match": "DISTINCTIVE", "wordVi": "độc đáo, duy nhất", "matchVi": "đặc trưng riêng biệt"}
            ],
            "antonymPairs": [
                {"word": "COMPREHENSIVE", "match": "SUPERFICIAL", "wordVi": "toàn diện, sâu sắc", "matchVi": "nông cạn, hời hợt"},
                {"word": "ELIMINATE", "match": "PRESERVE", "wordVi": "xóa bỏ, triệt tiêu", "matchVi": "bảo tồn, giữ gìn"},
                {"word": "RIGID", "match": "FLEXIBLE", "wordVi": "cứng nhắc", "matchVi": "linh hoạt"},
                {"word": "VOLUNTARY", "match": "MANDATORY", "wordVi": "tự nguyện", "matchVi": "bắt buộc, cưỡng chế"}
            ]
        },
        "questions": [
            {
                "id": "q_s7_p1_1",
                "type": "mcq",
                "question": "What paradigm shift have sociologists observed over recent decades?",
                "questionVi": "Sự chuyển dịch hệ hình nào mà các nhà xã hội học đã quan sát thấy trong các thập kỷ gần đây?",
                "targetWord": "paradigm",
                "options": [
                    "A shift toward flexible, egalitarian partnerships from rigid hierarchies",
                    "A total elimination of all educational institutions globally",
                    "A return to ancient tribal warfare and isolation",
                    "A ban on all voluntary civic communication"
                ],
                "correctAnswer": "A shift toward flexible, egalitarian partnerships from rigid hierarchies",
                "explanation": "Đoạn 1 nêu: 'researchers have observed a noticeable paradigm shift from rigid social hierarchies toward flexible, egalitarian partnerships.'"
            },
            {
                "id": "q_s7_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage has the closest meaning to 'THOROUGH' or 'ALL-INCLUSIVE'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'THOROUGH' (toàn diện, kỹ lưỡng)?",
                "targetWord": "comprehensive",
                "options": ["comprehensive", "empirical", "unique", "traditional"],
                "correctAnswer": "comprehensive",
                "explanation": "Từ 'comprehensive' (toàn diện: 'comprehensive empirical methodologies') mang nghĩa tương đương với thorough/all-inclusive."
            },
            {
                "id": "q_s7_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2, which word in the passage means the OPPOSITE of 'PRESERVE' or 'MAINTAIN'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2, từ nào mang nghĩa ĐỐI LẬP với 'PRESERVE' (bảo tồn, duy trì)?",
                "targetWord": "eliminate",
                "options": ["eliminate", "confirm", "prioritize", "foster"],
                "correctAnswer": "eliminate",
                "explanation": "Từ 'eliminate' (loại bỏ, xóa sổ: 'effectively eliminate outdated prejudices') đối lập với preserve/maintain (giữ lại, bảo tồn)."
            }
        ]
    },

    # STAGE 8: Hỏa Diệm Sơn (Sublist 8)
    {
        "id": "read_s8_p1",
        "stageId": 8,
        "title": "Extreme Climates and Infrastructure Resilience: Mitigating Thermal Hazards",
        "titleVi": "Khí Hậu Khắc Nghiệt và Sức Chống Chịu Hạ Tầng: Giảm Thiểu Hiểm Họa Nhiệt",
        "genre": "academic",
        "topic": "Civil Engineering & Climatology",
        "targetWords": ["infrastructure", "crucial", "intense", "accumulate", "detect", "minimize", "inevitable", "restore", "reinforce", "revise", "guideline", "fluctuate"],
        "content": """As global temperatures continue to fluctuate drastically, civil engineers face the crucial challenge of hardening urban infrastructure against intense heatwaves. When thermal energy accumulates within concrete pavements and steel structures, physical degradation accelerates rapidly. Without intervention, catastrophic structural failures become an inevitable hazard for modern transport systems and electrical networks.

Advanced sensor technologies now enable engineering teams to detect microscopic stress fractures via virtual monitoring systems. These tools provide real-time data, allowing municipal agencies to revise maintenance schedules and inspect vulnerable assets before severe damage occurs. Furthermore, urban planners are adopting cooling guidelines that incorporate reflective materials and green canopies to offset heat accumulation.

To restore resilience in high-risk zones, governments must reinforce building codes and avoid arbitrary zoning compromises. By investing in climate-adaptive materials, metropolitan areas can minimize environmental hazards and protect public safety through uniform standards.""",
        "vietnameseTranslation": """Khi nhiệt độ toàn cầu tiếp tục biến động mạnh, các kỹ sư xây dựng phải đối mặt với thách thức cốt lõi là tăng cường độ vững chắc cho cơ sở hạ tầng đô thị chống lại các đợt sóng nhiệt gay gắt. Khi năng lượng nhiệt tích tụ bên trong các mặt đường bê tông và kết cấu thép, sự xuống cấp vật lý sẽ diễn ra nhanh chóng. Nếu không có sự can thiệp, những hỏng hóc kết cấu thảm khốc sẽ trở thành mối nguy hiểm không thể tránh khỏi đối với các hệ thống giao thông và mạng lưới điện hiện đại.

Các công nghệ cảm biến tiên tiến hiện nay cho phép các đội ngũ kỹ thuật phát hiện các vết nứt vi mô do ứng suất thông qua các hệ thống giám sát ảo. Những công cụ này cung cấp dữ liệu theo thời gian thực, cho phép các cơ quan đô thị sửa đổi lịch bảo trì và kiểm tra các tài sản dễ bị tổn thương trước khi thiệt hại nghiêm trọng xảy ra. Hơn nữa, các nhà quy hoạch đô thị đang áp dụng các hướng dẫn làm mát kết hợp các vật liệu phản xạ và tán cây xanh để bù đắp sự tích tụ nhiệt.

Để khôi phục khả năng chống chịu ở các khu vực có nguy cơ cao, chính phủ phải củng cố các quy chuẩn xây dựng và tránh những thỏa hiệp phân vùng tùy tiện. Bằng cách đầu tư vào các vật liệu thích ứng với khí hậu, các khu vực đại đô thị có thể giảm thiểu tối đa các mối nguy môi trường và bảo vệ an toàn công cộng thông qua các tiêu chuẩn đồng bộ.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "CRUCIAL", "match": "VITAL", "wordVi": "cốt yếu, then chốt", "matchVi": "sống còn, trọng yếu"},
                {"word": "INTENSE", "match": "EXTREME", "wordVi": "gay gắt, mãnh liệt", "matchVi": "khắc nghiệt, cực độ"},
                {"word": "ACCUMULATE", "match": "GATHER", "wordVi": "tích tụ, dồn tụ", "matchVi": "gom góp, dồn lại"},
                {"word": "DETECT", "match": "IDENTIFY", "wordVi": "phát hiện", "matchVi": "nhận diện"},
                {"word": "REINFORCE", "match": "STRENGTHEN", "wordVi": "củng cố, gia cố", "matchVi": "làm vững mạnh"},
                {"word": "MINIMIZE", "match": "REDUCE", "wordVi": "giảm thiểu", "matchVi": "thu nhỏ, giảm bớt"}
            ],
            "antonymPairs": [
                {"word": "ACCUMULATE", "match": "DISPERSE", "wordVi": "tích tụ", "matchVi": "phân tán, giải tỏa"},
                {"word": "REINFORCE", "match": "WEAKEN", "wordVi": "gia cố", "matchVi": "làm suy yếu"},
                {"word": "INEVITABLE", "match": "AVOIDABLE", "wordVi": "không thể tránh khỏi", "matchVi": "có thể phòng tránh"},
                {"word": "UNIFORM", "match": "VARIABLE", "wordVi": "đồng bộ, đồng nhất", "matchVi": "biến thiên, hỗn tạp"}
            ]
        },
        "questions": [
            {
                "id": "q_s8_p1_1",
                "type": "mcq",
                "question": "What is the primary danger when thermal energy accumulates in concrete and steel?",
                "questionVi": "Mối nguy hiểm chính khi năng lượng nhiệt tích tụ trong bê tông và thép là gì?",
                "targetWord": "accumulate",
                "options": [
                    "Physical degradation accelerates, creating inevitable structural hazards",
                    "The structures instantly turn into liquid gold",
                    "Sensor systems completely stop functioning forever",
                    "Urban trees absorb all available oxygen"
                ],
                "correctAnswer": "Physical degradation accelerates, creating inevitable structural hazards",
                "explanation": "Đoạn 1 nêu: 'When thermal energy accumulates within concrete pavements and steel structures, physical degradation accelerates rapidly... catastrophic structural failures become an inevitable hazard.'"
            },
            {
                "id": "q_s8_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage has the closest meaning to 'VITAL' or 'CRITICAL'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'VITAL' (cốt yếu, quan trọng sống còn)?",
                "targetWord": "crucial",
                "options": ["crucial", "inevitable", "urban", "uniform"],
                "correctAnswer": "crucial",
                "explanation": "Từ 'crucial' (đoạn 1: 'face the crucial challenge') đồng nghĩa trực tiếp với vital/critical."
            },
            {
                "id": "q_s8_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 3, which word in the passage means the OPPOSITE of 'WEAKEN' or 'UNDERMINE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 3, từ nào mang nghĩa ĐỐI LẬP với 'WEAKEN' (làm suy yếu)?",
                "targetWord": "reinforce",
                "options": ["reinforce", "fluctuate", "accumulate", "offset"],
                "correctAnswer": "reinforce",
                "explanation": "Từ 'reinforce' (gia cố, củng cố: 'reinforce building codes') trái nghĩa với weaken (làm suy yếu)."
            }
        ]
    },

    # STAGE 9: Bàn Tơ Động & Sư Đà Lĩnh (Sublist 9)
    {
        "id": "read_s9_p1",
        "stageId": 9,
        "title": "Complex Strategic Networks and Ethical Dilemmas in Crisis Mediation",
        "titleVi": "Các Mạng Lưới Chiến Lược Phức Tạp và Nan Đề Đạo Đức trong Hòa Giải Khủng Hoảng",
        "genre": "academic",
        "topic": "Conflict Resolution & International Relations",
        "targetWords": ["anticipate", "coherent", "mediate", "ethic", "attain", "restrain", "trigger", "erode", "scenario", "protocol", "mutual", "inherent", "insight"],
        "content": """Resolving intense geopolitical crises requires diplomatic mediators to anticipate unpredictable escalating scenarios. Practitioners develop coherent negotiation frameworks to mediate disputes between polarized factions. In complex negotiations, aggressive actions can trigger immediate retaliation, which rapidly erodes mutual trust and undermines preliminary agreements.

A central insight in modern conflict analysis involves recognizing the inherent ethical dilemmas faced by third-party negotiators. Mediators must restrain conflicting parties from violating human rights protocols while attempting to accommodate divergent political ambitions. To attain a durable peace settlement, all participants must concur on verification mechanisms rather than relying on passive goodwill.

Furthermore, strategic analysts compile qualitative data to refine their understanding of underlying historical grievances. By establishing rigid communication protocols, international bodies can prevent distorted interpretations and assist rival entities in achieving a unified vision for regional stability.""",
        "vietnameseTranslation": """Việc giải quyết các cuộc khủng hoảng địa chính trị gay gắt đòi hỏi các nhà hòa giải ngoại giao phải lường trước các kịch bản leo thang khó đoán. Các chuyên viên phát triển các khung đàm phán mạch lạc để hòa giải các tranh chấp giữa các phe phái bị phân cực. Trong các cuộc đàm phán phức tạp, các hành động hiếu chiến có thể kích hoạt sự trả đũa tức thì, điều này nhanh chóng làm xói mòn lòng tin lẫn nhau và hủy hoại các thỏa thuận sơ bộ.

Một hiểu biết cốt lõi trong phân tích xung đột hiện đại liên quan đến việc nhận thức các tình huống khó xử về mặt đạo đức vốn có mà các nhà đàm phán bên thứ ba phải đối mặt. Các nhà hòa giải phải kiềm chế các bên xung đột vi phạm các quy chuẩn nhân quyền trong khi cố gắng đáp ứng các tham vọng chính trị khác nhau. Để đạt được một giải pháp hòa bình bền vững, tất cả các bên tham gia phải đồng thuận về các cơ chế xác minh thay vì dựa vào thiện chí thụ động.

Hơn nữa, các nhà phân tích chiến lược biên soạn dữ liệu định tính để hoàn thiện sự hiểu biết của họ về các bất bình lịch sử tiềm ẩn. Bằng cách thiết lập các giao thức truyền thông nghiêm ngặt, các cơ quan quốc tế có thể ngăn chặn những cách diễn giải bị bóp méo và hỗ trợ các thực thể đối địch trong việc đạt được một tầm nhìn thống nhất vì sự ổn định của khu vực.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "ANTICIPATE", "match": "FORESEE", "wordVi": "lường trước, dự đoán", "matchVi": "nhìn thấy trước"},
                {"word": "COHERENT", "match": "CONSISTENT", "wordVi": "mạch lạc, chặt chẽ", "matchVi": "nhất quán"},
                {"word": "ATTAIN", "match": "ACHIEVE", "wordVi": "đạt được", "matchVi": "hoàn thành, đạt được"},
                {"word": "RESTRAIN", "match": "CURB", "wordVi": "kiềm chế, kìm nén", "matchVi": "hãm bớt, kìm giữ"},
                {"word": "TRIGGER", "match": "ACTIVATE", "wordVi": "kích hoạt, gây ra", "matchVi": "khởi phát"},
                {"word": "MUTUAL", "match": "RECIPROCAL", "wordVi": "lẫn nhau, hai chiều", "matchVi": "tương hỗ"}
            ],
            "antonymPairs": [
                {"word": "COHERENT", "match": "DISJOINTED", "wordVi": "mạch lạc", "matchVi": "rời rạc, lộn xộn"},
                {"word": "RESTRAIN", "match": "INSTIGATE", "wordVi": "kiềm chế", "matchVi": "xúi giục, kích động"},
                {"word": "ERODE", "match": "FORTIFY", "wordVi": "làm xói mòn", "matchVi": "củng cố, bồi đắp"},
                {"word": "RIGID", "match": "PLIABLE", "wordVi": "cứng nhắc, khắt khe", "matchVi": "mềm dẻo, dễ uốn nắn"}
            ]
        },
        "questions": [
            {
                "id": "q_s9_p1_1",
                "type": "mcq",
                "question": "What is the consequence of aggressive actions during complex negotiations?",
                "questionVi": "Hậu quả của các hành động hiếu chiến trong đàm phán phức tạp là gì?",
                "targetWord": "erode",
                "options": [
                    "They trigger retaliation that rapidly erodes mutual trust",
                    "They immediately establish permanent international peace",
                    "They eliminate all underlying historical grievances",
                    "They force mediators to abandon all verification protocols"
                ],
                "correctAnswer": "They trigger retaliation that rapidly erodes mutual trust",
                "explanation": "Đoạn 1 nêu: 'aggressive actions can trigger immediate retaliation, which rapidly erodes mutual trust and undermines preliminary agreements.'"
            },
            {
                "id": "q_s9_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 1, which word from the passage has the closest meaning to 'FORESEE' or 'EXPECT'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 1, từ nào trong bài đọc có nghĩa gần nhất với 'FORESEE' (thấy trước, lường trước)?",
                "targetWord": "anticipate",
                "options": ["anticipate", "mediate", "trigger", "erode"],
                "correctAnswer": "anticipate",
                "explanation": "Từ 'anticipate' (đoạn 1: 'anticipate unpredictable escalating scenarios') đồng nghĩa với foresee/expect."
            },
            {
                "id": "q_s9_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2, which word in the passage means the OPPOSITE of 'INCITE' or 'ENCOURAGE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2, từ nào mang nghĩa ĐỐI LẬP với 'INCITE' (kích động) hoặc 'ENCOURAGE' (khuyến khích bốc đồng)?",
                "targetWord": "restrain",
                "options": ["restrain", "concur", "attain", "erode"],
                "correctAnswer": "restrain",
                "explanation": "Từ 'restrain' (kiềm chế, ngăn giữ: 'restrain conflicting parties') trái nghĩa hoàn toàn với incite/encourage."
            }
        ]
    },

    # STAGE 10: Linh Thứu Sơn - Lôi Âm Tự (Sublist 10)
    {
        "id": "read_s10_p1",
        "stageId": 10,
        "title": "The Quest for Academic Integrity: Synthesizing Truth at Thunderclap Monastery",
        "titleVi": "Hành Trình Tìm Kiếm Sự Liêm Chính Học Thuật: Tổng Hợp Chân Lý Nơi Lôi Âm Tự",
        "genre": "lore",
        "topic": "Journey's Culmination & Scholarly Rigor",
        "targetWords": ["integrity", "intrinsic", "assemble", "compile", "convince", "collapse", "ongoing", "persist", "notwithstanding", "undergo", "conceive"],
        "content": """The arrival at Thunderclap Monastery on Mount Vulture signifies the ultimate culmination of the arduous journey. In scholarly analogy, this sacred destination represents the standard of absolute integrity in research and wisdom. The pilgrims had to assemble decades of collective perseverance and undergo eighty-one trials before they could conceive the profound reality of enlightenment.

When facing the celestial examiners, Xuanzang and his disciples had to convince the guardians that their devotion possessed intrinsic purity, rather than a superficial desire for fame. Notwithstanding immense physical perils and constant reluctance along the path, their ethical determination had persisted without collapsing. The sacred scriptures compiled at this summit were not mere letters on parchment; they embodied a transformative methodology whereby human ignorance is dismantled and profound truth is revealed.

True enlightenment, much like true scholarship, cannot be received passively through a magical transaction. It requires scholars and seekers alike to compile rigorous evidence, preserve moral integrity, and persist through unending intellectual challenges.""",
        "vietnameseTranslation": """Việc đến được Đại Lôi Âm Tự trên đỉnh Linh Thứu Sơn đánh dấu đỉnh cao tột cùng của cuộc hành trình gian khổ. Trong phép loại suy học thuật, đích đến thiêng liêng này tượng trưng cho tiêu chuẩn của sự liêm chính tuyệt đối trong nghiên cứu và trí tuệ. Thầy trò Đường Tăng đã phải tập hợp hàng thập kỷ của sự kiên trì tập thể và trải qua tám mươi mốt kiếp nạn trước khi có thể lĩnh hội được thực tại thâm sâu của sự giác ngộ.

Khi đối diện với các bậc giám khảo chư thiên, Huyền Trang và các đệ tử phải thuyết phục những người hộ trì rằng lòng sùng kính của họ mang tính thanh tịnh nội tại, chứ không phải là sự khao khát danh lợi bề ngoài. Bất chấp những hiểm nguy thể xác to lớn và sự ngập ngừng do dự thường trực trên đường đi, quyết tâm đạo đức của họ vẫn kiên trì bền bỉ mà không hề sụp đổ. Những bộ chân kinh được biên soạn tại đỉnh cao này không chỉ là những nét chữ đơn thuần trên giấy; chúng thể hiện một phương pháp luận biến đổi qua đó sự vô minh của con người được xóa bỏ và chân lý thâm sâu được hiển lộ.

Sự giác ngộ thực sự, cũng giống như học thuật chân chính, không thể được tiếp nhận một cách thụ động qua một sự trao đổi thần kỳ. Nó đòi hỏi các học giả và những người tầm đạo cũng phải biên soạn bằng chứng nghiêm ngặt, giữ gìn sự liêm chính đạo đức và kiên trì vượt qua những thách thức trí tuệ bất tận.""",
        "matchingActivity": {
            "title": "Hoạt Động Nối Từ Đồng Nghĩa & Trái Nghĩa (Matching Activity with Synonyms and Antonyms)",
            "synonymPairs": [
                {"word": "INTEGRITY", "match": "HONESTY", "wordVi": "liêm chính, chính trực", "matchVi": "trung thực, ngay thẳng"},
                {"word": "INTRINSIC", "match": "INHERENT", "wordVi": "nội tại, bản chất", "matchVi": "vốn có, sẵn có"},
                {"word": "ASSEMBLE", "match": "CONVENE", "wordVi": "tập hợp, quy tụ", "matchVi": "triệu tập, tụ họp"},
                {"word": "PERSIST", "match": "PERSEVERE", "wordVi": "kiên trì, bền bỉ", "matchVi": "nhẫn nại, kiên tâm"},
                {"word": "COMPILE", "match": "GATHER", "wordVi": "biên soạn, tổng hợp", "matchVi": "thu thập, tích lũy"},
                {"word": "CONVINCE", "match": "PERSUADE", "wordVi": "thuyết phục", "matchVi": "thuyết phục lòng tin"}
            ],
            "antonymPairs": [
                {"word": "INTRINSIC", "match": "EXTRINSIC", "wordVi": "nội tại", "matchVi": "ngoại lai, bên ngoài"},
                {"word": "COLLAPSE", "match": "FLOURISH", "wordVi": "sụp đổ, tiêu tan", "matchVi": "phát triển phồn thịnh"},
                {"word": "PERSIST", "match": "RELINQUISH", "wordVi": "bền chí, kiên trì", "matchVi": "từ bỏ, buông xuôi"},
                {"word": "ASSEMBLE", "match": "DISPERSE", "wordVi": "tập hợp", "matchVi": "giải tán, tản mác"}
            ]
        },
        "questions": [
            {
                "id": "q_s10_p1_1",
                "type": "mcq",
                "question": "What does Thunderclap Monastery represent in the scholarly analogy in paragraph 1?",
                "questionVi": "Lôi Âm Tự đại diện cho điều gì trong phép so sánh học thuật ở đoạn 1?",
                "targetWord": "integrity",
                "options": [
                    "The standard of absolute integrity in research and wisdom",
                    "A purely commercial exchange center for gold and silver",
                    "A location where physical exercise replaces moral character",
                    "An imaginary mirage with no philosophical substance"
                ],
                "correctAnswer": "The standard of absolute integrity in research and wisdom",
                "explanation": "Đoạn 1 nêu: 'this sacred destination represents the standard of absolute integrity in research and wisdom.'"
            },
            {
                "id": "q_s10_p1_syn",
                "type": "synonym",
                "question": "FIND SYNONYM: In paragraph 2, which word from the passage has the closest meaning to 'INHERENT' or 'INNATE'?",
                "questionVi": "TÌM TỪ ĐỒNG NGHĨA: Trong đoạn 2, từ nào trong bài đọc có nghĩa gần nhất với 'INHERENT' (vốn có, bản chất bên trong)?",
                "targetWord": "intrinsic",
                "options": ["intrinsic", "superficial", "ethical", "collective"],
                "correctAnswer": "intrinsic",
                "explanation": "Từ 'intrinsic' (đoạn 2: 'devotion possessed intrinsic purity') đồng nghĩa với inherent/innate (nội tại, bản chất)."
            },
            {
                "id": "q_s10_p1_ant",
                "type": "antonym",
                "question": "FIND ANTONYM: In paragraph 2, which word in the passage means the OPPOSITE of 'SURRENDER' or 'CEASE'?",
                "questionVi": "TÌM TỪ TRÁI NGHĨA: Trong đoạn 2, từ nào mang nghĩa ĐỐI LẬP với 'SURRENDER' (đầu hàng) hoặc 'CEASE' (chấm dứt)?",
                "targetWord": "persist",
                "options": ["persist", "collapse", "reluctance", "convince"],
                "correctAnswer": "persist",
                "explanation": "Từ 'persist' (kiên trì, bền bỉ tồn tại: 'ethical determination had persisted') đối lập với surrender/cease (từ bỏ, chấm dứt)."
            }
        ]
    }
]

ts_content = f"""// Academic Reading Database for Academic Word List (570 words across 10 Sublists)
// Fully integrated with Stage Lore, Target AWL Vocabulary, Glossary, and IELTS-style Comprehension Questions
// Includes 'Find Synonyms and Antonyms' reading questions and interactive matching activities

export interface ReadingQuestion {{
  id: string;
  type: 'mcq' | 'cloze' | 'tfng' | 'synonym' | 'antonym';
  question: string;
  questionVi: string;
  targetWord?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}}

export interface MatchingPair {{
  word: string;
  match: string;
  wordVi: string;
  matchVi: string;
}}

export interface MatchingActivity {{
  title: string;
  synonymPairs: MatchingPair[];
  antonymPairs: MatchingPair[];
}}

export interface ReadingPassage {{
  id: string;
  stageId: number;
  title: string;
  titleVi: string;
  genre: 'academic' | 'lore' | 'historical';
  topic: string;
  targetWords: string[];
  content: string;
  vietnameseTranslation: string;
  matchingActivity?: MatchingActivity;
  questions: ReadingQuestion[];
}}

export const READING_PASSAGES: ReadingPassage[] = {json.dumps(passages, indent=2, ensure_ascii=False)};

export function getPassagesForStage(stageId: number): ReadingPassage[] {{
  return READING_PASSAGES.filter((p) => p.stageId === stageId);
}}
"""

with open('src/data/awlReadingData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully generated {len(passages)} passages with Synonyms & Antonyms for all stages.")
