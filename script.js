// const { createElement } = require("react");

let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let Interview = document.getElementById('Interview');
let Rejected = document.getElementById('Rejected');

// button
const all = document.getElementById('all-btn');
const inter = document.getElementById('inter-btn');
const reject = document.getElementById('reject-btn');

function togolStyle(id) {
    const button = document.getElementById(id);
    all.classList.remove('bg-[#60a3bc]', 'text-white');
    inter.classList.remove('bg-[#60a3bc]', 'text-white');
    reject.classList.remove('bg-[#60a3bc]', 'text-white');

    // ADD COLOR BUTTON 
    button.classList.add('bg-[#60a3bc]', 'text-white');
}
const allCardSection = document.getElementById('allCards');
// calculate machine
function calculator() {
    total.innerText = allCardSection.children.length;
    Interview.innerText = interviewList.length;
    Rejected.innerText = rejectedList.length;
}
calculator();

const totals = calculator(total);
console.log(totals);

// interview button section 

const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('mobile-interview'))
    if (event.target.classList.contains('mobile-interview')) {
        const parenNode = event.target.parentNode.parentNode;

        const mobileFirst = parenNode.querySelector('.mobileFirst').innerText;
        const reactnative = parenNode.querySelector('.reactnative').innerText;
        const remotSalary = parenNode.querySelector('.remotSalary').innerText;
        const notApply = parenNode.querySelector('.notApply-btn').innerText;
        const notes = parenNode.querySelector('.notes').innerText;
        const cardInfo = {
            mobileFirst,
            reactnative,
            remotSalary,
            notApply,
            notes
        }
        const mobileFirstExit = interviewList.find(item => item.mobileFirst == cardInfo.mobileFirst);
        parenNode.querySelector('.notApply-btn').innerText = 'Applyed'
        if (!mobileFirstExit) {
            interviewList.push(cardInfo);
        }
        renderInterview()
    }
})
const filteredSection = document.getElementById('filtered-section');
function renderInterview() {
    filteredSection.innerHTML = '';
    for (let intervie of interviewList) {
        console.log(intervie);
        let div = document.createElement('div');
        div.className = 'bg-base-200 shadow-sm p-8'
        div.innerHTML = `
         <div class="flex justify-between">
                    <div>
                        <h1 class="mobileFirst font-bold text-lg text-[#002c5cFF]">Mobile First Corp</h1>
                        <p class="reactnative mt-2 text-gray-500">React Native Developer</p>
                    </div>
                    <div>
                        <i class="icon fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <p class="remotSalary text-gray-500 mt-4">Remot. Full-Time. $130,000 - $175,000</p>
                <p class="notApply-btn bg-[#86c8f8] inline-block p-2 text-blue-50 mt-4 font-medium">NOT APPLIED</p>
                <P class="notes mt-3 text-gray-600">Build cross-platform mobile applications using React Native. Work on
                    products
                    used by millions of users
                    worldwide.</P>
                <div class="mt-5 space-x-4">
                    <button
                        class="mobile-interview btn btn-outline border-green-300 text-[#20bf6b] hover:bg-[#20bf6b] hover:text-[#e7edf2]">INTERVIEW</button>
                    <button
                        class="mobile-rejected btn btn-outline border-red-400 text-[#ff3f34] hover:bg-[#f53b57] hover:text-[#e7edf2]">REJECTED</button>
                </div>`
        filteredSection.appendChild(div);
    }
}

