//binary search
// Given an array of integers nums which is sorted in ascending order, 
//and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

function binary(arr, target){
    middleIndex = Math.round(arr.length/2)
    if(target == arr[middleIndex]){
        return `The number ${target} is at ${middleIndex} index`
    } else{
        
    }
}


const array = [1,2,3,4,5,6,7,8,9,10,11]
const target = 7

console.log(binary(array,target))