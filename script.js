// =====================================================
// SCHEMEWISE - VOICE + ELIGIBILITY
// =====================================================

// ---------------- LANGUAGE ----------------

const languages = {

    "kn-IN": {
        questions: {
            age: "ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?",
            occupation: "ನಿಮ್ಮ ಉದ್ಯೋಗ ಏನು?",
            income: "ನಿಮ್ಮ ಮಾಸಿಕ ಆದಾಯ ಎಷ್ಟು?",
            state: "ನೀವು ಯಾವ ರಾಜ್ಯದಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?"
        }
    },

    "te-IN": {
        questions: {
            age: "మీ వయస్సు ఎంత?",
            occupation: "మీ వృత్తి ఏమిటి?",
            income: "మీ నెలవారీ ఆదాయం ఎంత?",
            state: "మీరు ఏ రాష్ట్రంలో నివసిస్తున్నారు?"
        }
    },

    "hi-IN": {
        questions: {
            age: "आपकी उम्र कितनी है?",
            occupation: "आपका व्यवसाय क्या है?",
            income: "आपकी मासिक आय कितनी है?",
            state: "आप किस राज्य में रहते हैं?"
        }
    }

};


// ---------------- VARIABLES ----------------

let selectedLanguage = "kn-IN";

let currentQuestion = 0;

let attempts = 0;

const maxAttempts = 5;

let userData = {
    age: null,
    occupation: "",
    income: null,
    state: ""
};


const questionKeys = [
    "age",
    "occupation",
    "income",
    "state"
];


// =====================================================
// SCHEMES
// =====================================================

// We keep a backup copy here so the app will still work
// even if schemes.json has a loading problem.

const schemes = [

    {
        name: "PM SVANidhi",
        occupation: "street_vendor",
        minAge: 18,
        maxAge: 100,
        maxIncome: 1000000,
        state: "all",
        benefit:
            "Collateral-free working capital loans for eligible street vendors.",
        documents: [
            "Aadhaar Card",
            "Bank Account",
            "Certificate of Vending or Letter of Recommendation, where applicable"
        ]
    },

    {
        name: "PM Vishwakarma",
        occupation: "tailor",
        minAge: 18,
        maxAge: 100,
        maxIncome: 1000000,
        state: "all",
        benefit:
            "Skill training, toolkit incentive and credit support for eligible traditional artisans.",
        documents: [
            "Aadhaar Card",
            "Mobile Number",
            "Bank Account"
        ]
    },

    {
        name: "ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి (PM-KISAN)",
        occupation: "farmer",
        minAge: 18,
        maxAge: 100,
        maxIncome: 1000000,
        state: "all",
        benefit:
            "ప్రతి సంవత్సరం ₹6,000 మూడు సమాన కిస్తలలో ఇచ్చబడుతుంది.",
        documents: [
            "ఆధార్ కార్డ్",
                    "భూమి రికార్డ్",
                    "బ్యాన్క్ ఖాతా"
        ]
    },

    {
        name: "ప్రధాన మంత్రి మత్స్య సంపదा యోజన (PMMSY)",
        occupation: "fisherman",
        minAge: 18,
        maxAge: 100,
        maxIncome: 1000000,
        state: "all",
        benefit:
            "Support for eligible fishers and fisheries-sector beneficiaries.",
        documents: [
            "Aadhaar Card",
            "Bank Account",
            "Fisheries-related identification, where applicable"
        ]
    },

    {
        name: "NAMASTE",
        occupation: "sanitation_worker",
        minAge: 18,
        maxAge: 100,
        maxIncome: 1000000,
        state: "all",
        benefit:
            "Support for safety, dignity, social security and livelihood opportunities for eligible sanitation workers.",
        documents: [
            "Aadhaar Card",
            "Bank Account",
            "Worker identification details"
        ]
    }

];


// =====================================================
// SPEECH RECOGNITION
// =====================================================

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

let recognition = null;

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.continuous = false;

    recognition.interimResults = false;

} else {

    alert(
        "Please use Google Chrome for voice input."
    );

}


// =====================================================
// LANGUAGE SELECTION
// =====================================================

function selectLanguage(language) {

    selectedLanguage = language;

    if (recognition) {
        recognition.lang = language;
    }

    document.getElementById("languageScreen").style.display =
        "none";

    document.getElementById("appScreen").style.display =
        "block";

    currentQuestion = 0;

    attempts = 0;

    askCurrentQuestion();
}


// =====================================================
// ASK QUESTION
// =====================================================

function askCurrentQuestion() {

    if (currentQuestion >= questionKeys.length) {

        finishQuestions();

        return;
    }

    attempts++;

    const key =
        questionKeys[currentQuestion];

    const question =
        languages[selectedLanguage]
        .questions[key];


    document.getElementById("questionNumber").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questionKeys.length;


    document.getElementById("question").innerText =
        question;


    document.getElementById("attempt").innerText =
        "Attempt " +
        attempts +
        " of " +
        maxAttempts;


    document.getElementById("result").innerText =
        "Speak your answer...";


    speakQuestion(question);
}


// =====================================================
// TEXT TO SPEECH
// =====================================================

function speakQuestion(text) {

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang =
        selectedLanguage;

    speech.rate = 0.9;

    speech.onend = function () {

        document.getElementById("status").innerText =
            "🎤 Your turn to speak.";

    };

    window.speechSynthesis.speak(speech);
}


// =====================================================
// HEAR QUESTION BUTTON
// =====================================================

document
    .getElementById("speakQuestionButton")
    .addEventListener("click", function () {

        const question =
            document.getElementById("question").innerText;

        speakQuestion(question);

    });


// =====================================================
// SPEAK ANSWER BUTTON
// =====================================================

document
    .getElementById("listenButton")
    .addEventListener("click", function () {

        if (!recognition) {
            return;
        }

        recognition.lang =
            selectedLanguage;

        document.getElementById("status").innerText =
            "🎤 Listening...";

        try {

            recognition.start();

        } catch (error) {

            console.log(error);

        }

    });


// =====================================================
// SPEECH RESULT
// =====================================================

if (recognition) {

    recognition.onresult = function (event) {

        const text =
            event.results[0][0].transcript;


        console.log("USER SAID:", text);


        document.getElementById("result").innerText =
            text;


        validateAnswer(text);

    };


    recognition.onerror = function (event) {

        console.log(
            "Speech error:",
            event.error
        );

        handleInvalidAnswer();

    };

}


// =====================================================
// VALIDATE ANSWER
// =====================================================

function validateAnswer(text) {

    const key =
        questionKeys[currentQuestion];

    let valid = false;

    let value = null;


    // ---------- AGE ----------

    if (key === "age") {

        const numbers =
            text.match(/\d+/);

        if (numbers) {

            value =
                Number(numbers[0]);

            if (
                value >= 1 &&
                value <= 120
            ) {

                valid = true;

            }

        }

    }


    // ---------- OCCUPATION ----------

    if (key === "occupation") {

        const lower =
            text.toLowerCase();


        if (
            lower.includes("farmer") ||
            lower.includes("ರೈತ") ||
            lower.includes("రైతు") ||
            lower.includes("किसान")
        ) {

            value = "farmer";

            valid = true;

        }


        else if (
            lower.includes("street vendor") ||
            lower.includes("vendor") ||
            lower.includes("ವ್ಯಾಪಾರಿ") ||
            lower.includes("వీధి వ్యాపారి") ||
            lower.includes("विक्रेता")
        ) {

            value = "street_vendor";

            valid = true;

        }


        else if (
            lower.includes("tailor") ||
            lower.includes("ದರ್ಜಿ") ||
            lower.includes("ಟೈಲರ್") ||
            lower.includes("టైలర్") ||
            lower.includes("दर्जी")
        ) {

            value = "tailor";

            valid = true;

        }


        else if (
            lower.includes("fisherman") ||
            lower.includes("fish") ||
            lower.includes("ಮೀನುಗಾರ") ||
            lower.includes("ಮೀನು") ||
            lower.includes("మత్స్యకారుడు") ||
            lower.includes("मछुआरा")
        ) {

            value = "fisherman";

            valid = true;

        }


        else if (
            lower.includes("sanitation") ||
            lower.includes("ಸಫಾಯಿ") ||
            lower.includes("ಸ್ವಚ್ಛತಾ") ||
            lower.includes("శానిటేషన్") ||
            lower.includes("सफाई")
        ) {

            value = "sanitation_worker";

            valid = true;

        }

    }


    // ---------- INCOME ----------

    if (key === "income") {

        const numbers =
            text.match(/\d+/);

        if (numbers) {

            value =
                Number(numbers[0]);

            valid = true;

        }

    }


    // ---------- STATE ----------

    if (key === "state") {

        if (
            text &&
            text.trim().length >= 2
        ) {

            value =
                text.trim().toLowerCase();

            valid = true;

        }

    }


    // ---------- VALID ----------

    if (valid) {

        userData[key] =
            value;


        console.log(
            "ACCEPTED:",
            key,
            value
        );


        document.getElementById("status").innerText =
            "✅ Answer accepted";


        setTimeout(function () {

            currentQuestion++;

            attempts = 0;

            askCurrentQuestion();

        }, 1000);

    }


    // ---------- INVALID ----------

    else {

        handleInvalidAnswer();

    }

}


// =====================================================
// INVALID ANSWER
// =====================================================

function handleInvalidAnswer() {

    document.getElementById("status").innerText =
        "❌ Answer not understood. Please try again.";


    if (attempts < maxAttempts) {

        setTimeout(function () {

            askCurrentQuestion();

        }, 1200);

    }

    else {

        showManualFallback();

    }

}


// =====================================================
// MANUAL FALLBACK
// =====================================================

function showManualFallback() {

    document.getElementById("manualArea").style.display =
        "block";

    document.getElementById("manualInput").value =
        "";

    document.getElementById("status").innerText =
        "Please enter your answer manually.";

}


// =====================================================
// MANUAL SUBMIT
// =====================================================

document
    .getElementById("manualSubmit")
    .addEventListener("click", function () {

        const text =
            document.getElementById("manualInput").value;


        if (text.trim() === "") {
            return;
        }


        document.getElementById("manualArea").style.display =
            "none";


        attempts = 0;

        validateAnswer(text);

    });


// =====================================================
// FINISH QUESTIONS
// =====================================================

function finishQuestions() {

    console.log(
        "========== FINAL USER DATA =========="
    );

    console.log(userData);


    document.getElementById("questionNumber").innerText =
        "Complete";


    document.getElementById("question").innerText =
        "✓ All information collected";


    document.getElementById("status").innerText =
        "🔍 Finding suitable schemes...";


    document.getElementById("listenButton").style.display =
        "none";


    document.getElementById("speakQuestionButton").style.display =
        "none";


    // IMPORTANT:
    // Directly run matching.

    findSchemes();

}


// =====================================================
// FIND ELIGIBLE SCHEMES
// =====================================================

function findSchemes() {

    const results =
        document.getElementById("results");


    const age =
        Number(userData.age);

    const occupation =
        userData.occupation;

    const income =
        Number(userData.income);

    const state =
        userData.state;


    console.log("================================");

    console.log("AGE:", age);

    console.log("OCCUPATION:", occupation);

    console.log("INCOME:", income);

    console.log("STATE:", state);

    console.log("================================");


    // ---------------- MATCH ----------------

    const matches =
        schemes.filter(function (scheme) {

            const ageMatch =
                age >= scheme.minAge &&
                age <= scheme.maxAge;


            const incomeMatch =
                income <= scheme.maxIncome;


            const occupationMatch =
                occupation === scheme.occupation;


            const stateMatch =
                state === scheme.state ||
                scheme.state === "all";


            console.log(
                scheme.name,
                "=>",
                ageMatch,
                incomeMatch,
                occupationMatch,
                stateMatch
            );


            return (
                ageMatch &&
                incomeMatch &&
                occupationMatch &&
                stateMatch
            );

        });


    console.log(
        "MATCHES:",
        matches
    );


    // =================================================
    // MATCH FOUND
    // =================================================

    if (matches.length > 0) {

        results.innerHTML = `

            <h2>🟢 Potential Schemes</h2>

            ${matches.map(function (scheme) {

                return `

                    <div class="scheme-card">

                        <h3>
                            ${scheme.name}
                        </h3>

                        <p>
                            <b>Benefit:</b>
                            ${scheme.benefit}
                        </p>

                        <p>
                            <b>Required Documents:</b>
                        </p>

                        <ul>

                            ${scheme.documents
                                .map(function (doc) {

                                    return `
                                        <li>${doc}</li>
                                    `;

                                })
                                .join("")}

                        </ul>

                        <p>
                            ⚠️ You may be eligible
                            based on the information
                            provided.
                        </p>

                    </div>

                `;

            }).join("")}


        `;


        document.getElementById("status").innerText =
            "✅ Scheme matching completed.";


        // -------- SPEAK RESULT --------

        let speechText =
            "Potential schemes found. ";


        matches.forEach(function (scheme) {

            speechText +=
                scheme.name +
                ". " +
                scheme.benefit +
                ". ";

        });


        const speech =
            new SpeechSynthesisUtterance(
                speechText
            );


        speech.lang =
            selectedLanguage;


        window.speechSynthesis.speak(
            speech
        );

    }


    // =================================================
    // NO MATCH
    // =================================================

    else {

        results.innerHTML = `

            <h2>❌ No matching schemes found</h2>

            <p>
                No matching scheme was found
                based on the information provided.
            </p>

            <p>
                Please verify your information
                and try again.
            </p>

        `;


        document.getElementById("status").innerText =
            "No matching scheme found.";


        speakInSelectedLanguage(voiceText);

    }

}
// =====================================================
// SPEAK RESULT IN SELECTED LANGUAGE
// =====================================================

function speakInSelectedLanguage(text) {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = selectedLanguage;

    speech.rate = 0.85;
    speech.pitch = 1;

    const voices = window.speechSynthesis.getVoices();

    // Find voice for selected language
    let selectedVoice = voices.find(function(voice) {

        return voice.lang
            .toLowerCase()
            .startsWith(selectedLanguage.toLowerCase());

    });

    // Use matching language voice
    if (selectedVoice) {

        speech.voice = selectedVoice;

        console.log(
            "Using voice:",
            selectedVoice.name,
            selectedVoice.lang
        );

    } else {

        console.log(
            "No exact language voice found."
        );

    }

    window.speechSynthesis.speak(speech);
}


// Load voices
window.speechSynthesis.onvoiceschanged = function() {

    console.log(
        "Available voices:",
        window.speechSynthesis.getVoices()
    );

};