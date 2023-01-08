//Lesson on REDUCE

//const nums = [20,30,50,12,-2,45,99,19,22,85];
//finding the sum without reduce method
let total = 0;
for(let num of nums){
    total += num
}

console.log(total);
//lowest number without reduce method
let min = nums[0];

for(let i = 1; i < nums.length; i++){
    if(nums[i] < min) min = nums[i];
}

console.log(min);

//take a string and turn it into an array
const str = "lollipop";
const charFreq = {};

for(let char of str){
    if(charFreq[char]){
        charFreq[char] += 1;
    }else{
        charFreq[char] = 1;
    }
}


//ASSIGNMENT QUESTIONS
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

//extractValue
function extractValue(arr,key){
    return arr.reduce(function(accum, next){
        accum.push(next[key]);
        return accum;
    },[]);
}

//vowelCount
function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if (vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
}, {});
}

//addKeyandValue
function addKeyandValue(arr,key,value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    }, arr);
}

//partition
function partition(arr,cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
    })
}