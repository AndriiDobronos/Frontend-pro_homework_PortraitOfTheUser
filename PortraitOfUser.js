const birthdayData = prompt('Enter year birthday')
const locationData = prompt('Enter place of residence')
const favoriteSport = prompt( 'Enter your favorite sport')
const age = 2022 - Number(birthdayData)
const birthdayIsNotNumber = Number.isNaN(+birthdayData)
const favoriteSportIsNumber = !Number.isNaN(+favoriteSport)
let allMessage = ""
let firstMessages
switch (true) {
    case birthdayData === null :
        firstMessage = `To pity for you give me year birthday\n`
        break;
    case birthdayData === " " :
        firstMessage = `To pity for you give me year birthday\n`
        break;
    case birthdayData === "" :
        firstMessage = `To pity for you give me year birthday\n`
        break;
    case birthdayIsNotNumber === true :
        firstMessage = `To pity for you give me year birthday\n`
        break;
    case +birthdayData >= 2022 :
        firstMessage = `To pity for you give me year birthday\n`
        break;
    case +birthdayData <= 1900 :
        firstMessage = `To pity for you give me year birthday\n`
        break;
    default :
        firstMessage = `Your age is : ${age}\n`
}
allMessage = allMessage + firstMessage
let secondMessage
switch (true) {
    case locationData === null :
        secondMessage = `To pity for your give me place of residence\n`
        break;
    case locationData === "" :
        secondMessage = `To pity for your give me place of residence\n`
        break;
    case locationData === " " :
        secondMessage = `To pity for your give me place of residence\n`
        break;
    case locationData === "Kyiv" :
        secondMessage = `Place your location : ${locationData} capital of Ukraine\n`
        break;
    case locationData === "London" :
        secondMessage = `Place your location : ${locationData} capital of Great Britain\n`
        break;
    case locationData === "Washington" :
        secondMessage = `Place your location : ${locationData} capital of USA\n`
        break;
    default :
        secondMessage = `Place your location : ${locationData}  city\n`
}
allMessage = allMessage + secondMessage
let thirdMessage
switch (true) {
    case favoriteSport === null :
        thirdMessage = `To pity for you give me your favorite sport\n`
        break;
    case favoriteSport === "" :
        thirdMessage = `To pity for you give me your favorite sport\n`
        break;
    case favoriteSportIsNumber === true :
        thirdMessage = `To pity for you give me your favorite sport\n`
        break;
    case favoriteSport === " " :
        thirdMessage = `To pity for you give me your favorite sport\n`
        break;
    case favoriteSport === "swimming" :
        thirdMessage = `Your favorite sport: ${favoriteSport} 
        Awesome! do you want to be Mark Spitz\n`
        break;
    case favoriteSport === "football" :
        thirdMessage = `Your favorite sport: ${favoriteSport} 
        Awesome! do you want to be Ronaldo\n`
        break;
    case favoriteSport === "tennis" :
        thirdMessage = `Your favorite sport: ${favoriteSport} 
        Awesome! do you want to be Andrea Agassi\n`
        break;
    default :
        thirdMessage = `Your favorite sport: ${favoriteSport} Awesome !`
}
allMessage = allMessage + thirdMessage
alert(allMessage)