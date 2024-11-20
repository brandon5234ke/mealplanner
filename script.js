// script.js  

const addMealButtons = document.querySelectorAll('.add-meal');  
const mealContainers = document.querySelectorAll('.meal-item');  

addMealButtons.forEach((button, index) => {  
  button.addEventListener('click', () => {  
    const mealContainer = mealContainers[index];  
    const mealName = mealContainer.querySelector('.meal-name');  
    const mealDescription = mealContainer.querySelector('.meal-description');  

    if (mealName.value.trim() !== '' && mealDescription.value.trim() !== '') {  
      const newMeal = document.createElement('div');  
      newMeal.classList.add('meal-item');  

      const nameElement = document.createElement('h3');  
      nameElement.textContent = mealName.value;  

      const descriptionElement = document.createElement('p');  
      descriptionElement.textContent = mealDescription.value;  

      newMeal.appendChild(nameElement);  
      newMeal.appendChild(descriptionElement);  

      mealContainer.appendChild(newMeal);  

      mealName.value = '';  
      mealDescription.value = '';  
    }  
  });  
});