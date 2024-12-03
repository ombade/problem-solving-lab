import { sprintf } from 'sprintf-js';
import { Tracer } from 'core/tracers';
import { LogRenderer } from 'core/renderers';

class LogTracer extends Tracer {
  getRendererClass() {
    return LogRenderer;
  }

  set(log = '') {
    this.log = log;
    super.set();
  }

  print(message) {
    this.log += message;
    this.speak(message); // Add text-to-speech here
  }

  println(message) {
    this.print(message + '\n');
  }

  printf(format, ...args) {
    this.print(sprintf(format, ...args));
  }

  // Silent log method (no text-to-speech)
  silentPrint(message) {
    this.log += message;
  }

  silentPrintln(message) {
    this.silentPrint(message + '\n');
  }

  // Text-to-speech function
  speak(text) {
    if ('speechSynthesis' in window) {
      this.stopSpeaking(); // Stop any ongoing speech before starting new one
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    } else {
      console.error('Text-to-Speech is not supported in this browser.');
    }
  }

  // Stop any ongoing speech
  stopSpeaking() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }
}

export default LogTracer;

