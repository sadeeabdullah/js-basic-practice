function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid"
    } else {
        const vowels = 'aeiouAEIOU'
        if(vowels.includes(name[(name.length)-1])){
            return "Good Name"
        }
        else{
            return "Bad Name"
        }
        
    }
}
console.log(checkName("Jhankar"))