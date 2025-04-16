/**
 * Question 1
 */
export function colour_mix(rgb_colour1, rgb_colour2) {
    const validColors = ["red", "green", "blue"];

    if (!validColors.includes(rgb_colour1) || !validColors.includes(rgb_colour2)) {
        return "Error";
    }

    const combo = new Set([rgb_colour1, rgb_colour2]);

    if (combo.size === 1) {
        // Same color
        return rgb_colour1;
    }

    if (combo.has("red") && combo.has("blue")) return "fuchsia";
    if (combo.has("red") && combo.has("green")) return "yellow";
    if (combo.has("green") && combo.has("blue")) return "aqua";

    return "Error"; // fallback (shouldn't hit here with valid input)
}


// Question 2

export function largest_product(val1, val2, val3) {
    const values = [val1, val2, val3];

    // Sort descending and take the first 2 values
    values.sort((a, b) => b - a);
    return values[0] * values[1];
}

// src/functions.js

export function day_of_the_week(day_num) {
    const days = [
        "Sunday",    // 1 For emily makes it easier for you to read 
        "Monday",    // 2
        "Tuesday",   // 3
        "Wednesday", // 4
        "Thursday",  // 5
        "Friday",    // 6
        "Saturday"   // 7
    ];

    if (typeof day_num !== "number" || day_num < 1 || day_num > 7) {
        return "Error";
    }

    return days[day_num - 1];
}
