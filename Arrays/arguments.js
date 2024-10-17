// it is array like object
function add(num1,num2) {
    console.log(num1,num2)
    console.log(arguments)
}
add(12,124,12,42)

//output: 12 124
// [Arguments] { '0': 12, '1': 124, '2': 12, '3': 42 }

// arguments will show the will show all the parameter like a object but it won't able to use the object methods