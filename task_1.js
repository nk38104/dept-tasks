// -------- TEST --------

const check_if_sum_within_bounds = (array, target) => {
    const total_sum = sum(array);
    return ((total_sum > target - 2) && (total_sum < target + 2));
}

const assert = (array, sorted_array) => {
    const target = get_target_value(array);
    const result = sorted_array.filter(sub_array => check_if_sum_within_bounds(sub_array, target));

    return (result.length != 3) ? "Assertion failed." : "Assertion passed.";
}

// ----------------------
// -------- MAIN --------

const sum = (arr) => {
    return arr.reduce((accum, curr) => accum += curr, 0);
}

const get_target_value = (arr) => {
    return Math.round(sum(arr) / 3);
}

const check_if_sum_greater_than_target = (current_sum, target)  => {
    return (current_sum > target);
}

const check_if_sum_in_lower_bound = (current_sum, target) => {
    return (current_sum === target - 1) || (current_sum === target);
}

const check_if_index_reached_end = (current_index, array_length) => {
    return current_index === array_length;
} 


const get_group = (group_array, source_array, target, current_index) => {
    const current_sum = sum(group_array);

    if(check_if_sum_greater_than_target(current_sum + source_array[current_index], target)) {
        current_index += 1;
    } else {
        group_array.push(source_array[current_index]);
        source_array.splice(current_index, 1);
    }

    if (check_if_sum_in_lower_bound(current_sum, target) || check_if_index_reached_end(current_index, source_array.length)) {
        return group_array;
    }

    return get_group(group_array, source_array, target, current_index);
}


const sort_array = (array) => {
    if (array.length < 3) throw new Error(`Invalid array length. Array has ${array.length} element(s) but target requires at least 3.`);

    const sorted_array = [];
    const target = get_target_value(array);
    const reverse_sorted_array = array.slice().sort().reverse();

    for(let i = 0; i < 2; ++i) {
        sorted_array.push(get_group([], reverse_sorted_array, target, 0));
    }

    sorted_array.push(reverse_sorted_array);

    return sorted_array;
}


const array_list = [
    [1, 3, 1, 7, 5, 6, 6, 7, 4, 2],
    [1, 3, 1, 7, 5, 6, 6, 7, 4, 2, 6],
    [8, 1, 5, 2, 4, 1, 9, 8],
    [8, 1],
    [1, 3, 1]
]

array_list.forEach((array, index) => {
    try {
        const sorted_array = sort_array(array);
        console.log(`${index}: `, assert(array, sorted_array));
    } catch (err) {
        console.log(`${index}:  Error ->`, err.message);
    }
})

// ----------------------