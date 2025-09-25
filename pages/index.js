import Head from "next/head";

// Ảnh banner/giao diện: Đặt ảnh vào public/ hoặc dùng link ngoài
const BANNERS = [
  "/banner-Truong-Phat-1-2.jpg",
  "/banner-Truong-Phat-2409-min.jpg"
];

const CARDS = [
  {
    title: "Học lái xe hạng B1",
    img: "/z5660337202645_5a0b73029562222b2def1dfce1d311cc.jpg",
    link: "/khoa-hoc-lai-xe-hang-b1"
  },
  {
    title: "Học lái xe hạng B2",
    img: "/hoc-lai-xe-4.jpg",
    link: "/khoa-hoc-lai-xe-hang-b2"
  },
  {
    title: "Học lái xe hạng C",
    img: "/hoc-lai-xe-5.jpg",
    link: "/day-hoc-lai-xe-hang-c"
  },
  {
    title: "Học lái xe hạng A1",
    img: "/sp1.png",
    link: "/hoc-lai-xe-hang-a1"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TRUNG TÂM ĐÀO TẠO LÁI XE TRÍ BỘ</title>
        <meta name="description" content="Trung tâm đào tạo lái xe các hạng B1, B2 và C. Đội ngũ giáo viên kinh nghiệm, tỷ lệ đậu cao, học phí trọn gói." />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"/>
      </Head>
      <header className="site-header">
        <div className="container header-flex">
          <div className="logo">
            <img src="/logo-website.png" alt="Logo" />
          </div>
          <div className="diachi">
            <div>
              <span><i className="fa fa-map-marker"></i> 216 Lâm Văn Bền, Tân Quy, Q7, TP.HCM</span><br/>
              <span><i className="fa fa-map-marker"></i> 96/1/4 Đào Tông Nguyên, Nhà Bè, TP.HCM</span>
            </div>
            <div>
              <span><i className="fa fa-clock-o"></i> 8h – 17h30 : T2 – T7</span>
            </div>
          </div>
          <div className="hotline">
            <a href="tel:0935085569">
              <i className="fa fa-phone"></i> Hotline: 0935.085.569
            </a>
          </div>
        </div>
        <nav className="main-nav">
          <div className="container">
            <a href="#">Trang chủ</a>
            <a href="#gioi-thieu">Giới thiệu</a>
            <a href="#khoa-hoc">Khóa học</a>
            <a href="#dang-ky">Đăng ký</a>
            <a href="#lien-he">Liên hệ</a>
          </div>
        </nav>
      </header>

      {/* Banner Carousel */}
      <section className="banner-carousel">
        <div className="banner-wrapper">
          {BANNERS.map((url, i) => (
            <img src={url} key={i} alt="Banner" className="banner-img" />
          ))}
        </div>
        <div className="banner-overlay">
          <h1>TRUNG TÂM DẠY LÁI XE TRÍ BỘ</h1>
          <p>Đào tạo lái xe B1, B2, C. Cam kết tỷ lệ đậu cao, học phí minh bạch!</p>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="section about" id="gioi-thieu">
        <div className="container about-flex">
          <div className="about-info">
            <h2>Về chúng tôi</h2>
            <p>
              Trung tâm dạy lái xe Trí Bộ tự hào được cấp phép tuyển sinh đào tạo lái xe ô tô các hạng B1, B2, C. Với hơn 10 năm kinh nghiệm, đội ngũ giáo viên tận tâm, cơ sở vật chất hiện đại. Học viên được học lý thuyết và thực hành không giới hạn đến khi tự tin thi sát hạch.
            </p>
            <a className="btn" href="#dang-ky">Đăng ký ngay</a>
          </div>
          <div className="about-video">
            <img src="/banner-02.jpg" alt="about" style={{borderRadius:10}}/>
          </div>
        </div>
      </section>

      {/* Khóa học */}
      <section className="section khoa-hoc" id="khoa-hoc">
        <div className="container">
          <h2>HẠNG XE ĐÀO TẠO</h2>
          <div className="card-list">
            {CARDS.map((c, idx) => (
              <div className="card" key={idx}>
                <img src={c.img} alt={c.title} />
                <h3>{c.title}</h3>
                <a className="btn-link" href={c.link}>Đăng ký ngay</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thông tin nhanh */}
      <section className="section info-quick">
        <div className="container info-list">
          <div className="info-item">
            <i className="fa fa-user-plus"></i>
            <div>
              <span className="info-title">Học viên/tháng</span>
              <strong>900+</strong>
            </div>
          </div>
          <div className="info-item">
            <i className="fa fa-car"></i>
            <div>
              <span className="info-title">Xe đào tạo</span>
              <strong>176</strong>
            </div>
          </div>
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <div>
              <span className="info-title">Điểm đón</span>
              <strong>27</strong>
            </div>
          </div>
          <div className="info-item">
            <i className="fa fa-check-circle"></i>
            <div>
              <span className="info-title">Có bằng</span>
              <strong>100%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Thông tin chi tiết */}
      <section className="section detail">
        <div className="container">
          <h2>Tìm hiểu các hạng bằng lái xe B1, B2 và C</h2>
          <ul>
            <li>Bằng B1: xe số tự động 4–9 chỗ, tải dưới 3.5 tấn</li>
            <li>Bằng B2: xe số sàn/số tự động 4–9 chỗ, tải dưới 3.5 tấn</li>
            <li>Bằng C: xe 4–9 chỗ, tải cả trên/dưới 3.5 tấn</li>
          </ul>
          <h3>Điều kiện đăng ký học</h3>
          <ul>
            <li>Công dân VN hoặc người nước ngoài tại VN</li>
            <li>18+ tuổi (B1, B2), 21+ tuổi (C)</li>
            <li>Không yêu cầu bằng cấp, đủ sức khỏe</li>
          </ul>
          <h3>Thủ tục đăng ký</h3>
          <ul>
            <li>01 CCCD photo, 08 ảnh 3x4 nền xanh (free chụp ở trung tâm)</li>
            <li>01 bản photo bằng lái hiện có (nếu có)</li>
            <li>01 hồ sơ sức khỏe (được hướng dẫn tại trung tâm)</li>
          </ul>
          <a className="btn" href="#dang-ky">Liên hệ tư vấn</a>
        </div>
      </section>

      {/* Form đăng ký */}
      <section className="section form-section" id="dang-ky">
        <div className="container form-flex">
          <div className="form-box">
            <h2>Đăng ký tư vấn học lái xe</h2>
            <form>
              <input type="text" placeholder="Họ và tên" required />
              <input type="tel" placeholder="Số điện thoại" required />
              <select required>
                <option value="">-- Lựa chọn khóa học --</option>
                <option value="B1">Khóa học lái xe B1 (Số tự động)</option>
                <option value="B2">Khóa học lái xe B2</option>
                <option value="C">Khóa học lái xe hạng C</option>
                <option value="A1">Thi bằng lái xe máy A1</option>
                <option value="A2">Thi bằng lái xe máy A2</option>
                <option value="NangHang">Nâng hạng bằng lái</option>
              </select>
              <button type="submit">Đăng ký ngay</button>
            </form>
          </div>
          <div className="form-img">
            <img src="/banner-03.jpg" alt="Đăng ký học" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container f-flex">
          <div className="footer-col">
            <h3>Thông tin liên hệ</h3>
            <ul>
              <li>TRUNG TÂM ĐÀO TẠO LÁI XE TRÍ BỘ</li>
              <li><i className="fa fa-map-marker"></i> 216 Lâm Văn Bền, Q7, TP.HCM</li>
              <li><i className="fa fa-map-marker"></i> 96/1/4 Đào Tông Nguyên, Nhà Bè</li>
              <li><i className="fa fa-phone"></i> <a href="tel:0935085569">0935085569</a></li>
              <li><i className="fa fa-envelope"></i> daylaixetribo@gmail.com</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Khoá học & Dịch vụ</h3>
            <ul>
              <li><i className="fa fa-check-square-o"></i> <a href="#">Khoá học lái xe B1</a></li>
              <li><i className="fa fa-check-square-o"></i> <a href="#">Khoá học lái xe B2</a></li>
              <li><i className="fa fa-check-square-o"></i> <a href="#">Khoá học lái xe hạng C</a></li>
              <li><i className="fa fa-check-square-o"></i> <a href="#">Khóa nâng dấu D, E</a></li>
              <li><i className="fa fa-check-square-o"></i> <a href="#">Khóa lái xe A1, A2</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Theo dõi chúng tôi</h3>
            <div className="footer-social">
              <a href="mailto:daylaixetribo@gmail.com"><i className="fa fa-envelope"></i></a>
              <a href="https://facebook.com/" target="_blank"><i className="fa fa-facebook-square"></i></a>
              <a href="https://zalo.me/0935085569" target="_blank">ZALO</a>
            </div>
            <img src="/dk-so-giao-thong-van-tai.png" alt="dkso" width="120" />
          </div>
        </div>
        <div className="copyright">
          Copyright © 2025 daylaixetribo.com
        </div>
      </footer>

      {/* FontAwesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
      <style jsx>{`
        body { font-family: 'Roboto', Arial, sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
        .header-flex { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; }
        .logo img { width: 110px; }
        .diachi { color: #555; font-size: 14px; line-height: 1.4; }
        .hotline { font-size: 16px; }
        .hotline a { color: #ed2024; font-weight: bold; text-decoration: none; }
        .main-nav { background: #ed2024; }
        .main-nav a { color: #fff; text-decoration: none; font-weight: 500; padding: 12px 18px; display: inline-block; }
        .main-nav a:hover { background: #c70000; }
        .banner-carousel { position: relative; overflow: hidden; }
        .banner-img { width: 100%; height: 350px; object-fit: cover; display: block;}
        .banner-wrapper { display: flex; }
        .banner-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(0,0,0,0.18); color: #fff; text-shadow: 1px 2px 8px #333; }
        .banner-overlay h1 { font-size: 2.1rem; font-weight: bold; margin-bottom: 16px;}
        .about-flex { display: flex; gap: 32px; align-items: flex-start; margin-top: 30px;}
        .about-info { flex: 2; }
        .about-info h2 { color: #ed2024; }
        .about-info p { margin: 20px 0; }
        .about-video { flex: 1; display: flex; align-items: center; }
        .about-video img { width: 100%; max-width: 340px; }
        .section { padding: 40px 0; }
        .khoa-hoc h2 { text-align: center; margin-bottom: 30px; color: #ed2024;}
        .card-list { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;}
        .card { background: #fff; border-radius: 8px; box-shadow: 0 2px 18px #0001; text-align: center; padding: 18px 10px 24px 10px; width: 225px;}
        .card img { width: 100%; height: 120px; object-fit: cover; border-radius: 6px;}
        .card h3 { font-size: 1.13rem; margin: 15px 0 10px 0;}
        .btn-link { display: inline-block; padding: 8px 18px; background: #ed2024; color: #fff; border-radius: 30px; font-weight: bold; text-decoration: none; margin-top: 7px;}
        .btn-link:hover { background: #c70000; }
        .info-quick { background: #f8f8f8; }
        .info-list { display: flex; gap: 28px; justify-content: center; padding: 30px 0;}
        .info-item { display: flex; align-items: center; gap: 14px; background: #fff; border-radius: 8px; padding: 16px 26px; box-shadow: 0 2px 10px #0001;}
        .info-item i { font-size: 1.9rem; color: #ed2024;}
        .info-title { font-size: 0.97rem; color: #666;}
        .detail { background: #fff; border-radius: 8px; box-shadow: 0 2px 10px #0001; margin: 30px 0; padding: 28px 20px;}
        .detail h2 { color: #ed2024; margin-bottom: 12px;}
        .detail ul { margin-bottom: 10px;}
        .form-section { background: #f8f8f8; }
        .form-flex { display: flex; gap: 36px; align-items: center; justify-content: center;}
        .form-box { background: #fff; border-radius: 10px; box-shadow: 0 2px 14px #0001; padding: 30px 26px; min-width: 320px;}
        .form-box h2 { margin-bottom: 20px;}
        .form-box form { display: flex; flex-direction: column; gap: 15px;}
        .form-box input, .form-box select { padding: 10px 12px; border: 1px solid #bbb; border-radius: 5px; font-size: 1rem;}
        .form-box button { background: #ed2024; color: #fff; border: none; border-radius: 5px; padding: 12px; font-size: 1.1rem; font-weight: bold; cursor:pointer;}
        .form-box button:hover { background: #c70000;}
        .form-img img { width: 340px; border-radius: 8px;}
        .btn { background: #ed2024; color: #fff; border: none; border-radius: 30px; padding: 10px 28px; font-size: 1rem; font-weight: bold; text-decoration: none;}
        .btn:hover { background: #c70000; }
        .footer { background: #ed2024; color: #fff; padding: 40px 0 0 0;}
        .f-flex { display: flex; gap: 36px; justify-content: space-between; flex-wrap: wrap; }
        .footer-col { flex: 1; min-width: 220px; }
        .footer-col h3 { margin-bottom: 10px;}
        .footer-col ul { list-style: none; padding: 0; }
        .footer-col ul li { margin-bottom: 7px;}
        .footer-social a { color: #fff; margin-right: 12px; font-size: 1.4rem;}
        .copyright { text-align: center; background: #c70000; margin-top: 30px; padding: 10px 0; font-size: 1rem;}
        @media (max-width: 900px) {
          .about-flex, .form-flex, .card-list, .info-list, .f-flex { flex-direction: column; gap: 18px;}
          .about-video img, .form-img img { width: 95vw;}
        }
      `}</style>
    </>
  );
}
