
	// Dynamically add matrix code, sparks, icons, and binary rain to loader
	document.addEventListener('DOMContentLoaded', function() {
	var loader = document.getElementById('page-loader');
	if (!loader) return;

	// Matrix code
	var matrix = document.createElement('div');
	matrix.className = 'matrix-code';
	for (let i = 0; i < 18; i++) {
		let s = document.createElement('span');
		s.textContent = Math.random() > 0.5 ? '101' : '011';
		s.style.left = (i * 5 + Math.random() * 2) + '%';
		s.style.animationDelay = (Math.random() * 2) + 's';
		s.style.color = `linear-gradient(180deg,#2ECC71,#27AE60)`;
		matrix.appendChild(s);
	}
	loader.appendChild(matrix);

	// Data sparks
	for (let i = 0; i < 8; i++) {
		let spark = document.createElement('div');
		spark.className = 'data-spark';
		spark.style.left = (Math.random() * 100) + '%';
		spark.style.top = (Math.random() * 100) + '%';
		spark.style.animationDelay = (Math.random() * 1.2) + 's';
		loader.appendChild(spark);
	}

	// Carbon fiber overlay
	let carbon = document.createElement('div');
	carbon.className = 'carbon-fiber';
	loader.appendChild(carbon);

	// Holographic shimmer
	let holo = document.createElement('div');
	holo.className = 'holo-shimmer';
	loader.appendChild(holo);

	// Tech icon outlines (SVGs for Laravel, Flutter, PHP)
	let icons = document.createElement('div');
	icons.className = 'tech-icons';
	icons.innerHTML = `
		<svg width="90" height="90" style="position:absolute;top:10%;left:12%;" viewBox="0 0 90 90"><path d="M10 80 L45 10 L80 80 Z" stroke="#fff" fill="none" stroke-width="3"/></svg>
		<svg width="80" height="80" style="position:absolute;top:60%;left:70%;" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" stroke="#fff" fill="none" stroke-width="3"/></svg>
		<svg width="70" height="70" style="position:absolute;top:30%;left:60%;" viewBox="0 0 70 70"><rect x="10" y="10" width="50" height="50" rx="12" stroke="#fff" fill="none" stroke-width="3"/></svg>
	`;
	loader.appendChild(icons);

	// Binary rain
	let binary = document.createElement('div');
	binary.className = 'binary-rain';
	for (let i = 0; i < 24; i++) {
		let s = document.createElement('span');
		s.textContent = Math.random() > 0.5 ? '0' : '1';
		s.style.left = (i * 4 + Math.random() * 2) + '%';
		s.style.animationDelay = (Math.random() * 2) + 's';
		binary.appendChild(s);
	}
	loader.appendChild(binary);
	});

    // Hide loader when page is fully loaded
	window.addEventListener('load', function() {
	  var loader = document.getElementById('page-loader');
	  if(loader) loader.style.display = 'none';
	});
	