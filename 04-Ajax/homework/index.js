document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector('#lista').innerHTML=""
    let index = 0
    $.ajax({
        url: `http://localhost:5000/amigos/`,
        type: "get",
        success: (data) => {
            data.forEach(element => {
                let friend = document.createElement('li')
                friend.innerHTML = data[index].name
                document.querySelector('#lista').appendChild(friend)
                index++
            });
        },
        error: (error) => {
            alert(error.responseJSON.error);
        }
    })
})


document.querySelector("#search").addEventListener("click", () => {
    let valorInput = document.getElementById("input").value; 
    $.ajax({
        url: `http://localhost:5000/amigos/${valorInput}`,
        type: "get",
        success: (data) => {
            document.querySelector('#amigo').innerHTML = data.name
        },
        error: (error) => {
            alert(error.responseJSON.error);
        }
    })
})

document.querySelector("#delete").addEventListener("click", () => {
    let valorInput = document.getElementById("inputDelete").value; 
    $.ajax({
        url: `http://localhost:5000/amigos/${valorInput}`,
        type: "DELETE",
        success: (data) => {
            console.log("Eliminado Correctamente")
        }
    }) 
})

