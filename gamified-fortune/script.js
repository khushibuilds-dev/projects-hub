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

const quizData = [
    { question: "Python का नाम किस पर रखा गया था?", options: ["सांप", "कार ब्रांड", "कॉमेडी शो 'Monty Python'", "गेम"], correct: 2 },
    { question: "सोलर सिस्टम का 'Red Planet' कौन सा है?", options: ["शुक्र", "मंगल", "बृहस्पति", "बुध"], correct: 1 },
    { question: "WWW का आविष्कार किसने किया?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], correct: 2 },
    { question: "पहला कंप्यूटर माउस किस चीज़ का बना था?", options: ["प्लास्टिक", "लकड़ी", "लोहा", "कांच"], correct: 1 },
    { question: "किस ग्रह को 'Blue Planet' कहा जाता है?", options: ["शनि", "नेप्च्यून", "पृथ्वी", "यूरेनस"], correct: 2 },
    { question: "pani kon pita hai", options: ["mai", "tum", "he", "she"], correct: 2 },
    { question: "एक थाल मोतियों से भरा, सबके सिर पर उल्टा धरा। चारों तरफ वह थाली फिरे, मोती एक न गिरने गिरे। यह क्या है?", options: ["सूरज", "आसमान और तारे", "चाँद", "बादल"], correct: 1 },
    { question: "हरी थी मन भरी थी, लाखों मोती जड़ी थी, राजा जी के बाग में, दुशाला ओढ़े खड़ी थी। यह क्या है?", options: ["अमरूद", "केला", "मक्का (भुट्टा)", "तरबूज"], correct: 2 },
    { question: "लाल गाय लकड़ी खाए, पानी पिए तो मर जाए। यह क्या है?", options: ["आग", "रेलगाड़ी", "लालटेन", "सूरज"], correct: 0 },
    { question: "बिना पर (पंख) के उड़ती जाए, बिना मुँह के गीत सुनाए। यह क्या है?", options: ["पक्षी", "पतंग", "बादल", "हवा"], correct: 3 },
    { question: "लिखती हूँ पर पेन नहीं, चलती हूँ पर पैर नहीं, सिर काटूँ तो काम करे। यह क्या है?", options: ["पेन", "पेंसिल", "चाक", "रबर"], correct: 1 },
    { question: "कटोरे पे कटोरा, बेटा बाप से भी गोरा। यह क्या है?", options: ["तरबूज", "नारायण", "नारियल", "बेल"], correct: 2 },
    { question: "एक लाठी की सुनो कहानी, जिसमें भरा है मीठा पानी। यह क्या है?", options: ["बांस", "गन्ना", "खीरा", "ककड़ी"], correct: 1 },
    { question: "सफेद तन, हरी पूँछ, न बूझो तो नानी से पूछ। यह क्या है?", options: ["मूली", "गाजर", "प्याज", "लहसुन"], correct: 0 },
    { question: "मानव शरीर की सबसे बड़ी हड्डी कौन सी होती है और कहाँ पाई जाती है?", options: ["स्टेप्स (कान में)", "फीमर (जांघ में)", "कशेरुक (रीढ़ में)", "ह्यूमरस (हाथ में)"], correct: 1 },
    { question: "पानी का रासायनिक सूत्र (Chemical Formula) क्या है?", options: ["CO2", "H2O", "NaCl", "O2"], correct: 1 },
    { question: "पौधे अपना भोजन बनाने के लिए किस गैस का उपयोग करते हैं?", options: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"], correct: 2 },
    { question: "हमारे शरीर में ब्लड (रक्त) को शुद्ध करने का काम कौन सा अंग करता है?", options: ["दिल (Heart)", "फेफड़े (Lungs)", "लिवर (Liver)", "किडनी (Kidney)"], correct: 3 },
    { question: "प्रकाश (Light) की गति लगभग कितनी होती है?", options: ["3 लाख किमी/सेकंड", "1 लाख किमी/सेकंड", "5 लाख किमी/सेकंड", "50 हजार किमी/सेकंड"], correct: 0 },
    { question: "गुरुत्वाकर्षण (Gravity) की खोज किस वैज्ञानिक ने की थी?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 1 },
    { question: "एक लड़के की तरफ इशारा करते हुए रीना ने कहा, 'वह मेरे दादाजी के इकलौते बेटे का बेटा है।' उस लड़के का रीना से क्या रिश्ता है?", options: ["चचेरा भाई", "भाई", "चाचा", "पिता"], correct: 1 },
    { question: "अमित ने कहा, 'यह लड़की मेरी माँ के पोते की पत्नी है।' अमित का उस लड़की से क्या संबंध है?", options: ["ससुर", "पिता", "दादा", "पति"], correct: 0 },
    { question: "A और B भाई हैं। C, A की माता है। D, C का पिता है। तो B का D से क्या रिश्ता होगा?", options: ["पोता (नाती)", "पुत्र", "भाई", "दादा"], correct: 0 },
    { question: "एक महिला का परिचय देते हुए एक पुरुष ने कहा, 'इसकी माँ, मेरी सास की इकलौती बेटी है।' उस पुरुष का महिला से क्या संबंध है?", options: ["भाई", "चाचा", "पिता", "दादा"], correct: 2 },
    { question: "यदि राहुल के पिता की माता आपके पिता के भाई की पत्नी हैं, तो राहुल के पिता का आपके पिता से क्या रिश्ता होगा?", options: ["भाई", "चचेरा भाई (Cousin)", "भांजा", "ससुर"], correct: 1 }
];

const regenBtn = document.getElementById("regen-btn");
const quizBox = document.getElementById("quiz-box");
const progressText = document.getElementById("progress");
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const meterBox = document.getElementById("meter-result")
const questionText = document.getElementById("question-text");

let activeQuestions = []; 


let currentQuestionIndex = 0;
let score = 0;

regenBtn.addEventListener("click", () => {
    meterBox.style.display = "none";
    quizBox.style.display = 'block';
    startQuiz();

})

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizData.sort(() => Math.random() - 0.5); 
    activeQuestions = quizData.slice(0, 5);
    loadQuestion();
    
}


 function loadQuestion() {
    nextBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    let currentQuestion = activeQuestions[currentQuestionIndex];
    progressText.innerText = `सवाल ${currentQuestionIndex + 1} / ${activeQuestions.length}`;
    questionText.innerText = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
       const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });
 }



function selectOption(selectedBtn, index) {
    let currentQuestion = activeQuestions[currentQuestionIndex];
    let correctIndex = currentQuestion.correct;

    if (index === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
        optionsContainer.children[correctIndex].classList.add('correct');
    }

   
    Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
    nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        checkQuizResult();
    }
});


function checkQuizResult() {
    const resultMessageDiv = document.getElementById("quiz-result-message");
    
    resultMessageDiv.innerHTML = "";

   
    if (score >= 3) {
        resultMessageDiv.style.color = "#28a745"; 
        resultMessageDiv.innerHTML = `🎉 PASS! स्कोर: ${score}/5<br><span style="font-size: 14px; color: #555;">आपका नया फॉर्च्यून रिजल्ट लोड हो रहा है...</span>`;
        
       
        setTimeout(() => {
            quizBox.style.display = 'none';
            meterBox.style.display = 'block';
        }, 2000);

    } else {
        resultMessageDiv.style.color = "#dc3545"; 
        resultMessageDiv.innerHTML = `❌ FAIL! स्कोर: ${score}/5<br><span style="font-size: 14px; color: #555;">नया कार्ड अनलॉक नहीं हुआ। दोबारा कोशिश करें...</span>`;
        
        setTimeout(() => {
            quizBox.style.display = 'none';
            meterBox.style.display = 'block';
            resultMessageDiv.innerHTML = ""; 
        }, 3000);
    }
}
