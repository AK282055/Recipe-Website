function toggleRecipe(recipeId) {
    const recipeDetails = document.getElementById(recipeId);
    if (recipeDetails.style.display === "none" || recipeDetails.style.display === "") {
        recipeDetails.style.display = "block";
    } else {
        recipeDetails.style.display = "none";
    }
}
// Add this to your JS file
document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      document.querySelectorAll('.category-buttons button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Get selected category
      const category = button.dataset.category;
      const cards = document.querySelectorAll('.recipe-card');
      
      // Show/hide cards
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });