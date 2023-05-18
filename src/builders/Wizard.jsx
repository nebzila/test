import { useRef, useState } from 'react';

export const Wizard = () => {
	const WizardPersonModal = useRef(null);
	const WizardPersonOption = useRef(null);
	const WizardAnimalModal = useRef(null);
	const WizardAnimalOption = useRef(null);
	const WizardDescriptionModal = useRef(null);
	const WizardDescriptionOption = useRef(null);
	const WizardActionModal = useRef(null);
	const WizardActionOption = useRef(null);
	const WizardResultModal = useRef(null);

	const [person, setPerson] = useState('');
	const [animal, setAnimal] = useState('');
	const [description, setDescription] = useState('');
	const [action, setAction] = useState('');

	return (
		<>
			<button
				id='startButton'
				className='button'
				onClick={() => {
					WizardPersonModal.current.showModal();
				}}
			>
				Start Wizard
			</button>
			<dialog className='modal' ref={WizardPersonModal}>
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
						ref={WizardPersonOption}
						onChange={() => {
							console.log(WizardPersonOption.current.value);
							setPerson(WizardPersonOption.current.value);
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
								WizardPersonOption.current.selectedIndex = 0;
								WizardPersonModal.current.close();
								WizardAnimalModal.current.showModal();
							}
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={WizardAnimalModal}>
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
						ref={WizardAnimalOption}
						onChange={() => {
							console.log(WizardAnimalOption.current.value);
							setAnimal(WizardAnimalOption.current.value);
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
								WizardAnimalOption.current.selectedIndex = 0;
								WizardAnimalModal.current.close();
								WizardDescriptionModal.current.showModal();
							}
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={WizardDescriptionModal}>
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
						ref={WizardDescriptionOption}
						onChange={() => {
							setDescription(WizardDescriptionOption.current.value);
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
								WizardDescriptionOption.current.selectedIndex = 0;
								WizardDescriptionModal.current.close();
								WizardActionModal.current.showModal();
							}
						}}
					>
						Next
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={WizardActionModal}>
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
						ref={WizardActionOption}
						onChange={() => {
							setAction(WizardActionOption.current.value);
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
								WizardActionOption.current.selectedIndex = 0;
								WizardActionModal.current.close();
								WizardResultModal.current.showModal();
							}
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<dialog className='modal' ref={WizardResultModal}>
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
					>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</h3>
					<button
						className='button'
						onClick={() => {
							WizardResultModal.current.close();
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
};
