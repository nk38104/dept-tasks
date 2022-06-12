const get_group = (group_arr, arr, avg, curr_index) => {
    group_arr.push(arr[curr_index])
    const current_sum = sum(group_arr);
    
    
    if(current_sum > avg + 1) {
        group_arr.pop();
        curr_index++;
    } else {
        arr.splice(curr_index, 1);
    }
    
    if (((current_sum > avg - 2) && (current_sum < avg + 2)) || curr_index === arr.length) {
        return group_arr;
    }
    // console.log("c:", arr[curr_index])
    // console.log("g:", group_arr)
    // console.log("a:", arr)
    
    return get_group(group_arr, arr, avg, curr_index);
}


const sort_array = (arr) => {
    const avg = Math.round(sum(arr) / 3);
    console.log(avg)
    const sorted_arr = [];

    for(let i = 0; i < 3; ++i) {
        sorted_arr.push(get_group([], arr, avg, 0));
    }

    return sorted_arr;
}


const sum = (arr) => {
    return arr.reduce((accum, curr) => accum += curr, 0);
}

// const assert = (arr, sorted_arr) => {
//     const avg = Math.round(sum(arr) / 3);
//     let isClose = true;

//     sorted_arr.forEach(sub_array => {
//         const total_sum = sum(sub_array);

//         if (!(total_sum > avg - 2) && !(total_sum < avg + 2)) {
//             isClose = false;
//             return;
//         }
//     });

//     return (isClose) ? "Assertion passed." : "Assertion failed.";
// }

const arr1 = [1, 3, 1, 7, 5, 6, 6, 7, 4, 2]; // sum = 42 -> 42/3 = 14   [1, 3, 1, 7, 2]14 [5, 6, 4]15 [6, 7]13
const arr2 = [8, 1, 5, 2, 4, 1, 9, 8];       // sum = 38 -> 38/3 = 13 => [8, 1, 2, 1]12 [5, 8]13 [9, 4]13

// sort_array(arr1).forEach(sub_arr => console.log("1: ", sub_arr));
sort_array(arr2).forEach(sub_arr => console.log("2:", sub_arr));

// console.log(assert(arr1, [[1, 3, 1, 7, 2], [5, 6, 4], [6, 7]]));
// console.log(assert(arr2, [[8, 1, 2, 1], [5, 8], [9, 4]]));

