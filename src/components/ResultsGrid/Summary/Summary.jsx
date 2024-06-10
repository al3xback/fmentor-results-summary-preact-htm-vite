import { html } from 'htm/preact';

import styles from './Summary.module.css';

export default function Summary({ scores }) {
	return html`<div className=${styles.summary}>
		<h2 className=${styles.title}>Summary</h2>
		<ul className=${styles.list}>
			${scores.map(
				(score) => html`<li
					key=${score.id}
					className=${`${styles.item} ${styles[`item-${score.id}`]}`}
				>
					<img width="20" height="20" src=${score.icon} alt="" />
					<h3>${score.category}</h3>
					<p>
						<span>${score.value}</span>
						<span>/ 100</span>
					</p>
				</li>`
			)}
		</ul>
		<button type="button" className="btn btn--primary btn--full">
			Continue
		</button>
	</div>`;
}
