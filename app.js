const tripData = {
  stays: [
    {
      range: "6/6 - 6/8",
      area: "北谷美濱",
      name: "北谷美濱公寓（Lapin Mihama Residence Hotel）",
      summary: "公寓式，可開伙；以北谷商圈與輕鬆散步為主。"
    },
    {
      range: "6/8 - 6/11",
      area: "恩納村海景",
      name: "沖繩蒙特利海景度假酒店",
      summary: "海景飯店，主打飯店浮潛、海景與放鬆。"
    },
    {
      range: "6/11 - 6/13",
      area: "那霸牧志",
      name: "沖繩逸之彩飯店",
      summary: "近國際通與牧志市場；南下順遊後切入市區節奏。"
    }
  ],
  segments: [
    {
      id: "mihama",
      label: "北谷段 6/6-6/8",
      days: [
        {
          day: "D1",
          date: "6/6（六）",
          title: "早班機抵達，先採買再入住",
          items: [
            { time: "06:45", label: "長榮 BR112 台北桃園出發", duration: "06:45 起飛", desc: "早班機，建議 04:45 前抵達桃園二航廈。" },
            { time: "09:15-10:30", label: "那霸機場取車", duration: "約 60 分", desc: "09:15 抵達後前往 租車臨空豐崎營業所（那霸機場）領兩台車。" },
            { time: "11:00-12:30", label: "午餐：機場或帕爾科商場簡餐", duration: "約 60-90 分", desc: "8 人先以好停車、好集合為原則；若時間順，就到帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）用美食街或餐廳。" },
            { time: "13:10-15:25", label: "帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", duration: "約 2 小時 15 分", desc: "一次完成食材、飲料、早餐麵包與生活用品採買，也可順手用餐、休息與看海。" },
            { time: "16:00-16:30", label: "入住北谷美濱公寓（Lapin Mihama Residence Hotel）", duration: "約 30 分", desc: "安頓行李、分配房間與停車。" },
            { time: "18:00-19:00", label: "晚餐：公寓開伙 / 美國村室內餐廳", duration: "約 60 分", desc: "主選公寓開伙；若外食，以美國村步行可達餐廳為主，不另外開車找店，晚餐後直接接煙火動線。" },
            { time: "19:15-19:50", label: "美國村海邊散步＋卡位", duration: "約 30 分", desc: "建議往海邊步道 或 美國村海側移動，提早找好全家一起看的位置。" },
            { time: "20:00-20:10", label: "北谷西海岸週六煙火", duration: "約 3-10 分", desc: "常態週六晚間施放；仍建議出發前 1-3 天確認官方公告與天氣。" },
            { time: "20:10 後", label: "步行回飯店休息", duration: "彈性", desc: "D1 以輕鬆收尾，美國村正式慢逛留給 D2。" }
          ],
          note: "早班機日以採買、入住與晚間煙火為主，維持輕鬆節奏。"
        },
        {
          day: "D2",
          date: "6/7（日）",
          title: "北谷商圈主日",
          items: [
            { time: "09:30-10:00", label: "美濱公共停車場停車＋美國村海側散步", duration: "約 30 分", desc: "週日先把車停好，後續以步行和分流為主，降低 8 人找車位與集合壓力。" },
            { time: "10:00-11:00", label: "美式雜貨店阿美利肯迪波（American Depot）＋美國村先逛", duration: "約 60 分", desc: "10:00 開門的逛街型名店，不用排座位，適合等午餐前先逛。" },
            { time: "11:00-12:15", label: "午餐：美國村名店候選", duration: "約 75 分", desc: "主選 88 牛排館（Steak House 88）或東尼羅馬美式肋排（Tony Roma's），座位較適合 8 人；若想在地口味，改塔可飯咖啡奇吉姆那（タコライスCafe きじむなぁ）或鶴小沖繩麵（そば家 鶴小）。" },
            { time: "12:30-13:45", label: "二手街北谷店（2nd STREET）", duration: "約 60-75 分", desc: "主力二手挖寶點，依停車與體力決定是否全員同行。" },
            { time: "13:45-14:30", label: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）", duration: "約 30-45 分", desc: "機能服、涼感衣、雨衣、防曬與鞋襪採買備案；停車約 10 台，現場不好停就跳過。" },
            { time: "14:45-16:30", label: "美國村慢逛＋日落海灘散步", duration: "約 90-105 分", desc: "商圈、伴手禮和海邊景色一起排，不硬塞甜點店；若停車或體力不順，就直接回公寓休息。" },
            { time: "18:00 後", label: "晚餐：自炊 / 北谷港海邊餐廳候選", duration: "彈性", desc: "主選公寓自炊；若想外食，可看北谷港海邊餐廳（Chatan Harbor）或美國村室內餐廳。8 人外食先看座位與停車，不追排隊店。" }
          ],
          note: "重心完全放在北谷；餐廳用候選方式處理，避免 8 人被單一排隊名店卡住。"
        }
      ]
    },
    {
      id: "onna",
      label: "恩納段 6/8-6/11",
      days: [
        {
          day: "D3",
          date: "6/8（一）",
          title: "移動到恩納村，座喜味短走與釣魚分流",
          items: [
            { time: "10:00-10:30", label: "北谷退房", duration: "約 30 分", desc: "整理行李後先接順路登高散步點。" },
            { time: "10:40-11:50", label: "座喜味城跡", duration: "約 60-70 分", desc: "北谷到恩納途中順路短走，媽媽可登高散步；爸爸可短走或在入口附近休息。" },
            { time: "12:00-13:15", label: "午餐：三線の花（浜之家備案）", duration: "約 60-75 分", desc: "主選純沖繩料理 三線の花，適合在地料理與家族用餐；若想吃海鮮，改海鮮料理 浜之家。8 人先確認座位與停車。" },
            { time: "14:00-14:30", label: "抵達飯店附近 / 寄放行李", duration: "彈性", desc: "等待 15:00 Check-in，保留緩衝。" },
            { time: "15:00-15:30", label: "飯店辦理入住", duration: "約 30 分", desc: "先進房休息，切成度假節奏。" },
            { time: "16:00-18:30", label: "釣の家谷茶め〜", duration: "約 2-3 小時", desc: "可在這裡租借釣具釣魚，並搭配谷茶海岸附近散步。" },
            { time: "16:00-17:00", label: "谷茶海岸", duration: "約 45-60 分", desc: "近距離散步海岸，適合看海與短暫停留。" },
            { time: "21:00-23:00", label: "晚餐：琉球之牛燒肉 恩納別館", duration: "約 2 小時", desc: "已預約，預約 ID：FTNSLF。座位提供 2 小時，入住飯店名稱填 沖繩蒙特利飯店。" }
          ],
          note: "6/8 以順路短走、入住、分流活動與已預約晚餐為主；座喜味只抓短版，不再加其他讀谷點。"
        },
        {
          day: "D4",
          date: "6/9（二）",
          title: "飯店浮潛優先，殘波岬短停",
          items: [
            { time: "09:30-11:30", label: "飯店玩水：老虎海灘 / Sunset Garden", duration: "約 90-120 分", desc: "先用飯店旁老虎海灘與戶外泳池群，含波浪池、主泳池、兒童滑水池與 Bubble Hill Pool；海上活動再依海況和現場規定安排。" },
            { time: "11:30-13:00", label: "午餐：飯店午餐 / 回房休息", duration: "約 60-90 分", desc: "玩水後先吃午餐、沖洗和休息，避免下午體力掉太快；這餐不另外開車找店。" },
            { time: "15:00-16:00", label: "飯店設施活動：Blue Reef / 體驗工作坊", duration: "約 60 分", desc: "可用 Blue Reef 室內泳池、天然溫泉、三溫暖，或安排風獅爺彩繪、相框製作等約 30-60 分鐘的體驗工作坊。" },
            { time: "16:20-17:20", label: "殘波岬", duration: "約 45 分", desc: "看斷崖海景與燈塔，體力不足可跳過登塔。" },
            { time: "18:00-19:00", label: "晚餐：飯店自助晚餐", duration: "約 60 分", desc: "D4 早上玩水、傍晚外出後，晚餐回飯店最穩，避免再找停車與分桌。" }
          ],
          note: "D4 以飯店玩水、午餐休息與傍晚短程看海為主；若遇雨天，適合改為琉球村或飯店室內設施。"
        },
        {
          day: "D5",
          date: "6/10（三）",
          title: "恩納彈性日：真榮田岬、恩納之驛與沖繩鐘乳洞",
          items: [
            { time: "09:30-11:00", label: "飯店自由活動：泳池 / 海灘 / Blue Reef", duration: "約 90 分", desc: "這天只安排輕量飯店活動，可選戶外泳池、老虎海灘、室內泳池或溫泉，保留外出體力。" },
            { time: "11:15-12:00", label: "真榮田岬", duration: "約 30-45 分", desc: "只看展望台與海岬步道，不安排青之洞窟下水。" },
            { time: "12:15-13:30", label: "午餐：恩納之驛", duration: "約 60-75 分", desc: "午餐、小吃與琉冰一起解決；停車與座位彈性高，適合 8 人分頭買再集合。" },
            { time: "14:00-15:20", label: "沖繩鐘乳洞", duration: "約 60-90 分", desc: "自然系室內景點，天氣不穩也好安排；從恩納之驛接過去約 20 分鐘。" },
            { time: "15:30-16:30", label: "返回飯店方向", duration: "約 60 分", desc: "直接回飯店休息，避免傍晚再折返海邊；若天氣不好，就接 Blue Reef 或館內工藝體驗。" },
            { time: "18:00-19:00", label: "晚餐：飯店自助晚餐", duration: "約 60 分", desc: "恩納段收尾以飯店晚餐最穩；若大家想外食，三線の花可作備案，但 8 人要先訂位。" }
          ],
          note: "D5 以真榮田岬短停、恩納之驛與沖繩鐘乳洞為主；真榮田岬是萬座毛替代型海岬景點，不安排下水。"
        }
      ]
    },
    {
      id: "naha",
      label: "那霸段 6/11-6/13",
      days: [
        {
          day: "D6",
          date: "6/11（四）",
          title: "伊亞斯商場午餐、豐崎水族館長版停留、那霸入住與人生酒場",
          items: [
            { time: "09:30-10:00", label: "恩納退房", duration: "約 30 分", desc: "退房後一路往南，不折返。" },
            { time: "11:30-12:30", label: "午餐：iias 沖繩豐崎美食街", duration: "約 60 分", desc: "商場內用餐最穩，A&W、沖繩食堂與其他餐飲可分流；停車和水族館同區，8 人不用再換點。" },
            { time: "13:00-18:00", label: "豐崎迪艾姆艾姆水族館（DMM Kariyushi）", duration: "約 4-5 小時", desc: "如果 13:00 左右進館，慢慢逛、拍照、看表演與休息，待到傍晚很合理。" },
            { time: "18:30-19:00", label: "入住逸之彩", duration: "約 30 分", desc: "進那霸後轉成市區採買節奏。" },
            { time: "19:30 後", label: "晚餐：人生酒場 / 飯店宵夜拉麵", duration: "彈性", desc: "主選看體力：想外食可去人生酒場，24H 營業；若水族館或入住拖晚，就直接用飯店宵夜拉麵收尾。" }
          ],
          note: "D6 白天是換飯店與水族館，晚上用人生酒場作彈性晚餐 / 宵夜。"
        },
        {
          day: "D7",
          date: "6/12（五）",
          title: "牧志市場海鮮，瀨長島半日",
          items: [
            { time: "09:30-11:00", label: "國際通", duration: "約 1-2 小時", desc: "上午適合安排市區散步，節奏輕鬆。" },
            { time: "11:30-13:30", label: "午餐：第一牧志公設市場", duration: "約 1.5-2 小時", desc: "D7 主餐，1 樓買海鮮、2 樓代客料理；8 人可用桌位處理，比排小店穩。" },
            { time: "14:00-17:30", label: "瀨長島 Umikaji Terrace", duration: "約 3-4 小時", desc: "下午去最適合，看海、看飛機、散步和喝下午茶都很舒服。" },
            { time: "18:30 後", label: "晚餐：國際通輕食 / 飯店宵夜拉麵", duration: "彈性", desc: "中午已是牧志市場主餐，晚上不排正式大餐；可分流吃肉屋ししや、琉球美麗雪、暖暮或回飯店吃宵夜拉麵。" }
          ],
          note: "D7 保留大家期待的牧志市場海鮮；晚上只留輕食、宵夜或自由活動。"
        },
        {
          day: "D8",
          date: "6/13（六）",
          title: "晚回班機日：輕鬆收尾再返台",
          items: [
            { time: "10:00-10:30", label: "飯店退房", duration: "約 30 分", desc: "兩台車自駕，退房後行李可放車上，不影響後續午餐與採買。" },
            { time: "10:30-11:15", label: "市區輕鬆補逛 / 咖啡", duration: "約 45 分", desc: "視整理速度短停，也可直接前往午餐。" },
            { time: "11:30-13:00", label: "午餐：燒肉本部牧場 那霸店", duration: "約 90 分", desc: "返台日前正式午餐，建議訂 11:30 或 12:00；8 人先訂位，吃完接阿希比娜與還車動線。" },
            { time: "13:10-15:00", label: "阿希比娜暢貨中心（Ashibinaa Outlet）", duration: "約 1.5-2 小時", desc: "最後採買只抓重點店，15:00 前離開；若午餐或交通延誤，直接縮短或跳過這段。" },
            { time: "15:20-16:00", label: "歸還兩台租車 / 搭接駁", duration: "約 40 分", desc: "前往 租車臨空豐崎營業所（那霸機場）還車；目標 16:00 前完成還車並上接駁車。" },
            { time: "16:30", label: "抵達那霸機場", duration: "目標時間", desc: "以 16:30 抵達機場航廈為目標；若還車或接駁延誤，機場緩衝仍優先。" },
            { time: "16:30-19:15", label: "報到 / 托運 / 安檢", duration: "約 2.5-3 小時", desc: "航空櫃台、托運、出境安檢、晚餐或補買伴手禮；19:15 前到登機口附近。" },
            { time: "19:55", label: "長榮 BR185 那霸返台", duration: "19:55 起飛 · 20:30 抵達桃園", desc: "夏季時刻表為 19:55 那霸起飛、20:30 抵達桃園；出發前仍請以訂位紀錄與長榮公告為準。" }
          ],
          note: `BR185 19:55 起飛後，D8 不建議把阿希比娜逛滿；目標 16:00 前完成還車。<br>機場時間可搭配 <a class="inline-link" href="https://www.naha-airport.co.jp/en/flight/security/" target="_blank" rel="noreferrer">那霸機場官方安檢說明</a> 一起看；若午餐或交通延誤，優先保留機場緩衝。`
        }
      ]
    }
  ],
  backups: [
    {
      segmentId: "mihama",
      title: "北谷住宿備案",
      summary: "近的先留這些。",
      places: [
        {
          name: "二手街北谷店（2nd STREET）",
          badges: ["shopping", "rainy"],
          distance: "距離飯店約 5 分鐘車程",
          description: "北谷主要二手店，古著、包包、鞋款和生活雜貨都能一起看。"
        },
        {
          name: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）",
          badges: ["shopping", "rainy"],
          distance: "距離二手街北谷店約短程車程",
          description: "機能服、涼感衣、雨衣、防曬、鞋襪與戶外小物備案；停車約 10 台，適合分流短停。"
        },
        {
          name: "美國村",
          badges: ["sunny", "shopping", "food"],
          distance: "距離飯店步行約 5-10 分鐘",
          description: "北谷最完整的海邊商圈，白天好逛、傍晚看海也漂亮。"
        },
        {
          name: "豬肉蛋飯糰（北谷美國村店）",
          badges: ["food", "rainy"],
          distance: "距離飯店步行約 10 分鐘",
          description: "外帶早餐備案，適合少量購買，不作 8 人正式停留點。"
        },
        {
          name: "浜屋沖繩麵",
          badges: ["food", "rainy"],
          distance: "距離飯店約 5 分鐘車程",
          description: "沖繩麵老店備案；8 人用餐與停車排隊風險較高，當天不硬排。"
        },
        {
          name: "88 牛排館北谷店（Steak House 88）",
          badges: ["food", "rainy"],
          distance: "美國村內，使用北谷町營停車場",
          description: "座位多、兒童友善，適合 8 人家庭午餐候選。"
        },
        {
          name: "東尼羅馬美式肋排北谷店（Tony Roma's）",
          badges: ["food", "rainy"],
          distance: "美國村內",
          description: "美式肋排餐廳，週日 11:00 起營業，適合團體午餐候選。"
        },
        {
          name: "塔可飯咖啡奇吉姆那（タコライスCafe きじむなぁ）",
          badges: ["food", "rainy"],
          distance: "美國村商場內",
          description: "沖繩名物オムタコ候選，想吃在地風味時可優先看現場座位。"
        },
        {
          name: "鶴小沖繩麵美濱店（そば家 鶴小）",
          badges: ["food", "rainy"],
          distance: "美國村內",
          description: "美國村內沖繩麵候選，比另行開車去浜屋更適合家庭動線。"
        },
        {
          name: "グルメ迴轉壽司市場 美浜店",
          badges: ["food", "rainy"],
          distance: "美國村內，步行或短程移動",
          description: "產地直送海鮮迴轉壽司；不接受訂位，尖峰可能排隊，8 人可接受分桌時再排。"
        },
        {
          name: "美式雜貨店阿美利肯迪波（American Depot）",
          badges: ["shopping", "rainy"],
          distance: "美國村內",
          description: "10:00 開門的美式雜貨與服飾名店，適合午餐前先逛。"
        },
        {
          name: "帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）",
          badges: ["shopping", "rainy"],
          distance: "距離 Lapin 約 25-35 分鐘車程",
          description: "浦添海邊大型商場，適合第一天集中補食材、衣物和日用品。"
        },
        {
          name: "日落海灘",
          badges: ["sunny"],
          distance: "距離美國村步行可達",
          description: "就在美國村旁，適合把商圈散步和海邊收尾接在一起。"
        },
        {
          name: "阿拉哈海灘",
          badges: ["sunny"],
          distance: "距離飯店步行約 10 分鐘",
          description: "海灘步道平緩，適合傍晚散步、看夕陽與活動。"
        },
        {
          name: "北谷海景散步道",
          badges: ["sunny", "food"],
          distance: "距離美國村步行可達",
          description: "緊鄰美國村海側，適合接咖啡、海景散步與傍晚停留。"
        },
        {
          name: "美國村海邊木棧道",
          badges: ["sunny"],
          distance: "距離美國村步行可達",
          description: "臨海木棧道型散步點，適合接在美國村或日落海灘後慢慢走。"
        },
        {
          name: "北谷漁人碼頭（Uminchu Wharf）",
          badges: ["sunny", "food"],
          distance: "距離飯店約 5-10 分鐘車程",
          description: "北谷漁港周邊碼頭區，適合看海、海鮮短停或接海上活動據點。"
        },
        {
          name: "北谷溫泉泳池 ちゅらーゆ",
          badges: ["rainy"],
          distance: "距離美國村步行可達",
          description: "天然溫泉、三溫暖與泳池型備案，下雨或想放鬆時很好用。"
        },
        {
          name: "北谷港海邊餐廳（Chatan Harbor）",
          badges: ["food", "sunny"],
          distance: "距離飯店約 5-10 分鐘車程",
          description: "海邊啤酒餐廳，適合安排成北谷段的晚餐或傍晚看海用餐。"
        },
        {
          name: "VONGO & ANCHOR",
          badges: ["food", "sunny"],
          distance: "美國村海側，步行可達",
          description: "海景咖啡、早午餐與三明治備案；適合下午分流休息，不作 8 人正式主餐。"
        }
      ]
    },
    {
      segmentId: "onna",
      title: "恩納住宿備案",
      summary: "海邊和雨天備用。",
      places: [
        {
          name: "前兼久漁港",
          badges: ["sunny"],
          distance: "距離蒙特利步行約 3-5 分鐘",
          description: "離飯店很近，適合看港景和漁船動線；若要釣魚，以現場規定為準。"
        },
        {
          name: "老虎海灘（飯店海灘）",
          badges: ["sunny"],
          distance: "和飯店同區",
          description: "恩納段最優先的水上活動基地，官方列有輕艇、浮潛、潛水等海上活動；適合晴天先從飯店內開始，依海況與現場規定調整。"
        },
        {
          name: "Sunset Garden 戶外泳池群",
          badges: ["sunny"],
          distance: "和飯店同區",
          description: "飯店戶外泳池群，包含波浪池、主泳池、兒童滑水池與 Bubble Hill Pool；適合 D4 上午作為 8 人分流玩水主線。"
        },
        {
          name: "Blue Reef 室內泳池與溫泉",
          badges: ["rainy"],
          distance: "和飯店同區",
          description: "室內泳池、兒童滑水池、天然溫泉、三溫暖與健身房都在這裡；雨天或傍晚回飯店後最穩。"
        },
        {
          name: "體驗工作坊 / 海洋工藝",
          badges: ["sunny", "rainy"],
          distance: "和飯店同區",
          description: "風獅爺彩繪、相框製作、陶藝等約 30-60 分鐘體驗，適合不下水的人或雨天備案；多數需看當日受理時間。"
        },
        {
          name: "恩納之驛",
          badges: ["food", "rainy"],
          distance: "距離飯店約 5-10 分鐘車程",
          description: "恩納村很實用的小吃站，推薦芒果冰、海葡萄料理和在地熟食。"
        },
        {
          name: "純沖繩料理 三線の花",
          badges: ["food", "rainy"],
          distance: "恩納村 58 號線周邊，短程車程",
          description: "海葡萄、島豆腐炒苦瓜、炙燒豬肉與紫地瓜等在地料理；家族與孝親友善，8 人建議先訂位。"
        },
        {
          name: "THE GARLIC SHRIMP",
          badges: ["food", "sunny"],
          distance: "恩納海岸線周邊，適合接真榮田岬",
          description: "蒜味蝦蝦飯備案；可能候位，餐點偏單一，適合分流或外帶加餐。"
        },
        {
          name: "Gajimaru Cafe&Bar",
          badges: ["food", "rainy"],
          distance: "真榮田岬周邊",
          description: "素食塔可飯、島豆腐麻婆拉麵與飲品備案；週五休，適合想吃清爽或素食時分流。"
        },
        {
          name: "海鮮料理 浜之家",
          badges: ["food", "rainy"],
          distance: "恩納村仲泊，國道 58 號線周邊",
          description: "海鮮料理與奶油炸魚備案；停車位不多，8 人建議先確認座位與停車。"
        },
        {
          name: "釣の家谷茶め〜",
          badges: ["sunny"],
          distance: "可作為 6/8 釣魚分流點",
          description: "可租借釣具，適合安排釣魚活動，並搭配附近海岸散步。"
        },
        {
          name: "谷茶海岸",
          badges: ["sunny"],
          distance: "距離谷茶釣具租借點步行可達",
          description: "適合搭配釣魚活動時安排看海、散步與短暫停留。"
        },
        {
          name: "琉球之牛燒肉 恩納別館",
          badges: ["food", "rainy"],
          distance: "恩納前兼久，飯店周邊短程移動",
          description: "6/8 21:00 已預約，預約 ID：FTNSLF；座位提供 2 小時。"
        },
        {
          name: "青之洞窟浮潛",
          badges: ["sunny"],
          distance: "距離飯店約 10 分鐘車程",
          description: "也就是藍洞浮潛；目的地是真榮田岬・青之洞窟。若飯店浮潛玩不夠、海況又穩定時，可加碼外出。"
        },
        {
          name: "真榮田岬",
          badges: ["sunny"],
          distance: "距離飯店約 10 分鐘車程",
          description: "海岬展望台與短步道，適合作為萬座毛替代型短停點；D5 只看景，不安排青之洞窟下水。"
        },
        {
          name: "琉球村",
          badges: ["rainy"],
          distance: "距離飯店約 10 分鐘車程",
          description: "古民家、表演與手作元素都集中在這裡，是恩納段最穩的雨天備案。"
        },
        {
          name: "體驗王國むら咲むら",
          badges: ["rainy"],
          distance: "距離飯店約 20 分鐘車程",
          description: "如果想找另一個文化型雨備點，這裡可做手作與傳統體驗。"
        },
        {
          name: "恩納村文化情報中心",
          badges: ["rainy"],
          distance: "距離飯店約 20-25 分鐘車程",
          description: "適合短停的輕量文化點，下雨時可先來這裡補旅遊資訊與看展望空間。"
        },
        {
          name: "恩納村博物館",
          badges: ["rainy"],
          distance: "可和文化情報中心一起安排",
          description: "補充恩納在地歷史與文化，適合不想跑太遠時排成小型室內行程。"
        },
        {
          name: "生命之丘（BIOS之丘）",
          badges: ["sunny", "rainy"],
          distance: "距離飯店約 20 分鐘車程",
          description: "自然系園區，親子友善；天氣不穩時也有部分可安排內容。"
        },
        {
          name: "沖繩鐘乳洞",
          badges: ["rainy"],
          distance: "距離飯店約 15-20 分鐘車程",
          description: "若想找不是商場型的雨備，可用鍾乳洞當半日自然室內替代案。"
        },
        {
          name: "海上滑索",
          badges: ["sunny"],
          distance: "距離飯店約 10-15 分鐘車程",
          description: "位於喜來登沖繩太陽碼頭渡假酒店內，適合當晴天加碼活動；不接受預約且容易受天氣影響。"
        },
        {
          name: "座喜味城跡",
          badges: ["sunny"],
          distance: "距離飯店約 15 分鐘車程",
          description: "適合不想跑遠時安排成半日文化散步，步調輕鬆。"
        },
        {
          name: "殘波岬",
          badges: ["sunny"],
          distance: "距離飯店約 20 分鐘車程",
          description: "以斷崖海景和燈塔視野著名，適合傍晚短停。"
        },
        
      ]
    },
    {
      segmentId: "naha",
      title: "那霸住宿備案",
      summary: "市區和最後採買。",
      places: [
        {
          name: "豐崎迪艾姆艾姆水族館（DMM Kariyushi）",
          badges: ["rainy"],
          distance: "從恩納出發約 60-70 分鐘車程；入住那霸前順路",
          description: "冷氣穩定、動線輕鬆，換宿日排這裡不會太累。"
        },
        {
          name: "伊亞斯沖繩豐崎商場（iias）",
          badges: ["shopping", "rainy"],
          distance: "距離 豐崎水族館 步行可達",
          description: "可接在 豐崎水族館後補逛、休息或簡單吃點東西，是最順的南下延伸點。"
        },
        {
          name: "iias 沖繩豐崎美食街",
          badges: ["food", "rainy"],
          distance: "豐崎水族館同區，商場內",
          description: "D6 水族館前後最穩的餐食補位；A&W、塔可飯、牛排與商場餐飲可分流，適合 8 人不同口味。"
        },
        {
          name: "A&W iias 沖繩豐崎店",
          badges: ["food", "rainy"],
          distance: "iias 商場內，水族館出口附近",
          description: "沖繩限定美式漢堡、薯條與 Root Beer；空間寬敞，適合快速補餐。"
        },
        {
          name: "沖繩食堂 やっぱりちゃん イーアス沖縄豊崎店",
          badges: ["food", "rainy"],
          distance: "iias 商場內",
          description: "沖繩蕎麥麵與沖繩雜燴飯備案；表現偏商場餐，優點是動線穩、點餐快。"
        },
        {
          name: "阿希比娜暢貨中心（Ashibinaa Outlet）",
          badges: ["shopping", "rainy"],
          distance: "距離 伊亞斯商場 / 豐崎迪艾姆艾姆水族館（DMM Kariyushi） 約 5-10 分鐘車程",
          description: "可和 豐崎水族館、伊亞斯商場 串成同一段南部採買動線，但不一定要硬塞在換宿日。"
        },
        {
          name: "運動用品店豐崎店（Sports Depo）",
          badges: ["shopping", "rainy"],
          distance: "位於 阿希比娜對面商場內，距離阿希比娜約 5 分鐘車程",
          description: "運動用品、球鞋、泳具與戶外用品備案，適合接 豐崎迪艾姆艾姆水族館（DMM Kariyushi） / 伊亞斯商場 / 暢貨中心 的豐見城動線。"
        },
        {
          name: "瀨長島 Umikaji Terrace",
          badges: ["sunny"],
          distance: "距離飯店約 20 分鐘車程",
          description: "天氣好時很適合看海景、看飛機和簡單散步。"
        },
        {
          name: "瀨長島 Umikaji Terrace 餐飲群",
          badges: ["food", "sunny"],
          forceShow: true,
          distance: "瀨長島商場內",
          description: "氾濫漢堡、Kijimuna 塔可飯、冰淇淋與鬆餅等下午茶備案；適合分流，不再排大餐。"
        },
        {
          name: "牧志市場",
          badges: ["food", "rainy"],
          distance: "距離逸之彩步行約 10 分鐘",
          description: "早餐與海鮮都好安排，想吃市場感的那霸早晨很適合放這裡。"
        },
        {
          name: "暖暮拉麵 那覇牧志店",
          badges: ["food", "rainy"],
          distance: "國際通 / 牧志周邊，步行可達",
          description: "豚骨拉麵排隊名店；適合晚間分流或宵夜，不適合 8 人正式晚餐。"
        },
        {
          name: "英本沖繩麵（Okinawa Soba EIBUN）",
          badges: ["food", "rainy"],
          distance: "壺屋與國際通周邊，步行或短程移動",
          description: "創意沖繩麵備案；售完為止，若 D7 已排牧志市場就當作替代候選。"
        },
        {
          name: "肉屋ししや",
          badges: ["food", "rainy"],
          distance: "國際通市場本通周邊",
          description: "炙燒和牛握壽司與鐵板燒；外帶小吃比 8 人內用更順。"
        },
        {
          name: "康竜拉麵 國際通周邊",
          badges: ["food", "rainy"],
          forceShow: true,
          distance: "國際通周邊",
          description: "國際通拉麵備案；名氣較暖暮低，適合宵夜或分流，不作全員正式餐。"
        },
        {
          name: "琉球美麗雪 那霸國際通店",
          badges: ["food", "rainy"],
          forceShow: true,
          distance: "國際通周邊",
          description: "雪花冰、豆花與炸饅頭甜點備案；台灣口味友善，適合逛街中途冷氣休息。"
        },
        {
          name: "唐吉訶德國際通店",
          badges: ["shopping", "rainy"],
          distance: "距離飯店步行約 10 分鐘",
          description: "適合最後一輪補伴手禮、小物和國際通採買。"
        },
        {
          name: "人生酒場 沖縄店",
          badges: ["food", "rainy"],
          distance: "那霸松山，距離逸之彩約 5-10 分鐘車程",
          description: "24H 韓式居酒屋，適合 D6 入住那霸後作彈性晚餐 / 宵夜。"
        },
        {
          name: "燒肉本部牧場 那霸店",
          badges: ["food", "rainy"],
          distance: "那霸久茂地，D8 退房後可接午餐",
          description: "本部牛燒肉，適合 D8 返台日前午餐；吃完接阿希比娜與還車動線。"
        },
        {
          name: "榮町市場",
          badges: ["food"],
          distance: "距離飯店約 10-15 分鐘車程",
          description: "晚上想吃更在地的小店或居酒屋時，可把這裡當晚餐備案。"
        },
        {
          name: "首里城",
          badges: ["sunny"],
          distance: "距離飯店約 15 分鐘車程",
          description: "琉球王國代表性文化景點，和首里周邊一起排最順。"
        },
        {
          name: "壺屋やちむん通",
          badges: ["sunny", "food"],
          distance: "距離飯店步行或短程車程可達",
          description: "適合接在牧志市場或國際通之後，作為比較輕鬆的文化散步段。"
        }
      ]
    }
  ]
};

const rainyScheduleDays = {
  mihama: [
    {
      day: "D1",
      date: "6/6（六）",
      title: "雨天版：抵達後先用商場與公寓穩住節奏",
      items: [
        { time: "06:45", label: "長榮 BR112 台北桃園出發", duration: "06:45 起飛", desc: "早班機維持原安排，雨具與薄外套放隨身包，落地後先不要排戶外點。" },
        { time: "09:15-10:30", label: "那霸機場取車", duration: "約 60 分", desc: "取車後直接走商場與住宿動線，避免雨天多點上下車。" },
        { time: "11:00-12:30", label: "午餐：機場或帕爾科商場簡餐", duration: "約 60-90 分", desc: "以好停車、好集合為原則；若已到帕爾科商場（SAN-A Urasoe West Coast PARCO CITY），直接用美食街或館內餐廳。" },
        { time: "13:10-15:25", label: "帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", duration: "約 2 小時 15 分", desc: "用商場完成採買、雨具補給與休息；若午餐還沒吃，這裡就是 D1 最穩餐點。" },
        { time: "16:00-16:30", label: "入住北谷美濱公寓（Lapin Mihama Residence Hotel）", duration: "約 30 分", desc: "先回房整理濕衣物與行李，讓晚上保留彈性。" },
        { time: "18:00-19:30", label: "晚餐：公寓開伙 / 美國村室內餐廳", duration: "約 90 分", desc: "雨勢大就自炊；雨小再步行到美國村室內餐廳，8 人不另外開車追店，不硬等煙火。" },
        { time: "20:00 後", label: "步行回飯店休息", duration: "彈性", desc: "若煙火取消或雨勢明顯，直接回房休息，D2 再看天氣調整。" }
      ],
      note: "雨天版 D1 不把煙火當必要行程，核心是順利取車、採買、入住與恢復體力。"
    },
    {
      day: "D2",
      date: "6/7（日）",
      title: "雨天版：北谷室內購物與餐廳候選",
      items: [
        { time: "09:30-10:00", label: "美濱公共停車場停車＋美國村海側散步", duration: "約 30 分", desc: "雨小才走海側；雨大就只停車集合，直接進商圈。" },
        { time: "10:00-11:00", label: "美式雜貨店阿美利肯迪波（American Depot）＋美國村先逛", duration: "約 60 分", desc: "以室內店舖與短距離移動為主，減少撐傘移動。" },
        { time: "11:00-12:15", label: "午餐：美國村名店候選", duration: "約 75 分", desc: "主選 88 牛排館或 Tony Roma's，座位較適合 8 人；若想在地口味，改塔可飯或鶴小沖繩麵。雨天重點是座位與候位，不追戶外景。" },
        { time: "12:30-13:45", label: "二手街北谷店（2nd STREET）", duration: "約 60-75 分", desc: "雨天很適合排二手店，兩台車分流也好集合。" },
        { time: "13:45-14:30", label: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）", duration: "約 30-45 分", desc: "補雨衣、防水鞋襪、涼感衣與機能用品；現場不好停就跳過。" },
        { time: "15:00-16:30", label: "美國村", duration: "約 60-90 分", desc: "雨天仍可逛商圈與室內店舖，只取消日落海灘散步；雨勢太大再改北谷溫泉泳池 ちゅらーゆ。" },
        { time: "18:00 後", label: "晚餐：北谷港海邊餐廳 / 自炊", duration: "彈性", desc: "雨小可看北谷港海邊餐廳（Chatan Harbor）；雨大就回公寓自炊或美國村室內餐廳。8 人先看座位和停車。"}
      ],
      note: "雨天版 D2 保留美國村商圈，只取消日落海灘散步；雨勢太大才切到溫泉或回公寓。"
    }
  ],
  onna: [
    {
      day: "D3",
      date: "6/8（一）",
      title: "雨天版：移動日降載，入住後直接休息",
      items: [
        { time: "10:00-10:30", label: "北谷退房", duration: "約 30 分", desc: "雨天退房先確認行李防水，車上座位與濕物分開放。" },
        { time: "11:30-13:00", label: "午餐：三線の花（浜之家備案）", duration: "約 60-90 分", desc: "雨天不硬排座喜味；主選純沖繩料理 三線の花，若想吃海鮮再改海鮮料理 浜之家。8 人先確認座位與停車。" },
        { time: "13:30-14:30", label: "抵達飯店附近 / 寄放行李", duration: "彈性", desc: "午餐後直接往飯店附近移動，雨天不再加戶外點。" },
        { time: "15:00-15:30", label: "飯店辦理入住", duration: "約 30 分", desc: "提早切回飯店，整理雨具與休息。" },
        { time: "16:00-18:00", label: "飯店設施活動：Blue Reef / 工藝體驗", duration: "約 2 小時", desc: "改用室內泳池、溫泉、三溫暖、館內工藝體驗或房間休息，不安排釣魚。" },
        { time: "21:00-23:00", label: "晚餐：琉球之牛燒肉 恩納別館", duration: "約 2 小時", desc: "已預約，預約 ID：FTNSLF；座位 2 小時，雨天提前出門，避免遲到。" }
      ],
      note: "雨天版 D3 取消座喜味與釣魚分流，只保留一段明確午餐，把重點放在安全移動、入住與已預約晚餐。"
    },
    {
      day: "D4",
      date: "6/9（二）",
      title: "雨天版：飯店室內 + 琉球村",
      items: [
        { time: "09:30-11:30", label: "飯店設施活動：Blue Reef / 館內休息", duration: "約 90-120 分", desc: "取消戶外浮潛，改室內泳池、溫泉、三溫暖、工藝體驗或房間休息，先觀察雨勢。" },
        { time: "11:30-13:00", label: "午餐：飯店午餐 / 三線の花候選", duration: "約 60-90 分", desc: "雨大就留飯店用餐；想吃在地料理可改三線の花，8 人先確認訂位與停車，恩納之驛留給 D5。" },
        { time: "14:00-16:00", label: "琉球村", duration: "約 90-120 分", desc: "古民家、表演與手作元素集中，是恩納段最穩的雨天備案。" },
        { time: "16:20-17:20", label: "體驗王國むら咲むら", duration: "約 60 分", desc: "若想再接一個文化型雨備點，可改手作體驗；不想移動就回飯店。" },
        { time: "18:00 後", label: "晚餐：飯店晚餐 / 館內收尾", duration: "彈性", desc: "晚上回飯店用餐或館內休息，不安排殘波岬，也不再找遠程餐廳。"}
      ],
      note: "雨天版 D4 取消浮潛與殘波岬，中午不排恩納之驛，避免和 D5 重複。"
    },
    {
      day: "D5",
      date: "6/10（三）",
      title: "雨天版：恩納之驛、鐘乳洞與文化情報中心",
      items: [
        { time: "09:30-11:00", label: "飯店自由活動", duration: "約 90 分", desc: "雨天早上不急著出門，先看雨勢與道路狀況。" },
        { time: "11:15-12:30", label: "午餐：恩納之驛", duration: "約 60-75 分", desc: "午餐、小吃與琉冰都可在這裡解決；停車與分流穩，適合 8 人各自買再集合。" },
        { time: "13:00-14:30", label: "沖繩鐘乳洞", duration: "約 60-90 分", desc: "自然系室內點，天氣不穩時比海岬更好安排。" },
        { time: "15:00-16:00", label: "恩納村文化情報中心", duration: "約 45-60 分", desc: "短停補旅遊資訊與看室內展示，雨天不用拉太遠車程。" },
        { time: "16:00-17:00", label: "恩納村博物館", duration: "約 45-60 分", desc: "若大家還有體力，可接博物館；否則直接回飯店。" },
        { time: "18:00-19:00", label: "晚餐：飯店自助晚餐", duration: "約 60 分", desc: "D5 雨天外出後回飯店用餐最穩；若想外食，三線の花可作備案但需先訂位。" }
      ],
      note: "雨天版 D5 取消真榮田岬海邊短走，改成休息站、鐘乳洞與短程室內文化點。"
    }
  ],
  naha: [
    {
      day: "D6",
      date: "6/11（四）",
      title: "雨天版：豐崎商場與水族館主線",
      items: [
        { time: "09:30-10:00", label: "恩納退房", duration: "約 30 分", desc: "退房後直接南下，雨天不臨時加海邊點。" },
        { time: "11:30-12:30", label: "午餐：iias 沖繩豐崎美食街", duration: "約 60 分", desc: "在商場內分流用餐，A&W、沖繩食堂與其他餐飲都可選；停車和水族館同區，雨天 8 人最省事。" },
        { time: "13:00-18:00", label: "豐崎迪艾姆艾姆水族館（DMM Kariyushi）", duration: "約 4-5 小時", desc: "室內主行程，雨天也能穩定停留。" },
        { time: "18:30-19:00", label: "入住逸之彩", duration: "約 30 分", desc: "進那霸後先整理行李與雨具。" },
        { time: "19:30 後", label: "晚餐：飯店宵夜拉麵 / 人生酒場", duration: "彈性", desc: "雨大就不外出，利用飯店宵夜拉麵；雨小且大家還有體力，再改人生酒場。"}
      ],
      note: "雨天版 D6 幾乎沿用原主線，因為 iias 與 DMM 本來就是最穩的雨天組合。"
    },
    {
      day: "D7",
      date: "6/12（五）",
      title: "雨天版：牧志市場與國際通室內收尾",
      items: [
        { time: "09:30-11:00", label: "國際通", duration: "約 1-2 小時", desc: "只走有遮蔽、可快速進店的路線，雨大就延後出門。" },
        { time: "11:30-13:30", label: "午餐：第一牧志公設市場", duration: "約 1.5-2 小時", desc: "市場海鮮午餐保留，雨天也好安排；8 人可用 2 樓桌位，不必分散找小店。" },
        { time: "14:00-15:30", label: "唐吉訶德國際通店", duration: "約 60-90 分", desc: "把瀨長島改成市區室內採買，避免雨天海邊視野差又難移動。" },
        { time: "15:30-16:30", label: "琉球美麗雪 那霸國際通店", duration: "約 45-60 分", desc: "甜點與冷氣休息點，適合長輩休息。" },
        { time: "17:00 後", label: "晚餐：暖暮 / 國際通輕食 / 飯店宵夜", duration: "彈性", desc: "若晚餐想簡單解決，可分流吃暖暮或國際通輕食；雨大就回飯店宵夜，不排正式大餐。" }
      ],
      note: "雨天版 D7 取消瀨長島，改國際通、牧志市場與室內採買 / 甜點。"
    },
    {
      day: "D8",
      date: "6/13（六）",
      title: "雨天版：返台日維持商場與還車緩衝",
      items: [
        { time: "10:00-10:30", label: "飯店退房", duration: "約 30 分", desc: "退房後行李放車上，雨具放容易拿的位置。" },
        { time: "10:30-11:15", label: "市區輕鬆補逛 / 咖啡", duration: "約 45 分", desc: "雨大就直接去午餐，不在市區多走。" },
        { time: "11:30-13:00", label: "午餐：燒肉本部牧場 那霸店", duration: "約 90 分", desc: "正式午餐維持，建議訂 11:30 或 12:00；8 人先訂位，吃完接豐崎採買與還車。" },
        { time: "13:10-15:00", label: "阿希比娜暢貨中心（Ashibinaa Outlet）", duration: "約 1.5-2 小時", desc: "最後採買放在商場，雨天也比較可控；15:00 前離開，避免回程被雨勢和還車排隊壓縮。" },
        { time: "15:20-16:00", label: "歸還兩台租車 / 搭接駁", duration: "約 40 分", desc: "雨天目標 16:00 前完成還車並上接駁車，保留後續機場緩衝。" },
        { time: "16:30", label: "抵達那霸機場", duration: "目標時間", desc: "以 16:30 抵達機場航廈為目標；若前段延誤就直接減少採買時間。" },
        { time: "16:30-19:15", label: "報到 / 托運 / 安檢", duration: "約 2.5-3 小時", desc: "雨天以機場流程優先，完成托運與安檢後再晚餐或補買伴手禮。" },
        { time: "19:55", label: "長榮 BR185 那霸返台", duration: "19:55 起飛 · 20:30 抵達桃園", desc: "保留接駁、托運與安檢緩衝；出發前仍以訂位紀錄與長榮公告為準。" }
      ],
      note: "雨天版 D8 和晴天版差異不大，重點是把還車與機場緩衝抓更保守。"
    }
  ]
};

const placeCatalog = [
  { aliases: ["北谷美濱公寓（Lapin Mihama Residence Hotel）", "入住北谷美濱公寓（Lapin Mihama Residence Hotel）"], mapQuery: "Lapin Mihama Residence Hotel", type: "住宿" },
  { aliases: ["沖繩蒙特利海景度假酒店", "沖繩蒙特利海景度假酒店"], mapQuery: "Hotel Monterey Okinawa Spa and Resort", type: "度假飯店" },
  { aliases: ["沖繩逸之彩飯店", "入住逸之彩", "Okinawa Hinode Hotel"], mapQuery: "Okinawa Hinode Hotel", type: "市區飯店" },
  { aliases: ["帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", "Parco City"], mapQuery: "San-A Urasoe West Coast PARCO CITY", type: "購物中心" },
  { aliases: ["長榮 BR112 台北桃園出發"], mapQuery: "Taoyuan International Airport Terminal 2", type: "航班" },
  { aliases: ["長榮 BR185 那霸返台"], mapQuery: "Naha Airport", type: "航班" },
  { aliases: ["那霸機場取車"], mapQuery: "OTS 臨空豐岐營業所（那霸機場）", type: "租車" },
  { aliases: ["豬肉蛋飯糰（北谷美國村店）"], mapQuery: "ポーたま 北谷アメリカンビレッジ店 沖縄", type: "早餐店" },
  { aliases: ["二手街北谷店（2nd STREET）"], mapQuery: "2nd STREET 北谷店 沖縄", type: "二手店" },
  { aliases: ["沃克曼Plus 北谷國體道路店（WORKMAN Plus）"], mapQuery: "WORKMAN Plus 北谷国体道路店 沖縄", type: "機能服店" },
  { aliases: ["美國村"], mapQuery: "American Village Okinawa", type: "商圈景點" },
  { aliases: ["美濱公共停車場停車＋美國村海側散步"], mapQuery: "美浜公共駐車場 北谷", type: "停車場" },
  { aliases: ["美式雜貨店阿美利肯迪波（American Depot）＋美國村先逛", "美式雜貨店阿美利肯迪波（American Depot）"], mapQuery: "American Depot Chatan Okinawa", type: "購物店" },
  { aliases: ["美國村名店午餐候選"], mapQuery: "Steak House 88 Chatan American Village Okinawa", type: "午餐候選" },
  { aliases: ["88 牛排館北谷店（Steak House 88）"], mapQuery: "Steak House 88 Chatan American Village Okinawa", type: "牛排餐廳" },
  { aliases: ["東尼羅馬美式肋排北谷店（Tony Roma's）"], mapQuery: "Tony Roma's Chatan Mihama Okinawa", type: "美式餐廳" },
  { aliases: ["塔可飯咖啡奇吉姆那（タコライスCafe きじむなぁ）"], mapQuery: "タコライスCafe きじむなぁ デポアイランド店 沖縄", type: "塔可飯餐廳" },
  { aliases: ["鶴小沖繩麵美濱店（そば家 鶴小）"], mapQuery: "そば家 鶴小 美浜店 沖縄", type: "沖繩麵店" },
  { aliases: ["グルメ迴轉壽司市場 美浜店"], mapQuery: "グルメ回転寿司市場 美浜店 北谷 沖縄", type: "迴轉壽司" },
  { aliases: ["VONGO & ANCHOR"], mapQuery: "VONGO & ANCHOR Chatan Okinawa", type: "海景咖啡" },
  { aliases: ["日落海灘"], mapQuery: "Sunset Beach Chatan Okinawa", type: "海灘" },
  { aliases: ["阿拉哈海灘"], mapQuery: "Araha Beach Okinawa", type: "海灘" },
  { aliases: ["北谷海景散步道"], mapQuery: "Sunset Walk Chatan Okinawa", type: "海景散步街" },
  { aliases: ["美國村海邊木棧道"], mapQuery: "Depot Island Boardwalk Chatan Okinawa", type: "臨海步道" },
  { aliases: ["北谷漁人碼頭（Uminchu Wharf）"], mapQuery: "Uminchu Wharf Chatan Okinawa", type: "碼頭景點" },
  { aliases: ["北谷溫泉泳池 ちゅらーゆ"], mapQuery: "Terme VILLA Churayu Chatan Okinawa", type: "天然溫泉" },
  { aliases: ["北谷港海邊餐廳（Chatan Harbor）"], mapQuery: "Chatan Harbor Brewery & Restaurant Okinawa", type: "海邊餐廳" },
  { aliases: ["豐崎迪艾姆艾姆水族館（DMM Kariyushi）"], mapQuery: "豐崎水族館 Kariyushi Aquarium", type: "水族館" },
  { aliases: ["伊亞斯沖繩豐崎商場（iias）"], mapQuery: "iias Okinawa Toyosaki", type: "購物中心" },
  { aliases: ["iias 沖繩豐崎美食街"], mapQuery: "iias Okinawa Toyosaki food court Tomigusuku Okinawa", type: "商場餐飲" },
  { aliases: ["A&W iias 沖繩豐崎店"], mapQuery: "A&W iias Okinawa Toyosaki Tomigusuku Okinawa", type: "美式漢堡" },
  { aliases: ["沖繩食堂 やっぱりちゃん イーアス沖縄豊崎店"], mapQuery: "沖縄食堂 やっぱりちゃん イーアス沖縄豊崎店", type: "沖繩食堂" },
  { aliases: ["牧志市場", "牧志市場早餐"], mapQuery: "Makishi Public Market", type: "市場" },
  { aliases: ["暖暮拉麵 那覇牧志店"], mapQuery: "暖暮ラーメン 那覇牧志店 沖縄", type: "拉麵店" },
  { aliases: ["英本沖繩麵（Okinawa Soba EIBUN）"], mapQuery: "Okinawa Soba EIBUN Naha Okinawa", type: "沖繩麵店" },
  { aliases: ["肉屋ししや"], mapQuery: "肉屋ししや 那覇 牧志 沖縄", type: "和牛小吃" },
  { aliases: ["康竜拉麵 國際通周邊"], mapQuery: "康竜ラーメン 国際通 那覇 沖縄", type: "拉麵店" },
  { aliases: ["琉球美麗雪 那霸國際通店"], mapQuery: "琉球美麗雪 那覇 国際通 沖縄", type: "甜點店" },
  { aliases: ["首里城"], mapQuery: "Shuri Castle", type: "歷史景點" },
  { aliases: ["國際通", "國際通晚間自由活動"], mapQuery: "Kokusai Dori Naha", type: "商店街" },
  { aliases: ["壺屋やちむん通"], mapQuery: "Tsuboya Yachimun Street Naha Okinawa", type: "散步街" },
  { aliases: ["西來院"], mapQuery: "西來院 沖繩", type: "寺院" },
  { aliases: ["沖宮"], mapQuery: "沖宮 那霸", type: "神社" },
  { aliases: ["浜屋沖繩麵"], mapQuery: "浜屋 沖縄そば 北谷", type: "沖繩麵店" },
  { aliases: ["唐吉訶德國際通店"], mapQuery: "Don Quijote Kokusai Dori Naha", type: "折扣商店" },
  { aliases: ["人生酒場 沖縄店"], mapQuery: "人生酒場 沖縄店 那覇市松山2-9-6", type: "韓式居酒屋" },
  { aliases: ["燒肉本部牧場 那霸店"], mapQuery: "Yakiniku Motobu Farm Naha Kumoji Okinawa", type: "燒肉餐廳" },
  { aliases: ["前兼久漁港"], mapQuery: "Maeganeku Fishing Port Okinawa", type: "漁港" },
  { aliases: ["老虎海灘（飯店海灘）"], mapQuery: "Tiger Beach Onna Okinawa", type: "飯店海灘" },
  { aliases: ["飯店玩水：老虎海灘 / Sunset Garden", "Sunset Garden 戶外泳池群"], mapQuery: "Hotel Monterey Okinawa Spa and Resort Sunset Garden", type: "飯店泳池" },
  { aliases: ["飯店設施活動", "飯店設施活動：Blue Reef / 體驗工作坊", "飯店設施活動：Blue Reef / 工藝體驗", "飯店設施活動：Blue Reef / 館內休息", "飯店自由活動：泳池 / 海灘 / Blue Reef", "Blue Reef 室內泳池與溫泉"], mapQuery: "Hotel Monterey Okinawa Spa and Resort Blue Reef", type: "飯店活動" },
  { aliases: ["體驗工作坊 / 海洋工藝"], mapQuery: "Hotel Monterey Okinawa Spa and Resort activity workshop", type: "飯店體驗" },
  { aliases: ["釣の家谷茶め〜"], mapQuery: "釣の家谷茶め〜 恩納村 谷茶 沖縄", type: "釣具租借" },
  { aliases: ["谷茶海岸"], mapQuery: "谷茶ビーチ 恩納村 沖縄", type: "海岸散步" },
  { aliases: ["琉球之牛燒肉 恩納別館"], mapQuery: "焼肉 琉球の牛 恩納別館 101-1 Maeganeku Onna Okinawa", type: "燒肉餐廳" },
  { aliases: ["恩納之驛"], mapQuery: "Onna no Eki Nakayukui Market", type: "休息站" },
  { aliases: ["純沖繩料理 三線の花"], mapQuery: "三線の花 恩納村 沖縄", type: "沖繩料理" },
  { aliases: ["THE GARLIC SHRIMP"], mapQuery: "THE GARLIC SHRIMP Onna Okinawa", type: "蝦蝦飯" },
  { aliases: ["Gajimaru Cafe&Bar"], mapQuery: "Gajimaru Cafe Bar Maeda Onna Okinawa", type: "素食餐廳" },
  { aliases: ["海鮮料理 浜之家"], mapQuery: "海鮮料理 浜の家 恩納村 沖縄", type: "海鮮餐廳" },
  { aliases: ["飯店浮潛"], mapQuery: "Hotel Monterey Okinawa Spa and Resort", type: "飯店活動" },
  { aliases: ["青之洞窟浮潛"], mapQuery: "Blue Cave Maeda Misaki Okinawa", type: "浮潛景點" },
  { aliases: ["真榮田岬"], mapQuery: "Cape Maeda Okinawa", type: "海岬景點" },
  { aliases: ["琉球村"], mapQuery: "Ryukyu Mura", type: "文化園區" },
  { aliases: ["體驗王國むら咲むら"], mapQuery: "体験王国むら咲むら 読谷 沖縄", type: "文化體驗園區" },
  { aliases: ["恩納村文化情報中心"], mapQuery: "恩納村文化情報センター 沖縄", type: "文化設施" },
  { aliases: ["恩納村博物館"], mapQuery: "恩納村博物館 沖縄", type: "博物館" },
  { aliases: ["生命之丘（BIOS之丘）"], mapQuery: "ビオスの丘 うるま 沖縄", type: "自然園區" },
  { aliases: ["沖繩鐘乳洞"], mapQuery: "沖繩鐘乳洞 うるま 沖縄", type: "鐘乳洞" },
  { aliases: ["海上滑索"], mapQuery: "PANZA Okinawa MegaZIP Onna Okinawa", type: "海上滑索" },
  { aliases: ["座喜味城跡"], mapQuery: "Zakimi Castle Ruins", type: "歷史散步點" },
  { aliases: ["殘波岬"], mapQuery: "Cape Zanpa", type: "海岬景點" },
  { aliases: ["阿希比娜暢貨中心（Ashibinaa Outlet）"], mapQuery: "Okinawa Outlet Mall Ashibinaa", type: "暢貨中心" },
  { aliases: ["運動用品店豐崎店（Sports Depo）", "SPORTS DEPO Toyosaki"], mapQuery: "SPORTS DEPO Toyosaki 1-411 Toyosaki Tomigusuku Okinawa", type: "運動用品店" },
  { aliases: ["瀨長島 Umikaji Terrace"], mapQuery: "Senagajima Umikaji Terrace", type: "海景商場" },
  { aliases: ["瀨長島 Umikaji Terrace 餐飲群"], mapQuery: "Senagajima Umikaji Terrace restaurants Tomigusuku Okinawa", type: "海景餐飲" },
  { aliases: ["榮町市場"], mapQuery: "Sakaemachi Market Naha", type: "市場" }
];

const stayTimeline = document.querySelector("#stay-timeline");
const dayCardGrid = document.querySelector("#day-card-grid");
const scheduleModeBar = document.querySelector("#schedule-mode-bar");
const backupGrid = document.querySelector("#backup-grid");
const backupFilterBar = document.querySelector("#backup-filter-bar");
const backupPanel = document.querySelector(".backup-panel");
const installStatus = document.querySelector("#install-status");
const floatingSegmentSwitcher = document.querySelector("#floating-segment-switcher");

let activeSegmentId = tripData.segments[0].id;
let activeBackupFilter = "all";
let activeScheduleMode = "sunny";

function normalizePlaceName(value) {
  return value.replace(/（.*?）/g, "").replace(/\s+/g, "").toLowerCase();
}

function buildGoogleMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function findPlaceMeta(value) {
  const normalizedValue = normalizePlaceName(value);
  return placeCatalog.find((place) =>
    place.aliases.some((alias) => {
      const normalizedAlias = normalizePlaceName(alias);
      return normalizedValue.includes(normalizedAlias) || normalizedAlias.includes(normalizedValue);
    })
  );
}

function renderPlaceLink(label) {
  const place = findPlaceMeta(label);

  if (!place) {
    return `<span class="place-text">${label}</span>`;
  }

  return `<a class="place-link" href="${buildGoogleMapsLink(place.mapQuery)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderPlaceType(label) {
  const place = findPlaceMeta(label);
  return place?.type || "";
}

function collectScheduledPlaces(segment) {
  return getSegmentDays(segment).flatMap((day) => day.items.map((item) => normalizePlaceName(item.label)));
}

function getSegmentDays(segment) {
  if (activeScheduleMode === "rainy" && rainyScheduleDays[segment.id]) {
    return rainyScheduleDays[segment.id];
  }

  return segment.days;
}

function renderScheduleModeBar() {
  if (!scheduleModeBar) {
    return;
  }

  const modes = [
    { id: "sunny", label: "晴天版", note: "戶外景點照原本節奏走。" },
    { id: "rainy", label: "雨天版", note: "改用室內、商場、飯店設施與雨備點。" }
  ];

  const activeMode = modes.find((mode) => mode.id === activeScheduleMode);

  scheduleModeBar.innerHTML = `
    ${modes
      .map(
        (mode) => `
          <button
            class="schedule-mode-button ${mode.id === activeScheduleMode ? "is-active" : ""}"
            data-schedule-mode="${mode.id}"
            type="button"
            aria-pressed="${mode.id === activeScheduleMode}"
          >
            ${mode.label}
          </button>
        `
      )
      .join("")}
    <span class="schedule-mode-note">${activeMode?.note ?? ""}</span>
  `;

  scheduleModeBar.querySelectorAll(".schedule-mode-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.dataset.scheduleMode || button.dataset.scheduleMode === activeScheduleMode) {
        return;
      }
      activeScheduleMode = button.dataset.scheduleMode;
      activeBackupFilter = "all";
      renderScheduleModeBar();
      renderDays();
      renderBackups();
    });
  });
}

function renderStays() {
  stayTimeline.innerHTML = tripData.stays
    .map(
      (stay, index) => `
        <article class="stay-card ${tripData.segments[index]?.id === activeSegmentId ? "is-active" : ""}" data-segment-id="${tripData.segments[index]?.id ?? ""}" tabindex="0" role="button" aria-pressed="${tripData.segments[index]?.id === activeSegmentId}">
          <div class="stay-card-topline">
            <span class="stay-day">${stay.range}</span>
            ${tripData.segments[index]?.id === activeSegmentId ? `<span class="stay-active-badge">目前查看</span>` : ""}
          </div>
          <h3>${renderPlaceLink(stay.name)}</h3>
          <p class="stay-subtitle">${stay.area}</p>
          <p class="stay-subtitle">${renderPlaceType(stay.name) ? `${renderPlaceType(stay.name)}｜${stay.summary}` : stay.summary}</p>
        </article>
      `
    )
    .join("");

  stayTimeline.querySelectorAll(".stay-card[data-segment-id]").forEach((card) => {
    const activate = () => {
      if (!card.dataset.segmentId || card.dataset.segmentId === activeSegmentId) {
        return;
      }
      activeSegmentId = card.dataset.segmentId;
      activeBackupFilter = "all";
      renderStays();
      renderDays();
      renderBackups();
    };

    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

function renderFloatingSegmentSwitcher() {
  if (!floatingSegmentSwitcher) {
    return;
  }

  floatingSegmentSwitcher.innerHTML = tripData.segments
    .map((segment, index) => {
      const stay = tripData.stays[index];
      const label = stay ? stay.range : segment.label;
      return `
        <button
          class="floating-segment-button ${segment.id === activeSegmentId ? "is-active" : ""}"
          data-segment-id="${segment.id}"
          type="button"
          aria-pressed="${segment.id === activeSegmentId}"
        >
          ${label}
        </button>
      `;
    })
    .join("");

  floatingSegmentSwitcher.querySelectorAll(".floating-segment-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.dataset.segmentId || button.dataset.segmentId === activeSegmentId) {
        return;
      }
      activeSegmentId = button.dataset.segmentId;
      renderFloatingSegmentSwitcher();
      renderStays();
      renderDays();
      renderBackups();
      document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderDays() {
  const activeSegment = tripData.segments.find((segment) => segment.id === activeSegmentId);
  const activeDays = getSegmentDays(activeSegment);
  dayCardGrid.innerHTML = activeDays
    .map(
      (day) => `
        <article class="day-card">
          <span class="day-tag">${day.day} · ${day.date}</span>
          <h3>${day.title}</h3>
          <ul>
            ${day.items
              .map(
                (item) => `
                  <li>
                    <div class="itinerary-item">
                      ${item.time ? `<span class="item-time">${item.time}</span>` : ""}
                      ${renderPlaceLink(item.label)}
                      <span class="item-duration">${item.duration === "移動" ? "移動另計" : `停留 ${item.duration}`}</span>
                      <span class="item-desc">${renderPlaceType(item.label) ? `${renderPlaceType(item.label)}｜${item.desc}` : item.desc}</span>
                    </div>
                  </li>
                `
              )
              .join("")}
          </ul>
          <footer>${day.note}</footer>
        </article>
      `
    )
    .join("");
}

function renderBackups() {
  const filters = [
    { id: "all", label: "全部" },
    { id: "sunny", label: "晴天優先" },
    { id: "rainy", label: "雨天優先" },
    { id: "food", label: "美食備案" }
  ];

  backupFilterBar.innerHTML = filters
    .map(
      (filter) => `
        <button class="backup-filter-button ${filter.id === activeBackupFilter ? "is-active" : ""}" data-filter-id="${filter.id}">
          ${filter.label}
        </button>
      `
    )
    .join("");

  backupFilterBar.querySelectorAll(".backup-filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeBackupFilter = button.dataset.filterId;
      renderBackups();
    });
  });

  const activeSegment = tripData.segments.find((segment) => segment.id === activeSegmentId);
  const scheduledPlaces = collectScheduledPlaces(activeSegment);
  const activeBackups = tripData.backups.filter((item) => item.segmentId === activeSegmentId);
  backupGrid.innerHTML = activeBackups
    .map(
      (item) => `
        <article class="backup-day-card">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="backup-place-list">
            ${item.places
              .filter((place) => {
                if (place.forceShow) {
                  return true;
                }
                const normalizedPlace = normalizePlaceName(place.name);
                return !scheduledPlaces.some(
                  (scheduledPlace) => scheduledPlace.includes(normalizedPlace) || normalizedPlace.includes(scheduledPlace)
                );
              })
              .filter((place) => activeBackupFilter === "all" || place.badges.includes(activeBackupFilter))
              .map(
                (place) => `
                  <div class="backup-place">
                    <div class="backup-badges">
                      ${place.badges
                        .map((badge) => {
                          const labels = {
                            sunny: "晴天優先",
                            rainy: "雨天優先",
                            food: "美食備案"
                          };
                          if (!labels[badge]) {
                            return "";
                          }
                          return `<span class="backup-badge backup-badge--${badge}">${labels[badge]}</span>`;
                        })
                        .join("")}
                    </div>
                    ${renderPlaceLink(place.name)}
                    <div class="backup-meta">${place.distance}</div>
                    <div class="backup-desc">${renderPlaceType(place.name) ? `${renderPlaceType(place.name)}｜${place.description}` : place.description}</div>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

renderStays();
renderFloatingSegmentSwitcher();
renderScheduleModeBar();
renderDays();
renderBackups();

async function setupPwaSupport() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const isHttpLike = location.protocol === "http:" || location.protocol === "https:";
  const canRegisterServiceWorker =
    "serviceWorker" in navigator &&
    isHttpLike &&
    (window.isSecureContext || location.hostname === "localhost" || location.hostname === "127.0.0.1");

  if (installStatus) {
    if (isStandalone) {
      installStatus.textContent = "已加入主畫面，可直接當離線旅遊小抄使用。";
    } else if (canRegisterServiceWorker) {
      installStatus.textContent = "用 Safari 開啟後可加入主畫面，安裝後可離線查看。";
    } else {
      installStatus.textContent = "";
    }
  }

  if (!canRegisterServiceWorker) {
    return;
  }

  try {
    await navigator.serviceWorker.register("./sw.js?v=2026-06-03-airport-arrival");
  } catch (error) {
    console.error("Service worker registration failed:", error);
    if (installStatus && !isStandalone) {
      installStatus.textContent = "目前頁面可正常查看。";
    }
  }
}

setupPwaSupport();
