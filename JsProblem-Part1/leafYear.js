function leafYear(year) {
    return (year % 4 == 0 && year % 100 != 0 ?
        'It is a leaf year' :
        year % 100 == 0 && year % 400 == 0 ?
        'It is a Leaf year' :
        'It is not Leaf year'
    )
}
console.log(leafYear(2000))