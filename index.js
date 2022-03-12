document.getElementById("btn-get").onclick = getuser

document.getElementById("btn-get-all").onclick = getAllUsers

function getAllUsers() {
    console.log("Called")
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const rows = data.map(u => `
    <tr>
      <td>${u.name} </td>
      <td>${u.phone} </td>
      <td>${u.street} </td>
      <td>${u.city} </td>
    </tr>
    `).join("\n")
            document.getElementById("tbl-body").innerHTML = rows;
        })
        .catch(err => console.error("UPPPPPS: " + err))
        .finally(e => console.log("Finally Done"))

}

function getuser(){
    const id = document.getElementById("input-id").value

    fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(res => {
            if(!res.ok){
                return Promise.reject("Error :"+res.status)
            }
            return res.json()
        })
        .then(data=> {
            document.getElementById("id-name").innerText = data.name
            document.getElementById("id-phone").innerText = data.phone
            document.getElementById("id-street").innerText = data.address.street
            document.getElementById("id-city").innerText = data.address.city

        })
        .catch(err=> {
            document.getElementById("Error").innerText = err
        })
        .finally(e=> console.log("finally done"))
}

const option = {
    method : "POST",
    headers : {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(
        {
            name: "Eric"
        }
    )
}
fetch("https://jsonplaceholder.typicode.com/users",option)
    .then(res =>{
        console.log(res.status)
        return res.json()
    })
    .then(res => res.json())
    .then(data => console.log(data))






//v indeholder et promise
/*
fetch("/https://jsonplaceholder.typicode.com/users/111")
.then(res => {
    if(!res.ok){
        return Promise.reject("Error :"+res.status)
    }
    return res.json()
})
.then(data=> console.log(data))
    .catch(err=> console.log("uppppppppps:" + err))
    .finally(e=> console.log("finally done"))

console.log("Who comes first")
 */

