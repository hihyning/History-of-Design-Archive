document.addEventListener('DOMContentLoaded', (event) => {
    let objectNum = 0;

    let infoCardInfos = [ "",
    "This unique chair is a testament to the post-war era's interest in combining form, function, and comfort. Its unique, organic shape was a response to the growing trend towards personalization and individuality in design, breaking away from the rigid geometric forms of earlier styles. Jacobsen's use of new upholstery techniques and materials reflected the era's technological advancements. The Egg Chair contributed significantly to the post-war design movement by marrying innovative aesthetics with ergonomic design, embodying the era's shift towards more human-centric and expressive design approaches.", 
    "The graphic design and posters of the post-war period were greatly influenced by the optimism and progressiveness of the era. The use of bold colors, geometric shapes, and innovative typography reflected the period's enthusiasm for modernity and change. These designs captured the spirit of the age, often conveying messages of hope, prosperity, and technological advancement, thereby contributing to the post-war design movement by visually representing the era's cultural and social ethos.", 
    "Verner Panton's Panton Chair, introduced in 1960, epitomizes the post-war era's embrace of new materials and technologies. The chair's fluid, continuous shape made from molded plastic was revolutionary, reflecting the period's fascination with innovation and the future. Its bold form and use of synthetic materials symbolized a break from traditional design, contributing to the post-war design movement by showcasing the possibilities of modern manufacturing techniques and materials.", 
    "Though introduced in 1939, the View-Master gained immense popularity in the post-war era, symbolizing the period's interest in new forms of entertainment and technology. The View-Master offered a unique way to experience visual content, aligning with the era's fascination with television and cinema. Its contribution to the post-war design movement lies in its representation of the period's leisure culture and the growing consumer appetite for innovative, accessible technology.", 
    "The Ball Chair, designed by Eero Aarnio in 1963, is a remarkable example of how the cultural enthusiasm for space and futuristic concepts influenced design during the post-war era. Its spherical, enclosed form resonates with the era's fascination with space exploration, offering a sense of escapism and innovation. The chair became a symbol of the modern and progressive thinking that characterized the 1960s, contributing significantly to the post-war design movement by blending functionality with a bold, imaginative aesthetic.", 
    "Designed by Charles and Ray Eames in 1946, the Eames Molded Plywood Lounge Chair was born out of the technological advancements of the post-war era. Its innovative use of plywood molding techniques, initially developed for wartime purposes, was a direct response to the period's resourcefulness and efficiency. This chair symbolized a shift towards functional, yet aesthetically pleasing furniture in the post-war design movement, influencing the way everyday objects were designed and produced.", "WHAT IS THE POST WAR ERA? The post-war design movement, flourishing after World War II, reflected the era\'s optimism and technological advancements. The Space Race notably influenced design, infusing a fascination with space-age aesthetics into furniture, architecture, and consumer goods. This period embraced futuristic forms, metallic finishes, and innovation, mirroring the sleekness of space exploration. It was a time of creative expansion, driven by advancements in space technology and a forward-looking ethos, reshaping design with a focus on new materials and the excitement of the future."];
    
    let infoCardHeaders = [
        "POST WAR","Egg Chair by Arne Jacobsen (1958)","Graphic Design and Posters (1945-1985)","Verner Panton: Panton Chair (1960)","Charles Harrison: View-Master (1939)", "Eero Aarnio: Ball Chair (1963)", "Eames: Molded Plywood Lounge Chair (1946)"
    ];    
    
    for (let i = 1 ; i < 7; i++){
        document.getElementById('orbit'+i).addEventListener('click', function() {
            let currObject = document.getElementById('orbit'+i);
            let active = currObject.style.boxShadow; 
            clearGlow();

            if (!active){
                currObject.style.boxShadow = "0px 0px 40px 10px #FAF9F0";
                document.getElementById('infoCardHeader').textContent = infoCardHeaders[i];
                document.getElementById('infoCardInfo').textContent = infoCardInfos[i];
            }
            else {
                console.log("off");
                currObject.style.removeProperty('box-shadow');
                document.getElementById('infoCardHeader').textContent = infoCardHeaders[0];
                document.getElementById('infoCardInfo').textContent = infoCardInfos[0];
            }      
            infoCard.classList.toggle("flipCard");      
        });
    }

    function clearGlow(){
        for (let i = 1 ; i < 7; i++){
            let currObject = document.getElementById('orbit'+i);
            currObject.style.removeProperty('box-shadow');
            document.getElementById('infoCardHeader').textContent = infoCardHeaders[0];
            document.getElementById('infoCardInfo').textContent = infoCardInfos[0];
            
        }
        let currObject = document.getElementById('infoCard');
        currObject.style.removeProperty('box-shadow');
        document.getElementById('infoCardHeader').textContent = infoCardHeaders[0];
        document.getElementById('infoCardInfo').textContent = infoCardInfos[0];

    }

    document.getElementById('infoCard').addEventListener('click', function() {
        let currObject = document.getElementById('infoCard');
        let active = currObject.style.boxShadow; 

        if (!active){
            currObject.style.boxShadow = "0px 0px 50px 10px #FAF9F0";
            document.getElementById('infoCardHeader').textContent = infoCardHeaders[7];
            document.getElementById('infoCardInfo').textContent = infoCardInfos[7];
        }
        else {
            console.log("off");
            currObject.style.removeProperty('box-shadow');
            document.getElementById('infoCardHeader').textContent = infoCardHeaders[0];
            document.getElementById('infoCardInfo').textContent = infoCardInfos[0];
        }      
        infoCard.classList.toggle("flipCard");      
    });
});



