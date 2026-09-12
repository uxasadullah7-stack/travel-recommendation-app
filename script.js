// Data for recommendations
const recommendations = [
    // Beaches
    {
        name: "Maldives Beach",
        category: "Beach",
        description: "A tropical paradise with crystal clear waters and white sandy beaches.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400"
    },
    {
        name: "Bora Bora",
        category: "Beach",
        description: "Known for its turquoise lagoon and overwater bungalows.",
        image: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400"
    },
    // Temples
    {
        name: "Angkor Wat",
        category: "Temple",
        description: "A massive Buddhist temple complex in Cambodia and the largest religious monument in the world.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400"
    },
    {
        name: "Kinkaku-ji (Golden Pavilion)",
        category: "Temple",
        description: "A Zen temple in Kyoto, Japan, whose top two floors are completely covered in gold leaf.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400"
    },
    // Countries
    {
        name: "Japan",
        category: "Country",
        description: "A blend of ancient traditions and modern technology, famous for cherry blossoms and sushi.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400"
    },
    {
        name: "Italy",
        category: "Country",
        description: "Home to the Colosseum, Venice canals, and the best pizza and pasta in the world.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400"
    },
    {
        name: "Iceland",
        category: "Country",
        description: "Land of fire and ice, known for its stunning waterfalls, geysers, and northern lights.",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400"
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

    // Filter recommendations based on name or category
    const filteredItems = recommendations.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );

    displayResults(filteredItems);
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
    return false; // Prevent actual form submission for this demo
}

// Optional: Show all recommendations when the page loads
window.onload = function() {
    // Only run on the home page (where results container exists)
    if (document.getElementById("results")) {
        displayResults(recommendations);
    }
};
