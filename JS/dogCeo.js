const randomNumber = (total) => Math.floor(Math.random()*total);
/**
 Sabit bir değişken tanımlanıyor ve fatArrow ile bir fonksiyon oluşturuluyor. 
 Random bir matematiksel bir fonksiyon fonksiyona verilen ad "total"
 */
async function getAllBreeds () {
    //Standart bir async fonksiyondur.
    const breeds = await fetch("https://dog.ceo/api/breeds/list/all")
    .then(data =>data.json())
    .then(res => res)
    let result = Object.keys(breeds.message)
    return result
}
// console.log(getAllBreeds()) yukarıda ki kodun linkten data çektiğini kontrol ettim consolda 96 tane arrayList gelmektedir.

async function getBreed(name) {
	const breedImages = await fetch(`https://dog.ceo/api/breed/${name}/images`)
		.then(data => data.json());

	let randomImage = randomNumber(breedImages.message.length);
	console.log(breedImages.message[randomImage]);
}

window.onload = async (event) => {
	let allBreeds = await getAllBreeds();
	let randomIndex = randomNumber(allBreeds.length);
	let randomBreed = allBreeds[randomIndex];

	getBreed(randomBreed);
};

