// b = 'ABCDCBA'
// a = 'DCBA'

// b = 'ABCDCBA'
// a = 'DCBAABA'


// const a = 'the quick red fox jumped over the hairy dog'
// const b = 'the quick brown fox jumped over the lazy dog'

const a = 'k red jed'
const b = 'k brown  jed'

        //'k r  

// A = Array.from({length: a.length + 1},()=>Array(b.length + 1).fill(0))
// out = [];

// for (let i=a.length-1; -1<i ;i--){
//     for (let j=b.length-1; -1<j ;j--){
//             if(a[i] == b[j]){
//                 A[i][j] = 1 + A[i+1][j+1]
//                 out.push(a[i])
//             }else{
//                 A[i][j] = Math.max(A[i][j+1],A[i+1][j])
//             }
//     }
// }

// A.forEach(row => console.log(row.join(' ')));
// console.log(out)


//////
A = Array.from({length: a.length + 1},()=>Array(b.length + 1).fill(0))
V = Array.from({length: a.length + 1},()=>Array(b.length + 1).fill(0))
W = Array.from({length: a.length + 1},()=>Array(b.length + 1).fill(0))

for (let i=1; i < a.length + 1 ;i++){
    for (let j = 1; j < b.length + 1; j++) {
        if (a[i-1] == b[j-1]) {
            A[i][j] = 1 + A[i - 1][j - 1]
            V[i][j] = 1;
            W[i][j] = 'X';
        } else {
            if(A[i][j - 1] > A[i - 1][j]){
                A[i][j] = A[i][j - 1]
                V[i][j] = 2
                W[i][j] = '-'
                // W[i][j] = '<'
            }else{
                A[i][j] = A[i - 1][j]
                V[i][j] = 3
                W[i][j] = '|'
                // W[i][j] = '^'
            }
        }
    }
}


out = [];
o2 = [];
o3 = [];

k = (a.length+1)*(b.length+1)

x = a.length
y = b.length

for (let n = 0; n < k; n++) {
    item = V[x][y]
    if(item == 3){
        x = x -1
        o3.push(a[x])
        // out.push(' ')
    }else if(item == 2){
        y = y - 1
        o2.push(b[y])
        // out.push(' ')
    }else if(item == 1){
        out.push(a[x - 1])
        o2.push(' ')
        o3.push(' ')
        x = x - 1
        y = y - 1
        if(V[x][y] != 3){
            // out.push(' ')   
        }

    }else if(item == 0){
        break
    }
}


// A.forEach(row => console.log(row.join(' ')));S
// console.log(' ')
// V.forEach(row => console.log(row.join(' ')));
// a.split('').forEach(c=>console.log(c.join(' ')))

console.log(('  '+b).split('').join(' '))
lft =(' '+a)
W.forEach((row,idx) => {
    console.log((lft[idx] + ' ' + row.join(' ')))
});
console.log('')

// out = out.reverse()
console.log(a)
console.log(b)
// console.log('')
console.log(out.reverse().join(''))
console.log(o2.reverse().join(''))
console.log(o3.reverse().join(''))

// tmp = 0
// for (let i=a.length; 0<i ;i--){
    
//     maxValOfLine = Math.max(...A[i]);
//     idxOfMax = A[i].indexOf(maxValOfLine)
//     // console.log(idxOfMax)

//     // out.push(b[A[i].indexOf(Math.max(A[i]))])
//     // idxMax = Math.max(...A[i])
//     // console.log(idxMax)
//     // if(tmp != A[i].indexOf(idxMax) && 0 !=A[i].indexOf(idxMax) ){
//     //     tmp = A[i].indexOf(idxMax)
//     //     // console.log(A[i].indexOf(idxMax))
//     //     out.push(b[A[i].indexOf(idxMax)-1])
//     //     // A[i,idxMax] = 'X'
//     //     // console.log(A[i,idxMax])
//     // }

// }



// console.log((' ' + b).split('').join(' '))
// A.forEach(row => console.log(row.join(' ')));


