import { Supadata } from '@supadata/js';

// Initialize the client with your API key
const supadata = new Supadata({
  apiKey: process.env.SUPADATA_API_KEY || 'YOUR_API_KEY',
});

async function getSpeechToText(mediaUrl: string) {
  try {
    // Request transcription from a public URL (YouTube, TikTok, or direct audio/video files)
    const transcriptResult = await supadata.transcript({
      url: mediaUrl,
      text: true,      // true: returns plain text; false: returns timestamped segments
      mode: 'auto',    // 'native' (captions), 'generate' (AI Whisper transcription), or 'auto'
      lang: 'en',      // optional: ISO 639-1 language code
    });

    // Case A: Transcript returned immediately
    if ('content' in transcriptResult) {
      console.log('Transcription completed successfully:');
      return transcriptResult.content;
    }

    // Case B: Large file requires handling an asynchronous background job
    if ('jobId' in transcriptResult) {
      console.log(`Job started. Polling for results with Job ID: ${transcriptResult.jobId}`);
      
      let attempts = 0;
      const maxAttempts = 20;

      while (attempts < maxAttempts) {
        // Wait 3 to 5 seconds between checks
        await new Promise((resolve) => setTimeout(resolve, 4000));
        
        const jobResult = await supadata.transcript.getJobStatus(transcriptResult.jobId);
        
        if (jobResult.status === 'completed') {
          console.log('Asynchronous transcription finished!');
          return jobResult.content;
        } else if (jobResult.status === 'failed') {
          throw new Error('Transcription job failed on Supadata servers.');
        }

        attempts++;
      }
      throw new Error('Transcription timed out.');
    }
  } catch (error) {
    console.error('Error fetching transcript:', error);
    throw error;
  }
}

// Example usage:
// (Supports YouTube, X/Twitter, Instagram Reels, TikTok, or direct audio file URLs up to 1GB)
const targetUrl = 'https://youtube.com';
getSpeechToText(targetUrl).then(console.log);