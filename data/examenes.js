// Datos de la guía Nōken 5 — examenes
// Editable a mano: es JSON puro asignado a N5.data.examenes
//
// Material de examen que NO se puede generar desde el resto de datos y hay que
// escribir.
//
// "frases": frases portadoras. El generador saca las preguntas de las frases de
// ejemplo de data/grammar.js y data/verbs.js, pero en ellas no salen ni los
// números, ni 東西南北, ni 口目耳…, así que esos kanji del N5 no se podían
// preguntar nunca. Estas los cubren. Con furigana, como el resto de data/.
//
// "lecturas": los textos de 読解 (もんだい４ 短文, もんだい５ 中文 y もんだい６
// 情報検索). Escritos a mano con furigana: el generador quita los kanji que no
// son del N5, igual que el examen de verdad.
//
// "parafrasis": もんだい４ de 文字・語彙 (言い換え類義). Se da una frase y hay que
// elegir la que significa casi lo mismo.
//
// En cada «opciones», la PRIMERA es la correcta; el generador las baraja.
// Se escriben como en el examen de verdad: kana con espacios y kanji fácil,
// sin furigana.
window.N5=window.N5||{data:{}};
N5.data.examenes=
{
 "frases": [
 {
  "jp": "りんごを一[ひと]つ買[か]いました。",
  "es": "Compré una manzana."
 },
 {
  "jp": "子[こ]どもが二人[ふたり]います。",
  "es": "Tengo dos hijos."
 },
 {
  "jp": "みかんを三[みっ]つください。",
  "es": "Tres mandarinas, por favor."
 },
 {
  "jp": "四時[よじ]に駅[えき]で会[あ]いましょう。",
  "es": "Quedamos a las cuatro en la estación."
 },
 {
  "jp": "五[いつ]つで五百円[ごひゃくえん]です。",
  "es": "Cinco salen por quinientos yenes."
 },
 {
  "jp": "ケーキを六[むっ]つ買[か]いました。",
  "es": "Compré seis pasteles."
 },
 {
  "jp": "七時[しちじ]に朝[あさ]ごはんを食[た]べます。",
  "es": "Desayuno a las siete."
 },
 {
  "jp": "八百円[はっぴゃくえん]の本[ほん]を買[か]いました。",
  "es": "Compré un libro de ochocientos yenes."
 },
 {
  "jp": "九時[くじ]に会社[かいしゃ]へ行[い]きます。",
  "es": "Voy a la empresa a las nueve."
 },
 {
  "jp": "十日[とおか]に国[くに]へ帰[かえ]ります。",
  "es": "Vuelvo a mi país el día diez."
 },
 {
  "jp": "百円[ひゃくえん]のパンを買[か]いました。",
  "es": "Compré un pan de cien yenes."
 },
 {
  "jp": "千円[せんえん]貸[か]してください。",
  "es": "Préstame mil yenes, por favor."
 },
 {
  "jp": "一万円[いちまんえん]の時計[とけい]です。",
  "es": "Es un reloj de diez mil yenes."
 },
 {
  "jp": "火曜日[かようび]に友達[ともだち]と会[あ]います。",
  "es": "El martes quedo con un amigo."
 },
 {
  "jp": "木曜日[もくようび]は学校[がっこう]が休[やす]みです。",
  "es": "El jueves no hay clase."
 },
 {
  "jp": "土曜日[どようび]に川[かわ]へ行[い]きます。",
  "es": "El sábado voy al río."
 },
 {
  "jp": "出口[でぐち]はどこですか。",
  "es": "¿Dónde está la salida?"
 },
 {
  "jp": "けさから目[め]が悪[わる]いです。",
  "es": "Desde esta mañana veo mal."
 },
 {
  "jp": "あの犬[いぬ]は耳[みみ]が大[おお]きいです。",
  "es": "Ese perro tiene las orejas grandes."
 },
 {
  "jp": "駅[えき]は東[ひがし]にあります。",
  "es": "La estación está al este."
 },
 {
  "jp": "西[にし]へ行[い]く電車[でんしゃ]はどれですか。",
  "es": "¿Cuál es el tren que va al oeste?"
 },
 {
  "jp": "南[みなみ]の国[くに]へ旅行[りょこう]したいです。",
  "es": "Quiero viajar a un país del sur."
 },
 {
  "jp": "北[きた]の窓[まど]を開[あ]けてください。",
  "es": "Abre la ventana del norte, por favor."
 },
 {
  "jp": "男[おとこ]の人[ひと]が三人[さんにん]います。",
  "es": "Hay tres hombres."
 },
 {
  "jp": "女[おんな]の人[ひと]に道[みち]を聞[き]きました。",
  "es": "Le pregunté el camino a una mujer."
 },
 {
  "jp": "日本[にほん]は魚[さかな]が多[おお]いです。",
  "es": "En Japón hay mucho pescado."
 },
 {
  "jp": "今年[ことし]の夏[なつ]は暑[あつ]かったです。",
  "es": "Este verano ha hecho calor."
 },
 {
  "jp": "午前[ごぜん]九時[くじ]に始[はじ]まります。",
  "es": "Empieza a las nueve de la mañana."
 },
 {
  "jp": "午後[ごご]から雨[あめ]が降[ふ]ります。",
  "es": "Va a llover por la tarde."
 },
 {
  "jp": "左[ひだり]を見[み]てください。",
  "es": "Mira a la izquierda, por favor."
 },
 {
  "jp": "白[しろ]いシャツを買[か]いました。",
  "es": "Me compré una camisa blanca."
 },
 {
  "jp": "学校[がっこう]は駅[えき]の前[まえ]にあります。",
  "es": "La escuela está delante de la estación."
 },
 {
  "jp": "あの店[みせ]は安[やす]いです。",
  "es": "Esa tienda es barata."
 },
 {
  "jp": "二時半[にじはん]に出[で]かけます。",
  "es": "Salgo a las dos y media."
 },
 {
  "jp": "友達[ともだち]と映画[えいが]を見[み]ました。",
  "es": "Vi una película con un amigo."
 },
 {
  "jp": "わたしの家[うち]は古[ふる]いです。",
  "es": "Mi casa es vieja."
 },
 {
  "jp": "先生[せんせい]が前[まえ]に立[た]っています。",
  "es": "El profesor está de pie delante."
 },
 {
  "jp": "先生[せんせい]は何[なに]も言[い]いませんでした。",
  "es": "El profesor no dijo nada."
 },
 {
  "jp": "外[そと]はとても寒[さむ]いです。",
  "es": "Fuera hace mucho frío."
 },
 {
  "jp": "外国[がいこく]へ行[い]きたいです。",
  "es": "Quiero ir al extranjero."
 },
 {
  "jp": "飲[の]み物[もの]は何[なに]がいいですか。",
  "es": "¿Qué quieres de beber?"
 },
 {
  "jp": "毎日[まいにち]お茶[ちゃ]を飲[の]みます。",
  "es": "Bebo té todos los días."
 },
 {
  "jp": "来週[らいしゅう]国[くに]へ帰[かえ]ります。",
  "es": "La semana que viene vuelvo a mi país."
 },
 {
  "jp": "先週[せんしゅう]京都[きょうと]へ行[い]きました。",
  "es": "La semana pasada fui a Kioto."
 },
 {
  "jp": "きのう魚[さかな]を食[た]べました。",
  "es": "Ayer comí pescado."
 },
 {
  "jp": "りんごを四[よっ]つください。",
  "es": "Cuatro manzanas, por favor."
 },
 {
  "jp": "たまごを八[やっ]つ買[か]いました。",
  "es": "Compré ocho huevos."
 },
 {
  "jp": "たばこの火[ひ]を消[け]してください。",
  "es": "Apaga el cigarrillo, por favor."
 },
 {
  "jp": "にわに大[おお]きい木[き]があります。",
  "es": "En el jardín hay un árbol grande."
 },
 {
  "jp": "子[こ]どもが土[つち]で遊[あそ]んでいます。",
  "es": "Los niños están jugando en la tierra."
 },
 {
  "jp": "電車[でんしゃ]の中[なか]で立[た]ちます。",
  "es": "En el tren voy de pie."
 },
 {
  "jp": "日本語[にほんご]で何[なん]と言[い]いますか。",
  "es": "¿Cómo se dice en japonés?"
 },
 {
  "jp": "テレビを消[け]してください。",
  "es": "Apaga la televisión, por favor."
 },
 {
  "jp": "毎朝[まいあさ]コーヒーを飲[の]みます。",
  "es": "Todas las mañanas tomo café."
 },
 {
  "jp": "ラジオでニュースを聞[き]きます。",
  "es": "Escucho las noticias por la radio."
 },
 {
  "jp": "カメラを買[か]いたいです。",
  "es": "Quiero comprar una cámara."
 },
 {
  "jp": "ビールを二[ふた]つください。",
  "es": "Dos cervezas, por favor."
 },
 {
  "jp": "エレベーターは右[みぎ]にあります。",
  "es": "El ascensor está a la derecha."
 },
 {
  "jp": "デパートで買[か]い物[もの]をしました。",
  "es": "Hice la compra en los grandes almacenes."
 },
 {
  "jp": "ノートとペンを持[も]ってきてください。",
  "es": "Trae un cuaderno y un bolígrafo, por favor."
 },
 {
  "jp": "テーブルの上[うえ]に花[はな]があります。",
  "es": "Encima de la mesa hay flores."
 },
 {
  "jp": "スプーンで食[た]べます。",
  "es": "Como con cuchara."
 },
 {
  "jp": "バスで学校[がっこう]へ行[い]きます。",
  "es": "Voy a la escuela en autobús."
 },
 {
  "jp": "カレンダーを見[み]てください。",
  "es": "Mira el calendario, por favor."
 },
 {
  "jp": "ポケットに入[い]れました。",
  "es": "Lo metí en el bolsillo."
 }
 ],
 "lecturas": {
  "cortas": [
   {
    "texto": "わたしは 毎朝[まいあさ]六時[ろくじ]に 起[お]きます。それから 三十分[さんじゅっぷん]ぐらい 走[はし]ります。走[はし]ったあとで シャワーを 浴[あ]びて、朝[あさ]ごはんを 食[た]べます。うちを 出[で]るのは 八時[はちじ]です。",
    "es": "Me levanto todas las mañanas a las seis. Después corro unos treinta minutos. Al terminar de correr me ducho y desayuno. Salgo de casa a las ocho.",
    "pregunta": "この 人[ひと]は 走[はし]ったあとで すぐ 何[なに]を しますか。",
    "opciones": [
     "シャワーを あびます。",
     "あさごはんを たべます。",
     "うちを でます。",
     "三十分 はしります。"
    ],
    "nota": "「走ったあとで シャワーを 浴びて、朝[あさ]ごはんを 食べます」: el orden es correr → ducha → desayuno."
   },
   {
    "texto": "きのうは 日曜日[にちようび]でしたが、朝[あさ]から 雨[あめ]が 降[ふ]っていました。それで、出[で]かけないで うちで 本[ほん]を 読[よ]みました。午後[ごご]から 天気[てんき]が よく なったので、近[ちか]くの 公園[こうえん]を 散歩[さんぽ]しました。",
    "es": "Ayer era domingo, pero llovía desde por la mañana. Así que no salí y leí en casa. Por la tarde mejoró el tiempo y paseé por un parque cercano.",
    "pregunta": "この 人[ひと]は きのうの 午後[ごご]、何[なに]を しましたか。",
    "opciones": [
     "こうえんを さんぽしました。",
     "うちで 本を よみました。",
     "かいものに 行きました。",
     "一日中 ねて いました。"
    ],
    "nota": "El libro fue por la mañana; 午後から… el paseo."
   },
   {
    "texto": "山田[やまだ]さんへ\n\nあしたの 授業[じゅぎょう]は 教室[きょうしつ]が 変[か]わります。いつもの 二階[にかい]では なくて、三階[さんがい]の 305の 部屋[へや]です。時間[じかん]は いつもと 同[おな]じ 九時[くじ]からです。\n\n田中[たなか]",
    "es": "Sr. Yamada: la clase de mañana cambia de aula. No es la de siempre en la segunda planta, sino la 305 de la tercera. La hora es la misma de siempre, a las nueve. Tanaka.",
    "pregunta": "あしたの 授業[じゅぎょう]に ついて、正[ただ]しい ものは どれですか。",
    "opciones": [
     "きょうしつは かわりますが、時間は かわりません。",
     "きょうしつも 時間も かわります。",
     "時間は かわりますが、きょうしつは かわりません。",
     "きょうしつも 時間も かわりません。"
    ],
    "nota": "「教室が 変わります」 pero 「時間は いつもと 同じ」."
   },
   {
    "texto": "うちには ねこが 二匹[にひき]います。白[しろ]いのと 黒[くろ]いのです。白[しろ]い ねこは 十年[じゅうねん]まえから いますが、黒[くろ]いのは 去年[きょねん] 友[とも]だちから もらいました。二匹[にひき]とも とても 元気[げんき]です。",
    "es": "En casa tenemos dos gatos, uno blanco y uno negro. El blanco está desde hace diez años; el negro me lo dio un amigo el año pasado. Los dos están muy sanos.",
    "pregunta": "黒[くろ]い ねこは いつから うちに いますか。",
    "opciones": [
     "去年[きょねん]から。",
     "十年まえから。",
     "先週から。",
     "子どもの ときから。"
    ],
    "nota": "十年まえ es el gato blanco; el negro llegó 去年[きょねん]."
   },
   {
    "texto": "この 町[まち]には 大[おお]きい 図書館[としょかん]が あります。本[ほん]は 2週間[しゅうかん] 借[か]りることが できます。でも、辞書[じしょ]と 新[あたら]しい ざっしは 借[か]りることが できません。図書館[としょかん]の 中[なか]で 読[よ]んで ください。",
    "es": "En este pueblo hay una biblioteca grande. Los libros se pueden llevar dos semanas. Pero los diccionarios y las revistas nuevas no; hay que leerlos dentro.",
    "pregunta": "図書館[としょかん]から 借[か]りることが できない ものは 何[なん]ですか。",
    "opciones": [
     "じしょと 新しい ざっし",
     "本と じしょ",
     "本と 新しい ざっし",
     "なにも かりられません"
    ],
    "nota": "Solo los libros se prestan; 辞書 y ざっし se leen dentro."
   },
   {
    "texto": "けさ 駅[えき]で かばんを なくしました。中[なか]には さいふと 本[ほん]が 入[はい]って いました。駅[えき]の 人[ひと]に 聞[き]きましたが、まだ 見[み]つかりません。あした もう 一度[いちど] 駅[えき]へ 行[い]って みます。",
    "es": "Esta mañana perdí el bolso en la estación. Dentro llevaba la cartera y un libro. Pregunté al personal, pero todavía no ha aparecido. Mañana volveré a la estación.",
    "pregunta": "この 人[ひと]は あした 何[なに]を しますか。",
    "opciones": [
     "もう 一度[いちど] えきへ 行きます。",
     "新しい かばんを 買います。",
     "えきの 人に 電話を します。",
     "本を かりに 行きます。"
    ],
    "nota": "「あした もう 一度[いちど] 駅へ 行って みます」."
   },
   {
    "texto": "日本[にほん]に 来[き]て 二年[にねん]に なります。はじめは 日本語[にほんご]が 全然[ぜんぜん] わかりませんでしたが、今[いま]は 友[とも]だちと 話[はな]すことが できます。でも、漢字[かんじ]は まだ むずかしいです。",
    "es": "Hace dos años que vine a Japón. Al principio no entendía nada de japonés, pero ahora puedo hablar con mis amigos. Los kanji, sin embargo, todavía me cuestan.",
    "pregunta": "この 人[ひと]は 今[いま]、何[なに]が むずかしいと 言[い]って いますか。",
    "opciones": [
     "かんじ",
     "友だちと 話すこと",
     "日本の りょうり",
     "でんしゃに のること"
    ],
    "nota": "「漢字は まだ むずかしいです」."
   },
   {
    "texto": "土曜日[どようび]の 朝[あさ]、母[はは]と スーパーへ 行[い]きました。にくと やさいと くだものを 買[か]いました。魚[さかな]も 買[か]いたかったですが、高[たか]かったので やめました。",
    "es": "El sábado por la mañana fui al supermercado con mi madre. Compramos carne, verdura y fruta. También quería comprar pescado, pero estaba caro y lo dejé.",
    "pregunta": "買[か]わなかった ものは 何[なん]ですか。",
    "opciones": [
     "さかな",
     "にく",
     "やさい",
     "くだもの"
    ],
    "nota": "「魚も 買いたかったですが、…やめました」."
   },
   {
    "texto": "あしたの パーティーは 六時[ろくじ]からです。でも、わたしは 仕事[しごと]が あるので、七時[しちじ]ごろ 行[い]きます。みなさんは 先[さき]に 始[はじ]めて ください。おくれて すみません。",
    "es": "La fiesta de mañana es a las seis. Pero como tengo trabajo, iré sobre las siete. Empezad sin mí, por favor. Siento llegar tarde.",
    "pregunta": "この 人[ひと]は パーティーに 何時[なんじ]ごろ 行[い]きますか。",
    "opciones": [
     "七時ごろ",
     "六時ごろ",
     "五時ごろ",
     "八時ごろ"
    ],
    "nota": "La fiesta empieza a las 6, pero esta persona llega a las 7."
   },
   {
    "texto": "わたしの へやは あまり 広[ひろ]く ありませんが、まどが 大[おお]きくて 明[あか]るいです。まどから 公園[こうえん]の 木[き]が 見[み]えます。春[はる]は とても きれいです。",
    "es": "Mi habitación no es muy grande, pero tiene una ventana grande y es luminosa. Desde la ventana se ven los árboles del parque. En primavera está preciosa.",
    "pregunta": "この へやは どんな へやですか。",
    "opciones": [
     "せまいですが、あかるい へや。",
     "ひろくて あかるい へや。",
     "せまくて くらい へや。",
     "ひろいですが、くらい へや。"
    ],
    "nota": "「広く ありません」＋「明るいです」."
   },
   {
    "texto": "先週[せんしゅう]の 水曜日[すいようび]、かぜを ひいて 学校[がっこう]を 休[やす]みました。木曜日[もくようび]も 熱[ねつ]が あったので 病院[びょういん]へ 行[い]きました。金曜日[きんようび]から また 学校[がっこう]へ 行[い]って います。",
    "es": "El miércoles pasado me resfrié y falté a clase. El jueves también tenía fiebre y fui al hospital. Desde el viernes vuelvo a ir a clase.",
    "pregunta": "この 人[ひと]は 何日[なんにち] 学校[がっこう]を 休[やす]みましたか。",
    "opciones": [
     "二日",
     "一日",
     "三日",
     "四日"
    ],
    "nota": "Faltó el 水曜日[すいようび] y el 木曜日[もくようび]: dos días. El 金曜日[きんようび] ya volvió."
   },
   {
    "texto": "山[やま]の 上[うえ]の ホテルは 少[すこ]し 高[たか]いですが、へやから 海[うみ]が 見[み]えます。駅[えき]の 近[ちか]くの ホテルは 安[やす]くて 便利[べんり]です。わたしは 海[うみ]が 見[み]たいので、山[やま]の 上[うえ]の ホテルに しました。",
    "es": "El hotel de la montaña es un poco caro, pero desde la habitación se ve el mar. El de al lado de la estación es barato y está bien situado. Como quiero ver el mar, elegí el de la montaña.",
    "pregunta": "この 人[ひと]は どうして 山[やま]の 上[うえ]の ホテルに しましたか。",
    "opciones": [
     "うみが 見たいから。",
     "安いから。",
     "えきに ちかいから。",
     "べんりだから。"
    ],
    "nota": "「海が 見たいので、山の 上の ホテルに しました」."
   }
  ],
  "medias": [
   {
    "texto": "わたしは 先月[せんげつ] 東京[とうきょう]から 大阪[おおさか]へ 引[ひ]っ越[こ]しました。前[まえ]の うちは 駅[えき]から 歩[ある]いて 十五分[じゅうごふん]ぐらい かかりましたが、今[いま]の うちは 五分[ごふん]です。とても 便利[べんり]に なりました。\n\nでも、前[まえ]の うちの ほうが 広[ひろ]かったです。今[いま]の うちは へやが 二[ふた]つしか ありません。それに、となりの 人[ひと]の テレビの 音[おと]が よく 聞[き]こえます。\n\n来年[らいねん] もう 少[すこ]し 広[ひろ]い うちを さがす つもりです。",
    "es": "El mes pasado me mudé de Tokio a Osaka. De la casa anterior a la estación había unos quince minutos andando; de la de ahora, cinco. Es mucho más cómodo. Pero la anterior era más grande: esta solo tiene dos habitaciones. Además, se oye la tele del vecino. El año que viene pienso buscar una casa un poco más grande.",
    "preguntas": [
     {
      "pregunta": "今[いま]の うちに ついて、正[ただ]しい ものは どれですか。",
      "opciones": [
       "えきに ちかいですが、せまいです。",
       "えきに ちかくて、ひろいです。",
       "えきから とおいですが、ひろいです。",
       "えきから とおくて、せまいです。"
      ],
      "nota": "駅まで 五分（便利）pero 「へやが 二つしか ありません」."
     },
     {
      "pregunta": "この 人[ひと]は 来年[らいねん]、何[なに]を する つもりですか。",
      "opciones": [
       "もっと ひろい うちを さがします。",
       "東京[とうきょう]へ かえります。",
       "となりの 人に 話します。",
       "新しい テレビを 買います。"
      ],
      "nota": "「もう 少し 広い うちを さがす つもりです」."
     }
    ]
   },
   {
    "texto": "田中[たなか]さんへ\n\nお元気[げんき]ですか。わたしは 今[いま] 日本語[にほんご]の 学校[がっこう]で 勉強[べんきょう]して います。授業[じゅぎょう]は 月曜日[げつようび]から 金曜日[きんようび]まで、朝[あさ] 九時[くじ]から 昼[ひる] 一時[いちじ]までです。\n\n午後[ごご]は アルバイトを して います。レストランで 週[しゅう]に 三日[みっか] 働[はたら]いて います。少[すこ]し たいへんですが、日本語[にほんご]を 使[つか]う ことが できるので、おもしろいです。\n\n来月[らいげつ] 国[くに]へ 帰[かえ]ります。そのまえに 一度[いちど] 会[あ]いませんか。\n\nリー",
    "es": "Querido Tanaka: ¿qué tal estás? Ahora estudio en una escuela de japonés. Las clases son de lunes a viernes, de nueve de la mañana a la una. Por la tarde trabajo a tiempo parcial en un restaurante, tres días por semana. Es algo duro, pero puedo usar el japonés y resulta interesante. El mes que viene vuelvo a mi país. ¿Nos vemos antes? Lee.",
    "preguntas": [
     {
      "pregunta": "リーさんは アルバイトを どのぐらい して いますか。",
      "opciones": [
       "一週間に 三日",
       "毎日",
       "一週間に 五日",
       "土曜日[どようび]と 日曜日[にちようび]だけ"
      ],
      "nota": "「週に 三日 働いて います」."
     },
     {
      "pregunta": "リーさんは どうして この 手紙[てがみ]を 書[か]きましたか。",
      "opciones": [
       "国へ かえるまえに 田中[たなか]さんに 会いたいから。",
       "新しい アルバイトを さがして いるから。",
       "日本語の 学校を 教[おし]えたいから。",
       "田中[たなか]さんが びょうきだから。"
      ],
      "nota": "「そのまえに 一度[いちど] 会いませんか」 es el motivo de la carta."
     }
    ]
   },
   {
    "texto": "わたしの 父[ちち]は 料理[りょうり]が 上手[じょうず]です。母[はは]は 仕事[しごと]が いそがしいので、晩[ばん]ごはんは いつも 父[ちち]が 作[つく]ります。\n\n日曜日[にちようび]は わたしも 手伝[てつだ]います。先週[せんしゅう]の 日曜日[にちようび]は はじめて 一人[ひとり]で カレーを 作[つく]りました。少[すこ]し からかったですが、父[ちち]も 母[はは]も 「おいしい」と 言[い]って くれました。\n\n今度[こんど]の 日曜日[にちようび]は 魚[さかな]の 料理[りょうり]を 作[つく]って みたいです。",
    "es": "Mi padre cocina bien. Como mi madre está ocupada con el trabajo, la cena siempre la hace él. Los domingos yo ayudo. El domingo pasado hice curry solo por primera vez. Picaba un poco, pero mi padre y mi madre dijeron que estaba bueno. El próximo domingo quiero probar a cocinar pescado.",
    "preguntas": [
     {
      "pregunta": "だれが いつも 晩[ばん]ごはんを 作[つく]りますか。",
      "opciones": [
       "父",
       "母",
       "わたし",
       "父と 母"
      ],
      "nota": "「母は 仕事が いそがしいので、晩ごはんは いつも 父が 作[つく]ります」."
     },
     {
      "pregunta": "先週[せんしゅう]の 日曜日[にちようび]、この 人[ひと]は 何[なに]を しましたか。",
      "opciones": [
       "一人で カレーを 作[つく]りました。",
       "さかなの りょうりを 作[つく]りました。",
       "父の 手伝[てつだ]いを しました。",
       "母と りょうりを 作[つく]りました。"
      ],
      "nota": "「はじめて 一人で カレーを 作[つく]りました」. El pescado es para el próximo domingo."
     }
    ]
   },
   {
    "texto": "きのう 友[とも]だちと 山[やま]へ 行[い]きました。朝[あさ] 六時[ろくじ]に 駅[えき]で 会[あ]って、バスで 二時間[にじかん] かかりました。\n\n山[やま]の 上[うえ]は 少[すこ]し 寒[さむ]かったですが、天気[てんき]が よくて、遠[とお]くの 海[うみ]まで 見[み]えました。お昼[ひる]は 友[とも]だちが 作[つく]った おにぎりを 食[た]べました。とても おいしかったです。\n\n帰[かえ]りは つかれて、バスの 中[なか]で ずっと 寝[ね]て いました。うちに 着[つ]いたのは 夜[よる] 八時[はちじ]ごろでした。",
    "es": "Ayer fui a la montaña con un amigo. Quedamos a las seis en la estación y el autobús tardó dos horas. Arriba hacía algo de frío, pero el tiempo era bueno y se veía hasta el mar. A mediodía comimos los onigiri que había hecho mi amigo. Estaban buenísimos. A la vuelta iba cansado y dormí todo el viaje. Llegué a casa sobre las ocho de la noche.",
    "preguntas": [
     {
      "pregunta": "二人[ふたり]は 何時[なんじ]ごろ 山[やま]に 着[つ]きましたか。",
      "opciones": [
       "八時ごろ",
       "六時ごろ",
       "二時ごろ",
       "十時ごろ"
      ],
      "nota": "Quedaron a las 6 y el autobús tardó 2 horas: 8時ごろ."
     },
     {
      "pregunta": "お昼[ひる]ごはんに ついて、正[ただ]しい ものは どれですか。",
      "opciones": [
       "友だちが 作[つく]った ものを 食べました。",
       "山の 上の 店で 買いました。",
       "うちから 買って 行きました。",
       "何も 食べませんでした。"
      ],
      "nota": "「友だちが 作[つく]った おにぎりを 食べました」."
     }
    ]
   },
   {
    "texto": "わたしの 町[まち]には 小[ちい]さい 本屋[ほんや]が 一[ひと]つ ありました。おじいさんが 一人[ひとり]で 店[みせ]を やって いました。\n\nわたしは 子[こ]どもの とき、よく そこで まんがを 買[か]いました。お金[かね]が 少[すこ]ししか なくて、長[なが]い 時間[じかん] 本[ほん]を 見[み]て いましたが、おじいさんは 何[なに]も 言[い]いませんでした。\n\n去年[きょねん]、その 店[みせ]は 閉[し]まりました。今[いま]は コンビニに なって います。前[まえ]を 通[とお]ると、いつも おじいさんの ことを 思[おも]い出[だ]します。",
    "es": "En mi pueblo había una librería pequeña que llevaba un señor mayor él solo. De niño compraba allí tebeos. Tenía poco dinero y me pasaba mucho rato mirando libros, pero él nunca me decía nada. El año pasado cerró; ahora es una tienda de conveniencia. Cuando paso por delante siempre me acuerdo de él.",
    "preguntas": [
     {
      "pregunta": "子[こ]どもの とき、この 人[ひと]は 本屋[ほんや]で 何[なに]を して いましたか。",
      "opciones": [
       "長い 時間 本を 見て いました。",
       "おじいさんと 話して いました。",
       "たくさん 本を 買って いました。",
       "まんがを かりて いました。"
      ],
      "nota": "「長い 時間 本を 見て いました」."
     },
     {
      "pregunta": "今[いま]、その 店[みせ]は どう なって いますか。",
      "opciones": [
       "コンビニに なって います。",
       "まだ 本屋[ほんや]です。",
       "なにも ありません。",
       "おじいさんの うちに なって います。"
      ],
      "nota": "「今は コンビニに なって います」."
     }
    ]
   },
   {
    "texto": "日本[にほん]の 電車[でんしゃ]は 時間[じかん]に 正確[せいかく]だと よく 言[い]われます。わたしも はじめて 来[き]た とき、とても おどろきました。\n\nでも、朝[あさ]の 電車[でんしゃ]は とても こんで います。七時[しちじ]半[はん]から 八時[はちじ]半[はん]ごろが 一番[いちばん] たいへんです。すわることは できませんし、本[ほん]を 読[よ]むことも できません。\n\nそれで わたしは 少[すこ]し 早[はや]く うちを 出[で]ることに しました。七時[しちじ]の 電車[でんしゃ]は すいて いて、会社[かいしゃ]に 着[つ]くまで ゆっくり 本[ほん]が 読[よ]めます。",
    "es": "Se dice a menudo que los trenes japoneses son puntuales; a mí también me sorprendió al llegar. Pero el tren de la mañana va lleno: de siete y media a ocho y media es lo peor. No puedes sentarte ni leer. Por eso decidí salir de casa un poco antes. El tren de las siete va vacío y puedo leer tranquilo hasta la oficina.",
    "preguntas": [
     {
      "pregunta": "朝[あさ]の 電車[でんしゃ]は いつが 一番[いちばん] こんで いますか。",
      "opciones": [
       "七時半から 八時半ごろ",
       "七時ごろ",
       "六時半ごろ",
       "九時ごろ"
      ],
      "nota": "「七時半から 八時半ごろが 一番 たいへんです」."
     },
     {
      "pregunta": "この 人[ひと]は どうして 早[はや]く うちを 出[で]ますか。",
      "opciones": [
       "電車の 中で 本が 読みたいから。",
       "会社が 遠[とお]いから。",
       "電車が おくれるから。",
       "朝[あさ]ごはんを 食べないから。"
      ],
      "nota": "「七時の 電車は すいて いて、…ゆっくり 本が 読めます」."
     }
    ]
   }
  ],
  "informacion": [
   {
    "titulo": "テニス教室[きょうしつ]の おしらせ",
    "cabecera": [
     "クラス",
     "曜日[ようび]",
     "時間[じかん]",
     "お金[かね]"
    ],
    "filas": [
     [
      "A",
      "火曜日[かようび]",
      "9:00〜10:30",
      "3,000円[えん]"
     ],
     [
      "B",
      "火曜日[かようび]",
      "19:00〜20:30",
      "4,000円[えん]"
     ],
     [
      "C",
      "土曜日[どようび]",
      "9:00〜10:30",
      "3,500円[えん]"
     ],
     [
      "D",
      "土曜日[どようび]",
      "14:00〜15:30",
      "3,500円[えん]"
     ]
    ],
    "notas": [
     "※ はじめての 人[ひと]は Aクラスか Cクラスです。",
     "※ ラケットは かりる ことが できます（200円[えん]）。"
    ],
    "pregunta": "リーさんは テニスを した ことが ありません。土曜日[どようび]の 午前中[ごぜんちゅう]だけ 時間[じかん]が あります。リーさんは どの クラスに 入[はい]りますか。",
    "opciones": [
     "Cクラス",
     "Aクラス",
     "Bクラス",
     "Dクラス"
    ],
    "nota": "Principiante ⇒ A o C; sábado por la mañana ⇒ C.",
    "es": "Aviso de las clases de tenis, con el día, la hora y el precio de cada grupo."
   },
   {
    "titulo": "スーパー やまだ　今週[こんしゅう]の 安[やす]い 日[ひ]",
    "cabecera": [
     "曜日[ようび]",
     "安[やす]く なる もの"
    ],
    "filas": [
     [
      "月曜日[げつようび]",
      "やさい"
     ],
     [
      "水曜日[すいようび]",
      "にく"
     ],
     [
      "金曜日[きんようび]",
      "魚[さかな]"
     ],
     [
      "日曜日[にちようび]",
      "くだもの"
     ]
    ],
    "notas": [
     "※ 午後[ごご]六時[ろくじ]から 八時[はちじ]までは もっと 安[やす]く なります。"
    ],
    "pregunta": "田中[たなか]さんは 魚[さかな]を 一番[いちばん] 安[やす]く 買[か]いたいです。いつ 行[い]けば いいですか。",
    "opciones": [
     "金曜日[きんようび]の 午後 六時から",
     "金曜日[きんようび]の 午前中",
     "水曜日[すいようび]の 午後 六時から",
     "日曜日[にちようび]の 午後 六時から"
    ],
    "nota": "El pescado está de oferta el viernes, y a partir de las seis baja aún más.",
    "es": "Cartel del supermercado con el día de oferta de cada producto."
   },
   {
    "titulo": "図書館[としょかん]の 使[つか]いかた",
    "notas": [
     "開[あ]いて いる 時間[じかん]：午前[ごぜん]九時[くじ]〜午後[ごご]七時[しちじ]",
     "休[やす]みの 日[ひ]：毎週[まいしゅう] 月曜日[げつようび]",
     "本[ほん]は 一度[いちど]に 5さつまで、2週間[しゅうかん] 借[か]りる ことが できます。",
     "辞書[じしょ]と 新聞[しんぶん]は 借[か]りる ことが できません。"
    ],
    "pregunta": "この 図書館[としょかん]に ついて、正[ただ]しい ものは どれですか。",
    "opciones": [
     "月曜日[げつようび]は 休みです。",
     "日曜日[にちようび]は 休みです。",
     "本は 10さつまで かりられます。",
     "新聞も かりられます。"
    ],
    "nota": "「休みの 日：毎週 月曜日[げつようび]」.",
    "es": "Normas de uso de la biblioteca: horario, día de cierre y condiciones de préstamo."
   },
   {
    "titulo": "まちの プール",
    "cabecera": [
     "",
     "大人[おとな]",
     "子[こ]ども"
    ],
    "filas": [
     [
      "1かい",
      "500円[えん]",
      "200円[えん]"
     ],
     [
      "10かいの けん",
      "4,000円[えん]",
      "1,500円[えん]"
     ]
    ],
    "notas": [
     "※ 子[こ]どもは 15さいまでです。",
     "※ 水曜日[すいようび]は 休[やす]みです。"
    ],
    "pregunta": "大人[おとな]二人[ふたり]と 子[こ]ども 一人[ひとり]で 1かい 行[い]きます。ぜんぶで いくらですか。",
    "opciones": [
     "1,200円",
     "1,000円",
     "700円",
     "1,500円"
    ],
    "nota": "500×2 ＋ 200 ＝ 1,200円.",
    "es": "Precios de la piscina municipal para adultos y niños."
   },
   {
    "titulo": "ごみの 出[だ]しかた",
    "cabecera": [
     "ごみ",
     "曜日[ようび]"
    ],
    "filas": [
     [
      "もえる ごみ",
      "月曜日[げつようび]・木曜日[もくようび]"
     ],
     [
      "びん・かん",
      "水曜日[すいようび]"
     ],
     [
      "新聞[しんぶん]・ざっし",
      "土曜日[どようび]"
     ]
    ],
    "notas": [
     "※ 朝[あさ] 八時[はちじ]までに 出[だ]して ください。"
    ],
    "pregunta": "新聞[しんぶん]を 出[だ]したいです。いつ 出[だ]しますか。",
    "opciones": [
     "土曜日[どようび]の 朝[あさ] 八時までに",
     "月曜日[げつようび]の 朝[あさ] 八時までに",
     "水曜日[すいようび]の 朝[あさ] 八時までに",
     "いつでも いいです"
    ],
    "nota": "Los periódicos van el sábado, y antes de las ocho.",
    "es": "Calendario de recogida de basura del barrio."
   },
   {
    "titulo": "日本語[にほんご]教室[きょうしつ]の あんない",
    "cabecera": [
     "クラス",
     "どんな 人[ひと]",
     "曜日[ようび]",
     "時間[じかん]"
    ],
    "filas": [
     [
      "1",
      "はじめての 人[ひと]",
      "月[げつ]・水[すい]",
      "18:00〜19:30"
     ],
     [
      "2",
      "少[すこ]し 話[はな]せる 人[ひと]",
      "火[か]・木[もく]",
      "18:00〜19:30"
     ],
     [
      "3",
      "漢字[かんじ]を 勉強[べんきょう]したい 人[ひと]",
      "土[ど]",
      "10:00〜12:00"
     ]
    ],
    "notas": [
     "※ お金[かね]は 一[いっ]か月[げつ] 5,000円[えん]です。",
     "※ 入[はい]りたい 人[ひと]は 事務所[じむしょ]へ 来[き]て ください。"
    ],
    "pregunta": "ワンさんは 月曜日[げつようび]から 金曜日[きんようび]まで 仕事[しごと]が あります。漢字[かんじ]を 勉強[べんきょう]したいです。どの クラスに 入[はい]りますか。",
    "opciones": [
     "3のクラス",
     "1のクラス",
     "2のクラス",
     "どの クラスにも 入れません"
    ],
    "nota": "Solo puede el sábado y quiere kanji: la clase 3.",
    "es": "Folleto de las clases de japonés, con los niveles, los días y el precio."
   }
  ]
 },
 "parafrasis": [
  {
   "frase": "きのうは ひまでした。",
   "opciones": [
    "きのうは しごとが ありませんでした。",
    "きのうは しごとが おおかったです。",
    "きのうは とても いそがしかったです。",
    "きのうは やすみでは ありませんでした。"
   ],
   "es": "Ayer estaba libre.",
   "nota": "ひま es «tener tiempo libre», o sea no tener trabajo que hacer."
  },
  {
   "frase": "この へやは せまいです。",
   "opciones": [
    "この へやは ひろくないです。",
    "この へやは ひろいです。",
    "この へやは きれいです。",
    "この へやは あかるくないです。"
   ],
   "es": "Esta habitación es estrecha.",
   "nota": "せまい es lo contrario de ひろい."
  },
  {
   "frase": "ちちは いしゃです。",
   "opciones": [
    "ちちは びょういんで はたらいて います。",
    "ちちは がっこうで はたらいて います。",
    "ちちは いま びょうきです。",
    "ちちは びょういんに います。"
   ],
   "es": "Mi padre es médico.",
   "nota": "Estar en el hospital (びょういんに います) no es lo mismo que trabajar allí."
  },
  {
   "frase": "まいあさ 6じに おきます。",
   "opciones": [
    "いつも あさ 6じに おきます。",
    "きょうの あさ 6じに おきました。",
    "あしたの あさ 6じに おきます。",
    "ときどき あさ 6じに おきます。"
   ],
   "es": "Todas las mañanas me levanto a las 6.",
   "nota": "まい〜 («cada») equivale a いつも; ときどき sería «a veces»."
  },
  {
   "frase": "たなかさんは にほんごが じょうずです。",
   "opciones": [
    "たなかさんは にほんごを じょうずに はなします。",
    "たなかさんは にほんごを ならって います。",
    "たなかさんは にほんごが すきです。",
    "たなかさんは にほんごが わかりません。"
   ],
   "es": "El Sr. Tanaka se le da bien el japonés.",
   "nota": "〜が じょうずです pasa a 〜を じょうずに + verbo."
  },
  {
   "frase": "しけんは あさってです。",
   "opciones": [
    "しけんは あしたの つぎの ひです。",
    "しけんは きょうの つぎの ひです。",
    "しけんは きのうの つぎの ひです。",
    "しけんは おとといでした。"
   ],
   "es": "El examen es pasado mañana.",
   "nota": "あさって = el día siguiente a あした."
  },
  {
   "frase": "この ほんは たかくないです。",
   "opciones": [
    "この ほんは やすいです。",
    "この ほんは たかいです。",
    "この ほんは おもしろいです。",
    "この ほんは あたらしいです。"
   ],
   "es": "Este libro no es caro.",
   "nota": "たかくない ≒ やすい."
  },
  {
   "frase": "へやを そうじして ください。",
   "opciones": [
    "へやを きれいに して ください。",
    "へやを あかるく して ください。",
    "へやを ひろく して ください。",
    "へやで やすんで ください。"
   ],
   "es": "Limpia la habitación, por favor.",
   "nota": "そうじします es dejar algo きれい."
  },
  {
   "frase": "まいにち くるまで かいしゃへ いきます。",
   "opciones": [
    "まいにち くるまに のって かいしゃへ いきます。",
    "まいにち あるいて かいしゃへ いきます。",
    "まいにち くるまを かいに いきます。",
    "ときどき くるまで かいしゃへ いきます。"
   ],
   "es": "Voy todos los días a la empresa en coche.",
   "nota": "で de medio de transporte ≒ 〜に のって."
  },
  {
   "frase": "きのうの パーティーには だれも きませんでした。",
   "opciones": [
    "きのうの パーティーに きた ひとは いません。",
    "きのうの パーティーには おおぜい きました。",
    "きのうの パーティーに きたのは わたしだけです。",
    "きのうの パーティーには だれか きました。"
   ],
   "es": "A la fiesta de ayer no vino nadie.",
   "nota": "だれも + negativo = nadie."
  },
  {
   "frase": "この りょうりは おいしくないです。",
   "opciones": [
    "この りょうりは まずいです。",
    "この りょうりは おいしいです。",
    "この りょうりは からいです。",
    "この りょうりは あまいです。"
   ],
   "es": "Esta comida no está buena.",
   "nota": "まずい es el contrario de おいしい."
  },
  {
   "frase": "たなかさんは いま でかけて います。",
   "opciones": [
    "たなかさんは いま うちに いません。",
    "たなかさんは いま うちに います。",
    "たなかさんは いま ねて います。",
    "たなかさんは いま しごとを して います。"
   ],
   "es": "El Sr. Tanaka ha salido.",
   "nota": "でかけて います = ha salido y todavía no ha vuelto."
  },
  {
   "frase": "この かばんは 5000えんでした。",
   "opciones": [
    "この かばんを 5000えんで かいました。",
    "この かばんを 5000えんで うりました。",
    "この かばんは 5000えんより たかいです。",
    "この かばんは 5000えんより やすいです。"
   ],
   "es": "Este bolso costó 5000 yenes.",
   "nota": "El precio con で marca por cuánto se compró."
  },
  {
   "frase": "やまださんは わたしに はなを くれました。",
   "opciones": [
    "わたしは やまださんに はなを もらいました。",
    "わたしは やまださんに はなを あげました。",
    "やまださんは わたしに はなを もらいました。",
    "わたしは やまださんに はなを かいました。"
   ],
   "es": "El Sr. Yamada me dio unas flores.",
   "nota": "くれます (alguien me da) se le da la vuelta con もらいます (yo recibo)."
  },
  {
   "frase": "この へやは しずかでは ありません。",
   "opciones": [
    "この へやは うるさいです。",
    "この へやは しずかです。",
    "この へやは きたないです。",
    "この へやは くらいです。"
   ],
   "es": "Esta habitación no es silenciosa.",
   "nota": "しずかじゃない ≒ うるさい."
  },
  {
   "frase": "ミラーさんは 3ねんまえに にほんへ きました。",
   "opciones": [
    "ミラーさんは 3ねんまえから にほんに います。",
    "ミラーさんは 3ねんまえに くにへ かえりました。",
    "ミラーさんは らいねん にほんへ きます。",
    "ミラーさんは にほんに 3ねん いませんでした。"
   ],
   "es": "El Sr. Miller vino a Japón hace tres años.",
   "nota": "Vino hace tres años y sigue aquí: 〜から います."
  },
  {
   "frase": "ともだちに ほんを かしました。",
   "opciones": [
    "ともだちは わたしの ほんを かりました。",
    "ともだちは わたしに ほんを かしました。",
    "わたしは ともだちの ほんを かりました。",
    "ともだちに ほんを あげました。"
   ],
   "es": "Le presté un libro a un amigo.",
   "nota": "かします (prestar) visto desde el otro lado es かります (pedir prestado)."
  },
  {
   "frase": "あしたは やすみです。",
   "opciones": [
    "あしたは かいしゃへ いきません。",
    "あしたは かいしゃへ いきます。",
    "あしたは しごとが おおいです。",
    "あしたは とても いそがしいです。"
   ],
   "es": "Mañana es fiesta.",
   "nota": "やすみ = día sin trabajo ni clase."
  },
  {
   "frase": "この もんだいは やさしいです。",
   "opciones": [
    "この もんだいは むずかしくないです。",
    "この もんだいは むずかしいです。",
    "この もんだいは ながいです。",
    "この もんだいは たいへんです。"
   ],
   "es": "Este problema es fácil.",
   "nota": "やさしい es el contrario de むずかしい."
  },
  {
   "frase": "まだ ひるごはんを たべて いません。",
   "opciones": [
    "これから ひるごはんを たべます。",
    "もう ひるごはんを たべました。",
    "ひるごはんを たべたく ありません。",
    "いま ひるごはんを たべて います。"
   ],
   "es": "Todavía no he comido.",
   "nota": "まだ 〜て いません: no lo he hecho aún, está pendiente."
  },
  {
   "frase": "きのうは あめでした。",
   "opciones": [
    "きのうは あめが ふりました。",
    "きのうは はれでした。",
    "きのうは ゆきが ふりました。",
    "きのうは かぜが つよかったです。"
   ],
   "es": "Ayer llovió.",
   "nota": "あめです ≒ あめが ふります."
  },
  {
   "frase": "この えいがは つまらなかったです。",
   "opciones": [
    "この えいがは おもしろくなかったです。",
    "この えいがは おもしろかったです。",
    "この えいがは ながかったです。",
    "この えいがは ゆうめいでした。"
   ],
   "es": "Esta película fue aburrida.",
   "nota": "つまらない es el contrario de おもしろい."
  },
  {
   "frase": "やまださんは たなかさんより せが たかいです。",
   "opciones": [
    "たなかさんは やまださんより せが ひくいです。",
    "たなかさんは やまださんより せが たかいです。",
    "やまださんは たなかさんより せが ひくいです。",
    "やまださんと たなかさんは おなじ せです。"
   ],
   "es": "El Sr. Yamada es más alto que el Sr. Tanaka.",
   "nota": "Al darle la vuelta a la comparación hay que cambiar también el adjetivo."
  },
  {
   "frase": "まいばん 11じに ねます。",
   "opciones": [
    "いつも よる 11じに ねます。",
    "きのうの よる 11じに ねました。",
    "あさ 11じに ねます。",
    "ときどき よる 11じに ねます。"
   ],
   "es": "Me acuesto todas las noches a las 11.",
   "nota": "まいばん = todas las noches, o sea いつも よる."
  },
  {
   "frase": "ドアが しまって います。",
   "opciones": [
    "ドアは あいて いません。",
    "ドアは あいて います。",
    "ドアを しめました。",
    "ドアを あけて ください。"
   ],
   "es": "La puerta está cerrada.",
   "nota": "しまって います describe el estado; あいて いません es el mismo estado dicho en negativo."
  },
  {
   "frase": "この かんじの よみかたが わかりません。",
   "opciones": [
    "この かんじを どう よむか しりません。",
    "この かんじの いみが よく わかります。",
    "この かんじを かく ことが できます。",
    "この かんじを せんしゅう ならいました。"
   ],
   "es": "No sé cómo se lee este kanji.",
   "nota": "よみかた = «la manera de leerlo»."
  },
  {
   "frase": "らいしゅう しけんが あります。",
   "opciones": [
    "つぎの しゅう しけんが あります。",
    "せんしゅう しけんが ありました。",
    "こんしゅう しけんが あります。",
    "らいげつ しけんが あります。"
   ],
   "es": "La semana que viene hay examen.",
   "nota": "らい〜 es «el próximo»: らいしゅう, らいげつ, らいねん."
  },
  {
   "frase": "わたしの うちは えきの ちかくです。",
   "opciones": [
    "わたしの うちは えきから ちかいです。",
    "わたしの うちは えきから とおいです。",
    "わたしの うちは えきの なかです。",
    "わたしの うちは えきの まえに あります。"
   ],
   "es": "Mi casa está cerca de la estación.",
   "nota": "«Delante de la estación» es más concreto que «cerca»: no es lo mismo."
  },
  {
   "frase": "きのうの よる ともだちが きました。",
   "opciones": [
    "ゆうべ ともだちが きました。",
    "けさ ともだちが きました。",
    "きのうの あさ ともだちが きました。",
    "きょうの よる ともだちが きます。"
   ],
   "es": "Anoche vino un amigo.",
   "nota": "ゆうべ = きのうの よる. けさ es «esta mañana»."
  },
  {
   "frase": "この みせは 9じから 6じまでです。",
   "opciones": [
    "この みせは 9じに あいて、6じに しまります。",
    "この みせは 9じに しまって、6じに あきます。",
    "この みせは 9じかん あいて います。",
    "この みせは 6じから 9じまで あいて います。"
   ],
   "es": "Esta tienda abre de 9 a 6.",
   "nota": "〜から〜まで marca principio y fin."
  },
  {
   "frase": "わたしは りょうりが へたです。",
   "opciones": [
    "わたしは じょうずに りょうりが できません。",
    "わたしは よく りょうりを します。",
    "わたしは りょうりが じょうずです。",
    "わたしは りょうりが きらいです。"
   ],
   "es": "Se me da mal cocinar.",
   "nota": "へた es no poder hacerlo bien; no dice nada de si te gusta."
  },
  {
   "frase": "にわに きが たくさん あります。",
   "opciones": [
    "にわは きが おおいです。",
    "にわは きが すくないです。",
    "にわに きは ありません。",
    "にわに はなが たくさん あります。"
   ],
   "es": "En el jardín hay muchos árboles.",
   "nota": "たくさん あります ≒ おおいです."
  },
  {
   "frase": "きょうは かいしゃを やすみました。",
   "opciones": [
    "きょうは かいしゃへ いきませんでした。",
    "きょうは かいしゃで やすみました。",
    "きょうは かいしゃへ いきました。",
    "きょうは かいしゃで はたらきました。"
   ],
   "es": "Hoy he faltado al trabajo.",
   "nota": "〜を やすみます es faltar a ese sitio, no descansar dentro de él."
  },
  {
   "frase": "その しごとは もう おわりました。",
   "opciones": [
    "その しごとは ぜんぶ しました。",
    "その しごとは まだ して いません。",
    "その しごとは これから します。",
    "その しごとは とても たいへんです。"
   ],
   "es": "Ese trabajo ya ha terminado.",
   "nota": "もう おわりました ≒ ya está todo hecho."
  },
  {
   "frase": "いもうとは ピアノを ならって います。",
   "opciones": [
    "いもうとは ピアノを べんきょうして います。",
    "いもうとは ピアノを おしえて います。",
    "いもうとは ピアノを かいました。",
    "いもうとは ピアノが とても じょうずです。"
   ],
   "es": "Mi hermana pequeña aprende piano.",
   "nota": "ならいます es aprender; おしえます, enseñar."
  },
  {
   "frase": "きょうしつに がくせいが 5にん います。",
   "opciones": [
    "きょうしつに いる がくせいは 5にんです。",
    "きょうしつに いる がくせいは 5にんより おおいです。",
    "きょうしつに がくせいは いません。",
    "きょうしつに せんせいが 5にん います。"
   ],
   "es": "En el aula hay cinco estudiantes.",
   "nota": "El contador va delante o detrás, pero el número es el mismo."
  },
  {
   "frase": "この みずは つめたいです。",
   "opciones": [
    "この みずは あたたかくないです。",
    "この みずは あついです。",
    "この みずは きたないです。",
    "この みずは おいしいです。"
   ],
   "es": "Este agua está fría.",
   "nota": "つめたい es «frío al tacto»; さむい solo vale para el ambiente."
  },
  {
   "frase": "たなかさんは まだ きて いません。",
   "opciones": [
    "たなかさんは まだ ここに いません。",
    "たなかさんは もう きました。",
    "たなかさんは もう かえりました。",
    "たなかさんは きょう きません。"
   ],
   "es": "El Sr. Tanaka todavía no ha llegado.",
   "nota": "まだ 〜て いません: se le sigue esperando."
  },
  {
   "frase": "まいつき くにへ てがみを おくります。",
   "opciones": [
    "ひとつきに いちど くにへ てがみを おくります。",
    "まいしゅう くにへ てがみを おくります。",
    "まいとし くにへ てがみを おくります。",
    "まいにち くにへ てがみを おくります。"
   ],
   "es": "Cada mes mando una carta a mi país.",
   "nota": "まいつき = una vez al mes (ひとつきに いちど)."
  },
  {
   "frase": "きょうは とても さむいですから、うちに います。",
   "opciones": [
    "さむいので、そとへ でません。",
    "さむいですが、そとへ でます。",
    "あついので、うちに います。",
    "さむいので、うちへ かえります。"
   ],
   "es": "Hoy hace mucho frío, así que me quedo en casa.",
   "nota": "から y ので dan los dos el motivo; が sería lo contrario."
  },
  {
   "frase": "あの みせで パンを うって います。",
   "opciones": [
    "あの みせで パンを かう ことが できます。",
    "あの みせで パンを つくって います。",
    "あの みせで パンを たべました。",
    "あの みせは パンが ありません。"
   ],
   "es": "En esa tienda venden pan.",
   "nota": "Si lo venden, lo puedes comprar: 〜を かう ことが できます."
  }
 ]
}
