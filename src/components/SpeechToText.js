
import SpeechRecognition, { useSpeechRecognition, } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import '../App.css'

const SpeechToText = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });
    const [isListening, setIsListening] = useState(false)

    const startListening = () => {
        setIsListening(!isListening)
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }

    const stopListening = () => {
        setIsListening(false)
        SpeechRecognition.stopListening()
    }

    const resetListening = () => {
        setIsListening(false)
        resetTranscript()
    }

    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }


    return (
        <>
            <div className="speech-to-text-container">
                <h2>Speech to Text Input</h2>

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-container">
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}> {!isListening ? 'Start Listening' : 'Listening...'}</button>
                    <button onClick={stopListening}>Stop Listening</button>
                    <button className='reset-btn' onClick={resetListening}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default SpeechToText;