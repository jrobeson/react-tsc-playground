import { useRef } from 'react';
import Input from './components/Input';

function App() {
	const input = useRef<HTMLInputElement>(null);
	return (
		<main>
			<Input label='test' id='test' ref={input} />
		</main>
	);
}

export default App;

//  <p>
// <Button >A Button</Button>
// {/* <Button el='button'>A Button</Button> */}
// </p>
// <Button  href='www.google.com'>
//   A Link
// </Button>
// {/* <Button el='anchor' href='www.google.com'>
//   A Link
// </Button> */}
// </p>
