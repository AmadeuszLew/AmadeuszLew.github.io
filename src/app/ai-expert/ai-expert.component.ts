import { Component } from '@angular/core';

interface Certificate {
  title: string;
  verifyUrl: string;
  pdfPath: string;
  imagePath: string;
}

@Component({
  selector: 'app-ai-expert',
  templateUrl: './ai-expert.component.html',
  standalone: false,
})
export class AiExpertComponent {
  readonly googleAiCertUrl = 'https://drive.google.com/file/d/1JcUvhvkCMNn7f-CtTbLqIdhbHtyjmw28/view?usp=sharing';

  readonly anthropicCertificates: Certificate[] = [
    {
      title: 'Claude Code 101',
      verifyUrl: 'https://verify.skilljar.com/c/gx7nyx2rxrbz',
      pdfPath: 'assets/certificates/claude_code_101.pdf',
      imagePath: 'assets/certificates/claude_code_101.png',
    },
    {
      title: 'Claude Code in Action',
      verifyUrl: 'https://verify.skilljar.com/c/serpri2ko8at',
      pdfPath: 'assets/certificates/claude_code_in_action.pdf',
      imagePath: 'assets/certificates/claude_code_in_action.png',
    },
    {
      title: 'Introduction to Agent Skills',
      verifyUrl: 'https://verify.skilljar.com/c/bpwi94vhcghs',
      pdfPath: 'assets/certificates/introduction_to_agent_skills.pdf',
      imagePath: 'assets/certificates/introduction_to_agent_skills.png',
    },
  ];
}
