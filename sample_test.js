function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (!Array.isArray(A) || !A) {
        console.log("The param A must be valid");
        return;
    }

    for (let n = 1; n < Number.MAX_SAFE_INTEGER; n++) {
        if (A.includes(n)) {
            A.splice(A.indexOf(n), 1);
            continue;
        }
        return n;
    }
}

solution([1, 3, 6, 4, 1, 2]);