

const isEven = (num) => {
    return num % 2 === 0;
};


const display_pyramid = (pyramid) => {
    pyramid.forEach(row => {
        const space_width = row[0] - 1;   // n - 1 spaces in every row depending on number count in a row
        const total_width = space_width + row.length * row[0].toString().length + (row.length - 1);    // space count + (row number count * number digit count) + commas between numbers
        console.log(row.toString().padStart(total_width, " "));
    });
    console.log("\n");
};


const generate_block_row = (block_number, block_count, current_count) => {
    if (!current_count) return [];

    return [block_number].concat(generate_block_row((block_count / 2 + 1 >= current_count) ? --block_number : ++block_number, block_count, --current_count));
};


const generate_pyramid = (height, block_count) => {
    if (!height || height < 1 || isEven(height)) return [];

    return [generate_block_row(height, block_count, block_count)].concat(generate_pyramid(height - 2, block_count + 2));
};


[0, 2, 3, 5, 6, 7].forEach(test_num => {
    const pyramid = generate_pyramid(test_num, 1);

    if (pyramid.length) {
        display_pyramid(pyramid);
    }
});

