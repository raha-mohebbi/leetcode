var convert = function(s, numRows) {

    if (numRows === 1) {
        return s;
    }

    let rows = Array.from({length: numRows}, () => []);

    let row = 0;
    let direction = 1;


    for (let char of s) {
//put the character in the current row
        rows[row].push(char);


 //if we reached the last row, change direction to up
        if (row === numRows - 1) {
            direction = -1;
        }

     //if we reached the first row, change direction to down
        else if (row === 0) {
            direction = 1;
        }


       //move to the next row based on the current direction
        row = row + direction;
    }


    return rows.flat().join("");
};