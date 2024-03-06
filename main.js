const ctx = document.getElementById('myChart');
let currChart;
let currQuestion;
let currData;
let currentLabelCount = [];
let currentLabel = ["1","2","3","4","5"];
let graphTitle = document.querySelector("#graphTitle")



let questionList = document.querySelector("#question-list-input");

questionList.addEventListener("change",(v)=>{
    if(currChart){
        currChart.destroy();
    }

    currQuestion = questionList.options[questionList.selectedIndex]
    graphTitle.innerText = currQuestion.text.toUpperCase();

    d3.csv("./data.csv").then(myChart)


})



function calculateQuestions (data,Qdata){

    currentLabel = ["1","2","3","4","5"];
    currentLabelCount = [0,0,0,0,0];
    currData = data.map(d=>{
        if(d[Qdata] === "1"){
            currentLabelCount[0] = currentLabelCount[0] + 1;
        }
        else if(d[Qdata] === "2"){
            currentLabelCount[1] = currentLabelCount[1] + 1;
        }
        else if(d[Qdata] === "3"){
            currentLabelCount[2] = currentLabelCount[2] + 1;
        }
        else if(d[Qdata] === "4"){
            currentLabelCount[3] = currentLabelCount[3] + 1;
        }
        else if(d[Qdata] === "5"){
            currentLabelCount[4] = currentLabelCount[4] + 1;
        }

    })



}

function calculateQuestionsWords (data,Qdata){


    currentLabel = ["None","I don't know","Others"]
    currentLabelCount = [0,0,0]
    currData = data.map(d=>{

        if(d[Qdata] === "no" || d[Qdata] === "No" || d[Qdata] === "None"){
            currentLabelCount[0] = currentLabelCount[0] +1;
        }
        else if(d[Qdata] === "I don’t know" || d[Qdata] === "I donâ€™t know" || d[Qdata] === "i don’t know"){
            currentLabelCount[1] = currentLabelCount[1] +1;
        }
        else {
            currentLabelCount[2] = currentLabelCount[2] +1;
        }

    })
    console.log(currentLabelCount)



}


function myChart (data){
    console.log("tst")
    switch (currQuestion.value.toUpperCase()){
        case "Q3":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q4":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q5":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q10":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q11":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q12":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;

        case "Q13":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q38":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q43":
            calculateQuestions(data,currQuestion.value.toUpperCase())
            break;
        case "Q6":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q7":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q8":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q9":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q18":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q20":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q21":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q27":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q28":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q29":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q36":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;
        case "Q48":
            calculateQuestionsWords(data,currQuestion.value.toUpperCase())
            break;

    }

     currChart = new Chart('myChart', {
        type: "horizontalBar",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        },
        data: {
            labels: currentLabel,
            datasets: [
                {
                    data: currentLabelCount,
                    backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)',
                        'rgba(168,255,86,0.5)','rgba(199,86,255,0.5)']
,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                }
            ]
        }
    });

    currQuestion.text.toUpperCase()


}

currChart = new Chart('myChart', {
    type: "horizontalBar",
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    },
    data: {
        labels: ["A","B","C","D","E"],
        datasets: [
            {

                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        ]
    }
});

let doughnutData = {
    labels: ['Latino', 'Asian', 'Black', 'White', 'Prefer not to answer'],
    datasets: [{
        data: [381.261, 10.02, 27.054, 58.116, 10.02],
        backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)']
    }]
};

let pieData = {
    labels: ['Spanish', 'English'],
    datasets: [{
        data: [348.5, 152.5],
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)']
    }]
};
let ctx3 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx3, { type: 'pie', data: pieData });
let ctx4 = document.getElementById('doughnutChart').getContext('2d');
new Chart(ctx4, { type: 'doughnut', data: doughnutData });



let data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [{
        label: 'Sample Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',     // Border color
        borderWidth: 1,
        data: [10, 20, 15, 25]  // Actual data values
    }]
};

// Configuration options for the chart
let options1 = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Get the canvas element
let ctx1 = document.getElementById('myBarChart').getContext('2d');

// Create the bar chart
let myBarChart = new Chart(ctx1, {
    type: 'bar',
    data: data,
    options: options1
});
