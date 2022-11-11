import { styles } from './utils/styles'

import TitleWithLogo from '../../components/TitleWithLogo';

import brain from '../../img/png/brain.png'

export default function App() {
  return (
    <>
      <div style={styles.appContainer}>
        <div style={{padding: 20}}>

        <TitleWithLogo
          height={50}
          width={50}
          src={brain}
          title='Workmood'
          fontSize={35}
          />
          </div>
      </div>
    </>
  );
}
