// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById("taskCount");
const prioritySelect = document.getElementById("priority");
const todocount = document.getElementById("number0");

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();
  const selectedPriority = prioritySelect.value;

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  console.log(taskText);
  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  console.log(selectedPriority);

  if (selectedPriority === "high") {
    li.style.color = "red";
  }

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";

  // 삭제 버튼 이벤트 리스너
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // 완료 상태 토글 이벤트 리스너
  const completedButton = document.createElement("button");
  completedButton.textContent = "완료";
  completedButton.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 요소 조립
  li.appendChild(span);
  taskList.appendChild(li);
  li.appendChild(completedButton);
  li.appendChild(deleteButton);

  // 입력창 초기화
  taskInput.value = "";
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
  // 전체 삭제 버튼 클릭 이벤트 적용
  alert("전체 삭제 완료");
}
clearButton.addEventListener("click", clearAllTasks);

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

//입력 갯수에 따라 할일 갯수 변화

function updateTaskCount() {
  const count = document.querySelectorAll("li.task-item").length;
  taskCount.textContent = `현재 할 일: ${count}개`;
}