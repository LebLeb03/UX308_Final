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