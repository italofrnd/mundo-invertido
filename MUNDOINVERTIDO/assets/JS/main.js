import { getFireClubSubscriptions, subscribeToFireClub } from "./firebase/fire-club.js"


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId= await subscribeToFireClub(subscription)
    

    // não ficar registrado informações de dados na tela de cadastro de formulário //
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''


    alert(`Inscrição realizada com sucesso! código de inscrição: ${subscriptionId}`)
})

async function loadData() {
    const subscriptions = await getFireClubSubscriptions()
    console.log(subscriptions) 
}

loadData()