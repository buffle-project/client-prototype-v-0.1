// React core imports
import React, { useState, useEffect } from 'react';

// antd imports
import { Image, Avatar, Space, Divider } from 'antd';

// styling and image imports
import { PlusOutlined, MoreOutlined, GoogleOutlined } from '@ant-design/icons';
import styles from './styles';
import bell from '../img/bell.png';
import link from '../img/link.png';
import note from '../img/note.png';
import pen from '../img/pen.png';
// NOTE this will be handled differently, here like this for now
import user1 from '../img/user1.png';
import user2 from '../img/user2.png';
import user3 from '../img/user3.png';



function Meetlink() {




	return (
		<>
			<div style={styles.wrapper}>
				<div style={styles.container}>
					{/* Title section */}
					<div style={styles.titleSection}>
						<GoogleOutlined />
						<span style={styles.linkTitle}>1 on 1 with Marco</span>
						<Avatar.Group
							maxCount={2}
						>
							<Avatar src={user1} />
							<Avatar src={user3} />
							<Avatar src={user1} />
							<Avatar src={user2} />
						</Avatar.Group>
					</div>
					{/* Time section */}
					<div style={styles.timeSection}>
						<span style={styles.timeTitle}>Today</span>
						<span style={styles.timeRange}>11.30 - 12.30</span>
					</div>
					{/* Actions section */}
					<div style={styles.actionsSection}>
						<Image src={pen} preview={false} width={35} />
						<Image src={note} preview={false} width={45} />
						<Image src={bell} preview={false} width={30} />
						<Image src={link} preview={false} width={30} />
					</div>
					{/* Menu section */}
					<div style={styles.menuSection}>
						<button style={styles.menuButton}>
							{/* This will render accordingly */}
							Start
						</button>
						<Avatar />
					</div>
				</div>
				<Divider />
			</div>
		</>
	)
}

export default Meetlink