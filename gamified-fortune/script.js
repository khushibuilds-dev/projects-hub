const fortune = [
    "Aapke sitaron se pata chala hai ki jaldi hi aapki kismat chamakne wali hai! 👍👍",
    "Are! Aap kyun har waqt itna pareshan rehte ho? Thoda intezaar karo, aapki kismat ke panno mein bohot kuch chhupa hua hai. 😍😍",
    "Aapke sitaron se pata chala hai ki tum bohot hoshiyar banne ki koshish karte ho, jo ki tum ho nahi! 😂🤫",
    "Sitaron ki duniya se pata chala hai ki tum mein dimaag ki thodi kami hai. Chalo koi baat nahi, gadhon ke paas waise bhi dimaag kahan hota hai! 🫢🫢",
    "Aapka samay thoda kathin chal raha hai, lekin pareshan mat ho. Bohot jald hi tum jo chahte ho, wo tumko milega. 🥰🥰",
    "Are, tum wahi ho na jo fridge se mithai chura kar khate ho? Chalo, tumse bhi aaj baat ho gayi, Churulaal ji! 🥸🥸",
    "Are! Aap toh aane wale samay ke raja hain. Congratulations in advance! 👑👑😊",
    "Oh no! Ye pata chala hai aapke baare mein... Kya aapko filmon ki duniya pasand hai? Agar nahi, toh jao, kamyabi aapka intezaar kar rahi hai. Best of luck! 😀😀",
    "Are wah! Ab kyun pareshan hoti ho? Ab toh pareshani gayi. Tum sahi raah par ho, bas mehnat karte raho. ☺️☺️☺️",
    "Tumse milkar accha laga ki itni chhoti umar mein hi tum bohot kuch seekh gaye ho. Ab jald hi kamyabi tumhare kadam choomegi! 😀😀😀",
    "Are! Aapke sitaron se pata chala hai ki aapko jo chahiye wo kyun nahi mil raha... Tum na garam paani se nahaya karo aur sabun bhi lagaya karo, Kallu Das! 🤭🤭🤭",
    "Mubarak ho! Bohot jald hi tumhare ruke hue kaam poere honge, bas thoda sabr rakho. ✨🎉",
    "Are gadhe! Tum kabhi nahi sudhroge. 👺👺 Aaj phir subah der se so kar uthe ho na? Jaldi utha karo, abhi tumko bohot mehnat karni hai!",
    "Aapke sitaron se pata chala hai ki tumhein jab dekho apni kabiliyat par shakk rehta hai. Are sab hoga, kadam toh aage badhao!",
    "Duniya mein bina mehnat ke kuch nahi milta. Thodi toh mehnat karni padegi na! Tum bas thodi koshish ke baad haar maan jaate ho 😡😡 tabhi aaj kamyaab nahi ho. Chalo, aaj se nayi shuruat karte hain.",
    "Are tum toh bilkul Lallulaal ho! 😂😂😂 Thoda apni personality ko change karo, positive energy hi acchi cheez deti hai. Thoda sudharo khud ko, thik hai?",
    "Jaise kutte ki doom kabhi seedhi nahi ho sakti, waise hi tum kabhi sudhar nahi sakte! 😡😡 Roj kyun galti karte ho? Aaj tumhein kisi se daant padegi, galti tumhari hi hai.",
    "Hii Chandulaal! Itna hoshiyar kyun bante ho? 🤭🤭 Lekin ek baat hai, tum bohot cute ho. 🧸✨",
    "Aapki muskaan bohot acchi hai! 😘😘",
    "Mujhe dikh raha hai ki jald hi aapko kuch bohot tasty khane ko milne wala hai! 🍕🍔",
    "Aapke sitaron ka kehna hai ki aaj aapko phone kam chalana chahiye, warna mummy se chappal pad sakti hai! 🩴😂",
    "Bohot badi khushkhabri hai! Agle 2 dinon mein aapko nahane ka mauka milega, chhorna mat! 🚿🤪",
    "Kismat ke panne keh rahe hain ki tum shakal se jitne shareef lagte ho, andar se utne hi bade khurapati ho! 😈🤭",
    "Pareshan mat ho, jo cheez aapko aaj rula rahi hai, wahi kal aapko sabse majboot banayegi. Dil chhota mat karo! 💪🌟",
    "Aapka aane wala weekend bohot hi shaandar hone wala hai, doston ke sath plan bana lo! 🥳🎉",
    "Gaur se dekho apne aas-pass... Koi aapko chupke se dekh raha hai (shayad wo aapka alsi pan hai)! 👀👻",
    "Aapki kismat mein ek lambi yatra likhi hai... Haalat dekh kar lag raha hai ki wo kitchen tak ki hi hogi! 🚶‍♂️🍜"
];


function fortuneTeller(){

    document.getElementById("fortune-result").classList.remove("hidden");
    const nameInput = document.getElementById('username');
    const userName = document.getElementById("username").value;
    const randomIndex = Math.floor(Math.random()*fortune.length);
    const userFortune = fortune[randomIndex];
    const fortuneMessage = document.getElementById("fortune-message");
    const errorBox = document.getElementById("error-message");
    
    if(userName ==="") {
        errorBox.classList.remove("hidden");
        fortuneMessage.classList.add("hidden")
    } 

    else {
        fortuneMessage.classList.remove("hidden");
        errorBox.classList.add("hidden")

        document.getElementById("fortune-message").innerText = `Hii ${userName} 😍😍 \n\nUniverse ne apke sitare padhe or pata hai kya batya hai apke bhagye ne khud padh lo`;
        document.getElementById("fortunes").innerText = `${userFortune}`;

    }

     
}

function again(){
    document.getElementById("fortune-result").classList.add("hidden")
}

function fortuneMeter(){
    let nameUser = document.getElementById("name").value.trim();

/// ye hai
 if(nameUser ===""){
    document.getElementById("alert-msg").classList.remove("hidden");
    document.getElementById("meter-result").classList.add("hidden");
 } else{

    const meterResult =  document.getElementById("meter-result");
    document.getElementById("meter-result").classList.remove("hidden");
    document.getElementById("container-box").classList.add("hidden")
    const alert = document.getElementById("alert-msg");
    
   

    let nameScore = 0;
    for(let i=0; i<nameUser.length; i++){
        nameScore += nameUser.charCodeAt(i);
    }
    let success = (nameScore % 56) + 40;          
    let happy = ((nameScore * 2) % 50) + 50;     
    let mind = ((nameScore * 3) % 39) + 60;       
    let love = ((nameScore * 7) % 30) + 50;       
    let money = ((nameScore * 5) % 50) + 30;      
    let sadness = ((nameScore + 7) % 41) + 5;     
    let shockingNews = ((nameScore * 4) % 71) + 10; 
    document.getElementById("greet").innerText = `🌟 Hii  ${nameUser} 🤓😀 \n Here is your personalized Destiny Card:`;


    // value increase

    document.getElementById("mind-value").innerText = mind + "%";
    document.getElementById("money-value").innerText = money + "%";
    document.getElementById("love-value").innerText = love + "%";
    document.getElementById("sadness-value").innerText = sadness + "%";
    document.getElementById("happiness-value").innerText = happy + "%";
    document.getElementById("shocking-news-value").innerText = shockingNews + "%";
    document.getElementById("success-value").innerText = success + "%";


    // bar increase decrease

    setTimeout(() => {
    document.getElementById("mind-bar").style.width = mind + "%";
    document.getElementById("money-bar").style.width = money + "%";
    document.getElementById("love-bar").style.width = love + "%";
    document.getElementById("sadness-bar").style.width = sadness + "%";
    document.getElementById("happiness-bar").style.width = happy + "%";
    document.getElementById("success-bar").style.width = success + "%";
    document.getElementById("shocking-bar").style.width = shockingNews + "%";

    }, 100)

   }
}

// go back button

function goBack(){
    document.getElementById("meter-result").classList.add("hidden");
    document.getElementById("container-box").classList.remove("hidden");
   
}

