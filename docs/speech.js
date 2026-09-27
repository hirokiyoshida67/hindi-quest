// Browser-provided speech only: no app-owned API endpoint or credential.
const speechState = { voices: [], selected: '', current: null, timer: null, serial: 0 };
function speechMessage(message) {
  document.querySelectorAll('[data-audio-status]').forEach(el => { el.textContent = message; });
}
function refreshHindiVoices() {
  const synth = window.speechSynthesis;
  const all = synth ? synth.getVoices() : [];
  speechState.voices = all.filter(v => /^hi(?:-|_|$)/i.test(v.lang)).sort((a,b) => Number(b.localService)-Number(a.localService));
  if (!speechState.voices.some(v => (v.voiceURI || v.name) === speechState.selected)) {
    speechState.selected = speechState.voices[0] ? (speechState.voices[0].voiceURI || speechState.voices[0].name) : '';
  }
  const select = document.getElementById('voiceSelect');
  select.replaceChildren();
  if (!speechState.voices.length) select.add(new Option('No Hindi voice available', ''));
  speechState.voices.forEach(v => select.add(new Option(v.name + (v.localService ? ' — on device' : ' — browser online service'), v.voiceURI || v.name)));
  select.value = speechState.selected;
  select.disabled = !speechState.voices.length;
  document.getElementById('voiceStatus').textContent = !synth ? 'This browser does not support speech playback.' : speechState.voices.length ? `${speechState.voices.length} Hindi voice(s) available. Choose one and press Test Hindi audio.` : `${all.length} voices detected; no Hindi voice is available. Install a Hindi system voice, restart the browser, then press Refresh voices. If voices are still loading, wait a moment and refresh.`;
}
function stopHindiSpeech() {
  speechState.serial++;
  clearTimeout(speechState.timer);
  speechState.current = null;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}
function speak(text, rate) {
  stopHindiSpeech();
  refreshHindiVoices();
  const synth = window.speechSynthesis;
  if (!synth) { speechMessage('Speech playback is unavailable in this browser. Try Safari or Chrome.'); return; }
  const voice = speechState.voices.find(v => (v.voiceURI || v.name) === speechState.selected);
  if (!voice) { speechMessage('No Hindi voice is available. Open Pronunciation settings at the top of this page. Install a Hindi voice in macOS Accessibility → Read & Speak (or Spoken Content), restart the browser, and try again.'); return; }
  const id = speechState.serial;
  const utterance = new SpeechSynthesisUtterance(text);
  speechState.current = utterance; // Keep a reference for the lifetime of playback.
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = rate;
  utterance.volume = 1;
  const done = () => { clearTimeout(speechState.timer); speechState.current = null; };
  utterance.onstart = () => { if (id !== speechState.serial) return; clearTimeout(speechState.timer); speechMessage('Playing with ' + voice.name + '. If silent, check your volume and audio output.'); };
  utterance.onend = () => { if (id !== speechState.serial) return; done(); speechMessage('Playback finished.'); };
  utterance.onerror = e => {
    if (id !== speechState.serial) return;
    done();
    if (['interrupted','canceled'].includes(e.error)) return;
    const hints = {
      'not-allowed': 'Click Listen again directly, or try another browser.',
      'voice-unavailable': 'Choose another Hindi voice in Pronunciation settings.',
      'language-unavailable': 'Install a Hindi system voice and restart the browser.',
      'network': 'The browser online voice could not connect. Choose an on-device voice or check your connection.',
      'audio-hardware': 'Check your speakers and audio output in system settings.',
      'audio-busy': 'Close other audio apps and try again.'
    };
    speechMessage('Audio error: ' + e.error + '. ' + (hints[e.error] || 'Try another Hindi voice or restart the browser.'));
  };
  speechMessage('Starting ' + voice.name + (voice.localService ? '…' : ' using the browser online speech service…'));
  speechState.timer = setTimeout(() => {
    if (id !== speechState.serial) return;
    stopHindiSpeech();
    speechMessage('The voice did not start within 8 seconds. Try another Hindi voice, restart the browser, or open this page in Safari.');
  }, 8000);
  try { synth.resume(); synth.speak(utterance); }
  catch (e) { stopHindiSpeech(); speechMessage('Could not start speech: ' + e.message); }
}
document.getElementById('voiceSelect').onchange = e => { stopHindiSpeech(); speechState.selected = e.target.value; speechMessage('Voice selected. Press Test Hindi audio.'); };
document.getElementById('refreshVoices').onclick = refreshHindiVoices;
document.getElementById('testVoice').onclick = () => speak('नमस्ते। मैं हिंदी सीख रहा हूँ।', .85);
document.getElementById('stopVoice').onclick = () => { stopHindiSpeech(); speechMessage('Playback stopped.'); };
if (window.speechSynthesis) window.speechSynthesis.addEventListener('voiceschanged', refreshHindiVoices);
window.addEventListener('pagehide', stopHindiSpeech);
refreshHindiVoices();
setTimeout(refreshHindiVoices, 750);
