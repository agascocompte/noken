// Datos de la guía Nōken 5 — examenes
// Editable a mano: es JSON puro asignado a N5.data.examenes
//
// Material de examen que NO se puede generar desde el resto de datos y hay que
// escribir. De momento solo もんだい４ de 文字・語彙 (言い換え類義): se da una
// frase y hay que elegir la que significa casi lo mismo.
//
// En cada «opciones», la PRIMERA es la correcta; el generador las baraja.
// Se escriben como en el examen de verdad: kana con espacios y kanji fácil,
// sin furigana.
window.N5=window.N5||{data:{}};
N5.data.examenes=
{
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
