/**
 * 
 * @param {sqares} sqaures array of squares
 *  Return winner 'X' or 'O' or null
 */
export default function calculateWinner(sqaures) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; // destrucure the variables
        if(sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]){
            return sqaures[a];
        }
    }

    return null;
}