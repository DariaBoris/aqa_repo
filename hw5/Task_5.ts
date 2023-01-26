//Task 5
function getSum1 (aa: number, bb: number) {
    if (aa != bb) {
       return aa + bb
    } else if (aa === bb) {
        return aa || bb
    }
}

console.log(getSum1(100,1));