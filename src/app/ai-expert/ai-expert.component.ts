import { Component } from '@angular/core';
import { ANTHROPIC_CERTIFICATES, GOOGLE_AI_CERTIFICATE_URL } from './certificates';

@Component({
  selector: 'app-ai-expert',
  templateUrl: './ai-expert.component.html',
  standalone: false,
})
export class AiExpertComponent {
  readonly googleAiCertUrl = GOOGLE_AI_CERTIFICATE_URL;
  readonly anthropicCertificates = ANTHROPIC_CERTIFICATES;
}
