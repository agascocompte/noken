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
// "escucha": los guiones de 聴解. Los dice la voz japonesa del navegador: N es
// el narrador, M un hombre y F una mujer. En もんだい１ y ２ las opciones se
// leen en pantalla (en el examen real algunas son dibujos); en ３ y ４ se
// oyen, como en el examen, y en pantalla solo están los números.
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
  },
  {
   "jp": "毎朝[まいあさ] 7時[じ]に 起[お]きて、朝[あさ]ごはんを 食[た]べます。",
   "es": "Todas las mañanas me levanto a las 7 y desayuno."
  },
  {
   "jp": "わたしは 毎日[まいにち] 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます。",
   "es": "Todos los días voy a la oficina en tren."
  },
  {
   "jp": "きのうは 雨[あめ]でしたから、どこへも 行[い]きませんでした。",
   "es": "Ayer llovió, así que no fui a ningún sitio."
  },
  {
   "jp": "あしたは 天気[てんき]が いいでしょう。",
   "es": "Mañana seguramente hará buen tiempo."
  },
  {
   "jp": "先生[せんせい]は 教室[きょうしつ]で 学生[がくせい]に 日本語[にほんご]を 教[おし]えて います。",
   "es": "El profesor enseña japonés a los alumnos en el aula."
  },
  {
   "jp": "友達[ともだち]と いっしょに 山[やま]へ 行[い]きました。",
   "es": "Fui a la montaña con un amigo."
  },
  {
   "jp": "川[かわ]の 水[みず]は とても つめたかったです。",
   "es": "El agua del río estaba muy fría."
  },
  {
   "jp": "この 本[ほん]は 先週[せんしゅう] 図書館[としょかん]で 借[か]りました。",
   "es": "Este libro lo saqué de la biblioteca la semana pasada."
  },
  {
   "jp": "母[はは]は 毎晩[まいばん] 9時[じ]に 寝[ね]ます。",
   "es": "Mi madre se acuesta todas las noches a las 9."
  },
  {
   "jp": "父[ちち]は 新[あたら]しい 車[くるま]を 買[か]いました。",
   "es": "Mi padre se ha comprado un coche nuevo."
  },
  {
   "jp": "駅[えき]の 前[まえ]に 大[おお]きい 店[みせ]が あります。",
   "es": "Delante de la estación hay una tienda grande."
  },
  {
   "jp": "今日[きょう]は 何曜日[なんようび]ですか。",
   "es": "¿Qué día de la semana es hoy?"
  },
  {
   "jp": "わたしは 毎週[まいしゅう] 金曜日[きんようび]に 日本語[にほんご]を 勉強[べんきょう]します。",
   "es": "Estudio japonés todos los viernes."
  },
  {
   "jp": "この 店[みせ]の 魚[さかな]は 安[やす]くて おいしいです。",
   "es": "El pescado de esta tienda es barato y bueno."
  },
  {
   "jp": "来年[らいねん] 日本[にほん]へ 旅行[りょこう]に 行[い]きたいです。",
   "es": "El año que viene quiero ir de viaje a Japón."
  },
  {
   "jp": "妹[いもうと]は 今[いま] 高校[こうこう]の 学生[がくせい]です。",
   "es": "Mi hermana pequeña ahora estudia en el instituto."
  },
  {
   "jp": "兄[あに]は 東京[とうきょう]の 会社[かいしゃ]で 働[はたら]いて います。",
   "es": "Mi hermano mayor trabaja en una empresa de Tokio."
  },
  {
   "jp": "わたしの 家[いえ]は 駅[えき]から 近[ちか]いです。",
   "es": "Mi casa está cerca de la estación."
  },
  {
   "jp": "この 道[みち]を まっすぐ 行[い]って ください。",
   "es": "Siga recto por esta calle, por favor."
  },
  {
   "jp": "右[みぎ]に 銀行[ぎんこう]が あって、左[ひだり]に 郵便局[ゆうびんきょく]が あります。",
   "es": "A la derecha hay un banco y a la izquierda, correos."
  },
  {
   "jp": "外[そと]は 雨[あめ]が 降[ふ]って います。",
   "es": "Fuera está lloviendo."
  },
  {
   "jp": "午後[ごご] 3時[じ]に 友達[ともだち]が 来[き]ます。",
   "es": "A las 3 de la tarde viene un amigo."
  },
  {
   "jp": "この 時計[とけい]は 高[たか]かったです。",
   "es": "Este reloj fue caro."
  },
  {
   "jp": "千円[せんえん]で 何[なに]が 買[か]えますか。",
   "es": "¿Qué se puede comprar con mil yenes?"
  },
  {
   "jp": "百円[ひゃくえん]の ペンを 二本[にほん] 買[か]いました。",
   "es": "Compré dos bolígrafos de cien yenes."
  },
  {
   "jp": "あの 白[しろ]い 車[くるま]は 山田[やまだ]さんのです。",
   "es": "Aquel coche blanco es de Yamada."
  },
  {
   "jp": "休[やす]みの 日[ひ]は 家[いえ]で 本[ほん]を 読[よ]みます。",
   "es": "Los días libres leo en casa."
  },
  {
   "jp": "わたしは 毎朝[まいあさ] 新聞[しんぶん]を 読[よ]みます。",
   "es": "Todas las mañanas leo el periódico."
  },
  {
   "jp": "電話[でんわ]で 母[はは]と 話[はな]しました。",
   "es": "Hablé con mi madre por teléfono."
  },
  {
   "jp": "この 漢字[かんじ]の 読[よ]み方[かた]を 教[おし]えて ください。",
   "es": "Enséñame cómo se lee este kanji, por favor."
  },
  {
   "jp": "田中[たなか]さんは 毎日[まいにち] テレビで ニュースを 見[み]ます。",
   "es": "Tanaka ve las noticias en la tele todos los días."
  },
  {
   "jp": "学校[がっこう]の 中[なか]に 大[おお]きい 木[き]が あります。",
   "es": "Dentro de la escuela hay un árbol grande."
  },
  {
   "jp": "子[こ]どもたちが 外[そと]で 遊[あそ]んで います。",
   "es": "Los niños están jugando fuera."
  },
  {
   "jp": "わたしは 水[みず]を 飲[の]みたいです。",
   "es": "Quiero beber agua."
  },
  {
   "jp": "お茶[ちゃ]を 一杯[いっぱい] ください。",
   "es": "Un té, por favor."
  },
  {
   "jp": "この 町[まち]は 人[ひと]が 多[おお]いです。",
   "es": "En esta ciudad hay mucha gente."
  },
  {
   "jp": "来週[らいしゅう]の 月曜日[げつようび]に 試験[しけん]が あります。",
   "es": "El lunes que viene hay examen."
  },
  {
   "jp": "先月[せんげつ] 国[くに]へ 帰[かえ]りました。",
   "es": "El mes pasado volví a mi país."
  },
  {
   "jp": "きのう 友達[ともだち]に 手紙[てがみ]を 書[か]きました。",
   "es": "Ayer le escribí una carta a un amigo."
  },
  {
   "jp": "わたしの 名前[なまえ]は マリアです。",
   "es": "Me llamo María."
  },
  {
   "jp": "あの 人[ひと]の 名前[なまえ]を 知[し]って いますか。",
   "es": "¿Sabes cómo se llama esa persona?"
  },
  {
   "jp": "まだ 昼[ひる]ごはんを 食[た]べて いません。",
   "es": "Todavía no he comido."
  },
  {
   "jp": "もう 宿題[しゅくだい]を しましたか。",
   "es": "¿Ya has hecho los deberes?"
  },
  {
   "jp": "日本[にほん]の 夏[なつ]は 暑[あつ]いです。",
   "es": "El verano en Japón es caluroso."
  },
  {
   "jp": "わたしの 国[くに]の 冬[ふゆ]は とても 寒[さむ]いです。",
   "es": "En mi país el invierno es muy frío."
  },
  {
   "jp": "春[はる]に なると、花[はな]が きれいに 咲[さ]きます。",
   "es": "Al llegar la primavera las flores se abren preciosas."
  },
  {
   "jp": "秋[あき]は 食[た]べ物[もの]が おいしいです。",
   "es": "En otoño la comida está buena."
  },
  {
   "jp": "今年[ことし]の 冬[ふゆ]は 雪[ゆき]が 多[おお]かったです。",
   "es": "Este invierno ha nevado mucho."
  },
  {
   "jp": "わたしは 週[しゅう]に 三回[さんかい] プールで 泳[およ]ぎます。",
   "es": "Nado en la piscina tres veces por semana."
  },
  {
   "jp": "この ケーキは 半分[はんぶん] 食[た]べました。",
   "es": "De esta tarta me comí la mitad."
  },
  {
   "jp": "一週間[いっしゅうかん]に 一回[いっかい] そうじを します。",
   "es": "Limpio una vez a la semana."
  },
  {
   "jp": "わたしは 毎晩[まいばん] シャワーを 浴[あ]びます。",
   "es": "Me ducho todas las noches."
  },
  {
   "jp": "南[みなみ]の 国[くに]へ 行[い]きたいです。",
   "es": "Quiero ir a un país del sur."
  },
  {
   "jp": "北[きた]の 山[やま]は もう 雪[ゆき]が あります。",
   "es": "En las montañas del norte ya hay nieve."
  },
  {
   "jp": "駅[えき]の 東[ひがし]に 公園[こうえん]が あります。",
   "es": "Al este de la estación hay un parque."
  },
  {
   "jp": "西[にし]の 空[そら]が 赤[あか]いです。",
   "es": "El cielo del oeste está rojo."
  },
  {
   "jp": "男[おとこ]の 子[こ]が 二人[ふたり]と 女[おんな]の 子[こ]が 三人[さんにん] います。",
   "es": "Hay dos niños y tres niñas."
  },
  {
   "jp": "あの 女[おんな]の 人[ひと]は 先生[せんせい]です。",
   "es": "Esa mujer es la profesora."
  },
  {
   "jp": "この 男[おとこ]の 人[ひと]を 知[し]って いますか。",
   "es": "¿Conoces a este hombre?"
  },
  {
   "jp": "目[め]が いたいので、病院[びょういん]へ 行[い]きます。",
   "es": "Me duelen los ojos, así que voy al hospital."
  },
  {
   "jp": "耳[みみ]が 少[すこ]し 悪[わる]いです。",
   "es": "Oigo un poco mal."
  },
  {
   "jp": "手[て]を 洗[あら]ってから、ご飯[はん]を 食[た]べます。",
   "es": "Me lavo las manos y luego como."
  },
  {
   "jp": "足[あし]が いたくて、歩[ある]けません。",
   "es": "Me duele el pie y no puedo andar."
  },
  {
   "jp": "口[くち]を 大[おお]きく 開[あ]けて ください。",
   "es": "Abra bien la boca, por favor."
  },
  {
   "jp": "この 川[かわ]で 魚[さかな]を とりました。",
   "es": "En este río pesqué un pez."
  },
  {
   "jp": "田中[たなか]さんは 山[やま]の 上[うえ]の 家[いえ]に 住[す]んで います。",
   "es": "Tanaka vive en una casa en lo alto de la montaña."
  },
  {
   "jp": "わたしは 午前中[ごぜんちゅう] ずっと 家[いえ]に いました。",
   "es": "Toda la mañana estuve en casa."
  },
  {
   "jp": "毎日[まいにち] 一時間[いちじかん] 日本語[にほんご]を 勉強[べんきょう]して います。",
   "es": "Estudio japonés una hora al día."
  },
  {
   "jp": "この 電車[でんしゃ]は 東京[とうきょう]へ 行[い]きますか。",
   "es": "¿Este tren va a Tokio?"
  },
  {
   "jp": "次[つぎ]の 電車[でんしゃ]は 何時[なんじ]ですか。",
   "es": "¿A qué hora es el próximo tren?"
  },
  {
   "jp": "わたしは 先生[せんせい]に 質問[しつもん]しました。",
   "es": "Le hice una pregunta al profesor."
  },
  {
   "jp": "父[ちち]は 会社[かいしゃ]を 休[やす]んで、家[いえ]で 寝[ね]て います。",
   "es": "Mi padre ha faltado al trabajo y está acostado en casa."
  },
  {
   "jp": "来月[らいげつ] 友達[ともだち]が 国[くに]から 来[き]ます。",
   "es": "El mes que viene viene un amigo de mi país."
  },
  {
   "jp": "きのう 買[か]った 本[ほん]は とても おもしろいです。",
   "es": "El libro que compré ayer es muy interesante."
  },
  {
   "jp": "これは 母[はは]が 作[つく]った 料理[りょうり]です。",
   "es": "Esta es la comida que hizo mi madre."
  },
  {
   "jp": "わたしが 住[す]んで いる 町[まち]は 小[ちい]さいです。",
   "es": "La ciudad en la que vivo es pequeña."
  },
  {
   "jp": "あそこで 新聞[しんぶん]を 読[よ]んで いる 人[ひと]は だれですか。",
   "es": "¿Quién es esa persona que lee el periódico allí?"
  },
  {
   "jp": "日本語[にほんご]で 手紙[てがみ]を 書[か]く ことが できます。",
   "es": "Sé escribir cartas en japonés."
  },
  {
   "jp": "わたしは ピアノを 弾[ひ]く ことが できません。",
   "es": "No sé tocar el piano."
  },
  {
   "jp": "すしを 食[た]べた ことが ありますか。",
   "es": "¿Has comido sushi alguna vez?"
  },
  {
   "jp": "富士山[ふじさん]に 登[のぼ]った ことが あります。",
   "es": "He subido al Fuji."
  },
  {
   "jp": "日曜日[にちようび]は 本[ほん]を 読[よ]んだり、映画[えいが]を 見[み]たり します。",
   "es": "Los domingos leo o veo películas."
  },
  {
   "jp": "ここで 写真[しゃしん]を とっても いいですか。",
   "es": "¿Puedo hacer fotos aquí?"
  },
  {
   "jp": "ここで たばこを すっては いけません。",
   "es": "Aquí no se puede fumar."
  },
  {
   "jp": "あしたは 早[はや]く 起[お]きなければ なりません。",
   "es": "Mañana tengo que madrugar."
  },
  {
   "jp": "あしたは 学校[がっこう]へ 行[い]かなくても いいです。",
   "es": "Mañana no hace falta ir a clase."
  },
  {
   "jp": "食事[しょくじ]の あとで、薬[くすり]を 飲[の]んで ください。",
   "es": "Tómese la medicina después de comer."
  },
  {
   "jp": "寝[ね]る 前[まえ]に、歯[は]を みがきます。",
   "es": "Antes de dormir me lavo los dientes."
  },
  {
   "jp": "雨[あめ]が 降[ふ]ったら、家[いえ]に います。",
   "es": "Si llueve, me quedo en casa."
  },
  {
   "jp": "お金[かね]が あったら、新[あたら]しい 車[くるま]を 買[か]いたいです。",
   "es": "Si tuviera dinero, me compraría un coche nuevo."
  },
  {
   "jp": "あしたは 雨[あめ]が 降[ふ]ると 思[おも]います。",
   "es": "Creo que mañana lloverá."
  },
  {
   "jp": "田中[たなか]さんは あした 来[こ]ないと 言[い]いました。",
   "es": "Tanaka dijo que mañana no vendría."
  },
  {
   "jp": "この かばんは わたしのより 大[おお]きいです。",
   "es": "Este bolso es más grande que el mío."
  },
  {
   "jp": "電車[でんしゃ]と バスと どちらが 速[はや]いですか。",
   "es": "¿Qué es más rápido, el tren o el autobús?"
  },
  {
   "jp": "家族[かぞく]の 中[なか]で 父[ちち]が 一番[いちばん] 背[せ]が 高[たか]いです。",
   "es": "De mi familia, mi padre es el más alto."
  },
  {
   "jp": "わたしは 肉[にく]より 魚[さかな]の ほうが 好[す]きです。",
   "es": "Me gusta más el pescado que la carne."
  },
  {
   "jp": "母[はは]に 花[はな]を あげました。",
   "es": "Le di flores a mi madre."
  },
  {
   "jp": "友達[ともだち]に 本[ほん]を もらいました。",
   "es": "Un amigo me dio un libro."
  },
  {
   "jp": "先生[せんせい]が 辞書[じしょ]を 貸[か]して くれました。",
   "es": "El profesor me prestó un diccionario."
  },
  {
   "jp": "わたしは 弟[おとうと]に 日本語[にほんご]を 教[おし]えて あげました。",
   "es": "Le enseñé japonés a mi hermano pequeño."
  },
  {
   "jp": "この 部屋[へや]は 静[しず]かで、明[あか]るいです。",
   "es": "Esta habitación es tranquila y luminosa."
  },
  {
   "jp": "あの 店[みせ]は 安[やす]くて、おいしいです。",
   "es": "Esa tienda es barata y buena."
  },
  {
   "jp": "きのうは 忙[いそが]しくて、昼[ひる]ごはんを 食[た]べませんでした。",
   "es": "Ayer estaba tan ocupado que no comí."
  },
  {
   "jp": "寒[さむ]く なりましたね。",
   "es": "Ha empezado a hacer frío."
  },
  {
   "jp": "日本語[にほんご]が 上手[じょうず]に なりたいです。",
   "es": "Quiero llegar a hablar bien japonés."
  },
  {
   "jp": "弟[おとうと]は 医者[いしゃ]に なりました。",
   "es": "Mi hermano pequeño se ha hecho médico."
  },
  {
   "jp": "この 料理[りょうり]は 少[すこ]し からいです。",
   "es": "Esta comida pica un poco."
  },
  {
   "jp": "あの 山[やま]は 高[たか]くて、きれいです。",
   "es": "Aquella montaña es alta y bonita."
  },
  {
   "jp": "わたしの 部屋[へや]に テレビが ありません。",
   "es": "En mi cuarto no hay tele."
  },
  {
   "jp": "教室[きょうしつ]に 学生[がくせい]が 十人[じゅうにん] います。",
   "es": "En el aula hay diez alumnos."
  },
  {
   "jp": "つくえの 上[うえ]に 本[ほん]が 三冊[さんさつ] あります。",
   "es": "Encima de la mesa hay tres libros."
  },
  {
   "jp": "冷蔵庫[れいぞうこ]に 卵[たまご]が 四[よっ]つ あります。",
   "es": "En la nevera hay cuatro huevos."
  },
  {
   "jp": "庭[にわ]に 犬[いぬ]が 一匹[いっぴき] います。",
   "es": "En el jardín hay un perro."
  },
  {
   "jp": "わたしは 毎朝[まいあさ] 牛乳[ぎゅうにゅう]を 一杯[いっぱい] 飲[の]みます。",
   "es": "Cada mañana me tomo un vaso de leche."
  },
  {
   "jp": "切手[きって]を 五枚[ごまい] ください。",
   "es": "Cinco sellos, por favor."
  },
  {
   "jp": "りんごを 六[むっ]つ 買[か]いました。",
   "es": "Compré seis manzanas."
  },
  {
   "jp": "この クラスには 外国人[がいこくじん]の 学生[がくせい]が 八人[はちにん] います。",
   "es": "En esta clase hay ocho estudiantes extranjeros."
  },
  {
   "jp": "九時[くじ]から 五時[ごじ]まで 働[はたら]きます。",
   "es": "Trabajo de nueve a cinco."
  },
  {
   "jp": "十時[じゅうじ]に 駅[えき]の 前[まえ]で 会[あ]いましょう。",
   "es": "Quedemos a las diez delante de la estación."
  },
  {
   "jp": "会議[かいぎ]は 二時半[にじはん]に 始[はじ]まります。",
   "es": "La reunión empieza a las dos y media."
  },
  {
   "jp": "この 映画[えいが]は 三時間[さんじかん] かかります。",
   "es": "Esta película dura tres horas."
  },
  {
   "jp": "駅[えき]まで 歩[ある]いて 十分[じゅっぷん]ぐらいです。",
   "es": "A la estación hay unos diez minutos andando."
  },
  {
   "jp": "この シャツは 三千円[さんぜんえん]でした。",
   "es": "Esta camisa costó tres mil yenes."
  },
  {
   "jp": "この 時計[とけい]は 一万円[いちまんえん]でした。",
   "es": "Este reloj costó diez mil yenes."
  },
  {
   "jp": "わたしの 父[ちち]は 五十歳[ごじゅっさい]です。",
   "es": "Mi padre tiene cincuenta años."
  },
  {
   "jp": "今日[きょう]は 四月[しがつ] 一日[ついたち]です。",
   "es": "Hoy es uno de abril."
  },
  {
   "jp": "わたしの 誕生日[たんじょうび]は 七月[しちがつ] 七日[なのか]です。",
   "es": "Mi cumpleaños es el siete de julio."
  },
  {
   "jp": "九月[くがつ]に 日本[にほん]へ 行[い]きます。",
   "es": "En septiembre voy a Japón."
  },
  {
   "jp": "来週[らいしゅう]の 火曜日[かようび]は 休[やす]みです。",
   "es": "El martes que viene es fiesta."
  },
  {
   "jp": "水曜日[すいようび]の 午後[ごご]は 時間[じかん]が あります。",
   "es": "El miércoles por la tarde tengo tiempo."
  },
  {
   "jp": "木曜日[もくようび]に 友達[ともだち]と 会[あ]います。",
   "es": "El jueves quedo con un amigo."
  },
  {
   "jp": "土曜日[どようび]と 日曜日[にちようび]は 学校[がっこう]が ありません。",
   "es": "Los sábados y domingos no hay clase."
  },
  {
   "jp": "金曜日[きんようび]の 夜[よる] レストランへ 行[い]きました。",
   "es": "El viernes por la noche fui a un restaurante."
  },
  {
   "jp": "今年[ことし]の 夏[なつ] 休[やす]みは 長[なが]いです。",
   "es": "Las vacaciones de verano de este año son largas."
  },
  {
   "jp": "毎年[まいとし] お正月[しょうがつ]に 国[くに]へ 帰[かえ]ります。",
   "es": "Cada Año Nuevo vuelvo a mi país."
  },
  {
   "jp": "去年[きょねん] 日本語[にほんご]の 勉強[べんきょう]を 始[はじ]めました。",
   "es": "El año pasado empecé a estudiar japonés."
  },
  {
   "jp": "来年[らいねん] 大学[だいがく]に 入[はい]ります。",
   "es": "El año que viene entro en la universidad."
  },
  {
   "jp": "わたしは 大学[だいがく]で 経済[けいざい]を 勉強[べんきょう]して います。",
   "es": "En la universidad estudio economía."
  },
  {
   "jp": "この 大学[だいがく]には 外国人[がいこくじん]の 先生[せんせい]が 多[おお]いです。",
   "es": "En esta universidad hay muchos profesores extranjeros."
  },
  {
   "jp": "高校[こうこう]の 時[とき]、テニスを して いました。",
   "es": "En el instituto jugaba al tenis."
  },
  {
   "jp": "小学校[しょうがっこう]は 家[いえ]の 近[ちか]くに あります。",
   "es": "La escuela primaria está cerca de casa."
  },
  {
   "jp": "この 古[ふる]い 家[いえ]は 百年[ひゃくねん] 前[まえ]に 建[た]てられました。",
   "es": "Esta casa vieja se construyó hace cien años."
  },
  {
   "jp": "新[あたら]しい 先生[せんせい]は 若[わか]くて、やさしいです。",
   "es": "El profesor nuevo es joven y amable."
  },
  {
   "jp": "その 長[なが]い 名前[なまえ]は おぼえられません。",
   "es": "Ese nombre tan largo no lo puedo memorizar."
  },
  {
   "jp": "あの 高[たか]い ビルは 何[なん]ですか。",
   "es": "¿Qué es aquel edificio alto?"
  },
  {
   "jp": "この 安[やす]い かばんを 買[か]いましょう。",
   "es": "Compremos este bolso barato."
  },
  {
   "jp": "もう 少[すこ]し 大[おお]きい 声[こえ]で 話[はな]して ください。",
   "es": "Hable un poco más alto, por favor."
  },
  {
   "jp": "小[ちい]さい 子[こ]どもが 泣[な]いて います。",
   "es": "Un niño pequeño está llorando."
  },
  {
   "jp": "母[はは]は 毎朝[まいあさ] 早[はや]く 起[お]きます。",
   "es": "Mi madre se levanta temprano todas las mañanas."
  },
  {
   "jp": "父[ちち]は 夜[よる] 遅[おそ]く 帰[かえ]ります。",
   "es": "Mi padre vuelve tarde por la noche."
  },
  {
   "jp": "わたしは 毎日[まいにち] 会社[かいしゃ]まで 歩[ある]きます。",
   "es": "Todos los días voy andando al trabajo."
  },
  {
   "jp": "この 電車[でんしゃ]は 次[つぎ]の 駅[えき]で 止[と]まりますか。",
   "es": "¿Este tren para en la próxima estación?"
  },
  {
   "jp": "バスを 降[お]りて、少[すこ]し 歩[ある]きました。",
   "es": "Me bajé del autobús y anduve un poco."
  },
  {
   "jp": "タクシーに 乗[の]って、空港[くうこう]へ 行[い]きました。",
   "es": "Cogí un taxi y fui al aeropuerto."
  },
  {
   "jp": "わたしは 先週[せんしゅう] 京都[きょうと]へ 行[い]って、写真[しゃしん]を たくさん とりました。",
   "es": "La semana pasada fui a Kioto e hice muchas fotos."
  },
  {
   "jp": "この 写真[しゃしん]は 父[ちち]が とりました。",
   "es": "Esta foto la hizo mi padre."
  },
  {
   "jp": "ドアを 閉[し]めて ください。",
   "es": "Cierre la puerta, por favor."
  },
  {
   "jp": "窓[まど]を 開[あ]けても いいですか。",
   "es": "¿Puedo abrir la ventana?"
  },
  {
   "jp": "電気[でんき]を 消[け]して、寝[ね]ました。",
   "es": "Apagué la luz y me dormí."
  },
  {
   "jp": "エアコンを つけて ください。",
   "es": "Encienda el aire acondicionado, por favor."
  },
  {
   "jp": "ここに 名前[なまえ]と 住所[じゅうしょ]を 書[か]いて ください。",
   "es": "Escriba aquí su nombre y dirección, por favor."
  },
  {
   "jp": "すみません、もう 一度[いちど] 言[い]って ください。",
   "es": "Perdone, dígalo otra vez, por favor."
  },
  {
   "jp": "ちょっと 待[ま]って ください。",
   "es": "Espere un momento, por favor."
  },
  {
   "jp": "この 漢字[かんじ]は 何[なに]と 読[よ]みますか。",
   "es": "¿Cómo se lee este kanji?"
  },
  {
   "jp": "日本語[にほんご]で 何[なに]と 言[い]いますか。",
   "es": "¿Cómo se dice en japonés?"
  },
  {
   "jp": "田中[たなか]さんは 英語[えいご]が 上手[じょうず]です。",
   "es": "Tanaka habla bien inglés."
  },
  {
   "jp": "わたしは 料理[りょうり]が 下手[へた]です。",
   "es": "Cocino mal."
  },
  {
   "jp": "あなたは 何[なに]が 好[す]きですか。",
   "es": "¿Qué te gusta?"
  },
  {
   "jp": "わたしは 犬[いぬ]が 好[す]きですが、猫[ねこ]は きらいです。",
   "es": "Me gustan los perros, pero los gatos no."
  },
  {
   "jp": "父[ちち]は お酒[さけ]が 大好[だいす]きです。",
   "es": "A mi padre le encanta el sake."
  },
  {
   "jp": "わたしは 日本語[にほんご]が 少[すこ]し わかります。",
   "es": "Entiendo un poco de japonés."
  },
  {
   "jp": "あの 人[ひと]の 話[はなし]が よく わかりませんでした。",
   "es": "No entendí bien lo que dijo esa persona."
  },
  {
   "jp": "わたしは 車[くるま]が ほしいです。",
   "es": "Quiero un coche."
  },
  {
   "jp": "あたらしい パソコンが ほしいです。",
   "es": "Quiero un ordenador nuevo."
  },
  {
   "jp": "冷[つめ]たい 水[みず]が 飲[の]みたいです。",
   "es": "Quiero beber agua fría."
  },
  {
   "jp": "今日[きょう]は 何[なに]も 食[た]べたく ありません。",
   "es": "Hoy no me apetece comer nada."
  },
  {
   "jp": "映画[えいが]を 見[み]に 行[い]きませんか。",
   "es": "¿Vamos a ver una película?"
  },
  {
   "jp": "いっしょに 昼[ひる]ごはんを 食[た]べましょう。",
   "es": "Comamos juntos."
  },
  {
   "jp": "少[すこ]し 休[やす]みましょうか。",
   "es": "¿Descansamos un poco?"
  },
  {
   "jp": "駅[えき]まで 送[おく]りましょうか。",
   "es": "¿Te llevo a la estación?"
  },
  {
   "jp": "わたしは 毎朝[まいあさ] 犬[いぬ]と 散歩[さんぽ]します。",
   "es": "Todas las mañanas paseo con el perro."
  },
  {
   "jp": "妹[いもうと]は 毎日[まいにち] ピアノを 練習[れんしゅう]して います。",
   "es": "Mi hermana practica piano todos los días."
  },
  {
   "jp": "兄[あに]は 今[いま] アメリカに 住[す]んで います。",
   "es": "Mi hermano mayor vive ahora en Estados Unidos."
  },
  {
   "jp": "姉[あね]は 銀行[ぎんこう]で 働[はたら]いて います。",
   "es": "Mi hermana mayor trabaja en un banco."
  },
  {
   "jp": "わたしは 結婚[けっこん]して います。",
   "es": "Estoy casado."
  },
  {
   "jp": "田中[たなか]さんは めがねを かけて います。",
   "es": "Tanaka lleva gafas."
  },
  {
   "jp": "山田[やまだ]さんは 青[あお]い シャツを 着[き]て います。",
   "es": "Yamada lleva una camisa azul."
  },
  {
   "jp": "この 店[みせ]は 十時[じゅうじ]に 開[あ]きます。",
   "es": "Esta tienda abre a las diez."
  },
  {
   "jp": "銀行[ぎんこう]は 三時[さんじ]に 閉[し]まります。",
   "es": "El banco cierra a las tres."
  },
  {
   "jp": "雨[あめ]が やみました。",
   "es": "Ha dejado de llover."
  },
  {
   "jp": "風[かぜ]が 強[つよ]いです。",
   "es": "Hace mucho viento."
  },
  {
   "jp": "今日[きょう]は 曇[くも]って います。",
   "es": "Hoy está nublado."
  },
  {
   "jp": "あしたは 晴[は]れるでしょう。",
   "es": "Mañana seguramente hará sol."
  },
  {
   "jp": "夏[なつ] 休[やす]みに 海[うみ]で 泳[およ]ぎました。",
   "es": "En las vacaciones de verano nadé en el mar."
  },
  {
   "jp": "冬[ふゆ]に なると、山[やま]に 雪[ゆき]が 降[ふ]ります。",
   "es": "Cuando llega el invierno, nieva en la montaña."
  },
  {
   "jp": "この 花[はな]は 春[はる]に 咲[さ]きます。",
   "es": "Esta flor se abre en primavera."
  },
  {
   "jp": "秋[あき]に 紅葉[もみじ]を 見[み]に 行[い]きました。",
   "es": "En otoño fui a ver las hojas rojas."
  },
  {
   "jp": "わたしは 毎日[まいにち] 日記[にっき]を 書[か]いて います。",
   "es": "Escribo un diario todos los días."
  },
  {
   "jp": "学生[がくせい]は 先生[せんせい]の 話[はなし]を 聞[き]いて います。",
   "es": "Los alumnos escuchan lo que dice el profesor."
  },
  {
   "jp": "わたしは 音楽[おんがく]を 聞[き]くのが 好[す]きです。",
   "es": "Me gusta escuchar música."
  },
  {
   "jp": "子[こ]どもの 時[とき]、よく 川[かわ]で 遊[あそ]びました。",
   "es": "De pequeño jugaba a menudo en el río."
  },
  {
   "jp": "この 本[ほん]は 長[なが]いですが、おもしろいです。",
   "es": "Este libro es largo, pero interesante."
  },
  {
   "jp": "この 部屋[へや]は 広[ひろ]いですが、少[すこ]し 暗[くら]いです。",
   "es": "Esta habitación es amplia, pero algo oscura."
  },
  {
   "jp": "今日[きょう]は 寒[さむ]いですから、コートを 着[き]て 行[い]きます。",
   "es": "Hoy hace frío, así que me pongo el abrigo."
  },
  {
   "jp": "お金[かね]が ないので、どこへも 行[い]きません。",
   "es": "Como no tengo dinero, no voy a ningún sitio."
  },
  {
   "jp": "時間[じかん]が ありませんから、タクシーで 行[い]きましょう。",
   "es": "Como no hay tiempo, vamos en taxi."
  },
  {
   "jp": "朝[あさ]から 何[なに]も 食[た]べて いないので、おなかが すきました。",
   "es": "No he comido nada desde la mañana y tengo hambre."
  },
  {
   "jp": "この 道[みち]は 車[くるま]が 多[おお]いですから、気[き]を つけて ください。",
   "es": "Por esta calle pasan muchos coches: ten cuidado."
  },
  {
   "jp": "わたしは 毎朝[まいあさ] 六時半[ろくじはん]に 家[いえ]を 出[で]ます。",
   "es": "Todas las mañanas salgo de casa a las seis y media."
  },
  {
   "jp": "会社[かいしゃ]は 八時半[はちじはん]から 五時半[ごじはん]までです。",
   "es": "La oficina es de ocho y media a cinco y media."
  },
  {
   "jp": "わたしの 学校[がっこう]は 駅[えき]の 北[きた]に あります。",
   "es": "Mi escuela está al norte de la estación."
  },
  {
   "jp": "郵便局[ゆうびんきょく]は 駅[えき]の 南[みなみ]に あります。",
   "es": "Correos está al sur de la estación."
  },
  {
   "jp": "病院[びょういん]は 学校[がっこう]の 西[にし]です。",
   "es": "El hospital está al oeste de la escuela."
  },
  {
   "jp": "公園[こうえん]は 銀行[ぎんこう]の 東[ひがし]に あります。",
   "es": "El parque está al este del banco."
  },
  {
   "jp": "本屋[ほんや]の 中[なか]に 喫茶店[きっさてん]が あります。",
   "es": "Dentro de la librería hay una cafetería."
  },
  {
   "jp": "かばんの 中[なか]に 何[なに]が ありますか。",
   "es": "¿Qué hay dentro del bolso?"
  },
  {
   "jp": "いすの 下[した]に ねこが います。",
   "es": "Debajo de la silla hay un gato."
  },
  {
   "jp": "テレビの 上[うえ]に 写真[しゃしん]が あります。",
   "es": "Encima de la tele hay una foto."
  },
  {
   "jp": "銀行[ぎんこう]の 前[まえ]で 友達[ともだち]を 待[ま]って います。",
   "es": "Estoy esperando a un amigo delante del banco."
  },
  {
   "jp": "駅[えき]の 後[うし]ろに 大[おお]きい 公園[こうえん]が あります。",
   "es": "Detrás de la estación hay un parque grande."
  },
  {
   "jp": "わたしの 右[みぎ]に いる 人[ひと]が 田中[たなか]さんです。",
   "es": "La persona que está a mi derecha es Tanaka."
  },
  {
   "jp": "ドアの 左[ひだり]に 電気[でんき]の スイッチが あります。",
   "es": "A la izquierda de la puerta está el interruptor de la luz."
  },
  {
   "jp": "この 学校[がっこう]の 先生[せんせい]は みんな 日本人[にほんじん]です。",
   "es": "Todos los profesores de esta escuela son japoneses."
  },
  {
   "jp": "クラスの 学生[がくせい]は 全部[ぜんぶ]で 二十人[にじゅうにん]です。",
   "es": "En la clase hay veinte alumnos en total."
  },
  {
   "jp": "父[ちち]の 会社[かいしゃ]は 大阪[おおさか]に あります。",
   "es": "La empresa de mi padre está en Osaka."
  },
  {
   "jp": "わたしは 会社員[かいしゃいん]です。",
   "es": "Soy empleado de una empresa."
  },
  {
   "jp": "母[はは]は 小学校[しょうがっこう]の 先生[せんせい]です。",
   "es": "Mi madre es maestra de primaria."
  },
  {
   "jp": "田中[たなか]さんの お父[とう]さんは 医者[いしゃ]です。",
   "es": "El padre de Tanaka es médico."
  },
  {
   "jp": "山田[やまだ]さんの お母[かあ]さんは 料理[りょうり]が 上手[じょうず]です。",
   "es": "La madre de Yamada cocina muy bien."
  },
  {
   "jp": "わたしの 友達[ともだち]は 中国[ちゅうごく]から 来[き]ました。",
   "es": "Mi amigo vino de China."
  },
  {
   "jp": "あの 人[ひと]は 何人[なにじん]ですか。",
   "es": "¿De qué país es esa persona?"
  },
  {
   "jp": "この 車[くるま]は 日本[にほん]の 車[くるま]です。",
   "es": "Este coche es japonés."
  },
  {
   "jp": "わたしは 日本[にほん]の 映画[えいが]が 好[す]きです。",
   "es": "Me gustan las películas japonesas."
  },
  {
   "jp": "日本語[にほんご]の 先生[せんせい]は 女[おんな]の 人[ひと]です。",
   "es": "La profesora de japonés es una mujer."
  },
  {
   "jp": "この 時計[とけい]は 父[ちち]に もらいました。",
   "es": "Este reloj me lo dio mi padre."
  },
  {
   "jp": "この かさは 友達[ともだち]に 借[か]りました。",
   "es": "Este paraguas se lo pedí prestado a un amigo."
  },
  {
   "jp": "図書館[としょかん]で 本[ほん]を 二冊[にさつ] 借[か]りました。",
   "es": "Saqué dos libros de la biblioteca."
  },
  {
   "jp": "きのう 本屋[ほんや]で 雑誌[ざっし]を 買[か]いました。",
   "es": "Ayer compré una revista en la librería."
  },
  {
   "jp": "デパートで 母[はは]の 誕生日[たんじょうび]の プレゼントを 買[か]いました。",
   "es": "Compré el regalo de cumpleaños de mi madre en los grandes almacenes."
  },
  {
   "jp": "スーパーで 肉[にく]と 野菜[やさい]を 買[か]いました。",
   "es": "Compré carne y verdura en el súper."
  },
  {
   "jp": "この 店[みせ]では 新[あたら]しい 服[ふく]を 売[う]って います。",
   "es": "En esta tienda venden ropa nueva."
  },
  {
   "jp": "古[ふる]い 自転車[じてんしゃ]を 友達[ともだち]に あげました。",
   "es": "Le di mi bici vieja a un amigo."
  },
  {
   "jp": "わたしは 三年[さんねん] 前[まえ]に 日本[にほん]へ 来[き]ました。",
   "es": "Vine a Japón hace tres años."
  },
  {
   "jp": "二年[にねん] 前[まえ]から 日本語[にほんご]を 勉強[べんきょう]して います。",
   "es": "Estudio japonés desde hace dos años."
  },
  {
   "jp": "一年[いちねん]に 一回[いっかい] 国[くに]へ 帰[かえ]ります。",
   "es": "Vuelvo a mi país una vez al año."
  },
  {
   "jp": "今月[こんげつ]は 忙[いそが]しいですが、来月[らいげつ]は 暇[ひま]です。",
   "es": "Este mes estoy ocupado, pero el que viene estoy libre."
  },
  {
   "jp": "先週[せんしゅう]は 毎日[まいにち] 雨[あめ]でした。",
   "es": "La semana pasada llovió todos los días."
  },
  {
   "jp": "今週[こんしゅう]の 金曜日[きんようび]は 何[なに]を しますか。",
   "es": "¿Qué haces este viernes?"
  },
  {
   "jp": "来週[らいしゅう] 友達[ともだち]の 家[いえ]へ 遊[あそ]びに 行[い]きます。",
   "es": "La semana que viene voy a casa de un amigo."
  },
  {
   "jp": "あさって 東京[とうきょう]へ 出張[しゅっちょう]します。",
   "es": "Pasado mañana voy a Tokio de viaje de trabajo."
  },
  {
   "jp": "おととい 友達[ともだち]と 映画[えいが]を 見[み]ました。",
   "es": "Anteayer vi una película con un amigo."
  },
  {
   "jp": "今朝[けさ] 何時[なんじ]に 起[お]きましたか。",
   "es": "¿A qué hora te levantaste esta mañana?"
  },
  {
   "jp": "今晩[こんばん] 何[なに]を 食[た]べますか。",
   "es": "¿Qué cenas esta noche?"
  },
  {
   "jp": "毎晩[まいばん] 何[なに]時間[じかん] 寝[ね]ますか。",
   "es": "¿Cuántas horas duermes cada noche?"
  },
  {
   "jp": "この 漢字[かんじ]は むずかしくて 書[か]けません。",
   "es": "Este kanji es tan difícil que no lo sé escribir."
  },
  {
   "jp": "日本語[にほんご]の 本[ほん]を 読[よ]む ことが できますか。",
   "es": "¿Sabes leer libros en japonés?"
  },
  {
   "jp": "わたしは まだ 漢字[かんじ]が 少[すこ]ししか 読[よ]めません。",
   "es": "Todavía solo sé leer unos pocos kanji."
  },
  {
   "jp": "田中[たなか]さんは 毎日[まいにち] 何[なに]時間[じかん] 働[はたら]きますか。",
   "es": "¿Cuántas horas trabaja Tanaka al día?"
  },
  {
   "jp": "先生[せんせい]、ちょっと 質問[しつもん]が あります。",
   "es": "Profesor, tengo una pregunta."
  },
  {
   "jp": "この 問題[もんだい]は 少[すこ]し むずかしいです。",
   "es": "Este problema es un poco difícil."
  },
  {
   "jp": "試験[しけん]は 来週[らいしゅう]の 水曜日[すいようび]です。",
   "es": "El examen es el miércoles que viene."
  },
  {
   "jp": "この 部屋[へや]で 食[た]べたり 飲[の]んだり しないで ください。",
   "es": "No coman ni beban en esta sala, por favor."
  },
  {
   "jp": "大[おお]きい 声[こえ]で 話[はな]さないで ください。",
   "es": "No hablen alto, por favor."
  },
  {
   "jp": "雨[あめ]の 日[ひ]は 車[くるま]で 会社[かいしゃ]へ 行[い]きます。",
   "es": "Los días de lluvia voy a la oficina en coche."
  },
  {
   "jp": "天気[てんき]が いい 日[ひ]は 自転車[じてんしゃ]で 学校[がっこう]へ 行[い]きます。",
   "es": "Los días de buen tiempo voy a la escuela en bici."
  },
  {
   "jp": "わたしは 毎日[まいにち] 一時間[いちじかん] ぐらい 歩[ある]きます。",
   "es": "Ando una hora al día más o menos."
  },
  {
   "jp": "父[ちち]は 毎朝[まいあさ] コーヒーを 飲[の]みながら、新聞[しんぶん]を 読[よ]みます。",
   "es": "Mi padre lee el periódico cada mañana mientras toma café."
  },
  {
   "jp": "音楽[おんがく]を 聞[き]きながら 勉強[べんきょう]します。",
   "es": "Estudio escuchando música."
  },
  {
   "jp": "この 川[かわ]の 水[みず]は きれいです。",
   "es": "El agua de este río está limpia."
  },
  {
   "jp": "山[やま]の 上[うえ]から 町[まち]が よく 見[み]えます。",
   "es": "Desde lo alto de la montaña se ve bien la ciudad."
  },
  {
   "jp": "ここから 海[うみ]が 見[み]えます。",
   "es": "Desde aquí se ve el mar."
  },
  {
   "jp": "隣[となり]の 部屋[へや]から 音楽[おんがく]が 聞[き]こえます。",
   "es": "Se oye música de la habitación de al lado."
  },
  {
   "jp": "この 町[まち]に 大[おお]きい 病院[びょういん]が 二[ふた]つ あります。",
   "es": "En esta ciudad hay dos hospitales grandes."
  },
  {
   "jp": "駅[えき]の 近[ちか]くに 安[やす]い レストランが たくさん あります。",
   "es": "Cerca de la estación hay muchos restaurantes baratos."
  },
  {
   "jp": "わたしの 町[まち]には 川[かわ]が あって、きれいです。",
   "es": "En mi ciudad hay un río y es bonita."
  },
  {
   "jp": "日本[にほん]は 山[やま]が 多[おお]い 国[くに]です。",
   "es": "Japón es un país con muchas montañas."
  },
  {
   "jp": "東京[とうきょう]は 人[ひと]が とても 多[おお]いです。",
   "es": "En Tokio hay muchísima gente."
  },
  {
   "jp": "この 水[みず]は 飲[の]んでも いいですか。",
   "es": "¿Se puede beber esta agua?"
  },
  {
   "jp": "魚[さかな]の 料理[りょうり]と 肉[にく]の 料理[りょうり]と どちらが いいですか。",
   "es": "¿Qué prefieres, plato de pescado o de carne?"
  },
  {
   "jp": "この 店[みせ]の 人[ひと]は とても 親切[しんせつ]です。",
   "es": "La gente de esta tienda es muy amable."
  },
  {
   "jp": "田中[たなか]さんは 日本人[にほんじん]ですが、日本[にほん]の 料理[りょうり]が 作[つく]れません。",
   "es": "Tanaka es japonés, pero no sabe cocinar comida japonesa."
  },
  {
   "jp": "この 料理[りょうり]は 母[はは]に 習[なら]いました。",
   "es": "Este plato lo aprendí de mi madre."
  },
  {
   "jp": "わたしは 友達[ともだち]に 日本語[にほんご]を 習[なら]って います。",
   "es": "Aprendo japonés con un amigo."
  },
  {
   "jp": "先生[せんせい]に 作文[さくぶん]を 見[み]て もらいました。",
   "es": "El profesor me revisó la redacción."
  },
  {
   "jp": "田中[たなか]さんに 駅[えき]まで 送[おく]って もらいました。",
   "es": "Tanaka me llevó a la estación."
  },
  {
   "jp": "この 字[じ]は 小[ちい]さくて 読[よ]めません。",
   "es": "Esta letra es tan pequeña que no puedo leerla."
  },
  {
   "jp": "空[そら]が 青[あお]くて きれいです。",
   "es": "El cielo es azul y precioso."
  },
  {
   "jp": "今日[きょう]は 空気[くうき]が つめたいです。",
   "es": "Hoy el aire está frío."
  },
  {
   "jp": "天気[てんき]が 悪[わる]いので、出[で]かけません。",
   "es": "Como hace mal tiempo, no salgo."
  },
  {
   "jp": "六時[ろくじ]に なったら、帰[かえ]りましょう。",
   "es": "Cuando sean las seis, nos vamos."
  },
  {
   "jp": "仕事[しごと]が 終[お]わったら、電話[でんわ]して ください。",
   "es": "Cuando termines el trabajo, llámame."
  },
  {
   "jp": "日本[にほん]へ 来[き]て、もう 一年[いちねん]に なります。",
   "es": "Ya hace un año que vine a Japón."
  },
  {
   "jp": "わたしは 日本語[にほんご]を 一年[いちねん] 勉強[べんきょう]しました。",
   "es": "Estudié japonés un año."
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
     "三十分[さんじゅっぷん] はしります。"
    ],
    "nota": "「走ったあとで シャワーを 浴びて、朝[あさ]ごはんを 食べます」: el orden es correr → ducha → desayuno."
   },
   {
    "texto": "きのうは 日曜日[にちようび]でしたが、朝[あさ]から 雨[あめ]が 降[ふ]っていました。それで、出[で]かけないで うちで 本[ほん]を 読[よ]みました。午後[ごご]から 天気[てんき]が よく なったので、近[ちか]くの 公園[こうえん]を 散歩[さんぽ]しました。",
    "es": "Ayer era domingo, pero llovía desde por la mañana. Así que no salí y leí en casa. Por la tarde mejoró el tiempo y paseé por un parque cercano.",
    "pregunta": "この 人[ひと]は きのうの 午後[ごご]、何[なに]を しましたか。",
    "opciones": [
     "こうえんを さんぽしました。",
     "うちで 本[ほん]を よみました。",
     "かいものに 行[い]きました。",
     "一日中[いちにちじゅう] ねて いました。"
    ],
    "nota": "El libro fue por la mañana; 午後から… el paseo."
   },
   {
    "texto": "山田[やまだ]さんへ\n\nあしたの 授業[じゅぎょう]は 教室[きょうしつ]が 変[か]わります。いつもの 二階[にかい]では なくて、三階[さんがい]の 305の 部屋[へや]です。時間[じかん]は いつもと 同[おな]じ 九時[くじ]からです。\n\n田中[たなか]",
    "es": "Sr. Yamada: la clase de mañana cambia de aula. No es la de siempre en la segunda planta, sino la 305 de la tercera. La hora es la misma de siempre, a las nueve. Tanaka.",
    "pregunta": "あしたの 授業[じゅぎょう]に ついて、正[ただ]しい ものは どれですか。",
    "opciones": [
     "きょうしつは かわりますが、時間[じかん]は かわりません。",
     "きょうしつも 時間[じかん]も かわります。",
     "時間[じかん]は かわりますが、きょうしつは かわりません。",
     "きょうしつも 時間[じかん]も かわりません。"
    ],
    "nota": "「教室が 変わります」 pero 「時間は いつもと 同じ」."
   },
   {
    "texto": "うちには ねこが 二匹[にひき]います。白[しろ]いのと 黒[くろ]いのです。白[しろ]い ねこは 十年[じゅうねん]まえから いますが、黒[くろ]いのは 去年[きょねん] 友[とも]だちから もらいました。二匹[にひき]とも とても 元気[げんき]です。",
    "es": "En casa tenemos dos gatos, uno blanco y uno negro. El blanco está desde hace diez años; el negro me lo dio un amigo el año pasado. Los dos están muy sanos.",
    "pregunta": "黒[くろ]い ねこは いつから うちに いますか。",
    "opciones": [
     "去年[きょねん]から。",
     "十年[じゅうねん]まえから。",
     "先週[せんしゅう]から。",
     "子[こ]どもの ときから。"
    ],
    "nota": "十年まえ es el gato blanco; el negro llegó 去年[きょねん]."
   },
   {
    "texto": "この 町[まち]には 大[おお]きい 図書館[としょかん]が あります。本[ほん]は 2週間[しゅうかん] 借[か]りることが できます。でも、辞書[じしょ]と 新[あたら]しい ざっしは 借[か]りることが できません。図書館[としょかん]の 中[なか]で 読[よ]んで ください。",
    "es": "En este pueblo hay una biblioteca grande. Los libros se pueden llevar dos semanas. Pero los diccionarios y las revistas nuevas no; hay que leerlos dentro.",
    "pregunta": "図書館[としょかん]から 借[か]りることが できない ものは 何[なん]ですか。",
    "opciones": [
     "じしょと 新[あたら]しい ざっし",
     "本[ほん]と じしょ",
     "本[ほん]と 新[あたら]しい ざっし",
     "なにも かりられません"
    ],
    "nota": "Solo los libros se prestan; 辞書 y ざっし se leen dentro."
   },
   {
    "texto": "けさ 駅[えき]で かばんを なくしました。中[なか]には さいふと 本[ほん]が 入[はい]って いました。駅[えき]の 人[ひと]に 聞[き]きましたが、まだ 見[み]つかりません。あした もう 一度[いちど] 駅[えき]へ 行[い]って みます。",
    "es": "Esta mañana perdí el bolso en la estación. Dentro llevaba la cartera y un libro. Pregunté al personal, pero todavía no ha aparecido. Mañana volveré a la estación.",
    "pregunta": "この 人[ひと]は あした 何[なに]を しますか。",
    "opciones": [
     "もう 一度[いちど] えきへ 行[い]きます。",
     "新[あたら]しい かばんを 買[か]います。",
     "えきの 人[ひと]に 電話[でんわ]を します。",
     "本[ほん]を かりに 行[い]きます。"
    ],
    "nota": "「あした もう 一度[いちど] 駅へ 行って みます」."
   },
   {
    "texto": "日本[にほん]に 来[き]て 二年[にねん]に なります。はじめは 日本語[にほんご]が 全然[ぜんぜん] わかりませんでしたが、今[いま]は 友[とも]だちと 話[はな]すことが できます。でも、漢字[かんじ]は まだ むずかしいです。",
    "es": "Hace dos años que vine a Japón. Al principio no entendía nada de japonés, pero ahora puedo hablar con mis amigos. Los kanji, sin embargo, todavía me cuestan.",
    "pregunta": "この 人[ひと]は 今[いま]、何[なに]が むずかしいと 言[い]って いますか。",
    "opciones": [
     "かんじ",
     "友[とも]だちと 話[はな]すこと",
     "日本[にほん]の りょうり",
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
     "七時[しちじ]ごろ",
     "六時[ろくじ]ごろ",
     "五時[ごじ]ごろ",
     "八時[はちじ]ごろ"
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
     "二日[ふつか]",
     "一日[いちにち]",
     "三日[みっか]",
     "四日[よっか]"
    ],
    "nota": "Faltó el 水曜日[すいようび] y el 木曜日[もくようび]: dos días. El 金曜日[きんようび] ya volvió."
   },
   {
    "texto": "山[やま]の 上[うえ]の ホテルは 少[すこ]し 高[たか]いですが、へやから 海[うみ]が 見[み]えます。駅[えき]の 近[ちか]くの ホテルは 安[やす]くて 便利[べんり]です。わたしは 海[うみ]が 見[み]たいので、山[やま]の 上[うえ]の ホテルに しました。",
    "es": "El hotel de la montaña es un poco caro, pero desde la habitación se ve el mar. El de al lado de la estación es barato y está bien situado. Como quiero ver el mar, elegí el de la montaña.",
    "pregunta": "この 人[ひと]は どうして 山[やま]の 上[うえ]の ホテルに しましたか。",
    "opciones": [
     "うみが 見[み]たいから。",
     "安[やす]いから。",
     "えきに ちかいから。",
     "べんりだから。"
    ],
    "nota": "「海が 見たいので、山の 上の ホテルに しました」."
   },
   {
    "texto": "きのうは 母[はは]の たんじょうびでした。わたしは 花[はな]を 買[か]って、兄[あに]は ケーキを 作[つく]りました。父[ちち]は 仕事[しごと]で おそく 帰[かえ]りましたが、みんなで ケーキを 食[た]べました。",
    "es": "Ayer fue el cumpleaños de mi madre. Yo compré flores y mi hermano hizo una tarta. Mi padre volvió tarde del trabajo, pero comimos la tarta todos juntos.",
    "pregunta": "ケーキを 作[つく]ったのは だれですか。",
    "opciones": [
     "あに",
     "わたし",
     "ちち",
     "はは"
    ],
    "nota": "「兄は ケーキを 作りました」."
   },
   {
    "texto": "田中[たなか]さんへ\n\nきょうの 3時[じ]の かいぎは あしたの 10時[じ]に なりました。へやは 同[おな]じです。しりょうは あした わたします。\n\n山田[やまだ]",
    "es": "Tanaka: la reunión de hoy a las 3 pasa a mañana a las 10. La sala es la misma. Los documentos te los doy mañana. Yamada.",
    "pregunta": "かいぎは いつに なりましたか。",
    "opciones": [
     "あしたの 10時[じ]",
     "きょうの 3時[じ]",
     "きょうの 10時[じ]",
     "あしたの 3時[じ]"
    ],
    "nota": "「あしたの 10時に なりました」."
   },
   {
    "texto": "わたしは まいばん 日本語[にほんご]の テレビを 見[み]ます。はじめは ぜんぜん わかりませんでしたが、今[いま]は 少[すこ]し わかります。ニュースは まだ むずかしいです。",
    "es": "Todas las noches veo la tele en japonés. Al principio no entendía nada, pero ahora entiendo un poco. Las noticias aún me cuestan.",
    "pregunta": "この 人[ひと]は 今[いま] どうですか。",
    "opciones": [
     "テレビが 少[すこ]し わかります。",
     "テレビが ぜんぜん わかりません。",
     "ニュースが よく わかります。",
     "テレビを 見[み]ません。"
    ],
    "nota": "「今は 少し わかります」."
   },
   {
    "texto": "わたしの へやには つくえと いすと ベッドが あります。テレビは ありません。ほんだなは 小[ちい]さいですから、本[ほん]は ベッドの 下[した]に おいて います。",
    "es": "En mi cuarto hay una mesa, una silla y una cama. No hay tele. Como la estantería es pequeña, los libros los tengo debajo de la cama.",
    "pregunta": "本[ほん]は どこに ありますか。",
    "opciones": [
     "ベッドの 下[した]",
     "ほんだなの 中[なか]",
     "つくえの 上[うえ]",
     "いすの 下[した]"
    ],
    "nota": "La estantería es pequeña, así que los libros van debajo de la cama."
   },
   {
    "texto": "きょうは とても いい 天気[てんき]です。でも、あしたは 雨[あめ]が ふるでしょう。それで、わたしは きょう せんたくを します。",
    "es": "Hoy hace muy buen tiempo, pero mañana lloverá. Por eso hoy hago la colada.",
    "pregunta": "この 人[ひと]は どうして きょう せんたくを しますか。",
    "opciones": [
     "あした 雨[あめ]が ふるから",
     "きょう 雨[あめ]が ふるから",
     "あした ひまだから",
     "きょう いそがしいから"
    ],
    "nota": "Mañana lloverá: mejor lavar hoy."
   },
   {
    "texto": "わたしは バスで 学校[がっこう]へ 行[い]きます。バスは 20分[ぷん] かかります。でも、雨[あめ]の 日[ひ]は バスが こむので、ちかてつで 行[い]きます。",
    "es": "Voy a clase en autobús, que tarda 20 minutos. Pero los días de lluvia el autobús va lleno, así que voy en metro.",
    "pregunta": "雨[あめ]の 日[ひ]、この 人[ひと]は 何[なに]で 学校[がっこう]へ 行[い]きますか。",
    "opciones": [
     "ちかてつ",
     "バス",
     "じてんしゃ",
     "あるいて"
    ],
    "nota": "「雨の 日は…ちかてつで 行きます」."
   },
   {
    "texto": "ミラーさんは にく りょうりが すきですが、さかなは あまり 食[た]べません。やさいも すきです。くだものは 毎朝[まいあさ] 食[た]べます。",
    "es": "Al Sr. Miller le gusta la carne, pero apenas come pescado. También le gusta la verdura. Fruta come todas las mañanas.",
    "pregunta": "ミラーさんが あまり 食[た]べない ものは 何[なん]ですか。",
    "opciones": [
     "さかな",
     "にく",
     "やさい",
     "くだもの"
    ],
    "nota": "「さかなは あまり 食べません」."
   },
   {
    "texto": "あした 友[とも]だちと 山[やま]へ 行[い]きます。朝[あさ] 7時[じ]に 駅[えき]で 会[あ]います。おべんとうは 友[とも]だちが 作[つく]ります。わたしは 飲[の]み物[もの]を 持[も]って 行[い]きます。",
    "es": "Mañana voy a la montaña con un amigo. Quedamos a las 7 en la estación. La comida la hace mi amigo; yo llevo las bebidas.",
    "pregunta": "この 人[ひと]は あした 何[なに]を 持[も]って 行[い]きますか。",
    "opciones": [
     "のみもの",
     "おべんとう",
     "くだもの",
     "おかし"
    ],
    "nota": "La comida la hace el amigo; esta persona lleva las bebidas."
   },
   {
    "texto": "この 店[みせ]は 月曜日[げつようび]から 金曜日[きんようび]まで 朝[あさ] 10時[じ]から 夜[よる] 8時[じ]までです。土曜日[どようび]は 6時[じ]までです。日曜日[にちようび]は 休[やす]みです。",
    "es": "Esta tienda abre de lunes a viernes de 10 de la mañana a 8 de la tarde. Los sábados hasta las 6. El domingo cierra.",
    "pregunta": "土曜日[どようび]は 何時[なんじ]に しまりますか。",
    "opciones": [
     "6時[じ]",
     "8時[じ]",
     "10時[じ]",
     "しまりません"
    ],
    "nota": "「土曜日は 6時までです」."
   },
   {
    "texto": "わたしは 先月[せんげつ] 日本[にほん]へ 来[き]ました。今[いま] 大学[だいがく]の 近[ちか]くの アパートに すんで います。へやは せまいですが、駅[えき]から 近[ちか]くて べんりです。",
    "es": "Vine a Japón el mes pasado. Ahora vivo en un piso cerca de la universidad. Es pequeño, pero está cerca de la estación y es práctico.",
    "pregunta": "この 人[ひと]の アパートは どうですか。",
    "opciones": [
     "せまいですが、べんりです。",
     "ひろくて、べんりです。",
     "せまくて、えきから とおいです。",
     "ひろいですが、ふべんです。"
    ],
    "nota": "「せまいですが、駅から 近くて べんりです」."
   },
   {
    "texto": "けさ ねぼうしました。7時[じ]半[はん]に 起[お]きて、朝[あさ]ごはんを 食[た]べないで 家[いえ]を 出[で]ました。でも、電車[でんしゃ]に まにあいました。",
    "es": "Esta mañana me he dormido. Me levanté a las 7:30 y salí de casa sin desayunar. Pero llegué a tiempo al tren.",
    "pregunta": "この 人[ひと]は けさ 何[なに]を しませんでしたか。",
    "opciones": [
     "あさごはんを たべること",
     "でんしゃに のること",
     "いえを でること",
     "おきること"
    ],
    "nota": "「朝ごはんを 食べないで」."
   },
   {
    "texto": "わたしの いもうとは 8さいです。まいにち 学校[がっこう]から 帰[かえ]ってから、ピアノの れんしゅうを します。日曜日[にちようび]は 友[とも]だちと こうえんで あそびます。",
    "es": "Mi hermana tiene 8 años. Todos los días, al volver de clase, practica piano. Los domingos juega en el parque con sus amigos.",
    "pregunta": "いもうとは 日曜日[にちようび]に 何[なに]を しますか。",
    "opciones": [
     "こうえんで あそびます。",
     "ピアノの れんしゅうを します。",
     "学校[がっこう]へ 行[い]きます。",
     "いえで ねます。"
    ],
    "nota": "El piano es entre semana; el domingo, parque."
   },
   {
    "texto": "リーさん\n\nあなたの かさが きょうしつに ありました。わたしが もって います。あしたの 朝[あさ]、わたします。\n\nキム",
    "es": "Lee: tu paraguas estaba en el aula. Lo tengo yo. Te lo doy mañana por la mañana. Kim.",
    "pregunta": "リーさんの かさは 今[いま] どこに ありますか。",
    "opciones": [
     "キムさんが もって います。",
     "きょうしつに あります。",
     "リーさんの いえに あります。",
     "じむしょに あります。"
    ],
    "nota": "「わたしが もって います」."
   },
   {
    "texto": "わたしは コーヒーが すきです。毎朝[まいあさ] 2はい 飲[の]みます。でも、夜[よる]は 飲[の]みません。ねられませんから。",
    "es": "Me gusta el café. Me tomo dos tazas cada mañana. Pero por la noche no, porque luego no puedo dormir.",
    "pregunta": "この 人[ひと]は どうして 夜[よる] コーヒーを 飲[の]みませんか。",
    "opciones": [
     "ねられないから",
     "すきじゃないから",
     "たかいから",
     "あさ のんだから"
    ],
    "nota": "「ねられませんから」."
   },
   {
    "texto": "先週[せんしゅう]の 日曜日[にちようび]、家族[かぞく]で うみへ 行[い]きました。天気[てんき]が よくて、たくさん およぎました。帰[かえ]りに おいしい さかなを 食[た]べました。",
    "es": "El domingo pasado fuimos en familia a la playa. Hacía buen tiempo y nadamos mucho. A la vuelta comimos un pescado buenísimo.",
    "pregunta": "いつ さかなを 食[た]べましたか。",
    "opciones": [
     "うみから かえる とき",
     "うみへ いく まえ",
     "およぐ まえ",
     "つぎの 日[ひ]"
    ],
    "nota": "「帰りに」 = a la vuelta."
   },
   {
    "texto": "このへやで たばこを すっては いけません。たばこは 1かいの そとで すって ください。",
    "es": "En esta sala no se puede fumar. Fumad fuera, en la planta baja.",
    "pregunta": "たばこは どこで すいますか。",
    "opciones": [
     "1かいの そと",
     "この へや",
     "2かいの そと",
     "どこでも だめです"
    ],
    "nota": "「1かいの そとで すって ください」."
   },
   {
    "texto": "わたしは 毎日[まいにち] 日記[にっき]を 書[か]きます。はじめは スペイン語[ご]で 書[か]いて いましたが、先月[せんげつ]から 日本語[にほんご]で 書[か]いて います。かんじは まだ 少[すこ]ししか 書[か]けません。",
    "es": "Escribo un diario todos los días. Al principio lo escribía en español, pero desde el mes pasado lo escribo en japonés. Todavía sé escribir pocos kanji.",
    "pregunta": "この 人[ひと]は 今[いま] 何語[なにご]で 日記[にっき]を 書[か]いて いますか。",
    "opciones": [
     "にほんご",
     "スペインご",
     "えいご",
     "かんじだけ"
    ],
    "nota": "「先月から 日本語で 書いて います」."
   },
   {
    "texto": "あしたは しけんです。こんばん 早[はや]く ねたいですが、まだ べんきょうが おわって いません。たぶん 12時[じ]ごろ ねます。",
    "es": "Mañana tengo examen. Esta noche quiero acostarme pronto, pero aún no he terminado de estudiar. Seguramente me acueste sobre las 12.",
    "pregunta": "この 人[ひと]は こんばん 何時[なんじ]ごろ ねますか。",
    "opciones": [
     "12時[じ]ごろ",
     "はやく",
     "9時[じ]ごろ",
     "ねません"
    ],
    "nota": "Quiere acostarse pronto, pero será sobre las 12."
   },
   {
    "texto": "この 時計[とけい]は 父[ちち]に もらいました。古[ふる]いですが、とても たいせつです。毎日[まいにち] つけて います。",
    "es": "Este reloj me lo dio mi padre. Es viejo, pero lo aprecio mucho. Lo llevo todos los días.",
    "pregunta": "この 時計[とけい]に ついて、ただしい ものは どれですか。",
    "opciones": [
     "ちちに もらいました。",
     "あたらしい とけいです。",
     "じぶんで かいました。",
     "ときどき つけます。"
    ],
    "nota": "「父に もらいました」."
   },
   {
    "texto": "わたしの 会社[かいしゃ]は 9時[じ]からです。家[いえ]から 会社[かいしゃ]まで 1時間[じかん] かかりますから、毎朝[まいあさ] 7時[じ]半[はん]に 家[いえ]を 出[で]ます。",
    "es": "Mi trabajo empieza a las 9. De casa al trabajo tardo una hora, así que salgo cada mañana a las 7:30.",
    "pregunta": "この 人[ひと]は 何時[なんじ]ごろ 会社[かいしゃ]に つきますか。",
    "opciones": [
     "8時[じ]半[はん]ごろ",
     "7時[じ]半[はん]ごろ",
     "9時[じ]ごろ",
     "10時[じ]ごろ"
    ],
    "nota": "Sale a las 7:30 y tarda una hora: 8:30."
   },
   {
    "texto": "スーパーで たまごと ぎゅうにゅうを 買[か]いました。パンも 買[か]いたかったですが、もう ありませんでした。",
    "es": "En el súper compré huevos y leche. También quería pan, pero ya no quedaba.",
    "pregunta": "この 人[ひと]が 買[か]わなかった ものは 何[なん]ですか。",
    "opciones": [
     "パン",
     "たまご",
     "ぎゅうにゅう",
     "たまごと パン"
    ],
    "nota": "El pan ya se había acabado."
   },
   {
    "texto": "わたしは 月曜日[げつようび]と 水曜日[すいようび]に ジムへ 行[い]きます。金曜日[きんようび]は 友[とも]だちと テニスを します。週末[しゅうまつ]は 家[いえ]で ゆっくり 休[やす]みます。",
    "es": "Los lunes y miércoles voy al gimnasio. Los viernes juego al tenis con un amigo. El fin de semana descanso tranquilo en casa.",
    "pregunta": "この 人[ひと]は 金曜日[きんようび]に 何[なに]を しますか。",
    "opciones": [
     "テニス",
     "ジム",
     "いえで やすみます",
     "かいもの"
    ],
    "nota": "「金曜日は 友[とも]だちと テニスを します」."
   },
   {
    "texto": "きょうは あたまが いたいので、学校[がっこう]を 休[やす]みます。先生[せんせい]に 電話[でんわ]を しました。あしたは 行[い]く つもりです。",
    "es": "Hoy me duele la cabeza, así que no voy a clase. He llamado al profesor. Mañana pienso ir.",
    "pregunta": "この 人[ひと]は きょう 何[なに]を しましたか。",
    "opciones": [
     "せんせいに でんわを しました。",
     "がっこうへ いきました。",
     "びょういんへ いきました。",
     "くすりを かいました。"
    ],
    "nota": "「先生に 電話を しました」."
   },
   {
    "texto": "駅[えき]の 前[まえ]に 新[あたら]しい レストランが できました。りょうりは おいしいですが、少[すこ]し 高[たか]いです。昼[ひる]は 安[やす]い ランチが あります。",
    "es": "Delante de la estación han abierto un restaurante nuevo. La comida está buena, pero es un poco caro. A mediodía hay un menú barato.",
    "pregunta": "この レストランは いつ 安[やす]いですか。",
    "opciones": [
     "ひる",
     "よる",
     "あさ",
     "いつも"
    ],
    "nota": "「昼は 安い ランチが あります」."
   },
   {
    "texto": "わたしは 子[こ]どもの とき、犬[いぬ]を かって いました。名前[なまえ]は ポチでした。今[いま]は アパートに すんで いるので、犬[いぬ]は かえません。",
    "es": "De pequeño tenía un perro que se llamaba Pochi. Ahora vivo en un piso y no puedo tener perro.",
    "pregunta": "この 人[ひと]は 今[いま] どうして 犬[いぬ]を かいませんか。",
    "opciones": [
     "アパートに すんで いるから",
     "いぬが きらいだから",
     "いそがしいから",
     "ポチが いるから"
    ],
    "nota": "「アパートに すんで いるので、犬は かえません」."
   },
   {
    "texto": "こんどの 土曜日[どようび]は 山田[やまだ]さんの 家[いえ]で パーティーが あります。わたしは 飲[の]み物[もの]を 持[も]って 行[い]きます。リーさんは ケーキを 買[か]って 来[き]ます。",
    "es": "Este sábado hay una fiesta en casa de Yamada. Yo llevo las bebidas. Lee trae una tarta.",
    "pregunta": "ケーキを 持[も]って 来[く]るのは だれですか。",
    "opciones": [
     "リーさん",
     "わたし",
     "やまださん",
     "やまださんの かぞく"
    ],
    "nota": "「リーさんは ケーキを 買って 来ます」."
   },
   {
    "texto": "この 本[ほん]は としょかんで かりました。来週[らいしゅう]の 火曜日[かようび]までに かえさなければ なりません。まだ 半分[はんぶん]しか 読[よ]んで いません。",
    "es": "Este libro lo saqué de la biblioteca. Tengo que devolverlo antes del martes que viene. Solo he leído la mitad.",
    "pregunta": "この 人[ひと]は 本[ほん]を どのぐらい 読[よ]みましたか。",
    "opciones": [
     "はんぶん",
     "ぜんぶ",
     "すこしも よんで いません",
     "3ぶんの 1"
    ],
    "nota": "「半分しか 読んで いません」."
   },
   {
    "texto": "わたしの 父[ちち]は いしゃです。毎日[まいにち] びょういんで はたらいて います。とても いそがしいので、家族[かぞく]と いっしょに ばんごはんを 食[た]べる ことが あまり ありません。",
    "es": "Mi padre es médico y trabaja todos los días en el hospital. Está tan ocupado que casi nunca cena con la familia.",
    "pregunta": "父[ちち]に ついて、ただしい ものは どれですか。",
    "opciones": [
     "いつも いそがしいです。",
     "まいばん かぞくと たべます。",
     "びょういんに にゅういんして います。",
     "しごとが ありません。"
    ],
    "nota": "「とても いそがしいので」."
   },
   {
    "texto": "きのう デパートで くつを 買[か]いました。でも、家[いえ]で はいて みたら、少[すこ]し 小[ちい]さかったです。きょう とりかえに 行[い]きます。",
    "es": "Ayer compré unos zapatos en los grandes almacenes, pero al probármelos en casa me quedaban un poco pequeños. Hoy voy a cambiarlos.",
    "pregunta": "この 人[ひと]は きょう 何[なに]を しますか。",
    "opciones": [
     "くつを とりかえに いきます。",
     "あたらしい くつを はきます。",
     "くつを うりに いきます。",
     "デパートで はたらきます。"
    ],
    "nota": "「きょう とりかえに 行きます」."
   },
   {
    "texto": "ことしの なつ やすみは 国[くに]へ 帰[かえ]りません。日本[にほん]で アルバイトを して、お金[かね]を ためます。ふゆ やすみに 帰[かえ]る つもりです。",
    "es": "Estas vacaciones de verano no vuelvo a mi país. Me quedo en Japón trabajando para ahorrar. Pienso volver en las de invierno.",
    "pregunta": "この 人[ひと]は いつ 国[くに]へ 帰[かえ]りますか。",
    "opciones": [
     "ふゆやすみ",
     "なつやすみ",
     "らいねんの なつ",
     "かえりません"
    ],
    "nota": "「ふゆ やすみに 帰る つもりです」."
   },
   {
    "texto": "わたしの 町[まち]には 大[おお]きい こうえんが あります。春[はる]は さくらが きれいで、たくさんの 人[ひと]が 来[き]ます。わたしは 毎朝[まいあさ] そこを さんぽします。",
    "es": "En mi ciudad hay un parque grande. En primavera los cerezos están preciosos y viene mucha gente. Yo paseo por allí todas las mañanas.",
    "pregunta": "この 人[ひと]は 毎朝[まいあさ] 何[なに]を しますか。",
    "opciones": [
     "こうえんを さんぽします。",
     "さくらを みに いきます。",
     "こうえんで はたらきます。",
     "はなを かいます。"
    ],
    "nota": "「毎朝 そこを さんぽします」."
   },
   {
    "texto": "先生[せんせい]\n\nかぜを ひいたので、きょうの じゅぎょうを 休[やす]みます。しゅくだいは あした 出[だ]します。すみません。\n\nワン",
    "es": "Profesor: me he resfriado y hoy falto a clase. Los deberes los entrego mañana. Lo siento. Wang.",
    "pregunta": "ワンさんは しゅくだいを いつ 出[だ]しますか。",
    "opciones": [
     "あした",
     "きょう",
     "らいしゅう",
     "もう だしました"
    ],
    "nota": "「しゅくだいは あした 出します」."
   },
   {
    "texto": "わたしは 日本[にほん]の りょうりの 中[なか]で すしが 一番[いちばん] すきです。てんぷらも すきですが、すしほどでは ありません。",
    "es": "De la comida japonesa lo que más me gusta es el sushi. La tempura también, pero no tanto como el sushi.",
    "pregunta": "この 人[ひと]が 一番[いちばん] すきな りょうりは 何[なん]ですか。",
    "opciones": [
     "すし",
     "てんぷら",
     "すしと てんぷら",
     "ラーメン"
    ],
    "nota": "「すしが 一番 すきです」."
   },
   {
    "texto": "駅[えき]から 大学[だいがく]まで あるいて 15分[ふん]です。でも、とちゅうに 長[なが]い さかが あるので、わたしは いつも バスに のります。",
    "es": "De la estación a la universidad hay 15 minutos andando. Pero como por el camino hay una cuesta larga, siempre cojo el autobús.",
    "pregunta": "この 人[ひと]は どうして バスに のりますか。",
    "opciones": [
     "さかが あるから",
     "えきから とおいから",
     "バスが やすいから",
     "あめが ふるから"
    ],
    "nota": "「とちゅうに 長い さかが あるので」."
   },
   {
    "texto": "けさ 電車[でんしゃ]の 中[なか]で 友[とも]だちに 会[あ]いました。友[とも]だちは 大阪[おおさか]へ しゅっちょうに 行[い]く ところでした。わたしは 会社[かいしゃ]へ 行[い]きました。",
    "es": "Esta mañana me encontré con un amigo en el tren. Él iba de viaje de trabajo a Osaka. Yo iba a la oficina.",
    "pregunta": "友[とも]だちは どこへ 行[い]きましたか。",
    "opciones": [
     "おおさか",
     "かいしゃ",
     "えき",
     "いえ"
    ],
    "nota": "El amigo iba a Osaka; esta persona, a la oficina."
   },
   {
    "texto": "わたしの へやは 3かいです。エレベーターが ないので、まいにち かいだんを のぼります。にもつが 多[おお]い 日[ひ]は たいへんです。",
    "es": "Mi piso está en la tercera planta. Como no hay ascensor, subo escaleras todos los días. Los días que llevo mucho peso es duro.",
    "pregunta": "この 人[ひと]は いつ たいへんですか。",
    "opciones": [
     "にもつが おおい 日[ひ]",
     "あめの 日[ひ]",
     "あさ",
     "やすみの 日[ひ]"
    ],
    "nota": "「にもつが 多い 日は たいへんです」."
   },
   {
    "texto": "あした 友[とも]だちが 国[くに]から 来[き]ます。わたしは 空港[くうこう]まで むかえに 行[い]きます。ひこうきは 午後[ごご] 3時[じ]に つきます。",
    "es": "Mañana viene un amigo de mi país. Voy a recogerlo al aeropuerto. El avión llega a las 3 de la tarde.",
    "pregunta": "この 人[ひと]は あした 何[なに]を しますか。",
    "opciones": [
     "くうこうへ ともだちを むかえに いきます。",
     "くにへ かえります。",
     "ひこうきに のります。",
     "ともだちの くにへ いきます。"
    ],
    "nota": "「空港まで むかえに 行きます」."
   },
   {
    "texto": "この カメラは 先週[せんしゅう] 買[か]いました。小[ちい]さくて かるいので、どこにでも 持[も]って 行[い]けます。しゃしんも きれいです。",
    "es": "Esta cámara la compré la semana pasada. Es pequeña y ligera, así que la puedo llevar a cualquier parte. Y las fotos salen bonitas.",
    "pregunta": "この カメラは どんな カメラですか。",
    "opciones": [
     "ちいさくて かるい カメラ",
     "おおきくて おもい カメラ",
     "ふるくて かるい カメラ",
     "たかくて おもい カメラ"
    ],
    "nota": "「小さくて かるい」."
   },
   {
    "texto": "わたしは 毎晩[まいばん] 11時[じ]に ねますが、きのうは しごとが 多[おお]くて、1時[じ]に ねました。それで、きょうは とても ねむいです。",
    "es": "Me acuesto cada noche a las 11, pero ayer tenía mucho trabajo y me acosté a la 1. Por eso hoy tengo mucho sueño.",
    "pregunta": "この 人[ひと]は きのう 何時[なんじ]に ねましたか。",
    "opciones": [
     "1時[じ]",
     "11時[じ]",
     "12時[じ]",
     "10時[じ]"
    ],
    "nota": "「きのうは…1時に ねました」."
   },
   {
    "texto": "わたしの 学校[がっこう]には りゅうがくせいが 30人[にん] います。中国人[ちゅうごくじん]が 一番[いちばん] 多[おお]くて、15人[にん]です。アメリカ人[ひと]は 5人[にん]です。",
    "es": "En mi escuela hay 30 estudiantes extranjeros. Los más numerosos son los chinos, 15. Estadounidenses hay 5.",
    "pregunta": "中国人[ちゅうごくじん]の りゅうがくせいは 何人[なんにん]ですか。",
    "opciones": [
     "15人[にん]",
     "30人[にん]",
     "5人[にん]",
     "10人[にん]"
    ],
    "nota": "「中国人が 一番 多くて、15人です」."
   },
   {
    "texto": "この へやは 少[すこ]し くらいので、電気[でんき]を つけましょう。それから、まどを あけて ください。少[すこ]し あついです。",
    "es": "Esta habitación está algo oscura: encendamos la luz. Y abre la ventana, por favor; hace un poco de calor.",
    "pregunta": "この 人[ひと]は どうして まどを あけますか。",
    "opciones": [
     "すこし あついから",
     "くらいから",
     "さむいから",
     "でんきが つかないから"
    ],
    "nota": "La luz es por la oscuridad; la ventana, por el calor."
   },
   {
    "texto": "わたしは スポーツが あまり すきでは ありません。でも、見[み]るのは すきです。週末[しゅうまつ]は よく テレビで サッカーを 見[み]ます。",
    "es": "No me gusta mucho hacer deporte, pero me gusta verlo. Los fines de semana veo a menudo fútbol en la tele.",
    "pregunta": "この 人[ひと]に ついて、ただしい ものは どれですか。",
    "opciones": [
     "スポーツを 見[み]るのが すきです。",
     "サッカーを よく します。",
     "スポーツが 大[だい]すきです。",
     "テレビを 見[み]ません。"
    ],
    "nota": "No le gusta practicarlo, pero sí verlo."
   },
   {
    "texto": "こんしゅうの 土曜日[どようび]に ひっこしを します。友[とも]だちが 3人[にん] てつだいに 来[き]ます。ひるごはんは わたしが ごちそうします。",
    "es": "Este sábado me mudo. Vienen tres amigos a ayudarme. La comida la invito yo.",
    "pregunta": "ひるごはんは だれが はらいますか。",
    "opciones": [
     "この 人[ひと]",
     "ともだち",
     "みんなで",
     "ともだちの 一人[ひとり]"
    ],
    "nota": "「ひるごはんは わたしが ごちそうします」."
   },
   {
    "texto": "この 町[まち]は 夏[なつ] とても あついですが、ふゆは あまり さむく ありません。ゆきは ほとんど ふりません。",
    "es": "En esta ciudad hace mucho calor en verano, pero en invierno no hace mucho frío. Casi nunca nieva.",
    "pregunta": "この 町[まち]の ふゆは どうですか。",
    "opciones": [
     "あまり さむく ありません。",
     "とても さむいです。",
     "ゆきが よく ふります。",
     "とても あついです。"
    ],
    "nota": "「ふゆは あまり さむく ありません」."
   },
   {
    "texto": "わたしは 週[しゅう]に 3回[かい] 日本語[にほんご]の クラスに 行[い]きます。クラスは 夜[よる] 7時[じ]から 9時[じ]までです。クラスの あとで、友[とも]だちと ごはんを 食[た]べます。",
    "es": "Voy a clase de japonés tres veces por semana, de 7 a 9 de la noche. Después ceno con mis compañeros.",
    "pregunta": "クラスは 何[なに]時間[じかん]ですか。",
    "opciones": [
     "2時間[じかん]",
     "3時間[じかん]",
     "7時間[じかん]",
     "9時間[じかん]"
    ],
    "nota": "De 7 a 9: dos horas."
   },
   {
    "texto": "きょうは 母[はは]の 日[ひ]です。わたしは 母[はは]に 手紙[てがみ]を 書[か]きました。それから、いっしょに 買[か]い物[もの]に 行[い]って、母[はは]が ほしかった かばんを プレゼントしました。",
    "es": "Hoy es el día de la madre. Le escribí una carta a mi madre. Luego fuimos de compras y le regalé el bolso que quería.",
    "pregunta": "この 人[ひと]は 母[はは]に 何[なに]を プレゼントしましたか。",
    "opciones": [
     "かばん",
     "てがみだけ",
     "はな",
     "くつ"
    ],
    "nota": "Carta y además el bolso que quería."
   },
   {
    "texto": "たなかさんは ギターが じょうずです。大学[だいがく]の とき から ひいて います。こんど 友[とも]だちと コンサートを します。",
    "es": "Tanaka toca muy bien la guitarra. La toca desde la universidad. Dentro de poco da un concierto con sus amigos.",
    "pregunta": "たなかさんは いつから ギターを ひいて いますか。",
    "opciones": [
     "だいがくの ときから",
     "こどもの ときから",
     "きょねんから",
     "せんげつから"
    ],
    "nota": "「大学の ときから ひいて います」."
   },
   {
    "texto": "わたしの 家[いえ]の 近[ちか]くに コンビニが 2つ あります。駅[えき]の 前[まえ]の コンビニは 24時間[じかん] あいて いますが、もう 1つは 夜[よる] 11時[じ]に しまります。",
    "es": "Cerca de mi casa hay dos tiendas de conveniencia. La de delante de la estación abre las 24 horas, pero la otra cierra a las 11 de la noche.",
    "pregunta": "駅[えき]の 前[まえ]の コンビニは どうですか。",
    "opciones": [
     "いつも あいて います。",
     "よる 11時[じ]に しまります。",
     "あさ あきません。",
     "やすみが おおいです。"
    ],
    "nota": "「24時間 あいて います」."
   },
   {
    "texto": "あしたは 朝[あさ] 早[はや]く 出[で]かけるので、こんばんは 早[はや]く ねます。目[め]ざまし時計[とけい]を 5時[じ]に しました。",
    "es": "Mañana salgo temprano, así que esta noche me acuesto pronto. He puesto el despertador a las 5.",
    "pregunta": "この 人[ひと]は あした 何時[なんじ]に 起[お]きますか。",
    "opciones": [
     "5時[じ]",
     "6時[じ]",
     "7時[じ]",
     "4時[じ]"
    ],
    "nota": "El despertador está a las 5."
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
       "となりの 人[ひと]に 話[はな]します。",
       "新[あたら]しい テレビを 買[か]います。"
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
       "一週間[いっしゅうかん]に 三日[みっか]",
       "毎日[まいにち]",
       "一週間[いっしゅうかん]に 五日[いつか]",
       "土曜日[どようび]と 日曜日[にちようび]だけ"
      ],
      "nota": "「週に 三日 働いて います」."
     },
     {
      "pregunta": "リーさんは どうして この 手紙[てがみ]を 書[か]きましたか。",
      "opciones": [
       "国[くに]へ かえるまえに 田中[たなか]さんに 会[あ]いたいから。",
       "新[あたら]しい アルバイトを さがして いるから。",
       "日本語[にほんご]の 学校[がっこう]を 教[おし]えたいから。",
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
       "父[ちち]",
       "母[はは]",
       "わたし",
       "父[ちち]と 母[はは]"
      ],
      "nota": "「母は 仕事が いそがしいので、晩ごはんは いつも 父が 作[つく]ります」."
     },
     {
      "pregunta": "先週[せんしゅう]の 日曜日[にちようび]、この 人[ひと]は 何[なに]を しましたか。",
      "opciones": [
       "一人[ひとり]で カレーを 作[つく]りました。",
       "さかなの りょうりを 作[つく]りました。",
       "父[ちち]の 手伝[てつだ]いを しました。",
       "母[はは]と りょうりを 作[つく]りました。"
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
       "八時[はちじ]ごろ",
       "六時[ろくじ]ごろ",
       "二時[にじ]ごろ",
       "十時[じゅうじ]ごろ"
      ],
      "nota": "Quedaron a las 6 y el autobús tardó 2 horas: 8時ごろ."
     },
     {
      "pregunta": "お昼[ひる]ごはんに ついて、正[ただ]しい ものは どれですか。",
      "opciones": [
       "友[とも]だちが 作[つく]った ものを 食[た]べました。",
       "山[やま]の 上[うえ]の 店[みせ]で 買[か]いました。",
       "うちから 買[か]って 行[い]きました。",
       "なにも＋neg. 食[た]べませんでした。"
      ],
      "nota": "「友[とも]だちが 作[つく]った おにぎりを 食べました」."
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
       "長[なが]い 時間[じかん] 本[ほん]を 見[み]て いました。",
       "おじいさんと 話[はな]して いました。",
       "たくさん 本[ほん]を 買[か]って いました。",
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
       "七時[しちじ]半[はん]から 八時[はちじ]半[はん]ごろ",
       "七時[しちじ]ごろ",
       "六時[ろくじ]半[はん]ごろ",
       "九時[くじ]ごろ"
      ],
      "nota": "「七時半から 八時半ごろが 一番 たいへんです」."
     },
     {
      "pregunta": "この 人[ひと]は どうして 早[はや]く うちを 出[で]ますか。",
      "opciones": [
       "電車[でんしゃ]の 中[なか]で 本[ほん]が 読[よ]みたいから。",
       "会社[かいしゃ]が 遠[とお]いから。",
       "電車[でんしゃ]が おくれるから。",
       "朝[あさ]ごはんを 食[た]べないから。"
      ],
      "nota": "「七時の 電車は すいて いて、…ゆっくり 本が 読めます」."
     }
    ]
   },
   {
    "texto": "わたしは 去年[きょねん]の 4月[がつ]に 日本[にほん]へ 来[き]ました。はじめは 日本語[にほんご]が ぜんぜん わかりませんでした。店[みせ]で 買[か]い物[もの]を する ときも、駅[えき]で きっぷを 買[か]う ときも、とても こまりました。\n\nでも、日本語[にほんご]の 学校[がっこう]で 毎日[まいにち] べんきょうして、少[すこ]しずつ わかるように なりました。今[いま]は 友[とも]だちと 日本語[にほんご]で 話[はな]す ことが できます。\n\n来年[らいねん]は 大学[だいがく]に 入[はい]りたいです。それで、今[いま] しけんの べんきょうを して います。",
    "es": "Vine a Japón en abril del año pasado. Al principio no entendía nada de japonés y lo pasaba muy mal comprando o sacando billetes. Pero estudiando cada día en la escuela fui entendiendo poco a poco, y ahora hablo con mis amigos en japonés. El año que viene quiero entrar en la universidad, así que estudio para el examen.",
    "preguntas": [
     {
      "pregunta": "はじめ、この 人[ひと]は どうでしたか。",
      "opciones": [
       "日本語[にほんご]が ぜんぜん わかりませんでした。",
       "日本語[にほんご]が 少[すこ]し わかりました。",
       "友[とも]だちと 日本語[にほんご]で 話[はな]しました。",
       "大学[だいがく]で べんきょうして いました。"
      ],
      "nota": "「はじめは 日本語が ぜんぜん わかりませんでした」."
     },
     {
      "pregunta": "この 人[ひと]は 今[いま] 何[なに]を して いますか。",
      "opciones": [
       "しけんの べんきょう",
       "大学[だいがく]の じゅぎょう",
       "きっぷの しごと",
       "店[みせ]の アルバイト"
      ],
      "nota": "「今 しけんの べんきょうを して います」."
     }
    ]
   },
   {
    "texto": "先週[せんしゅう]の 土曜日[どようび]、友[とも]だちの けっこんしきに 行[い]きました。けっこんしきは ホテルで ありました。たくさんの 人[ひと]が 来[き]て、とても にぎやかでした。\n\nわたしは 友[とも]だちに 時計[とけい]を プレゼントしました。友[とも]だちは とても よろこんで くれました。\n\nパーティーの あとで、大学[だいがく]の ときの 友[とも]だちと きっさてんで 3時間[じかん]ぐらい 話[はな]しました。久[ひさ]しぶりに 会[あ]ったので、とても 楽[たの]しかったです。",
    "es": "El sábado pasado fui a la boda de un amigo, en un hotel. Vino muchísima gente y fue muy animada. Le regalé un reloj y se alegró mucho. Después de la fiesta estuve unas tres horas en una cafetería con amigos de la universidad. Hacía mucho que no nos veíamos y lo pasé muy bien.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は 友[とも]だちに 何[なに]を あげましたか。",
      "opciones": [
       "とけい",
       "はな",
       "おかね",
       "ほん"
      ],
      "nota": "「友[とも]だちに 時計を プレゼントしました」."
     },
     {
      "pregunta": "パーティーの あとで 何[なに]を しましたか。",
      "opciones": [
       "きっさてんで 話[はな]しました。",
       "ホテルに とまりました。",
       "すぐ 家[いえ]へ 帰[かえ]りました。",
       "友[とも]だちの 家[いえ]へ 行[い]きました。"
      ],
      "nota": "「きっさてんで 3時間ぐらい 話しました」."
     }
    ]
   },
   {
    "texto": "わたしの 家族[かぞく]は 4人[にん]です。父[ちち]と 母[はは]と 弟[おとうと]と わたしです。父[ちち]は 銀行[ぎんこう]で はたらいて います。毎朝[まいあさ] 7時[じ]に 家[いえ]を 出[で]て、夜[よる] 8時[じ]ごろ 帰[かえ]ります。\n\n母[はは]は 近[ちか]くの スーパーで 午前中[ごぜんちゅう]だけ はたらいて います。午後[ごご]は 家[いえ]で りょうりを したり、そうじを したり します。\n\n弟[おとうと]は 高校生[こうこうせい]です。サッカーが 大[だい]すきで、毎日[まいにち] 学校[がっこう]の あとで れんしゅうして います。",
    "es": "Somos cuatro: mi padre, mi madre, mi hermano pequeño y yo. Mi padre trabaja en un banco; sale a las 7 y vuelve sobre las 8 de la noche. Mi madre trabaja solo por la mañana en el súper de al lado; por la tarde cocina y limpia en casa. Mi hermano está en el instituto y le encanta el fútbol: entrena cada día después de clase.",
    "preguntas": [
     {
      "pregunta": "母[はは]は 午後[ごご] 何[なに]を しますか。",
      "opciones": [
       "家[いえ]で りょうりや そうじを します。",
       "スーパーで はたらきます。",
       "ぎんこうへ 行[い]きます。",
       "サッカーを します。"
      ],
      "nota": "Por la mañana, súper; por la tarde, casa."
     },
     {
      "pregunta": "この 家族[かぞく]に ついて、ただしい ものは どれですか。",
      "opciones": [
       "父[ちち]は ぎんこうで はたらいて います。",
       "母[はは]は 一日中[いちにちじゅう] はたらいて います。",
       "弟[おとうと]は 大学生[だいがくせい]です。",
       "家族[かぞく]は 5人[にん]です。"
      ],
      "nota": "「父は 銀行で はたらいて います」."
     }
    ]
   },
   {
    "texto": "きのう はじめて 日本[にほん]の びょういんへ 行[い]きました。朝[あさ]から のどが いたくて、ねつも ありました。\n\nびょういんは 人[ひと]が 多[おお]くて、1時間[じかん]ぐらい まちました。いしゃは「かぜですね。くすりを 飲[の]んで、2、3日[みっか] ゆっくり 休[やす]んで ください」と 言[い]いました。\n\nきょうは 会社[かいしゃ]を 休[やす]んで、家[いえ]で ねて います。少[すこ]し よく なりました。",
    "es": "Ayer fui por primera vez a un hospital en Japón. Desde por la mañana me dolía la garganta y tenía fiebre. Había mucha gente y esperé casi una hora. El médico dijo: «Es un resfriado. Tómate la medicina y descansa dos o tres días». Hoy he faltado al trabajo y estoy en la cama. Estoy un poco mejor.",
    "preguntas": [
     {
      "pregunta": "びょういんで どのぐらい まちましたか。",
      "opciones": [
       "1時間[じかん]ぐらい",
       "2、3時間[じかん]",
       "30分[ぷん]ぐらい",
       "2、3日[みっか]"
      ],
      "nota": "「1時間ぐらい まちました」."
     },
     {
      "pregunta": "この 人[ひと]は きょう 何[なに]を して いますか。",
      "opciones": [
       "家[いえ]で ねて います。",
       "会社[かいしゃ]で はたらいて います。",
       "びょういんで まって います。",
       "くすりを 買[か]いに 行[い]きました。"
      ],
      "nota": "「家で ねて います」."
     }
    ]
   },
   {
    "texto": "わたしの しゅみは りょうりです。毎週[まいしゅう] 日曜日[にちようび]に 新[あたら]しい りょうりを 作[つく]ります。先週[せんしゅう]は はじめて 日本[にほん]の カレーを 作[つく]りました。\n\nスーパーで カレーの ルーを 買[か]って、はこに 書[か]いて ある とおりに 作[つく]りました。かんたんでしたが、とても おいしかったです。\n\n来週[らいしゅう]は すしを 作[つく]って みたいです。でも、すしは むずかしそうですから、まず 本[ほん]で べんきょうします。",
    "es": "Mi afición es cocinar. Cada domingo hago un plato nuevo. La semana pasada hice por primera vez curry japonés: compré el preparado en el súper y seguí lo que ponía la caja. Era fácil y quedó buenísimo. La próxima semana quiero probar el sushi, pero parece difícil, así que primero lo estudiaré en un libro.",
    "preguntas": [
     {
      "pregunta": "カレーは どうでしたか。",
      "opciones": [
       "かんたんで、おいしかったです。",
       "むずかしくて、おいしくなかったです。",
       "かんたんでしたが、まずかったです。",
       "作[つく]りませんでした。"
      ],
      "nota": "「かんたんでしたが、とても おいしかったです」."
     },
     {
      "pregunta": "この 人[ひと]は 来週[らいしゅう]の 前[まえ]に 何[なに]を しますか。",
      "opciones": [
       "本[ほん]で すしの べんきょうを します。",
       "すしを 買[か]います。",
       "カレーを 作[つく]ります。",
       "すしの 店[みせ]へ 行[い]きます。"
      ],
      "nota": "「まず 本で べんきょうします」."
     }
    ]
   },
   {
    "texto": "わたしは 毎朝[まいあさ] 電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます。家[いえ]から 駅[えき]まで あるいて 10分[ぷん]、電車[でんしゃ]で 40分[ぷん] かかります。\n\n先月[せんげつ]まで 朝[あさ]の 電車[でんしゃ]は とても こんで いて、たいへんでした。それで、今月[こんげつ]から 1時間[じかん] 早[はや]く 家[いえ]を 出[で]る ことに しました。\n\n早[はや]い 電車[でんしゃ]は すいて いて、すわる ことが できます。電車[でんしゃ]の 中[なか]で 本[ほん]を 読[よ]んだり、日本語[にほんご]の べんきょうを したり して います。",
    "es": "Cada mañana voy al trabajo en tren: diez minutos andando hasta la estación y cuarenta de tren. Hasta el mes pasado el tren iba lleno y era horrible, así que este mes decidí salir una hora antes. El tren temprano va vacío y puedo sentarme; leo o estudio japonés.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]の 家[いえ]から 会社[かいしゃ]まで、ぜんぶで 何分[なんぷん] かかりますか。",
      "opciones": [
       "50分[ぷん]",
       "40分[ぷん]",
       "10分[ぷん]",
       "1時間[じかん] 10分[ぷん]"
      ],
      "nota": "10 andando + 40 de tren = 50."
     },
     {
      "pregunta": "この 人[ひと]は どうして 早[はや]く 家[いえ]を 出[で]るように しましたか。",
      "opciones": [
       "電車[でんしゃ]が こんで いたから",
       "会社[かいしゃ]が 遠[とお]く なったから",
       "本[ほん]を 読[よ]む 時間[じかん]が なかったから",
       "朝[あさ]の 電車[でんしゃ]が おくれるから"
      ],
      "nota": "「朝の 電車は とても こんで いて」."
     }
    ]
   },
   {
    "texto": "田中[たなか]さんへ\n\nきのうは ありがとうございました。田中[たなか]さんの 家[いえ]で 食[た]べた りょうりは とても おいしかったです。お母[かあ]さんにも よろしく 言[い]って ください。\n\nこんどは わたしの 家[いえ]に 来[き]て ください。わたしの 国[くに]の りょうりを 作[つく]ります。来月[らいげつ]の 10日[とおか]は どうですか。都合[つごう]が わるかったら、電話[でんわ]して ください。\n\nマリア",
    "es": "Querido Tanaka: gracias por lo de ayer. La comida en tu casa estaba buenísima. Dale recuerdos a tu madre. La próxima vez venid a mi casa: haré comida de mi país. ¿Qué tal el día 10 del mes que viene? Si no te va bien, llámame. María.",
    "preguntas": [
     {
      "pregunta": "マリアさんは きのう どこで ごはんを 食[た]べましたか。",
      "opciones": [
       "田中[たなか]さんの 家[いえ]",
       "マリアさんの 家[いえ]",
       "レストラン",
       "マリアさんの 国[くに]"
      ],
      "nota": "「田中さんの 家で 食べた りょうり」."
     },
     {
      "pregunta": "田中[たなか]さんは 来月[らいげつ]の 10日[とおか]に 行[い]けない とき、どう しますか。",
      "opciones": [
       "マリアさんに 電話[でんわ]します。",
       "手紙[てがみ]を 書[か]きます。",
       "お母[かあ]さんに 言[い]います。",
       "何[なに]も しません。"
      ],
      "nota": "「都合が わるかったら、電話して ください」."
     }
    ]
   },
   {
    "texto": "わたしの 町[まち]には 古[ふる]い お寺[てら]が あります。300年[ねん] まえに たてられた お寺[てら]で、春[はる]には さくらが とても きれいです。\n\n毎年[まいとし] 4月[がつ]に なると、たくさんの 人[ひと]が さくらを 見[み]に 来[き]ます。外国[がいこく]から 来[く]る 人[ひと]も 多[おお]いです。\n\nわたしは 人[ひと]が 多[おお]いのが すきでは ないので、いつも 朝[あさ] 早[はや]く 行[い]きます。朝[あさ]の お寺[てら]は しずかで、とても きもちが いいです。",
    "es": "En mi ciudad hay un templo antiguo, construido hace 300 años, con unos cerezos preciosos en primavera. Cada abril viene muchísima gente a verlos, también del extranjero. A mí no me gusta la aglomeración, así que voy siempre muy temprano. Por la mañana el templo está tranquilo y se está muy a gusto.",
    "preguntas": [
     {
      "pregunta": "4月[がつ]に お寺[てら]は どう なりますか。",
      "opciones": [
       "人[ひと]が たくさん 来[き]ます。",
       "しずかに なります。",
       "しまります。",
       "さくらが ありません。"
      ],
      "nota": "「たくさんの 人が さくらを 見に 来ます」."
     },
     {
      "pregunta": "この 人[ひと]は どうして 朝[あさ] 早[はや]く 行[い]きますか。",
      "opciones": [
       "人[ひと]が 多[おお]いのが すきじゃないから",
       "朝[あさ]しか ひまが ないから",
       "朝[あさ]の さくらが 一番[いちばん] きれいだから",
       "お寺[てら]が 朝[あさ]だけ あいて いるから"
      ],
      "nota": "「人が 多いのが すきでは ないので」."
     }
    ]
   },
   {
    "texto": "ことしの なつ やすみに 北海道[ほっかいどう]へ りょこうしました。ひこうきで 2時間[じかん]ぐらいでした。\n\n北海道[ほっかいどう]の なつは 東京[とうきょう]より すずしくて、とても すごしやすかったです。3日間[みっかかん] いて、山[やま]に のぼったり、おいしい さかなを 食[た]べたり しました。\n\nいちばん よかったのは、夜[よる] ホテルから 見[み]た 星[ほし]です。東京[とうきょう]では 見[み]えない 星[ほし]が たくさん 見[み]えました。また 行[い]きたいです。",
    "es": "Este verano fui de viaje a Hokkaido, unas dos horas en avión. El verano allí es más fresco que en Tokio y se estaba muy bien. Estuve tres días: subí montes y comí pescado buenísimo. Lo mejor fueron las estrellas que vi desde el hotel por la noche: se veían muchas que en Tokio no se ven. Quiero volver.",
    "preguntas": [
     {
      "pregunta": "北海道[ほっかいどう]の なつは どうでしたか。",
      "opciones": [
       "東京[とうきょう]より すずしかったです。",
       "東京[とうきょう]より あつかったです。",
       "雨[あめ]が 多[おお]かったです。",
       "とても さむかったです。"
      ],
      "nota": "「東京より すずしくて」."
     },
     {
      "pregunta": "この 人[ひと]が いちばん よかったと 思[おも]ったのは 何[なん]ですか。",
      "opciones": [
       "夜[よる]の 星[ほし]",
       "山[やま]",
       "さかな",
       "ひこうき"
      ],
      "nota": "「いちばん よかったのは、夜 ホテルから 見た 星[ほし]です」."
     }
    ]
   },
   {
    "texto": "わたしは 先月[せんげつ]から ピアノを ならって います。子[こ]どもの ときから ずっと ひきたいと 思[おも]って いましたが、時間[じかん]が ありませんでした。\n\n先生[せんせい]は 近[ちか]くに すんで いる 女[おんな]の 人[ひと]で、とても やさしいです。じゅぎょうは 毎週[まいしゅう] 木曜日[もくようび]の 夜[よる]です。\n\nまだ かんたんな きょくしか ひけませんが、毎日[まいにち] 30分[ぷん] れんしゅうして います。来年[らいねん] 友[とも]だちの 前[まえ]で ひいて みたいです。",
    "es": "Desde el mes pasado aprendo piano. Desde niño quería tocarlo, pero no tenía tiempo. La profesora es una mujer que vive cerca y es muy amable. La clase es los jueves por la noche. Todavía solo toco piezas fáciles, pero practico media hora al día. El año que viene quiero tocar delante de mis amigos.",
    "preguntas": [
     {
      "pregunta": "ピアノの じゅぎょうは いつですか。",
      "opciones": [
       "木曜日[もくようび]の 夜[よる]",
       "毎日[まいにち]",
       "日曜日[にちようび]の 朝[あさ]",
       "金曜日[きんようび]の 夜[よる]"
      ],
      "nota": "「毎週 木曜日の 夜です」."
     },
     {
      "pregunta": "この 人[ひと]は 来年[らいねん] 何[なに]を したいですか。",
      "opciones": [
       "友[とも]だちの 前[まえ]で ピアノを ひきたいです。",
       "ピアノの 先生[せんせい]に なりたいです。",
       "新[あたら]しい ピアノを 買[か]いたいです。",
       "ピアノを やめたいです。"
      ],
      "nota": "「来年 友[とも]だちの 前で ひいて みたいです」."
     }
    ]
   },
   {
    "texto": "きのう、駅[えき]で さいふを おとしました。家[いえ]に 帰[かえ]ってから 気[き]が つきました。中[なか]には お金[かね]と カードが 入[はい]って いました。\n\nすぐ 駅[えき]に 電話[でんわ]を しましたが、「ありません」と 言[い]われました。それで、こうばんへ 行[い]きました。\n\nきょうの 朝[あさ]、こうばんから 電話[でんわ]が ありました。だれかが さいふを とどけて くれたそうです。お金[かね]も カードも ぜんぶ ありました。本当[ほんとう]に うれしかったです。",
    "es": "Ayer perdí la cartera en la estación; me di cuenta al llegar a casa. Llevaba dinero y tarjetas. Llamé enseguida a la estación, pero me dijeron que no estaba, así que fui a la caseta de policía. Esta mañana me han llamado: alguien la había entregado. Estaba todo, el dinero y las tarjetas. Me he alegrado muchísimo.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は いつ さいふが ない ことに 気[き]が つきましたか。",
      "opciones": [
       "家[いえ]に 帰[かえ]ってから",
       "駅[えき]で",
       "こうばんで",
       "けさ"
      ],
      "nota": "「家に 帰ってから 気が つきました」."
     },
     {
      "pregunta": "さいふは どう なりましたか。",
      "opciones": [
       "ぜんぶ もどって きました。",
       "お金[かね]だけ ありませんでした。",
       "カードだけ ありませんでした。",
       "まだ 見[み]つかりません。"
      ],
      "nota": "「お金も カードも ぜんぶ ありました」."
     }
    ]
   },
   {
    "texto": "わたしの 会社[かいしゃ]では 毎年[まいとし] 12月[がつ]に パーティーが あります。ことしは 会社[かいしゃ]の 近[ちか]くの レストランで しました。\n\n社長[しゃちょう]が 話[はなし]を したあとで、みんなで ごはんを 食[た]べたり、歌[うた]を うたったり しました。わたしは 日本[にほん]の 歌[うた]を 一[ひと]つ うたいました。\n\nパーティーは 9時[じ]に おわりましたが、わかい 人[ひと]たちは そのあと カラオケに 行[い]きました。わたしは つかれたので、家[いえ]へ 帰[かえ]りました。",
    "es": "En mi empresa hay cada diciembre una fiesta. Este año fue en un restaurante cerca de la oficina. Después del discurso del presidente comimos y cantamos; yo canté una canción japonesa. La fiesta terminó a las 9, pero los jóvenes se fueron luego al karaoke. Yo estaba cansado y me fui a casa.",
    "preguntas": [
     {
      "pregunta": "パーティーで この 人[ひと]は 何[なに]を しましたか。",
      "opciones": [
       "日本[にほん]の 歌[うた]を うたいました。",
       "話[はなし]を しました。",
       "カラオケに 行[い]きました。",
       "りょうりを 作[つく]りました。"
      ],
      "nota": "「わたしは 日本の 歌を 一つ うたいました」."
     },
     {
      "pregunta": "パーティーの あとで この 人[ひと]は どう しましたか。",
      "opciones": [
       "家[いえ]へ 帰[かえ]りました。",
       "カラオケに 行[い]きました。",
       "会社[かいしゃ]へ もどりました。",
       "レストランに のこりました。"
      ],
      "nota": "Estaba cansado y volvió a casa."
     }
    ]
   },
   {
    "texto": "わたしは 大学[だいがく]で けいざいを べんきょうして います。じゅぎょうは 月曜日[げつようび]から 金曜日[きんようび]までで、毎日[まいにち] 朝[あさ] 9時[じ]から 午後[ごご] 3時[じ]ごろまでです。\n\nじゅぎょうの あとは としょかんで しゅくだいを します。そして、火曜日[かようび]と 木曜日[もくようび]の 夜[よる]は コンビニで アルバイトを して います。\n\n土曜日[どようび]と 日曜日[にちようび]は じゅぎょうも アルバイトも ないので、友[とも]だちと あそんだり、家[いえ]で ゆっくり したり します。",
    "es": "Estudio economía en la universidad. Hay clase de lunes a viernes, de 9 a 3 más o menos. Después hago los deberes en la biblioteca, y los martes y jueves por la noche trabajo en una tienda. Los sábados y domingos no tengo ni clase ni trabajo, así que salgo con amigos o descanso en casa.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は いつ アルバイトを しますか。",
      "opciones": [
       "火曜日[かようび]と 木曜日[もくようび]の 夜[よる]",
       "月曜日[げつようび]から 金曜日[きんようび]まで",
       "土曜日[どようび]と 日曜日[にちようび]",
       "毎日[まいにち] 午後[ごご]"
      ],
      "nota": "「火曜日と 木曜日の 夜は…アルバイト」."
     },
     {
      "pregunta": "じゅぎょうの あと、この 人[ひと]は ふつう どこへ 行[い]きますか。",
      "opciones": [
       "としょかん",
       "コンビニ",
       "友[とも]だちの 家[いえ]",
       "家[いえ]"
      ],
      "nota": "「じゅぎょうの あとは としょかんで しゅくだいを します」."
     }
    ]
   },
   {
    "texto": "この 前[まえ]の 日曜日[にちようび]、デパートへ 冬[ふゆ]の コートを 買[か]いに 行[い]きました。\n\n店[みせ]には いろいろな コートが ありました。はじめに 見[み]た 黒[くろ]い コートは とても かっこよかったですが、高[たか]すぎました。茶色[ちゃいろ]の コートは 安[やす]かったですが、少[すこ]し 大[おお]きかったです。\n\nさいごに、店[みせ]の 人[ひと]が 白[しろ]い コートを 見[み]せて くれました。ねだんも ちょうど よくて、サイズも あって いたので、それを 買[か]いました。",
    "es": "El domingo pasado fui a los grandes almacenes a comprar un abrigo de invierno. Había muchos. El primero, negro, era precioso pero carísimo. El marrón era barato, pero me quedaba algo grande. Al final la dependienta me enseñó uno blanco; el precio estaba bien y era de mi talla, así que me lo quedé.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は どの コートを 買[か]いましたか。",
      "opciones": [
       "白[しろ]い コート",
       "黒[くろ]い コート",
       "茶色[ちゃいろ]の コート",
       "買[か]いませんでした"
      ],
      "nota": "Al final, el blanco."
     },
     {
      "pregunta": "黒[くろ]い コートは どうして 買[か]いませんでしたか。",
      "opciones": [
       "高[たか]すぎたから",
       "大[おお]きかったから",
       "小[ちい]さかったから",
       "いろが よくなかったから"
      ],
      "nota": "「高すぎました」."
     }
    ]
   },
   {
    "texto": "わたしの 国[くに]では 日本語[にほんご]を べんきょうする 人[ひと]が 多[おお]く なりました。わたしが 日本語[にほんご]を はじめたのは 高校生[こうこうせい]の ときです。日本[にほん]の アニメが 好[す]きだったからです。\n\nはじめは ひらがなと カタカナだけでしたが、大学[だいがく]で かんじも べんきょうしました。今[いま]は 200ぐらい 読[よ]む ことが できます。\n\nいつか 日本[にほん]の 会社[かいしゃ]で はたらきたいです。それで、来年[らいねん] N4の しけんを うける つもりです。",
    "es": "En mi país cada vez hay más gente que estudia japonés. Yo empecé en el instituto, porque me gustaba el anime. Al principio solo hiragana y katakana, pero en la universidad también estudié kanji; ahora leo unos 200. Algún día quiero trabajar en una empresa japonesa, así que el año que viene pienso presentarme al N4.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は どうして 日本語[にほんご]を はじめましたか。",
      "opciones": [
       "日本[にほん]の アニメが 好[す]きだったから",
       "日本[にほん]の 会社[かいしゃ]で はたらきたかったから",
       "大学[だいがく]の じゅぎょうだったから",
       "友[とも]だちが 日本人[にほんじん]だったから"
      ],
      "nota": "「日本の アニメが 好きだったからです」."
     },
     {
      "pregunta": "この 人[ひと]は 来年[らいねん] 何[なに]を しますか。",
      "opciones": [
       "N4の しけんを うけます。",
       "日本[にほん]の 会社[かいしゃ]に 入[はい]ります。",
       "日本[にほん]へ 行[い]きます。",
       "大学[だいがく]に 入[はい]ります。"
      ],
      "nota": "「来年 N4の しけんを うける つもりです」."
     }
    ]
   },
   {
    "texto": "わたしの アパートの となりに 小[ちい]さい パン屋[や]が あります。おじいさんと おばあさんが 二人[ふたり]で やって いる 店[みせ]です。\n\n朝[あさ] 6時[じ]から あいて いるので、わたしは 毎朝[まいあさ] 会社[かいしゃ]へ 行[い]く まえに そこで パンを 買[か]います。一番[いちばん] 好[す]きなのは チーズの パンです。\n\n先週[せんしゅう] 店[みせ]が 休[やす]みでした。おじいさんが びょうきに なったそうです。早[はや]く よく なって ほしいです。",
    "es": "Al lado de mi piso hay una panadería pequeña que llevan un abuelo y una abuela. Abre a las 6, así que cada mañana compro allí pan antes de ir al trabajo. El que más me gusta es el de queso. La semana pasada estuvo cerrada: dicen que el abuelo se puso enfermo. Ojalá se mejore pronto.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は いつ パンを 買[か]いますか。",
      "opciones": [
       "毎朝[まいあさ] 会社[かいしゃ]へ 行[い]く まえ",
       "会社[かいしゃ]の あと",
       "日曜日[にちようび]だけ",
       "ひるやすみ"
      ],
      "nota": "「毎朝 会社へ 行く まえに」."
     },
     {
      "pregunta": "先週[せんしゅう] 店[みせ]は どうして 休[やす]みでしたか。",
      "opciones": [
       "おじいさんが びょうきに なったから",
       "パンが なかったから",
       "りょこうに 行[い]ったから",
       "日曜日[にちようび]だったから"
      ],
      "nota": "「おじいさんが びょうきに なったそうです」."
     }
    ]
   },
   {
    "texto": "先週[せんしゅう]から 日本語[にほんご]の クラスに 新[あたら]しい 学生[がくせい]が 来[き]ました。ブラジルから 来[き]た カルロスさんです。\n\nカルロスさんは 日本[にほん]へ 来[く]る まえに 国[くに]で 1年[ねん] 日本語[にほんご]を べんきょうしたので、もう じょうずに 話[はな]す ことが できます。でも、かんじは まだ 少[すこ]ししか わかりません。\n\nカルロスさんは サッカーが とても じょうずです。こんどの 日曜日[にちようび]、クラスの みんなで いっしょに サッカーを する ことに なりました。",
    "es": "Desde la semana pasada hay un estudiante nuevo en clase: Carlos, de Brasil. Estudió japonés un año en su país antes de venir, así que ya lo habla bien, aunque de kanji sabe poco. Juega muy bien al fútbol, y este domingo vamos a jugar todos los de la clase juntos.",
    "preguntas": [
     {
      "pregunta": "カルロスさんに ついて、ただしい ものは どれですか。",
      "opciones": [
       "話[はな]すのは じょうずですが、かんじは まだ 少[すこ]ししか わかりません。",
       "かんじも 話[はな]すのも じょうずです。",
       "日本[にほん]で 1年[ねん] べんきょうしました。",
       "サッカーが へたです。"
      ],
      "nota": "Habla bien, pero de kanji sabe poco."
     },
     {
      "pregunta": "こんどの 日曜日[にちようび]に 何[なに]を しますか。",
      "opciones": [
       "みんなで サッカーを します。",
       "カルロスさんの 国[くに]へ 行[い]きます。",
       "かんじの べんきょうを します。",
       "パーティーを します。"
      ],
      "nota": "「クラスの みんなで いっしょに サッカーを する」."
     }
    ]
   },
   {
    "texto": "ゆうべ、となりの へやの 人[ひと]が とても うるさかったです。夜[よる] 12時[じ]を すぎても、大[おお]きい 音[おと]で 音楽[おんがく]を 聞[き]いて いました。\n\nわたしは あさ 早[はや]く 起[お]きなければ ならないので、ねむれなくて こまりました。\n\nきょう、アパートの かんりにんさんに 話[はな]しました。かんりにんさんは「となりの 人[ひと]に 言[い]って おきます」と 言[い]いました。",
    "es": "Anoche el vecino de al lado hizo mucho ruido: pasadas las 12 seguía con la música muy alta. Yo tengo que madrugar y no podía dormir. Hoy se lo he contado al administrador del edificio, que me ha dicho que hablará con el vecino.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は どうして こまりましたか。",
      "opciones": [
       "ねむれなかったから",
       "音楽[おんがく]が すきじゃないから",
       "朝[あさ] おそく 起[お]きたから",
       "となりの 人[ひと]が いなかったから"
      ],
      "nota": "「ねむれなくて こまりました」."
     },
     {
      "pregunta": "かんりにんさんは 何[なに]を しますか。",
      "opciones": [
       "となりの 人[ひと]に 話[はな]します。",
       "この 人[ひと]の へやを かえます。",
       "けいさつに 電話[でんわ]します。",
       "何[なに]も しません。"
      ],
      "nota": "「となりの 人に 言って おきます」."
     }
    ]
   },
   {
    "texto": "きのう、はじめて 自転車[じてんしゃ]で 会社[かいしゃ]へ 行[い]きました。いつもは バスで 30分[ぷん]ぐらい かかりますが、自転車[じてんしゃ]では 25分[ふん]でした。\n\nあさの 空気[くうき]は きもちが よくて、とても たのしかったです。それに、バスの お金[かね]も いりません。\n\nでも、雨[あめ]の 日[ひ]は 自転車[じてんしゃ]に のれません。それで、天気[てんき]が いい 日[ひ]だけ 自転車[じてんしゃ]で 行[い]く ことに しました。",
    "es": "Ayer fui por primera vez al trabajo en bici. En autobús tardo unos 30 minutos; en bici, 25. El aire de la mañana era agradable y me lo pasé muy bien; además no pago el autobús. Pero los días de lluvia no se puede ir en bici, así que he decidido ir en bici solo cuando haga buen tiempo.",
    "preguntas": [
     {
      "pregunta": "自転車[じてんしゃ]で 会社[かいしゃ]まで 何分[なんぷん] かかりましたか。",
      "opciones": [
       "25分[ふん]",
       "30分[ぷん]",
       "5分[ふん]",
       "1時間[じかん]"
      ],
      "nota": "「自転車では 25分でした」."
     },
     {
      "pregunta": "この 人[ひと]は これから どう しますか。",
      "opciones": [
       "天気[てんき]が いい 日[ひ]だけ 自転車[じてんしゃ]で 行[い]きます。",
       "毎日[まいにち] 自転車[じてんしゃ]で 行[い]きます。",
       "毎日[まいにち] バスで 行[い]きます。",
       "雨[あめ]の 日[ひ]だけ 自転車[じてんしゃ]で 行[い]きます。"
      ],
      "nota": "「天気が いい 日だけ 自転車で 行く ことに しました」."
     }
    ]
   },
   {
    "texto": "わたしは 毎年[まいとし] お正月[しょうがつ]に 家族[かぞく]で おばあさんの 家[いえ]へ 行[い]きます。おばあさんの 家[いえ]は いなかに あって、車[くるま]で 4時間[じかん]ぐらい かかります。\n\nおばあさんは いつも おいしい りょうりを たくさん 作[つく]って まって いて くれます。いとこたちも 来[く]るので、とても にぎやかです。\n\nことしは 雪[ゆき]が たくさん ふったので、子[こ]どもたちは 外[そと]で 雪[ゆき]だるまを 作[つく]って あそびました。",
    "es": "Cada Año Nuevo voy con mi familia a casa de mi abuela, en el campo, a unas cuatro horas en coche. Siempre nos espera con muchísima comida rica. También vienen mis primos, así que hay mucho ambiente. Este año nevó mucho y los niños hicieron muñecos de nieve fuera.",
    "preguntas": [
     {
      "pregunta": "おばあさんの 家[いえ]まで 何[なに]で 行[い]きますか。",
      "opciones": [
       "くるま",
       "でんしゃ",
       "ひこうき",
       "バス"
      ],
      "nota": "「車で 4時間ぐらい」."
     },
     {
      "pregunta": "ことし 子[こ]どもたちは 何[なに]を しましたか。",
      "opciones": [
       "雪[ゆき]だるまを 作[つく]りました。",
       "りょうりを 作[つく]りました。",
       "山[やま]に のぼりました。",
       "いなかへ 行[い]きませんでした。"
      ],
      "nota": "「外で 雪だるまを 作って あそびました」."
     }
    ]
   },
   {
    "texto": "わたしの ルームメートの ケンさんは とても きれい好[す]きです。毎日[まいにち] へやを そうじして、ごみも きちんと 分[わ]けて すてます。\n\nわたしは あまり そうじが すきでは ありません。それで、ケンさんと「月曜日[げつようび]と 木曜日[もくようび]は わたしが そうじを する」と きめました。\n\nその かわりに、ケンさんは あまり りょうりを しないので、わたしが よく 晩[ばん]ごはんを 作[つく]ります。",
    "es": "Mi compañero de piso, Ken, es muy limpio: limpia la habitación a diario y separa bien la basura. A mí no me gusta mucho limpiar, así que acordamos que yo limpio los lunes y los jueves. A cambio, como Ken apenas cocina, yo suelo hacer la cena.",
    "preguntas": [
     {
      "pregunta": "この 人[ひと]は いつ そうじを しますか。",
      "opciones": [
       "月曜日[げつようび]と 木曜日[もくようび]",
       "毎日[まいにち]",
       "土曜日[どようび]と 日曜日[にちようび]",
       "しません"
      ],
      "nota": "「月曜日と 木曜日は わたしが そうじを する」."
     },
     {
      "pregunta": "この 人[ひと]は ケンさんの ために 何[なに]を よく しますか。",
      "opciones": [
       "晩[ばん]ごはんを 作[つく]ります。",
       "ごみを すてます。",
       "へやを そうじします。",
       "買[か]い物[もの]に 行[い]きます。"
      ],
      "nota": "「わたしが よく 晩[ばん]ごはんを 作ります」."
     }
    ]
   },
   {
    "texto": "先月[せんげつ] スマホを 新[あたら]しく しました。前[まえ]の スマホは 5年[ねん] 使[つか]って いたので、とても 古[ふる]く なって いました。\n\n新[あたら]しい スマホは しゃしんが とても きれいに とれます。それに、大[おお]きくて 字[じ]が 見[み]やすいです。\n\nでも、使[つか]いかたが まだ よく わかりません。こんどの 週末[しゅうまつ]、弟[おとうと]に おしえて もらう つもりです。",
    "es": "El mes pasado me cambié de móvil; el anterior lo había usado cinco años y estaba muy viejo. El nuevo hace fotos muy bonitas y es grande, con la letra fácil de leer. Pero todavía no sé bien cómo se usa: este fin de semana mi hermano pequeño me va a enseñar.",
    "preguntas": [
     {
      "pregunta": "前[まえ]の スマホは 何年[なんねん] 使[つか]いましたか。",
      "opciones": [
       "5年[ねん]",
       "1年[ねん]",
       "3年[ねん]",
       "10年[ねん]"
      ],
      "nota": "「前の スマホは 5年 使って いた」."
     },
     {
      "pregunta": "この 人[ひと]は 週末[しゅうまつ] 何[なに]を しますか。",
      "opciones": [
       "弟[おとうと]に スマホの 使[つか]いかたを ならいます。",
       "新[あたら]しい スマホを 買[か]います。",
       "しゃしんを とりに 行[い]きます。",
       "弟[おとうと]に スマホを あげます。"
      ],
      "nota": "「弟に おしえて もらう つもりです」."
     }
    ]
   },
   {
    "texto": "わたしの 町[まち]では 毎年[まいとし] 8月[がつ]に 大[おお]きい なつまつりが あります。駅[えき]の 前[まえ]の 道[みち]に たくさんの 店[みせ]が ならんで、夜[よる]は はなびが あります。\n\nことしは 友[とも]だちと ゆかたを きて 行[い]きました。やきそばを 食[た]べたり、金魚[きんぎょ]すくいを したり しました。\n\nはなびは 8時[じ]から 30分[ぷん] ありました。人[ひと]が とても 多[おお]くて、帰[かえ]りの 電車[でんしゃ]は すごく こんで いました。",
    "es": "En mi ciudad hay cada agosto un gran festival de verano: la calle de la estación se llena de puestos y por la noche hay fuegos artificiales. Este año fui con amigos en yukata. Comimos yakisoba y pescamos pececillos. Los fuegos fueron de 8 a 8:30. Había muchísima gente y el tren de vuelta iba a reventar.",
    "preguntas": [
     {
      "pregunta": "はなびは 何時[なんじ]に おわりましたか。",
      "opciones": [
       "8時[じ]半[はん]",
       "8時[じ]",
       "9時[じ]",
       "9時[じ]半[はん]"
      ],
      "nota": "De 8 a 8:30."
     },
     {
      "pregunta": "帰[かえ]りの 電車[でんしゃ]は どうでしたか。",
      "opciones": [
       "とても こんで いました。",
       "すいて いました。",
       "ありませんでした。",
       "おくれました。"
      ],
      "nota": "「帰りの 電車は すごく こんで いました」."
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
     "金曜日[きんようび]の 午後[ごご] 六時[ろくじ]から",
     "金曜日[きんようび]の 午前中[ごぜんちゅう]",
     "水曜日[すいようび]の 午後[ごご] 六時[ろくじ]から",
     "日曜日[にちようび]の 午後[ごご] 六時[ろくじ]から"
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
     "月曜日[げつようび]は 休[やす]みです。",
     "日曜日[にちようび]は 休[やす]みです。",
     "本[ほん]は 10さつまで かりられます。",
     "新聞[しんぶん]も かりられます。"
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
     "1,200円[えん]",
     "1,000円[えん]",
     "700円[えん]",
     "1,500円[えん]"
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
     "土曜日[どようび]の 朝[あさ] 八時[はちじ]までに",
     "月曜日[げつようび]の 朝[あさ] 八時[はちじ]までに",
     "水曜日[すいようび]の 朝[あさ] 八時[はちじ]までに",
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
     "どの クラスにも 入[い]れません"
    ],
    "nota": "Solo puede el sábado y quiere kanji: la clase 3.",
    "es": "Folleto de las clases de japonés, con los niveles, los días y el precio."
   },
   {
    "titulo": "びじゅつかんの あんない",
    "cabecera": [
     "",
     "大人[おとな]",
     "子[こ]ども"
    ],
    "filas": [
     [
      "1日[いちにち]",
      "800円[えん]",
      "400円[えん]"
     ],
     [
      "4時[じ]から",
      "500円[えん]",
      "200円[えん]"
     ]
    ],
    "notas": [
     "あいて いる 時間[じかん]: 9:00〜17:00",
     "休[やす]み: 月曜日[げつようび]",
     "※ 子[こ]どもは 12さいまでです。"
    ],
    "pregunta": "日曜日[にちようび]の 午後[ごご] 4時[じ]に 大人[おとな] 一人[ひとり]と 子[こ]ども 二人[ふたり]で 行[い]きます。いくら はらいますか。",
    "opciones": [
     "900円[えん]",
     "1,600円[えん]",
     "1,300円[えん]",
     "1,200円[えん]"
    ],
    "nota": "Desde las 4: adulto 500 + 2 niños × 200 = 900.",
    "es": "Horario y precios de un museo."
   },
   {
    "titulo": "バスの 時間[じかん] (駅[えき] → 大学[だいがく])",
    "cabecera": [
     "",
     "朝[あさ]",
     "昼[ひる]",
     "夜[よる]"
    ],
    "filas": [
     [
      "月[げつ]〜金[きん]",
      "7:10 7:40 8:10",
      "12:00 13:00",
      "18:00 19:00"
     ],
     [
      "土[ど]・日[にち]",
      "8:00 9:00",
      "12:00",
      "ありません"
     ]
    ],
    "notas": [
     "※ 大学[だいがく]まで 20分[ぷん] かかります。"
    ],
    "pregunta": "リーさんは 土曜日[どようび]に 大学[だいがく]で 9時[じ]半[はん]から じゅぎょうが あります。何時[なんじ]の バスに のりますか。",
    "opciones": [
     "8:00",
     "9:00",
     "7:40",
     "8:10"
    ],
    "nota": "Con 20 minutos de viaje, la de las 9:00 llega a las 9:20; pero el sábado solo hay 8:00 y 9:00, y 9:00 llega justo. Lo seguro para las 9:30 es la de las 9:00… y la de las 8:00 llega demasiado pronto: se elige la de las 9:00.",
    "es": "Horario de autobuses de la estación a la universidad."
   },
   {
    "titulo": "料理[りょうり]教室[きょうしつ]の おしらせ",
    "cabecera": [
     "日[にち]",
     "りょうり",
     "お金[かね]"
    ],
    "filas": [
     [
      "5月[がつ] 10日[とおか](土[ど])",
      "すし",
      "2,000円[えん]"
     ],
     [
      "5月[がつ] 17日[にち](土[ど])",
      "てんぷら",
      "1,800円[えん]"
     ],
     [
      "5月[がつ] 24日[にじゅうよっか](土[ど])",
      "ラーメン",
      "1,500円[えん]"
     ]
    ],
    "notas": [
     "時間[じかん]: 10:00〜12:00",
     "※ エプロンを 持[も]って 来[き]て ください。",
     "※ 5月[がつ] 7日[なのか]までに 電話[でんわ]で 申[もう]し込[こ]んで ください。"
    ],
    "pregunta": "クラスに 入[はい]る 人[ひと]は 何[なに]を しなければ なりませんか。",
    "opciones": [
     "5月[がつ] 7日[なのか]までに 電話[でんわ]します。",
     "5月[がつ] 10日[とおか]に お金[かね]を はらいます。",
     "エプロンを 買[か]います。",
     "12時[じ]までに 来[き]ます。"
    ],
    "nota": "「5月 7日までに 電話で 申[もう]し込[こ]んで ください」.",
    "es": "Aviso de unas clases de cocina."
   },
   {
    "titulo": "アパートの ごみの 日[ひ]",
    "cabecera": [
     "曜日[ひ]",
     "ごみ"
    ],
    "filas": [
     [
      "月[げつ]・木[もく]",
      "もえる ごみ"
     ],
     [
      "火[か]",
      "プラスチック"
     ],
     [
      "水[すい]",
      "びん・かん"
     ],
     [
      "金[きん]",
      "古[ふる]い 新聞[しんぶん]・ざっし"
     ]
    ],
    "notas": [
     "※ 朝[あさ] 8時[じ]までに 出[だ]して ください。",
     "※ 土[ど]・日[にち]は 出[だ]さないで ください。"
    ],
    "pregunta": "ジュースの びんは 何曜日[なんようび]に 出[だ]しますか。",
    "opciones": [
     "水曜日[すいようび]",
     "火曜日[かようび]",
     "金曜日[きんようび]",
     "土曜日[どようび]"
    ],
    "nota": "びん・かん: miércoles.",
    "es": "Días de basura de un edificio."
   },
   {
    "titulo": "こうえんの テニスコート",
    "cabecera": [
     "時間[じかん]",
     "1時間[じかん]の お金[かね]"
    ],
    "filas": [
     [
      "9:00〜17:00",
      "1,000円[えん]"
     ],
     [
      "17:00〜21:00",
      "1,500円[えん]"
     ]
    ],
    "notas": [
     "※ よやくは 1週間[しゅうかん] 前[まえ]から できます。",
     "※ 雨[あめ]の 日[ひ]は つかえません。"
    ],
    "pregunta": "夜[よる] 6時[じ]から 2時間[じかん] テニスを します。いくら かかりますか。",
    "opciones": [
     "3,000円[えん]",
     "2,000円[えん]",
     "2,500円[えん]",
     "1,500円[えん]"
    ],
    "nota": "Por la tarde-noche 1.500 la hora × 2 = 3.000.",
    "es": "Pistas de tenis de un parque."
   },
   {
    "titulo": "しんかんせんの きっぷ (東京[とうきょう] → 大阪[おおさか])",
    "cabecera": [
     "",
     "時間[じかん]",
     "お金[かね]"
    ],
    "filas": [
     [
      "のぞみ",
      "2時間[じかん]30分[ぷん]",
      "14,000円[えん]"
     ],
     [
      "ひかり",
      "3時間[じかん]",
      "13,500円[えん]"
     ],
     [
      "こだま",
      "4時間[じかん]",
      "13,000円[えん]"
     ]
    ],
    "notas": [],
    "pregunta": "大阪[おおさか]まで 一番[いちばん] 早[はや]く 行[い]きたいです。どれに のりますか。",
    "opciones": [
     "のぞみ",
     "ひかり",
     "こだま",
     "どれでも 同[おな]じです"
    ],
    "nota": "La más rápida es のぞみ (2 h 30).",
    "es": "Tipos de tren bala entre Tokio y Osaka."
   },
   {
    "titulo": "日本語[にほんご]の クラス",
    "cabecera": [
     "クラス",
     "曜日[ひ]",
     "時間[じかん]"
    ],
    "filas": [
     [
      "A",
      "月[げつ]・水[すい]",
      "10:00〜12:00"
     ],
     [
      "B",
      "火[か]・木[もく]",
      "18:30〜20:30"
     ],
     [
      "C",
      "土[ど]",
      "13:00〜16:00"
     ]
    ],
    "notas": [
     "※ 1か月[げつ] 6,000円[えん]です。"
    ],
    "pregunta": "マリアさんは 月曜日[げつようび]から 金曜日[きんようび]まで、朝[あさ] 9時[じ]から 夕方[ゆうがた] 6時[じ]まで 仕事[しごと]が あります。どの クラスに 入[い]れますか。",
    "opciones": [
     "Bと C",
     "Aだけ",
     "Cだけ",
     "Aと C"
    ],
    "nota": "A es en horario de trabajo; B (18:30) y C (sábado) le encajan.",
    "es": "Horarios de unas clases de japonés."
   },
   {
    "titulo": "レストラン さくら ランチ",
    "cabecera": [
     "",
     "ランチ",
     "お金[かね]"
    ],
    "filas": [
     [
      "A",
      "さかな",
      "900円[えん]"
     ],
     [
      "B",
      "にく",
      "1,000円[えん]"
     ],
     [
      "C",
      "やさい",
      "800円[えん]"
     ]
    ],
    "notas": [
     "ランチは 11:00〜14:00",
     "※ コーヒーは ランチと いっしょなら 100円[えん]です。"
    ],
    "pregunta": "Bランチと コーヒーを たのみます。いくらですか。",
    "opciones": [
     "1,100円[えん]",
     "1,000円[えん]",
     "900円[えん]",
     "1,200円[えん]"
    ],
    "nota": "1.000 + 100.",
    "es": "Menú del día de un restaurante."
   },
   {
    "titulo": "としょかんの お知[し]らせ",
    "cabecera": [],
    "filas": [],
    "notas": [
     "12月[がつ] 28日[にち]から 1月[がつ] 3日[みっか]まで 休[やす]みです。",
     "休[やす]みの 前[まえ]に、本[ほん]は 一人[ひとり] 10さつまで 借[か]りる ことが できます。",
     "1月[がつ] 4日[よっか]から いつもどおり あきます。"
    ],
    "pregunta": "1月[がつ] 2日[ふつか]に としょかんへ 行[い]きました。どうでしたか。",
    "opciones": [
     "あいて いませんでした。",
     "10さつ 借[か]りました。",
     "いつもどおり あいて いました。",
     "午前[ごぜん]だけ あいて いました。"
    ],
    "nota": "Del 28 al 3, cerrado.",
    "es": "Aviso de cierre de fin de año de la biblioteca."
   },
   {
    "titulo": "やまだ びょういん",
    "cabecera": [
     "",
     "月[げつ]",
     "火[か]",
     "水[すい]",
     "木[もく]",
     "金[きん]",
     "土[ど]"
    ],
    "filas": [
     [
      "午前[ごぜん] 9:00〜12:00",
      "○",
      "○",
      "○",
      "○",
      "○",
      "○"
     ],
     [
      "午後[ごご] 3:00〜6:00",
      "○",
      "○",
      "✕",
      "○",
      "○",
      "✕"
     ]
    ],
    "notas": [
     "○: あいて います　✕: 休[やす]み",
     "※ 日曜日[にちようび]は 休[やす]みです。"
    ],
    "pregunta": "水曜日[すいようび]の 夕方[ゆうがた] 4時[じ]に びょういんへ 行[い]けますか。",
    "opciones": [
     "いいえ、行[い]けません。",
     "はい、行[い]けます。",
     "午前[ごぜん]だけ 行[い]けます。",
     "土曜日[どようび]だけ 行[い]けます。"
    ],
    "nota": "El miércoles por la tarde (午後) está cerrado.",
    "es": "Horario de una clínica."
   },
   {
    "titulo": "フリーマーケットの お知[し]らせ",
    "cabecera": [],
    "filas": [],
    "notas": [
     "日[ひ]: 6月[がつ] 15日[にち](日[にち]) 10:00〜15:00",
     "ところ: みどり こうえん",
     "雨[あめ]の 日[ひ]は 6月[がつ] 22日[にち](日[にち])に なります。",
     "店[みせ]を 出[だ]したい 人[ひと]は 6月[がつ] 1日[ついたち]までに 市[し]の じむしょへ 来[き]て ください。"
    ],
    "pregunta": "6月[がつ] 15日[にち]に 雨[あめ]が ふりました。フリーマーケットは どう なりますか。",
    "opciones": [
     "6月[がつ] 22日[にち]に なります。",
     "10時[じ]から 15時[じ]まで あります。",
     "中止[ちゅうし]です。",
     "6月[がつ] 1日[ついたち]に なります。"
    ],
    "nota": "Si llueve, se pasa al 22.",
    "es": "Aviso de un mercadillo."
   },
   {
    "titulo": "ホテル みなと",
    "cabecera": [
     "へや",
     "1ばんの お金[かね]"
    ],
    "filas": [
     [
      "一人[ひとり]の へや",
      "7,000円[えん]"
     ],
     [
      "二人[ふたり]の へや",
      "10,000円[えん]"
     ]
    ],
    "notas": [
     "※ 朝[あさ]ごはんは 一人[ひとり] 1,000円[えん]です。",
     "※ チェックインは 15時[じ]からです。"
    ],
    "pregunta": "二人[ふたり]で 1ばん とまって、二人[ふたり]とも 朝[あさ]ごはんを 食[た]べます。ぜんぶで いくらですか。",
    "opciones": [
     "12,000円[えん]",
     "11,000円[えん]",
     "10,000円[えん]",
     "17,000円[えん]"
    ],
    "nota": "Habitación doble 10.000 + 2 desayunos × 1.000.",
    "es": "Precios de un hotel."
   },
   {
    "titulo": "スポーツセンター",
    "cabecera": [
     "",
     "プール",
     "ジム"
    ],
    "filas": [
     [
      "月[げつ]〜金[きん]",
      "9:00〜21:00",
      "7:00〜22:00"
     ],
     [
      "土[ど]・日[にち]",
      "9:00〜18:00",
      "9:00〜18:00"
     ]
    ],
    "notas": [
     "※ 第[だい]2・第[だい]4月曜日[げつようび]は 休[やす]みです。"
    ],
    "pregunta": "日曜日[にちようび]の 夜[よる] 7時[じ]に ジムへ 行[い]けますか。",
    "opciones": [
     "いいえ、行[い]けません。",
     "はい、行[い]けます。",
     "プールだけ 行[い]けます。",
     "22時[じ]まで 行[い]けます。"
    ],
    "nota": "Los fines de semana cierra a las 18:00.",
    "es": "Horarios de un polideportivo."
   },
   {
    "titulo": "パンや ひまわり",
    "cabecera": [
     "パン",
     "1つ"
    ],
    "filas": [
     [
      "クリームパン",
      "150円[えん]"
     ],
     [
      "カレーパン",
      "180円[えん]"
     ],
     [
      "メロンパン",
      "160円[えん]"
     ]
    ],
    "notas": [
     "※ 夜[よる] 7時[じ]から ぜんぶ 半分[はんぶん]の ねだんに なります。"
    ],
    "pregunta": "夜[よる] 8時[じ]に カレーパンを 2つ 買[か]います。いくらですか。",
    "opciones": [
     "180円[えん]",
     "360円[えん]",
     "90円[えん]",
     "320円[えん]"
    ],
    "nota": "A partir de las 7 a mitad de precio: 90 × 2 = 180.",
    "es": "Precios de una panadería."
   },
   {
    "titulo": "えいがかんの 時間[じかん]",
    "cabecera": [
     "",
     "1回[かい]目[め]",
     "2回[かい]目[め]",
     "3回[かい]目[め]"
    ],
    "filas": [
     [
      "「やまの うた」",
      "10:00",
      "13:30",
      "18:00"
     ],
     [
      "「うみの ほし」",
      "11:00",
      "15:00",
      "19:30"
     ]
    ],
    "notas": [
     "※ えいがは 2時間[じかん]ぐらいです。"
    ],
    "pregunta": "5時[じ]ごろまでに えいがを 見[み]おわりたいです。「うみの ほし」は 何時[なんじ]の を 見[み]ますか。",
    "opciones": [
     "11:00",
     "15:00",
     "19:30",
     "13:30"
    ],
    "nota": "La de las 15:00 acaba a las 17:00 justas; la de las 11:00 seguro antes de las 5. Se busca la que acaba antes de las 5 sin pasarse: 11:00.",
    "es": "Horarios de un cine."
   },
   {
    "titulo": "にもつを おくる お金[かね]",
    "cabecera": [
     "大[おお]きさ",
     "近[ちか]く",
     "遠[とお]く"
    ],
    "filas": [
     [
      "小[しょう]",
      "600円[えん]",
      "900円[えん]"
     ],
     [
      "中[ちゅう]",
      "800円[えん]",
      "1,200円[えん]"
     ],
     [
      "大[だい]",
      "1,000円[えん]",
      "1,500円[えん]"
     ]
    ],
    "notas": [
     "※ 近[ちか]く: 同[おな]じ 県[けん]の 中[なか]",
     "※ 遠[とお]く: ほかの 県[けん]"
    ],
    "pregunta": "ちゅうくらいの にもつを ほかの 県[けん]に いる 友[とも]だちに おくります。いくらですか。",
    "opciones": [
     "1,200円[えん]",
     "800円[えん]",
     "900円[えん]",
     "1,500円[えん]"
    ],
    "nota": "Mediano y a otra provincia: 1.200.",
    "es": "Tarifas de envío de paquetes."
   },
   {
    "titulo": "じてんしゃを かります",
    "cabecera": [
     "時間[じかん]",
     "お金[かね]"
    ],
    "filas": [
     [
      "2時間[じかん]まで",
      "300円[えん]"
     ],
     [
      "4時間[じかん]まで",
      "500円[えん]"
     ],
     [
      "1日[いちにち]",
      "800円[えん]"
     ]
    ],
    "notas": [
     "あいて いる 時間[じかん]: 8:00〜20:00",
     "※ かえす とき、かぎを わすれないで ください。"
    ],
    "pregunta": "朝[あさ] 9時[じ]に かりて、午後[ごご] 3時[じ]に かえします。いくらですか。",
    "opciones": [
     "800円[えん]",
     "500円[えん]",
     "300円[えん]",
     "1,100円[えん]"
    ],
    "nota": "Seis horas: pasa de 4, así que se paga el día.",
    "es": "Alquiler de bicicletas."
   },
   {
    "titulo": "学校[がっこう]の ぎょうじ",
    "cabecera": [
     "月[げつ]",
     "ぎょうじ"
    ],
    "filas": [
     [
      "4月[がつ]",
      "にゅうがくしき"
     ],
     [
      "7月[がつ]",
      "なつやすみ (20日[はつか]から)"
     ],
     [
      "10月[がつ]",
      "スポーツの 日[ひ]"
     ],
     [
      "12月[がつ]",
      "ふゆやすみ (24日[にじゅうよっか]から)"
     ]
    ],
    "notas": [],
    "pregunta": "スポーツの 日[ひ]は 何月[なんがつ]ですか。",
    "opciones": [
     "10月[がつ]",
     "7月[がつ]",
     "4月[がつ]",
     "12月[がつ]"
    ],
    "nota": "「10月: スポーツの 日」.",
    "es": "Calendario de actos de la escuela."
   },
   {
    "titulo": "カラオケ うたごえ",
    "cabecera": [
     "",
     "1時間[じかん] 一人[ひとり]"
    ],
    "filas": [
     [
      "ひる (11:00〜18:00)",
      "400円[えん]"
     ],
     [
      "よる (18:00〜5:00)",
      "700円[えん]"
     ]
    ],
    "notas": [
     "※ 学生[がくせい]は ひる 300円[えん]です。",
     "※ 飲[の]み物[もの]は べつです。"
    ],
    "pregunta": "学生[がくせい] 3人[にん]で ひるに 2時間[じかん] うたいます。いくらですか。",
    "opciones": [
     "1,800円[えん]",
     "2,400円[えん]",
     "1,200円[えん]",
     "4,200円[えん]"
    ],
    "nota": "300 × 3 personas × 2 horas.",
    "es": "Tarifas de un karaoke."
   },
   {
    "titulo": "でんしゃの 時間[じかん] (みどり駅[えき])",
    "cabecera": [
     "行[い]き",
     "時間[じかん]"
    ],
    "filas": [
     [
      "さくら駅[えき] 行[い]き",
      "毎時[まいじ] 05分[ふん]・35分[ふん]"
     ],
     [
      "うみ駅[えき] 行[い]き",
      "毎時[まいじ] 20分[ぷん]・50分[ぷん]"
     ]
    ],
    "notas": [
     "※ さくら駅[えき]まで 10分[ぷん]、うみ駅[えき]まで 15分[ふん]です。"
    ],
    "pregunta": "9時[じ]15分[ふん]に みどり駅[えき]に つきました。うみ駅[えき]に 一番[いちばん] 早[はや]く つくのは 何時[なんじ]ですか。",
    "opciones": [
     "9時[じ]35分[ふん]",
     "9時[じ]20分[ぷん]",
     "9時[じ]50分[ぷん]",
     "10時[じ]05分[ふん]"
    ],
    "nota": "Sale a las 9:20 y tarda 15 minutos: 9:35.",
    "es": "Horario de trenes de una estación."
   },
   {
    "titulo": "コンサートの きっぷ",
    "cabecera": [
     "せき",
     "大人[おとな]",
     "学生[がくせい]"
    ],
    "filas": [
     [
      "S",
      "6,000円[えん]",
      "4,000円[えん]"
     ],
     [
      "A",
      "4,000円[えん]",
      "3,000円[えん]"
     ]
    ],
    "notas": [
     "※ 学生[がくせい]は 学生[がくせい]しょうを 見[み]せて ください。"
    ],
    "pregunta": "大学生[だいがくせい]の ケンさんは Aせきに すわりたいです。いくら はらいますか。",
    "opciones": [
     "3,000円[えん]",
     "4,000円[えん]",
     "6,000円[えん]",
     "2,000円[えん]"
    ],
    "nota": "Asiento A, estudiante: 3.000.",
    "es": "Entradas de un concierto."
   },
   {
    "titulo": "クリーニング",
    "cabecera": [
     "",
     "お金[かね]",
     "できる 日[ひ]"
    ],
    "filas": [
     [
      "シャツ",
      "200円[えん]",
      "つぎの 日[ひ]"
     ],
     [
      "ズボン",
      "500円[えん]",
      "2日[ふつか] あと"
     ],
     [
      "コート",
      "1,200円[えん]",
      "1週間[しゅうかん] あと"
     ]
    ],
    "notas": [
     "※ 朝[あさ] 10時[じ]までに 出[で]せば、シャツは その 日[ひ]の 夕方[ゆうがた]に できます。"
    ],
    "pregunta": "月曜日[げつようび]の 朝[あさ] 9時[じ]に シャツを 出[で]しました。いつ できますか。",
    "opciones": [
     "月曜日[げつようび]の 夕方[ゆうがた]",
     "火曜日[かようび]",
     "水曜日[すいようび]",
     "来週[らいしゅう]の 月曜日[げつようび]"
    ],
    "nota": "Antes de las 10, la camisa sale el mismo día por la tarde.",
    "es": "Tarifas de una tintorería."
   },
   {
    "titulo": "どうぶつえんの きっぷ",
    "cabecera": [
     "",
     "大人[おとな]",
     "中学生[ちゅうがくせい]",
     "小学生[しょうがくせい]"
    ],
    "filas": [
     [
      "",
      "600円[えん]",
      "300円[えん]",
      "むりょう"
     ]
    ],
    "notas": [
     "※ 65さい いじょうは むりょうです。",
     "休[やす]み: 月曜日[げつようび]"
    ],
    "pregunta": "40さいの 父[ちち]と 中学生[ちゅうがくせい]の 兄[あに]と 小学生[しょうがくせい]の わたしで 行[い]きます。いくらですか。",
    "opciones": [
     "900円[えん]",
     "1,200円[えん]",
     "600円[えん]",
     "1,500円[えん]"
    ],
    "nota": "600 + 300 + 0.",
    "es": "Precios de un zoológico."
   },
   {
    "titulo": "ピアノ教室[きょうしつ]",
    "cabecera": [
     "コース",
     "1か月[げつ]の 回数[かいすう]",
     "お金[かね]"
    ],
    "filas": [
     [
      "子[こ]ども",
      "4回[かい]",
      "5,000円[えん]"
     ],
     [
      "大人[おとな] A",
      "2回[かい]",
      "6,000円[えん]"
     ],
     [
      "大人[おとな] B",
      "4回[かい]",
      "10,000円[えん]"
     ]
    ],
    "notas": [
     "※ はじめての 人[ひと]は 1回[かい] むりょうで ためす ことが できます。"
    ],
    "pregunta": "大人[おとな]の 田中[たなか]さんは 1か月[げつ]に 4回[かい] ならいたいです。いくらですか。",
    "opciones": [
     "10,000円[えん]",
     "6,000円[えん]",
     "5,000円[えん]",
     "12,000円[えん]"
    ],
    "nota": "Adulto, cuatro clases: 10.000.",
    "es": "Precios de una academia de piano."
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
  },
  {
   "frase": "この かばんは おもいです。",
   "opciones": [
    "この かばんは かるくないです。",
    "この かばんは かるいです。",
    "この かばんは たかいです。",
    "この かばんは ちいさいです。"
   ],
   "es": "Este bolso pesa.",
   "nota": "おもい es lo contrario de かるい."
  },
  {
   "frase": "この みちは ひろいです。",
   "opciones": [
    "この みちは せまくないです。",
    "この みちは せまいです。",
    "この みちは ながいです。",
    "この みちは あぶないです。"
   ],
   "es": "Esta calle es ancha.",
   "nota": "ひろい ↔ せまい."
  },
  {
   "frase": "きょうは あついです。",
   "opciones": [
    "きょうは さむくないです。",
    "きょうは さむいです。",
    "きょうは すずしいです。",
    "きょうは あめです。"
   ],
   "es": "Hoy hace calor.",
   "nota": "あつい ↔ さむい."
  },
  {
   "frase": "この へやは あかるいです。",
   "opciones": [
    "この へやは くらくないです。",
    "この へやは くらいです。",
    "この へやは しずかです。",
    "この へやは ひろいです。"
   ],
   "es": "Esta habitación es luminosa.",
   "nota": "あかるい ↔ くらい."
  },
  {
   "frase": "この ペンは ふるいです。",
   "opciones": [
    "この ペンは あたらしくないです。",
    "この ペンは あたらしいです。",
    "この ペンは やすいです。",
    "この ペンは ながいです。"
   ],
   "es": "Este bolígrafo es viejo.",
   "nota": "ふるい ↔ あたらしい."
  },
  {
   "frase": "あの えきは とおいです。",
   "opciones": [
    "あの えきは ちかくないです。",
    "あの えきは ちかいです。",
    "あの えきは おおきいです。",
    "あの えきは べんりです。"
   ],
   "es": "Aquella estación está lejos.",
   "nota": "とおい ↔ ちかい."
  },
  {
   "frase": "わたしの へやは きたないです。",
   "opciones": [
    "わたしの へやは きれいじゃ ありません。",
    "わたしの へやは きれいです。",
    "わたしの へやは ひろいです。",
    "わたしの へやは しずかです。"
   ],
   "es": "Mi habitación está sucia.",
   "nota": "きたない ↔ きれい."
  },
  {
   "frase": "この しゅくだいは かんたんです。",
   "opciones": [
    "この しゅくだいは むずかしくないです。",
    "この しゅくだいは むずかしいです。",
    "この しゅくだいは ながいです。",
    "この しゅくだいは おおいです。"
   ],
   "es": "Estos deberes son fáciles.",
   "nota": "かんたん ≒ やさしい, lo contrario de むずかしい."
  },
  {
   "frase": "この こうえんは ひとが すくないです。",
   "opciones": [
    "この こうえんは ひとが おおくないです。",
    "この こうえんは ひとが おおいです。",
    "この こうえんは ひとが いません。",
    "この こうえんは にぎやかです。"
   ],
   "es": "En este parque hay poca gente.",
   "nota": "すくない ↔ おおい. いません sería «nadie»."
  },
  {
   "frase": "あの ひとは せが ひくいです。",
   "opciones": [
    "あの ひとは せが たかくないです。",
    "あの ひとは せが たかいです。",
    "あの ひとは わかいです。",
    "あの ひとは げんきです。"
   ],
   "es": "Esa persona es baja.",
   "nota": "せが ひくい ↔ せが たかい."
  },
  {
   "frase": "この くつは やすかったです。",
   "opciones": [
    "この くつは たかくなかったです。",
    "この くつは たかかったです。",
    "この くつは ちいさかったです。",
    "この くつは あたらしかったです。"
   ],
   "es": "Estos zapatos fueron baratos.",
   "nota": "やすい ↔ たかい, en pasado."
  },
  {
   "frase": "きのうは すずしかったです。",
   "opciones": [
    "きのうは あつくなかったです。",
    "きのうは あつかったです。",
    "きのうは さむかったです。",
    "きのうは あめでした。"
   ],
   "es": "Ayer hizo fresco.",
   "nota": "すずしい: ni calor ni frío; lo que seguro no hizo es calor."
  },
  {
   "frase": "あの みせの ひとは しんせつです。",
   "opciones": [
    "あの みせの ひとは やさしいです。",
    "あの みせの ひとは こわいです。",
    "あの みせの ひとは いそがしいです。",
    "あの みせの ひとは わかいです。"
   ],
   "es": "La gente de esa tienda es amable.",
   "nota": "しんせつ ≒ やさしい."
  },
  {
   "frase": "この まちは しずかです。",
   "opciones": [
    "この まちは うるさくないです。",
    "この まちは にぎやかです。",
    "この まちは きれいです。",
    "この まちは おおきいです。"
   ],
   "es": "Esta ciudad es tranquila.",
   "nota": "しずか ↔ うるさい / にぎやか."
  },
  {
   "frase": "わたしは いま いそがしいです。",
   "opciones": [
    "わたしは いま ひまじゃ ありません。",
    "わたしは いま ひまです。",
    "わたしは いま げんきです。",
    "わたしは いま つかれて います。"
   ],
   "es": "Ahora estoy ocupado.",
   "nota": "いそがしい ↔ ひま."
  },
  {
   "frase": "この カレーは からいです。",
   "opciones": [
    "この カレーは あまくないです。",
    "この カレーは あまいです。",
    "この カレーは つめたいです。",
    "この カレーは まずいです。"
   ],
   "es": "Este curry pica.",
   "nota": "からい ↔ あまい."
  },
  {
   "frase": "ここは えきから ちかいです。",
   "opciones": [
    "ここから えきまで あまり かかりません。",
    "ここから えきまで とても かかります。",
    "ここは えきの なかです。",
    "えきは ここから みえません。"
   ],
   "es": "Aquí está cerca de la estación.",
   "nota": "Cerca = se tarda poco."
  },
  {
   "frase": "あには わたしより 3さい うえです。",
   "opciones": [
    "わたしは あにより 3さい したです。",
    "わたしは あにより 3さい うえです。",
    "あには わたしと おなじ としです。",
    "あには 3さいです。"
   ],
   "es": "Mi hermano es tres años mayor que yo.",
   "nota": "Darle la vuelta: うえ pasa a した."
  },
  {
   "frase": "おとうとは わたしより せが たかいです。",
   "opciones": [
    "わたしは おとうとより せが ひくいです。",
    "わたしは おとうとより せが たかいです。",
    "おとうとは わたしより せが ひくいです。",
    "わたしと おとうとは おなじです。"
   ],
   "es": "Mi hermano pequeño es más alto que yo.",
   "nota": "Al girar la comparación, el adjetivo también cambia."
  },
  {
   "frase": "でんしゃは バスより はやいです。",
   "opciones": [
    "バスは でんしゃより おそいです。",
    "バスは でんしゃより はやいです。",
    "でんしゃは バスより おそいです。",
    "でんしゃと バスは おなじです。"
   ],
   "es": "El tren es más rápido que el autobús.",
   "nota": "はやい ↔ おそい."
  },
  {
   "frase": "この ほんは あの ほんより やすいです。",
   "opciones": [
    "あの ほんは この ほんより たかいです。",
    "あの ほんは この ほんより やすいです。",
    "この ほんは あの ほんより たかいです。",
    "この ほんと あの ほんは おなじ ねだんです。"
   ],
   "es": "Este libro es más barato que aquel.",
   "nota": "やすい ↔ たかい al girar."
  },
  {
   "frase": "わたしは にくより さかなが すきです。",
   "opciones": [
    "わたしは さかなの ほうが すきです。",
    "わたしは にくの ほうが すきです。",
    "わたしは にくも さかなも すきじゃ ありません。",
    "わたしは にくだけ たべます。"
   ],
   "es": "Prefiero el pescado a la carne.",
   "nota": "AよりBが すき = Bの ほうが すき."
  },
  {
   "frase": "にほんごは えいごより むずかしいです。",
   "opciones": [
    "えいごは にほんごより やさしいです。",
    "えいごは にほんごより むずかしいです。",
    "にほんごは えいごより やさしいです。",
    "にほんごと えいごは おなじです。"
   ],
   "es": "El japonés es más difícil que el inglés.",
   "nota": "むずかしい ↔ やさしい al girar."
  },
  {
   "frase": "クラスで たなかさんが いちばん わかいです。",
   "opciones": [
    "クラスで たなかさんより わかい ひとは いません。",
    "クラスで たなかさんが いちばん としうえです。",
    "クラスに たなかさんは いません。",
    "たなかさんは クラスで 2ばんめに わかいです。"
   ],
   "es": "Tanaka es el más joven de la clase.",
   "nota": "いちばん = nadie lo supera."
  },
  {
   "frase": "やまださんは わたしに じしょを かして くれました。",
   "opciones": [
    "わたしは やまださんに じしょを かりました。",
    "わたしは やまださんに じしょを かしました。",
    "やまださんは わたしに じしょを かりました。",
    "わたしは やまださんに じしょを あげました。"
   ],
   "es": "Yamada me prestó un diccionario.",
   "nota": "かして くれる (me presta) = かりる (yo tomo prestado)."
  },
  {
   "frase": "わたしは あねに セーターを もらいました。",
   "opciones": [
    "あねは わたしに セーターを くれました。",
    "わたしは あねに セーターを あげました。",
    "あねは わたしに セーターを もらいました。",
    "あねは セーターを かいました。"
   ],
   "es": "Mi hermana me dio un jersey.",
   "nota": "もらう ↔ くれる."
  },
  {
   "frase": "ははは わたしに てがみを おくりました。",
   "opciones": [
    "わたしは ははから てがみを もらいました。",
    "わたしは ははに てがみを おくりました。",
    "ははは わたしから てがみを もらいました。",
    "わたしは ははに てがみを かきました。"
   ],
   "es": "Mi madre me envió una carta.",
   "nota": "Desde el otro lado: yo la recibí."
  },
  {
   "frase": "たなかさんは リーさんに にほんごを おしえて います。",
   "opciones": [
    "リーさんは たなかさんに にほんごを ならって います。",
    "たなかさんは リーさんに にほんごを ならって います。",
    "リーさんは たなかさんに にほんごを おしえて います。",
    "たなかさんと リーさんは いっしょに ならって います。"
   ],
   "es": "Tanaka enseña japonés a Lee.",
   "nota": "おしえる (enseñar) ↔ ならう (aprender)."
  },
  {
   "frase": "せんせいは がくせいに しゅくだいを だしました。",
   "opciones": [
    "がくせいは せんせいから しゅくだいを もらいました。",
    "がくせいは せんせいに しゅくだいを だしました。",
    "せんせいは しゅくだいを しました。",
    "がくせいは しゅくだいが ありません。"
   ],
   "es": "El profesor puso deberes a los alumnos.",
   "nota": "Los alumnos los reciben."
  },
  {
   "frase": "わたしは ともだちに CDを かしました。",
   "opciones": [
    "ともだちは わたしの CDを かりました。",
    "わたしは ともだちの CDを かりました。",
    "ともだちは わたしに CDを かしました。",
    "わたしは ともだちに CDを あげました。"
   ],
   "es": "Le presté un CD a un amigo.",
   "nota": "かす ↔ かりる. あげる sería regalar."
  },
  {
   "frase": "まいしゅう すいようびに テニスを します。",
   "opciones": [
    "いっしゅうかんに いちど テニスを します。",
    "まいにち テニスを します。",
    "すいようびだけ テニスを しません。",
    "ときどき テニスを します。"
   ],
   "es": "Juego al tenis todos los miércoles.",
   "nota": "まいしゅう = una vez a la semana."
  },
  {
   "frase": "ときどき えいがを みに いきます。",
   "opciones": [
    "たまに えいがを みに いきます。",
    "まいにち えいがを みに いきます。",
    "ぜんぜん えいがを みに いきません。",
    "いつも えいがを みに いきます。"
   ],
   "es": "A veces voy al cine.",
   "nota": "ときどき ≒ たまに."
  },
  {
   "frase": "いつも あるいて がっこうへ いきます。",
   "opciones": [
    "まいにち あるいて がっこうへ いきます。",
    "ときどき あるいて がっこうへ いきます。",
    "バスで がっこうへ いきます。",
    "あるいて がっこうへ いきません。"
   ],
   "es": "Siempre voy andando a la escuela.",
   "nota": "いつも ≒ まいにち."
  },
  {
   "frase": "わたしは あまり テレビを みません。",
   "opciones": [
    "わたしは テレビを みる ことが すくないです。",
    "わたしは よく テレビを みます。",
    "わたしは テレビが すきです。",
    "わたしは テレビを もって いません。"
   ],
   "es": "Apenas veo la tele.",
   "nota": "あまり＋negativo = poco."
  },
  {
   "frase": "あには よく りょうりを します。",
   "opciones": [
    "あには りょうりを する ことが おおいです。",
    "あには ぜんぜん りょうりを しません。",
    "あには りょうりが へたです。",
    "あには りょうりを ならって います。"
   ],
   "es": "Mi hermano cocina a menudo.",
   "nota": "よく = con frecuencia."
  },
  {
   "frase": "けさ 6じに おきました。",
   "opciones": [
    "きょうの あさ 6じに おきました。",
    "きのうの あさ 6じに おきました。",
    "あしたの あさ 6じに おきます。",
    "きょうの よる 6じに ねました。"
   ],
   "es": "Esta mañana me levanté a las 6.",
   "nota": "けさ = きょうの あさ."
  },
  {
   "frase": "こんばん ともだちと しょくじを します。",
   "opciones": [
    "きょうの よる ともだちと しょくじを します。",
    "きのうの よる ともだちと しょくじを しました。",
    "あしたの よる ともだちと しょくじを します。",
    "きょうの あさ ともだちと しょくじを します。"
   ],
   "es": "Esta noche ceno con un amigo.",
   "nota": "こんばん = きょうの よる."
  },
  {
   "frase": "おととい えいがを みました。",
   "opciones": [
    "ふつか まえに えいがを みました。",
    "きのう えいがを みました。",
    "みっか まえに えいがを みました。",
    "あさって えいがを みます。"
   ],
   "es": "Anteayer vi una película.",
   "nota": "おととい = hace dos días."
  },
  {
   "frase": "らいねん にほんへ いきます。",
   "opciones": [
    "つぎの とし にほんへ いきます。",
    "ことし にほんへ いきます。",
    "きょねん にほんへ いきました。",
    "らいげつ にほんへ いきます。"
   ],
   "es": "El año que viene voy a Japón.",
   "nota": "らいねん = el próximo año."
  },
  {
   "frase": "せんげつ ひっこしを しました。",
   "opciones": [
    "ひとつき まえに ひっこしを しました。",
    "いっしゅうかん まえに ひっこしを しました。",
    "らいげつ ひっこしを します。",
    "きょねん ひっこしを しました。"
   ],
   "es": "El mes pasado me mudé.",
   "nota": "せんげつ = el mes anterior."
  },
  {
   "frase": "きょねん けっこんしました。",
   "opciones": [
    "いちねん まえに けっこんしました。",
    "らいねん けっこんします。",
    "ことし けっこんしました。",
    "ふつか まえに けっこんしました。"
   ],
   "es": "Me casé el año pasado.",
   "nota": "きょねん = hace un año."
  },
  {
   "frase": "いま 3じ 30ぷんです。",
   "opciones": [
    "いま 3じはんです。",
    "いま 3じです。",
    "いま 3じ 15ふんです。",
    "いま 4じはんです。"
   ],
   "es": "Son las 3:30.",
   "nota": "30 minutos = はん."
  },
  {
   "frase": "かいぎは 1じかん かかりました。",
   "opciones": [
    "かいぎは 60ぷん かかりました。",
    "かいぎは 30ぷん かかりました。",
    "かいぎは 1じに おわりました。",
    "かいぎは 1じに はじまりました。"
   ],
   "es": "La reunión duró una hora.",
   "nota": "1じかん = 60ぷん."
  },
  {
   "frase": "この こうえんは ひろくて、きが おおいです。",
   "opciones": [
    "この こうえんは おおきくて、きが たくさん あります。",
    "この こうえんは せまくて、きが すくないです。",
    "この こうえんは ひろいですが、きが ありません。",
    "この こうえんは ちいさくて、きが おおいです。"
   ],
   "es": "Este parque es amplio y tiene muchos árboles.",
   "nota": "おおい ≒ たくさん ある."
  },
  {
   "frase": "わたしの ちちは びょういんで はたらいて います。",
   "opciones": [
    "わたしの ちちは いしゃか かんごしです。",
    "わたしの ちちは びょうきです。",
    "わたしの ちちは びょういんへ いきました。",
    "わたしの ちちは がっこうの せんせいです。"
   ],
   "es": "Mi padre trabaja en un hospital.",
   "nota": "Trabajar en un hospital ≠ estar enfermo."
  },
  {
   "frase": "ははは だいがくで おしえて います。",
   "opciones": [
    "ははは だいがくの せんせいです。",
    "ははは だいがくせいです。",
    "ははは だいがくで べんきょうして います。",
    "ははは だいがくへ いきません。"
   ],
   "es": "Mi madre enseña en la universidad.",
   "nota": "Quien enseña es せんせい."
  },
  {
   "frase": "あの ひとは わたしの おじです。",
   "opciones": [
    "あの ひとは わたしの ちちの おとうとです。",
    "あの ひとは わたしの ちちです。",
    "あの ひとは わたしの おとうとです。",
    "あの ひとは わたしの そふです。"
   ],
   "es": "Ese señor es mi tío.",
   "nota": "おじ = hermano del padre o de la madre."
  },
  {
   "frase": "あの ひとは わたしの そぼです。",
   "opciones": [
    "あの ひとは わたしの ちちの ははです。",
    "あの ひとは わたしの ははです。",
    "あの ひとは わたしの あねです。",
    "あの ひとは わたしの おばです。"
   ],
   "es": "Esa señora es mi abuela.",
   "nota": "そぼ = madre del padre o de la madre."
  },
  {
   "frase": "わたしは ひとりっこです。",
   "opciones": [
    "わたしには きょうだいが いません。",
    "わたしには あにが います。",
    "わたしは ひとりで すんで います。",
    "わたしには こどもが ひとり います。"
   ],
   "es": "Soy hijo único.",
   "nota": "ひとりっこ = sin hermanos."
  },
  {
   "frase": "ここで たばこを すわないで ください。",
   "opciones": [
    "ここは きんえんです。",
    "ここで たばこを すって ください。",
    "ここで たばこを かって ください。",
    "ここは たばこを うって います。"
   ],
   "es": "No fume aquí, por favor.",
   "nota": "きんえん = prohibido fumar."
  },
  {
   "frase": "へやの でんきを けして ください。",
   "opciones": [
    "へやを くらく して ください。",
    "へやを あかるく して ください。",
    "へやの でんきを つけて ください。",
    "へやを でて ください。"
   ],
   "es": "Apaga la luz de la habitación.",
   "nota": "Apagar la luz = dejarlo oscuro."
  },
  {
   "frase": "まどを あけて ください。",
   "opciones": [
    "まどを しめないで ください。",
    "まどを しめて ください。",
    "まどを ふいて ください。",
    "まどの そばに いて ください。"
   ],
   "es": "Abre la ventana, por favor.",
   "nota": "あける ↔ しめる."
  },
  {
   "frase": "もっと ゆっくり はなして ください。",
   "opciones": [
    "もう すこし おそく はなして ください。",
    "もっと はやく はなして ください。",
    "もっと おおきい こえで はなして ください。",
    "はなさないで ください。"
   ],
   "es": "Habla más despacio, por favor.",
   "nota": "ゆっくり ≒ おそく."
  },
  {
   "frase": "あしたの かいぎに おくれないで ください。",
   "opciones": [
    "あしたの かいぎには じかんどおりに きて ください。",
    "あしたの かいぎには こないで ください。",
    "あしたの かいぎは おそく はじまります。",
    "あしたの かいぎは ありません。"
   ],
   "es": "No llegues tarde a la reunión de mañana.",
   "nota": "No llegar tarde = venir puntual."
  },
  {
   "frase": "この くすりは しょくじの あとで のみます。",
   "opciones": [
    "ごはんを たべてから この くすりを のみます。",
    "ごはんを たべる まえに この くすりを のみます。",
    "この くすりを のんでから ごはんを たべます。",
    "ごはんを たべながら くすりを のみます。"
   ],
   "es": "Esta medicina se toma después de comer.",
   "nota": "〜の あとで ≒ 〜てから."
  },
  {
   "frase": "ねる まえに はを みがきます。",
   "opciones": [
    "はを みがいてから ねます。",
    "ねてから はを みがきます。",
    "あさ はを みがきます。",
    "ねながら はを みがきます。"
   ],
   "es": "Me lavo los dientes antes de dormir.",
   "nota": "A antes de B = B después de A."
  },
  {
   "frase": "しごとが おわってから、のみに いきます。",
   "opciones": [
    "しごとの あとで のみに いきます。",
    "しごとの まえに のみに いきます。",
    "しごとを しながら のみます。",
    "しごとが ないので のみに いきます。"
   ],
   "es": "Después del trabajo me voy a tomar algo.",
   "nota": "〜てから ≒ 〜の あとで."
  },
  {
   "frase": "わたしは スペインごが わかります。",
   "opciones": [
    "わたしは スペインごが できます。",
    "わたしは スペインごを ならいたいです。",
    "わたしは スペインごが わかりません。",
    "わたしは スペインへ いきました。"
   ],
   "es": "Entiendo español.",
   "nota": "わかる ≒ できる (saber un idioma)."
  },
  {
   "frase": "リーさんは ギターが ひけます。",
   "opciones": [
    "リーさんは ギターを ひく ことが できます。",
    "リーさんは ギターを かいました。",
    "リーさんは ギターを ならいたいです。",
    "リーさんは ギターが きらいです。"
   ],
   "es": "Lee sabe tocar la guitarra.",
   "nota": "Potencial ≒ 〜ことが できます."
  },
  {
   "frase": "わたしは およげません。",
   "opciones": [
    "わたしは およぐ ことが できません。",
    "わたしは およぐのが すきです。",
    "わたしは きょう およぎません。",
    "わたしは まいにち およぎます。"
   ],
   "es": "No sé nadar.",
   "nota": "Potencial negativo ≒ 〜ことが できません."
  },
  {
   "frase": "わたしは すしを たべた ことが ありません。",
   "opciones": [
    "わたしは まだ いちども すしを たべて いません。",
    "わたしは すしが すきです。",
    "わたしは きのう すしを たべました。",
    "わたしは よく すしを たべます。"
   ],
   "es": "Nunca he comido sushi.",
   "nota": "〜た ことが ない = ni una vez."
  },
  {
   "frase": "ふじさんに のぼった ことが あります。",
   "opciones": [
    "まえに ふじさんに のぼりました。",
    "ふじさんに のぼりたいです。",
    "ふじさんに のぼって います。",
    "ふじさんに のぼった ことは ありません。"
   ],
   "es": "He subido alguna vez al Fuji.",
   "nota": "Experiencia pasada."
  },
  {
   "frase": "あした あめが ふるかもしれません。",
   "opciones": [
    "あした あめが ふるか どうか わかりません。",
    "あした かならず あめが ふります。",
    "あした あめは ふりません。",
    "きのう あめが ふりました。"
   ],
   "es": "Puede que mañana llueva.",
   "nota": "かもしれない = posibilidad, no seguridad."
  },
  {
   "frase": "この みせは ゆうめいです。",
   "opciones": [
    "この みせは みんなが しって います。",
    "この みせは あたらしいです。",
    "この みせは だれも しりません。",
    "この みせは たかいです。"
   ],
   "es": "Esta tienda es famosa.",
   "nota": "ゆうめい = la conoce todo el mundo."
  },
  {
   "frase": "たなかさんは にほんごが じょうずに なりました。",
   "opciones": [
    "たなかさんは まえより にほんごが よく できます。",
    "たなかさんは にほんごが へたに なりました。",
    "たなかさんは にほんごを はじめました。",
    "たなかさんは にほんごを やめました。"
   ],
   "es": "Tanaka ha mejorado en japonés.",
   "nota": "〜に なる = cambio."
  },
  {
   "frase": "さむく なりましたね。",
   "opciones": [
    "まえより さむいですね。",
    "まえより あたたかいですね。",
    "まえと おなじですね。",
    "まだ あついですね。"
   ],
   "es": "Ha empezado a hacer frío.",
   "nota": "〜く なる = antes no, ahora sí."
  },
  {
   "frase": "おなかが いっぱいです。",
   "opciones": [
    "もう たくさん たべました。",
    "まだ なにも たべて いません。",
    "おなかが すきました。",
    "おなかが いたいです。"
   ],
   "es": "Estoy lleno.",
   "nota": "おなかが いっぱい ↔ おなかが すいた."
  },
  {
   "frase": "のどが かわきました。",
   "opciones": [
    "なにか のみたいです。",
    "なにか たべたいです。",
    "のどが いたいです。",
    "ねむいです。"
   ],
   "es": "Tengo sed.",
   "nota": "Sed = quiero beber."
  },
  {
   "frase": "きょうは つかれました。",
   "opciones": [
    "きょうは たくさん はたらきました。",
    "きょうは げんきです。",
    "きょうは ひまでした。",
    "きょうは よく ねました。"
   ],
   "es": "Hoy estoy cansado.",
   "nota": "Cansado: trabajó mucho."
  },
  {
   "frase": "わたしは まいあさ シャワーを あびます。",
   "opciones": [
    "わたしは まいあさ からだを あらいます。",
    "わたしは まいあさ ふくを きます。",
    "わたしは まいあさ はを みがきます。",
    "わたしは まいあさ かおを あらいません。"
   ],
   "es": "Todas las mañanas me ducho.",
   "nota": "シャワーを あびる ≒ lavarse el cuerpo."
  },
  {
   "frase": "ケーキを ふたつに きりました。",
   "opciones": [
    "ケーキを はんぶんに しました。",
    "ケーキを ふたつ かいました。",
    "ケーキを ぜんぶ たべました。",
    "ケーキを ふたつ つくりました。"
   ],
   "es": "Corté la tarta en dos.",
   "nota": "En dos = por la mitad."
  },
  {
   "frase": "この しなものは ただです。",
   "opciones": [
    "この しなものは おかねが いりません。",
    "この しなものは とても たかいです。",
    "この しなものは うって いません。",
    "この しなものは やすく ありません。"
   ],
   "es": "Este artículo es gratis.",
   "nota": "ただ = gratis."
  },
  {
   "frase": "この みせは 24じかん あいて います。",
   "opciones": [
    "この みせは いつでも はいれます。",
    "この みせは よる しまります。",
    "この みせは あさだけ あいて います。",
    "この みせは やすみが おおいです。"
   ],
   "es": "Esta tienda abre las 24 horas.",
   "nota": "24 horas = siempre."
  },
  {
   "frase": "わたしは らいしゅう くにへ かえる つもりです。",
   "opciones": [
    "わたしは らいしゅう くにへ かえりたいと おもって います。",
    "わたしは せんしゅう くにへ かえりました。",
    "わたしは くにへ かえりたく ありません。",
    "わたしは らいしゅう にほんへ きます。"
   ],
   "es": "Pienso volver a mi país la semana que viene.",
   "nota": "つもり = intención."
  },
  {
   "frase": "ここに なまえを かいて ください。",
   "opciones": [
    "ここに なまえを かかなければ なりません。",
    "ここに なまえを かかないで ください。",
    "ここに なまえを かいても いいです。",
    "ここは なまえを かく ところでは ありません。"
   ],
   "es": "Escribe aquí tu nombre, por favor.",
   "nota": "Una petición: hay que hacerlo."
  },
  {
   "frase": "しゅくだいを しなくても いいです。",
   "opciones": [
    "しゅくだいは しなくて だいじょうぶです。",
    "しゅくだいを しなければ なりません。",
    "しゅくだいを して ください。",
    "しゅくだいを しては いけません。"
   ],
   "es": "No hace falta hacer los deberes.",
   "nota": "〜なくても いい = no es necesario."
  },
  {
   "frase": "この へやに はいっては いけません。",
   "opciones": [
    "この へやに はいらないで ください。",
    "この へやに はいって ください。",
    "この へやに はいっても いいです。",
    "この へやに はいりたいです。"
   ],
   "es": "No se puede entrar en esta habitación.",
   "nota": "〜ては いけません ≒ 〜ないで ください."
  },
  {
   "frase": "わたしは かぜを ひきました。",
   "opciones": [
    "わたしは びょうきに なりました。",
    "わたしは げんきに なりました。",
    "わたしは かぜが すきです。",
    "わたしは かぜを みました。"
   ],
   "es": "Me he resfriado.",
   "nota": "かぜを ひく = ponerse enfermo."
  },
  {
   "frase": "この シャツは わたしに ちょうど いいです。",
   "opciones": [
    "この シャツは わたしの サイズに あって います。",
    "この シャツは わたしには おおきいです。",
    "この シャツは わたしには ちいさいです。",
    "この シャツは わたしの では ありません。"
   ],
   "es": "Esta camisa me queda justa.",
   "nota": "ちょうど いい = la talla adecuada."
  },
  {
   "frase": "たなかさんは めがねを かけて います。",
   "opciones": [
    "たなかさんは めがねを して います。",
    "たなかさんは めがねを かいました。",
    "たなかさんは めがねを さがして います。",
    "たなかさんは めがねを はずしました。"
   ],
   "es": "Tanaka lleva gafas.",
   "nota": "めがねを かける ≒ めがねを する."
  },
  {
   "frase": "やまださんは あかい ぼうしを かぶって います。",
   "opciones": [
    "やまださんの あたまに あかい ぼうしが あります。",
    "やまださんは あかい ぼうしを もって います。",
    "やまださんは あかい ぼうしを かいました。",
    "やまださんの ぼうしは あかく ありません。"
   ],
   "es": "Yamada lleva un sombrero rojo.",
   "nota": "かぶる = en la cabeza."
  },
  {
   "frase": "この えいがは こわかったです。",
   "opciones": [
    "この えいがを みて、こわく なりました。",
    "この えいがは おもしろかったです。",
    "この えいがは みじかかったです。",
    "この えいがは たのしかったです。"
   ],
   "es": "Esta película daba miedo.",
   "nota": "こわい = da miedo."
  },
  {
   "frase": "みちが こんで います。",
   "opciones": [
    "くるまが たくさん はしって います。",
    "みちに くるまが ありません。",
    "みちが ひろいです。",
    "みちが ぬれて います。"
   ],
   "es": "Hay atasco.",
   "nota": "こむ = hay mucha gente o muchos coches."
  },
  {
   "frase": "でんしゃが すいて います。",
   "opciones": [
    "でんしゃに ひとが すくないです。",
    "でんしゃに ひとが おおいです。",
    "でんしゃが おくれて います。",
    "でんしゃが とまって います。"
   ],
   "es": "El tren va vacío.",
   "nota": "すく ↔ こむ."
  },
  {
   "frase": "リーさんは にほんに すんで います。",
   "opciones": [
    "リーさんの うちは にほんに あります。",
    "リーさんは にほんへ りょこうに いきます。",
    "リーさんは にほんで うまれました。",
    "リーさんは にほんを しりません。"
   ],
   "es": "Lee vive en Japón.",
   "nota": "すむ = vivir; su casa está allí."
  },
  {
   "frase": "あの ひとは かいしゃいんです。",
   "opciones": [
    "あの ひとは かいしゃで はたらいて います。",
    "あの ひとは がくせいです。",
    "あの ひとは かいしゃを やめました。",
    "あの ひとは かいしゃを つくりました。"
   ],
   "es": "Esa persona es empleado de una empresa.",
   "nota": "かいしゃいん = trabaja en una empresa."
  },
  {
   "frase": "この こどもは 6さいです。",
   "opciones": [
    "この こどもは らいねん 7さいに なります。",
    "この こどもは きょねん 6さいでした。",
    "この こどもは 6さいに なりません。",
    "この こどもは 7さいです。"
   ],
   "es": "Este niño tiene seis años.",
   "nota": "El año que viene tendrá siete."
  },
  {
   "frase": "わたしは めがねが ないと、よく みえません。",
   "opciones": [
    "わたしは めが わるいです。",
    "わたしは めが いいです。",
    "わたしは めがねが きらいです。",
    "わたしは めがねを なくしました。"
   ],
   "es": "Sin gafas no veo bien.",
   "nota": "めが わるい = ver mal."
  },
  {
   "frase": "ここは としょかんです。",
   "opciones": [
    "ここは ほんを かりる ところです。",
    "ここは ほんを かう ところです。",
    "ここは ほんを つくる ところです。",
    "ここは ほんを うる ところです。"
   ],
   "es": "Esto es una biblioteca.",
   "nota": "Donde se toman libros prestados."
  },
  {
   "frase": "ここは ゆうびんきょくです。",
   "opciones": [
    "ここは てがみや にもつを おくる ところです。",
    "ここは おかねを かりる ところです。",
    "ここは くすりを かう ところです。",
    "ここは ほんを よむ ところです。"
   ],
   "es": "Esto es una oficina de correos.",
   "nota": "Se envían cartas y paquetes."
  },
  {
   "frase": "ここは くうこうです。",
   "opciones": [
    "ここは ひこうきに のる ところです。",
    "ここは でんしゃに のる ところです。",
    "ここは ふねに のる ところです。",
    "ここは バスを まつ ところです。"
   ],
   "es": "Esto es un aeropuerto.",
   "nota": "Se coge el avión."
  },
  {
   "frase": "わたしは まいばん にっきを つけます。",
   "opciones": [
    "わたしは まいばん その ひの ことを かきます。",
    "わたしは まいばん ほんを よみます。",
    "わたしは まいばん てがみを おくります。",
    "わたしは まいばん テレビを みます。"
   ],
   "es": "Escribo un diario cada noche.",
   "nota": "にっき = lo que pasó ese día."
  },
  {
   "frase": "あしたは がっこうが やすみです。",
   "opciones": [
    "あしたは じゅぎょうが ありません。",
    "あしたは じゅぎょうが あります。",
    "あしたは しけんが あります。",
    "あしたは がっこうへ いかなければ なりません。"
   ],
   "es": "Mañana no hay clase.",
   "nota": "やすみ = no hay."
  },
  {
   "frase": "これは わたしが かいた えです。",
   "opciones": [
    "わたしが この えを かきました。",
    "わたしは この えを かいました。",
    "わたしは この えが すきです。",
    "わたしは この えを もらいました。"
   ],
   "es": "Este es un cuadro que pinté yo.",
   "nota": "かいた: lo dibujé (no 買った)."
  },
  {
   "frase": "わたしは にほんの まんがを あつめて います。",
   "opciones": [
    "わたしは にほんの まんがを たくさん もって います。",
    "わたしは にほんの まんがを よみません。",
    "わたしは にほんの まんがを うって います。",
    "わたしは にほんの まんがを かいて います。"
   ],
   "es": "Colecciono manga japonés.",
   "nota": "あつめる = juntar muchos."
  },
  {
   "frase": "たなかさんは くるまを うんてんする ことが できます。",
   "opciones": [
    "たなかさんは めんきょを もって います。",
    "たなかさんは くるまを もって いません。",
    "たなかさんは くるまが きらいです。",
    "たなかさんは くるまを なおして います。"
   ],
   "es": "Tanaka sabe conducir.",
   "nota": "Saber conducir ≒ tener carné."
  },
  {
   "frase": "この ケーキは ははが つくりました。",
   "opciones": [
    "この ケーキは ははの てづくりです。",
    "この ケーキは みせで かいました。",
    "この ケーキは ははに もらいました。",
    "この ケーキは わたしが つくりました。"
   ],
   "es": "Esta tarta la hizo mi madre.",
   "nota": "てづくり = hecho a mano."
  },
  {
   "frase": "この まちには びょういんが ひとつも ありません。",
   "opciones": [
    "この まちに びょういんは ないです。",
    "この まちには びょういんが たくさん あります。",
    "この まちには びょういんが ひとつ あります。",
    "この まちの びょういんは ちいさいです。"
   ],
   "es": "En esta ciudad no hay ni un hospital.",
   "nota": "ひとつも＋negativo = ninguno."
  },
  {
   "frase": "きのうは どこへも いきませんでした。",
   "opciones": [
    "きのうは ずっと うちに いました。",
    "きのうは いろいろな ところへ いきました。",
    "きのうは がっこうへ いきました。",
    "きのうは どこかへ いきました。"
   ],
   "es": "Ayer no fui a ningún sitio.",
   "nota": "どこへも＋negativo = ninguna parte."
  },
  {
   "frase": "だれも こたえが わかりませんでした。",
   "opciones": [
    "こたえが わかった ひとは いませんでした。",
    "みんな こたえが わかりました。",
    "だれか こたえが わかりました。",
    "こたえは かんたんでした。"
   ],
   "es": "Nadie supo la respuesta.",
   "nota": "だれも＋negativo = nadie."
  },
  {
   "frase": "ゆうびんきょくは ぎんこうの となりに あります。",
   "opciones": [
    "ゆうびんきょくと ぎんこうは ならんで います。",
    "ゆうびんきょくは ぎんこうの なかに あります。",
    "ゆうびんきょくは ぎんこうから とおいです。",
    "ゆうびんきょくは ぎんこうの まえに あります。"
   ],
   "es": "Correos está al lado del banco.",
   "nota": "となり = uno junto al otro."
  },
  {
   "frase": "つくえの うえに ほんが あります。",
   "opciones": [
    "ほんは つくえの うえです。",
    "つくえは ほんの うえです。",
    "ほんは つくえの したに あります。",
    "つくえの なかに ほんが あります。"
   ],
   "es": "Encima de la mesa hay un libro.",
   "nota": "Lo mismo dicho desde el libro."
  },
  {
   "frase": "いぬは ねこの うしろに います。",
   "opciones": [
    "ねこは いぬの まえに います。",
    "ねこは いぬの うしろに います。",
    "いぬは ねこの まえに います。",
    "いぬと ねこは となりです。"
   ],
   "es": "El perro está detrás del gato.",
   "nota": "うしろ ↔ まえ al girar."
  },
  {
   "frase": "あの レストランは おいしくて やすいです。",
   "opciones": [
    "あの レストランは あじが よくて、たかく ありません。",
    "あの レストランは まずくて たかいです。",
    "あの レストランは おいしいですが、たかいです。",
    "あの レストランは やすいですが、まずいです。"
   ],
   "es": "Ese restaurante es bueno y barato.",
   "nota": "おいしい ≒ あじが いい; やすい = たかく ない."
  },
  {
   "frase": "わたしは まいにち 8じかん はたらきます。",
   "opciones": [
    "わたしの しごとは 1にち 8じかんです。",
    "わたしは 8じに しごとを はじめます。",
    "わたしは 8じに しごとが おわります。",
    "わたしは しゅうに 8じかん はたらきます。"
   ],
   "es": "Trabajo ocho horas al día.",
   "nota": "Duración, no hora del reloj."
  },
  {
   "frase": "あの みせは きょう しまって います。",
   "opciones": [
    "あの みせは きょう やすみです。",
    "あの みせは きょう あいて います。",
    "あの みせは あたらしく できました。",
    "あの みせは きょう こんで います。"
   ],
   "es": "Esa tienda hoy está cerrada.",
   "nota": "しまって いる ≒ やすみ."
  },
  {
   "frase": "わたしは にほんごの じしょが ほしいです。",
   "opciones": [
    "わたしは にほんごの じしょを かいたいです。",
    "わたしは にほんごの じしょを もって います。",
    "わたしは にほんごの じしょを うりたいです。",
    "わたしは にほんごの じしょが いりません。"
   ],
   "es": "Quiero un diccionario de japonés.",
   "nota": "ほしい ≒ 〜を かいたい / 手に入れたい."
  },
  {
   "frase": "はしって えきへ いきました。",
   "opciones": [
    "いそいで えきへ いきました。",
    "ゆっくり えきへ いきました。",
    "バスで えきへ いきました。",
    "えきへ いきませんでした。"
   ],
   "es": "Fui corriendo a la estación.",
   "nota": "Corriendo = con prisa."
  },
  {
   "frase": "この にもつは わたしが もちます。",
   "opciones": [
    "この にもつは わたしが はこびます。",
    "この にもつは あなたが もって ください。",
    "この にもつは いりません。",
    "この にもつは わたしのでは ありません。"
   ],
   "es": "Este paquete lo llevo yo.",
   "nota": "もつ ≒ はこぶ (llevar)."
  },
  {
   "frase": "ちちは いま しゅっちょうちゅうです。",
   "opciones": [
    "ちちは いま しごとで とおくへ いって います。",
    "ちちは いま うちで やすんで います。",
    "ちちは いま びょういんに います。",
    "ちちは いま りょこうを たのしんで います。"
   ],
   "es": "Mi padre está de viaje de trabajo.",
   "nota": "しゅっちょう = viaje por trabajo."
  },
  {
   "frase": "この もんだいは ぜんぜん わかりません。",
   "opciones": [
    "この もんだいは すこしも わかりません。",
    "この もんだいは よく わかります。",
    "この もんだいは すこし わかります。",
    "この もんだいは かんたんです。"
   ],
   "es": "No entiendo nada este problema.",
   "nota": "ぜんぜん ≒ すこしも (+negativo)."
  },
  {
   "frase": "わたしは あさごはんを たべないで、がっこうへ きました。",
   "opciones": [
    "わたしは なにも たべないで、がっこうへ きました。",
    "わたしは あさごはんを たべてから、がっこうへ きました。",
    "わたしは がっこうで あさごはんを たべました。",
    "わたしは あさごはんを たべながら、きました。"
   ],
   "es": "Vine a clase sin desayunar.",
   "nota": "〜ないで = sin hacer."
  },
  {
   "frase": "あの ふたりは きょうだいです。",
   "opciones": [
    "あの ふたりは おなじ りょうしんの こどもです。",
    "あの ふたりは ともだちです。",
    "あの ふたりは ふうふです。",
    "あの ふたりは せんせいと がくせいです。"
   ],
   "es": "Esos dos son hermanos.",
   "nota": "きょうだい = mismos padres."
  },
  {
   "frase": "たなかさんと すずきさんは ふうふです。",
   "opciones": [
    "たなかさんと すずきさんは けっこんして います。",
    "たなかさんと すずきさんは きょうだいです。",
    "たなかさんと すずきさんは おなじ かいしゃです。",
    "たなかさんと すずきさんは あった ことが ありません。"
   ],
   "es": "Tanaka y Suzuki son matrimonio.",
   "nota": "ふうふ = casados."
  },
  {
   "frase": "この しごとは あした までに おわらせて ください。",
   "opciones": [
    "この しごとを きょうか あした おわって ください。",
    "この しごとを あさって はじめて ください。",
    "この しごとは しなくても いいです。",
    "この しごとは らいしゅう で いいです。"
   ],
   "es": "Termina este trabajo antes de mañana.",
   "nota": "までに = como tarde."
  },
  {
   "frase": "やまださんは いま るすです。",
   "opciones": [
    "やまださんは いま うちに いません。",
    "やまださんは いま うちに います。",
    "やまださんは いま ねて います。",
    "やまださんは いま でんわして います。"
   ],
   "es": "Yamada no está en casa ahora.",
   "nota": "るす = ausente."
  }
 ],
 "escucha": {
  "tarea": [
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は 何[なに]を 買[か]いますか。",
    "dialogo": [
     [
      "M",
      "あしたの パーティーの 飲[の]み物[もの]、何[なに]を 買[か]いましょうか。"
     ],
     [
      "F",
      "ジュースは もう ありますから、ビールを 買[か]って ください。"
     ],
     [
      "M",
      "おちゃは いりませんか。"
     ],
     [
      "F",
      "おちゃは わたしが 持[も]って 行[い]きます。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は 何[なに]を 買[か]いますか。",
    "opciones": [
     "ビール",
     "ジュース",
     "おちゃ",
     "ジュースと ビール"
    ],
    "nota": "Las bebidas: el zumo ya lo hay y el té lo lleva ella; él compra cerveza.",
    "es": "Una fiesta: quién compra qué bebida."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 電話[でんわ]で 話[はな]して います。二人[ふたり]は どこで 会[あ]いますか。",
    "dialogo": [
     [
      "F",
      "あした、えきの まえで 会[あ]いましょうか。"
     ],
     [
      "M",
      "えきの まえは 人[ひと]が 多[おお]いですから、ぎんこうの となりの きっさてんは どうですか。"
     ],
     [
      "F",
      "いいですね。じゃ、十時[じゅうじ]に。"
     ]
    ],
    "pregunta": "二人[ふたり]は どこで 会[あ]いますか。",
    "opciones": [
     "ぎんこうの となりの きっさてん",
     "えきの まえ",
     "ぎんこうの まえ",
     "えきの 中[なか]の きっさてん"
    ],
    "nota": "Descartan la estación porque hay mucha gente.",
    "es": "Quedar por teléfono."
   },
   {
    "situacion": "学校[がっこう]で 先生[せんせい]が 話[はな]して います。学生[がくせい]は あした 何時[なんじ]までに 学校[がっこう]へ 来[き]ますか。",
    "dialogo": [
     [
      "F",
      "あしたは テストが あります。テストは 九時[くじ]からですが、八時[はちじ]半[はん]までに 来[き]て ください。"
     ]
    ],
    "pregunta": "学生[がくせい]は あした 何時[なんじ]までに 学校[がっこう]へ 来[き]ますか。",
    "opciones": [
     "8じはん",
     "9じ",
     "8じ",
     "9じはん"
    ],
    "nota": "El examen es a las 9, pero hay que llegar antes de las 8:30.",
    "es": "Aviso del examen de mañana."
   },
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。二人[ふたり]は いつ えいがを 見[み]に 行[い]きますか。",
    "dialogo": [
     [
      "M",
      "こんどの 土曜日[どようび]、えいがを 見[み]に 行[い]きませんか。"
     ],
     [
      "F",
      "土曜日[どようび]は アルバイトが あります。日曜日[にちようび]は どうですか。"
     ],
     [
      "M",
      "日曜日[にちようび]は ちょっと……。金曜日[きんようび]の 夜[よる]は どうですか。"
     ],
     [
      "F",
      "いいですよ。"
     ]
    ],
    "pregunta": "二人[ふたり]は いつ えいがを 見[み]に 行[い]きますか。",
    "opciones": [
     "きんようびの よる",
     "どようびの よる",
     "にちようびの よる",
     "どようびの あさ"
    ],
    "nota": "Sábado no puede ella, domingo no puede él: queda el viernes por la noche.",
    "es": "Quedar para ir al cine."
   },
   {
    "situacion": "先生[せんせい]が 学生[がくせい]に 話[はな]して います。学生[がくせい]は あした 何[なに]を 持[も]って 来[き]ますか。",
    "dialogo": [
     [
      "M",
      "あしたは こうえんで 絵[え]を かきます。えんぴつと ノートを 持[も]って 来[き]て ください。おべんとうは いりません。学校[がっこう]で 食[た]べますから。"
     ]
    ],
    "pregunta": "学生[がくせい]は あした 何[なに]を 持[も]って 来[き]ますか。",
    "opciones": [
     "えんぴつと ノート",
     "えんぴつと おべんとう",
     "ノートと おべんとう",
     "えんぴつと ノートと おべんとう"
    ],
    "nota": "La comida no hace falta: comerán en la escuela.",
    "es": "Qué llevar a la salida de mañana."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は 何番[なんばん]の バスに 乗[の]りますか。",
    "dialogo": [
     [
      "F",
      "すみません、びょういんへ 行[い]きたいです。どの バスに 乗[の]りますか。"
     ],
     [
      "M",
      "3番[ばん]の バスです。5番[ばん]の バスも 行[い]きますが、時間[じかん]が かかりますよ。"
     ],
     [
      "F",
      "じゃ、はやい バスに 乗[の]ります。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は 何番[なんばん]の バスに 乗[の]りますか。",
    "opciones": [
     "3ばん",
     "5ばん",
     "8ばん",
     "13ばん"
    ],
    "nota": "Las dos van, pero la 5 tarda más y ella quiere la rápida.",
    "es": "Preguntar qué autobús coger."
   },
   {
    "situacion": "店[みせ]で 女[おんな]の 人[ひと]と 店[みせ]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は りんごを いくつ 買[か]いますか。",
    "dialogo": [
     [
      "F",
      "りんごを 五[いつ]つ ください。"
     ],
     [
      "M",
      "はい。きょうは 六[むっ]つで 五百円[ごひゃくえん]ですよ。"
     ],
     [
      "F",
      "そうですか。じゃ、六[むっ]つ ください。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は りんごを いくつ 買[か]いますか。",
    "opciones": [
     "六[むっ]つ",
     "五[いつ]つ",
     "四[よっ]つ",
     "七[なな]つ"
    ],
    "nota": "Pide cinco, pero con la oferta se lleva seis.",
    "es": "Comprar manzanas."
   },
   {
    "situacion": "会社[かいしゃ]で 男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は はじめに 何[なに]を しますか。",
    "dialogo": [
     [
      "F",
      "山田[やまだ]さん、この しりょうを コピーして ください。それから、かいぎの へやを そうじして ください。"
     ],
     [
      "M",
      "はい。あ、でも、かいぎの へやは いま 人[ひと]が いますよ。"
     ],
     [
      "F",
      "そうですか。じゃ、コピーの まえに、おちゃを 買[か]って 来[き]て ください。"
     ],
     [
      "M",
      "わかりました。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は はじめに 何[なに]を しますか。",
    "opciones": [
     "おちゃを 買[か]いに 行[い]きます",
     "コピーを します",
     "へやを そうじします",
     "かいぎに 出[で]ます"
    ],
    "nota": "「コピーの まえに、おちゃを 買って 来て」: primero el té.",
    "es": "Encargos en la oficina."
   },
   {
    "situacion": "デパートで 女[おんな]の 人[ひと]と 店[みせ]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は 何階[なんがい]へ 行[い]きますか。",
    "dialogo": [
     [
      "F",
      "すみません、くつは どこですか。"
     ],
     [
      "M",
      "くつは 3階[がい]です。かばんは 4階[かい]です。"
     ],
     [
      "F",
      "ありがとうございます。あ、かさも 買[か]いたいです。"
     ],
     [
      "M",
      "かさは くつと 同[おな]じ 階[かい]です。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は 何階[なんがい]へ 行[い]きますか。",
    "opciones": [
     "3かい",
     "4かい",
     "2かい",
     "5かい"
    ],
    "nota": "Zapatos y paraguas están en la misma planta, la 3.",
    "es": "Preguntar en unos grandes almacenes."
   },
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は 何[なん]で くうこうへ 行[い]きますか。",
    "dialogo": [
     [
      "M",
      "あした くうこうへ 行[い]きます。タクシーは 高[たか]いですね。"
     ],
     [
      "F",
      "バスが いいですよ。安[やす]くて、えきから 30分[ぷん]です。"
     ],
     [
      "M",
      "でも、にもつが 多[おお]いですから……。やっぱり タクシーに します。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は 何[なん]で くうこうへ 行[い]きますか。",
    "opciones": [
     "タクシー",
     "バス",
     "でんしゃ",
     "くるま"
    ],
    "nota": "Le recomiendan el bus, pero lleva mucho equipaje y se queda con el taxi.",
    "es": "Cómo ir al aeropuerto."
   },
   {
    "situacion": "レストランで 男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は 何[なに]を 食[た]べますか。",
    "dialogo": [
     [
      "M",
      "何[なに]に しますか。わたしは カレーに します。"
     ],
     [
      "F",
      "わたしは スパゲッティが いいです。あ、でも、きょうの ランチは さかなですね。"
     ],
     [
      "M",
      "さかなの ランチ、おいしいですよ。"
     ],
     [
      "F",
      "じゃ、わたしも それに します。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は 何[なに]を 食[た]べますか。",
    "opciones": [
     "さかなの ランチ",
     "カレー",
     "スパゲッティ",
     "カレーと スパゲッティ"
    ],
    "nota": "Iba a pedir espaguetis, pero acaba pidiendo el menú de pescado.",
    "es": "Pedir en un restaurante."
   },
   {
    "situacion": "学校[がっこう]で 先生[せんせい]が 話[はな]して います。学生[がくせい]は あした どの へやへ 行[い]きますか。",
    "dialogo": [
     [
      "F",
      "あしたの じゅぎょうは 201の へやでは ありません。二階[にかい]の 205です。205は としょしつの となりです。"
     ]
    ],
    "pregunta": "学生[がくせい]は あした どの へやへ 行[い]きますか。",
    "opciones": [
     "205の へや",
     "201の へや",
     "としょしつ",
     "102の へや"
    ],
    "nota": "No es la 201 sino la 205, al lado de la biblioteca.",
    "es": "Cambio de aula."
   },
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は あした 何時[なんじ]に うちを 出[で]ますか。",
    "dialogo": [
     [
      "F",
      "あしたの しあいは 何時[なんじ]からですか。"
     ],
     [
      "M",
      "10時[じ]からです。でも、9時[じ]に えきで ともだちと 会[あ]いますから、8時[じ]半[はん]に うちを 出[で]ます。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は あした 何時[なんじ]に うちを 出[で]ますか。",
    "opciones": [
     "8じはん",
     "9じ",
     "10じ",
     "8じ"
    ],
    "nota": "10 es el partido y 9 la cita; sale de casa a las 8:30.",
    "es": "A qué hora sale de casa."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は 何[なに]を 買[か]いますか。",
    "dialogo": [
     [
      "F",
      "ともだちの たんじょうびに、何[なに]を あげましょうか。"
     ],
     [
      "M",
      "本[ほん]は どうですか。"
     ],
     [
      "F",
      "ともだちは あまり 本[ほん]を 読[よ]みません。あまい ものが すきですから、おかしに します。"
     ],
     [
      "M",
      "いいですね。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は 何[なに]を 買[か]いますか。",
    "opciones": [
     "おかし",
     "本[ほん]",
     "はな",
     "えいがの きっぷ"
    ],
    "nota": "El libro no, porque su amiga apenas lee: dulces.",
    "es": "Elegir un regalo de cumpleaños."
   }
  ],
  "punto": [
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は どうして おくれましたか。",
    "dialogo": [
     [
      "F",
      "きょうは おそかったですね。"
     ],
     [
      "M",
      "すみません。けさ、あたまが いたくて、びょういんへ 行[い]きました。"
     ],
     [
      "F",
      "そうですか。だいじょうぶですか。"
     ],
     [
      "M",
      "はい、もう だいじょうぶです。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は どうして おくれましたか。",
    "opciones": [
     "びょういんへ 行[い]ったから",
     "でんしゃが おくれたから",
     "あさ おきられなかったから",
     "あめが ふったから"
    ],
    "nota": "Le dolía la cabeza y fue al hospital.",
    "es": "Por qué llega tarde."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は きょうだいが 何人[なんにん] いますか。",
    "dialogo": [
     [
      "F",
      "山田[やまだ]さんは きょうだいが いますか。"
     ],
     [
      "M",
      "はい、あにが 一人[ひとり]と いもうとが 二人[ふたり] います。"
     ],
     [
      "F",
      "にぎやかですね。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は きょうだいが 何人[なんにん] いますか。",
    "opciones": [
     "三人[さんにん]",
     "二人[ふたり]",
     "四人[よにん]",
     "一人[ひとり]"
    ],
    "nota": "Un hermano mayor y dos hermanas pequeñas: tres.",
    "es": "Hermanos."
   },
   {
    "situacion": "女[おんな]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は どこで かさを わすれましたか。",
    "dialogo": [
     [
      "F",
      "きのう、ぎんこうへ 行[い]って、それから きっさてんで コーヒーを 飲[の]みました。うちへ 帰[かえ]る とき、かさが ありませんでした。ぎんこうでは かさを 持[も]って いましたから、たぶん きっさてんです。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は どこで かさを わすれましたか。",
    "opciones": [
     "きっさてん",
     "ぎんこう",
     "うち",
     "でんしゃ"
    ],
    "nota": "En el banco aún lo tenía; lo dejó en la cafetería.",
    "es": "Un paraguas olvidado."
   },
   {
    "situacion": "男[おとこ]の 学生[がくせい]と 女[おんな]の 学生[がくせい]が 話[はな]して います。テストは 何曜日[なんようび]ですか。",
    "dialogo": [
     [
      "M",
      "テストは 水曜日[すいようび]でしたね。"
     ],
     [
      "F",
      "いいえ、先生[せんせい]が 木曜日[もくようび]に かわったと 言[い]いましたよ。"
     ],
     [
      "M",
      "そうですか。よかった。"
     ]
    ],
    "pregunta": "テストは 何曜日[なんようび]ですか。",
    "opciones": [
     "もくようび",
     "すいようび",
     "かようび",
     "きんようび"
    ],
    "nota": "Era el miércoles, pero lo han cambiado al jueves.",
    "es": "El día del examen."
   },
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]の うちから 会社[かいしゃ]まで 何分[なんぷん] かかりますか。",
    "dialogo": [
     [
      "M",
      "会社[かいしゃ]の ちかくに すんで いますか。"
     ],
     [
      "F",
      "いいえ。でんしゃで 40分[ぷん] かかります。えきまで 歩[ある]いて 10分[ぷん]ですから、ぜんぶで 50分[ぷん]ですね。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]の うちから 会社[かいしゃ]まで 何分[なんぷん] かかりますか。",
    "opciones": [
     "50ぷん",
     "40ぷん",
     "10ぷん",
     "30ぷん"
    ],
    "nota": "40 de tren + 10 andando = 50.",
    "es": "Cuánto tarda en llegar al trabajo."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は 日曜日[にちようび] 何[なに]を しましたか。",
    "dialogo": [
     [
      "F",
      "しゅうまつは 何[なに]を しましたか。"
     ],
     [
      "M",
      "土曜日[どようび]は ともだちと テニスを しました。日曜日[にちようび]は つかれたので、うちで テレビを 見[み]ました。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は 日曜日[にちようび] 何[なに]を しましたか。",
    "opciones": [
     "うちで テレビを 見[み]ました",
     "ともだちと テニスを しました",
     "かいものに 行[い]きました",
     "しごとを しました"
    ],
    "nota": "El tenis fue el sábado; el domingo, tele en casa.",
    "es": "El fin de semana."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]の かばんは どれですか。",
    "dialogo": [
     [
      "F",
      "この くろい かばんは 田中[たなか]さんのですか。"
     ],
     [
      "M",
      "いいえ、わたしのは あの 大[おお]きい しろい かばんです。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]の かばんは どれですか。",
    "opciones": [
     "大[おお]きい しろい かばん",
     "くろい かばん",
     "小[ちい]さい しろい かばん",
     "大[おお]きい くろい かばん"
    ],
    "nota": "「わたしのは あの 大きい しろい かばんです」.",
    "es": "De quién es cada bolsa."
   },
   {
    "situacion": "男[おとこ]の 人[ひと]と 店[みせ]の 人[ひと]が 電話[でんわ]で 話[はな]して います。店[みせ]は あした 何時[なんじ]に あきますか。",
    "dialogo": [
     [
      "M",
      "もしもし、あしたは 何時[なんじ]からですか。"
     ],
     [
      "F",
      "いつもは 10時[じ]からですが、あしたは 日曜日[にちようび]ですから、11時[じ]からです。"
     ]
    ],
    "pregunta": "店[みせ]は あした 何時[なんじ]に あきますか。",
    "opciones": [
     "11じ",
     "10じ",
     "9じ",
     "12じ"
    ],
    "nota": "Normalmente a las 10; mañana, domingo, a las 11.",
    "es": "Horario de una tienda."
   },
   {
    "situacion": "店[みせ]で 女[おんな]の 人[ひと]と 店[みせ]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は ぜんぶで いくら はらいますか。",
    "dialogo": [
     [
      "F",
      "この ノートは いくらですか。"
     ],
     [
      "M",
      "一[いっ]さつ 200円[えん]です。"
     ],
     [
      "F",
      "じゃ、三[さん]さつ ください。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は ぜんぶで いくら はらいますか。",
    "opciones": [
     "600えん",
     "200えん",
     "300えん",
     "500えん"
    ],
    "nota": "Tres cuadernos a 200 yenes.",
    "es": "Comprar cuadernos."
   },
   {
    "situacion": "テレビで 天気[てんき]の 話[はなし]を して います。あしたの 天気[てんき]は どうですか。",
    "dialogo": [
     [
      "F",
      "きょうは 一日中[いちにちじゅう] 雨[あめ]でしたが、あしたは あさから はれて、あたたかく なるでしょう。"
     ]
    ],
    "pregunta": "あしたの 天気[てんき]は どうですか。",
    "opciones": [
     "はれ",
     "あめ",
     "くもり",
     "ゆき"
    ],
    "nota": "La lluvia es hoy; mañana, despejado.",
    "es": "El tiempo de mañana."
   },
   {
    "situacion": "男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]が 話[はな]して います。女[おんな]の 人[ひと]は なつやすみに どこへ 行[い]きましたか。",
    "dialogo": [
     [
      "M",
      "なつやすみは どこかへ 行[い]きましたか。"
     ],
     [
      "F",
      "はい。はじめは うみへ 行[い]きたかったですが、あつかったので、山[やま]へ 行[い]きました。"
     ]
    ],
    "pregunta": "女[おんな]の 人[ひと]は なつやすみに どこへ 行[い]きましたか。",
    "opciones": [
     "山[やま]",
     "うみ",
     "がいこく",
     "どこも 行[い]きませんでした"
    ],
    "nota": "Quería ir a la playa, pero por el calor fue a la montaña.",
    "es": "Las vacaciones de verano."
   },
   {
    "situacion": "女[おんな]の 人[ひと]と 男[おとこ]の 人[ひと]が 話[はな]して います。男[おとこ]の 人[ひと]は どうして ひるごはんを 食[た]べませんか。",
    "dialogo": [
     [
      "F",
      "いっしょに ひるごはんを 食[た]べませんか。"
     ],
     [
      "M",
      "すみません。さっき パンを 食[た]べましたから、いま おなかが いっぱいです。"
     ],
     [
      "F",
      "そうですか。"
     ]
    ],
    "pregunta": "男[おとこ]の 人[ひと]は どうして ひるごはんを 食[た]べませんか。",
    "opciones": [
     "さっき パンを 食[た]べたから",
     "いそがしいから",
     "おかねが ないから",
     "ぐあいが わるいから"
    ],
    "nota": "Acaba de comerse un pan y está lleno.",
    "es": "Por qué no come."
   }
  ],
  "expresion": [
   {
    "situacion": "友[とも]だちの うちに 入[はい]ります。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "おじゃまします。",
     "いってきます。",
     "いただきます。"
    ],
    "nota": "おじゃまします: al entrar en casa ajena."
   },
   {
    "situacion": "ごはんを 食[た]べる まえです。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "いただきます。",
     "ごちそうさまでした。",
     "いってらっしゃい。"
    ],
    "nota": "いただきます antes de comer; ごちそうさま, al terminar."
   },
   {
    "situacion": "あさ、うちを 出[で]ます。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "いってきます。",
     "ただいま。",
     "おかえりなさい。"
    ],
    "nota": "いってきます al salir; ただいま al volver."
   },
   {
    "situacion": "うちに 帰[かえ]りました。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "ただいま。",
     "いってきます。",
     "おやすみなさい。"
    ],
    "nota": "ただいま al llegar a casa."
   },
   {
    "situacion": "先生[せんせい]の へやに 入[はい]ります。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "しつれいします。",
     "ありがとうございます。",
     "おねがいします。"
    ],
    "nota": "しつれいします al entrar en el despacho de alguien."
   },
   {
    "situacion": "友[とも]だちに 本[ほん]を かりたいです。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "その 本[ほん]、かして ください。",
     "その 本[ほん]、かりて ください。",
     "その 本[ほん]、かしましょうか。"
    ],
    "nota": "かして ください: «préstamelo». かりて sería «tómalo prestado tú»."
   },
   {
    "situacion": "レストランで 水[みず]が ほしいです。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "すみません、水[みず]を ください。",
     "すみません、水[みず]は いかがですか。",
     "すみません、水[みず]を あげます。"
    ],
    "nota": "〜を ください para pedir. いかがですか lo dice quien ofrece."
   },
   {
    "situacion": "友[とも]だちの ペンを 使[つか]いたいです。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "ペン、かりても いいですか。",
     "ペン、かしても いいですか。",
     "ペン、使[つか]って ください。"
    ],
    "nota": "かりても いいですか: «¿me lo dejas?»."
   },
   {
    "situacion": "しごとが おわって、先[さき]に 帰[かえ]ります。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "おさきに しつれいします。",
     "おつかれさまでした。",
     "いってらっしゃい。"
    ],
    "nota": "Quien se va primero dice おさきに しつれいします; los demás, おつかれさまでした."
   },
   {
    "situacion": "あさ、学校[がっこう]で 先生[せんせい]に 会[あ]いました。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "おはようございます。",
     "こんばんは。",
     "おやすみなさい。"
    ],
    "nota": "Por la mañana: おはようございます."
   },
   {
    "situacion": "友[とも]だちに プレゼントを もらいました。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "ありがとう。",
     "どういたしまして。",
     "ごめんなさい。"
    ],
    "nota": "どういたしまして es la respuesta al «gracias», no el «gracias»."
   },
   {
    "situacion": "電車[でんしゃ]で 人[ひと]の 足[あし]を ふみました。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "あ、すみません。",
     "あ、どうぞ。",
     "あ、おねがいします。"
    ],
    "nota": "Disculparse: すみません."
   },
   {
    "situacion": "へやが さむいです。まどが あいて います。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "まどを しめても いいですか。",
     "まどを あけても いいですか。",
     "まどは しまって いますか。"
    ],
    "nota": "Está abierta y hace frío: pedir cerrarla."
   },
   {
    "situacion": "友[とも]だちと えいがを 見[み]たいです。何[なん]と 言[い]いますか。",
    "voz": "M",
    "opciones": [
     "いっしょに えいがを 見[み]ませんか。",
     "えいがを 見[み]て いますか。",
     "えいがを 見[み]ましたか。"
    ],
    "nota": "〜ませんか para invitar."
   },
   {
    "situacion": "店[みせ]で シャツを 見[み]て います。きて みたいです。何[なん]と 言[い]いますか。",
    "voz": "F",
    "opciones": [
     "これ、きて みても いいですか。",
     "これ、きて ください。",
     "これ、きませんか。"
    ],
    "nota": "〜ても いいですか para pedir permiso."
   }
  ],
  "respuesta": [
   {
    "voz": "M",
    "frase": "おなまえは？",
    "opciones": [
     "やまだです。",
     "はじめまして。",
     "げんきです。"
    ],
    "nota": "Te preguntan el nombre."
   },
   {
    "voz": "F",
    "frase": "おくには どちらですか。",
    "opciones": [
     "スペインです。",
     "あちらです。",
     "よろしく おねがいします。"
    ],
    "nota": "どちら aquí pregunta por el país, no por una dirección."
   },
   {
    "voz": "M",
    "frase": "しゅみは 何[なん]ですか。",
    "opciones": [
     "えいがを 見[み]る ことです。",
     "日曜日[にちようび]です。",
     "はい、そうです。"
    ],
    "nota": "しゅみ = afición."
   },
   {
    "voz": "F",
    "frase": "きのう 何[なに]を しましたか。",
    "opciones": [
     "ともだちと かいものを しました。",
     "あした かいものを します。",
     "かいものが すきです。"
    ],
    "nota": "Pregunta en pasado: se contesta en pasado."
   },
   {
    "voz": "M",
    "frase": "いっしょに 帰[かえ]りませんか。",
    "opciones": [
     "ええ、帰[かえ]りましょう。",
     "いいえ、帰[かえ]りませんでした。",
     "はい、帰[かえ]って います。"
    ],
    "nota": "〜ませんか es una invitación: se acepta con 〜ましょう."
   },
   {
    "voz": "F",
    "frase": "この かさ、だれのですか。",
    "opciones": [
     "わたしのです。",
     "あそこです。",
     "きのう 買[か]いました。"
    ],
    "nota": "だれの = de quién."
   },
   {
    "voz": "M",
    "frase": "いま 何時[なんじ]ですか。",
    "opciones": [
     "3時[じ]です。",
     "3時間[じかん]です。",
     "3階[がい]です。"
    ],
    "nota": "何時 pregunta la hora; 3時間 es una duración."
   },
   {
    "voz": "F",
    "frase": "コーヒーと こうちゃと どちらが いいですか。",
    "opciones": [
     "コーヒーが いいです。",
     "はい、いいです。",
     "どちらも ありません。"
    ],
    "nota": "Entre dos cosas se contesta eligiendo una."
   },
   {
    "voz": "M",
    "frase": "日本語[にほんご]の べんきょうは どうですか。",
    "opciones": [
     "むずかしいですが、おもしろいです。",
     "きのうからです。",
     "としょかんで します。"
    ],
    "nota": "どうですか pide una opinión."
   },
   {
    "voz": "F",
    "frase": "しゅくだいは もう おわりましたか。",
    "opciones": [
     "いいえ、まだです。",
     "はい、これからです。",
     "いいえ、もう おわりました。"
    ],
    "nota": "もう〜ましたか → はい、もう〜ました / いいえ、まだです."
   },
   {
    "voz": "M",
    "frase": "あした、ひまですか。",
    "opciones": [
     "すみません、あしたは ちょっと……。",
     "はい、ひまでした。",
     "いいえ、あしたです。"
    ],
    "nota": "ちょっと…… es el «no» educado."
   },
   {
    "voz": "F",
    "frase": "どうぞ、たくさん 食[た]べて ください。",
    "opciones": [
     "ありがとうございます。いただきます。",
     "ごちそうさまでした。",
     "どういたしまして。"
    ],
    "nota": "Te ofrecen comida y aún no has empezado."
   },
   {
    "voz": "M",
    "frase": "えきまで どのぐらい かかりますか。",
    "opciones": [
     "あるいて 10分[ぷん]ぐらいです。",
     "10時[じ]ぐらいです。",
     "えきの まえです。"
    ],
    "nota": "どのぐらい かかりますか pregunta el tiempo que se tarda."
   },
   {
    "voz": "F",
    "frase": "この りょうり、だれが 作[つく]りましたか。",
    "opciones": [
     "ははが 作[つく]りました。",
     "きのう 作[つく]りました。",
     "うちで 作[つく]りました。"
    ],
    "nota": "だれが = quién."
   },
   {
    "voz": "M",
    "frase": "おさきに しつれいします。",
    "opciones": [
     "おつかれさまでした。",
     "いただきます。",
     "おかえりなさい。"
    ],
    "nota": "Al compañero que se va: おつかれさまでした."
   },
   {
    "voz": "F",
    "frase": "ちょっと まって ください。",
    "opciones": [
     "はい、わかりました。",
     "はい、まちました。",
     "いいえ、まちませんでした。"
    ],
    "nota": "Te piden que esperes: se acepta."
   },
   {
    "voz": "M",
    "frase": "どうして きのう 休[やす]みましたか。",
    "opciones": [
     "かぜを ひいたからです。",
     "あした 休[やす]みます。",
     "三日[みっか] 休[やす]みました。"
    ],
    "nota": "どうして pide el motivo: 〜からです."
   },
   {
    "voz": "F",
    "frase": "ここで しゃしんを とっても いいですか。",
    "opciones": [
     "すみません、ここは ちょっと……。",
     "はい、とって いました。",
     "しゃしんが すきです。"
    ],
    "nota": "Piden permiso: se contesta sí o no al permiso."
   }
  ]
 },
 "huecos": [
  {
   "texto": "わたしは 毎朝[まいあさ] 6時[じ]に 起[お]きます。（１） 、シャワーを 浴[あ]びて、朝[あさ]ごはんを 食[た]べます。会社[かいしゃ]まで 電車[でんしゃ]で 1時間[じかん] （２） かかります。電車[でんしゃ]の 中[なか]では いつも 本[ほん]を （３） 。会社[かいしゃ]に 着[つ]くのは 8時[じ]半[はん]です。日本[にほん]の 会社[かいしゃ]は 朝[あさ]が 早[はや]いので、最初[さいしょ]は たいへん （４） 。",
   "es": "Me levanto a las 6, me ducho, desayuno… El tren tarda una hora; siempre leo dentro. Llego a las 8:30. Al principio costaba porque las empresas japonesas empiezan pronto.",
   "huecos": [
    {
     "opciones": [
      "それから",
      "でも",
      "だから",
      "じゃ"
     ],
     "nota": "それから = y después, para encadenar acciones."
    },
    {
     "opciones": [
      "ぐらい",
      "ごろ",
      "まで",
      "から"
     ],
     "nota": "ぐらい con duraciones; ごろ es para horas del reloj."
    },
    {
     "opciones": [
      "読[よ]みます",
      "読[よ]みました",
      "読[よ]みたいです",
      "読[よ]みません"
     ],
     "nota": "いつも pide presente habitual."
    },
    {
     "opciones": [
      "でした",
      "です",
      "でしょう",
      "じゃありません"
     ],
     "nota": "最初[さいしょ]は (al principio): pasado."
    }
   ]
  },
  {
   "texto": "先週[せんしゅう]の 日曜日[にちようび]、友[とも]だち （１） 動物園[どうぶつえん]へ 行[い]きました。動物園[どうぶつえん]は 駅[えき]から バスで 20分[ふん]ぐらいの ところに あります。いろいろな 動物[どうぶつ]が いましたが、わたしは パンダが 一番[いちばん] （２） です。パンダは とても かわいかったです。昼[ひる]ごはんは 動物園[どうぶつえん]の 中[なか]の レストランで 食[た]べました。カレーは （３） 、あまり おいしく なかったです。また 行[い]きたいですが、（４） 行[い]く ときは おべんとうを 持[も]って 行[い]きます。",
   "es": "El domingo fui al zoo con un amigo. Lo que más me gustó fue el panda. Comimos en el restaurante del zoo: el curry era caro y no muy bueno. La próxima vez llevaré comida.",
   "huecos": [
    {
     "opciones": [
      "と",
      "に",
      "を",
      "で"
     ],
     "nota": "と = con quién."
    },
    {
     "opciones": [
      "好[す]き",
      "好[す]きな",
      "好[す]きに",
      "好[す]きで"
     ],
     "nota": "一番 好きです: el adjetivo な ante です va sin な."
    },
    {
     "opciones": [
      "高[たか]くて",
      "高[たか]い",
      "高[たか]かった",
      "高[たか]く"
     ],
     "nota": "Unir dos adjetivos: forma て (高くて、…)."
    },
    {
     "opciones": [
      "こんど",
      "きのう",
      "まえに",
      "さっき"
     ],
     "nota": "こんど = la próxima vez; el verbo va en presente."
    }
   ]
  },
  {
   "texto": "わたしの 町[まち]には 古[ふる]い お寺[てら]が あります。お寺[てら]の 前[まえ]には 大[おお]きい さくらの 木[き]が （１） 。毎年[まいとし] 4月[がつ]に なると、たくさんの 人[ひと]が さくらを 見[み] （２） 来[き]ます。わたしも 毎年[まいとし] 家族[かぞく]と 行[い]きます。お寺[てら]の 近[ちか]くには おいしい だんごの 店[みせ]も あります。去年[きょねん]は そこで だんごを 五[いつ]つ （３） 。ことしは もっと たくさん 食[た]べたいと （４） 。",
   "es": "En mi ciudad hay un templo antiguo con un gran cerezo delante. En abril viene muchísima gente a verlo. Cerca hay una tienda de dango: el año pasado me comí cinco; este año quiero comer más.",
   "huecos": [
    {
     "opciones": [
      "あります",
      "います",
      "しまります",
      "なります"
     ],
     "nota": "Un árbol: あります (cosa)."
    },
    {
     "opciones": [
      "に",
      "を",
      "で",
      "が"
     ],
     "nota": "V(raíz)＋に 来る: venir a hacer algo."
    },
    {
     "opciones": [
      "食[た]べました",
      "食[た]べます",
      "食[た]べて います",
      "食[た]べたいです"
     ],
     "nota": "去年: pasado."
    },
    {
     "opciones": [
      "思[おも]って います",
      "思[おも]いました",
      "思[おも]いましょう",
      "思[おも]わないです"
     ],
     "nota": "〜と 思って います: lo que se piensa ahora."
    }
   ]
  },
  {
   "texto": "きのうは 雨[あめ]でした。わたしは どこへも （１） 、家[いえ]で 映画[えいが]を 見[み]ました。映画[えいが]は 3時間[じかん]ぐらい ありましたが、とても おもしろかったです。夜[よる]、友[とも]だちから 電話[でんわ]が （２） 。友[とも]だちも 同[おな]じ 映画[えいが]を 見[み]たそうです。来週[らいしゅう] いっしょに 映画館[えいがかん]へ （３） と 言[い]われました。わたしは 「いいですね。（４） 行[い]きましょう」と 言[い]いました。",
   "es": "Ayer llovió y no salí: vi una película en casa. Por la noche llamó un amigo que había visto la misma. Me propuso ir juntos al cine la semana que viene y dije: «¡Vale, vamos!».",
   "huecos": [
    {
     "opciones": [
      "行[い]かないで",
      "行[い]って",
      "行[い]きたくて",
      "行[い]ったら"
     ],
     "nota": "〜ないで = sin hacer: no fui a ningún sitio y…"
    },
    {
     "opciones": [
      "ありました",
      "しました",
      "かけました",
      "もらいました"
     ],
     "nota": "電話が ある = recibir una llamada."
    },
    {
     "opciones": [
      "行[い]きませんか",
      "行[い]きましたか",
      "行[い]って いますか",
      "行[い]きたいですか"
     ],
     "nota": "Invitación: 〜ませんか."
    },
    {
     "opciones": [
      "ぜひ",
      "あまり",
      "ぜんぜん",
      "まだ"
     ],
     "nota": "ぜひ = sin falta, con ganas."
    }
   ]
  },
  {
   "texto": "わたしは 日本[にほん]へ 来[き]て、6か月[げつ]に なります。最初[さいしょ]は 日本語[にほんご]が ぜんぜん わかりませんでした。（１） 、今[いま]は 少[すこ]し わかる ように なりました。毎日[まいにち] 学校[がっこう]で 4時間[じかん] 勉強[べんきょう]して います。学校[がっこう]の あとは コンビニで アルバイトを （２） 。アルバイトは たいへんですが、日本語[にほんご]を 使[つか]う （３） が できるので、楽[たの]しいです。来年[らいねん]は 大学[だいがく]に （４） と 思[おも]って います。",
   "es": "Llevo seis meses en Japón. Al principio no entendía nada; ahora algo. Estudio cuatro horas al día y después trabajo en una tienda: es duro, pero puedo usar el japonés. El año que viene quiero entrar en la universidad.",
   "huecos": [
    {
     "opciones": [
      "でも",
      "それから",
      "だから",
      "そして"
     ],
     "nota": "Contraste entre antes y ahora: でも."
    },
    {
     "opciones": [
      "して います",
      "しました",
      "しませんか",
      "したいです"
     ],
     "nota": "Hábito actual: 〜て います."
    },
    {
     "opciones": [
      "こと",
      "もの",
      "ところ",
      "とき"
     ],
     "nota": "〜こと が できる."
    },
    {
     "opciones": [
      "入[はい]りたい",
      "入[はい]った",
      "入[はい]って",
      "入[はい]らない"
     ],
     "nota": "〜たいと 思って います = querer."
    }
   ]
  },
  {
   "texto": "田中[たなか]さん、こんにちは。お元気[げんき]ですか。わたしは 今[いま] 北海道[ほっかいどう]に 来[き]て います。北海道[ほっかいどう]は 東京[とうきょう] （１） ずっと すずしいです。きのうは 山[やま]に 登[のぼ]りました。山[やま]の 上[うえ]から 見[み]た 景色[けしき]は とても （２） 。今日[きょう]は 牧場[ぼくじょう]へ 行[い]って、牛乳[ぎゅうにゅう]を 飲[の]みました。とても おいしかったです。あしたの 夜[よる] 東京[とうきょう]へ （３） 。おみやげを 買[か]って 行[い]きます から、（４） 。リン",
   "es": "Hola Tanaka: estoy en Hokkaido, mucho más fresco que Tokio. Ayer subí a una montaña; las vistas eran preciosas. Hoy fui a una granja y bebí leche. Mañana por la noche vuelvo a Tokio: te llevo un recuerdo, espérame. Lin.",
   "huecos": [
    {
     "opciones": [
      "より",
      "から",
      "まで",
      "ほど"
     ],
     "nota": "A より B: más que."
    },
    {
     "opciones": [
      "きれいでした",
      "きれいです",
      "きれいな",
      "きれいに"
     ],
     "nota": "Algo que se vio ayer: pasado."
    },
    {
     "opciones": [
      "帰[かえ]ります",
      "帰[かえ]りました",
      "帰[かえ]って います",
      "帰[かえ]りたかったです"
     ],
     "nota": "あしたの 夜: futuro."
    },
    {
     "opciones": [
      "待[ま]って いて ください",
      "待[ま]ちましたか",
      "待[ま]ちません",
      "待[ま]って いました"
     ],
     "nota": "Petición: 〜て いて ください."
    }
   ]
  },
  {
   "texto": "わたしの 家族[かぞく]は 5人[にん]です。父[ちち]は 銀行員[ぎんこういん]で、毎日[まいにち] （１） 帰[かえ]ります。母[はは]は 料理[りょうり]が 上手[じょうず]で、毎晩[まいばん] おいしい 晩[ばん]ごはんを 作[つく]って くれます。兄[あに]は 大[おお]学生[がくせい]です。（２） 東京[とうきょう]の 大学[だいがく]に 入[はい]ったので、今[いま]は 一人[ひとり]で アパートに 住[す]んで います。妹[いもうと]は まだ 小[ちい]学生[がくせい]です。妹[いもうと]は 犬[いぬ]が 大好[だいす]きで、毎朝[まいあさ] 犬[いぬ] （３） 散歩[さんぽ]します。わたしは 家族[かぞく]が とても （４） です。",
   "es": "Somos cinco. Mi padre trabaja en un banco y vuelve tarde; mi madre cocina muy bien; mi hermano mayor entró en una universidad de Tokio y vive solo; mi hermana pequeña pasea al perro cada mañana. Quiero mucho a mi familia.",
   "huecos": [
    {
     "opciones": [
      "おそく",
      "おそい",
      "おそくて",
      "おそかった"
     ],
     "nota": "Adverbio ante verbo: おそく 帰ります."
    },
    {
     "opciones": [
      "去年[きょねん]",
      "来年[らいねん]",
      "あした",
      "今度[こんど]"
     ],
     "nota": "Pasado (入った): 去年."
    },
    {
     "opciones": [
      "と",
      "を",
      "が",
      "に"
     ],
     "nota": "Con quién: と."
    },
    {
     "opciones": [
      "好[す]き",
      "好[す]きな",
      "好[す]きで",
      "好[す]きに"
     ],
     "nota": "〜が 好きです."
    }
   ]
  },
  {
   "texto": "先週[せんしゅう]から 料理[りょうり]教室[きょうしつ]に 通[かよ]って います。教室[きょうしつ]は 毎週[まいしゅう] 土曜日[どようび]の 午前[ごぜん] 10時[じ]から 12時[じ]までです。先生[せんせい]は とても やさしい 女[おんな]の 人[ひと]です。最初[さいしょ]の 日[ひ]は すしを 作[つく]りました。すしを 作[つく]る のは はじめてでした （１） 、とても むずかしかったです。でも、先生[せんせい]が ていねいに 教[おし]えて （２） ので、上手[じょうず]に 作[つく]る ことが できました。作[つく]った すしは 家[いえ]に 持[も]って （３） 、家族[かぞく]と いっしょに 食[た]べました。来週[らいしゅう]は てんぷらを 作[つく]る （４） です。",
   "es": "Desde la semana pasada voy a clases de cocina los sábados de 10 a 12. La profesora es muy amable. El primer día hicimos sushi: era la primera vez y costó, pero ella explicó con cuidado y me salió bien. Me lo llevé a casa y lo comimos en familia. La semana que viene haremos tempura.",
   "huecos": [
    {
     "opciones": [
      "から",
      "が",
      "のに",
      "ので"
     ],
     "nota": "Motivo de lo difícil: から."
    },
    {
     "opciones": [
      "くれた",
      "あげた",
      "もらった",
      "やった"
     ],
     "nota": "Alguien me enseña a mí: 〜て くれる."
    },
    {
     "opciones": [
      "帰[かえ]って",
      "帰[かえ]ると",
      "帰[かえ]ったら",
      "帰[かえ]らないで"
     ],
     "nota": "Encadenar: llevar a casa y comer → 〜て."
    },
    {
     "opciones": [
      "予定[よてい]",
      "ため",
      "はず",
      "まま"
     ],
     "nota": "〜予定[よてい]です = está previsto."
    }
   ]
  },
  {
   "texto": "駅[えき]の 近[ちか]くに 新[あたら]しい 図書館[としょかん]が できました。前[まえ]の 図書館[としょかん] （１） 大[おお]きくて、本[ほん]も たくさん あります。2階[かい]には 子[こ]どもの 本[ほん]が あって、いつも 子[こ]どもたちで にぎやかです。3階[かい]は 静[しず]かに 勉強[べんきょう] （２） 部屋[へや]です。わたしは 毎週[まいしゅう] 日曜日[にちようび]に そこで 勉強[べんきょう]します。図書館[としょかん]は 朝[あさ] 9時[じ]から 夜[よる] 8時[じ]まで 開[あ]いて います （３） 、月曜日[げつようび]は 休[やす]みです。（４） 行[い]く 人[ひと]は 気[き]を つけて ください。",
   "es": "Han abierto una biblioteca nueva cerca de la estación, más grande que la anterior. En la segunda planta están los libros infantiles; la tercera es una sala de estudio silencioso. Abre de 9 a 8, pero los lunes cierra: cuidado si vais ese día.",
   "huecos": [
    {
     "opciones": [
      "より",
      "から",
      "と",
      "まで"
     ],
     "nota": "Comparación: より."
    },
    {
     "opciones": [
      "する",
      "した",
      "して",
      "しない"
     ],
     "nota": "Ante nombre (部屋): forma de diccionario."
    },
    {
     "opciones": [
      "が",
      "から",
      "ので",
      "し"
     ],
     "nota": "Contraste: が."
    },
    {
     "opciones": [
      "月曜日[げつようび]に",
      "日曜日[にちようび]に",
      "毎日[まいにち]",
      "午前[ごぜん]に"
     ],
     "nota": "Cuidado: el lunes está cerrado."
    }
   ]
  },
  {
   "texto": "わたしは 毎日[まいにち] 日記[にっき]を 書[か]いて います。日本語[にほんご]の 勉強[べんきょう]の ために、日本語[にほんご]で 書[か]く （１） に しました。最初[さいしょ]は ひらがなだけで 書[か]いて いましたが、今[いま]は かんじも 少[すこ]し 使[つか]います。わからない かんじが ある ときは、辞書[じしょ]で （２） 。きのうの 日記[にっき]には、友[とも]だちと 食[た]べた ラーメンの ことを 書[か]きました。（３） ラーメンは わたしが 日本[にほん]で 食[た]べた ラーメンの 中[なか]で 一番[いちばん] おいしかったです。いつか 日記[にっき]を 先生[せんせい]に 見[み]て （４） と 思[おも]って います。",
   "es": "Escribo un diario todos los días, en japonés para practicar. Al principio solo en hiragana; ahora también algo de kanji, y los que no sé los busco en el diccionario. Ayer escribí del ramen que comí con un amigo: el mejor que he comido en Japón. Algún día quiero que el profesor lo lea.",
   "huecos": [
    {
     "opciones": [
      "こと",
      "もの",
      "ほう",
      "ため"
     ],
     "nota": "〜ことに しました = decidí hacer."
    },
    {
     "opciones": [
      "しらべます",
      "かえます",
      "おしえます",
      "わすれます"
     ],
     "nota": "Buscar en el diccionario: しらべる."
    },
    {
     "opciones": [
      "その",
      "この",
      "あの",
      "どの"
     ],
     "nota": "Algo recién mencionado: その."
    },
    {
     "opciones": [
      "もらいたい",
      "あげたい",
      "くれたい",
      "やりたい"
     ],
     "nota": "Que otro haga algo por mí: 〜て もらいたい."
    }
   ]
  },
  {
   "texto": "ゆうべ、となりの 家[いえ]の ねこが わたしの 家[いえ]に 入[はい]って きました。ねこは とても おなかが すいて いる （１） でした。わたしは 少[すこ]し 魚[さかな]を あげました。ねこは すぐ 全部[ぜんぶ] （２） 。けさ、となりの 人[ひと]に 話[はな]したら、「すみません。ねこは 夜[よる] 外[そと]に 出[で]るのが 好[す]きなんです」と 言[い]って いました。となりの 人[ひと]は お礼[れい]に ケーキを （３） 。ねこの おかげで、となりの 人[ひと]と 仲[なか]よく （４） 。",
   "es": "Anoche el gato del vecino se coló en casa; parecía muy hambriento y le di un poco de pescado, que se comió enseguida. Esta mañana se lo conté al vecino, que se disculpó y me trajo una tarta en agradecimiento. Gracias al gato nos hemos hecho amigos.",
   "huecos": [
    {
     "opciones": [
      "よう",
      "ため",
      "はず",
      "つもり"
     ],
     "nota": "〜ようでした = parecía."
    },
    {
     "opciones": [
      "食[た]べました",
      "食[た]べます",
      "食[た]べて ください",
      "食[た]べません"
     ],
     "nota": "Acción pasada."
    },
    {
     "opciones": [
      "くれました",
      "もらいました",
      "あげました",
      "やりました"
     ],
     "nota": "El vecino me da a mí: くれる."
    },
    {
     "opciones": [
      "なりました",
      "しました",
      "いました",
      "ありました"
     ],
     "nota": "〜く/に なる: llegar a ser."
    }
   ]
  },
  {
   "texto": "先月[せんげつ]、はじめて 一人[ひとり]で 京都[きょうと]へ 旅行[りょこう]しました。京都[きょうと]には 古[ふる]い お寺[てら]や 神社[じんじゃ]が たくさん あります。一日目[いちにちめ]は 有名[ゆうめい]な お寺[てら]を 三[みっ]つ （１） 。とても 歩[ある]いたので、夜[よる]は 足[あし]が いたかったです。二日目[ふつかめ]は 雨[あめ]でした。（２） 、美術館[びじゅつかん]へ 行[い]きました。美術館[びじゅつかん]は 静[しず]かで、ゆっくり 絵[え]を 見[み]る ことが （３） 。一人[ひとり]の 旅行[りょこう]は 少[すこ]し さびしかったですが、（４） 楽[たの]しかったです。",
   "es": "El mes pasado viajé solo a Kioto por primera vez. El primer día visité tres templos famosos y acabé con los pies doloridos. El segundo llovió, así que fui a un museo, donde pude ver los cuadros tranquilo. Viajar solo fue algo solitario, pero bastante divertido.",
   "huecos": [
    {
     "opciones": [
      "見[み]ました",
      "見[み]ます",
      "見[み]て います",
      "見[み]たいです"
     ],
     "nota": "Pasado."
    },
    {
     "opciones": [
      "それで",
      "でも",
      "そして",
      "それから"
     ],
     "nota": "Consecuencia de la lluvia: それで."
    },
    {
     "opciones": [
      "できました",
      "しました",
      "なりました",
      "ありました"
     ],
     "nota": "〜ことが できる, en pasado."
    },
    {
     "opciones": [
      "けっこう",
      "ぜんぜん",
      "あまり",
      "すこしも"
     ],
     "nota": "Con afirmativo: けっこう (bastante). ぜんぜん/あまり piden negativo."
    }
   ]
  },
  {
   "texto": "わたしの 学校[がっこう]には 外国人[がいこくじん]の 学生[がくせい]が たくさん います。中国[ちゅうごく] （１） 来[き]た 人[ひと]が 一番[いちばん] 多[おお]いです。わたしの クラスにも 中国人[ちゅうごくじん]の リーさんが います。リーさんは 日本[にほん]へ 来[く]る 前[まえ]に 国[くに]で 2年[ねん] 日本語[にほんご]を 勉強[べんきょう]した （２） 、日本語[にほんご]が とても 上手[じょうず]です。わたしは よく リーさんに 宿題[しゅくだい]を 手伝[てつだ]って もらいます。リーさんは いつも 「（３） いいですよ」と 言[い]って くれます。わたしも いつか リーさんの ように 上手[じょうず]に （４） たいです。",
   "es": "En mi escuela hay muchos estudiantes extranjeros; los que más, de China. En mi clase está Lee, que estudió japonés dos años antes de venir y lo habla muy bien. A menudo me ayuda con los deberes y siempre dice «claro, no pasa nada». Algún día quiero hablar tan bien como Lee.",
   "huecos": [
    {
     "opciones": [
      "から",
      "まで",
      "で",
      "に"
     ],
     "nota": "Procedencia: から."
    },
    {
     "opciones": [
      "ので",
      "のに",
      "けど",
      "が"
     ],
     "nota": "Causa: ので."
    },
    {
     "opciones": [
      "いつでも",
      "いつも",
      "いつか",
      "いつ"
     ],
     "nota": "いつでも いい = cuando quieras."
    },
    {
     "opciones": [
      "話[はな]せる ように なり",
      "話[はな]す ことに し",
      "話[はな]して み",
      "話[はな]さなくて"
     ],
     "nota": "〜ように なりたい = llegar a poder."
    }
   ]
  },
  {
   "texto": "土曜日[どようび]に 引[ひ]っ越[こ]しを しました。新[あたら]しい アパートは 前[まえ]の アパートより 広[ひろ]くて、窓[まど] （１） 公園[こうえん]が 見[み]えます。引[ひ]っ越[こ]しは 友[とも]だちが 三人[さんにん] 手伝[てつだ]いに 来[き]て くれました。重[おも]い 荷物[にもつ]が 多[おお]かったので、たいへんでした。昼[ひる]ごはんは みんなで ピザを （２） 。夜[よる] 7時[じ]ごろ やっと 全部[ぜんぶ] （３） 。友[とも]だちに 「ありがとう」と 言[い]って、こんど みんなを 家[いえ]に （４） と 約束[やくそく]しました。",
   "es": "El sábado me mudé. El piso nuevo es más amplio que el anterior y desde la ventana se ve un parque. Vinieron tres amigos a ayudarme; había mucho peso y fue duro. Comimos pizza entre todos y sobre las 7 por fin terminamos. Les di las gracias y prometí invitarles a casa.",
   "huecos": [
    {
     "opciones": [
      "から",
      "で",
      "に",
      "へ"
     ],
     "nota": "Desde dónde se ve: から."
    },
    {
     "opciones": [
      "食[た]べました",
      "作[つく]りました",
      "売[う]りました",
      "持[も]ちました"
     ],
     "nota": "La comida: la comieron."
    },
    {
     "opciones": [
      "終[お]わりました",
      "始[はじ]まりました",
      "はじめました",
      "かかりました"
     ],
     "nota": "Terminar: 終わる."
    },
    {
     "opciones": [
      "呼[よ]ぶ",
      "呼[よ]んだ",
      "呼[よ]んで",
      "呼[よ]ばない"
     ],
     "nota": "Lo que se promete hacer: forma de diccionario ＋ と."
    }
   ]
  },
  {
   "texto": "きょう、学校[がっこう]の 帰[かえ]りに 本屋[ほんや]へ 寄[よ]りました。日本語[にほんご]の 辞書[じしょ]が （１） からです。本屋[ほんや]には いろいろな 辞書[じしょ]が ありました。大[おお]きい 辞書[じしょ]は 字[じ]が 見[み]やすいですが、重[おも]くて 高[たか]いです。小[ちい]さい 辞書[じしょ]は 軽[かる]いですが、字[じ]が 小[ちい]さくて 見[み] （２） です。店[みせ]の 人[ひと]に 聞[き]いたら、「学生[がくせい] （３） この 辞書[じしょ]が 人気[にんき]ですよ」と 教[おし]えて くれました。それは 大[おお]きくなくて、字[じ]も 見[み]やすい 辞書[じしょ]でした。わたしは それに （４） 。",
   "es": "Hoy al volver de clase pasé por una librería porque quería un diccionario. Los grandes se leen bien pero pesan y son caros; los pequeños son ligeros pero la letra es diminuta. El dependiente me dijo que entre estudiantes el más popular era uno no muy grande y fácil de leer. Me quedé con ese.",
   "huecos": [
    {
     "opciones": [
      "ほしかった",
      "ほしい",
      "ほしくて",
      "ほしく"
     ],
     "nota": "Motivo pasado: ほしかったからです."
    },
    {
     "opciones": [
      "にくい",
      "やすい",
      "すぎ",
      "たい"
     ],
     "nota": "見にくい = difícil de ver."
    },
    {
     "opciones": [
      "には",
      "では",
      "とは",
      "へは"
     ],
     "nota": "Entre/para los estudiantes: 学生には."
    },
    {
     "opciones": [
      "しました",
      "なりました",
      "ありました",
      "いました"
     ],
     "nota": "〜に する = decidirse por."
    }
   ]
  },
  {
   "texto": "わたしの 趣味[しゅみ]は 写真[しゃしん]です。休[やす]みの 日[ひ]は いつも カメラを 持[も]って 出[で]かけます。（１） 花[はな]や 山[やま]の 写真[しゃしん]を とります。きのうは 近[ちか]くの 公園[こうえん]で さくらの 写真[しゃしん]を たくさん とりました。家[いえ]に 帰[かえ]って、パソコンで 写真[しゃしん]を 見[み]ました。一番[いちばん] よく とれた 写真[しゃしん]を 母[はは]に （２） 。母[はは]は 「きれいね」と 言[い]って、とても よろこびました。来月[らいげつ]、町[まち]の 写真[しゃしん]の コンテストが あるので、（３） 写真[しゃしん]を 出[だ]して （４） と 思[おも]います。",
   "es": "Mi afición es la fotografía. Los días libres salgo con la cámara; sobre todo hago fotos de flores y montañas. Ayer hice muchas de los cerezos del parque; al volver las miré en el ordenador y le enseñé a mi madre la mejor, que se puso muy contenta. El mes que viene hay un concurso en la ciudad y creo que presentaré esa foto.",
   "huecos": [
    {
     "opciones": [
      "よく",
      "まだ",
      "もう",
      "あまり"
     ],
     "nota": "Con frecuencia: よく."
    },
    {
     "opciones": [
      "見[み]せました",
      "見[み]ました",
      "見[み]えました",
      "見[み]に 行[い]きました"
     ],
     "nota": "Enseñar algo a alguien: 見せる."
    },
    {
     "opciones": [
      "その",
      "この",
      "どの",
      "あんな"
     ],
     "nota": "La foto ya mencionada: その."
    },
    {
     "opciones": [
      "みよう",
      "みる",
      "みた",
      "みない"
     ],
     "nota": "〜て みようと 思う = pensar intentar."
    }
   ]
  },
  {
   "texto": "先週[せんしゅう]、デパートで くつを 買[か]いました。でも、家[いえ]で はいて みたら、少[すこ]し 小[ちい]さかったです。（１） 、きのう デパートへ 行[い]って、店[みせ]の 人[ひと]に 話[はな]しました。店[みせ]の 人[ひと]は 「大[おお]きい サイズと かえ （２） 」と 言[い]いました。大[おお]きい サイズを はいて みたら、ちょうど よかったです。店[みせ]の 人[ひと]が とても 親切[しんせつ]だったので、また この 店[みせ]で 買[か]い物[もの]を （３） 。こんどは 買[か]う 前[まえ]に ちゃんと はいて （４） 。",
   "es": "La semana pasada compré unos zapatos, pero en casa me quedaban pequeños. Ayer volví y se lo dije al dependiente, que me ofreció cambiarlos por una talla más; me quedaron perfectos. Como fue tan amable volveré a comprar allí. La próxima vez me los probaré antes de comprar.",
   "huecos": [
    {
     "opciones": [
      "それで",
      "でも",
      "しかし",
      "けれど"
     ],
     "nota": "Consecuencia: それで."
    },
    {
     "opciones": [
      "ましょうか",
      "ませんでした",
      "て いました",
      "たかったです"
     ],
     "nota": "Ofrecimiento: 〜ましょうか."
    },
    {
     "opciones": [
      "したいです",
      "しました",
      "して いません",
      "しなくても いいです"
     ],
     "nota": "Deseo: 〜たいです."
    },
    {
     "opciones": [
      "みます",
      "みました",
      "みません",
      "いました"
     ],
     "nota": "〜て みる en futuro."
    }
   ]
  },
  {
   "texto": "うちの 近[ちか]くに 大[おお]きい スーパーが あります。この スーパーは 夜[よる] 11時[じ]まで 開[あ]いて いるので、とても （１） 。わたしは 仕事[しごと]が 終[お]わって から、よく ここで 買[か]い物[もの]を します。夜[よる] 9時[じ]を すぎると、お弁当[べんとう]や パンが 安[やす]く （２） 。きのうも 9時[じ]半[はん]ごろ 行[い]って、お弁当[べんとう]を 二[ふた]つ 買[か]いました。一[ひと]つは 晩[ばん]ごはんに 食[た]べて、もう 一[ひと]つは 次[つぎ]の 日[ひ]の 昼[ひる]ごはんに （３） 。安[やす]くて 便利[べんり]なので、（４） 行[い]きます。",
   "es": "Cerca de casa hay un súper grande que abre hasta las 11 de la noche: muy práctico. Después del trabajo suelo comprar allí. Pasadas las 9, la comida preparada y el pan se abaratan. Ayer fui a las 9:30 y compré dos bentos: uno para cenar y otro para comer al día siguiente. Como es barato y práctico, voy a menudo.",
   "huecos": [
    {
     "opciones": [
      "便利[べんり]です",
      "便利[べんり]な",
      "便利[べんり]に",
      "便利[べんり]で"
     ],
     "nota": "Final de frase: 便利です."
    },
    {
     "opciones": [
      "なります",
      "します",
      "あります",
      "います"
     ],
     "nota": "〜く なる: volverse."
    },
    {
     "opciones": [
      "しました",
      "なりました",
      "ありました",
      "いました"
     ],
     "nota": "〜に する = destinar a."
    },
    {
     "opciones": [
      "よく",
      "ぜんぜん",
      "あまり",
      "はじめて"
     ],
     "nota": "A menudo: よく."
    }
   ]
  },
  {
   "texto": "わたしは 子[こ]どもの とき、野菜[やさい]が きらいでした。特[とく]に にんじんが きらいで、いつも お皿[さら]の 上[うえ]に （１） 。母[はは]は いろいろな 料理[りょうり]を 作[つく]って、わたしに 野菜[やさい]を 食[た]べさせようと しました。ある 日[ひ]、母[はは]が にんじんの ケーキを 作[つく]って くれました。とても あまくて おいしかったので、全部[ぜんぶ] （２） 。あとで、それが にんじんだと （３） 、とても びっくりしました。今[いま]は 野菜[やさい]が 大好[だいす]きで、毎日[まいにち] たくさん （４） 。",
   "es": "De niño odiaba la verdura, sobre todo la zanahoria, que siempre dejaba en el plato. Mi madre probaba de todo para que la comiera. Un día me hizo una tarta de zanahoria; estaba tan rica que me la comí entera. Cuando luego supe qué era, me llevé una sorpresa. Ahora me encanta la verdura y como mucha todos los días.",
   "huecos": [
    {
     "opciones": [
      "のこしました",
      "食[た]べました",
      "買[か]いました",
      "洗[あら]いました"
     ],
     "nota": "La odiaba: la dejaba."
    },
    {
     "opciones": [
      "食[た]べました",
      "のこしました",
      "作[つく]りました",
      "あげました"
     ],
     "nota": "Estaba rica: se la comió."
    },
    {
     "opciones": [
      "わかって",
      "わかると",
      "わかったり",
      "わからないで"
     ],
     "nota": "Al saberlo, se sorprendió: 〜て."
    },
    {
     "opciones": [
      "食[た]べて います",
      "食[た]べました",
      "食[た]べたかったです",
      "食[た]べませんでした"
     ],
     "nota": "Hábito actual."
    }
   ]
  },
  {
   "texto": "会社[かいしゃ]の 山田[やまだ]さんは 来月[らいげつ] 結婚[けっこん]します。それで、みんなで プレゼントを あげる ことに なりました。何[なに]が いいか、いろいろ （１） 。お皿[さら]や コップが いいと 言[い]う 人[ひと]も いました （２） 、山田[やまだ]さんは コーヒーが 好[す]きなので、コーヒーの 道具[どうぐ]に しました。きのう、わたしが デパートへ 買[か]いに 行[い]きました。きれいな コーヒーカップが あったので、それも いっしょに （３） 。山田[やまだ]さんが よろこんで （４） と いいです。",
   "es": "Yamada, de la oficina, se casa el mes que viene y decidimos regalarle algo. Lo discutimos mucho: algunos decían platos o vasos, pero como le gusta el café elegimos un juego para hacer café. Ayer fui a comprarlo y, como había unas tazas preciosas, las compré también. Ojalá le guste.",
   "huecos": [
    {
     "opciones": [
      "話[はな]しました",
      "話[はな]して います",
      "話[はな]したいです",
      "話[はな]しません"
     ],
     "nota": "Pasado."
    },
    {
     "opciones": [
      "が",
      "ので",
      "から",
      "し"
     ],
     "nota": "Contraste: が."
    },
    {
     "opciones": [
      "買[か]いました",
      "売[う]りました",
      "もらいました",
      "かりました"
     ],
     "nota": "Comprar."
    },
    {
     "opciones": [
      "くれる",
      "あげる",
      "もらう",
      "やる"
     ],
     "nota": "Que él se alegre (por nosotros): 〜て くれる."
    }
   ]
  },
  {
   "texto": "日曜日[にちようび]の 朝[あさ]、公園[こうえん]で ジョギングを しました。公園[こうえん]には 走[はし]って いる 人[ひと]が たくさん いました。犬[いぬ]と （１） 歩[ある]いて いる 人[ひと]も いました。わたしは 30分[ふん]ぐらい 走[はし]りました。走[はし]った あとは、公園[こうえん]の 中[なか]の 店[みせ]で 水[みず]を 買[か]って 飲[の]みました。とても （２） 。家[いえ]に 帰[かえ]って シャワーを 浴[あ]びてから、朝[あさ]ごはんを 食[た]べました。運動[うんどう]した あとの 朝[あさ]ごはんは いつもより おいしく （３） 。これから 毎週[まいしゅう] 日曜日[にちようび]に 走[はし]る （４） です。",
   "es": "El domingo por la mañana salí a correr al parque. Había mucha gente corriendo y otros paseando con el perro. Corrí unos 30 minutos y luego compré agua en la tienda del parque: estaba buenísima. En casa me duché y desayuné; después de hacer ejercicio el desayuno sabe mejor. A partir de ahora correré todos los domingos.",
   "huecos": [
    {
     "opciones": [
      "いっしょに",
      "ひとりで",
      "すぐ",
      "また"
     ],
     "nota": "Con el perro: いっしょに."
    },
    {
     "opciones": [
      "おいしかったです",
      "おいしいです",
      "おいしく ないです",
      "おいしそうです"
     ],
     "nota": "Pasado."
    },
    {
     "opciones": [
      "感[かん]じました",
      "しました",
      "いました",
      "ありました"
     ],
     "nota": "Notar: 感じる."
    },
    {
     "opciones": [
      "つもり",
      "こと",
      "ため",
      "ところ"
     ],
     "nota": "Intención: 〜つもりです."
    }
   ]
  },
  {
   "texto": "わたしの 部屋[へや]は 2階[かい]に あります。窓[まど]から 山[やま]が 見[み]えて、とても 気持[きも]ちが いいです。でも、部屋[へや]は あまり 広[ひろ]く ありません。ベッドと 机[つくえ]を （１） 、もう ほかの 物[もの]は 置[お]けません。本[ほん]が 多[おお]いので、本棚[ほんだな]が ほしいですが、置[お]く ところが （２） 。それで、先週[せんしゅう] ベッドの 下[した]に 本[ほん]を 入[い]れる はこを 買[か]いました。はこに 本[ほん]を 入[い]れたら、部屋[へや]が 少[すこ]し （３） 。今[いま]は 前[まえ]より 部屋[へや]が 好[す]きに （４） 。",
   "es": "Mi cuarto está en la segunda planta; desde la ventana se ve la montaña. Pero es pequeño: con la cama y la mesa ya no cabe nada. Tengo muchos libros y querría una estantería, pero no hay sitio, así que compré una caja para meterlos debajo de la cama. Al guardarlos, la habitación quedó más amplia. Ahora me gusta más que antes.",
   "huecos": [
    {
     "opciones": [
      "置[お]いたら",
      "置[お]いて",
      "置[お]くと",
      "置[お]くので"
     ],
     "nota": "Al ponerlos (condición cumplida): 〜たら."
    },
    {
     "opciones": [
      "ありません",
      "あります",
      "いません",
      "います"
     ],
     "nota": "No hay sitio."
    },
    {
     "opciones": [
      "広[ひろ]く なりました",
      "広[ひろ]く しました",
      "広[ひろ]かったです",
      "広[ひろ]いです"
     ],
     "nota": "Cambio: 〜く なる."
    },
    {
     "opciones": [
      "なりました",
      "しました",
      "ありました",
      "いました"
     ],
     "nota": "〜に なる: llegar a gustar."
    }
   ]
  },
  {
   "texto": "あした、友[とも]だちの たんじょうびの パーティーが あります。わたしは ケーキを 作[つく]って 持[も]って いく ことに しました。ケーキを 作[つく]るのは はじめてなので、インターネットで 作[つく]り方[かた]を （１） 。きょう スーパーで たまごと さとうと バターを 買[か]いました。家[いえ]に 帰[かえ]って すぐ 作[つく]りはじめましたが、（２） うまく いきませんでした。母[はは]に 手伝[てつだ]って もらって、もう 一度[いちど] （３） 。二回目[にかいめ]は とても きれいに できました。友[とも]だちが よろこんで くれる （４） 。",
   "es": "Mañana es la fiesta de cumpleaños de un amigo y decidí llevar una tarta hecha por mí. Como era la primera vez, miré la receta en internet. Hoy compré huevos, azúcar y mantequilla; me puse enseguida, pero la primera no salió bien. Con la ayuda de mi madre la hice otra vez y salió preciosa. Ojalá le guste.",
   "huecos": [
    {
     "opciones": [
      "しらべました",
      "あそびました",
      "わすれました",
      "やめました"
     ],
     "nota": "Buscar información: しらべる."
    },
    {
     "opciones": [
      "一回目[いっかいめ]は",
      "二回目[にかいめ]は",
      "いつも",
      "もう"
     ],
     "nota": "La primera vez salió mal."
    },
    {
     "opciones": [
      "作[つく]りました",
      "食[た]べました",
      "買[か]いました",
      "すてました"
     ],
     "nota": "Hacerla otra vez."
    },
    {
     "opciones": [
      "と いいです",
      "から です",
      "ので",
      "かもしれません ので"
     ],
     "nota": "Deseo: 〜と いいです."
    }
   ]
  },
  {
   "texto": "わたしは 毎年[まいとし] 夏[なつ]に 家族[かぞく]と 海[うみ]へ 行[い]きます。ことしは 沖縄[おきなわ]へ 行[い]きました。沖縄[おきなわ]の 海[うみ]は とても きれいで、水[みず]が 青[あお]くて すきとおって いました。わたしは 毎日[まいにち] 海[うみ]で （１） 。夜[よる]は ホテルの 近[ちか]くの 店[みせ]で 沖縄[おきなわ]の 料理[りょうり]を 食[た]べました。（２） 料理[りょうり]は 東京[とうきょう]では 食[た]べた ことが ない 料理[りょうり]でした。最後[さいご]の 日[ひ]は 雨[あめ]でしたが、水族館[すいぞくかん]へ 行[い]ったので、（３） 。来年[らいねん]も （４） 行[い]きたいです。",
   "es": "Cada verano voy a la playa con mi familia; este año fuimos a Okinawa. El mar era precioso, azul y transparente, y nadé todos los días. Por la noche cenábamos comida de Okinawa, platos que nunca había probado en Tokio. El último día llovió, pero fuimos al acuario y no pasó nada. El año que viene quiero volver.",
   "huecos": [
    {
     "opciones": [
      "泳[およ]ぎました",
      "泳[およ]ぎます",
      "泳[およ]ぎたいです",
      "泳[およ]ぎませんでした"
     ],
     "nota": "Pasado habitual de esos días."
    },
    {
     "opciones": [
      "その",
      "この",
      "あんな",
      "どんな"
     ],
     "nota": "Esos platos (ya mencionados): その."
    },
    {
     "opciones": [
      "だいじょうぶでした",
      "たいへんでした",
      "ざんねんでした",
      "こまりました"
     ],
     "nota": "Llovió, pero con el acuario no hubo problema."
    },
    {
     "opciones": [
      "また",
      "まだ",
      "もう",
      "さっき"
     ],
     "nota": "Otra vez: また."
    }
   ]
  }
 ]
}
