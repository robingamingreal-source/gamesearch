const img = document.getElementById("mcimg");
const playermsg = document.getElementById("Players")
const ver = document.getElementById("Version")
const error = document.getElementById("error")


async function serverfetch() {

    try {
        img.src = "loading.gif"
        const serveradress = document.getElementById("search-input").value.toLowerCase();
        
        const response = await fetch(`https://mc-api.co/v1/ping/${serveradress}`);
        img.src = `https://mc-api.co/v1/icon/${serveradress}`;

        if(!response.ok){
            const code = response.status;
            throw new Error("Error while fetching data: " + code);
        }
        error.textContent = "";
        const data = await response.json();
        const online = data.players?.online ?? 0;
        const max = data.players?.max ?? 0;
        const versi = data.version.name;

        console.log("Server Stats:", data); 
        playermsg.textContent = "Players: " + online + "/" + max;
        ver.textContent = "Version: " + versi;
        
        
    } catch(err) {
        console.error("Fetch failed:", err);
        error.textContent = err.message || "Fetch failed";
    }
}