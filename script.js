// ======================================================
// SCHEMEWISE
// Language + Voice + Questions + Validation + Matching
// ======================================================


// ================= LANGUAGE DATA =================

const languages = {

    "kn-IN": {
        name: "Kannada",

        questions: {
            age: "ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?",
            occupation: "ನಿಮ್ಮ ಉದ್ಯೋಗ ಏನು?",
            income: "ನಿಮ್ಮ ಮಾಸಿಕ ಆದಾಯ ಎಷ್ಟು?",
            state: "ನೀವು ಯಾವ ರಾಜ್ಯದಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?"
        },

        messages: {
            listening: "🎤 ಕೇಳುತ್ತಿದೆ...",
            accepted: "✅ ಉತ್ತರ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
            invalid: "❌ ಉತ್ತರ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಉತ್ತರಿಸಿ.",
            noMatch: "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಗೆ ಹೊಂದುವ ಯಾವುದೇ ಯೋಜನೆ ಕಂಡುಬಂದಿಲ್ಲ."
        }
    },


    "te-IN": {
        name: "Telugu",

        questions: {
            age: "మీ వయస్సు ఎంత?",
            occupation: "మీ వృత్తి ఏమిటి?",
            income: "మీ నెలవారీ ఆదాయం ఎంత?",
            state: "మీరు ఏ రాష్ట్రంలో నివసిస్తున్నారు?"
        },

        messages: {
            listening: "🎤 వింటోంది...",
            accepted: "✅ సమాధానం స్వీకరించబడింది",
            invalid: "❌ సమాధానం అర్థం కాలేదు. దయచేసి మళ్లీ చెప్పండి.",
            noMatch: "మీరు ఇచ్చిన సమాచారానికి సరిపడే పథకం కనుగొనబడలేదు."
        }
    },


    "hi-IN": {
        name: "Hindi",

        questions: {
            age: "आपकी उम्र कितनी है?",
            occupation: "आपका व्यवसाय क्या है?",
            income: "आपकी मासिक आय कितनी है?",
            state: "आप किस राज्य में रहते हैं?"
        },

        messages: {
            listening: "🎤 सुन रहा है...",
            accepted: "✅ उत्तर स्वीकार किया गया",
            invalid: "❌ उत्तर समझ में नहीं आया। कृपया फिर से उत्तर दें।",
            noMatch: "दी गई जानकारी के आधार पर कोई मिलती-जुलती योजना नहीं मिली।"
        }
    }

};


// ================= VARIABLES =================

let selectedLanguage = "kn-IN";

let currentQuestion = 0;

let attempts = 0;

const maxAttempts = 5;

let schemes = [];

let schemesLoaded = false;


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


// ================= SPEECH RECOGNITION =================

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


if (!SpeechRecognition) {

    alert(
        "Speech Recognition is not supported. Please use Google Chrome."
    );

}


const recognition = new SpeechRecognition();

recognition.continuous = false;

recognition.interimResults = false;


// ================= LOAD SCHEMES =================

fetch("schemes.json")

    .then(function(response) {

        if (!response.ok) {

            throw new Error("schemes.json could not be loaded");

        }

        return response.json();

    })

    .then(function(data) {

        schemes = data;

        schemesLoaded = true;

        console.log("✅ Schemes loaded:", schemes);

    })

    .catch(function(error) {

        console.error("❌ Scheme loading error:", error);

        document.getElementById("status").innerText =
            "❌ Unable to load scheme data.";

    });


// ================= LANGUAGE SELECTION =================

function selectLanguage(language) {

    selectedLanguage = language;

    recognition.lang = language;

    document.getElementById("languageScreen").style.display =
        "none";

    document.getElementById("appScreen").style.display =
        "block";

    currentQuestion = 0;

    attempts = 0;

    askCurrentQuestion();

}


// ================= ASK QUESTION =================

function askCurrentQuestion() {

    if (currentQuestion >= questionKeys.length) {

        finishQuestions();

        return;

    }


    attempts++;


    const key =
        questionKeys[currentQuestion];


    const question =
        languages[selectedLanguage].questions[key];


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


    document.getElementById("status").innerText =
        "🔊 Speaking question...";


    speakQuestion(question);

}


// ================= TEXT TO SPEECH =================

function speakQuestion(text) {

    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang =
        selectedLanguage;


    speech.rate = 0.9;


    speech.onend = function() {

        document.getElementById("status").innerText =
            "🎤 Your turn to speak.";

    };


    window.speechSynthesis.speak(speech);

}


// ================= HEAR QUESTION =================

document
    .getElementById("speakQuestionButton")
    .addEventListener("click", function() {

        const question =
            document.getElementById("question").innerText;

        speakQuestion(question);

    });


// ================= START LISTENING =================

document
    .getElementById("listenButton")
    .addEventListener("click", function() {

        startListening();

    });


function startListening() {

    recognition.lang =
        selectedLanguage;


    document.getElementById("status").innerText =
        languages[selectedLanguage].messages.listening;


    try {

        recognition.start();

    }

    catch(error) {

        console.log(error);

    }

}


// ================= SPEECH RESULT =================

recognition.onresult = function(event) {

    const text =
        event.results[0][0].transcript;


    console.log("🎤 User said:", text);


    document.getElementById("result").innerText =
        text;


    validateAnswer(text);

};


// ================= SPEECH ERROR =================

recognition.onerror = function(event) {

    console.log("Speech error:", event.error);

    handleInvalidAnswer();

};


// ================= VALIDATE ANSWER =================

function validateAnswer(text) {

    const key =
        questionKeys[currentQuestion];


    let valid = false;

    let value = null;


    // ================= AGE =================

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


    // ================= OCCUPATION =================

    if (key === "occupation") {

        const lower =
            text.toLowerCase();


        // FARMER

        if (
            lower.includes("farmer") ||
            lower.includes("ರೈತ") ||
            lower.includes("ರೈತರು") ||
            lower.includes("రైతు") ||
            lower.includes("రైత") ||
            lower.includes("किसान")
        ) {

            value = "farmer";

            valid = true;

        }


        // STREET VENDOR

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


        // TAILOR

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


        // FISHERMAN

        else if (
            lower.includes("fisherman") ||
            lower.includes("fish") ||
            lower.includes("ಮೀನುಗಾರ") ||
            lower.includes("ಮೀನು") ||
            lower.includes("మత్స్యకారుడు") ||
            lower.includes("చేపలు") ||
            lower.includes("मछुआरा")
        ) {

            value = "fisherman";

            valid = true;

        }


        // SANITATION WORKER

        else if (
            lower.includes("sanitation") ||
            lower.includes("sanitary") ||
            lower.includes("ಸಫಾಯಿ") ||
            lower.includes("ಸ್ವಚ್ಛತಾ") ||
            lower.includes("శానిటేషన్") ||
            lower.includes("सफाई")
        ) {

            value = "sanitation_worker";

            valid = true;

        }

    }


    // ================= INCOME =================

    if (key === "income") {

        const numbers =
            text.match(/\d+/);


        if (numbers) {

            value =
                Number(numbers[0]);


            if (value >= 0) {

                valid = true;

            }

        }

    }


    // ================= STATE =================

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


    // ================= VALID =================

    if (valid) {

        userData[key] = value;


        console.log(
            "✅ Accepted:",
            key,
            value
        );


        document.getElementById("status").innerText =
            languages[selectedLanguage]
            .messages
            .accepted;


        setTimeout(function() {

            currentQuestion++;

            attempts = 0;

            askCurrentQuestion();

        }, 1000);

    }


    // ================= INVALID =================

    else {

        handleInvalidAnswer();

    }

}


// ================= INVALID ANSWER =================

function handleInvalidAnswer() {

    document.getElementById("status").innerText =
        languages[selectedLanguage]
        .messages
        .invalid;


    if (attempts < maxAttempts) {

        setTimeout(function() {

            askCurrentQuestion();

        }, 1200);

    }

    else {

        showManualFallback();

    }

}


// ================= MANUAL FALLBACK =================

function showManualFallback() {

    document.getElementById("manualArea").style.display =
        "block";


    document.getElementById("manualInput").value =
        "";


    document.getElementById("status").innerText =
        "Please enter your answer manually.";

}


// ================= MANUAL SUBMIT =================

document
    .getElementById("manualSubmit")
    .addEventListener("click", function() {

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


// ================= FINISH QUESTIONS =================

function finishQuestions() {

    console.log("======================");

    console.log("ALL USER INFORMATION");

    console.log(userData);

    console.log("======================");


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


    findSchemes();

}


// ================= FIND SCHEMES =================

function findSchemes() {

    const results =
        document.getElementById("results");


    // Wait for schemes.json

    if (!schemesLoaded) {

        results.innerHTML = `
            <h2>⏳ Loading schemes...</h2>
            <p>Please wait...</p>
        `;


        setTimeout(function() {

            findSchemes();

        }, 1000);


        return;

    }


    const age =
        Number(userData.age);


    const occupation =
        userData.occupation;


    const income =
        Number(userData.income);


    const state =
        userData.state;


    console.log("FINAL DATA:");

    console.log("Age:", age);

    console.log("Occupation:", occupation);

    console.log("Income:", income);

    console.log("State:", state);


    // ================= MATCH =================

    const matches =
        schemes.filter(function(scheme) {

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


            return (
                ageMatch &&
                incomeMatch &&
                occupationMatch &&
                stateMatch
            );

        });


    console.log("MATCHING SCHEMES:", matches);


    // ================= RESULTS =================

    if (matches.length > 0) {

        results.innerHTML = `

            <h2>🟢 Potential Schemes</h2>

            <p>
                Based on the information provided:
            </p>

            ${matches.map(function(scheme) {

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

                            ${
                                scheme.documents
                                .map(function(doc) {

                                    return `
                                        <li>${doc}</li>
                                    `;

                                })
                                .join("")
                            }

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


        // ================= SPEAK RESULT =================

        let speechText =
            "Potential schemes found. ";


        matches.forEach(function(scheme) {

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


        document.getElementById("status").innerText =
            "✅ Scheme matching completed.";

    }


    // ================= NO MATCH =================

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


        const speech =
            new SpeechSynthesisUtterance(
                languages[selectedLanguage]
                .messages
                .noMatch
            );


        speech.lang =
            selectedLanguage;


        window.speechSynthesis.speak(
            speech
        );


        document.getElementById("status").innerText =
            "No matching scheme found.";

    }

}