import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trung Tâm Dạy Lái Xe Trí Bộ</title>
        <meta name="description" content="Dạy lái xe ô tô các hạng B1, B2, C tại TPHCM. Đăng ký học ngay!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
      </Head>
      <header className="header">
        <div className="container">
          <img src="/logo.png" alt="Logo" className="logo" />
          <nav>
            <a href="#gioithieu">Giới thiệu</a>
            <a href="#dichvu">Dịch vụ</a>
            <a href="#banggia">Bảng giá</a>
            <a href="#dangky">Đăng ký</a>
            <a href="#lienhe">Liên hệ</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="banner">
          <img src="/banner.jpg" alt="Banner" />
          <div className="banner-content">
            <h1>TRUNG TÂM DẠY LÁI XE TRÍ BỘ</h1>
            <p>Dạy lái xe các hạng B1, B2, C chuyên nghiệp tại TPHCM</p>
            <a href="#dangky" className="banner-btn">Đăng ký ngay</a>
          </div>
        </section>

        <section id="gioithieu" className="intro section">
          <div className="container">
            <h2>Về chúng tôi</h2>
            <p>
              Trung tâm Dạy Lái Xe Trí Bộ là đơn vị uy tín với hơn 10 năm kinh nghiệm đào tạo lái xe các hạng B1, B2, C tại TP.HCM. Đội ngũ giáo viên tận tâm, xe đời mới, cam kết tỷ lệ đậu cao.
            </p>
          </div>
        </section>

        <section id="dichvu" className="services section">
          <div className="container">
            <h2>Dịch vụ đào tạo</h2>
            <div className="service-list">
              <div className="service-card">
                <img src="/b1.png" alt="B1" />
                <h3>Hạng B1</h3>
                <p>Lái xe số tự động, không hành nghề.</p>
              </div>
              <div className="service-card">
                <img src="/b2.png" alt="B2" />
                <h3>Hạng B2</h3>
                <p>Lái xe số sàn, hành nghề lái xe dưới 9 chỗ.</p>
              </div>
              <div className="service-card">
                <img src="/c.png" alt="C" />
                <h3>Hạng C</h3>
                <p>Lái xe tải, xe chuyên dùng trên 3.5 tấn.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="banggia" className="pricing section">
          <div className="container">
            <h2>Bảng giá học lái xe</h2>
            <div className="pricing-list">
              <div className="pricing-card">
                <h4>B1</h4>
                <p className="price">12.000.000đ</p>
                <ul>
                  <li>Xe số tự động</li>
                  <li>Học 1 kèm 1</li>
                  <li>Miễn phí tài liệu</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>B2</h4>
                <p className="price">11.500.000đ</p>
                <ul>
                  <li>Xe số sàn</li>
                  <li>Hỗ trợ lịch học linh hoạt</li>
                  <li>Miễn phí lệ phí thi</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>C</h4>
                <p className="price">13.500.000đ</p>
                <ul>
                  <li>Xe tải trên 3.5 tấn</li>
                  <li>Trợ giảng tận tâm</li>
                  <li>Thi thử miễn phí</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits section">
          <div className="container">
            <h2>Lợi ích khi học tại Trí Bộ</h2>
            <div className="benefit-list">
              <div className="benefit-item">Đảm bảo tỷ lệ đậu cao</div>
              <div className="benefit-item">Hỗ trợ thi lại miễn phí</div>
              <div className="benefit-item">Học phí trọn gói, không phát sinh</div>
              <div className="benefit-item">Giáo viên nhiệt tình, xe mới</div>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="container">
            <h2>Quy trình đăng ký & học</h2>
            <div className="process-list">
              <div className="process-step">1. Đăng ký tư vấn</div>
              <div className="process-step">2. Chuẩn bị hồ sơ</div>
              <div className="process-step">3. Học lý thuyết & thực hành</div>
              <div className="process-step">4. Thi sát hạch</div>
              <div className="process-step">5. Nhận bằng</div>
            </div>
          </div>
        </section>

        <section id="dangky" className="register section">
          <div className="container register-container">
            <div className="register-form">
              <h2>Đăng ký tư vấn</h2>
              <form>
                <input type="text" placeholder="Họ tên" required />
                <input type="tel" placeholder="Số điện thoại" required />
                <input type="email" placeholder="Email (nếu có)" />
                <select required>
                  <option value="">Chọn hạng xe</option>
                  <option value="B1">Hạng B1</option>
                  <option value="B2">Hạng B2</option>
                  <option value="C">Hạng C</option>
                </select>
                <button type="submit">Gửi đăng ký</button>
              </form>
            </div>
            <div className="register-img">
              <img src="/register.jpg" alt="Đăng ký học lái xe" />
            </div>
          </div>
        </section>

        <section id="lienhe" className="contact section">
          <div className="container">
            <h2>Liên hệ</h2>
            <div className="contact-info">
              <div>
                <strong>Địa chỉ:</strong> 123 Đường Lái Xe, Quận 1, TP.HCM
              </div>
              <div>
                <strong>Điện thoại:</strong> 0981 234 567
              </div>
              <div>
                <strong>Email:</strong> trungtamtribo@gmail.com
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.50257858337!2d106.70042311480055!3d10.773374492323212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b066b6847%3A0x2a5c6f0b2dfb8b1d!2zMTIzIMSQxrDhu51uZyBMw6BpIFhl!5e0!3m2!1svi!2s!4v1632985738193!5m2!1svi!2s"
              width="100%"
              height="230"
              style={{ border: 0, borderRadius: '8px', marginTop: '15px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div>© 2025 Trung Tâm Dạy Lái Xe Trí Bộ</div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">Zalo</a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        :global(body) { font-family: 'Roboto', Arial, sans-serif; background: #f4f8fb; }
        .header { background: #1976d2; position: sticky; top: 0; z-index: 999; }
        .header .container { display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; }
        .logo { width: 58px; border-radius: 50%; }
        nav a { color: #fff; text-decoration: none; margin-left: 24px; font-size: 1.08rem; font-weight: 500; }
        nav a:hover { text-decoration: underline; }
        .banner { position: relative; height: 340px; }
        .banner img { width: 100%; height: 340px; object-fit: cover; filter: brightness(0.7); }
        .banner-content {
          position: absolute; left: 0; top: 0; width: 100%; height: 100%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          color: #fff; text-shadow: 1px 2px 8px rgba(0,0,0,0.7);
        }
        .banner-content h1 { font-size: 2.3rem; font-weight: 700; margin-bottom: 8px;}
        .banner-content p { font-size: 1.2rem; margin-bottom: 18px;}
        .banner-btn {
          background: #ffc107; color: #1976d2; padding: 12px 32px; border-radius: 30px;
          font-size: 1.1rem; font-weight: bold; box-shadow: 0 2px 12px #0002; text-decoration: none;
          transition: background 0.2s;
        }
        .banner-btn:hover { background: #fff; color: #1976d2; }
        .section { padding: 48px 0 36px 0; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        h2 { color: #1976d2; font-size: 2rem; margin-bottom: 24px; font-weight: 700;}
        .service-list { display: flex; gap: 24px; justify-content: center; }
        .service-card { background: #fff; border-radius: 10px; box-shadow: 0 2px 12px #0001; padding: 28px 20px; text-align: center; flex: 1; }
        .service-card img { width: 54px; margin-bottom: 10px;}
        .pricing-list { display: flex; gap: 24px; }
        .pricing-card {
          background: linear-gradient(120deg,#1976d2 70%,#fff 100%);
          color: #fff; border-radius: 12px; box-shadow: 0 2px 14px #0001;
          flex:1; padding: 28px 18px; text-align: center;
        }
        .pricing-card h4 { font-size: 1.3rem; margin-bottom: 8px; letter-spacing: 1px;}
        .price { font-size: 2rem; font-weight: 700; margin: 8px 0 18px 0;}
        .pricing-card ul { list-style: none; padding: 0; color: #e3f2fd; }
        .pricing-card ul li { margin-bottom: 7px; }
        .benefit-list { display: flex; gap: 18px; flex-wrap: wrap; justify-content: center;}
        .benefit-item { background: #e3f2fd; border-left: 5px solid #1976d2; border-radius: 7px; padding: 14px 20px; min-width: 200px; margin-bottom: 10px; }
        .process-list { display: flex; gap: 18px; flex-wrap: wrap; justify-content: center;}
        .process-step { background: #fff; border: 1.5px dashed #1976d2; border-radius: 7px; padding: 14px 18px; min-width: 170px; margin-bottom: 10px; }
        .register-container { display: flex; gap: 36px; flex-wrap: wrap; align-items: center; justify-content: center; }
        .register-form { background: #fff; border-radius: 14px; box-shadow: 0 2px 18px #0001; padding: 30px 26px; min-width: 330px; }
        .register-form h2 { margin-bottom: 16px;}
        .register-form form { display: flex; flex-direction: column; gap: 12px;}
        .register-form input, .register-form select {
          padding: 10px 12px; border: 1px solid #bbb; border-radius: 5px; font-size: 1rem;
        }
        .register-form button {
          background: #1976d2; color: #fff; padding: 12px; border: none; border-radius: 5px;
          font-size: 1.1rem; font-weight: bold; transition: background 0.2s; cursor:pointer;
        }
        .register-form button:hover { background: #1565c0;}
        .register-img img { width: 300px; border-radius: 10px; box-shadow: 0 2px 12px #0002;}
        .contact-info { margin-bottom: 16px;}
        .contact-info div { margin-bottom: 6px;}
        footer { background: #1976d2; color: #fff; padding: 24px 0; margin-top: 24px;}
        .footer-content { display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; padding: 0 20px;}
        .footer-content a { color: #fff; margin: 0 6px; text-decoration: underline;}
        @media (max-width: 900px) {
          .service-list, .pricing-list, .benefit-list, .process-list { flex-direction: column; gap: 14px; }
          .register-container { flex-direction: column; gap: 22px;}
          .register-img img { width: 90vw;}
          .footer-content { flex-direction: column; gap: 10px;}
        }
      `}</style>
    </>
  );
}
