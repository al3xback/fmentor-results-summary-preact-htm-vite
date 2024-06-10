import { html } from 'htm/preact';

import { SCORES, getMeanScore } from '../../data';
import Result from './Result/Result.jsx';
import Summary from './Summary/Summary.jsx';
import styles from './ResultsGrid.module.css';

export default function ResultGrid() {
	const mean = getMeanScore();

	return html`<div className=${styles['results-grid']}>
		<${Result} mean=${mean} />
		<${Summary} scores=${SCORES} />
	</div>`;
}
