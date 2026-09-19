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

  // ------------------------------------------------------- los kanji del N5
  // El examen solo escribe en kanji los del nivel; el resto va en kana. Aquí son
  // los 103 marcados en data/kanji.js (81 seguros + 22 posibles): la lista de
  // 167 es la del libro de clase, bastante más larga de lo que cae en el N5.
  let SETN5 = null;
  const kanjiDelN5 = () => SETN5 ||= new Set(
    N5.data.kanji.filter(k => k.n5 === "seguro" || k.n5 === "posible").map(k => k.kanji));
  const todoN5 = s => [...String(s)].every(c => !KANJI.test(c) || kanjiDelN5().has(c));

  // Una frase tal como la escribiría el examen: las palabras cuyos kanji son del
  // N5 se dejan en kanji y las demás pasan a kana. Se puede porque data/ anota
  // con furigana justo los kanji difíciles: 「新幹線[しんかんせん]」 → しんかんせん.
  const paraExamen = jp => N5.sinFurigana(
    String(jp).replace(N5.FURIGANA, (_, k, lect) => todoN5(k) ? k : lect));
  // Lo mismo pero conservando la furigana de los que se quedan en kanji: en
  // 文法・読解 el examen la imprime encima de TODOS sus kanji.
  const paraExamenRuby = jp => String(jp).replace(N5.FURIGANA, (_, k, lect) => todoN5(k) ? `${k}[${lect}]` : lect);

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
  const enKata = t => Object.fromEntries(Object.entries(t).map(([a, b]) =>
    [String.fromCodePoint(a.codePointAt(0) + 0x60), String.fromCodePoint(b.codePointAt(0) + 0x60)]));
  const KSONORAS = enKata(SONORAS), KSEMI = enKata(SEMI);
  const KSORDAS = Object.fromEntries(Object.entries(KSONORAS).map(([a, b]) => [b, a]));

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

  // ------------------------------------------------------------ katakana
  // もんだい２ siempre lleva una palabra en katakana: te la dan en hiragana y
  // tienes que elegir cómo se escribe. Los fallos que se ponen de opción son
  // siempre los mismos: la ー de más o de menos, la ッ, y los pares de letras
  // que se distinguen por un trazo (ツ/シ, ソ/ン, ク/ワ).
  const aKata = t => [...String(t)].map(c => {
    const o = c.codePointAt(0);
    return o >= 0x3041 && o <= 0x3096 ? String.fromCodePoint(o + 0x60) : c;
  }).join("");
  const aHira = t => [...String(t)].map(c => {
    const o = c.codePointAt(0);
    return o >= 0x30A1 && o <= 0x30F6 ? String.fromCodePoint(o - 0x60) : c;
  }).join("");

  const KATA_PARECIDAS = {
    ツ: "シ", シ: "ツ", ソ: "ン", ン: "ソ", ク: "ワ", ワ: "ク", ス: "ヌ", ヌ: "ス",
    ア: "マ", マ: "ア", チ: "テ", テ: "チ", レ: "ノ", ノ: "レ", コ: "ユ", ユ: "コ",
    ハ: "ル", ル: "ハ", ミ: "ラ", ラ: "ミ", セ: "ヤ", ヤ: "セ", オ: "ホ", ホ: "オ",
    タ: "ケ", ケ: "タ", ウ: "ワ", ヲ: "ラ", ヘ: "ペ", ネ: "ホ"
  };
  const VOCAL_KATA = { a: "ア", i: "イ", u: "ウ", e: "エ", o: "オ" };

  function escriturasFalsas(kata, r) {
    const cs = [...kata];
    const out = new Set();
    const mete = x => { if (x && x !== kata && x.length >= 2) out.add(x); };
    const cambia = (i, n) => { const a = cs.slice(); a[i] = n; return a.join(""); };
    const quita = i => cs.slice(0, i).concat(cs.slice(i + 1)).join("");
    const mete_ = (i, n) => cs.slice(0, i).concat(n, cs.slice(i)).join("");

    for (let i = 0; i < cs.length; i++) {
      const c = cs[i];
      for (const t of [KATA_PARECIDAS, KSONORAS, KSORDAS, KSEMI]) if (t[c]) mete(cambia(i, t[c]));
      if (c === "ー") {
        mete(quita(i));                                   // sin el alargador
        // 「コーヒー」 → 「コオヒー」: la vocal escrita en vez del alargador
        const rom = N5.romaji?.(aHira(cs[i - 1] || ""));
        const v = rom && VOCAL_KATA[rom[rom.length - 1]];
        if (v) mete(cambia(i, v));
      } else if (i && cs[i + 1] !== "ー") {
        mete(mete_(i, "ー"));                              // alargador de más
      }
      if (c === "ッ") mete(quita(i));
      else if (i && /[カキクケコサシスセソタチツテトパピプペポ]/.test(c)) mete(mete_(i, "ッ"));
    }
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
    // 「見て います」「見て ください」「見ても いいです」: el examen separa la
    // forma て de lo que viene detrás, así que eso NO va aquí como una pieza
    "てから", "たり", "だり", "なければなりません", "なくてもいいです",
    "はいけません", "はいけない", "つもりです",
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
    D = formas;
    // Cada palabra también tal como sale en el papel, con los kanji de fuera
    // del N5 ya en kana: 食べ物 → 食べもの, 千葉 → ちば.
    for (const [k, y] of diccLect()) { formas.add(y); formas.add(formaExamen(k, y)); }
    return D;
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
  const SUELTA = 3;           // una palabra de una sola letra de kana

  function tokeniza(frase) {
    const s = frase.replace(/[。、？！「」]/g, "");
    if (!s) return null;
    const dic = dicc();
    // Coste de cada pieza. En kana hay empates que hay que romper bien:
    //   はこ＋の (caja de) frente a は＋この       → una palabra gana a «この»
    //   です＋か frente a で＋すか                  → una cola de verbo gana a una palabra
    //   はし (puente) frente a は＋し              → una sola letra gramatical es cara
    // Y las palabras de una sola letra (き 木, じ 字, は 歯) son carísimas: en una
    // frase en kana casi nunca son eso, y si el tokenizador tira de ellas es que
    // no conoce la palabra de verdad (「はじまります」 → は·じ·ま·り·ます).
    const gram = t => AUX.includes(t) || PARTICULAS_TOK.includes(t);
    const precio = t => {
      const opciones = [];
      if (dic.has(t) || KATAKANA.test(t) || CONTADOR.test(t) || NUMERO.test(t) || /^[A-Za-z]+$/.test(t))
        opciones.push(t.length === 1 && /[ぁ-ゖ]/.test(t) ? SUELTA : 1);
      if (gram(t)) opciones.push(t.length > 1 ? 0.9 : 1.2);
      if (EXTRA.includes(t)) opciones.push(1.05);
      return opciones.length ? Math.min(...opciones) : 0;
    };
    const coste = new Array(s.length + 1).fill(Infinity);
    const atras = new Array(s.length + 1).fill(-1);
    coste[0] = 0;
    for (let i = 0; i < s.length; i++) {
      if (coste[i] === Infinity) continue;
      for (let j = i + 1; j <= s.length; j++) {
        const t = s.slice(i, j);
        // una frase no empieza por partícula: 「はこの…」 es はこ＋の, no は＋この
        const p = i === 0 && PARTICULAS_TOK.includes(t) ? (dic.has(t) ? SUELTA : 0) : precio(t);
        const c = coste[i] + (p || (j === i + 1 ? DESCONOCIDO : Infinity));
        if (c < coste[j]) { coste[j] = c; atras[j] = i; }
      }
    }
    if (coste[s.length] === Infinity) return null;
    const toks = [];
    for (let j = s.length; j > 0; j = atras[j]) toks.unshift(s.slice(atras[j], j));
    // una letra suelta que no es partícula cuenta como pieza desconocida
    const sueltas = toks.filter(t => t.length === 1 && /[ぁ-ゖ]/.test(t) && !gram(t)).length;
    return { toks, desconocidas: Math.floor(coste[s.length] / DESCONOCIDO) + sueltas };
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
  // Una frase de data/ lista para el examen: sin espacios ni paréntesis (los
  // espacios los vuelve a poner escribe(), donde van), con los kanji de fuera
  // del N5 ya en kana, y con la furigana que traía guardada aparte («anot»)
  // para poder leerla después.
  function hazFrase(f) {
    const crudo = paraExamen(f.jp);
    // Algunos «ejemplos» no son frases: tablas de conjugación (書く→書いて),
    // alternativas (へ＝に), la forma de diccionario como pista (―行きます) o
    // una aclaración entre paréntesis latinos.
    if (/[→／＝―]/.test(crudo) || /\([^)]*\)/.test(crudo)) return null;
    let p = crudo.replace(/[（）\s]/g, "").trim();
    if (!p || p.includes("…") || p.length < 5 || p.length > 42) return null;
    // Los ejemplos de los verbos («ドアが開きます») son frases enteras a las que
    // el libro no les pone punto. En un examen sí lo llevan.
    if (!/[。？]$/.test(p)) p += "。";
    const anot = [...String(f.jp).matchAll(N5.FURIGANA)]
      .map(m => [m[1], m[2]]).filter(([k]) => todoN5(k))
      .sort((a, b) => b[0].length - a[0].length);
    return { ...f, plano: p, completa: true, anot };
  }

  let C = null;
  function corpus() {
    if (C) return C;
    const d = N5.data;

    // --- frases portadoras -------------------------------------------------
    // Solo entran las que se pueden leer enteras: el examen las imprime en kana
    // o con furigana, y para eso hace falta la lectura de cada palabra.
    const frases = [];
    const añade = f => { const x = hazFrase(f); if (x && lee(x) && !lee(x).desconocidas) frases.push(x); };
    for (const L of d.grammar) for (const pt of L.puntos) for (const e of pt.ejemplos)
      añade({ jp: e.jp, es: e.es, leccion: L.leccion, origen: "gramática" });
    for (const v of d.verbs) if (v.ejemplo)
      añade({ jp: v.ejemplo, es: "", leccion: v.lecciones?.[0] ?? null, origen: "verbos" });
    // Los ejercicios, con su hueco ya relleno, son frases completas más.
    for (const x of d.drills) if (x.pregunta.includes("（　）") && !/[A-Za-z]/.test(x.pregunta))
      añade({ jp: x.pregunta.replace("（　）", x.respuesta), es: "", leccion: null, origen: "ejercicios" });
    // Y las escritas a propósito para los kanji que el libro no usa en sus ejemplos.
    for (const f of (d.examenes?.frases || []))
      añade({ jp: f.jp, es: f.es, leccion: f.leccion ?? null, origen: "guía" });

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
      // data/kanji.js usa frases hechas de ejemplo («駅の前», «机の上»). Como
      // palabra suelta no valen: el examen subraya palabras, no sintagmas. Las
      // que sí son una palabra (男の人, あの人) están en el vocabulario.
      if (kanji.includes("の") && !extra.deVocab) return;
      // «forma» es cómo sale la palabra en el papel del examen. Si sus kanji no
      // son del N5 sale en kana, y entonces no se puede preguntar por su
      // lectura ni por su escritura, pero sí por su significado (もんだい３).
      const esN5 = todoN5(kanji);
      const forma = esN5 ? kanji : lectura;
      const donde = frases.filter(f => ocurrencias(f.plano, forma).length === 1);
      if (donde.length) objetivos.push({ kanji, lectura, forma, esN5, es: es || "", frases: donde, ...extra });
    };
    for (const w of d.vocab) mete(w.kanji, w.kana, w.es, { leccion: w.leccion, deVocab: true });
    for (const v of d.verbs) mete(enKanji(v, v.masu), v.masu, v.es, { leccion: v.lecciones?.[0] ?? null, verbo: true });
    for (const k of d.kanji) for (const e of k.ejemplos) mete(e.palabra, e.lectura, e.es, { leccion: null });
    const vistos = new Set();
    const palabras = objetivos.filter(o => !vistos.has(o.forma) && vistos.add(o.forma));

    // --- palabras en katakana, para la pregunta de escritura en katakana ---
    const katakanas = [];
    for (const w of d.vocab) {
      const k = N5.limpiaEntrada(w.kana);
      if (!/^[ァ-ヶー]{3,}$/.test(k)) continue;
      const donde = frases.filter(f => ocurrencias(f.plano, k).length === 1);
      if (donde.length) katakanas.push({ kata: k, es: w.es, frases: donde });
    }

    // --- qué partícula sigue a cada palabra --------------------------------
    // Sustituto barato de un análisis morfológico: si dos palabras aparecen las
    // dos seguidas de を, las dos son objeto directo y una sirve de distractor
    // de la otra sin cantar por la categoría.
    const trasPalabra = new Map();
    for (const f of frases) for (const w of palabras) {
      const i = ocurrencias(f.plano, w.forma)[0];
      if (i === undefined) continue;
      const sig = f.plano[i + w.forma.length];
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

    return (C = { frases, palabras, katakanas, trasPalabra, porOn, todosKanji: d.kanji.map(k => k.kanji) });
  }
  E.corpus = corpus;
  E.trozosDe = troceaFrase;
  E.tokeniza = tokeniza;

  // ------------------------------------------------ la frase, pieza a pieza
  // Todo lo que el examen hace con una frase —subrayar una palabra, abrir un
  // hueco, separar con espacios, poner furigana— necesita saber dónde empieza y
  // acaba cada palabra. segmenta() la parte en piezas (la puntuación es una
  // pieza más, con su posición), y lee() le pone a cada una su lectura.
  const SEGS = new Map();
  function segmenta(texto) {
    let s = SEGS.get(texto);
    if (s) return s;
    const toks = [];
    let desconocidas = 0, i = 0;
    for (const trozo of texto.split(/([。、？！「」])/)) {
      if (!trozo) continue;
      if (/^[。、？！「」]$/.test(trozo)) toks.push({ t: trozo, ini: i, fin: i + 1, punt: true });
      else {
        const tk = tokeniza(trozo);
        desconocidas += tk.desconocidas;
        let j = i;
        for (const t of tk.toks) { toks.push({ t, ini: j, fin: j + t.length }); j += t.length; }
      }
      i += trozo.length;
    }
    s = { toks, desconocidas };
    SEGS.set(texto, s);
    return s;
  }

  // Dónde aparece una palabra como palabra entera. Sin esto, 手 «aparece» dentro
  // de 手紙, 本 dentro de 日本 y 釣り dentro de お釣り, y el examen acabaría
  // subrayando media palabra: una aparición vale solo si empieza y acaba donde
  // acaba una pieza de la frase.
  function ocurrencias(texto, palabra) {
    const l = new Set([0]);
    for (const tk of segmenta(texto).toks) { l.add(tk.ini); l.add(tk.fin); }
    const out = [];
    for (let i = texto.indexOf(palabra); i >= 0; i = texto.indexOf(palabra, i + 1))
      if (l.has(i) && l.has(i + palabra.length)) out.push(i);
    return out;
  }

  // Una palabra como la escribe el examen: sus trozos en kanji del N5 se quedan,
  // los demás pasan a su lectura. 食べ物＋たべもの → 食べもの.
  function formaExamen(k, y) {
    const partes = k.split(/([一-鿿々〇]+)/).filter(Boolean);
    const m = new RegExp("^" + partes.map(p => KANJI.test(p) ? "(.+?)" : p).join("") + "$").exec(y);
    if (!m) return todoN5(k) ? k : y;
    let g = 1;
    return partes.map(p => KANJI.test(p) ? (todoN5(p) ? (g++, p) : m[g++]) : p).join("");
  }

  // --- lecturas: grafía con kanji → kana, de todo lo que la guía conoce ------
  const NOMBRES = {
    木村: "きむら", 山田: "やまだ", 田中: "たなか", 佐藤: "さとう", 鈴木: "すずき", 中村: "なかむら",
    小林: "こばやし", 松本: "まつもと", 渡辺: "わたなべ", 高橋: "たかはし", 伊藤: "いとう", 山本: "やまもと",
    京都: "きょうと", 東京: "とうきょう", 大阪: "おおさか", 名古屋: "なごや", 神戸: "こうべ",
    横浜: "よこはま", 広島: "ひろしま", 奈良: "なら", 沖縄: "おきなわ", 富士山: "ふじさん", 千葉: "ちば", 県: "けん"
  };
  const CONT_KANA = { 時: "じ", 分: "ふん", 円: "えん", 人: "にん", 階: "かい", 回: "かい", 歳: "さい",
    番: "ばん", 年: "ねん", 月: "がつ", 日: "にち", 枚: "まい", 冊: "さつ", 台: "だい", 時間: "じかん" };
  // Las palabras que los ejemplos anotan con furigana son palabras que la guía
  // usa aunque no estén en el vocabulario (箱[はこ], 番号[ばんごう]). Se toman
  // solo las anotaciones que cubren la palabra entera —van seguidas de una
  // partícula o de algo que no es hiragana—, no las de 食[た]べます.
  function anotadas() {
    const d = N5.data, out = [];
    const textos = [];
    for (const L of d.grammar) for (const pt of L.puntos) for (const e of pt.ejemplos) textos.push(e.jp);
    for (const v of d.verbs) if (v.ejemplo) textos.push(v.ejemplo);
    for (const x of d.drills) textos.push(x.pregunta);
    for (const f of d.examenes?.frases || []) textos.push(f.jp);
    for (const t of textos) for (const m of String(t).matchAll(N5.FURIGANA)) {
      const sig = String(t)[m.index + m[0].length] || "";
      if (!/[ぁ-ゖ]/.test(sig) || "をにがはでへともの".includes(sig)) out.push([m[1], m[2]]);
    }
    return out;
  }

  let LECT = null;
  function diccLect() {
    if (LECT) return LECT;
    const d = N5.data, L = new Map(Object.entries(NOMBRES));
    const limpia = x => N5.limpiaEntrada(String(x || "")).replace(/[〜～]/g, "");
    const par = (k, y) => { k = limpia(k); y = limpia(y); if (k && y && KANJI.test(k) && !L.has(k)) L.set(k, y); };
    const sinNa = x => String(x || "").replace(/[（\[]な[）\]]$/, "");
    // 「〜人（じん）」 es el sufijo de nacionalidad, no la palabra 人; y el な de
    // 「じょうず（な）」 no se escribe con el kanji 上手
    for (const w of d.vocab) if (!/[〜～]/.test(w.kanji + w.kana)) par(sinNa(w.kanji), sinNa(w.kana));
    for (const v of d.verbs) {
      par(v.kanji, v.kana);
      for (const f of ["masu", "te", "ta", "nai"]) par(enKanji(v, v[f]), v[f]);
      par(enKanji(v, v.masu).slice(0, -2), v.masu.slice(0, -2));
      par(enKanji(v, v.nai).slice(0, -2), v.nai.slice(0, -2));
    }
    for (const w of d.vocab) {                     // 長い → 長かった, 長くて…
      const k = limpia(w.kanji), y = limpia(w.kana);
      if (/[（\[]な/.test(w.kana) || !/い$/.test(k) || !/い$/.test(y)) continue;
      for (const c of ["かった", "くない", "くて", "く", "くなかった"]) par(k.slice(0, -1) + c, y.slice(0, -1) + c);
    }
    for (const k of d.kanji) for (const e of k.ejemplos) par(e.palabra, e.lectura);
    for (const [k, y] of anotadas()) par(k, y);
    for (const [k, y] of [...L]) { const f = formaExamen(k, y); if (f !== k && KANJI.test(f) && !L.has(f)) L.set(f, y); }
    return (LECT = L);
  }

  // La lectura de una pieza. Primero la furigana de la propia frase, que sabe lo
  // que dice (今日 puede ser きょう o こんにち); luego el diccionario.
  function leeToken(t, anot) {
    if (!KANJI.test(t)) return t;
    let s = t;                                     // 食[た]べます: la furigana cubre solo el kanji
    for (const [k, y] of anot) if (s.includes(k)) s = s.split(k).join(y);
    if (!KANJI.test(s)) return s;
    const L = diccLect();
    if (L.has(t)) return L.get(t);
    const m = /^([0-9０-９]+)(.+)$/.exec(t);        // 7時, 3人
    if (m && CONT_KANA[m[2]]) return m[1] + CONT_KANA[m[2]];
    return null;
  }

  // Piezas con su lectura, o null si alguna no se sabe leer: una frase así no
  // puede salir en el examen, que la tendría que escribir en kana.
  function lee(f) {
    if (f.an !== undefined) return f.an;
    const seg = segmenta(f.plano);
    const toks = [];
    for (const tk of seg.toks) {
      const y = tk.punt ? tk.t : leeToken(tk.t, f.anot || []);
      if (y == null) return (f.an = null);
      toks.push({ ...tk, y });
    }
    return (f.an = { toks, desconocidas: seg.desconocidas });
  }

  // 「食べます」＋「たべます」 → 「食[た]べます」: la furigana va solo encima de
  // los kanji, con el kana de alrededor fuera, que es como la imprime el examen.
  function rubyTok(t, y) {
    const partes = t.split(/([一-鿿々〇]+)/).filter(Boolean);
    const re = new RegExp("^" + partes.map(p => KANJI.test(p) ? "(.+?)" : p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("") + "$");
    const m = re.exec(y);
    if (!m) return /[ぁ-ゖァ-ヺ]/.test(t) ? y : `${t}[${y}]`;
    let g = 1;
    return partes.map(p => KANJI.test(p) ? `${p}[${m[g++]}]` : p).join("");
  }

  // Lo que va pegado a la palabra de delante: partículas, colas de verbo y de
  // adjetivo, さん… El resto empieza «bunsetsu» y lleva espacio delante, que es
  // como escribe el N5 (わかちがき): 「きょうしつで 書いて ください。」
  const PEGADOS = new Set([...PARTICULAS_TOK, ...AUX.filter(a => a !== "ください"),
    "さん", "ちゃん", "くん", "たち", "ごろ", "ぐらい", "くらい", "だけ", "ずつ", "など"]);
  const pegado = tk => tk.punt || PEGADOS.has(tk.t) || tk.y === "じん";   // アメリカじん

  // Escribe la frase como en el papel. «kana» (文字・語彙): todo en kana.
  // «ruby» (文法・読解): los kanji del N5 con su furigana. «dest» cambia unas
  // piezas por otra cosa —la palabra subrayada, un hueco— y se devuelve dónde
  // ha quedado, para que la interfaz la pueda marcar.
  function escribe(f, modo, dest, desde = 0, hasta) {
    const an = lee(f);
    if (!an) return null;
    const toks = an.toks.slice(desde, hasta ?? an.toks.length);
    let out = "", pos = -1, marca = "", salta = -1, tras = false, previo = null;
    for (const tk of toks) {
      if (tk.ini < salta) continue;
      const esDest = dest && tk.ini === dest.i;
      const hueco = esDest && dest.como === "hueco";
      const sep = !out || tk.punt || previo?.punt ? "" : (tras || hueco || !pegado(tk)) ? " " : "";
      tras = false;
      if (esDest) {
        const texto = hueco ? "（　）" : dest.texto ?? f.plano.slice(dest.i, dest.i + dest.largo);
        out += sep; pos = out.length; marca = texto; out += texto;
        salta = dest.i + dest.largo;
        tras = hueco;
        previo = tk;
        continue;
      }
      out += sep + (modo === "kana" ? tk.y : KANJI.test(tk.t) ? rubyTok(tk.t, tk.y) : tk.t);
      previo = tk;
    }
    if (dest && pos < 0) return null;         // el destino no caía en un corte de pieza
    return { frase: out, pos, marca };
  }
  E.escribe = (f, modo) => escribe(f, modo)?.frase;
  // para tools/: leer y anotar palabras sueltas
  E.lecturaDe = t => leeToken(t, []);
  E.rubyTok = rubyTok;

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
      // si sus kanji no son del N5, en el examen esa palabra iría en kana y no
      // habría nada que leer
      if (!o.esN5 || usadas.has(o.kanji) || !/^[ぁ-ゖー]+$/.test(o.lectura)) continue;
      if (o.verbo && demasiados(hechos)) continue;
      const libres = o.frases.filter(f => !usadas.has(f.plano));
      if (!libres.length) continue;
      const f = r.elige(libres);
      const c = cuatro(o.lectura, lecturasFalsas(o.lectura, r), r);
      if (!c) continue;
      // Como en el examen: toda la frase en kana y solo la palabra preguntada
      // en kanji. «pos» dice dónde subrayar: buscarla por texto casaría la
      // primera aparición, que puede estar dentro de otra palabra.
      const e = escribe(f, "kana", { i: ocurrencias(f.plano, o.kanji)[0], largo: o.kanji.length });
      if (!e) continue;
      usadas.add(o.kanji); usadas.add(f.plano);
      return {
        tipo: "lectura", ...e, modo: "subrayado", verbo: !!o.verbo, ...c,
        nota: `${o.kanji}（${o.lectura}）${o.es ? " — " + o.es : ""}`,
        traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // ------------------------------------------------ もんだい２ · escritura
  // Al revés: la palabra va subrayada en hiragana y hay que elegir el kanji.
  function itemEscritura(r, usadas, hechos) {
    // El examen mete siempre una palabra en katakana en este もんだい.
    if (!hechos.some(x => x.tipo === "katakana")) {
      const k = itemKatakana(r, usadas);
      if (k) return k;
    }
    const { palabras, porOn, todosKanji } = corpus();
    for (const o of r.baraja(palabras)) {
      if (!o.esN5 || usadas.has(o.kanji) || o.kanji.length > 3) continue;
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
        for (const k of (PARECIDOS[c] || "")) if (kanjiDelN5().has(k)) vista.push(cambia(k));
        for (const ks of porOn.values()) if (ks.includes(c))
          for (const otro of ks) if (otro !== c && kanjiDelN5().has(otro)) suenan.push(cambia(otro));
      }
      // las opciones falsas también se escriben con kanji del nivel: una opción
      // con un kanji rarísimo se descarta sin saberse la palabra
      // El relleno intenta ser de la misma clase: para 「見ます」 es mejor 「出ます」
      // que 「あの人」, que se descarta sin saber nada solo por no ser un verbo.
      const cola = o.lectura.slice(-2);
      const mismos = palabras.filter(p => p.esN5 && p.kanji.length === o.kanji.length && p.kanji !== o.kanji);
      const parecidos = mismos.filter(p => p.lectura.endsWith(cola)).map(p => p.kanji);
      const otros = mismos.filter(p => !p.lectura.endsWith(cola)).map(p => p.kanji);
      const relleno = o.kanji.length === 1
        ? todosKanji.filter(k => kanjiDelN5().has(k))
        : r.baraja(parecidos).concat(r.baraja(otros));
      const c = cuatro(o.kanji, r.baraja([...new Set(vista)])
        .concat(r.baraja([...new Set(suenan)])).concat(r.baraja(relleno)), r);
      if (!c) continue;
      const e = escribe(f, "kana", { i: ocurrencias(f.plano, o.kanji)[0], largo: o.kanji.length, texto: o.lectura });
      if (!e) continue;
      usadas.add(o.kanji); usadas.add(f.plano);
      return {
        tipo: "escritura", ...e, modo: "subrayado", verbo: !!o.verbo, ...c,
        nota: `${o.lectura} se escribe ${o.kanji}${o.es ? " — " + o.es : ""}`,
        traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // La palabra va subrayada en hiragana y las cuatro opciones son formas de
  // escribirla en katakana, casi iguales entre sí.
  function itemKatakana(r, usadas) {
    for (const o of r.baraja(corpus().katakanas)) {
      if (usadas.has(o.kata)) continue;
      const libres = o.frases.filter(f => !usadas.has(f.plano));
      if (!libres.length) continue;
      const f = r.elige(libres);
      const c = cuatro(o.kata, escriturasFalsas(o.kata, r), r);
      if (!c) continue;
      const hira = aHira(o.kata);
      const e = escribe(f, "kana", { i: ocurrencias(f.plano, o.kata)[0], largo: o.kata.length, texto: hira });
      if (!e) continue;
      usadas.add(o.kata); usadas.add(f.plano);
      return {
        tipo: "katakana", ...e, modo: "subrayado", ...c,
        nota: `${hira} se escribe ${o.kata}${o.es ? " — " + o.es : ""}`,
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
      const i = ocurrencias(f.plano, o.forma)[0];
      if (i === 0) continue;                      // sin nada delante hay poco contexto
      const sig = f.plano[i + o.forma.length];
      // aquí se pregunta por el significado, no por la escritura, así que entran
      // también las palabras que en el examen irían en kana
      // Las opciones, como toda la frase de este bloque, van en kana.
      const pozo = r.baraja(trasPalabra.get(sig) || [])
        .filter(x => x.forma !== o.forma && x.es !== o.es && x.lectura.length <= o.lectura.length + 2
          && !PARTICULAS_TOK.includes(x.lectura) && !AUX.includes(x.lectura))
        .map(x => x.lectura);
      const c = cuatro(o.lectura, pozo, r);
      if (!c) continue;
      const e = escribe(f, "kana", { i, largo: o.forma.length, como: "hueco" });
      if (!e) continue;
      usadas.add(o.kanji); usadas.add(f.plano);
      return {
        tipo: "contexto", ...e, modo: "hueco", ...c,
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
    const resp = x => paraExamenRuby(x.respuesta);
    for (const x of r.baraja(N5.data.drills.filter(drillLimpio))) {
      // se escribe como las demás: la frase con su respuesta, y el hueco encima
      const f = hazFrase({ jp: x.pregunta.replace("（　）", x.respuesta) });
      if (!f || usadas.has(f.plano)) continue;
      const i = paraExamen(x.pregunta.split("（　）")[0]).replace(/[（）\s]/g, "").length;
      const e = escribe(f, "ruby", { i, largo: paraExamen(x.respuesta).length, como: "hueco" });
      if (!e) continue;
      const otros = N5.data.drills.filter(drillLimpio).map(resp);
      const mismoTema = N5.data.drills.filter(y => drillLimpio(y) && y.tema === x.tema).map(resp);
      const pozo = r.baraja([...new Set(mismoTema)]).concat(r.baraja([...new Set(otros)]))
        .filter(y => y !== resp(x) && !incompatible(resp(x), y));
      const c = cuatro(resp(x), pozo, r);
      if (!c) continue;
      usadas.add(f.plano);
      return {
        tipo: "forma", ...e, modo: "hueco", ...c,
        nota: paraExamenRuby(x.explicacion), traduccion: "", leccion: null
      };
    }
    return null;
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
      const f = hazFrase({ jp: v.ejemplo });
      if (!f || usadas.has(f.plano) || !lee(f)) continue;
      const p = v.particula.slice(1);
      // la última pieza que ES esa partícula, no el carácter suelto
      const tk = [...lee(f).toks].reverse().find(t => t.t === p);
      if (!tk || tk.ini === 0) continue;
      const e = escribe(f, "ruby", { i: tk.ini, largo: p.length, como: "hueco" });
      const c = cuatro(p, conParticulas(p, r), r);
      if (!e || !c) continue;
      usadas.add("v:" + v.kana); usadas.add(f.plano);
      return {
        tipo: "forma", ...e, modo: "hueco", ...c,
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
      const an = lee(f);
      if (!an || an.desconocidas) continue;
      // は se descarta como respuesta: casi siempre valdría también が o も
      const cands = an.toks.filter((t, k) => k > 0 && !an.toks[k - 1].punt
        && PARTICULAS.includes(t.t) && t.t !== "は");
      if (!cands.length) continue;
      const tk = r.elige(cands);
      const e = escribe(f, "ruby", { i: tk.ini, largo: tk.t.length, como: "hueco" });
      const c = cuatro(tk.t, conParticulas(tk.t, r), r);
      if (!e || !c) continue;
      usadas.add(f.plano);
      return {
        tipo: "forma", ...e, modo: "hueco", ...c,
        nota: `La frase es 「${escribe(f, "ruby").frase}」.`, traduccion: f.es, leccion: f.leccion
      };
    }
    return null;
  }

  // ------------------------------------------------------------ 読解
  // Los textos no se generan: están escritos a mano en data/examenes.js. Lo que
  // sí hace el generador es pasarlos a la escritura del examen (los kanji que no
  // son del N5 se quedan en kana) y elegir cuáles tocan en cada examen.
  //
  // もんだい５ tiene dos preguntas sobre el mismo texto, así que el texto se
  // repite en las dos: en el papel lo tienes delante todo el rato.
  const lecturas = () => N5.data.examenes?.lecturas || {};

  function itemTextoCorto(r, usadas) {
    const pozo = (lecturas().cortas || []).filter(t => !usadas.has("t:" + t.pregunta));
    if (!pozo.length) return null;
    const t = r.elige(pozo);
    usadas.add("t:" + t.pregunta);
    const mezcla = r.baraja(t.opciones);
    return {
      tipo: "texto", modo: "texto", texto: paraExamenRuby(t.texto), frase: paraExamenRuby(t.pregunta),
      opciones: mezcla.map(paraExamenRuby), correcta: mezcla.indexOf(t.opciones[0]),
      nota: t.nota || "", traduccion: t.es || "", leccion: null
    };
  }

  // Devuelve las DOS preguntas de un mismo texto de golpe: no tendría sentido
  // partirlas entre dos textos distintos.
  function itemTextoMedio(r, usadas, hechos) {
    if (hechos.length % 2) return null;            // la segunda la puso ya la primera
    const pozo = (lecturas().medias || []).filter(t => !usadas.has("m:" + t.texto));
    if (!pozo.length) return null;
    const t = r.elige(pozo);
    usadas.add("m:" + t.texto);
    const texto = paraExamenRuby(t.texto);
    pendientes = t.preguntas.slice(1).map(q => monta(q, texto, t.es));
    return monta(t.preguntas[0], texto, t.es);

    function monta(q, texto, es) {
      const mezcla = r.baraja(q.opciones);
      return {
        tipo: "texto", modo: "texto", texto, frase: paraExamenRuby(q.pregunta),
        opciones: mezcla.map(paraExamenRuby), correcta: mezcla.indexOf(q.opciones[0]),
        nota: q.nota || "", traduccion: es || "", leccion: null
      };
    }
  }
  let pendientes = [];      // preguntas del mismo texto que aún no se han soltado

  function itemInformacion(r, usadas) {
    const pozo = (lecturas().informacion || []).filter(t => !usadas.has("i:" + t.titulo));
    if (!pozo.length) return null;
    const t = r.elige(pozo);
    usadas.add("i:" + t.titulo);
    const mezcla = r.baraja(t.opciones);
    return {
      tipo: "info", modo: "info", frase: paraExamenRuby(t.pregunta),
      info: {
        titulo: paraExamenRuby(t.titulo),
        cabecera: (t.cabecera || []).map(paraExamenRuby),
        filas: (t.filas || []).map(f => f.map(paraExamenRuby)),
        notas: (t.notas || []).map(paraExamenRuby)
      },
      opciones: mezcla.map(paraExamenRuby), correcta: mezcla.indexOf(t.opciones[0]),
      nota: t.nota || "", traduccion: t.es || "", leccion: null
    };
  }

  // --------------------------------------- 文法 もんだい２ · ordenar la frase
  // Como en el examen: una frase con cuatro huecos EN MEDIO —con frase delante
  // y detrás— y cuatro piezas desordenadas; hay que decir cuál va en el ★. Las
  // piezas son palabras sueltas, y las partículas van solas: 「に / しんごう /
  // 右 / を」. Lo que se pega (ます, です, さん…) viaja con su palabra.
  function piezasDe(toks) {
    const out = [];
    for (const tk of toks) {
      if (tk.punt) { out.push({ ...tk, punt: true }); continue; }
      const ult = out[out.length - 1];
      // 「とらないで ください」: ese で es de la forma ないで, no una partícula
      const suelta = PARTICULAS_TOK.includes(tk.t) && !(tk.t === "で" && ult?.t.endsWith("ない"));
      if (ult && !ult.punt && !ult.part && !suelta && (PEGADOS.has(tk.t) || tk.t === "で"))
        { ult.t += tk.t; ult.y += tk.y; ult.fin = tk.fin; continue; }
      out.push({ ...tk, part: suelta });
    }
    return out;
  }

  function itemOrden(r, usadas) {
    for (const f of r.baraja(corpus().frases)) {
      // Las frases con cita entrecomillada pierden el sentido al quitar 「」
      if (usadas.has(f.plano) || f.plano.includes("「")) continue;
      const an = lee(f);
      if (!an || an.desconocidas) continue;
      const ps = piezasDe(an.toks);
      // ventanas de 4 piezas seguidas con frase de verdad a cada lado (el punto
      // final no cuenta): el examen nunca deja los huecos al final de la frase
      const ventanas = [];
      for (let k = 1; k + 4 < ps.length; k++) {
        const v = ps.slice(k, k + 4);
        if (!ps.slice(k + 4).some(x => !x.punt && !x.part)) continue;
        if (v.some(x => x.punt) || new Set(v.map(x => x.t)).size < 4) continue;
        const parts = v.filter(x => x.part);
        // dos partículas iguales o más de dos se pueden cambiar de sitio sin
        // que la frase deje de estar bien: el examen tendría dos respuestas
        if (parts.length > 2 || v.length - parts.length < 2) continue;
        if (v.some(x => x.t.length > 8)) continue;
        if (ps[k - 1].part && v[0].part) continue;   // 「には」 partido en dos
        // Más casos con dos órdenes válidos: は y が (o を) a la vez se pueden
        // cambiar de palabra, y dos horas o cantidades, de sitio
        // (「9時から 3時まで」 / 「3時から 9時まで」).
        if (v.filter(x => "はがもを".includes(x.t) && x.part).length > 1) continue;
        if (v.filter(x => CONTADOR.test(x.t) || NUMERO.test(x.t)).length > 1) continue;
        ventanas.push(k);
      }
      if (!ventanas.length) continue;
      const k = r.elige(ventanas);
      const grupo = ps.slice(k, k + 4);
      const ti = an.toks.findIndex(t => t.ini === grupo[0].ini);
      const tf = an.toks.findIndex(t => t.fin === grupo[3].fin) + 1;
      const antes = escribe(f, "ruby", null, 0, ti);
      const despues = escribe(f, "ruby", null, tf);
      if (!antes || !despues) continue;
      const pinta = x => KANJI.test(x.t) ? rubyTok(x.t, x.y) : x.t;
      const piezas = grupo.map(pinta);
      usadas.add(f.plano);
      // en el examen el ★ cae casi siempre en el tercer hueco
      const estrella = r.elige([1, 2, 2, 2, 3]);
      const mezcla = r.baraja(piezas);
      return {
        tipo: "orden", modo: "orden", antes: antes.frase, despues: despues.frase,
        estrella, opciones: mezcla, correcta: mezcla.indexOf(piezas[estrella]), orden: piezas,
        nota: `La frase completa es 「${escribe(f, "ruby").frase}」.`, traduccion: f.es, leccion: f.leccion
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
      id: "gramatica", kanji: "文法・読解", titulo: "Gramática y lectura", minutos: 40,
      problemas: [
        { n: 1, gen: itemForma, cuantos: 9, kanji: "ぶんぽうけいしきの はんだん",
          instruccion: "¿Qué va en el hueco （　）? Elige la mejor opción de 1 a 4." },
        { n: 2, gen: itemOrden, cuantos: 4, kanji: "ぶんの くみたて",
          instruccion: "Ordena las cuatro piezas para formar la frase. ¿Cuál va en el ★?" },
        { n: 4, gen: itemTextoCorto, cuantos: 2, kanji: "たんぶん（読解）",
          instruccion: "Lee el texto y responde. Elige la mejor opción de 1 a 4." },
        { n: 5, gen: itemTextoMedio, cuantos: 2, kanji: "ちゅうぶん（読解）",
          instruccion: "Lee el texto y responde. Elige la mejor opción de 1 a 4." },
        { n: 6, gen: itemInformacion, cuantos: 1, kanji: "じょうほうけんさく",
          instruccion: "Mira el cartel y responde. Elige la mejor opción de 1 a 4." }
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
        const brutos = [];
        pendientes = [];
        for (let i = 0; i < p.cuantos; i++) {
          const it = pendientes.length ? pendientes.shift() : p.gen(r, usadas, brutos);
          if (it) brutos.push(it);
        }
        // se barajan antes de numerarlas: si no, la de katakana caería siempre la
        // primera del もんだい. Las de 読解 no: las dos preguntas de un mismo texto
        // van seguidas y en su orden.
        const orden = brutos.some(x => x.modo === "texto" || x.modo === "info") ? brutos : r.baraja(brutos);
        const items = orden.map((it, i) => ({ ...it, ref: `${b.id}-${p.n}-${i + 1}` }));
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
