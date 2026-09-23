import './App.css'

function App() {
  const products = [
    {
      name: 'Épicerie du quotidien',
      detail: 'Conserves, épices, chips et essentiels du placard',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85',
      tag: 'Dans vos placards',
    },
    {
      name: 'Boissons & gourmandises',
      detail: 'Café, thé, yerba maté, biscuits et bonbons',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85',
      tag: 'Pour la pause',
    },
    {
      name: 'Maison & soin',
      detail: 'Shampoings, parfums, essuie-tout et produits utiles',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85',
      tag: 'Tous les jours',
    },
  ]

  return (
    <div className="site-shell">
      <div className="topline">OUVERT 6 JOURS SUR 7 <span>•</span> LIVRAISON DE PROXIMITÉ</div>
      <header className="nav-wrap">
        <a className="brand" href="#accueil" aria-label="Market Baron, accueil">
          <span className="brand-mark">MB</span>
          <span><strong>MARKET</strong><em>BARON</em></span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#maison">La maison</a>
          <a href="#selection">La sélection</a>
          <a href="#services">Services</a>
        </nav>
        <a className="nav-action" href="#contact">Nous trouver <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Market Baron · supérette de quartier</p>
            <h1>Tout ce qu'il faut,<br /><span>à deux pas.</span></h1>
            <p className="hero-text">Une petite boutique pratique et chaleureuse pour les courses du quotidien : pain syrien, café, thé, gourmandises, produits maison et bien plus encore.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#selection">Découvrir la sélection <span>↗</span></a>
              <a className="text-link" href="#services">Voir nos services <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="note-dot" /> Produits du quotidien, tout simplement</div>
          </div>
          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=90" alt="Façade d'une petite supérette de quartier" />
            <div className="hero-pvc-sign" aria-label="Market Baron"><span>MARKET</span><strong>BARON</strong><b aria-hidden="true">✦</b></div>
            <div className="image-stamp"><span>Ouvert en</span><strong>2026</strong><span>septembre</span></div>
            <div className="image-caption"><span>01</span><span>La boutique du quartier</span></div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Nos engagements">
          <div><span className="trust-icon">✦</span><span><strong>Les essentiels toujours à portée</strong><small>Alimentation, boissons et produits du quotidien</small></span></div>
          <div><span className="trust-icon">♧</span><span><strong>Une boutique qui dépanne</strong><small>Le bon produit, au bon moment, près de chez vous</small></span></div>
          <div><span className="trust-icon">⌁</span><span><strong>Des saveurs d'ici et d'ailleurs</strong><small>Pain syrien, yerba maté et habitudes de chacun</small></span></div>
        </section>

        <section className="story-section" id="maison">
          <div className="section-label">02 <span /> La maison</div>
          <div className="story-content"><h2>La petite adresse qui <em>pense à tout.</em></h2><p>Chez Market Baron, on vient chercher un pain syrien, un café, un shampoing ou juste quelque chose à grignoter. Une supérette simple, utile et accueillante pour les petites courses comme pour les envies imprévues.</p><a className="text-link" href="#contact">Faire connaissance <span>↗</span></a></div>
          <div className="story-aside"><span className="quote-mark">“</span><p>Le commerce de proximité qui mélange les habitudes et les découvertes.</p><span className="quote-author">— L'équipe Market Baron</span></div>
        </section>

        <section className="selection-section" id="selection">
          <div className="section-heading"><div><div className="section-label">03 <span /> Dans nos rayons</div><h2>Les essentiels <em>du moment</em></h2></div><a className="circle-link" href="#contact" aria-label="Voir tous les produits">↗</a></div>
          <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span></div><div className="product-info"><h3>{product.name}</h3><p>{product.detail}</p><span className="product-arrow">↗</span></div></article>)}</div>
        </section>

        <section className="services-section" id="services">
          <div className="services-intro"><div className="section-label light">04 <span /> Plus qu'une épicerie</div><h2>Les services<br /><em>qui facilitent.</em></h2><p>Parce que la proximité, c'est aussi vous faire gagner du temps.</p></div>
          <div className="service-list"><div className="service-item"><span>01</span><div><h3>Livraison locale</h3><p>Dans votre quartier, du lundi au samedi.</p></div><b>↗</b></div><div className="service-item"><span>02</span><div><h3>Commandes par téléphone</h3><p>Vous nous dites ce qu'il vous faut, on prépare.</p></div><b>↗</b></div><div className="service-item"><span>03</span><div><h3>Colis & services pratiques</h3><p>Un point relais à deux pas de chez vous.</p></div><b>↗</b></div><div className="service-item"><span>04</span><div><h3>Accompagnement aux démarches administratives</h3><p>Aide à la rédaction et aux formalités, façon écrivain public.</p></div><b>↗</b></div></div>
        </section>

        <section className="contact-section" id="contact"><div><div className="section-label">05 <span /> Venez nous voir</div><h2>On vous attend<br /><em>au marché.</em></h2></div><div className="contact-details"><div><span>Adresse</span><p>26 rue Eugène Kloster<br />57800 Freyming-Merlebach</p></div><div><span>Horaires</span><p>Lun — Ven &nbsp; 9h30 — 20h<br />Samedi &nbsp; 10h — 21h<br />Dimanche &nbsp; 9h — 13h</p></div><a className="button button-gold" href="tel:+33100000000">Nous appeler <span>↗</span></a></div></section>
      </main>

      <footer><a className="brand footer-brand" href="#accueil"><span className="brand-mark">MB</span><span><strong>MARKET</strong><em>BARON</em></span></a><p>Le goût des ailleurs, juste à côté.</p><span>© 2026 Market Baron</span></footer>
    </div>
  )
}

export default App
