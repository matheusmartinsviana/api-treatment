const url = "http://localhost:5500/api"; //     nesta api pode se referir ao usuario com apenas um final na url
const newUser = {                        //     com /2 mas isso É ALGO QUE VAI ESTAR NA DOCUMENTAÇÃO NA API 
    name: "matheus",
    avatar: "random-avatar",
    city: "joinville"
    }

const userUpdated = {
    name : "jaklyni rocket city",
    avatar : "aqui fica o link da url de alguma imagem",
    city : "Rocket city"
}

function getUser() {
    axios.get(url) //axios get resposta da url
    .then(response => { //caso de certo
        //console.log(response)
        const data = response.data
        //renderResults mostra um texto = conteudo em texto de (data)
        renderResults.textContent = JSON.stringify(data) //JSON.stringify(data) transforma o (data) em texto PURO
    })
    .catch(error => console.log(error)) //caso der erro
}

getUser()


function addNewUser() {
    //enviar para a api usar post
    axios.post(url, newUser) //promisses
    .then(response => {
        alert(JSON.stringify(response.data)) 
        //dentro do response tem a resposta da api 
        //console.log(response.data)
    }) //se der certo o axios vai dar um resposta
    .catch(error => console.log(error))
} 

//addNewUser()

function updateUser() {
    axios.put(`${url}/3`, userUpdated)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//updateUser()

function deleteUser() {
    axios.delete(`${url}/2`)
    .then(response => {
    alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//deleteUser();

function getOneUser() {
    axios.get(`${url}/3`)
    .then(response => {
        const data = response.data 
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

//getOneUser();
