import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  gifUrl: string;
}

const techStack: Skill[] = [
  { name: 'React.js', gifUrl: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif' },
  { name: 'JavaScript', gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXl5OGY2Yjl4eDlvd2dkNmZkMnR6NWp5eXphdndvdmJoYmxteHR0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SvFocn0wNMx0iv2rYz/giphy.gif' },
  { name: 'HTML', gifUrl: 'https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif' },
  { name: 'Java', gifUrl: '/attached_assets/image_1756543516610.png' },
  { name: 'Spring Boot', gifUrl: 'https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif' },
  { name: 'Tailwind CSS', gifUrl: 'https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif' },
  { name: 'MongoDB', gifUrl: 'https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif' },
  { name: 'Python', gifUrl: 'https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif' },
  { name: 'C++', gifUrl: 'https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif' }
];

const tools: Skill[] = [
  { name: 'VS Code', gifUrl: 'https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif' },
  { name: 'GitHub', gifUrl: 'https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif' },
  { name: 'Figma', gifUrl: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif' },
  { name: 'AWS', gifUrl: 'https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif' },
  { name: 'Docker', gifUrl: 'https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif' }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* TechStack Section */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-primary mb-8">TechStack</h2>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech) => (
                  <Card key={tech.name} className="skill-card card-hover" data-testid={`skill-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <CardContent className="p-6 text-center">
                      <img 
                        src={tech.gifUrl} 
                        alt={`${tech.name} animation`} 
                        className="w-12 h-12 mx-auto mb-3 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <h3 className="text-sm font-medium text-foreground">{tech.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* About & Tools Section */}
            <div className="animate-on-scroll">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Full Stack Developer skilled in Java, Spring Boot, React.js, and modern web technologies, 
                  with a strong passion for AI & Data Science.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Tools</h3>
                <div className="grid grid-cols-5 gap-4">
                  {tools.map((tool) => (
                    <Card key={tool.name} className="skill-card card-hover" data-testid={`tool-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      <CardContent className="p-4 text-center">
                        <img 
                          src={tool.gifUrl} 
                          alt={`${tool.name} animation`} 
                          className="w-8 h-8 mx-auto mb-2 rounded-lg object-cover"
                          loading="lazy"
                        />
                        <h4 className="text-xs font-medium text-foreground">{tool.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
