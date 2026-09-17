let schemes = [];

// Load schemes from schemes.json
fetch("schemes.json")
    .then(response => response.json())
    .then(data => {
        schemes = data;
        console.log("Schemes loaded:", schemes);
    })
    .catch(error => {
        console.error("Error loading schemes:", error);
    });


// When user clicks Find Schemes
document.getElementById("findButton").addEventListener("click", function () {

    let age = Number(document.getElementById("age").value);
    let occupation = document.getElementById("occupation").value.toLowerCase().trim();
    let income = Number(document.getElementById("income").value);
    let state = document.getElementById("state").value.toLowerCase().trim();

    let results = document.getElementById("results");


    // Find all matching schemes
    let matches = schemes.filter(function (scheme) {

        let ageMatch =
            age >= scheme.minAge &&
            age <= scheme.maxAge;

        let incomeMatch =
            income <= scheme.maxIncome;

        let occupationMatch =
            occupation === scheme.occupation;

        let stateMatch =
            state === scheme.state ||
            scheme.state === "all";

        return ageMatch &&
               incomeMatch &&
               occupationMatch &&
               stateMatch;
    });


    // Display all matching schemes
    if (matches.length > 0) {

        results.innerHTML = `
            <h2>🟢 Potential Schemes</h2>

            ${matches.map(function (scheme) {

                return `
                    <div class="scheme-card">

                        <h3>${scheme.name}</h3>

                        <p>
                            <b>Benefit:</b>
                            ${scheme.benefit}
                        </p>

                        <p><b>Required Documents:</b></p>

                        <ul>
                            ${scheme.documents
                                .map(function (doc) {
                                    return `<li>${doc}</li>`;
                                })
                                .join("")}
                        </ul>

                        <p>
                            ⚠️ You may be eligible based on the
                            information provided. Please verify
                            the complete eligibility criteria.
                        </p>

                    </div>
                `;

            }).join("")}
        `;

    } else {

        results.innerHTML = `
            <h2>❌ No matching schemes found</h2>

            <p>
                We could not find a potential scheme based on
                the information provided.
            </p>
        `;
    }

});