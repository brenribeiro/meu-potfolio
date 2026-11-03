import { useState } from 'react';
import styles from './App.module.css';

const projects = [
  {
    number: '01',
    name: 'Organiza',
    category: 'Produtividade · 2025',
    description:
      'Um painel de tarefas simples e intuitivo para transformar listas em planos de ação. Feito para manter o foco no que realmente importa.',
    technologies: ['React', 'CSS Modules', 'LocalStorage'],
    variant: 'organiza',
    link: 'https://github.com/SEU_USUARIO/organiza',
    preview: 'https://SEU_USUARIO.github.io/organiza',
  },
  {
    number: '02',
    name: 'CineBusca',
    category: 'Entretenimento · 2025',
    description:
      'Explore filmes, descubra novas histórias e encontre sua próxima sessão favorita em uma experiência de busca responsiva.',
    technologies: ['JavaScript', 'API REST', 'CSS'],
    variant: 'cine',
    link: 'https://github.com/SEU_USUARIO/cinebusca',
    preview: 'https://SEU_USUARIO.github.io/cinebusca',
  },
  {
    number: '03',
    name: 'DevLinks',
    category: 'Link na bio · 2024',
    description:
      'Uma página pessoal para reunir links importantes em um só lugar, com tema personalizável e atenção aos detalhes de acessibilidade.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    variant: 'devlinks',
    link: 'https://github.com/SEU_USUARIO/devlinks',
    preview: 'https://SEU_USUARIO.github.io/devlinks',
  },
];

const skills = [
  { title: 'Interface', items: ['HTML semântico', 'CSS3', 'Sass', 'Design responsivo'] },
  { title: 'Desenvolvimento', items: ['JavaScript', 'React', 'Hooks', 'Consumo de APIs'] },
  { title: 'Ferramentas', items: ['Git & GitHub', 'Figma', 'Vite', 'Acessibilidade'] },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={diagonal ? styles.diagonalArrow : undefined}
    >
      <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#inicio" onClick={closeMenu} aria-label="Seu Nome, início">
        <span className={styles.logoMark}>s.</span>
        <span>seu nome<span className={styles.logoDot}>.</span></span>
      </a>
      <button
        className={styles.menuToggle}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        id="main-navigation"
        className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`}
        aria-label="Navegação principal"
      >
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#projetos" onClick={closeMenu}>Projetos</a>
        <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
        <a className={styles.navContact} href="#contato" onClick={closeMenu}>
          Vamos conversar <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  );
}

function ProjectPreview({ variant }) {
  return (
    <div className={`${styles.preview} ${styles[variant]}`} aria-hidden="true">
      {variant === 'organiza' && (
        <div className={styles.taskWindow}>
          <div className={styles.windowTop}><i /><i /><i /><span>meu espaço</span></div>
          <div className={styles.taskContent}>
            <div className={styles.taskSidebar}><b>◦</b><b>▦</b><b>＋</b></div>
            <div className={styles.taskMain}>
              <span className={styles.previewEyebrow}>SEGUNDA-FEIRA, 24 DE MARÇO</span>
              <strong>Bom dia, Alex <span>✳</span></strong>
              <div className={styles.taskRow}><i className={styles.checked} /> Revisar o projeto <small>09:30</small></div>
              <div className={styles.taskRow}><i /> Preparar apresentação <small>11:00</small></div>
              <div className={styles.taskRow}><i /> Fazer uma pausa <small>13:00</small></div>
            </div>
          </div>
        </div>
      )}
      {variant === 'cine' && (
        <div className={styles.cineWindow}>
          <div className={styles.cineNav}><b>cine<span>busca</span></b><span>Filmes　 Séries　 Favoritos</span><i>⌕</i></div>
          <div className={styles.cineHero}>
            <span className={styles.previewEyebrow}>EM DESTAQUE · 2025</span>
            <strong>Histórias<br />que ficam.</strong>
            <span className={styles.cineButton}>Explorar catálogo　→</span>
          </div>
          <div className={styles.movieStrip}>
            <i /><i /><i /><i />
          </div>
        </div>
      )}
      {variant === 'devlinks' && (
        <div className={styles.phone}>
          <div className={styles.phoneSpeaker} />
          <div className={styles.profileAvatar}>S</div>
          <strong>Seu Nome</strong>
          <span>@seuusuario</span>
          <div className={styles.profileLink}>✳　 Meu portfólio　 ↗</div>
          <div className={styles.profileLink}>⌘　 GitHub　 ↗</div>
          <div className={styles.profileLink}>in　 LinkedIn　 ↗</div>
          <div className={styles.profileLink}>✉　 E-mail　 ↗</div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      <a
        className={styles.projectImageLink}
        href={project.preview}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver demonstração do projeto ${project.name}`}
      >
        <ProjectPreview variant={project.variant} />
        <span className={styles.imageOpen}><ArrowIcon diagonal /></span>
      </a>
      <div className={styles.projectInfo}>
        <div className={styles.projectHeading}>
          <div>
            <span className={styles.projectCategory}>{project.category}</span>
            <h3>{project.name}<span className={styles.projectNumber}> / {project.number}</span></h3>
          </div>
          <a className={styles.projectArrow} href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir repositório ${project.name}`}>
            <ArrowIcon diagonal />
          </a>
        </div>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className={styles.projectLinks}>
          <a href={project.link} target="_blank" rel="noreferrer">Repositório <ArrowIcon diagonal /></a>
          <a href={project.preview} target="_blank" rel="noreferrer">Ver projeto <ArrowIcon diagonal /></a>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.availability}><span /> DISPONÍVEL PARA OPORTUNIDADES</div>
            <h1>Construo experiências<br />digitais <span>com intenção.</span></h1>
            <p className={styles.heroText}>
              Olá, sou <strong>Seu Nome</strong> — desenvolvedor(a) front-end apaixonado(a) por criar interfaces úteis,
              acessíveis e cheias de personalidade.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#projetos">Conheça meu trabalho <ArrowIcon /></a>
              <a className={styles.textButton} href="#sobre">Um pouco sobre mim <span>↓</span></a>
            </div>
            <div className={styles.heroFoot}>
              <span>BASEADO(A) NO BRASIL · TRABALHO REMOTO</span>
              <a href="#projetos" aria-label="Rolar para os projetos">↓</a>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.artOrb} />
            <div className={styles.artCard}>
              <span className={styles.artCardTop}>UMA IDEIA,</span>
              <span className={styles.artCardBig}>bem<br />feita<span>.</span></span>
              <div className={styles.artLine} />
              <span className={styles.artCardBottom}>DESIGN × CÓDIGO</span>
            </div>
            <span className={styles.artPlus}>✳</span>
            <span className={styles.artCaption}>CRIANDO COM CURIOSIDADE<br />E UM BOM CAFÉ</span>
          </div>
        </section>

        <section id="sobre" className={styles.about}>
          <div className={styles.sectionLabel}><span>01</span> SOBRE MIM</div>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutPortrait}>
              <div className={styles.portraitPlaceholder}>
                <span>SEU<br />RETRATO</span>
                <span className={styles.portraitNote}>adicione sua foto aqui ↗</span>
              </div>
              <span className={styles.portraitIndex}>FIG. 01 — UM POUCO DE MIM</span>
            </div>
            <div className={styles.aboutCopy}>
              <span className={styles.eyebrow}>PRAZER, SOU SEU NOME</span>
              <h2>Curiosidade que vira<br /><span>código.</span></h2>
              <p>
                Sou estudante de desenvolvimento front-end e gosto de transformar ideias em experiências
                digitais simples, bonitas e fáceis de usar. A cada projeto, busco aprender algo novo e
                cuidar dos detalhes — do primeiro esboço ao último pixel.
              </p>
              <p>
                Atualmente, estou aprofundando meus conhecimentos em React, acessibilidade e boas práticas
                de desenvolvimento. Quero fazer parte de projetos que tenham impacto real e de times que
                valorizem colaboração e aprendizado contínuo.
              </p>
              <a className={styles.inlineLink} href="#contato">Vamos criar algo juntos? <ArrowIcon /></a>
              <div className={styles.aboutFacts}>
                <div><span>01 / FOCO</span><strong>Front-end & UI</strong></div>
                <div><span>02 / LOCAL</span><strong>Brasil · Remoto</strong></div>
                <div><span>03 / AGORA</span><strong>Aberto(a) a oportunidades</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className={styles.projects}>
          <div className={styles.sectionLabel}><span>02</span> PROJETOS SELECIONADOS</div>
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>FEITO COM INTENÇÃO</span><h2>Ideias em <span>movimento.</span></h2></div>
            <p>Uma seleção de projetos que mostram meu jeito de pensar, aprender e construir para a web.</p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <p className={styles.projectDisclaimer}>
            Projetos demonstrativos — atualize descrições, imagens e links com seus trabalhos reais antes de publicar.
          </p>
        </section>

        <section id="habilidades" className={styles.skills}>
          <div className={styles.sectionLabel}><span>03</span> HABILIDADES</div>
          <div className={styles.skillsLayout}>
            <div className={styles.skillsIntro}>
              <span className={styles.eyebrow}>FERRAMENTAS DO DIA A DIA</span>
              <h2>Aprendendo,<br />praticando, <span>evoluindo.</span></h2>
              <p>Uma base em constante construção — porque a web nunca para, e eu também não.</p>
              <span className={styles.skillsDoodle} aria-hidden="true">✳</span>
            </div>
            <div className={styles.skillGroups}>
              {skills.map((group, index) => (
                <div className={styles.skillGroup} key={group.title}>
                  <span className={styles.skillIndex}>0{index + 1}</span>
                  <div><h3>{group.title}</h3><div className={styles.skillTags}>
                    {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                  </div></div>
                  <span className={styles.skillPlus}>+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className={styles.contact}>
          <div className={styles.sectionLabel}><span>04</span> CONTATO</div>
          <div className={styles.contactContent}>
            <span className={styles.eyebrow}>TEM UM PROJETO EM MENTE?</span>
            <h2>Boas ideias começam<br />com um <span>oi.</span></h2>
            <p>Estou sempre aberto(a) a conversar sobre projetos, oportunidades ou trocar ideias sobre tecnologia.</p>
            <a className={styles.contactButton} href="mailto:seu.email@exemplo.com">
              seu.email@exemplo.com <ArrowIcon diagonal />
            </a>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
              <a href="mailto:seu.email@exemplo.com">E-mail <ArrowIcon diagonal /></a>
            </div>
          </div>
          <span className={styles.contactSpark} aria-hidden="true">✳</span>
        </section>
      </main>
      <footer className={styles.footer}>
        <a className={styles.logo} href="#inicio"><span className={styles.logoMark}>s.</span><span>seu nome<span className={styles.logoDot}>.</span></span></a>
        <span>PROJETADO E DESENVOLVIDO COM CUIDADO © 2025</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </footer>
    </>
  );
}

export default App;
