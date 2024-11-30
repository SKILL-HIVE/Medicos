// Store 500 health problems with their corresponding medicine and Google image search term
const healthData = {
    "headache": {
        prescription: "Take paracetamol 500mg twice daily",
        googleImageSearch: "headache medicine"
    },
    "fever": {
        prescription: "Take ibuprofen 400mg three times a day",
        googleImageSearch: "fever medicine"
    },
    "cough": {
        prescription: "Take cough syrup 10ml every 6 hours",
        googleImageSearch: "cough medicine"
    },
    "stomach pain": {
        prescription: "Take antacids after meals",
        googleImageSearch: "stomach pain medicine"
    },
    "cold": {
        prescription: "Take vitamin C tablets and stay hydrated",
        googleImageSearch: "cold medicine"
    },
    "diabetes": {
        prescription: "Take metformin 500mg once daily",
        googleImageSearch: "diabetes medicine"
    },
    "blood pressure": {
        prescription: "Take lisinopril 10mg daily",
        googleImageSearch: "blood pressure medicine"
    },
    "asthma": {
        prescription: "Take salbutamol inhaler as needed",
        googleImageSearch: "asthma medicine"
    },
    "arthritis": {
        prescription: "Take naproxen 250mg twice daily",
        googleImageSearch: "arthritis medicine"
    },
    "back pain": {
        prescription: "Take ibuprofen 400mg and apply heat",
        googleImageSearch: "back pain medicine"
    },
    "joint pain": {
        prescription: "Take ibuprofen 400mg for pain relief",
        googleImageSearch: "joint pain medicine"
    },
    "migraine": {
        prescription: "Take sumatriptan 50mg at the onset of migraine",
        googleImageSearch: "migraine medicine"
    },
    "insomnia": {
        prescription: "Take melatonin 5mg 30 minutes before bedtime",
        googleImageSearch: "insomnia medicine"
    },
    "high cholesterol": {
        prescription: "Take atorvastatin 20mg daily",
        googleImageSearch: "high cholesterol medicine"
    },
    "depression": {
        prescription: "Take fluoxetine 20mg once a day",
        googleImageSearch: "depression medicine"
    },
    "anxiety": {
        prescription: "Take lorazepam 1mg twice a day as needed",
        googleImageSearch: "anxiety medicine"
    },
    "eczema": {
        prescription: "Apply hydrocortisone cream twice a day",
        googleImageSearch: "eczema cream"
    },
    "acne": {
        prescription: "Apply benzoyl peroxide gel twice a day",
        googleImageSearch: "acne treatment"
    },
    "allergy": {
        prescription: "Take cetirizine 10mg once daily",
        googleImageSearch: "allergy medicine"
    },
    "urinary tract infection": {
        prescription: "Take ciprofloxacin 500mg twice daily",
        googleImageSearch: "UTI medicine"
    },
    "kidney stones": {
        prescription: "Drink plenty of fluids and take pain relievers",
        googleImageSearch: "kidney stones medicine"
    },
    "gout": {
        prescription: "Take allopurinol 100mg daily",
        googleImageSearch: "gout medicine"
    },
    "osteoporosis": {
        prescription: "Take calcium and vitamin D supplements",
        googleImageSearch: "osteoporosis medicine"
    },
    "stroke": {
        prescription: "Take aspirin 81mg daily to prevent blood clots",
        googleImageSearch: "stroke medicine"
    },
    "heart attack": {
        prescription: "Take aspirin 325mg immediately and call emergency services",
        googleImageSearch: "heart attack treatment"
    },
    "diarrhea": {
        prescription: "Take loperamide 2mg after each loose stool",
        googleImageSearch: "diarrhea medicine"
    },
    "constipation": {
        prescription: "Take fiber supplements and drink plenty of water",
        googleImageSearch: "constipation medicine"
    },
    "pneumonia": {
        prescription: "Take antibiotics as prescribed by a doctor",
        googleImageSearch: "pneumonia treatment"
    },
    "liver disease": {
        prescription: "Take prescribed liver medication and avoid alcohol",
        googleImageSearch: "liver disease medicine"
    },
    "thyroid problems": {
        prescription: "Take levothyroxine 100mcg daily",
        googleImageSearch: "thyroid medicine"
    },
    "vitamin D deficiency": {
        prescription: "Take vitamin D supplements 1000 IU daily",
        googleImageSearch: "vitamin D supplements"
    },
    // Continue adding more problems here until you reach 500...
};

// Populate the dropdown with health problems dynamically
const healthProblemSelect = document.getElementById("healthProblem");

// Function to populate the dropdown
function populateHealthProblems() {
    // Clear existing options (if any)
    healthProblemSelect.innerHTML = '<option value="">--Select a Health Problem--</option>';

    // Add options dynamically based on healthData
    for (let problem in healthData) {
        let option = document.createElement("option");
        option.value = problem;
        option.textContent = capitalizeFirstLetter(problem);
        healthProblemSelect.appendChild(option);
    }
}

// Function to capitalize the first letter of each health problem (for display purposes)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to search health problems or medicines
function searchHealthProblemOrMedicine() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    const selectedProblem = document.getElementById("healthProblem").value.toLowerCase();

    const prescriptionOutput = document.getElementById("prescriptionOutput");
    const medicineImg = document.getElementById("medicineImg");
    const imageLink = document.getElementById("imageLink");
    const medicineImageSection = document.getElementById("medicineImageSection");

    // Clear previous results
    prescriptionOutput.innerHTML = "";
    medicineImg.style.display = "none";
    medicineImageSection.style.display = "none";
    imageLink.innerHTML = "";

    if (searchQuery === "" && selectedProblem === "") {
        prescriptionOutput.innerHTML = "Please enter a health problem or medicine name to search.";
        return;
    }

    let found = false;

    // Search logic (both input and select)
    const searchTerm = searchQuery || selectedProblem;
    
    for (let problem in healthData) {
        const data = healthData[problem];

        // Check if search query matches the health problem or part of the medicine description
        if (problem.toLowerCase().includes(searchTerm) || data.prescription.toLowerCase().includes(searchTerm)) {
            found = true;

            // Display prescription
            prescriptionOutput.innerHTML = `Prescription: ${data.prescription}`;

            // Generate Google Image Search URL and display the link
            const imageSearchUrl = `https://www.google.com/search?hl=en&tbm=isch&q=${encodeURIComponent(data.googleImageSearch)}`;
            medicineImg.style.display = "block";
            medicineImageSection.style.display = "block";
            medicineImg.src = `https://www.google.com/search?hl=en&tbm=isch&q=${encodeURIComponent(data.googleImageSearch)}`;
            imageLink.innerHTML = `View Google Images: <a href="${imageSearchUrl}" target="_blank">Click here</a>`;
            break;
        }
    }

    if (!found) {
        prescriptionOutput.innerHTML = "No results found for the entered search query.";
    }
}

// Initialize dropdown and page load
window.onload = populateHealthProblems;