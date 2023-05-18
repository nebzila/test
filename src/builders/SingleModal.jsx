import { useRef, useState } from 'react';

export const SingleModal = () => {
	const SingleModal = useRef(null);
	const SinglePersonOption = useRef(null);
	const SingleAnimalOption = useRef(null);
	const SingleDescriptionOption = useRef(null);
	const SingleActionOption = useRef(null);
	const SingleResultModal = useRef(null);

	const [person, setPerson] = useState('');
	const [animal, setAnimal] = useState('');
	const [description, setDescription] = useState('');
	const [action, setAction] = useState('');

	return (
		<>
			<dialog id='singleModal' ref={SingleModal}>
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
						ref={SinglePersonOption}
						onChange={() => {
							console.log(SinglePersonOption.current.value);
							setPerson(SinglePersonOption.current.value);
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
					<h1 tabIndex={0}>Select Animal</h1>
					<select
						ref={SingleAnimalOption}
						onChange={() => {
							console.log(SingleAnimalOption.current.value);
							setAnimal(SingleAnimalOption.current.value);
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

					<h1 tabIndex={0}>Select Description</h1>
					<select
						ref={SingleDescriptionOption}
						onChange={() => {
							setDescription(SingleDescriptionOption.current.value);
						}}
					>
						<option selected={true}>Select</option>
						<option>covered in mold</option>
						<option>drunk</option>
						<option>fat</option>
						<option>just awful</option>
						<option>technically illegal</option>
					</select>
					<h1 tabIndex={0}>Select Action</h1>
					<select
						ref={SingleActionOption}
						onChange={() => {
							setAction(SingleActionOption.current.value);
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
							if (
								person === '' ||
								animal === '' ||
								description === '' ||
								action === ''
							) {
								alert('Select all options');
							} else {
								SinglePersonOption.current.selectedIndex = 0;
								SingleModal.current.close();
								SingleResultModal.current.showModal();
							}
						}}
					>
						Result
					</button>
				</div>
			</dialog>

			<dialog className='modal' ref={SingleResultModal}>
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
							SingleResultModal.current.close();
							setPerson('');
							setAnimal('');
							setDescription('');
							setAction('');
							SinglePersonOption.current.selectedIndex = 0;
							SingleAnimalOption.current.selectedIndex = 0;
							SingleDescriptionOption.current.selectedIndex = 0;
							SingleActionOption.current.selectedIndex = 0;
						}}
					>
						Close
					</button>
				</div>
			</dialog>
			<button
				id='startButton'
				className='button'
				onClick={() => {
					SingleModal.current.showModal();
				}}
			>
				Open Single Modal
			</button>
		</>
	);
};
