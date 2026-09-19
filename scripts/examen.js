// Generador de exámenes tipo JLPT N5.
//
// No hay exámenes guardados: hay SEMILLAS. Cada examen es un número («Examen 7»)
// que siembra un generador determinista, así que el examen 7 siempre sale igual
// —se puede repetir y comparar la nota— pero no ocupa nada en el repositorio.
//
// Todo el material sale de data/: las frases de ejemplo de la gramática, los
// ejemplos de los verbos y los ejercicios ya escritos. La clave está en la
// convención de furigana 漢字[かんじ]: una frase como 「電気[でんき]を消[け]します」
// ya lleva dentro qué se escribe en kanji y cómo se lee, que es justo lo que
// preguntan los もんだい de 文字・語彙.
//
// Cubre de momento los dos bloques que se pueden generar sin escribir textos:
// 文字・語彙 completo y la parte de 文法 de 言語知識. 読解 y 聴解 van aparte.
"use strict";

(() => {
  const E = N5.examen = {};

  // ---------------------------------------------------------------- azar fijo
  // mulberry32 sembrado con FNV-1a: mismo texto → misma secuencia, siempre.
  function azar(semilla) {
    let h = 2166136261;
    for (const c of String(semilla)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
    let s = h >>> 0;
    const r = () => {
      s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    r.entero = n => Math.floor(r() * n);
    r.elige = a => a[r.entero(a.length)];
    r.baraja = a => {
      const x = a.slice();
      for (let i = x.length - 1; i > 0; i--) { const j = r.entero(i + 1); [x[i], x[j]] = [x[j], x[i]]; }
      return x;
    };
    r.muestra = (a, n) => r.baraja(a).slice(0, n);
    return r;
  }
  E.azar = azar;

  const KANJI = /[一-鿿々〇]/;

  // ------------------------------------------------------------------- moras
  // Los distractores de lectura se construyen tocando UNA mora, no una letra:
  // きゃ o っか son una sola pieza y hay que moverlas enteras.
  const PEQUEÑAS = "ゃゅょぁぃぅぇぉ";
  function moras(kana) {
    const out = [];
    for (let i = 0; i < kana.length; i++) {
      let m = kana[i];
      if (m === "っ" && i + 1 < kana.length) m += kana[++i];
      while (i + 1 < kana.length && PEQUEÑAS.includes(kana[i + 1])) m += kana[++i];
      if (i + 1 < kana.length && kana[i + 1] === "ー") m += kana[++i];
      out.push(m);
    }
    return out;
  }

  const SONORAS = {
    か: "が", き: "ぎ", く: "ぐ", け: "げ", こ: "ご", さ: "ざ", し: "じ", す: "ず", せ: "ぜ", そ: "ぞ",
    た: "だ", ち: "ぢ", つ: "づ", て: "で", と: "ど", は: "ば", ひ: "び", ふ: "ぶ", へ: "べ", ほ: "ぼ"
  };
  const SORDAS = Object.fromEntries(Object.entries(SONORAS).map(([a, b]) => [b, a]));
  const SEMI = { は: "ぱ", ひ: "ぴ", ふ: "ぷ", へ: "ぺ", ほ: "ぽ" };
  // Parejas que de verdad se confunden al oído o al leer.
  const PARECIDAS = {
    し: "ち", ち: "し", つ: "す", す: "つ", ふ: "ほ", ほ: "ふ", ぬ: "ね", ね: "ぬ",
    れ: "わ", わ: "れ", め: "ぬ", る: "ろ", ろ: "る", き: "け", け: "き", え: "へ", へ: "え"
  };
  const VOCALES = ["あ", "い", "う", "え", "お"];

  // Lecturas mal escritas. Cada variante toca una sola cosa, que es como están
  // hechos los distractores de verdad: なまえ → なまい, まなえ, なまへ.
  function lecturasFalsas(lectura, r) {
    const ms = moras(lectura);
    const out = new Set();
    const mete = x => { if (x && x !== lectura && x.length > 1) out.add(x); };
    const cambia = (i, m) => { const c = ms.slice(); c[i] = m; return c.join(""); };

    for (let i = 0; i < ms.length; i++) {
      const m = ms[i];
      for (const tabla of [SONORAS, SORDAS, SEMI, PARECIDAS]) if (tabla[m]) mete(cambia(i, tabla[m]));
      if (VOCALES.includes(m)) for (const v of VOCALES) if (v !== m) mete(cambia(i, v));
      if (i + 1 < ms.length) {                       // transponer dos moras seguidas
        const c = ms.slice(); [c[i], c[i + 1]] = [c[i + 1], c[i]]; mete(c.join(""));
      }
      if (m === "っ") mete(ms.slice(0, i).concat(ms.slice(i + 1)).join(""));
      else if (i && /^[かきくけこさしすせそたちつてとぱぴぷぺぽ]/.test(m))
        mete(ms.slice(0, i).concat("っ", ms.slice(i)).join(""));
    }
    // vocal larga puesta o quitada: la trampa más repetida del examen
    if (/う$/.test(lectura)) mete(lectura.slice(0, -1));
    if (/[おこそとのほもよろごぞどぼぽょ]$/.test(lectura)) mete(lectura + "う");
    mete(lectura.replace("ょう", "ょ"));
    mete(lectura.replace("ゅう", "ゅ"));
    return r.baraja([...out]);
  }

  // Kanji que se confunden de un vistazo: la trampa clásica de もんだい２.
  const PARECIDOS = {};
  for (const grupo of [
    "日目白百", "人入", "大犬太", "土士", "天夫", "千干", "午牛", "力刀", "田由申",
    "右石", "先生", "車東", "名多", "王玉主", "休体", "何回", "本木末未", "水氷永",
    "早草", "見貝", "買売", "上止", "今令", "万方", "花化", "友左", "行後", "毎海",
    "作昨", "時持待", "国回", "電雷", "食飲", "語話読", "聞間門", "外名", "母毎",
    "会合", "半平", "字学", "安案", "花茶", "魚角", "長良", "雨両", "京東", "所近",
    "使便", "方万", "姉妹", "兄見", "説話", "明朝", "待持", "泊拍", "洗先", "料科",
    "院陰", "験険", "肉内", "牛午", "米来", "糸系", "耳取", "自目", "首道",
    "青晴", "寺時", "地池", "町田", "薬楽", "飯飲", "館官"
  ]) for (const k of grupo) PARECIDOS[k] = (PARECIDOS[k] || "") + grupo.replace(k, "");

  // ------------------------------------------------------- formas de un verbo
  // masuKanji cambia la cola kana del diccionario por la de ます; lo mismo vale
  // para て, た y ない, así que 会う da también 会って, 会った y 会わない.
  function enKanji(v, forma) {
    if (!v.kanji || !forma) return "";
    let n = 0;
    while (n < v.kanji.length && /[ぁ-ゖァ-ヺー]/.test(v.kanji[v.kanji.length - 1 - n])) n++;
    if (!n || !v.kana.endsWith(v.kanji.slice(-n))) return "";
    const corte = v.kana.length - n;
    return forma.length > corte ? v.kanji.slice(0, -n) + forma.slice(corte) : "";
  }

  // ------------------------------------------------------------- diccionario
  // Todas las grafías que la guía conoce. Sirve para saber dónde empieza y
  // acaba una palabra dentro de una frase: sin esto, cortar por las partículas
  // parte 「ひらがな」 por el が y 「です」 por el で.
  const AUX = [
    "です", "でした", "ではありません", "じゃありません", "じゃありませんでした",
    "ます", "ました", "ません", "ませんでした", "ましょう", "ましょうか", "ませんか",
    "ください", "でしょう", "たいです", "たい", "たかった", "ながら", "ましょうか",
    "ています", "ている", "ていました", "ていません", "てから", "てください",
    "ことができます", "ことがあります", "なければなりません", "なくてもいいです",
    "てもいいです", "てはいけません", "はいけません", "はいけない", "つもりです",
    // する se pega a un montón de sustantivos: 勉強します, コピーします, 旅行しました
    "し", "する", "した", "して", "しない", "します", "しました", "しません", "しませんでした",
    // colas de adjetivo en い y condicional たら
    "く", "くて", "くない", "かった", "くなかった", "ら",
    "と", "な", "の", "か", "ね", "よ", "が", "けど", "けれど", "けれども",
    "から", "ので", "とき", "まえに", "あとで", "までに"
  ];

  let D = null;
  function dicc() {
    if (D) return D;
    const d = N5.data;
    const formas = new Set();
    const mete = s => { s = N5.limpiaEntrada(String(s || "")).replace(/[〜～]/g, ""); if (s) formas.add(s); };
    for (const w of d.vocab) {
      mete(w.kana); mete(w.kanji);
      // 「にぎやか（な）」 se usa también suelto: にぎやかです, にぎやかじゃありません
      for (const c of [w.kana, w.kanji]) if (/[（\[]な[）\]]$/.test(String(c))) mete(String(c).replace(/[（\[]な[）\]]$/, ""));
    }
    for (const v of d.verbs) {
      for (const f of ["kana", "masu", "te", "ta", "nai", "kanji"]) mete(v[f]);
      for (const f of ["masu", "te", "ta", "nai"]) mete(enKanji(v, v[f]));
      // la raíz de ます se junta con ません, ましょう, ました…: 働き＋ません
      mete(v.masu.slice(0, -2));
      mete(enKanji(v, v.masu).slice(0, -2));
      // y la de ない con なければなりません: 飲ま＋なければなりません
      mete(v.nai.slice(0, -2));
      mete(enKanji(v, v.nai).slice(0, -2));
    }
    // adjetivos en い: 長い da 長かった, 長くない, 長くて…
    for (const w of d.vocab) {
      if (/[（\[]な[）\]]/.test(w.kana) || !/い$/.test(w.kana)) continue;
      for (const raiz of [N5.limpiaEntrada(w.kana), N5.limpiaEntrada(w.kanji)]) {
        if (!raiz || !/い$/.test(raiz)) continue;
        for (const cola of ["かった", "くない", "くて", "く", "くなかった"]) mete(raiz.slice(0, -1) + cola);
      }
    }
    for (const k of d.kanji) { mete(k.kanji); for (const e of k.ejemplos) { mete(e.palabra); mete(e.lectura); } }
    return (D = formas);
  }

  const NUMERO = /^[0-9０-９一二三四五六七八九十百千万]+$/;
  const CONTADOR = /^[0-9０-９一二三四五六七八九十百千万]+(つ|人|枚|本|冊|台|回|時|分|時間|月|日|円|歳|番|階|杯|匹|度|年|週間|か月|ページ|キロ|センチ|グラム|ど)?$/;
  const KATAKANA = /^[ァ-ヶー・]+$/;
  // Palabras de función y nombres propios que el libro usa pero no lista como
  // vocabulario. Sin esto el tokenizador no sabe dónde acaba 「木村さん」.
  const EXTRA = [
    "この", "その", "あの", "どの", "こんな", "そんな", "あんな", "どんな", "こう", "そう", "ああ", "どう",
    "こと", "もの", "ところ", "ため", "ほう", "とき", "まえ", "あと", "うち", "ほか", "ぐらい", "くらい",
    "だけ", "ずつ", "でも", "さん", "ちゃん", "くん", "たち", "ごろ", "ずつ", "ながら", "そして", "でも",
    "木村", "山田", "田中", "佐藤", "鈴木", "中村", "小林", "松本", "渡辺", "高橋", "伊藤", "山本",
    "だれ", "どなた", "なに", "なん", "いつ", "どこ", "どちら", "どれ", "いくつ", "いくら", "なぜ", "どうして",
    "京都", "東京", "大阪", "北京", "名古屋", "神戸", "横浜", "広島", "奈良", "沖縄", "甲子園", "富士山",
    "千葉", "県", "あまり", "とても", "もう", "まだ", "ちょっと", "すぐ", "また", "いつも", "よく",
    "たいてい", "ときどき", "ぜんぜん", "だいたい", "たぶん", "きっと", "いちばん", "もっと", "ゆっくり",
    "はじめて", "もちろん", "そろそろ", "ぜひ", "ずっと", "たくさん", "すこし", "みんな", "みなさん"
  ];

  // ------------------------------------------------------------ tokenizador
  // Para cortar una frase por sus partículas hay que saber cuáles lo son de
  // verdad: el が de 「ひらがな」, el で de 「です」 y el と de 「とき」 no lo son.
  // Se cubre la frase entera con el menor número de piezas conocidas posible
  // (programación dinámica), así una palabra larga siempre gana a los trocitos
  // sueltos que la compondrían.
  const PARTICULAS_TOK = ["は", "が", "を", "に", "で", "へ", "と", "も", "や", "の", "か", "ね", "よ",
    "から", "まで", "より", "など", "しか", "ばかり"];
  const CORTAN = ["は", "が", "を", "に", "で", "へ", "と", "も", "や", "の", "から", "まで", "より"];
  const DESCONOCIDO = 1000;   // una pieza no reconocida cuesta como mil conocidas

  function tokeniza(frase) {
    const s = frase.replace(/[。、？！「」]/g, "");
    if (!s) return null;
    const dic = dicc();
    const conocido = t => dic.has(t) || KATAKANA.test(t) || CONTADOR.test(t) || NUMERO.test(t)
      || /^[A-Za-z]+$/.test(t) || EXTRA.includes(t) || AUX.includes(t) || PARTICULAS_TOK.includes(t);
    const coste = new Array(s.length + 1).fill(Infinity);
    const atras = new Array(s.length + 1).fill(-1);
    coste[0] = 0;
    for (let i = 0; i < s.length; i++) {
      if (coste[i] === Infinity) continue;
      for (let j = i + 1; j <= s.length; j++) {
        const t = s.slice(i, j);
        const c = coste[i] + (conocido(t) ? 1 : j === i + 1 ? DESCONOCIDO : Infinity);
        if (c < coste[j]) { coste[j] = c; atras[j] = i; }
      }
    }
    if (coste[s.length] === Infinity) return null;
    const toks = [];
    for (let j = s.length; j > 0; j = atras[j]) toks.unshift(s.slice(atras[j], j));
    return { toks, desconocidas: Math.floor(coste[s.length] / DESCONOCIDO) };
  }

  // Trozos al estilo de もんだい２: palabra (o palabras) + la partícula que la
  // cierra. La cola final —el predicado— es un trozo más.
  function troceaFrase(frase) {
    const t = tokeniza(frase);
    if (!t || t.desconocidas) return null;      // si hay algo sin reconocer, mejor no tocar la frase
    const trozos = [];
    let acc = "";
    for (const tok of t.toks) {
      acc += tok;
      if (CORTAN.includes(tok) && acc.length > tok.length) { trozos.push(acc); acc = ""; }
    }
    if (acc) trozos.push(acc);
    return trozos.length ? trozos : null;
  }

  // ------------------------------------------------------------------ corpus
  let C = null;
  function corpus() {
    if (C) return C;
    const d = N5.data;

    // --- frases portadoras -------------------------------------------------
    const frases = [];
    const añade = f => {
      const crudo = N5.sinFurigana(String(f.jp));
      // Algunos «ejemplos» no son frases: tablas de conjugación (書く→書いて),
      // alternativas (へ＝に), la forma de diccionario como pista (―行きます) o
      // una aclaración entre paréntesis latinos.
      if (/[→／＝―]/.test(crudo) || /\([^)]*\)/.test(crudo)) return;
      // El libro escribe algunas frases con espacios y con partículas opcionales
      // entre paréntesis; el examen no los lleva.
      let p = crudo.replace(/[（）\s]/g, "").trim();
      if (!p || p.includes("…") || p.length < 5 || p.length > 42) return;
      // Los ejemplos de los verbos («ドアが開きます») son frases enteras a las que
      // el libro no les pone punto. En un examen sí lo llevan.
      if (!/[。？]$/.test(p)) p += "。";
      frases.push({ ...f, plano: p, completa: true });
    };
    for (const L of d.grammar) for (const pt of L.puntos) for (const e of pt.ejemplos)
      añade({ jp: e.jp, es: e.es, leccion: L.leccion, origen: "gramática" });
    for (const v of d.verbs) if (v.ejemplo)
      añade({ jp: v.ejemplo, es: "", leccion: v.lecciones?.[0] ?? null, origen: "verbos" });
    // Los ejercicios, con su hueco ya relleno, son frases completas más.
    for (const x of d.drills) if (x.pregunta.includes("（　）") && !/[A-Za-z]/.test(x.pregunta))
      añade({ jp: x.pregunta.replace("（　）", x.respuesta), es: "", leccion: null, origen: "ejercicios" });

    // --- palabras que se pueden preguntar ---------------------------------
    // Cada objetivo necesita tres cosas: cómo se escribe en kanji, cómo se lee
    // y una frase donde salga suelta. Sin frase no hay pregunta: el examen
    // nunca enseña una palabra sola.
    const objetivos = [];
    const mete = (kanjiRaw, kanaRaw, es, extra) => {
      // 「きれい（な）」 se empareja con 「きれい」, no con 「きれいな」: el な no
      // se escribe con el kanji y estropearía la frase al sustituir.
      const sinNa = s => String(s || "").replace(/[（\[]な[）\]]$/, "");
      const kanji = N5.limpiaEntrada(sinNa(kanjiRaw));
      const lectura = N5.limpiaEntrada(sinNa(kanaRaw));
      if (!kanji || !lectura || kanji === lectura) return;
      if (/[〜～・]/.test(kanji + lectura) || !KANJI.test(kanji)) return;
      const donde = frases.filter(f => ocurrencias(f.plano, kanji).length === 1);
      if (donde.length) objetivos.push({ kanji, lectura, es: es || "", frases: donde, ...extra });
    };
    for (const w of d.vocab) mete(w.kanji, w.kana, w.es, { leccion: w.leccion });
    for (const v of d.verbs) mete(enKanji(v, v.masu), v.masu, v.es, { leccion: v.lecciones?.[0] ?? null, verbo: true });
    for (const k of d.kanji) for (const e of k.ejemplos) mete(e.palabra, e.lectura, e.es, { leccion: null });
    const vistos = new Set();
    const palabras = objetivos.filter(o => !vistos.has(o.kanji) && vistos.add(o.kanji));

    // --- qué partícula sigue a cada palabra --------------------------------
    // Sustituto barato de un análisis morfológico: si dos palabras aparecen las
    // dos seguidas de を, las dos son objeto directo y una sirve de distractor
    // de la otra sin cantar por la categoría.
    const trasPalabra = new Map();
    for (const f of frases) for (const w of palabras) {
      const i = ocurrencias(f.plano, w.kanji)[0];
      if (i === undefined) continue;
      const sig = f.plano[i + w.kanji.length];
      if (sig && "はがをにでへとも".includes(sig)) {
        if (!trasPalabra.has(sig)) trasPalabra.set(sig, []);
        trasPalabra.get(sig).push(w);
      }
    }

    // --- kanji por lectura ON, para los distractores de escritura ----------
    const porOn = new Map();
    for (const k of d.kanji) {
      const on = (k.on || "").split("、")[0].replace(/・/g, "");
      if (!on) continue;
      if (!porOn.has(on)) porOn.set(on, []);
      porOn.get(on).push(k.kanji);
    }

    return (C = { frases, palabras, trasPalabra, porOn, todosKanji: d.kanji.map(k => k.kanji) });
  }
  E.corpus = corpus;
  E.trozosDe = troceaFrase;
  E.tokeniza = tokeniza;

  // Dónde aparece una palabra como palabra entera. Sin esto, 手 «aparece» dentro
  // de 手紙 y 本 dentro de 日本, y el examen subraya media palabra.
  function ocurrencias(texto, palabra) {
    const out = [];
    const dic = dicc();
    for (let i = texto.indexOf(palabra); i >= 0; i = texto.indexOf(palabra, i + 1)) {
      const fin = i + palabra.length;
      if (KANJI.test(texto[i - 1] || "") || KANJI.test(texto[fin] || "")) continue;
      // ¿hay una palabra conocida más larga que la envuelve? 釣り vive dentro de
      // お釣り, y subrayar solo 釣り dejaría la お colgando fuera.
      let dentro = false;
      for (let a = Math.max(0, i - 2); a <= i && !dentro; a++)
        for (let b = fin; b <= Math.min(texto.length, fin + 2); b++)
          if ((b - a) > palabra.length && dic.has(texto.slice(a, b))) dentro = true;
      if (!dentro) out.push(i);
    }
    return out;
  }

  // Un もんだい entero de verbos en forma ます se hace monótono y no se parece al
  // examen de verdad, que mezcla sustantivos, adjetivos y verbos.
  const demasiados = hechos => hechos.filter(x => x.verbo).length >= Math.ceil((hechos.length + 1) / 2);

  const cuatro = (correcta, pozo, r) => {
    const ops = [correcta];
    for (const x of pozo) if (!ops.includes(x) && ops.length < 4) ops.push(x);
    if (ops.length < 4) return null;
    const mezcla = r.baraja(ops);
    return { opciones: mezcla, correcta: mezcla.indexOf(correcta) };
  };

  // ------------------------------------------------- もんだい１ · lectura
  // Se subraya una palabra escrita en kanji y se pregunta cómo se lee.
  function itemLectura(r, usadas, hechos) {
    for (const o of r.baraja(corpus().palabras)) {
      if (usadas.has(o.kanji) || !/^[ぁ-ゖー]+$/.test(o.lectura)) continue;
      if (o.verbo && demasiados(hechos)) continue;
      const libres = o.frases.filter(f => !usadas.has(f.plano));
      if (!libres.length) continue;
      const f = r.elige(libres);
      const c = cuatro(o.lectura, lecturasFalsas(o.lectura, r), r);
      if (!c) continue;
      usadas.add(o.kanji); usadas.add(f.plano);
      return {
        // «pos» es dónde subrayar: buscar la palabra por texto casaría la primera
        // aparición, que puede estar dentro de otra (本 dentro de 日本語).
        tipo: "lectura", frase: f.plano, marca: o.kanji, pos: ocurrencias(f.plano, o.kanji)[0],
        modo: "subrayado", verbo: !!o.verbo, ...c,
        nota: `${o.kanji}（${o.lectura}）${o.es ? " — " + o.es : ""}`,
        traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // ------------------------------------------------ もんだい２ · escritura
  // Al revés: la palabra va subrayada en hiragana y hay que elegir el kanji.
  function itemEscritura(r, usadas, hechos) {
    const { palabras, porOn, todosKanji } = corpus();
    for (const o of r.baraja(palabras)) {
      if (usadas.has(o.kanji) || o.kanji.length > 3) continue;
      if (o.verbo && demasiados(hechos)) continue;
      if (!/^[ぁ-ゖー]+$/.test(o.lectura)) continue;
      const libres = o.frases.filter(f => !usadas.has(f.plano));
      if (!libres.length) continue;
      const f = r.elige(libres);

      // Distractores: cambiar un kanji por otro que se le parezca a la vista o
      // que se lea igual. Solo si no hay, otra palabra del mismo largo.
      // Por orden de maldad: un kanji que se parece a la vista engaña más que
      // uno que solo se lee igual, y ese más que una palabra cualquiera.
      const vista = [], suenan = [];
      for (let i = 0; i < o.kanji.length; i++) {
        const c = o.kanji[i];
        const cambia = k => o.kanji.slice(0, i) + k + o.kanji.slice(i + 1);
        for (const k of (PARECIDOS[c] || "")) vista.push(cambia(k));
        for (const ks of porOn.values()) if (ks.includes(c))
          for (const otro of ks) if (otro !== c) suenan.push(cambia(otro));
      }
      const mismos = palabras.filter(p => p.kanji.length === o.kanji.length && p.kanji !== o.kanji).map(p => p.kanji);
      const relleno = o.kanji.length === 1 ? todosKanji : mismos;
      const c = cuatro(o.kanji, r.baraja([...new Set(vista)])
        .concat(r.baraja([...new Set(suenan)])).concat(r.baraja(relleno)), r);
      if (!c) continue;
      const i = ocurrencias(f.plano, o.kanji)[0];
      usadas.add(o.kanji); usadas.add(f.plano);
      return {
        tipo: "escritura", marca: o.lectura, pos: i, modo: "subrayado", verbo: !!o.verbo, ...c,
        frase: f.plano.slice(0, i) + o.lectura + f.plano.slice(i + o.kanji.length),
        nota: `${o.lectura} se escribe ${o.kanji}${o.es ? " — " + o.es : ""}`,
        traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // ------------------------------------------------- もんだい３ · contexto
  // Un hueco en la frase y cuatro palabras. Solo se usan frases completas y con
  // algo de cuerpo: en 「（　）を売ります」 encajarían las cuatro opciones.
  function itemContexto(r, usadas) {
    const { palabras, trasPalabra } = corpus();
    for (const o of r.baraja(palabras)) {
      if (usadas.has(o.kanji)) continue;
      const buenas = o.frases.filter(f => f.completa && f.plano.length >= 13 && !usadas.has(f.plano));
      if (!buenas.length) continue;
      const f = r.elige(buenas);
      const i = ocurrencias(f.plano, o.kanji)[0];
      if (i === 0) continue;                      // sin nada delante hay poco contexto
      const sig = f.plano[i + o.kanji.length];
      const pozo = r.baraja(trasPalabra.get(sig) || [])
        .filter(x => x.kanji !== o.kanji && x.es !== o.es && x.kanji.length <= o.kanji.length + 1)
        .map(x => x.kanji);
      const c = cuatro(o.kanji, pozo, r);
      if (!c) continue;
      usadas.add(o.kanji); usadas.add(f.plano);
      return {
        tipo: "contexto", frase: f.plano, marca: o.kanji, pos: i, modo: "hueco", ...c,
        nota: `${o.kanji}（${o.lectura}）${o.es ? " — " + o.es : ""}`,
        traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // ---------------------------------------------- もんだい４ · paráfrasis
  // Este no se genera: las frases equivalentes están escritas a mano en
  // data/examenes.js, porque «decir lo mismo con otras palabras» no sale de
  // ninguna tabla.
  function itemParafrasis(r, usadas) {
    const pozo = (N5.data.examenes?.parafrasis || []).filter(p => !usadas.has(p.frase));
    if (!pozo.length) return null;
    const p = r.elige(pozo);
    usadas.add(p.frase);
    const mezcla = r.baraja(p.opciones);
    return {
      tipo: "parafrasis", frase: p.frase, modo: "ninguno",
      opciones: mezcla, correcta: mezcla.indexOf(p.opciones[0]),
      nota: p.nota || "", traduccion: p.es || "", leccion: null
    };
  }

  // ------------------------------------------- 文法 もんだい１ · la forma
  // Tres canteras distintas para que las nueve preguntas no se parezcan entre
  // sí: los ejercicios ya escritos, la partícula que rige cada verbo y las
  // partículas de las frases de ejemplo de la gramática.
  function itemForma(r, usadas) {
    const gens = r.baraja([itemDrill, itemParticulaVerbo, itemParticulaFrase]);
    for (const g of gens) { const it = g(r, usadas); if (it) return it; }
    return null;
  }

  // Los ejercicios de data/drills.js ya tienen este formato exacto, con su
  // explicación. Solo valen los de respuesta corta y japonesa: unos cuantos son
  // de otro estilo (dan la forma de diccionario, piden un contador, listan
  // verbos) y mezclarlos daría opciones que no pegan ni con cola.
  const drillLimpio = x => x.pregunta.includes("（　）") && !/[A-Za-z()]/.test(x.pregunta)
    && !x.pregunta.includes("―") && /^[ぁ-ゖァ-ヺー一-鿿々]{1,6}$/.test(N5.sinFurigana(x.respuesta));

  function itemDrill(r, usadas) {
    const d = N5.data.drills.filter(x => drillLimpio(x)
      && !usadas.has(N5.sinFurigana(x.pregunta.replace("（　）", x.respuesta)).replace(/[（）\s]/g, "")));
    if (!d.length) return null;
    const x = r.elige(d);
    const resp = N5.sinFurigana(x.respuesta);
    const otros = N5.data.drills.filter(drillLimpio).map(y => N5.sinFurigana(y.respuesta));
    const mismoTema = N5.data.drills.filter(y => drillLimpio(y) && y.tema === x.tema).map(y => N5.sinFurigana(y.respuesta));
    const pozo = r.baraja([...new Set(mismoTema)]).concat(r.baraja([...new Set(otros)]))
      .filter(y => y !== resp && !incompatible(resp, y));
    const c = cuatro(resp, pozo, r);
    if (!c) return null;
    usadas.add(N5.sinFurigana(x.pregunta.replace("（　）", x.respuesta)).replace(/[（）\s]/g, ""));
    return {
      tipo: "forma", frase: N5.sinFurigana(x.pregunta), modo: "prehueco", ...c,
      nota: N5.sinFurigana(x.explicacion), traduccion: "", leccion: null
    };
  }

  // Parejas que valdrían las dos en el mismo hueco: si una es la respuesta, la
  // otra no puede ser distractor o el examen estaría mal corregido.
  const CHOCAN = { は: "がも", が: "はも", も: "はが", へ: "に", に: "へ", と: "や", や: "と" };
  const incompatible = (a, b) => (CHOCAN[a] || "").includes(b);

  const PARTICULAS = ["を", "に", "で", "が", "へ", "と", "も", "は", "から", "まで", "の", "や"];
  function conParticulas(resp, r) {
    return r.baraja(PARTICULAS.filter(p => p !== resp && !incompatible(resp, p)));
  }

  // La partícula que rige cada verbo la declara data/verbs.js: aquí la
  // respuesta correcta no es una opinión mía, es un dato.
  function itemParticulaVerbo(r, usadas) {
    const cands = N5.data.verbs.filter(v =>
      v.ejemplo && /^〜[をにでがへと]$/.test(v.particula) && !usadas.has("v:" + v.kana));
    for (const v of r.baraja(cands)) {
      const plano = N5.sinFurigana(v.ejemplo).replace(/[（）\s]/g, "");
      if (usadas.has(plano)) continue;
      const p = v.particula.slice(1);
      const i = plano.lastIndexOf(p);
      if (i <= 0) continue;
      const c = cuatro(p, conParticulas(p, r), r);
      if (!c) continue;
      usadas.add("v:" + v.kana); usadas.add(plano);
      return {
        tipo: "forma", frase: plano.slice(0, i) + "（　）" + plano.slice(i + 1), modo: "prehueco", ...c,
        nota: `${v.masu}（${v.es}）pide ${v.particula}.`, traduccion: "", leccion: v.lecciones?.[0] ?? null
      };
    }
    return null;
  }

  // Y si no, se tapa una partícula de una frase de ejemplo. El troceo garantiza
  // que es una partícula de verdad y no el で de です ni el が de ひらがな.
  function itemParticulaFrase(r, usadas) {
    for (const f of r.baraja(corpus().frases)) {
      if (usadas.has(f.plano) || !f.completa || f.plano.length < 12) continue;
      const trozos = troceaFrase(f.plano);
      if (!trozos) continue;
      // は se descarta como respuesta: casi siempre valdría también が o も
      const cands = trozos.map((t, i) => ({ t, i, p: t.slice(-1) }))
        .filter(x => PARTICULAS.includes(x.p) && x.p !== "は" && x.t.length > 1);
      if (!cands.length) continue;
      const x = r.elige(cands);
      const c = cuatro(x.p, conParticulas(x.p, r), r);
      if (!c) continue;
      usadas.add(f.plano);
      const antes = trozos.slice(0, x.i).join("") + x.t.slice(0, -1);
      return {
        tipo: "forma", frase: antes + "（　）" + trozos.slice(x.i + 1).join(""), modo: "prehueco", ...c,
        nota: `La frase es 「${f.plano}」.`, traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // --------------------------------------- 文法 もんだい２ · ordenar la frase
  // Se parte una frase en trozos, se desordenan cuatro y hay que decir cuál cae
  // en el ★. Es el もんだい que más gente falla y aquí sale gratis: la frase
  // original ya dice cuál era el orden bueno.
  function itemOrden(r, usadas) {
    for (const f of r.baraja(corpus().frases)) {
      // Las frases con cita entrecomillada pierden el sentido al quitar 「」
      if (usadas.has(f.plano) || !f.completa || f.plano.includes("「")) continue;
      const trozos = troceaFrase(f.plano);
      if (!trozos || trozos.length < 4) continue;
      const desde = r.entero(trozos.length - 3);
      const grupo = trozos.slice(desde, desde + 4);
      if (new Set(grupo).size < 4 || grupo.some(p => p.length > 9)) continue;
      usadas.add(f.plano);
      const estrella = 1 + r.entero(2);                   // el ★ va en el 2º o el 3er hueco
      const mezcla = r.baraja(grupo);
      return {
        tipo: "orden", modo: "orden",
        antes: trozos.slice(0, desde).join(""), despues: trozos.slice(desde + 4).join(""),
        estrella, opciones: mezcla, correcta: mezcla.indexOf(grupo[estrella]), orden: grupo,
        nota: `La frase completa es 「${f.plano}」.`, traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // --------------------------------------------------------------- el examen
  // Reparto de もんだい según el formato vigente desde diciembre de 2020.
  const PLAN = [
    {
      id: "vocabulario", kanji: "文字・語彙", titulo: "Vocabulario y escritura", minutos: 20,
      problemas: [
        { n: 1, gen: itemLectura, cuantos: 7, kanji: "かんじの よみかた",
          instruccion: "La palabra subrayada, ¿cómo se lee? Elige la mejor opción de 1 a 4." },
        { n: 2, gen: itemEscritura, cuantos: 5, kanji: "ひょうき",
          instruccion: "La palabra subrayada, ¿cómo se escribe? Elige la mejor opción de 1 a 4." },
        { n: 3, gen: itemContexto, cuantos: 6, kanji: "ぶんみゃくきてい",
          instruccion: "¿Qué va en el hueco （　）? Elige la mejor opción de 1 a 4." },
        { n: 4, gen: itemParafrasis, cuantos: 3, kanji: "いいかえるいひょうげん",
          instruccion: "Hay una frase que significa casi lo mismo que la de arriba. Elige la mejor opción de 1 a 4." }
      ]
    },
    {
      id: "gramatica", kanji: "文法", titulo: "Gramática", minutos: 20,
      problemas: [
        { n: 1, gen: itemForma, cuantos: 9, kanji: "ぶんぽうけいしきの はんだん",
          instruccion: "¿Qué va en el hueco （　）? Elige la mejor opción de 1 a 4." },
        { n: 2, gen: itemOrden, cuantos: 4, kanji: "ぶんの くみたて",
          instruccion: "Ordena las cuatro piezas para formar la frase. ¿Cuál va en el ★?" }
      ]
    }
  ];
  E.PLAN = PLAN;

  // Semilla → examen montado. Determinista: la misma semilla da el mismo examen.
  E.genera = semilla => {
    const r = azar(semilla);
    const usadas = new Set();      // nada se repite dentro del mismo examen
    const bloques = [];
    for (const b of PLAN) {
      const problemas = [];
      for (const p of b.problemas) {
        const items = [];
        for (let i = 0; i < p.cuantos; i++) {
          const it = p.gen(r, usadas, items);
          if (it) items.push({ ...it, ref: `${b.id}-${p.n}-${items.length + 1}` });
        }
        if (items.length) problemas.push({ n: p.n, kanji: p.kanji, instruccion: p.instruccion, pedidos: p.cuantos, items });
      }
      const total = problemas.reduce((n, p) => n + p.items.length, 0);
      if (total) bloques.push({ id: b.id, kanji: b.kanji, titulo: b.titulo, minutos: b.minutos, problemas, total });
    }
    return { semilla, bloques, total: bloques.reduce((n, b) => n + b.total, 0) };
  };

  // Catálogo fijo: 50 exámenes numerados, más los que uno quiera al azar.
  E.CUANTOS = 50;
  E.semillaDe = n => "noken5-" + String(n).padStart(4, "0");
})();
