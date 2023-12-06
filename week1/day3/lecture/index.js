// [1, 2, 3] [2, 4, 5] cycling through both of these arrays to find out if the second array has any of the same values from the first. 


// Using memoization - object [1, 2, 3] [2, 4, 5]
// Create a dictionary where keys are elements from first array
let foundVals = {
    1:0,
    2:0,
    3:0
}

if (foundVals[key])
