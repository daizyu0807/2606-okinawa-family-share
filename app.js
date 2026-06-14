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
          title: "實際紀錄：帕爾科到傍晚，煙火後採購開伙",
          items: [
            { time: "06:45", label: "長榮 BR112 台北桃園出發", duration: "06:45 起飛", desc: "早班機，建議 04:45 前抵達桃園二航廈。" },
            { time: "09:15-10:30", label: "那霸機場取車", duration: "約 60 分", desc: "09:15 抵達後前往 租車臨空豐崎營業所（那霸機場）領兩台車。" },
            { time: "11:00-12:30", label: "午餐：帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", duration: "約 60-90 分", desc: "抵達後直接在帕爾科商場用餐，8 人集合與停車都相對穩。" },
            { time: "12:30-17:00", label: "帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", duration: "約 4.5 小時", desc: "實際停留到約 17:00，完成午餐、採買、休息與看海。" },
            { time: "17:30-18:00", label: "入住北谷美濱公寓（Lapin Mihama Residence Hotel）", duration: "約 30 分", desc: "Check-in 後先放行李，稍微整理再去美國村看煙火。" },
            { time: "19:15-19:50", label: "美國村", duration: "約 30 分", desc: "飯店 Check-in 後步行到美國村，先找煙火觀賞位置。" },
            { time: "20:00-20:10", label: "北谷西海岸週六煙火", duration: "約 3-10 分", desc: "常態週六晚間施放；仍建議出發前 1-3 天確認官方公告與天氣。" },
            { time: "20:20-21:15", label: "永旺北谷店（イオン北谷店）採購", duration: "約 45-60 分", desc: "煙火後去永旺北谷店補食材、飲料與隔天用品。" },
            { time: "21:15 後", label: "晚餐：公寓開伙", duration: "彈性", desc: "採購後回公寓開伙，D1 以飯店休息收尾。" }
          ],
          note: "D1 實際紀錄：午餐在帕爾科，商場停到 17:00；Check-in 後去美國村看煙火，煙火後到永旺北谷店採購，晚餐公寓開伙。"
        },
        {
          day: "D2",
          date: "6/7（日）",
          title: "實際紀錄：美國村、88 牛排、WORKMAN 與永旺採購",
          items: [
            { time: "10:00-11:00", label: "美國村", duration: "約 60 分", desc: "D2 只寫美國村，不再拆停車或特定店家。" },
            { time: "11:00-12:15", label: "午餐：88 牛排館北谷店（Steak House 88）", duration: "約 75 分", desc: "D2 午餐實際吃 88 牛排，座位多、兒童友善，適合 8 人家庭。" },
            { time: "13:45-14:30", label: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）", duration: "約 30-45 分", desc: "下午去 WORKMAN 採買機能服、涼感衣、雨衣、防曬與鞋襪等用品。" },
            { time: "15:00-16:30", label: "永旺北谷店（イオン北谷店）採購", duration: "約 60-90 分", desc: "WORKMAN 後到永旺北谷店補超市採購，買晚餐與公寓需要的食材。" },
            { time: "18:00 後", label: "晚餐：公寓開伙", duration: "彈性", desc: "晚餐回公寓開伙，不另外安排外食。" }
          ],
          note: "D2 實際紀錄：停車、特定店家與二手街北谷都拿掉；主線只保留美國村、88 牛排、WORKMAN、永旺北谷店採購與公寓開伙。"
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
          title: "座喜味城跡與博物館，入住後飯店戶外泳池",
          items: [
            { time: "10:00-10:30", label: "北谷退房", duration: "約 30 分", desc: "整理行李後先接順路登高散步點。" },
            { time: "10:40-12:00", label: "座喜味城跡與座喜味城跡博物館", duration: "約 75-90 分", desc: "上午實際走座喜味城遺跡與博物館；北谷到恩納途中順路，短走加室內展示都可完成。" },
            { time: "12:15-13:30", label: "午餐：海鮮料理 浜之家", duration: "約 75-90 分", desc: "Google Maps 指定午餐店；恩納仲泊海鮮料理，8 人以座位與停車為優先。" },
            { time: "14:00-14:30", label: "抵達飯店附近 / 寄放行李", duration: "彈性", desc: "等待 15:00 Check-in，保留緩衝。" },
            { time: "15:00-15:30", label: "飯店辦理入住", duration: "約 30 分", desc: "先進房休息，切成度假節奏。" },
            { time: "15:45-17:45", label: "Sunset Garden 戶外泳池群", duration: "約 2 小時", desc: "下午改用飯店戶外泳池，包含波浪池、主泳池、兒童滑水池與 Bubble Hill Pool；入住後直接放鬆最順。" },
            { time: "18:30-20:30", label: "晚餐：琉球之牛燒肉 恩納別館", duration: "約 2 小時", desc: "已預約 18:30，預約 ID：FTNSLF。座位提供 2 小時，入住飯店名稱填 沖繩蒙特利飯店。" }
          ],
          note: "D3 已改成實際路線：座喜味城跡與博物館、浜之家午餐、飯店戶外泳池，18:30 接琉球之牛。"
        },
        {
          day: "D4",
          date: "6/9（二）",
          title: "鳳梨園、唐吉訶德名護店、古宇利大橋與永旺配鏡",
          items: [
            { time: "08:00-09:00", label: "早餐：飯店和食早餐會場", duration: "約 60 分", desc: "6/9 早餐改飯店和食早餐會場，用完餐再出發往名護。" },
            { time: "09:30-10:15", label: "出發前往名護鳳梨園", duration: "約 40-45 分", desc: "早餐後先往名護鳳梨園，不先配眼鏡。" },
            { time: "10:15-12:00", label: "名護鳳梨園（ナゴパイナップルパーク）", duration: "約 1.5-2 小時", desc: "早餐後第一站是鳳梨園，搭自動鳳梨遊園車、逛商店與買鳳梨點心。" },
            { time: "12:15-14:30", label: "MEGA 唐吉訶德名護店（MEGAドン・キホーテ 名護店）", duration: "約 2-2.5 小時", desc: "鳳梨園後先到 MEGA 唐吉訶德名護店採買；午餐可用館內或周邊熟食、便當、連鎖餐廳彈性處理。" },
            { time: "15:00-16:00", label: "古宇利大橋", duration: "約 45-60 分", desc: "唐吉後再往古宇利大橋，重點是橋景、海景短停與拍照，不再拉古宇利島深度活動。" },
            { time: "16:30-18:00", label: "永旺名護店（イオン名護店） / OWNDAYS AEON Nago", duration: "約 60-90 分", desc: "最後到永旺名護店與 OWNDAYS 配眼鏡，順便休息、上洗手間與補買。" },
            { time: "18:00 後", label: "返回飯店 / 晚餐彈性", duration: "彈性", desc: "配眼鏡後視體力回飯店；晚餐可依現場狀況在名護簡單吃或回飯店處理。" }
          ],
          note: "D4 實際順序改為：和食早餐會場後先名護鳳梨園，再 MEGA 唐吉訶德名護店，接古宇利大橋，最後永旺名護店與 OWNDAYS 配眼鏡。"
        },
        {
          day: "D5",
          date: "6/10（三）",
          title: "飯店海灘、鐘乳洞與石川採買日",
          items: [
            { time: "08:00-09:00", label: "早餐：飯店自助早餐會場", duration: "約 60 分", desc: "6/10 早餐改飯店自助早餐會場，早餐後先留在飯店海灘。" },
            { time: "09:15-11:15", label: "飯店海灘 / 老虎海灘", duration: "約 2 小時", desc: "青之洞窟浮潛改為飯店海灘，水上活動依現場規定與家人體力調整。" },
            { time: "11:45-13:00", label: "沖繩鐘乳洞", duration: "約 60-75 分", desc: "先去鐘乳洞，自然系室內景點，避開午後日曬與天氣不穩；長輩疲累時縮短停留。" },
            { time: "13:30-15:30", label: "午餐 / 採買：San-A Ishikawa City（サンエー石川シティ）", duration: "約 2 小時", desc: "鐘乳洞後到 San-A Ishikawa City 吃午餐、逛超市與補給；停車、洗手間與分流都比較穩。" },
            { time: "18:00-20:00", label: "晚餐：純沖繩料理 三線の花", duration: "約 1.5-2 小時", desc: "晚餐改三線の花；8 人建議先確認訂位與停車。" },
            { time: "20:15 後", label: "Lawson 恩納村周邊（ローソン）補買", duration: "彈性", desc: "晚餐後視需要到 Lawson 補飲料、零食與隔天用品，再回飯店休息。" }
          ],
          note: "D5 實際行程改為自助早餐會場、飯店海灘、沖繩鐘乳洞、San-A Ishikawa City 午餐與採買、三線の花晚餐，最後 Lawson 補買。"
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
          title: "恩納退房、浮潛組與真榮田岬組分流、牧志晚午餐",
          items: [
            { time: "08:00-09:00", label: "早餐：飯店自助早餐會場", duration: "約 60 分", desc: "6/11 早餐使用飯店自助早餐會場，吃完再整理退房行李。" },
            { time: "09:15", label: "恩納退房", duration: "目標時間", desc: "預計 09:15 退房出發，先回真榮田方向確認青洞狀況；把 DMM 留到隔天早上搶餵食券。" },
            { time: "09:15-09:45", label: "恩納 → Island Club（アイランド倶楽部）", duration: "約 20-30 分", desc: "先到店確認海況、集合與青之洞窟浮潛是否能成行。" },
            { time: "10:00-12:15", label: "兵分兩路：青之洞窟浮潛 / 真榮田岬短逛", duration: "約 1-2 小時", desc: "浮潛組走 Island Club 青之洞窟；不浮潛組在真榮田岬展望台、步道短逛，兩組都不硬下水。" },
            { time: "12:15-13:45", label: "真榮田 / 恩納 → 牧志 / 飯店周邊", duration: "約 75-90 分", desc: "分流結束後直接南下那霸，不排西來院，改留到 6/13 退房後。" },
            { time: "14:00-15:15", label: "晚午餐：第一牧志公設市場", duration: "約 75 分", desc: "早餐吃很飽，加上先跑青洞 / 真榮田岬，牧志市場改晚午餐；8 人可用 2 樓桌位處理。" },
            { time: "15:30-16:00", label: "入住逸之彩", duration: "約 30 分", desc: "辦理入住、整理行李與雨具，讓明天一早能準時出門。" },
            { time: "17:00 後", label: "國際通 / 唐吉訶德 / 飯店休息", duration: "彈性", desc: "市區採買和休息彈性處理；晚餐可用人生酒場、國際通輕食或飯店宵夜拉麵。" }
          ],
          note: "D6 拿掉西來院，改成浮潛組與真榮田岬組分流；西來院移到 6/13 退房後。"
        },
        {
          day: "D7",
          date: "6/12（五）",
          title: "DMM 餵食券、iias 長逛、飯店泳池溫泉與國際通",
          items: [
            { time: "07:30-08:00", label: "早餐：飯店簡單吃", duration: "約 30 分", desc: "目標是 09:00 入場搶餵食券，早餐不拉長；若排隊壓力大就早餐從簡。" },
            { time: "08:10-08:40", label: "那霸飯店 → DMM / iias 停車", duration: "約 20-30 分", desc: "從那霸出發比恩納退房日穩定很多，抵達後直接往水族館入口。" },
            { time: "08:40-09:00", label: "抵達排隊 / 準備入場", duration: "約 20 分", desc: "先排入場，進館第一件事處理餵食券或確認餵食體驗時段。" },
            { time: "09:00-11:30", label: "豐崎迪艾姆艾姆水族館（DMM Kariyushi）", duration: "約 2.5 小時", desc: "D7 主目標；09:00 入場優先搶餵食券，再依現場時段調整館內停留。" },
            { time: "11:30-14:30", label: "iias 沖繩豐崎商場午餐與長逛", duration: "約 3 小時", desc: "取消瀨長島，直接延長 iias：午餐、採買、休息、補貨和上洗手間一次處理。" },
            { time: "14:30-15:15", label: "iias → 飯店", duration: "約 30-45 分", desc: "下午切回飯店，不再加海邊點。" },
            { time: "15:30-17:30", label: "飯店游泳池 / 溫泉", duration: "約 2 小時", desc: "下午回飯店玩泳池、泡溫泉與休息，讓晚上國際通比較有體力。" },
            { time: "18:30 後", label: "國際通", duration: "彈性", desc: "晚上改國際通散步、採買、輕食或宵夜，不排瀨長島。" }
          ],
          note: "D7 取消瀨長島；DMM 後延長 iias，下午回飯店泳池 / 溫泉，晚上國際通。"
        },
        {
          day: "D8",
          date: "6/13（六）",
          title: "晚回班機日：輕鬆收尾再返台",
          items: [
            { time: "10:00-10:30", label: "飯店退房", duration: "約 30 分", desc: "兩台車自駕，退房後行李可放車上，不影響後續午餐與採買。" },
            { time: "10:30-11:15", label: "西來院達磨寺（西来院）", duration: "約 45 分", desc: "6/11 移出的達磨寺改到退房後短停；兩台車停車位有限，現場不好停就縮短。" },
            { time: "11:45-13:00", label: "午餐：燒肉本部牧場 那霸店", duration: "約 75 分", desc: "返台日前正式午餐；8 人先訂位，吃完接阿希比娜與還車動線。" },
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
          name: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）",
          badges: ["shopping", "rainy"],
          distance: "距離公寓約短程車程",
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
          description: "D6 先到 Island Club 現場確認；能成行就走青之洞窟浮潛，不能下水就改真榮田岬短逛。"
        },
        {
          name: "Island Club（アイランド倶楽部）",
          badges: ["sunny"],
          distance: "真榮田岬周邊，距離飯店約 20-30 分鐘車程",
          description: "D6 青之洞窟浮潛集合與確認點；先看海況與現場安排，再決定浮潛或改真榮田岬。"
        },
        {
          name: "真榮田岬",
          badges: ["sunny"],
          distance: "距離飯店約 10 分鐘車程",
          description: "D6 若青之洞窟不能浮潛，就改展望台與步道短逛，不硬下水。"
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
          name: "古宇利大橋",
          badges: ["sunny"],
          distance: "距離飯店約 60-75 分鐘車程",
          description: "D4 唐吉後接古宇利大橋，重點是橋景、海景短停與拍照，不再拉古宇利島深度活動。"
        },
        {
          name: "OWNDAYS AEON Nago",
          badges: ["sunny", "rainy"],
          distance: "名護 AEON 內，飯店出發約 40-45 分鐘車程",
          description: "D4 最後一站與永旺名護店一起處理配眼鏡，順便休息與補買。"
        },
        {
          name: "名護鳳梨園（ナゴパイナップルパーク）",
          badges: ["sunny", "rainy"],
          distance: "早餐後第一站，距離飯店約 45-60 分鐘車程",
          description: "D4 早餐後第一站；搭自動鳳梨遊園車，適合全家輕鬆走走。"
        },
        {
          name: "MEGA 唐吉訶德名護店（MEGAドン・キホーテ 名護店）",
          badges: ["sunny", "rainy"],
          distance: "鳳梨園後順路",
          description: "D4 鳳梨園後採買點；北部 MEGA 大店，午餐可用館內或周邊熟食、便當、連鎖餐廳彈性處理。"
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
          distance: "那霸飯店開車約 20-30 分鐘；iias 同區停車",
          description: "冷氣穩定、動線輕鬆；D7 09:00 入場優先搶餵食券，雨天也穩。"
        },
        {
          name: "伊亞斯沖繩豐崎商場（iias）",
          badges: ["shopping", "rainy"],
          distance: "距離 豐崎水族館 步行可達",
          description: "可接在 DMM 後補逛、休息或簡單吃點東西，停車同區最省移動。"
        },
        {
          name: "iias 沖繩豐崎美食街",
          badges: ["food", "rainy"],
          distance: "豐崎水族館同區，商場內",
          description: "D7 DMM 後最穩的餐食補位；A&W、塔可飯、牛排與商場餐飲可分流，適合 8 人不同口味。"
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
          description: "D7 已取消主線；若臨時還想看海景、看飛機和簡單散步，再作備案。"
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
          name: "西來院達磨寺（西来院）",
          badges: ["sunny", "rainy"],
          distance: "首里站步行約 5 分鐘；兩台車停車位有限",
          description: "改到 D8 退房後短停；多數資料寫 07:00-18:00，若雨太大或不好停就縮短。"
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
        { time: "11:00-12:30", label: "午餐：帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", duration: "約 60-90 分", desc: "實際午餐在帕爾科商場完成。" },
        { time: "12:30-17:00", label: "帕爾科商場（SAN-A Urasoe West Coast PARCO CITY）", duration: "約 4.5 小時", desc: "停留到約 17:00，完成採買、休息與看海。" },
        { time: "17:30-18:00", label: "入住北谷美濱公寓（Lapin Mihama Residence Hotel）", duration: "約 30 分", desc: "Check-in 後整理行李。" },
        { time: "19:15-20:10", label: "美國村與北谷西海岸週六煙火", duration: "約 60 分", desc: "入住後步行到美國村看煙火。" },
        { time: "20:20 後", label: "永旺北谷店（イオン北谷店）採購 / 公寓開伙", duration: "彈性", desc: "煙火後採購，晚餐回公寓開伙。" }
      ],
      note: "雨天版 D1 不把煙火當必要行程，核心是順利取車、採買、入住與恢復體力。"
    },
    {
      day: "D2",
      date: "6/7（日）",
      title: "雨天版：北谷室內購物與餐廳候選",
      items: [
        { time: "10:00-11:00", label: "美國村", duration: "約 60 分", desc: "只寫美國村，不再拆停車或特定店家。" },
        { time: "11:00-12:15", label: "午餐：88 牛排館北谷店（Steak House 88）", duration: "約 75 分", desc: "D2 午餐實際吃 88 牛排。" },
        { time: "13:45-14:30", label: "沃克曼Plus 北谷國體道路店（WORKMAN Plus）", duration: "約 30-45 分", desc: "採買機能用品。" },
        { time: "15:00-16:30", label: "永旺北谷店（イオン北谷店）採購", duration: "約 60-90 分", desc: "WORKMAN 後到永旺北谷店補超市採購。" },
        { time: "18:00 後", label: "晚餐：公寓開伙", duration: "彈性", desc: "晚餐回公寓開伙。"}
      ],
      note: "雨天版 D2 也沿用實際紀錄：美國村、88 牛排、WORKMAN、永旺北谷店採購與公寓開伙。"
    }
  ],
  onna: [
    {
      day: "D3",
      date: "6/8（一）",
      title: "雨天版：移動日降載，入住後直接休息",
      items: [
        { time: "10:00-10:30", label: "北谷退房", duration: "約 30 分", desc: "雨天退房先確認行李防水，車上座位與濕物分開放。" },
        { time: "12:15-13:30", label: "午餐：海鮮料理 浜之家", duration: "約 75-90 分", desc: "今天午餐改吃 Google Maps 指定的 浜之家；雨天也以座位與停車為優先。" },
        { time: "13:30-14:30", label: "抵達飯店附近 / 寄放行李", duration: "彈性", desc: "午餐後直接往飯店附近移動，雨天不再加戶外點。" },
        { time: "15:00-15:30", label: "飯店辦理入住", duration: "約 30 分", desc: "提早切回飯店，整理雨具與休息。" },
        { time: "16:00-18:00", label: "飯店設施活動：Blue Reef / 工藝體驗", duration: "約 2 小時", desc: "改用室內泳池、溫泉、三溫暖、館內工藝體驗或房間休息，不安排釣魚。" },
        { time: "18:30-20:30", label: "晚餐：琉球之牛燒肉 恩納別館", duration: "約 2 小時", desc: "已預約 18:30，預約 ID：FTNSLF；座位 2 小時，雨天提前出門，避免遲到。" }
      ],
      note: "雨天版 D3 取消座喜味與釣魚分流，只保留一段明確午餐，把重點放在安全移動、入住與已預約晚餐。"
    },
    {
      day: "D4",
      date: "6/9（二）",
      title: "雨天版：飯店室內 + 琉球村",
      items: [
        { time: "09:30-11:30", label: "飯店設施活動：Blue Reef / 館內休息", duration: "約 90-120 分", desc: "取消戶外浮潛，改室內泳池、溫泉、三溫暖、工藝體驗或房間休息，先觀察雨勢。" },
        { time: "11:30-13:00", label: "午餐：飯店午餐 / 三線の花候選", duration: "約 60-90 分", desc: "雨大就留飯店用餐；想吃在地料理可改三線の花，8 人先確認訂位與停車。" },
        { time: "14:00-16:00", label: "琉球村", duration: "約 90-120 分", desc: "古民家、表演與手作元素集中，是恩納段最穩的雨天備案。" },
        { time: "16:20-17:20", label: "體驗王國むら咲むら", duration: "約 60 分", desc: "若想再接一個文化型雨備點，可改手作體驗；不想移動就回飯店。" },
        { time: "18:00 後", label: "晚餐：飯店晚餐 / 館內收尾", duration: "彈性", desc: "晚上回飯店用餐或館內休息，不安排殘波岬，也不再找遠程餐廳。"}
      ],
      note: "雨天版 D4 取消浮潛與殘波岬，中午以飯店或好停車餐廳為主。"
    },
    {
      day: "D5",
      date: "6/10（三）",
      title: "雨天版：飯店海灘、鐘乳洞與石川採買",
      items: [
        { time: "08:00-09:00", label: "早餐：飯店自助早餐會場", duration: "約 60 分", desc: "早餐後先看雨勢與家人體力，不急著拉遠程景點。" },
        { time: "09:15-11:15", label: "飯店海灘 / Blue Reef", duration: "約 2 小時", desc: "能下水就走飯店海灘；雨勢較大就改室內泳池、溫泉或房間休息。" },
        { time: "11:45-13:00", label: "沖繩鐘乳洞", duration: "約 60-75 分", desc: "自然系室內景點，天氣不穩時仍好安排。" },
        { time: "13:30-15:30", label: "午餐 / 採買：San-A Ishikawa City（サンエー石川シティ）", duration: "約 2 小時", desc: "午餐、採買、上洗手間與晚餐前休息。" },
        { time: "18:00-20:00", label: "晚餐：純沖繩料理 三線の花", duration: "約 1.5-2 小時", desc: "晚餐改三線の花；8 人建議先確認訂位與停車。" },
        { time: "20:15 後", label: "Lawson 恩納村周邊（ローソン）補買", duration: "彈性", desc: "晚餐後視需要補飲料、零食與隔天用品。" }
      ],
      note: "D5 雨天版與實際版一致：自助早餐、飯店設施、鐘乳洞、San-A Ishikawa City 午餐採買、三線の花與 Lawson 補買。"
    }
  ],
  naha: [
    {
      day: "D6",
      date: "6/11（四）",
      title: "雨天版：浮潛組與真榮田岬組分流，直接進那霸",
      items: [
        { time: "08:00-09:00", label: "早餐：飯店自助早餐會場", duration: "約 60 分", desc: "雨天先把早餐和退房節奏整理好，行李與雨具分開放。" },
        { time: "09:15", label: "恩納退房", duration: "目標時間", desc: "預計 09:15 退房後先到 Island Club 確認海況，不臨時加其他海邊點。" },
        { time: "09:15-09:45", label: "恩納 → Island Club（アイランド倶楽部）", duration: "約 20-30 分", desc: "先確認青之洞窟浮潛是否能成行。" },
        { time: "10:00-12:15", label: "浮潛組 / 真榮田岬組分流", duration: "約 1-2 小時", desc: "可下水才浮潛；不能下水或不浮潛的人走真榮田岬短逛，雨大則直接南下。" },
        { time: "12:15-13:45", label: "真榮田 / 恩納 → 牧志 / 飯店周邊", duration: "約 75-90 分", desc: "不排西來院，改留到 6/13 退房後。" },
        { time: "14:00-15:15", label: "晚午餐：第一牧志公設市場", duration: "約 75 分", desc: "早餐吃很飽，午餐延後；室內市場與食堂比戶外點穩。" },
        { time: "15:30-16:00", label: "入住逸之彩", duration: "約 30 分", desc: "先整理行李與雨具，明天早上才能準時出門 DMM。" },
        { time: "17:00 後", label: "國際通室內採買 / 飯店休息", duration: "彈性", desc: "唐吉訶德、國際通可短逛；雨大就回飯店宵夜，不排正式大餐。" }
      ],
      note: "雨天版 D6 不排西來院；浮潛 / 真榮田岬後直接進那霸。"
    },
    {
      day: "D7",
      date: "6/12（五）",
      title: "雨天版：DMM、iias 長逛、飯店泳池溫泉與國際通",
      items: [
        { time: "07:30-08:00", label: "早餐：飯店簡單吃", duration: "約 30 分", desc: "雨天仍以 09:00 DMM 入場為主，早餐不拖長。" },
        { time: "08:10-08:40", label: "那霸飯店 → DMM / iias 停車", duration: "約 20-30 分", desc: "直接前往豐崎，停車後往水族館入口排隊。" },
        { time: "08:40-09:00", label: "抵達排隊 / 準備入場", duration: "約 20 分", desc: "入場後先確認餵食券與餵食體驗時段。" },
        { time: "09:00-11:30", label: "豐崎迪艾姆艾姆水族館（DMM Kariyushi）", duration: "約 2.5 小時", desc: "室內主行程，雨天也穩；目標是 09:00 入場搶餵食券。" },
        { time: "11:30-14:30", label: "iias 沖繩豐崎商場午餐與長逛", duration: "約 3 小時", desc: "取消瀨長島，直接延長 iias：午餐、採買、休息、補貨和上洗手間一次處理。" },
        { time: "14:30-15:15", label: "iias → 飯店", duration: "約 30-45 分", desc: "下午切回飯店，不再加海邊點。" },
        { time: "15:30-17:30", label: "飯店游泳池 / 溫泉", duration: "約 2 小時", desc: "雨天也以飯店泳池、溫泉和休息為主。" },
        { time: "18:30 後", label: "國際通", duration: "彈性", desc: "晚上改國際通散步、採買、輕食或宵夜。" }
      ],
      note: "雨天版 D7 也取消瀨長島；DMM 後延長 iias，下午回飯店泳池 / 溫泉，晚上國際通。"
    },
    {
      day: "D8",
      date: "6/13（六）",
      title: "雨天版：返台日維持商場與還車緩衝",
      items: [
        { time: "10:00-10:30", label: "飯店退房", duration: "約 30 分", desc: "退房後行李放車上，雨具放容易拿的位置。" },
        { time: "10:30-11:15", label: "西來院達磨寺（西来院）", duration: "約 45 分", desc: "6/11 移出的達磨寺改到退房後短停；雨大或不好停就縮短。" },
        { time: "11:45-13:00", label: "午餐：燒肉本部牧場 那霸店", duration: "約 75 分", desc: "正式午餐維持；8 人先訂位，吃完接豐崎採買與還車。" },
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
  { aliases: ["沃克曼Plus 北谷國體道路店（WORKMAN Plus）"], mapQuery: "WORKMAN Plus 北谷国体道路店 沖縄", type: "機能服店" },
  { aliases: ["美國村"], mapQuery: "American Village Okinawa", type: "商圈景點" },
  { aliases: ["永旺北谷店（イオン北谷店）"], mapQuery: "イオン北谷店 沖縄", type: "超市" },
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
  { aliases: ["西來院達磨寺（西来院）", "西來院"], mapQuery: "西来院 首里赤田町 那覇 沖縄", type: "寺院" },
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
  { aliases: ["純沖繩料理 三線の花"], mapQuery: "三線の花 恩納村 沖縄", type: "沖繩料理" },
  { aliases: ["THE GARLIC SHRIMP"], mapQuery: "THE GARLIC SHRIMP Onna Okinawa", type: "蝦蝦飯" },
  { aliases: ["Gajimaru Cafe&Bar"], mapQuery: "Gajimaru Cafe Bar Maeda Onna Okinawa", type: "素食餐廳" },
  { aliases: ["海鮮料理 浜之家"], mapQuery: "海鮮料理 浜の家 恩納村 沖縄", type: "海鮮餐廳" },
  { aliases: ["飯店浮潛"], mapQuery: "Hotel Monterey Okinawa Spa and Resort", type: "飯店活動" },
  { aliases: ["青之洞窟浮潛"], mapQuery: "Blue Cave Maeda Misaki Okinawa", type: "浮潛景點" },
  { aliases: ["Island Club（アイランド倶楽部）"], mapQuery: "アイランド倶楽部 真栄田岬 沖縄", type: "浮潛集合店" },
  { aliases: ["真榮田岬"], mapQuery: "Cape Maeda Okinawa", type: "海岬景點" },
  { aliases: ["琉球村"], mapQuery: "Ryukyu Mura", type: "文化園區" },
  { aliases: ["體驗王國むら咲むら"], mapQuery: "体験王国むら咲むら 読谷 沖縄", type: "文化體驗園區" },
  { aliases: ["生命之丘（BIOS之丘）"], mapQuery: "ビオスの丘 うるま 沖縄", type: "自然園區" },
  { aliases: ["沖繩鐘乳洞"], mapQuery: "沖繩鐘乳洞 うるま 沖縄", type: "鐘乳洞" },
  { aliases: ["San-A Ishikawa City（サンエー石川シティ）", "San-A Ishikawa City / サンエー石川シティ", "サンエー石川シティ"], mapQuery: "サンエー 石川シティ うるま 沖縄", type: "購物中心" },
  { aliases: ["Lawson 恩納村周邊（ローソン）"], mapQuery: "ローソン 恩納村 沖縄", type: "便利商店" },
  { aliases: ["海上滑索"], mapQuery: "PANZA Okinawa MegaZIP Onna Okinawa", type: "海上滑索" },
  { aliases: ["座喜味城跡", "座喜味城跡與座喜味城跡博物館"], mapQuery: "Zakimi Castle Ruins Yomitan Okinawa", type: "歷史散步點" },
  { aliases: ["古宇利大橋", "古宇利橋"], mapQuery: "Kouri Bridge Okinawa", type: "海景橋" },
  { aliases: ["OWNDAYS AEON Nago"], mapQuery: "OWNDAYS AEON Nago Okinawa", type: "眼鏡店" },
  { aliases: ["永旺名護店（イオン名護店） / OWNDAYS AEON Nago", "永旺名護店（イオン名護店）"], mapQuery: "イオン名護店 沖縄", type: "商場" },
  { aliases: ["名護鳳梨園（ナゴパイナップルパーク）"], mapQuery: "Nago Pineapple Park Okinawa", type: "主題園區" },
  { aliases: ["MEGA 唐吉訶德名護店（MEGAドン・キホーテ 名護店）"], mapQuery: "MEGA ドン・キホーテ 名護店 5 Chome-24 Okita Nago Okinawa", type: "折扣商店" },
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
