let temperature = Math.ceil(Math.random() * 50);
let background = document.getElementById("container");
let tempDisplay = document.getElementById("temperature");
let tempText = document.getElementById("text");

if (temperature >= -5 && temperature <= 10) {
    background.style.backgroundImage =
        "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CZjrOlSClPGDgPwkatdjOgHaEo%26pid%3DApi&f=1')";
    tempDisplay.innerText = `${temperature}C`;
    tempText.innerText = "The weather is cold";
} else if (temperature >= 11 && temperature <= 25) {
    background.style.backgroundImage =
        "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IkXTHhTHQDOkMzWnJ1O8AwHaEK%26pid%3DApi&f=1')";
    tempDisplay.innerText = `${temperature}C`;
    tempText.innerText = "The weather is moderate";
} else if (temperature > 25) {
    background.style.backgroundImage =
        "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fafricanfurnitureremovals.co.za%2Fwp-content%2Fuploads%2F2013%2F12%2Fsunny-day-hot-summer-wallpapers-1024x768.jpg&f=1&nofb=1')";
    tempDisplay.innerText = `${temperature}C`;
    tempText.innerText = "The weather is hot";
}
