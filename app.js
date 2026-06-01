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
            { time: "11:00-12:30", label: "機場或沿途簡單午餐", duration: "約 60-90 分", desc: "第一天不塞景點，先讓大家補體力再北上。" },
            { time: "13:10-15:25", label: "浦添帕爾科商場（SAN-A PARCO CITY）", duration: "約 2 小時 15 分", desc: "一次完成食材、飲料、早餐麵包與生活用品採買，也可順手用餐、休息與看海。" },
            { time: "16:00-16:30", label: "入住北谷美濱公寓（Lapin Mihama Residence Hotel）", duration: "約 30 分", desc: "安頓行李、分配房間與停車。" },
            { time: "18:00-19:00", label: "公寓開伙晚餐或美國村簡單覓食", duration: "約 60 分", desc: "以恢復體力為主，晚餐後直接接煙火動線最順。" },
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
            { time: "11:00-12:15", label: "美國村名店午餐候選", duration: "約 75 分", desc: "優先看 88 牛排館（Steak House 88） 或 東尼羅馬美式肋排（Tony Roma's）；若想在地口味可改塔可飯咖啡奇吉姆那（タコライスCafe きじむなぁ） 或鶴小沖繩麵（そば家 鶴小）。" },
            { time: "12:30-13:45", label: "二手街北谷店（2nd STREET）", duration: "約 60-75 分", desc: "主力二手挖寶點，依停車與體力決定是否全員同行。" },
            { time: "13:45-14:30", label: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）", duration: "約 30-45 分", desc: "機能服、涼感衣、雨衣、防曬與鞋襪採買備案；停車約 10 台，現場不好停就跳過。" },
            { time: "14:00-15:30", label: "美國村慢逛＋日落海灘散步", duration: "約 90 分", desc: "商圈、伴手禮和海邊景色一起排，不硬塞甜點店。" }
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
            { time: "12:00-13:15", label: "讀谷 / 恩納方向午餐", duration: "約 60-75 分", desc: "午餐後再往飯店移動，不硬塞更多景點。" },
            { time: "14:00-14:30", label: "抵達飯店附近 / 寄放行李", duration: "彈性", desc: "等待 15:00 Check-in，保留緩衝。" },
            { time: "15:00-15:30", label: "飯店辦理入住", duration: "約 30 分", desc: "先進房休息，切成度假節奏。" },
            { time: "16:00-18:30", label: "釣の家谷茶め〜", duration: "約 2-3 小時", desc: "可在這裡租借釣具釣魚，並搭配谷茶海岸附近散步。" },
            { time: "16:00-17:00", label: "谷茶海岸", duration: "約 45-60 分", desc: "近距離散步海岸，適合看海與短暫停留。" },
            { time: "21:00-23:00", label: "琉球之牛燒肉 恩納別館", duration: "約 2 小時", desc: "已預約，預約 ID：FTNSLF。座位提供 2 小時，入住飯店名稱填 沖繩蒙特利飯店。" }
          ],
          note: "6/8 以順路短走、入住、分流活動與已預約晚餐為主；座喜味只抓短版，不再加其他讀谷點。"
        },
        {
          day: "D4",
          date: "6/9（二）",
          title: "飯店浮潛優先，殘波岬短停",
          items: [
            { time: "09:30-11:30", label: "飯店浮潛", duration: "約 90-120 分", desc: "先以蒙特利飯店的私人沙灘與近距離下水活動為主，節奏最輕鬆。" },
            { time: "11:30-13:00", label: "飯店設施活動", duration: "約 60-90 分", desc: "可接泳池、室內設施、體驗工房或單純回房休息，讓恩納段保有度假節奏。" },
            { time: "15:00-16:00", label: "回房休息 / 飯店設施", duration: "約 60 分", desc: "玩水後先休息，不再安排遠程山上點。" },
            { time: "16:20-17:20", label: "殘波岬", duration: "約 45 分", desc: "看斷崖海景與燈塔，體力不足可跳過登塔。" }
          ],
          note: "D4 早上若玩水，下午不安排名護城公園等較耗體力景點；若遇雨天，適合改為琉球村或飯店室內設施。"
        },
        {
          day: "D5",
          date: "6/10（三）",
          title: "恩納彈性日：真榮田岬、恩納之驛與沖繩鐘乳洞",
          items: [
            { time: "09:30-11:00", label: "飯店自由活動", duration: "約 90 分", desc: "這天只安排輕量飯店活動，保留外出體力。" },
            { time: "11:15-12:00", label: "真榮田岬", duration: "約 30-45 分", desc: "只看展望台與海岬步道，不安排青之洞窟下水。" },
            { time: "12:15-13:30", label: "恩納之驛", duration: "約 60-75 分", desc: "補個芒果冰、海葡萄料理或在地小吃，當成中段休息站很剛好。" },
            { time: "14:00-15:20", label: "沖繩鐘乳洞", duration: "約 60-90 分", desc: "自然系室內景點，天氣不穩也好安排；從恩納之驛接過去約 20 分鐘。" },
            { time: "15:30-16:30", label: "返回飯店方向", duration: "約 60 分", desc: "直接回飯店休息，避免傍晚再折返海邊。" }
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
          title: "伊亞斯商場午餐、豐崎水族館長版停留、那霸入住",
          items: [
            { time: "09:30-10:00", label: "恩納退房", duration: "約 30 分", desc: "退房後一路往南，不折返。" },
            { time: "11:30-12:30", label: "伊亞斯沖繩豐崎商場（iias）午餐", duration: "約 60 分", desc: "建議先在 伊亞斯商場解決午餐，再進 豐崎水族館，對 8 人一起移動最穩。" },
            { time: "13:00-18:00", label: "豐崎迪艾姆艾姆水族館（DMM Kariyushi）", duration: "約 4-5 小時", desc: "如果 13:00 左右進館，慢慢逛、拍照、看表演與休息，待到傍晚很合理。" },
            { time: "18:30-19:00", label: "入住逸之彩", duration: "約 30 分", desc: "進那霸後轉成市區採買節奏。" },
            { time: "19:30-21:00", label: "國際通輕鬆散步", duration: "約 60-90 分", desc: "入住後可安排市區散步與晚間自由活動。" }
          ],
          note: "豐崎水族館為當日主要停留點，整體節奏以從容為主。"
        },
        {
          day: "D7",
          date: "6/12（五）",
          title: "牧志市場海鮮，瀨長島半日",
          items: [
            { time: "09:30-11:00", label: "國際通", duration: "約 1-2 小時", desc: "上午適合安排市區散步，節奏輕鬆。" },
            { time: "11:30-13:30", label: "牧志市場", duration: "約 1.5-2 小時", desc: "適合作為 D7 的主午餐安排，海鮮選擇完整，也方便多人用餐。" },
            { time: "14:00-17:30", label: "瀨長島 Umikaji Terrace", duration: "約 3-4 小時", desc: "下午去最適合，看海、看飛機、散步和喝下午茶都很舒服。" },
            { time: "18:30-20:30", label: "人生酒場 沖縄店", duration: "約 1.5-2 小時", desc: "那霸松山韓式居酒屋，適合從瀨長島回那霸後晚餐；晚餐後可回飯店或接國際通散步。" }
          ],
          note: "D7 以市場午餐、海邊散步與那霸晚餐為主，整體節奏輕鬆。"
        },
        {
          day: "D8",
          date: "6/13（六）",
          title: "晚回班機日：輕鬆收尾再返台",
          items: [
            { time: "10:00-10:20", label: "飯店退房", duration: "約 20 分", desc: "晚回班機日，上午仍保有彈性時間。" },
            { time: "10:30-12:30", label: "市區輕鬆補逛 / 咖啡", duration: "約 2 小時", desc: "可在國際通或飯店周邊慢慢收尾，讓後段交通更從容。" },
            { time: "13:00-15:30", label: "阿希比娜暢貨中心（Ashibinaa Outlet）", duration: "約 2-2.5 小時", desc: "安排回程日前的最後採買，並預留較保守的交通緩衝。" },
            { time: "16:00-16:30", label: "歸還兩台租車", duration: "約 30 分", desc: "前往 租車臨空豐崎營業所（那霸機場）還車。" },
            { time: "20:10", label: "長榮 BR185 那霸返台", duration: "20:10 起飛", desc: "晚回班機，出發前請再確認該日是否營運。" }
          ],
          note: `最後一天保留市區與採買彈性。<br>機場時間可搭配 <a class="inline-link" href="https://www.naha-airport.co.jp/en/flight/security/" target="_blank" rel="noreferrer">那霸機場官方安檢說明</a> 一起看；目前採較保守抓法，建議 16:30 前完成還車。`
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
          name: "美式雜貨店阿美利肯迪波（American Depot）",
          badges: ["shopping", "rainy"],
          distance: "美國村內",
          description: "10:00 開門的美式雜貨與服飾名店，適合午餐前先逛。"
        },
        {
          name: "浦添帕爾科商場（SAN-A PARCO CITY）",
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
          description: "恩納段最優先的水上活動基地，先以飯店海灘、浮潛與放鬆為主最順。"
        },
        {
          name: "飯店設施活動",
          badges: ["sunny", "rainy"],
          distance: "和飯店同區",
          description: "若不想外出，可直接用飯店泳池、室內設施、體驗工房與館內休息撐起半天節奏。"
        },
        {
          name: "恩納之驛",
          badges: ["food", "rainy"],
          distance: "距離飯店約 5-10 分鐘車程",
          description: "恩納村很實用的小吃站，推薦芒果冰、海葡萄料理和在地熟食。"
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
          name: "牧志市場",
          badges: ["food", "rainy"],
          distance: "距離逸之彩步行約 10 分鐘",
          description: "早餐與海鮮都好安排，想吃市場感的那霸早晨很適合放這裡。"
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
          description: "韓式居酒屋，適合 D7 從瀨長島回那霸後安排晚餐。"
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
        },
        {
          name: "波上宮",
          badges: ["sunny"],
          distance: "距離飯店約 10 分鐘車程",
          description: "短程可完成的市區神社景點，適合和市區行程一起順遊。"
        }
      ]
    }
  ]
};

const placeCatalog = [
  { aliases: ["北谷美濱公寓（Lapin Mihama Residence Hotel）", "入住北谷美濱公寓（Lapin Mihama Residence Hotel）"], mapQuery: "Lapin Mihama Residence Hotel", type: "住宿" },
  { aliases: ["沖繩蒙特利海景度假酒店", "沖繩蒙特利海景度假酒店"], mapQuery: "Hotel Monterey Okinawa Spa and Resort", type: "度假飯店" },
  { aliases: ["沖繩逸之彩飯店", "入住逸之彩", "Okinawa Hinode Hotel"], mapQuery: "Okinawa Hinode Hotel", type: "市區飯店" },
  { aliases: ["浦添帕爾科商場（SAN-A PARCO CITY）", "Parco City"], mapQuery: "San-A Urasoe West Coast PARCO CITY", type: "購物中心" },
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
  { aliases: ["日落海灘"], mapQuery: "Sunset Beach Chatan Okinawa", type: "海灘" },
  { aliases: ["阿拉哈海灘"], mapQuery: "Araha Beach Okinawa", type: "海灘" },
  { aliases: ["北谷海景散步道"], mapQuery: "Sunset Walk Chatan Okinawa", type: "海景散步街" },
  { aliases: ["美國村海邊木棧道"], mapQuery: "Depot Island Boardwalk Chatan Okinawa", type: "臨海步道" },
  { aliases: ["北谷漁人碼頭（Uminchu Wharf）"], mapQuery: "Uminchu Wharf Chatan Okinawa", type: "碼頭景點" },
  { aliases: ["北谷溫泉泳池 ちゅらーゆ"], mapQuery: "Terme VILLA Churayu Chatan Okinawa", type: "天然溫泉" },
  { aliases: ["北谷港海邊餐廳（Chatan Harbor）"], mapQuery: "Chatan Harbor Brewery & Restaurant Okinawa", type: "海邊餐廳" },
  { aliases: ["豐崎迪艾姆艾姆水族館（DMM Kariyushi）"], mapQuery: "豐崎水族館 Kariyushi Aquarium", type: "水族館" },
  { aliases: ["伊亞斯沖繩豐崎商場（iias）"], mapQuery: "iias Okinawa Toyosaki", type: "購物中心" },
  { aliases: ["牧志市場", "牧志市場早餐"], mapQuery: "Makishi Public Market", type: "市場" },
  { aliases: ["首里城"], mapQuery: "Shuri Castle", type: "歷史景點" },
  { aliases: ["國際通", "國際通晚間自由活動"], mapQuery: "Kokusai Dori Naha", type: "商店街" },
  { aliases: ["壺屋やちむん通"], mapQuery: "Tsuboya Yachimun Street Naha Okinawa", type: "散步街" },
  { aliases: ["西來院"], mapQuery: "西來院 沖繩", type: "寺院" },
  { aliases: ["沖宮"], mapQuery: "沖宮 那霸", type: "神社" },
  { aliases: ["浜屋沖繩麵"], mapQuery: "浜屋 沖縄そば 北谷", type: "沖繩麵店" },
  { aliases: ["唐吉訶德國際通店"], mapQuery: "Don Quijote Kokusai Dori Naha", type: "折扣商店" },
  { aliases: ["人生酒場 沖縄店"], mapQuery: "人生酒場 沖縄店 那覇市松山2-9-6", type: "韓式居酒屋" },
  { aliases: ["前兼久漁港"], mapQuery: "Maeganeku Fishing Port Okinawa", type: "漁港" },
  { aliases: ["老虎海灘（飯店海灘）"], mapQuery: "Tiger Beach Onna Okinawa", type: "飯店海灘" },
  { aliases: ["飯店設施活動"], mapQuery: "Hotel Monterey Okinawa Spa and Resort", type: "飯店活動" },
  { aliases: ["釣の家谷茶め〜"], mapQuery: "釣の家谷茶め〜 恩納村 谷茶 沖縄", type: "釣具租借" },
  { aliases: ["谷茶海岸"], mapQuery: "谷茶ビーチ 恩納村 沖縄", type: "海岸散步" },
  { aliases: ["琉球之牛燒肉 恩納別館"], mapQuery: "焼肉 琉球の牛 恩納別館 101-1 Maeganeku Onna Okinawa", type: "燒肉餐廳" },
  { aliases: ["恩納之驛"], mapQuery: "Onna no Eki Nakayukui Market", type: "休息站" },
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
  { aliases: ["榮町市場"], mapQuery: "Sakaemachi Market Naha", type: "市場" },
  { aliases: ["波上宮"], mapQuery: "Naminoue Shrine", type: "神社" }
];

const stayTimeline = document.querySelector("#stay-timeline");
const dayCardGrid = document.querySelector("#day-card-grid");
const backupGrid = document.querySelector("#backup-grid");
const backupFilterBar = document.querySelector("#backup-filter-bar");
const backupPanel = document.querySelector(".backup-panel");
const installStatus = document.querySelector("#install-status");
const floatingSegmentSwitcher = document.querySelector("#floating-segment-switcher");

let activeSegmentId = tripData.segments[0].id;
let activeBackupFilter = "all";

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
  return segment.days.flatMap((day) => day.items.map((item) => normalizePlaceName(item.label)));
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
  dayCardGrid.innerHTML = activeSegment.days
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
    { id: "shopping", label: "購物補位" },
    { id: "food", label: "餐食補位" }
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
                            shopping: "購物補位",
                            food: "餐食補位"
                          };
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
    await navigator.serviceWorker.register("./sw.js?v=2026-04-09-1");
  } catch (error) {
    console.error("Service worker registration failed:", error);
    if (installStatus && !isStandalone) {
      installStatus.textContent = "目前頁面可正常查看。";
    }
  }
}

setupPwaSupport();
