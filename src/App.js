import logo from './logo.svg';
import './App.css';

import { generateeng,generatehan } from './utils/words';
import { useState } from 'react';

import useKeyPress from './hooks/useKeyPress';

const initialWords = generateeng();;
const initialHanWords = generatehan();


function App() {
	const [leftPadding, setLeftPadding] = useState(
		new Array(20).fill(' ').join(''),
	);
	const [outgoingChars, setOutgoingChars] = useState('');
	const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
	const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

	const [outgoingHanChars, setOutgoingHanChars] = useState('');
	const [currentHanChar, setCurrentHanChar] = useState(initialHanWords.charAt(0));
	const [incomingHanChars, setIncomingHanChars] = useState(initialHanWords.substr(1));
	useKeyPress(key => {
		    //1
		let updatedOutgoingChars = outgoingChars;
		let updatedIncomingChars = incomingChars;
		let updatedOutgoingHanChars = outgoingHanChars;
		let updatedIncomingHanChars = incomingHanChars;
		let i = 0, j = 0;
		
		//2
		if (key === currentChar) {
			  //3
			  if (leftPadding.length > 0) {
				setLeftPadding(leftPadding.substring(1));
			  }
			  updatedOutgoingChars += currentChar;
			  setOutgoingChars(updatedOutgoingChars);
			  setCurrentChar(incomingChars.charAt(0));
			  updatedIncomingChars = incomingChars.substring(1);
			/*
			  if (updatedIncomingChars.split(' ').length < 10) {
				updatedIncomingChars +=' ' + generateeng();
				updatedIncomingHanChars +=' ' + generatehan();
			  }
			  */
			  setIncomingChars(updatedIncomingChars);
			  if (currentChar === ' ') {
				  i=0;
				  while (incomingHanChars.charAt(i)!=' ') {
					  i++;
				  }
				  for (j=0; j<=i; j++) {
					  updatedOutgoingHanChars += incomingHanChars.charAt(j);
					  setOutgoingHanChars(updatedOutgoingHanChars);
					  setCurrentHanChar(incomingHanChars.charAt(j+1));
					  updatedIncomingHanChars = incomingHanChars.substring(j+1);
					  setIncomingHanChars(updatedIncomingHanChars);
				  }
			  }
		}
	});
  return (
    <div className="App">
      <header className="App-header">
<p className="HanCharacter">
  <span className="HanCharacter-out">
    {(leftPadding + outgoingHanChars).slice(-20)}
  </span>
  <span className="HanCharacter-current">{currentHanChar}</span>
  <span className="HanCharacter-out">{incomingHanChars.substr(1, 10)}</span>
</p>
<p className="Character">
  <span className="Character-out">
    {(leftPadding + outgoingChars).slice(-20)}
  </span>
  <span className="Character-current">{currentChar}</span>
  <span className="Character-out">{incomingChars.substr(0, 20)}</span>
</p>
      </header>
    </div>
  );
}

export default App;
