var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    var url = document.getElementById("url");
    var top = document.getElementById("top-text");
    var bottom = document.getElementById("bottom-text");

    // create and append element to DOM
    createElement(url.value ,top.value ,bottom.value);

    // clear text fields
    url.value = "", top.value = "", bottom.value = "";     
})

function deleteMeme(id) {
    var meme = document.getElementById(id);
    document.getElementById("meme-section").removeChild(meme);
}

var memeCounter = 1;
var memeSection = document.getElementById("meme-section");
function createElement(url, upperText, lowerText) {
    // create the wrapper for the meme
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "meme-container");

    // create the img element
    var img = document.createElement("img");
    img.setAttribute("src", url);

    // create th upper div element
    var upperDiv = document.createElement("div");
    upperDiv.setAttribute("class", "upper-caption");
    upperDiv.innerHTML = upperText;

    // create the lower caption div element
    var lowerDiv = document.createElement("div");
    lowerDiv.setAttribute("class", "lower-caption");
    lowerDiv.innerHTML = lowerText;

    // create the deleteBtn div
    var deleteBtn = document.createElement("div")
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.setAttribute("onclick", "deleteMeme(" + memeCounter + ")");
    deleteBtn.innerHTML = "X";

    // append all of the new elements to the wrapper
    wrapper.appendChild(img);
    wrapper.appendChild(upperDiv);
    wrapper.appendChild(lowerDiv);
    wrapper.appendChild(deleteBtn);

    // give the meme wrapper an id of memeCounter's value
    wrapper.setAttribute("id", memeCounter);

    // append the meme to the section element
    memeSection.appendChild(wrapper);

    // increment memeCounter to use for next id
    memeCounter++;
}
/* 
let view = {git 
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