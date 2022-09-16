// React core imports
import React, {useState, useEffect} from 'react';

// antd imports
import { Image, Button } from 'antd';

// utils imports
import Meetlink from './components/Meetlink';

// styling and image imports
import styles from './styles';
import meetlinksLogo from './img/meetlinksLogo.png';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';




function Meetlinks() {

	// Handlers
	const handleAddButtonClick = () => {
		console.log('add button clicked!')
	}

	const handleImageClick = () => {
		console.log('Image clicked!')
	}

	return (
		<>
			{/* wrapper (basically the whole form etc) */}
			<div style={styles.container}>
				{/* Header Section */}
				<div style={styles.header}>
					<div style={styles.headerTitleSection}>
						<Image
							preview={false}
							src={meetlinksLogo}
							width={40}
							onClick={handleImageClick}
						/>
						<span style={styles.headerTitle}>Meetlinks</span>
					</div>
					<div style={styles.headerMenuSection}>
						<PlusOutlined 
							style={styles.headerButton}
							onClick={handleAddButtonClick}
						/>
						<MoreOutlined 
							style={styles.headerButton}
							onClick={``}
						/>
					</div>
				</div>


				{/* Content & Links */}
				<div style={styles.content}>
					<Meetlink />
				</div>
			</div>
		</>

	)
}

export default Meetlinks