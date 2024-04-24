function addPlaybackSpeedInput() {
  var aboveTheFold = document.getElementById("above-the-fold");
  if (aboveTheFold) {
    var speedInput = document.createElement("input");
    speedInput.setAttribute("type", "text");
    speedInput.setAttribute("placeholder", "Playback speed (e.g., 1.5)");
    speedInput.style.width = "200px";
    speedInput.style.padding = "10px";
    speedInput.style.marginTop = "10px";
    speedInput.style.fontSize = "16px";
    speedInput.style.borderRadius = "5px";
    speedInput.style.border = "2px solid #cccccc";
    speedInput.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

    var setSpeedButton = document.createElement("button");
    setSpeedButton.textContent = "Set Speed";
    setSpeedButton.style.padding = "10px 20px";
    setSpeedButton.style.fontSize = "16px";
    setSpeedButton.style.borderRadius = "5px";
    setSpeedButton.style.border = "none";
    setSpeedButton.style.marginLeft = "10px";
    setSpeedButton.style.cursor = "pointer";
    setSpeedButton.style.backgroundColor = "#FF0000";
    setSpeedButton.style.color = "white";
    setSpeedButton.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

    aboveTheFold.prepend(setSpeedButton);
    aboveTheFold.prepend(speedInput);

    setSpeedButton.addEventListener("click", function () {
      var speed = parseFloat(speedInput.value);
      var videoPlayer = document.querySelector("video");
      if (videoPlayer && !isNaN(speed) && speed > 0) {
        videoPlayer.playbackRate = speed;
        console.log(`Playback speed set to ${speed}`);
      } else {
        console.error("Invalid speed value or no video player found");
      }
    });
  }
}

setTimeout(addPlaybackSpeedInput, 5000);
