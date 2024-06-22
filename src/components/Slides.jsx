const Slides = ({ slide }) => {
	return (
		<div className='slide-container'>
			<img className='img-fluid' src={slide.src} alt={slide.title} />
			<div className='slide-links'>
				<div className='col link frtd'>
					<a href={slide.link1_url} target='_blank' rel='noopener noreferrer'>
						<i className='bx bxl-github bx-md bx-tada-hover' />
					</a>
					<span>{slide.link1_label}</span>
				</div>
				{slide.link2_url && (
					<div className='col link project'>
						<a href={slide.link2_url} target='_blank' rel='noopener noreferrer'>
							<i className={slide.link2_icon} style={{ fontSize: '1.6rem' }} />
						</a>
						<span>{slide.link2_label}</span>
					</div>
				)}
				{slide.link3_url && (
					<div className='col link bckd'>
						<a href={slide.link3_url} target='_blank' rel='noopener noreferrer'>
							<i className={'bx bxl-github bx-md bx-tada-hover'} />
						</a>
						<span>{slide.link3_label}</span>
					</div>
				)}
			</div>
			<div className='slide-title'>
				<h6>{slide.title}</h6>
			</div>
		</div>
	);
};

export default Slides;
