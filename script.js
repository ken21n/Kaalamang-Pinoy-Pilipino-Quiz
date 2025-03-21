const startButton = document.getElementById('startButton');
const difficultySelection = document.getElementById('difficultySelection');
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('questionnaire');
const exitButton = document.getElementById('exitButton'); // Select the Exit Button

// Add event listener for the Start button
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide the start button
    difficultySelection.classList.remove('hidden'); // Show difficulty selection
    shuffleQuestions(questions);
    document.querySelector('.starting-text').classList.add('hidden');
    document.getElementById('difficultySelection').classList.remove('hidden');
});

// Add event listener for the Exit button
exitButton.addEventListener('click', () => {
    // Hide all sections
    difficultySelection.classList.add('hidden');
    rulesSection.classList.add('hidden');
    quizSection.classList.add('hidden');
    
    // Show the start button
    startButton.style.display = 'block';

    // Reset the game state
    resetGame();
    document.getElementById('questionnaire').classList.add('hidden');
    document.querySelector('.starting-text').classList.remove('hidden');
    document.getElementById('startButton').classList.remove('hidden');
});

// Function to shuffle an array
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetGame() {
    // Reset any game-related variables or UI elements
    currentQuestion = 0;
    score = 0;
    clearInterval(timer); // Stop the timer if it's running
    timeLeft = 15; // Reset the timer
    questionCount = 0; // Assuming you have a variable named questionCount
    currentQuestionIndex = 0; // Reset the current question index if applicable

    // Shuffle questions
    shuffleQuestions(questions);

    // Reset UI elements
    document.getElementById('questionnaire').classList.add('hidden');
    document.querySelector('.starting-text').classList.remove('hidden');
    document.getElementById('startButton').classList.remove('hidden');
}

document.querySelectorAll('.difficulty-button').forEach(button => {
  button.addEventListener('click', function () {
      const selectedDifficulty = this.classList.contains('easy') ? 'easy' :
          this.classList.contains('medium') ? 'medium' : 'hard';
      filterQuestionsByDifficulty(selectedDifficulty);
      document.getElementById('difficultySelection').classList.add('hidden');
      document.getElementById('rules').classList.remove('hidden');
  });
});

document.getElementById('continueButton').addEventListener('click', function () {
  document.getElementById('rules').classList.add('hidden');
  document.getElementById('questionnaire').classList.remove('hidden');
  showQuestion(0);
});

let questions = [

    {
    numb: 1,
    question: "Anong kulay ang nasa itaas na parte ng ating watawat?",
    answer: "Asul",
    options: [
    "Pula",
    "Dilaw",
    "Asul",
    "Luntian"
    ],
    difficulty: "easy"
    },
    {
    numb: 2,
    question: "Anu-anong probinsya ang nirerepresenta ng walong sinag sa araw ng ating watawat?",
    answer: "Batangas, Bulacan, Cavite, Laguna, Manila, Nueva Ecija, Pampanga, at Tarlac",
    options: [
    "Batangas, Bulacan, Cavite, Laguna, Manila, Nueva Ecija",
    "Batangas, Bulacan, Cavite, Laguna, Manila, Nueva Vizcaya",
    "Batangas, Bulacan, Cavite, Laguna, Manila, Nueva Ecija, Pampanga, at Tarlac",
    "Batangas, Bulacan, Cavite, Cebu, Manila, Nueva Ecija, Pampanga, at Tarlac"
    ],
    difficulty: "easy"
    },
    {
    numb: 3,
    question: "Anu-ano ang nirerepresenta ng tatlong bituin sa watawat?",
    answer: "Luzon, Visayas, at Mindanao",
    options: [
    "GomBurZa",
    "Luzon, Visayas, at Mindanao",
    "Tatlong bansang sumakop sa Pilipinas",
    "Batangas, Bulacan, Cavite"
    ],
    difficulty: "easy"
    },
    {
    numb: 4,
    question: "Ano ang simbolo ng kulay pula sa watawat?",
    answer: "Katapangan, kagitingan, at kahandaang ipaglaban ang kalayaan ng bansa",
    options: [
    "Kapayapaan, katarungan, at pagkakaisa ng mga Pilipino",
    "Kumakatawan sa Luzon, Visayas, at Mindanao",
    "Katapangan, kagitingan, at kahandaang ipaglaban ang kalayaan ng bansa",
    "Kadalisayan at kabutihan ng layunin ng mga Pilipino"
    ],
    difficulty: "easy"
    },
    {
    numb: 5,
    question: "Sino-sino ang tatlong babaeng nagtahi ng kauna-unahang watawat ng Pilipinas?",
    answer: "Marcela Agoncillo, Lorenza, at Delfina Herbosa",
    options: [
    "Marcela Agoncillo, Gabriela Silang, at Melchora Aquino",
    "Marcela Agoncillo, Lorenza, at Segunda Katigbak",
    "Marcela Agoncillo, Lorenza, at Delfina Herbosa",
    "Marcela Agoncillo, Maria Clara, Pia Alba"
    ],
    difficulty: "easy"
    },
    {
    numb: 6,
    question: "Saan unang iwinagayway ang watawat ng Pilipinas?",
    answer: "Kawit, Cavite",
    options: [
    "Calamba, Laguna",
    "Kawit, Cavite",
    "Karuhatan, Valenzuela",
    "Balintawak"
    ],
    difficulty: "easy"
    },
    {
    numb: 7,
    question: "Sino ang nagdisenyo ng watawat ng Pilipinas?",
    answer: "Emilio Aguinaldo",
    options: [
    "Andres Bonifacio",
    "Gregoria de Jesus",
    "Jose Burgos",
    "Emilio Aguinaldo"
    ],
    difficulty: "easy"
    },
    {
    numb: 8,
    question: "Ano ang pamagat ng ating pambansang awit?",
    answer: "Lupang Hinirang",
    options: [
    "Bayang Magiliw",
    "Leron-leron sinta",
    "Lupang Hinirang",
    "Perlas ng Silanganan"
    ],
    difficulty: "easy"
    },
    {
    numb: 9,
    question: "Sino ang sumulat ng Pambansang awit ng Pilipinas?",
    answer: "Jose Palma",
    options: [
    "Jose Burgos",
    "Graciano Lopez Jaena",
    "Julian Felipe",
    "Jose Palma"
    ],
    difficulty: "easy"
    },
    {
    numb: 10,
    question: "Anong taon unang iwinagayway ang watawat?",
    answer: "1898",
    options: [
    "1899",
    "1998",
    "1889",
    "1898"
    ],
    difficulty: "easy"
    },
    {
    numb: 11,
    question: "Ano ang pambansang isda?",
    answer: "Bangus",
    options: [
    "Galunggong",
    "Dilis",
    "Bangus",
    "Tilapia"
    ],
    difficulty: "easy"
    },
    {
    numb: 12,
    question: "Ano ang Pambansang Bulaklak?",
    answer: "Sampaguita",
    options: [
    "Sampaguita",
    "Sunflower",
    "Tulips",
    "Gumamela"
    ],
    difficulty: "easy"
    },
    {
    numb: 13,
    question: "Ano ang pambansang ibon?",
    answer: "Haribon",
    options: [
    "Haribon",
    "Maya",
    "Parrot",
    "Blue jay"
    ],
    difficulty: "easy"
    },
    {
    numb: 14,
    question: "Ano ang pambansang kasuotan para sa babae?",
    answer: "Baro't saya",
    options: [
    "Barong tagalog",
    "Tinikling",
    "Filipiniana",
    "Baro't saya"
    ],
    difficulty: "easy"
    },
    {
    numb: 15,
    question: "Ano ang pambansang sayaw?",
    answer: "Cariñosa",
    options: [
    "Tinikling",
    "Hip-hop",
    "Cariñosa",
    "Cha-cha"
    ],
    difficulty: "easy"
    },
    {
    numb: 16,
    question: "Sino ang nasa 200 peso bill?",
    answer: "Diosdado Macapagal",
    options: [
    "Manuel L. Quezon",
    "Apolinario Mabini",
    "Emilio Aguinaldo",
    "Diosdado P. Macapagal"
    ],
    difficulty: "easy"
    },
    {
    nnumb: 17,
    question: "Ano ang pambansang sasakyan?",
    answer: "Kalesa",
    options: [
    "Kalesa",
    "Jeep",
    "Pedicab",
    "E-bike"
    
    ],
    difficulty: "easy"
    },
    {
    numb: 18,
    question: "Ano ang Pambansang hiyas?",
    answer: "Perlas",
    options: [
    "Ruby",
    "Perlas",
    "Brilyante",
    "Topaz"
    
    
    ],
    difficulty: "easy"
    },
    {
    numb: 19,
    question: "Ano ang Pambansang Hayop?",
    answer: "Kalabaw",
    options: [
    "Agila",
    "Unggoy",
    "Aso",
    "Kalabaw"
    
    
    
    ],
    difficulty: "easy"
    },
    {
    numb: 20,
    question: "Pambansang punongkahoy",
    answer: "Narra",
    options: [
    "Narra",
    "Acacia",
    "Oak tree",
    "Baobab"
    ],
    difficulty: "easy"
    },
    
    {
    numb: 2,
    question: "Sino ang binansagang 'Ina ng Katipunan' at kilala rin bilang 'Tandang Sora'?",
    answer: "Melchora Aquino",
    options: [
    "Melchora Aquino",
    "Gabriela Silang",
    "Segunda Katigbak",
    "Josefa Llanes"
    ],
    difficulty: "medium"
    },
    {
    numb: 3,
    question: "Kilala bilang 'Supremo ng Katipunan'.",
    answer: "Andres Bonifacio",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Jose Rizal"
    ],
    difficulty: "medium"
    },
    {
    numb: 4,
    question: "Sino ang 'Utak ng katipunan'?",
    answer: "Emilio Jacinto",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Jose Rizal"
    ],
    difficulty: "medium"
    },
    {
    numb: 5,
    question: "Sino ang unang presidente ng republika ng Pilipinas?",
    answer: "Emilio Aguinaldo",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Emilio Aguinaldo"
    ],
    difficulty: "medium"
    },
    {
    numb: 6,
    question: "Sino ang pinakabata sa tatlong paring martyr?",
    answer: "Padre Jose Burgos",
    options: [
    "Padre Damaso",
    "Padre Mariano Gomez",
    "Padre Jose Burgos",
    "Padre Jacinto Zamora"
    ],
    difficulty: "medium"
    },
    {
    numb: 7,
    question: "Sino ang binansagang 'utak ng rebolusyon'?",
    answer: "Apolinario Mabini",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Emilio Aguinaldo"
    ],
    difficulty: "medium"
    },
    {
    numb: 8,
    question: "Sino ang unang babaeng miyembro ng katipunan?",
    answer: "Gregoria de Jesus",
    options: [
    "Gregoria de Jesus",
    "Josefa Llanes",
    "Segunda Katigbak",
    "Gabriela Silang"
    ],
    difficulty: "medium"
    },
    {
    numb: 9,
    question: "Ano ang palayaw ni Marcelo H. Del Pilar sa pagsusulat?",
    answer: "Plaridel",
    options: [
    "Mongol",
    "Dimasalang",
    "Taga-ilog",
    "Plaridel"
    ],
    difficulty: "medium"
    },
    {
    numb: 10,
    question: "Ano ang bansang sumakop sa Pilipinas noong 'World war II'?",
    answer: "Hapon",
    options: [
    "Estados Unidos",
    "Espanya",
    "Britanya",
    "Hapon"
    ],
    difficulty: "medium"
    },
    {
    numb: 11,
    question: "Kilala bilang pinakaunang katutubo ng kapuluan na lumaban sa mga taga-Europa",
    answer: "Lapu-lapu",
    options: [
    "Magellan",
    "Datu Sabtano",
    "Lapu-lapu",
    "Datu Zulu"
    
    ],
    difficulty: "medium"
    },
    {
    numb: 12,
    question: "Ano ang itinuturing na pinaunang anyo ng pagsulat sa Pilipinas?",
    answer: "Baybayin",
    options: [
    "Alibata",
    "Baybayin",
    "Morse",
    "Hangul"
    ],
    difficulty: "medium"
    },
    {
    numb: 13,
    question: "Sino ang kapatid ni Rizal na namatay sa edad na tatlo?",
    answer: "Concepcion Rizal",
    options: [
    "Narcisa Rizal",
    "Concepcion Rizal",
    "Trinidad Rizal",
    "Soledad Riza"
    
    ],
    difficulty: "medium"
    },
    {
    numb: 14,
    question: "Kaninong obra ang Monumento ni Gat. Andres Bonifacio? Binansagan din siyang 'Pambansang Alagad ng Sining'.",
    answer: "Guillermo Tolentino",
    options: [
    "Mike Portes",
    "Francisco Balagtas",
    "Guillermo Tolentino",
    "Carlos Bulosan"
    ],
    difficulty: "medium"
    },
    {
    numb: 15,
    question: "Sino ang nasa 200 peso bill?",
    answer: "Diosdado Macapagal",
    options: [
    "Manuel L. Quezon",
    "Apolinario Mabini",
    "Emilio Aguinaldo",
    "Diosdado Macapagal"
    
    ],
    difficulty: "medium"
    },
   
    {
    numb: 16,
    question: "Sino ang babaeng bayani na matatagpuan sa 1000 peso bill?",
    answer: "Josefa Llanes Escoda",
    options: [
    "Josefa Llanes Escoda",
    "Maria Clara",
    "Cory Aquino",
    "Gabriella Silang"
    
    
    ],
    difficulty: "medium"
    },
    {
    numb: 17,
    question: "Sino ang unang babaeng naging kasintahan ni Jose Rizal?",
    answer: "Segunda Katigbak",
    options: [
    "Leonor Rivera",
    "Gertrude Beckett",
    "Segunda Katigbak",
    "Nelly Bousted"
    ],
    difficulty: "medium"
    },
    {
    num: 18,
    question: "Siya ay isang heneral ng hukbong Pilipino, na lumaban sa Digmaang Pilipino – Amerikano. Tinalakay bilang isa sa pinakamabangis na heneral ng kanyang panahon.",
    answer: "Antonio Luna",
    options: [
    "Antonio Luna",
    "Juan Luna",
    "Marcelo H. Del pilar",
    "Ibarra"
    ],
    difficulty: "medium"
    },
    {
    numb: 19,
    question: "Matagumpay niyang nilabanan ang mga pagsalakay ng Espanya at hadlangan ang paglaganap ng Roman Catholicism sa isla ng Mindanao katulad ng ibang mga pinuno ng Muslim sa katipunan ng kapuluan ng Pilipinas.",
    answer: "Sultan Kudarat",
    options: [
    "Lapu-lapu",
    "Magellan",
    "Sultan Kudarat",
    "Datu Zulu"
    
    ],
    difficulty: "medium"
    },
    {
    numb: 20,
    question: "Siya ay isang pinturang Pilipino, iskultor at isang aktibista sa politika ng Rebolusyong Pilipino noong huling bahagi ng ika-19 na siglo. Naging isa siya sa mga unang kinilalang artista sa Pilipinas.",
    answer: "Juan Luna",
    options: [
    "Antonio Luna",
    "Juan Luna",
    "Marcelo H. Del pilar",
    "Ibarra"
    ],
    difficulty: "medium"
    },
    {
    nnumb: 21,
    question: "Sino ang nagtatag ng 'La Solidaridad'.",
    answer: "Graciano Lopez Jaena",
    options: [
    "Jose Burgos",
    "Mariano Gomez",
    "Jacinto Zamora",
    "Graciano Lopez Jaena"
    
    ],
    difficulty: "medium"
    },
    {
    numb: 22,
    question: "Sino ang binansagang 'Ina ng Katipunan' at kilala rin bilang 'Tandang Sora'?",
    answer: "Melchora Aquino",
    options: [
    "Melchora Aquino",
    "Gabriela Silang",
    "Segunda Katigbak",
    "Josefa Llanes"
    
    
    ],
    difficulty: "medium"
    },
    {
    nnumb: 23,
    question: "Kilala bilang 'Supremo ng Katipunan'.",
    answer: "Andres Bonifacio",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Jose Rizal"
    
    
    ],
    difficulty: "medium"
    },
    {
    numb: 24,
    question: "Sino ang 'Utak ng katipunan'?",
    answer: "Emilio Jacinto",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Jose Rizal"
    
    
    
    ],
    difficulty: "medium"
    },
    {
    numb: 25,
    question: "Sino ang unang presidente ng republika ng Pilipinas?",
    answer: "Emilio Aguinaldo",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Emilio Aguinaldo"
    ],
    difficulty: "medium"
    },
    {
    numb: 26,
    question: "Sino ang pinakabata sa tatlong paring martyr?",
    answer: "Padre Jose Burgos",
    options: [
    "Padre Damaso",
    "Padre Mariano Gomez",
    "Padre Jose Burgos",
    "Padre Jacinto Zamora"
    ],
    difficulty: "medium"
    },{
    numb: 27,
    question: "Sino ang binansagang 'utak ng rebolusyon'?",
    answer: "Apolinario Mabini",
    options: [
    "Emilio Jacinto",
    "Apolinario Mabini",
    "Andres Bonifacio",
    "Emilio Aguinaldo"
    ],
    difficulty: "medium"
    },
    {
    numb: 28,
    question: "Sino ang unang babaeng miyembro ng katipunan?",
    answer: "Gregoria de Jesus",
    options: [
    "Gregoria de Jesus",
    "Josefa Llanes",
    "Segunda Katigbak",
    "Gabriela Silang"
    ],
    difficulty: "medium"
    },
    {
    numb: 29,
    question: "Ano ang palayaw ni Marcelo H. Del Pilar sa pagsusulat?",
    answer: "Plaridel",
    options: [
    "Mongol",
    "Dimasalang",
    "Taga-ilog",
    "Plaridel"
    ],
    difficulty: "medium"
    },
    {
    numb: 30,
    question: "Ano ang bansang sumakop sa Pilipinas noong 'World war II'?",
    answer: "Hapon",
    options: [
    "Estados Unidos",
    "Espanya",
    "Britanya",
    "Hapon"
    ],
    difficulty: "medium"
    },
    {
    numb: 1,
    question: "Kilala bilang pinakaunang katutubo ng kapuluan na lumaban sa mga taga-Europa",
    answer: "Lapu-lapu",
    options: [
    "Magellan",
    "Datu Sabtano",
    "Lapu-lapu",
    "Datu Zulu"
    ],
    difficulty: "hard"
    },
    {
    numb: 2,
    question: "Ano ang itinuturing na pinaunang anyo ng pagsulat sa Pilipinas?",
    answer: "Baybayin",
    options: [
    "Alibata",
    "Baybayin",
    "Morse",
    "Hangul"
    ],
    difficulty: "hard"
    },
    {
    numb: 3,
    question: "Sino ang kapatid ni Rizal na namatay sa edad na tatlo?",
    answer: "Concepcion Rizal",
    options: [
    "Narcisa Rizal",
    "Concepcion Rizal",
    "Trinidad Rizal",
    "Soledad Rizal"
    ],
    difficulty: "hard"
    },
    {
    numb: 4,
    question: "Kaninong obra ang Monumento ni Gat. Andres Bonifacio? Binansagan din siyang 'Pambansang alagad ng sining'.",
    answer: "Guillermo Tolentino",
    options: [
    "Mike Portes",
    "Francisco Balagtas",
    "Guillermo Tolentino",
    "Carlos Bulosan"
    ],
    difficulty: "hard"
    },
    {
    numb: 5,
    question: "Sino ang nasa 200 peso bill?",
    answer: "Diosdado Macapagal",
    options: [
    "Manuel L. Quezon",
    "Apolinario Mabini",
    "Emilio Aguinaldo",
    "Diosdado P. Macapagal"
    ],
    difficulty: "hard"
    },
    {
    numb: 6,
    question: "Sino ang babaeng bayani na matatagpuan sa 1000 peso bill?",
    answer: "Josefa Llanes Escoda",
    options: [
    "Josefa Llanes Escoda",
    "Maria Clara",
    "Cory Aquino",
    "Gabriella Silang"
    ],
    difficulty: "hard"
    },
    {
    numb: 7,
    question: "Sino ang unang babaeng naging kasintahan ni Jose Rizal?",
    answer: "Segunda Katigbak",
    options: [
    "Leonor Rivera",
    "Gertrude Beckett",
    "Segunda Katigbak",
    "Nelly Bousted"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 8,
    question: "Siya ay isang heneral ng hukbong Pilipino, na lumaban sa Digmaang Pilipino – Amerikano. Tinalakay bilang isa sa pinakamabangis na heneral ng kanyang panahon.",
    answer: "Antonio Luna",
    options: [
    "Antonio Luna",
    "Juan Luna",
    "Marcelo H. Del pilar",
    "Ibarra"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 9,
    question: "Matagumpay niyang nilabanan ang mga pagsalakay ng Espanya at hadlangan ang paglaganap ng Roman Catholicism sa isla ng Mindanao katulad ng ibang mga pinuno ng Muslim sa katipunan ng kapuluan ng Pilipinas.",
    answer: "Sultan Kudarat",
    options: [
    "Lapu-lapu",
    "Magellan",
    "Sultan Kudarat",
    "Datu Zulu"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 10,
    question: "Siya ay isang pintor na Pilipino, iskultor at isang aktibista sa politika ng Rebolusyong Pilipino noong huling bahagi ng ika-19 na siglo. Naging isa siya sa mga unang kinilalang artista sa Pilipinas.",
    answer: "Juan Luna",
    options: [
    "Antonio Luna",
    "Juan Luna",
    "Marcelo H. Del pilar",
    "Ibarra"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 11,
    question: "Anong taon naganap ang 'Bataan Death March'?",
    answer: "1942",
    options: [
    "1824",
    "1942",
    "1924",
    "1492"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 12,
    question: "Tuwing kailan ipinagdiriwang ang araw ng kalayaan?",
    answer: "June 12",
    options: [
    "June 11",
    "June 13",
    "June 22",
    "June 12"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 13,
    question: "Kailan ginarote ang tatlong paring martyr?",
    answer: "Pebrero 17, 1872",
    options: [
    "Pebrero 17, 1872",
    "Disyembre 30, 1896",
    "Abril 17, 1942",
    "Hunyo 12, 1872"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 14,
    question: "Sa anong taon dumating sa dalampasigan ng Pilipinas ang manggagalugad na Portuges na si Ferdinand Magellan?",
    answer: "Marso 16,1521",
    options: [
    "Marso 16,1521",
    "Disyembre 17, 1942",
    "Abril 17, 1942",
    "Hunyo 12, 1872"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 15,
    question: "Anong taon naganap ang makasaysayang battle of mactan?",
    answer: "1521",
    options: [
    "1452",
    "1521",
    "1252",
    "1512"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 16,
    question: "Ang Pilipinas ay isang kapuluan na naglalaman ng humigit-kumulang ____ na mga pulo",
    answer: "7,641",
    options: [
    "6,714",
    "4,761",
    "7,641",
    "1,764"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 15,
    question: "Anong taon naganap ang makasaysayang battle of mactan?",
    answer: "1521",
    options: [
    "1452",
    "1521",
    "1252",
    "1512"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 17,
    question: "Kailan ang kaarawan ng ating pambansang bayani?",
    answer: "Hunyo 19",
    options: [
    "Hunyo 22",
    "Hunyo 26",
    "Hunyo 19",
    "Hunyo 24"
    
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 18,
    question: "Ilang taon sinakop ng mga espanyol ang Pilipinas?",
    answer: "333 taon",
    options: [
    "333 taon",
    "3 taon",
    "15 taon" ,
    "32 taon"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 19,
    question: "Petsa kung kailan naganap ang EDSA People Power Revolution." ,
    answer: "Pebrero 22, 1986 hanggang Pebrero 25, 1986",
    options: [
    "Hunyo 22 hanggang Hunyo 26",
    "Pebrero 22, 1986 hanggang Pebrero 25, 1986",
    "Hunyo 19, 1861 hanggang Disyembre 30, 1896",
    "Nobyembre 30, 1863"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 20,
    question: "Saan matatagpuan ang Barasoain Church?",
    answer: "Malolos, Bulacan",
    options: [
    "Karuhatan, Valenzuela",
    "Malolos, Bulacan",
    "Calamba, Laguna",
    "Tondo, Manila"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 21,
    question: "Kilalang pinakamayaman sa Binondo at naging gobernadorcillo sa komunidad ng mestiso (Galing sa nobela ni Dr. Jose Rizal na 'Noli Me Tangere')",
    answer: "Kapitan Tiyago",
    options: [
    "Crisostomo Ibarra",
    "Padre Damaso",
    "Kapitan Tiyago",
    "Padre Salvi"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 22,
    question: "Piloto at magsasakang tumulong kay Crisostomo Ibarra na ipaglaban ang bansa at mga suliranin nito",
    answer: "Elias",
    options: [
    "Maria Clara",
    "Crispin",
    "Elias",
    "Pilosopo Tasyo"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 23,
    question: "Sino ang ina ni Crispin at Basilio sa nobela?",
    Answer: "Sisa",
    options: [
    "Donya Victorina",
    "Sisa",
    "Pia Alba" ,
    "Donya Consolacion"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 24,
    question: "Mayuming kasintahan ni Crisostomo Ibarra",
    answer: "Maria Clara",
    options: [
    "Maria Clara",
    "Segunda Katigbak",
    "Pia Alba",
    "Sakura Haruno"
    
    
    
    ],
    difficulty: "hard"
    },
    {
    nnumb: 25,
    question: "Binatang nag-aral sa Europa; nangarap na magkapagpatayo ng paaralan upang matiyak ang magandang kinabukasan ng mga bata ng San Diego",
    answer: "Crisostomo Ibarra",
    options: [
    "Uchiha Sasuke",
    "Elias",
    "Andres Bonifacio",
    "Crisostomo Ibarra"
    
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 26,
    question: "Isang patakaran ng mga Espanyol sa Pilipinas kung saan sapilitang nagtatrabaho ng walang kabayaran ang mga kalalakihan",
    answer: "Polo y servicios",
    options: [
    "Abesedaryo",
    "Polo y servicio",
    "Ten Ciudado",
    "Despacito"
    
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 27,
    question: "Ano ang ibig sabihin ng 'Peninsulares' sa katayuan sa lipunan noong panahon ng Espanyol?",
    answer: "Espanyol na isinilang sa Spain",
    options: [
    "Espanyol na isinilang sa Pilipinas",
    "Espanyol na isinilang sa Spain",
    "Parehong Pilipino ang magulang",
    "Parehong kastila ang magulang, pero ipinanganak sa Pilipinas"
    
    
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 28,
    question: "Ano ang pamagat ng unang tulang isinulat ni Jose Rizal?",
    answer: "Sa aking mga kabata",
    options: [
    "Sa kabataang Pilipino",
    "Mi ultimo adios",
    "Ang huling paalam",
    "Sa aking mga kabata"
    
    
    
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 29,
    question: "Ano ang pangalan ng alagang aso ng ating pambansang bayani?",
    answer: "Usman",
    options: [
    "Alipato",
    "Usman",
    "Marshall",
    "Browny" 
    
    ],
    difficulty: "hard"
    },
    {
    numb: 30,
    question: "Sino ang pinakanatagal na pangulo ng Pilipinas?",
    answer: "Ferdinand Marcos ",
    options: [
    "Emilio Aguinaldo",
    "Ferdinand Marcos Jr." ,
    "Ferdinand Marcos",
    "Rodrigo Duterte"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 31,
    question: "Kilala sya sa kanyang husay sa gymnastics; nanalo ng gintong medalya sa 2024 Paris Olympics.",
    answer: "Carlos Yulo",
    options: [
    "Hidilyn Diaz",
    "Margielyn Didal",
    "Carlos Yulo",
    "EJ Obiena"
    

    ],
    difficulty: "hard"
    },
    
    {
    numb: 32,
    question: "Nag-iisang boksingero sa kasaysayan na nanalo ng labindalawang titulo sa mundo sa walong magkakaibang weight divisions.",
    answer: "Manny Pacquiao",
    options: [
    "Efren Reyes",
    "Rene Barrientos",
    "Rodolfo Diaz",
    "Manny Pacquiao"
    
    ],
    difficulty: "hard"
    },
    
    {
    numb: 33,
    question: "Kauna-unahang nanalo ng gintong medalya para sa Pilipinas sa Olympics noong 2021.",
    answer: "Hidilyn Diaz",
    options: [
    "Hidilyn Diaz",
    "Charice Pempengco",
    "Carlos Yulo",
    "EJ Obiena"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 34,
    question: "Anong taon naipalimbag ang nobela ni Rizal na 'El Filibusterismo'?",
    answer: "1891",
    options: [
    "1981",
    "1861",
    "1898",
    "1891"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 35,
    question: "Sino ang kaibigan ni Rizal na nagpahiram sakanya ng pera para mailathala at maipalimbag ang El Filibusterismo?",
    answer: "Valentin Ventura",
    options: [
    "Valentin Ventura",
    "Marcelo Del Pilar",
    "Maximo Viola",
    "Francisco Balagtas"
    
    
    ],
    difficulty: "hard"
    },
    {
    numb: 36,
    question: "Binatang nakapag-aral ng medisina dahil sa sariling sikap (Galing sa nobela ng pambansanv bayani na el filibusterismo)",
    answer: "Basilio",
    options: [
    "Crispin",
    "Isagani",
    "Simon",
    "Basilio"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 37,
    question: "Paring indiyo na amain ni Isagani",
    answer: "Padre Florentino",
    options: [
    "Padre Fernandez",
    "Padre Salvi",
    "Padre Florentino",
    "Padre Damaso"
    ]
    },
    {
    numb: 38,
    question: "Pamangkin ni Padre Florentino at katipan ni Paulita Gomez. ",
    answer: "Isagani",
    options: [
    "Ibarra",
    "Isagani",
    "Elias",
    "Sandoval"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 39,
    question: "Mayamang mag-aalahas, tagapayo ng Kapitan Heneral.",
    answer: "Simoun",
    options: [
    "Simoun",
    "Crisostomo",
    "Isagani",
    "Ibarra"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 40,
    question: "Kilala sa tawag na Buena Tinta.",
    answer: "Don Custodio",
    options: [
    "Simoun",
    "Juanito Pelaez",
    "Don Custodio",
    "Macaraig"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 41,
    question: "Siya ang hari ng Berbanya at asawa ni Reyna Valeria (Galing sa kwentong Ibong Adarna) ",
    answer: "Haring Fernando",
    options: [
    "Don Juan",
    "Don Diego",
    "Don Pedro",
    "Haring Fernando"
    ],
    difficulty: "hard"
    },
    {
    numb: 42,
    question: "Panganay sa tatlong prinsipe nina Haring Fernando at Reyna Valeria.",
    answer: "Don Pedro",
    options: [
    "Don Juan",
    "Don Diego",
    "Don Pedro",
    "Haring Fernando"
    ],
    difficulty: "hard"
    },
    {
    question: "Saan naninirahan ang ibong adarna?",
    answer: "Bundok Tabor",
    options: [
    "Bundok Tabor",
    "Bundok Armenya",
    "Berbanya",
    "Mahiwagang Balon"
    
    ],
    difficulty: "hard"
    },
    {
    numb: 44,
    question: "Anong nilalang ang nagbabantay kay Donya Leonora?",
    answer: "Serpyente",
    options: [
    "Lobo",
    "Higante",
    "Serpyente",
    "Agila"
    
    ],
    difficulty: "hard"
    },
    
    
];

let filteredQuestions = [];

let currentQuestionIndex = 0;

let timerInterval;

let score = 0;

let totalQuestions = 15;



function filterQuestionsByDifficulty(difficulty) {

filteredQuestions = questions.filter(question => question.difficulty === difficulty);



while (filteredQuestions.length < totalQuestions) {

let randomQuestion = questions[Math.floor(Math.random() * questions.length)];

if (!filteredQuestions.includes(randomQuestion)) {

filteredQuestions.push(randomQuestion);

}

}

}

function startTimer(duration, onTimeout) {
    const timerElement = document.getElementById('timer');
    let timeLeft = duration;
  
    timerElement.textContent = `Time left: ${timeLeft}s`;
  
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time left: ${timeLeft}s`;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
        onTimeout(); // move to next question automatically
      }
    }, 1000);
  }
  

function showQuestion(index) {

const questionElement = document.getElementById('question');

const optionsElement = document.getElementById('options');

const nextButton = document.getElementById('nextButton');

const questionNumberElement = document.getElementById('questionNumber');



questionNumberElement.textContent = `Question ${index + 1} / ${totalQuestions}`;

questionElement.textContent = filteredQuestions[index].question;

optionsElement.innerHTML = '';

nextButton.classList.add('hidden');



clearInterval(timerInterval);



filteredQuestions[index].options.forEach(option => {

const button = document.createElement('button');

button.textContent = option;

button.classList.add('option-button');

button.addEventListener('click', () => {

const allButtons = document.querySelectorAll('.option-button');

allButtons.forEach(btn => btn.disabled = true);



if (option === filteredQuestions[index].answer) {

button.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';

button.style.color = 'white';

button.style.fontWeight = 'bold';

score++;

} else {

button.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';

allButtons.forEach(btn => {

if (btn.textContent === filteredQuestions[index].answer) {

btn.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';

btn.style.color = 'white';

btn.style.fontWeight = 'bold';

}

});

}

clearInterval(timerInterval);

nextButton.classList.remove('hidden');

});

optionsElement.appendChild(button);

});



startTimer(15, () => {

nextQuestion();

});

}



function nextQuestion() {

currentQuestionIndex++;

if (currentQuestionIndex < totalQuestions) {

showQuestion(currentQuestionIndex);

} else {

displayScore();

}

}



function displayScore() {

const questionnaire = document.getElementById('questionnaire');

const container = document.querySelector('.container');



questionnaire.classList.add('hidden');



const scoreDisplay = document.createElement('div');

scoreDisplay.classList.add('score-display');

scoreDisplay.innerHTML = `

<h2>Ang Husay mo Kapatid!</h2>

<p>Score: ${score} / ${totalQuestions}</p>

<button id="restartButton" class="restart-button">Restart</button>

`;



container.appendChild(scoreDisplay);



document.getElementById('restartButton').addEventListener('click', () => {

location.reload();

});

}



document.getElementById('nextButton').addEventListener('click', function () {

nextQuestion();

});



// Ensure restart functionality works correctly

document.getElementById('restartButton')?.addEventListener('click', () => {

resetGame();

});


