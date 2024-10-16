function password(obj) {
    if(typeof obj !== "object"){
        return 'Please provide an object'
    }
    return obj.birthYear.toString().length < 4 // to find the legth of a number you must have to convert the number to a string
    ? 'Invalid'
    : obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;
    
}
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))