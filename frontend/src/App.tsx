import './App.css'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="brand">CareerPilot<span> AI</span></h2>

        <p className="menu-label">WORKSPACE</p>

        <nav className="navigation">
          <a className="nav-item active" href="#dashboard">▦ Dashboard</a>
          <a className="nav-item" href="#resume">▤ Resume Analyzer</a>
          <a className="nav-item" href="#skills">◇ Skill Tracker</a>
          <a className="nav-item" href="#roadmap">⌁ Learning Roadmap</a>
          <a className="nav-item" href="#interview">◎ Mock Interview</a>
          <a className="nav-item" href="#companies">▣ Companies</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">S</div>
          <div>
            <strong>S. Shrilekha</strong>
            <p>IT Student</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / Dashboard</p>
            <h1>Dashboard</h1>
          </div>
          <div className="topbar-right">
            <span className="status-dot" />
            <span>Placement journey</span>
            <div className="top-avatar">S</div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="eyebrow">YOUR CAREER, YOUR FUTURE</p>
            <h2>Welcome back, Shrilekha! 👋</h2>
            <p>Build your skills today. Get ready for your dream role.</p>
          </div>
          <div className="welcome-icon">✦</div>
        </section>

        <section className="section-heading">
          <div>
            <h2>Your placement overview</h2>
            <p>Track your preparation and discover what to improve next.</p>
          </div>
          <span className="period-tag">MY PROGRESS</span>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-top">
              <span>Placement readiness</span>
              <span className="stat-icon purple">✦</span>
            </div>
            <h3>Getting started</h3>
            <p className="stat-note">Complete your profile to begin</p>
            <div className="progress-track">
              <div className="progress-fill purple-fill" style={{ width: '0%' }} />
            </div>
            <p className="progress-label">Not assessed yet</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Resume score</span>
              <span className="stat-icon blue">▤</span>
            </div>
            <h3>Not analyzed</h3>
            <p className="stat-note">Get feedback on your resume</p>
            <div className="progress-track">
              <div className="progress-fill blue-fill" style={{ width: '0%' }} />
            </div>
            <p className="progress-label">Upload your resume</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Skills tracked</span>
              <span className="stat-icon green">◇</span>
            </div>
            <h3>0 skills</h3>
            <p className="stat-note">Start tracking your technical skills</p>
            <div className="progress-track">
              <div className="progress-fill green-fill" style={{ width: '0%' }} />
            </div>
            <p className="progress-label">No skills added yet</p>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel roadmap-panel">
            <div className="panel-heading">
              <div>
                <h2>Your next steps</h2>
                <p>A simple plan to get placement-ready.</p>
              </div>
              <span className="panel-symbol">↗</span>
            </div>

            <div className="task-item">
              <div className="task-number">01</div>
              <div className="task-content">
                <strong>Complete your career profile</strong>
                <p>Tell us about your skills and target role.</p>
              </div>
              <span className="task-status">To do</span>
            </div>

            <div className="task-item">
              <div className="task-number">02</div>
              <div className="task-content">
                <strong>Analyze your resume</strong>
                <p>Discover strengths and areas to improve.</p>
              </div>
              <span className="task-status">To do</span>
            </div>

            <div className="task-item">
              <div className="task-number">03</div>
              <div className="task-content">
                <strong>Assess your technical skills</strong>
                <p>Identify the skills you should practice.</p>
              </div>
              <span className="task-status">To do</span>
            </div>
          </article>

          <article className="panel focus-panel">
            <div className="panel-heading">
              <div>
                <h2>Daily focus</h2>
                <p>Small steps lead to big progress.</p>
              </div>
              <span className="panel-symbol">✧</span>
            </div>

            <div className="focus-illustration">✦</div>
            <h3>Your journey starts here</h3>
            <p className="focus-description">
              Set your target role and build a preparation plan that works for you.
            </p>
            <div className="focus-tags">
              <span>DSA</span>
              <span>SQL</span>
              <span>Projects</span>
            </div>
          </article>
        </section>

        <footer className="footer">
          <span>CareerPilot AI</span>
          <span>Small steps. Strong careers.</span>
        </footer>
      </main>
    </div>
  )
}

export default App