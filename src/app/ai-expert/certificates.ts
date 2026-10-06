export interface Certificate {
  title: string;
  verifyUrl: string;
  pdfPath: string;
  imagePath: string;
}

export const GOOGLE_AI_CERTIFICATE_URL = 'https://drive.google.com/file/d/1JcUvhvkCMNn7f-CtTbLqIdhbHtyjmw28/view?usp=sharing';

export const ANTHROPIC_CERTIFICATES: Certificate[] = [
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
