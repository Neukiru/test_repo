class AudioStreamProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      outputs = inputs
      console.log(outputs)
      return true
    }
  }
  
  registerProcessor('audio-stream-processor', AudioStreamProcessor)