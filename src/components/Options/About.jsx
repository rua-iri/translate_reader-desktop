import React from "react";


export default function About() {

    return (
        <div className="menu-item">
            <h3>
                About
            </h3>

            <div>
                Welcome to the Arabic Reading Assistant.
                A tool to help intermediate and advanced Arabic students read and understand texts with greater ease.
            </div>

            <div>
                It was built by me, Rory McGuigan and was inspired by the kind of tool I always wished I had while studying at university.
            </div>

            <div>
                The full source code can be found in my&nbsp;
                <a href="https://github.com/rua-iri/translate_reader" target="_blank" rel="noreferrer">
                    GitHub repository.
                </a>
            </div>

        </div>
    )
}