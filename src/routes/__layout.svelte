<style>
	.nav-bar {
		width: 100%;
		text-transform: uppercase;
		justify-content: space-between;
		background-color: #222;
		height: 42px;
		z-index: 2;
		position: fixed;
		top: 0px;
		left: 0px;
		display: flex;
	}

	.links {
		color: white;
		font-weight: 700;
		height: 42px;
		display: flex;
	}

	a {
		color: #fff;
		background-color: #222;
		text-decoration: none;
	}

	a:hover {
		background-color: #444;
		text-shadow: none;
	}

	.nav-link {
		padding: 12px;
		display: flex;
		flex-direction: column;
	}

	.copyright {
		padding: 16px 16px 16px;
		color: 222;
		text-align: center;
		font-size: 12px;
	}
</style>

<div class="nav-bar">
	<a href="/" class="nav-link">My Blog</a>
	<div class="links">
		<a class="nav-link" href="/">Link 1</a>
		<a class="nav-link" href="https://ionhipster.com">Link 2</a>
	</div>
</div>
<br />
<br />
<!-- The landing page and blog posts load here -->
<slot />
<br />
<br />
<div class="copyright">© My Blog 2022</div>
