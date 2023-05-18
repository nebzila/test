import { useRef, useState } from 'react';

export const ButtonForm = () => {
	const FormPersonModal = useRef(null);
	const FormPersonOption = useRef(null);
	const FormAnimalModal = useRef(null);
	const FormAnimalOption = useRef(null);
	const FormDescriptionModal = useRef(null);
	const FormDescriptionOption = useRef(null);
	const FormActionModal = useRef(null);
	const FormActionOption = useRef(null);
	const FormResultModal = useRef(null);
	const [person, setPerson] = useState('');
	const [animal, setAnimal] = useState('');
	const [description, setDescription] = useState('');
	const [action, setAction] = useState('');

	return (
		<>
			<div
				id='modal2'
				style={{
					height: '250px',
					width: '200px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-around',
					border: 'solid black 3px',
					borderRadius: '15px',
					backgroundColor: 'white',
					padding: '1%',
				}}
			>
				<h4>Button Form</h4>
				<button
					className='formButton'
					onClick={() => {
						FormPersonModal.current.showModal();
					}}
				>
					Person
				</button>{' '}
				<button
					className='formButton'
					onClick={() => {
						FormAnimalModal.current.showModal();
					}}
				>
					Animal
				</button>{' '}
				<button
					className='formButton'
					onClick={() => {
						FormDescriptionModal.current.showModal();
					}}
				>
					Description
				</button>{' '}
				<button
					className='formButton'
					onClick={() => {
						FormActionModal.current.showModal();
					}}
				>
					Action
				</button>{' '}
				<button
					className='formButton'
					onClick={() => {
						if (
							person === '' ||
							animal === '' ||
							description === '' ||
							action === ''
						) {
							alert('Please select all options');
						} else {
							FormResultModal.current.showModal();
						}
					}}
				>
					Result
				</button>
			</div>
			<dialog className='modal' ref={FormPersonModal}>
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
						ref={FormPersonOption}
						onChange={() => {
							setPerson(FormPersonOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
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
					</select>
					<button
						onClick={() => {
							FormPersonOption.current.selectedIndex = 0;
							FormPersonModal.current.close();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={FormAnimalModal}>
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
						ref={FormAnimalOption}
						onChange={() => {
							setAnimal(FormAnimalOption.current.value);
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
						onClick={() => {
							FormAnimalOption.current.selectedIndex = 0;
							FormAnimalModal.current.close();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={FormDescriptionModal}>
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
						ref={FormDescriptionOption}
						onChange={() => {
							setDescription(FormDescriptionOption.current.value);
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
						onClick={() => {
							FormDescriptionOption.current.selectedIndex = 0;
							FormDescriptionModal.current.close();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={FormActionModal}>
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
						ref={FormActionOption}
						onChange={() => {
							setAction(FormActionOption.current.value);
						}}
					>
						<option>Select</option>
						<option>betray the the will of its owner</option>
						<option>consider its life choices</option>
						<option>cause irreversible problems for all</option>
						<option>bring a horrible smell</option>
					</select>
					<button
						onClick={() => {
							FormActionOption.current.selectedIndex = 0;
							FormActionModal.current.close();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={FormResultModal}>
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
					<div id='resultSlide'>
						<h3 id='result'>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</h3>
						<button
							onClick={() => {
								FormResultModal.current.close();
								setPerson('');
								setAnimal('');
								setDescription('');
								setAction('');
							}}
						>
							Close
						</button>
					</div>
				</div>
			</dialog>
		</>
	);
};
