import { colour_mix } from './functions.js';

function Question1() {
    return (
        <section>
            <h1>1. Colour Mix</h1>
            <h2>Results</h2>
            <p>colour_mix("red", "blue") = {colour_mix("red", "blue")}</p>
            <p>colour_mix("green", "blue") = {colour_mix("green", "blue")}</p>
            <p>colour_mix("red", "green") = {colour_mix("red", "green")}</p>
            <p>colour_mix("blue", "blue") = {colour_mix("blue", "blue")}</p>
            <p>colour_mix("red", "red") = {colour_mix("red", "red")}</p>
            <p>colour_mix("green", "green") = {colour_mix("green", "green")}</p>
            <p>colour_mix("yellow", "red") = {colour_mix("yellow", "red")}</p>
        </section>
    );
}

export { Question1 };

import { largest_product } from './functions.js';

function Question2() {
    return (
        <section>
            <h1>2. Largest Product</h1>
            <h2>Results</h2>
            <p>largest_product(-8, 12, 20) = {largest_product(-8, 12, 20)}</p> {/* Expected: 240 */}
            <p>largest_product(5, 9, 2) = {largest_product(5, 9, 2)}</p>       {/* Expected: 45 */}
            <p>largest_product(0, -10, -5) = {largest_product(0, -10, -5)}</p> {/* Expected: 0 */}
        </section>
    );
}

export { Question2 };


import { day_of_the_week } from './functions.js';

function Question3() {
    return (
        <section>
            <h1>3. Day of the Week</h1>
            <h2>Results</h2>
            <p>day_of_the_week(1) = {day_of_the_week(1)}</p>   {/* Sunday */}
            <p>day_of_the_week(4) = {day_of_the_week(4)}</p>   {/* Wednesday */}
            <p>day_of_the_week(7) = {day_of_the_week(7)}</p>   {/* Saturday */}
            <p>day_of_the_week(0) = {day_of_the_week(0)}</p>   {/* Error */}
            <p>day_of_the_week(8) = {day_of_the_week(8)}</p>   {/* Error */}
        </section>
    );
}

export { Question3 };
