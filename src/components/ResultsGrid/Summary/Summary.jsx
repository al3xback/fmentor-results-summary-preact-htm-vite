import { html } from 'htm/preact';

import styles from './Summary.module.css';

export default function Summary({ scores }) {
	return html`<div class=${styles.summary}>
		<h2 class=${styles.title}>Summary</h2>
		<ul class=${styles.list}>
			${scores.map(
				(score) =>
					html`<li
						key=${score.id}
						class=${`${styles.item} ${styles[`item-${score.id}`]}`}
					>
						<img src=${score.icon} width="20" height="20" alt="" />
						<h3>${score.category}</h3>
						<p>
							<span>${score.value}</span>
							<span>/ 100</span>
						</p>
					</li>`,
			)}
		</ul>
		<button type="button" class="btn btn--primary btn--full">
			Continue
		</button>
	</div>`;
}
