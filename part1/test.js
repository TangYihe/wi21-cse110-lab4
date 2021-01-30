/*function discountPrices (prices, discount){
    let discounted = [];
    let finalprice = 0;

    for(var i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1-discount);
        finalprice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalprice);
    }

    console.log(i);
    //console.log(discountedPrice);
    console.log(finalprice);

    return discounted;
}

console.log(discountPrices([100,200,300], .5));*/

/*let student = {
    name: 'Sarah',
    major: 'CS',
    'Grad Year': '2022',
    greeting: function(){console.log('Hello');},
    'Favorite teacher':{
        name: 'Powell',
        course: 'CSE110',
    },
    courseload: ['CSE110', 'CSE134', 'VIS41']
};


student.greeting();*/

/*function modifyArray(array, callback){
    const newArr = [];//why const?
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i], function(x){
            return x*2;
        }));
    }
    return newArr;
}

function doSomething(num, callback){
    return callback(num+2);
}

console.log(modifyArray([1,2,3], doSomething));*/

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}
printNums();