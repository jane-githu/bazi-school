import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* 1. 顶部 Hero 区域 */}
      <header style={{ textAlign: 'center', padding: '60px 0 40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏛️ 八字易学堂</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          3分钟读懂你的“人生说明书”
        </p>
      </header>

      {/* 2. 基础知识教学区 */}
      <div className="card" style={{ borderLeft: '5px solid #8b4513' }}>
        <h2 style={{ marginTop: 0 }}>第一步：快速了解“八字模型”</h2>
        <p>八字不是迷信，而是一个模拟人生能量流动的<strong>时间模型</strong>。我们将人生比作一棵树：</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginTop: '20px' }}>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🌱</div>
            <strong>年柱 (根)</strong>
            <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>祖业、父母<br/>0-16岁</div>
          </div>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🌿</div>
            <strong>月柱 (苗)</strong>
            <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>兄弟、事业宫<br/>17-32岁</div>
          </div>
          <div style={{ background: '#fff3e0', padding: '15px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffcc80' }}>
            <div style={{ fontSize: '2rem' }}>🌺</div>
            <strong>日柱 (花)</strong>
            <div style={{ fontSize: '0.8rem', color: '#d84315', marginTop: '5px', fontWeight: 'bold' }}>代表你自己<br/>33-48岁</div>
          </div>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🍎</div>
            <strong>时柱 (果)</strong>
            <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>子女、晚运<br/>49岁后</div>
          </div>
        </div>

        {/* 3. 跳转按钮 */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link to="/calculator">
            <button style={{ fontSize: '1.2rem', padding: '15px 40px', background: '#8b4513' }}>
              我学会了，开始排盘 👉
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}