/*Tính kết quả của phép tính hai số a, b 
và phép tính số học(+, -, * , / , ^, ^3, sqrt)
*/

const plus = (a,b)=>{
    return a + b 
}

const subtract = (a,b)=>{
    return a + b 
}

const mutiple = (a,b)=>{
    return a + b 
}

const divide = (a,b)=>{
    return a + b 
}

const context= {
    plus,
    subtract,
    divide,
    mutiple
}

const test1 = ()=>{
    //input
    const a = 10
    const b = 5
    const operator = 'subtract'

    console.log(context[operator](a,b))
}

test1()