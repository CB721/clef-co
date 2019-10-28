export function idConvert(id) {
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let newArr = [];
    for (let i = 0; i < id; i++) {
        newArr = newArr.concat(alpha);
    }
    const pl = id;
    const ease = "-";
    const h = newArr[pl];
    const ir = pl + 4;
    const e = newArr[ir];
    const c = newArr[ir -3] + "#n";
    const l = newArr[12];
    const i = 2 * pl;
    const n = newArr[i] + "*%";
    const t = newArr[pl];
    const br = Math.floor(3 * pl);
    const o = newArr[newArr.length - 4];
    const d = pl + 555;
    const a = newArr[br];
    const r = pl + "cb721";
    return pl + ease + h + ir + e + c + l + i + n + t + br + o + d + a + r;
}