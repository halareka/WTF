const SaveImgURL = "https://sun9-64.userapi.com/s/v1/if1/R3GMaC0C0ulGnOnRh_cm8x4vZ7hlTpP6gxC7oVM5CV4wsOPm7QIecwl2iRyqpIgyuSNGizlx.jpg?quality=96&as=32x40,48x61,72x91,108x136,160x202,228x288&from=bu&u=-W23WVRYy9NEKEVX5F-gUJwWQbnWgXy1GbpaWQw0dUY&cs=228x288";
const replaceBtn = document.getElementById("grabBtn");
replaceBtn.addEventListener("click", () => {    
    let imgURL = document.getElementById("urlId").value; 
    if(imgURL.length < 5){
        imgURL = SaveImgURL; 
    }
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        if (tab) {
            chrome.scripting.executeScript(
                {
                    target: {tabId: tab.id, allFrames: true},
                    func: grabImages,
                    args: [imgURL] 
                },
            )
        } else {
            alert("There are no active tabs");
        }
    });
});

function grabImages(imgURL) { 
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.src = imgURL; 
    });
}