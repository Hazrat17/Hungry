
// console.log(searchFood);
const foodsData = async() => {
    const searchFood = document.getElementById('searchBox').value;
    console.log(searchFood);
    if (isNaN(searchFood)) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
        let data = await response.json();
        console.log(data.meals);
        displayFoods(data.meals);
        // document.getElementById('food').empty();
    } else {
        alert("Please enter any word to search food.")
    }
};



const displayFoods = foods => {
    const foodsDiv = document.getElementById('foods');
    foods.forEach(food => {
        
    let foodInfo = ``;
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-info';
        foodInfo = foodInfo + `
        <div onclick="displayFoodDetails('${food.idMeal}')" class="foods">
        <img class="img-fluid rounded-top" src="${food.strMealThumb}" alt="">
        <h4 ">${food.strMeal}</h4>
        </div>
        `;
        // console.log(food.strMeal);

        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    })
    console.log("john")
};

const displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderFoodInfo(data.meals[0]);
            console.log(data.meals[0]);
        });
};

const renderFoodInfo = food => {
    const foodDetailsDiv = document.getElementById('food-detail');

    foodDetailsDiv.innerHTML = `
    <img src="${food.strMealThumb}" >
    <h4 style="color:green">${food.strMeal}</h4>
    <h5 class="pt-3 pb-2" style="color:cyan">Ingredients</h5>
    <ul class="list-unstyled mb-5">
        <li>${food.strIngredient1}</li>
        <li>${food.strIngredient2}</li>
        <li>${food.strIngredient3}</li>
        <li>${food.strIngredient4}</li>
        <li>${food.strIngredient5}</li>
        <li>${food.strIngredient6}</li>
    </ul>
`;
};
var div = document.getElementById('foods');
while(div.details){
    div.removeChild(div.details);
}

// document.getElementById('search').addEventListener('click', foodsData())
// foodsData();
