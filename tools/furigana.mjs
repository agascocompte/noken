// Pone furigana (漢字[かんじ]) a los kanji que no la llevan en un JSON escrito a
// mano, con el diccionario de la guía. Sirve para el material nuevo de
// data/examenes.js: se escribe con kanji normales y esto los anota.
//   node tools/furigana.mjs fichero.json      → lo reescribe anotado
// Los campos «es» y «nota» (español) no se tocan. Al final lista las lecturas
// que ha puesto, para revisarlas, y las que no ha sabido poner.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { cargaN5, root } from "./datos.mjs";

const N5 = cargaN5();
for (const f of ["scripts/romaji.js", "scripts/examen.js"]) new Function("N5", readFileSync(join(root, f), "utf8"))(N5);
const E = N5.examen;

// Kanji sueltos con okurigana que el diccionario no trae como palabra aparte.
const SUELTOS = {
  何: "なに", 本: "ほん", 行: "い", 買: "か", 来: "き", 見: "み", 言: "い", 入: "はい", 帰: "かえ", 使: "つか",
  作: "つく", 休: "やす", 持: "も", 飲: "の", 食: "た", 話: "はな", 乗: "の", 歩: "ある", 読: "よ", 会: "あ",
  先: "さき", 足: "あし", 夜: "よる", 絵: "え", 山: "やま", 雨: "あめ", 店: "みせ", 番: "ばん", 階: "かい",
  同: "おな", 安: "やす", 大: "おお", 小: "ちい", 書: "か", 聞: "き", 待: "ま", 出: "で", 立: "た", 起: "お",
  寝: "ね", 始: "はじ", 終: "お", 教: "おし", 習: "なら", 住: "す", 着: "つ", 開: "あ", 閉: "し", 降: "ふ",
  高: "たか", 長: "なが", 新: "あたら", 古: "ふる", 白: "しろ", 黒: "くろ", 赤: "あか", 青: "あお", 多: "おお",
  少: "すこ", 早: "はや", 近: "ちか", 遠: "とお", 暑: "あつ", 寒: "さむ", 楽: "たの", 悪: "わる", 広: "ひろ",
  若: "わか", 重: "おも", 軽: "かる", 強: "つよ", 弱: "よわ", 速: "はや", 明: "あか", 暗: "くら", 洗: "あら",
  送: "おく", 貸: "か", 借: "か", 返: "かえ", 売: "う", 払: "はら", 呼: "よ", 走: "はし", 泳: "およ", 遊: "あそ",
  働: "はたら", 撮: "と", 取: "と", 切: "き", 消: "け", 押: "お", 引: "ひ", 置: "お", 知: "し", 思: "おも",
  考: "かんが", 忘: "わす", 覚: "おぼ", 疲: "つか", 困: "こま", 急: "いそ", 止: "と", 曲: "ま", 渡: "わた",
  降り: "お", 浴: "あ", 脱: "ぬ", 手伝: "てつだ", 晴: "は", 曇: "くも", 吹: "ふ", 咲: "さ", 違: "ちが",
  生: "う", 死: "し", 座: "すわ", 弾: "ひ", 歌: "うた", 勝: "か", 負: "ま", 並: "なら", 集: "あつ", 決: "き",
  運: "はこ", 届: "とど", 続: "つづ", 頼: "たの", 喜: "よろこ", 怒: "おこ", 泣: "な", 笑: "わら", 痛: "いた"
};

const fallos = new Set(), puestas = new Map();
function anota(t) {
  return String(t).split(/([一-鿿々〇]+\[[ぁ-ゖァ-ヺー]+\])/).map(seg => {
    if (/\[/.test(seg) || !/[一-鿿々〇]/.test(seg)) return seg;
    return seg.split(/(\s+|[。、？！「」（）・：〜…]+)/).map(w => {
      if (!/[一-鿿々〇]/.test(w)) return w;
      return (E.tokeniza(w)?.toks || [w]).map(x => {
        if (!/[一-鿿々〇]/.test(x)) return x;
        const y = E.lecturaDe(x);
        if (y) { const r = E.rubyTok(x, y); puestas.set(r, (puestas.get(r) || 0) + 1); return r; }
        const m = /^([一-鿿々〇]+)(.*)$/.exec(x);
        if (m && SUELTOS[m[1]]) { const r = m[1] + "[" + SUELTOS[m[1]] + "]" + m[2]; puestas.set(r, 1); return r; }
        fallos.add(x);
        return x;
      }).join("");
    }).join("");
  }).join("");
}

const recorre = (x, clave) =>
  typeof x === "string" ? (["es", "nota", "voz"].includes(clave) ? x : anota(x))
  : Array.isArray(x) ? x.map(y => recorre(y, clave))
  : x && typeof x === "object" ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, recorre(v, k)]))
  : x;

const ruta = process.argv[2];
const datos = recorre(JSON.parse(readFileSync(ruta, "utf8")));
writeFileSync(ruta, JSON.stringify(datos, null, 1));
console.log("lecturas puestas:", [...puestas.keys()].sort().join(" "));
console.log(fallos.size ? "\nSIN LECTURA (añádela a mano): " + [...fallos].join(" ") : "\nNada sin resolver.");
