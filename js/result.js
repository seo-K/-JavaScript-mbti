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

  const ResultDetailData = _result.results;
  ResultDetailData.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    resultDetail.appendChild(li);
  });

  const ResultJobs = _result.jobs;
  ResultJobs.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    resultJob.appendChild(li);
  });

  // data.forEach((item) => {
  //   let li = document.createElement("li");
  //   li.innerText = item;
  //   resultJob.appendChild(li);
  // });

  resultRecommend.href = _result.lectureUrl;
  resultRecommendImg.src = _result.lectureImg;
}

getResult();
