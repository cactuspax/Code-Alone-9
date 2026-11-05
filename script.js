// Use this function to get an image source out of the the image upload box.
// changed the return URL cause I couldn't get it to update live without doing that
function getImageFromUpload() {
    let image = document.querySelector("#imageUpload").files[0];
    let imageURL = URL.createObjectURL(image);
    document.getElementById("previewImage").setAttribute("src", imageURL);
}

// updates the username in live preview in real time
function usernamePreview() {
    let inputVal = document.getElementById("username").value;
    document.querySelector("h3.profile-name").textContent = inputVal || "User Name";

}

// Update the text from the write post box to the live preview
function postTextUpdate() {
    let inputText = document.getElementById("postText").value;
    document.querySelector("p.post-text").textContent = inputText;
}

// update live preview from image style selector
function updateImageStyle() {
    let style = document.getElementById("imageStyle").value;
    document.getElementById("previewImage").setAttribute("class", `post-image ${style}`);
}