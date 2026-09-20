import { Supadata } from '@supadata/js';

const supadata = new Supadata({
  apiKey: process.env.SUPADATA_API_KEY!,
});

async function transcribeRuntimeVideo(cloudStorageUrl: string) {
  const transcriptResult = await supadata.transcript({
    url: cloudStorageUrl, 
    text: true,
    // Forces AI Whisper transcription since local files lack captions
    mode: 'generate',
  });

  return transcriptResult;
}