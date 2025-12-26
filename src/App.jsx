import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import './App.css';

function App() {
  return (
<Router basename="/bazi-school">
      <div className="container">
        <Routes>
          {/* 定义两个页面的路径 */}
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        
        {/* 全局页脚 */}
        <footer style={{ textAlign: 'center', margin: '40px 0', color: '#999', fontSize: '0.8rem' }}>
          &copy; 2025 八字易学堂 | 仅供学习参考
        </footer>
      </div>
    </Router>
  );
}

export default App;