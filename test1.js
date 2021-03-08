function solution(S) {
    const map = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
      };
    
    function scoreStr(str) {
        const arr = str.split('');
        let score = 0;
        arr.map(c => {
            score += map[c];
            return score;
        });
        return score;
    }
    
    function removeOneChar(arr, toRem) {
        let res = [];
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element !== toRem) {
                res.push(element);
            }
        } 
        return res;
    }
    
    let scoreMap = [];
    
    function createAScoreMap(S) {
        const arr = S.split('');
    
        arr.map(c => {
            const arrToScore = removeOneChar(arr, c);
            console.log('arrToScore', arrToScore);
            const strToScore = arrToScore.join('');
            console.log('strToScore', strToScore);
            const score = scoreStr(strToScore);

            console.log('SCORE', score);

            scoreMap.push({combination: strToScore, score});
        });
    }

    createAScoreMap(S);

    const orderedList = scoreMap.sort((a, b) => (a.score - b.score));
    return orderedList[0].combination;
}