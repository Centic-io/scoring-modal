# Centic Scoring modal
React modal for calculating custom wallet score.

## Installation

    npm install @centic-io/scoring-modal

## Usage

### Setup the Scoring context

Wrap your app inside **ScoringContextProvider** with the api key created.
API Key can be created [here](https://console.centic.io)

    import { ScoringContextProvider } from  "@centic-io/scoring-modal";
    
    export const App = () => {
    	return (
     	<ScoringContextProvider  apiKey="your api key">
			<YourApp />
		</ScoringContextProvider>
	  );
	};
### Start calculating the score

The score calculator model can be invoked by calling the *start()* function provided in **useScoringContext** hook. The score calculated will be saved within the score key provided in the hook.

    import  React, { useEffect } from  "react";
    import { useScoringContext } from  "@centic-io/scoring-modal";
    
	function  Page() {
		const { start, score } =  useScoringContext();
		useEffect(() => {
			if (score) {
				console.log(`Your score: ${score}`);
			}
		}, [score]);
		return  <button  onClick={start}>Calculate credit score</button>;
	}
	export default Page;
    
