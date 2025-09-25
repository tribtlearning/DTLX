import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
    const [pageName, setPageName] = useState('');
    const [pages, setPages] = useState([
        { name: 'index.js', path: '/' },
        { name: 'about.js', path: '/about' },
        { name: 'contact.js', path: '/contact' },
    ]);

    const router = useRouter();

    const handleAddPage = () => {
        if (pageName.trim() === '') return;
        
        setPages([
            ...pages,
            { name: `${pageName}.js`, path: `/${pageName}` }
        ]);
        setPageName('');
    };

    const handleDeletePage = (pageName) => {
        setPages(pages.filter(page => page.name !== pageName));
    };

    return (
        <div>
            <h1>Quản trị Website</h1>
            
            <div>
                <h2>Thêm trang mới</h2>
                <input
                    type="text"
                    value={pageName}
                    onChange={(e) => setPageName(e.target.value)}
                    placeholder="Tên trang"
                />
                <button onClick={handleAddPage}>Thêm trang</button>
            </div>

            <div>
                <h2>Danh sách trang hiện tại</h2>
                <ul>
                    {pages.map(page => (
                        <li key={page.name}>
                            <a href={page.path} target="_blank" rel="noopener noreferrer">
                                {page.path}
                            </a>
                            <button onClick={() => handleDeletePage(page.name)}>Xóa</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
