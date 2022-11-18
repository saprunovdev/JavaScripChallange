// Let's try to develop a program which calculate 
//measure of central tendency of a sample(mean, median, mode) 
//and measure of variability(range, variance, standard deviation). 

//In addition to those measures find the min, max, count, percentile, 
//and frequency distribution of the sample. You can create a class called Statistics 

//and create all the functions which do statistical calculations as method for the 
//Statistics class. Check the output below.


ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    //Sorted array increasing
    sort(arr){
        let sorted = arr.sort((a, b) => a - b)
        return sorted
    }
    //count num of array
    count(arr) {
        return arr.length
    }

    //sum all numbers in array
    sum(arr){
        let sum = arr.reduce((total, current) => total + current)
        return sum
    }

    //find the min value in array
    min(arr){
        return this.sort(arr)[0]
    }

    //find the max value in array
    max(arr){
        return this.sort(arr)[this.sort(arr).length - 1]
    }
    
    //find the range of array
    range(arr){
        return Math.abs(this.max(arr) - this.min(arr))
    }

    //find the mean distribution of the array
    mean(arr){
        let mean = (this.sum(arr)/this.count(arr))
        return Math.ceil(mean)
    }

    //find the median of array
    median(arr){
        let median
        if (this.count(arr) % 2 == 0){
            return median = (arr[Math.floor(this.count(arr)/2)] - arr[Math.ceil(this.count(arr)/2)])/2
        }else{
            return median = this.sort(arr)[Math.floor(this.count(arr)/2)]

        }
    }

    //find the mode of array
    //mode is a number, which shows the most
    mode(arr){
        let count = {}
        let maxNum
        arr.forEach(e => {
            count[e] = ++ count[e] || 1;
        });
        console.log(count)
        maxNum = Object.keys(count).reduce(function(a,b){
            return count[a] > count[b] ? a : b;
        }
        )
        return maxNum
    }

    //find the Variance of the array
    var(arr){

    }

    //Standard Deviation
    std(arr){

    }

    //Frequency Distribution
    freqDist(arr){

    }

}

let statistics = new Statistics()

console.log('Count:', statistics.count(ages)) // 25
console.log('Sum: ', statistics.sum(ages)) // 744
console.log('Min: ', statistics.min(ages)) // 24
console.log('Max: ', statistics.max(ages)) // 38
console.log('Range: ', statistics.range(ages)) // 14
console.log('Mean: ', statistics.mean(ages)) // 30
console.log('Median: ',statistics.median(ages)) // 29
console.log('Mode: ', statistics.mode(ages)) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var(ages)) // 17.5
// console.log('Standard Deviation: ', statistics.std(ages)) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist(ages))