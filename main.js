const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
	if (ingredient === 'egg') {
        finishedFood.push("Biscuit")
    }
    else if (ingredient === 'beef patty') {
        finishedFood.push("Burger")
    }
    else if (ingredient === 'potato') {
        finishedFood.push("Fries")
    }

}

console.log(finishedFood)