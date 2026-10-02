# SchemeWise

SchemeWise helps street vendors, tailors, farmers, fishers, sanitation workers and
other small-business owners discover potentially relevant government schemes in
Kannada, Hindi or Telugu.

## Run locally

The browser loads the scheme catalogue from `schemes.json`, so run the project
from a local web server instead of opening `index.html` directly:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000> in a modern browser. Speech recognition is
best supported in Chrome and requires microphone permission. The app attempts
to greet visitors and read the language choices aloud automatically; browsers
that block automatic speech can use the “Hear the welcome again” button.
Visitors can choose a language with the numbered buttons or press 1, 2 or 3.
Answers can also be typed if speech recognition is unavailable.

Scheme names, descriptions, benefits and required documents are read from
`schemes.json` and displayed and spoken in the selected language. Results are
only an initial guide; the relevant government department determines final
eligibility.
