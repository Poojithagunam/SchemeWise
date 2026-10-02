const languages = {
    "kn-IN": {
        name: "ಕನ್ನಡ",
        greeting: "ನಮಸ್ಕಾರ! ಸ್ಕೀಮ್‌ವೈಸ್‌ಗೆ ಸ್ವಾಗತ. ಕನ್ನಡಕ್ಕಾಗಿ 1 ಒತ್ತಿ",
        questions: {
            age: "ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?",
            occupation: "ನಿಮ್ಮ ಉದ್ಯೋಗ ಏನು?",
            income: "ನಿಮ್ಮ ಮಾಸಿಕ ಆದಾಯ ಎಷ್ಟು?",
            state: "ನೀವು ಯಾವ ರಾಜ್ಯದಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?"
        },
        text: {
            question: "ಪ್ರಶ್ನೆ",
            of: "ರಲ್ಲಿ",
            attempt: "ಪ್ರಯತ್ನ",
            answerLabel: "ಗುರುತಿಸಿದ ಉತ್ತರ",
            speakAnswer: "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಹೇಳಿ",
            hearQuestion: "ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ",
            waiting: "ನಿಮ್ಮ ಉತ್ತರಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ...",
            listening: "ಕೇಳಲಾಗುತ್ತಿದೆ...",
            yourTurn: "ಈಗ ನಿಮ್ಮ ಸರದಿ. ಉತ್ತರಿಸಲು ಮೈಕ್ರೊಫೋನ್ ಬಟನ್ ಒತ್ತಿ.",
            accepted: "ಉತ್ತರ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.",
            retry: "ಉತ್ತರ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            enterAnswer: "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ",
            submit: "ಉತ್ತರ ಸಲ್ಲಿಸಿ",
            complete: "ಎಲ್ಲಾ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ",
            finding: "ನಿಮಗೆ ಸೂಕ್ತವಾದ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
            schemes: "ನಿಮಗೆ ಹೊಂದುವ ಯೋಜನೆಗಳು",
            benefit: "ಪ್ರಯೋಜನ",
            documents: "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು",
            eligibility: "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಈ ಯೋಜನೆಗೆ ಅರ್ಹರಾಗಿರಬಹುದು. ಅಂತಿಮ ಅರ್ಹತೆಯನ್ನು ಅಧಿಕೃತ ಇಲಾಖೆಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",
            noMatch: "ಹೊಂದುವ ಯೋಜನೆ ಕಂಡುಬಂದಿಲ್ಲ",
            noMatchDetails: "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಯಾವುದೇ ಯೋಜನೆ ಕಂಡುಬಂದಿಲ್ಲ. ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            matchingDone: "ಯೋಜನೆಗಳ ಹುಡುಕಾಟ ಪೂರ್ಣಗೊಂಡಿದೆ.",
            dataError: "ಯೋಜನೆಗಳ ಮಾಹಿತಿಯನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಅಥವಾ ಸ್ಥಳೀಯ ಸರ್ವರ್ ಪರಿಶೀಲಿಸಿ.",
            voiceUnavailable: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಉತ್ತರವನ್ನು ಟೈಪ್ ಮಾಡಿ.",
            intro: "ನಿಮ್ಮ ವಯಸ್ಸು, ಉದ್ಯೋಗ, ಆದಾಯ ಮತ್ತು ರಾಜ್ಯವನ್ನು ಕೇಳಿ ಸೂಕ್ತ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕುತ್ತೇವೆ."
        }
    },
    "hi-IN": {
        name: "हिन्दी",
        greeting: "नमस्कार! स्कीमवाइज़ में आपका स्वागत है।  हिंदी के लिए 2 दबाएँ,",
        questions: {
            age: "आपकी उम्र कितनी है?",
            occupation: "आपका व्यवसाय क्या है?",
            income: "आपकी मासिक आय कितनी है?",
            state: "आप किस राज्य में रहते हैं?"
        },
        text: {
            question: "प्रश्न",
            of: "में से",
            attempt: "प्रयास",
            answerLabel: "पहचाना गया जवाब",
            speakAnswer: "अपना जवाब बोलें",
            hearQuestion: "प्रश्न सुनें",
            waiting: "आपके जवाब की प्रतीक्षा है...",
            listening: "सुना जा रहा है...",
            yourTurn: "अब आपकी बारी है। जवाब देने के लिए माइक्रोफ़ोन बटन दबाएँ।",
            accepted: "जवाब स्वीकार किया गया।",
            retry: "जवाब समझ नहीं आया। कृपया फिर से कोशिश करें।",
            enterAnswer: "अपना जवाब यहाँ लिखें",
            submit: "जवाब भेजें",
            complete: "सारी जानकारी मिल गई",
            finding: "आपके लिए उपयुक्त योजनाएँ खोजी जा रही हैं...",
            schemes: "आपके लिए संभावित योजनाएँ",
            benefit: "लाभ",
            documents: "ज़रूरी दस्तावेज़",
            eligibility: "दी गई जानकारी के आधार पर आप इस योजना के लिए पात्र हो सकते हैं। अंतिम पात्रता की पुष्टि संबंधित सरकारी विभाग से करें।",
            noMatch: "कोई उपयुक्त योजना नहीं मिली",
            noMatchDetails: "दी गई जानकारी के आधार पर कोई योजना नहीं मिली। कृपया अपनी जानकारी जाँचकर फिर कोशिश करें।",
            matchingDone: "योजना की खोज पूरी हुई।",
            dataError: "योजना की जानकारी लोड नहीं हो सकी। कृपया इंटरनेट कनेक्शन या स्थानीय सर्वर जाँचें।",
            voiceUnavailable: "इस ब्राउज़र में आवाज़ पहचान उपलब्ध नहीं है। कृपया अपना जवाब टाइप करें।",
            intro: "हम आपकी उम्र, व्यवसाय, आय और राज्य पूछकर उपयुक्त सरकारी योजनाएँ खोजेंगे।"
        }
    },
    "te-IN": {
        name: "తెలుగు",
        greeting: "నమస్కారం! స్కీం వైస్‌కు స్వాగతం  తెలుగు కోసం 3 నొక్కండి.",
        questions: {
            age: "మీ వయస్సు ఎంత?",
            occupation: "మీ వృత్తి ఏమిటి?",
            income: "మీ నెలవారీ ఆదాయం ఎంత?",
            state: "మీరు ఏ రాష్ట్రంలో నివసిస్తున్నారు?"
        },
        text: {
            question: "ప్రశ్న",
            of: "లో",
            attempt: "ప్రయత్నం",
            answerLabel: "గుర్తించిన సమాధానం",
            speakAnswer: "మీ సమాధానం చెప్పండి",
            hearQuestion: "ప్రశ్న వినండి",
            waiting: "మీ సమాధానం కోసం వేచి ఉంది...",
            listening: "వింటోంది...",
            yourTurn: "ఇప్పుడు మీ వంతు. సమాధానం చెప్పడానికి మైక్రోఫోన్ బటన్ నొక్కండి.",
            accepted: "సమాధానం స్వీకరించబడింది.",
            retry: "సమాధానం అర్థం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.",
            enterAnswer: "మీ సమాధానాన్ని ఇక్కడ టైప్ చేయండి",
            submit: "సమాధానం సమర్పించండి",
            complete: "అవసరమైన సమాచారం సేకరించబడింది",
            finding: "మీకు సరిపోయే పథకాలను వెతుకుతోంది...",
            schemes: "మీకు సరిపోయే పథకాలు",
            benefit: "ప్రయోజనం",
            documents: "అవసరమైన పత్రాలు",
            eligibility: "మీరు అందించిన సమాచారం ఆధారంగా ఈ పథకానికి అర్హులు కావచ్చు. తుది అర్హతను సంబంధిత ప్రభుత్వ శాఖతో నిర్ధారించండి.",
            noMatch: "సరిపోయే పథకం కనుగొనబడలేదు",
            noMatchDetails: "మీరు అందించిన సమాచారం ఆధారంగా పథకం కనుగొనబడలేదు. దయచేసి వివరాలను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
            matchingDone: "పథకాల శోధన పూర్తయింది.",
            dataError: "పథకాల సమాచారాన్ని లోడ్ చేయలేకపోయాము. దయచేసి ఇంటర్నెట్ కనెక్షన్ లేదా స్థానిక సర్వర్‌ను తనిఖీ చేయండి.",
            voiceUnavailable: "ఈ బ్రౌజర్‌లో వాయిస్ గుర్తింపు అందుబాటులో లేదు. దయచేసి మీ సమాధానాన్ని టైప్ చేయండి.",
            intro: "మీ వయస్సు, వృత్తి, ఆదాయం మరియు రాష్ట్రం అడిగి సరిపోయే ప్రభుత్వ పథకాలను వెతుకుతాము."
        }
    }
};

let selectedLanguage = "kn-IN";
let currentQuestion = 0;
let attempts = 0;
const maxAttempts = 5;
const questionKeys = ["age", "occupation", "income", "state"];
const userData = { age: null, occupation: "", income: null, state: "" };
const schemesPromise = fetch("schemes.json").then(function (response) {
    if (!response.ok) {
        throw new Error("Could not load schemes.json (" + response.status + ").");
    }
    return response.json();
}).then(function (data) {
    if (!Array.isArray(data) || data.some(function (scheme) {
        return !scheme || typeof scheme.occupation !== "string" || !scheme.translations;
    })) {
        throw new Error("schemes.json has an invalid scheme list.");
    }
    return data;
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
} else {
    document.getElementById("status").textContent = languages[selectedLanguage].text.voiceUnavailable;
    document.getElementById("manualArea").style.display = "block";
}

function speakText(text, language, onEnd) {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
        return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;
    speech.rate = 0.9;
    speech.onend = onEnd || null;
    const voice = window.speechSynthesis.getVoices().find(function (availableVoice) {
        return availableVoice.lang.toLowerCase().startsWith(language.toLowerCase());
    });
    if (voice) {
        speech.voice = voice;
    }
    window.speechSynthesis.speak(speech);
}

function playWelcome(index) {
    const languageCodes = Object.keys(languages);
    if (index >= languageCodes.length) {
        return;
    }
    const language = languageCodes[index];
    speakText(languages[language].greeting, language, function () {
        playWelcome(index + 1);
    });
}

window.addEventListener("load", function () {
    document.getElementById("intro").textContent = languages[selectedLanguage].text.intro;
    playWelcome(0);
});

document.querySelectorAll("[data-language]").forEach(function (button) {
    button.addEventListener("click", function () {
        selectLanguage(button.dataset.language);
    });
});

document.getElementById("replayWelcome").addEventListener("click", function () {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
    playWelcome(0);
});

document.addEventListener("keydown", function (event) {
    if (document.getElementById("languageScreen").hidden) {
        return;
    }
    const languageForKey = { "1": "kn-IN", "2": "hi-IN", "3": "te-IN" };
    if (languageForKey[event.key]) {
        selectLanguage(languageForKey[event.key]);
    }
});

function selectLanguage(language) {
    if (!languages[language]) {
        return;
    }
    selectedLanguage = language;
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
    if (recognition) {
        recognition.lang = language;
    }

    const copy = languages[language].text;
    document.documentElement.lang = language;
    document.getElementById("languageScreen").hidden = true;
    document.getElementById("appScreen").hidden = false;
    document.getElementById("speakQuestionButton").textContent = "🔊 " + copy.hearQuestion;
    document.getElementById("listenButton").textContent = "🎤 " + copy.speakAnswer;
    document.getElementById("manualInput").placeholder = copy.enterAnswer;
    document.getElementById("manualSubmit").textContent = copy.submit;
    document.querySelector('label[for="manualInput"]').textContent = copy.enterAnswer;
    document.getElementById("answerLabel").textContent = copy.answerLabel;
    if (!recognition) {
        document.getElementById("status").textContent = copy.voiceUnavailable;
        document.getElementById("manualArea").hidden = false;
    }
    currentQuestion = 0;
    attempts = 0;
    askCurrentQuestion();
}

function askCurrentQuestion() {
    if (currentQuestion >= questionKeys.length) {
        finishQuestions();
        return;
    }

    attempts++;
    const copy = languages[selectedLanguage].text;
    const question = languages[selectedLanguage].questions[questionKeys[currentQuestion]];
    document.getElementById("questionNumber").textContent =
        copy.question + " " + (currentQuestion + 1) + " " + copy.of + " " + questionKeys.length;
    document.getElementById("question").textContent = question;
    document.getElementById("attempt").textContent =
        copy.attempt + " " + attempts + " " + copy.of + " " + maxAttempts;
    document.getElementById("result").textContent = copy.waiting;
    speakText(question, selectedLanguage, function () {
        document.getElementById("status").textContent = copy.yourTurn;
    });
}

document.getElementById("speakQuestionButton").addEventListener("click", function () {
    speakText(document.getElementById("question").textContent, selectedLanguage);
});

document.getElementById("listenButton").addEventListener("click", function () {
    if (!recognition) {
        document.getElementById("manualArea").hidden = false;
        return;
    }
    recognition.lang = selectedLanguage;
    document.getElementById("status").textContent = languages[selectedLanguage].text.listening;
    try {
        recognition.start();
    } catch (error) {
        console.error("Could not start speech recognition:", error);
        document.getElementById("status").textContent = languages[selectedLanguage].text.retry;
    }
});

if (recognition) {
    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript;
        document.getElementById("result").textContent = text;
        validateAnswer(text);
    };

    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
        handleInvalidAnswer();
    };
}

function validateAnswer(text) {
    const key = questionKeys[currentQuestion];
    const normalized = text.trim().toLowerCase();
    let value = null;

    if (key === "age" || key === "income") {
        const numberText = normalized.match(/[0-9\u0966-\u096F\u0C66-\u0C6F\u0CE6-\u0CEF,]+/);
        const number = numberText && numberText[0].replace(/[\u0966-\u096F\u0C66-\u0C6F\u0CE6-\u0CEF]/g, function (digit) {
            const code = digit.charCodeAt(0);
            const start = code >= 0x0966 && code <= 0x096f ? 0x0966
                : code >= 0x0c66 && code <= 0x0c6f ? 0x0c66
                    : 0x0ce6;
            return String(code - start);
        }).replace(/,/g, "");
        if (number) {
            value = Number(number);
            if (!Number.isFinite(value)) {
                value = null;
            }
            if (key === "age" && (value < 1 || value > 120)) {
                value = null;
            }
        }
    } else if (key === "occupation") {
        const occupations = {
            farmer: ["farmer", "ರೈತ", "ರೈತರು", "రైతు", "రైతులు", "किसान", "कृषक"],
            street_vendor: ["street vendor", "vendor", "ವೀದಿ ವ್ಯಾಪಾರಿ", "ಬೀದಿ ವ್ಯಾಪಾರಿ", "ವ್ಯಾಪಾರಿ", "ಮಾರಾಟಗಾರ", "వీధి వ్యాపారి", "వ్యాపారి", "फेरीवाला", "ठेला", "विक्रेता"],
            tailor: ["tailor", "ದರ್ಜಿ", "ಟೈಲರ್", "ಹೊಲಿಗೆ", "కుట్టు", "టైలర్", "दर्जी", "सिलाई"],
            fisherman: ["fisherman", "fish", "ಮೀನುಗಾರ", "ಮೀನು", "మత్స్యకారుడు", "చేపలు", "मछुआरा", "मछली"],
            sanitation_worker: ["sanitation", "ಸಫಾಯಿ", "ಸ್ವಚ್ಛತಾ", "శానిటేషన్", "పారిశుధ్య", "सफाई", "स्वच्छता"]
        };
        for (const occupation in occupations) {
            if (occupations[occupation].some(function (term) {
                return normalized.includes(term);
            })) {
                value = occupation;
                break;
            }
        }
    } else if (key === "state" && normalized.length >= 2) {
        value = normalized;
    }

    if (value !== null) {
        userData[key] = value;
        document.getElementById("status").textContent = languages[selectedLanguage].text.accepted;
        window.setTimeout(function () {
            currentQuestion++;
            attempts = 0;
            askCurrentQuestion();
        }, 700);
    } else {
        handleInvalidAnswer();
    }
}

function handleInvalidAnswer() {
    const copy = languages[selectedLanguage].text;
    document.getElementById("status").textContent = copy.retry;
    if (attempts < maxAttempts) {
        window.setTimeout(askCurrentQuestion, 1000);
    } else {
        showManualFallback();
    }
}

function showManualFallback() {
    document.getElementById("manualArea").hidden = false;
    document.getElementById("manualInput").value = "";
    document.getElementById("manualInput").focus();
    document.getElementById("status").textContent = languages[selectedLanguage].text.enterAnswer;
}

document.getElementById("manualSubmit").addEventListener("click", function () {
    const text = document.getElementById("manualInput").value;
    if (!text.trim()) {
        document.getElementById("manualInput").focus();
        return;
    }
    document.getElementById("manualArea").hidden = true;
    attempts = 0;
    validateAnswer(text);
});

document.getElementById("manualInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("manualSubmit").click();
    }
});

function finishQuestions() {
    const copy = languages[selectedLanguage].text;
    document.getElementById("questionNumber").textContent = "";
    document.getElementById("question").textContent = copy.complete;
    document.getElementById("status").textContent = copy.finding;
    document.getElementById("listenButton").hidden = true;
    document.getElementById("speakQuestionButton").hidden = true;

    schemesPromise.then(function (schemes) {
        findSchemes(schemes);
    }).catch(function (error) {
        console.error("Unable to load scheme data:", error);
        document.getElementById("results").textContent = copy.dataError;
        document.getElementById("status").textContent = copy.dataError;
        speakText(copy.dataError, selectedLanguage);
    });
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

function findSchemes(schemes) {
    const copy = languages[selectedLanguage].text;
    const age = Number(userData.age);
    const income = Number(userData.income);
    const state = userData.state;
    const matches = schemes.filter(function (scheme) {
        const ageMatch = age >= scheme.minAge && age <= scheme.maxAge;
        const incomeMatch = income <= scheme.maxIncome;
        const occupationMatch = userData.occupation === scheme.occupation;
        const stateMatch = state === scheme.state || scheme.state === "all";
        return ageMatch && incomeMatch && occupationMatch && stateMatch;
    });

    const results = document.getElementById("results");
    if (!matches.length) {
        results.innerHTML =
            "<h2>" + escapeHtml(copy.noMatch) + "</h2><p>" +
            escapeHtml(copy.noMatchDetails) + "</p>";
        document.getElementById("status").textContent = copy.noMatch;
        speakText(copy.noMatchDetails, selectedLanguage);
        return;
    }

    results.innerHTML = "<h2>" + escapeHtml(copy.schemes) + "</h2>" +
        matches.map(function (scheme) {
            const translation = scheme.translations[selectedLanguage];
            if (!translation || !Array.isArray(translation.documents)) {
                throw new Error("Missing " + selectedLanguage + " translation for " + scheme.id + ".");
            }
            return "<article class=\"scheme-card\"><h3>" + escapeHtml(translation.name) +
                "</h3><p>" + escapeHtml(translation.description) + "</p><p><b>" +
                escapeHtml(copy.benefit) + ":</b> " + escapeHtml(translation.benefit) +
                "</p><p><b>" + escapeHtml(copy.documents) + ":</b></p><ul>" +
                translation.documents.map(function (documentName) {
                    return "<li>" + escapeHtml(documentName) + "</li>";
                }).join("") + "</ul><p>" + escapeHtml(copy.eligibility) + "</p></article>";
        }).join("");
    document.getElementById("status").textContent = copy.matchingDone;
    speakText(copy.schemes + ". " + matches.map(function (scheme) {
        const translation = scheme.translations[selectedLanguage];
        return translation.name + ". " +translation.description + ". " + translation.benefit+". " + translation.documents.join(", ");
    }).join(". "), selectedLanguage);
}
