import { html } from 'htm/preact';

import styles from './Result.module.css';

export default function Result({ mean }) {
	return html`<div className=${styles.result}>
		<h2>Your Result</h2>
		<div className=${styles.chart}>
			<span className=${`${styles.score} extra-bold`}>${mean}</span>
			<span>of 100</span>
		</div>
		<div className=${styles.desc}>
			<h3>Great</h3>
			<p>
				You scored higher than 65% of the people who have taken these
				tests.
			</p>
		</div>
	</div>`;
}
