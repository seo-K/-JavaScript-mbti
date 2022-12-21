import { results, mbtiList } from "./data.js";

// function showResult() {
//   location.href = "/results.html?mbti=" + mbti; // 쿼리스트링 (기존 url에 값 전달)
// }

const mbti = new URLSearchParams(location.search).get("mbti");
const _result = results[mbtiList[mbti]];

console.log(_result);

// RESULTS PAGE
const resultTitle = document.querySelector(".results-page .title");
const resultImg = document.querySelector(".results-page .character-wrap img");
const resultDetail = document.querySelector(".result-detail-wrap");
const resultJob = document.querySelectorAll(".job-list-wrap")[0];
const resultRecommend = document.querySelector(".recommend-link-wrap a");
const resultRecommendImg = document.querySelector(".recommend-link-wrap img");

function getResult() {
  resultTitle.innerHTML = _result.title;
  resultImg.src = _result.character;
  // resultDetail.innerHTML = _result.results;

  const data = _result.results;
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    resultDetail.appendChild(li);
  });

  // let newJobList = resultJob.createElement("li");
  // newDiv.appendChild(newJobList);
  // newJobList.innerHTML = _result.jobs[0];

  // for (let i = 0; i < 3; ++i) {
  //   const li = document.createElement("li");
  //   newJobList.innerHTML = `${_result.jobs}`;
  // }

  // resultJob.appendChild(li);

  // _result.jobs.map((item, index) => )

  // const data = _result.jobs;

  // data.forEach((row) =>
  //   resultJob.appendChild(
  //     row.reduce((li, n) => {
  //       li.appendChild(el("span")).innerHTML = n;
  //       return li;
  //     }, el("li"))
  //   )
  // );

  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    resultJob.appendChild(li);
  });

  resultJob.innerHTML = _result.jobs;
  resultRecommend.href = _result.lectureUrl;
  resultRecommendImg.src = _result.lectureImg;
}

getResult();
// const _result = ["0.jpg", "1.png", "2.png"];

// const chosenImage = _result[Math.floor(Math.random() * _result.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

// const data = [[1,2,3],[4,5,6],[7,8,9]];
// let table = document.querySelector('table')
// data.forEach(row => table.appendChild(
//   row.reduce((tr, n)=>{
//     tr.appendChild(el('td')).innerHTML=n
//     return tr
//   }, el('tr'))
// ))
