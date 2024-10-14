function delDup(arr) {
    const newArr = [];
    for (const n of arr) {
        if (newArr.includes(n)) {
            continue;
        }
        newArr.push(n)
    }
    console.log(newArr)
}

delDup([12,15,125,3,15,12,1156,125])