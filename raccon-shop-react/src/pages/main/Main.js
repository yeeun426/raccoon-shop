import React from "react";
import Header from "../../component/common/Header";

export default function Main() {
  return (
    <div>
      <Header />
      <main>
        <img class="main-img" src="img/main.jpg" alt="main" />
        <section>
          <div class="container">
            <p class="title">요즘 주목 받는 상품</p>
            <div class="today-list">
              <div class="today-item">
                <img src="img/fish1.jpeg" alt="fish" />
                <div class="item-name">데메니기스</div>
                <div class="item-date">
                  <span>1월</span>
                  <span>2월</span>
                  <span>3월</span>
                  <span>4월</span>
                  <span>5월</span>
                </div>
                <div class="item-price">1,800벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish2.jpeg" alt="fish" />
                <div class="item-name">청새치</div>
                <div class="item-date">
                  <span>11월</span>
                  <span>12월</span>
                </div>
                <div class="item-price">800벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish3.jpeg" alt="fish" />
                <div class="item-name">무명갈전갱이</div>
                <div class="item-date">
                  <span>8월</span>
                  <span>9월</span>
                  <span>12월</span>
                </div>
                <div class="item-price">10,000벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish1.jpeg" alt="fish" />
                <div class="item-name">데메니기스</div>
                <div class="item-date">
                  <span>7월</span>
                  <span>8월</span>
                  <span>10월</span>
                  <span>11월</span>
                </div>
                <div class="item-price">1,800벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish1.jpeg" alt="fish" />
                <div class="item-name">데메니기스</div>
                <div class="item-date">
                  <span>1월</span>
                  <span>2월</span>
                  <span>3월</span>
                  <span>4월</span>
                  <span>5월</span>
                </div>
                <div class="item-price">1,800벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish1.jpeg" alt="fish" />
                <div class="item-name">데메니기스</div>
                <div class="item-date">
                  <span>1월</span>
                  <span>2월</span>
                  <span>3월</span>
                  <span>4월</span>
                  <span>5월</span>
                </div>
                <div class="item-price">1,800벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish1.jpeg" alt="fish" />
                <div class="item-name">데메니기스</div>
                <div class="item-date">
                  <span>1월</span>
                </div>
                <div class="item-price">1,800벨</div>
              </div>
              <div class="today-item">
                <img src="img/fish1.jpeg" alt="fish" />
                <div class="item-name">데메니기스</div>
                <div class="item-date">
                  <span>1월</span>
                  <span>2월</span>
                  <span>5월</span>
                </div>
                <div class="item-price">300벨</div>
              </div>
            </div>
          </div>
          <div class="container">
            <p class="title">Weekly Special</p>
            <div class="special-list">
              <img class="special-img" src="img/event1.jpg" alt="" />
              <img class="special-img" src="img/event2.jpeg" alt="" />
            </div>
          </div>
          <div class="emoji-wrapper">
            <span class="emoji">&#128514;</span>
            <p id="joke"></p>
            <button id="btn">Generate Joke</button>
          </div>
        </section>
      </main>
      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  );
}
