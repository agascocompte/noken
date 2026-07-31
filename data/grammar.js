// Datos de la guía Nōken 5 — grammar
// Editable a mano: es JSON puro asignado a N5.data.grammar
// Furigana: escribe 漢字[かんじ] y el renderizador lo convierte en ruby.
// "temas" alimenta la vista «Por tema» — etiquetas válidas en scripts/sections/grammar.js
window.N5=window.N5||{data:{}};
N5.data.grammar=
[
 {
  "leccion": 1,
  "titulo": "Presentarse: 〜は〜です",
  "puntos": [
   {
    "patron": "S1 は S2 です",
    "explicacion": "La partícula は (se lee «wa») marca el tema de la frase. です equivale a «ser» en estilo formal.",
    "temas": [
     "sustantivos"
    ],
    "ejemplos": [
     {
      "jp": "わたしはアグスです。",
      "es": "Yo soy Agus."
     },
     {
      "jp": "ミラーさんはアメリカ人[じん]です。",
      "es": "El Sr. Miller es americano."
     }
    ]
   },
   {
    "patron": "S1 は S2 じゃありません",
    "explicacion": "Forma negativa de です. También existe la variante では ありません, un poco más formal.",
    "temas": [
     "sustantivos"
    ],
    "ejemplos": [
     {
      "jp": "サントスさんは学生[がくせい]じゃありません。",
      "es": "El Sr. Santos no es estudiante."
     }
    ]
   },
   {
    "patron": "〜か",
    "explicacion": "Añadir か al final convierte la frase en pregunta. No se usa el signo «?» en japonés formal.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "ミラーさんは会社員[かいしゃいん]ですか。…はい、会社員[かいしゃいん]です。",
      "es": "¿El Sr. Miller es empleado de empresa? …Sí, lo es."
     }
    ]
   },
   {
    "patron": "S の S",
    "explicacion": "の une dos nombres: pertenencia o afiliación. El poseedor va delante.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "わたしは IMC の社員[しゃいん]です。",
      "es": "Soy empleado de IMC."
     },
     {
      "jp": "これはわたしの本[ほん]です。",
      "es": "Este es mi libro."
     }
    ]
   },
   {
    "patron": "〜さん",
    "explicacion": "Se añade al apellido de otras personas (nunca al propio nombre). Para niños: 〜ちゃん.",
    "temas": [
     "sustantivos"
    ],
    "ejemplos": [
     {
      "jp": "あの人[ひと]は木村[きむら]さんです。",
      "es": "Aquella persona es la Sra. Kimura."
     }
    ]
   }
  ]
 },
 {
  "leccion": 2,
  "titulo": "Esto, eso, aquello: これ・それ・あれ",
  "puntos": [
   {
    "patron": "これ／それ／あれ",
    "explicacion": "これ = cerca del hablante, それ = cerca del oyente, あれ = lejos de ambos. Funcionan como pronombres.",
    "temas": [
     "demostrativos"
    ],
    "ejemplos": [
     {
      "jp": "これは辞書[じしょ]です。",
      "es": "Esto es un diccionario."
     },
     {
      "jp": "それはわたしの傘[かさ]です。",
      "es": "Eso es mi paraguas."
     }
    ]
   },
   {
    "patron": "この S／その S／あの S",
    "explicacion": "Igual que los anteriores pero siempre acompañan a un nombre.",
    "temas": [
     "demostrativos"
    ],
    "ejemplos": [
     {
      "jp": "この本[ほん]はわたしのです。",
      "es": "Este libro es mío."
     },
     {
      "jp": "あの人[ひと]はだれですか。",
      "es": "¿Quién es aquella persona?"
     }
    ]
   },
   {
    "patron": "そうです／そうじゃありません",
    "explicacion": "Para responder a preguntas con nombre: «así es / no es así».",
    "temas": [
     "sustantivos"
    ],
    "ejemplos": [
     {
      "jp": "それはテレホンカードですか。…はい、そうです。",
      "es": "¿Eso es una tarjeta telefónica? …Sí, así es."
     }
    ]
   },
   {
    "patron": "S1 ですか、S2 ですか",
    "explicacion": "Pregunta de elección entre dos opciones. Se responde con la opción, no con はい/いいえ.",
    "temas": [
     "sustantivos"
    ],
    "ejemplos": [
     {
      "jp": "これは「9」ですか、「7」ですか。…「9」です。",
      "es": "¿Esto es un 9 o un 7? …Es un 9."
     }
    ]
   },
   {
    "patron": "S の (sustitución)",
    "explicacion": "の puede sustituir a un nombre ya mencionado.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "これはコンピューターの本[ほん]です。",
      "es": "Este es un libro de informática."
     },
     {
      "jp": "あのかばんはわたしのです。",
      "es": "Aquel bolso es el mío."
     }
    ]
   },
   {
    "patron": "〜ね・〜よ",
    "explicacion": "Partículas de final de frase: ね busca la complicidad del otro («¿verdad?») y よ aporta algo que el otro no sabe («te lo digo yo»).",
    "ejemplos": [
     {
      "jp": "きょうは暑[あつ]いですね。",
      "es": "Hace calor hoy, ¿verdad?"
     },
     {
      "jp": "この店[みせ]はおいしいですよ。",
      "es": "Este sitio está buenísimo, te lo digo yo."
     }
    ],
    "temas": [
     "particulas"
    ],
    "fuente": "soumatome"
   }
  ]
 },
 {
  "leccion": 3,
  "titulo": "Lugares: ここ・そこ・あそこ",
  "puntos": [
   {
    "patron": "ここ／そこ／あそこ／どこ",
    "explicacion": "Serie de lugar: aquí / ahí / allí / dónde. La versión formal es こちら／そちら／あちら／どちら.",
    "temas": [
     "demostrativos"
    ],
    "ejemplos": [
     {
      "jp": "トイレはどこですか。…あそこです。",
      "es": "¿Dónde está el baño? …Allí."
     }
    ]
   },
   {
    "patron": "S は place です",
    "explicacion": "Para indicar dónde está algo o alguien con です.",
    "temas": [
     "sustantivos",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "電話[でんわ]は 2階[かい]です。",
      "es": "El teléfono está en la segunda planta."
     },
     {
      "jp": "山田[やまだ]さんは事務所[じむしょ]です。",
      "es": "El Sr. Yamada está en la oficina."
     }
    ]
   },
   {
    "patron": "どちら (país, empresa, escuela)",
    "explicacion": "どちら pregunta cortésmente por el lugar/institución: «¿de dónde?».",
    "temas": [
     "demostrativos"
    ],
    "ejemplos": [
     {
      "jp": "会社[かいしゃ]はどちらですか。…IMC です。",
      "es": "¿Cuál es su empresa? …IMC."
     }
    ]
   },
   {
    "patron": "S1 の S2 (origen, marca)",
    "explicacion": "の también indica origen o marca del producto.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "これはどこのコンピューターですか。…日本[にほん]のです。",
      "es": "¿De dónde es este ordenador? …Es japonés."
     }
    ]
   },
   {
    "patron": "いくらですか",
    "explicacion": "Preguntar el precio.",
    "temas": [
     "interrogativos"
    ],
    "ejemplos": [
     {
      "jp": "この時計[とけい]はいくらですか。…5000円[えん]です。",
      "es": "¿Cuánto cuesta este reloj? …5.000 yenes."
     }
    ]
   }
  ]
 },
 {
  "leccion": 4,
  "titulo": "La hora y los verbos: 〜ます",
  "puntos": [
   {
    "patron": "今[いま]〜時[じ]〜分[ふん]です",
    "explicacion": "Decir la hora. Ojo con las lecturas irregulares: 4時[じ] (よじ), 9時[じ] (くじ), 7時[じ] (しちじ).",
    "temas": [
     "tiempo"
    ],
    "ejemplos": [
     {
      "jp": "今[いま]何時[なんじ]ですか。…8時[じ]半[はん]です。",
      "es": "¿Qué hora es? …Las ocho y media."
     }
    ]
   },
   {
    "patron": "V ます／ません／ました／ませんでした",
    "explicacion": "El verbo en forma ます: presente-futuro afirmativo, negativo, pasado y pasado negativo. El verbo siempre va al final.",
    "temas": [
     "forma-masu"
    ],
    "ejemplos": [
     {
      "jp": "毎朝[まいあさ] 6時[じ]に起[お]きます。",
      "es": "Cada mañana me levanto a las seis."
     },
     {
      "jp": "きのう勉強[べんきょう]しませんでした。",
      "es": "Ayer no estudié."
     }
    ]
   },
   {
    "patron": "時間[じかん] に V",
    "explicacion": "La partícula に marca la hora a la que ocurre la acción. Se usa con horas y fechas concretas; con palabras como きょう o 毎日[まいにち] no se pone.",
    "temas": [
     "particulas",
     "tiempo"
    ],
    "ejemplos": [
     {
      "jp": "6時[じ]に起[お]きます。",
      "es": "Me levanto a las seis."
     },
     {
      "jp": "日曜日[にちようび]（に）働[はたら]きません。",
      "es": "No trabajo el domingo."
     }
    ]
   },
   {
    "patron": "〜から〜まで",
    "explicacion": "から = desde, まで = hasta. Sirven para tiempo y lugar.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "銀行[ぎんこう]は 9時[じ]から 3時[じ]までです。",
      "es": "El banco abre de nueve a tres."
     },
     {
      "jp": "大阪[おおさか]から東京[とうきょう]まで",
      "es": "desde Osaka hasta Tokio"
     }
    ]
   },
   {
    "patron": "S1 と S2",
    "explicacion": "と une nombres: «y».",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "銀行[ぎんこう]の休[やす]みは土曜日[どようび]と日曜日[にちようび]です。",
      "es": "Los días de cierre del banco son sábado y domingo."
     }
    ]
   }
  ]
 },
 {
  "leccion": 5,
  "titulo": "Ir y venir: へ・で",
  "puntos": [
   {
    "patron": "place へ 行[い]きます／来[き]ます／帰[かえ]ります",
    "explicacion": "へ (se lee «e») marca la dirección del movimiento.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "京都[きょうと]へ行[い]きます。",
      "es": "Voy a Kioto."
     },
     {
      "jp": "うちへ帰[かえ]ります。",
      "es": "Vuelvo a casa."
     }
    ]
   },
   {
    "patron": "どこ（へ）も 行[い]きません",
    "explicacion": "Interrogativo + も + negación = negación total: «no voy a ningún sitio».",
    "temas": [
     "particulas",
     "interrogativos"
    ],
    "ejemplos": [
     {
      "jp": "きのうどこも行[い]きませんでした。",
      "es": "Ayer no fui a ningún sitio."
     }
    ]
   },
   {
    "patron": "transporte で 行[い]きます",
    "explicacion": "で marca el medio de transporte. Excepción: 歩[ある]いて (a pie, sin で).",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "電車[でんしゃ]で大阪[おおさか]へ行[い]きます。",
      "es": "Voy a Osaka en tren."
     },
     {
      "jp": "歩[ある]いて駅[えき]へ行[い]きます。",
      "es": "Voy a la estación andando."
     }
    ]
   },
   {
    "patron": "persona と 行[い]きます",
    "explicacion": "と marca con quién se hace algo. «Solo» es 一人[ひとり]で.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "家族[かぞく]と日本[にほん]へ来[き]ました。",
      "es": "Vine a Japón con mi familia."
     }
    ]
   },
   {
    "patron": "いつ",
    "explicacion": "«Cuándo». No lleva に. Las fechas concretas sí llevan に.",
    "temas": [
     "interrogativos"
    ],
    "ejemplos": [
     {
      "jp": "いつ日本[にほん]へ来[き]ましたか。…3月[がつ]25日[にち]に来[き]ました。",
      "es": "¿Cuándo viniste a Japón? …El 25 de marzo."
     }
    ]
   },
   {
    "patron": "〜よ",
    "explicacion": "Partícula final que aporta información nueva o énfasis al oyente.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "この電車[でんしゃ]は甲子園[こうしえん]へ行[い]きますよ。",
      "es": "Este tren sí va a Kōshien, ¿eh?"
     }
    ]
   }
  ]
 },
 {
  "leccion": 6,
  "titulo": "Objeto directo: を",
  "puntos": [
   {
    "patron": "S を V",
    "explicacion": "を marca el objeto directo del verbo.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "ジュースを飲[の]みます。",
      "es": "Bebo zumo."
     },
     {
      "jp": "本[ほん]を読[よ]みます。",
      "es": "Leo un libro."
     }
    ]
   },
   {
    "patron": "place で V",
    "explicacion": "で marca el lugar donde ocurre la acción (distinto de に de existencia).",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "駅[えき]で新聞[しんぶん]を買[か]います。",
      "es": "Compro el periódico en la estación."
     }
    ]
   },
   {
    "patron": "何[なに]をしますか",
    "explicacion": "Preguntar qué hace alguien.",
    "temas": [
     "interrogativos"
    ],
    "ejemplos": [
     {
      "jp": "日曜日[にちようび]何[なに]をしますか。…テニスをします。",
      "es": "¿Qué haces el domingo? …Juego al tenis."
     }
    ]
   },
   {
    "patron": "〜ませんか",
    "explicacion": "Invitación: «¿no quieres…?». Más cortés que ましょう.",
    "temas": [
     "forma-masu"
    ],
    "ejemplos": [
     {
      "jp": "いっしょにビールを飲[の]みませんか。…ええ、いいですね。",
      "es": "¿Nos tomamos una cerveza juntos? …Sí, ¡buena idea!"
     }
    ]
   },
   {
    "patron": "〜ましょう",
    "explicacion": "Propuesta de hacer algo juntos cuando ya hay acuerdo: «hagamos…».",
    "temas": [
     "forma-masu"
    ],
    "ejemplos": [
     {
      "jp": "ロビーで会[あ]いましょう。",
      "es": "Quedemos en el vestíbulo."
     }
    ]
   }
  ]
 },
 {
  "leccion": 7,
  "titulo": "Dar y recibir: あげます・もらいます",
  "puntos": [
   {
    "patron": "herramienta で V",
    "explicacion": "で también marca el instrumento o medio con que se hace algo.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "はしでご飯[はん]を食[た]べます。",
      "es": "Como el arroz con palillos."
     },
     {
      "jp": "日本語[にほんご]でレポートを書[か]きます。",
      "es": "Escribo el informe en japonés."
     }
    ]
   },
   {
    "patron": "persona に あげます",
    "explicacion": "あげます = dar (yo → otros). に marca el receptor.",
    "temas": [
     "dar-recibir",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "木村[きむら]さんに花[はな]をあげました。",
      "es": "Le di flores a la Sra. Kimura."
     }
    ]
   },
   {
    "patron": "persona に／から もらいます",
    "explicacion": "もらいます = recibir. に o から marcan quién lo da.",
    "temas": [
     "dar-recibir",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "カリナさんにチョコレートをもらいました。",
      "es": "Recibí chocolate de Karina."
     }
    ]
   },
   {
    "patron": "もう V ました",
    "explicacion": "もう = «ya». Se responde negativamente con まだです (todavía no).",
    "temas": [
     "tiempo"
    ],
    "ejemplos": [
     {
      "jp": "もう昼[ひる]ご飯[はん]を食[た]べましたか。…いいえ、まだです。",
      "es": "¿Ya has comido? …No, todavía no."
     }
    ]
   }
  ]
 },
 {
  "leccion": 8,
  "titulo": "Adjetivos: い-adj y な-adj",
  "puntos": [
   {
    "patron": "S は い-adj です",
    "explicacion": "Los adjetivos い terminan en い y no cambian ante です. Negativo: 〜くないです (いい → よくないです).",
    "temas": [
     "sustantivos",
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "富士山[ふじさん]は高[たか]いです。",
      "es": "El monte Fuji es alto."
     },
     {
      "jp": "この本[ほん]は面白[おもしろ]くないです。",
      "es": "Este libro no es interesante."
     }
    ]
   },
   {
    "patron": "S は な-adj です",
    "explicacion": "Los adjetivos な se comportan como nombres con です. Negativo: じゃありません.",
    "temas": [
     "sustantivos",
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "ここは静[しず]かです。",
      "es": "Aquí es tranquilo."
     },
     {
      "jp": "あの人[ひと]は親切[しんせつ]じゃありません。",
      "es": "Aquella persona no es amable."
     }
    ]
   },
   {
    "patron": "い-adj + S ／ な-adj な + S",
    "explicacion": "Delante de un nombre, el adjetivo な recupera la な.",
    "temas": [
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "新[あたら]しい車[くるま]です。",
      "es": "Es un coche nuevo."
     },
     {
      "jp": "きれいな町[まち]です。",
      "es": "Es una ciudad bonita."
     }
    ]
   },
   {
    "patron": "とても／あまり",
    "explicacion": "とても = muy (afirmativo). あまり = no mucho (siempre con negación).",
    "temas": [
     "adverbios"
    ],
    "ejemplos": [
     {
      "jp": "日本[にほん]はとてもにぎやかです。",
      "es": "Japón es muy animado."
     },
     {
      "jp": "あまり有名[ゆうめい]じゃありません。",
      "es": "No es muy famoso."
     }
    ]
   },
   {
    "patron": "S はどうですか／どんな S",
    "explicacion": "どうですか pide una impresión; どんな + nombre pide una descripción.",
    "temas": [
     "sustantivos"
    ],
    "ejemplos": [
     {
      "jp": "日本[にほん]の生活[せいかつ]はどうですか。…楽[たの]しいです。",
      "es": "¿Qué tal la vida en Japón? …Divertida."
     },
     {
      "jp": "大阪[おおさか]はどんな町[まち]ですか。",
      "es": "¿Qué tipo de ciudad es Osaka?"
     }
    ]
   },
   {
    "patron": "〜が、〜",
    "explicacion": "が une dos frases con sentido adversativo: «pero».",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "日本[にほん]の食[た]べ物[もの]はおいしいですが、高[たか]いです。",
      "es": "La comida japonesa está buena, pero es cara."
     }
    ]
   }
  ]
 },
 {
  "leccion": 9,
  "titulo": "Gustos y habilidades: が好[す]きです",
  "puntos": [
   {
    "patron": "S が 好[す]きです／嫌[きら]いです",
    "explicacion": "Con 好[す]き, 嫌[きら]い, 上手[じょうず], 下手[へた] y わかります el objeto se marca con が, no con を.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "わたしは音楽[おんがく]が好[す]きです。",
      "es": "Me gusta la música."
     },
     {
      "jp": "ミラーさんは日本語[にほんご]が上手[じょうず]です。",
      "es": "El Sr. Miller habla bien japonés."
     }
    ]
   },
   {
    "patron": "S が わかります",
    "explicacion": "«Entender» también usa が.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "わたしはひらがなが わかります。",
      "es": "Entiendo el hiragana."
     }
    ]
   },
   {
    "patron": "よく／だいたい／少[すこ]し／あまり／全然[ぜんぜん]",
    "explicacion": "Adverbios de grado, de más a menos. あまり y 全然[ぜんぜん] exigen negación.",
    "temas": [
     "adverbios"
    ],
    "ejemplos": [
     {
      "jp": "英語[えいご]が少[すこ]しわかります。",
      "es": "Entiendo un poco de inglés."
     },
     {
      "jp": "漢字[かんじ]が全然[ぜんぜん]わかりません。",
      "es": "No entiendo nada los kanji."
     }
    ]
   },
   {
    "patron": "どうして／〜から",
    "explicacion": "どうして pregunta la razón; から al final de la frase la da.",
    "temas": [
     "interrogativos",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "どうして朝[あさ]ご飯[はん]を食[た]べませんか。…時間[じかん]がありませんから。",
      "es": "¿Por qué no desayunas? …Porque no tengo tiempo."
     }
    ]
   }
  ]
 },
 {
  "leccion": 10,
  "titulo": "Existencia: あります・います",
  "puntos": [
   {
    "patron": "S が あります／います",
    "explicacion": "あります = existir cosas; います = existir personas y animales.",
    "temas": [
     "existencia",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "机[つくえ]の上[うえ]に写真[しゃしん]があります。",
      "es": "Encima de la mesa hay una foto."
     },
     {
      "jp": "公園[こうえん]に子[こ]どもがいます。",
      "es": "En el parque hay niños."
     }
    ]
   },
   {
    "patron": "place に S が あります／います",
    "explicacion": "に marca el lugar de existencia. Orden: lugar に cosa が verbo.",
    "temas": [
     "existencia",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "受付[うけつけ]に電話[でんわ]があります。",
      "es": "En recepción hay un teléfono."
     }
    ]
   },
   {
    "patron": "S は place に あります／います",
    "explicacion": "Cuando lo conocido es la cosa, se convierte en tema con は: «X está en…».",
    "temas": [
     "existencia",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "ミラーさんは事務所[じむしょ]にいます。",
      "es": "El Sr. Miller está en la oficina."
     },
     {
      "jp": "東京[とうきょう]ディズニーランドは千葉県[ちばけん]にあります。",
      "es": "Tokio Disneyland está en la prefectura de Chiba."
     }
    ]
   },
   {
    "patron": "S1（posición）の S2",
    "explicacion": "Palabras de posición: 上[うえ]・下[した]・前[まえ]・後[うし]ろ・右[みぎ]・左[ひだり]・中[なか]・外[そと]・隣[となり]・近[ちか]く・間[あいだ].",
    "temas": [
     "existencia"
    ],
    "ejemplos": [
     {
      "jp": "郵便局[ゆうびんきょく]は銀行[ぎんこう]の隣[となり]にあります。",
      "es": "Correos está al lado del banco."
     },
     {
      "jp": "いすの下[した]に猫[ねこ]がいます。",
      "es": "Debajo de la silla hay un gato."
     }
    ]
   },
   {
    "patron": "S1 や S2（など）",
    "explicacion": "や enumera sin ser exhaustivo (a diferencia de と). など = «etcétera».",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "箱[はこ]の中[なか]に手紙[てがみ]や写真[しゃしん]などがあります。",
      "es": "En la caja hay cartas, fotos, etc."
     }
    ]
   }
  ]
 },
 {
  "leccion": 11,
  "titulo": "Contadores y cantidades",
  "puntos": [
   {
    "patron": "Numerales + contador",
    "explicacion": "La cantidad va normalmente detrás del nombre + partícula, sin partícula propia: S を 数[かず] V.",
    "temas": [
     "contadores"
    ],
    "ejemplos": [
     {
      "jp": "りんごを 4つ買[か]いました。",
      "es": "Compré cuatro manzanas."
     },
     {
      "jp": "切手[きって]を 3枚[まい]ください。",
      "es": "Deme tres sellos, por favor."
     }
    ]
   },
   {
    "patron": "期間[きかん]（〜時間[じかん]・〜日[にち]・〜週間[しゅうかん]…）",
    "explicacion": "Duración: 〜分[ふん], 〜時間[じかん], 〜日[にち], 〜週間[しゅうかん], 〜か月[げつ], 〜年[ねん]. No lleva に.",
    "temas": [
     "contadores"
    ],
    "ejemplos": [
     {
      "jp": "毎日[まいにち] 7時間[じかん]働[はたら]きます。",
      "es": "Trabajo siete horas al día."
     },
     {
      "jp": "日本[にほん]に 1年[ねん]います。",
      "es": "Estaré un año en Japón."
     }
    ]
   },
   {
    "patron": "どのくらい",
    "explicacion": "Pregunta duración o cantidad de tiempo.",
    "temas": [
     "contadores"
    ],
    "ejemplos": [
     {
      "jp": "どのくらい日本語[にほんご]を勉強[べんきょう]しましたか。…3か月[げつ]勉強[べんきょう]しました。",
      "es": "¿Cuánto tiempo has estudiado japonés? …Tres meses."
     }
    ]
   },
   {
    "patron": "〜回[かい]",
    "explicacion": "Contador de veces: 1回[かい], 2回[かい]… + 期間[きかん]に〜回[かい] (frecuencia).",
    "temas": [
     "contadores"
    ],
    "ejemplos": [
     {
      "jp": "月[つき]に 2回[かい]映画[えいが]を見[み]ます。",
      "es": "Veo cine dos veces al mes."
     }
    ]
   },
   {
    "patron": "〜だけ",
    "explicacion": "«Solo, solamente». Sustituye o acompaña a la partícula.",
    "temas": [
     "contadores"
    ],
    "ejemplos": [
     {
      "jp": "休[やす]みは日曜日[にちようび]だけです。",
      "es": "Solo libro los domingos."
     }
    ]
   }
  ]
 },
 {
  "leccion": 12,
  "titulo": "Pasado de adjetivos y comparaciones",
  "puntos": [
   {
    "patron": "Pasado de S y な-adj",
    "explicacion": "でした / じゃありませんでした.",
    "temas": [
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "きのうは雨[あめ]でした。",
      "es": "Ayer llovió (estuvo lluvioso)."
     },
     {
      "jp": "パーティーはにぎやかじゃありませんでした。",
      "es": "La fiesta no estuvo animada."
     }
    ]
   },
   {
    "patron": "Pasado de い-adj",
    "explicacion": "〜かったです / 〜くなかったです. いい → よかった／よくなかった.",
    "temas": [
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "旅行[りょこう]は楽[たの]しかったです。",
      "es": "El viaje fue divertido."
     },
     {
      "jp": "天気[てんき]はよくなかったです。",
      "es": "El tiempo no fue bueno."
     }
    ]
   },
   {
    "patron": "S1 は S2 より 〜",
    "explicacion": "Comparativo: «S1 es más… que S2».",
    "temas": [
     "comparaciones"
    ],
    "ejemplos": [
     {
      "jp": "飛行機[ひこうき]は新幹線[しんかんせん]より速[はや]いです。",
      "es": "El avión es más rápido que el tren bala."
     }
    ]
   },
   {
    "patron": "S1 と S2 と どちらが〜",
    "explicacion": "Elegir entre dos. Se responde con 〜のほうが.",
    "temas": [
     "comparaciones"
    ],
    "ejemplos": [
     {
      "jp": "サッカーと野球[やきゅう]とどちらが面白[おもしろ]いですか。…サッカーのほうが面白[おもしろ]いです。",
      "es": "¿Qué es más interesante, el fútbol o el béisbol? …El fútbol."
     }
    ]
   },
   {
    "patron": "S（の中[なか]）で 何[なに]が いちばん〜",
    "explicacion": "Superlativo dentro de un grupo.",
    "temas": [
     "comparaciones"
    ],
    "ejemplos": [
     {
      "jp": "日本料理[にほんりょうり]で何[なに]がいちばんおいしいですか。…てんぷらがいちばんおいしいです。",
      "es": "De la comida japonesa, ¿qué es lo más rico? …La tempura."
     }
    ]
   }
  ]
 },
 {
  "leccion": 13,
  "titulo": "Deseos: 〜が欲[ほ]しい・〜たい",
  "puntos": [
   {
    "patron": "S が 欲[ほ]しいです",
    "explicacion": "«Quiero (una cosa)». El objeto lleva が.",
    "temas": [
     "deseos",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "わたしは車[くるま]が欲[ほ]しいです。",
      "es": "Quiero un coche."
     }
    ]
   },
   {
    "patron": "V たいです",
    "explicacion": "«Quiero + verbo»: raíz de ます + たい. Se conjuga como adjetivo い. El objeto puede llevar を o が.",
    "temas": [
     "deseos"
    ],
    "ejemplos": [
     {
      "jp": "沖縄[おきなわ]へ行[い]きたいです。",
      "es": "Quiero ir a Okinawa."
     },
     {
      "jp": "てんぷらを食[た]べたいです。",
      "es": "Quiero comer tempura."
     }
    ]
   },
   {
    "patron": "place へ V（raíz ます）に 行[い]きます",
    "explicacion": "«Ir a + lugar + a hacer algo»: el propósito con に.",
    "temas": [
     "deseos",
     "forma-masu",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "神戸[こうべ]へインド料理[りょうり]を食[た]べに行[い]きます。",
      "es": "Voy a Kobe a comer comida india."
     },
     {
      "jp": "日本[にほん]へ経済[けいざい]の勉強[べんきょう]に来[き]ました。",
      "es": "Vine a Japón a estudiar economía."
     }
    ]
   },
   {
    "patron": "何[なに]か／どこか",
    "explicacion": "«Algo» / «algún sitio». Las partículas へ/が se pueden omitir tras ellos.",
    "temas": [
     "interrogativos",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "何[なに]か食[た]べましたか。",
      "es": "¿Has comido algo?"
     },
     {
      "jp": "どこか行[い]きたいです。",
      "es": "Quiero ir a algún sitio."
     }
    ]
   },
   {
    "patron": "疑問詞 ＋ でも",
    "explicacion": "«Cualquiera»: el interrogativo seguido de でも abre la opción a todos los casos. だれでも «cualquiera», 何[なん]でも «cualquier cosa», どこでも «en cualquier sitio», いつでも «cuando sea». No lo confundas con el でも de «pero».",
    "ejemplos": [
     {
      "jp": "この仕事[しごと]はだれでもできます。",
      "es": "Este trabajo lo puede hacer cualquiera."
     },
     {
      "jp": "弟[おとうと]は何[なん]でも食[た]べます。",
      "es": "Mi hermano come de todo."
     },
     {
      "jp": "いつでも来[き]てください。",
      "es": "Ven cuando quieras."
     }
    ],
    "temas": [
     "interrogativos"
    ],
    "fuente": "soumatome"
   },
   {
    "patron": "疑問詞 ＋ も ＋ negativo",
    "explicacion": "«Nadie, nada, a ningún sitio»: con el verbo en negativo, el interrogativo más も niega todos los casos. Es el reverso exacto de 〜でも.",
    "ejemplos": [
     {
      "jp": "教室[きょうしつ]にはだれもいません。",
      "es": "En el aula no hay nadie."
     },
     {
      "jp": "今朝[けさ]は何[なに]も食[た]べませんでした。",
      "es": "Esta mañana no comí nada."
     },
     {
      "jp": "日曜日[にちようび]はどこへも行[い]きませんでした。",
      "es": "El domingo no fui a ningún sitio."
     }
    ],
    "temas": [
     "interrogativos"
    ],
    "fuente": "soumatome"
   }
  ]
 },
 {
  "leccion": 14,
  "titulo": "La forma て: 〜てください・〜ています",
  "puntos": [
   {
    "patron": "Forma て",
    "explicacion": "Grupo I: う・つ・る→って／む・ぶ・ぬ→んで／く→いて／ぐ→いで／す→して (行[い]く→行[い]って ★). Grupo II: る→て. Grupo III: して・きて.",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "書[か]く→書[か]いて、飲[の]む→飲[の]んで、買[か]う→買[か]って",
      "es": "escribir → escribiendo, beber → bebiendo, comprar → comprando"
     }
    ]
   },
   {
    "patron": "V てください",
    "explicacion": "Petición cortés: «haga…, por favor».",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "ちょっと待[ま]ってください。",
      "es": "Espere un momento, por favor."
     },
     {
      "jp": "ここに住所[じゅうしょ]を書[か]いてください。",
      "es": "Escriba aquí su dirección, por favor."
     }
    ]
   },
   {
    "patron": "V ています (acción en curso)",
    "explicacion": "Acción que está ocurriendo ahora.",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "ミラーさんは今[いま]電話[でんわ]をかけています。",
      "es": "El Sr. Miller está llamando por teléfono ahora."
     },
     {
      "jp": "雨[あめ]が降[ふ]っています。",
      "es": "Está lloviendo."
     }
    ]
   },
   {
    "patron": "V ましょうか",
    "explicacion": "Ofrecerse a hacer algo por el otro.",
    "temas": [
     "forma-masu"
    ],
    "ejemplos": [
     {
      "jp": "荷物[にもつ]を持[も]ちましょうか。…ありがとうございます。",
      "es": "¿Le llevo el equipaje? …Gracias."
     }
    ]
   }
  ]
 },
 {
  "leccion": 15,
  "titulo": "Permiso y prohibición: 〜てもいい・〜てはいけない",
  "puntos": [
   {
    "patron": "V てもいいです",
    "explicacion": "Dar o pedir permiso: «se puede…».",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "写真[しゃしん]を撮[と]ってもいいですか。…ええ、いいですよ。",
      "es": "¿Puedo hacer fotos? …Sí, claro."
     }
    ]
   },
   {
    "patron": "V てはいけません",
    "explicacion": "Prohibición: «no se puede…».",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "ここでたばこを吸[す]ってはいけません。",
      "es": "Aquí no se puede fumar."
     }
    ]
   },
   {
    "patron": "V ています (estado)",
    "explicacion": "Con ciertos verbos indica estado resultante: 住[す]んでいます (vivo en), 知[し]っています (conozco), 結婚[けっこん]しています (estoy casado), 持[も]っています (tengo).",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "大阪[おおさか]に住[す]んでいます。",
      "es": "Vivo en Osaka."
     },
     {
      "jp": "ミラーさんを知[し]っていますか。…いいえ、知[し]りません。",
      "es": "¿Conoces al Sr. Miller? …No, no lo conozco."
     }
    ]
   },
   {
    "patron": "V ています (hábito/profesión)",
    "explicacion": "También describe ocupación o hábito.",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "IMC で働[はたら]いています。",
      "es": "Trabajo en IMC."
     },
     {
      "jp": "大学[だいがく]で日本語[にほんご]を教[おし]えています。",
      "es": "Enseño japonés en la universidad."
     }
    ]
   }
  ]
 },
 {
  "leccion": 16,
  "titulo": "Encadenar frases: 〜て、〜",
  "puntos": [
   {
    "patron": "V1 て、V2",
    "explicacion": "La forma て une acciones en orden temporal.",
    "temas": [
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "朝[あさ] 6時[じ]に起[お]きて、シャワーを浴[あ]びて、会社[かいしゃ]へ行[い]きます。",
      "es": "Me levanto a las seis, me ducho y voy a la empresa."
     }
    ]
   },
   {
    "patron": "い-adj → 〜くて／な-adj・S → 〜で",
    "explicacion": "Para encadenar adjetivos o nombres.",
    "temas": [
     "adjetivos",
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "ミラーさんは若[わか]くて、元気[げんき]です。",
      "es": "El Sr. Miller es joven y enérgico."
     },
     {
      "jp": "奈良[なら]は静[しず]かで、きれいな町[まち]です。",
      "es": "Nara es una ciudad tranquila y bonita."
     }
    ]
   },
   {
    "patron": "V1 てから、V2",
    "explicacion": "«Después de V1, V2». Marca claramente el orden.",
    "temas": [
     "forma-te",
     "tiempo"
    ],
    "ejemplos": [
     {
      "jp": "仕事[しごと]が終[お]わってから、飲[の]みに行[い]きます。",
      "es": "Después de acabar el trabajo, voy a tomar algo."
     }
    ]
   },
   {
    "patron": "S1 は S2 が adj",
    "explicacion": "Describir una característica de una parte: «X tiene Y …».",
    "temas": [
     "adjetivos",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "カリナさんは髪[かみ]が長[なが]いです。",
      "es": "Karina tiene el pelo largo."
     },
     {
      "jp": "大阪[おおさか]は食[た]べ物[もの]がおいしいです。",
      "es": "En Osaka la comida está rica."
     }
    ]
   },
   {
    "patron": "どうやって",
    "explicacion": "Preguntar el modo o el camino.",
    "temas": [
     "interrogativos"
    ],
    "ejemplos": [
     {
      "jp": "大学[だいがく]までどうやって行[い]きますか。…16番[ばん]のバスに乗[の]って、大学前[だいがくまえ]で降[お]ります。",
      "es": "¿Cómo se va a la universidad? …Se coge el bus 16 y se baja en Daigaku-mae."
     }
    ]
   }
  ]
 },
 {
  "leccion": 17,
  "titulo": "La forma ない: 〜ないでください・〜なければなりません",
  "puntos": [
   {
    "patron": "Forma ない",
    "explicacion": "Grupo I: cambia u→a + ない (買[か]う→買[か]わない ★). Grupo II: る→ない. Grupo III: しない・こない. ある → ない.",
    "temas": [
     "forma-nai"
    ],
    "ejemplos": [
     {
      "jp": "行[い]く→行[い]かない、食[た]べる→食[た]べない",
      "es": "ir → no ir, comer → no comer"
     }
    ]
   },
   {
    "patron": "V ないでください",
    "explicacion": "Petición negativa: «no haga…, por favor».",
    "temas": [
     "forma-nai"
    ],
    "ejemplos": [
     {
      "jp": "ここで写真[しゃしん]を撮[と]らないでください。",
      "es": "No haga fotos aquí, por favor."
     }
    ]
   },
   {
    "patron": "V なければなりません",
    "explicacion": "Obligación: «hay que, tener que». (= V ないform sin ない + なければなりません).",
    "temas": [
     "forma-nai"
    ],
    "ejemplos": [
     {
      "jp": "薬[くすり]を飲[の]まなければなりません。",
      "es": "Tengo que tomar la medicina."
     }
    ]
   },
   {
    "patron": "V なくてもいいです",
    "explicacion": "Ausencia de obligación: «no hace falta que…».",
    "temas": [
     "forma-nai"
    ],
    "ejemplos": [
     {
      "jp": "あした来[こ]なくてもいいです。",
      "es": "Mañana no hace falta que vengas."
     }
    ]
   },
   {
    "patron": "S までに",
    "explicacion": "Plazo límite: «antes de, para». Distinto de まで (hasta).",
    "temas": [
     "tiempo",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "土曜日[どようび]までに本[ほん]を返[かえ]さなければなりません。",
      "es": "Tengo que devolver el libro antes del sábado."
     }
    ]
   }
  ]
 },
 {
  "leccion": 18,
  "titulo": "Forma diccionario: 〜ことができます",
  "puntos": [
   {
    "patron": "Forma diccionario",
    "explicacion": "Grupo I: cambia i→u desde la raíz ます (かきます→かく). Grupo II: raíz + る (たべます→たべる). Grupo III: する・くる.",
    "temas": [
     "forma-diccionario"
    ],
    "ejemplos": [
     {
      "jp": "飲[の]みます→飲[の]む、見[み]ます→見[み]る、します→する",
      "es": "beber, ver, hacer (forma diccionario)"
     }
    ]
   },
   {
    "patron": "S／V る ことが できます",
    "explicacion": "Capacidad o posibilidad: «poder, saber hacer».",
    "temas": [
     "forma-diccionario"
    ],
    "ejemplos": [
     {
      "jp": "ミラーさんは日本語[にほんご]を話[はな]すことができます。",
      "es": "El Sr. Miller sabe hablar japonés."
     },
     {
      "jp": "ここで切符[きっぷ]を買[か]うことができます。",
      "es": "Aquí se pueden comprar billetes."
     }
    ]
   },
   {
    "patron": "わたしの趣味[しゅみ]は V る ことです",
    "explicacion": "Describir el hobby con verbo nominalizado.",
    "temas": [
     "forma-diccionario"
    ],
    "ejemplos": [
     {
      "jp": "わたしの趣味[しゅみ]は映画[えいが]を見[み]ることです。",
      "es": "Mi hobby es ver películas."
     }
    ]
   },
   {
    "patron": "V る／S の まえに",
    "explicacion": "«Antes de…». Con verbo siempre en forma diccionario, aunque la frase sea pasada.",
    "temas": [
     "forma-diccionario",
     "tiempo",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "寝[ね]るまえに、本[ほん]を読[よ]みます。",
      "es": "Antes de dormir, leo."
     },
     {
      "jp": "食事[しょくじ]のまえに、手[て]を洗[あら]います。",
      "es": "Antes de comer, me lavo las manos."
     }
    ]
   },
   {
    "patron": "V た あとで",
    "explicacion": "«Después de…»: forma た del verbo + あとで. Con sustantivo se usa 〜のあとで. Es la pareja de 〜まえに.",
    "ejemplos": [
     {
      "jp": "ご飯[はん]を食[た]べたあとで、薬[くすり]を飲[の]みます。",
      "es": "Después de comer me tomo la medicina."
     },
     {
      "jp": "仕事[しごと]のあとで、映画[えいが]を見[み]ました。",
      "es": "Después del trabajo vi una película."
     }
    ],
    "temas": [
     "tiempo",
     "forma-ta"
    ],
    "fuente": "soumatome"
   }
  ]
 },
 {
  "leccion": 19,
  "titulo": "Forma た: 〜たことがあります・〜たり",
  "puntos": [
   {
    "patron": "Forma た",
    "explicacion": "Idéntica a la forma て pero con た/だ: 飲[の]んで→飲[の]んだ, 書[か]いて→書[か]いた.",
    "temas": [
     "forma-ta"
    ],
    "ejemplos": [
     {
      "jp": "行[い]く→行[い]った、食[た]べる→食[た]べた",
      "es": "ir → fui, comer → comí"
     }
    ]
   },
   {
    "patron": "V たことが あります",
    "explicacion": "Experiencia vital: «alguna vez he…».",
    "temas": [
     "forma-ta"
    ],
    "ejemplos": [
     {
      "jp": "馬[うま]に乗[の]ったことがあります。",
      "es": "He montado a caballo alguna vez."
     },
     {
      "jp": "すき焼[や]きを食[た]べたことがありますか。…いいえ、一度[いちど]もありません。",
      "es": "¿Has comido sukiyaki? …No, ni una vez."
     }
    ]
   },
   {
    "patron": "V たり、V たりします",
    "explicacion": "Enumeración no exhaustiva de acciones, sin orden.",
    "temas": [
     "forma-ta"
    ],
    "ejemplos": [
     {
      "jp": "日曜日[にちようび]はテニスをしたり、映画[えいが]を見[み]たりします。",
      "es": "Los domingos juego al tenis, veo películas y cosas así."
     }
    ]
   },
   {
    "patron": "〜く／〜に なります",
    "explicacion": "Cambio de estado: い-adj → 〜くなります; な-adj/S → 〜になります.",
    "temas": [
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "寒[さむ]くなりました。",
      "es": "Ha empezado a hacer frío."
     },
     {
      "jp": "日本語[にほんご]が上手[じょうず]になりました。",
      "es": "Has mejorado en japonés."
     }
    ]
   },
   {
    "patron": "けれど（も）・だから",
    "explicacion": "Conectores de contraste y de causa: けれど（も） «pero» une dos frases y suena más suave que しかし; だから «por eso» introduce la consecuencia.",
    "ejemplos": [
     {
      "jp": "高[たか]かったけれど、買[か]いました。",
      "es": "Era caro, pero lo compré."
     },
     {
      "jp": "雨[あめ]が降[ふ]っています。だから、行[い]きません。",
      "es": "Está lloviendo, así que no voy."
     }
    ],
    "temas": [
     "conectores"
    ],
    "fuente": "soumatome"
   }
  ]
 },
 {
  "leccion": 20,
  "titulo": "Estilo informal: hablar sin ます・です",
  "puntos": [
   {
    "patron": "Estilo cortés ↔ estilo informal",
    "explicacion": "Con amigos y familia se habla sin ます ni です, usando las formas de la tabla de verbos: ます→forma de diccionario, ません→forma ない, ました→forma た, です→だ. Estas mismas formas se usan dentro de varias estructuras gramaticales (L21, L22, L23).",
    "temas": [
     "estilo-informal"
    ],
    "ejemplos": [
     {
      "jp": "行[い]きます→行[い]く／行[い]きません→行[い]かない／行[い]きました→行[い]った",
      "es": "voy / no voy / fui (informal)"
     }
    ]
   },
   {
    "patron": "Adjetivos y nombres en estilo informal",
    "explicacion": "い-adj: igual (高[たか]い). な-adj y S: だ／じゃない／だった／じゃなかった.",
    "temas": [
     "estilo-informal",
     "adjetivos"
    ],
    "ejemplos": [
     {
      "jp": "きれいです→きれいだ、雨[あめ]でした→雨[あめ]だった",
      "es": "es bonito / llovió (informal)"
     }
    ]
   },
   {
    "patron": "Preguntas en estilo informal",
    "explicacion": "En conversación informal la pregunta se hace con entonación, sin か. El だ final se omite.",
    "temas": [
     "estilo-informal"
    ],
    "ejemplos": [
     {
      "jp": "コーヒーを飲[の]む？…うん、飲[の]む。",
      "es": "¿Tomas café? …Sí."
     },
     {
      "jp": "今晩[こんばん]暇[ひま]？…ううん、暇[ひま]じゃない。",
      "es": "¿Estás libre esta noche? …No, no lo estoy."
     }
    ]
   }
  ]
 },
 {
  "leccion": 21,
  "titulo": "Opinión y cita: 〜と思[おも]います・〜と言[い]います",
  "puntos": [
   {
    "patron": "〜と思[おも]います",
    "explicacion": "«Creo que…». Lo que se piensa va SIN ます: forma de diccionario (presente), forma ない (negativo) o forma た (pasado).",
    "temas": [
     "opinion-cita",
     "forma-diccionario"
    ],
    "ejemplos": [
     {
      "jp": "あした雨[あめ]が降[ふ]ると思[おも]います。",
      "es": "Creo que mañana lloverá."
     },
     {
      "jp": "日本[にほん]は物価[ぶっか]が高[たか]いと思[おも]います。",
      "es": "Creo que en Japón la vida es cara."
     }
    ]
   },
   {
    "patron": "「〜」と言[い]いました",
    "explicacion": "Citar palabras: cita directa con comillas, o indirecta con el verbo sin ます (forma de diccionario, ない o た) + と.",
    "temas": [
     "opinion-cita"
    ],
    "ejemplos": [
     {
      "jp": "ミラーさんは「来週[らいしゅう]東京[とうきょう]へ出張[しゅっちょう]します」と言[い]いました。",
      "es": "El Sr. Miller dijo: «La semana que viene voy de viaje de trabajo a Tokio»."
     }
    ]
   },
   {
    "patron": "〜でしょう？",
    "explicacion": "Buscar confirmación del oyente: «¿verdad?».",
    "temas": [
     "opinion-cita"
    ],
    "ejemplos": [
     {
      "jp": "あしたパーティーに行[い]くでしょう？…ええ、行[い]きます。",
      "es": "Vas a la fiesta mañana, ¿verdad? …Sí, voy."
     }
    ]
   },
   {
    "patron": "S（場所[ばしょ]）で〜が あります",
    "explicacion": "«Tener lugar un evento» con あります.",
    "temas": [
     "existencia",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "東京[とうきょう]でサッカーの試合[しあい]があります。",
      "es": "Hay un partido de fútbol en Tokio."
     }
    ]
   }
  ]
 },
 {
  "leccion": 22,
  "titulo": "Oraciones de relativo",
  "puntos": [
   {
    "patron": "V + S (oración de relativo)",
    "explicacion": "Un verbo en forma de diccionario, ない o た delante de un nombre lo modifica, como una oración de relativo. En japonés va siempre delante: 作ったケーキ = «la tarta que hice».",
    "temas": [
     "oracion-relativo"
    ],
    "ejemplos": [
     {
      "jp": "これはミラーさんが作[つく]ったケーキです。",
      "es": "Esta es la tarta que hizo el Sr. Miller."
     },
     {
      "jp": "京都[きょうと]へ行[い]く人[ひと]はだれですか。",
      "es": "¿Quién es la persona que va a Kioto?"
     }
    ]
   },
   {
    "patron": "El sujeto interno lleva が",
    "explicacion": "Dentro de la oración modificadora, el sujeto se marca con が (o の), nunca con は.",
    "temas": [
     "oracion-relativo",
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "わたしが住[す]んでいる町[まち]は小[ちい]さいです。",
      "es": "La ciudad en la que vivo es pequeña."
     }
    ]
   },
   {
    "patron": "時間[じかん]／約束[やくそく]／用事[ようじ]が あります",
    "explicacion": "あります también para tener tiempo, citas o asuntos.",
    "temas": [
     "existencia"
    ],
    "ejemplos": [
     {
      "jp": "今日[きょう]は時間[じかん]がありません。",
      "es": "Hoy no tengo tiempo."
     },
     {
      "jp": "友達[ともだち]と約束[やくそく]があります。",
      "es": "Tengo una cita con un amigo."
     }
    ]
   }
  ]
 },
 {
  "leccion": 23,
  "titulo": "Cuándo y condiciones: 〜とき・〜と",
  "puntos": [
   {
    "patron": "V／adj／S の とき、〜",
    "explicacion": "«Cuando…». El tiempo del verbo antes de とき indica si la acción está acabada (た) o no (diccionario).",
    "temas": [
     "tiempo"
    ],
    "ejemplos": [
     {
      "jp": "図書館[としょかん]で本[ほん]を借[か]りるとき、カードが要[い]ります。",
      "es": "Cuando pides un libro en la biblioteca, hace falta el carné."
     },
     {
      "jp": "国[くに]へ帰[かえ]ったとき、この時計[とけい]を買[か]いました。",
      "es": "Cuando volví a mi país, compré este reloj."
     }
    ]
   },
   {
    "patron": "V る と、〜",
    "explicacion": "Condición natural o automática: «si/cuando A, siempre B». Típico de máquinas e indicaciones.",
    "temas": [
     "condicional"
    ],
    "ejemplos": [
     {
      "jp": "このボタンを押[お]すと、お釣[つ]りが出[で]ます。",
      "es": "Si pulsas este botón, sale el cambio."
     },
     {
      "jp": "まっすぐ行[い]くと、駅[えき]があります。",
      "es": "Si sigues recto, está la estación."
     }
    ]
   },
   {
    "patron": "S が adj／V",
    "explicacion": "が marca fenómenos que se perciben o sujetos de descripción.",
    "temas": [
     "particulas"
    ],
    "ejemplos": [
     {
      "jp": "音[おと]がします。",
      "es": "Se oye un ruido."
     },
     {
      "jp": "気分[きぶん]が悪[わる]いです。",
      "es": "Me encuentro mal."
     }
    ]
   }
  ]
 },
 {
  "leccion": 24,
  "titulo": "Dar y recibir favores: くれます・〜てあげます",
  "puntos": [
   {
    "patron": "くれます",
    "explicacion": "«Dar(me)»: alguien me da algo a mí o a mi familia. El receptor (yo) suele omitirse.",
    "temas": [
     "dar-recibir"
    ],
    "ejemplos": [
     {
      "jp": "姉[あね]はわたしにセーターをくれました。",
      "es": "Mi hermana me dio un jersey."
     }
    ]
   },
   {
    "patron": "V てあげます",
    "explicacion": "Hacer un favor a otro. Cuidado: puede sonar condescendiente con superiores.",
    "temas": [
     "dar-recibir",
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "わたしは木村[きむら]さんに本[ほん]を貸[か]してあげました。",
      "es": "Le presté un libro a la Sra. Kimura."
     }
    ]
   },
   {
    "patron": "V てもらいます",
    "explicacion": "Recibir un favor: «alguien hace algo por mí».",
    "temas": [
     "dar-recibir",
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "わたしは山田[やまだ]さんに図書館[としょかん]の電話[でんわ]番号[ばんごう]を教[おし]えてもらいました。",
      "es": "El Sr. Yamada me dijo el teléfono de la biblioteca."
     }
    ]
   },
   {
    "patron": "V てくれます",
    "explicacion": "Alguien hace algo por mí (con matiz de agradecimiento; el sujeto es el otro).",
    "temas": [
     "dar-recibir",
     "forma-te"
    ],
    "ejemplos": [
     {
      "jp": "母[はは]はわたしにお弁当[べんとう]を作[つく]ってくれました。",
      "es": "Mi madre me preparó un bento."
     }
    ]
   }
  ]
 },
 {
  "leccion": 25,
  "titulo": "Condicional: 〜たら・〜ても",
  "puntos": [
   {
    "patron": "V たら、〜",
    "explicacion": "Condicional: «si…, entonces…». Forma た + ら. También con adjetivos y nombres (だったら).",
    "temas": [
     "condicional",
     "forma-ta"
    ],
    "ejemplos": [
     {
      "jp": "お金[かね]があったら、旅行[りょこう]します。",
      "es": "Si tuviera dinero, viajaría."
     },
     {
      "jp": "雨[あめ]が降[ふ]ったら、出[で]かけません。",
      "es": "Si llueve, no salgo."
     }
    ]
   },
   {
    "patron": "V たら (cuando)",
    "explicacion": "Con acciones futuras seguras equivale a «cuando acabe X».",
    "temas": [
     "condicional",
     "forma-ta"
    ],
    "ejemplos": [
     {
      "jp": "10時[じ]になったら、出[で]かけましょう。",
      "es": "Cuando sean las diez, salgamos."
     },
     {
      "jp": "国[くに]へ帰[かえ]ったら、父[ちち]の会社[かいしゃ]で働[はたら]きます。",
      "es": "Cuando vuelva a mi país, trabajaré en la empresa de mi padre."
     }
    ]
   },
   {
    "patron": "V ても、〜",
    "explicacion": "Concesivo: «aunque…». También 〜くても (い-adj), 〜でも (な-adj/S).",
    "temas": [
     "condicional"
    ],
    "ejemplos": [
     {
      "jp": "雨[あめ]が降[ふ]っても、洗濯[せんたく]します。",
      "es": "Aunque llueva, haré la colada."
     },
     {
      "jp": "安[やす]くても、買[か]いません。",
      "es": "Aunque sea barato, no lo compro."
     }
    ]
   }
  ]
 }
];
