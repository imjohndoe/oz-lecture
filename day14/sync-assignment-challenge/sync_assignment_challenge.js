// 변수 선언 예제
var postContainer = document.getElementById("output");
let fetchButton = document.getElementById("fetchPosts");
const inputField = document.getElementById("postIds");

// 화살표 함수 + ...rest
const fetchMultiplePosts = async (...ids) => {
    let results = {};
    for (let id of ids) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            let data = await response.json();
            results[`post${id}`] = data.title;
        } catch (err) {
            results[`post${id}`] = `에러: ${err.message}`;
        }
    }
    return results;
};

// 함수 표현식
const runChallenge = function() {
    let rawInput = inputField.value;
    let idList = rawInput.split(",").map(s => s.trim()).filter(s => s !== "");

    // 유효 숫자 필터링
    let validIds = [];
    for (let id of idList) {
        let num = Number(id);
        if (!isNaN(num) && num >=1 && num <=100) {
            validIds.push(num);
        }
    }

    // 출력 영역 초기화
    postContainer.innerHTML = "";
    postContainer.classList.remove("error");

    // 유효하지 않으면 에러 표시
    if (validIds.length === 0) {
        postContainer.innerHTML = '<div class="post">유효한 ID(1-100)를 입력하세요!</div>';
        postContainer.classList.add("error");
        return;
    }

    // 버튼 비활성화
    fetchButton.disabled = true;

    // fetch 호출
    fetchMultiplePosts(...validIds).then(results => {
        // 결과 렌더링
        for (let key in results) {
            let div = `<div class="post">${key}: ${results[key]}</div>`;
            postContainer.innerHTML += div;
        }
    }).catch(err => {
        postContainer.innerHTML = `<div class="post error">에러: ${err.message}</div>`;
        postContainer.classList.add("error");
    }).finally(() => {
        fetchButton.disabled = false;
    });
};

// 버튼 클릭 이벤트 등록
fetchButton.addEventListener("click", runChallenge);

