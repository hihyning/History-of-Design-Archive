document.addEventListener('DOMContentLoaded', (event) => {
    let currentStage = 0;
    let imageCount = 0
    
    const backgrounds = ['url(static/industrialism/background1.jpg)', 'url(static/industrialism/background2.jpg)', 'url(static/industrialism/background3.jpg)', 'url(static/industrialism/background4.jpg)', 'url(static/industrialism/background5.jpg)'];
    const tempText = document.getElementById('instructions');
    tempText.style.display = 'block'; // or 'inline', 'inline-block', etc., as per your design
    setTimeout(() => {
        tempText.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds

    const infoTexts = ['This is the exterior of The Crystal Palace, a magnificent glass and iron structure built in Hyde Park, London, specifically for The Great Exhibition (1851). Designed by Sir Joseph Paxton, an architect and gardener, the palace symbolized the technological and industrial advancements of the era.This venue also further demonstrated the height of the Victorian era\'s industrial achievements, with its innovative modular design and use of prefabricated parts it served as a centerpiece of the exhibition but also a landmark in architectural history.',
    'The British Industrial Revolution significantly influenced art and design, culminating in The Great Exhibition of 1851, organized by Prince Albert and Henry Cole, which showcased Britain\'s industrial, scientific, and economic achievements alongside its colonial prowess as patrons from all around the world would attend. This event symbolized the fusion of technology and aesthetics and emphasized Britain\'s stance as a dominant world power and colonial empire, blending industrial advancements with a display of global influence and cultural diversity.',
    'The Industrial Revolution introduced transformative machines like the steam engine, which revolutionized transportation, and the power loom, which drastically altered manufactoring processes, these were heavily reliant on the abundance of coal, a critical fuel source of the time. These innovations showcased at the exhibition proved Britain\'s industrial leadership by displaying a wide array of these technological marvels, and not only celebrated the progress of industrialism but also set the stage for further technological developments in the ensuing decades.',
    'Henry Cole was instrumental in ensuring that the exhibition also an event that educated the public about good design principles. For example, the exhibition featured the latest in decorative arts, such as intricately designed furniture and fine ceramics, which influenced home decor trends in Victorian Britain. The exhibition was also notable for being accessibile to all members of the public, not just the upper class. This approach helped bridge the gap between industrial innovation and artistic design, leading to a more integrated view of production and aesthetics in the public consciousness.',
    'This portrayal of British colonies reinforced the narrative of British colonial dominance and the perceived benefits of empire, both economically and culturally. India, often referred to as the "crown jewel" of the British colonies, had a significant presence at the exhibition. Its contributions included a lavish array of textiles, precious gems, intricate metalwork, and other traditional crafts. These displays highlighted the richness of Indian culture and resource and also served to underscore the extent of Britain\'s imperial reach and its ability to harness resources from its colonies.'];
    
    const imageSets = [['banner1','banner2','banner3'], ['banner4', 'banner5','banner6'], ['banner7','banner8','banner9'], ['banner10','banner11','banner12'], ['banner13','banner14','banner15','returnButton']];

    updateBackground();
    hideAllImages();
    updateInfoBar();

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            if (currentStage != imageSets.length - 1 || imageCount != imageSets[currentStage].length){
                if(imageCount == imageSets[currentStage].length){
                    changeStage(1);
                }
                else{
                    showNextImage();
                }
            }
        } else if (event.key === 'ArrowLeft') {
            if(imageCount <= 0){
                changeStage(-1);
            }
            else{
                hideLastImage();
            }
        }
    });

    function changeStage(direction) {
        hideAllImages();
        currentStage += direction;
        if (currentStage < 0) currentStage = 0;
        if (currentStage >= backgrounds.length) currentStage = backgrounds.length - 1;
        console.log("Updating", currentStage); // Debug log
        imageCount = 0;
        updateBackground();
        updateInfoBar();
    }

    function updateBackground() {
        document.getElementById('backgroundContainer').style.backgroundImage = backgrounds[currentStage];
    }

    function updateInfoBar() {
        document.getElementById('infoBar').innerHTML = infoTexts[currentStage];
        console.log("Updating Info Bar: ", infoTexts[currentStage]); // Debug log
    }

    function hideAllImages(){
        imageSets.forEach(currStage => {
            currStage.forEach(id => {
                console.log("id", id);
                const banner = document.getElementById(id);
                banner.classList.remove('image-slide-in');
                //banner.classList.add('image-slide-out');
                banner.style.display = 'none';
            });
        });
    }

    function hideLastImage(){
        imageCount--;
        console.log(imageSets[currentStage][imageCount]);
        const banner = document.getElementById(imageSets[currentStage][imageCount]);
        if (imageSets[currentStage][imageCount] != 'returnButton') {
            banner.classList.remove('image-slide-in');
            banner.classList.add('image-slide-out');
            setTimeout(() => {
                banner.style.display = 'none';
            }, 1500);
        }
        else {
            banner.style.display = 'none';
        }
        
    }

    function showNextImage(){
        console.log(imageSets[currentStage][imageCount]);
        const banner = document.getElementById(imageSets[currentStage][imageCount]);
        if (imageSets[currentStage][imageCount] != 'returnButton') {
            banner.classList.add('image-slide-in');
            banner.classList.remove('image-slide-out');
        }
        banner.style.display = 'block';
        imageCount++;
    }
    
    // function hideLastImage() {
    //     if (imageCount > 0) {
    //         imageCount--;
    //         const bannerId = imageSets[currentStage][imageCount];
    //         const banner = document.getElementById(bannerId);
    //         if (banner) {
    //             banner.classList.remove('image-slide-in');
    //             banner.classList.add('image-slide-out');
    //             setTimeout(() => {
    //                 banner.style.display = 'none';
    //             }, 500); // Match this with your animation duration
    //         }
    //     } else if (currentStage > 0) {
    //         changeStage(-1);
    //     }
    // }

// function showNextImage() {
//     if (imageCount < imageSets[currentStage].length) {
//         const bannerId = imageSets[currentStage][imageCount];
//         const banner = document.getElementById(bannerId);
//         if (banner) {
//             banner.idList.add('image-slide-in'); // Apply slide-in animation
//             banner.style.display = 'block'; // Show the container
//             } else {
//             changeStage(1); // Uncomment if needed
//             }
//             imageCount++;
//         }
//     }

// function hideLastImage() {
//     if (imageCount > 0) {
//         const bannerId = imageSets[currentStage][imageCount - 1];
//         const banner = document.getElementById(bannerId);
//         if (banner) {
//             banner.classList.add('image-slide-out'); // Apply slide-out animation
//             setTimeout(() => {
//                 banner.style.display = 'none'; // Hide the container after animation
//             }, 500); // Match this with your animation duration
//         }
//         imageCount--;
//     }
// }

document.getElementById('startButton').addEventListener('click', function() {
    const mainContainer = document.getElementById('mainContainer');
    const landingPage = document.getElementById('landingPage');

    // Start fading out the landing page
    landingPage.style.opacity = '0';

    // Start fading in the main container slightly before the landing page is completely gone
    setTimeout(() => {
        mainContainer.style.display = 'block';
        setTimeout(() => {
            mainContainer.style.opacity = '1';
        }, 10); // A short delay to ensure display change is rendered
    }, 0); // Adjust this to be less than the landing page fade-out time

    // Wait for the fade-out transition of the landing page to complete, then hide it
    setTimeout(() => {
        landingPage.style.display = 'none';
    }, 1200); // Match this with your CSS transition time
});

document.getElementById('exitButton').addEventListener('click', function() {
    window.location.href = 'home.html'; // Replace with your homepage URL
});
    // Retrieve the stored name
const storedName = localStorage.getItem('userName'); // Replace 'userName' with your actual key
        document.getElementById('userName').textContent = storedName;
});

document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = 'home.html'; // Replace with your homepage URL
});
