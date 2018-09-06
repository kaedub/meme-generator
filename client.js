var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    var url = document.getElementById("url");
    var top = document.getElementById("top-text");
    var bottom = document.getElementById("bottom-text");

    // create and append element to DOM
    createElement(url.value ,top.value ,bottom.value);

    // clear text fields
    url.value, top.value, bottom.value = "";     
})

var memeSection = document.getElementById("meme-section");
function createElement(url, upperText, lowerText) {
    // create the meme wrapper
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "meme-container");

    // append the image to the wrapper
    var img = document.createElement("img");
    img.setAttribute("src", url);

    // append the upper text to wrapper
    var upperDiv = document.createElement("div");
    upperDiv.setAttribute("class", "upper-caption");
    upperDiv.innerHTML = upperText;

    // append the lower text to wrapper
    var lowerDiv = document.createElement("div");
    lowerDiv.setAttribute("class", "lower-caption");
    lowerDiv.innerHTML = lowerText;

    wrapper.appendChild(img);
    wrapper.appendChild(upperDiv);
    wrapper.appendChild(lowerDiv);

    // give each meme wrapper an id
    // wrapper.setAttribute("id", )

    // append the meme to the section element
    memeSection.appendChild(wrapper);

}
/* 
let view = {
  loadMemes: function(memes) {
    document.getElementById("memes").innerHTML = '';
    for (let i = 0; i < memes.length; i++) {
      let meme = memes[i];
      let url = meme.url, top = meme.top, bottom = meme.bottom;
      let memeDiv = "<div id='meme'><img src='" + url + "' onclick='memeGen.deleteMeme(" + i.toString() + ")'><div id='top-center'><h3>" + top.toUpperCase() + "</h3></div><div id='bottom-center'><h3>" + bottom.toUpperCase() + "</h3></div></div>";
      document.getElementById("memes").insertAdjacentHTML('beforeend', memeDiv);
    }
  }
}
*/