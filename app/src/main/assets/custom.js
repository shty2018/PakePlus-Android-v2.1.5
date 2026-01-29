window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L3-L6思维数学 - 总目录</title>
    <style>
        /* 全局样式重置 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Microsoft YaHei", Arial, sans-serif;
        }

        /* 页面主体样式 */
        body {
            background-color: #f0f8fb;
            color: #333;
            line-height: 1.6;
            padding: 20px 0;
        }

        /* 头部样式 */
        header {
            text-align: center;
            padding: 30px 20px;
            margin-bottom: 40px;
        }

        h1 {
            font-size: 2.5rem;
            color: #2c5282;
            margin-bottom: 15px;
        }

        .header-desc {
            font-size: 1.2rem;
            color: #4a5568;
            opacity: 0.8;
        }

        /* 主容器 */
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* 课程网格 - 强制两列3行布局 */
        .course-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 50px;
        }

        /* 课程卡片样式 */
        .course-card {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 15px;
            padding: 30px 25px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            border: 2px solid transparent;
        }

        .course-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
            border-color: #4299e1;
        }

        /* 不同级别课程的配色区分 */
        .course-card.l3 { border-left: 8px solid #48bb78; }
        .course-card.l4 { border-left: 8px solid #4299e1; }
        .course-card.l5 { border-left: 8px solid #9f7aea; }
        .course-card.l6 { border-left: 8px solid #ed8936; }

        .course-level {
            font-size: 1.8rem;
            font-weight: bold;
            color: #2d3748;
            margin-bottom: 15px;
        }

        .course-desc {
            font-size: 1.1rem;
            color: #4a5568;
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .course-topics {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
        }

        .topic-tag {
            background-color: #e8f4f8;
            color: #2c5282;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
        }

        .enter-btn {
            display: inline-block;
            background-color: #4299e1;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            text-align: center;
            margin-top: auto;
            transition: background-color 0.3s;
        }

        .enter-btn:hover {
            background-color: #3182ce;
        }

        /* 响应式适配 - 平板/手机 */
        @media (max-width: 768px) {
            .course-grid {
                grid-template-columns: 1fr; /* 平板/手机改为单列 */
                grid-template-rows: auto;
            }

            h1 {
                font-size: 2rem;
            }

            .course-card {
                padding: 25px 20px;
            }
        }

        /* 页脚样式 */
        footer {
            text-align: center;
            padding: 20px 0;
            color: #718096;
            font-size: 0.9rem;
            margin-top: 60px;
        }
    </style>
</head>
<body>
    <!-- 页面头部 -->
    <header>
        <h1>思维数学 L3-L6 课程总目录</h1>
        <p class="header-desc">系统化小学数学思维训练，循序渐进提升数学能力</p>
    </header>

    <!-- 主内容区 -->
    <div class="container">
        <div class="course-grid">
            <!-- L3课程卡片 -->
            <div class="course-card l3">
                <h2 class="course-level">L3 基础思维（小学3年级）</h2>
                <p class="course-desc">夯实基础计算能力，掌握基础数学思维方法，培养数学兴趣。</p>
                <div class="course-topics">
                    <span class="topic-tag">整数巧算</span>
                    <span class="topic-tag">枚举法</span>
                    <span class="topic-tag">周长计算</span>
                    <span class="topic-tag">和差问题</span>
                    <span class="topic-tag">平均数</span>
                </div>
                <a href="./L3/INDEX3.html" class="enter-btn">进入L3课程</a>
            </div>

            <!-- L4课程卡片 -->
            <div class="course-card l4">
                <h2 class="course-level">L4 进阶思维（小学4年级）</h2>
                <p class="course-desc">深化计算技巧，学习复杂应用题解法，提升逻辑分析能力。</p>
                <div class="course-topics">
                    <span class="topic-tag">小数计算</span>
                    <span class="topic-tag">面积计算</span>
                    <span class="topic-tag">和倍差倍</span>
                    <span class="topic-tag">归一问题</span>
                    <span class="topic-tag">鸡兔同笼</span>
                </div>
                <a href="./L4/INDEX4.html" class="enter-btn">进入L4课程</a>
            </div>

            <!-- L5课程卡片 -->
            <div class="course-card l5">
                <h2 class="course-level">L5 高阶思维（小学5年级）</h2>
                <p class="course-desc">接触分数运算，学习几何进阶知识，培养综合解题思维。</p>
                <div class="course-topics">
                    <span class="topic-tag">分数运算</span>
                    <span class="topic-tag">立体几何</span>
                    <span class="topic-tag">行程问题</span>
                    <span class="topic-tag">工程问题</span>
                    <span class="topic-tag">列方程解题</span>
                </div>
                <a href="./L5/INDEX5.html" class="enter-btn">进入L5课程</a>
            </div>

            <!-- L6课程卡片 -->
            <div class="course-card l6">
                <h2 class="course-level">L6 竞赛思维（小学6年级）</h2>
                <p class="course-desc">冲刺小升初，拓展奥数思维，提升综合解题与应试能力。</p>
                <div class="course-topics">
                    <span class="topic-tag">比例应用</span>
                    <span class="topic-tag">数论基础</span>
                    <span class="topic-tag">组合数学</span>
                    <span class="topic-tag">浓度问题</span>
                    <span class="topic-tag">抽屉原理</span>
                </div>
                <a href="./L6/INDEX6.html" class="enter-btn">进入L6课程</a>
            </div>

            <!-- 学习路径卡片 -->
            <div class="course-card">
                <h2 class="course-level">学习路径规划</h2>
                <p class="course-desc">根据孩子的年级和能力，选择合适的课程阶段，循序渐进学习。</p>
                <div class="course-topics">
                    <span class="topic-tag">3年级→L3</span>
                    <span class="topic-tag">4年级→L4</span>
                    <span class="topic-tag">5年级→L5</span>
                    <span class="topic-tag">6年级→L6</span>
                </div>
                <a href="#" class="enter-btn" target="_blank">查看学习指南</a>
            </div>

            <!-- 配套资料卡片 -->
            <div class="course-card">
                <h2 class="course-level">配套学习资料</h2>
                <p class="course-desc">下载电子教材、练习题、解析文档，辅助课堂学习。</p>
                <div class="course-topics">
                    <span class="topic-tag">电子教材</span>
                    <span class="topic-tag">课后练习</span>
                    <span class="topic-tag">答案解析</span>
                    <span class="topic-tag">思维训练题</span>
                </div>
                <a href="#" class="enter-btn" target="_blank">下载资料</a>
            </div>
        </div>
    </div>

    <!-- 页脚 -->
    <footer>
        <p>© 2026 思维数学学习平台 - 版权所有</p>
    </footer>
</body>
</html>