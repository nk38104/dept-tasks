

const display_pyramid = (pyramid) => {
    pyramid.forEach(row => {
        const space_width = row[0] - 1;   // n - 1 spaces in every row depending on number count in a row
        const total_width = space_width + row.length * row[0].toString().length + (row.length - 1);    // space count + (row number count * number digit count) + commas between numbers
        console.log(row.toString().padStart(total_width, " "));
    });
    console.log("\n");
};


const generate_pyramid_row = (block_number, block_count) => {
    if (!block_count) return [];
  
    return [block_number].concat(generate_pyramid_row(block_number, block_count - 1));
};


const generate_pyramid = (height, block_count) => {
    if (!height || height < 1) return [];

    return [generate_pyramid_row(height, block_count)].concat(generate_pyramid(height - 1, block_count + 1));
};


[0, 2, 3, 6].forEach(test_num => {
    const pyramid = generate_pyramid(test_num, 1);

    if(pyramid.length) {
        display_pyramid(pyramid);
    }
});

