export type MotionElement = {
  id: number;
  symbol: string;
  name: string;
  videoSrc: string;
  col: number;
  row: number;
  description: string;
  text_ae: string;
  text_aviutl: string;
};

export const motions: MotionElement[] = [
  // --- 1行目 ---
  { 
    id: 1, col: 1, row: 1, symbol: "Or", name: "Orbit", videoSrc: "videos/IMG_7742.mp4",
    description: "【オービット】中心点の周りを衛星のように周回する動き。惑星の公転や、ローディング画面のアイコンなどで頻繁に使用される基本的なモーション。",
    text_ae: "Nullオブジェクトを親にして回転させることで制御します。",
    text_aviutl: "「回転」エフェクトの中心座標をずらすか、グループ制御を使います。"
  },
  { 
    id: 2, col: 18, row: 1, symbol: "Fr", name: "Fractal Noise", videoSrc: "/videos/fractal.webm",
    description: "【フラクタルノイズ】不規則で複雑な模様を生成するエフェクト。煙、雲、炎、水面のような自然現象をシミュレーションする際に不可欠な基礎技術。",
    text_ae: "「フラクタルノイズ」エフェクトを使用。展開プロパティにエクスプレッション time*100 を入れると動きます。",
    text_aviutl: "「ノイズ」エフェクトを使用。「変化速度」を上げることで同様の表現が可能です。"
  },

  // --- 2行目 ---
  { 
    id: 3, col: 1, row: 2, symbol: "Of", name: "Offset", videoSrc: "/videos/orbit.webm",
    description: "【オフセット】要素の位置をずらす処理。",
    text_ae: "「オフセット」エフェクト、またはトランスフォームの位置プロパティを使用。",
    text_aviutl: "「座標」の数値を変更することで実装します。"
  },
  { 
    id: 4, col: 2, row: 2, symbol: "Lw", name: "Line Weight", videoSrc: "/videos/lineweight.webm",
    description: "【ラインウェイト】線の太さに強弱をつける表現。",
    text_ae: "シェイプレイヤーの「線幅」プロパティをキーフレームで操作します。",
    text_aviutl: "図形の「サイズ」や、縁取りエフェクトの太さを変化させます。"
  },
  { 
    id: 5, col: 13, row: 2, symbol: "Bl", name: "Blur", videoSrc: "/videos/glitch.webm",
    description: "【ブラー】ぼかし効果。",
    text_ae: "「ブラー(ガウス)」などが一般的。カメラ設定の被写界深度でも表現可能。",
    text_aviutl: "「ぼかし」エフェクトを使用します。"
  },
  { id: 6, col: 14, row: 2, symbol: "Mv", name: "Move", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 7, col: 15, row: 2, symbol: "Rt", name: "Rotate", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 8, col: 16, row: 2, symbol: "Sc", name: "Scale", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 9, col: 17, row: 2, symbol: "Tl", name: "Trim Line", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 10, col: 18, row: 2, symbol: "Re", name: "Rough Edge", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },

  // --- 3行目 ---
  { id: 11, col: 1, row: 3, symbol: "Vg", name: "Vegas", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 12, col: 2, row: 3, symbol: "St", name: "Shape Transform", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 13, col: 3, row: 3, symbol: "Es", name: "Easing", videoSrc: "/videos/fractal.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 14, col: 13, row: 3, symbol: "Df", name: "Depth of Field", videoSrc: "/videos/glitch.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 15, col: 14, row: 3, symbol: "Sm", name: "Symmetric Move", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 16, col: 15, row: 3, symbol: "Sr", name: "Symmetric Rotate", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 17, col: 16, row: 3, symbol: "Ss", name: "Symmetric Scale", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 18, col: 17, row: 3, symbol: "Tc", name: "Trim Circle", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 19, col: 18, row: 3, symbol: "Td", name: "Turbulent Displace", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },

  // --- 4行目 ---
  { id: 20, col: 1, row: 4, symbol: "Lp", name: "Loop", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 21, col: 2, row: 4, symbol: "Rp", name: "Repeat Transform", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 22, col: 3, row: 4, symbol: "Rh", name: "Rhythm", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 23, col: 4, row: 4, symbol: "Ts", name: "Tip Shape", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 24, col: 5, row: 4, symbol: "Lk", name: "Link", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 25, col: 6, row: 4, symbol: "Mw", name: "Mask Wipe", videoSrc: "/videos/glitch.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 26, col: 7, row: 4, symbol: "Sf", name: "Spin Fade", videoSrc: "/videos/fractal.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 27, col: 8, row: 4, symbol: "Sb", name: "Scribble", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 28, col: 9, row: 4, symbol: "Tx", name: "Text", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 29, col: 10, row: 4, symbol: "Bd", name: "Bend", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 30, col: 11, row: 4, symbol: "Sc", name: "Scatter", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 31, col: 12, row: 4, symbol: "Op", name: "Opacity", videoSrc: "/videos/glitch.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 32, col: 13, row: 4, symbol: "Mb", name: "Motion Blur", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 33, col: 14, row: 4, symbol: "Rm", name: "Repeat Move", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 34, col: 15, row: 4, symbol: "Rr", name: "Repeat Rotate", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 35, col: 16, row: 4, symbol: "Rs", name: "Repeat Scale", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 36, col: 17, row: 4, symbol: "Rt", name: "Repeat Trim", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 37, col: 18, row: 4, symbol: "Ns", name: "Noise", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },

  // --- 5行目 ---
  { id: 38, col: 1, row: 5, symbol: "Ti", name: "Tile", videoSrc: "/videos/glitch.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 39, col: 2, row: 5, symbol: "Sh", name: "Shadow", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 40, col: 3, row: 5, symbol: "St", name: "Step Time", videoSrc: "/videos/fractal.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 41, col: 4, row: 5, symbol: "Aw", name: "Audio Wave", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 42, col: 5, row: 5, symbol: "Pt", name: "Particle", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 43, col: 6, row: 5, symbol: "Sa", name: "Shatter", videoSrc: "/videos/glitch.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 44, col: 7, row: 5, symbol: "Sl", name: "Slide", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 45, col: 8, row: 5, symbol: "Bl", name: "Blind", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 46, col: 9, row: 5, symbol: "Rn", name: "Random", videoSrc: "/videos/fractal.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 47, col: 10, row: 5, symbol: "Ww", name: "Wave Warp", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 48, col: 11, row: 5, symbol: "Md", name: "Median", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 49, col: 12, row: 5, symbol: "Fl", name: "Flare", videoSrc: "/videos/glitch.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 50, col: 13, row: 5, symbol: "Gl", name: "Glow", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 51, col: 14, row: 5, symbol: "Wm", name: "Wiggle Move", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 52, col: 15, row: 5, symbol: "Wr", name: "Wiggle Rotate", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 53, col: 16, row: 5, symbol: "Ws", name: "Wiggle Scale", videoSrc: "/videos/orbit.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 54, col: 17, row: 5, symbol: "Tp", name: "Trim Pic", videoSrc: "/videos/lineweight.webm", description: "", text_ae: "", text_aviutl: "" },
  { id: 55, col: 18, row: 5, symbol: "Wp", name: "Wiggle Path", videoSrc: "/videos/noise.webm", description: "", text_ae: "", text_aviutl: "" },
];