import reactionIcon from './assets/icons/reaction.svg';
import memoryIcon from './assets/icons/memory.svg';
import verbalIcon from './assets/icons/verbal.svg';
import visualIcon from './assets/icons/visual.svg';

export const SCORES = [
	{
		id: 'reaction',
		category: 'Reaction',
		icon: reactionIcon,
		value: 80
	},
	{
		id: 'memory',
		category: 'Memory',
		icon: memoryIcon,
		value: 92
	},
	{
		id: 'verbal',
		category: 'Verbal',
		icon: verbalIcon,
		value: 61
	},
	{
		id: 'visual',
		category: 'Visual',
		icon: visualIcon,
		value: 72
	}
];

export function getMeanScore() {
	const scoresLength = SCORES.length;

	return Math.floor(
		SCORES.reduce((total, score) => total + score.value, 0) / scoresLength
	);
}
