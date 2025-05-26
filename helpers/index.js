function convert(s) {
    // กำหนดค่าของตัวอักษรแต่ละตัวในระบบตัวเลขสมมติ
    const values = { A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000 };
    let total = 0;
    let prev = 0;
    // วนลูปจากขวาไปซ้าย (จากตัวอักษรตัวสุดท้ายไปตัวแรก)
    for (let i = s.length - 1; i >= 0; i--) {
        const curr = values[s[i]];
        if (curr < prev) total -= curr;
        else total += curr;
        prev = curr;
    }

    return total;
}
module.exports = { convert };
