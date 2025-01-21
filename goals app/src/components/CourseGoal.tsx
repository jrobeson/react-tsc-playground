import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{ title: string; id: number; onDelete: (id: number) => void }>;

//or
// interface CourseGoalProps {
// 	title: string;
// children: ReactNode
// }

export default function CourseGoal({ title, id, onDelete, children }: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>DELETE</button>
		</article>
	);
}
/// or
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>DELETE</button>
// 		</article>
// 	);
// };

// export default CourseGoal;
