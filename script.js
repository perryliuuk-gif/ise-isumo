/* =========================================================
   伊勢・琵琶湖・出雲 十三日大環線 — script.js
   All itinerary content lives in DATA below; everything on
   the page is rendered from it so nothing from the original
   plan gets left out.
   ========================================================= */

const mapLink = (name) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

/* ---------------------------------------------------------
   HOTELS (referenced by id from each day)
--------------------------------------------------------- */
const HOTELS = {
  ise: {
    name: "見宿 斎王の宮（伊勢にたたずむ 王朝浪漫の夢）", area: "三重・伊勢",
    nights: "7/16－7/17（2 晚）",
    detail: [
      ["訂房代碼 7/16", "0RMCT28Q（含朝食）"],
      ["訂房代碼 7/17", "0RMW122U（含朝食・夕食）"],
      ["備註", "伊勢車站周邊，晚餐可步行至燒肉名店"],
    ],
    map: mapLink("斎王の宮 伊勢"),
  },
  otsu: {
    name: "びわ湖大津プリンスホテル", area: "滋賀・大津",
    nights: "7/18－7/19（2 晚）",
    detail: [ ["訂房代碼 7/18", "0RMW7Y40（含朝食）"], ["備註", "琵琶湖畔，近江八幡與三井 Outlet 滋賀龍王中繼站"] ],
    map: mapLink("びわ湖大津プリンスホテル"),
  },
  ogoto: {
    name: "おごと温泉 びわこ緑水亭", area: "滋賀・雄琴温泉",
    nights: "7/20（1 晚）",
    detail: [ ["訂房代碼", "0RMW7YX5（含朝食・夕食）"], ["備註", "琵琶湖溫泉旅館，鄰近琵琶湖觀景台"] ],
    map: mapLink("びわこ緑水亭"),
  },
  maizuru: {
    name: "Hotel Route Inn Kyoto Maizuru（西舞鶴站前）", area: "京都・西舞鶴",
    nights: "7/21（1 晚）",
    detail: [ ["訂房編號", "Hotels.com 73478625631437（已付款）"], ["房型", "2 間大床雙人房"], ["備註", "含早餐"] ],
    map: mapLink("Hotel Route Inn Kyoto Maizuru Nishi Maizuru Ekimae"),
  },
  amanohashidate: {
    name: "天橋立・フェアフィールド・バイ・マリオット・京都", area: "京都・天橋立",
    nights: "7/22（1 晚）",
    detail: [ ["訂房編號", "Hotels.com 73478670545083（已付款）"], ["房型", "2 間雙床房"], ["備註", "含免費停車場"] ],
    map: mapLink("天橋立 フェアフィールド バイ マリオット 京都"),
  },
  tottori: {
    name: "鳥取温泉 ホテルモナーク鳥取", area: "鳥取市",
    nights: "7/23（1 晚）",
    detail: [ ["訂房代碼", "0RMENH9G（含朝食）"], ["付款狀態", "未付（現場付款）"] ],
    map: mapLink("ホテルモナーク鳥取"),
  },
  matsue: {
    name: "なにわ一水（玉造溫泉）", area: "島根・松江市",
    nights: "7/24（1 晚）",
    detail: [ ["訂房代碼", "0RMEGRAY（含朝食・夕食）"], ["備註", "玉造溫泉美肌之湯，建議泡足湯與會席料理"] ],
    map: mapLink("玉造温泉 なにわ一水"),
  },
  okayama: {
    name: "ANA Crowne Plaza Okayama by IHG", area: "岡山市",
    nights: "7/25－7/26（2 晚）",
    detail: [ ["訂房確認", "Chase Travel：84087610 / 67615778"], ["房型", "2 間（Single Bds Premium City View／Single Bed）"], ["付款狀態", "已付款"] ],
    map: mapLink("ANA Crowne Plaza Okayama"),
  },
  kobe: {
    name: "Kobe Luminous Hotel Sannomiya", area: "神戶・三宮",
    nights: "7/27（1 晚）",
    detail: [ ["訂房編號", "Hotels.com 73480443713044"], ["房型", "Superior Twin Room 64398（已付款）"] ],
    map: mapLink("Kobe Luminous Hotel Sannomiya"),
  },
};

/* ---------------------------------------------------------
   DAYS
--------------------------------------------------------- */
const DAYS = [
  {
    day:1, date:"7/16", weekday:"四", stamp:"伊勢", title:"抵達關西・驅車入伊勢",
    route:["✈️ CX564 TPE→KIX 11:05–14:50","🚗 機場租車","🚗 機場→伊勢（約2.5小時）"],
    weather:"夏／需防曬",
    timeline:[
      {time:"11:05", label:"CX564 桃園起飛", icon:"✈️"},
      {time:"14:50", label:"抵達關西國際機場 KIX", icon:"🛬"},
      {time:"16:30", label:"CRQ 關西機場租車櫃檯取車", icon:"🐻‍❄️", note:"室內電話 +818076255511"},
      {time:"約17:00起", label:"驅車前往伊勢（約2.5小時車程）", icon:"🚗"},
      {time:"晚間", label:"伊勢站周邊晚餐、入住見宿 斎王の宮", icon:"🍖"},
    ],
    attractions:[],
    food:[
      {name:"炭火燒肉 友丸（Tomomaru）", desc:"位於伊勢銀座新道商店街內，主打黑毛和牛與松阪牛，店家附設停車場，客滿時可停步行1分鐘的新道第一停車場。", tips:"詢問工作人員專屬停車位", map:mapLink("炭火燒肉 友丸 伊勢")},
      {name:"燒肉 An", desc:"七輪炭火燒肉體驗，店門口設有專屬免費停車場。", map:mapLink("燒肉An 伊勢")},
      {name:"網燒・道", desc:"靠近宮後地區，網烤雞肉與燒肉，店前設免費停車位。", map:mapLink("網燒 道 伊勢")},
      {name:"とり乃家 しんみち店", desc:"主打網烤味噌雞肉燒肉，備有免費專用停車場。", map:mapLink("とり乃家 しんみち店")},
      {name:"鰻魚飯 岡本淡水", desc:"伊勢在地鰻魚飯名店，可作為晚餐替代選擇。", map:mapLink("岡本淡水 うなぎ 伊勢")},
    ],
    shopping:[], notes:[
      "抵達當日以移動與取車為主，行李較多建議提前確認租車公司還車地點與保險內容。",
    ],
    hotel:"ise",
  },
  {
    day:2, date:"7/17", weekday:"五", stamp:"神宮", title:"伊勢神宮參拜日・內宮外宮巡禮",
    route:["🚶 伊勢神宮 外宮＋商店街","🚶 伊勢神宮 內宮＋商店街","🖋️ 御朱印"],
    weather:"夏／建議早出發避開人潮",
    timeline:[
      {time:"5:00–19:00", label:"伊勢神宮開放參拜時間", icon:"⛩️"},
      {time:"上午", label:"外宮：豐受大神宮 御正宮 → 別宮（多賀宮・土宮・風宮）", icon:"⛩️"},
      {time:"中午", label:"托福橫丁（おかげ横丁）午餐、御朱印", icon:"🍡"},
      {time:"下午", label:"內宮：皇大神宮 御正宮 → 別宮（荒祭宮・瀧祭神）", icon:"⛩️"},
      {time:"傍晚", label:"返回飯店（見宿 斎王の宮）", icon:"🐻‍❄️"},
    ],
    attractions:[
      {name:"伊勢神宮 外宮（豐受大神宮）", desc:"參拜順序建議由外宮開始，主祀豐受大御神，過火除橋、參道左側通行。", hours:"5:00–19:00", duration:"約1.5小時",
        tips:"停車：外宮第1・2・3停車場，步行參道約1分鐘，免費但限停2小時（可查即時滿位 rakurakuise.jp）", site:"https://zh-tw.ise-kanko.jp/useful/barrier-free/", map:mapLink("伊勢神宮外宮")},
      {name:"伊勢神宮 內宮（皇大神宮）", desc:"參拜順僅次於外宮，過宇治橋、參道右側通行，能量點為四至神／子安神社。", hours:"5:00–19:00", duration:"約2小時",
        tips:"停車：內宮A1/A2最近但易客滿，1小時內免費、1–2小時500円（7:00–17:00）、其後每30分加收100円", map:mapLink("伊勢神宮内宮")},
      {name:"輪椅無障礙服務", desc:"內宮、外宮衛士詰所可免費租借輪椅與嬰兒車，參道旁設專用通道避開碎石路，必要時可請工作人員協助搬運台階。", map:null},
    ],
    food:[
      {name:"赤福本店", desc:"創業300餘年老店，必吃現做「赤福餅」，夏季限定「赤福冰」。", map:mapLink("赤福本店 伊勢")},
      {name:"伊勢烏龍麵 ふくすけ", desc:"極粗麵條、軟嫩口感搭配濃郁深色醬汁，伊勢代表鄉土料理。", map:mapLink("ふくすけ 伊勢うどん")},
      {name:"豚捨（Butasute）可樂餅", desc:"高級伊勢牛製作，外酥內多汁，邊走邊吃點心首選。", map:mapLink("豚捨 伊勢")},
    ],
    shopping:["托福橫丁（おかげ横丁）：伴手禮、老舖點心、御朱印帳周邊"],
    notes:["參拜過橋須知：外宮過火除橋、內宮過宇治橋；外宮參道靠左、內宮參道靠右，以示對神道的敬意。"],
    hotel:"ise",
  },
  {
    day:3, date:"7/18", weekday:"六", stamp:"近江", title:"移動琵琶湖畔・近江八幡老街",
    route:["🚗 伊勢→近江八幡（約2小時）"],
    weather:"夏",
    timeline:[
      {time:"上午", label:"驅車伊勢→近江八幡（約2小時）", icon:"🚗"},
      {time:"抵達後", label:"日牟禮八幡宮參拜、八幡山纜車登頂展望", icon:"⛩️"},
      {time:"中午", label:"近江商人街景（新町通）午餐", icon:"🍱"},
      {time:"下午", label:"八幡堀水道散策、La Collina 年輪蛋糕（備案：彥根城／黑壁廣場）", icon:"🚶"},
      {time:"傍晚", label:"驅車前往大津，入住びわ湖大津プリンスホテル", icon:"🐻‍❄️"},
    ],
    attractions:[
      {name:"日牟禮八幡宮＋八幡山纜車", desc:"參觀後可搭「八幡山口纜車」登頂至「八幡山展望館」，俯瞰八幡山城下町，山頂旁即為甜點店 Club Harie。", fee:"纜車單程540円、來回950円", tips:"神社前免費停車場（里道）緊鄰纜車乘車處", map:mapLink("日牟禮八幡宮")},
      {name:"八幡堀＋近江商人街景（新町通）", desc:"江戶時代商人町水道景觀，可悠閒散步拍照。", map:mapLink("八幡堀 近江八幡")},
      {name:"長命寺（備案，擇一）", desc:"與八幡堀路線可擇一造訪的備案景點。", map:mapLink("長命寺 近江八幡")},
      {name:"彥根城（備案）", desc:"倖免戰火保留江戶時代原始天守，可感受戰國至江戶築城技術。", map:mapLink("彥根城")},
      {name:"黑壁廣場（長濱・備案）", desc:"長濱代表性玻璃工藝街區，可延伸順遊。", map:mapLink("黑壁廣場 長濱")},
    ],
    food:[
      {name:"丸竹近江牛西川", desc:"平價品嚐日本三大和牛之一近江牛，壽喜燒／小火鍋評價高，一樓賣店亦可外帶。地址：滋賀県近江八幡市仲屋町中16", map:mapLink("丸竹近江牛西川")},
      {name:"たねや 日牟禮乃舍", desc:"茶屋兼提供近江式家常午餐（約3000–4000円，近江牛套餐7260円），招牌甜點「つぶら餅」麻糬紅豆。", map:mapLink("たねや 日牟禮乃舍")},
      {name:"La Collina 近江八幡（年輪蛋糕工場）", desc:"知名年輪蛋糕品牌本店，草屋頂建築本身即是打卡景點。", map:mapLink("La Collina 近江八幡")},
    ],
    shopping:["新町通老街小舖", "たねや／Club Harie 甜點伴手禮"],
    notes:[
      "近江八幡主要停車場：日牟禮八幡宮前免費停車場（里道，免費，鄰近纜車乘車處）／市營小幡觀光停車場（一般車當日最高¥510）／多賀觀光停車場（一般車當日最高¥500）。",
    ],
    hotel:"otsu",
  },
  {
    day:4, date:"7/19", weekday:"日", stamp:"龍王", title:"三井 Outlet 滋賀龍王・購物日",
    route:["🚗 近江八幡→滋賀龍王（20分）","🛍️ 三井Outlet Park 滋賀竜王","🚗 滋賀龍王→大津（35分）"],
    weather:"夏",
    timeline:[
      {time:"上午", label:"驅車近江八幡→滋賀龍王（20分鐘）", icon:"🚗"},
      {time:"全日", label:"三井Outlet Park 滋賀竜王 購物（建議先至南館服務台領護照優惠券）", icon:"🛍️"},
      {time:"傍晚", label:"滋賀龍王→大津（35分鐘），續住大津プリンスホテル", icon:"🐻‍❄️"},
    ],
    attractions:[
      {name:"三井Outlet Park 滋賀竜王", desc:"南館為主入口，餐廳集中，兩館間有連接通道，北館僅設咖啡廳；建議動線最後再回南館。可先於服務台憑護照領取優惠券。", tips:"部份店家無法退稅，購買前先詢問店員", site:"https://osaka.letsgojp.com/archives/64398/", map:mapLink("三井アウトレットパーク滋賀竜王")},
      {name:"Kanefuku Mentai Park Biwako（順路備案）", desc:"大洗明太子主題公園分館，可去可不去的順路景點。", map:mapLink("めんたいパーク びわこ")},
    ],
    food:[],
    shopping:[
      "mont-bell：日本原創戶外品牌（無法免稅）── 輕量傘、輕量保溫瓶為必買人氣單品",
      "廚房生活用品：Le Creuset、雙人牌(Staub)、iittala、Fissler、Franc Franc（藥妝店內Le Creuset小物適合入手）",
      "大眾流行服飾：GAP、ZARA、A&F、UGG、Tommy Hilfiger、BEAMS、agnès b",
      "歐美進口精品：Michael Kors、Kate Spade、COACH、Longchamp、Boss、Paul Smith、Marc Jacobs",
      "體育用品：NIKE、Adidas、Puma、Oakley、Asics、Under Armour、New Balance",
      "登山露營用品：Columbia、mont-bell、Logos",
    ],
    notes:["部份店家不提供免稅服務，下手前先向店員確認是否可退稅。"],
    hotel:"otsu",
  },
  {
    day:5, date:"7/20", weekday:"一", stamp:"雄琴", title:"琵琶湖觀景台・雄琴溫泉",
    route:["🚗 大津→雄琴溫泉（15分）","🚗 雄琴溫泉→志賀（30分）"],
    weather:"夏／山區纜車注意風速",
    timeline:[
      {time:"上午", label:"大津→雄琴溫泉（15分鐘）", icon:"🚗"},
      {time:"上午", label:"雄琴溫泉→志賀（30分鐘）", icon:"🚗"},
      {time:"白天", label:"The Biwako Terrace 琵琶湖觀景台（志賀）搭乘纜車登頂", icon:"🚡"},
      {time:"午後", label:"白鬚神社／浮御堂，白ひげ食堂 豚汁拉麵午餐", icon:"⛩️"},
      {time:"備案", label:"西近江七福神巡禮、琵琶湖大橋、日吉大社", icon:"🐻‍❄️"},
      {time:"晚間", label:"入住 おごと温泉 びわこ緑水亭（含朝夕食）", icon:"♨️"},
    ],
    attractions:[
      {name:"The Biwako Terrace 琵琶湖觀景台（志賀）", desc:"可搭乘輪椅友善纜車登頂俯瞰琵琶湖全景。", fee:"停車場1日券1000円；設施使用費5000円", site:"https://www.biwako-valley.com/tw/biwako-terrace/", map:mapLink("The Biwako Terrace")},
      {name:"白鬚神社／浮御堂", desc:"擁有水上鳥居的近江最古大社，第七番壽老人巡禮地；浮御堂為琵琶湖代表性水上佛堂景觀。", map:mapLink("白鬚神社 滋賀")},
      {name:"琵琶湖大橋（備案）", desc:"可順遊道路休息站「道之驛 琵琶湖大橋米廣場」（大津市今堅田3-1-1）。", map:mapLink("琵琶湖大橋")},
      {name:"日吉大社（備案）", desc:"全日本約3800座日吉／山王神社總本宮，逾2100年歷史；神猿信仰、獨特山王鳥居；西本宮／東本宮本殿為日本國寶。", fee:"停車300円", hours:"9:00–16:30", map:mapLink("日吉大社")},
    ],
    food:[
      {name:"白ひげ食堂", desc:"昭和懷舊風平價食堂，招牌豚汁拉麵，就在白鬚神社正對面不遠處，適合參拜後步行用餐。", map:mapLink("白ひげ食堂")},
    ],
    shopping:[],
    notes:[],
    tables:[
      { title:"西近江七福神巡禮（備案，由北至南自駕約4小時）",
        headers:["社寺名稱","供奉神明","保佑核心","地址"],
        rows:[
          ["大崎寺","毗沙門天","武運、消災解厄","高島市マキノ町海津128"],
          ["川裾宮 唐崎神社","惠比壽神","商業繁盛、幸運","高島市マキノ町知内924"],
          ["西江寺","辯才天","學藝進步、財運","高島市今津町藺生592"],
          ["阿志都彌神社・行過天滿宮","福祿壽","延年益壽、人德","高島市今津町弘川2379"],
          ["正傳寺","大黑天","五穀豐收、財富","高島市新旭町旭38"],
          ["玉泉寺","布袋尊","家庭美滿、知足","高島市安曇川町田中"],
          ["白鬚神社","壽老人","長壽、延命","高島市鵜川215"],
        ]},
    ],
    hotel:"ogoto",
  },
  {
    day:6, date:"7/21", weekday:"二", stamp:"舞鶴", title:"美山茅葺之里・海之京都舞鶴",
    route:["🚗 琵琶湖→美山町（約1.5小時）","🚗 美山町→舞鶴（約1.5小時）"],
    weather:"夏／山間早晚溫差較大2–3度",
    timeline:[
      {time:"上午", label:"琵琶湖→美山町（約1.5小時）", icon:"🚗"},
      {time:"上午–中午", label:"美山茅葺之里散策：民俗資料館、小小藍美術館、知井八幡神社", icon:"🏡"},
      {time:"午餐", label:"食事處北村 手打蕎麥麵 或 Cafe＆Gallery彩花", icon:"🍜"},
      {time:"下午", label:"美山町→舞鶴（約1.5小時）", icon:"🚗"},
      {time:"傍晚", label:"東舞鶴紅磚公園 或 西舞鶴海鮮市場", icon:"🦪"},
      {time:"晚間", label:"入住 Hotel Route Inn 西舞鶴站前", icon:"🐻‍❄️"},
    ],
    attractions:[
      {name:"美山茅葺之里", desc:"日本三大合掌村之一，夏季繡球花、百日紅、向日葵點綴里山風光，氣溫比市區低2–3度，夜晚可賞星。", tips:"聚落入口對面停車場，普通車一次¥500，營業時間夏季(4–11月)09:00–17:00", site:"https://www.miyama-keihoku.com/pdf/tw_miyamamap.pdf", map:mapLink("美山かやぶきの里")},
      {name:"美山民俗資料館", desc:"唯一可入內參觀的茅葺屋頂復原建築，近距離觀察屋頂閣樓構造。", map:mapLink("美山民俗資料館")},
      {name:"小小藍美術館", desc:"江戶時代茅草屋頂古民宅改建，1樓可參觀藍染製作過程，2樓展示藍染藏品。", map:mapLink("美山 藍美術館")},
      {name:"知井八幡神社", desc:"近千年歷史古社，本殿雕刻精緻，列為京都府指定登錄文化財。", map:mapLink("知井八幡神社")},
      {name:"舞鶴紅磚公園（東舞鶴）", desc:"倉庫改建博物館群，園內多個打卡點，內部設咖啡館與伴手禮商店。", site:"https://tw.wamazing.com/media/article/a-3508/", map:mapLink("舞鶴赤れんがパーク")},
      {name:"舞鶴港海鮮市場 Tore Tore Center（西舞鶴）", desc:"號稱日本海最大規模道之驛海鮮市場，招牌岩牡蠣。", site:"https://toretore.org/zh-TW/", map:mapLink("舞鶴港とれとれセンター")},
      {name:"吉原入江（備案）", desc:"舞鶴最受青睞攝影地點，與伊根舟屋齊名，被譽為「東方威尼斯」；建議停西舞鶴車站周邊步行20–25分鐘前往。", map:mapLink("吉原入江 舞鶴")},
    ],
    food:[
      {name:"食事處 北村", desc:"招牌為嚴選美山產蕎麥粉、石臼細磨手工蕎麥麵。", map:mapLink("食事処北村 美山")},
      {name:"Cafe＆Gallery 彩花", desc:"古民宅改建，隱藏版咖啡館，推薦「黍工房糰子套餐」。", map:mapLink("彩花 美山")},
      {name:"cafe 美卵", desc:"養雞場直營小咖啡店，人氣「自家製布丁」。", map:mapLink("cafe美卵 美山")},
      {name:"Kamitsure", desc:"熱壓三明治外帶專賣，招牌京風高湯蛋捲熱壓三明治。", map:mapLink("Kamitsure 美山")},
      {name:"西舞鶴行程：R・COCO咖啡→日之出湯→田邊城跡→海鮮市場午餐→若之湯→machiya甜點→雙鶴庵", desc:"一日散策路線建議。", map:null},
    ],
    shopping:["土產處 茅之里：糯米小米麻糬、手工餅乾","茅葺之里 野田商店：茅葺印花手巾、原子筆、徽章等應援商品，並提供觀光導覽"],
    notes:["五老岳公園（備案）可順遊眺望舞鶴灣。"],
    hotel:"maizuru",
  },
  {
    day:7, date:"7/22", weekday:"三", stamp:"橋立北", title:"海之京都・天橋立（北側）",
    route:["🚗 舞鶴→天橋立（1小時）"],
    weather:"夏／山路狹窄需留意會車",
    timeline:[
      {time:"上午", label:"舞鶴→天橋立（1小時）", icon:"🚗"},
      {time:"上午", label:"元伊勢籠神社參拜", icon:"⛩️"},
      {time:"中午—下午", label:"傘松公園 昇龍觀（可選天橋立觀光船＋纜車套票）", icon:"🚡"},
      {time:"下午", label:"成相寺（可省略）", icon:"🐻‍❄️"},
      {time:"晚間", label:"入住 天橋立 Fairfield by Marriott 京都", icon:"🏨"},
    ],
    attractions:[
      {name:"元伊勢籠神社", desc:"本殿五色座玉裝飾規格與伊勢神宮同級，全日本僅兩處可合法使用；「神明造」建築樣式與伊勢神宮相同；境內魔除狛犬為國家重要文化財；奧宮真名井神社步行約5分鐘，可取「天之真名井之水」湧泉御神水。", hours:"7:30–18:00（依季節）", fee:"停車場保全協力金：一般轎車、重機800円（30分鐘內免費）", map:mapLink("元伊勢籠神社")},
      {name:"傘松公園・昇龍觀（天橋立北側）", desc:"由高處俯瞰天橋立形似昇天飛龍的知名觀景點。方案一：宮津港F濱町免費停車場→觀光船至一之宮→纜車上傘松公園→巴士至成相寺（無障礙友善但登山巴士每班限載1台可折疊輪椅）；方案二：自行開車經元伊勢籠神社旁登山道直達成相寺山頂（山路狹窄多45度連續髮夾彎）。", site:"https://www.gltjp.com/zh-hant/directory/item/16405/", map:mapLink("傘松公園")},
      {name:"成相寺（可省略）", desc:"「心想事成」古寺，360度全景展望台可遠眺天橋立、宮津灣、阿蘇海，天氣晴朗時可望能登半島與白山；平成五重塔秋季賞楓勝地；一願一言地藏、左甚五郎雕刻「真向之龍」。", fee:"入山費：成人500円／國中生以下免費", map:mapLink("成相寺")},
    ],
    food:[], shopping:[],
    notes:["出發前若需無障礙協助，可事先email leigyo@tankai.jp 告知輪椅型式（普通/電動）、是否可折疊、尺寸與重量，安排無障礙斜坡與協助人員。"],
    tables:[
      { title:"輪椅與陪同者優惠票價一覽",
        headers:["地點／交通工具","原價","身障及1名陪同優惠價","備註"],
        rows:[
          ["天橋立觀光船","700円","半價（約350円）","可容納3–5台輪椅，一宮碼頭可免費借輪椅"],
          ["傘松公園纜車","680円","半價（約340円）","府中站有輪椅專用電梯，最多容納2台輪椅"],
          ["成相寺登山巴士","700円","半價（約350円）","每班限1台可折疊輪椅"],
          ["成相寺入山費","500円","現場詢問確認","出示手冊通常有減免"],
          ["天橋立View Land","850円","身障450円／陪同450円","須搭單軌電車，設輪椅電梯，單趟限3台"],
        ]},
    ],
    hotel:"amanohashidate",
  },
  {
    day:8, date:"7/23", weekday:"四", stamp:"橋立南", title:"日本三景・天橋立（南側）→鳥取",
    route:["🚶 天橋立南側","🚗 天橋立→鳥取市（2小時）","🚗 鳥取市→白兔神社（0.5小時）"],
    weather:"夏",
    timeline:[
      {time:"上午", label:"天橋立南側：飛龍觀展望走廊", icon:"🐉"},
      {time:"上午", label:"智恩寺、迴旋橋、沙洲散策", icon:"🚶"},
      {time:"備案", label:"大内峠一字觀公園（可省略）", icon:"🐻‍❄️"},
      {time:"中午後", label:"天橋立→鳥取市（2小時）", icon:"🚗"},
      {time:"下午", label:"鳥取市→白兔神社（0.5小時）", icon:"🚗"},
      {time:"傍晚", label:"白兔神社＆白兔海岸", icon:"🐰"},
      {time:"晚間", label:"入住 鳥取温泉 ホテルモナーク鳥取", icon:"♨️"},
    ],
    attractions:[
      {name:"飛龍觀（天橋立南側）", desc:"由南側經胯下眺望天橋立形似飛龍躍昇天，園內7處胯下觀景台，全長約250m、最高處約8.5m的走廊可360度欣賞宮津灣與天橋立。搭乘單軌電車設輪椅專用電梯。", fee:"停車700円，門票1000円／人；身心障礙者本人及1名陪同者各500円", site:"https://www.viewland.jp/tw/eigyou/", map:mapLink("天橋立ビューランド")},
      {name:"智恩寺", desc:"日本三文殊之一，供奉文殊菩薩，7/24出船祭12:00–21:00開放。境內「鐵湯舟」花手水、雪舟名畫《天橋立圖》中描繪的多寶塔（重要文化財）。", map:mapLink("智恩寺 天橋立")},
      {name:"迴旋橋", desc:"連結天橋立與智恩寺文殊堂的水路旋轉橋，每次旋轉約5分鐘，熱門拍照景點。", map:mapLink("廻旋橋 天橋立")},
      {name:"大内峠一字觀公園（可省略）", desc:"天橋立第三處展望點，時間有限可省略。", map:mapLink("大内峠一字観公園")},
      {name:"白兔神社＆白兔海岸", desc:"因幡白兔神話發源地／戀人聖地。結緣石放置鳥居求良緣；御身洗池傳說白兔在此清洗傷口，池水終年不涸；兔子造型神籤與御守；對面公路可達白兔海岸。", duration:"約30–45分鐘", site:"https://www.tottori-tour.jp/zh-tw/sightseeing/102/", map:mapLink("白兔神社")},
    ],
    food:[], shopping:[],
    notes:["搜尋無障礙資訊建議輸入「天橋立雪舟觀 車椅子」或「天橋立ビューランド 車椅子」以確認最新設施。"],
    hotel:"tottori",
  },
  {
    day:9, date:"7/24", weekday:"五", stamp:"鳥取", title:"鳥取沙丘・白兔神社・松江城",
    route:["🚶 鳥取沙丘","⛩️ 白兔神社","🚗 白兔神社→玉造溫泉（1.5小時）"],
    weather:"夏／沙丘日照強烈需防曬",
    timeline:[
      {time:"上午", label:"鳥取沙丘漫步、馬之背登頂", icon:"🏜️"},
      {time:"中午", label:"白兔神社、白兔海岸", icon:"🐰"},
      {time:"下午", label:"白兔神社→玉造溫泉（1.5小時）", icon:"🚗"},
      {time:"下午", label:"松江城・堀川遊覽船護城河巡遊", icon:"🚤"},
      {time:"傍晚", label:"宍道湖（玉造溫泉往北，國道9號沿岸）", icon:"🌅"},
      {time:"晚間", label:"入住 なにわ一水（玉造溫泉），足湯與會席料理", icon:"♨️"},
    ],
    attractions:[
      {name:"鳥取沙丘", desc:"日本少有的壯闊海岸沙丘地貌，風紋與沙簾景觀；「馬之背」高47公尺（約15層樓高），登頂可覽日本海全景。設有約100公尺無障礙木棧道，沙丘會館及市營停車場提供免費充氣大輪胎沙灘專用輪椅；砂之美術館全程無障礙（電梯、斜坡、無障礙廁所）；隈研吾設計的高島屋Tottori Takahama Cafe可居高欣賞沙丘。", duration:"約1.5–2小時（含纜車/沙美術館需加1–1.5小時）", fee:"停車500円", site:"https://www.torican.jp/zh-TW/spot/detail_1002.html", map:mapLink("鳥取砂丘")},
      {name:"白兔神社＆白兔海岸", desc:"沿山陰海岸西行，途經因幡白兔神話發源地，隨後進入島根縣。", duration:"約30–45分鐘", map:mapLink("白兔神社 鳥取")},
      {name:"松江城・堀川遊覽船（護城河巡遊）", desc:"乘船碼頭設斜坡道，工作人員協助輪椅乘客登船；船程固定50分鐘。建議停松江城大手前停車場，於大手前廣場乘船處搭船（共三處乘船處）。", duration:"約1–1.5小時", fee:"停車：日間前1小時300円，第2小時500円，之後每30分加收100円，當日上限800円（持身障手冊可半價減免）；船票一日券成人2000円，身障含陪同1000円", map:mapLink("松江城 堀川めぐり")},
      {name:"宍道湖", desc:"玉造溫泉往北、國道9號沿岸，夕陽景致著名。", map:mapLink("宍道湖")},
    ],
    food:[
      {name:"玉造溫泉散策", desc:"玉湯川畔免費足湯、參拜玉作湯神社（摸許願石），約需1.5–2小時，強烈建議在此住宿一晚體驗美肌溫泉與會席料理。", map:mapLink("玉造温泉")},
    ],
    shopping:[],
    notes:[],
    hotel:"matsue",
  },
  {
    day:10, date:"7/25", weekday:"六", stamp:"出雲", title:"出雲大社・稻佐之濱・移動岡山",
    route:["🚗 玉造溫泉→稻佐之濱→出雲大社","🚗 出雲→岡山（3小時）"],
    weather:"夏",
    timeline:[
      {time:"約09:30–09:50", label:"稻佐之濱裝取「御砂」", icon:"🏖️"},
      {time:"上午", label:"出雲大社參拜，素鵞社交換「神砂」", icon:"⛩️"},
      {time:"中午", label:"神門通商店街午餐（出雲蕎麥麵）", icon:"🍜"},
      {time:"備案", label:"日御碕神社（時間應該不夠，可省略）", icon:"🐻‍❄️"},
      {time:"下午", label:"驅車穿越中國山地前往岡山（約3小時）", icon:"🚗"},
      {time:"晚間", label:"入住 ANA Crowne Plaza Okayama", icon:"🏨"},
    ],
    attractions:[
      {name:"稻佐之濱（弁天島）", desc:"日本神話中諸神登陸的海灘，海中巨岩弁天島頂端建有供奉海神的小神社。傳統上早上先來此裝取海灘御砂，再帶至出雲大社素鵞社交換等量神砂，據信能消災解厄。", tips:"建議約09:30–09:50抵達裝砂", map:mapLink("稲佐の浜")},
      {name:"出雲大社", desc:"擁有全日本最大注連繩，直接停在「大社大停車場」（神樂殿旁，免費且車位最多）。建議由正門「勢溜大鳥居」出發依正統路線參拜，鳥居前一鞠躬、參道走兩側避開中軸線，先參拜神樂殿與本殿，再至素鵞社換取神砂。", site:"https://izumooyashiro.or.jp/precinct/zeniki", map:mapLink("出雲大社")},
      {name:"神門通", desc:"全長約700公尺主要表參道，從宇迦橋大鳥居延伸至勢溜大鳥居，聚集60餘間商店餐廳；另有「御緣橫丁」商店街，售賣神話主題紀念品與甜點。", map:mapLink("神門通り 出雲")},
      {name:"日御碕神社與燈塔（備案）", desc:"時間可能不夠，視行程彈性決定是否前往，可省略。", map:mapLink("日御碕神社")},
    ],
    food:[
      {name:"蕎麥處 田中屋", desc:"出雲大社正門鳥居正對面排隊名店，招牌三色割子蕎麥麵，提供中英韓文平板點餐。", map:mapLink("そば処田中屋 出雲")},
      {name:"荒木屋", desc:"230年以上歷史，全出雲最古老蕎麥麵店，曾出現於《孤獨的美食家》，招牌割子三代蕎麥麵附緣結紅豆湯。", map:mapLink("荒木屋 出雲")},
      {name:"出雲蕎麥 かねや", desc:"隱身巷弄的實力派老店，湯頭以濃香淡味醬油與柴魚熬製。", map:mapLink("出雲そばかねや")},
      {name:"奧出雲蕎麥處 一福", desc:"位於神門通商店街，以舞菇天婦羅搭配割子蕎麥麵聞名。", map:mapLink("奥出雲そば処一福")},
      {name:"羽根屋 本店", desc:"江戶末期創業，曾多次獻上蕎麥麵給天皇的頂級名店，鄰近JR出雲市站。", map:mapLink("献上そば羽根屋 本店")},
    ],
    shopping:["神門通、御緣橫丁：神話主題紀念品、甜點伴手禮"],
    notes:[
      "出雲蕎麥麵兩大吃法：割子蕎麥麵（三層朱紅漆器，逐層淋醬汁品嚐）／釜揚蕎麥麵（熱麵連煮麵湯盛入碗中，依喜好加醬汁調味）。",
    ],
    hotel:"okayama",
  },
  {
    day:11, date:"7/26", weekday:"日", stamp:"倉敷", title:"倉敷美觀地區・岡山",
    route:["🚗 岡山→倉敷（45分鐘）"],
    weather:"夏",
    timeline:[
      {time:"上午", label:"岡山→倉敷（45分鐘）", icon:"🚗"},
      {time:"上午–中午", label:"倉敷美觀地區：白壁倉庫、柳樹運河、常春藤廣場（約2小時）", icon:"🎐"},
      {time:"下午", label:"三井Outlet Park 倉敷購物；Ario倉敷1F採購特產", icon:"🛍️"},
      {time:"備案", label:"岡山城、岡山後樂園", icon:"🐻‍❄️"},
      {time:"晚間", label:"續住 ANA Crowne Plaza Okayama", icon:"🏨"},
    ],
    attractions:[
      {name:"倉敷美觀地區", desc:"保留江戶時代白壁倉庫與柳樹運河，穿和服漫步極具詩意；倉敷川沿岸、常春藤廣場適合悠閒拍照與平坦商店街選購伴手禮。", duration:"約2小時", tips:"倉敷市中央停車場：24小時營業，每30分鐘100円", map:mapLink("倉敷美観地区")},
      {name:"三井Outlet Park 倉敷", desc:"市區型購物商場約120間品牌。必買：Urban Research、BEAMS、United Arrows（日系服飾）；Michael Kors、Kate Spade、Coach、FURLA（精品）；Nike Factory、adidas（運動）。廚具Le Creuset、T-fal常有折扣特惠組合；BEAMS/Urban Research的Final Sale花車區可挖低至2折日本限定款；松本清可退稅並有外國遊客專屬折價券；GODIVA臨期禮盒常下殺3–5折。", site:"https://mitsui-shopping-park.com/mop/kurashiki/tw/", map:mapLink("三井アウトレットパーク倉敷")},
      {name:"Ario 倉敷 1F（懶人一站式特產）", desc:"Outlet步行1分鐘的室內連通商場，天滿屋Happy's食品館可買齊廣榮堂吉備糰子、橘香堂群雀餅、白桃／麝香葡萄果凍，並可現場退稅。", map:mapLink("Ario倉敷")},
      {name:"岡山城（備案）", desc:"因黑色外觀稱「烏城」，一樓可免費試穿戰國武士服裝；天守閣歷史博物館B1–6F展示岡山歷史文物與桃太郎互動拍照區；夜間點燈「烏城燈源鄉」與後樂園幻想庭園相互輝映。", tips:"輪椅：多數路徑為陡峭石階，需2–4人協助搬運；館內電梯僅達B1–4F，5–6F僅能步行", map:mapLink("岡山城")},
      {name:"岡山後樂園（備案）", desc:"日本三大名園之一，緊鄰岡山城可一併安排。", map:mapLink("岡山後楽園")},
    ],
    food:[], shopping:[],
    notes:[], hotel:"okayama",
  },
  {
    day:12, date:"7/27", weekday:"一", stamp:"神戶", title:"神戶牛排・臨海樂園・Outlet",
    route:["🚗 岡山→神戶（2.2小時）"],
    weather:"夏",
    timeline:[
      {time:"上午", label:"岡山→神戶（2.2小時）", icon:"🚗"},
      {time:"上午–中午", label:"三井Outlet Marinepia神戶 或 神戶三田Premium Outlet", icon:"🛍️"},
      {time:"下午", label:"生田神社參拜、M-INT神戶", icon:"⛩️"},
      {time:"傍晚", label:"神戶臨海樂園 Umie：Mosaic廣場、彩虹摩天輪", icon:"🎡"},
      {time:"晚間", label:"神戶牛排晚餐，入住 Kobe Luminous Hotel Sannomiya", icon:"🥩"},
    ],
    attractions:[
      {name:"生田神社", desc:"日本歷史最悠久神社之一，神戶最具代表性神社。", map:mapLink("生田神社")},
      {name:"神戶臨海樂園 Umie（Kobe Harborland）", desc:"MOSAIC馬賽克廣場：歐風木造三層樓建築，近90間特色小店，必買神戶Frantz魔法壺布丁、神戶風月堂法蘭酥、龜井堂瓦片仙貝，及吉伊卡哇／卡比等角色雜貨。Umie購物中心北館：UNIQLO全日本最大分店之一（約990坪）、無印良品、AEON Style地下超市（09:30–21:30）；南館：Kojima×Sofmap電器賣場、Super Sports Xebio、Seria百圓店。面海露台可賞神戶港夕陽與夜景，彩虹摩天輪高50公尺、搭乘一圈約12分鐘。", site:"https://tw.umie.global/", map:mapLink("神戸ハーバーランドumie")},
      {name:"三井Outlet Park Marinepia神戶／神戶三田Premium Outlet", desc:"神戶近郊兩大Outlet選擇，可依動線擇一安排購物時段。", map:mapLink("三井アウトレットパークマリンピア神戸")},
      {name:"M-INT神戶", desc:"三宮周邊大型商場，可安排逛街與用餐。", site:"https://osaka.letsgojp.com/archives/615546/", map:mapLink("神戸M-INT")},
    ],
    food:[
      {name:"神戶牛排（午間套餐推薦）", desc:"神戶牛排Vesta、官方認證神戶牛排Ishida(石田屋)、百年老店MOURIYA、神戶牛排櫻等，午間套餐約3,000–8,000円，多數位於JR三宮站步行5分鐘範圍。", map:mapLink("神戸牛ステーキ 三宮")},
      {name:"牛屋Tanpei（牛やたん平）", desc:"歷史悠久牛舌專門店，厚切牛舌極品；阪急神戶三宮站步行約7分鐘（近北野坂）。", map:mapLink("牛やたん平")},
      {name:"神戶牛燒肉石田屋", desc:"超高人氣神戶牛專門店，厚切牛舌油脂豐富入口即化；三宮站周邊多分店。", map:mapLink("神戸牛焼肉石田屋")},
      {name:"板前燒肉一牛 三宮店", desc:"板前板燒風格，供應稀有母黑毛和牛厚切牛舌；距三宮站步行約2分鐘。", map:mapLink("板前焼肉一牛 三宮店")},
    ],
    shopping:["Uniqlo","3 coin（3コイン）","OS藥妝"],
    notes:[],
    hotel:"kobe",
  },
  {
    day:13, date:"7/28", weekday:"二", stamp:"賦歸", title:"神戶→關西機場・賦歸",
    route:["🚗 神戶→關西機場（1小時）","🚗 還車 14:00","✈️ CX565 KIX→TPE 16:15"],
    weather:"夏",
    timeline:[
      {time:"上午", label:"神戶→關西機場（1小時）", icon:"🚗"},
      {time:"14:00", label:"CRQ關西機場還車", icon:"🐻‍❄️", note:"室內電話 +818076255511"},
      {time:"16:15", label:"CX565 關西起飛返回桃園", icon:"✈️"},
    ],
    attractions:[], food:[], shopping:[],
    notes:["提前抓緊還車與退稅時間，建議中午前抵達關西機場周邊。"],
    hotel:null,
  },
];

/* ---------------------------------------------------------
   TRANSPORTATION OVERVIEW
--------------------------------------------------------- */
const TRANSPORT = [
  {mode:"✈️ 去程航班", route:"TPE <b>→</b> KIX", dur:"CX564｜11:05–14:50", note:"7/16（四）出發"},
  {mode:"✈️ 回程航班", route:"KIX <b>→</b> TPE", dur:"CX565｜16:15", note:"7/28（二）14:00還車、16:15起飛"},
  {mode:"🚗 租車", route:"CRQ 關西機場租車", dur:"取車 7/16 16:30・還車 7/28 14:00", note:"室內電話 +818076255511"},
  {mode:"🚗 機場→伊勢", route:"關西機場 <b>→</b> 伊勢", dur:"約2.5小時", note:"Day1"},
  {mode:"🚗 伊勢→近江八幡", route:"伊勢 <b>→</b> 近江八幡", dur:"約2小時", note:"Day3"},
  {mode:"🚗 近江八幡→滋賀龍王", route:"近江八幡 <b>→</b> 滋賀龍王", dur:"約20分鐘", note:"Day4"},
  {mode:"🚗 滋賀龍王→大津", route:"滋賀龍王 <b>→</b> 大津", dur:"約35分鐘", note:"Day4"},
  {mode:"🚗 大津→雄琴溫泉", route:"大津 <b>→</b> 雄琴溫泉", dur:"約15分鐘", note:"Day5"},
  {mode:"🚗 雄琴溫泉→志賀", route:"雄琴溫泉 <b>→</b> 志賀", dur:"約30分鐘", note:"Day5"},
  {mode:"🚗 琵琶湖→美山町", route:"琵琶湖 <b>→</b> 美山町", dur:"約1.5小時", note:"Day6"},
  {mode:"🚗 美山町→舞鶴", route:"美山町 <b>→</b> 舞鶴", dur:"約1.5小時", note:"Day6"},
  {mode:"🚗 舞鶴→天橋立", route:"舞鶴 <b>→</b> 天橋立", dur:"約1小時", note:"Day7"},
  {mode:"🚗 天橋立→鳥取市", route:"天橋立 <b>→</b> 鳥取市", dur:"約2小時", note:"Day8"},
  {mode:"🚗 鳥取市→白兔神社", route:"鳥取市 <b>→</b> 白兔神社", dur:"約0.5小時", note:"Day8"},
  {mode:"🚗 白兔神社→玉造溫泉", route:"白兔神社 <b>→</b> 玉造溫泉", dur:"約1.5小時", note:"Day9"},
  {mode:"🚗 玉造溫泉→出雲→岡山", route:"玉造溫泉 → 稻佐之濱 → 出雲大社 <b>→</b> 岡山", dur:"約3小時（含出雲停留）", note:"Day10"},
  {mode:"🚗 岡山→倉敷", route:"岡山 <b>→</b> 倉敷", dur:"約45分鐘", note:"Day11"},
  {mode:"🚗 岡山→神戶", route:"岡山 <b>→</b> 神戶", dur:"約2.2小時", note:"Day12"},
  {mode:"🚗 神戶→關西機場", route:"神戶 <b>→</b> 關西機場", dur:"約1小時", note:"Day13"},
  {mode:"⛴️ 天橋立觀光船", route:"宮津港 <b>→</b> 一之宮", dur:"票價700円／身障半價350円", note:"可容納3–5台輪椅，一宮碼頭免費借輪椅"},
  {mode:"🚡 傘松公園纜車", route:"府中站 <b>→</b> 傘松公園", dur:"票價680円／身障半價340円", note:"府中站設輪椅專用電梯，最多容納2台輪椅"},
  {mode:"🚌 成相寺登山巴士", route:"傘松公園／成相寺", dur:"票價700円／身障半價350円", note:"每班限載1台可折疊輪椅，9:30–16:00每30分一班"},
  {mode:"🚤 松江堀川遊覽船", route:"松江城護城河一圈", dur:"船程固定50分鐘", note:"一日券成人2000円、身障含陪同1000円"},
  {mode:"🚡 琵琶湖觀景台纜車", route:"志賀 <b>→</b> The Biwako Terrace", dur:"停車1日券1000円＋設施費5000円", note:"輪椅可上纜車"},
];

/* ---------------------------------------------------------
   TRAVEL NOTES ACCORDION
--------------------------------------------------------- */
const NOTES = [
  { title:"🍡 各地特色美食與伴手禮", body:`
    <ul>
      <li><b>伊勢</b>：赤福餅／赤福冰（赤福本店）、伊勢烏龍麵（ふくすけ）、豚捨可樂餅、松阪牛燒肉。</li>
      <li><b>近江八幡</b>：たねや／Club Harie 年輪蛋糕、La Collina 年輪蛋糕本店、近江牛料理。</li>
      <li><b>美山町</b>：黍工房糰子套餐、美山牛乳霜淇淋、自家製布丁、手打蕎麥麵。</li>
      <li><b>出雲</b>：出雲蕎麥麵（割子／釜揚兩種吃法）、緣結紅豆湯（ぜんざい）。</li>
      <li><b>倉敷／岡山</b>：廣榮堂吉備糰子（桃太郎糰子）、橘香堂群雀餅、白桃與麝香葡萄果凍。</li>
      <li><b>神戶</b>：神戶Frantz魔法壺布丁、草莓松露巧克力、神戶風月堂法蘭酥、龜井堂瓦片仙貝。</li>
    </ul>` },
  { title:"⛩️ 神社參拜禮儀", body:`
    <ul>
      <li>過鳥居前先一鞠躬，步入參道時避開中軸線（正中為神明通道），改走參道兩側。</li>
      <li>伊勢神宮：外宮參道靠左通行、過火除橋；內宮參道靠右通行、過宇治橋。</li>
      <li>出雲大社傳統：可先至稻佐之濱裝取海砂，於本殿後方素鵞社換取「神砂」隨身作護身符。</li>
      <li>參拜順序建議：外宮御正宮 → 外宮別宮 → 內宮御正宮 → 內宮別宮。</li>
    </ul>` },
  { title:"♿ 無障礙／輪椅通行資訊", body:`
    <ul>
      <li>伊勢神宮內宮、外宮衛士詰所可免費租借輪椅與嬰兒車，參道旁設有專用通道。</li>
      <li>天橋立方案一（大眾運輸）需事先email <b>leigyo@tankai.jp</b> 告知輪椅型式、是否可折疊、尺寸與重量，安排斜坡與協助人員。</li>
      <li>鳥取沙丘入口設約100公尺無障礙木棧道，並提供免費充氣大輪胎沙灘專用輪椅；砂之美術館全程無障礙。</li>
      <li>松江堀川遊覽船碼頭設斜坡道，工作人員會協助輪椅乘客登船。</li>
      <li>岡山城天守閣輪椅僅能搭電梯至B1–4F，5–6F頂樓展望台僅能步行，故輪椅旅客無法登頂。</li>
      <li>多數觀光設施憑身心障礙手冊，本人及1名陪同者可享半價或減免優惠，建議隨身攜帶手冊正本。</li>
    </ul>` },
  { title:"🅿️ 停車場與自駕提醒", body:`
    <ul>
      <li>伊勢神宮：外宮第1/2/3停車場免費限2小時；內宮A1/A2依時段收費500円起，可上「らくらく伊勢」網站查即時滿位。</li>
      <li>近江八幡：日牟禮八幡宮前免費、市營小幡最高¥510/日、多賀最高¥500/日。</li>
      <li>美山茅葺之里：入口對面停車場每次¥500，夏季9:00–17:00。</li>
      <li>元伊勢籠神社：一般轎車、重機800円（30分鐘內免費）。</li>
      <li>天橋立飛龍觀：停車700円＋門票1000円／人（身障本人及1名陪同各500円）。</li>
      <li>倉敷市中央停車場24小時營業，每30分鐘100円。</li>
      <li>成相寺登山道路極度狹窄，含多個45度連續髮夾彎，會車需特別小心，一般駕駛容易打滑或熄火。</li>
    </ul>` },
  { title:"💴 現金與退稅小提醒", body:`
    <ul>
      <li>mont-bell（三井Outlet滋賀龍王）等日本原創品牌通常<b>無法退稅</b>，購買前先向店員確認。</li>
      <li>三井Outlet滋賀龍王、倉敷Outlet的松本清藥妝通常提供外國遊客專屬折價券（約3%–7%），可與退稅並用。</li>
      <li>多數道之驛、傳統老店、神社授與所仍以現金為主，建議隨身準備足量日圓零錢與千円鈔。</li>
    </ul>` },
  { title:"🧳 行前打包清單", body:`
    <ul>
      <li>身心障礙手冊正本（多處享半價優惠，務必隨身攜帶）</li>
      <li>護照（Outlet優惠券兌換需出示）</li>
      <li>輕便雨具／輕量傘（山陰、琵琶湖山區天氣多變）</li>
      <li>防曬用品、遮陽帽（鳥取沙丘、稻佐之濱日照強烈）</li>
      <li>好走的鞋（神社石階、沙丘、老街石板路）</li>
      <li>足夠現金與零錢、國際駕照與駕照日文譯本（自駕必備）</li>
      <li>裝御砂用的乾淨塑膠袋（出雲大社「御砂交換」儀式使用）</li>
    </ul>` },
  { title:"☎️ 緊急聯絡資訊", body:`
    <ul>
      <li>CRQ 關西機場租車公司室內電話：<b>+81 80-7625-5511</b></li>
      <li>天橋立無障礙協助窗口（丹後海陸交通）：<b>leigyo@tankai.jp</b></li>
      <li>建議另存目的地各飯店訂房確認信與電話，作為緊急聯絡備援。</li>
    </ul>` },
];

/* ---------------------------------------------------------
   MAP PINS (for the illustrated route summary)
   Coordinates are laid out on a stylized (non-cartographic)
   silhouette of the San'in ↔ Kinki ↔ Setouchi corridor,
   viewBox 0 0 900 520, west(low x)→east(high x).
--------------------------------------------------------- */
const MAP_PINS = [
  {name:"關西機場", day:1, x:610, y:468, icon:"✈️"},
  {name:"伊勢", day:1, x:660, y:300, icon:"⛩️"},
  {name:"近江八幡", day:3, x:500, y:205, icon:"🏯"},
  {name:"大津・琵琶湖", day:4, x:520, y:178, icon:"🌊"},
  {name:"雄琴溫泉", day:5, x:485, y:158, icon:"♨️"},
  {name:"美山町", day:6, x:400, y:118, icon:"🏡"},
  {name:"舞鶴", day:6, x:348, y:92, icon:"⚓"},
  {name:"天橋立", day:7, x:302, y:68, icon:"🐉"},
  {name:"鳥取", day:8, x:186, y:118, icon:"🏜️"},
  {name:"松江・玉造溫泉", day:9, x:104, y:152, icon:"🏯"},
  {name:"出雲大社", day:10, x:50, y:198, icon:"⛩️"},
  {name:"岡山", day:10, x:300, y:428, icon:"🐻‍❄️"},
  {name:"倉敷", day:11, x:262, y:442, icon:"🎐"},
  {name:"神戶", day:12, x:472, y:414, icon:"🥩"},
];

/* =========================================================
   RENDER HELPERS
   ========================================================= */
const el = (tag, cls, html) => { const e = document.createElement(tag); if(cls) e.className = cls; if(html!==undefined) e.innerHTML = html; return e; };

function renderNav(){
  const links = ['<a href="#home">首頁</a>','<a href="#map">地圖</a>'];
  DAYS.forEach(d => links.push(`<a href="#day${d.day}">Day ${d.day}</a>`));
  links.push('<a href="#hotels">住宿</a>','<a href="#transport">交通</a>','<a href="#notes">旅遊須知</a>');
  document.getElementById('navLinks').innerHTML = links.join('');
}

function renderStampStrip(){
  const wrap = document.getElementById('stampStrip');
  DAYS.forEach((d,i)=>{
    const a = el('a','stamp-dot', `${d.day}`);
    a.style.setProperty('--i', i);
    a.href = `#day${d.day}`;
    a.title = `Day ${d.day}｜${d.stamp}`;
    wrap.appendChild(a);
  });
}

function renderMap(){
  const legend = document.getElementById('mapLegend');
  MAP_PINS.forEach(p=>{
    const a = el('a', '', `${p.icon} ${p.name} · Day${p.day}`);
    a.href = `#day${p.day}`;
    legend.appendChild(a);
  });
}

function attractionCard(a){
  const c = el('div','card reveal');
  c.innerHTML = `
    <div class="card-photo"><span>${a.name.match(/[⛩️🏯🌊♨️🏡⚓🐉🏜️🎐🥩🐰🏖️🚡🚤]/)?.[0] || '📍'}</span>${a.hours?`<span class="tag">${a.hours}</span>`:''}</div>
    <div class="card-body">
      <div class="card-title">${a.name}</div>
      <div class="card-desc">${a.desc}</div>
      <div class="card-meta">
        ${a.duration?`<span><b>建議停留：</b>${a.duration}</span>`:''}
        ${a.fee?`<span><b>費用：</b>${a.fee}</span>`:''}
      </div>
      ${a.tips?`<div class="card-tip">💡 ${a.tips}</div>`:''}
      <div class="card-actions">
        ${a.map?`<a class="pill-link pill-map" href="${a.map}" target="_blank" rel="noopener">📍 Google Maps</a>`:''}
        ${a.site?`<a class="pill-link pill-site" href="${a.site}" target="_blank" rel="noopener">🔗 官方資訊</a>`:''}
      </div>
    </div>`;
  return c;
}

function foodCard(f){
  const c = el('div','card reveal');
  c.innerHTML = `
    <div class="card-photo">🍜</div>
    <div class="card-body">
      <div class="card-title">${f.name}</div>
      <div class="card-desc">${f.desc}</div>
      ${f.tips?`<div class="card-tip">💡 ${f.tips}</div>`:''}
      <div class="card-actions">
        ${f.map?`<a class="pill-link pill-map" href="${f.map}" target="_blank" rel="noopener">📍 Google Maps</a>`:''}
      </div>
    </div>`;
  return c;
}

function renderDays(){
  const root = document.getElementById('daysRoot');
  DAYS.forEach(d=>{
    const sec = el('section','day-section reveal');
    sec.id = `day${d.day}`;

    // head
    const head = el('div','day-head');
    head.innerHTML = `
      <div class="day-stamp"><span class="num">${d.day}</span><span class="label">${d.stamp}</span></div>
      <div class="day-titlebox">
        <div class="day-date">7月 ${d.date}（${d.weekday}）</div>
        <h2 class="day-title">${d.title}</h2>
        <div class="day-route">${d.route.map(r=>`<span class="seg">${r}</span>`).join('')}</div>
      </div>
      <div class="day-weather">🌤️ ${d.weather}</div>`;
    sec.appendChild(head);

    const grid = el('div','day-grid');

    // left: timeline
    const left = el('div','');
    left.innerHTML = `<h3 style="font-size:18px;margin-bottom:16px;">⏱️ 時間軸</h3>`;
    const ul = el('ul','timeline');
    d.timeline.forEach(t=>{
      const li = el('li','', `
        <span class="dot">${t.icon||''}</span>
        <span class="time">${t.time}</span><span class="label">${t.label}</span>
        ${t.note?`<div class="note">${t.note}</div>`:''}`);
      ul.appendChild(li);
    });
    left.appendChild(ul);

    if(d.hotel){
      const h = HOTELS[d.hotel];
      const hm = el('div','hotel-mini');
      hm.innerHTML = `<span class="ico">🏨</span><div><h4>${h.name}</h4><p>${h.area}｜${h.nights}</p><a href="${h.map}" target="_blank" rel="noopener">📍 在地圖上查看</a></div>`;
      left.appendChild(hm);
    }
    grid.appendChild(left);

    // right: attractions/food/shopping/notes
    const right = el('div','');
    if(d.attractions && d.attractions.length){
      right.appendChild(el('div','subgroup-title','⛩️ 主要景點'));
      const cg = el('div','card-grid');
      d.attractions.forEach(a=>cg.appendChild(attractionCard(a)));
      right.appendChild(cg);
    }
    if(d.food && d.food.length){
      const sg = el('div','subgroup');
      sg.appendChild(el('div','subgroup-title','🍱 美食推薦'));
      const cg = el('div','card-grid');
      d.food.forEach(f=>cg.appendChild(foodCard(f)));
      sg.appendChild(cg);
      right.appendChild(sg);
    }
    if(d.shopping && d.shopping.length){
      const sg = el('div','subgroup');
      sg.appendChild(el('div','subgroup-title','🛍️ 購物筆記'));
      const list = el('ul','note-list');
      d.shopping.forEach(s=>list.appendChild(el('li','', `<span class="ico">🛍️</span><span>${s}</span>`)));
      sg.appendChild(list);
      right.appendChild(sg);
    }
    if(d.notes && d.notes.length){
      const sg = el('div','subgroup');
      sg.appendChild(el('div','subgroup-title','📝 旅行筆記'));
      const list = el('ul','note-list');
      d.notes.forEach(n=>list.appendChild(el('li','', `<span class="ico">🐻‍❄️</span><span>${n}</span>`)));
      sg.appendChild(list);
      right.appendChild(sg);
    }
    if(d.tables && d.tables.length){
      d.tables.forEach(tb=>{
        const sg = el('div','subgroup');
        sg.appendChild(el('div','subgroup-title', `📋 ${tb.title}`));
        let tableHtml = `<table class="acc-table"><thead><tr>${tb.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        tb.rows.forEach(r=>{ tableHtml += `<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`; });
        tableHtml += `</tbody></table>`;
        sg.appendChild(el('div','', tableHtml));
        right.appendChild(sg);
      });
    }
    grid.appendChild(right);
    sec.appendChild(grid);
    root.appendChild(sec);
  });
}

function renderHotels(){
  const grid = document.getElementById('hotelsGrid');
  Object.entries(HOTELS).forEach(([key,h])=>{
    const c = el('div','hotel-card reveal');
    c.innerHTML = `
      <span class="day-tag">${h.area}</span>
      <h3>🏨 ${h.name}</h3>
      <div class="loc">${h.nights}</div>
      <dl>${h.detail.map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
      <div class="actions">
        <a class="pill-link pill-map" href="${h.map}" target="_blank" rel="noopener">📍 Google Maps</a>
      </div>`;
    grid.appendChild(c);
  });
}

function renderTransport(){
  const grid = document.getElementById('transportGrid');
  TRANSPORT.forEach(t=>{
    const c = el('div','transport-card reveal');
    c.innerHTML = `
      <div class="mode"><span class="ico">${t.mode.split(' ')[0]}</span><span>${t.mode.split(' ').slice(1).join(' ')}</span></div>
      <div class="route">${t.route}</div>
      <div class="dur">${t.dur}</div>
      <div class="note">${t.note}</div>`;
    grid.appendChild(c);
  });
}

function renderNotes(){
  const acc = document.getElementById('accordion');
  NOTES.forEach((n,i)=>{
    const item = el('div','acc-item');
    item.innerHTML = `
      <button class="acc-head" aria-expanded="false">
        <span>${n.title}</span><span class="plus">+</span>
      </button>
      <div class="acc-body"><div class="acc-body-inner">${n.body}</div></div>`;
    acc.appendChild(item);
  });
  acc.addEventListener('click', (e)=>{
    const btn = e.target.closest('.acc-head');
    if(!btn) return;
    const item = btn.parentElement;
    const body = item.querySelector('.acc-body');
    const isOpen = item.classList.contains('open');
    // close all
    acc.querySelectorAll('.acc-item.open').forEach(o=>{
      o.classList.remove('open'); o.querySelector('.acc-body').style.maxHeight = null;
      o.querySelector('.acc-head').setAttribute('aria-expanded','false');
    });
    if(!isOpen){
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      btn.setAttribute('aria-expanded','true');
    }
  });
}

function renderFooter(){
  const stats = document.getElementById('footerStats');
  const totalDays = DAYS.length;
  const totalDestinations = MAP_PINS.length;
  const totalHotels = Object.keys(HOTELS).length;
  stats.innerHTML = `
    <div class="stat"><b>${totalDays}</b><span>總天數</span></div>
    <div class="stat"><b>${totalDestinations}</b><span>主要目的地</span></div>
    <div class="stat"><b>${totalHotels}</b><span>住宿地點</span></div>
    <div class="stat"><b>2</b><span>國際航班</span></div>`;
  const nav = document.getElementById('footerNav');
  const links = ['#home:首頁','#map:地圖','#day1:Day 1','#day13:Day 13','#hotels:住宿','#transport:交通','#notes:旅遊須知'];
  nav.innerHTML = links.map(l=>{ const [href,label]=l.split(':'); return `<a href="${href}">${label}</a>`; }).join('');
}

/* =========================================================
   INTERACTIVITY
   ========================================================= */
function initNavToggle(){
  const btn = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', ()=> links.classList.toggle('open'));
  links.addEventListener('click', (e)=>{ if(e.target.tagName==='A') links.classList.remove('open'); });
}

function initReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

function initToTop(){
  const btn = document.getElementById('toTop');
  window.addEventListener('scroll', ()=>{
    btn.classList.toggle('show', window.scrollY > 600);
  });
  btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderNav();
  renderStampStrip();
  renderMap();
  renderDays();
  renderHotels();
  renderTransport();
  renderNotes();
  renderFooter();
  initNavToggle();
  initReveal();
  initToTop();
});
