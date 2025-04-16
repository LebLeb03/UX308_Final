/**
 * Mixes two primary RGB colors and returns the resulting color.
 * @param {string} rgb_colour1 - first color
 * @param {string} rgb_colour2 - second color
 * @returns {string} - mixed color or error
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
