// Data for recommendations
const recommendations = [
    // Beaches
    {
        name: "Maldives Beach",
        category: "Beach",
        description: "A tropical paradise with crystal clear waters and white sandy beaches.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Maldives_Beach.jpg/400px-Maldives_Beach.jpg"
    },
    {
        name: "Bora Bora",
        category: "Beach",
        description: "Known for its turquoise lagoon and overwater bungalows.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bora_Bora_ISS006.jpg/400px-Bora_Bora_ISS006.jpg"
    },
    // Temples
    {
        name: "Angkor Wat",
        category: "Temple",
        description: "A massive Buddhist temple complex in Cambodia and the largest religious monument in the world.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Angkor_Wat%2C_Cambodia.jpg/400px-Angkor_Wat%2C_Cambodia.jpg"
    },
    {
        name: "Kinkaku-ji (Golden Pavilion)",
        category: "Temple",
        description: "A Zen temple in Kyoto, Japan, whose top two floors are completely covered in gold leaf.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG/400px-Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG"
    },
    // Countries
    {
        name: "Japan",
        category: "Country",
        description: "A blend of ancient traditions and modern technology, famous for cherry blossoms and sushi.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mount_Fuji_from_Hotel_Mt_Fuji.jpg/400px-Mount_Fuji_from_Hotel_Mt_Fuji.jpg"
    },
    {
        name: "Italy",
        category: "Country",
        description: "Home to the Colosseum, Venice canals, and the best pizza and pasta in the world.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/400px-Colosseo_2020.jpg"
    },
    {
        name: "Iceland",
        category: "Country",
        description: "Land of fire and ice, known for its stunning waterfalls, geysers, and northern lights.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Iceland_Gullfoss_2005.jpg/400px-Iceland_Gullfoss_2005.jpg"
    }
];

// Function to display results
function displayResults(items) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (items.length === 0) {
        resultsContainer.innerHTML = "<p>No recommendations found. Try searching for 'beach', 'temple', or 'country'.</p>";
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("result-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p><strong>${item.category}</strong></p>
            <p>${item.description}</p>
        `;

        resultsContainer.appendChild(card);
    });
}

// Function to handle search
function searchRecommendation() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        alert("Please enter a search term (e.g., beach, temple, country).");
        return;
    }

    const filteredItems = recommendations.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );

    displayResults(filteredItems);
}

// Function to clear search results
function clearResults() {
    document.getElementById("searchInput").value = "";
    displayResults(recommendations);
}

// Function to validate contact form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    return false;
}

// Optional: Show all recommendations when the page loads
window.onload = function() {
    if (document.getElementById("results")) {
        displayResults(recommendations);
    }
};
