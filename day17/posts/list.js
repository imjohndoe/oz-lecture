// list.js (포스트 목록 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 목록 표시
async function displayPosts() {
  // 포스트 데이터 가져오기
  try {
    const response = await fetch(`${apiUrl}/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    const posts = await response.json();

    const postList = document.getElementById("post-list");
    postList.innerHTML = ""; // 기존 목록 초기화\

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      li.dataset.postId = post.id;
      // 포스트 클릭 시 상세 페이지로 이동
      li.addEventListener("click", () => {
        window.location.href = `detail.html?postId=${post.id}`;
      });
      postList.appendChild(li);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// 페이지 로드 시 포스트 목록 표시
displayPosts();

async function displayPostDetail() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided");

    const cacheKey = `post_${postId}`;
    const cached = localStorage.getItem(cacheKey);
    let post;

    if (cached) {
      const cachedObj = JSON.parse(cached);
      const now = Date.now();
      const cacheTime = cachedObj.timestamp;

      if (now - cacheTime < 5 * 60 * 1000) {
        // 캐시 유효 (5분 이내)
        post = cachedObj.data;
        console.log("Post loaded from localStorage");
      } else {
        // 캐시 만료
        post = await fetchPost(postId, cacheKey);
      }
    } else {
      // 캐시 없음
      post = await fetchPost(postId, cacheKey);
    }

    renderPost(post);
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML =
      "<p>Error loading post details</p>";
  }
}

// API에서 포스트를 가져오고 캐시에 저장하는 함수
async function fetchPost(postId, cacheKey) {
  const response = await fetch(`${apiUrl}/posts/${postId}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();

  localStorage.setItem(
    cacheKey,
    JSON.stringify({
      data: data,
      timestamp: Date.now()
    })
  );

  console.log("Post fetched from API");
  return data;
}
