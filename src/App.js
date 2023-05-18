import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
	const modal = useRef(null);
	const PersonModal = useRef(null);
	const AnimalModal = useRef(null);
	const DescriptionModal = useRef(null);
	const ActionModal = useRef(null);
	const ResultModal = useRef(null);
	const PersonOption = useRef(null);
	const PersonOption1 = useRef(null);
	const AnimalOption = useRef(null);
	const DescriptionOption = useRef(null);
	const ActionOption = useRef(null);
	const result1 = useRef(null);
	const result2 = useRef(null);
	const [person, setPerson] = useState('');
	const [animal, setAnimal] = useState('');
	const [description, setDescription] = useState('');
	const [action, setAction] = useState('');
	const [pageIndex, setPageIndex] = useState(0);
	const [multiModal, setMultiModal] = useState(false);

	useEffect(() => {
		if (pageIndex === 4) {
			result1.current.focus();
		}
	}, [pageIndex]);

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
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
					}}
				>
					<h1>Alchemie Story</h1>
					<button
						id='startButton'
						className='button'
						onClick={() => {
							PersonModal.current.showModal();
						}}
					>
						Start
					</button>
				</div>
			</div>
			<dialog className='modal' ref={PersonModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Person</h1>
					<select
						ref={PersonOption1}
						onChange={() => {
							console.log(PersonOption1.current.value);
							setPerson(PersonOption1.current.value);
						}}
					>
						<option>Select</option>
						<option>Joe</option>
						<option>Julie</option>
						<option>Katherine</option>
						<option>Alexa</option>
						<option>Jacob</option>
						<option>Gianna</option>
						<option>Sarah</option>
						<option>Deb</option>
						<option>Aiden</option>
						<option>Ben</option>
						<option>Nicole</option>
					</select>
					<button
						className='button'
						onClick={() => {
							if (person === '') {
								alert('Select an option');
							} else {
								PersonOption1.current.selectedIndex = 0;
								PersonModal.current.close();
								AnimalModal.current.showModal();
							}
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={AnimalModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Animal</h1>
					<select
						ref={AnimalOption}
						onChange={() => {
							console.log(AnimalOption.current.value);
							setAnimal(AnimalOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
						<option>gorilla</option>
						<option>archaeopteryx</option>
						<option>sea cucumber</option>
						<option>axolotl</option>
						<option>narwhal</option>
						<option>godzilla</option>
						<option>chupacabra</option>
					</select>
					<button
						className='button'
						onClick={() => {
							if (animal === '') {
								alert('Select an option');
							} else {
								AnimalOption.current.selectedIndex = 0;
								AnimalModal.current.close();
								DescriptionModal.current.showModal();
							}
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={DescriptionModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Description</h1>
					<select
						ref={DescriptionOption}
						onChange={() => {
							setDescription(DescriptionOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
						<option>covered in mold</option>
						<option>drunk</option>
						<option>fat</option>
						<option>just awful</option>
						<option>technically illegal</option>
					</select>
					<button
						className='button'
						onClick={() => {
							if (description === '') {
								alert('Select an option');
							} else {
								DescriptionOption.current.selectedIndex = 0;
								DescriptionModal.current.close();
								ActionModal.current.showModal();
							}
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={ActionModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h1 tabIndex={1}>Select Action</h1>
					<select
						ref={ActionOption}
						onChange={() => {
							setAction(ActionOption.current.value);
						}}
					>
						<option>Select</option>
						<option>betray the the will of its owner</option>
						<option>consider its life choices</option>
						<option>cause irreversible problems for all</option>
						<option>bring a horrible smell</option>
					</select>
					<button
						className='button'
						onClick={() => {
							if (action === '') {
								alert('Select an option');
							} else {
								ActionOption.current.selectedIndex = 0;
								ActionModal.current.close();
								ResultModal.current.showModal();
							}
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={ResultModal}>
				<div
					id='ModalContent'
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h3
						tabIndex={1}
						result={result2}
					>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</h3>
					<button
						className='button'
						onClick={() => {
							ResultModal.current.close();
							setPageIndex(0);
							setPerson('');
							setAnimal('');
							setDescription('');
							setAction('');
						}}
					>
						Close
					</button>
				</div>
			</dialog>
		</>
	);
}

export default App;
