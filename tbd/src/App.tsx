import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
	const formref = useRef<FormHandle>(null);
	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		formref.current?.clear();
	}
	return (
		<main>
			<Form onSave={handleSave} ref={formref}>
				<Input label='Name' id='name' />
				<Input label='Age' id='age' type='number' />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
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
