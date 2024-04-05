// function creating a new playlist item.
let collection = document.getElementById("item")
let button = document.getElementById("button")


function createItem() {
    collection.innerHTML = '<div class="collection-items"><div class="item" id="item"><img src="./assets/songs/nlnd.jpeg" alt=""><h6 class="title">Instrumental</h6></div></div>'
}