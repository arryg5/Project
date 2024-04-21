// Sample data for games
const games = [
   
    // Add more games here...
  ];
  
  // Function to display games on the page
  function displayGames() {
    const gamesSection = document.querySelector('.games');
  
    games.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
      gameCard.innerHTML = `
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <p>Price: $${game.price}</p>
        <button>Buy</button>
      `;
      gamesSection.appendChild(gameCard);
    });
  }
  
  // Call the displayGames function when the page loads
  window.onload = function() {
    displayGames();
  };
  