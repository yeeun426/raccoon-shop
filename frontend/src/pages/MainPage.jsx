import css from './mainPage.module.css'

const MainPage = () => {
  return (
    <main>
      <div className={css.mainImg}>
        <img src="img/main.png" alt="main" />
      </div>
      <section>
        <div className={css.mainCon}>
          <h2>요즘 주목 받는 상품</h2>
          <div className={css.todayList}>
            <div className={css.todayItem}>
              <img src="img/fish1.jpeg" alt="fish" />
              <p>데메니기스</p>
              <div className={css.itemDate}>
                <span>1월</span>
                <span>2월</span>
                <span>3월</span>
                <span>4월</span>
                <span>5월</span>
              </div>
              <div className={css.itemPrice}>1,800벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish2.jpeg" alt="fish" />
              <p>청새치</p>
              <div className={css.itemDate}>
                <span>11월</span>
                <span>12월</span>
              </div>
              <div className={css.itemPrice}>800벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish3.jpeg" alt="fish" />
              <p>무명갈전갱이</p>
              <div className={css.itemDate}>
                <span>8월</span>
                <span>9월</span>
                <span>12월</span>
              </div>
              <div className={css.itemPrice}>10,000벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish1.jpeg" alt="fish" />
              <p>데메니기스</p>
              <div className={css.itemDate}>
                <span>7월</span>
                <span>8월</span>
                <span>10월</span>
                <span>11월</span>
              </div>
              <div className={css.itemPrice}>1,800벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish1.jpeg" alt="fish" />
              <p>데메니기스</p>
              <div className={css.itemDate}>
                <span>1월</span>
                <span>2월</span>
                <span>3월</span>
                <span>4월</span>
                <span>5월</span>
              </div>
              <div className={css.itemPrice}>1,800벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish1.jpeg" alt="fish" />
              <p>데메니기스</p>
              <div className={css.itemDate}>
                <span>1월</span>
                <span>2월</span>
                <span>3월</span>
                <span>4월</span>
                <span>5월</span>
              </div>
              <div className={css.itemPrice}>1,800벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish1.jpeg" alt="fish" />
              <p>데메니기스</p>
              <div className={css.itemDate}>
                <span>1월</span>
              </div>
              <div className={css.itemPrice}>1,800벨</div>
            </div>
            <div className={css.todayItem}>
              <img src="img/fish1.jpeg" alt="fish" />
              <p>데메니기스</p>
              <div className={css.itemDate}>
                <span>1월</span>
                <span>2월</span>
                <span>5월</span>
              </div>
              <div className={css.itemPrice}>300벨</div>
            </div>
          </div>
        </div>
        <div className={css.weeklyCon}>
          <h2>Weekly Special</h2>
          <div>
            <img src="img/event1.jpg" alt="" />
            <img src="img/event2.jpeg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage
