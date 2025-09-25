import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trung Tâm Dạy Lái Xe Trí Bộ</title>
        <meta name="description" content="Dạy lái xe ô tô các hạng B1, B2, C tại TPHCM. Đăng ký học ngay!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="header">
        <div className="container">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1>Trung Tâm Dạy Lái Xe Trí Bộ</h1>
          <nav>
            <a href="#gioithieu">Giới thiệu</a>
            <a href="#dichvu">Dịch vụ</a>
            <a href="#dangky">Đăng ký</a>
            <a href="#lienhe">Liên hệ</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="banner">
          <img src="/banner.jpg" alt="Banner" />
          <div className="slogan">
            <h2>Học Lái Xe Ô Tô Nhanh Chóng - Uy Tín - Chất Lượng</h2>
            <p>Đăng ký học thử miễn phí, hỗ trợ tận tâm!</p>
          </div>
        </section>
        <section id="gioithieu" className="intro">
          <h2>Giới thiệu</h2>
          <p>
            Trung tâm Dạy Lái Xe Trí Bộ tự hào với hơn 10 năm kinh nghiệm đào tạo lái xe các hạng B1, B2, C tại TP.HCM. Đội ngũ giáo viên tận tâm, phương tiện đời mới, hỗ trợ học viên tối đa.
          </p>
        </section>
        <section id="dichvu" className="services">
          <h2>Dịch vụ đào tạo</h2>
          <div className="service-list">
            <div className="service-card">
              <h3>Hạng B1</h3>
              <p>Không hành nghề lái xe, số tự động.</p>
            </div>
            <div className="service-card">
              <h3>Hạng B2</h3>
              <p>Lái xe số sàn, hành nghề lái ô tô dưới 9 chỗ.</p>
            </div>
            <div className="service-card">
              <h3>Hạng C</h3>
              <p>Lái xe tải, xe chuyên dùng trên 3.5 tấn.</p>
            </div>
          </div>
        </section>
        <section className="benefit">
          <h2>Lợi ích khi học tại Trí Bộ</h2>
          <ul>
            <li>Đảm bảo tỉ lệ đậu cao, hỗ trợ thi lại miễn phí</li>
            <li>Lịch học linh hoạt, chủ động</li>
            <li>Không phát sinh chi phí ngoài</li>
            <li>Hỗ trợ trả góp học phí</li>
          </ul>
        </section>
        <section className="process">
          <h2>Quy trình đăng ký & học</h2>
          <ol>
            <li>Đăng ký tư vấn</li>
            <li>Chuẩn bị hồ sơ</li>
            <li>Học lý thuyết & thực hành</li>
            <li>Thi sát hạch</li>
            <li>Nhận bằng lái</li>
          </ol>
        </section>
        <section id="dangky" className="register">
          <h2>Đăng ký tư vấn</h2>
          <form>
            <input type="text" placeholder="Họ tên" required />
            <input type="tel" placeholder="Số điện thoại" required />
            <input type="email" placeholder="Email (nếu có)" />
            <select>
              <option>Chọn hạng xe</option>
              <option>B1</option>
              <option>B2</option>
              <option>C</option>
            </select>
            <button type="submit">Gửi đăng ký</button>
          </form>
        </section>
        <section id="lienhe" className="contact">
          <h2>Liên hệ</h2>
          <p>Địa chỉ: 123 Đường Lái Xe, Quận 1, TP.HCM</p>
          <p>Điện thoại: 0981 234 567</p>
          <p>Email: trungtamtribo@gmail.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.50257858337!2d106.70042311480055!3d10.773374492323212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b066b6847%3A0x2a5c6f0b2dfb8b1d!2zMTIzIMSQxrDhu51uZyBMw6BpIFhl!5e0!3m2!1svi!2s!4v1632985738193!5m2!1svi!2s"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <footer>
        <p>© 2025 Trung Tâm Dạy Lái Xe Trí Bộ - All rights reserved.</p>
      </footer>
      <style jsx>{`
        body { margin: 0; font-family: Arial, sans-serif; }
        .header { background: #fff; border-bottom: 1px solid #eee; }
        .header .container { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; }
        .logo { width: 60px; }
        nav a { margin: 0 10px; color: #1976d2; text-decoration: none; font-weight: bold; }
        .banner { position: relative; }
        .banner img { width: 100%; height: 320px; object-fit: cover; }
        .slogan { position: absolute; top: 30%; left: 10%; color: #fff; background: rgba(25, 118, 210, 0.7); padding: 20px; border-radius: 8px;}
        .service-list { display: flex; gap: 20px; }
        .service-card { background: #f7f7f7; padding: 16px; border-radius: 8px; flex: 1; }
        section { max-width: 900px; margin: 32px auto; padding: 0 20px; }
        .intro, .benefit, .process { background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #eee; padding: 24px; }
        .register form { display: flex; flex-wrap: wrap; gap: 10px; background: #fafafa; padding: 20px; border-radius: 8px;}
        .register input, .register select { flex: 1 1 200px; padding: 8px; border: 1px solid #ddd; border-radius: 4px;}
        .register button { background: #1976d2; color: #fff; border: none; padding: 10px 24px; border-radius: 4px; cursor: pointer; }
        footer { background: #1976d2; color: #fff; text-align: center; padding: 16px 0; margin-top: 40px;}
        @media (max-width: 768px) {
          .service-list { flex-direction: column; }
          .banner img { height: 180px; }
          .slogan { position: static; margin-top: -40px; }
        }
      `}</style>
    </>
  );
}
