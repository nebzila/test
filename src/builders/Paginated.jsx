export const Paginated = () => {
	const [pageIndex, setPageIndex] = useState(0);

	useEffect(() => {
		if (pageIndex === 4) {
			result1.current.focus();
		}
	}, [pageIndex]);
	return (
		<>
			<div className='App'>
				<button
					style={{ marginTop: '5px', marginBottom: '5px' }}
					className='button'
					onClick={() => {
						modal.current.showModal();
					}}
				>
					Open Paginated Modal
				</button>
				<dialog ref={modal}>
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
						{pageIndex === 0 ? (
							<div id='personSlide'>
								<h1 tabIndex={1}>Select Person</h1>
								<select
									ref={PersonOption}
									onChange={() => {
										setPerson(PersonOption.current.value);
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
										if (person === '') {
											alert('Select an option');
										} else {
											PersonOption.current.selectedIndex = 0;
											setPageIndex(1);
										}
									}}
								>
									Next
								</button>
							</div>
						) : pageIndex === 1 ? (
							<div id='animalSlide'>
								<h1 tabIndex={1}>Select Animal</h1>
								<select
									ref={AnimalOption}
									onChange={() => {
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
									onClick={() => {
										AnimalOption.current.selectedIndex = 0;
										setPageIndex(2);
									}}
								>
									Next
								</button>
							</div>
						) : pageIndex === 2 ? (
							<div id='descriptionSlide'>
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
									onClick={() => {
										DescriptionOption.current.selectedIndex = 0;
										setPageIndex(3);
									}}
								>
									Next
								</button>
							</div>
						) : pageIndex === 3 ? (
							<div id='actionSlide'>
								<h1 tabIndex={0}>Select Action</h1>
								<select
									ref={ActionOption}
									onChange={() => {
										setAction(ActionOption.current.value);
									}}
								>
									<option selected={true}>Select</option>
									<option>betray the the will of its owner</option>
									<option>consider its life choices</option>
									<option>cause irreversible problems for all</option>
									<option>bring a horrible smell</option>
								</select>
								<button
									onClick={() => {
										ActionOption.current.selectedIndex = 0;
										setPageIndex(4);
									}}
								>
									Complete
								</button>
							</div>
						) : (
							<div id='resultSlide'>
								<div
									style={{ fontWeight: 'bold', fontSize: '20px' }}
									ref={result1}
									tabIndex={0}
								>{`${person} had a little ${animal}, who was ${description}. And everywhere that ${person} went, the ${animal} was sure to ${action}.`}</div>
								<button
									onClick={() => {
										modal.current.close();
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
						)}
					</div>
				</dialog>
			</div>
		</>
	);
};
