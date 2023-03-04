import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Home } from './features/home/Home';
import { Inbox } from './features/inbox/Inbox';
import { Workflow } from './features/workflow/Workflow';
import './App.css';

function App() {
	return (
		<>
			<h1>React Proof of Concept</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="inbox" element={<Inbox />}/>
					<Route path="inbox/workflow" element={<Workflow />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}

function Layout() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/inbox">Inbox</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/nothing-here">Nothing Here</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}

export default App;
