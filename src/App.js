import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Wizard } from './builders/Wizard';
import { ButtonForm } from './builders/ButtonForm';
import { SingleModal } from './builders/SingleModal';

function App() {
	// const result1 = useRef(null);
	// const result2 = useRef(null);
	// const [person, setPerson] = useState('');
	// const [animal, setAnimal] = useState('');
	// const [description, setDescription] = useState('');
	// const [action, setAction] = useState('');
	// const [pageIndex, setPageIndex] = useState(0);

	return (
		<>
			<div
				aria-label='Story Builder Test App'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw',
				}}
			>
				<div
					id='buttonContainer'
					className='buttonContainer'
					style={{
						border: 'solid black 5px',
						borderRadius: '15px',
						padding: '7%',
						alignContent: 'center',
						flexWrap: 'wrap',
						alignItems: 'center',
					}}
				>
					<h1 tabIndex={1}>Alchemie Story Builder</h1>
					<p tabIndex={0} style={{ width: '30%', textAlign: 'center' }}>
						A small test app to experiment with modals and accessibility. Create
						a story by selecting options in the 'wizard', by filling out the
						single modal, or complete the button form.
					</p>
					<Wizard />
					<SingleModal />
					<ButtonForm />
				</div>
			</div>
		</>
	);
}

export default App;
