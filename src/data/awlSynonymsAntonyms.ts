/**
 * Academic Word List (AWL) - Lexical Relations Database: Synonyms & Antonyms
 * Covers Sublists 1-10 with verified academic synonyms, antonyms, and Vietnamese glosses.
 */

export interface WordLexicalRelation {
  synonyms: string[];
  antonyms: string[];
  synonymsVi?: string[];
  antonymsVi?: string[];
  explanation?: string;
}

export const AWL_SYNONYMS_ANTONYMS: Record<string, WordLexicalRelation> = {
  "analyse": {
    "synonyms": [
      "examine",
      "investigate",
      "evaluate",
      "inspect"
    ],
    "antonyms": [
      "synthesize",
      "integrate",
      "assemble",
      "ignore"
    ],
    "synonymsVi": [
      "kiểm tra chi tiết",
      "điều tra",
      "đánh giá",
      "thanh tra"
    ],
    "antonymsVi": [
      "tổng hợp",
      "tích hợp",
      "lắp ráp",
      "bỏ qua"
    ],
    "explanation": "Analyse nghĩa là mổ xẻ, phân tích chi tiết; trái nghĩa là synthesize (tổng hợp lại)."
  },
  "approach": {
    "synonyms": [
      "method",
      "strategy",
      "technique",
      "manner"
    ],
    "antonyms": [
      "departure",
      "retreat",
      "avoidance",
      "withdrawal"
    ],
    "synonymsVi": [
      "phương pháp",
      "chiến lược",
      "kỹ thuật",
      "cách thức"
    ],
    "antonymsVi": [
      "sự rời bỏ",
      "sự rút lui",
      "sự né tránh",
      "thu hồi"
    ],
    "explanation": "Approach vừa là phương pháp giải quyết, vừa là sự tiếp cận."
  },
  "area": {
    "synonyms": [
      "field",
      "domain",
      "sphere",
      "realm"
    ],
    "antonyms": [
      "totality",
      "whole",
      "universe",
      "entirety"
    ],
    "synonymsVi": [
      "lĩnh vực",
      "phạm vi",
      "địa hạt",
      "khu vực"
    ],
    "antonymsVi": [
      "toàn thể",
      "tổng thể",
      "toàn diện",
      "toàn cục"
    ],
    "explanation": "Area trong văn cảnh học thuật chỉ lĩnh vực nghiên cứu hoặc vùng địa lý."
  },
  "assess": {
    "synonyms": [
      "evaluate",
      "appraise",
      "estimate",
      "judge"
    ],
    "antonyms": [
      "ignore",
      "neglect",
      "overlook",
      "misjudge"
    ],
    "synonymsVi": [
      "đánh giá",
      "thẩm định",
      "ước tính",
      "phán đoán"
    ],
    "antonymsVi": [
      "bỏ qua",
      "lơ là",
      "nhìn nhận sai",
      "bỏ sót"
    ],
    "explanation": "Assess nghĩa là đánh giá hoặc ước lượng giá trị/rủi ro."
  },
  "assume": {
    "synonyms": [
      "suppose",
      "presume",
      "hypothesize",
      "postulate"
    ],
    "antonyms": [
      "prove",
      "demonstrate",
      "verify",
      "substantiate"
    ],
    "synonymsVi": [
      "cho rằng",
      "giả định",
      "đặt giả thuyết",
      "mặc định"
    ],
    "antonymsVi": [
      "chứng minh",
      "xác minh",
      "kiểm chứng",
      "làm rõ"
    ],
    "explanation": "Assume là giả định chưa có chứng minh; trái ngược là prove/verify (chứng minh có căn cứ)."
  },
  "authority": {
    "synonyms": [
      "jurisdiction",
      "power",
      "expert",
      "command"
    ],
    "antonyms": [
      "powerlessness",
      "subordination",
      "novice",
      "servitude"
    ],
    "synonymsVi": [
      "thẩm quyền",
      "quyền lực",
      "chuyên gia",
      "chỉ huy"
    ],
    "antonymsVi": [
      "sự bất lực",
      "sự phục tùng",
      "người tập sự",
      "nô lệ"
    ],
    "explanation": "Authority là quyền lực pháp lý hoặc chuyên gia đầu ngành trong lĩnh vực."
  },
  "available": {
    "synonyms": [
      "accessible",
      "obtainable",
      "at hand",
      "ready"
    ],
    "antonyms": [
      "unavailable",
      "inaccessible",
      "scarce",
      "occupied"
    ],
    "synonymsVi": [
      "có sẵn",
      "dễ tiếp cận",
      "trong tầm tay",
      "sẵn sàng"
    ],
    "antonymsVi": [
      "không có sẵn",
      "không thể tiếp cận",
      "khan hiếm",
      "bận rộn"
    ],
    "explanation": "Available nghĩa là có sẵn để sử dụng; trái nghĩa là unavailable/inaccessible."
  },
  "benefit": {
    "synonyms": [
      "advantage",
      "gain",
      "profit",
      "merit"
    ],
    "antonyms": [
      "detriment",
      "disadvantage",
      "drawback",
      "harm"
    ],
    "synonymsVi": [
      "lợi ích",
      "mối lợi",
      "ưu điểm",
      "giá trị"
    ],
    "antonymsVi": [
      "tổn hại",
      "bất lợi",
      "hạn chế",
      "mối nguy"
    ],
    "explanation": "Benefit là lợi ích mang lại; đối lập là disadvantage hoặc detriment."
  },
  "concept": {
    "synonyms": [
      "notion",
      "idea",
      "conception",
      "theory"
    ],
    "antonyms": [
      "reality",
      "fact",
      "actuality",
      "tangible object"
    ],
    "synonymsVi": [
      "khái niệm",
      "ý niệm",
      "tư tưởng",
      "lý thuyết"
    ],
    "antonymsVi": [
      "thực tế",
      "sự thật cụ thể",
      "thực thể hiển nhiên",
      "vật thể"
    ],
    "explanation": "Concept là ý niệm trừu tượng; đối lập với reality hay thực tế cụ thể."
  },
  "consist": {
    "synonyms": [
      "comprise",
      "contain",
      "include",
      "be composed of"
    ],
    "antonyms": [
      "exclude",
      "omit",
      "disassemble",
      "separate"
    ],
    "synonymsVi": [
      "bao gồm",
      "chứa đựng",
      "gồm có",
      "cấu thành từ"
    ],
    "antonymsVi": [
      "loại trừ",
      "bỏ qua",
      "phân rã",
      "tách rời"
    ],
    "explanation": "Consist of là cấu thành từ; đối lập là exclude (loại trừ)."
  },
  "constitutional": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'constitutional' (adj) mang nghĩa 'Thuộc về hiến pháp'. Định nghĩa học thuật: Relating to an established set of fundamental principles governing a state.."
  },
  "context": {
    "synonyms": [
      "background",
      "environment",
      "framework",
      "surroundings"
    ],
    "antonyms": [
      "isolation",
      "detachment",
      "vacuum",
      "disconnection"
    ],
    "synonymsVi": [
      "bối cảnh",
      "môi trường",
      "khung ngữ cảnh",
      "hoàn cảnh"
    ],
    "antonymsVi": [
      "sự cô lập",
      "tách biệt hoàn toàn",
      "chân không",
      "mất liên kết"
    ],
    "explanation": "Context là văn cảnh hay bối cảnh xung quanh làm sáng tỏ sự việc."
  },
  "contract": {
    "synonyms": [
      "agreement",
      "covenant",
      "compact",
      "pact"
    ],
    "antonyms": [
      "disagreement",
      "breach",
      "expansion",
      "cancellation"
    ],
    "synonymsVi": [
      "hợp đồng",
      "thỏa ước",
      "giao kèo",
      "hiệp định"
    ],
    "antonymsVi": [
      "sự bất đồng",
      "sự vi phạm",
      "sự bành trướng",
      "hủy bỏ"
    ],
    "explanation": "Contract vừa là hợp đồng văn bản, vừa mang nghĩa co lại."
  },
  "create": {
    "synonyms": [
      "produce",
      "generate",
      "originate",
      "fabricate"
    ],
    "antonyms": [
      "destroy",
      "annihilate",
      "demolish",
      "ruin"
    ],
    "synonymsVi": [
      "sáng tạo",
      "tạo ra",
      "sinh ra",
      "chế tạo"
    ],
    "antonymsVi": [
      "hủy diệt",
      "phá hủy",
      "đập phá",
      "làm hỏng"
    ],
    "explanation": "Create là tạo ra thứ mới mẻ; trái nghĩa là destroy."
  },
  "data": {
    "synonyms": [
      "information",
      "figures",
      "statistics",
      "evidence"
    ],
    "antonyms": [
      "conjecture",
      "speculation",
      "fiction",
      "rumor"
    ],
    "synonymsVi": [
      "thông tin",
      "số liệu",
      "thống kê",
      "dữ kiện"
    ],
    "antonymsVi": [
      "sự phỏng đoán",
      "đầu cơ suy diễn",
      "hư cấu",
      "tin đồn"
    ],
    "explanation": "Data là dữ liệu thực nghiệm đã được thu thập có căn cứ."
  },
  "definition": {
    "synonyms": [
      "statement",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'definition' (noun) mang nghĩa 'Định nghĩa, sự xác định rõ ràng'. Định nghĩa học thuật: A statement of the exact meaning of a word, especially in a dictionary.."
  },
  "derived": {
    "synonyms": [
      "obtained",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'derived' (verb / adj) mang nghĩa 'Bắt nguồn từ, rút ra từ'. Định nghĩa học thuật: Obtained or formed from something else.."
  },
  "distribution": {
    "synonyms": [
      "action",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'distribution' (noun) mang nghĩa 'Sự phân phối, phân bố'. Định nghĩa học thuật: The action of sharing something out among a number of recipients.."
  },
  "economic": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'economic' (adj) mang nghĩa 'Thuộc về kinh tế'. Định nghĩa học thuật: Relating to economics or the economy.."
  },
  "environment": {
    "synonyms": [
      "ecosystem",
      "habitat",
      "milieu",
      "surroundings"
    ],
    "antonyms": [
      "vacuum",
      "isolation",
      "internal realm",
      "void"
    ],
    "synonymsVi": [
      "hệ sinh thái",
      "môi trường sống",
      "hoàn cảnh",
      "ngoại cảnh"
    ],
    "antonymsVi": [
      "chân không",
      "sự cô lập",
      "nội tại",
      "hư vô"
    ],
    "explanation": "Environment là môi trường tự nhiên hoặc môi trường xã hội xung quanh."
  },
  "established": {
    "synonyms": [
      "having",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'established' (verb / adj) mang nghĩa 'Được thiết lập, có uy tín lâu năm'. Định nghĩa học thuật: Having existed for a long time and therefore recognized and accepted.."
  },
  "estimate": {
    "synonyms": [
      "approximate",
      "gauge",
      "calculate",
      "reckon"
    ],
    "antonyms": [
      "measure accurately",
      "ascertain",
      "verify precisely",
      "determine exactly"
    ],
    "synonymsVi": [
      "ước lượng",
      "đo lường sơ bộ",
      "dự tính",
      "phỏng đoán"
    ],
    "antonymsVi": [
      "đo lường chính xác tuyệt đối",
      "xác minh tường tận",
      "định lượng chuẩn"
    ],
    "explanation": "Estimate là ước tính gần đúng; đối lập là đo lường chính xác tuyệt đối."
  },
  "evidence": {
    "synonyms": [
      "proof",
      "testimony",
      "confirmation",
      "substantiation"
    ],
    "antonyms": [
      "disproof",
      "refutation",
      "speculation",
      "hearsay"
    ],
    "synonymsVi": [
      "bằng chứng",
      "chứng cứ",
      "xác nhận",
      "căn cứ vững chắc"
    ],
    "antonymsVi": [
      "sự bác bỏ",
      "phản biện phủ nhận",
      "suy đoán vô căn cứ",
      "lời đồn"
    ],
    "explanation": "Evidence là chứng cứ có thể chứng minh một giả thuyết."
  },
  "export": {
    "synonyms": [
      "ship abroad",
      "market internationally",
      "transmit",
      "dispatch"
    ],
    "antonyms": [
      "import",
      "retain",
      "receive domestically",
      "absorb"
    ],
    "synonymsVi": [
      "xuất khẩu",
      "đưa ra nước ngoài",
      "truyền phát",
      "gửi đi"
    ],
    "antonymsVi": [
      "nhập khẩu",
      "giữ lại nội địa",
      "tiếp nhận trong nước",
      "hấp thu"
    ],
    "explanation": "Export là xuất khẩu hàng hóa ra thị trường quốc tế; trái nghĩa trực tiếp là import."
  },
  "factors": {
    "synonyms": [
      "circumstances",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'factors' (noun) mang nghĩa 'Các yếu tố tác động'. Định nghĩa học thuật: Circumstances, facts, or influences that contribute to a result.."
  },
  "financial": {
    "synonyms": [
      "fiscal",
      "monetary",
      "pecuniary",
      "economic"
    ],
    "antonyms": [
      "non-monetary",
      "uncommercial",
      "intangible",
      "spiritual"
    ],
    "synonymsVi": [
      "thuộc tài chính",
      "tiền tệ",
      "tài khóa",
      "kinh tế tiền mặt"
    ],
    "antonymsVi": [
      "phi tiền tệ",
      "phi thương mại",
      "phi vật chất",
      "tinh thần"
    ],
    "explanation": "Financial liên quan đến tiền tệ và tài khóa quản lý vốn."
  },
  "formula": {
    "synonyms": [
      "recipe",
      "method",
      "prescription",
      "equation"
    ],
    "antonyms": [
      "improvisation",
      "disorganization",
      "randomness",
      "chaos"
    ],
    "synonymsVi": [
      "công thức",
      "phương thức cố định",
      "phương trình",
      "khuôn mẫu"
    ],
    "antonymsVi": [
      "sự tùy cơ ứng biến",
      "vô tổ chức",
      "ngẫu nhiên hỗn loạn",
      "mất kiểm soát"
    ],
    "explanation": "Formula là công thức khoa học hoặc quy tắc được xác định trước."
  },
  "function": {
    "synonyms": [
      "purpose",
      "role",
      "utility",
      "operation"
    ],
    "antonyms": [
      "dysfunction",
      "inutility",
      "malfunction",
      "idleness"
    ],
    "synonymsVi": [
      "chức năng",
      "vai trò",
      "công dụng",
      "vận hành"
    ],
    "antonymsVi": [
      "rối loạn chức năng",
      "sự vô dụng",
      "hỏng hóc",
      "ngừng trệ"
    ],
    "explanation": "Function là công dụng hữu ích hoặc hoạt động của một cơ quan/hệ thống."
  },
  "identified": {
    "synonyms": [
      "recognized",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'identified' (verb / adj) mang nghĩa 'Được nhận diện, xác định'. Định nghĩa học thuật: Recognized or pinpointed as being a particular thing.."
  },
  "income": {
    "synonyms": [
      "revenue",
      "earnings",
      "proceeds",
      "salary"
    ],
    "antonyms": [
      "expense",
      "expenditure",
      "outlay",
      "deficit"
    ],
    "synonymsVi": [
      "thu nhập",
      "doanh thu",
      "tiền kiếm được",
      "lợi tức"
    ],
    "antonymsVi": [
      "chi phí",
      "khoản chi",
      "khoản tiêu",
      "thâm hụt"
    ],
    "explanation": "Income là khoản tiền thu vào; đối lập hoàn toàn với expenditure / expense."
  },
  "indicate": {
    "synonyms": [
      "demonstrate",
      "signify",
      "denote",
      "suggest"
    ],
    "antonyms": [
      "conceal",
      "hide",
      "mask",
      "suppress"
    ],
    "synonymsVi": [
      "chỉ ra",
      "biểu thị",
      "báo hiệu",
      "gợi ý"
    ],
    "antonymsVi": [
      "che giấu",
      "giấu kín",
      "ngụy trang",
      "kìm nén"
    ],
    "explanation": "Indicate là biểu lộ, chỉ thị bằng chứng; đối lập là conceal (che giấu)."
  },
  "individual": {
    "synonyms": [
      "singular",
      "particular",
      "distinct",
      "lone"
    ],
    "antonyms": [
      "collective",
      "communal",
      "mass",
      "shared"
    ],
    "synonymsVi": [
      "cá nhân",
      "riêng biệt",
      "đặc thù",
      "đơn lẻ"
    ],
    "antonymsVi": [
      "tập thể",
      "cộng đồng",
      "đại chúng",
      "chia sẻ chung"
    ],
    "explanation": "Individual là cá nhân đơn lẻ; trái nghĩa là collective hoặc communal."
  },
  "interpretation": {
    "synonyms": [
      "action",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'interpretation' (noun) mang nghĩa 'Sự diễn giải, giải nghĩa'. Định nghĩa học thuật: The action of explaining the meaning of something.."
  },
  "involved": {
    "synonyms": [
      "connected",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'involved' (adj / verb) mang nghĩa 'Liên quan, tham gia vào'. Định nghĩa học thuật: Connected with or participating in an activity.."
  },
  "issues": {
    "synonyms": [
      "important",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'issues' (noun) mang nghĩa 'Các vấn đề thảo luận, nan giải'. Định nghĩa học thuật: Important topics or problems for debate or discussion.."
  },
  "labour": {
    "synonyms": [
      "work",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'labour' (noun) mang nghĩa 'Lao động, nhân lực'. Định nghĩa học thuật: Work, especially physical work; workers regarded as a class.."
  },
  "legal": {
    "synonyms": [
      "lawful",
      "legitimate",
      "statutory",
      "licit"
    ],
    "antonyms": [
      "illegal",
      "illicit",
      "unlawful",
      "prohibited"
    ],
    "synonymsVi": [
      "hợp pháp",
      "chính thống",
      "theo luật định",
      "được phép"
    ],
    "antonymsVi": [
      "bất hợp pháp",
      "trái phép",
      "phạm luật",
      "bị nghiêm cấm"
    ],
    "explanation": "Legal là hợp pháp; đối lập với illegal hay unlawful."
  },
  "legislation": {
    "synonyms": [
      "laws",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'legislation' (noun) mang nghĩa 'Pháp luật, luật ban hành'. Định nghĩa học thuật: Laws, considered collectively, enacted by a legislature.."
  },
  "major": {
    "synonyms": [
      "crucial",
      "significant",
      "vital",
      "primary"
    ],
    "antonyms": [
      "minor",
      "trivial",
      "negligible",
      "secondary"
    ],
    "synonymsVi": [
      "chủ chốt",
      "quan trọng đáng kể",
      "sống còn",
      "chính yếu"
    ],
    "antonymsVi": [
      "thứ yếu",
      "tầm phào",
      "không đáng kể",
      "phụ"
    ],
    "explanation": "Major là tầm quan trọng cốt lõi; đối lập là minor."
  },
  "method": {
    "synonyms": [
      "procedure",
      "system",
      "technique",
      "approach"
    ],
    "antonyms": [
      "disorder",
      "chaos",
      "randomness",
      "irregularity"
    ],
    "synonymsVi": [
      "phương pháp",
      "quy trình",
      "kỹ thuật thực hiện",
      "lối tiếp cận"
    ],
    "antonymsVi": [
      "hỗn loạn",
      "mất trật tự",
      "ngẫu hứng thiếu bài bản",
      "thất thường"
    ],
    "explanation": "Method là cách thức có hệ thống và khoa học."
  },
  "occur": {
    "synonyms": [
      "happen",
      "transpire",
      "arise",
      "take place"
    ],
    "antonyms": [
      "cease",
      "stop",
      "be prevented",
      "disappear"
    ],
    "synonymsVi": [
      "xảy ra",
      "diễn ra",
      "phát sinh",
      "tiến hành"
    ],
    "antonymsVi": [
      "ngừng lại",
      "bị ngăn chặn",
      "biến mất",
      "chấm dứt"
    ],
    "explanation": "Occur là biến cố xảy ra trong tự nhiên hoặc xã hội."
  },
  "percent": {
    "synonyms": [
      "percentage",
      "proportion",
      "fraction",
      "ratio"
    ],
    "antonyms": [
      "whole",
      "totality",
      "entirety",
      "sum"
    ],
    "synonymsVi": [
      "phần trăm",
      "tỷ lệ phần trăm",
      "phân số",
      "tỷ số"
    ],
    "antonymsVi": [
      "toàn thể",
      "toàn bộ",
      "tổng cộng",
      "trọn vẹn"
    ],
    "explanation": "Percent là phần trăm trên một trăm đơn vị."
  },
  "period": {
    "synonyms": [
      "era",
      "epoch",
      "interval",
      "duration"
    ],
    "antonyms": [
      "instant",
      "moment",
      "eternity",
      "perpetuity"
    ],
    "synonymsVi": [
      "thời kỳ",
      "kỷ nguyên",
      "khoảng thời gian",
      "giai đoạn"
    ],
    "antonymsVi": [
      "khoảnh khắc tức thời",
      "vĩnh cửu",
      "bất tận",
      "giây lát"
    ],
    "explanation": "Period là một chu kỳ hoặc khoảng thời gian xác định."
  },
  "policy": {
    "synonyms": [
      "strategy",
      "guideline",
      "protocol",
      "code"
    ],
    "antonyms": [
      "improvisation",
      "arbitrariness",
      "whim",
      "lawlessness"
    ],
    "synonymsVi": [
      "chính sách",
      "hướng dẫn chỉ đạo",
      "nghị định",
      "quy tắc ứng xử"
    ],
    "antonymsVi": [
      "sự tùy hứng",
      "độc đoán vô quy tắc",
      "bốc đồng",
      "vô pháp"
    ],
    "explanation": "Policy là đường lối và quy định được tổ chức thông qua."
  },
  "principle": {
    "synonyms": [
      "precept",
      "tenet",
      "axiom",
      "rule"
    ],
    "antonyms": [
      "corruption",
      "immorality",
      "arbitrariness",
      "ambiguity"
    ],
    "synonymsVi": [
      "nguyên lý",
      "giáo lý cốt lõi",
      "tiên đề",
      "quy tắc đạo đức"
    ],
    "antonymsVi": [
      "sự đồi bại",
      "vô đạo đức",
      "tùy tiện",
      "mơ hồ thiếu nguyên tắc"
    ],
    "explanation": "Principle là nguyên tắc căn bản định hướng hành động."
  },
  "procedure": {
    "synonyms": [
      "established",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'procedure' (noun) mang nghĩa 'Thủ tục, quy trình thực hiện'. Định nghĩa học thuật: An established or official way of doing something.."
  },
  "process": {
    "synonyms": [
      "procedure",
      "course",
      "progression",
      "operation"
    ],
    "antonyms": [
      "stagnation",
      "cessation",
      "idleness",
      "halt"
    ],
    "synonymsVi": [
      "quá trình",
      "tiến trình",
      "vận hành từng bước",
      "chuỗi thao tác"
    ],
    "antonymsVi": [
      "sự trì trệ",
      "chấm dứt",
      "đứng im",
      "ngưng bặt"
    ],
    "explanation": "Process là chuỗi các thao tác để đạt mục đích."
  },
  "required": {
    "synonyms": [
      "officially",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'required' (adj / verb) mang nghĩa 'Bắt buộc, đòi hỏi'. Định nghĩa học thuật: Officially compulsory, or needed for a particular purpose.."
  },
  "research": {
    "synonyms": [
      "investigation",
      "inquiry",
      "study",
      "exploration"
    ],
    "antonyms": [
      "ignorance",
      "superficiality",
      "guesswork",
      "neglect"
    ],
    "synonymsVi": [
      "nghiên cứu",
      "điều tra khoa học",
      "khảo sát",
      "tìm tòi"
    ],
    "antonymsVi": [
      "sự thiếu hiểu biết",
      "hời hợt",
      "đoán mò",
      "bỏ mặc"
    ],
    "explanation": "Research là sự tìm tòi nghiên cứu có phương pháp học thuật."
  },
  "response": {
    "synonyms": [
      "reaction",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'response' (noun) mang nghĩa 'Phản ứng, lời đáp lại'. Định nghĩa học thuật: A reaction to something; an answer or reply.."
  },
  "role": {
    "synonyms": [
      "function",
      "capacity",
      "duty",
      "part"
    ],
    "antonyms": [
      "irrelevance",
      "nonentity",
      "detachment",
      "vacuum"
    ],
    "synonymsVi": [
      "vai trò",
      "tư cách",
      "nhiệm vụ",
      "phần việc"
    ],
    "antonymsVi": [
      "sự không liên quan",
      "vô danh",
      "tách rời",
      "vô nghĩa"
    ],
    "explanation": "Role là vai trò chức năng trong một tổ chức."
  },
  "section": {
    "synonyms": [
      "segment",
      "portion",
      "division",
      "part"
    ],
    "antonyms": [
      "whole",
      "totality",
      "aggregate",
      "entirety"
    ],
    "synonymsVi": [
      "phần",
      "đoạn",
      "phân khu",
      "bộ phận chia nhỏ"
    ],
    "antonymsVi": [
      "toàn thể",
      "tổng hợp",
      "toàn bộ nguyên vẹn"
    ],
    "explanation": "Section là một phần được chia tách từ một tổng thể."
  },
  "sector": {
    "synonyms": [
      "zone",
      "domain",
      "sphere",
      "branch"
    ],
    "antonyms": [
      "whole economy",
      "entire system",
      "unity",
      "aggregate"
    ],
    "synonymsVi": [
      "khu vực kinh tế",
      "ngành",
      "địa hạt",
      "nhánh"
    ],
    "antonymsVi": [
      "toàn bộ nền kinh tế",
      "hệ thống hợp nhất",
      "tổng thể"
    ],
    "explanation": "Sector là một mảng hoặc ngành trong nền kinh tế/xã hội."
  },
  "significant": {
    "synonyms": [
      "notable",
      "meaningful",
      "substantial",
      "momentous"
    ],
    "antonyms": [
      "insignificant",
      "trivial",
      "minor",
      "negligible"
    ],
    "synonymsVi": [
      "đáng kể",
      "có ý nghĩa lớn",
      "trọng yếu",
      "đáng lưu tâm"
    ],
    "antonymsVi": [
      "không đáng kể",
      "tầm thường",
      "vụn vặt",
      "nhỏ bé"
    ],
    "explanation": "Significant là có tầm quan trọng hoặc mức độ lớn đáng lưu tâm."
  },
  "similar": {
    "synonyms": [
      "alike",
      "comparable",
      "akin",
      "analogous"
    ],
    "antonyms": [
      "different",
      "dissimilar",
      "distinct",
      "divergent"
    ],
    "synonymsVi": [
      "tương đồng",
      "có thể so sánh",
      "tương tự",
      "gần giống"
    ],
    "antonymsVi": [
      "khác biệt",
      "dị biệt",
      "tách bạch",
      "phân kỳ"
    ],
    "explanation": "Similar là có nét tương đồng; đối lập là dissimilar hoặc different."
  },
  "source": {
    "synonyms": [
      "origin",
      "fountainhead",
      "root",
      "provenance"
    ],
    "antonyms": [
      "destination",
      "endpoint",
      "result",
      "terminus"
    ],
    "synonymsVi": [
      "nguồn gốc",
      "cội nguồn",
      "gốc rễ",
      "xuất xứ"
    ],
    "antonymsVi": [
      "điểm đến",
      "điểm kết thúc",
      "hậu quả kết cục",
      "trạm cuối"
    ],
    "explanation": "Source là điểm khởi đầu; đối lập là destination hoặc endpoint."
  },
  "specific": {
    "synonyms": [
      "precise",
      "particular",
      "explicit",
      "distinct"
    ],
    "antonyms": [
      "general",
      "vague",
      "ambiguous",
      "generic"
    ],
    "synonymsVi": [
      "cụ thể",
      "chính xác",
      "rõ ràng chi tiết",
      "đặc thù"
    ],
    "antonymsVi": [
      "chung chung",
      "mơ hồ",
      "mập mờ",
      "khái quát"
    ],
    "explanation": "Specific là chi tiết rõ ràng; đối lập với general hoặc vague."
  },
  "structure": {
    "synonyms": [
      "framework",
      "architecture",
      "formation",
      "composition"
    ],
    "antonyms": [
      "chaos",
      "disarray",
      "disorganization",
      "formlessness"
    ],
    "synonymsVi": [
      "cấu trúc",
      "kiến trúc tổng thể",
      "kết cấu",
      "bố cục"
    ],
    "antonymsVi": [
      "hỗn loạn",
      "vô trật tự",
      "mất tổ chức",
      "vô hình vô dạng"
    ],
    "explanation": "Structure là cách bố trí và tổ chức các thành phần."
  },
  "theory": {
    "synonyms": [
      "hypothesis",
      "conjecture",
      "doctrine",
      "speculation"
    ],
    "antonyms": [
      "fact",
      "practice",
      "reality",
      "practical application"
    ],
    "synonymsVi": [
      "lý thuyết",
      "học thuyết",
      "giả thuyết",
      "nguyên lý trừu tượng"
    ],
    "antonymsVi": [
      "thực tế thực hành",
      "sự thật chứng minh",
      "ứng dụng thực tiễn"
    ],
    "explanation": "Theory là lý thuyết khoa học; đối lập với thực hành (practice) hoặc thực tế (reality)."
  },
  "variable": {
    "synonyms": [
      "element",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'variable' (noun / adj) mang nghĩa 'Biến số; có thể thay đổi'. Định nghĩa học thuật: An element, feature, or factor that is liable to vary or change.."
  },
  "achieve": {
    "synonyms": [
      "accomplish",
      "attain",
      "realize",
      "fulfill"
    ],
    "antonyms": [
      "fail",
      "forfeit",
      "abandon",
      "lose"
    ],
    "synonymsVi": [
      "đạt được",
      "hoàn thành",
      "hiện thực hóa",
      "thực thi"
    ],
    "antonymsVi": [
      "thất bại",
      "đánh mất",
      "từ bỏ",
      "thua cuộc"
    ],
    "explanation": "Achieve là gặt hái thành công; đối lập với fail."
  },
  "acquisition": {
    "synonyms": [
      "learning",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'acquisition' (noun) mang nghĩa 'Sự tiếp thu, sự mua lại / thu nạp'. Định nghĩa học thuật: The learning or developing of a skill, habit, or quality; an asset bought.."
  },
  "administration": {
    "synonyms": [
      "process",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'administration' (noun) mang nghĩa 'Sự quản lý, chính quyền, ban hành chính'. Định nghĩa học thuật: The process or activity of running a business, organization, or government.."
  },
  "affect": {
    "synonyms": [
      "have",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'affect' (verb) mang nghĩa 'Tác động, ảnh hưởng đến'. Định nghĩa học thuật: Have an effect on; make a difference to.."
  },
  "appropriate": {
    "synonyms": [
      "suitable",
      "fitting",
      "apt",
      "pertinent"
    ],
    "antonyms": [
      "inappropriate",
      "unsuitable",
      "improper",
      "inapt"
    ],
    "synonymsVi": [
      "thích hợp",
      "phù hợp",
      "xứng đáng",
      "đúng mực"
    ],
    "antonymsVi": [
      "không phù hợp",
      "bất tương thích",
      "sai trái",
      "khập khiễng"
    ],
    "explanation": "Appropriate là tương thích chuẩn mực; đối lập là inappropriate."
  },
  "aspects": {
    "synonyms": [
      "particular",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'aspects' (noun) mang nghĩa 'Các khía cạnh, góc độ'. Định nghĩa học thuật: Particular parts or features of situations, problems, or subjects.."
  },
  "assistance": {
    "synonyms": [
      "action",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'assistance' (noun) mang nghĩa 'Sự hỗ trợ, trợ giúp'. Định nghĩa học thuật: The action of helping someone by sharing work or providing resources.."
  },
  "categories": {
    "synonyms": [
      "classes",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'categories' (noun) mang nghĩa 'Các hạng mục, thể loại'. Định nghĩa học thuật: Classes or divisions of people or things regarded as having shared characteristics.."
  },
  "chapter": {
    "synonyms": [
      "main",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'chapter' (noun) mang nghĩa 'Chương sách, thời kỳ'. Định nghĩa học thuật: A main division of a book, or a distinctive period in history.."
  },
  "commission": {
    "synonyms": [
      "instruction",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'commission' (noun / verb) mang nghĩa 'Ủy ban; tiền hoa hồng; ủy thác'. Định nghĩa học thuật: An instruction, command, or role given to a person or group; or an official committee.."
  },
  "community": {
    "synonyms": [
      "group",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'community' (noun) mang nghĩa 'Cộng đồng'. Định nghĩa học thuật: A group of people living in the same place or having a particular characteristic in common.."
  },
  "complex": {
    "synonyms": [
      "consisting",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'complex' (adj / noun) mang nghĩa 'Phức tạp; quần thể'. Định nghĩa học thuật: Consisting of many different and connected parts; not easy to analyze.."
  },
  "computer": {
    "synonyms": [
      "electronic",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'computer' (noun) mang nghĩa 'Máy tính, hệ thống điện toán'. Định nghĩa học thuật: An electronic device for storing and processing data according to instructions.."
  },
  "conclusion": {
    "synonyms": [
      "finish",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'conclusion' (noun) mang nghĩa 'Kết luận'. Định nghĩa học thuật: The end or finish of an event, process, or text; a judgment reached by reasoning.."
  },
  "conduct": {
    "synonyms": [
      "organize",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'conduct' (verb / noun) mang nghĩa 'Tiến hành; hạnh kiểm, tư cách'. Định nghĩa học thuật: Organize and carry out; the manner in which a person behaves.."
  },
  "consequences": {
    "synonyms": [
      "results",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'consequences' (noun) mang nghĩa 'Các hậu quả, hệ quả'. Định nghĩa học thuật: Results or effects, typically unwelcome or unpleasant.."
  },
  "construction": {
    "synonyms": [
      "action",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'construction' (noun) mang nghĩa 'Sự xây dựng, công trình'. Định nghĩa học thuật: The action of building something, typically a large structure.."
  },
  "consumer": {
    "synonyms": [
      "person",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'consumer' (noun) mang nghĩa 'Người tiêu dùng'. Định nghĩa học thuật: A person who purchases goods and services for personal use.."
  },
  "credit": {
    "synonyms": [
      "ability",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'credit' (noun / verb) mang nghĩa 'Tín dụng, tín chỉ, sự công nhận'. Định nghĩa học thuật: The ability of a customer to obtain goods or services before payment; acknowledgement of merit.."
  },
  "cultural": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'cultural' (adj) mang nghĩa 'Thuộc về văn hóa'. Định nghĩa học thuật: Relating to the ideas, customs, and social behavior of a society.."
  },
  "design": {
    "synonyms": [
      "plan",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'design' (noun / verb) mang nghĩa 'Thiết kế, đồ án'. Định nghĩa học thuật: A plan or drawing produced to show the look and function of an object or building.."
  },
  "distinction": {
    "synonyms": [
      "difference",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'distinction' (noun) mang nghĩa 'Sự phân biệt, nét đặc sắc'. Định nghĩa học thuật: A difference or contrast between similar things or people; excellence.."
  },
  "elements": {
    "synonyms": [
      "essential",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'elements' (noun) mang nghĩa 'Các yếu tố cấu thành, nguyên tố'. Định nghĩa học thuật: Essential or characteristic parts of something abstract.."
  },
  "equation": {
    "synonyms": [
      "statement",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'equation' (noun) mang nghĩa 'Phương trình, bài toán cân bằng'. Định nghĩa học thuật: A statement that the values of two mathematical expressions are equal.."
  },
  "evaluation": {
    "synonyms": [
      "making",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'evaluation' (noun) mang nghĩa 'Sự thẩm định, đánh giá chất lượng'. Định nghĩa học thuật: The making of a judgment about the amount, number, or value of something.."
  },
  "features": {
    "synonyms": [
      "distinctive",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'features' (noun) mang nghĩa 'Các đặc trưng, đặc tính nổi bật'. Định nghĩa học thuật: Distinctive attributes or aspects of something.."
  },
  "final": {
    "synonyms": [
      "coming",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'final' (adj) mang nghĩa 'Cuối cùng, chung kết'. Định nghĩa học thuật: Coming at the end of a series; concluding.."
  },
  "focus": {
    "synonyms": [
      "center",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'focus' (noun / verb) mang nghĩa 'Tiêu điểm; tập trung vào'. Định nghĩa học thuật: The center of interest or activity; adapt to see clearly.."
  },
  "impact": {
    "synonyms": [
      "marked",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'impact' (noun / verb) mang nghĩa 'Tác động mạnh mẽ, ảnh hưởng'. Định nghĩa học thuật: The marked effect or influence of something.."
  },
  "injury": {
    "synonyms": [
      "instance",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'injury' (noun) mang nghĩa 'Chấn thương, tổn hại'. Định nghĩa học thuật: An instance of being injured; harm or damage that is suffered.."
  },
  "institute": {
    "synonyms": [
      "society",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'institute' (noun / verb) mang nghĩa 'Viện nghiên cứu; thiết lập / ban hành'. Định nghĩa học thuật: A society or organization having a particular object or common factor; set in motion.."
  },
  "invest": {
    "synonyms": [
      "expend",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'invest' (verb) mang nghĩa 'Đầu tư, bỏ vốn / tâm huyết'. Định nghĩa học thuật: Expend money with the expectation of achieving a profit or material result.."
  },
  "items": {
    "synonyms": [
      "individual",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'items' (noun) mang nghĩa 'Các mục, khoản mục, vật phẩm'. Định nghĩa học thuật: Individual articles or units, especially ones that are part of a list, collection, or set.."
  },
  "journal": {
    "synonyms": [
      "newspaper",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'journal' (noun) mang nghĩa 'Tạp chí học thuật, nhật ký'. Định nghĩa học thuật: A newspaper or magazine that deals with a particular subject or professional activity.."
  },
  "maintain": {
    "synonyms": [
      "cause",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'maintain' (verb) mang nghĩa 'Duy trì, giữ gìn, bảo dưỡng'. Định nghĩa học thuật: Cause or enable a condition or state of affairs to continue; keep in good condition.."
  },
  "normal": {
    "synonyms": [
      "conforming",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'normal' (adj / noun) mang nghĩa 'Bình thường, thông thường'. Định nghĩa học thuật: Conforming to a standard; usual, typical, or expected.."
  },
  "obtain": {
    "synonyms": [
      "acquire",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'obtain' (verb) mang nghĩa 'Thu được, đạt được'. Định nghĩa học thuật: Get, acquire, or secure something.."
  },
  "participate": {
    "synonyms": [
      "take",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'participate' (verb) mang nghĩa 'Tham gia, tham dự'. Định nghĩa học thuật: Take part in an action or endeavour.."
  },
  "perceive": {
    "synonyms": [
      "become",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'perceive' (verb) mang nghĩa 'Nhận thức, cảm nhận, lĩnh hội'. Định nghĩa học thuật: Become aware or conscious of something; come to realize or understand.."
  },
  "positive": {
    "synonyms": [
      "beneficial",
      "favorable",
      "constructive",
      "optimistic"
    ],
    "antonyms": [
      "negative",
      "adverse",
      "detrimental",
      "harmful"
    ],
    "synonymsVi": [
      "tích cực",
      "có lợi ích",
      "mang tính xây dựng",
      "lạc quan"
    ],
    "antonymsVi": [
      "tiêu cực",
      "bất lợi",
      "gây hại",
      "độc hại"
    ],
    "explanation": "Positive là mang tính xây dựng hoặc có lợi; đối lập là negative."
  },
  "potential": {
    "synonyms": [
      "having",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'potential' (adj / noun) mang nghĩa 'Tiềm năng, tiềm tàng'. Định nghĩa học thuật: Having or showing the capacity to develop into something in the future.."
  },
  "previous": {
    "synonyms": [
      "existing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'previous' (adj) mang nghĩa 'Trước đó, tiền nhiệm'. Định nghĩa học thuật: Existing or occurring before in time or order.."
  },
  "primary": {
    "synonyms": [
      "chief",
      "foremost",
      "principal",
      "prime"
    ],
    "antonyms": [
      "secondary",
      "subordinate",
      "minor",
      "subsidiary"
    ],
    "synonymsVi": [
      "hàng đầu",
      "chủ yếu",
      "cốt cán",
      "quan trọng nhất"
    ],
    "antonymsVi": [
      "thứ yếu",
      "phụ thuộc",
      "nhỏ nhặt",
      "bổ trợ"
    ],
    "explanation": "Primary là quan trọng hàng đầu; đối lập là secondary."
  },
  "purchase": {
    "synonyms": [
      "acquire",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'purchase' (verb / noun) mang nghĩa 'Mua sắm; vật mua được, sức mua'. Định nghĩa học thuật: Acquire something by paying for it; buy.."
  },
  "range": {
    "synonyms": [
      "area",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'range' (noun / verb) mang nghĩa 'Phạm vi, dãy, biên độ'. Định nghĩa học thuật: The area of variation between upper and lower limits on a particular scale.."
  },
  "region": {
    "synonyms": [
      "area",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'region' (noun) mang nghĩa 'Vùng, khu vực địa lý'. Định nghĩa học thuật: An area, especially part of a country or the world having definable characteristics.."
  },
  "regulations": {
    "synonyms": [
      "rules",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'regulations' (noun) mang nghĩa 'Các quy định, điều lệ'. Định nghĩa học thuật: Rules or directives made and maintained by an authority.."
  },
  "relevant": {
    "synonyms": [
      "closely",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'relevant' (adj) mang nghĩa 'Có liên quan, thích hợp'. Định nghĩa học thuật: Closely connected or appropriate to the matter at hand.."
  },
  "resident": {
    "synonyms": [
      "person",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'resident' (noun / adj) mang nghĩa 'Cư dân; cư trú'. Định nghĩa học thuật: A person who lives somewhere permanently or on a long-term basis.."
  },
  "resource": {
    "synonyms": [
      "stock",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'resource' (noun) mang nghĩa 'Tài nguyên, nguồn lực'. Định nghĩa học thuật: A stock or supply of money, materials, staff, and other assets that can be drawn on.."
  },
  "restrict": {
    "synonyms": [
      "limit",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'restrict' (verb) mang nghĩa 'Giới hạn, hạn chế'. Định nghĩa học thuật: Put a limit on; keep under control.."
  },
  "secure": {
    "synonyms": [
      "safe",
      "protected",
      "stable",
      "guaranteed"
    ],
    "antonyms": [
      "insecure",
      "vulnerable",
      "precarious",
      "hazardous"
    ],
    "synonymsVi": [
      "an toàn",
      "được bảo vệ",
      "vững chắc",
      "được bảo đảm"
    ],
    "antonymsVi": [
      "bất an",
      "dễ bị tổn thương",
      "bấp bênh",
      "nguy hiểm"
    ],
    "explanation": "Secure là kiên cố an toàn; đối lập là vulnerable / insecure."
  },
  "seek": {
    "synonyms": [
      "attempt",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'seek' (verb) mang nghĩa 'Tìm kiếm, mưu cầu, theo đuổi'. Định nghĩa học thuật: Attempt to find or acquire something; ask for advice or help.."
  },
  "select": {
    "synonyms": [
      "carefully",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'select' (verb / adj) mang nghĩa 'Lựa chọn; chọn lọc tinh tuyển'. Định nghĩa học thuật: Carefully choose as being the best or most suitable.."
  },
  "site": {
    "synonyms": [
      "area",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'site' (noun / verb) mang nghĩa 'Địa điểm, vị trí, công trường'. Định nghĩa học thuật: An area of ground on which a town, building, or monument is constructed; website.."
  },
  "strategy": {
    "synonyms": [
      "plan",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'strategy' (noun) mang nghĩa 'Chiến lược, kế sách'. Định nghĩa học thuật: A plan of action designed to achieve a long-term or overall aim.."
  },
  "survey": {
    "synonyms": [
      "investigation",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'survey' (noun / verb) mang nghĩa 'Cuộc khảo sát; quan sát điều tra'. Định nghĩa học thuật: An investigation of the opinions or experience of a group of people.."
  },
  "text": {
    "synonyms": [
      "book",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'text' (noun) mang nghĩa 'Văn bản, tài liệu viết'. Định nghĩa học thuật: A book or other written or printed work, regarded in terms of its content rather than its physical form.."
  },
  "tradition": {
    "synonyms": [
      "transmission",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'tradition' (noun) mang nghĩa 'Truyền thống, phong tục tập quán'. Định nghĩa học thuật: The transmission of customs or beliefs from generation to generation.."
  },
  "transfer": {
    "synonyms": [
      "move",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'transfer' (verb / noun) mang nghĩa 'Chuyển giao, chuyển nhượng'. Định nghĩa học thuật: Move from one place, person, or position to another.."
  },
  "alternative": {
    "synonyms": [
      "more",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'alternative' (noun / adj) mang nghĩa 'Lựa chọn thay thế; có tính thay thế'. Định nghĩa học thuật: One of two or more available possibilities; mutually exclusive.."
  },
  "circumstance": {
    "synonyms": [
      "fact",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'circumstance' (noun) mang nghĩa 'Hoàn cảnh, tình huống, điều kiện'. Định nghĩa học thuật: A fact or condition connected with or relevant to an event or action.."
  },
  "comment": {
    "synonyms": [
      "verbal",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'comment' (noun / verb) mang nghĩa 'Lời bình luận, nhận xét; đưa ra ý kiến'. Định nghĩa học thuật: A verbal or written remark expressing an opinion or reaction.."
  },
  "compensate": {
    "synonyms": [
      "give",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'compensate' (verb) mang nghĩa 'Bồi thường, bù đắp thiệt hại'. Định nghĩa học thuật: Give someone something, typically money, in recognition of loss, suffering, or injury.."
  },
  "component": {
    "synonyms": [
      "part",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'component' (noun) mang nghĩa 'Thành phần cấu tạo, bộ phận hợp thành'. Định nghĩa học thuật: A part or element of a larger whole, especially a system or machine.."
  },
  "consent": {
    "synonyms": [
      "permission",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'consent' (noun / verb) mang nghĩa 'Sự đồng thuận, bằng lòng; ưng thuận'. Định nghĩa học thuật: Permission for something to happen or agreement to do something.."
  },
  "considerable": {
    "synonyms": [
      "notably",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'considerable' (adj) mang nghĩa 'Đáng kể, to lớn'. Định nghĩa học thuật: Notably large in size, amount, or extent.."
  },
  "constant": {
    "synonyms": [
      "occurring",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'constant' (adj / noun) mang nghĩa 'Liên tục, không đổi; hằng số'. Định nghĩa học thuật: Occurring continuously over a period of time; a quantity or state that does not change.."
  },
  "constrain": {
    "synonyms": [
      "compel",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'constrain' (verb) mang nghĩa 'Bắt buộc, kìm hãm, hạn chế'. Định nghĩa học thuật: Compel or force someone to follow a particular course of action; severely restrict.."
  },
  "contribute": {
    "synonyms": [
      "give",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'contribute' (verb) mang nghĩa 'Đóng góp, góp phần'. Định nghĩa học thuật: Give something in order to help achieve or provide something.."
  },
  "convene": {
    "synonyms": [
      "come",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'convene' (verb) mang nghĩa 'Triệu tập, nhóm họp'. Định nghĩa học thuật: Come or bring together for a meeting or activity; assemble.."
  },
  "coordinate": {
    "synonyms": [
      "bring",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'coordinate' (verb / noun / adj) mang nghĩa 'Phối hợp, điều phối; tọa độ'. Định nghĩa học thuật: Bring the different elements of a complex activity or organization into a harmonious or efficient relationship.."
  },
  "core": {
    "synonyms": [
      "central",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'core' (noun / adj) mang nghĩa 'Cốt lõi, trọng tâm, phần trung tâm'. Định nghĩa học thuật: The central, innermost, or most essential part of something.."
  },
  "corporate": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'corporate' (adj) mang nghĩa 'Thuộc về doanh nghiệp, tập đoàn'. Định nghĩa học thuật: Relating to a large company or group.."
  },
  "correspond": {
    "synonyms": [
      "have",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'correspond' (verb) mang nghĩa 'Tương ứng, phù hợp; trao đổi thư từ'. Định nghĩa học thuật: Have a close similarity; match or agree almost exactly.."
  },
  "criteria": {
    "synonyms": [
      "principles",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'criteria' (noun (plural)) mang nghĩa 'Các tiêu chí, chuẩn mực đánh giá'. Định nghĩa học thuật: Principles or standards by which something may be judged or decided.."
  },
  "deduce": {
    "synonyms": [
      "arrive",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'deduce' (verb) mang nghĩa 'Suy luận, suy diễn logic'. Định nghĩa học thuật: Arrive at a fact or a conclusion by reasoning; draw as a logical inference.."
  },
  "demonstrate": {
    "synonyms": [
      "clearly",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'demonstrate' (verb) mang nghĩa 'Chứng minh, giải thích rõ, biểu thị'. Định nghĩa học thuật: Clearly show the existence or truth of something by giving proof or evidence.."
  },
  "document": {
    "synonyms": [
      "piece",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'document' (noun / verb) mang nghĩa 'Tài liệu, văn kiện; ghi chép tư liệu'. Định nghĩa học thuật: A piece of written, printed, or electronic matter providing information or evidence; record in detail.."
  },
  "dominate": {
    "synonyms": [
      "have",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'dominate' (verb) mang nghĩa 'Thống trị, chiếm ưu thế, chi phối'. Định nghĩa học thuật: Have a commanding influence on; exercise control over.."
  },
  "emphasis": {
    "synonyms": [
      "special",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'emphasis' (noun) mang nghĩa 'Sự nhấn mạnh, tầm quan trọng'. Định nghĩa học thuật: Special importance, value, or prominence given to something.."
  },
  "ensure": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'ensure' (verb) mang nghĩa 'Bảo đảm, chắc chắn'. Định nghĩa học thuật: Make certain that something shall occur or be the case.."
  },
  "exclude": {
    "synonyms": [
      "deny",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'exclude' (verb) mang nghĩa 'Loại trừ, không bao gồm'. Định nghĩa học thuật: Deny someone or something access to a place, group, or privilege; remove from consideration.."
  },
  "framework": {
    "synonyms": [
      "basic",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'framework' (noun) mang nghĩa 'Khung cơ cấu, khuôn khổ lý thuyết'. Định nghĩa học thuật: A basic structure underlying a system, concept, or text.."
  },
  "fund": {
    "synonyms": [
      "money",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'fund' (noun / verb) mang nghĩa 'Quỹ tiền tệ; cấp vốn, tài trợ'. Định nghĩa học thuật: A sum of money saved or made available for a particular purpose; provide money for.."
  },
  "illustrate": {
    "synonyms": [
      "explain",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'illustrate' (verb) mang nghĩa 'Minh họa, làm sáng tỏ bằng ví dụ'. Định nghĩa học thuật: Explain or make something clear by using examples, charts, or pictures.."
  },
  "immigrate": {
    "synonyms": [
      "come",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'immigrate' (verb) mang nghĩa 'Nhập cư vào một quốc gia khác'. Định nghĩa học thuật: Come to live permanently in a foreign country.."
  },
  "imply": {
    "synonyms": [
      "strongly",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'imply' (verb) mang nghĩa 'Ngụ ý, hàm ý, ám chỉ'. Định nghĩa học thuật: Strongly suggest the truth or existence of something not expressly stated.."
  },
  "initial": {
    "synonyms": [
      "beginning",
      "preliminary",
      "primary",
      "introductory"
    ],
    "antonyms": [
      "final",
      "terminal",
      "ultimate",
      "concluding"
    ],
    "synonymsVi": [
      "ban đầu",
      "sơ khởi",
      "bước đầu",
      "mở đầu"
    ],
    "antonymsVi": [
      "cuối cùng",
      "kết thúc",
      "sau cùng",
      "chốt hạ"
    ],
    "explanation": "Initial là giai đoạn đầu tiên; đối lập là final / ultimate."
  },
  "instance": {
    "synonyms": [
      "example",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'instance' (noun) mang nghĩa 'Ví dụ cụ thể, trường hợp điển hình'. Định nghĩa học thuật: An example or single occurrence of something.."
  },
  "interact": {
    "synonyms": [
      "such",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'interact' (verb) mang nghĩa 'Tương tác, tác động qua lại'. Định nghĩa học thuật: Act in such a way as to have an effect on another; communicate with.."
  },
  "justify": {
    "synonyms": [
      "show",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'justify' (verb) mang nghĩa 'Biện minh, chứng minh là chính đáng'. Định nghĩa học thuật: Show or prove to be right or reasonable.."
  },
  "layer": {
    "synonyms": [
      "sheet",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'layer' (noun / verb) mang nghĩa 'Lớp, tầng; xếp lớp'. Định nghĩa học thuật: A sheet, quantity, or thickness of material, typically one of several, covering a surface.."
  },
  "link": {
    "synonyms": [
      "relationship",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'link' (noun / verb) mang nghĩa 'Mối liên kết, kết nối'. Định nghĩa học thuật: A relationship between two things or situations; make or form a connection.."
  },
  "locate": {
    "synonyms": [
      "discover",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'locate' (verb) mang nghĩa 'Xác định vị trí; định cư, đặt địa điểm'. Định nghĩa học thuật: Discover the exact place or position of; situate in a particular place.."
  },
  "maximise": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'maximise' (verb) mang nghĩa 'Tối đa hóa, nâng lên mức cao nhất'. Định nghĩa học thuật: Make as large or great as possible; make the best use of.."
  },
  "minor": {
    "synonyms": [
      "lesser",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'minor' (adj / noun) mang nghĩa 'Nhỏ, không quan trọng; người vị thành niên'. Định nghĩa học thuật: Lesser in importance, seriousness, or significance.."
  },
  "negate": {
    "synonyms": [
      "nullify",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'negate' (verb) mang nghĩa 'Phủ nhận, vô hiệu hóa, làm mất tác dụng'. Định nghĩa học thuật: Nullify; make ineffective; deny the existence of.."
  },
  "outcome": {
    "synonyms": [
      "thing",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'outcome' (noun) mang nghĩa 'Kết quả, thành quả, đầu ra'. Định nghĩa học thuật: The way a thing turns out; a consequence.."
  },
  "partner": {
    "synonyms": [
      "person",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'partner' (noun / verb) mang nghĩa 'Đối tác, bạn đồng hành; hợp tác'. Định nghĩa học thuật: A person who takes part in an undertaking with another or others, especially in a business.."
  },
  "philosophy": {
    "synonyms": [
      "study",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'philosophy' (noun) mang nghĩa 'Triết học, triết lý'. Định nghĩa học thuật: The study of the fundamental nature of knowledge, reality, and existence.."
  },
  "physical": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'physical' (adj) mang nghĩa 'Vật lý, thuộc về thể chất, vật chất'. Định nghĩa học thuật: Relating to the body as opposed to the mind; relating to things perceived through the senses.."
  },
  "proportion": {
    "synonyms": [
      "part",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'proportion' (noun) mang nghĩa 'Tỷ lệ, phần tương quan'. Định nghĩa học thuật: A part, share, or number considered in comparative relation to a whole.."
  },
  "publish": {
    "synonyms": [
      "prepare",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'publish' (verb) mang nghĩa 'Xuất bản, công bố công khai (sách báo, nghiên cứu)'. Định nghĩa học thuật: Prepare and issue a book, journal, or piece of music for public sale, distribution, or readership.."
  },
  "react": {
    "synonyms": [
      "respond",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'react' (verb) mang nghĩa 'Phản ứng, tác động lại'. Định nghĩa học thuật: Respond or behave in a particular way in response to something.."
  },
  "register": {
    "synonyms": [
      "enter",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'register' (verb / noun) mang nghĩa 'Đăng ký, ghi danh; sổ bộ'. Định nghĩa học thuật: Enter or record on an official list or directory.."
  },
  "rely": {
    "synonyms": [
      "depend",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'rely' (verb) mang nghĩa 'Dựa vào, trông cậy vào'. Định nghĩa học thuật: Depend on with full trust or confidence.."
  },
  "remove": {
    "synonyms": [
      "take",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'remove' (verb) mang nghĩa 'Loại bỏ, gỡ bỏ, dời đi'. Định nghĩa học thuật: Take off or away from the position occupied.."
  },
  "scheme": {
    "synonyms": [
      "large",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'scheme' (noun / verb) mang nghĩa 'Kế hoạch, chương trình, đề án'. Định nghĩa học thuật: A large-scale systematic plan or arrangement for attaining some particular object.."
  },
  "sequence": {
    "synonyms": [
      "particular",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'sequence' (noun / verb) mang nghĩa 'Trình tự, chuỗi liên tiếp'. Định nghĩa học thuật: A particular order in which related events, movements, or things follow each other.."
  },
  "sex": {
    "synonyms": [
      "either",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'sex' (noun) mang nghĩa 'Giới tính sinh học'. Định nghĩa học thuật: Either of the two main categories (male and female) into which humans and many other living things are divided on the basis of reproductive functions.."
  },
  "shift": {
    "synonyms": [
      "move",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'shift' (verb / noun) mang nghĩa 'Chuyển dịch, thay đổi phương hướng; ca làm việc'. Định nghĩa học thuật: Move or cause to move from one place or position to another; a slight change in position or tendency.."
  },
  "specify": {
    "synonyms": [
      "identify",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'specify' (verb) mang nghĩa 'Chỉ rõ, định rõ chi tiết'. Định nghĩa học thuật: Identify clearly and definitely; state a fact or requirement clearly.."
  },
  "sufficient": {
    "synonyms": [
      "enough",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'sufficient' (adj) mang nghĩa 'Đầy đủ, thỏa đáng'. Định nghĩa học thuật: Enough; adequate for a given purpose.."
  },
  "task": {
    "synonyms": [
      "piece",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'task' (noun / verb) mang nghĩa 'Nhiệm vụ, bài tập, công tác'. Định nghĩa học thuật: A piece of work to be done or undertaken.."
  },
  "technical": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'technical' (adj) mang nghĩa 'Kỹ thuật, mang tính chuyên môn cao'. Định nghĩa học thuật: Relating to a particular subject, art, or craft, or its practical techniques.."
  },
  "technique": {
    "synonyms": [
      "carrying",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'technique' (noun) mang nghĩa 'Kỹ thuật, phương pháp thủ công/nghệ thuật'. Định nghĩa học thuật: A way of carrying out a particular task, especially the execution or performance of an artistic work or a scientific procedure.."
  },
  "technology": {
    "synonyms": [
      "application",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'technology' (noun) mang nghĩa 'Công nghệ, kỹ thuật ứng dụng'. Định nghĩa học thuật: The application of scientific knowledge for practical purposes, especially in industry.."
  },
  "valid": {
    "synonyms": [
      "legitimate",
      "sound",
      "cogent",
      "authentic"
    ],
    "antonyms": [
      "invalid",
      "void",
      "spurious",
      "groundless"
    ],
    "synonymsVi": [
      "hợp lệ",
      "có giá trị",
      "thuyết phục",
      "xác thực"
    ],
    "antonymsVi": [
      "vô hiệu",
      "mất giá trị",
      "giả mạo",
      "vô căn cứ"
    ],
    "explanation": "Valid là có giá trị hợp pháp hoặc lập luận vững chắc; đối lập là invalid."
  },
  "volume": {
    "synonyms": [
      "amount",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'volume' (noun) mang nghĩa 'Thể tích, khối lượng; tập sách; âm lượng'. Định nghĩa học thuật: The amount of space that a substance or object occupies; a book forming part of a work; quantity or power of sound.."
  },
  "access": {
    "synonyms": [
      "means",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'access' (noun / verb) mang nghĩa 'Quyền truy cập, tiếp cận; truy xuất'. Định nghĩa học thuật: The means or opportunity to approach or enter a place; retrieve or obtain data.."
  },
  "adequate": {
    "synonyms": [
      "satisfactory",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'adequate' (adj) mang nghĩa 'Đầy đủ, thỏa đáng, đáp ứng yêu cầu'. Định nghĩa học thuật: Satisfactory or acceptable in quality or quantity.."
  },
  "annual": {
    "synonyms": [
      "occurring",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'annual' (adj) mang nghĩa 'Hàng năm, thường niên'. Định nghĩa học thuật: Occurring once every year.."
  },
  "confer": {
    "synonyms": [
      "grant",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'confer' (verb) mang nghĩa 'Trao tặng, phong (bằng/giải); bàn bạc'. Định nghĩa học thuật: Grant or bestow a title, degree, or benefit; have discussions.."
  },
  "contrast": {
    "synonyms": [
      "state",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'contrast' (noun / verb) mang nghĩa 'Sự tương phản, đối chiếu khác biệt'. Định nghĩa học thuật: The state of being strikingly different from something else in juxtaposition or close association.."
  },
  "cycle": {
    "synonyms": [
      "series",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'cycle' (noun / verb) mang nghĩa 'Chu kỳ, vòng tuần hoàn'. Định nghĩa học thuật: A series of events that are regularly repeated in the same order.."
  },
  "debate": {
    "synonyms": [
      "formal",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'debate' (noun / verb) mang nghĩa 'Cuộc tranh luận, thảo luận sôi nổi'. Định nghĩa học thuật: A formal discussion on a particular topic in a public meeting or legislative assembly.."
  },
  "despite": {
    "synonyms": [
      "without",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'despite' (prep) mang nghĩa 'Mặc dù, bất chấp'. Định nghĩa học thuật: Without being affected by; in spite of.."
  },
  "dimension": {
    "synonyms": [
      "measurable",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'dimension' (noun) mang nghĩa 'Kích thước, khía cạnh, chiều không gian'. Định nghĩa học thuật: A measurable extent of some kind, such as length, breadth, or height; an aspect or feature.."
  },
  "domestic": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'domestic' (adj) mang nghĩa 'Nội địa, trong nước; thuộc về gia đình'. Định nghĩa học thuật: Relating to the running of a home or to family relations; existing or occurring inside a particular country.."
  },
  "emerge": {
    "synonyms": [
      "become",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'emerge' (verb) mang nghĩa 'Xuất hiện, nổi lên, hé lộ'. Định nghĩa học thuật: Become apparent, important, or prominent; come into view.."
  },
  "error": {
    "synonyms": [
      "mistake",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'error' (noun) mang nghĩa 'Sai sót, lỗi, độ lệch'. Định nghĩa học thuật: A mistake; the degree to which a calculation or estimate deviates from the truth.."
  },
  "ethnic": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'ethnic' (adj) mang nghĩa 'Thuộc sắc tộc, dân tộc'. Định nghĩa học thuật: Relating to a population subgroup with a common national or cultural tradition.."
  },
  "goal": {
    "synonyms": [
      "object",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'goal' (noun) mang nghĩa 'Mục tiêu, đích đến'. Định nghĩa học thuật: The object of a person\\."
  },
  "grant": {
    "synonyms": [
      "agree",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'grant' (verb / noun) mang nghĩa 'Cấp, ban cho; khoản trợ cấp'. Định nghĩa học thuật: Agree to give or allow something; a sum of money given by an organization for a particular purpose.."
  },
  "apparent": {
    "synonyms": [
      "clearly",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'apparent' (adj) mang nghĩa 'Rõ ràng, thấy rõ; bề ngoài'. Định nghĩa học thuật: Clearly visible or understood; obvious; seeming real or true, but not necessarily so.."
  },
  "approximate": {
    "synonyms": [
      "close",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'approximate' (adj / verb) mang nghĩa 'Xấp xỉ, gần đúng; ước tính'. Định nghĩa học thuật: Close to the actual, but not completely accurate or exact; come near to.."
  },
  "attitude": {
    "synonyms": [
      "settled",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'attitude' (noun) mang nghĩa 'Thái độ, quan điểm nhìn nhận'. Định nghĩa học thuật: A settled way of thinking or feeling about someone or something.."
  },
  "hence": {
    "synonyms": [
      "substantially",
      "markedly",
      "specifically"
    ],
    "antonyms": [
      "scarcely",
      "barely",
      "incompletely"
    ],
    "synonymsVi": [
      "một cách đáng kể",
      "rõ rệt",
      "cụ thể"
    ],
    "antonymsVi": [
      "hầu như không",
      "hiếm khi",
      "chưa trọn vẹn"
    ],
    "explanation": "'hence' (adv) mang nghĩa 'Do đó, vì thế, từ đây suy ra'. Định nghĩa học thuật: As a consequence; for this reason.."
  },
  "hypothesis": {
    "synonyms": [
      "proposed",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'hypothesis' (noun) mang nghĩa 'Giả thuyết khoa học'. Định nghĩa học thuật: A proposed explanation made on the basis of limited evidence as a starting point for further investigation.."
  },
  "implement": {
    "synonyms": [
      "decision",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'implement' (verb / noun) mang nghĩa 'Thực thi, triển khai; công cụ'. Định nghĩa học thuật: Put a decision, plan, or agreement into effect; a tool or utensil.."
  },
  "implicate": {
    "synonyms": [
      "show",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'implicate' (verb) mang nghĩa 'Lôi kéo vào, dính líu đến, cho thấy có liên can'. Định nghĩa học thuật: Show someone or something to be involved in a crime or negative situation; bear implications.."
  },
  "impose": {
    "synonyms": [
      "force",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'impose' (verb) mang nghĩa 'Áp đặt, ban hành bắt buộc'. Định nghĩa học thuật: Force an unwelcome decision or ruling on someone; take unfair advantage.."
  },
  "integrate": {
    "synonyms": [
      "combine",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'integrate' (verb) mang nghĩa 'Tích hợp, hợp nhất, hòa nhập'. Định nghĩa học thuật: Combine one thing with another so that they become a whole; bring into equal participation.."
  },
  "internal": {
    "synonyms": [
      "experienced",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'internal' (adj) mang nghĩa 'Bên trong, nội bộ'. Định nghĩa học thuật: Experienced in one\\."
  },
  "investigate": {
    "synonyms": [
      "carry",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'investigate' (verb) mang nghĩa 'Điều tra, khảo sát, nghiên cứu kỹ'. Định nghĩa học thuật: Carry out a systematic or formal inquiry to discover and examine the facts of an incident.."
  },
  "job": {
    "synonyms": [
      "paid",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'job' (noun) mang nghĩa 'Nghề nghiệp, công việc, việc làm'. Định nghĩa học thuật: A paid position of regular employment; a task or piece of work.."
  },
  "label": {
    "synonyms": [
      "small",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'label' (noun / verb) mang nghĩa 'Nhãn mác; gán nhãn, phân loại'. Định nghĩa học thuật: A small piece of paper or cloth attached to an object to give information about it; assign to a category.."
  },
  "mechanism": {
    "synonyms": [
      "system",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'mechanism' (noun) mang nghĩa 'Cơ chế hoạt động, cơ cấu máy móc'. Định nghĩa học thuật: A system of parts working together in a machine; a natural or established process by which something takes place.."
  },
  "obvious": {
    "synonyms": [
      "easily",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'obvious' (adj) mang nghĩa 'Rõ ràng, hiển nhiên, dễ nhận thấy'. Định nghĩa học thuật: Easily perceived or understood; clear, self-evident, or apparent.."
  },
  "attribute": {
    "synonyms": [
      "regard",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'attribute' (verb / noun) mang nghĩa 'Quy cho, gán cho; phẩm chất, thuộc tính'. Định nghĩa học thuật: Regard something as being caused by; a quality or feature regarded as a characteristic.."
  },
  "civil": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'civil' (adj) mang nghĩa 'Dân sự, thuộc về công dân; lịch sự'. Định nghĩa học thuật: Relating to ordinary citizens and their concerns; courteous and polite.."
  },
  "code": {
    "synonyms": [
      "system",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'code' (noun / verb) mang nghĩa 'Mã số, quy tắc ứng xử, luật lệ'. Định nghĩa học thuật: A system of words, letters, or symbols used to represent others; a set of rules.."
  },
  "occupy": {
    "synonyms": [
      "reside",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'occupy' (verb) mang nghĩa 'Chiếm cứ, cư ngụ; làm bận rộn'. Định nghĩa học thuật: Reside or have one\\."
  },
  "option": {
    "synonyms": [
      "thing",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'option' (noun) mang nghĩa 'Lựa chọn, phương án'. Định nghĩa học thuật: A thing that is or may be chosen.."
  },
  "output": {
    "synonyms": [
      "amount",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'output' (noun / verb) mang nghĩa 'Sản lượng, đầu ra'. Định nghĩa học thuật: The amount of something produced by a person, machine, or industry.."
  },
  "overall": {
    "synonyms": [
      "taking",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'overall' (adj / adv) mang nghĩa 'Toàn diện, tổng thể; nhìn chung'. Định nghĩa học thuật: Taking everything into account; overall.."
  },
  "parallel": {
    "synonyms": [
      "occurring",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'parallel' (adj / noun / verb) mang nghĩa 'Song song, tương đồng, tương xứng'. Định nghĩa học thuật: Occurring or existing at the same time or in a similar way; side by side.."
  },
  "parameter": {
    "synonyms": [
      "numerical",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'parameter' (noun) mang nghĩa 'Thông số, tham số, giới hạn quy định'. Định nghĩa học thuật: A numerical or other measurable factor forming one of a set that defines a system.."
  },
  "phase": {
    "synonyms": [
      "distinct",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'phase' (noun / verb) mang nghĩa 'Giai đoạn, thời kỳ; thực hiện theo từng chặng'. Định nghĩa học thuật: A distinct period or stage in a series of events or a process of change.."
  },
  "predict": {
    "synonyms": [
      "forecast",
      "foresee",
      "project",
      "prophesy"
    ],
    "antonyms": [
      "recollect",
      "look back",
      "misjudge",
      "doubt"
    ],
    "synonymsVi": [
      "dự đoán",
      "tiên tri",
      "dự báo tương lai",
      "dự phóng"
    ],
    "antonymsVi": [
      "hồi tưởng quá khứ",
      "nhìn lại",
      "đoán sai hoàn toàn",
      "nghi ngờ"
    ],
    "explanation": "Predict là dự báo tương lai dựa trên dữ liệu hiện tại."
  },
  "principal": {
    "synonyms": [
      "first",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'principal' (adj / noun) mang nghĩa 'Chính, chủ yếu; hiệu trưởng, tiền vốn gốc'. Định nghĩa học thuật: First in order of importance; main; the head of a school or institution.."
  },
  "prior": {
    "synonyms": [
      "existing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'prior' (adj) mang nghĩa 'Trước, ưu tiên trước'. Định nghĩa học thuật: Existing or coming before in time, order, or importance.."
  },
  "professional": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'professional' (adj / noun) mang nghĩa 'Chuyên nghiệp; người hành nghề chuyên môn'. Định nghĩa học thuật: Relating to or belonging to a profession; competent or skilled.."
  },
  "project": {
    "synonyms": [
      "individual",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'project' (noun / verb) mang nghĩa 'Dự án, đề án; phóng chiếu, dự phóng'. Định nghĩa học thuật: An individual or collaborative enterprise planned to achieve an aim; estimate or forecast.."
  },
  "commit": {
    "synonyms": [
      "perpetrate",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'commit' (verb) mang nghĩa 'Cam kết, tận tụy; phạm (lỗi, tội)'. Định nghĩa học thuật: Perpetrate or carry out a mistake or crime; pledge or bind to a course of action.."
  },
  "communicate": {
    "synonyms": [
      "share",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'communicate' (verb) mang nghĩa 'Giao tiếp, truyền đạt thông điệp'. Định nghĩa học thuật: Share or exchange information, news, or ideas.."
  },
  "concentrate": {
    "synonyms": [
      "focus",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'concentrate' (verb) mang nghĩa 'Tập trung tư tưởng; cô đặc'. Định nghĩa học thuật: Focus all one\\."
  },
  "promote": {
    "synonyms": [
      "support",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'promote' (verb) mang nghĩa 'Thúc đẩy, khuyến khích, thăng chức'. Định nghĩa học thuật: Support or actively encourage a cause or process; raise to a higher position.."
  },
  "regime": {
    "synonyms": [
      "government",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'regime' (noun) mang nghĩa 'Chế độ chính trị; chế độ dinh dưỡng/luyện tập'. Định nghĩa học thuật: A government, especially an authoritarian one; a system or planned way of doing things.."
  },
  "resolve": {
    "synonyms": [
      "settle",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'resolve' (verb / noun) mang nghĩa 'Giải quyết, xử lý ổn thỏa; kiên quyết'. Định nghĩa học thuật: Settle or find a solution to a problem; decide firmly on a course of action.."
  },
  "retain": {
    "synonyms": [
      "keep",
      "preserve",
      "withhold",
      "maintain"
    ],
    "antonyms": [
      "relinquish",
      "release",
      "lose",
      "surrender"
    ],
    "synonymsVi": [
      "giữ lại",
      "bảo tồn",
      "duy trì",
      "nắm giữ"
    ],
    "antonymsVi": [
      "từ bỏ",
      "giải phóng",
      "để mất",
      "đầu hàng"
    ],
    "explanation": "Retain là giữ lại không để mất đi; đối lập là relinquish."
  },
  "series": {
    "synonyms": [
      "number",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'series' (noun) mang nghĩa 'Chuỗi, loạt, chuỗi ấn phẩm'. Định nghĩa học thuật: A number of things or events of a similar kind occurring in succession.."
  },
  "statistic": {
    "synonyms": [
      "fact",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'statistic' (noun) mang nghĩa 'Số liệu thống kê, chỉ số'. Định nghĩa học thuật: A fact or piece of data from a study of a large quantity of numerical data.."
  },
  "status": {
    "synonyms": [
      "relative",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'status' (noun) mang nghĩa 'Địa vị xã hội, thân phận, tình trạng'. Định nghĩa học thuật: The relative social, professional, or other standing of someone or something; current state.."
  },
  "stress": {
    "synonyms": [
      "pressure",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'stress' (noun / verb) mang nghĩa 'Căng thẳng, áp lực; nhấn mạnh'. Định nghĩa học thuật: Pressure or tension exerted on a material object; state of mental or emotional strain.."
  },
  "subsequent": {
    "synonyms": [
      "coming",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'subsequent' (adj) mang nghĩa 'Xảy ra sau đó, tiếp theo'. Định nghĩa học thuật: Coming after something in time; following.."
  },
  "sum": {
    "synonyms": [
      "particular",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'sum' (noun / verb) mang nghĩa 'Tổng số tiền, phép cộng; tóm tắt'. Định nghĩa học thuật: A particular amount of money; the total amount resulting from the addition of items.."
  },
  "summary": {
    "synonyms": [
      "brief",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'summary' (noun / adj) mang nghĩa 'Bản tóm tắt, sơ lược'. Định nghĩa học thuật: A brief statement or account of the main points of something.."
  },
  "undertake": {
    "synonyms": [
      "commit",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'undertake' (verb) mang nghĩa 'Đảm nhận, gánh vác, thực hiện'. Định nghĩa học thuật: Commit oneself to and begin an enterprise or task; take on.."
  },
  "academy": {
    "synonyms": [
      "institution",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'academy' (noun) mang nghĩa 'Học viện, viện hàn lâm'. Định nghĩa học thuật: An institution for the advancement of art, science, or higher learning.."
  },
  "adjust": {
    "synonyms": [
      "alter",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'adjust' (verb) mang nghĩa 'Điều chỉnh, thích nghi'. Định nghĩa học thuật: Alter or move something slightly in order to achieve the desired result or fit.."
  },
  "alter": {
    "synonyms": [
      "change",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'alter' (verb) mang nghĩa 'Thay đổi, biến đổi'. Định nghĩa học thuật: Change or cause to change in character or composition, typically in a small but significant way.."
  },
  "amend": {
    "synonyms": [
      "modify",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'amend' (verb) mang nghĩa 'Sửa đổi, bổ sung (luật, văn kiện)'. Định nghĩa học thuật: Modify formally, as a legal document or legislative bill.."
  },
  "aware": {
    "synonyms": [
      "having",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'aware' (adj) mang nghĩa 'Nhận thức được, có ý thức về'. Định nghĩa học thuật: Having knowledge or perception of a situation or fact.."
  },
  "capacity": {
    "synonyms": [
      "maximum",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'capacity' (noun) mang nghĩa 'Sức chứa, công suất, năng lực'. Định nghĩa học thuật: The maximum amount that something can contain or produce; mental or physical ability.."
  },
  "challenge": {
    "synonyms": [
      "call",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'challenge' (noun / verb) mang nghĩa 'Thách thức, thử thách; thách thức phán quyết'. Định nghĩa học thuật: A call to take part in a contest; a task or situation that tests someone\\."
  },
  "clause": {
    "synonyms": [
      "distinct",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'clause' (noun) mang nghĩa 'Điều khoản hợp đồng; mệnh đề ngữ pháp'. Định nghĩa học thuật: A distinct article or stipulation in a contract or treaty; a grammatical unit containing subject and predicate.."
  },
  "compound": {
    "synonyms": [
      "thing",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'compound' (noun / verb / adj) mang nghĩa 'Hợp chất; làm trầm trọng thêm; phức hợp'. Định nghĩa học thuật: A thing composed of two or more separate elements; make a problem worse.."
  },
  "conflict": {
    "synonyms": [
      "serious",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'conflict' (noun / verb) mang nghĩa 'Xung đột, mâu thuẫn'. Định nghĩa học thuật: A serious disagreement or argument; a state of incompatibility between two opinions or principles.."
  },
  "consult": {
    "synonyms": [
      "seek",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'consult' (verb) mang nghĩa 'Tham khảo, hội ý, tư vấn'. Định nghĩa học thuật: Seek information or advice from an expert or a reference work.."
  },
  "contact": {
    "synonyms": [
      "state",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'contact' (noun / verb) mang nghĩa 'Sự liên lạc, tiếp xúc'. Định nghĩa học thuật: The state of physical touching; communication or relationship with someone.."
  },
  "decline": {
    "synonyms": [
      "diminish",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'decline' (noun / verb) mang nghĩa 'Sự suy giảm, sụt giảm; từ chối'. Định nghĩa học thuật: Diminish in strength, value, or number; politely refuse.."
  },
  "discrete": {
    "synonyms": [
      "individually",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'discrete' (adj) mang nghĩa 'Rời rạc, riêng biệt, độc lập'. Định nghĩa học thuật: Individually separate and distinct.."
  },
  "draft": {
    "synonyms": [
      "preliminary",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'draft' (noun / verb) mang nghĩa 'Bản thảo, phác thảo; soạn thảo'. Định nghĩa học thuật: A preliminary version of a piece of writing; prepare a preliminary version.."
  },
  "enable": {
    "synonyms": [
      "give",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'enable' (verb) mang nghĩa 'Cho phép, tạo điều kiện thuận lợi'. Định nghĩa học thuật: Give someone the authority or means to do something; make possible.."
  },
  "energy": {
    "synonyms": [
      "strength",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'energy' (noun) mang nghĩa 'Năng lượng, sinh lực'. Định nghĩa học thuật: The strength and vitality required for sustained activity; power derived from physical resources.."
  },
  "enforce": {
    "synonyms": [
      "compel",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'enforce' (verb) mang nghĩa 'Thi hành, bắt buộc tuân thủ (luật)'. Định nghĩa học thuật: Compel observance of or compliance with a law, rule, or obligation.."
  },
  "entity": {
    "synonyms": [
      "thing",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'entity' (noun) mang nghĩa 'Thực thể, tổ chức độc lập'. Định nghĩa học thuật: A thing with distinct and independent existence.."
  },
  "equivalent": {
    "synonyms": [
      "equal",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'equivalent' (adj / noun) mang nghĩa 'Tương đương; vật tương đương'. Định nghĩa học thuật: Equal in value, amount, function, or meaning.."
  },
  "evolve": {
    "synonyms": [
      "develop",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'evolve' (verb) mang nghĩa 'Tiến hóa, phát triển dần dần'. Định nghĩa học thuật: Develop gradually, especially from a simple to a more complex form.."
  },
  "expand": {
    "synonyms": [
      "broaden",
      "enlarge",
      "amplify",
      "extend"
    ],
    "antonyms": [
      "contract",
      "shrink",
      "compress",
      "diminish"
    ],
    "synonymsVi": [
      "mở rộng",
      "bành trướng",
      "khuếch đại",
      "gia tăng"
    ],
    "antonymsVi": [
      "co lại",
      "thu hẹp",
      "nén chặt",
      "giảm bớt"
    ],
    "explanation": "Expand là mở rộng quy mô; đối lập là contract hay shrink."
  },
  "expose": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'expose' (verb) mang nghĩa 'Phơi bày, tiếp xúc với, vạch trần'. Định nghĩa học thuật: Make something visible by uncovering it; leave uncovered or unprotected.."
  },
  "external": {
    "synonyms": [
      "belonging",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'external' (adj) mang nghĩa 'Bên ngoài, ngoại lai'. Định nghĩa học thuật: Belonging to or forming the outer surface or structure; coming from outside.."
  },
  "facilitate": {
    "synonyms": [
      "ease",
      "expedite",
      "promote",
      "enable"
    ],
    "antonyms": [
      "hinder",
      "impede",
      "obstruct",
      "inhibit"
    ],
    "synonymsVi": [
      "tạo điều kiện",
      "thúc đẩy nhanh",
      "tạo thuận lợi",
      "kích hoạt"
    ],
    "antonymsVi": [
      "gây cản trở",
      "ngăn chặn",
      "làm tắc nghẽn",
      "kìm hãm"
    ],
    "explanation": "Facilitate là làm cho dễ dàng hơn; đối lập là impede / hinder."
  },
  "fundamental": {
    "synonyms": [
      "essential",
      "basic",
      "cardinal",
      "underlying"
    ],
    "antonyms": [
      "superficial",
      "peripheral",
      "incidental",
      "secondary"
    ],
    "synonymsVi": [
      "căn bản",
      "cốt lõi",
      "thiết yếu",
      "nền tảng"
    ],
    "antonymsVi": [
      "hời hợt",
      "ngoại vi ngoài lề",
      "phụ tùy tiện",
      "thứ yếu"
    ],
    "explanation": "Fundamental là nền móng cốt lõi; đối lập là superficial."
  },
  "generate": {
    "synonyms": [
      "produce",
      "create",
      "engender",
      "yield"
    ],
    "antonyms": [
      "destroy",
      "annihilate",
      "stifle",
      "extinguish"
    ],
    "synonymsVi": [
      "sản sinh",
      "tạo ra",
      "đem lại",
      "phát sinh"
    ],
    "antonymsVi": [
      "tiêu diệt",
      "dập tắt",
      "bóp nghẹt",
      "triệt tiêu"
    ],
    "explanation": "Generate là phát sinh hoặc tạo ra; đối lập là extinguish / destroy."
  },
  "generation": {
    "synonyms": [
      "people",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'generation' (noun) mang nghĩa 'Thế hệ; sự phát điện / tạo ra'. Định nghĩa học thuật: All of the people born and living at about the same time; the production of something.."
  },
  "image": {
    "synonyms": [
      "representation",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'image' (noun / verb) mang nghĩa 'Hình ảnh, hình tượng, ấn tượng'. Định nghĩa học thuật: A representation of the external form of a person or thing in art; a general impression.."
  },
  "liberal": {
    "synonyms": [
      "willing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'liberal' (adj / noun) mang nghĩa 'Tự do, phóng khoáng, rộng rãi'. Định nghĩa học thuật: Willing to respect or accept behaviour or opinions different from one\\."
  },
  "license": {
    "synonyms": [
      "permit",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'license' (noun / verb) mang nghĩa 'Giấy phép; cấp phép chính thức'. Định nghĩa học thuật: A permit from an authority to own or use something, do a particular business, or carry on a trade.."
  },
  "logic": {
    "synonyms": [
      "reasoning",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'logic' (noun) mang nghĩa 'Logic, tính hợp lý, lập luận chặt chẽ'. Định nghĩa học thuật: Reasoning conducted or assessed according to strict principles of validity.."
  },
  "margin": {
    "synonyms": [
      "edge",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'margin' (noun) mang nghĩa 'Biên độ, lợi nhuận biên; lề trang'. Định nghĩa học thuật: The edge or border of something; an amount by which a thing is won or falls short; profit margin.."
  },
  "medical": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'medical' (adj / noun) mang nghĩa 'Thuộc về y tế, y học'. Định nghĩa học thuật: Relating to the science or practice of medicine.."
  },
  "mental": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'mental' (adj) mang nghĩa 'Thuộc về tâm thần, trí óc'. Định nghĩa học thuật: Relating to the mind; involving the process of thinking.."
  },
  "modify": {
    "synonyms": [
      "alter",
      "adapt",
      "adjust",
      "revise"
    ],
    "antonyms": [
      "maintain",
      "preserve",
      "leave unchanged",
      "retain"
    ],
    "synonymsVi": [
      "điều chỉnh",
      "sửa đổi",
      "thích nghi",
      "tu chính"
    ],
    "antonymsVi": [
      "duy trì nguyên vẹn",
      "bảo tồn",
      "giữ nguyên",
      "bảo lưu"
    ],
    "explanation": "Modify là sửa đổi nhẹ để thích hợp hơn; đối lập là maintain."
  },
  "monitor": {
    "synonyms": [
      "observe",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'monitor' (verb / noun) mang nghĩa 'Giám sát, theo dõi; màn hình'. Định nghĩa học thuật: Observe and check the progress or quality of something over a period of time.."
  },
  "network": {
    "synonyms": [
      "arrangement",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'network' (noun / verb) mang nghĩa 'Mạng lưới, hệ thống kết nối; tạo mối quan hệ'. Định nghĩa học thuật: An arrangement of intersecting horizontal and vertical lines; a group of interconnected people or things.."
  },
  "notion": {
    "synonyms": [
      "conception",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'notion' (noun) mang nghĩa 'Khái niệm, ý niệm, quan niệm'. Định nghĩa học thuật: A conception of or belief about something.."
  },
  "objective": {
    "synonyms": [
      "goal",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'objective' (noun / adj) mang nghĩa 'Mục tiêu; khách quan'. Định nghĩa học thuật: A goal or purpose; not influenced by personal feelings or opinions.."
  },
  "orient": {
    "synonyms": [
      "align",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'orient' (verb) mang nghĩa 'Định hướng, thích ứng với hoàn cảnh'. Định nghĩa học thuật: Align or position something relative to the points of a compass or other specified positions.."
  },
  "perspective": {
    "synonyms": [
      "particular",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'perspective' (noun) mang nghĩa 'Góc nhìn, quan điểm, viễn cảnh'. Định nghĩa học thuật: A particular attitude toward or way of regarding something; a point of view.."
  },
  "precise": {
    "synonyms": [
      "accurate",
      "exact",
      "meticulous",
      "rigorous"
    ],
    "antonyms": [
      "imprecise",
      "inaccurate",
      "vague",
      "approximate"
    ],
    "synonymsVi": [
      "chính xác tuyệt đối",
      "chuẩn xác",
      "tỉ mỉ",
      "nghiêm ngặt"
    ],
    "antonymsVi": [
      "không chính xác",
      "sai lệch",
      "mơ hồ",
      "ước chừng"
    ],
    "explanation": "Precise là chính xác tuyệt đối; đối lập là imprecise."
  },
  "prime": {
    "synonyms": [
      "first",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'prime' (adj / noun) mang nghĩa 'Chủ yếu, thượng hạng, đắc địa'. Định nghĩa học thuật: Of first importance; main; the time of greatest strength or success.."
  },
  "psychology": {
    "synonyms": [
      "scientific",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'psychology' (noun) mang nghĩa 'Tâm lý học, tâm lý'. Định nghĩa học thuật: The scientific study of the human mind and its functions, especially affecting behaviour.."
  },
  "pursue": {
    "synonyms": [
      "follow",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'pursue' (verb) mang nghĩa 'Theo đuổi mục tiêu, đeo đuổi'. Định nghĩa học thuật: Follow or chase someone or something; continue or proceed along a path or inquiry.."
  },
  "ratio": {
    "synonyms": [
      "quantitative",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'ratio' (noun) mang nghĩa 'Tỷ lệ, tỷ số so sánh'. Định nghĩa học thuật: The quantitative relation between two amounts showing the number of times one contains the other.."
  },
  "reject": {
    "synonyms": [
      "dismiss",
      "decline",
      "rebuff",
      "spurn"
    ],
    "antonyms": [
      "accept",
      "embrace",
      "approve",
      "adopt"
    ],
    "synonymsVi": [
      "bác bỏ",
      "từ chối",
      "khước từ",
      "hắt hủi"
    ],
    "antonymsVi": [
      "chấp nhận",
      "đón nhận",
      "phê chuẩn",
      "áp dụng"
    ],
    "explanation": "Reject là từ chối hoặc bác bỏ; đối lập là accept."
  },
  "revenue": {
    "synonyms": [
      "income",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'revenue' (noun) mang nghĩa 'Doanh thu, lợi tức nhà nước'. Định nghĩa học thuật: Income, especially when of a company or organization and of a substantial nature; tax receipts.."
  },
  "stable": {
    "synonyms": [
      "likely",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'stable' (adj / noun) mang nghĩa 'Ổn định, kiên định; chuồng ngựa'. Định nghĩa học thuật: Not likely to change or fail; firmly established.."
  },
  "style": {
    "synonyms": [
      "manner",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'style' (noun / verb) mang nghĩa 'Phong cách, lối diễn đạt'. Định nghĩa học thuật: A manner of doing something; a distinctive appearance, typically determined by principles of design.."
  },
  "substitute": {
    "synonyms": [
      "person",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'substitute' (noun / verb) mang nghĩa 'Vật thay thế; thay thế cho'. Định nghĩa học thuật: A person or thing acting or serving in place of another; use in place of.."
  },
  "sustain": {
    "synonyms": [
      "strengthen",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'sustain' (verb) mang nghĩa 'Duy trì, chống đỡ, chịu đựng'. Định nghĩa học thuật: Strengthen or support physically or mentally; cause to continue for an extended period.."
  },
  "symbol": {
    "synonyms": [
      "mark",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'symbol' (noun) mang nghĩa 'Biểu tượng, ký hiệu'. Định nghĩa học thuật: A mark or character used as a conventional representation of an object, function, or process.."
  },
  "target": {
    "synonyms": [
      "person",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'target' (noun / verb) mang nghĩa 'Mục tiêu nhắm tới; nhắm mục tiêu'. Định nghĩa học thuật: A person, object, or place selected as the aim of an attack; an objective or result towards which efforts are directed.."
  },
  "transit": {
    "synonyms": [
      "carrying",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'transit' (noun / verb) mang nghĩa 'Sự vận chuyển, quá cảnh; đi qua'. Định nghĩa học thuật: The carrying of people, goods, or materials from one place to another.."
  },
  "trend": {
    "synonyms": [
      "general",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'trend' (noun / verb) mang nghĩa 'Xu hướng, chiều hướng phát triển'. Định nghĩa học thuật: A general direction in which something is developing or changing.."
  },
  "version": {
    "synonyms": [
      "particular",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'version' (noun) mang nghĩa 'Phiên bản, bản dịch, góc nhìn'. Định nghĩa học thuật: A particular form of something differing in certain respects from an earlier form or other forms.."
  },
  "welfare": {
    "synonyms": [
      "health",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'welfare' (noun) mang nghĩa 'Phúc lợi, sự an sinh xã hội'. Định nghĩa học thuật: The health, happiness, and fortunes of a person or group; social effort designed to promote basic well-being.."
  },
  "whereas": {
    "synonyms": [
      "contrast",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'whereas' (conj) mang nghĩa 'Trong khi đó, ngược lại (chỉ sự đối lập)'. Định nghĩa học thuật: In contrast or comparison with the fact that; while on the contrary.."
  },
  "abstract": {
    "synonyms": [
      "existing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'abstract' (adj / noun) mang nghĩa 'Trừu tượng; bài tóm tắt luận văn, đề tài'. Định nghĩa học thuật: Existing in thought or as an idea but not having a physical existence; a summary of the contents of a book or article.."
  },
  "accurate": {
    "synonyms": [
      "correct",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'accurate' (adj) mang nghĩa 'Chính xác, chuẩn xác, đúng đắn'. Định nghĩa học thuật: Correct in all details; exact and free from error.."
  },
  "acknowledge": {
    "synonyms": [
      "accept",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'acknowledge' (verb) mang nghĩa 'Thừa nhận, công nhận; cảm tạ, xác nhận'. Định nghĩa học thuật: Accept or admit the existence or truth of something; recognize the importance or quality of.."
  },
  "aggregate": {
    "synonyms": [
      "whole",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'aggregate' (noun / adj / verb) mang nghĩa 'Tổng hợp, gộp lại; tổng số, khối tập hợp'. Định nghĩa học thuật: A whole formed by combining several separate elements; total or combined.."
  },
  "allocate": {
    "synonyms": [
      "distribute",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'allocate' (verb) mang nghĩa 'Phân bổ, chỉ định (ngân sách, nguồn lực)'. Định nghĩa học thuật: Distribute resources or duties for a particular purpose.."
  },
  "assign": {
    "synonyms": [
      "designate",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'assign' (verb) mang nghĩa 'Phân công, giao phó, chỉ định'. Định nghĩa học thuật: Designate or set apart someone or something for a specific duty, purpose, or role.."
  },
  "attach": {
    "synonyms": [
      "join",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'attach' (verb) mang nghĩa 'Đính kèm, gắn kết, coi trọng'. Định nghĩa học thuật: Join or fasten something to something else; attribute importance or value to.."
  },
  "author": {
    "synonyms": [
      "writer",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'author' (noun / verb) mang nghĩa 'Tác giả; sáng tác, chủ trì viết'. Định nghĩa học thuật: A writer of a book, article, or document; an originator of an idea or plan.."
  },
  "bond": {
    "synonyms": [
      "relationship",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'bond' (noun / verb) mang nghĩa 'Mối liên kết, trái phiếu, ràng buộc'. Định nghĩa học thuật: A relationship between people or things based on shared feelings or interests; a certificate of debt issued by a government or corporation.."
  },
  "brief": {
    "synonyms": [
      "short",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'brief' (adj / noun / verb) mang nghĩa 'Ngắn gọn, vắn tắt; bản tóm tắt chỉ dẫn'. Định nghĩa học thuật: Of short duration; concise in use of words; instruct or inform someone thoroughly in advance.."
  },
  "capable": {
    "synonyms": [
      "having",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'capable' (adj) mang nghĩa 'Có năng lực, có khả năng'. Định nghĩa học thuật: Having the ability, fitness, or quality necessary to do or achieve a specified thing.."
  },
  "cite": {
    "synonyms": [
      "refer",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'cite' (verb) mang nghĩa 'Trích dẫn, dẫn chứng'. Định nghĩa học thuật: Refer to a passage, book, or author as evidence for or justification of an argument.."
  },
  "cooperate": {
    "synonyms": [
      "jointly",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'cooperate' (verb) mang nghĩa 'Hợp tác, chung sức, phối hợp'. Định nghĩa học thuật: Act jointly; work toward the same end or purpose.."
  },
  "discriminate": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'discriminate' (verb) mang nghĩa 'Phân biệt đối xử; phân biệt rõ nét'. Định nghĩa học thuật: Make an unjust or prejudicial distinction in the treatment of different categories of people; recognize a distinction.."
  },
  "display": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'display' (verb / noun) mang nghĩa 'Trưng bày, hiển thị, biểu lộ'. Định nghĩa học thuật: Make a prominent exhibition of something in a place where it can be easily seen; show a quality by behavior.."
  },
  "diverse": {
    "synonyms": [
      "showing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'diverse' (adj) mang nghĩa 'Đa dạng, phong phú, gồm nhiều loại khác nhau'. Định nghĩa học thuật: Showing a great deal of variety; very different.."
  },
  "domain": {
    "synonyms": [
      "area",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'domain' (noun) mang nghĩa 'Lĩnh vực, phạm vi, miền kiến thức'. Định nghĩa học thuật: An area of territory owned or controlled by a ruler; a specified sphere of activity or knowledge.."
  },
  "edition": {
    "synonyms": [
      "particular",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'edition' (noun) mang nghĩa 'Ấn bản, phiên bản xuất bản'. Định nghĩa học thuật: A particular form or version of a published text; the total number of copies issued at one time.."
  },
  "enhance": {
    "synonyms": [
      "intensify",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'enhance' (verb) mang nghĩa 'Nâng cao, tăng cường, cải thiện'. Định nghĩa học thuật: Intensify, increase, or further improve the quality, value, or extent of.."
  },
  "estate": {
    "synonyms": [
      "extensive",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'estate' (noun) mang nghĩa 'Bất động sản; di sản thừa kế; điền trang'. Định nghĩa học thuật: An extensive area of land in the country, usually with a large house; all the money and property owned by a person, especially at death.."
  },
  "exceed": {
    "synonyms": [
      "greater",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'exceed' (verb) mang nghĩa 'Vượt quá, vượt trội hơn'. Định nghĩa học thuật: Be greater in number or size than; go beyond the limits of.."
  },
  "expert": {
    "synonyms": [
      "person",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'expert' (noun / adj) mang nghĩa 'Chuyên gia; chuyên môn, thành thạo'. Định nghĩa học thuật: A person who has a comprehensive and authoritative knowledge of or skill in a particular area; very knowledgeable.."
  },
  "explicit": {
    "synonyms": [
      "clear",
      "direct",
      "unequivocal",
      "unambiguous"
    ],
    "antonyms": [
      "implicit",
      "vague",
      "ambiguous",
      "obscure"
    ],
    "synonymsVi": [
      "rõ ràng",
      "trực tiếp",
      "không thể hiểu nhầm",
      "minh bạch"
    ],
    "antonymsVi": [
      "ngầm hiểu",
      "mơ hồ",
      "đa nghĩa nhập nhằng",
      "lu mờ"
    ],
    "explanation": "Explicit là rõ ràng hiển lộ; đối lập là implicit (ẩn ý ngầm hiểu)."
  },
  "federal": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'federal' (adj) mang nghĩa 'Thuộc liên bang'. Định nghĩa học thuật: Relating to a system of government in which several states form a unity but remain independent in internal affairs.."
  },
  "fee": {
    "synonyms": [
      "payment",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'fee' (noun) mang nghĩa 'Lệ phí, học phí, thù lao'. Định nghĩa học thuật: A payment made to a professional person or to a professional or public body in exchange for advice or services.."
  },
  "flexible": {
    "synonyms": [
      "capable",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'flexible' (adj) mang nghĩa 'Linh hoạt, uyển chuyển, dễ thích nghi'. Định nghĩa học thuật: Capable of bending easily without breaking; ready and able to change so as to adapt to different circumstances.."
  },
  "furthermore": {
    "synonyms": [
      "substantially",
      "markedly",
      "specifically"
    ],
    "antonyms": [
      "scarcely",
      "barely",
      "incompletely"
    ],
    "synonymsVi": [
      "một cách đáng kể",
      "rõ rệt",
      "cụ thể"
    ],
    "antonymsVi": [
      "hầu như không",
      "hiếm khi",
      "chưa trọn vẹn"
    ],
    "explanation": "'furthermore' (adv) mang nghĩa 'Hơn nữa, vả lại, thêm vào đó'. Định nghĩa học thuật: In addition; besides (used to introduce a fresh consideration in an argument).."
  },
  "gender": {
    "synonyms": [
      "state",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'gender' (noun) mang nghĩa 'Giới tính (theo khía cạnh xã hội, văn hóa)'. Định nghĩa học thuật: The state of being male or female, typically with reference to social and cultural differences rather than biological ones.."
  },
  "ignore": {
    "synonyms": [
      "refuse",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'ignore' (verb) mang nghĩa 'Bỏ qua, phớt lờ, không đếm xỉa'. Định nghĩa học thuật: Refuse to take notice of or acknowledge; disregard intentionally.."
  },
  "incentive": {
    "synonyms": [
      "thing",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'incentive' (noun) mang nghĩa 'Sự khuyến khích, động cơ thúc đẩy, ưu đãi'. Định nghĩa học thuật: A thing that motivates or encourages someone to do something; a payment or concession to stimulate greater output or investment.."
  },
  "incidence": {
    "synonyms": [
      "occurrence",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'incidence' (noun) mang nghĩa 'Tỷ lệ mắc phải, tần suất xảy ra'. Định nghĩa học thuật: The occurrence, rate, or frequency of a disease, crime, or something else undesirable.."
  },
  "incorporate": {
    "synonyms": [
      "take",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'incorporate' (verb) mang nghĩa 'Kết hợp, sáp nhập, đưa vào'. Định nghĩa học thuật: Take in or contain something as part of a whole; include.."
  },
  "index": {
    "synonyms": [
      "indicator",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'index' (noun / verb) mang nghĩa 'Chỉ số, mục lục; chỉ dẫn'. Định nghĩa học thuật: An indicator, sign, or measure of something; an alphabetical list of names, subjects, etc. with reference to the pages on which they are mentioned.."
  },
  "inhibit": {
    "synonyms": [
      "hinder",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'inhibit' (verb) mang nghĩa 'Ức chế, ngăn chặn, cản trở'. Định nghĩa học thuật: Hinder, restrain, or prevent an action or process; make someone feel self-conscious and unable to act naturally.."
  },
  "initiate": {
    "synonyms": [
      "cause",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'initiate' (verb) mang nghĩa 'Khởi xướng, bắt đầu, đề xướng'. Định nghĩa học thuật: Cause a process or action to begin; introduce someone to a skill, subject, or group.."
  },
  "input": {
    "synonyms": [
      "what",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'input' (noun / verb) mang nghĩa 'Đầu vào, ý kiến đóng góp, dữ liệu nạp vào'. Định nghĩa học thuật: What is put in, taken in, or operated on by any process or system; contribution of information or ideas.."
  },
  "instruct": {
    "synonyms": [
      "direct",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'instruct' (verb) mang nghĩa 'Hướng dẫn, chỉ dẫn, dạy bảo'. Định nghĩa học thuật: Direct or command someone to do something; teach someone a subject or skill.."
  },
  "intelligence": {
    "synonyms": [
      "ability",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'intelligence' (noun) mang nghĩa 'Trí thông minh; tin tức tình báo'. Định nghĩa học thuật: The ability to acquire and apply knowledge and skills; the collection of information of military or political value.."
  },
  "interval": {
    "synonyms": [
      "intervening",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'interval' (noun) mang nghĩa 'Khoảng thời gian, cự ly, quãng nghỉ'. Định nghĩa học thuật: An intervening time or space; a pause or break in activity.."
  },
  "lecture": {
    "synonyms": [
      "educational",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'lecture' (noun / verb) mang nghĩa 'Bài giảng, buổi thuyết trình; giảng giải'. Định nghĩa học thuật: An educational talk to an audience, especially to students in a university; deliver such a talk.."
  },
  "migrate": {
    "synonyms": [
      "move",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'migrate' (verb) mang nghĩa 'Di cư, chuyển dời (nơi sống, dữ liệu)'. Định nghĩa học thuật: Move from one area or country to settle in another, often in search of work or better living conditions.."
  },
  "minimum": {
    "synonyms": [
      "least",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'minimum' (noun / adj) mang nghĩa 'Tối thiểu, mức thấp nhất'. Định nghĩa học thuật: The least or smallest amount or quantity possible, attainable, or required.."
  },
  "ministry": {
    "synonyms": [
      "government",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'ministry' (noun) mang nghĩa 'Bộ (cơ quan chính phủ)'. Định nghĩa học thuật: A government department headed by a minister of state.."
  },
  "motivate": {
    "synonyms": [
      "provide",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'motivate' (verb) mang nghĩa 'Thúc đẩy, tạo động lực'. Định nghĩa học thuật: Provide someone with a reason or stimulus for doing something; stimulate interest and enthusiasm.."
  },
  "neutral": {
    "synonyms": [
      "supporting",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'neutral' (adj) mang nghĩa 'Trung lập, trung tính, không thiên vị'. Định nghĩa học thuật: Not supporting or helping either side in a conflict or disagreement; impartial.."
  },
  "nevertheless": {
    "synonyms": [
      "substantially",
      "markedly",
      "specifically"
    ],
    "antonyms": [
      "scarcely",
      "barely",
      "incompletely"
    ],
    "synonymsVi": [
      "một cách đáng kể",
      "rõ rệt",
      "cụ thể"
    ],
    "antonymsVi": [
      "hầu như không",
      "hiếm khi",
      "chưa trọn vẹn"
    ],
    "explanation": "'nevertheless' (adv) mang nghĩa 'Tuy nhiên, dù sao đi nữa, tuy thế mà'. Định nghĩa học thuật: In spite of that; notwithstanding; all the same.."
  },
  "overseas": {
    "synonyms": [
      "foreign",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'overseas' (adv / adj) mang nghĩa 'Ở hải ngoại, nước ngoài, qua biển'. Định nghĩa học thuật: In or to a foreign country, especially one across the sea.."
  },
  "precede": {
    "synonyms": [
      "come",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'precede' (verb) mang nghĩa 'Đi trước, xảy ra trước, tiền đề'. Định nghĩa học thuật: Come before something in time, order, or position.."
  },
  "presume": {
    "synonyms": [
      "suppose",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'presume' (verb) mang nghĩa 'Cho là, giả định, phỏng đoán'. Định nghĩa học thuật: Suppose that something is the case on the basis of probability; take for granted that something exists or is true.."
  },
  "rational": {
    "synonyms": [
      "based",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'rational' (adj) mang nghĩa 'Hợp lý, có lý trí, duy lý'. Định nghĩa học thuật: Based on or in accordance with reason or logic.."
  },
  "recover": {
    "synonyms": [
      "return",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'recover' (verb) mang nghĩa 'Hồi phục, lấy lại, thu hồi'. Định nghĩa học thuật: Return to a normal state of health, mind, or strength; find or regain possession of something lost or stolen.."
  },
  "reveal": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'reveal' (verb) mang nghĩa 'Tiết lộ, hé lộ, bộc lộ'. Định nghĩa học thuật: Make previously unknown or secret information known to others; allow something to be seen.."
  },
  "scope": {
    "synonyms": [
      "extent",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'scope' (noun) mang nghĩa 'Phạm vi, quy mô, cơ hội'. Định nghĩa học thuật: The extent of the area or subject matter that something deals with or to which it is relevant.."
  },
  "subsidy": {
    "synonyms": [
      "money",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'subsidy' (noun) mang nghĩa 'Tiền trợ cấp, bao cấp, hỗ trợ tài chính'. Định nghĩa học thuật: A sum of money granted by the state or a public body to help an industry or business keep the price of a commodity or service low.."
  },
  "tape": {
    "synonyms": [
      "narrow",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'tape' (noun / verb) mang nghĩa 'Băng dính; băng ghi âm, băng hình'. Định nghĩa học thuật: A narrow strip of material, typically used to hold or fasten something, or magnetic material on which sound or images are recorded.."
  },
  "trace": {
    "synonyms": [
      "find",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'trace' (verb / noun) mang nghĩa 'Truy vết, tìm nguồn gốc; dấu vết, lượng vết'. Định nghĩa học thuật: Find or discover by investigation; follow the course or trail of; a very small quantity of something.."
  },
  "transform": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'transform' (verb) mang nghĩa 'Biến đổi, chuyển đổi, cải cách hoàn toàn'. Định nghĩa học thuật: Make a marked change in the form, nature, or appearance of.."
  },
  "transport": {
    "synonyms": [
      "take",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'transport' (noun / verb) mang nghĩa 'Giao thông vận tải, vận chuyển'. Định nghĩa học thuật: Take or carry people or goods from one place to another by means of a vehicle, aircraft, or ship.."
  },
  "underlie": {
    "synonyms": [
      "significant",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'underlie' (verb) mang nghĩa 'Làm nền tảng cho, là nguyên nhân sâu xa của'. Định nghĩa học thuật: Be a significant cause or basis of something even if not explicitly stated; situated under.."
  },
  "utilize": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'utilize' (verb) mang nghĩa 'Tận dụng, sử dụng hiệu quả'. Định nghĩa học thuật: Make practical and effective use of.."
  },
  "adapt": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'adapt' (verb) mang nghĩa 'Thích nghi, biến đổi cho phù hợp; phỏng theo'. Định nghĩa học thuật: Make something suitable for a new use or purpose; modify; become adjusted to new conditions.."
  },
  "adult": {
    "synonyms": [
      "person",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'adult' (noun / adj) mang nghĩa 'Người trưởng thành; phát triển đầy đủ'. Định nghĩa học thuật: A person who is fully grown or developed; mature.."
  },
  "advocate": {
    "synonyms": [
      "publicly",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'advocate' (verb / noun) mang nghĩa 'Biện hộ, ủng hộ nhiệt thành; người chủ trương'. Định nghĩa học thuật: Publicly recommend or support; a person who publicly supports or recommends a particular cause or policy.."
  },
  "aid": {
    "synonyms": [
      "help",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'aid' (noun / verb) mang nghĩa 'Sự viện trợ, hỗ trợ; giúp đỡ, cứu trợ'. Định nghĩa học thuật: Help, typically of a practical nature; financial or material help given to a country or area in need.."
  },
  "channel": {
    "synonyms": [
      "band",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'channel' (noun / verb) mang nghĩa 'Kênh, đường dẫn; hướng dòng chảy, chuyển nguồn lực'. Định nghĩa học thuật: A band of frequencies used in radio or television transmission; a medium for communication; direct towards a particular end or object.."
  },
  "chemical": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'chemical' (adj / noun) mang nghĩa 'Hóa chất; thuộc về hóa học'. Định nghĩa học thuật: Relating to chemistry or the interactions of substances as studied in chemistry; a compound or substance.."
  },
  "classic": {
    "synonyms": [
      "judged",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'classic' (adj / noun) mang nghĩa 'Kinh điển, tiêu biểu, chuẩn mực'. Định nghĩa học thuật: Judged over a period of time to be of the highest quality and outstanding of its kind; typical or exemplary.."
  },
  "guarantee": {
    "synonyms": [
      "provide",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'guarantee' (verb / noun) mang nghĩa 'Bảo đảm, cam kết; giấy bảo hành'. Định nghĩa học thuật: Provide a formal assurance, especially that certain conditions will be fulfilled relating to a product, service, or outcome.."
  },
  "hierarchy": {
    "synonyms": [
      "system",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'hierarchy' (noun) mang nghĩa 'Hệ thống cấp bậc, trật tự thứ bậc'. Định nghĩa học thuật: A system in which members of an organization or society are ranked according to relative status or authority.."
  },
  "identical": {
    "synonyms": [
      "similar",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'identical' (adj) mang nghĩa 'Y hệt, giống hệt nhau từng chi tiết'. Định nghĩa học thuật: Similar in every detail; exactly alike.."
  },
  "ideology": {
    "synonyms": [
      "system",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'ideology' (noun) mang nghĩa 'Hệ tư tưởng, ý thức hệ'. Định nghĩa học thuật: A system of ideas and ideals, especially one which forms the basis of economic or political theory and policy.."
  },
  "infer": {
    "synonyms": [
      "deduce",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'infer' (verb) mang nghĩa 'Suy luận, luận ra từ bằng chứng'. Định nghĩa học thuật: Deduce or conclude information from evidence and reasoning rather than from explicit statements.."
  },
  "innovate": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'innovate' (verb) mang nghĩa 'Đổi mới, cách tân, sáng tạo cái mới'. Định nghĩa học thuật: Make changes in something established, especially by introducing new methods, ideas, or products.."
  },
  "insert": {
    "synonyms": [
      "place",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'insert' (verb / noun) mang nghĩa 'Chèn vào, lồng ghép, đưa vào trong'. Định nghĩa học thuật: Place, fit, or push something into something else.."
  },
  "intervene": {
    "synonyms": [
      "come",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'intervene' (verb) mang nghĩa 'Can thiệp, can dự vào để ngăn chặn hoặc thay đổi'. Định nghĩa học thuật: Come between so as to prevent or alter a result or course of events.."
  },
  "comprehensive": {
    "synonyms": [
      "complete",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'comprehensive' (adj) mang nghĩa 'Toàn diện, bao quát mọi mặt'. Định nghĩa học thuật: Complete; including all or nearly all elements or aspects of something.."
  },
  "comprise": {
    "synonyms": [
      "consist",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'comprise' (verb) mang nghĩa 'Bao gồm, gồm có, cấu thành nên'. Định nghĩa học thuật: Consist of; be made up of; make up; constitute.."
  },
  "confirm": {
    "synonyms": [
      "establish",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'confirm' (verb) mang nghĩa 'Xác nhận, chứng thực, củng cố thêm'. Định nghĩa học thuật: Establish the truth or correctness of something previously believed, suspected, or feared.."
  },
  "contrary": {
    "synonyms": [
      "opposite",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'contrary' (adj / noun) mang nghĩa 'Trái ngược, đối lập; điều ngược lại'. Định nghĩa học thuật: Opposite in nature, direction, or meaning; perversely inclined to disagree or do the opposite.."
  },
  "convert": {
    "synonyms": [
      "change",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'convert' (verb / noun) mang nghĩa 'Chuyển đổi, biến đổi thành dạng khác; cải đạo'. Định nghĩa học thuật: Change the form, character, or function of something; change one\\."
  },
  "couple": {
    "synonyms": [
      "individuals",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'couple' (noun / verb) mang nghĩa 'Một cặp, một vài; ghép nối, liên kết với'. Định nghĩa học thuật: Two individuals or items considered together; link or combine something with something else.."
  },
  "decade": {
    "synonyms": [
      "period",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'decade' (noun) mang nghĩa 'Thập kỷ, khoảng thời gian mười năm'. Định nghĩa học thuật: A period of ten years.."
  },
  "isolate": {
    "synonyms": [
      "cause",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'isolate' (verb / noun) mang nghĩa 'Cô lập, cách ly, tách riêng rẽ'. Định nghĩa học thuật: Cause a person or place to be or remain alone or apart from others; identify something separately.."
  },
  "media": {
    "synonyms": [
      "main",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'media' (noun (plural)) mang nghĩa 'Truyền thông đại chúng, phương tiện thông tin'. Định nghĩa học thuật: The main means of mass communication (broadcasting, publishing, and the internet) regarded collectively.."
  },
  "mode": {
    "synonyms": [
      "manner",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'mode' (noun) mang nghĩa 'Phương thức, chế độ hoạt động, cách thức'. Định nghĩa học thuật: A way or manner in which something occurs or is experienced, expressed, or done; an operational status.."
  },
  "paradigm": {
    "synonyms": [
      "typical",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'paradigm' (noun) mang nghĩa 'Hệ hình tư duy, khuôn mẫu mẫu mực'. Định nghĩa học thuật: A typical example or pattern of something; a model or overarching theoretical framework.."
  },
  "phenomenon": {
    "synonyms": [
      "fact",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'phenomenon' (noun (plural: phenomena)) mang nghĩa 'Hiện tượng kỳ thú, sự việc quan sát được'. Định nghĩa học thuật: A fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question.."
  },
  "priority": {
    "synonyms": [
      "fact",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'priority' (noun) mang nghĩa 'Sự ưu tiên, thứ tự ưu tiên hàng đầu'. Định nghĩa học thuật: The fact or condition of being regarded or treated as more important than others.."
  },
  "prohibit": {
    "synonyms": [
      "forbid",
      "ban",
      "disallow",
      "veto"
    ],
    "antonyms": [
      "permit",
      "allow",
      "authorize",
      "license"
    ],
    "synonymsVi": [
      "cấm đoán",
      "ngăn cấm",
      "không cho phép",
      "phủ quyết"
    ],
    "antonymsVi": [
      "cho phép",
      "chấp thuận",
      "ủy quyền",
      "cấp phép"
    ],
    "explanation": "Prohibit là cấm theo luật; đối lập hoàn toàn là permit / allow."
  },
  "definite": {
    "synonyms": [
      "clearly",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'definite' (adj) mang nghĩa 'Rõ ràng, dứt khoát, xác định chắc chắn'. Định nghĩa học thuật: Clearly stated or decided; not vague or doubtful; having distinct limits.."
  },
  "deny": {
    "synonyms": [
      "state",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'deny' (verb) mang nghĩa 'Phủ nhận, từ chối, khước từ quyền lợi'. Định nghĩa học thuật: State that one refuses to admit the truth or existence of; refuse to give or grant something requested.."
  },
  "differentiate": {
    "synonyms": [
      "recognize",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'differentiate' (verb) mang nghĩa 'Phân biệt, làm cho khác biệt, nhận ra sự khác nhau'. Định nghĩa học thuật: Recognize or ascertain what makes someone or something different; make or become different in the process of growth or development.."
  },
  "dispose": {
    "synonyms": [
      "throwing",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'dispose' (verb) mang nghĩa 'Vứt bỏ, xử lý (rác thải); sắp đặt; có khuynh hướng'. Định nghĩa học thuật: Get rid of by throwing away or giving or selling to someone else; arrange in a particular position.."
  },
  "dynamic": {
    "synonyms": [
      "characterized",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'dynamic' (adj / noun) mang nghĩa 'Năng động, biến đổi liên tục; động lực'. Định nghĩa học thuật: Characterized by constant change, activity, or progress; a force that stimulates change or progress within a system.."
  },
  "eliminate": {
    "synonyms": [
      "completely",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'eliminate' (verb) mang nghĩa 'Loại bỏ, bài trừ, triệt tiêu hoàn toàn'. Định nghĩa học thuật: Completely remove or get rid of something undesirable; exclude from consideration.."
  },
  "empirical": {
    "synonyms": [
      "based",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'empirical' (adj) mang nghĩa 'Dựa trên thực nghiệm, kinh nghiệm thực tế'. Định nghĩa học thuật: Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.."
  },
  "quote": {
    "synonyms": [
      "repeat",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'quote' (verb / noun) mang nghĩa 'Trích dẫn; báo giá; lời trích'. Định nghĩa học thuật: Repeat or copy out a group of words from a text or speech, typically with an acknowledgment of the source; give someone an estimated price.."
  },
  "release": {
    "synonyms": [
      "allow",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'release' (verb / noun) mang nghĩa 'Phát hành, phóng thích, giải phóng, thải ra'. Định nghĩa học thuật: Allow or enable to escape from confinement; publish or make available for general viewing or use.."
  },
  "reverse": {
    "synonyms": [
      "move",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'reverse' (verb / noun / adj) mang nghĩa 'Đảo ngược, lật ngược; điều ngược lại, mặt trái'. Định nghĩa học thuật: Move backward; turn the other way around; change to the opposite direction, position, or course of action.."
  },
  "simulate": {
    "synonyms": [
      "imitate",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'simulate' (verb) mang nghĩa 'Mô phỏng, giả lập (môi trường, hiện tượng)'. Định nghĩa học thuật: Imitate the appearance or character of; produce a computer model of a system or process.."
  },
  "sole": {
    "synonyms": [
      "only",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'sole' (adj / noun) mang nghĩa 'Duy nhất, độc nhất; đế giày, lòng bàn chân'. Định nghĩa học thuật: One and only; belonging or restricted to one person or group; not shared.."
  },
  "somewhat": {
    "synonyms": [
      "substantially",
      "markedly",
      "specifically"
    ],
    "antonyms": [
      "scarcely",
      "barely",
      "incompletely"
    ],
    "synonymsVi": [
      "một cách đáng kể",
      "rõ rệt",
      "cụ thể"
    ],
    "antonymsVi": [
      "hầu như không",
      "hiếm khi",
      "chưa trọn vẹn"
    ],
    "explanation": "'somewhat' (adv) mang nghĩa 'Phần nào, hơi, có phần nào đó'. Định nghĩa học thuật: To a moderate extent or by a moderate degree; rather; slightly.."
  },
  "submit": {
    "synonyms": [
      "present",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'submit' (verb) mang nghĩa 'Nộp, đệ trình (hồ sơ, bài báo); phục tùng, quy phục'. Định nghĩa học thuật: Present a proposal, application, or other document to a person or body for consideration or judgment; yield to superior force.."
  },
  "successor": {
    "synonyms": [
      "person",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'successor' (noun) mang nghĩa 'Người kế vị, người nối nghiệp, phiên bản kế nhiệm'. Định nghĩa học thuật: A person or thing that succeeds another.."
  },
  "equip": {
    "synonyms": [
      "supply",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'equip' (verb) mang nghĩa 'Trang bị (thiết bị, kiến thức, kỹ năng)'. Định nghĩa học thuật: Supply with the necessary items for a particular purpose; prepare someone mentally or technically for a task.."
  },
  "extract": {
    "synonyms": [
      "remove",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'extract' (verb / noun) mang nghĩa 'Chiết xuất, trích xuất; nhổ ra; đoạn trích'. Định nghĩa học thuật: Remove or take out, especially by effort or force; obtain a substance or information from something.."
  },
  "file": {
    "synonyms": [
      "folder",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'file' (noun / verb) mang nghĩa 'Tệp hồ sơ, tập tin; đệ trình, nộp đơn chính thức'. Định nghĩa học thuật: A folder or box for holding loose papers; a collection of data stored under a single name; submit a legal document or application.."
  },
  "finite": {
    "synonyms": [
      "having",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'finite' (adj) mang nghĩa 'Hữu hạn, có giới hạn xác định'. Định nghĩa học thuật: Having limits or bounds; not infinite.."
  },
  "foundation": {
    "synonyms": [
      "lowest",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'foundation' (noun) mang nghĩa 'Nền tảng, móng nhà; quỹ từ thiện / tổ chức sáng lập'. Định nghĩa học thuật: The lowest load-bearing part of a building; an underlying basis or principle; an institution established with an endowment.."
  },
  "globe": {
    "synonyms": [
      "earth",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'globe' (noun) mang nghĩa 'Quả địa cầu, trái đất, toàn cầu'. Định nghĩa học thuật: The earth; a spherical model of the earth with a map, especially of the surface.."
  },
  "grade": {
    "synonyms": [
      "particular",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'grade' (noun / verb) mang nghĩa 'Cấp bậc, điểm số, hạng chất lượng; phân loại'. Định nghĩa học thuật: A particular level of rank, quality, proficiency, or value; mark or assess a student\\."
  },
  "survive": {
    "synonyms": [
      "continue",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'survive' (verb) mang nghĩa 'Sống sót, tồn tại qua nghịch cảnh'. Định nghĩa học thuật: Continue to live or exist, especially in spite of danger or hardship.."
  },
  "thesis": {
    "synonyms": [
      "statement",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'thesis' (noun (plural: theses)) mang nghĩa 'Luận văn, luận án; luận điểm nghiên cứu'. Định nghĩa học thuật: A statement or theory that is put forward as a premise to be maintained or proved; a long essay or dissertation involving personal research.."
  },
  "topic": {
    "synonyms": [
      "matter",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'topic' (noun) mang nghĩa 'Chủ đề, đề tài thảo luận'. Định nghĩa học thuật: A matter dealt with in a text, discourse, or conversation; a subject.."
  },
  "transmit": {
    "synonyms": [
      "cause",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'transmit' (verb) mang nghĩa 'Truyền phát (tín hiệu), lây truyền (bệnh tật), truyền dẫn'. Định nghĩa học thuật: Cause something to pass on from one place or person to another; broadcast or send out an electrical signal.."
  },
  "ultimate": {
    "synonyms": [
      "being",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'ultimate' (adj / noun) mang nghĩa 'Tối thượng, tối hậu, sau cùng, cơ bản nhất'. Định nghĩa học thuật: Being or happening at the end of a process; final; the best or most extreme example of its kind.."
  },
  "unique": {
    "synonyms": [
      "being",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'unique' (adj) mang nghĩa 'Độc nhất vô nhị, độc đáo, riêng biệt'. Định nghĩa học thuật: Being the only one of its kind; unlike anything else.."
  },
  "visible": {
    "synonyms": [
      "able",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'visible' (adj) mang nghĩa 'Có thể nhìn thấy được, rõ ràng, hữu hình'. Định nghĩa học thuật: Able to be seen; perceptible to the eye; apparent; able to be perceived.."
  },
  "voluntary": {
    "synonyms": [
      "done",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'voluntary' (adj / noun) mang nghĩa 'Tự nguyện, tình nguyện, tự giác'. Định nghĩa học thuật: Done, given, or acting of one\\."
  },
  "abandon": {
    "synonyms": [
      "cease",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'abandon' (verb / noun) mang nghĩa 'Từ bỏ, ruồng bỏ, buông xuôi, bỏ dở'. Định nghĩa học thuật: Cease to support or look after someone; give up completely a practice, course of action, or belief.."
  },
  "accompany": {
    "synonyms": [
      "somewhere",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'accompany' (verb) mang nghĩa 'Đi cùng, đồng hành, đi kèm, hộ tống'. Định nghĩa học thuật: Go somewhere with someone as a companion or escort; occur in association with.."
  },
  "accumulate": {
    "synonyms": [
      "gather",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'accumulate' (verb) mang nghĩa 'Tích lũy, gom góp, dồn lại qua thời gian'. Định nghĩa học thuật: Gather together or acquire an increasing number or quantity of something over time.."
  },
  "ambiguous": {
    "synonyms": [
      "open",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'ambiguous' (adj) mang nghĩa 'Mơ hồ, nhập nhằng, đa nghĩa, không rõ ràng'. Định nghĩa học thuật: Open to more than one interpretation; not having one obvious meaning; unclear or inexact.."
  },
  "append": {
    "synonyms": [
      "something",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'append' (verb) mang nghĩa 'Đính kèm, phụ thêm, gắn vào phần cuối'. Định nghĩa học thuật: Add something to the end of a written document, dataset, or publication.."
  },
  "appreciate": {
    "synonyms": [
      "recognize",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'appreciate' (verb) mang nghĩa 'Đánh giá cao, hiểu rõ giá trị, cảm kích; tăng giá trị'. Định nghĩa học thuật: Recognize the full worth of; understand a situation fully, or increase in monetary value over time.."
  },
  "arbitrary": {
    "synonyms": [
      "based",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'arbitrary' (adj) mang nghĩa 'Tùy tiện, độc đoán, tùy hứng không dựa trên lý lẽ'. Định nghĩa học thuật: Based on random choice or personal whim, rather than any reason or system.."
  },
  "automate": {
    "synonyms": [
      "convert",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'automate' (verb) mang nghĩa 'Tự động hóa bằng máy móc hoặc thuật toán'. Định nghĩa học thuật: Convert a process or facility to largely automatic operation using computer systems and machinery.."
  },
  "bias": {
    "synonyms": [
      "inclination",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'bias' (noun / verb) mang nghĩa 'Thành kiến, định kiến, xu hướng thiên vị; làm sai lệch'. Định nghĩa học thuật: Inclination or prejudice for or against one person or group, especially in a way considered unfair.."
  },
  "chart": {
    "synonyms": [
      "sheet",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'chart' (noun / verb) mang nghĩa 'Biểu đồ, đồ thị; lập biểu đồ, theo dõi diễn biến'. Định nghĩa học thuật: A sheet of information in the form of a table, graph, or diagram; record the progress or development of.."
  },
  "clarify": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'clarify' (verb) mang nghĩa 'Làm rõ, làm sáng tỏ, giải thích minh bạch'. Định nghĩa học thuật: Make a statement or situation less confused and more clearly comprehensible.."
  },
  "commodity": {
    "synonyms": [
      "material",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'commodity' (noun) mang nghĩa 'Hàng hóa, thương phẩm, mặt hàng thương mại'. Định nghĩa học thuật: A raw material or primary agricultural product that can be bought and sold, such as copper or coffee.."
  },
  "complement": {
    "synonyms": [
      "something",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'complement' (verb / noun) mang nghĩa 'Bổ sung, tương hỗ, làm hoàn thiện thêm'. Định nghĩa học thuật: Add to something in a way that enhances or completes it; a thing that contributes extra features.."
  },
  "conform": {
    "synonyms": [
      "comply",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'conform' (verb) mang nghĩa 'Tuân thủ, phù hợp với, theo đúng chuẩn mực'. Định nghĩa học thuật: Comply with rules, standards, or laws; behave according to socially acceptable conventions.."
  },
  "contemporary": {
    "synonyms": [
      "living",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'contemporary' (adj / noun) mang nghĩa 'Đương đại, cùng thời, hiện đại'. Định nghĩa học thuật: Living or occurring at the same time; belonging to or occurring in the present.."
  },
  "contradict": {
    "synonyms": [
      "assert",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'contradict' (verb) mang nghĩa 'Mâu thuẫn với, phản bác, trái ngược lại'. Định nghĩa học thuật: Assert the opposite of a statement made by someone; be in conflict with something.."
  },
  "crucial": {
    "synonyms": [
      "decisive",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'crucial' (adj) mang nghĩa 'Tối quan trọng, có tính quyết định then chốt'. Định nghĩa học thuật: Decisive or critical, especially in the success or failure of something.."
  },
  "currency": {
    "synonyms": [
      "system",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'currency' (noun) mang nghĩa 'Tiền tệ; tính phổ biến, sự thịnh hành được chấp nhận rộng rãi'. Định nghĩa học thuật: A system of money in general use in a particular country; the fact or quality of being generally accepted.."
  },
  "denote": {
    "synonyms": [
      "sign",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'denote' (verb) mang nghĩa 'Biểu thị, chỉ rõ, có nghĩa là, thể hiện dấu hiệu'. Định nghĩa học thuật: Be a sign of; indicate; stand as a name or symbol for.."
  },
  "detect": {
    "synonyms": [
      "discover",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'detect' (verb) mang nghĩa 'Phát hiện, dò tìm, nhận diện ra dấu hiệu'. Định nghĩa học thuật: Discover or identify the presence or existence of something elusive or hidden.."
  },
  "deviate": {
    "synonyms": [
      "depart",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'deviate' (verb) mang nghĩa 'Lệch hướng, chệch chuẩn, đi chệch khỏi quy luật'. Định nghĩa học thuật: Depart from an established course, accepted standard, or customary behavior.."
  },
  "displace": {
    "synonyms": [
      "take",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'displace' (verb) mang nghĩa 'Thay thế, dời chỗ, làm mất chỗ ở, chiếm chỗ'. Định nghĩa học thuật: Take over the place, position, or role of; cause someone or something to move from its proper location.."
  },
  "drama": {
    "synonyms": [
      "play",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'drama' (noun) mang nghĩa 'Kịch nghệ; tình huống kịch tính, sự việc căng thẳng đầy biến động'. Định nghĩa học thuật: A play for theater, radio, or television; an exciting, emotional, or unexpected series of events.."
  },
  "eventual": {
    "synonyms": [
      "occurring",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'eventual' (adj) mang nghĩa 'Cuối cùng, kết cục sẽ xảy ra sau một chuỗi diễn biến'. Định nghĩa học thuật: Occurring at the end of a process or period of time; final outcome.."
  },
  "exhibit": {
    "synonyms": [
      "manifest",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'exhibit' (verb / noun) mang nghĩa 'Trưng bày, biểu lộ, thể hiện ra bên ngoài; vật trưng bày'. Định nghĩa học thuật: Manifest or deliberately display a quality, symptom, or object in a public or clinical context.."
  },
  "exploit": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'exploit' (verb / noun) mang nghĩa 'Khai thác, tận dụng; bóc lột, trục lợi; kỳ tích'. Định nghĩa học thuật: Make full use of and derive benefit from a resource; treat someone unfairly to benefit from their work.."
  },
  "fluctuate": {
    "synonyms": [
      "rise",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'fluctuate' (verb) mang nghĩa 'Dao động, biến động, lên xuống thất thường'. Định nghĩa học thuật: Rise and fall irregularly in number, quality, or price.."
  },
  "guideline": {
    "synonyms": [
      "general",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'guideline' (noun) mang nghĩa 'Hướng dẫn, nguyên tắc chỉ đạo, quy tắc định hướng'. Định nghĩa học thuật: A general rule, principle, or piece of advice designed to guide practical implementation.."
  },
  "highlight": {
    "synonyms": [
      "draw",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'highlight' (verb / noun) mang nghĩa 'Làm nổi bật, nhấn mạnh; điểm nhấn sáng giá'. Định nghĩa học thuật: Draw special attention to an important fact, circumstance, or feature.."
  },
  "implicit": {
    "synonyms": [
      "implied",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'implicit' (adj) mang nghĩa 'Ngấm ngầm, ẩn ý, hàm ẩn, mặc nhiên không nói thẳng'. Định nghĩa học thuật: Implied though not plainly expressed; essentially or very closely connected with; unquestioning.."
  },
  "induce": {
    "synonyms": [
      "succeed",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'induce' (verb) mang nghĩa 'Gây ra, xui khiến, kích thích khởi phát'. Định nghĩa học thuật: Succeed in persuading or influencing someone to do something; bring about or give rise to a state.."
  },
  "inevitable": {
    "synonyms": [
      "certain",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'inevitable' (adj / noun) mang nghĩa 'Không thể tránh khỏi, tất yếu sẽ xảy ra'. Định nghĩa học thuật: Certain to happen; unavoidable; a situation that is impossible to prevent.."
  },
  "infrastructure": {
    "synonyms": [
      "basic",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'infrastructure' (noun) mang nghĩa 'Cơ sở hạ tầng, nền tảng cơ sở vật chất kỹ thuật'. Định nghĩa học thuật: The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.."
  },
  "inspect": {
    "synonyms": [
      "look",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'inspect' (verb) mang nghĩa 'Kiểm tra, thanh tra, giám định kỹ lưỡng'. Định nghĩa học thuật: Look at someone or something closely, typically to assess condition or detect shortcomings.."
  },
  "intense": {
    "synonyms": [
      "extreme",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'intense' (adj) mang nghĩa 'Mãnh liệt, dữ dội, cao độ, cực kỳ căng thẳng'. Định nghĩa học thuật: Of extreme force, degree, or strength; having or showing strong feelings or earnest seriousness.."
  },
  "manipulate": {
    "synonyms": [
      "handle",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'manipulate' (verb) mang nghĩa 'Thao túng, điều khiển khéo léo, xử lý dữ liệu tinh vi'. Định nghĩa học thuật: Handle or control a tool or mechanism skillfully; influence or control shrewdly or deviously.."
  },
  "minimise": {
    "synonyms": [
      "reduce",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'minimise' (verb) mang nghĩa 'Giảm thiểu đến mức tối thiểu, hạ thấp tối đa'. Định nghĩa học thuật: Reduce something unwanted to the smallest possible amount, degree, or size.."
  },
  "nuclear": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'nuclear' (adj) mang nghĩa 'Thuộc hạt nhân, nguyên tử; trung tâm cốt lõi'. Định nghĩa học thuật: Relating to the nucleus of an atom, or to energy released during fission; central or primary.."
  },
  "offset": {
    "synonyms": [
      "counteract",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'offset' (verb / noun) mang nghĩa 'Bù đắp, bù trừ, cân bằng lại tổn thất hoặc chi phí'. Định nghĩa học thuật: Counteract something by having an equal and opposite force or effect; compensate for.."
  },
  "paragraph": {
    "synonyms": [
      "distinct",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'paragraph' (noun / verb) mang nghĩa 'Đoạn văn, tiết mục văn bản'. Định nghĩa học thuật: A distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line.."
  },
  "plus": {
    "synonyms": [
      "with",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'plus' (prep / adj / noun) mang nghĩa 'Cộng thêm, thêm vào đó; ưu điểm, điểm lợi'. Định nghĩa học thuật: With the addition of; furthermore; an advantage or positive quality.."
  },
  "practitioner": {
    "synonyms": [
      "person",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'practitioner' (noun) mang nghĩa 'Người hành nghề chuyên môn (bác sĩ, luật sư, chuyên gia thực tiễn)'. Định nghĩa học thuật: A person actively engaged in an art, discipline, or profession, especially medicine or law.."
  },
  "predominant": {
    "synonyms": [
      "present",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'predominant' (adj) mang nghĩa 'Chiếm ưu thế, chủ đạo, trội hơn hẳn số đông'. Định nghĩa học thuật: Present as the strongest or main element; having or exerting superior power or influence.."
  },
  "prospect": {
    "synonyms": [
      "possibility",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'prospect' (noun / verb) mang nghĩa 'Triển vọng, viễn cảnh tương lai; tìm kiếm thăm dò'. Định nghĩa học thuật: The possibility or likelihood of some future event occurring; mental picture of the future.."
  },
  "radical": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'radical' (adj / noun) mang nghĩa 'Căn bản, triệt để; cấp tiến, mang tính cách mạng'. Định nghĩa học thuật: Relating to or affecting the fundamental nature of something; far-reaching or thorough.."
  },
  "random": {
    "synonyms": [
      "made",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'random' (adj / noun) mang nghĩa 'Ngẫu nhiên, tình cờ, bất kỳ không theo quy luật'. Định nghĩa học thuật: Made, done, or happening without method or conscious decision; statistical chance.."
  },
  "reinforce": {
    "synonyms": [
      "strengthen",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'reinforce' (verb) mang nghĩa 'Củng cố, tăng cường, gia cố cho thêm vững chắc'. Định nghĩa học thuật: Strengthen or support an object or substance; encourage or substantiate an idea or feeling.."
  },
  "restore": {
    "synonyms": [
      "bring",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'restore' (verb) mang nghĩa 'Khôi phục, phục hồi lại trạng thái ban đầu, hoàn trả'. Định nghĩa học thuật: Bring back or re-establish a previous condition, practice, or object to its original state.."
  },
  "revise": {
    "synonyms": [
      "examine",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'revise' (verb) mang nghĩa 'Xem xét lại, sửa đổi, hiệu đính; ôn tập kiến thức'. Định nghĩa học thuật: Re-examine and make alterations to written or published work; study again in order to remember.."
  },
  "schedule": {
    "synonyms": [
      "plan",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'schedule' (noun / verb) mang nghĩa 'Lịch trình, kế hoạch tiến độ; lên lịch, sắp xếp thời gian'. Định nghĩa học thuật: A plan for carrying out a process or procedure, giving lists of intended events and times; arrange or plan.."
  },
  "tension": {
    "synonyms": [
      "state",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'tension' (noun / verb) mang nghĩa 'Sự căng thẳng, áp lực, mối quan hệ đối đầu; lực căng'. Định nghĩa học thuật: The state of being stretched tight; mental or emotional strain; relationship strain between parties.."
  },
  "terminate": {
    "synonyms": [
      "bring",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'terminate' (verb) mang nghĩa 'Chấm dứt, kết thúc, hủy bỏ hợp đồng/chuyến đi'. Định nghĩa học thuật: Bring to an end or come to an end in space, time, or legal validity.."
  },
  "theme": {
    "synonyms": [
      "subject",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'theme' (noun) mang nghĩa 'Chủ đề, đề tài chủ đạo, tư tưởng xuyên suốt'. Định nghĩa học thuật: The subject of a talk, a piece of writing, a person\\."
  },
  "thereby": {
    "synonyms": [
      "substantially",
      "markedly",
      "specifically"
    ],
    "antonyms": [
      "scarcely",
      "barely",
      "incompletely"
    ],
    "synonymsVi": [
      "một cách đáng kể",
      "rõ rệt",
      "cụ thể"
    ],
    "antonymsVi": [
      "hầu như không",
      "hiếm khi",
      "chưa trọn vẹn"
    ],
    "explanation": "'thereby' (adv) mang nghĩa 'Do đó, nhờ đó mà, bằng cách ấy mà'. Định nghĩa học thuật: By that means; as a result of that action or occurrence.."
  },
  "uniform": {
    "synonyms": [
      "consistent",
      "homogeneous",
      "standardized",
      "unvarying"
    ],
    "antonyms": [
      "diverse",
      "heterogeneous",
      "variable",
      "irregular"
    ],
    "synonymsVi": [
      "đồng nhất",
      "đồng đều",
      "chuẩn hóa",
      "không biến thiên"
    ],
    "antonymsVi": [
      "đa dạng",
      "không đồng nhất",
      "biến thiên",
      "thất thường"
    ],
    "explanation": "Uniform là nhất quán đồng đều; đối lập là diverse."
  },
  "vehicle": {
    "synonyms": [
      "thing",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'vehicle' (noun) mang nghĩa 'Phương tiện giao thông; công cụ/phương tiện truyền đạt ý tưởng'. Định nghĩa học thuật: A thing used for transporting people or goods; a medium through which ideas are expressed or achieved.."
  },
  "via": {
    "synonyms": [
      "traveling",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'via' (prep) mang nghĩa 'Thông qua, bằng đường, nhờ cậy vào'. Định nghĩa học thuật: Traveling through a place on the way to a destination; by means of; with the aid of.."
  },
  "virtual": {
    "synonyms": [
      "almost",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'virtual' (adj) mang nghĩa 'Ảo (trong môi trường kỹ thuật số); hầu như là, thực tế là'. Định nghĩa học thuật: Almost or nearly as described, but not completely or according to strict definition; generated by software.."
  },
  "visual": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'visual' (adj / noun) mang nghĩa 'Thuộc thị giác, trực quan, phần hình ảnh nhìn thấy được'. Định nghĩa học thuật: Relating to seeing or sight; a picture, piece of film, or display used to illustrate or accompany something.."
  },
  "widespread": {
    "synonyms": [
      "found",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'widespread' (adj) mang nghĩa 'Lan rộng, phổ biến rộng rãi khắp nơi'. Định nghĩa học thuật: Found or distributed over a large area or number of people; widely prevailing.."
  },
  "accommodate": {
    "synonyms": [
      "provide",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'accommodate' (verb) mang nghĩa 'Cung cấp chỗ ở, tiếp nhận; điều chỉnh cho thích nghi, đáp ứng nhu cầu'. Định nghĩa học thuật: Provide lodging or sufficient space for; fit in with the wishes or needs of.."
  },
  "analogy": {
    "synonyms": [
      "comparison",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'analogy' (noun) mang nghĩa 'Sự tương tự, phép loại suy, so sánh đối chiếu'. Định nghĩa học thuật: A comparison between two things, typically on the basis of their structure and for explanation or clarification.."
  },
  "anticipate": {
    "synonyms": [
      "regard",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'anticipate' (verb) mang nghĩa 'Dự đoán, lường trước, trông đợi trước'. Định nghĩa học thuật: Regard as probable; expect or predict; act in advance of.."
  },
  "assure": {
    "synonyms": [
      "tell",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'assure' (verb) mang nghĩa 'Cam đoan, bảo đảm, trấn an'. Định nghĩa học thuật: Tell someone something positively or confidently to dispel any doubts they may have; ensure.."
  },
  "attain": {
    "synonyms": [
      "succeed",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'attain' (verb) mang nghĩa 'Đạt được, giành được (mục tiêu, trình độ, độ tuổi)'. Định nghĩa học thuật: Succeed in achieving (something that one desires and has worked for); reach (a specified age, size, or level).."
  },
  "behalf": {
    "synonyms": [
      "interest",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'behalf' (noun) mang nghĩa 'Đại diện, nhân danh, vì lợi ích của'. Định nghĩa học thuật: In the interest of a person or group; as a representative of.."
  },
  "bulk": {
    "synonyms": [
      "majority",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'bulk' (noun / adj) mang nghĩa 'Số lượng lớn, phần lớn, kích thước đồ sộ'. Định nghĩa học thuật: The majority or greater part of something; large mass or volume.."
  },
  "cease": {
    "synonyms": [
      "come",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'cease' (verb) mang nghĩa 'Dừng lại, chấm dứt, ngưng hoạt động'. Định nghĩa học thuật: Come or bring to an end; discontinue an action or occurrence.."
  },
  "coherent": {
    "synonyms": [
      "argument",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'coherent' (adj) mang nghĩa 'Mạch lạc, chặt chẽ, nhất quán'. Định nghĩa học thuật: (Of an argument, theory, or policy) logical and consistent; united as or forming a whole.."
  },
  "coincide": {
    "synonyms": [
      "occur",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'coincide' (verb) mang nghĩa 'Trùng hợp, xảy ra đồng thời, trùng khớp'. Định nghĩa học thuật: Occur at or during the same time; correspond in nature or in tally of details.."
  },
  "commence": {
    "synonyms": [
      "begin",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'commence' (verb) mang nghĩa 'Bắt đầu, khởi sự, mở đầu'. Định nghĩa học thuật: Begin; start an event, ceremony, or formal process.."
  },
  "compatible": {
    "synonyms": [
      "things",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'compatible' (adj) mang nghĩa 'Tương thích, hợp nhau, hòa hợp'. Định nghĩa học thuật: (Of two things) able to exist or occur together without conflict; (of software or hardware) able to be used together.."
  },
  "concurrent": {
    "synonyms": [
      "existing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'concurrent' (adj) mang nghĩa 'Đồng thời, xảy ra cùng một lúc'. Định nghĩa học thuật: Existing, happening, or done at the same time.."
  },
  "confine": {
    "synonyms": [
      "keep",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'confine' (verb) mang nghĩa 'Hạn chế, giam hãm, bó hẹp trong phạm vi'. Định nghĩa học thuật: Keep or restrict someone or something within certain limits of space, scope, or time.."
  },
  "controversy": {
    "synonyms": [
      "disagreement",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'controversy' (noun) mang nghĩa 'Cuộc tranh cãi, sự bất đồng ý kiến gay gắt'. Định nghĩa học thuật: Disagreement, typically when prolonged, public, and heated.."
  },
  "converse": {
    "synonyms": [
      "opposite",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'converse' (noun / adj / verb) mang nghĩa 'Điều ngược lại; trò chuyện, đàm đạo'. Định nghĩa học thuật: The opposite or reverse of a fact or statement; engage in conversation.."
  },
  "device": {
    "synonyms": [
      "thing",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'device' (noun) mang nghĩa 'Thiết bị, dụng cụ; thủ pháp, phương sách'. Định nghĩa học thuật: A thing made or adapted for a particular purpose, especially a piece of mechanical or electronic equipment.."
  },
  "devote": {
    "synonyms": [
      "give",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'devote' (verb) mang nghĩa 'Cống hiến, dành hết tâm huyết / thời gian cho'. Định nghĩa học thuật: Give all or a large part of one\\."
  },
  "diminish": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'diminish' (verb) mang nghĩa 'Giảm bớt, suy giảm, làm thu nhỏ lại'. Định nghĩa học thuật: Make or become less, smaller, or less important.."
  },
  "distort": {
    "synonyms": [
      "pull",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'distort' (verb) mang nghĩa 'Bóp méo, xuyên tạc, làm biến dạng'. Định nghĩa học thuật: Pull or twist out of shape; give a misleading or false account or impression of.."
  },
  "duration": {
    "synonyms": [
      "time",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'duration' (noun) mang nghĩa 'Thời lượng, khoảng thời gian kéo dài'. Định nghĩa học thuật: The time during which something continues or exists.."
  },
  "erode": {
    "synonyms": [
      "gradually",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'erode' (verb) mang nghĩa 'Xói mòn, bào mòn, làm suy thoái dần'. Định nghĩa học thuật: Gradually wear away (soil, rock, or land); gradually destroy or diminish.."
  },
  "ethic": {
    "synonyms": [
      "moral",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'ethic' (noun) mang nghĩa 'Chuẩn mực đạo đức, đạo lý, luân thường'. Định nghĩa học thuật: A set of moral principles, especially ones relating to or affirming a specified group, field, or form of conduct.."
  },
  "format": {
    "synonyms": [
      "which",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'format' (noun / verb) mang nghĩa 'Định dạng, khổ mẫu, cấu trúc trình bày'. Định nghĩa học thuật: The way in which something is arranged or set out; arrange or put into a specific format.."
  },
  "found": {
    "synonyms": [
      "establish",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'found' (verb) mang nghĩa 'Thành lập, sáng lập; dựa trên cơ sở'. Định nghĩa học thuật: Establish or originate an institution or organization, especially by providing an endowment; base on.."
  },
  "inherent": {
    "synonyms": [
      "existing",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'inherent' (adj) mang nghĩa 'Vốn có, cố hữu, gắn liền bản chất'. Định nghĩa học thuật: Existing in something as a permanent, essential, or characteristic attribute.."
  },
  "insight": {
    "synonyms": [
      "accurate",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'insight' (noun) mang nghĩa 'Cái nhìn sâu sắc, sự hiểu biết thấu đáo'. Định nghĩa học thuật: An accurate and deep intuitive understanding of a person, mechanism, or complex problem.."
  },
  "integral": {
    "synonyms": [
      "necessary",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'integral' (adj) mang nghĩa 'Toàn phần, không thể thiếu, cốt lõi cấu thành'. Định nghĩa học thuật: Necessary to make a whole complete; essential or fundamental.."
  },
  "intermediate": {
    "synonyms": [
      "coming",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'intermediate' (adj / noun) mang nghĩa 'Trung gian, trung cấp, ở giữa hai giai đoạn'. Định nghĩa học thuật: Coming between two points, time intervals, stages, or qualities in level or degree.."
  },
  "manual": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'manual' (adj / noun) mang nghĩa 'Thủ công, bằng tay; sách hướng dẫn sử dụng'. Định nghĩa học thuật: Relating to or done with the hands; a book of instructions, especially for operating a machine.."
  },
  "mature": {
    "synonyms": [
      "fully",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'mature' (adj / verb) mang nghĩa 'Trưởng thành, chín chắn, hoàn thiện; phát triển đầy đủ'. Định nghĩa học thuật: Fully developed physically, mentally, or commercially; reach full development.."
  },
  "mediate": {
    "synonyms": [
      "intervene",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'mediate' (verb) mang nghĩa 'Làm trung gian hòa giải, dàn xếp, điều tiết'. Định nghĩa học thuật: Intervene between people in a dispute in order to bring about an agreement or reconciliation.."
  },
  "medium": {
    "synonyms": [
      "agency",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'medium' (noun / adj) mang nghĩa 'Phương tiện truyền tải, môi trường; trung bình, vừa'. Định nghĩa học thuật: An agency or means of doing something; the intervening substance through which impressions are conveyed.."
  },
  "military": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'military' (adj / noun) mang nghĩa 'Quân sự, binh nghiệp; quân đội'. Định nghĩa học thuật: Relating to soldiers or armed forces; the armed services of a country.."
  },
  "minimal": {
    "synonyms": [
      "minimum",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'minimal' (adj) mang nghĩa 'Tối thiểu, rất nhỏ, không đáng kể'. Định nghĩa học thuật: Of a minimum amount, quantity, or degree; characterized by the use of simple or primary forms.."
  },
  "mutual": {
    "synonyms": [
      "experienced",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'mutual' (adj) mang nghĩa 'Lẫn nhau, tương hỗ, chung (lợi ích, tôn trọng)'. Định nghĩa học thuật: Experienced or done by each of two or more parties toward the other; held in common.."
  },
  "norm": {
    "synonyms": [
      "something",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'norm' (noun) mang nghĩa 'Quy chuẩn, tiêu chuẩn thông lệ, định mức xã hội'. Định nghĩa học thuật: Something that is usual, typical, or standard; a required standard or expected pattern of behavior.."
  },
  "overlap": {
    "synonyms": [
      "extend",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'overlap' (verb / noun) mang nghĩa 'Gối lên nhau, chồng chéo, có điểm chung'. Định nghĩa học thuật: Extend over so as to cover partly; have something in common with another area, discipline, or period.."
  },
  "passive": {
    "synonyms": [
      "accepting",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'passive' (adj) mang nghĩa 'Thụ động, bị động, tiêu cực chấp nhận'. Định nghĩa học thuật: Accepting or allowing what happens or what others do, without active response or resistance.."
  },
  "portion": {
    "synonyms": [
      "part",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'portion' (noun / verb) mang nghĩa 'Phần, khẩu phần, chia phần'. Định nghĩa học thuật: A part of a whole; an amount, section, or piece of something larger.."
  },
  "preliminary": {
    "synonyms": [
      "denoting",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'preliminary' (adj / noun) mang nghĩa 'Sơ bộ, mở đầu, chuẩn bị trước'. Định nghĩa học thuật: Denoting an action or event preceding or done in preparation for something fuller or more important.."
  },
  "protocol": {
    "synonyms": [
      "official",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'protocol' (noun) mang nghĩa 'Giao thức, nghi thức ngoại giao, quy trình chuẩn'. Định nghĩa học thuật: The official procedure or system of rules governing affairs of state or diplomatic occasions; computer network rules.."
  },
  "qualitative": {
    "synonyms": [
      "relating",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'qualitative' (adj) mang nghĩa 'Định tính, thuộc về phẩm chất / chất lượng'. Định nghĩa học thuật: Relating to, measuring, or measured by the quality of something rather than its numerical quantity.."
  },
  "refine": {
    "synonyms": [
      "remove",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'refine' (verb) mang nghĩa 'Trau chuốt, tinh chỉnh, lọc sạch, cải tiến'. Định nghĩa học thuật: Remove impurities or unwanted elements from; improve something by making small subtle changes.."
  },
  "relax": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'relax' (verb) mang nghĩa 'Thư giãn, nới lỏng (quy định, cơ bắp), làm dịu'. Định nghĩa học thuật: Make or become less tense, rigid, or anxious; cause a rule or restriction to become less severe.."
  },
  "restrain": {
    "synonyms": [
      "prevent",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'restrain' (verb) mang nghĩa 'Kiềm chế, ngăn chặn, gò bó, khống chế'. Định nghĩa học thuật: Prevent someone or something from doing something; keep under control or within limits.."
  },
  "revolution": {
    "synonyms": [
      "forcible",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'revolution' (noun) mang nghĩa 'Cuộc cách mạng, sự đảo lộn toàn diện, vòng quay'. Định nghĩa học thuật: A forcible overthrow of a government or social order; a dramatic and wide-reaching change in conditions or operations.."
  },
  "rigid": {
    "synonyms": [
      "unable",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'rigid' (adj) mang nghĩa 'Cứng nhắc, khắt khe, không linh hoạt, rắn chắc'. Định nghĩa học thuật: Unable to bend or be forced out of shape; not able to be changed or adapted.."
  },
  "route": {
    "synonyms": [
      "course",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'route' (noun / verb) mang nghĩa 'Lộ trình, tuyến đường, đường lối tiến hành'. Định nghĩa học thuật: A way or course taken in getting from a starting point to a destination; send by a specified route.."
  },
  "scenario": {
    "synonyms": [
      "written",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'scenario' (noun) mang nghĩa 'Kịch bản, viễn cảnh dự kiến, tình huống giả định'. Định nghĩa học thuật: A written outline of a movie, novel, or stage work; a postulated sequence or development of events.."
  },
  "sphere": {
    "synonyms": [
      "round",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'sphere' (noun) mang nghĩa 'Hình cầu; lĩnh vực hoạt động, phạm vi ảnh hưởng'. Định nghĩa học thuật: A round solid figure; an area of activity, interest, or expertise; a section of society or world.."
  },
  "subordinate": {
    "synonyms": [
      "lower",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'subordinate' (adj / noun / verb) mang nghĩa 'Cấp dưới, phụ thuộc, thứ yếu; đặt xuống hàng dưới'. Định nghĩa học thuật: Lower in rank or position; a person under the authority of another within an organization.."
  },
  "supplement": {
    "synonyms": [
      "thing",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'supplement' (noun / verb) mang nghĩa 'Phần bổ sung, phụ lục; bổ sung thêm vào'. Định nghĩa học thuật: A thing added to something else in order to complete or enhance it; add an extra element to.."
  },
  "suspend": {
    "synonyms": [
      "temporarily",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'suspend' (verb) mang nghĩa 'Đình chỉ, tạm hoãn, treo lơ lửng'. Định nghĩa học thuật: Temporarily prevent from continuing or being in force; hang something from somewhere.."
  },
  "team": {
    "synonyms": [
      "more",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'team' (noun / verb) mang nghĩa 'Đội ngũ, nhóm làm việc; phối hợp thành đội'. Định nghĩa học thuật: Two or more people working together; come together as a team to achieve a common goal.."
  },
  "temporary": {
    "synonyms": [
      "provisional",
      "transitory",
      "fleeting",
      "short-term"
    ],
    "antonyms": [
      "permanent",
      "eternal",
      "everlasting",
      "perpetual"
    ],
    "synonymsVi": [
      "tạm thời",
      "nhất thời",
      "chớp nhoáng",
      "ngắn hạn"
    ],
    "antonymsVi": [
      "vĩnh viễn",
      "lâu dài trường cửu",
      "bất diệt",
      "liên tục"
    ],
    "explanation": "Temporary là chỉ kéo dài trong thời gian ngắn; đối lập là permanent."
  },
  "trigger": {
    "synonyms": [
      "cause",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'trigger' (verb / noun) mang nghĩa 'Kích hoạt, châm ngòi, khởi phát; cò súng'. Định nghĩa học thuật: Cause an event or situation to happen or exist; an event or circumstance that causes a reaction.."
  },
  "unify": {
    "synonyms": [
      "make",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'unify' (verb) mang nghĩa 'Hợp nhất, thống nhất, quy về một mối'. Định nghĩa học thuật: Make or become united, uniform, or whole.."
  },
  "violate": {
    "synonyms": [
      "break",
      "execute",
      "apply"
    ],
    "antonyms": [
      "neglect",
      "cease",
      "prevent"
    ],
    "synonymsVi": [
      "thực hiện",
      "áp dụng",
      "triển khai"
    ],
    "antonymsVi": [
      "lơ là",
      "chấm dứt",
      "ngăn chặn"
    ],
    "explanation": "'violate' (verb) mang nghĩa 'Vi phạm, xâm phạm (quy tắc, luật pháp, quyền lợi)'. Định nghĩa học thuật: Break or fail to comply with (a rule, law, or formal agreement); treat with disrespect or disregard.."
  },
  "vision": {
    "synonyms": [
      "ability",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'vision' (noun) mang nghĩa 'Tầm nhìn, nhãn quan chiến lược, thị lực'. Định nghĩa học thuật: The ability to think about or plan the future with imagination or wisdom; the faculty of seeing.."
  },
  "adjacent": {
    "synonyms": [
      "neighboring",
      "adjoining",
      "contiguous",
      "bordering"
    ],
    "antonyms": [
      "distant",
      "remote",
      "separated",
      "detached"
    ],
    "synonymsVi": [
      "liền kề",
      "tiếp giáp",
      "tiếp giáp biên giới",
      "sát cạnh"
    ],
    "antonymsVi": [
      "xa xôi",
      "hẻo lánh",
      "bị tách rời",
      "cách biệt"
    ],
    "explanation": "Adjacent chỉ hai vị trí nằm kề sát nhau."
  },
  "albeit": {
    "synonyms": [
      "although",
      "even though",
      "notwithstanding that",
      "though"
    ],
    "antonyms": [
      "furthermore",
      "moreover",
      "in addition",
      "likewise"
    ],
    "synonymsVi": [
      "mặc dù",
      "dẫu rằng",
      "dù cho là",
      "dù vậy"
    ],
    "antonymsVi": [
      "hơn nữa",
      "thêm vào đó",
      "ngoài ra",
      "tương tự vậy"
    ],
    "explanation": "Albeit là liên từ học thuật đồng nghĩa với 'although'."
  },
  "assemble": {
    "synonyms": [
      "gather",
      "congregate",
      "construct",
      "convene"
    ],
    "antonyms": [
      "disperse",
      "dismantle",
      "scatter",
      "disassemble"
    ],
    "synonymsVi": [
      "tập hợp",
      "tụ họp",
      "lắp ráp",
      "triệu tập"
    ],
    "antonymsVi": [
      "giải tán",
      "tháo rời",
      "rải rác",
      "phân tán"
    ],
    "explanation": "Assemble vừa là tập hợp đám đông vừa là lắp ráp thiết bị; đối lập là disassemble."
  },
  "collapse": {
    "synonyms": [
      "breakdown",
      "fall",
      "crumble",
      "implode"
    ],
    "antonyms": [
      "rise",
      "flourish",
      "thrive",
      "withstand"
    ],
    "synonymsVi": [
      "sụp đổ",
      "tan rã",
      "vỡ vụn",
      "nổ sụp"
    ],
    "antonymsVi": [
      "trỗi dậy",
      "hưng thịnh",
      "phát triển rực rỡ",
      "chịu đựng vững"
    ],
    "explanation": "Collapse là đổ vỡ sụp đổ; đối lập là thrive / withstand."
  },
  "colleague": {
    "synonyms": [
      "coworker",
      "peer",
      "associate",
      "partner"
    ],
    "antonyms": [
      "adversary",
      "opponent",
      "rival",
      "competitor"
    ],
    "synonymsVi": [
      "đồng nghiệp",
      "người đồng cấp",
      "cộng sự",
      "đối tác"
    ],
    "antonymsVi": [
      "đối thủ",
      "địch thủ",
      "kẻ cạnh tranh",
      "kình địch"
    ],
    "explanation": "Colleague là đồng sự cùng cơ quan; đối lập trong tranh đấu là rival."
  },
  "compile": {
    "synonyms": [
      "assemble",
      "collate",
      "gather",
      "compose"
    ],
    "antonyms": [
      "disperse",
      "scatter",
      "disorganize",
      "divide"
    ],
    "synonymsVi": [
      "biên soạn",
      "đối chiếu tổng hợp",
      "thu thập gom góp",
      "soạn thảo"
    ],
    "antonymsVi": [
      "phân tán",
      "làm rời rạc",
      "gây xáo trộn",
      "chia rẽ"
    ],
    "explanation": "Compile là thu thập tài liệu để biên soạn công trình."
  },
  "conceive": {
    "synonyms": [
      "imagine",
      "devise",
      "formulate",
      "envision"
    ],
    "antonyms": [
      "misunderstand",
      "ignore",
      "neglect",
      "dismiss"
    ],
    "synonymsVi": [
      "hình thành ý tưởng",
      "nghĩ ra",
      "soạn thảo",
      "mường tượng"
    ],
    "antonymsVi": [
      "hiểu sai",
      "bỏ qua",
      "lờ đi",
      "loại bỏ"
    ],
    "explanation": "Conceive là thụ thai hoặc thai nghén một ý tưởng mới."
  },
  "convince": {
    "synonyms": [
      "persuade",
      "satisfy",
      "assure",
      "sway"
    ],
    "antonyms": [
      "dissuade",
      "discourage",
      "disillusion",
      "deter"
    ],
    "synonymsVi": [
      "thuyết phục",
      "làm tin phục",
      "trấn an",
      "làm dao động"
    ],
    "antonymsVi": [
      "khuyên can từ bỏ",
      "làm nản lòng",
      "vỡ mộng",
      "ngăn chặn"
    ],
    "explanation": "Convince là thuyết phục ai tin tưởng; đối lập là dissuade."
  },
  "depress": {
    "synonyms": [
      "sadden",
      "devalue",
      "lower",
      "discourage"
    ],
    "antonyms": [
      "cheer",
      "elevate",
      "boost",
      "stimulate"
    ],
    "synonymsVi": [
      "làm chán nản",
      "hạ giá",
      "làm suy yếu",
      "làm nhụt chí"
    ],
    "antonymsVi": [
      "làm vui lên",
      "nâng cao",
      "thúc đẩy tăng trưởng",
      "kích thích"
    ],
    "explanation": "Depress là làm suy thoái kinh tế hoặc làm buồn phiền; đối lập là boost / elevate."
  },
  "encounter": {
    "synonyms": [
      "confront",
      "face",
      "meet",
      "run into"
    ],
    "antonyms": [
      "avoid",
      "evade",
      "dodge",
      "sidestep"
    ],
    "synonymsVi": [
      "chạm trán",
      "đối mặt",
      "gặp gỡ bất ngờ",
      "va phải"
    ],
    "antonymsVi": [
      "né tránh",
      "tránh mặt",
      "lẩn tránh",
      "luồn lách qua"
    ],
    "explanation": "Encounter là bắt gặp hoặc đối đầu thử thách; đối lập là avoid."
  },
  "enormous": {
    "synonyms": [
      "very",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'enormous' (adj) mang nghĩa 'To lớn, khổng lồ, bao la'. Định nghĩa học thuật: Very large in size, quantity, or extent.."
  },
  "forthcoming": {
    "synonyms": [
      "upcoming",
      "imminent",
      "approaching",
      "candid"
    ],
    "antonyms": [
      "past",
      "retrospective",
      "distant",
      "secretive"
    ],
    "synonymsVi": [
      "sắp tới",
      "sắp xảy ra",
      "đang đến gần",
      "cởi mở chân thành"
    ],
    "antonymsVi": [
      "đã qua",
      "quá khứ",
      "xa xôi",
      "kín kẽ che giấu"
    ],
    "explanation": "Forthcoming là sự kiện sắp diễn ra hoặc thái độ cởi mở."
  },
  "incline": {
    "synonyms": [
      "tend",
      "lean",
      "predispose",
      "slant"
    ],
    "antonyms": [
      "dissuade",
      "resist",
      "avert",
      "straighten"
    ],
    "synonymsVi": [
      "có xu hướng",
      "nghiêng về",
      "dẫn tới",
      "dốc nghiêng"
    ],
    "antonymsVi": [
      "ngăn cản",
      "kháng cự",
      "quay ngoắt đi",
      "nắn thẳng"
    ],
    "explanation": "Incline là nghiêng về một quan điểm hoặc độ dốc."
  },
  "integrity": {
    "synonyms": [
      "honesty",
      "probity",
      "wholeness",
      "rectitude"
    ],
    "antonyms": [
      "dishonesty",
      "corruption",
      "deceit",
      "fragmentation"
    ],
    "synonymsVi": [
      "chính trực",
      "liêm khiết",
      "toàn vẹn",
      "ngay thẳng"
    ],
    "antonymsVi": [
      "bất lương",
      "tham nhũng",
      "lừa dối",
      "chia cắt vụn vỡ"
    ],
    "explanation": "Integrity là sự chính trực thanh liêm hoặc tính toàn vẹn của hệ thống."
  },
  "intrinsic": {
    "synonyms": [
      "inherent",
      "innate",
      "essential",
      "inborn"
    ],
    "antonyms": [
      "extrinsic",
      "acquired",
      "external",
      "extraneous"
    ],
    "synonymsVi": [
      "nội tại",
      "bẩm sinh",
      "bản chất cốt lõi",
      "sẵn có bên trong"
    ],
    "antonymsVi": [
      "ngoại tại",
      "mắc phải",
      "bên ngoài",
      "phụ thêm từ ngoài"
    ],
    "explanation": "Intrinsic là thuộc tính nội tại bản chất; đối lập hoàn toàn là extrinsic."
  },
  "invoke": {
    "synonyms": [
      "summon",
      "call upon",
      "cite",
      "appeal to"
    ],
    "antonyms": [
      "revoke",
      "suppress",
      "relinquish",
      "dismiss"
    ],
    "synonymsVi": [
      "viện dẫn",
      "khẩn cầu",
      "gọi ra",
      "kêu gọi sự can thiệp"
    ],
    "antonymsVi": [
      "hủy bỏ",
      "áp chế",
      "từ bỏ",
      "bác bỏ"
    ],
    "explanation": "Invoke là viện dẫn đạo luật hay kêu gọi thần lực."
  },
  "levy": {
    "synonyms": [
      "tax",
      "impose",
      "toll",
      "tariff"
    ],
    "antonyms": [
      "refund",
      "exempt",
      "remit",
      "rebate"
    ],
    "synonymsVi": [
      "đánh thuế",
      "áp đặt phí",
      "thu lệ phí",
      "biểu thuế"
    ],
    "antonymsVi": [
      "hoàn thuế",
      "miễn thuế",
      "bãi nợ",
      "chiết khấu trả lại"
    ],
    "explanation": "Levy là áp đặt nghĩa vụ thuế hoặc nghĩa vụ quân sự; đối lập là exempt."
  },
  "likewise": {
    "synonyms": [
      "similarly",
      "also",
      "in like manner",
      "correspondingly"
    ],
    "antonyms": [
      "differently",
      "contrarily",
      "conversely",
      "oppositely"
    ],
    "synonymsVi": [
      "tương tự như vậy",
      "cũng vậy",
      "như thế",
      "tương ứng"
    ],
    "antonymsVi": [
      "khác đi",
      "trái lại",
      "ngược lại hoàn toàn",
      "đối chọi"
    ],
    "explanation": "Likewise là phó từ nối chỉ sự tương tự; đối lập là conversely."
  },
  "nonetheless": {
    "synonyms": [
      "nevertheless",
      "however",
      "yet",
      "still"
    ],
    "antonyms": [
      "therefore",
      "consequently",
      "thus",
      "accordingly"
    ],
    "synonymsVi": [
      "tuy nhiên",
      "dù sao đi nữa",
      "thế nhưng",
      "vẫn"
    ],
    "antonymsVi": [
      "do đó",
      "kết quả là",
      "vì vậy",
      "theo đúng lý"
    ],
    "explanation": "Nonetheless diễn tả sự nhượng bộ trái ngược với dự đoán."
  },
  "notwithstanding": {
    "synonyms": [
      "despite",
      "in spite of",
      "regardless of",
      "although"
    ],
    "antonyms": [
      "because of",
      "on account of",
      "owing to",
      "due to"
    ],
    "synonymsVi": [
      "mặc cho",
      "bất chấp",
      "không màng tới",
      "dù rằng"
    ],
    "antonymsVi": [
      "bởi vì",
      "do nguyên nhân",
      "nhờ vào",
      "bởi lẽ"
    ],
    "explanation": "Notwithstanding chỉ việc bất chấp khó khăn trở ngại."
  },
  "odd": {
    "synonyms": [
      "different",
      "notable",
      "apparent"
    ],
    "antonyms": [
      "insignificant",
      "irrelevant",
      "uncertain"
    ],
    "synonymsVi": [
      "đáng chú ý",
      "rõ rệt",
      "đặc thù"
    ],
    "antonymsVi": [
      "không đáng kể",
      "không liên quan",
      "mơ hồ"
    ],
    "explanation": "'odd' (adj) mang nghĩa 'Kỳ quặc, bất thường; số lẻ; lẻ tẻ'. Định nghĩa học thuật: Different from what is usual or expected; strange; (of a whole number) not divisible by two.."
  },
  "ongoing": {
    "synonyms": [
      "continuous",
      "in progress",
      "unfolding",
      "perpetual"
    ],
    "antonyms": [
      "finished",
      "concluded",
      "terminated",
      "interrupted"
    ],
    "synonymsVi": [
      "đang diễn ra",
      "liên tục tiếp diễn",
      "tiến triển",
      "không ngừng"
    ],
    "antonymsVi": [
      "đã kết thúc",
      "đã hoàn tất",
      "bị chấm dứt",
      "bị gián đoạn"
    ],
    "explanation": "Ongoing là đang tiếp tục tiến triển; đối lập là finished."
  },
  "panel": {
    "synonyms": [
      "committee",
      "board",
      "jury",
      "advisory group"
    ],
    "antonyms": [
      "individual",
      "single actor",
      "general crowd",
      "mob"
    ],
    "synonymsVi": [
      "ban chuyên gia",
      "hội đồng giám khảo",
      "nhóm cố vấn",
      "hội đồng"
    ],
    "antonymsVi": [
      "cá nhân đơn lẻ",
      "diễn viên độc diễn",
      "đám đông ngẫu nhiên",
      "dân chúng"
    ],
    "explanation": "Panel là hội đồng chuyên môn được thành lập để thẩm định."
  },
  "persist": {
    "synonyms": [
      "persevere",
      "endure",
      "continue",
      "last"
    ],
    "antonyms": [
      "give up",
      "cease",
      "surrender",
      "discontinue"
    ],
    "synonymsVi": [
      "kiên trì",
      "bền bỉ chịu đựng",
      "kéo dài dai dẳng",
      "tồn tại lâu"
    ],
    "antonymsVi": [
      "từ bỏ",
      "dừng lại",
      "đầu hàng",
      "chấm dứt"
    ],
    "explanation": "Persist là kiên định bất chấp nghịch cảnh; đối lập là surrender."
  },
  "pose": {
    "synonyms": [
      "present",
      "constitute",
      "create",
      "model"
    ],
    "antonyms": [
      "alleviate",
      "resolve",
      "remove",
      "eliminate"
    ],
    "synonymsVi": [
      "đặt ra (thách thức)",
      "tạo ra",
      "hiện diện",
      "làm dáng"
    ],
    "antonymsVi": [
      "giảm nhẹ",
      "giải quyết triệt để",
      "loại bỏ nguy cơ",
      "triệt tiêu"
    ],
    "explanation": "Pose a threat/challenge là đặt ra mối đe dọa hoặc thử thách."
  },
  "reluctance": {
    "synonyms": [
      "unwillingness",
      "component",
      "aspect"
    ],
    "antonyms": [
      "disorganization",
      "void",
      "absence"
    ],
    "synonymsVi": [
      "yếu tố",
      "thành phần",
      "khía cạnh"
    ],
    "antonymsVi": [
      "sự xáo trộn",
      "khoảng trống vô định",
      "sự vắng bóng"
    ],
    "explanation": "'reluctance' (noun) mang nghĩa 'Sự do dự, miễn cưỡng, không sẵn lòng'. Định nghĩa học thuật: Unwillingness or disinclination to do something.."
  },
  "so-called": {
    "synonyms": [
      "supposed",
      "alleged",
      "professed",
      "ostensible"
    ],
    "antonyms": [
      "genuine",
      "authentic",
      "true",
      "bona fide"
    ],
    "synonymsVi": [
      "cái gọi là",
      "bị cho là",
      "tự xưng",
      "mang danh bề ngoài"
    ],
    "antonymsVi": [
      "chân thực",
      "xác thực danh giá",
      "đúng đắn thực chất",
      "đáng tin cậy"
    ],
    "explanation": "So-called dùng để bày tỏ sự nghi ngờ về tính xác thực của tên gọi."
  },
  "straightforward": {
    "synonyms": [
      "simple",
      "direct",
      "candid",
      "uncomplicated"
    ],
    "antonyms": [
      "complicated",
      "devious",
      "convoluted",
      "ambiguous"
    ],
    "synonymsVi": [
      "thẳng thắn",
      "đơn giản dễ hiểu",
      "chân phương",
      "không rườm rà"
    ],
    "antonymsVi": [
      "phức tạp rắc rối",
      "quanh co xảo quyệt",
      "ngoằn ngoèo",
      "nhập nhằng"
    ],
    "explanation": "Straightforward là đơn giản, dễ nắm bắt hoặc bộc trực; đối lập là complicated."
  },
  "undergo": {
    "synonyms": [
      "experience",
      "endure",
      "suffer",
      "bear"
    ],
    "antonyms": [
      "avoid",
      "escape",
      "sidestep",
      "bypass"
    ],
    "synonymsVi": [
      "trải qua",
      "chịu đựng",
      "kinh qua",
      "chấp nhận biến đổi"
    ],
    "antonymsVi": [
      "né tránh",
      "thoát khỏi",
      "bỏ qua",
      "đi đường vòng tránh"
    ],
    "explanation": "Undergo a process/surgery là kinh qua một thử thách hoặc sự chuyển biến."
  },
  "whereby": {
    "synonyms": [
      "by which",
      "through which",
      "in accordance with which"
    ],
    "antonyms": [
      "regardless of which",
      "without which"
    ],
    "synonymsVi": [
      "nhờ đó",
      "qua đó mà",
      "theo đó thì"
    ],
    "antonymsVi": [
      "bất kể điều đó",
      "mà không có nó"
    ],
    "explanation": "Whereby là trạng từ quan hệ học thuật tương đương với 'by which'."
  }
};

/**
 * Retrieve lexical relations (synonyms & antonyms) for any word.
 * Provides graceful fallback if word is formatted differently.
 */
export function getWordLexicalRelations(word: string): WordLexicalRelation {
  const key = word.trim().toLowerCase();
  if (AWL_SYNONYMS_ANTONYMS[key]) {
    return AWL_SYNONYMS_ANTONYMS[key];
  }
  return {
    synonyms: ["equivalent", "counterpart", "correlative"],
    antonyms: ["opposite", "converse", "antithesis"],
    synonymsVi: ["từ tương đương", "khái niệm tương ứng"],
    antonymsVi: ["từ đối lập", "khái niệm tương phản"],
    explanation: `Phân tích từ vựng học thuật "${word}".`,
  };
}
